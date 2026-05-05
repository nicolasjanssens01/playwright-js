import { test, expect } from '@playwright/test';

test('Recruitment - verificación completa de todas las pestañas', async ({ page }) => {

  // =====================
  // LOGIN
  // =====================
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // =====================
  // NAVEGAR A RECRUITMENT
  // =====================
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await expect(page.locator('h6')).toContainText('Recruitment');

  // =====================
  // PESTAÑA: CANDIDATES
  // =====================
  await page.getByRole('link', { name: 'Candidates' }).click();
  await expect(page.getByRole('heading', { name: 'Candidates' })).toBeVisible();

  // Filtros de búsqueda
  await expect(page.getByText('Job Title')).toBeVisible();
  await expect(page.getByText('Vacancy', { exact: true })).toBeVisible();
  await expect(page.getByText('Hiring Manager', { exact: true })).toBeVisible();
  await expect(page.getByText('Status', { exact: true })).toBeVisible();
  await expect(page.getByText('Candidate Name')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Type for hints...' })).toBeVisible();
  await expect(page.getByText('Keywords')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter comma seperated words...' })).toBeVisible();
  await expect(page.getByText('Date of Application', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'From' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'To' })).toBeVisible();
  await expect(page.getByText('Method of Application')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();

  // Resultados y tabla
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await expect(page.getByText(/Records Found/)).toBeVisible(); // ← sin número fijo, no se rompe si cambia
  await expect(page.getByRole('columnheader', { name: 'Vacancy ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Candidate ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Hiring Manager ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Date of Application ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Status ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();

  // Paginación
  await expect(page.getByRole('button', { name: '1' })).toBeVisible();
  await expect(page.getByRole('button', { name: '2' })).toBeVisible();

  // =====================
  // PESTAÑA: VACANCIES
  // =====================
  await page.getByRole('listitem').filter({ hasText: 'Vacancies' }).click();
  await expect(page.getByRole('heading', { name: 'Vacancies' })).toBeVisible();

  // Filtros
  await expect(page.getByText('Job Title')).toBeVisible();
  await expect(page.getByText('Vacancy', { exact: true })).toBeVisible();
  await expect(page.getByText('Hiring Manager', { exact: true })).toBeVisible();
  await expect(page.getByText('Status', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();

  // Resultados y tabla
  await expect(page.getByRole('button', { name: ' Add' })).toBeVisible();
  await expect(page.getByText(/Records Found/)).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Vacancy ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Job Title ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Hiring Manager ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Status ' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Actions' })).toBeVisible();

  // =====================
  // FORMULARIO: ADD VACANCY
  // =====================
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add Vacancy' })).toBeVisible();

  await expect(page.getByText('Vacancy Name')).toBeVisible();
  await expect(page.getByText('Job Title')).toBeVisible();
  await expect(page.getByText('Description')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Type description here' })).toBeVisible();
  await expect(page.getByText('Hiring Manager')).toBeVisible();
  await expect(page.getByText('Number of Positions')).toBeVisible();
  await expect(page.getByText('Active')).toBeVisible();
  await expect(page.getByText('Publish in RSS Feed and Web')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();

  // =====================
  // FORMULARIO: ADD CANDIDATE
  // =====================
  await page.getByRole('link', { name: 'Candidates' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add Candidate' })).toBeVisible();

  await expect(page.getByText('Full Name')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Middle Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
  await expect(page.getByText('Vacancy')).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByText('Contact Number')).toBeVisible();
  await expect(page.getByText('Resume')).toBeVisible();
  await expect(page.getByText('Keywords')).toBeVisible();
  await expect(page.getByText('Date of Application')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'yyyy-dd-mm' })).toBeVisible();
  await expect(page.getByText('Notes')).toBeVisible();
  await expect(page.getByText('Consent to keep data')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();

});