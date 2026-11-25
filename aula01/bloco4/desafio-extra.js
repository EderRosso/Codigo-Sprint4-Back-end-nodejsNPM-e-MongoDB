// DESAFIO EXTRA: Juntar 'os', 'dayjs' e 'fs' para salvar um relatório do PC em um arquivo .txt
const os = require('os');                                  // Importa o módulo nativo do Sistema Operacional ('os')
const fs = require('fs');                                  // Importa o módulo nativo de Sistema de Arquivos ('fs')
const dayjs = require('dayjs');                            // Importa o pacote de datas 'dayjs' (instalado via NPM)

const agora = dayjs().format('DD/MM/YYYY HH:mm:ss');       // Formata a data e hora atual no padrão brasileiro
const ramGB = (os.totalmem() / 1024 ** 3).toFixed(1);      // Converte a memória RAM de Bytes para GB com 1 casa decimal

const conteudo = `=== RELATÓRIO DO SERVIDOR ===            
Gerado em: ${agora}
Usuário: ${os.userInfo().username}
Sistema Operacional: ${os.platform()} (${os.arch()})
Processadores (CPUs): ${os.cpus().length} núcleos
Memória RAM Total: ${ramGB} GB
`;                                                         // Monta o texto completo do relatório usando Template String

fs.writeFile('relatorio.txt', conteudo, 'utf8', (erro) => { // Grava o arquivo 'relatorio.txt' de forma assíncrona (sem travar o Event Loop)
  if (erro) {                                              // Verifica se aconteceu algum erro ao tentar salvar o arquivo no disco
    console.error('Erro ao salvar relatório:', erro);      // Mostra o erro no terminal caso algo dê errado
    return;                                                // Encerra a função se houve erro
  }                                                        // Fim do if de verificação de erro
  console.log('✅ Arquivo relatorio.txt gerado com sucesso!'); // Avisa no terminal quando a gravação terminar
});                                                        // Fecha o fs.writeFile
