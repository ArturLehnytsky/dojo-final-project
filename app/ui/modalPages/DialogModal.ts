import { Locator, Page } from '@playwright/test';

export class DialogModal {
  private page: Page;
  guestWishlistModalText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.guestWishlistModalText = this.page
      .locator('//*[@data-login-text = "Sign in"]')
      .locator('.modal-text');
  }

  async clickBtnByText(text: 'Remove' | 'Sign in' | 'Cancel') {
    await this.page.locator(`//button[contains(text(), '${text}')]`).click();
  }
}
