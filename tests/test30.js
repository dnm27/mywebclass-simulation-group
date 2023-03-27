const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByText('Disagree Agree').click();
  await page.getByText('Please read our Privacy Policy carefully before using our website.').click();
  await page.getByText('Disagree Agree').click();
  await page.locator('#privacyModal').click();
  await page.locator('div').filter({ hasText: 'Start Here' }).click();
  await page.getByText('The New Era of Learning Transform your teaching and enhance your students\' learn').click();
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').dblclick();
  await page.getByText('The New Era of Learning Transform your teaching and enhance your students\' learn').click({
    clickCount: 3
  });
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').click();
  await page.getByText('Transform your teaching and enhance your students\' learning journey with MyWebCl').dblclick();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).dblclick();
  await page.getByRole('img', { name: 'a teacher with students' }).dblclick();
  await page.getByRole('img', { name: 'a teacher with students' }).dblclick();
  await page.getByText('MyWebClass.org Toggle navigation Recent Articles The New Era of Learning Transfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByRole('img', { name: 'a teacher with students' }).click();
  await page.getByText('MyWebClass.org Toggle navigation Recent Articles The New Era of Learning Transfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('contentinfo').click();
  await page.getByRole('heading', { name: 'Share on Social Media' }).click();
  await page.getByRole('heading', { name: 'Share on Social Media' }).click();
  await page.getByRole('heading', { name: 'About Us' }).click();
  await page.getByText('About Us Our Story Privacy Policy').click();
  await page.getByRole('heading', { name: 'Information we collect' }).click();
  await page.locator('section').getByRole('heading', { name: 'Privacy Policy', exact: true }).click();
  await page.locator('#title').click();
  await page.getByRole('link', { name: 'Recent Articles' }).click();
  await page.getByRole('link', { name: 'Content Template' }).dblclick();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').click();
  await page.getByText('In today\'s rapidly evolving technological landscape, software engineering is a f').dblclick();
  await page.getByRole('heading', { name: 'Mini-Articles about Technology' }).click();
  await page.getByRole('link', { name: 'ChatGPT' }).click();
  await page.getByText('By ChatGPT Last Updated: January 1, 2022 5 min read').click();
  await page.getByText('5 min read').dblclick();
  await page.getByText('By ChatGPT Last Updated: January 1, 2022 5 min read').click({
    clickCount: 3
  });
  await page.getByText('5 min read').click();
  await page.getByRole('link', { name: 'ChatGPT' }).dblclick();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Article about D...' }).click();
  await page.getByRole('link', { name: 'Article about D...' }).click({
    clickCount: 3
  });
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Mini-Articles a...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Article about D...' }).click();
  await page.getByRole('link', { name: 'Mini-Articles a...' }).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Mini-Articles a...' }).click();
  await page.getByRole('link', { name: 'Article about D...' }).click();
  await page.getByRole('link', { name: 'Mini-Articles a...' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();