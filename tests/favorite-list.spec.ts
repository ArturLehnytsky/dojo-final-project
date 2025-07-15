import { test } from './fixures/baseFixtures';
import { expect } from '@playwright/test';
import { USERS } from '../utils/users';

test.describe('Favorite List', () => {
  test('Guest adds product to wishlist - should see sign in modal', async ({ homePage }) => {
    const productName = 'Hummingbird printed sweater';
    await test.step('Guest attempts to add product to wishlist', async () => {
      await homePage.getProductByName('Popular Products', productName).clickOnWishListBtn();
    });

    await test.step('Check that sign in modal is visible', async () => {
      await expect(homePage.wishlistModalPage.modalText).toBeVisible();
    });
  });

  test('Logged in user adds product to wishlist - product should be added to wishlist', async ({
    signInPage,
    homePage,
    accountPage,
    wishListPage,
  }) => {
    const productName = 'Hummingbird printed sweater';

    await test.step('User logs in', async () => {
      await homePage.header.goToSignPage();
      await signInPage.signIn(USERS.standard_user, process.env.PASSWORD as string);
    });

    await test.step('User attempts to add product to wishlist', async () => {
      const product = homePage.getProductByName('Popular Products', productName);
      await product.clickOnWishListBtn();
      await homePage.wishlistAddModalPage.chooseWishlistByName('test-wishlist');
      await expect(homePage.toastMessages.getWishlistToastLocator()).toContainText('Product added');
    });

    const product =
      await test.step('Go to Wishlist and check that added product is existed', async () => {
        await homePage.header.accountLink.click();
        await accountPage.myWishlistsLink.click();
        await wishListPage.getWishlistLocatorByName('test-wishlist').click();
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
  });
});
