import { Page, Locator, expect } from "@playwright/test";

// Page Object Model for the Instant Quote popup window
// Encapsulates all interactions with the quote modal, including state selection and confirmation

export class QuotePopupPage {
  // Playwright Page instance for browser interaction
  readonly page: Page;
  // Locator for the state dropdown trigger inside the modal
  readonly stateDropdownTrigger: Locator;
  // Locator for the confirmation button in the modal
  readonly confirmBtn: Locator;
  // Locator for the protection heading on the protection page
  readonly protectionHeading: Locator;

  /**
   * Initializes the QuotePopupPage with required locators
   * @param page Playwright Page instance
   */
  constructor(page: Page) {
    this.page = page;
    this.stateDropdownTrigger = page.locator('.react-select__value-container').first();
    this.confirmBtn = page.locator('[data-test-id="state-selection-modal-cta-button-quote"]');
    this.protectionHeading = page.locator('h1.sc-cc8bdb4a-6.kdCfEi');
  }

  /**
   * Selects a state from the dropdown in the quote modal
   * Waits for the modal and dropdown to be ready, types the state, and confirms selection
   * @param state The state name to select (e.g., "California")
   */
  async selectState(state: string) {
    await this.page.locator('.modal.fade.show').waitFor({ state: 'visible' });
    await this.page.locator('.react-select__placeholder', { hasText: 'Select or search' }).waitFor({ state: 'visible' });
    await this.page.locator('.modal.fade.show .react-select__value-container').click();
    await this.page.locator('.modal.fade.show .react-select__input input').fill(state);
    await this.page.waitForTimeout(300); // Small delay to allow options to render
    await this.page.locator('.modal.fade.show .react-select__input input').press('Enter');
  }

  /**
   * Clicks the confirmation button to submit the quote
   * Waits for the button to be visible before clicking
   */
  async confirmQuote() {
    await expect(this.confirmBtn).toBeVisible();
    await this.confirmBtn.click();
  }

  /**
   * Verifies that the protection page heading is visible and contains the expected text
   */
  async verifyProtectionHeading() {
    await expect(this.protectionHeading).toBeVisible();
    await expect(this.protectionHeading).toContainText('PROTECT YOUR RENTAL VEHICLE & SAVE');
  }
}