import type { OfferItem } from '../fixtures/testData/offersListData'
import type { HomePageTranslation } from '../pages/homePage/homePage.translation'
import { test as base } from '@playwright/test'
import { offerItemsLists } from '../fixtures/testData/offersListData'
import { getCountry } from '../helpers/teststHelper'
import HomePage from '../pages/homePage/home.page'
import { homePageTranslations } from '../pages/homePage/homePage.translation'
import {
  type ErrorLoginTranslation,
  errorLoginTranslations,
} from '../pages/homePage/loginError.translation'
import {
  type SearchTravelTranslation,
  searchTravelTranslations,
} from '../pages/homePage/searchTravel.translation'
import OffersPage from '../pages/offersPage/offers.page'

interface HomePageFixtures {
  homePage: HomePage
  pageTranslations: HomePageTranslation
}

interface LoginFixtures {
  homePage: HomePage
  errorLoginTranslations: ErrorLoginTranslation
}

interface SearchTravelFixtures {
  homePage: HomePage
  offersPage: OffersPage
  searchTravelTranslations: SearchTravelTranslation
  offersListData: OfferItem[]
}

export const homePageTest = base.extend<HomePageFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    use(homePage)
  },
  pageTranslations: async ({}, use, testInfo) => {
    const projectName: string = testInfo.project.name
    const getCountryDomain = getCountry(projectName)
    use(homePageTranslations[getCountryDomain])
  },
})

export const negativeLoginTest = base.extend<LoginFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    use(homePage)
  },
  errorLoginTranslations: async ({}, use, testInfo) => {
    const projectName: string = testInfo.project.name
    const getCountryDomain = getCountry(projectName)
    use(errorLoginTranslations[getCountryDomain])
  },
})

export const searchTravelTest = base.extend<SearchTravelFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    use(homePage)
  },
  searchTravelTranslations: async ({}, use, testInfo) => {
    const projectName: string = testInfo.project.name
    const getCountryDomain = getCountry(projectName)
    use(searchTravelTranslations[getCountryDomain])
  },
  offersPage: async ({ page }, use) => {
    const offersPage = new OffersPage(page)
    use(offersPage)
  },

  offersListData: async ({}, use, testInfo) => {
    const projectName: string = testInfo.project.name
    const getCountryDomain = getCountry(projectName)
    use(offerItemsLists[getCountryDomain])
  },
})
