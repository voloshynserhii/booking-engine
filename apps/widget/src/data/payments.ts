import { Payment } from '@/src/types';

export const payments: Payment[] = [
  {
    id: 'pay1',
    bookingId: 'b1',
    amount: 480,
    status: 'COMPLETED',
    transactionId: 'txn_123456789',
    createdAt: '2024-03-15T11:30:00Z',
  },
  {
    id: 'pay2',
    bookingId: 'b2',
    amount: 540,
    status: 'COMPLETED',
    transactionId: 'txn_987654321',
    createdAt: '2024-03-18T14:00:00Z',
  },
  {
    id: 'pay3',
    bookingId: 'b3',
    amount: 240,
    status: 'PENDING',
    createdAt: '2024-03-20T16:00:00Z',
  },
];
