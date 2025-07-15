import { BaseComponent } from './BaseComponent';
import { Page } from '@playwright/test';

export class ToastMessages extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }

  getWishlistToastLocator() {
    return this.page.locator('//*[contains(@class,"wishlist-toast-text")]');
  }
}
