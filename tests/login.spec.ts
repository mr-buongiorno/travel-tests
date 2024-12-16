import { faker } from '@faker-js/faker'
import { expect } from '@playwright/test'
import { negativeLoginTest } from '../fixtures/homePage.fixtures'

negativeLoginTest.beforeEach(async ({ homePage }) => {
  await homePage.visitHomePage()
})

negativeLoginTest(
  'A user should get error message after enter wrong email and password during login procedure',
  async ({ homePage, errorLoginTranslations }) => {
    await homePage.logInWithCredentials(
      faker.internet.email(),
      faker.internet.password(),
    )
    await expect(homePage.elements.errorMessageText()).toHaveText(
      errorLoginTranslations.wrongCredentials,
    )
  },
)
