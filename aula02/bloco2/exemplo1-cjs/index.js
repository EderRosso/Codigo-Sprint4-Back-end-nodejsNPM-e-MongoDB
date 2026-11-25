// Slide 6 - Exemplo 1: index.js importando com require (CommonJS)
const calc = require('./calculadora');   // Importa o arquivo local './calculadora.js' (o './' é obrigatório!)

const r = calc.somar(2, 3);              // Chama a função somar(2, 3) que veio dentro de 'calc' e guarda 5 em 'r'
console.log(r);                          // Imprime o resultado da soma no terminal: 5
console.log(calc.dobrar(10));            // Chama a função dobrar(10) e imprime direto no terminal: 20

