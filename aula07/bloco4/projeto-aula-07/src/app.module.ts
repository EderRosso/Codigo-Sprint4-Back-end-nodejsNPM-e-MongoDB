// GABARITO ATIVIDADE (Slide 14) - src/app.module.ts: O departamento principal
import { Module } from '@nestjs/common';                         // Importa o decorator @Module
import { AppController } from './app.controller.js';             // Importa o nosso Controller (recepção)
import { AppService } from './app.service.js';                   // Importa o nosso Service (lógica de negócio)

@Module({                                                        // Configura o módulo raiz do projeto:
  imports: [],                                                   // Outros módulos importados
  controllers: [AppController],                                  // Registra o AppController para atender as rotas
  providers: [AppService],                                       // Registra o AppService para poder ser injetado no Controller
})                                                               // Fecha o @Module
export class AppModule {}                                        // Exporta a classe AppModule
