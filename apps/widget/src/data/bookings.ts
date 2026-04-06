import { Booking, BookingGuest } from '@/src/types';

export const bookings: Booking[] = [
  {
    id: 'b1',
    hotelId: 'h1',
    roomId: 'r1',
    ratePlanId: 'rp1',
    guestId: 'g1',
    status: 'CONFIRMED',
    checkInDate: '2024-04-10',
    checkOutDate: '2024-04-12',
    totalPrice: 480,
    priceAtBooking: 120, // $120 per night at booking time
    currency: 'EUR',
    createdAt: '2024-03-15T10:00:00Z',
  },
  {
    id: 'b2',
    hotelId: 'h1',
    roomId: 'r2',
    ratePlanId: 'rp1',
    guestId: 'g2',
    status: 'CONFIRMED',
    checkInDate: '2024-04-11',
    checkOutDate: '2024-04-14',
    totalPrice: 540,
    priceAtBooking: 135, // $135 per night at booking time
    currency: 'EUR',
    createdAt: '2024-03-18T14:00:00Z',
  },
  {
    id: 'b3',
    hotelId: 'h1',
    roomId: 'r1',
    ratePlanId: 'rp1',
    guestId: 'g3',
    status: 'PENDING',
    checkInDate: '2024-04-15',
    checkOutDate: '2024-04-17',
    totalPrice: 240,
    priceAtBooking: 80, // $80 per night at booking time
    currency: 'EUR',
    createdAt: '2024-03-20T16:00:00Z',
  },
];

export const bookingGuests: BookingGuest[] = [
  {
    id: 'bg1',
    bookingId: 'b1',
    guestId: 'g1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-0101',
  },
  {
    id: 'bg2',
    bookingId: 'b1',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: 'bg3',
    bookingId: 'b2',
    guestId: 'g2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1-555-0102',
  },
];
