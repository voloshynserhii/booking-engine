import { GuestService } from './guest.service';
export declare class GuestController {
    private readonly guestService;
    constructor(guestService: GuestService);
    getGuests(): {
        success: boolean;
    };
}
