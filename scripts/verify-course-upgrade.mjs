import { chromium } from 'file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const baseUrl = 'http://127.0.0.1:8766';
const routes = [
  { route: 'weeks1-2', visuals: 6, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks3-4', visuals: 3, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks5-6', visuals: 4, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks7-8', visuals: 7, matchedVideos: 3, videoGaps: 0 },
  { route: 'weeks9-10', visuals: 4, matchedVideos: 2, videoGaps: 1 }
];
const viewports = [
  { name: 'laptop', width: 1366, height: 900 },
  { name: 'mobile-390', width: 390, height: 844 }
];

const browser = await chromium.launch({ headless: true, channel: 'msedge' });
let failed = false;

for (const viewport of viewports) {
  for (const expectation of routes) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const failedRequests = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('requestfailed', request => failedRequests.push(`${request.method()} ${request.url()} ${request.failure()?.errorText || ''}`));

    await page.goto(`${baseUrl}/${expectation.route}/index.html`, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const learningPackage = window.DESK_TIDY_LEARNING_PACKAGE;
      const packages = learningPackage.capstones.map(entry => {
        const ordered = [
          document.getElementById(entry.sectionId),
          document.querySelector(`.section-activity-embed[data-activity-section="${entry.sectionId}"]`),
          document.querySelector(`.interleaved-check-group[data-theory-section="${entry.sectionId}"]`),
          document.querySelector(`.interleaved-written-group[data-theory-section="${entry.sectionId}"]`)
        ];
        const orderPass = ordered.every(Boolean) && ordered.slice(0, -1).every((node, index) =>
          Boolean(node.compareDocumentPosition(ordered[index + 1]) & Node.DOCUMENT_POSITION_FOLLOWING));
        return {
          sectionId: entry.sectionId,
          orderPass,
          checks: ordered[2]?.querySelectorAll('.question-card').length || 0,
          writtenIndices: [...(ordered[3]?.querySelectorAll('.written-card') || [])].map(card => Number(card.dataset.writtenIndex))
        };
      });

      const previewImage = document.querySelector('.module-slide-preview img');
      return {
        questions: document.querySelectorAll('.question-card').length,
        groups: [...document.querySelectorAll('.interleaved-check-group')].map(group => group.querySelectorAll('.question-card').length),
        writtenCards: document.querySelectorAll('.interleaved-written-group .written-card').length,
        writtenGroups: document.querySelectorAll('.interleaved-written-group').length,
        bottomWrittenSourceHidden: document.getElementById('written-questions')?.hidden === true,
        bottomWrittenDuplicates: document.querySelectorAll('#written-questions .written-card').length,
        packages,
        videos: document.querySelectorAll('.section-video').length,
        matchedVideos: document.querySelectorAll('.section-video[data-video-outcome="MATCHED"]').length,
        videoGaps: document.querySelectorAll('.section-video[data-video-outcome="GAP"]').length,
        initialVideoIframes: document.querySelectorAll('.section-video iframe').length,
        activityEmbeds: document.querySelectorAll('.section-activity-embed').length,
        initialActivityIframesWithSrc: document.querySelectorAll('.section-activity-embed iframe[src]').length,
        activityFullRoutes: document.querySelectorAll('.section-activity-embed a[href^="../activities/activity.html?id="]').length,
        activityPrintRoutes: document.querySelectorAll('.section-activity-embed a[href^="../activities/print.html?id="]').length,
        presentationDownload: document.querySelector('a[href$=".pptx"]')?.getAttribute('href') || null,
        presentationPreview: previewImage?.getAttribute('src') || null,
        presentationPreviewLoaded: Boolean(previewImage?.complete && previewImage?.naturalWidth),
        orientation: document.querySelectorAll('.module-orientation').length,
        visuals: document.querySelectorAll('.learning-visual').length,
        visualIds: [...document.querySelectorAll('.learning-visual')].map(figure => figure.dataset.visualId),
        webpVisuals: document.querySelectorAll('.learning-visual img[src$=".webp"]').length,
        openLarger: document.querySelectorAll('.open-larger').length,
        visibleSharedNavs: [...document.querySelectorAll('.course-family-nav')].filter(nav => nav.getClientRects().length).length,
        pageOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        viewportWidth: window.innerWidth
      };
    });

    let embedResult = { loaded: 0, exactRoutes: 0, bodyModes: 0, contained: true };
    if (viewport.name === 'mobile-390') {
      const summaries = page.locator('.section-activity-embed summary');
      for (let index = 0; index < await summaries.count(); index += 1) {
        await summaries.nth(index).scrollIntoViewIfNeeded();
        await summaries.nth(index).focus();
        await page.keyboard.press('Enter');
        await page.waitForFunction(frameIndex => {
          const frame = document.querySelectorAll('.section-activity-embed iframe')[frameIndex];
          return frame?.contentDocument?.location.search.includes('embed=1')
            && frame.contentDocument.body?.classList.contains('activity-embed-page')
            && frame.contentDocument.getElementById('activity-root')?.hidden === false;
        }, index);
      }
      await page.waitForFunction(() => [...document.querySelectorAll('.section-activity-embed iframe')]
        .every(frame => frame.getAttribute('src') && frame.contentDocument?.location.search.includes('embed=1')));
      embedResult = await page.evaluate(() => {
        const frames = [...document.querySelectorAll('.section-activity-embed iframe')];
        return {
          loaded: frames.filter(frame => frame.contentDocument?.readyState === 'complete').length,
          exactRoutes: frames.filter(frame => {
            const url = new URL(frame.src);
            return url.pathname.endsWith('/activities/activity.html')
              && url.searchParams.get('id') === frame.dataset.activityId
              && url.searchParams.get('embed') === '1';
          }).length,
          bodyModes: frames.filter(frame => frame.contentDocument?.body.classList.contains('activity-embed-page')).length,
          bodyClasses: frames.map(frame => frame.contentDocument?.body.className || ''),
          contained: frames.every(frame => frame.getBoundingClientRect().left >= 0
            && frame.getBoundingClientRect().right <= document.documentElement.clientWidth)
        };
      });
    }

    const pass = result.questions === 30
      && result.groups.join(',') === '10,10,10'
      && result.writtenCards === 4
      && result.writtenGroups === 3
      && result.bottomWrittenSourceHidden
      && result.bottomWrittenDuplicates === 0
      && result.packages.length === 3
      && result.packages.every(item => item.orderPass && item.checks === 10)
      && result.packages.flatMap(item => item.writtenIndices).sort((a, b) => a - b).join(',') === '0,1,2,3'
      && result.videos === 3
      && result.matchedVideos === expectation.matchedVideos
      && result.videoGaps === expectation.videoGaps
      && result.initialVideoIframes === 0
      && result.activityEmbeds === 3
      && result.initialActivityIframesWithSrc === 0
      && result.activityFullRoutes === 3
      && result.activityPrintRoutes === 3
      && Boolean(result.presentationDownload)
      && Boolean(result.presentationPreview)
      && result.presentationPreviewLoaded
      && result.orientation === 1
      && result.visuals === expectation.visuals
      && new Set(result.visualIds).size === expectation.visuals
      && result.webpVisuals === expectation.visuals
      && result.openLarger >= expectation.visuals + 1
      && result.visibleSharedNavs === 1
      && !result.pageOverflow
      && result.viewportWidth === viewport.width
      && (viewport.name !== 'mobile-390' || (embedResult.loaded === 3 && embedResult.exactRoutes === 3 && embedResult.bodyModes === 3 && embedResult.contained))
      && pageErrors.length === 0
      && consoleErrors.length === 0
      && failedRequests.length === 0;

    failed ||= !pass;
    console.log(JSON.stringify({ viewport: viewport.name, route: expectation.route, pass, pageErrors, consoleErrors, failedRequests, embedResult, ...result }));
    await context.close();
  }
}

await browser.close();
if (failed) process.exitCode = 1;
