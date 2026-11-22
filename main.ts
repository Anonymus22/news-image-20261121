// THE WORLD TODAY — Saturday, 21 November 2026.
// Deterministic poster generator: copies the pre-rendered poster image
// (poster.html rendered with headless Chrome) to $MAKEFUN_OUTPUT_DIR/entry.png.
// The poster is fully self-contained (inline SVG, no network, no fonts
// beyond system defaults), so the output is byte-identical every run.
import { copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.argv[2] || '.';
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');

if (!existsSync(src)) {
  console.error('entry.png not found — run `node render.mjs` first');
  process.exit(1);
}
copyFileSync(src, dst);
console.log('wrote', dst);
