import { BasePage } from './BasePage';
import { Page } from '@playwright/test';
import { ProductMiniature } from '../components/ProductMiniature';

export class SearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  getResultByIndex(index: number) {
    return new ProductMiniature(this.page.locator('.product-miniature').nth(index));
  }
}
