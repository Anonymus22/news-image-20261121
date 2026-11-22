// Render poster.html (1024x1024) to entry.png with headless Chrome.
// Usage: node render.mjs
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(here, 'package.json'));
const puppeteer = require('/home/hatch/workspace/makefun/radar/shots-tool/node_modules/puppeteer');

const html = path.join(here, 'poster.html');
const out = path.join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
    '--force-color-profile=srgb',
  ],
});
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
await page.goto('file://' + html, { waitUntil: 'load', timeout: 60000 });
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
await browser.close();
const st = fs.statSync(out);
console.log('wrote', out, st.size, 'bytes');
