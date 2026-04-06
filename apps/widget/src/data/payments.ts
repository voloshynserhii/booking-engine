import { Payment } from '@/src/types';

export const payments: Payment[] = [
  {
    id: 'pay1',
    bookingId: 'b1',
    amount: 480,
    status: 'PAID',
    provider: 'STRIPE',
    createdAt: '2024-03-15T11:30:00Z',
  },
  {
    id: 'pay2',
    bookingId: 'b2',
    amount: 540,
    status: 'PAID',
    provider: 'PAYPAL',
    createdAt: '2024-03-18T14:00:00Z',
  },
  {
    id: 'pay3',
    bookingId: 'b3',
    amount: 360,
    status: 'PENDING',
    provider: 'STRIPE',
    createdAt: '2024-03-20T09:45:00Z',
  },
  {
    id: 'pay4',
    bookingId: 'b4',
    amount: 650,
    status: 'PAID',
    provider: 'CREDIT_CARD',
    createdAt: '2024-03-22T16:20:00Z',
  },
];
