export interface HomePageTranslation {
  phone: string
  logInButton: string
  destinationPlaceholder: string
  whenAndHowLongPlaceHolder: string
  departureAndWayPlaceholder: string
  personNumberPlaceholder: string
  searchButton: string
}

interface HomePageLanguages {
  pl: HomePageTranslation
  cz: HomePageTranslation
  sk: HomePageTranslation
  hu: HomePageTranslation
}

export const homePageTranslations: HomePageLanguages = {
  pl: {
    phone: 'Zadzwoń +48 71 771 76 55',
    logInButton: 'Zaloguj się',
    destinationPlaceholder: 'Gdzie chcesz pojechać?',
    whenAndHowLongPlaceHolder: 'Kiedy i na jak długo?',
    departureAndWayPlaceholder: 'Skąd i jak?',
    personNumberPlaceholder: 'Wybierz liczbę osób',
    searchButton: 'Szukaj',
  },
  cz: {
    phone: 'Volejte 226 000 296',
    logInButton: 'Přihlásit se',
    destinationPlaceholder: 'Destinace nebo hotel?',
    whenAndHowLongPlaceHolder: 'Kdy a na jak dlouho?',
    departureAndWayPlaceholder: 'Jak cestujete?',
    personNumberPlaceholder: 'Vyberte počet osob',
    searchButton: 'Hledat',
  },
  sk: {
    phone: 'Volajte +421 2 3221 0492',
    logInButton: 'Prihlásiť sa',
    destinationPlaceholder: 'Destinácia alebo hotel',
    whenAndHowLongPlaceHolder: 'Kedy a na ako dlho?',
    departureAndWayPlaceholder: 'Ako cestujete?',
    personNumberPlaceholder: 'Vyberte počet osôb',
    searchButton: 'Hľadať',
  },
  hu: {
    phone: 'Hívjon minket: +36 1 501 5640',
    logInButton: 'Bejelentkezés',
    destinationPlaceholder: 'Úticél, vagy szállás neve',
    whenAndHowLongPlaceHolder: 'Mettől meddig utazna?',
    departureAndWayPlaceholder: 'Mivel utazna?',
    personNumberPlaceholder: 'Összlétszám:',
    searchButton: 'Keresés',
  },
}
