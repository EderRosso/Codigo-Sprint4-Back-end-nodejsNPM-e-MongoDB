// GABARITO ATIVIDADE (Slide 14 - Passo 3) E DESAFIO EXTRA (Slide 15) - src/app.controller.ts
import { Controller, Get } from '@nestjs/common';                // Importa os decorators @Controller e @Get
import { AppService } from './app.service.js';                   // Importa o AppService

// Slide 14 (Passo 3): Mudamos de @Controller() para @Controller('api')!
// Agora todas as rotas deste controller começam obrigatoriamente com '/api'
@Controller('api')                                               // Prefixo '/api' para todas as rotas abaixo
export class AppController {                                     // Exporta a classe AppController
  constructor(private readonly appService: AppService) {}        // Recebe o AppService por Injeção de Dependência

  // Rota 1 (Slide 14): GET http://localhost:3000/api -> Responde 200 "Servidor Nest.js Ativo"
  @Get()                                                         // Como o controller tem prefixo 'api', @Get() vazio atende em GET /api
  getHello(): string {                                           // Método que atende GET /api
    return this.appService.getHello();                           // Chama o AppService e devolve 'Servidor Nest.js Ativo'
  }                                                              // Fecha o getHello

  // Rota 2 (Slide 15 - Desafio Extra): GET http://localhost:3000/api/sobre -> Responde JSON automático!
  @Get('sobre')                                                  // Junta o prefixo 'api' + 'sobre' = rota GET /api/sobre
  sobre() {                                                      // Método que atende GET /api/sobre
    // Repare: devolvemos um objeto JS puro e o NestJS transforma em JSON sozinho (sem JSON.stringify nem writeHead!)
    return { curso: 'Programador Full-Stack', aula: 7 };         // Devolve {"curso":"Programador Full-Stack","aula":7}
  }                                                              // Fecha o método sobre()
}                                                                // Fecha a classe AppController
