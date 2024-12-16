import type { Page } from '@playwright/test'
import HeaderTopMenuComponent from '../components/headerTopMenu.component'
import LoginModalComponent from '../components/logInModal.component'
import MainSearchFormComponent from '../components/mainSearchForm.component'

export default class HomePage {
  private headerTopMenuComponent: HeaderTopMenuComponent
  private loginModalComponent: LoginModalComponent
  private mainSearchForm: MainSearchFormComponent
  private page: Page
  constructor(page: Page) {
    this.page = page
    this.headerTopMenuComponent = new HeaderTopMenuComponent(page)
    this.loginModalComponent = new LoginModalComponent(page)
    this.mainSearchForm = new MainSearchFormComponent(page)
  }

  get elements() {
    return {
      ...this.headerTopMenuComponent.Elements,
      ...this.loginModalComponent.Elements,
      ...this.mainSearchForm.Elements,
    }
  }

  async logInWithCredentials(emailValue: string, passwordValue: string) {
    await this.headerTopMenuComponent.clickLoginButton()
    await this.loginModalComponent.enterCredentialsAndClickLoginFormButton(
      emailValue,
      passwordValue,
    )
  }

  async visitHomePage() {
    await this.page.goto('/')
  }

  async searchTravel(searchTravelParameters: {
    destinationCountry: string
    destinationPlacesToCheck: number[]
    startDate: { day: number; month: number; year: number }
    endDate: { day: number; month: number; year: number }
  }) {
    await this.mainSearchForm.chooseDestinationCountryAndPlace(
      searchTravelParameters.destinationCountry,
      searchTravelParameters.destinationPlacesToCheck,
    )
    await this.mainSearchForm.chooseTravelDatesRange({
      startDate: searchTravelParameters.startDate,
      endDate: searchTravelParameters.endDate,
    })
    await this.mainSearchForm.clickSearchButton()
  }
}
