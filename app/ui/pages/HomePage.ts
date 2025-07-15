import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductMiniature } from '../components/ProductMiniature';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private getSectionLocator(sectionName: 'Popular Products' | 'On Sale') {
    return this.page.locator(`//h2[contains(text(), "${sectionName}")]/..`);
  }

  getProductByName(sectionName: 'Popular Products' | 'On Sale', productName: string) {
    const sectionLocator = this.getSectionLocator(sectionName);
    const productLocator = sectionLocator
      .getByRole('link', { name: productName })
      .locator('xpath=/ancestor::article');
    return new ProductMiniature(productLocator);
  }

  async goToHomePage() {
    await this.page.goto('/');
  }
}
