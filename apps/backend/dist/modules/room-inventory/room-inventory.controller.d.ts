import { RoomInventoryService } from './room-inventory.service';
export declare class RoomInventoryController {
    private readonly roomInventoryService;
    constructor(roomInventoryService: RoomInventoryService);
    getRoomInventory(): {
        success: boolean;
    };
}
