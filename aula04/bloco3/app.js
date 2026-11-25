// Slide 9 - Express em 1 minuto (Criando nosso primeiro servidor HTTP com rotas)
const express = require('express');                              // Importa o framework Express (instalado via npm install express)
const app = express();                                           // Cria a aplicação do servidor Express

app.get('/ola', (req, res) => {                                  // Cria uma rota GET no endereço http://localhost:3000/ola
  res.json({ mensagem: 'Olá!' });                                // Responde para o navegador/cliente um objeto no formato JSON
});                                                              // Fecha a rota '/ola'

app.listen(3000, () =>                                           // Coloca o servidor para escutar pedidos na porta 3000
  console.log('Servidor rodando! Acesse: http://localhost:3000/ola') // Avisa no terminal que está no ar
);                                                               // Fecha o app.listen
