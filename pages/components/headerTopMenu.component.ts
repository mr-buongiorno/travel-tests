import type { Page } from '@playwright/test'

export default class HeaderTopMenuComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    logInButton: () => this.page.getByTestId('header-user-box-toggle-button'),
    phoneButton: () => this.page.locator('#header-phone-button'),
  }

  async clickLoginButton() {
    await this.Elements.logInButton().click()
  }
}
