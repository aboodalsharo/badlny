#!/usr/bin/env python3
"""Import public course names, codes, and section numbers from saved JUST schedules.

The extractor deliberately ignores instructor, room, capacity, registration, and
student data in the saved pages. It defaults to a dry run; pass --write to update
coursesData.js.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from collections import defaultdict
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from typing import Any


FACULTIES = {
    "العمارة و التصميم": ("arch", "كلية العمارة والتصميم", "Faculty of Architecture and Design", "🏛️"),
    "التمريض": ("nursing", "كلية التمريض", "Faculty of Nursing", "🩺"),
    "الزراعة": ("agriculture", "كلية الزراعة", "Faculty of Agriculture", "🌱"),
    "الصيدلة": ("pharmacy", "كلية الصيدلة", "Faculty of Pharmacy", "💊"),
    "الطب البيطري": ("vet", "كلية الطب البيطري", "Faculty of Veterinary Medicine", "🐾"),
    "العلوم الطبية التطبيقية": ("ams", "كلية العلوم الطبية التطبيقية", "Faculty of Applied Medical Sciences", "🩺"),
    "الهندسة": ("engineering", "كلية الهندسة", "Faculty of Engineering", "⚙️"),
    "طب الأسنان": ("dentistry", "كلية طب الأسنان", "Faculty of Dentistry", "🦷"),
    "الطب": ("medicine", "كلية الطب", "Faculty of Medicine", "🩺"),
    "معهد النانوتكنولوجي": ("nano", "معهد النانوتكنولوجي", "Nanotechnology Institute", "🔬"),
}

# The saved Civil Engineering page is a byte-for-byte copy of Chemical
# Engineering's selected schedule. Keep the department visible but empty until
# the correct schedule is provided; never mislabel Chemical Engineering courses.
EMPTY_DEPARTMENTS = {("الهندسة", "الهندسة المدنية")}

ARRAY_PATTERNS = {
    "faculties": re.compile(r"rootObj\.JUST_FACULTIES\s*=\s*(\[.*?\]);\s*var JUST_FACULTIES", re.S),
    "courses": re.compile(r"rootObj\.JUST_COURSES\s*=\s*(\[.*?\]);\s*var JUST_COURSES", re.S),
}
LABELS = {
    "رقم السطر": "line",
    "رمز المساق": "code",
    "اسم المساق": "nameAr",
}


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("\xa0", " ")).strip()


@dataclass
class TableCapture:
    kind: str
    rows: list[list[str]] = field(default_factory=list)
    row: list[str] | None = None
    cell_parts: list[str] | None = None

    def start_row(self) -> None:
        self.row = []
        self.rows.append(self.row)

    def start_cell(self) -> None:
        if self.row is not None:
            self.cell_parts = []

    def end_cell(self) -> None:
        if self.row is not None and self.cell_parts is not None:
            self.row.append(clean("".join(self.cell_parts)))
        self.cell_parts = None

    def add_text(self, value: str) -> None:
        if self.cell_parts is not None:
            self.cell_parts.append(value)


class ScheduleParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.selects: dict[str, list[dict[str, Any]]] = {}
        self.active_select: dict[str, Any] | None = None
        self.active_option: dict[str, Any] | None = None
        self.tables: list[TableCapture] = []
        self.course_tables: list[TableCapture] = []
        self.section_tables: list[TableCapture] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_map = dict(attrs)
        if tag == "select":
            select_id = attrs_map.get("id", "") or ""
            if select_id.endswith("ddlFaculty") or select_id.endswith("ddlDept"):
                self.active_select = {"id": select_id, "choices": []}
        elif tag == "option" and self.active_select is not None:
            self.active_option = {
                "value": attrs_map.get("value", "") or "",
                "selected": "selected" in attrs_map,
                "text": [],
            }

        if tag == "table":
            table_id = attrs_map.get("id", "") or ""
            classes = set((attrs_map.get("class", "") or "").split())
            if table_id == "innerTable":
                capture = TableCapture("course")
                self.tables.append(capture)
                self.course_tables.append(capture)
            elif "gvSections" in classes:
                capture = TableCapture("sections")
                self.tables.append(capture)
                self.section_tables.append(capture)
        elif self.tables:
            current = self.tables[-1]
            if tag == "tr":
                current.start_row()
            elif tag in ("td", "th"):
                current.start_cell()

    def handle_endtag(self, tag: str) -> None:
        if tag == "option" and self.active_option is not None:
            self.active_option["text"] = clean("".join(self.active_option["text"]))
            self.active_select["choices"].append(self.active_option)
            self.active_option = None
        elif tag == "select" and self.active_select is not None:
            self.selects[self.active_select["id"]] = self.active_select["choices"]
            self.active_select = None

        if not self.tables:
            return
        current = self.tables[-1]
        if tag in ("td", "th"):
            current.end_cell()
        elif tag == "table":
            self.tables.pop()

    def handle_data(self, data: str) -> None:
        if self.active_option is not None:
            self.active_option["text"].append(data)
        if self.tables:
            self.tables[-1].add_text(data)


def selected_text(parser: ScheduleParser, suffix: str) -> str:
    for select_id, choices in parser.selects.items():
        if select_id.endswith(suffix):
            for choice in choices:
                if choice["selected"]:
                    return clean(choice["text"])
    return ""


def extract_page(path: Path) -> dict[str, Any]:
    parser = ScheduleParser()
    parser.feed(path.read_text(encoding="utf-8-sig", errors="replace"))
    faculty_name = selected_text(parser, "ddlFaculty")
    department_name = selected_text(parser, "ddlDept")
    if not faculty_name or not department_name:
        raise ValueError(f"Missing selected faculty or department: {path}")

    if len(parser.course_tables) != len(parser.section_tables):
        raise ValueError(
            f"Course/section table count differs in {path.name}: "
            f"{len(parser.course_tables)} courses, {len(parser.section_tables)} sections"
        )

    courses = []
    for course_table, section_table in zip(parser.course_tables, parser.section_tables):
        fields: dict[str, str] = {}
        for row in course_table.rows:
            if len(row) >= 2:
                label = clean(row[0]).rstrip(":：").strip()
                if label in LABELS:
                    fields[LABELS[label]] = clean(row[1])
        sections = []
        for row in section_table.rows[1:]:
            if row:
                match = re.match(r"^(\d+)(?=\D|$)", clean(row[0]))
                if match:
                    sections.append(int(match.group(1)))
        sections = sorted(set(sections))
        if not all(fields.get(key) for key in ("line", "code", "nameAr")):
            raise ValueError(f"Incomplete public course fields in {path.name}: {fields!r}")
        if not sections:
            raise ValueError(f"No numeric section numbers found for a course in {path.name}")
        courses.append({**fields, "sections": sections})

    return {
        "path": path,
        "facultyName": faculty_name,
        "departmentName": department_name,
        "courses": courses,
    }


def stable_department_id(faculty_id: str, name: str) -> str:
    digest = hashlib.sha1(f"{faculty_id}|{name}".encode("utf-8")).hexdigest()[:8]
    return f"dept_{faculty_id}_{digest}"


def parse_existing(source: str, key: str) -> list[dict[str, Any]]:
    match = ARRAY_PATTERNS[key].search(source)
    if not match:
        raise ValueError(f"Could not locate JUST_{key.upper()} array in coursesData.js")
    parsed = json.loads(match.group(1))
    if not isinstance(parsed, list):
        raise ValueError(f"JUST_{key.upper()} is not an array")
    return parsed


def merge_catalog(root: Path, source_dir: Path) -> tuple[str, dict[str, Any]]:
    source_path = root / "coursesData.js"
    original = source_path.read_text(encoding="utf-8")
    faculties = parse_existing(original, "faculties")
    courses = parse_existing(original, "courses")
    pages = [extract_page(path) for path in sorted(source_dir.rglob("*.html"))]
    if not pages:
        raise ValueError(f"No .html schedule pages found under {source_dir}")

    # Prefer the page whose filename agrees with its selected department. The
    # extra Engineering/Civil page is intentionally discarded as a false label.
    by_department: dict[tuple[str, str], list[dict[str, Any]]] = defaultdict(list)
    for page in pages:
        if page["facultyName"] not in FACULTIES:
            raise ValueError(f"Unmapped faculty {page['facultyName']!r} in {page['path'].name}")
        by_department[(page["facultyName"], page["departmentName"])].append(page)

    unique_pages: list[dict[str, Any]] = []
    duplicates: list[tuple[str, str]] = []
    for (faculty_name, department_name), group in by_department.items():
        seen: dict[str, dict[str, Any]] = {}
        for page in group:
            fingerprint = json.dumps(page["courses"], ensure_ascii=False, sort_keys=True)
            if fingerprint in seen:
                previous = seen[fingerprint]
                page_stem = clean(page["path"].stem)
                previous_stem = clean(previous["path"].stem)
                if page_stem == department_name and previous_stem != department_name:
                    unique_pages.remove(previous)
                    unique_pages.append(page)
                    seen[fingerprint] = page
                    duplicates.append((previous["path"].name, page["path"].name))
                else:
                    duplicates.append((page["path"].name, previous["path"].name))
                continue
            seen[fingerprint] = page
            unique_pages.append(page)

    faculty_by_label: dict[str, dict[str, Any]] = {}
    for source_name, (faculty_id, display_name, name_en, icon) in FACULTIES.items():
        faculty = {
            "id": faculty_id,
            "nameAr": display_name,
            "nameEn": name_en,
            "icon": icon,
            "departments": [],
        }
        faculty_by_label[source_name] = faculty

    departments_by_key: dict[tuple[str, str], dict[str, Any]] = {}
    for page in unique_pages:
        source_name = page["facultyName"]
        department_name = page["departmentName"]
        faculty = faculty_by_label[source_name]
        department_id = stable_department_id(faculty["id"], department_name)
        key = (source_name, department_name)
        if key not in departments_by_key:
            department = {
                "id": department_id,
                "nameAr": department_name,
                "nameEn": "",
                "icon": faculty["icon"],
                "coursesCount": 0,
            }
            departments_by_key[key] = department
            faculty["departments"].append(department)

        for raw_course in page["courses"]:
            line = raw_course["line"]
            course_id = f"schedule_{faculty['id']}_{department_id}_{line}"
            courses.append({
                "id": course_id,
                "code": raw_course["code"],
                "codeEn": "",
                "nameAr": raw_course["nameAr"],
                "line": line,
                "facultyId": faculty["id"],
                "facultyName": faculty["nameAr"],
                "departmentId": department_id,
                "departmentName": department_name,
                "sections": raw_course["sections"],
                "totalSections": len(raw_course["sections"]),
            })
            departments_by_key[key]["coursesCount"] += 1

    for faculty_name, department_name in sorted(EMPTY_DEPARTMENTS):
        faculty = faculty_by_label[faculty_name]
        key = (faculty_name, department_name)
        if key not in departments_by_key:
            department = {
                "id": stable_department_id(faculty["id"], department_name),
                "nameAr": department_name,
                "nameEn": "",
                "icon": faculty["icon"],
                "coursesCount": 0,
            }
            departments_by_key[key] = department
            faculty["departments"].append(department)

    old_faculty_names = {item.get("nameAr") for item in faculties}
    if old_faculty_names.intersection(item["nameAr"] for item in faculty_by_label.values()):
        raise ValueError("An imported faculty already exists in the current catalog; review before merging")
    new_lines = [course["line"] for course in courses[len(parse_existing(original, "courses")):]]
    if len(new_lines) != len(set(new_lines)):
        raise ValueError("Repeated course line numbers remain after duplicate-page removal")
    existing_courses = parse_existing(original, "courses")
    existing_lines = {course.get("line") for course in existing_courses}
    collision_lines = sorted(existing_lines.intersection(new_lines))
    if collision_lines:
        raise ValueError(f"Imported course lines conflict with the existing catalog: {collision_lines[:10]}")
    all_ids = [course.get("id") for course in existing_courses + courses[len(existing_courses):]]
    if len(all_ids) != len(set(all_ids)):
        raise ValueError("The merged catalog would contain duplicate course IDs")

    for faculty in faculty_by_label.values():
        if faculty["departments"]:
            faculties.append(faculty)

    merged_text = original
    for key, values in (("faculties", faculties), ("courses", courses)):
        match = ARRAY_PATTERNS[key].search(merged_text)
        if not match:
            raise ValueError(f"Could not locate JUST_{key.upper()} array while building updated source")
        merged_text = merged_text[:match.start(1)] + json.dumps(values, ensure_ascii=False, indent=2) + merged_text[match.end(1):]
    merged_text = re.sub(
        r"إجمالي المساقات: .*? مساق موزعة على .*?\n",
        f"إجمالي المساقات: {len(courses)} مساق موزعة على {len(faculties)} كلية وجهة\n",
        merged_text,
        count=1,
    )

    stats = {
        "sourcePages": len(pages),
        "uniquePages": len(unique_pages),
        "duplicatePages": duplicates,
        "facultiesAdded": len([faculty for faculty in faculty_by_label.values() if faculty["departments"]]),
        "departmentsAdded": sum(len(faculty["departments"]) for faculty in faculty_by_label.values()),
        "coursesAdded": len(new_lines),
        "totalFaculties": len(faculties),
        "totalDepartments": sum(len(faculty.get("departments", [])) for faculty in faculties),
        "totalCourses": len(courses),
    }
    return merged_text, stats


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, required=True, help="Folder containing extracted schedule HTML files")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parent.parent, help="Project root")
    parser.add_argument("--write", action="store_true", help="Write the merged data into coursesData.js")
    args = parser.parse_args()

    try:
        merged_text, stats = merge_catalog(args.root, args.source)
        print(json.dumps(stats, ensure_ascii=True, indent=2))
        if args.write:
            target = args.root / "coursesData.js"
            original = target.read_bytes()
            newline = "\r\n" if b"\r\n" in original else "\n"
            with target.open("w", encoding="utf-8", newline="") as handle:
                handle.write(merged_text.replace("\r\n", "\n").replace("\n", newline))
            print(f"Updated {target}")
        else:
            print("Dry run only; pass --write to update coursesData.js.")
        return 0
    except Exception as error:
        print(f"Import stopped without changes: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
