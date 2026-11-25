// Slide 12 - Rotas na mão: req.url e o 404 (Sem framework, cada rota é um if!)
const http = require('http');                                    // Importa o módulo nativo 'http'

const servidor = http.createServer((req, res) => {               // Cria o servidor HTTP recebendo o pedido (req) e a resposta (res)
  if (req.url === '/status') {                                   // Se o cliente acessou o caminho exato 'http://localhost:3000/status'...
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // ...responde Status 200 (OK) em formato JSON
    res.end(JSON.stringify({ servidor: 'online' }));             // ...e entrega {"servidor":"online"}
  } else {                                                       // Para QUALQUER outro caminho que não exista (ex: '/banana'):
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' }); // ...responde Status 404 (Not Found / Não encontrado)
    res.end(JSON.stringify({ erro: 'Página não encontrada' }));  // ...e entrega a mensagem de erro em JSON
  }                                                              // Fecha o if/else
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Escuta na porta 3000
  console.log('Servidor de rotas rodando! Teste: http://localhost:3000/status e http://localhost:3000/abc');
});                                                              // Fecha o listen
