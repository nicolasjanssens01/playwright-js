import { test, expect } from '@playwright/test';

test('TC09 - Email con formato inválido en Add Candidate muestra error de formato', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('User');
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('esto-no-es-un-email');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Expected format: admin@example.com')).toBeVisible();
});