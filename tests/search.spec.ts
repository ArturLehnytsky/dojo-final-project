import { expect } from '@playwright/test';
import { test } from './fixures/baseFixtures';

test.describe('Search', () => {
  test('TC-01 Search by existed product', { tag: ['@search'] }, async ({ pageManager }) => {
    const searchData = 'Hummingbird cushion';

    await test.step(`Type ${searchData} into search field and press 'Enter'`, async () => {
      await pageManager.homePage.goToHomePage();
      await pageManager.homePage.header.searchByText(searchData);
    });

    await test.step('Check that search result contains searched product', async () => {
      const searchResult = pageManager.searchPage.getResultByIndex(0);
      await expect(searchResult.getTitleLocator()).toContainText(searchData);
    });
  });

  test('TC-02 Search by non-existed product', { tag: ['@search'] }, async ({ pageManager }) => {
    const searchData = 'NON-EXISTED';

    await test.step(`Type ${searchData} into search field and press 'Enter'`, async () => {
      await pageManager.homePage.goToHomePage();
      await pageManager.homePage.header.searchByText(searchData);
    });

    await test.step('Check that search result contains "product search no matches" message', async () => {
      await expect(pageManager.searchPage.productSearchNoMatches).toBeVisible();
    });
  });
});
