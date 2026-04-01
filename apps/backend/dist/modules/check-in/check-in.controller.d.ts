import { CheckInService } from './check-in.service';
export declare class CheckInController {
    private readonly checkInService;
    constructor(checkInService: CheckInService);
    checkIn(token: string): {
        success: boolean;
    };
}
