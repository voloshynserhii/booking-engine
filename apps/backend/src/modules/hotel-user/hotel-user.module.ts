import { Module } from '@nestjs/common';
import { HotelUserController } from './hotel-user.controller';
import { HotelUserService } from './hotel-user.service';

@Module({
  controllers: [HotelUserController],
  providers: [HotelUserService],
})
export class HotelUserModule {}