// Slide 15 - DESAFIO EXTRA: Respostas mais espertas (404 para ENOENT e 404 para rotas inexistentes)
const express = require('express');                              // Importa o framework Express
const fs = require('fs');                                        // Importa o módulo nativo 'fs'
const path = require('path');                                    // Importa o módulo nativo 'path'
const app = express();                                           // Cria a aplicação Express

const pastaLogs = path.join(__dirname, 'logs');                  // Caminho da pasta 'logs'
const arquivoLog = path.join(pastaLogs, 'servidor.log');         // Caminho do arquivo 'logs/servidor.log'
if (!fs.existsSync(pastaLogs)) {                                 // Garante que a pasta 'logs' existe
  fs.mkdirSync(pastaLogs, { recursive: true });                  // Cria a pasta 'logs'
}                                                                // Fecha o if

function registrarLog(tipo, rota, mensagem) {                    // Função para gravar os erros em 'logs/servidor.log'
  const dataHora = new Date().toLocaleString('pt-BR');           // Data e hora atual
  const linha = `[${dataHora}] [${tipo}] Rota: ${rota} | Detalhe: ${mensagem}\n`; // Linha formatada
  fs.appendFileSync(arquivoLog, linha, 'utf8');                  // Salva no arquivo de log
}                                                                // Fecha a função registrarLog

app.get('/config', (req, res, next) => {                         // Rota /config (tenta ler arquivo inexistente -> ENOENT)
  try {                                                          // Bloco try
    const texto = fs.readFileSync('config.json', 'utf8');        // Dá erro com err.code === 'ENOENT'
    res.json(JSON.parse(texto));                                 // Nunca chega aqui
  } catch (err) {                                                // Captura o erro
    next(err);                                                   // Passa para o middleware de erro
  }                                                              // Fecha o try/catch
});                                                              // Fecha /config

app.get('/livros', (req, res, next) => {                         // Rota /livros (dá erro de JSON -> 500)
  try {                                                          // Bloco try
    let dadosDoBanco;                                            // Variável undefined
    res.json(JSON.parse(dadosDoBanco));                          // Lança SyntaxError
  } catch (err) {                                                // Captura o erro
    next(err);                                                   // Passa para o middleware de erro
  }                                                              // Fecha o try/catch
});                                                              // Fecha /livros

app.get('/relatorio', (req, res) => {                            // Rota /relatorio (protegida com .catch)
  Promise.reject(new Error('Banco de dados fora do ar'))         // Simula erro assíncrono
    .catch((err) => registrarLog('PROMISE', req.url, err.message)); // Grava no log sem cair
  res.status(200).json({ mensagem: 'Relatório OK!' });           // Responde 200
});                                                              // Fecha /relatorio

// DESAFIO EXTRA (Passo 2): Resposta 404 em JSON para qualquer rota que não existe!
app.use((req, res) => {                                          // Se nenhuma rota acima bateu, cai aqui!
  res.status(404).json({ mensagem: 'Rota não encontrada' });     // Devolve 404 amigável em JSON
});                                                              // Fecha o handler de 404

// DESAFIO EXTRA (Passo 1): Se err.code === 'ENOENT', responde 404 em vez de 500!
app.use((err, req, res, next) => {                               // Middleware de Erro Global (4 parâmetros)
  registrarLog(err.code || 'ERRO', req.url, err.message);        // Registra tudo em 'logs/servidor.log'
  if (err.code === 'ENOENT') {                                   // Se o erro foi de arquivo não encontrado (ENOENT)...
    return res.status(404).json({ mensagem: 'Não encontrado' }); // ...responde 404 (Not Found) em vez de 500!
  }                                                              // Fecha o if
  res.status(500).json({ mensagem: 'Erro interno' });            // Para os demais erros, responde 500 (Internal Server Error)
});                                                              // Fecha o middleware de erro

app.listen(3000, () => {                                         // Inicia na porta 3000
  console.log('🧠 Servidor ESPERTO rodando em http://localhost:3000');
});                                                              // Fecha o app.listen
