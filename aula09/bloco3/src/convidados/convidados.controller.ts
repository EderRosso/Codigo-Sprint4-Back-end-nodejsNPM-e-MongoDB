// Slides 7 a 12 e Slide 14 - src/convidados/convidados.controller.ts: As 6 rotas do CRUD Completo!
import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ConvidadosService } from './convidados.service.js';     // Importa o Service
import { CreateConvidadoDto } from './dto/create-convidado.dto.js'; // DTO completo
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js'; // DTO parcial (campos com ?)

@Controller('convidados')                                        // Prefixo '/convidados'
export class ConvidadosController {                              // Exporta o ConvidadosController
  constructor(private readonly service: ConvidadosService) {}    // Injeta o ConvidadosService

  @Get()                                                         // 1. GET /convidados -> Lista todos (200 OK)
  listar() {                                                     // Handler de listagem
    return this.service.findAll();                               // Chama findAll() do Service
  }                                                              // Fecha listar()

  @Get(':id')                                                    // 2. GET /convidados/:id -> Busca 1 pelo id (200 ou 404)
  buscar(@Param('id') id: string) {                              // Captura :id da URL
    return this.service.findOne(+id);                            // Converte +id para número e busca no Service
  }                                                              // Fecha buscar()

  @Post()                                                        // 3. POST /convidados -> Cria novo (201 Created)
  criar(@Body() dados: CreateConvidadoDto) {                     // Recebe os dados no Body
    return this.service.create(dados);                           // Chama create() do Service
  }                                                              // Fecha criar()

  @Put(':id')                                                    // 4. PUT /convidados/:id -> Substitui ficha inteira (200 ou 404)
  substituir(@Param('id') id: string, @Body() dados: CreateConvidadoDto) {
    return this.service.replace(+id, dados);                     // Chama replace() do Service
  }                                                              // Fecha substituir()

  @Patch(':id')                                                  // 5. PATCH /convidados/:id -> Atualiza só o que mudou (200 ou 404)
  atualizar(@Param('id') id: string, @Body() dados: UpdateConvidadoDto) {
    return this.service.update(+id, dados);                      // Chama update() do Service
  }                                                              // Fecha atualizar()

  // Slide 12: DELETE /convidados/:id com @HttpCode(204) -> Remove da lista (204 No Content ou 404)
  @Delete(':id')                                                 // 6. DELETE /convidados/:id
  @HttpCode(204)                                                 // Status 204 = Deu certo e não há conteúdo para devolver!
  remover(@Param('id') id: string) {                             // Captura :id da URL
    this.service.remove(+id);                                    // Chama remove(+id) do Service
  }                                                              // Fecha remover()
}                                                                // Fecha ConvidadosController
