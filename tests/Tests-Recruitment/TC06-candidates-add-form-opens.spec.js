import { test, expect } from '@playwright/test';

test('TC06 - El botón Add abre el formulario de Add Candidate con todos sus campos', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('link', { name: 'Candidates' }).click();

  await page.getByRole('button', { name: ' Add' }).click();

  await expect(page.getByRole('heading', { name: 'Add Candidate' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Middle Name' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();
  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByText('Contact Number')).toBeVisible();
  await expect(page.getByText('Resume')).toBeVisible();
  await expect(page.getByText('Date of Application')).toBeVisible();
  await expect(page.getByText('Consent to keep data')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
});