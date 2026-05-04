import { test, expect } from '@playwright/test';

test('Recruitment - verificar página y formulario de búsqueda', async ({ page }) => {

  // --- LOGIN ---
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // --- NAVEGAR A RECRUITMENT ---
  await page.getByRole('link', { name: 'Recruitment' }).click();

  // --- VERIFICAR TÍTULO DE PÁGINA ---
  await expect(page.locator('h6')).toContainText('Recruitment');
  await expect(page.getByRole('heading', { name: 'Candidates' })).toBeVisible();

  // --- VERIFICAR DROPDOWNS (uno por campo, sin duplicar con el ícono) ---
  await expect(page.getByText('Job Title')).toBeVisible();
  await expect(page.getByText('Vacancy', { exact: true })).toBeVisible();
  await expect(page.getByText('Hiring Manager', { exact: true })).toBeVisible();
  await expect(page.getByText('Status', { exact: true })).toBeVisible();
  await expect(page.getByText('Method of Application')).toBeVisible();

  // --- VERIFICAR CAMPOS DE TEXTO ---
  await expect(page.getByRole('textbox', { name: 'Type for hints...' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter comma seperated words...' })).toBeVisible();

  // --- VERIFICAR FECHAS ---
  await expect(page.getByText('Date of Application', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'From' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'To' })).toBeVisible();

  // --- VERIFICAR BOTONES Y RESULTADOS ---
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
  await expect(page.getByText('(71) Records Found')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();

});