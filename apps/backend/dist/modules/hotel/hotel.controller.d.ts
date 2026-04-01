import { HotelService } from './hotel.service';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    getHotels(): {
        success: boolean;
    };
}
