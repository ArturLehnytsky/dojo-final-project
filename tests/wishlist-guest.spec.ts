import { test } from './fixures/baseFixtures';
import { expect } from '@playwright/test';

test.describe('Wishlist - Guest', () => {
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
});
