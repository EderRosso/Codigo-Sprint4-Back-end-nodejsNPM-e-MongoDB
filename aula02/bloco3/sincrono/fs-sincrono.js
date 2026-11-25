// Slide 12 (Esquerda) - fs: o jeito que espera (Síncrono - bloqueia o garçom)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System) tradicional

fs.writeFileSync('nota.txt', 'Oi');                              // Cria/sobrescreve o arquivo 'nota.txt' com 'Oi' (bloqueando a thread)
const t = fs.readFileSync('nota.txt', 'utf8');                   // Lê o conteúdo de 'nota.txt' como texto 'utf8' (bloqueando a thread)
console.log('Conteúdo lido (Síncrono):', t);                     // Imprime no terminal: Oi

