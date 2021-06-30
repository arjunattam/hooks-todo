const { test, expect } = require('@playwright/test');

const appUrl = process.env.APP_URL || 'https://lemon-smoke-0af79f310.azurestaticapps.net/#/';

test('test', async ({ page }) => {

  // Go to https://lemon-smoke-0af79f310.azurestaticapps.net/#/
  await page.goto(appUrl);

  // Click [placeholder="What needs to be done?"]
  await page.click('[placeholder="What needs to be done?"]');

  // Fill [placeholder="What needs to be done?"]
  await page.fill('[placeholder="What needs to be done?"]', 'write a test');

  // Press Enter
  await page.press('[placeholder="What needs to be done?"]', 'Enter');

  // Click text=write a test
  await page.click('text=write a test');

  // Check li input[type="checkbox"]
  await page.check('li input[type="checkbox"]');

  // Click text=Completed
  await page.click('text=Completed');
  expect(page.url()).toBe('https://lemon-smoke-0af79f310.azurestaticapps.net/#/completed');

  // Click text=Clear completed
  await page.click('text=Clear completed');

});