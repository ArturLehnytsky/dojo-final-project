import { Locator } from '@playwright/test';

export abstract class ProductCard {
  abstract getTitleLocator(): Locator;
  abstract clickOnProduct(): Promise<void>;
  abstract clickOnWishListBtn(): Promise<void>;
  abstract getPriceLocator(): Locator;
}
