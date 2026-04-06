import { Booking, BookingGuest } from '@/src/types';

export const bookings: Booking[] = [
  {
    id: 'b1',
    hotelId: 'h1',
    roomId: 'r1',
    guestId: 'g1',
    status: 'CONFIRMED',
    checkInDate: '2024-04-10',
    checkOutDate: '2024-04-12',
    totalPrice: 480,
    createdAt: '2024-03-15T10:00:00Z',
  },
  {
    id: 'b2',
    hotelId: 'h1',
    roomId: 'r2',
    guestId: 'g2',
    status: 'CONFIRMED',
    checkInDate: '2024-04-11',
    checkOutDate: '2024-04-14',
    totalPrice: 540,
    createdAt: '2024-03-18T14:00:00Z',
  },
  {
    id: 'b3',
    hotelId: 'h1',
    roomId: 'r1',
    guestId: 'g3',
    status: 'PENDING',
    checkInDate: '2024-04-15',
    checkOutDate: '2024-04-17',
    totalPrice: 360,
    createdAt: '2024-03-20T09:45:00Z',
  },
  {
    id: 'b4',
    hotelId: 'h1',
    roomId: 'r3',
    guestId: 'g4',
    status: 'CONFIRMED',
    checkInDate: '2024-04-20',
    checkOutDate: '2024-04-23',
    totalPrice: 750,
    createdAt: '2024-03-22T16:20:00Z',
  },
];

export const bookingGuests: BookingGuest[] = [
  {
    id: 'bg1',
    bookingId: 'b1',
    fullName: 'John Doe',
    documentNumber: 'DOC123456789',
  },
  {
    id: 'bg2',
    bookingId: 'b1',
    fullName: 'Jane Doe',
    documentNumber: 'DOC987654321',
  },
  {
    id: 'bg3',
    bookingId: 'b2',
    fullName: 'Jane Smith',
    documentNumber: 'DOC555666777',
  },
  {
    id: 'bg4',
    bookingId: 'b3',
    fullName: 'Robert Wilson',
    documentNumber: 'DOC444555666',
  },
  {
    id: 'bg5',
    bookingId: 'b4',
    fullName: 'Emily Johnson',
    documentNumber: 'DOC111222333',
  },
  {
    id: 'bg6',
    bookingId: 'b4',
    fullName: 'Michael Johnson',
    documentNumber: 'DOC444888999',
  },
  {
    id: 'bg7',
    bookingId: 'b4',
    fullName: 'Sarah Johnson',
    documentNumber: 'DOC777888999',
  },
];
