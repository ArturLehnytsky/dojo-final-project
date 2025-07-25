import { USERS } from '../../utils/users';
import { request } from '@playwright/test';

export class SignInController {
  async signInAndSaveCookieToStorage() {
    const context = await request.newContext();
    await context.post('/index.php?controller=authentication', {
      form: {
        back: process.env.BASE_URL as string,
        email: USERS.standard_user,
        password: process.env.PASSWORD as string,
        submitLogin: 1,
      },
    });
    await context.storageState({ path: process.env.STORAGE_STATE_PATH as string });
  }
}
