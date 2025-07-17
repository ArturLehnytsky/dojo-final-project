import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';
import { ProductCardOnWishlistPage } from '../components/ProductCardOnWishlistPage';

export class WishListsPage extends BasePage {
  emptyText: Locator;
  private productItem: Locator;
  private productContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.emptyText = page.locator('//*[@class = "wishlist-list-empty"]');
    this.productItem = page.locator('//*[@class = "wishlist-product"]');
    this.productContainer = page.locator('//*[@class = "wishlist-products-list"]');
  }

  getWishlistLocatorByName(name: string): Locator {
    return this.page.locator(`//*[contains(@class, 'wishlist-list-item-title')]`, {
      hasText: name,
    });
  }

  async getAllProducts(): Promise<ProductCardOnWishlistPage[]> {
    await expect(this.productContainer).toBeVisible();
    const productCount = await this.productItem.count();
    const products: ProductCardOnWishlistPage[] = [];

    for (let i = 0; i < productCount; i++) {
      products.push(new ProductCardOnWishlistPage(this.productItem.nth(i)));
    }
    return products;
  }

  async getProductByName(name: string): Promise<ProductCardOnWishlistPage> {
    const products = await this.getAllProducts();
    for (const product of products) {
      if ((await product.getTitleLocator().textContent()) === name) {
        return product;
      }
    }
  }

  async getWishlistByName(name: string): Promise<void> {
    await this.getWishlistLocatorByName(name).click();
  }
}
