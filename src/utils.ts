import { CityOffer, OffersList } from './types/offer';

export const getCity = (cityName: string, cities: CityOffer[]): CityOffer => {
  const foundCity = cities.find((city) => city.name === cityName);

  if (!foundCity) {
    throw new Error(`City "${cityName}" not found in the provided cities list.`);
  }

  return foundCity;
};

export const getOffersByCity = (cityName: string | undefined, offers: OffersList[]): OffersList[] => {
    if (!cityName) return [];
    return offers.filter((offer) => offer.city.name === cityName);
  };