const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.locator('#privacyModal').click();
  await page.locator('.modal-backdrop').click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.locator('div').filter({ hasText: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click({
    clickCount: 7
  });
  await page.getByRole('button', { name: 'Start Here' }).click({
    clickCount: 6
  });
  await page.getByRole('button', { name: 'Start Here' }).click({
    clickCount: 7
  });
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.locator('#privacyModal').click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByText('At our core, we are a force for change in the modern software industry. Our unwa').click();
  await page.getByText('At our core, we are a force for change in the modern software industry. Our unwa').dblclick();
  await page.getByRole('heading', { name: 'Mission' }).click();
  await page.getByRole('heading', { name: 'Mission' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('div').filter({ hasText: 'The New Era of Learning Transform your teaching and enhance your students\' learn' }).nth(2).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click({
    clickCount: 5
  });
  await page.locator('div').filter({ hasText: 'Share on Social Media' }).getByRole('list').click();
  await page.getByRole('link', { name: '' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();