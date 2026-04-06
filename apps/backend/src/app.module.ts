import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { HotelUserModule } from './modules/hotel-user/hotel-user.module';
import { RoomModule } from './modules/room/room.module';
import { RoomInventoryModule } from './modules/room-inventory/room-inventory.module';
import { BookingModule } from './modules/booking/booking.module';
import { GuestModule } from './modules/guest/guest.module';
import { PaymentModule } from './modules/payment/payment.module';
import { CheckInModule } from './modules/check-in/check-in.module';
import { FileModule } from './modules/file/file.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    HotelModule,
    HotelUserModule,
    RoomModule,
    RoomInventoryModule,
    BookingModule,
    GuestModule,
    PaymentModule,
    CheckInModule,
    FileModule,
    MessageModule,
  ],
})
export class AppModule {}