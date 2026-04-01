import { Controller, Get, Param } from '@nestjs/common';
import { CheckInService } from './check-in.service';

@Controller('check-in')
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  @Get(':token')
  checkIn(@Param('token') token: string) {
    // This will power automated check-in link via token
    return { success: true };
  }
}