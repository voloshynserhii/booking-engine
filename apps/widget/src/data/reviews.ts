import { Review } from '@/src/types';

export const reviews: Review[] = [
  {
    id: 'rev1',
    hotelId: 'h1',
    bookingId: 'b1',
    rating: 5,
    comment: 'Excellent hotel with great service. Highly recommended!',
    createdAt: '2024-03-17T10:00:00Z',
  },
  {
    id: 'rev2',
    hotelId: 'h1',
    bookingId: 'b2',
    rating: 4,
    comment: 'Nice rooms and friendly staff. Could improve breakfast variety.',
    createdAt: '2024-03-20T14:30:00Z',
  },
  {
    id: 'rev3',
    hotelId: 'h1',
    bookingId: 'b3',
    rating: 4,
    comment: 'Good location and clean rooms. WiFi could be faster.',
    createdAt: '2024-03-23T11:15:00Z',
  },
  {
    id: 'rev4',
    hotelId: 'h1',
    bookingId: 'b4',
    rating: 5,
    comment: 'Amazing stay! Perfect for families.',
    createdAt: '2024-03-25T09:00:00Z',
  },
];
