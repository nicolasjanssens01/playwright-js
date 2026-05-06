import { test, expect } from '@playwright/test';

test('TC04 - Buscar candidato con nombre inexistente muestra "No Records Found"', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('zzznoeexiste999');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('No Records Found')).toBeVisible();
});