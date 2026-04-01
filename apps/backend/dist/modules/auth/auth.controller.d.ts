import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(): {
        success: boolean;
    };
    sendVerification(): {
        success: boolean;
    };
    verify(): {
        success: boolean;
    };
}
