// Slide 5 - try/catch: o airbag do código (protegendo código síncrono perigoso)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)

try {                                                            // BLOCO TRY: Tenta executar o código perigoso abaixo
  const texto = fs.readFileSync('nao-existe.txt', 'utf8');       // Tenta ler um arquivo que NÃO existe de propósito!
  console.log(texto);                                            // Esta linha é pulada porque deu erro na linha de cima
} catch (err) {                                                  // BLOCO CATCH: O "airbag" abre e captura o erro na variável 'err'
  console.log('Não consegui ler:', err.message);                 // Mostra a mensagem do erro capturado (sem derrubar o Node!)
}                                                                // Fecha o bloco try/catch

console.log('✅ O programa continua!');                          // PROVA DE QUE FUNCIONOU: O programa não caiu e chegou até o fim!
