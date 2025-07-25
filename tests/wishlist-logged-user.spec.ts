import { test } from './fixures/baseFixtures';
import { expect } from '@playwright/test';
import { USERS } from '../utils/users';

test.describe('Wishlist - User is logged in', () => {
  test.use({ userToLogin: USERS.standard_user });
  test(
    'TC-03 Logged in user adds product to wishlist and than remove it from wishlist',
    { tag: ['@wishlist'] },
    async ({ pageManager }) => {
      const productName = 'Hummingbird printed sweater';
      const wishlistName = 'test-wishlist';

      await test.step('User attempts to add product to wishlist', async () => {
        await pageManager.homePage.goToHomePage();
        await pageManager.homePage.addProductToWishlist(productName, wishlistName);
        await expect(pageManager.homePage.toastMessages.getWishlistToastLocator()).toContainText(
          'Product added'
        );
      });

      const product =
        await test.step('Go to Wishlist and check that added product is existed', async () => {
          await pageManager.homePage.goToAccountPage();
          await pageManager.accountPage.goToMyWishlistsPage();
          await pageManager.wishListPage.getWishlistByName(wishlistName);
          const product = await pageManager.wishListPage.getProductByName(productName);
          await expect(product.getTitleLocator()).toContainText(productName);
          return product;
        });

      await test.step('Remove product from wishlist', async () => {
        await product.clickOnWishListBtn();
        await pageManager.homePage.wishlistModalPage.clickBtnByText('Remove');
        await expect(
          pageManager.wishListPage.toastMessages.getWishlistToastLocator()
        ).toContainText('Product successfully removed');
        await expect(pageManager.wishListPage.emptyText).toBeVisible();
      });
    }
  );
});
