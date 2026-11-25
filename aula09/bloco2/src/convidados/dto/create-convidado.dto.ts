// Slide 10 - src/convidados/dto/create-convidado.dto.ts: Contrato para criar/substituir convidado
export class CreateConvidadoDto {                                // Usado no POST e no PUT (todos os campos obrigatórios)
  nome!: string;                                                 // Nome completo do convidado
  idade!: number;                                                // Idade do convidado
  email!: string;                                                // E-mail do convidado
}                                                                // Fecha o CreateConvidadoDto
