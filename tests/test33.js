const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').click();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').click();
  await page.getByText('Another important emerging technology in software engineering is blockchain. Thi').click();
  await page.getByText('Artificial intelligence (AI) is rapidly changing the software engineering world,').click();
  await page.getByText('Article about AI Artificial intelligence (AI) is rapidly changing the software e').click();
  await page.getByRole('heading', { name: 'Article about DevOps' }).click();
  await page.getByText('One of the key principles of DevOps is automation. By automating repetitive task').click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Content Template' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();