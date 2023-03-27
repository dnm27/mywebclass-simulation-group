const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.locator('#privacyModal').click();
  await page.locator('#privacyModal').click();
  await page.locator('#privacyModal').click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByText('Disagree Agree').click();
  await page.getByText('Disagree Agree').click();
  await page.getByText('Disagree Agree').click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about D...' }).click();
  await page.getByText('DevOps is a software development approach that combines the practices of softwar').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();