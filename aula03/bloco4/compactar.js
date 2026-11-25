// Slide 14 (Passos 1 e 2) - Desafio Extra: Compactar logs/erros.log e comparar tamanhos
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)
const zlib = require('zlib');                                    // Importa o módulo nativo 'zlib' (compactador Gzip)
const { pipeline } = require('stream');                          // Importa 'pipeline' para ligar os Streams com segurança

const arquivoErros = path.join(__dirname, 'logs', 'erros.log');       // Caminho do arquivo original (~11,4 MB)
const arquivoCompactado = path.join(__dirname, 'logs', 'erros.log.gz'); // Caminho do arquivo compactado (.gz)

const origem = fs.createReadStream(arquivoErros);                // 1º Cano (Readable): Lê 'logs/erros.log' aos pedaços
const destino = fs.createWriteStream(arquivoCompactado);         // 3º Cano (Writable): Grava 'logs/erros.log.gz'

pipeline(origem, zlib.createGzip(), destino, (err) => {          // Passo 1: Liga origem -> Gzip -> destino com pipeline
  if (err) {                                                     // Se houver erro em qualquer etapa...
    console.log('Deu erro:', err.message);                       // ...mostra a mensagem de erro
  } else {                                                       // Se compactou com sucesso:
    console.log('Pronto!');                                      // Imprime 'Pronto!'
    // Passo 2: Comparar os tamanhos dos arquivos (erros.log x erros.log.gz)
    const tamOriginalMB = fs.statSync(arquivoErros).size / 1024 / 1024;       // Tamanho original em MB
    const tamCompactadoMB = fs.statSync(arquivoCompactado).size / 1024 / 1024;// Tamanho compactado em MB
    console.log(`erros.log ≈ ${tamOriginalMB.toFixed(1)} MB  →  erros.log.gz ≈ ${tamCompactadoMB.toFixed(2)} MB`);
  }                                                              // Fecha o else
});                                                              // Fecha o pipeline

