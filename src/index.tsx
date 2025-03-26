import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { Provider } from 'react-redux'
import offers from './mocks/offers';
import {offersList } from './mocks/offers-list';
import "../node_modules/leaflet/dist/leaflet.css";
import { reviews } from './mocks/reviews';
import { store } from './store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App rentalOffersCount={Setting.RentalOffersCount}
      offersList={ offersList } 
      offers = { offers }
      reviews = { reviews }
      />
    </Provider>
  </React.StrictMode>
);