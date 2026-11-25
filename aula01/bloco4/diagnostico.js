// Slide 17 - Atividade 1: Diagnóstico do seu computador
const os = require('os');                        // Importa o módulo nativo 'os' (Operating System) do Node.js

const gb = os.totalmem() / 1024 ** 3;            // Pega a memória RAM total em Bytes e divide por 1024³ para converter em Gigabytes (GB)
const livreGB = os.freemem() / 1024 ** 3;        // Pega a memória RAM livre em Bytes e divide por 1024³ para converter em Gigabytes (GB)

console.table({                                  // Desenha uma tabela formatada no terminal com os dados abaixo:
  sistema: os.platform(),                        // Nome do sistema operacional ('win32' para Windows, 'linux', 'darwin' para Mac)
  arquitetura: os.arch(),                        // Arquitetura do processador (ex: 'x64')
  cpus: os.cpus().length,                        // Lista os núcleos do processador e conta quantos existem (.length)
  ramTotalGB: gb.toFixed(1),                     // Formata o total de RAM com 1 casa decimal (ex: '31.8')
  ramLivreGB: livreGB.toFixed(1),                // Formata a RAM livre com 1 casa decimal
  usuario: os.userInfo().username,               // Pega o nome do usuário logado no computador
});                                              // Fecha o console.table

// PERGUNTA DO SLIDE 17: "Por que esse código não roda no navegador?"
// RESPOSTA: Por segurança (Sandbox)! Sites na internet não podem ter acesso aos dados do seu hardware,
// nome de usuário ou arquivos do computador, e o módulo nativo 'os' só existe no servidor (Node.js).
