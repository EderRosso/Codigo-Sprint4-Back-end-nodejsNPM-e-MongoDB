import { Module } from '@nestjs/common';
import { LivrosController } from './livros/livros.controller.js';
import { PedidosController } from './pedidos/pedidos.controller.js';

@Module({
  imports: [],
  controllers: [LivrosController, PedidosController],
  providers: [],
})
export class AppModule {}
