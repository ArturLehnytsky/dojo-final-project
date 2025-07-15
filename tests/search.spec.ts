import { expect } from '@playwright/test';
import { test } from './fixures/baseFixtures';

test.describe('Search', () => {
  test(
    'TC-01 Search by existed product',
    { tag: ['@search'] },
    async ({ homePage, searchPage }) => {
      const searchData = 'Hummingbird cushion';

      await homePage.header.searchByText(searchData);
      const searchResult = searchPage.getResultByIndex(0);
      await expect(searchResult.getTitleLocator()).toContainText(searchData);
    }
  );
});
