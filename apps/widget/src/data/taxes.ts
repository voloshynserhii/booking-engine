import { Tax } from '@/src/types';

export const taxes: Tax[] = [
  {
    id: 'tx1',
    hotelId: 'h1',
    name: 'Sales Tax',
    type: 'PERCENTAGE',
    value: 10,
    isMandatory: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'tx2',
    hotelId: 'h1',
    name: 'City Tax',
    type: 'FIXED',
    value: 5,
    isMandatory: true,
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'tx3',
    hotelId: 'h1',
    name: 'Resort Fee',
    type: 'FIXED',
    value: 15,
    isMandatory: false,
    createdAt: '2024-01-01T00:00:00Z',
  },
];
