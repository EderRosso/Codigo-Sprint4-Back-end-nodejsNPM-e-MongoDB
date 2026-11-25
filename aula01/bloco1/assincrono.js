// Slide 6 - Garçom que segue (não bloqueia - non-blocking I/O)
const fs = require('fs');                        // Importa o módulo nativo 'fs' (File System) para ler arquivos

console.log('1. pedi');                          // 1º: Imprime no terminal imediatamente (código síncrono)
fs.readFile('nota.txt', 'utf8', (err, t) => {    // Pede para a "cozinha" (SO) ler o arquivo sem travar o garçom e agenda o callback
  console.log('3. li:', t);                      // 3º: Só executa no final, quando a leitura do arquivo terminar (Callback)
});                                              // Fecha o pedido de leitura assíncrona e segue para a linha de baixo na hora!
console.log('2. outra mesa');                    // 2º: Roda IMEDIATAMENTE enquanto o arquivo ainda está sendo lido nos bastidores
