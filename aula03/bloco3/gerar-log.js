// Script auxiliar para criar o arquivo 'logs/grande.log' (~111 MB, 2.000.000 linhas, 200.000 erros)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)

const pastaLogs = path.join(__dirname, 'logs');                  // Monta o caminho da pasta 'logs'
const arquivoGrande = path.join(pastaLogs, 'grande.log');        // Monta o caminho do arquivo 'logs/grande.log'

if (!fs.existsSync(pastaLogs)) {                                 // Se a pasta 'logs' ainda não existir...
  fs.mkdirSync(pastaLogs, { recursive: true });                  // ...cria a pasta 'logs'
}                                                                // Fecha o if

console.log('Gerando logs/grande.log (111 MB, 2 milhões de linhas)... Aguarde ~2 segundos.');

const gravacao = fs.createWriteStream(arquivoGrande);            // Cria um Stream de escrita para gravar rápido sem usar muita RAM

// Monta um bloco de 20 linhas (18 INFO + 2 ERROR = 1.111 bytes exatos)
const linhaInfo1 = '2026-11-13 10:00:00 [INFO] Requisicao processada ok!!!\n';     // 55 bytes exatos
const linhaInfo2 = '2026-11-13 10:00:00 [INFO] Requisicao processada: ok!!!\n';    // 56 bytes exatos
const linhaErro  = '2026-11-13 10:00:00 [ERROR] Falha ao conectar no banco db!!\n';// 60 bytes exatos
const bloco20Linhas = linhaInfo1.repeat(17) + linhaInfo2 + linhaErro.repeat(2);    // 20 linhas (1.111 bytes)

// Repetimos o bloco de 20 linhas 100.000 vezes = 2.000.000 de linhas (111.100.000 bytes = 1.696 chunks de 64 KB!)
const lote2000Linhas = bloco20Linhas.repeat(100);                // Agrupa 2.000 linhas por vez para gravar ultrarrápido
for (let i = 0; i < 1000; i++) {                                 // 1.000 lotes x 2.000 linhas = 2.000.000 de linhas
  gravacao.write(lote2000Linhas);                                // Envia o lote pelo cano (WriteStream)
}                                                                // Fim do for

gravacao.end(() => {                                             // Fecha o arquivo e avisa quando terminar
  console.log('✅ Arquivo logs/grande.log gerado com sucesso! (111 MB | 2.000.000 linhas)');
});
