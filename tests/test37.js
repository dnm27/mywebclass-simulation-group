const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('button', { name: 'Start Here' }).dblclick();
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByText('Navigation Our Story By Danielle Miccio Last Updated: March 3, 2023 3 min read M').click();
  await page.getByRole('heading', { name: 'Navigation' }).click();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).click();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).locator('div').nth(1).dblclick();
  await page.getByRole('navigation', { name: 'Breadcrumb' }).click({
    clickCount: 3
  });
  await page.getByText('At our core, we are a force for change in the modern software industry. Our unwa').click();
  await page.getByRole('heading', { name: 'Values' }).click();
  await page.getByRole('heading', { name: 'Values' }).click();
  await page.getByText('Thank you for your interest in mywebclass.org. Together, we can create a communi').click();
  await page.getByText('Mywebclass.org was founded in 2023 by Keith Williams, a University Lecturer at N').click();
  await page.getByRole('heading', { name: 'Origin' }).click();
  await page.getByText('Our Story Privacy Policy').click();
  await page.getByText('Navigation Privacy Policy By Danielle Miccio Last Updated: March 14, 2023 3 min ').click();
  await page.getByRole('navigation', { name: 'Main navigation' }).click();
  await page.locator('section').getByRole('heading', { name: 'Privacy Policy', exact: true }).click();
  await page.getByText('Navigation Privacy Policy By Danielle Miccio Last Updated: March 14, 2023 3 min ').click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).dblclick();
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('navigation', { name: 'Main navigation' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();