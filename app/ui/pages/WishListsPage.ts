import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { ProductCardOnHomePage } from '../components/ProductCardOnHomePage';
import { ProductCardOnWishlistPage } from '../components/ProductCardOnWishlistPage';

export class WishListsPage extends BasePage {
  emptyText: Locator;
  constructor(page: Page) {
    super(page);
    this.emptyText = page.locator('//*[@class = "wishlist-list-empty"]');
  }

  getWishlistLocatorByName(name: string) {
    return this.page.locator(`//*[contains(@class, 'wishlist-list-item-title')]`, {
      hasText: name,
    });
  }

  getProduct() {
    return new ProductCardOnWishlistPage(
      this.page.locator(`//*[@class = 'wishlist-product']`).nth(0)
    );
  }
}
