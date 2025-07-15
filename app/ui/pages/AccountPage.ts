import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class AccountPage extends BasePage {
  myWishlistsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.myWishlistsLink = page.locator('#wishlist-link');
  }
}
