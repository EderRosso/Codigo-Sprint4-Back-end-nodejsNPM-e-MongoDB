// Slide 14 (Passo 3) e Slide 11 - Desafio Extra: Versão com readFileSync + split para comparar a memória!
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)

const caminhoEntrada = path.join(__dirname, 'logs', 'grande.log'); // Caminho do arquivo gigante (111 MB)
const caminhoSaida = path.join(__dirname, 'logs', 'erros-sync.log'); // Arquivo de saída para o teste síncrono

console.log('Lendo os 111 MB de uma vez só na RAM com readFileSync...');

const textoInteiro = fs.readFileSync(caminhoEntrada, 'utf8');    // Carrega os 111 MB inteiros na memória RAM de uma vez!
const todasAsLinhas = textoInteiro.split('\n');                  // Quebra em uma lista com 2.000.000 de posições na memória!

const linhasDeErro = todasAsLinhas.filter((l) => l.includes('ERROR')); // Filtra as 200.000 linhas que contêm 'ERROR'
fs.writeFileSync(caminhoSaida, linhasDeErro.join('\n'), 'utf8'); // Grava todas as linhas de erro de uma vez

const mb = process.memoryUsage().rss / 1024 / 1024;              // Mede o pico de memória RAM usada pelo processo
console.log(`Linhas lidas: ${todasAsLinhas.length - 1}`);        // Imprime: 2000000
console.log(`Erros encontrados: ${linhasDeErro.length}`);        // Imprime: 200000
console.log(`⚠️ Memória usada (readFileSync + split): ${mb.toFixed(1)} MB (Mais de 5x mais memória que o Stream!)`);

