// Slide 7 - dotenv: Carregando o arquivo .env para dentro do Node.js (server.js)
require('dotenv').config({ quiet: true });                       // 1ª LINHA OBRIGATÓRIA: Lê o arquivo '.env' e joga tudo dentro de 'process.env'

const porta = process.env.PORT || 3000;                          // Lê o valor de PORT do .env; se não existir lá, usa 3000 como reserva (padrão)
const nome = process.env.NOME_APP;                               // Lê o valor de NOME_APP ('Biblioteca') que veio lá do arquivo .env

console.log(`${nome} rodando na porta ${porta}`);                // Imprime no terminal: Biblioteca rodando na porta 3000