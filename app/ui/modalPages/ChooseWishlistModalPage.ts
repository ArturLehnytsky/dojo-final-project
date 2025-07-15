import { Page } from '@playwright/test';

export class ChooseWishlistModalPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async chooseWishlistByName(wishlistName: string) {
    await this.page
      .locator('.modal-content')
      .locator('.wishlist-list-item', {
        hasText: wishlistName,
      })
      .click();
  }
}
