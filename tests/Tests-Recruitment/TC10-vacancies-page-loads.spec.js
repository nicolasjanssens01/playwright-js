import { test, expect } from '@playwright/test';

test('TC10 - La página de Vacancies carga con todos sus elementos', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Vacancies' }).click();

  await expect(page.getByRole('heading', { name: 'Vacancies' })).toBeVisible();
  await expect(page.getByText('Job Title')).toBeVisible();
  await expect(page.getByText('Vacancy', { exact: true })).toBeVisible();
  await expect(page.getByText('Hiring Manager', { exact: true })).toBeVisible();
  await expect(page.getByText('Status', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await expect(page.getByText(/Records Found/)).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Vacancy ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Job Title ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Hiring Manager ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Status ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();
});