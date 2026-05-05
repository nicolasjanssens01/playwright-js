import { test, expect } from '@playwright/test';

test('TC02 - Buscar candidatos sin aplicar ningún filtro muestra resultados', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText(/Records Found/)).toBeVisible();
  await expect(page.locator('.orangehrm-container')).toBeVisible();
});