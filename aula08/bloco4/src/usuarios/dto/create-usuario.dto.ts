// Slide 10 (Bloco 3) - src/usuarios/dto/create-usuario.dto.ts: O Contrato dos Dados (DTO)
export class CreateUsuarioDto {                                  // Exporta a classe que define o formato exigido no cadastro
  nome: string;                                                  // Campo 'nome' deve ser um texto (ex: "Ana")
  email: string;                                                 // Campo 'email' deve ser um texto (ex: "ana@email.com")
  idade: number;                                                 // Campo 'idade' deve ser um número (ex: 17)
}                                                                // Fecha o DTO
