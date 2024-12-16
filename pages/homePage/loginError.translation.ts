export interface ErrorLoginTranslation {
  wrongCredentials: string
}

interface ErrorLoginLanguages {
  pl: ErrorLoginTranslation
  cz: ErrorLoginTranslation
  sk: ErrorLoginTranslation
  hu: ErrorLoginTranslation
}

export const errorLoginTranslations: ErrorLoginLanguages = {
  pl: {
    wrongCredentials: 'Wypełniłeś formularz niepoprawnie. Spróbuj raz jeszcze.',
  },
  cz: {
    wrongCredentials:
      'Zadali jste nesprávné přihlašovací údaje. Prosím zkuste to znovu.',
  },
  sk: {
    wrongCredentials:
      'Zadali ste nesprávne prihlasovací údaje. Skúste to prosím ešte raz.',
  },
  hu: {
    wrongCredentials:
      'Hibás felhasznásználói adatokat adott meg. Kérjük próbálja meg újra.',
  },
}
