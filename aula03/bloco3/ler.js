// Slide 8 - Exemplo 1: ler um arquivo gigante aos pedaços (chunks de 64 KB)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)

const leitura = fs.createReadStream('logs/grande.log');          // Abre a "torneira" (Readable Stream) para ler em pedaços de 64 KB
let pedacos = 0;                                                 // Contador de quantos pedaços (chunks) passaram pelo cano

leitura.on('data', (chunk) => {                                  // Evento 'data': dispara toda vez que chega um pedaço novo de 64 KB
  pedacos++;                                                     // Soma +1 no contador de pedaços
  if (pedacos <= 3) {                                            // Mostra o tamanho dos 3 primeiros pedaços no terminal (como no Slide 8)
    console.log(chunk.length);                                   // Imprime 65536 (64 KB em bytes)
  } else if (pedacos === 4) {                                    // No 4º pedaço...
    console.log('...');                                          // ...imprime '...' para não poluir a tela com 1.696 linhas
  }                                                              // Fecha o if
});                                                              // Fecha o evento 'data'

leitura.on('end', () => {                                        // Evento 'end': dispara quando o arquivo inteiro terminou de passar
  console.log('Fim!', pedacos);                                  // Imprime: Fim! 1696 (exatamente como no Slide 8!)
});                                                              // Fecha o evento 'end'

