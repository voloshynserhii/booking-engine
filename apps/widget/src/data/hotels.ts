import { Hotel } from '@/src/types';

export const hotels: Hotel[] = [
  {
    id: 'h1',
    ownerId: 'u1',
    name: 'The Pines Hotel',
    description: 'Luxury hotel in the heart of the city with stunning views and exceptional service.',
    starRating: 4,
    timezone: 'America/New_York',
    currency: 'USD',
    address: '123 Pine Street',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    zipCode: '10001',
    latitude: 40.7128,
    longitude: -74.006,
    email: 'info@thepineshotel.com',
    phone: '+1-555-0100',
    website: 'www.thepineshotel.com',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    imageUrls: [
      'https://images.unsplash.com/photo-1501117716987-c8e6c9b0b9c5?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1618882618692-6e6626ef1bf3?auto=format&fit=crop&w=800',
    ],
    createdAt: '2024-01-01T00:00:00Z',
  },
];