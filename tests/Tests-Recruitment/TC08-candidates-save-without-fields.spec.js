import { test, expect } from '@playwright/test';

test('TC08 - Guardar candidato sin completar campos obligatorios muestra error "Required"', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Required')).toBeVisible();
});