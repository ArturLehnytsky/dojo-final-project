import { test } from './fixures/baseFixtures';
import { USERS } from '../utils/users';
import { expect } from '@playwright/test';

test.describe('Logged in user can change color and size on product details page', () => {
  test.use({ userToLogin: USERS.standard_user });
  test(
    'TC-04 User should be able to add all sizes to cart',
    { tag: ['@product-page'] },
    async ({ homePage, productPage, cartPage }) => {
      const productName = 'Hummingbird printed t-shirt';
      let sizeArrayAdded = [];

      await test.step('User uses search to find product on the home page and click on it', async () => {
        await homePage.findProductAndClickOnIt(productName);
      });

      await test.step('User on product page and adds all sizes to cart', async () => {
        sizeArrayAdded = (await productPage.addAllSizesToCart()).slice();
      });

      await test.step('User on cart page and checks that all sizes are added', async () => {
        await productPage.header.goToCartPage();
        const actualSizes = await cartPage.getSizeOffAllProducts();
        expect(actualSizes).toEqual(sizeArrayAdded);
      });
    }
  );
});
