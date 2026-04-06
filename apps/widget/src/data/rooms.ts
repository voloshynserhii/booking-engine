import { Room } from '@/src/types';
import { hotels } from './hotels';
import { roomPrices } from './roomPrices';

export const rooms: Room[] = [
  {
    id: 'r1',
    hotelId: 'h1',
    name: 'Double Room',
    roomType: 'STANDARD',
    maxGuests: 2,
    quantity: 5,
    imageUrls: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r1'),
  },
  {
    id: 'r2',
    hotelId: 'h1',
    name: 'Deluxe Suite',
    roomType: 'SUITE',
    maxGuests: 4,
    quantity: 3,
    imageUrls: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r2'),
  },
  {
    id: 'r3',
    hotelId: 'h1',
    name: 'Family Room',
    roomType: 'FAMILY',
    maxGuests: 6,
    quantity: 2,
    imageUrls: [
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r3'),
  },
];