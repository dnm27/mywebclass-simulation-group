const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.locator('#privacyModal').click();
  await page.getByPlaceholder('Email address').fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  await page.getByRole('contentinfo').click();
  await page.getByText('About Us Our Story Privacy Policy Share on Social Media Subscribe to our newslet').click();
  await page.getByText('About Us Our Story Privacy Policy').click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('About Us Our Story Privacy Policy Share on Social Media Subscribe to our newslet').click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  await page.getByRole('button', { name: 'Subscribe' }).click({
    clickCount: 6
  });
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByRole('link', { name: 'Content Template' }).dblclick();
  await page.locator('div').filter({ hasText: 'Navigation' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Home' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.locator('div').filter({ hasText: 'Start Here' }).click();
  await page.getByRole('button', { name: 'Start Here' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();