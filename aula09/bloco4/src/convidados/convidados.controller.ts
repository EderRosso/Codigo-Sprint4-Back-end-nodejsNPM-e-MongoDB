// Slide 14 e 15 - src/convidados/convidados.controller.ts: CRUD Completo + Rota PATCH /:id/restaurar
import { Controller, Get, Post, Put, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ConvidadosService } from './convidados.service.js';
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';

@Controller('convidados')                                        // Prefixo '/convidados'
export class ConvidadosController {                              // Exporta o ConvidadosController
  constructor(private readonly service: ConvidadosService) {}    // Injeta o ConvidadosService

  @Get()                                                         // 1. GET /convidados (mostra só os ativos)
  listar() {                                                     // Handler de listagem
    return this.service.findAll();                               // Chama findAll()
  }                                                              // Fecha listar()

  @Get(':id')                                                    // 2. GET /convidados/:id
  buscar(@Param('id') id: string) {                              // Captura :id
    return this.service.findOne(+id);                            // Converte +id para número e busca
  }                                                              // Fecha buscar()

  @Post()                                                        // 3. POST /convidados
  criar(@Body() dados: CreateConvidadoDto) {                     // Recebe Body
    return this.service.create(dados);                           // Cria convidado
  }                                                              // Fecha criar()

  @Put(':id')                                                    // 4. PUT /convidados/:id
  substituir(@Param('id') id: string, @Body() dados: CreateConvidadoDto) {
    return this.service.replace(+id, dados);                     // Substitui ficha inteira
  }                                                              // Fecha substituir()

  @Patch(':id')                                                  // 5. PATCH /convidados/:id
  atualizar(@Param('id') id: string, @Body() dados: UpdateConvidadoDto) {
    return this.service.update(+id, dados);                      // Atualiza parcialmente
  }                                                              // Fecha atualizar()

  @Delete(':id')                                                 // 6. DELETE /convidados/:id (Soft Delete -> 204)
  @HttpCode(204)                                                 // Status 204 No Content
  remover(@Param('id') id: string) {                             // Captura :id
    this.service.remove(+id);                                    // Marca ativo: false
  }                                                              // Fecha remover()

  // Slide 15 (Passo 3): PATCH /convidados/:id/restaurar -> Volta ativo: true!
  @Patch(':id/restaurar')                                        // 7. PATCH /convidados/2/restaurar
  restaurar(@Param('id') id: string) {                           // Captura :id da URL
    return this.service.restaurar(+id);                          // Reativa o convidado e devolve 200 OK!
  }                                                              // Fecha restaurar()
}                                                                // Fecha ConvidadosController
