import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import offers from './mocks/offers';
import { OffersList } from './types/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App rentalOffersCount={Setting.RentalOffersCount}
    offersList={ offersList } 
    offers = { offers }
    />
  </React.StrictMode>
);