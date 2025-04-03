import { SortOffersType } from './const';
import { CityOffer, OffersList } from './types/offer';
import { SortOffer } from './types/sort';

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

function sortOffersByType( offers: OffersList[], type: SortOffer ): OffersList[] {
    switch (type) {
      case SortOffersType.PriceToHigh:
        return offers.sort((a, b) => a.price - b.price);
      case SortOffersType.PriceToLow:
        return offers.sort((a, b) => b.price - a.price);
      case SortOffersType.TopRated:
        return offers.sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  } export {sortOffersByType};