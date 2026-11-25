// Slide 10 - Exemplo 3: ler um arquivo gigante linha a linha com readline
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const readline = require('readline');                            // Importa o módulo nativo 'readline' (leitor de linhas)

const leitura = fs.createReadStream('logs/grande.log', 'utf8');  // Cria o Stream de leitura já convertendo para texto ('utf8')
const rl = readline.createInterface({ input: leitura });         // Conecta o readline na saída do Stream para entregar 1 linha inteira por vez

let total = 0;                                                   // Contador de linhas lidas

rl.on('line', (linha) => {                                       // Evento 'line': dispara para cada linha completa encontrada
  total++;                                                       // Soma +1 no total de linhas
});                                                              // Fecha o evento 'line'

rl.on('close', () => {                                           // Evento 'close': dispara quando chega ao fim da última linha do arquivo
  console.log('Linhas:', total);                                 // Imprime no terminal: Linhas: 2000000
});                                                              // Fecha o evento 'close'

