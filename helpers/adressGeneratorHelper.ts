import type { DateInput, Languages } from '../helpers/types'

export interface SearchParameters {
  language: Languages
  startDate: DateInput
  endDate: DateInput
  pageNumber?: number
  adultsAmount?: number
  departureCountry?: string
}

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
