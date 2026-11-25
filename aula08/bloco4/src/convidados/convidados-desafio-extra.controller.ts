// Slide 15 - GABARITO DESAFIO EXTRA: Uma lista que cresce na memória + Filtro com @Query('nome')
import { Controller, Get, Post, Body, Query } from '@nestjs/common'; // Importa também o @Query para filtrar pela URL
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';  // Importa o contrato CreateConvidadoDto

@Controller('convidados')                                        // Prefixo '/convidados'
export class ConvidadosController {                              // Exporta a classe ConvidadosController

  // Passo 1 do Desafio Extra: Array na memória da classe que guarda os convidados cadastrados
  private convidados: CreateConvidadoDto[] = [                   // Começa já com 3 convidados iniciais para facilitar o teste:
    { nome: 'Ana', idade: 20 },                                  // Convidado inicial 1
    { nome: 'Bruno', idade: 22 },                                // Convidado inicial 2
    { nome: 'Carlos', idade: 19 },                               // Convidado inicial 3
  ];                                                             // Fecha a lista na memória

  // Passo 1 e 2 do Desafio Extra: GET /convidados (ou GET /convidados?nome=an)
  @Get()                                                         // Mapeia GET /convidados
  listar(@Query('nome') nome?: string) {                         // Recebe o filtro opcional '?nome=...' da URL
    if (!nome) {                                                 // Se o cliente NÃO enviou '?nome=' na URL...
      return this.convidados;                                    // ...devolve a lista inteira de convidados!
    }                                                            // Fecha o if
    // Se enviou '?nome=an', filtra ignorando maiúsculas/minúsculas (toLowerCase):
    return this.convidados.filter((c) =>                         // Filtra apenas os convidados cujo nome contenha o texto buscado
      c.nome.toLowerCase().includes(nome.toLowerCase()),         // Ex: 'Ana' e 'Diana' contêm 'an'!
    );                                                           // Fecha o filter
  }                                                              // Fecha o método listar()

  // Passo 1 do Desafio Extra: O POST adiciona o novo convidado na lista (this.convidados.push)
  @Post()                                                        // Mapeia POST /convidados
  criar(@Body() dados: CreateConvidadoDto) {                     // Recebe o novo convidado no Body
    this.convidados.push(dados);                                 // Guarda o novo convidado dentro do array na memória!
    console.log(`Convidado recebido: ${dados.nome} (Total na lista: ${this.convidados.length})`);
    return {                                                     // Devolve confirmação com Status 201 Created
      mensagem: `Convidado ${dados.nome} adicionado à lista!`,
      totalConvidados: this.convidados.length,                   // Mostra quantos convidados existem agora
    };                                                           // Fecha o return
  }                                                              // Fecha o método criar()
}                                                                // Fecha a classe ConvidadosController
