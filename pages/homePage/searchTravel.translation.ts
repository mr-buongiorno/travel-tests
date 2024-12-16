export interface SearchTravelTranslation {
  egypt: string
}

interface SearchTravelLanguages {
  pl: SearchTravelTranslation
  cz: SearchTravelTranslation
  sk: SearchTravelTranslation
  hu: SearchTravelTranslation
}

export const searchTravelTranslations: SearchTravelLanguages = {
  pl: {
    egypt: 'Egipt',
  },
  cz: {
    egypt: 'Egypt',
  },
  sk: {
    egypt: 'Egypt',
  },
  hu: {
    egypt: 'Egyiptom',
  },
}
