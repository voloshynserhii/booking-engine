export interface Rate {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  features: string[];
}

export interface User {
  id: string;
  email: string;
  isVerified: boolean;
  createdAt: string;
  hotelUsers?: HotelUser[];
  hotels?: Hotel[];
  reviews?: Review[];
}

export interface Hotel {
  id: string;
  ownerId?: string;
  name: string;
  description?: string;
  starRating?: number;
  timezone?: string;
  currency?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
  email?: string;
  phone?: string;
  website?: string;
  checkInTime?: string;
  checkOutTime?: string;
  imageUrls?: string[];
  createdAt?: string;
  owner?: User;
  hotelUsers?: HotelUser[];
  rooms?: Room[];
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
  role: 'OWNER' | 'MANAGER' | 'STAFF' | string;
  user?: User;
  hotel?: Hotel;
}

export interface Room {
  id: string;
  hotelId?: string;
  name: string;
  description?: string;
  roomType?: string;
  bedType?: string;
  numberOfBeds?: number;
  maxGuests: number;
  size?: number;
  quantity?: number;
  basePrice?: number;
  imageUrls?: string[];
  createdAt?: string;
  hotel?: Hotel;
  roomInventories?: RoomInventory[];
  bookings?: Booking[];
  amenities?: Amenity[];
  rates?: Rate[];
}

export interface Amenity {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  createdAt: string;
  hotels?: Hotel[];
  rooms?: Room[];
}

export interface RoomInventory {
  roomTypeId: string;
  date: string; // ISO 8601 (YYYY-MM-DD)
  totalInventory: number; // Скільки всього номерів цього типу
  bookedCount: number;    // Скільки вже заброньовано
  status: 'available' | 'blocked' | 'sold_out';
}

export interface Guest {
  id: string;
  email: string;
  phone?: string;
  fullName: string;
  createdAt: string;
  bookings?: Booking[];
}

export interface Booking {
  id: string;
  hotelId: string;
  roomId: string;
  guestId?: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  createdAt: string;
  hotel?: Hotel;
  room?: Room;
  guest?: Guest;
  bookingGuests?: BookingGuest[];
  payments?: Payment[];
  checkInSessions?: CheckInSession[];
  messages?: Message[];
  reviews?: Review[];
}

export interface BookingGuest {
  id: string;
  bookingId: string;
  fullName: string;
  documentNumber: string;
  booking?: Booking;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: 'PENDING' | 'PAID' | 'FAILED' | string;
  provider: string;
  createdAt: string;
  booking?: Booking;
}

export interface CheckInSession {
  id: string;
  bookingId: string;
  token: string;
  expiresAt: string;
  completed: boolean;
  createdAt: string;
  booking?: Booking;
  checkInData?: CheckInData[];
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
  senderType: 'GUEST' | 'HOST' | string;
  content: string;
  createdAt: string;
  booking?: Booking;
}

export interface Review {
  id: string;
  hotelId: string;
  userId?: string;
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
  code: string;
  description?: string;
  discountType: 'PERCENTAGE' | 'FIXED' | string;
  discountValue: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  createdAt: string;
  hotel?: Hotel;
}

export interface Tax {
  id: string;
  hotelId: string;
  name: string;
  type: 'PERCENTAGE' | 'FIXED' | string;
  value: number;
  isMandatory: boolean;
  createdAt: string;
  hotel?: Hotel;
}