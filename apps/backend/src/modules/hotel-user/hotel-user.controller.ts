import { Controller, Get } from '@nestjs/common';
import { HotelUserService } from './hotel-user.service';

@Controller('hotel-user')
export class HotelUserController {
  constructor(private readonly hotelUserService: HotelUserService) {}

  @Get()
  getHotelUsers() {
    // Get hotel users (stub)
    return { success: true };
  }
}