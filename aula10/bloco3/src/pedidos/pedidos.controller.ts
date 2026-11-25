// Slide 9 - src/pedidos/pedidos.controller.ts: Rotas aninhadas (Pai antes do Filho -> /pedidos/:pedidoId/itens/:itemId)
import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';

@Controller('pedidos')                                           // Prefixo '/pedidos'
export class PedidosController {                                 // Exporta PedidosController
  private pedidos = [                                            // Lista de pedidos (Pais), cada um com sua lista de itens (Filhos):
    {
      id: 5,                                                     // Pedido Pai nº 5
      cliente: 'Ana',
      itens: [                                                   // Itens que pertencem SOMENTE ao Pedido 5:
        { id: 1, produto: 'Notebook', preco: 3500 },
        { id: 2, produto: 'Mouse Sem Fio', preco: 120 },         // Item Filho nº 2 dentro do Pedido 5
      ],
    },
    {
      id: 6,                                                     // Pedido Pai nº 6
      cliente: 'Bruno',
      itens: [
        { id: 1, produto: 'Teclado Mecânico', preco: 250 },
      ],
    },
  ];                                                             // Fecha a lista de pedidos

  findPedido(pedidoId: number) {                                 // Método auxiliar para buscar o Pedido Pai
    const pedido = this.pedidos.find((p) => p.id === pedidoId);  // Procura o pedido pelo id
    if (!pedido) {                                               // Se o pedido pai não existir...
      throw new NotFoundException(`Pedido ${pedidoId} não encontrado`); // ...lança 404 Not Found
    }                                                            // Fecha o if
    return pedido;                                               // Devolve o pedido pai
  }                                                              // Fecha findPedido()

  // Slide 9: GET /pedidos/5/itens/2 -> Dois parâmetros dinâmicos na mesma rota!
  @Get(':pedidoId/itens/:itemId')                                // Captura o ID do Pai (:pedidoId) e o ID do Filho (:itemId)
  buscarItem(
    @Param('pedidoId', ParseIntPipe) pedidoId: number,           // Converte e valida o :pedidoId com ParseIntPipe
    @Param('itemId', ParseIntPipe) itemId: number,               // Converte e valida o :itemId com ParseIntPipe
  ) {
    const pedido = this.findPedido(pedidoId);                    // 1º Passo: Acha o PAI (Pedido 5)
    const item = pedido.itens.find((i) => i.id === itemId);      // 2º Passo: Procura o FILHO (Item 2) DENTRO daquele Pai!
    if (!item) {                                                 // 3º Passo: É dele mesmo? Se não estiver nesse pedido...
      throw new NotFoundException(`Item ${itemId} não encontrado no pedido ${pedidoId}`); // ...lança 404!
    }                                                            // Fecha o if
    return item;                                                 // Devolve o item encontrado com Status 200 OK
  }                                                              // Fecha buscarItem()
}                                                                // Fecha PedidosController
