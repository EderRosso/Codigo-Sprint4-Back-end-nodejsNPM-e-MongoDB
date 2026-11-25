// Slide 14 (Passo 4) e Slide 15 - GABARITO: app.js (Usa o config.js e mascara a chave secreta!)
const config = require('./config');                              // Importa as configurações já validadas do './config.js'

// Pega apenas os 4 primeiros caracteres da chave (ex: 'sk_l') e esconde o resto com '****'
const chaveMascarada = config.apiKey.slice(0, 4) + '****';       // Nunca mostramos a chave inteira no terminal!

console.log(`${config.nomeApp} no ar!`);                         // Imprime: Loja SENAI no ar!
console.log(`Chave: ${chaveMascarada}`);                         // Imprime: Chave: sk_l****
console.log(`Porta: ${config.porta}   Modo: ${config.modo}`);    // Imprime: Porta: 3000   Modo: development
