const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('myemailclass@github.net');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();