import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignInPage extends BasePage {
  emailField: Locator;
  passwordField: Locator;
  signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.passwordField = page.getByRole('textbox', { name: 'Password input' });
    this.signInButton = page.getByRole('button', { name: 'SIGN IN' });
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
