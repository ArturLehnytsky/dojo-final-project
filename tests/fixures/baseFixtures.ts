import { test as base } from '@playwright/test';
import * as fs from 'node:fs';
import { PageManager } from '../../app/ui/pages/PageManager';
import { SignInController } from '../../app/api/SignInController';

type Pages = {
  pageManager: PageManager;
  userToLogin: string;
};

export const test = base.extend<Pages>({
  userToLogin: undefined,
  storageState: async ({ userToLogin }, use) => {
    if (!userToLogin) {
      await use(undefined);
      return;
    }
    const storageStatePath = 'storage_state.json';
    const isExist = fs.existsSync(storageStatePath);

    if (!isExist) {
      const signInController = new SignInController();
      await signInController.signInAndSaveCookieToStorage();
    }
    await use(storageStatePath);
  },
  pageManager: async ({ page }, use) => {
    const pageManager = new PageManager(page);
    await use(pageManager);
  },
});
