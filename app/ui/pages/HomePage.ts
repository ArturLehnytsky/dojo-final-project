import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductCardOnHomePage } from '../components/ProductCardOnHomePage';

export class HomePage extends BasePage {
  private popularSection: Locator;
  private onSaleSection: Locator;
  constructor(page: Page) {
    super(page);
    this.popularSection = this.page.locator('//h2[contains(text(), "Popular Products")]/..');
    this.onSaleSection = this.page.locator('//h2[contains(text(), "On Sale")]/..');
  }

  getProductByNameFromPopularSection(productName: string) {
    const productLocator = this.popularSection
      .getByRole('link', { name: productName })
      .locator('xpath=/ancestor::article');
    return new ProductCardOnHomePage(productLocator);
  }

  async goToHomePage() {
    await this.page.goto('/');
  }

  async addProductToWishlist(productName: string, wishlistName: string) {
    const product = this.getProductByNameFromPopularSection(productName);
    await product.clickOnWishListBtn();
    await this.wishlistAddModalPage.chooseWishlistByName(wishlistName);
  }
}
