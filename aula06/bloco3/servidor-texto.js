// Slide 10 - Servidor HTTP em 10 linhas (Node.js puro, sem precisar de npm install!)
const http = require('http');                                    // Importa o módulo nativo 'http' que já vem dentro do Node.js

const servidor = http.createServer((req, res) => {               // Cria o servidor; esta função roda toda vez que alguém acessa o endereço
  res.writeHead(200, {                                           // Escreve o cabeçalho da resposta: Status 200 (OK) e configurações:
    'Content-Type': 'text/plain; charset=utf-8',                 // Avisa ao navegador que é texto simples ('text/plain') com acentos ('utf-8')
  });                                                            // Fecha o writeHead
  res.end('Olá, Mundo!');                                        // Entrega a mensagem final 'Olá, Mundo!' e encerra a resposta (obrigatório!)
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Abre a porta 3000 do computador para escutar visitas
  console.log('Servidor rodando em http://localhost:3000');      // Mostra no terminal que o servidor está ligado
});                                                              // Fecha o listen (Para desligar no terminal, use Ctrl + C)
