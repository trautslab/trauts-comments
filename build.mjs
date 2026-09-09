import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import { dirname } from 'node:path';

const files = (await readdir(new URL('./', import.meta.url)))
  .filter(name => /^bundle[.]part[.][0-9]+$/.test(name))
  .sort();
const parts = await Promise.all(files.map(name => readFile(new URL(`./${name}`, import.meta.url), 'utf8')));
const bundle = JSON.parse(parts.join(''));
const outDir = new URL('./dist/', import.meta.url);
await mkdir(outDir, { recursive: true });

for (const [name, payload] of Object.entries(bundle)) {
  const target = new URL(`./dist/${name}`, import.meta.url);
  await mkdir(dirname(target.pathname), { recursive: true });
  const bytes = gunzipSync(Buffer.from(payload, 'base64'));
  await writeFile(target, bytes);
  console.log(`wrote ${name} (${bytes.length} bytes)`);
}
