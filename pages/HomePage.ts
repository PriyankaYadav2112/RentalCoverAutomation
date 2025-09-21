import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly selectCountry: Locator;
  readonly countryInput: Locator;
  readonly startDate: Locator;
  readonly enterStartDate: Locator;
  readonly endDate: Locator;
  readonly enterEndDate: Locator;
  readonly changeCountryButton: Locator;
  readonly selectCountryOfResidence: Locator;
  readonly optionOfResidence: Locator;
  readonly countryDropdownOption: Locator;
  readonly vehicleType: Locator;
  readonly getQuoteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectCountry = page.getByText('Select or type a country');
    this.countryInput = page.locator('.react-select__option', { hasText: 'United States' });
    this.startDate = page.getByRole('textbox', { name: 'Start Date' });
    this.enterStartDate = page.locator('#coverageDates-startDate');
    this.endDate = page.getByRole('textbox', { name: 'End Date' });
    this.enterEndDate = page.locator('#coverageDates-endDate');
    this.changeCountryButton = page.locator('[data-test-id="cor-change-button"]');
    this.selectCountryOfResidence = page.locator('.react-select__value-container').nth(1);
    this.optionOfResidence = page.locator('#react-select-4-input');
    this.countryDropdownOption = page.locator('.react-select__option', { hasText: 'United States' });
    this.vehicleType = page.locator('#vehicle');
    this.getQuoteBtn = page.locator('button[data-analytics="getInstantQuote"]');
  }

  async goto(url: string) {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(url);
  }

  async fillForm(startDate: string, endDate: string, country: string) {
    await this.selectCountry.click();
    await this.countryInput.click();
    await this.startDate.click();
    await this.enterStartDate.evaluate(el => el.removeAttribute('readonly'));
    await this.enterStartDate.fill(startDate);
    await this.endDate.click();
    await this.enterEndDate.evaluate(el => el.removeAttribute('readonly'));
    await this.enterEndDate.fill(endDate);
    await this.changeCountryButton.click();
    await this.selectCountryOfResidence.click();
    await this.optionOfResidence.fill(country);
    await this.countryDropdownOption.click();
  }

  async submitForm() {
    await expect(this.getQuoteBtn).toBeVisible();
    await this.getQuoteBtn.click();
  }
}