const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();