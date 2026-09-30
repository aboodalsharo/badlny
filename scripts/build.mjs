import { readFile, writeFile, mkdir, copyFile, readdir, lstat } from 'node:fs/promises';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogSource = await readFile(path.join(root, 'coursesData.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(catalogSource, sandbox, { timeout: 1000 });
const catalog = { courses: sandbox.JUST_COURSES, faculties: sandbox.JUST_FACULTIES };
if (!Array.isArray(catalog.courses) || !catalog.courses.length) throw new Error('Invalid course catalog');
await mkdir(path.join(root, 'netlify/functions/_shared'), { recursive: true });
await writeFile(path.join(root, 'netlify/functions/_shared/catalog.json'), JSON.stringify(catalog));
await mkdir(path.join(root, 'public'), { recursive: true });
const publicFiles = ['index.html', 'app.js', 'availability.js', 'coursesData.js', 'style.css', 'redesign.css', '_headers'];
for (const name of await readdir(path.join(root, 'public'))) {
  if (!publicFiles.includes(name) || !(await lstat(path.join(root, 'public', name))).isFile()) {
    throw new Error(`Unexpected publish artifact: ${name}. Review it before deploying.`);
  }
}
for (const name of publicFiles) {
  await copyFile(path.join(root, name), path.join(root, 'public', name));
}
console.log(`Built ${catalog.courses.length} courses; publish directory contains public assets only.`);
