// Slides 7, 9 e 10 - src/convidados/convidados.controller.ts: Capturando :id com @Param(), @Put() e @Patch()
import { Controller, Get, Post, Put, Patch, Param, Body } from '@nestjs/common'; // Importa todos os decorators necessários
import { ConvidadosService } from './convidados.service.js';     // Importa o especialista ConvidadosService
import { CreateConvidadoDto } from './dto/create-convidado.dto.js'; // DTO completo
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js'; // DTO parcial (campos opcionais com ?)

@Controller('convidados')                                        // Prefixo '/convidados' para todas as rotas
export class ConvidadosController {                              // Exporta o recepcionista ConvidadosController
  constructor(private readonly service: ConvidadosService) {}    // Injeção de Dependência: recebe o ConvidadosService pronto!

  @Get()                                                         // GET /convidados -> Lista todos
  listar() {                                                     // Handler de listagem geral
    return this.service.findAll();                               // Pede a lista para o Service
  }                                                              // Fecha o listar()

  @Post()                                                        // POST /convidados -> Cria um novo
  criar(@Body() dados: CreateConvidadoDto) {                     // Recebe o JSON no Body
    return this.service.create(dados);                           // Pede para o Service salvar e gerar o id
  }                                                              // Fecha o criar()

  // Slide 7: GET /convidados/:id -> Captura o id da URL com @Param('id')
  @Get(':id')                                                    // ':id' indica um parâmetro dinâmico na URL (ex: /convidados/1)
  buscar(@Param('id') id: string) {                              // @Param('id') captura o texto '1' da URL
    return this.service.findOne(+id);                            // O sinal '+' na frente (+id) converte o texto '1' para número 1!
  }                                                              // Fecha o buscar()

  // Slide 9: PUT /convidados/:id -> Substitui a ficha inteira do convidado
  @Put(':id')                                                    // Mapeia requisições PUT em /convidados/:id
  substituir(@Param('id') id: string, @Body() dados: CreateConvidadoDto) { // Pega o :id da URL e a ficha nova do Body
    return this.service.replace(+id, dados);                     // Converte +id para número e manda o Service substituir tudo
  }                                                              // Fecha o substituir()

  // Slide 10: PATCH /convidados/:id -> Altera apenas os campos enviados no Body
  @Patch(':id')                                                  // Mapeia requisições PATCH em /convidados/:id
  atualizarParcial(@Param('id') id: string, @Body() dados: UpdateConvidadoDto) { // Usa UpdateConvidadoDto (campos opcionais)
    return this.service.update(+id, dados);                      // Converte +id para número e manda o Service atualizar só o que veio
  }                                                              // Fecha o atualizarParcial()
}                                                                // Fecha a classe ConvidadosController
