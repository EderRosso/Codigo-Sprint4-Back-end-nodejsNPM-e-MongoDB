// src/app.module.ts: Registra todos os Controllers da Aula 08 (Produtos, Usuarios e Convidados)
import { Module } from '@nestjs/common';                         // Importa o decorator @Module
import { ProdutosController } from './produtos/produtos.controller.js';       // Bloco 2: GET /produtos e @Query
import { UsuariosController } from './usuarios/usuarios.controller.js';       // Bloco 3: POST /usuarios com @Body e DTO
import { ConvidadosController } from './convidados/convidados.controller.js'; // Bloco 4: Atividade O Porteiro Digital

@Module({                                                        // Configura o departamento principal:
  imports: [],                                                   // Módulos importados
  controllers: [                                                 // Todos os recepcionistas ativos neste projeto:
    ProdutosController,                                          // Atende /produtos e /produtos/filtrar
    UsuariosController,                                          // Atende /usuarios e /usuarios/sair
    ConvidadosController,                                        // Atende /convidados (GET e POST)
  ],                                                             // Fecha a lista de controllers
  providers: [],                                                 // Services registrados
})                                                               // Fecha o @Module
export class AppModule {}                                        // Exporta o AppModule
