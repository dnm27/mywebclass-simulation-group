const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Please read our Privacy Policy carefully before using our website. Do you agree ').click();
  await page1.getByText('Disagree Agree').click();
  await page1.getByRole('button', { name: 'Disagree' }).click();
  await page1.locator('.modal-backdrop').click();
  await page1.getByText('Privacy Policy At mywebclass.org, safeguarding your privacy is our top priority.').click();
  await page1.getByRole('heading', { name: 'How we use your information' }).click();
  await page1.getByRole('heading', { name: 'How we use your information' }).click();
  await page1.getByText('Privacy Policy At mywebclass.org, safeguarding your privacy is our top priority.').click();
  await page1.getByText('Privacy Policy At mywebclass.org, safeguarding your privacy is our top priority.').click();
  await page1.getByText('To enhance our website and the user experience.', { exact: true }).click();
  await page1.getByRole('heading', { name: 'Data retention and security' }).click();
  await page1.getByRole('heading', { name: 'Data retention and security' }).click();
  await page1.getByText('MyWebClass.org Toggle navigation Recent Articles Home Our Story Navigation Priva').click();
  await page1.getByRole('heading', { name: 'Contact us' }).click();
  await page1.getByRole('heading', { name: 'Changes to this Privacy Policy' }).click();
  await page1.getByRole('heading', { name: 'Changes to this Privacy Policy' }).click();
  await page1.getByRole('contentinfo').click();
  await page1.getByRole('link', { name: 'Privacy Policy' }).click();
  await page1.getByRole('button', { name: 'Agree', exact: true }).click();
  await page1.locator('section').getByRole('heading', { name: 'Privacy Policy', exact: true }).click();
  await page1.locator('section').getByRole('heading', { name: 'Privacy Policy', exact: true }).click();
  await page1.getByRole('link', { name: 'Recent Articles' }).click();
  await page1.getByRole('link', { name: 'Article about E...' }).click();
  await page1.getByRole('link', { name: 'Article about D...' }).click();
  await page1.close();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();