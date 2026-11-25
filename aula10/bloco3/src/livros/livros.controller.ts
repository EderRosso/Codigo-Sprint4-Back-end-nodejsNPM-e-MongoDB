// Slide 7 - src/livros/livros.controller.ts: Múltiplos filtros na lista com @Query('autor') e @Query('ano')
import { Controller, Get, Param, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';

@Controller('livros')                                            // Prefixo '/livros'
export class LivrosController {                                  // Exporta LivrosController
  private livros = [                                             // Lista de livros para testar os filtros combinados:
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 },
    { id: 2, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', ano: 1881 },
    { id: 3, titulo: 'Código Limpo', autor: 'Robert C. Martin', ano: 2008 },
  ];                                                             // Fecha a lista

  // Slide 7: GET /livros?autor=machado&ano=1899 (O '&' comercial junta vários filtros na URL!)
  @Get()                                                         // Rota GET /livros
  listar(
    @Query('autor') autor?: string,                              // Captura '?autor=...' (opcional: se não vier, é undefined)
    @Query('ano') ano?: string,                                  // Captura '&ano=...' (opcional: chega como texto '1899')
  ) {
    let lista = this.livros;                                     // Começa com a lista completa de livros

    if (autor) {                                                 // Se o cliente enviou o filtro '?autor=' na URL...
      lista = lista.filter((l) =>                                // ...filtra mantendo apenas os livros daquele autor
        l.autor.toLowerCase().includes(autor.toLowerCase()),     // Ignora maiúsculas/minúsculas (ex: 'machado' acha 'Machado de Assis')
      );                                                         // Fecha o filter de autor
    }                                                            // Fecha o if (autor)

    if (ano) {                                                   // Se o cliente TAMBÉM enviou o filtro '?ano=' na URL...
      lista = lista.filter((l) => l.ano === +ano);               // ...filtra a lista resultante pelo ano (usando +ano para virar número!)
    }                                                            // Fecha o if (ano)

    return lista;                                                // Devolve a lista filtrada (ou completa, se nenhum filtro foi enviado)
  }                                                              // Fecha o listar()

  @Get(':id')                                                    // Rota GET /livros/:id
  buscar(@Param('id', ParseIntPipe) id: number) {                // Converte e valida :id com ParseIntPipe
    const livro = this.livros.find((l) => l.id === id);          // Busca pelo id numérico
    if (!livro) throw new NotFoundException(`Livro ${id} não encontrado`); // 404 se não existir
    return livro;                                                // Devolve o livro encontrado
  }                                                              // Fecha o buscar()
}                                                                // Fecha LivrosController
