import { test } from './fixures/baseFixtures';
import { USERS } from '../utils/users';
import { expect } from '@playwright/test';

test.describe('Logged in user can select variants of product', () => {
  test.use({ userToLogin: USERS.standard_user });
  test(
    'TC-04 User should be able to add all sizes to cart',
    { tag: ['@product-page'] },
    async ({ pageManager }) => {
      const productName = 'Hummingbird printed t-shirt';
      let sizeArrayAdded = [];

      await test.step('User uses search to find product on the home page and click on it', async () => {
        await pageManager.homePage.goToHomePage();
        await pageManager.homePage.findProductAndClickOnIt(productName);
      });

      await test.step('User on product page and adds all sizes to cart', async () => {
        sizeArrayAdded = (await pageManager.productPage.addAllSizesToCart()).slice();
      });

      await test.step('User on cart page and checks that all sizes are added', async () => {
        await pageManager.productPage.header.goToCartPage();
        for (let i = 0; i < sizeArrayAdded.length; i++) {
          await expect(pageManager.cartPage.getItemBySize(sizeArrayAdded[i])).toBeVisible();
        }
      });
    }
  );
});
