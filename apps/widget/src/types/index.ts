export interface User {
  id: string;
  email: string;
  passwordHash?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  hotelUsers?: HotelUser[];
  hotels?: Hotel[];
  reviews?: Review[];
}

export interface Hotel {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  starRating?: number;
  timezone: string;
  currency: string;
  address: string;
  city: string;
  countryCode: string;
  latitude?: number;
  longitude?: number;
  checkInTime: string;
  checkOutTime: string;
  imageUrls: string[];
  createdAt: string;
  updatedAt?: string;
  owner?: User;
  hotelUsers?: HotelUser[];
  rooms?: Room[];
  ratePlans?: RatePlan[];
  bookings?: Booking[];
  amenities?: Amenity[];
  reviews?: Review[];
  promotions?: Promotion[];
  taxes?: Tax[];
}

export interface HotelUser {
  id: string;
  userId: string;
  hotelId: string;
  role: 'OWNER' | 'MANAGER' | 'STAFF' | 'GUEST';
  user?: User;
  hotel?: Hotel;
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  roomType: string;
  maxGuests: number;
  quantity: number;
  imageUrls: string[];
  createdAt: string;
  updatedAt?: string;
  hotel?: Hotel;
  inventories?: RoomInventory[];
  prices?: RoomPrice[];
  bookings?: Booking[];
  amenities?: Amenity[];
  ratePlans?: RatePlan[]; // Which rate plans apply to this room
}

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  category?: string;
  createdAt: string;
  hotels?: Hotel[];
  rooms?: Room[];
}

export interface RatePlan {
  id: string;
  hotelId: string;
  name: string;
  description?: string;
  mealPlan: 'NONE' | 'BREAKFAST' | 'HALF_BOARD' | 'FULL_BOARD' | 'ALL_INCLUSIVE';
  isRefundable: boolean;
  hotel?: Hotel;
  rooms?: Room[]; // Which rooms this rate plan applies to
  bookings?: Booking[];
}

export interface RoomPrice {
  id: string;
  roomId: string;
  date: string;
  price: number;
  room?: Room;
}

export interface RoomInventory {
  roomTypeId: string;
  date: string;
  totalInventory: number;
  bookedCount: number;
  status: 'available' | 'blocked' | 'sold_out';
  room?: Room;
}

export interface Guest {
  id: string;
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  bookings?: Booking[];
  bookingGuests?: BookingGuest[];
}

export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  ratePlanId: string;
  guestId: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'NO_SHOW';
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  priceAtBooking: number; // Snapshot of nightly price at booking time
  currency: string;
  createdAt: string;
  updatedAt?: string;
  hotel?: Hotel;
  room?: Room;
  ratePlan?: RatePlan;
  guest?: Guest;
  payments?: Payment[];
  messages?: Message[];
  checkInSessions?: CheckInSession[];
  bookingGuests?: BookingGuest[];
}

export interface BookingGuest {
  id: string;
  bookingId: string;
  guestId?: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  booking?: Booking;
  guest?: Guest;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
  transactionId?: string;
  createdAt: string;
  booking?: Booking;
}

export interface CheckInSession {
  id: string;
  bookingId: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
  booking?: Booking;
}

export interface CheckInData {
  id: string;
  checkInSessionId: string;
  guestName: string;
  documentNumber: string;
  documentPhotoUrl?: string;
  signed: boolean;
  createdAt?: string;
  checkInSession?: CheckInSession;
}

export interface File {
  id: string;
  url: string;
  type: 'IMAGE' | 'DOCUMENT' | string;
  size: number;
  createdAt: string;
}

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  content: string;
  isRead: boolean;
  createdAt: string;
  booking?: Booking;
}

export interface Review {
  id: string;
  hotelId: string;
  userId: string;
  bookingId?: string;
  rating: number;
  comment?: string;
  createdAt: string;
  hotel?: Hotel;
  user?: User;
  booking?: Booking;
}

export interface Promotion {
  id: string;
  hotelId: string;
  name: string;
  description?: string;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  validFrom: string;
  validTo: string;
  isActive: boolean;
  hotel?: Hotel;
}

export interface Tax {
  id: string;
  hotelId: string;
  name: string;
  rate: number;
  isPercentage: boolean;
  hotel?: Hotel;
}