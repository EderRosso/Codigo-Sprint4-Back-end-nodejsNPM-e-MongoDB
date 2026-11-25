// Slide 15 - GABARITO DESAFIO EXTRA (Soft Delete: Excluir sem apagar + Restaurar convidado!)
import { Injectable, NotFoundException } from '@nestjs/common';  // Importa @Injectable e NotFoundException
import { CreateConvidadoDto } from './dto/create-convidado.dto.js';
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js';

@Injectable()                                                    // Marca como Service injetável
export class ConvidadosService {                                 // Exporta o ConvidadosService
  private convidados = [                                         // Agora cada convidado tem o campo 'ativo: true':
    { id: 1, nome: 'Ana', idade: 28, email: 'ana@email.com', ativo: true },
    { id: 2, nome: 'Bruno', idade: 17, email: 'bruno@email.com', ativo: true },
  ];                                                             // Fecha a lista

  // Slide 15 (Passo 2): O GET /convidados mostra SÓ quem está ativo (c.ativo !== false)
  findAll() {                                                    // Lista apenas os convidados ativos
    return this.convidados.filter((c) => c.ativo !== false);     // Esconde quem foi desativado no Soft Delete!
  }                                                              // Fecha findAll()

  findOne(id: number) {                                          // Busca 1 convidado pelo id
    const c = this.convidados.find((x) => x.id === id && x.ativo !== false); // Só acha se existir e estiver ativo
    if (!c) {                                                    // Se não achar (ou estiver inativo)...
      throw new NotFoundException(`Convidado ${id} não encontrado`); // ...responde 404 Not Found!
    }                                                            // Fecha o if
    return c;                                                    // Devolve o convidado
  }                                                              // Fecha findOne()

  create(dados: CreateConvidadoDto) {                            // Cria novo convidado já com ativo: true
    const novo = { id: this.convidados.length + 1, ...dados, ativo: true };
    this.convidados.push(novo);                                  // Adiciona na lista
    return novo;                                                 // Devolve o convidado criado
  }                                                              // Fecha create()

  replace(id: number, dados: CreateConvidadoDto) {               // PUT /convidados/:id
    const atual = this.findOne(id);                              // Verifica se existe e está ativo
    const i = this.convidados.indexOf(atual);                    // Posição na lista
    this.convidados[i] = { id, ...dados, ativo: true };          // Substitui a ficha inteira mantendo ativo: true
    return this.convidados[i];                                   // Devolve a nova ficha
  }                                                              // Fecha replace()

  update(id: number, dados: UpdateConvidadoDto) {                // PATCH /convidados/:id
    const atual = this.findOne(id);                              // Verifica se existe e está ativo
    return Object.assign(atual, dados);                          // Atualiza só os campos enviados
  }                                                              // Fecha update()

  // Slide 15 (Passo 1): Troca o DELETE físico por SOFT DELETE (marca ativo: false em vez de apagar!)
  remove(id: number) {                                           // DELETE /convidados/:id
    const c = this.findOne(id);                                  // Busca o convidado (ou dá 404)
    c.ativo = false;                                             // Marca como inativo (não apaga da memória!)
  }                                                              // Fecha remove()

  // Slide 15 (Passo 3): PATCH /convidados/:id/restaurar -> Volta ativo: true!
  restaurar(id: number) {                                        // Restaura um convidado que tinha sido desativado
    const c = this.convidados.find((x) => x.id === id);          // Procura mesmo que esteja com ativo: false
    if (!c) {                                                    // Se o id realmente nunca existiu...
      throw new NotFoundException(`Convidado ${id} não encontrado`); // ...lança 404
    }                                                            // Fecha o if
    c.ativo = true;                                              // Reativa o convidado!
    return c;                                                    // Devolve o convidado restaurado
  }                                                              // Fecha restaurar()
}                                                                // Fecha ConvidadosService
