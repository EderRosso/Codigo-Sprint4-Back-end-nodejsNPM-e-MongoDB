// GABARITO ATIVIDADE (Slide 14 - Passos 2 e 4) - src/app.service.ts: Quem faz o trabalho!
import { Injectable } from '@nestjs/common';                     // Importa o decorator @Injectable

@Injectable()                                                    // Marca a classe para poder ser injetada no Controller
export class AppService {                                        // Exporta a classe AppService
  getHello(): string {                                           // Método chamado pelo AppController
    // Passo 4: Trocamos o "Hello World!" original por "Servidor Nest.js Ativo"
    return 'Servidor Nest.js Ativo';                             // Devolve a nova mensagem pedida na Atividade!
  }                                                              // Fecha o método getHello
}                                                                // Fecha a classe AppService
