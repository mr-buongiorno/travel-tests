import type { Page } from '@playwright/test'

export default class TravelDetailsHeaderComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    mainElement: () => this.page.locator('.b-product-detail__header'),
    travelTitle: () => this.Elements.mainElement().locator('h1'),
    travelSubTitle: () => this.Elements.mainElement().locator('h2'),
    shareLink: () => this.Elements.mainElement().locator('.shareLink'),
    addToFavoriteLink: () =>
      this.Elements.mainElement().locator(
        '[data-modal--favourite-modal-type="favourite-add"]',
      ),
  }
}
