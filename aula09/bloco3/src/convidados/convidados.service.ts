// Slides 6 a 12 e Slide 14 - src/convidados/convidados.service.ts: CRUD Completo no Service!
import { Injectable, NotFoundException } from '@nestjs/common';  // Importa @Injectable e NotFoundException (Erro 404)
import { CreateConvidadoDto } from './dto/create-convidado.dto.js'; // DTO de criação/substituição
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js'; // DTO de atualização parcial

@Injectable()                                                    // Marca a classe como um Service injetável
export class ConvidadosService {                                 // Exporta o ConvidadosService
  private convidados = [                                         // Lista de convidados na memória (com id):
    { id: 1, nome: 'Ana', idade: 28, email: 'ana@email.com' },   // Convidado 1
    { id: 2, nome: 'Bruno', idade: 17, email: 'bruno@email.com' },// Convidado 2
  ];                                                             // Fecha a lista

  findAll() {                                                    // 1. READ ALL (GET /convidados)
    return this.convidados;                                      // Devolve todos os convidados
  }                                                              // Fecha findAll()

  findOne(id: number) {                                          // 2. READ ONE (GET /convidados/:id)
    const c = this.convidados.find((x) => x.id === id);          // Procura o convidado pelo id numérico
    if (!c) {                                                    // Se não existir...
      throw new NotFoundException(`Convidado ${id} não encontrado`); // ...lança erro 404 automático!
    }                                                            // Fecha o if
    return c;                                                    // Devolve o convidado encontrado
  }                                                              // Fecha findOne()

  create(dados: CreateConvidadoDto) {                            // 3. CREATE (POST /convidados)
    const novo = { id: this.convidados.length + 1, ...dados };   // Monta o novo convidado com id automático
    this.convidados.push(novo);                                  // Adiciona na lista
    return novo;                                                 // Devolve o convidado criado
  }                                                              // Fecha create()

  replace(id: number, dados: CreateConvidadoDto) {               // 4. UPDATE PUT (PUT /convidados/:id)
    const atual = this.findOne(id);                              // Verifica se existe (ou dá 404)
    const i = this.convidados.indexOf(atual);                    // Acha a posição no array
    this.convidados[i] = { id, ...dados };                       // Substitui a ficha inteira por uma nova
    return this.convidados[i];                                   // Devolve a ficha substituída
  }                                                              // Fecha replace()

  update(id: number, dados: UpdateConvidadoDto) {                // 5. UPDATE PATCH (PATCH /convidados/:id)
    const atual = this.findOne(id);                              // Verifica se existe (ou dá 404)
    return Object.assign(atual, dados);                          // Altera apenas os campos enviados em 'dados'
  }                                                              // Fecha update()

  // Slide 12: DELETE (remove) -> Tira o convidado da lista!
  remove(id: number) {                                           // 6. DELETE (DELETE /convidados/:id)
    this.findOne(id);                                            // Primeiro confere se existe (se não existir, já dá 404!)
    this.convidados = this.convidados.filter((x) => x.id !== id);// Mantém na lista só quem tem id DIFERENTE (!==) do apagado
  }                                                              // Fecha remove()
}                                                                // Fecha ConvidadosService
