// Slide 14 (Passos 3, 4 e 5) - GABARITO: servidor-imortal.js (Servidor blindado que nunca cai!)
const express = require('express');                              // Importa o framework Express
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)
const app = express();                                           // Cria a aplicação Express

// Prepara a pasta e o arquivo 'logs/servidor.log' (usando o que aprendemos na Aula 02!)
const pastaLogs = path.join(__dirname, 'logs');                  // Caminho seguro para a pasta 'logs'
const arquivoLog = path.join(pastaLogs, 'servidor.log');         // Caminho seguro para 'logs/servidor.log'
if (!fs.existsSync(pastaLogs)) {                                 // Se a pasta 'logs' ainda não existir...
  fs.mkdirSync(pastaLogs, { recursive: true });                  // ...cria a pasta 'logs'
}                                                                // Fecha o if

function registrarLog(tipo, rota, mensagem) {                    // Função auxiliar para gravar no arquivo 'logs/servidor.log'
  const dataHora = new Date().toLocaleString('pt-BR');           // Pega data e hora atual no formato brasileiro
  const linha = `[${dataHora}] [${tipo}] Rota: ${rota} | Detalhe: ${mensagem}\n`; // Monta a linha de log completa
  fs.appendFileSync(arquivoLog, linha, 'utf8');                  // Grava no final de 'logs/servidor.log'
  console.error(linha.trim());                                   // Mostra também no terminal do desenvolvedor
}                                                                // Fecha a função registrarLog

// PASSO 3: Proteger /config com try/catch e next(err)
app.get('/config', (req, res, next) => {                         // Recebe 'next' para encaminhar o erro ao middleware
  try {                                                          // Abre o airbag (try)
    const texto = fs.readFileSync('config.json', 'utf8');        // Tenta ler 'config.json' (dá erro ENOENT)
    res.json(JSON.parse(texto));                                 // Responderia o JSON se o arquivo existisse
  } catch (err) {                                                // Captura o erro com segurança
    next(err);                                                   // Envia o erro para o Middleware de Erro Global!
  }                                                              // Fecha o try/catch
});                                                              // Fecha a rota /config

// PASSO 3: Proteger /livros com try/catch e next(err)
app.get('/livros', (req, res, next) => {                         // Recebe 'next' para encaminhar o erro ao middleware
  try {                                                          // Abre o airbag (try)
    let dadosDoBanco;                                            // Variável undefined simulando falha
    const lista = JSON.parse(dadosDoBanco);                      // Lança SyntaxError ao tentar converter undefined
    res.json(lista);                                             // Nunca chega aqui
  } catch (err) {                                                // Captura o SyntaxError
    next(err);                                                   // Envia o erro para o Middleware de Erro Global!
  }                                                              // Fecha o try/catch
});                                                              // Fecha a rota /livros

// PASSO 4: Colocar .catch() na Promise do /relatorio (responde 200 e não derruba o servidor!)
app.get('/relatorio', (req, res) => {                            // Rota GET /relatorio protegida
  Promise.reject(new Error('Banco de dados fora do ar'))         // Promise que falha em segundo plano
    .catch((err) => {                                            // Captura a falha da Promise para não virar unhandledRejection!
      registrarLog('PROMISE_CATCH', req.url, err.message);       // Registra o problema em 'logs/servidor.log'
    });                                                          // Fecha o .catch()
  res.status(200).json({ mensagem: 'Relatório solicitado com sucesso!' }); // Responde 200 normalmente!
});                                                              // Fecha a rota /relatorio

// PASSO 5: Middleware de Erro Global (4 parâmetros, sempre DEPOIS de todas as rotas!)
app.use((err, req, res, next) => {                               // Captura todos os next(err) vindos das rotas
  registrarLog('MIDDLEWARE_500', req.url, err.message);          // Guarda o detalhe técnico em 'logs/servidor.log'
  res.status(500).json({ mensagem: 'Erro interno no servidor' });// Responde status 500 e JSON limpo para o usuário
});                                                              // Fecha o middleware de erro

// PASSO 5: Rede de segurança global do processo (última linha de defesa)
process.on('uncaughtException', (err) => {                       // Captura qualquer erro síncrono que tenha escapado
  registrarLog('UNCAUGHT_EXCEPTION', 'PROCESSO', err.message);   // Grava no log antes de qualquer coisa
});                                                              // Fecha o uncaughtException

process.on('unhandledRejection', (motivo) => {                   // Captura qualquer Promise sem .catch() que tenha escapado
  registrarLog('UNHANDLED_REJECTION', 'PROCESSO', motivo.message || motivo); // Grava no log
});                                                              // Fecha o unhandledRejection

app.listen(3000, () => {                                         // Coloca o Servidor Imortal no ar na porta 3000
  console.log('🛡️ Servidor IMORTAL rodando em http://localhost:3000');
  console.log('Teste: /config (500 JSON), /livros (500 JSON) e /relatorio (200 JSON) — e veja logs/servidor.log!');
});                                                              // Fecha o app.listen
