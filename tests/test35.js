const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').click();
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').click();
  await page.locator('div').filter({ hasText: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByText('Monthly digest of what\'s new and exciting from us.').click();
  await page.getByText('Monthly digest of what\'s new and exciting from us.').click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').dblclick();
  await page.getByPlaceholder('Email address').fill('test');
  await page.getByRole('button', { name: 'Subscribe' }).dblclick();
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();