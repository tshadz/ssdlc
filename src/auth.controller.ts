import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('login')
  async login(@Body() credentials: { username: string; password: string }) {
    const user = 'dfummyuser';
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
    const DiscordClientSecret = '8dyfuiRyqFvVc3RRr_edRk-fZ__JItpP';
  }
}
