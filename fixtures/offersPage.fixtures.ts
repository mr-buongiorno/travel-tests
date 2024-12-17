import type { OfferDetailsItem } from './testData/offerDetailsData'
import { test as base } from '@playwright/test'
import { getCountry } from '../helpers/teststHelper'
import OfferDetailsPage from '../pages/offerDetailsPage/offerDetails.page'
import OffersPage from '../pages/offersPage/offers.page'
import { offerDetailsItemsLists } from './testData/offerDetailsData'

interface OfferDetailsFixtures {
  offersPage: OffersPage
  offerDetailsPage: OfferDetailsPage
  offersDetailsData: OfferDetailsItem[]
}

export const offerDetailsTest = base.extend<OfferDetailsFixtures>({
  offersPage: async ({ page }, use) => {
    const offersPage = new OffersPage(page)
    use(offersPage)
  },

  offerDetailsPage: async ({ page }, use) => {
    const offersDetailsPage = new OfferDetailsPage(page)
    use(offersDetailsPage)
  },

  // eslint-disable-next-line no-empty-pattern
  offersDetailsData: async ({}, use, testInfo) => {
    const projectName: string = testInfo.project.name
    const getCountryDomain = getCountry(projectName)
    use(offerDetailsItemsLists[getCountryDomain])
  },
})
