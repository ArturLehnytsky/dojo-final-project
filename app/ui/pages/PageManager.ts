import { Page } from '@playwright/test';
import { AccountPage } from './AccountPage';
import { CartPage } from './CartPage';
import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';
import { SearchPage } from './SearchPage';
import { WishListsPage } from './WishListsPage';
import { SignInPage } from './SignInPage';

export class PageManager {
  private page: Page;
  accountPage: AccountPage;
  cartPage: CartPage;
  homePage: HomePage;
  productPage: ProductPage;
  searchPage: SearchPage;
  wishListPage: WishListsPage;
  signInPage: SignInPage;

  constructor(page: Page) {
    this.page = page;
    this.accountPage = new AccountPage(page);
    this.cartPage = new CartPage(page);
    this.homePage = new HomePage(page);
    this.productPage = new ProductPage(page);
    this.searchPage = new SearchPage(page);
    this.wishListPage = new WishListsPage(page);
    this.signInPage = new SignInPage(page);
  }
}
