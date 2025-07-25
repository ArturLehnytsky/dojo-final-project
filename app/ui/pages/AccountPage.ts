import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class AccountPage extends BasePage {
  myWishlistsBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.myWishlistsBtn = page.locator('#wishlist-link');
  }

  async goToMyWishlistsPage() {
    await this.myWishlistsBtn.click();
  }
}
