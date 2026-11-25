// Slide 9 - Exemplo 2: compactar arquivo gigante com pipeline (lê -> transforma -> grava)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (ler e gravar arquivos)
const zlib = require('zlib');                                    // Importa o módulo nativo 'zlib' (compactação Gzip)
const { pipeline } = require('stream');                          // Importa 'pipeline' do módulo 'stream' (conecta os canos com segurança)

pipeline(                                                        // Conecta os 3 canos em sequência:
  fs.createReadStream('logs/grande.log'),                        // 1º Cano (Readable): Lê o arquivo original aos pedaços
  zlib.createGzip(),                                             // 2º Cano (Transform): Compacta cada pedaço que passa no meio do caminho
  fs.createWriteStream('logs/grande.log.gz'),                    // 3º Cano (Writable): Grava o pedaço compactado no arquivo final .gz
  (err) => {                                                     // Callback final: avisa quando terminou ou se deu erro em qualquer cano
    if (err) console.log('Deu erro:', err.message);              // Se algum cano falhar, mostra a mensagem de erro
    else console.log('Compactado!');                             // Se deu tudo certo, imprime: Compactado!
  }                                                              // Fecha o callback
);                                                               // Fecha o pipeline

