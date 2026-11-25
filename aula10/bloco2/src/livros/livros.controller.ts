// Slides 5 e 6 - src/livros/livros.controller.ts: Placeholder :id e ParseIntPipe (converter e validar!)
import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common'; // Importa ParseIntPipe e NotFoundException

@Controller('livros')                                            // Define o prefixo '/livros' (a "rua" do endereço)
export class LivrosController {                                  // Exporta a classe LivrosController
  private livros = [                                             // Pequeno acervo de livros na memória para testar o Bloco 2:
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 },
    { id: 7, titulo: 'Código Limpo', autor: 'Robert C. Martin', ano: 2008 },
  ];                                                             // Fecha a lista de livros

  // Slide 5 e 6: GET /livros/:id usando ParseIntPipe para converter '7' em 7 e barrar '/livros/abc' com erro 400!
  @Get(':id')                                                    // ':id' é o placeholder (o "número da casa" na rua /livros)
  buscar(
    @Param('id', ParseIntPipe) id: number,                       // ParseIntPipe valida se é número e já entrega 'id' como number (sem +id!)
  ) {
    const livro = this.livros.find((l) => l.id === id);          // Compara direto (id já é number, não precisa mais de +id!)
    if (!livro) {                                                // Se o número for válido (ex: 99), mas o livro não existir...
      throw new NotFoundException(`Livro ${id} não encontrado`); // ...responde Status 404 Not Found!
    }                                                            // Fecha o if
    return livro;                                                // Se achou (ex: /livros/7), devolve o livro com Status 200 OK!
  }                                                              // Fecha o método buscar()
}                                                                // Fecha a classe LivrosController
