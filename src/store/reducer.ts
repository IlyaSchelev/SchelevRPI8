

import { createReducer } from '@reduxjs/toolkit';
import offersList from '../mocks/offers-list'
import { getCity } from '../utils';
import { changeCity, offersCityList } from './action';
import { CITIES_LOCATION } from '../const';
import { CityOffer, OffersList } from '../types/offer';

const defaultCity = getCity('Paris', CITIES_LOCATION);

const initialState = {
  city: defaultCity, // Город по умолчанию — Paris
  offers: offersList as OffersList[], // Список предложений из моков
};

// Редьюсер
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };