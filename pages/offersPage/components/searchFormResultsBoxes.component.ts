import type { Page } from '@playwright/test'

export default class SearchFormResultsBoxesComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    travelList: () => this.page.getByTestId('b-product-list-2__inner'),
    travelElement: (travelNumber: number) =>
      this.Elements.travelList().nth(travelNumber),
    travelHeader: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber).locator('h2'),
    travelPersonPrice: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber).getByTestId('price').first(),
    travelGroupPrice: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber).getByTestId('price').nth(1),
    travelDurationDays: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber)
        .locator('li.tour-params__item')
        .nth(0),
    travelFlightPlan: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber)
        .locator('li.tour-params__item')
        .nth(1),
    travelDatesRange: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber)
        .locator('li.tour-params__item')
        .nth(2),
    travelType: (travelNumber: number) =>
      this.Elements.travelElement(travelNumber)
        .locator('li.tour-params__item')
        .nth(3),
  }

  async clickOffer(offerNumber: number) {
    await this.Elements.travelHeader(offerNumber).click()
  }
}
