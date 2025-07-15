import { Locator, Page } from '@playwright/test';

export class QuickViewModalPage {
  private page: Page;
  private root: Locator;
  currentPrice: Locator;
  title: Locator;
  sizeSelector: Locator;
  qtyInput: Locator;
  increaseQtyBtn: Locator;
  decreaseQtyBtn: Locator;
  closeBtn: Locator;
  private addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('.modal.quickview');
    this.title = this.root.locator('h1');
    this.currentPrice = this.root.locator('.current-price-value');
    this.sizeSelector = this.root.getByLabel('Size');
    this.qtyInput = this.root.locator('#quantity_wanted');
    this.increaseQtyBtn = this.root.locator('.btn.bootstrap-touchspin-up');
    this.decreaseQtyBtn = this.root.locator('.btn.bootstrap-touchspin-down');
    this.addToCartBtn = this.root.locator('.add-to-cart');
    this.closeBtn = this.root.locator('.close');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}
