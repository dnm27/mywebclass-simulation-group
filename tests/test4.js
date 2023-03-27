const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.locator('#privacyModal').click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();