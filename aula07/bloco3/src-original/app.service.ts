// Slide 10 (Esquerda) - app.service.ts: Quem faz o trabalho (guarda a lógica de negócio)
import { Injectable } from '@nestjs/common';                     // Importa o Decorator @Injectable do NestJS

@Injectable()                                                    // @Injectable(): Avisa ao Nest que esta classe pode ser injetada no Controller!
export class AppService {                                        // Cria e exporta a classe do especialista (AppService)
  getHello(): string {                                           // Função que faz o trabalho e promete devolver um texto (: string)
    return 'Hello World!';                                       // É AQUI que mora o famoso 'Hello World!' original do projeto!
  }                                                              // Fecha a função getHello
}                                                                // Fecha a classe AppService
