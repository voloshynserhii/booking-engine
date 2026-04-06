import { Module } from '@nestjs/common';
import { RoomInventoryController } from './room-inventory.controller';
import { RoomInventoryService } from './room-inventory.service';

@Module({
  controllers: [RoomInventoryController],
  providers: [RoomInventoryService],
})
export class RoomInventoryModule {}