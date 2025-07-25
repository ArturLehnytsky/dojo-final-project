import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomeProductCard } from '../components/HomeProductCard';

export class HomePage extends BasePage {
  private popularSection: Locator;
  private onSaleSection: Locator;

  constructor(page: Page) {
    super(page);
    this.popularSection = this.page.locator('//h2[contains(text(), "Popular Products")]/..');
    this.onSaleSection = this.page.locator('//h2[contains(text(), "On Sale")]/..');
  }

  getProductByNameFromPopularSection(productName: string): HomeProductCard {
    const productLocator = this.popularSection
      .getByRole('link', { name: productName })
      .locator('xpath=/ancestor::article');
    return new HomeProductCard(productLocator);
  }

  async goToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  async addProductToWishlist(productName: string, wishlistName: string): Promise<void> {
    const product = this.getProductByNameFromPopularSection(productName);
    await product.clickOnWishListBtn();
    await this.wishlistAddModalPage.chooseWishlistByName(wishlistName);
  }

  async goToAccountPage(): Promise<void> {
    await this.header.accountLink.click();
  }

  async findProductAndClickOnIt(name: string): Promise<void> {
    await this.header.searchField.fill(name);
    await this.getProductByNameFromPopularSection(name).clickOnProduct();
  }
}
