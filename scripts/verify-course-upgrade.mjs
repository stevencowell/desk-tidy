import { chromium } from 'file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const routes = ['weeks1-2', 'weeks3-4', 'weeks5-6', 'weeks7-8', 'weeks9-10'];
const browser = await chromium.launch({ headless: true, channel: 'msedge' });
let failed = false;

for (const route of routes) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:8766/${route}/index.html`, { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => ({
    questions: document.querySelectorAll('.question-card').length,
    groups: [...document.querySelectorAll('.interleaved-check-group')].map(group => group.querySelectorAll('.question-card').length),
    videos: document.querySelectorAll('.section-video').length,
    presentation: document.querySelector('.module-support-panel a[download]')?.getAttribute('href'),
    openLarger: document.querySelectorAll('.open-larger').length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  const pass = result.questions === 30 && result.groups.join(',') === '10,10,10' && result.videos === 3 && result.presentation && result.openLarger >= 1 && !result.overflow && errors.length === 0;
  failed ||= !pass;
  console.log(JSON.stringify({ route, pass, errors, ...result }));
  await page.close();
}

await browser.close();
if (failed) process.exitCode = 1;
