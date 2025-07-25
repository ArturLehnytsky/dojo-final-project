import { ProductCard } from './ProductCard';
import { Locator } from '@playwright/test';

export class WishlistProductCard extends ProductCard {
  private product: Locator;
  private addToCartBtn: Locator;

  constructor(product: Locator) {
    super();
    this.product = product;
    this.addToCartBtn = this.product.locator('.wishlist-product-addtocart');
  }

  getTitleLocator(): Locator {
    return this.product.locator('.wishlist-product-title');
  }

  async clickOnProduct(): Promise<void> {
    await this.product.click();
  }

  async clickOnWishListBtn(): Promise<void> {
    await this.product.locator('.wishlist-button-add').click();
  }

  getPriceLocator(): Locator {
    return this.product.locator('.wishlist-product-price-promo');
  }

  async addToCart(): Promise<void> {
    await this.addToCartBtn.click();
  }
}
