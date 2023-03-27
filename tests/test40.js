const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByPlaceholder('Email address').fill('Why@gmail.com');
  await page.getByText('MyWebClass.org Toggle navigation Recent Articles The New Era of Learning Transfo').click();
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByText('The New Era of Learning Transform your teaching and enhance your students\' learn').click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByRole('link', { name: 'Content Template' }).click();
  await page.getByText('Navigation Mini-Articles a...Article about E...Article about A...Article about D').click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();