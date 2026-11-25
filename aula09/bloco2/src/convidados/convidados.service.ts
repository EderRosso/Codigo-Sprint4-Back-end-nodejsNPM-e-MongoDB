// Slides 6, 8, 9 e 10 - src/convidados/convidados.service.ts: A lógica de negócio (Service)
import { Injectable, NotFoundException } from '@nestjs/common';  // Importa @Injectable e o erro 404 pronto (NotFoundException)
import { CreateConvidadoDto } from './dto/create-convidado.dto.js'; // Importa o DTO de criação
import { UpdateConvidadoDto } from './dto/update-convidado.dto.js'; // Importa o DTO de atualização parcial (PATCH)

@Injectable()                                                    // Marca a classe como um Service injetável do NestJS
export class ConvidadosService {                                 // Exporta o especialista ConvidadosService
  // Slide 6: A lista de convidados agora mora dentro do Service (e cada convidado tem um 'id' único!)
  private convidados = [                                         // Array privado na memória simulando nosso banco de dados:
    { id: 1, nome: 'Ana', idade: 28, email: 'ana@email.com' },   // Convidado 1 (Ana tem 28 anos e e-mail cadastrado)
    { id: 2, nome: 'Bruno', idade: 17, email: 'bruno@email.com' },// Convidado 2
  ];                                                             // Fecha a lista inicial

  // Slide 6: Devolve todos os convidados
  findAll() {                                                    // Chamado pelo GET /convidados
    return this.convidados;                                      // Retorna a lista completa
  }                                                              // Fecha o findAll()

  // Slide 6: Cria um novo convidado gerando o próximo id automaticamente
  create(dados: CreateConvidadoDto) {                            // Chamado pelo POST /convidados
    const novo = { id: this.convidados.length + 1, ...dados };   // Cria o objeto juntando o novo 'id' com os '...dados' recebidos
    this.convidados.push(novo);                                  // Salva na lista em memória
    return novo;                                                 // Devolve o convidado recém-criado com seu id
  }                                                              // Fecha o create()

  // Slide 8: Busca 1 convidado pelo id; se não achar, lança erro 404 (NotFoundException) automaticamente!
  findOne(id: number) {                                          // Recebe o id já convertido para número
    const c = this.convidados.find((x) => x.id === id);          // Procura na lista quem tem x.id igual ao id buscado
    if (!c) {                                                    // Se não encontrou ninguém (c é undefined)...
      throw new NotFoundException(`Convidado ${id} não encontrado`); // ...interrompe tudo e responde Status 404 em JSON!
    }                                                            // Fecha o if
    return c;                                                    // Se encontrou, devolve o convidado
  }                                                              // Fecha o findOne()

  // Slide 9: PUT (replace) -> Rasga a ficha antiga e substitui por uma ficha nova inteira!
  replace(id: number, dados: CreateConvidadoDto) {               // Chamado pelo PUT /convidados/:id
    const atual = this.findOne(id);                              // 1º: Garante que o id existe (se não existir, o findOne já dá 404!)
    const i = this.convidados.indexOf(atual);                    // 2º: Descobre a posição (índice) dele dentro do array
    this.convidados[i] = { id, ...dados };                       // 3º: TROCA o objeto inteiro naquela posição (se faltou email, some!)
    return this.convidados[i];                                   // 4º: Devolve a nova ficha completa
  }                                                              // Fecha o replace()

  // Slide 10: PATCH (update) -> Corrige com a caneta SÓ os campos que vieram no JSON, mantendo o resto!
  update(id: number, dados: UpdateConvidadoDto) {                // Chamado pelo PATCH /convidados/:id
    const atual = this.findOne(id);                              // 1º: Busca o convidado (ou lança 404 se não existir)
    return Object.assign(atual, dados);                          // 2º: Object.assign copia para 'atual' SÓ os campos enviados em 'dados'!
  }                                                              // Fecha o update()
}                                                                // Fecha a classe ConvidadosService
