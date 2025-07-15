import { ProductCard } from './ProductCard';
import { Locator } from '@playwright/test';

export class ProductCardOnWishlistPage extends ProductCard {
  private product: Locator;
  private addToCartBtn: Locator;

  constructor(product: Locator) {
    super();
    this.product = product;
    this.addToCartBtn = this.product.locator('.wishlist-product-addtocart');
  }

  getTitleLocator() {
    return this.product.locator('.wishlist-product-title');
  }

  async clickOnProduct() {
    await this.product.click();
  }

  async clickOnWishListBtn() {
    await this.product.locator('.wishlist-button-add').click();
  }

  getPriceLocator() {
    return this.product.locator('.wishlist-product-price-promo');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
