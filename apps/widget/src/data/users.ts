import { User, HotelUser } from '@/src/types';

export const users: User[] = [
  {
    id: 'u1',
    email: 'owner@example.com',
    isVerified: true,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 'u2',
    email: 'manager@example.com',
    isVerified: true,
    createdAt: '2024-02-20T10:00:00Z',
  },
  {
    id: 'u3',
    email: 'staff@example.com',
    isVerified: true,
    createdAt: '2024-03-10T10:00:00Z',
  },
];

export const hotelUsers: HotelUser[] = [
  {
    id: 'hu1',
    userId: 'u1',
    hotelId: 'h1',
    role: 'OWNER',
  },
  {
    id: 'hu2',
    userId: 'u2',
    hotelId: 'h1',
    role: 'MANAGER',
  },
  {
    id: 'hu3',
    userId: 'u3',
    hotelId: 'h1',
    role: 'STAFF',
  },
];
