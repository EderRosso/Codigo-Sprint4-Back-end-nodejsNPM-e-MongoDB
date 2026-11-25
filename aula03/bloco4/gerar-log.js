// Slide 13 (Passo 2) - Gera o arquivo 'logs/grande.log' (111 MB, 2.000.000 linhas, 200.000 erros)
const fs = require('fs');                                        // Importa o módulo nativo 'fs' (File System)
const path = require('path');                                    // Importa o módulo nativo 'path' (Caminhos)

const pastaLogs = path.join(__dirname, 'logs');                  // Monta o caminho da pasta 'logs'
const arquivoGrande = path.join(pastaLogs, 'grande.log');        // Monta o caminho do arquivo 'logs/grande.log'

if (!fs.existsSync(pastaLogs)) {                                 // Se a pasta 'logs' ainda não existir...
  fs.mkdirSync(pastaLogs, { recursive: true });                  // ...cria a pasta 'logs'
}                                                                // Fecha o if

console.log('Gerando logs/grande.log (111 MB)... Aguarde ~2 segundos.');

const gravacao = fs.createWriteStream(arquivoGrande);            // Cria um Stream de escrita para gerar o arquivo grande

// Bloco de 20 linhas (18 INFO + 2 ERROR = 1.111 bytes exatos)
const linhaInfo1 = '2026-11-13 10:00:00 [INFO] Requisicao processada ok!!!\n';     // 55 bytes exatos
const linhaInfo2 = '2026-11-13 10:00:00 [INFO] Requisicao processada: ok!!!\n';    // 56 bytes exatos
const linhaErro  = '2026-11-13 10:00:00 [ERROR] Falha ao conectar no banco db!!\n';// 60 bytes exatos
const bloco20Linhas = linhaInfo1.repeat(17) + linhaInfo2 + linhaErro.repeat(2);    // 20 linhas (1.111 bytes)

// 1.000 lotes de 2.000 linhas = 2.000.000 de linhas totais e 200.000 linhas com ERROR
const lote2000Linhas = bloco20Linhas.repeat(100);                // Agrupa 2.000 linhas por escrita
for (let i = 0; i < 1000; i++) {                                 // Repete 1.000 vezes
  gravacao.write(lote2000Linhas);                                // Escreve no Stream
}                                                                // Fim do laço for

gravacao.end(() => {                                             // Fecha o arquivo quando terminar de gravar tudo
  console.log('✅ logs/grande.log criado! (111 MB | 2.000.000 linhas | 200.000 erros)');
});
