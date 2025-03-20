import React from "react";
import { JSX } from "react";
import { useState } from "react";

type Review = {
  userName: string;
  avatarUrl: string;
  rating: number;
  text: string;
  date: string;
};

function CommentForm(): JSX.Element {
  // Состояние для формы
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>("");

  // Состояние для списка отзывов
  const [reviews, setReviews] = useState<Review[]>([
    {
      userName: "Max",
      avatarUrl: "img/avatar-max.jpg",
      rating: 4, // 80% = 4 звезды
      text: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
      date: "2019-04-24",
    },
  ]);

  // Обработчик изменения рейтинга
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value, 10));
  };

  // Обработчик изменения текста отзыва
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (rating && review.length >= 50) {
      const newReview: Review = {
        userName: "User",
        avatarUrl: "img/avatar-default.jpg",
        rating: rating,
        text: review,
        date: new Date().toISOString().split("T")[0],
      };

      setReviews([newReview, ...reviews]);
      setRating(null);
      setReview("");
    }
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((reviewItem, index) => (
          <li key={index} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={reviewItem.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{reviewItem.userName}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${reviewItem.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{reviewItem.text}</p>
              <time className="reviews__time" dateTime={reviewItem.date}>
                {new Date(reviewItem.date).toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={star}
                id={`${star}-stars`}
                type="radio"
                checked={rating === star}
                onChange={handleRatingChange}
              />
              <label
                htmlFor={`${star}-stars`}
                className="reviews__rating-label form__rating-label"
                title={
                  star === 5
                    ? "perfect"
                    : star === 4
                    ? "good"
                    : star === 3
                    ? "not bad"
                    : star === 2
                    ? "badly"
                    : "terribly"
                }
              >
                <img
                  className={`form__star-image ${rating && rating >= star ? "active" : "inactive"}`}
                  src={rating && rating >= star ? "/img/star-active.svg" : "/img/star-white.svg"}
                  width="37"
                  height="33"
                  alt={`Star ${star}`}
                />
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
          onChange={handleReviewChange}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{" "}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!rating || review.length < 50}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export { CommentForm };