// Slide 9 - app.controller.ts: A recepção (recebe a requisição HTTP e devolve a resposta)
import { Controller, Get } from '@nestjs/common';                // Importa os Decorators @Controller (recepção) e @Get (verbo GET)
import { AppService } from './app.service.js';                   // Importa o AppService (quem faz o trabalho de verdade)

@Controller()                                                    // @Controller(): Define que esta classe atende rotas na raiz '/'
export class AppController {                                     // Cria e exporta a classe do recepcionista (AppController)
  constructor(private readonly appService: AppService) {}        // INJEÇÃO DE DEPENDÊNCIA: Pede ao Nest para entregar o AppService pronto!

  @Get()                                                         // @Get(): Diz que a função abaixo responde a requisições GET na rota '/'
  getHello(): string {                                           // Função getHello() (': string' no TypeScript avisa que devolve um texto)
    return this.appService.getHello();                           // Pede o texto para o especialista (AppService) e devolve ao navegador!
  }                                                              // Fecha o método getHello
}                                                                // Fecha a classe AppController
