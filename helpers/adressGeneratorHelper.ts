import type { DateInput, Languages } from '../helpers/types'

export interface SearchParameters {
  language: Languages
  startDate: DateInput
  endDate: DateInput
  pageNumber?: number
  adultsAmount?: number
  departureCountry?: string
}

/**
 * Generates vacation part of URL based on language.
 * @param {Languages} language
 * @returns {Languages} Return proper part of vacation link.
 * @example
 * //returns 'wakacje'
 * getTravelLanguage('pl');
 */
const getTravelLanguage: (
  language: Languages,
) => 'wakacje' | 'dovolena' | 'dovolenka' | 'utazasok' = (
  language: Languages,
) => {
  switch (language) {
    case 'pl':
      return 'wakacje'
    case 'cz':
      return 'dovolena'
    case 'sk':
      return 'dovolenka'
    case 'hu':
      return 'utazasok'
  }
}

/**
 * Generates date string for search URL based on language
 * @param {DateInput} dateInput
 * @param {Languages} language
 * @returns {string} Return proper date string
 * @example
 * //returns '1910.10.10.'
 * getTravelLanguage({{
  language: Languages
  startDate: DateInput
  endDate: DateInput
});
 */
const getProperDateFormat: (
  dateInput: DateInput,
  language: Languages,
) => string = (dateInput: DateInput, language: Languages) => {
  switch (language) {
    case 'hu':
      return `${dateInput.year}.${dateInput.month}.${dateInput.day}.`
    default:
      return `${dateInput.day}.${dateInput.month}.${dateInput.year}`
  }
}

/**
 * Generates proper part of vacation URL
 * @param {SearchParameters} searchParameters
 * @returns {string} Return proper part of URL vacation string
 * @example
 * //returns '/dovolena/?s_action=TRIPS_HP&nl_occupancy_adults=2&nl_transportation_id%5B%5D=3_&nl_transportation_id%5B%5D=3_CZ&page=1&d_start_from=15.12.2021&d_end_to=21.12.2021&nl_length_from=3&nl_length_to=3&duration=Custom&nl_country_id%5B%5D=11&s_holiday_target=tours'
 * generateOffersListLink({
    language: 'cz',
    startDate: { day: '15', month: '12', year: '2021' },
    endDate: { day: '21', month: '12', year: '2021' },
  })
 * //returns '/dovolenka/?s_action=TRIPS_HP&nl_occupancy_adults=10&nl_transportation_id%5B%5D=3_&nl_transportation_id%5B%5D=3_DE&page=3&d_start_from=21.07.2022&d_end_to=23.07.2022&nl_length_from=3&nl_length_to=3&duration=Custom&nl_country_id%5B%5D=11&s_holiday_target=tours'
 * generateOffersListLink(
    language: 'sk',
    startDate: { day: '21', month: '07', year: '2022' },
    endDate: { day: '23', month: '07', year: '2022' },
    adultsAmount: 10,
    departureCountry: 'de',
    pageNumber: 3,
  })
 */
export function generateOffersListLink(searchParameters: SearchParameters) {
  const languageValue = getTravelLanguage(searchParameters.language)
  const getStartDate = getProperDateFormat(
    searchParameters.startDate,
    searchParameters.language,
  )
  const getEndDate = getProperDateFormat(
    searchParameters.endDate,
    searchParameters.language,
  )
  return `/${languageValue}/?s_action=TRIPS_HP&nl_occupancy_adults=${searchParameters.adultsAmount ? searchParameters.adultsAmount : 2}&nl_transportation_id%5B%5D=3_&nl_transportation_id%5B%5D=3_${searchParameters.departureCountry ? searchParameters.departureCountry.toUpperCase() : searchParameters.language.toUpperCase()}&page=${searchParameters.pageNumber ? searchParameters.pageNumber : 1}&d_start_from=${getStartDate}&d_end_to=${getEndDate}&nl_length_from=3&nl_length_to=3&duration=Custom&nl_country_id%5B%5D=11&s_holiday_target=tours`
}
