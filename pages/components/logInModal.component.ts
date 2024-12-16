import type { Page } from '@playwright/test'

export default class LoginModalComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    emailFormInput: () => this.page.getByTestId('login-form-email'),
    passwordFormInput: () => this.page.getByTestId('login-form-password'),
    logInFormButton: () => this.page.getByTestId('login-form-submit'),
    errorMessageText: () =>
      this.page.locator(
        '[data-checkout--validation--sms-validation-target="message"]',
      ),
  }

  async fillInFormEmail(emailValue: string) {
    await this.Elements.emailFormInput().waitFor({ state: 'visible' })
    await this.Elements.emailFormInput().fill(emailValue)
  }

  async fillInFormPassword(passwordValue: string) {
    await this.Elements.passwordFormInput().fill(passwordValue)
  }

  async clickFormLoginButton() {
    await this.Elements.logInFormButton().click()
  }

  async enterCredentials(emailValue: string, passwordValue: string) {
    await this.fillInFormEmail(emailValue)
    await this.fillInFormPassword(passwordValue)
  }

  async enterCredentialsAndClickLoginFormButton(
    emailValue: string,
    passwordValue: string,
  ) {
    await this.Elements.logInFormButton().waitFor({ state: 'visible' })
    await this.enterCredentials(emailValue, passwordValue)
    await this.clickFormLoginButton()
  }
}
