// mocks/offers-list.ts

import { OffersList } from "../types/offer";

const offersList: OffersList[] = [
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-222',
    'title': 'beautiful place',
    'type': 'apartment',
    'price': 350,
    'previewImage': '/img/apartment-03.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3676,
        'longitude': 4.9041,
        'zoom': 13,
      },
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16,
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
  },
  
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-111',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 370,
    'previewImage': '/img/apartment-01.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        "latitude": 48.8566,
        "longitude": 2.3522,
        'zoom': 13,
      },
    },
    'location': {
      'latitude': 48.8609553943508,
      'longitude': 2.35309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },

  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b-333',
    'title': 'simple place',
    'type': 'house',
    'price': 300,
    'previewImage': '/img/apartment-02.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3676,
        'longitude': 4.9041,
        'zoom': 13,
      },
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16,
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 3.9,
  },
];

export {offersList};