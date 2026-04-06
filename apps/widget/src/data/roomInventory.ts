import { RoomInventory } from '@/src/types';

export const roomInventory: RoomInventory[] = [
  {
    roomTypeId: 'r1',
    date: '2024-04-10',
    totalInventory: 5,
    bookedCount: 2,
    status: 'available',
  },
  {
    roomTypeId: 'r1',
    date: '2024-04-11',
    totalInventory: 5,
    bookedCount: 1,
    status: 'available',
  },
  {
    roomTypeId: 'r1',
    date: '2024-04-12',
    totalInventory: 5,
    bookedCount: 5,
    status: 'sold_out',
  },
  {
    roomTypeId: 'r1',
    date: '2024-04-13',
    totalInventory: 5,
    bookedCount: 3,
    status: 'available',
  },
  {
    roomTypeId: 'r2',
    date: '2024-04-10',
    totalInventory: 3,
    bookedCount: 0,
    status: 'available',
  },
  {
    roomTypeId: 'r2',
    date: '2024-04-11',
    totalInventory: 3,
    bookedCount: 1,
    status: 'available',
  },
  {
    roomTypeId: 'r2',
    date: '2024-04-12',
    totalInventory: 3,
    bookedCount: 2,
    status: 'available',
  },
  {
    roomTypeId: 'r2',
    date: '2024-04-13',
    totalInventory: 3,
    bookedCount: 3,
    status: 'sold_out',
  },
];
