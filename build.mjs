import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';
import { dirname } from 'node:path';

const bundle = JSON.parse(await readFile(new URL('./bundle.json', import.meta.url), 'utf8'));
const outDir = new URL('./dist/', import.meta.url);
await mkdir(outDir, { recursive: true });

for (const [name, payload] of Object.entries(bundle)) {
  const target = new URL(`./dist/${name}`, import.meta.url);
  await mkdir(dirname(target.pathname), { recursive: true });
  const bytes = gunzipSync(Buffer.from(payload, 'base64'));
  await writeFile(target, bytes);
  console.log(`wrote ${name} (${bytes.length} bytes)`);
}
