import type { Page } from '@playwright/test'

export default class TravelDetailsSideComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    mainElement: () => this.page.locator('.b-product-detail__side'),
    dateRangeLabelText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(0),
    dayAmount: () =>
      this.Elements.mainElement().locator('.b-summary-info__info'),
    travelTypeText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(1),
    departureAirportLabelText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(2),
    departureAirportValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(3),

    targetAirportValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(4),
    adultAmountValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(5),

    roomTypeValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(6),
    travelOrganizerValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(7),
    travelSupportValueText: () =>
      this.Elements.mainElement().locator('.b-summary-info__inner').nth(8),
    availabilityRoomLabelText: () =>
      this.Elements.mainElement().locator('.b-summary-info__desc').nth(0),
    travelOrganizerLabelText: () =>
      this.Elements.mainElement().locator('.b-summary-info__desc').nth(1),
    travelSupportLabelText: () =>
      this.Elements.mainElement().locator('.b-summary-info__desc').nth(2),
    groupPriceText: () => this.Elements.mainElement().locator('.price').nth(0),
    singlePersonPriceText: () =>
      this.Elements.mainElement().locator('.price').nth(1),
    submitButton: () =>
      this.Elements.mainElement().locator('button[type="submit"]').nth(0),
  }
}
