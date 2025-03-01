
type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
}

export function CitiesCard({id, title, type, price, previewImage, isPremium, rating}: CitiesCardProps )  {
    return(<article className="cities__card place-card">
        <div className="place-card__mark">
          <span>{isPremium}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href={id}>
            <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro; { price }</b>
              <span className="place-card__price-text">&#47;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">{rating}</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="{id}">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
}

export default CitiesCard;