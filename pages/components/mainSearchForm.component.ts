import type { Page } from '@playwright/test'
import { getElementIndex } from '../../helpers/elementHelpers'

export default class MainSearchFormComponent {
  private page
  constructor(page: Page) {
    this.page = page
  }

  Elements = {
    resultCounterText: () => this.page.getByTestId('sf-results-counter-number'),
    searchButton: () => this.page.getByTestId('sf-submit-button'),
    dateInput: () => this.page.getByTestId('sf-datepicker-textbox'),
    transportationInput: () =>
      this.page.getByTestId('sf-transportation-picker-textbox'),
    startDatePickerInput: () =>
      this.page.getByTestId('sf-datepicker-start-date-textbox'),
    endDatePickerInput: () =>
      this.page.getByTestId('sf-datepicker-end-date-textbox'),
    childrenPersonInput: () =>
      this.page.getByTestId('person-textbox-control-children'),
    adultPersonInput: () =>
      this.page.getByTestId('person-textbox-control-adults'),
    destinationInput: () =>
      this.page.getByTestId('sf-destination-picker-textbox'),
    destinationPickerInput: () =>
      this.page.getByTestId('sf-destination-picker-popup-search-textbox'),

    toursButton: () => this.page.locator('[data-value="tours"'),
    accommodationButton: () => this.page.locator('[data-value="accommodation"'),
    saveDestinationButton: () =>
      this.page.getByTestId('sf-destination-picker-popup-save-button'),
    destinationContent: () =>
      this.page.getByTestId('sf-destination-picker-popup-content'),
    destinationText: () =>
      this.Elements.destinationContent().locator('.i-checkbox__label-text'),
    destinationCheckbox: (elementIndex: number) =>
      this.Elements.destinationContent()
        .locator('.i-checkbox__input')
        .nth(elementIndex),
    dayButton: (day: number, month: number, year: number) =>
      this.page.locator(`#datepicker-calendar-day-${day}-${month}-${year}`),
    saveDateButton: () =>
      this.page.getByTestId('sf-datepicker-popup-save-button'),
  }

  async clickDestinationInput() {
    await this.Elements.destinationInput().click()
  }

  async enterDestinationText(destinationText: string) {
    await this.Elements.destinationPickerInput().fill(destinationText)
  }

  async checkInDestinationsPlaces(destinationNumbersToCheckIn: number[]) {
    this.Elements.destinationCheckbox(1).waitFor({ state: 'visible' })
    for await (const destinationNumberToCheckIn of destinationNumbersToCheckIn) {
      await this.Elements.destinationCheckbox(
        destinationNumberToCheckIn,
      ).check()
    }
  }

  async clickSaveDestinationButton() {
    await this.Elements.saveDestinationButton().click()
  }

  async chooseDestinationCountryAndPlace(
    destinationCountry: string,
    destinationPlacesToCheck: number[],
  ) {
    await this.clickDestinationInput()
    await this.enterDestinationText(destinationCountry)
    await this.checkInDestinationsPlaces(destinationPlacesToCheck)
    await this.clickSaveDestinationButton()
  }

  async clickDateInput() {
    await this.Elements.dateInput().click()
  }

  async clickSpecifiedDay(day: number, month: number, year: number) {
    await this.Elements.dayButton(day, month, year).click()
  }

  async clickSaveDateButton() {
    await this.Elements.saveDateButton().click()
  }

  async chooseTravelDatesRange(dateRange: {
    startDate: { day: number; month: number; year: number }
    endDate: { day: number; month: number; year: number }
  }) {
    await this.clickDateInput()
    await this.clickSpecifiedDay(
      dateRange.startDate.day,
      dateRange.startDate.month,
      dateRange.startDate.year,
    )
    await this.clickSpecifiedDay(
      dateRange.endDate.day,
      dateRange.endDate.month,
      dateRange.endDate.year,
    )
    await this.clickSaveDateButton()
  }

  async clickSearchButton() {
    await this.Elements.searchButton().click()
  }
}
