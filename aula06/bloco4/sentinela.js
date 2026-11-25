// Slide 15 - GABARITO ATIVIDADE PRINCIPAL: O Servidor Sentinela (sentinela.js)
// Não precisa de npm install! Usa apenas o módulo nativo 'http' do Node.js.

const http = require('http');                                    // Passo 1: Importa o módulo nativo 'http'

const servidor = http.createServer((req, res) => {               // Cria o servidor HTTP recebendo o pedido (req) e a resposta (res)
  // Passo 2: Mostrar no console o método (GET, POST...) e a rota (/status, /abc...) de cada requisição
  console.log(`Método: ${req.method}   Rota: ${req.url}`);       // Imprime no terminal ex: Método: GET   Rota: /status

  // Passo 3: Na rota /status, responder 200 com { "servidor": "online" }
  if (req.url === '/status') {                                   // Verifica se o cliente pediu a rota '/status'
    res.writeHead(200, {                                         // Define Status 200 (OK)
      'Content-Type': 'application/json; charset=utf-8',         // Avisa que a resposta é em formato JSON
    });                                                          // Fecha o writeHead
    res.end(JSON.stringify({ servidor: 'online' }));             // Envia {"servidor":"online"} e encerra a resposta
  } else {                                                       // Passo 4: Em qualquer outra rota, responder 404 com mensagem de erro
    res.writeHead(404, {                                         // Define Status 404 (Not Found / Não encontrado)
      'Content-Type': 'application/json; charset=utf-8',         // Avisa que a resposta é em formato JSON
    });                                                          // Fecha o writeHead
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));    // Envia {"erro":"Rota não encontrada"} e encerra a resposta
  }                                                              // Fecha o if/else
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Coloca o Sentinela para escutar na porta 3000
  console.log('Sentinela ativo! Rodando em http://localhost:3000'); // Mensagem inicial no terminal
});                                                              // Fecha o listen
