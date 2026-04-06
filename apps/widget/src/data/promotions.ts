import { Promotion } from '@/src/types';

export const promotions: Promotion[] = [
  {
    id: 'p1',
    hotelId: 'h1',
    name: 'Welcome Discount',
    description: '10% off your first booking',
    discountType: 'PERCENTAGE',
    discountValue: 10,
    validFrom: '2024-01-01T00:00:00Z',
    validTo: '2024-12-31T23:59:59Z',
    isActive: true,
  },
  {
    id: 'p2',
    hotelId: 'h1',
    name: 'Spring Special',
    description: '€20 discount on spring bookings',
    discountType: 'FIXED',
    discountValue: 20,
    validFrom: '2024-03-01T00:00:00Z',
    validTo: '2024-05-31T23:59:59Z',
    isActive: true,
  },
];
