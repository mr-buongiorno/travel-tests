import { expect } from '@playwright/test'
import { homePageTest } from '../fixtures/homePage.fixtures'

homePageTest.beforeEach(async ({ homePage }) => {
  await homePage.visitHomePage()
})

homePageTest(
  'Check crucial elements for Home Page',
  async ({ homePage, pageTranslations }) => {
    await expect.soft(homePage.elements.phoneButton()).toBeVisible()
    await expect
      .soft(homePage.elements.phoneButton())
      .toHaveText(pageTranslations.phone)
    await expect.soft(homePage.elements.logInButton()).toBeVisible()
    await expect
      .soft(homePage.elements.logInButton())
      .toHaveText(pageTranslations.logInButton)
    await expect.soft(homePage.elements.destinationInput()).toBeVisible()
    await expect
      .soft(homePage.elements.destinationInput())
      .toHaveAttribute('placeholder', pageTranslations.destinationPlaceholder)
    await expect.soft(homePage.elements.dateInput()).toBeVisible()
    await expect
      .soft(homePage.elements.dateInput())
      .toHaveAttribute(
        'placeholder',
        pageTranslations.whenAndHowLongPlaceHolder,
      )
    await expect.soft(homePage.elements.transportationInput()).toBeVisible()
    await expect
      .soft(homePage.elements.transportationInput())
      .toHaveAttribute(
        'placeholder',
        pageTranslations.departureAndWayPlaceholder,
      )
    await expect.soft(homePage.elements.adultPersonInput()).toBeVisible()
    await expect
      .soft(homePage.elements.adultPersonInput())
      .toHaveAttribute('placeholder', pageTranslations.personNumberPlaceholder)
    await expect.soft(homePage.elements.childrenPersonInput()).toBeVisible()
    await expect
      .soft(homePage.elements.childrenPersonInput())
      .toHaveAttribute('placeholder', pageTranslations.personNumberPlaceholder)
    await expect.soft(homePage.elements.searchButton()).toBeVisible()
    await expect
      .soft(homePage.elements.searchButton())
      .toHaveText(pageTranslations.searchButton)
  },
)
