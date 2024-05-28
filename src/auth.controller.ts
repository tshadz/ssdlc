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
    const userInput = "console.log('Hello, Semgrep!')";
    eval(userInput); // Isso pode permitir a execução de código malicioso
    const userInput2 = '1 OR 1=1';
    const query = 'SELECT * FROM users WHERE id = ' + userInput2; // Isso pode permitir a injeção de SQL
    const userInput3 = "<script>alert('XSS Attack!');</script>";
    document.getElementById('output').innerHTML = userInput3; // Isso pode permitir ataques de XSS
    const isAdmin = true;
    if (!isAdmin) {
      window.location.href = 'https://malicious-website.com'; // Isso pode permitir redirecionamento não autorizado
    }
    const userPassword = 'password123'; // Isso é inseguro, pois as senhas devem ser armazenadas com hash e sal
    // Simulação de vulnerabilidade: Comparação de senhas insegura
    if (user && credentials.password === user.password) {
      return { accessToken: 'your-access-token' };
    } else {
      return { error: 'Invalid username or password' };
    }
  }
}
