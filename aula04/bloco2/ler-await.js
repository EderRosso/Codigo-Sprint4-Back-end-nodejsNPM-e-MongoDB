// Slide 6 - Com await, o try/catch continua valendo (protegendo Promises/código assíncrono)
const fs = require('fs/promises');                               // Importa o 'fs' moderno baseado em Promises

async function ler() {                                           // Declara uma função assíncrona (obrigatório para usar 'await' no CJS)
  try {                                                          // BLOCO TRY: Envolve a operação assíncrona perigosa
    const t = await fs.readFile('dados.txt', 'utf8');            // Tenta ler 'dados.txt' (que NÃO existe de propósito!)
    console.log(t);                                              // Linha ignorada porque a leitura falhou
  } catch (err) {                                                // BLOCO CATCH: Captura a rejeição da Promise graças ao 'await'
    console.log('Falhou:', err.message);                         // Mostra o erro capturado pelo catch
  }                                                              // Fecha o try/catch
  console.log('✅ A função assíncrona terminou sem derrubar o programa!'); // Prova de que o catch protegeu a Promise!
}                                                                // Fecha a função ler()

ler();                                                           // IMPORTANTE: Chama a função ler() para ela executar!
