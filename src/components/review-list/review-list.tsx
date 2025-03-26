import { JSX } from "react";
import { useState } from "react";
import { Review } from "../review/review";
import { ReviewForm } from "../review-form/review-form";
import { ReviewType } from "../../types/review";
import { reviews as initialReviews } from "../../mocks/reviews";

type ReviewListProps = {
  offerId: string;
};

function ReviewList({ offerId }: ReviewListProps): JSX.Element {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>("");

  const [reviews, setReviews] = useState<ReviewType[]>(initialReviews);

  const filteredReviews = reviews.filter((review) => review.offerId === offerId);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleReviewChange = (newReview: string) => {
    setReview(newReview);
  };

  const handleSubmit = (submittedRating: number, submittedReview: string) => {
    const newReview: ReviewType = {
      id: crypto.randomUUID(),
      user: {
        name: "User",
        avatarUrl: "img/avatar-default.jpg",
        isPro: false,
      },
      rating: submittedRating,
      comment: submittedReview,
      date: new Date().toISOString(),
      offerId: offerId, // Привязываем новый отзыв к текущему предложению
    };
    setReviews([newReview, ...reviews]);
    setRating(null);
    setReview("");
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{filteredReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {filteredReviews.map((reviewItem) => (
          <Review
            key={reviewItem.id}
            id={reviewItem.id}
            user={reviewItem.user}
            rating={reviewItem.rating}
            comment={reviewItem.comment}
            date={reviewItem.date}
            offerId={reviewItem.offerId}
          />
        ))}
      </ul>
      <ReviewForm
        rating={rating}
        review={review}
        onRatingChange={handleRatingChange}
        onReviewChange={handleReviewChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
}

export { ReviewList };