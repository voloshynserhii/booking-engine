import { RatePlan } from '@/src/types';

export const ratePlans: RatePlan[] = [
  {
    id: 'rp1',
    hotelId: 'h1',
    name: 'Standard Rate',
    description: 'Standard room rate with breakfast',
    mealPlan: 'BREAKFAST',
    isRefundable: true,
  },
  {
    id: 'rp2',
    hotelId: 'h1',
    name: 'Non-Refundable',
    description: 'Discounted rate, non-refundable',
    mealPlan: 'NONE',
    isRefundable: false,
  },
];