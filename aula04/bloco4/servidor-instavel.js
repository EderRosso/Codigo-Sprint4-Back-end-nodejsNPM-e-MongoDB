// Slide 14 (Passo 2) - servidor-instavel.js (O servidor SEM proteção que os alunos vão consertar!)
const express = require('express');                              // Importa o framework Express
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const app = express();                                           // Cria a aplicação Express

// ROTA 1: Tenta ler um arquivo que não existe sem try/catch (Vaza Stack Trace feio na tela!)
app.get('/config', (req, res) => {                               // Rota GET /config desprotegida
  const texto = fs.readFileSync('config.json', 'utf8');          // ERRO: 'config.json' não existe (ENOENT)!
  res.json(JSON.parse(texto));                                   // Nunca chega aqui
});                                                              // Fecha a rota /config

// ROTA 2: Tenta converter um JSON inválido/undefined sem try/catch (Estoura SyntaxError!)
app.get('/livros', (req, res) => {                               // Rota GET /livros desprotegida
  let dadosDoBanco;                                              // Variável vazia (undefined) simulando falha ao buscar dados
  const lista = JSON.parse(dadosDoBanco);                        // ERRO: JSON.parse(undefined) lança SyntaxError!
  res.json(lista);                                               // Nunca chega aqui
});                                                              // Fecha a rota /livros

// ROTA 3: Dispara uma Promise sem .catch() (DERRUBA O SERVIDOR INTEIRO com unhandledRejection!)
app.get('/relatorio', (req, res) => {                            // Rota GET /relatorio desprotegida
  Promise.reject(new Error('Banco de dados fora do ar'));        // ERRO FATAL: Promise rejeitada sem .catch() derruba o Node!
  res.json({ status: 'Gerando relatório em segundo plano...' }); // Responde 200 antes de o servidor cair
});                                                              // Fecha a rota /relatorio

app.listen(3000, () => {                                         // Inicia na porta 3000
  console.log('💥 Servidor INSTÁVEL rodando em http://localhost:3000');
  console.log('Teste no navegador: /config, /livros e /relatorio (o /relatorio vai derrubar o servidor!)');
});                                                              // Fecha o app.listen
