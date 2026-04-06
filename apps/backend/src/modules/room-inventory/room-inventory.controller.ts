import { Controller, Get } from '@nestjs/common';
import { RoomInventoryService } from './room-inventory.service';

@Controller('room-inventory')
export class RoomInventoryController {
  constructor(private readonly roomInventoryService: RoomInventoryService) {}

  @Get()
  getRoomInventory() {
    // Get room inventory (stub)
    return { success: true };
  }
}