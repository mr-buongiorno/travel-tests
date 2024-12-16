export interface OfferDetailsItem {
  title: string
  subtitle: string
  dateRange: string
  dayAmount: string
  groupPrice: string
  singlePersonPrice: string
  submitButton: string
  travelType: string
  departureAirportLabel: string
  departureAirport: string
  adultAmount: string
  roomType: string
  travelOrganizer: string
  travelSupport: string
  availabilityRoom: string
  travelOrganizerLabel: string
  travelSupportLabel: string
  targetAirport: string
}

interface OfferDetailsItemsPerLanguage {
  pl: OfferDetailsItem[]
  cz: OfferDetailsItem[]
  sk: OfferDetailsItem[]
  hu: OfferDetailsItem[]
}

export const offerDetailsItemsLists: OfferDetailsItemsPerLanguage = {
  pl: [
    {
      title: 'Blend El Phistone Beach Resort',
      subtitle: 'Egipt, Marsa Alam, Marsa Alam',
      dateRange: 'Wt 24.12. - Cz 26.12.2024',
      groupPrice: '6226 zł',
      singlePersonPrice: '3113 zł',
      submitButton: 'Idę dalej',
      travelType: 'All Inclusive',
      departureAirportLabel: '',
      departureAirport: 'Katowice',
      adultAmount: '2 dorosłych',
      roomType: 'Superior superior room double room',
      travelOrganizer: 'Join UP!',
      travelSupport: 'Opieka i wsparcie',
      availabilityRoom: '',
      travelOrganizerLabel: '',
      travelSupportLabel: '',
      dayAmount: '3 dni / 2 noce',
      targetAirport: 'Marsa Alam',
    },
  ],
  cz: [
    {
      title: 'Pickalbatros Sea World Resort',
      subtitle: 'Egypt, Marsa Alam, Al-Kusajr',
      dateRange: 'čt 26.12. - so 28.12.2024',
      groupPrice: '53 459 Kč',
      singlePersonPrice: '26 730 Kč',
      submitButton: 'Rezervovat',
      travelType: 'All Inclusive',
      departureAirportLabel: '',
      departureAirport: 'Praha',
      adultAmount: '2 dospělí',
      roomType: 'Dvoulůžkový pokoj',
      travelOrganizer: 'DER Touristik',
      travelSupport: 'Dynamický balíček',
      availabilityRoom: '',
      travelOrganizerLabel: '',
      travelSupportLabel: '',
      dayAmount: '3 dny / 2 noci',
      targetAirport: 'Hurghada',
    },
  ],
  sk: [
    {
      title: 'Palm Beach Resort',
      subtitle: 'Egypt, Hurghada, Hurghada - Dahar',
      dateRange: 'pi 27.12. - ne 29.12.2024',
      groupPrice: '1 020 €',
      singlePersonPrice: '510 €',
      submitButton: 'Pokračovať',
      travelType: 'All Inclusive',
      departureAirportLabel: '',
      departureAirport: 'Viedeň',
      adultAmount: '2 dospelí',
      roomType: 'Dvojlôžková izba',
      travelOrganizer: 'vtours',
      travelSupport: 'Invia Care',
      availabilityRoom: '',
      travelOrganizerLabel: '',
      travelSupportLabel: '',
      dayAmount: '3 dni / 2 noci',
      targetAirport: 'Hurgada',
    },
  ],
  hu: [
    {
      title: 'Jasmine Palace',
      subtitle: 'Egyiptom, Hurghada',
      dateRange: '2024.12.25. (Sze) - 12.27. (P)',
      groupPrice: '717 441 Ft',
      singlePersonPrice: '358 721 Ft',
      submitButton: 'Tovább',
      travelType: 'All inclusive',
      departureAirportLabel: '',
      departureAirport: 'Bécs',
      adultAmount: '2 felnőtt',
      roomType: 'Kétágyas szoba',
      travelOrganizer: 'vtours',
      travelSupport: 'Invia Care',
      availabilityRoom: '',
      travelOrganizerLabel: '',
      travelSupportLabel: '',
      dayAmount: '3 nap / 2 éj',
      targetAirport: 'Gurdaka',
    },
  ],
}
