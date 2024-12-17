import type { Page } from '@playwright/test'
import type {
  SearchParameters,
} from '../../helpers/adressGeneratorHelper'
import {
  generateOffersListLink,
} from '../../helpers/adressGeneratorHelper'
import HeaderTopMenuComponent from '../components/headerTopMenu.component'
import LoginModalComponent from '../components/logInModal.component'
import MainSearchFormComponent from '../components/mainSearchForm.component'
import SearchFormResultsBoxesComponent from './components/searchFormResultsBoxes.component'

export default class OffersPage {
  private headerTopMenuComponent: HeaderTopMenuComponent
  private loginModalComponent: LoginModalComponent
  private mainSearchFormComponent: MainSearchFormComponent
  private searchFormResultsBoxesComponent: SearchFormResultsBoxesComponent
  private page: Page
  constructor(page: Page) {
    this.page = page
    this.headerTopMenuComponent = new HeaderTopMenuComponent(page)
    this.loginModalComponent = new LoginModalComponent(page)
    this.mainSearchFormComponent = new MainSearchFormComponent(page)
    this.searchFormResultsBoxesComponent = new SearchFormResultsBoxesComponent(
      page,
    )
  }

  get elements() {
    return {
      ...this.headerTopMenuComponent.Elements,
      ...this.loginModalComponent.Elements,
      ...this.mainSearchFormComponent.Elements,
      ...this.searchFormResultsBoxesComponent.Elements,
    }
  }

  async visitOffersPage(searchParameters: SearchParameters) {
    const generateUrl: string = generateOffersListLink(searchParameters)
    await this.page.goto(generateUrl)
  }

  async clickOfferWithNumber(offerNumber: number) {
    await this.searchFormResultsBoxesComponent.clickOffer(offerNumber)
  }
}
