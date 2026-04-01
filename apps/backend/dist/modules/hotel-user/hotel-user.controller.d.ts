import { HotelUserService } from './hotel-user.service';
export declare class HotelUserController {
    private readonly hotelUserService;
    constructor(hotelUserService: HotelUserService);
    getHotelUsers(): {
        success: boolean;
    };
}
