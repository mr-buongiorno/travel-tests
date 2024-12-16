import type { Page } from '@playwright/test'
import HeaderTopMenuComponent from '../components/headerTopMenu.component'
import LoginModalComponent from '../components/logInModal.component'
import MainSearchFormComponent from '../components/mainSearchForm.component'
import TravelDetailsCardComponent from './components/travelDetailsCard.component'
import TravelDetailsHeaderComponent from './components/travelDetailsHeader.component'
import TravelDetailsSideComponent from './components/travelDetailsSide.component'

export default class OfferDetailsPage {
  private headerTopMenuComponent: HeaderTopMenuComponent
  private loginModalComponent: LoginModalComponent
  private mainSearchFormComponent: MainSearchFormComponent
  private travelDetailsSideComponent: TravelDetailsSideComponent
  private travelDetailsCardComponent: TravelDetailsCardComponent
  private travelDetailsHeaderComponent: TravelDetailsHeaderComponent
  private page: Page
  constructor(page: Page) {
    this.page = page
    this.headerTopMenuComponent = new HeaderTopMenuComponent(page)
    this.loginModalComponent = new LoginModalComponent(page)
    this.mainSearchFormComponent = new MainSearchFormComponent(page)
    this.travelDetailsSideComponent = new TravelDetailsSideComponent(page)
    this.travelDetailsCardComponent = new TravelDetailsCardComponent(page)
    this.travelDetailsHeaderComponent = new TravelDetailsHeaderComponent(page)
  }

  get elements() {
    return {
      ...this.headerTopMenuComponent.Elements,
      ...this.loginModalComponent.Elements,
      ...this.mainSearchFormComponent.Elements,
      ...this.travelDetailsSideComponent.Elements,
      ...this.travelDetailsCardComponent.Elements,
      ...this.travelDetailsHeaderComponent.Elements,
    }
  }
}
