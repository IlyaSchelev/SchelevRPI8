import { CityOffer, OffersList } from './types/offer';

export const getCity = (cityName: string, cities: CityOffer[]): CityOffer => {
  const city = cities.find((c) => c.name === cityName);
  if (!city) {
    throw new Error(`City ${cityName} not found`);
  }
  return city;
};

export const getOffersByCity = (cityName: string | undefined, offers: OffersList[]): OffersList[] => {
  if (!cityName) return [];
  return offers.filter((offer) => offer.city.name === cityName);
};