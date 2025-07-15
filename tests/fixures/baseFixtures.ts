import { test as base } from '@playwright/test';
import { HomePage } from '../../app/ui/pages/HomePage';
import { SearchPage } from '../../app/ui/pages/SearchPage';

type Pages = {
  homePage: HomePage;
  searchPage: SearchPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await use(homePage);
  },
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await use(searchPage);
  },
});
