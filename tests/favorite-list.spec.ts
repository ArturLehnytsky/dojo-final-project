import { test } from './fixures/baseFixtures';
import { expect } from '@playwright/test';
import { USERS } from '../utils/users';

test.describe('Wishlist', () => {
  test(
    'TC-02 Guest adds product to wishlist - should see sign in modal',
    { tag: ['@wishlist'] },
    async ({ homePage }) => {
      const productName = 'Hummingbird printed sweater';
      await test.step('Guest attempts to add product to wishlist', async () => {
        await homePage.getProductByNameFromPopularSection(productName).clickOnWishListBtn();
      });

      await test.step('Check that sign in modal is visible', async () => {
        await expect(homePage.wishlistModalPage.guestWishlistModalText).toBeVisible();
      });
    }
  );

  test.use({ userToLogin: USERS.standard_user });
  test(
    'TC-03 Logged in user adds product to wishlist - product should be added to wishlist',
    { tag: ['@wishlist'] },
    async ({ homePage, accountPage, wishListPage }) => {
      const productName = 'Hummingbird printed sweater';
      const wishlistName = 'test-wishlist';

      await test.step('User attempts to add product to wishlist', async () => {
        await homePage.addProductToWishlist(productName, wishlistName);
        await expect(homePage.toastMessages.getWishlistToastLocator()).toContainText(
          'Product added'
        );
      });

      const product =
        await test.step('Go to Wishlist and check that added product is existed', async () => {
          await homePage.header.accountLink.click();
          await accountPage.myWishlistsLink.click();
          await wishListPage.getWishlistLocatorByName(wishlistName).click();
          const product = wishListPage.getProduct();
          await expect(product.getTitleLocator()).toContainText(productName);
          return product;
        });

      await test.step('Remove product from wishlist', async () => {
        await product.clickOnWishListBtn();
        await homePage.wishlistModalPage.clickBtnByText('Remove');
        await expect(wishListPage.toastMessages.getWishlistToastLocator()).toContainText(
          'Product successfully removed'
        );
        await expect(wishListPage.emptyText).toBeVisible();
      });
    }
  );
});
