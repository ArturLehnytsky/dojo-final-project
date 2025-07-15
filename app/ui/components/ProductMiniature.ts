import { Locator } from '@playwright/test';

export class ProductMiniature {
  private product: Locator;

  constructor(product: Locator) {
    this.product = product;
  }

  getTitleLocator() {
    return this.product.locator('.product-title');
  }

  async clickOnProduct() {
    await this.product.click();
  }

  async addToFavoriteList() {
    await this.product.locator('.wishlist-button-add').click();
  }

  async clickQuickViewLink() {
    await this.product.locator('.quick-view').click();
  }

  getPriceLocator() {
    return this.product.locator('.price');
  }
}
