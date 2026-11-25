// Slide 12 - Atalho moderno: --env-file (Desde o Node 20.6, lê o .env nativamente sem precisar do pacote dotenv!)
// Como rodar no terminal: node --env-file=.env app-sem-dotenv.js
console.log(process.env.NOME_APP);                               // Imprime 'Biblioteca' sem nenhum require('dotenv') no código!
