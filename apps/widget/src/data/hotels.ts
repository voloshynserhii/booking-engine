import { Hotel } from '@/src/types';
import { ratePlans } from './ratePlans';

export const hotels: Hotel[] = [
  {
    id: 'h1',
    ownerId: 'u1',
    name: 'The Pines Hotel',
    description: 'Luxury hotel in the heart of the city with stunning views and exceptional service.',
    starRating: 4,
    timezone: 'UTC',
    currency: 'EUR',
    address: '123 Pine Street',
    city: 'New York',
    countryCode: 'US',
    latitude: 40.7128,
    longitude: -74.006,
    checkInTime: '14:00',
    checkOutTime: '11:00',
    imageUrls: [
      'https://images.unsplash.com/photo-1501117716987-c8e6c9b0b9c5?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1618882618692-6e6626ef1bf3?auto=format&fit=crop&w=800',
    ],
    createdAt: '2024-01-01T00:00:00Z',
    ratePlans: ratePlans,
  },
];