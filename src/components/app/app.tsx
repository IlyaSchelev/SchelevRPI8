import {JSX} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Errorpage from '../../pages/error-page/error-page.tsx';

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />

        <Route
          path={AppRoute.Favorites}
          element={<Favorites/>}
        />

        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />

        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
        />

        <Route
          path='*'
          element={<Errorpage/>}
        />
      </Routes>
    </BrowserRouter>
  );
} export default App;

