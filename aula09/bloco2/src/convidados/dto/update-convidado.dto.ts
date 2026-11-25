// Slide 10 - src/convidados/dto/update-convidado.dto.ts: Contrato para o PATCH (todos os campos opcionais com ?)
export class UpdateConvidadoDto {                                // Usado no PATCH (alterar só uma parte da ficha)
  nome?: string;                                                 // O '?' diz que 'nome' é opcional (pode vir ou não no JSON)
  idade?: number;                                                // O '?' diz que 'idade' é opcional
  email?: string;                                                // O '?' diz que 'email' é opcional
}                                                                // Fecha o UpdateConvidadoDto
