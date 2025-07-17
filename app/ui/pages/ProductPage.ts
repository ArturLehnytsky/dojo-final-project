import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  private root: Locator;
  productTitle: Locator;
  regularPrice: Locator;
  currentPrice: Locator;
  discountLabel: Locator;
  productDescription: Locator;
  selectSize: Locator;
  quantityInput: Locator;
  addToCartBtn: Locator;
  productPicture: Locator;
  continueShoppingBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('.product-container');
    this.productTitle = this.root.locator('//h1');
    this.regularPrice = this.root.locator('.regular-price');
    this.currentPrice = this.root.locator('.current-price-value');
    this.discountLabel = this.root.locator('.discount-percentage');
    this.productDescription = this.root.locator('.product-description');
    this.selectSize = this.root.getByRole('combobox', { name: 'Size' });
    this.quantityInput = page.locator('#quantity_wanted');
    this.addToCartBtn = page.locator('//button[@data-button-action = "add-to-cart"]');
    this.productPicture = this.root.locator('.product-cover');
    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue shopping' });
  }

  getColorInputByColorName(colorName: string): Locator {
    return this.root.getByLabel(colorName).locator('input');
  }

  async addAllSizesToCart(): Promise<string[]> {
    const option = this.selectSize.locator('option');
    const optionCount = await option.count();
    const sizeArray = [];

    for (let i = 0; i < optionCount; i++) {
      await this.selectSize.selectOption({ index: i });
      sizeArray.push(await option.nth(i).innerText());
      await this.addToCartBtn.click();
      await this.continueShoppingBtn.click();
    }
    return sizeArray;
  }
}
