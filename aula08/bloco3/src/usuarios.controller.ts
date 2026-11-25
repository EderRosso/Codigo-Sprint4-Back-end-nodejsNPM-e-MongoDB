// Slides 10 e 12 - src/usuarios.controller.ts: Recebendo dados no POST com @Body() e DTO + @HttpCode()
import { Controller, Post, Body, HttpCode } from '@nestjs/common'; // Importa os decorators @Controller, @Post, @Body e @HttpCode
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';    // Importa o contrato de dados (DTO) com '.js' no final!

@Controller('usuarios')                                          // Define o prefixo '/usuarios' para todas as rotas desta classe
export class UsuariosController {                                // Cria e exporta o recepcionista de usuários

  // SLIDE 10 e 11 - Rota POST http://localhost:3000/usuarios (Responde 201 Created automaticamente!)
  @Post()                                                        // @Post() vazio atende requisições POST em '/usuarios'
  criar(@Body() dados: CreateUsuarioDto) {                       // @Body() abre o envelope JSON enviado pelo cliente e guarda em 'dados'
    console.log('Novo usuário:', dados.nome);                    // Mostra no terminal o campo '.nome' (com autocompletar graças ao DTO!)
    return {                                                     // Devolve um objeto de confirmação (o Nest converte em JSON com Status 201!)
      mensagem: `Usuário ${dados.nome} criado!`,                 // Mensagem personalizada com o nome recebido
      dados,                                                     // Devolve também o objeto completo que foi recebido
    };                                                           // Fecha o objeto de retorno
  }                                                              // Fecha o handler criar()

  // SLIDE 12 - Rota POST http://localhost:3000/usuarios/sair (Mudando o status padrão com @HttpCode)
  @Post('sair')                                                  // Atende requisições POST em '/usuarios/sair'
  @HttpCode(204)                                                 // Troca o status padrão 201 pelo 204 (No Content = Deu certo, sem conteúdo)
  sair() {                                                       // Handler de logout/saída
    console.log('Usuário saiu do sistema (Status 204)');         // Registra no terminal; o cliente recebe 204 com corpo vazio
  }                                                              // Fecha o handler sair()
}                                                                // Fecha a classe UsuariosController
