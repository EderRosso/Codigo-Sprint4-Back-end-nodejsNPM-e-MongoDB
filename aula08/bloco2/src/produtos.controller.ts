// Slides 6 e 7 - produtos.controller.ts: Listando produtos com @Get() e filtrando com @Query()
import { Controller, Get, Query } from '@nestjs/common';         // Importa os crachás (Decorators) @Controller, @Get e @Query

@Controller('produtos')                                          // Define o prefixo '/produtos' para todas as rotas desta classe
export class ProdutosController {                                // Cria e exporta o recepcionista de produtos (ProdutosController)

  // SLIDE 6 - Rota 1: GET http://localhost:3000/produtos (Lista todos os produtos)
  @Get()                                                         // @Get() vazio junta com o prefixo da classe -> atende GET /produtos
  listarTodos() {                                                // Este método é um "Route Handler" (tratador da rota GET /produtos)
    return [                                                     // Devolve uma lista (array) de objetos; o Nest converte em JSON sozinho!
      { id: 1, nome: 'Notebook', categoria: 'eletronicos' },     // Produto 1
      { id: 2, nome: 'Mouse', categoria: 'eletronicos' },        // Produto 2
      { id: 3, nome: 'Cadeira', categoria: 'moveis' },           // Produto 3
    ];                                                           // Fecha a lista de produtos
  }                                                              // Fecha o handler listarTodos()

  // SLIDE 7 - Rota 2: GET http://localhost:3000/produtos/filtrar?categoria=moveis
  @Get('filtrar')                                                // Junta o prefixo 'produtos' + 'filtrar' -> GET /produtos/filtrar
  filtrarPorCategoria(@Query('categoria') categoria: string) {   // @Query('categoria') pega o valor que vem na URL após '?categoria='
    console.log(`Filtrando por: ${categoria}`);                  // Mostra no terminal do VS Code: Filtrando por: moveis
    return `Buscando produtos da categoria: ${categoria}`;       // Devolve a frase para o navegador/cliente com Status 200 OK
  }                                                              // Fecha o handler filtrarPorCategoria()
}                                                                // Fecha a classe ProdutosController
