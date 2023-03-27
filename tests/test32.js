const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Article about D...' }).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Article about E...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByRole('link', { name: 'Article about A...' }).click();
  await page.getByText('Artificial intelligence (AI) is rapidly changing the software engineering world,').click();
  await page.getByText('Article about AI Artificial intelligence (AI) is rapidly changing the software e').click();
  await page.getByText('One of the most significant ways that AI is changing software engineering is thr').click();
  await page.getByText('Article about AI Artificial intelligence (AI) is rapidly changing the software e').click();
  await page.getByText('Another key area where AI is having an impact on software engineering is in the ').click();
  await page.getByText('Another key area where AI is having an impact on software engineering is in the ').click();
  await page.getByText('Article about DevOps DevOps is a software development approach that combines the').click();
  await page.getByText('One of the key principles of DevOps is automation. By automating repetitive task').click();
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click({
    clickCount: 6
  });
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click();
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click();
  await page.getByText('Article about DevOps DevOps is a software development approach that combines the').click();
  await page.getByText('One of the key principles of DevOps is automation. By automating repetitive task').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Article about DevOps DevOps is a software development approach that combines the').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByRole('main').click();
  await page.getByText('Article about DevOps DevOps is a software development approach that combines the').click();
  await page.getByText('One of the key principles of DevOps is automation. By automating repetitive task').click();
  await page.getByText('One of the key principles of DevOps is automation. By automating repetitive task').dblclick();
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click();
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click();
  await page.getByText('At its core, DevOps is about breaking down the barriers between development and ').click();
  await page.getByText('Article about DevOps DevOps is a software development approach that combines the').click();
  await page.getByText('DevOps is a software development approach that combines the practices of softwar').click({
    clickCount: 3
  });
  await page.getByText('DevOps is a software development approach that combines the practices of softwar').click();
  await page.getByText('DevOps is a software development approach that combines the practices of softwar').dblclick();
  await page.getByText('DevOps is a software development approach that combines the practices of softwar').dblclick();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Continuous integration and continuous delivery (CI/CD) is another important aspe').click();
  await page.getByText('Another key component of DevOps is monitoring and feedback. By monitoring softwa').click();
  await page.getByText('Another key component of DevOps is monitoring and feedback. By monitoring softwa').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('heading', { name: 'Values' }).click();
  await page.getByText('At our core, we are a force for change in the modern software industry. Our unwa').click();
  await page.getByText('Navigation Our Story By Danielle Miccio Last Updated: March 3, 2023 3 min read M').click();
  await page.getByRole('heading', { name: 'Values' }).dblclick();
  await page.getByRole('heading', { name: 'Values' }).click();
  await page.getByText('Learning: We believe that learning is a lifelong process and that everyone has s').click();
  await page.getByText('People: We value the people in our community and believe that every student and ').click();
  await page.getByText('Efficiency:').click();
  await page.getByText('Efficiency: We recognize that time is a valuable resource, and we strive to make').click();
  await page.getByText('Each of these values supports our mission by creating a welcoming and supportive').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();