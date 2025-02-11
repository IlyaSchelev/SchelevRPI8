import {JSX} from 'react'
// import MainPage from "../my-rent-service/src/pages/main-page/main-page.tsx"
// import Login from '../../pages/login/login';
// import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';

// type AppMainPageProps = {
//     rentalOffersCount: number;
//   }

// function App({rentalOffersCount}:AppMainPageProps): JSX.Element {
//   //  return (<MainPage rentalOffersCount={rentalOffersCount}/>);
//    return (<Login />);
// } 

// function App(): JSX.Element {
//    return (<Login />);
// } 

// function App(): JSX.Element {
//   return (<Favorites />);
// } 

function App(): JSX.Element {
  return (<Offer />);
} 

export default App;