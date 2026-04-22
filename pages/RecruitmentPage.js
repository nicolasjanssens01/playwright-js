const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class RecruitmentPage extends BasePage {
  constructor(page) {
    super(page);

    this.recruitmentTitle = page.locator('h6');
    this.jobTitleDropdown = page
      .getByText('Job Title', { exact: true })
      .locator('..')
      .locator('.oxd-select-text-input');
    this.vacancyDropdown = page
      .getByText('Vacancy', { exact: true })
      .locator('..')
      .locator('.oxd-select-text-input');
    this.hiringManagerDropdown = page
      .getByText('Hiring Manager', { exact: true })
      .locator('..')
      .locator('.oxd-select-text-input');
    this.statusDropdown = page
      .getByText('Status', { exact: true })
      .locator('..')
      .locator('.oxd-select-text-input');
    this.candidatenameimput = page
    .getByText('Candidate Name', { exact: true })
    .locator('..')
    .locator('input');
    this.keywordsimput = page
    .getByText('Keywords', { exact: true })
    .locator('..')
    .locator('input');
    this.datefromImput = page
    .getByText('Date of Application', { exact: true })
    .locator('..')
    .locator('input[placeholder="From"]');
    this.datetoInput = page
    .getByText('Date of Application', { exact: true })
    .locator('..')
    .locator('input[placeholder="To"]');
    this.methodOfapplicationdropdown = page
    .getByText('Method of Application', { exact: true })
    .locator('..')
    .locator('.oxd-select-text-input');
  }

  async validateRecruitmentPageLoaded() {
    await expect(this.page).toHaveURL(/recruitment/);
    await expect(this.recruitmentTitle).toHaveText('Recruitment');
  }

  async validateRecruitmentMainElements() {
    await expect(this.jobTitleDropdown).toBeVisible();
    await expect(this.vacancyDropdown).toBeVisible();
    await expect(this.hiringManagerDropdown).toBeVisible();
    await expect(this.statusDropdown).toBeVisible();
    await expect(this.candidatenameimput).toBeVisible();
    await expect(this.keywordsimput).toBeVisible();
    await expect(this.datefromImput).toBeVisible();
    await expect(this.datetoInput).toBeVisible();
    await expect(this.methodOfapplicationdropdown).toBeVisible();
  }
}

module.exports = RecruitmentPage;