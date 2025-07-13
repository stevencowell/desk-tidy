# Project Pages Setup

This repository contains HTML pages that send quiz results to a Google Sheet using Google Apps Script. To link your own Google Sheet, follow these steps:

1. Create a new Google Sheet.
2. In Google Sheets, go to **Extensions -> Apps Script** and create a new project.
3. Replace the default code in `Code.gs` with the following, which separates
   main, support, and advanced quiz results into different sheets and also
   records the typed responses from the advanced activities:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Determine which sheet to use based on the quiz number prefix
  let sheetName = 'Main Theory Page';
  if (data.quizNumber && data.quizNumber.startsWith('S')) {
    sheetName = 'Support Quizzes';
  } else if (data.quizNumber && data.quizNumber.startsWith('A')) {
    // use the existing tab for advanced responses
    sheetName = 'Advanced Theory Sheet';
  }

  const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

  if (sheetName === 'Advanced Theory Sheet' && Array.isArray(data.responses)) {
    const row = [data.studentName || '', data.quizNumber || '', new Date()];
    data.responses.forEach(r => row.push(r.answer || ''));
    sheet.appendRow(row);
  } else {
    sheet.appendRow([
      data.studentName || '',
      data.quizNumber || '',
      data.score || '',
      new Date(),
    ]);
  }

  return ContentService.createTextOutput('Success');
}
```

4. Deploy the script as a **web app** (set access to "Anyone"). Copy the web app URL.
5. Update the `SCRIPT_URL` constant in `Generic Page.html` and the `sendResultsToSheet` function URL in `clock-example.html` with your copied web app URL.

Quiz results will then be sent to your Google Sheet whenever a user submits a quiz.

A placeholder `results.csv` is included if you later want to log results locally.
