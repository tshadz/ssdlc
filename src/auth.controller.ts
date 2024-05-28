import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const user = await this.authService.findUserByUsername(
      credentials.username,
    );

    // Simulação de vulnerabilidade: Comparação de senhas insegura
    if (user && credentials.password === user.password) {
      return { accessToken: 'your-access-token' };
    } else {
      return { error: 'Invalid username or password' };
    }
  }
}
