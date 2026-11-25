// Slide 10 - Middleware de erro global: 4 parâmetros (err, req, res, next) e SEMPRE depois das rotas!
const express = require('express');                              // Importa o framework Express
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const app = express();                                           // Inicializa o servidor Express

app.get('/config', (req, res, next) => {                         // Rota '/config' recebe 3 parâmetros: req, res e next
  try {                                                          // Protege a leitura do arquivo com try/catch
    const texto = fs.readFileSync('config.json', 'utf8');        // Tenta ler 'config.json' (que não existe -> lança erro ENOENT!)
    res.json(JSON.parse(texto));                                 // Se existisse, converteria para JSON e responderia ao cliente
  } catch (err) {                                                // Captura o erro sem deixar o servidor cair
    next(err);                                                   // Encaminha o erro 'err' direto para o Middleware de Erro Global!
  }                                                              // Fecha o try/catch
});                                                              // Fecha a rota '/config'

// MIDDLEWARE DE ERRO GLOBAL (Obrigatoriamente com 4 parâmetros e DEPOIS de todas as rotas!)
app.use((err, req, res, next) => {                               // O Express reconhece que é middleware de erro pelos 4 parâmetros
  console.error('[ERRO]', err.message);                          // Nível 1 (Para o Dev): Registra o erro real no console/log do servidor
  res.status(500).json({ mensagem: 'Erro interno' });            // Nível 2 (Para o Usuário): Devolve status 500 e mensagem limpa em JSON
});                                                              // Fecha o middleware de erro

app.listen(3000, () =>                                           // Inicia o servidor na porta 3000
  console.log('Na porta 3000 -> Teste: http://localhost:3000/config')
);                                                               // Fecha o app.listen
