import { Locator } from '@playwright/test';
import { ProductCard } from './ProductCard';

export class HomeProductCard extends ProductCard {
  private product: Locator;

  constructor(product: Locator) {
    super();
    this.product = product;
  }

  getTitleLocator() {
    return this.product.locator('.product-title');
  }

  async clickOnProduct() {
    await this.product.click();
  }

  async clickOnWishListBtn() {
    await this.product.locator('.wishlist-button-add').click();
  }

  async clickOnQuickViewLink() {
    await this.product.locator('.quick-view').click();
  }

  getPriceLocator() {
    return this.product.locator('.price');
  }
}
