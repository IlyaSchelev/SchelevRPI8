// mocks/reviews.ts

import { ReviewType } from "../types/review";

const reviews: ReviewType[] = [
  {
    id: "463623e8-eccc-42a2-b2fc-797a299b523e",
    comment: "The room was spacious and clean. The pool looked nothing like the photos.",
    date: "2023-06-29T21:00:00.465Z",
    rating: 4,
    user: {
      name: "Isaac",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: true,
    },
    offerId: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-222", // Связываем с первым предложением
  },
  {
    id: "a1b2c3d4-e5f6-47g8-h9i0-j1k2l3m4n5o6",
    comment: "A quiet cozy place with a great view of the river. Perfect for a relaxing stay.",
    date: "2023-05-15T10:30:00.000Z",
    rating: 5,
    user: {
      name: "Sophie",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false,
    },
    offerId: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-111", // Связываем со вторым предложением
  },
  {
    id: "p9o8i7u6-y5t4-r3e2-w1q0-zx9cv8b7n6m",
    comment: "The location was great, but the Wi-Fi was unstable. Overall, a decent stay.",
    date: "2023-04-10T14:20:00.000Z",
    rating: 3,
    user: {
      name: "Alex",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: false,
    },
    offerId: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-333", // Связываем с третьим предложением
  },
];

export { reviews };