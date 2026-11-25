import { Module } from '@nestjs/common';
import { LivrosController } from './livros/livros.controller.js';

@Module({
  imports: [],
  controllers: [LivrosController],
  providers: [],
})
export class AppModule {}
