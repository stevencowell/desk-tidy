import { chromium } from 'file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const routes = [
  { route: 'weeks1-2', visuals: 6, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks3-4', visuals: 3, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks5-6', visuals: 4, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks7-8', visuals: 7, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks9-10', visuals: 4, matchedVideos: 2, videoGaps: 1 }
];
const browser = await chromium.launch({ headless: true, channel: 'msedge' });
let failed = false;

for (const expectation of routes) {
  const { route } = expectation;
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:8766/${route}/index.html`, { waitUntil: 'networkidle' });
  const result = await page.evaluate(() => ({
    questions: document.querySelectorAll('.question-card').length,
    groups: [...document.querySelectorAll('.interleaved-check-group')].map(group => group.querySelectorAll('.question-card').length),
    videos: document.querySelectorAll('.section-video').length,
    matchedVideos: document.querySelectorAll('.section-video[data-video-outcome="MATCHED"]').length,
    videoGaps: document.querySelectorAll('.section-video[data-video-outcome="GAP"]').length,
    initialIframes: document.querySelectorAll('.section-video iframe').length,
    activities: document.querySelectorAll('.section-activity-link').length,
    presentation: document.querySelector('a[href$=".pptx"]')?.getAttribute('href'),
    visuals: document.querySelectorAll('.learning-visual').length,
    visualIds: [...document.querySelectorAll('.learning-visual')].map(figure => figure.dataset.visualId),
    webpVisuals: document.querySelectorAll('.learning-visual img[src$=".webp"]').length,
    openLarger: document.querySelectorAll('.open-larger').length,
    visibleSharedNavs: [...document.querySelectorAll('.course-family-nav')].filter(nav => nav.getClientRects().length).length,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
  }));
  const pass = result.questions === 30
    && result.groups.join(',') === '10,10,10'
    && result.videos === 3
    && result.matchedVideos === expectation.matchedVideos
    && result.videoGaps === expectation.videoGaps
    && result.initialIframes === 0
    && result.activities === 3
    && result.presentation
    && result.visuals === expectation.visuals
    && new Set(result.visualIds).size === expectation.visuals
    && result.webpVisuals === expectation.visuals
    && result.openLarger >= expectation.visuals
    && result.visibleSharedNavs === 1
    && !result.overflow
    && errors.length === 0;
  failed ||= !pass;
  console.log(JSON.stringify({ route, pass, errors, ...result }));
  await page.close();
}

await browser.close();
if (failed) process.exitCode = 1;
