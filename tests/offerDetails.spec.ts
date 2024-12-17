import type { OfferDetailsItem } from '../fixtures/testData/offerDetailsData'
import type { Languages } from '../helpers/types'
import { expect } from '@playwright/test'
import { offerDetailsTest } from '../fixtures/offersPage.fixtures'
import { getCountry } from '../helpers/teststHelper'

offerDetailsTest.beforeEach(async ({ offersPage }, testInfo) => {
  const getCountryValue: Languages = getCountry(testInfo.project.name)
  await offersPage.visitOffersPage({
    language: getCountryValue,
    startDate: { day: '24', month: '12', year: '2024' },
    endDate: { day: '27', month: '12', year: '2024' },
    pageNumber: 2,
  })
})

offerDetailsTest(
  'As a User I would like to choose first offer and see proper offer details',
  async ({ offersPage, offerDetailsPage, page, offersDetailsData }) => {
    const offerDetailsDataItem: OfferDetailsItem = offersDetailsData[0]
    await offersPage.clickOfferWithNumber(0)
    await page.waitForLoadState('networkidle')

    await expect.soft(offerDetailsPage.elements.travelTitle()).toBeVisible()
    await expect
      .soft(offerDetailsPage.elements.travelTitle())
      .toHaveText(offerDetailsDataItem.title)

    await expect.soft(offerDetailsPage.elements.travelSubTitle()).toBeVisible()
    await expect
      .soft(offerDetailsPage.elements.travelSubTitle())
      .toHaveText(offerDetailsDataItem.subtitle)

    await expect
      .soft(offerDetailsPage.elements.addToFavoriteLink())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.dateRangeLabelText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.dateRangeLabelText())
      .toHaveText(offerDetailsDataItem.dateRange)

    await expect.soft(offerDetailsPage.elements.dayAmount()).toBeVisible()
    await expect
      .soft(offerDetailsPage.elements.dayAmount())
      .toHaveText(offerDetailsDataItem.dayAmount)

    await expect.soft(offerDetailsPage.elements.travelTypeText()).toBeVisible()
    await expect
      .soft(offerDetailsPage.elements.travelTypeText())
      .toHaveText(offerDetailsDataItem.travelType)

    await expect
      .soft(offerDetailsPage.elements.departureAirportValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.departureAirportValueText())
      .toHaveText(offerDetailsDataItem.departureAirport)

    await expect
      .soft(offerDetailsPage.elements.targetAirportValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.targetAirportValueText())
      .toHaveText(offerDetailsDataItem.targetAirport)

    await expect
      .soft(offerDetailsPage.elements.adultAmountValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.adultAmountValueText())
      .toHaveText(offerDetailsDataItem.adultAmount)

    await expect
      .soft(offerDetailsPage.elements.roomTypeValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.roomTypeValueText())
      .toHaveText(offerDetailsDataItem.roomType)

    await expect
      .soft(offerDetailsPage.elements.travelOrganizerValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.travelOrganizerValueText())
      .toHaveText(offerDetailsDataItem.travelOrganizer)

    await expect
      .soft(offerDetailsPage.elements.travelSupportValueText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.travelSupportValueText())
      .toHaveText(offerDetailsDataItem.travelSupport)

    await expect
      .soft(offerDetailsPage.elements.availabilityRoomLabelText())
      .toBeVisible()

    await expect.soft(offerDetailsPage.elements.groupPriceText()).toBeVisible()
    await expect
      .soft(offerDetailsPage.elements.groupPriceText())
      .toHaveText(offerDetailsDataItem.groupPrice)

    await expect
      .soft(offerDetailsPage.elements.singlePersonPriceText())
      .toBeVisible()

    await expect
      .soft(offerDetailsPage.elements.singlePersonPriceText())
      .toHaveText(offerDetailsDataItem.singlePersonPrice)

    await expect
      .soft(offerDetailsPage.elements.submitButton())
      .toHaveText(offerDetailsDataItem.submitButton)
  },
)
