import { test as base } from '@playwright/test';
import { HomePage } from '../../app/ui/pages/HomePage';
import { SearchPage } from '../../app/ui/pages/SearchPage';
import { SignInPage } from '../../app/ui/pages/SignInPage';
import { AccountPage } from '../../app/ui/pages/AccountPage';
import { WishListsPage } from '../../app/ui/pages/WishListsPage';
import * as fs from 'node:fs';

type Pages = {
  signInPage: SignInPage;
  homePage: HomePage;
  accountPage: AccountPage;
  searchPage: SearchPage;
  wishListPage: WishListsPage;
  userToLogin: string;
};

export const test = base.extend<Pages>({
  userToLogin: undefined,
  storageState: async ({ browser, userToLogin }, use) => {
    const storageStatePath = 'storage_state.json';
    const isExist = fs.existsSync(storageStatePath);

    if (!isExist) {
      const page = await browser.newPage();
      const homePage = new HomePage(page);
      const signInPage = new SignInPage(page);
      await page.goto('https://teststore.automationtesting.co.uk/index.php');
      await homePage.header.goToSignPage();
      await signInPage.signIn(userToLogin, process.env.PASSWORD as string);
      await page.context().storageState({ path: storageStatePath });
      await page.close();
    }
    await use(storageStatePath);
  },
  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await use(signInPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await use(homePage);
  },
  accountPage: async ({ page }, use) => {
    const accountPage = new AccountPage(page);
    await use(accountPage);
  },
  wishListPage: async ({ page }, use) => {
    const wishlistPage = new WishListsPage(page);
    await use(wishlistPage);
  },
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await use(searchPage);
  },
});
