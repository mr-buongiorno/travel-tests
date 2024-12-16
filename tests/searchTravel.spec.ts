import { expect } from '@playwright/test'
import { searchTravelTest } from '../fixtures/homePage.fixtures'

searchTravelTest.beforeEach(async ({ homePage }) => {
  await homePage.visitHomePage()
})

searchTravelTest(
  'As a user I Would like to search travel and see proper results',
  async ({
    homePage,
    offersPage,
    searchTravelTranslations,
    offersListData,
  }) => {
    await homePage.searchTravel({
      destinationCountry: searchTravelTranslations.egypt,
      destinationPlacesToCheck: [0],
      startDate: { day: 24, month: 12, year: 2024 },
      endDate: { day: 29, month: 12, year: 2024 },
    })
    await expect(offersPage.elements.travelHeader(0)).toBeVisible()
    await expect(offersPage.elements.travelHeader(0)).toHaveText(
      offersListData[0].title,
    )
  },
)
