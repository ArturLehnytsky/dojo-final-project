import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
  private header: Locator;
  searchField: Locator;
  signInLink: Locator;
  cartLink: Locator;
  accountLink: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator('#header');
    this.searchField = this.header.getByRole('textbox', { name: 'Search' });
    this.signInLink = this.header.getByRole('link', { name: 'Sign in' });
    this.cartLink = this.header.getByRole('link', { name: 'Cart' });
    this.accountLink = this.header.locator('.account');
  }

  getCategoryLocatorByName(name: 'CLOTHES' | 'ACCESSORIES' | 'ACT') {
    return this.page.getByRole('link', { name: name });
  }

  async goToCategoryByNameViaMainMenu(name: 'WOMEN' | 'MEN' | 'STATIONARY' | 'HOME ACCESSORIES') {
    const categoryName = name === 'WOMEN' || 'MEN' ? 'CLOTHES' : 'ACCESSORIES';

    await this.getCategoryLocatorByName(categoryName).hover();
    await this.page.getByRole('link', { name: name }).click();
  }

  async goToSignPage() {
    await this.signInLink.click();
  }

  async searchByText(text: string) {
    await this.searchField.fill(text);
    await this.searchField.press('Enter');
  }
}
