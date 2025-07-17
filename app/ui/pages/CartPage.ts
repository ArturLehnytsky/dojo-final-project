import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class CartPage extends BasePage {
  private cartItem: Locator;
  private itemSize: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItem = page.locator('.cart-item');
    this.itemSize = page.locator('.size .value');
  }

  async getSizeOffAllProducts(): Promise<string[]> {
    const cartItemsCount = await this.cartItem.count();
    const sizes = [];

    for (let i = 0; i < cartItemsCount; i++) {
      const size = await this.cartItem.nth(i).locator(this.itemSize).innerText();
      sizes.push(size);
    }
    return sizes;
  }
}
