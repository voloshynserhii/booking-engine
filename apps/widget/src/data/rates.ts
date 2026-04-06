import { Rate } from '@/src/types';

export const rates: Rate[] = [
  {
    id: 'rt1',
    name: 'Standard',
    price: 120,
    isAvailable: true,
    features: ['Book now, pay later', 'Free cancellation'],
  },
  {
    id: 'rt2',
    name: 'Advance Purchase',
    price: 95,
    isAvailable: true,
    features: ['Non-refundable', '20% discount'],
  },
  {
    id: 'rt3',
    name: 'Premium',
    price: 180,
    isAvailable: true,
    features: ['Free breakfast', 'Late checkout', 'Room upgrade'],
  },
  {
    id: 'rt4',
    name: 'Executive',
    price: 250,
    isAvailable: true,
    features: ['All inclusive', 'Concierge service', 'Parking'],
  },
];
