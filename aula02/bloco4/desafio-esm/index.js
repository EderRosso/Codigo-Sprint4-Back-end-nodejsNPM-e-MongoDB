// Slide 14 - Desafio Extra: A mesma atividade em ES Modules (ESM)
import fs from 'fs';                                             // Passo 1: Troca require por import
import path from 'path';                                         // Passo 1: Importa path com sintaxe ESM
import { fileURLToPath } from 'url';                             // Passo 2: Importa conversor de URL para recriar o __dirname no ESM
import { formatLog } from './utils.js';                          // Passo 1: Importa formatLog (lembrando do '.js' obrigatório no ESM!)

// Passo 2: No ESM não existe __dirname nativo — recriamos com o trecho do Slide 14:
const __dirname = path.dirname(fileURLToPath(import.meta.url));  // Converte a URL deste arquivo em caminho de pasta do sistema

const pastaLogs = path.join(__dirname, 'logs');                  // Monta o caminho da pasta 'logs'
const arquivoLog = path.join(pastaLogs, 'system.log');           // Monta o caminho do arquivo 'logs/system.log'

if (!fs.existsSync(pastaLogs)) {                                 // Se a pasta 'logs' não existir...
  fs.mkdirSync(pastaLogs, { recursive: true });                  // ...cria a pasta 'logs'
}                                                                // Fecha o if

const linha = formatLog('Falha no disco', 'ERRO');               // Passo 3: Passa a mensagem e o nível 'ERRO'
fs.appendFileSync(arquivoLog, linha, 'utf8');                    // Grava no final do arquivo 'logs/system.log'

console.log('Log ESM gravado com sucesso:', linha.trim());       // Mostra confirmação no terminal

