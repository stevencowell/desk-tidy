# Project Pages Setup

This repository contains HTML pages that send quiz results to a Google Sheet using Google Apps Script. To link your own Google Sheet, follow these steps:

1. Create a new Google Sheet.
2. In Google Sheets, go to **Extensions -> Apps Script** and create a new project.
3. Replace the default code in `Code.gs` with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name || '', data.quizNumber || '', data.score || '', new Date()]);
  return ContentService.createTextOutput('Success');
}
```

4. Deploy the script as a **web app** (set access to "Anyone"). Copy the web app URL.
5. Update the `SCRIPT_URL` constant in `Generic Page.html` and the `sendResultsToSheet` function URL in `clock-example.html` with your copied web app URL.

Quiz results will then be sent to your Google Sheet whenever a user submits a quiz.

A placeholder `results.csv` is included if you later want to log results locally.
