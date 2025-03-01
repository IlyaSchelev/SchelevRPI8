import {JSX} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { AuthorizationStatus } from '../../const.ts'
import { PrivateRoute } from '../private-route/private-route.tsx';
import { FullOffer, OffersList } from '../../types/offer.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Errorpage from '../../pages/error-page/error-page.tsx';

type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
}

function App({ rentalOffersCount, offers }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={ rentalOffersCount } offersList={offersList}
          offers = { offers }/>}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={ AuthorizationStatus.NoAuth }
            >
              <Favorites />

            </PrivateRoute>
          }

        />

        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />

        <Route
          path={`${AppRoute.Offer}/:id` } element ={<Offer offers = {offers}/>}
        />

        <Route
          path='*'
          element={<Errorpage/>}
        />
      </Routes>
    </BrowserRouter>
  );
} export default App;

