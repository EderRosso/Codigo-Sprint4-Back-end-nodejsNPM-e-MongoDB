// Slide 16 - GABARITO DESAFIO EXTRA: A rota /livros, erro 405 e header de segurança (sentinela-livros.js)
const http = require('http');                                    // Importa o módulo nativo 'http'

// Lista de livros da nossa futura API Biblioteca (Desafio Extra - Passo 1)
const livros = [                                                 // Array de objetos representando os livros
  { id: 1, titulo: 'Código Limpo', autor: 'Robert C. Martin' },  // Livro 1
  { id: 2, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },  // Livro 2
];                                                               // Fecha a lista de livros

const servidor = http.createServer((req, res) => {               // Cria o servidor HTTP
  // Desafio Extra (Passo 3): Acrescentar o header X-Content-Type-Options: nosniff em TODAS as respostas!
  res.setHeader('X-Content-Type-Options', 'nosniff');            // Protege contra adivinhação de tipo de arquivo (MIME sniffing)

  console.log(`Método: ${req.method}   Rota: ${req.url}`);       // Registra método e rota no terminal

  if (req.url === '/status') {                                   // Rota 1: /status
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // Status 200 OK
    res.end(JSON.stringify({ servidor: 'online' }));             // Devolve {"servidor":"online"}

  // Desafio Extra (Passo 1): Rota /livros com método GET devolve a lista de livros em JSON
  } else if (req.url === '/livros' && req.method === 'GET') {    // Se a rota for '/livros' E o método for 'GET'...
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // ...Status 200 OK
    res.end(JSON.stringify(livros));                             // ...devolve a lista de livros em JSON

  // Desafio Extra (Passo 2): Se a rota for /livros mas o método NÃO for GET (ex: POST, DELETE), responde 405!
  } else if (req.url === '/livros') {                            // Se pediu '/livros' com outro verbo (POST, PUT, DELETE)...
    res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' }); // ...Status 405 (Method Not Allowed)
    res.end(JSON.stringify({ erro: 'Método não permitido' }));   // ...avisa que aquele verbo não é aceito nessa rota!

  } else {                                                       // Qualquer outra rota que não exista:
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' }); // Status 404 (Not Found)
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));    // Devolve erro 404 em JSON
  }                                                              // Fecha o if/else
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Escuta na porta 3000
  console.log('Sentinela Completo ativo em http://localhost:3000 (Rotas: /status e /livros)');
});                                                              // Fecha o listen
