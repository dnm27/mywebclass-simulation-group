const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByText('Our Story').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.locator('body').click();
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').click();
  await page.getByText('One of the most promising emerging technologies in software engineering is artif').click();
  await page.locator('div').filter({ hasText: 'Navigation Mini-Articles a...Article about E...Article about A...Article about D' }).nth(2).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();