import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { QuotePopupPage } from "../pages/QuotePopupPage";

test.describe('Instant Quote Flow', () => {
  test('should complete quote flow and land on protection page', async ({ page }) => {
    const homePage = new HomePage(page);
    const popupPage = new QuotePopupPage(page);
    const url = 'https://www.rentalcover.com/en';
    const startDate = 'Sep 25, 2025';
    const endDate = 'Oct 25, 2025';
    const country = 'United States';
    const state = 'California';

    await test.step('Navigate to homepage', async () => {
      await homePage.goto(url);
    });

    await test.step('Fill quote form', async () => {
      await homePage.fillForm(startDate, endDate, country);
    });

    await test.step('Submit quote form', async () => {
      await homePage.submitForm();
    });

    await test.step('Handle popup and confirm quote', async () => {
      await popupPage.selectState(state);
      await popupPage.confirmQuote();
    });

    await test.step('Verify protection page heading', async () => {
      await popupPage.verifyProtectionHeading();
    });
  });
});