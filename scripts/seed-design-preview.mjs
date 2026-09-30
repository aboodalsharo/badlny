// Optional samples for the loopback-only, in-memory design preview.
// Never imports credentials or connects to a database.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const base = 'http://127.0.0.1:4173';
const homepage = await (await fetch(base)).text();
if (!homepage.includes('الطلبات هنا للتجربة فقط')) throw new Error('Samples require the in-memory local preview.');
const existing = await (await fetch(`${base}/api/requests`)).json();
if (!Array.isArray(existing)) throw new Error('Local requests API is unavailable.');
if (existing.length) throw new Error('Preview already contains requests; preserving them.');
const { csrfToken } = await (await fetch(`${base}/api/session`)).json();
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await readFile(new URL('../coursesData.js', import.meta.url), 'utf8'), sandbox);
const courses = sandbox.JUST_COURSES;
const twoSectionCourse = (faculty, name) => courses.find(c => c.facultyId === faculty && c.nameAr.includes(name) && c.sections?.length >= 2)
  || courses.find(c => c.facultyId === faculty && c.sections?.length >= 2);
const choices = [
  [twoSectionCourse('cit', 'تراكيب البيانات'), 'ليان · طلب تجريبي', 'معي محاضرة صباحية وبفضّل شعبة بوقت متأخر.', false],
  [twoSectionCourse('cit', 'تراكيب البيانات'), 'أحمد · طلب تجريبي', 'بدي شعبة صباحية عشان أرتّب يومي.', true],
  [twoSectionCourse('sci', 'الجبر'), 'نور · طلب تجريبي', 'بفضّل أحد وثلاثاء وخميس.', false],
  [twoSectionCourse('lang', ''), 'عمر · طلب تجريبي', '', false],
  [twoSectionCourse('eng', ''), 'سارة · طلب تجريبي', 'التبديل لتفادي تعارض مع المختبر.', false],
  [courses.find(c => c.facultyId !== 'cit' && c.facultyId !== 'sci' && c.facultyId !== 'lang' && c.sections?.length >= 2), 'محمد · طلب تجريبي', '', false]
];
let count = 0;
for (const [course, studentName, notes, reverse] of choices) {
  if (!course) continue;
  const response = await fetch(`${base}/api/requests`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
    body: JSON.stringify({ courseId: course.id, studentName, notes, currentSection: String(course.sections[reverse ? 1 : 0]),
      desiredSections: [String(course.sections[reverse ? 0 : 1])], phone: '0790000000', pin: 'demo2026', consent: true })
  });
  if (!response.ok) throw new Error(`Preview sample rejected (${response.status}).`);
  count++;
}
console.log(`${count} in-memory design samples ready. Sample PIN: demo2026. No database changes.`);
