// Slide 13 (Passos 3, 4 e 5) - Atividade: O Caçador de Erros (filtrar.js)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)
const readline = require('readline');                            // Importa o módulo nativo 'readline' (ler linha a linha)

const caminhoEntrada = path.join(__dirname, 'logs', 'grande.log'); // Caminho do arquivo gigante de entrada (111 MB)
const caminhoErros = path.join(__dirname, 'logs', 'erros.log');    // Caminho do arquivo onde vamos salvar apenas os erros

// Passo 3: Ler o grande.log com createReadStream + readline
const leitura = fs.createReadStream(caminhoEntrada, 'utf8');     // Abre o Stream de leitura (torneira) em formato texto 'utf8'
const rl = readline.createInterface({ input: leitura });         // Cria o leitor linha a linha conectado na torneira

// Passo 4: Preparar a gravação das linhas com ERROR em logs/erros.log (createWriteStream)
const gravacaoErros = fs.createWriteStream(caminhoErros, 'utf8');// Abre o Stream de escrita (balde) para gravar 'logs/erros.log'

let linhasLidas = 0;                                             // Contador do total de linhas lidas
let errosEncontrados = 0;                                        // Contador de quantas linhas possuem a palavra 'ERROR'

rl.on('line', (linha) => {                                       // Evento 'line': executa para cada uma das 2.000.000 de linhas
  linhasLidas++;                                                 // Soma +1 linha lida
  if (linha.includes('ERROR')) {                                 // Se a linha contém a palavra 'ERROR'...
    errosEncontrados++;                                          // ...soma +1 erro encontrado
    gravacaoErros.write(linha + '\n');                           // ...e grava essa linha no arquivo 'logs/erros.log'
  }                                                              // Fecha o if
});                                                              // Fecha o evento 'line'

// Passo 5: No final, mostrar linhas, erros e memória usada
rl.on('close', () => {                                           // Evento 'close': executa quando terminou de ler todas as linhas
  gravacaoErros.end();                                           // Fecha o arquivo 'logs/erros.log' com segurança
  const mb = process.memoryUsage().rss / 1024 / 1024;            // Calcula quanta memória RAM o processo Node está usando em MB

  console.log(`Linhas lidas: ${linhasLidas}`);                   // Imprime: Linhas lidas: 2000000
  console.log(`Erros encontrados: ${errosEncontrados}`);         // Imprime: Erros encontrados: 200000
  console.log(`Memória usada: ${mb.toFixed(1)} MB`);             // Imprime: Memória usada: ~60.x MB
});                                                              // Fecha o evento 'close'

