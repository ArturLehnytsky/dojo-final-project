import { APIRequestContext } from 'playwright';
import { USERS } from '../../utils/users';

export class SignInController {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async signInAndSaveCookieToStorage() {
    await this.request.post('/index.php?authentication', {
      form: {
        back: 'https://teststore.automationtesting.co.uk/index.php',
        email: USERS.standard_user,
        password: process.env.PASSWORD as string,
        submitLogin: '1',
      },
    });
    await this.request.storageState({ path: process.env.STORAGE_STATE_PATH as string });
  }
}
