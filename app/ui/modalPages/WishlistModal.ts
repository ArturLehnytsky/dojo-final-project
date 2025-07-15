import { Locator, Page } from '@playwright/test';

export class WishlistModal {
  private page: Page;
  modalText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalText = this.page.locator('.modal-text');
  }

  async clickBtnByText(text: 'Remove' | 'Sign in' | 'Cancel') {
    await this.page.locator(`//button[contains(text(), '${text}')]`).click();
  }
}
