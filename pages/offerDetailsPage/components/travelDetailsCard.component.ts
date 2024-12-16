import type { Page } from '@playwright/test'

export default class TravelDetailsCardComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    mainElement: () => this.page.locator('.b-product-detail__card'),
    galleryCarousel: () =>
      this.Elements.mainElement().locator('.b-gallery-slider'),
    aiReview: () =>
      this.Elements.mainElement().locator('b-review-summary__cont'),
  }
}
