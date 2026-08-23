import { chromium } from 'file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import { readFile } from 'node:fs/promises';

const baseUrl = 'http://127.0.0.1:8766';
const screenshotDir = 'C:/Users/scowell1/Documents/Codex/2026-08-23/new-tas-course-site-builder-plugin/work/acceptance';
const photoPath = 'C:/Users/scowell1/Documents/Codex/2026-08-22/tas-course-site-builder-plugin-tas/work/desk-tidy/assets/presentations/desk-tidy-weeks-1-2-preview.webp';
const keyRoutes = [
  'index.html',
  'weeks1-2/index.html',
  'weeks3-4/index.html',
  'weeks5-6/index.html',
  'weeks7-8/index.html',
  'weeks9-10/index.html',
  'activities/index.html',
  'activities/activity.html?id=brief-to-criteria',
  'activities/print.html?id=brief-to-criteria',
  'desk-tidy-folio.html',
  'assessment/index.html',
  'teacher-resources.html',
  'youtube-library/video-library.html'
];

const browser = await chromium.launch({ headless: true, channel: 'msedge' });
let failed = false;
const results = [];

function record(name, pass, detail = {}) {
  failed ||= !pass;
  const result = { name, pass, ...detail };
  results.push(result);
  console.log(JSON.stringify(result));
}

async function inspectRoute(context, route, expectedWidth) {
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const failedRequests = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', request => failedRequests.push(request.url()));
  const response = await page.goto(`${baseUrl}/${route}`, { waitUntil: 'networkidle' });
  const state = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
    return {
      width: window.innerWidth,
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      brokenImages: [...document.images].filter(image => image.getAttribute('src') && image.complete && image.naturalWidth === 0).map(image => image.getAttribute('src')),
      duplicateIds: [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))],
      main: Boolean(document.querySelector('main'))
    };
  });
  const pass = response?.ok()
    && state.width === expectedWidth
    && !state.overflow
    && state.brokenImages.length === 0
    && state.duplicateIds.length === 0
    && state.main
    && pageErrors.length === 0
    && consoleErrors.length === 0
    && failedRequests.length === 0;
  await page.close();
  return { pass, status: response?.status(), pageErrors, consoleErrors, failedRequests, ...state };
}

for (const viewport of [{ name: 'laptop', width: 1366, height: 900 }, { name: 'mobile-390', width: 390, height: 844 }]) {
  const context = await browser.newContext({ viewport, acceptDownloads: true });
  for (const route of keyRoutes) {
    const detail = await inspectRoute(context, route, viewport.width);
    record(`route:${viewport.name}:${route}`, detail.pass, detail);
  }
  await context.close();
}

const context = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
const page = await context.newPage();
const journeyErrors = [];
page.on('pageerror', error => journeyErrors.push(error.message));
page.on('console', message => {
  if (message.type() === 'error') journeyErrors.push(message.text());
});

await page.goto(`${baseUrl}/index.html`, { waitUntil: 'networkidle' });
await page.evaluate(() => {
  window.DeskTidyCourseProgress.storageKeys.forEach(key => localStorage.removeItem(key));
  window.DeskTidyCourseProgress.render();
});
const fresh = await page.evaluate(() => ({
  modules: document.querySelector('[data-course-module-count]').textContent.trim(),
  activities: document.querySelector('[data-course-activity-count]').textContent.trim(),
  folio: document.querySelector('[data-course-folio-count]').textContent.trim(),
  primary: document.querySelector('[data-course-primary-resume]').textContent.trim(),
  href: document.querySelector('[data-course-primary-resume]').getAttribute('href')
}));
record('journey:fresh-progress', fresh.modules === '0 of 5'
  && fresh.activities === '0 of 15'
  && fresh.folio === '0 of 12'
  && fresh.primary === 'Start Module 1'
  && fresh.href === 'weeks1-2/index.html#design-brief', fresh);

const emptyReviewed = await page.evaluate(() => {
  const record = { studentName: '', studentFirstName: '', studentLastName: '', studentClass: '', mc: {}, written: {} };
  for (let index = 0; index < 30; index += 1) record.mc[index] = { mastered: true };
  for (let index = 0; index < 4; index += 1) record.written[index] = { response: '', checked: true };
  localStorage.setItem('desk-tidy-weeks1-2-guided-v2', JSON.stringify(record));
  window.DeskTidyCourseProgress.render();
  return {
    modules: document.querySelector('[data-course-module-count]').textContent.trim(),
    primary: document.querySelector('[data-course-primary-resume]').textContent.trim(),
    href: document.querySelector('[data-course-primary-resume]').getAttribute('href')
  };
});
record('journey:empty-reviewed-capstones-do-not-complete-module', emptyReviewed.modules === '0 of 5'
  && emptyReviewed.primary === 'Resume Module 1: Written responses'
  && emptyReviewed.href === 'weeks1-2/index.html#written-application', emptyReviewed);
await page.evaluate(() => {
  localStorage.removeItem('desk-tidy-weeks1-2-guided-v2');
  window.DeskTidyCourseProgress.render();
});

await page.goto(`${baseUrl}/weeks1-2/index.html`, { waitUntil: 'networkidle' });
const correctOption = await page.evaluate(() => window.MC_QUESTIONS[0].correct);
const firstQuestion = page.locator('.question-card[data-mc-index="0"]');
await firstQuestion.locator(`input[value="${correctOption}"]`).check();
await firstQuestion.locator('[data-action="check-mc"]').click();
const writtenResponse = 'The intended user needs reliable access to selected items, so measurable criteria and evidence will guide the original solution.';
const firstWritten = page.locator('.written-card[data-written-index="0"]');
await firstWritten.locator('textarea').fill(writtenResponse);
await firstWritten.locator('[data-action="check-written"]').click();
await page.waitForFunction(expected => {
  const record = JSON.parse(localStorage.getItem('desk-tidy-weeks1-2-guided-v2') || 'null');
  return record?.mc?.[0]?.mastered === true
    && record?.written?.[0]?.checked === true
    && record.written[0].response === expected;
}, writtenResponse);
await page.reload({ waitUntil: 'networkidle' });
const savedModule = await page.evaluate(expected => ({
  mastered: document.querySelector('.question-card[data-mc-index="0"]')?.classList.contains('mastered'),
  response: document.querySelector('.written-card[data-written-index="0"] textarea')?.value,
  reviewed: document.querySelector('.written-card[data-written-index="0"]')?.classList.contains('reviewed'),
  record: JSON.parse(localStorage.getItem('desk-tidy-weeks1-2-guided-v2') || 'null')
}), writtenResponse);
record('journey:module-check-capstone-save-reload', savedModule.mastered
  && savedModule.response === writtenResponse
  && savedModule.reviewed
  && savedModule.record?.mc?.[0]?.mastered === true
  && savedModule.record?.written?.[0]?.checked === true, {
  mastered: savedModule.mastered,
  responseRestored: savedModule.response === writtenResponse,
  reviewed: savedModule.reviewed
});

const firstActivity = page.locator('.section-activity-embed[data-activity-id="brief-to-criteria"]');
await firstActivity.locator('summary').scrollIntoViewIfNeeded();
await firstActivity.locator('summary').focus();
await page.keyboard.press('Enter');
await page.waitForFunction(() => {
  const frame = document.querySelector('.section-activity-embed[data-activity-id="brief-to-criteria"] iframe');
  return frame?.contentDocument?.body.classList.contains('activity-embed-page')
    && frame.contentDocument.getElementById('activity-root')?.hidden === false;
});
const frame = page.frameLocator('.section-activity-embed[data-activity-id="brief-to-criteria"] iframe');
const assignments = await frame.locator('body').evaluate(() => {
  const activity = window.DESK_TIDY_ACTIVITIES.activities.find(item => item.id === 'brief-to-criteria');
  return activity.items.map(item => ({ id: item.id, category: item.correct }));
});
for (const assignment of assignments) {
  await frame.locator(`[data-item-id="${assignment.id}"]`).click();
  await frame.locator(`[data-assign-category="${assignment.category}"]`).click();
}
await frame.locator('#check-activity').click();
const activityResult = await frame.locator('#activity-result').evaluate(element => ({
  result: element.dataset.result,
  text: element.textContent.trim()
}));
const activityStored = await page.evaluate(() => JSON.parse(localStorage.getItem('desk-tidy:applied-learning:v1:brief-to-criteria') || 'null'));
record('journey:embedded-activity-feedback-save', activityResult.result === 'complete'
  && /Ready to apply the idea/.test(activityResult.text)
  && activityStored?.complete === true, { activityResult, storedComplete: activityStored?.complete });

await page.goto(`${baseUrl}/desk-tidy-folio.html`, { waitUntil: 'networkidle' });
await page.locator('#studentFirst').fill('Acceptance');
await page.locator('#response-brief').fill('My user evidence identifies the intended items, access needs and measurable criteria for success.');
await page.locator('#note-brief').fill('The attached preview is test evidence for backup and restore only.');
await page.locator('[data-photo="brief"]').setInputFiles(photoPath);
await page.waitForFunction(() => {
  const record = JSON.parse(localStorage.getItem('desk_tidy_folio_v1') || 'null');
  return record?.photos?.brief?.data?.startsWith('data:image/');
});
const folioSaved = await page.evaluate(() => {
  const record = JSON.parse(localStorage.getItem('desk_tidy_folio_v1'));
  return {
    response: record.responses.brief,
    note: record.notes.brief,
    photoPrefix: record.photos.brief.data.slice(0, 32),
    progress: document.getElementById('progressCount').textContent.trim(),
    courseStatus: document.querySelector('[data-course-folio-practice-text]').textContent.trim()
  };
});
record('journey:folio-response-photo-save', folioSaved.progress.startsWith('1 of 12')
  && folioSaved.photoPrefix.startsWith('data:image/')
  && /not submitted work/i.test(folioSaved.courseStatus), folioSaved);

await page.goto(`${baseUrl}/index.html`, { waitUntil: 'networkidle' });
await page.evaluate(() => {
  const key = 'desk-tidy-weeks1-2-guided-v2';
  const record = JSON.parse(localStorage.getItem(key));
  record.mc ||= {};
  record.written ||= {};
  for (let index = 0; index < 30; index += 1) record.mc[index] = { ...(record.mc[index] || {}), mastered: true };
  for (let index = 0; index < 4; index += 1) record.written[index] = { ...(record.written[index] || {}), response: record.written[index]?.response || `Acceptance response ${index + 1} records a meaningful Desk Tidy decision, the supporting evidence and the exact check used to review it.`, checked: true };
  localStorage.setItem(key, JSON.stringify(record));
  window.DeskTidyCourseProgress.render();
});
const seeded = await page.evaluate(() => ({
  modules: document.querySelector('[data-course-module-count]').textContent.trim(),
  activities: document.querySelector('[data-course-activity-count]').textContent.trim(),
  folio: document.querySelector('[data-course-folio-count]').textContent.trim(),
  primary: document.querySelector('[data-course-primary-resume]').textContent.trim(),
  href: document.querySelector('[data-course-primary-resume]').getAttribute('href')
}));
record('journey:seeded-progress-resume', seeded.modules === '1 of 5'
  && seeded.activities === '1 of 15'
  && seeded.folio === '1 of 12'
  && seeded.primary === 'Start Module 2'
  && seeded.href === 'weeks3-4/index.html#research-concepts', seeded);

await page.screenshot({ path: `${screenshotDir}/home-progress-390.png`, fullPage: false });
const downloadPromise = page.waitForEvent('download');
await page.locator('[data-course-backup-download]').click();
const download = await downloadPromise;
const downloadPath = await download.path();
const backup = JSON.parse(await readFile(downloadPath, 'utf8'));
const presentRecords = Object.values(backup.records).filter(value => value !== null).length;
record('journey:backup-export-shape', backup.schema === 'tas-course-backup'
  && backup.courseId === 'desk-tidy'
  && backup.recordManifest.moduleKeys.length === 5
  && backup.recordManifest.activityKeys.length === 15
  && backup.recordManifest.folioKey === 'desk_tidy_folio_v1'
  && Object.keys(backup.records).length === 21
  && presentRecords === 3
  && JSON.parse(backup.records.desk_tidy_folio_v1).photos.brief.data.startsWith('data:image/'), {
  moduleKeys: backup.recordManifest.moduleKeys.length,
  activityKeys: backup.recordManifest.activityKeys.length,
  recordKeys: Object.keys(backup.records).length,
  presentRecords,
  photoIncluded: JSON.parse(backup.records.desk_tidy_folio_v1).photos.brief.data.startsWith('data:image/')
});

const invalidValidation = await page.evaluate(validBackup => {
  const wrongCourse = structuredClone(validBackup);
  wrongCourse.courseId = 'another-course';
  const extraKey = structuredClone(validBackup);
  extraKey.records.unexpected = '{}';
  const outcomes = [];
  for (const candidate of [wrongCourse, extraKey, { schema: 'bad' }]) {
    try {
      window.DeskTidyCourseProgress.validateBackup(candidate);
      outcomes.push('accepted');
    } catch (error) {
      outcomes.push(error.message);
    }
  }
  return outcomes;
}, backup);
record('journey:backup-invalid-rejection', invalidValidation.every(outcome => outcome !== 'accepted'), { invalidValidation });

await page.evaluate(() => {
  window.DeskTidyCourseProgress.storageKeys.forEach(key => localStorage.removeItem(key));
  window.DeskTidyCourseProgress.render();
});
const cleared = await page.evaluate(() => document.querySelector('[data-course-module-count]').textContent.trim());
let restorePrompt = '';
page.once('dialog', async dialog => {
  restorePrompt = dialog.message();
  await dialog.accept();
});
await page.locator('[data-course-backup-input]').setInputFiles(downloadPath);
await page.waitForFunction(() => document.querySelector('[data-course-backup-status]')?.textContent.includes('restored'));
const restored = await page.evaluate(() => ({
  modules: document.querySelector('[data-course-module-count]').textContent.trim(),
  activities: document.querySelector('[data-course-activity-count]').textContent.trim(),
  folio: document.querySelector('[data-course-folio-count]').textContent.trim(),
  photo: JSON.parse(localStorage.getItem('desk_tidy_folio_v1')).photos.brief.data.startsWith('data:image/'),
  moduleRaw: localStorage.getItem('desk-tidy-weeks1-2-guided-v2'),
  activityRaw: localStorage.getItem('desk-tidy:applied-learning:v1:brief-to-criteria')
}));
record('journey:backup-clear-restore', cleared === '0 of 5'
  && /overwrite or remove all 21/.test(restorePrompt)
  && restored.modules === '1 of 5'
  && restored.activities === '1 of 15'
  && restored.folio === '1 of 12'
  && restored.photo
  && restored.moduleRaw === backup.records['desk-tidy-weeks1-2-guided-v2']
  && restored.activityRaw === backup.records['desk-tidy:applied-learning:v1:brief-to-criteria'], {
  cleared,
  restorePrompt,
  modules: restored.modules,
  activities: restored.activities,
  folio: restored.folio,
  photo: restored.photo
});

await page.goto(`${baseUrl}/weeks1-2/index.html`, { waitUntil: 'networkidle' });
await page.screenshot({ path: `${screenshotDir}/module-1-preview-390.png`, fullPage: false });
const expanded = page.locator('.section-activity-embed').first();
await expanded.locator('summary').scrollIntoViewIfNeeded();
await expanded.locator('summary').click();
await page.waitForFunction(() => document.querySelector('.section-activity-embed iframe')?.contentDocument?.body.classList.contains('activity-embed-page'));
await expanded.screenshot({ path: `${screenshotDir}/module-1-embedded-activity-390.png` });
await page.goto(`${baseUrl}/desk-tidy-folio.html#folio-1`, { waitUntil: 'networkidle' });
await page.locator('#folio-1').scrollIntoViewIfNeeded();
await page.locator('#folio-1').screenshot({ path: `${screenshotDir}/folio-card-1-390.png` });
record('journey:console-clean', journeyErrors.length === 0, { journeyErrors });

await context.close();
await browser.close();
if (failed) process.exitCode = 1;
