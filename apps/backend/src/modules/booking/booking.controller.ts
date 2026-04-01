import { Controller, Get } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  getBookings() {
    // Get bookings (stub)
    return { success: true };
  }
}