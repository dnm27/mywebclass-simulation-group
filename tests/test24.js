const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#privacyModal').click();
  await page.locator('#privacyModal').click();
  await page.locator('#privacyModal').click();
  await page.locator('.modal-backdrop').click();
  await page.locator('div').filter({ hasText: 'The New Era of Learning Transform your teaching and enhance your students\' learn' }).nth(2).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).dblclick();
  await page.getByRole('contentinfo').click();
  await page.getByText('About Us Our Story Privacy Policy Share on Social Media Subscribe to our newslet').click();
  await page.locator('div').filter({ hasText: 'Share on Social Media' }).getByRole('list').click();
  await page.getByText('Our Story Privacy Policy').click();
  await page.locator('.modal-backdrop').click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();