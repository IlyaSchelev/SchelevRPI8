import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { CityOffer } from '../../types/offer';

type CitiesListProps = {
  cities: CityOffer[];
  selectedCity: CityOffer;
};

function CitiesList({ cities, selectedCity }: CitiesListProps) {
  const dispatch = useAppDispatch();

  const handleCityClick = (city: CityOffer) => {
    dispatch(changeCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${
                city.name === selectedCity.name ? 'tabs__item--active' : ''
              }`}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleCityClick(city);
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;