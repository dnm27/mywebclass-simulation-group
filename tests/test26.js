const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByText('Please read our Privacy Policy carefully before using our website. Do you agree ').click();
  await page.getByText('Please read our Privacy Policy carefully before using our website. Do you agree ').click();
  await page.getByText('Do you agree to our Privacy Policy?').click();
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).click();
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).getByRole('button').click();
  await page.locator('.modal-backdrop').dblclick();
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).getByRole('button').click();
  await page.locator('div').filter({ hasText: 'Privacy Policy' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'Home' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();