import { Tax } from '@/src/types';

export const taxes: Tax[] = [
  {
    id: 'tx1',
    hotelId: 'h1',
    name: 'VAT',
    rate: 21,
    isPercentage: true,
  },
  {
    id: 'tx2',
    hotelId: 'h1',
    name: 'City Tax',
    rate: 2.5,
    isPercentage: true,
  },
  {
    id: 'tx3',
    hotelId: 'h1',
    name: 'Resort Fee',
    rate: 15,
    isPercentage: false,
  },
];
