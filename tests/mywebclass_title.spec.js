// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have MyWebClass.org title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle('MyWebClass.org')
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
    // Get all links on the page
  const links = await page.$$eval('a', (links) => links.map((link) => link.href));

  // Loop through each link and check if it's valid
  for (const link of links) {
    const response = await page.goto(link, { timeout: 0, waitUntil: 'load' });

    if (response.status() >= 400) {
      await expect(false).toBeTruthy();
    }
  }
})
