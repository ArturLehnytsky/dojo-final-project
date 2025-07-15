import { Page } from '@playwright/test';
import { Header } from '../components/Header';

export class BasePage {
  protected page: Page;
  header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }
}
