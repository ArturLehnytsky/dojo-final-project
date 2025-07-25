import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { HomeProductCard } from '../components/HomeProductCard';

export class SearchPage extends BasePage {
  productSearchNoMatches: Locator;

  constructor(page: Page) {
    super(page);
    this.productSearchNoMatches = page.locator('#product-search-no-matches');
  }

  getResultByIndex(index: number): HomeProductCard {
    return new HomeProductCard(this.page.locator('.product-miniature').nth(index));
  }
}
