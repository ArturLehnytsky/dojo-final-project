import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
  private root: Locator;
  searchField: Locator;
  signInLink: Locator;
  cartLink: Locator;
  accountLink: Locator;
  cartProductCount: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('#header');
    this.searchField = this.root.getByRole('textbox', { name: 'Search' });
    this.signInLink = this.root.getByRole('link', { name: 'Sign in' });
    this.cartLink = this.root.getByRole('link', { name: 'Cart' });
    this.accountLink = this.root.locator('.account');
    this.cartProductCount = this.root.locator('.cart-products-count');
  }

  async goToSignPage() {
    await this.signInLink.click();
  }

  async searchByText(text: string) {
    await this.searchField.fill(text);
    await this.searchField.press('Enter');
  }

  async goToCartPage() {
    await this.cartLink.click();
  }
}
