// Slide 10 (Direita) - app.module.ts: O departamento principal que conecta os Controllers e os Services
import { Module } from '@nestjs/common';                         // Importa a etiqueta (Decorator) @Module do NestJS
import { AppController } from './app.controller.js';             // Importa o recepcionista (AppController)
import { AppService } from './app.service.js';                   // Importa o trabalhador/especialista (AppService)

@Module({                                                        // @Module: Etiqueta que avisa ao Nest que esta classe é um Departamento
  imports: [],                                                   // Outros departamentos/módulos que este módulo usa (vazio por enquanto)
  controllers: [AppController],                                  // Lista de recepcionistas (rotas HTTP) deste departamento
  providers: [AppService],                                       // Lista de especialistas (Services) que o Nest pode injetar automaticamente
})                                                               // Fecha a configuração do @Module
export class AppModule {}                                        // Exporta a classe AppModule (quem lê ela é o main.ts!)
