const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: '__assets__/e2e/reports', // Path to JSON files
  reportPath: 'e2e/reports/HTMLReport', // Path where the report will be saved
  metadata: {
    browser: {
      name: 'chrome',
      version: '85'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'QA Automation' },
      { label: 'Execution Date', value: new Date().toString() }
    ]
  },
  screenshotsDirectory: 'cypress/screenshots', // Attach screenshots
  storeScreenshots: true // Ensure the screenshots are linked
});
