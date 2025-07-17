import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { ProductCardOnHomePage } from '../components/ProductCardOnHomePage';

export class SearchPage extends BasePage {
  productSearchNoMatches: Locator;

  constructor(page: Page) {
    super(page);
    this.productSearchNoMatches = page.locator('#product-search-no-matches');
  }

  getResultByIndex(index: number): ProductCardOnHomePage {
    return new ProductCardOnHomePage(this.page.locator('.product-miniature').nth(index));
  }
}
