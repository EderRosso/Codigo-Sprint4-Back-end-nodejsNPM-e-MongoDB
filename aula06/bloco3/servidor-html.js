// Slide 11 (Direita) - Enviando HTML (O navegador desenha como página web!)
const http = require('http');                                    // Importa o módulo nativo 'http'

const servidor = http.createServer((req, res) => {               // Cria o servidor HTTP
  res.writeHead(200, {                                           // Define Status 200 (Sucesso) e o cabeçalho:
    'Content-Type': 'text/html; charset=utf-8',                  // Avisa ao navegador para interpretar as tags HTML (<h1>) com acentos!
  });                                                            // Fecha o writeHead
  res.end('<h1>Olá!</h1>');                                      // Envia um título HTML grande e encerra a resposta
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Escuta na porta 3000
  console.log('Servidor HTML rodando em http://localhost:3000'); // Avisa no terminal
});                                                              // Fecha o listen
