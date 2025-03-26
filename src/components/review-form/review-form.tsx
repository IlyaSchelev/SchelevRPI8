// components/review-form.tsx

import React, { JSX } from "react";

type ReviewFormProps = {
  rating: number | null;
  review: string;
  onRatingChange: (rating: number) => void;
  onReviewChange: (text: string) => void;
  onSubmit: (rating: number, review: string) => void;
};

function ReviewForm({
  rating,
  review,
  onRatingChange,
  onReviewChange,
  onSubmit,
}: ReviewFormProps): JSX.Element {
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRatingChange(parseInt(event.target.value, 10));
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onReviewChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (rating && review.length >= 50) {
      onSubmit(rating, review);
    }
  };

  return (
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
          <span className="reviews__star">rating</span> and describe your stay with at least{" "}
          <b className="reviews__text-amount">50 characters</b>.
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
  );
}

export { ReviewForm };