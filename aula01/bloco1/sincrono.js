// Slide 6 - Garçom que espera (bloqueia a thread principal)
const fs = require('fs');                        // Importa o módulo nativo 'fs' (File System) para ler arquivos

console.log('1. pedi');                          // 1º: Imprime no terminal imediatamente (código síncrono)
const t = fs.readFileSync('nota.txt', 'utf8');   // 2º: TRAVA o Node aqui até terminar de ler 'nota.txt' como texto ('utf8')
console.log('2. li:', t);                        // 3º: Só roda depois que a leitura do arquivo terminou (mostra 'Oi!')
console.log('3. outra mesa');                    // 4º: A outra mesa teve que esperar a leitura acabar para ser atendida
