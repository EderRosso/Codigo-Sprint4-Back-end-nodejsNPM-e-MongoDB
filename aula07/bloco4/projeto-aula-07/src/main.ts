// GABARITO ATIVIDADE (Slide 14) - src/main.ts: Ponto de partida da aplicação NestJS
import { NestFactory } from '@nestjs/core';                      // Importa a fábrica que constrói o servidor NestJS
import { AppModule } from './app.module.js';                     // Importa o módulo raiz da aplicação

async function bootstrap() {                                     // Função principal que inicializa o servidor
  const app = await NestFactory.create(AppModule);               // Cria a instância do servidor usando o AppModule
  await app.listen(process.env.PORT ?? 3000);                    // Escuta na porta do .env ou na porta 3000 por padrão
}                                                                // Fecha a função bootstrap

await bootstrap();                                               // Executa a inicialização do servidor
