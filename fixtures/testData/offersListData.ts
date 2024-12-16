export interface OfferItem {
  title: string
}

interface OfferItemsPerLanguage {
  pl: OfferItem[]
  cz: OfferItem[]
  sk: OfferItem[]
  hu: OfferItem[]
}

export const offerItemsLists: OfferItemsPerLanguage = {
  pl: [{ title: 'Gemma Resort' }],
  cz: [{ title: 'Barceló Cairo Pyramids' }],
  sk: [{ title: 'Pyramids Park Resort' }],
  hu: [{ title: 'Jasmine Palace' }],
}
