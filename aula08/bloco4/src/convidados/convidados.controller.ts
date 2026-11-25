// Slide 14 (Passos 1 a 5) - GABARITO ATIVIDADE PRINCIPAL: O Porteiro Digital (convidados.controller.ts)
import { Controller, Get, Post, Body } from '@nestjs/common';    // Importa os decorators @Controller, @Get, @Post e @Body
import { CreateConvidadoDto } from './dto/create-convidado.dto.js'; // Importa o DTO CreateConvidadoDto (com .js no final!)

@Controller('convidados')                                        // Passo 1: Atende todas as rotas que começam com '/convidados'
export class ConvidadosController {                              // Exporta a classe ConvidadosController

  // Passo 2: GET /convidados devolve ['Ana', 'Bruno', 'Carlos'] (Status 200 OK automático)
  @Get()                                                         // Mapeia requisições GET em http://localhost:3000/convidados
  listar() {                                                     // Route Handler de listagem
    return ['Ana', 'Bruno', 'Carlos'];                           // Devolve a lista fixa de convidados em JSON
  }                                                              // Fecha o método listar()

  // Passo 4: POST /convidados mostra o nome no console e devolve confirmação (Status 201 Created automático)
  @Post()                                                        // Mapeia requisições POST em http://localhost:3000/convidados
  criar(@Body() dados: CreateConvidadoDto) {                     // Pega o JSON enviado no Body usando o contrato CreateConvidadoDto
    console.log(`Convidado recebido: ${dados.nome}`);            // Imprime no terminal: Convidado recebido: Diana
    return {                                                     // Devolve o JSON de confirmação com Status 201 Created
      mensagem: `Convidado ${dados.nome} (${dados.idade} anos) confirmado!`,
      convidado: dados,                                          // Inclui os dados recebidos na resposta
    };                                                           // Fecha o return
  }                                                              // Fecha o método criar()
}                                                                // Fecha a classe ConvidadosController
