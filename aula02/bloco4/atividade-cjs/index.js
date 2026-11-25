// Slide 13 - Passos 2 a 6: Organizador de logs em CommonJS
const fs = require('fs');                                        // Passo 2: Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Passo 2: Importa o módulo nativo 'path' (Caminhos)
const { formatLog } = require('./utils');                        // Passo 2: Importa a função 'formatLog' do nosso arquivo './utils.js'

const pastaLogs = path.join(__dirname, 'logs');                  // Passo 3: Monta o caminho seguro da pasta 'logs' com path.join
const arquivoLog = path.join(pastaLogs, 'system.log');           // Passo 3: Monta o caminho do arquivo 'logs/system.log'

if (!fs.existsSync(pastaLogs)) {                                 // Passo 4: Verifica se a pasta 'logs' AINDA NÃO existe (! significa NÃO)
  fs.mkdirSync(pastaLogs, { recursive: true });                  // Passo 4: Cria a pasta 'logs' (mkdir = make directory)
}                                                                // Fecha o if

const linha = formatLog('Olá!');                                 // Usa nossa função de utils.js para formatar: '[12/11/2026] - Olá!\n'
fs.appendFileSync(arquivoLog, linha, 'utf8');                    // Passo 5: Acrescenta (append) a linha no final de 'logs/system.log' sem apagar as anteriores!

console.log('Log gravado com sucesso:', linha.trim());           // Avisa no terminal que a linha foi gravada

