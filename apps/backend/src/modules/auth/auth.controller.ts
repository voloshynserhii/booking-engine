import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    // Handle login via email - send verification code
    return { success: true };
  }

  @Post('send-verification')
  sendVerification() {
    // Send verification code to email (stub)
    return { success: true };
  }

  @Post('verify')
  verify() {
    // Verify code (stub)
    return { success: true };
  }
}