import { test, expect } from '@playwright/test';

test('TC05 - El botón Reset limpia los campos del formulario de búsqueda', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('John');
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('developer');
  await page.getByRole('button', { name: 'Reset' }).click();

  await expect(page.getByRole('textbox', { name: 'Type for hints...' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Enter comma seperated words...' })).toHaveValue('');
});