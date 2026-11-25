// Slide 11 - main.ts: O ponto de partida que cria a aplicação NestJS e liga a porta 3000
import { NestFactory } from '@nestjs/core';                      // Importa a "Fábrica do Nest" que constrói o servidor
import { AppModule } from './app.module.js';                     // Importa o módulo principal (repare no .js do ESM que vimos na Aula 02!)

async function bootstrap() {                                     // Função 'bootstrap' (dar a partida / inicializar o sistema)
  const app = await NestFactory.create(AppModule);               // Cria o servidor lendo todas as peças registradas no AppModule
  await app.listen(process.env.PORT ?? 3000);                    // Abre a porta do .env (Aula 05); se não tiver, usa a porta 3000!
}                                                                // Fecha a função bootstrap

await bootstrap();                                               // Executa a partida do servidor com Top-Level await!
