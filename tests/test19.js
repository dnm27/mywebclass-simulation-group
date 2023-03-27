const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('body').dblclick();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();