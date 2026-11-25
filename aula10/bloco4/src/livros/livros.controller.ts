// Slides 12 e 13 - GABARITO COMPLETO: A Biblioteca Digital + Desafio Extra (src/livros/livros.controller.ts)
import { Controller, Get, Param, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';

@Controller('livros')                                            // Passo 1: Prefixo '/livros'
export class LivrosController {                                  // Exporta a classe LivrosController
  // Passo 2 (Slide 12) + Desafio Extra (Slide 13): Array com 5 livros (id, titulo, autor, autorId e ano)
  private livros = [                                             // Acervo de 5 livros na memória:
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', autorId: 10, ano: 1899 },
    { id: 2, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', autorId: 10, ano: 1881 },
    { id: 3, titulo: 'O Alienista', autor: 'Machado de Assis', autorId: 10, ano: 1882 },
    { id: 4, titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', autorId: 20, ano: 1977 },
    { id: 5, titulo: 'Código Limpo', autor: 'Robert C. Martin', autorId: 30, ano: 2008 },
  ];                                                             // Fecha a lista de 5 livros

  // Passo 3 (Slide 12): GET /livros com filtros opcionais ?autor= e ?ano=
  @Get()                                                         // Mapeia GET /livros
  listar(
    @Query('autor') autor?: string,                              // Filtro opcional '?autor='
    @Query('ano') ano?: string,                                  // Filtro opcional '?ano='
  ) {
    let lista = this.livros;                                     // Começa com os 5 livros

    if (autor) {                                                 // Se veio '?autor=' na URL...
      lista = lista.filter((l) =>                                // ...filtra pelo nome do autor (ignorando maiúsculas/minúsculas)
        l.autor.toLowerCase().includes(autor.toLowerCase()),
      );                                                         // Fecha o filter de autor
    }                                                            // Fecha o if (autor)

    if (ano) {                                                   // Se veio '?ano=' na URL...
      lista = lista.filter((l) => l.ano === +ano);               // ...filtra pelo ano convertido para número (+ano)
    }                                                            // Fecha o if (ano)

    return lista;                                                // Devolve a lista filtrada (Status 200 OK)
  }                                                              // Fecha o listar()

  // DESAFIO EXTRA (Slide 13 - Passos 1 e 2): Rota aninhada GET /livros/autores/:autorId/livros/:livroId
  // Importante: Colocamos antes de @Get(':id') para manter a boa prática de rotas mais específicas primeiro!
  @Get('autores/:autorId/livros/:livroId')                       // Rota com 2 parâmetros: :autorId e :livroId
  buscarDoAutor(
    @Param('autorId', ParseIntPipe) autorId: number,             // Valida e converte :autorId para número
    @Param('livroId', ParseIntPipe) livroId: number,             // Valida e converte :livroId para número
  ) {
    // Só devolve o livro se ele existir E pertencer àquele autorId!
    const livro = this.livros.find(
      (l) => l.id === livroId && l.autorId === autorId,          // Verifica livroId E autorId ao mesmo tempo
    );                                                           // Fecha o find
    if (!livro) {                                                // Se o livro não existir ou for de outro autor...
      throw new NotFoundException(                               // ...responde Status 404 Not Found!
        `Livro ${livroId} do autor ${autorId} não localizado em nosso acervo`,
      );                                                         // Fecha o NotFoundException
    }                                                            // Fecha o if
    return livro;                                                // Devolve o livro confirmado daquele autor!
  }                                                              // Fecha o buscarDoAutor()

  // Passos 4 e 5 (Slide 12): GET /livros/:id com ParseIntPipe e mensagem personalizada de 404
  @Get(':id')                                                    // Mapeia GET /livros/:id
  buscar(
    @Param('id', ParseIntPipe) id: number,                       // Passo 4: ParseIntPipe converte para número ou barra 'abc' com 400!
  ) {
    const livro = this.livros.find((l) => l.id === id);          // Procura o livro pelo id numérico
    if (!livro) {                                                // Passo 5: Se o livro não existir no acervo...
      throw new NotFoundException(                               // ...lança 404 com a frase exata pedida no Slide 12:
        `Livro com ID ${id} não localizado em nosso acervo`,
      );                                                         // Fecha o NotFoundException
    }                                                            // Fecha o if
    return livro;                                                // Devolve o livro encontrado (Status 200 OK)
  }                                                              // Fecha o buscar()
}                                                                // Fecha a classe LivrosController
