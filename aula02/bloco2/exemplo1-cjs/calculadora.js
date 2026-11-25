// Slide 6 - Exemplo 1: calculadora.js com CommonJS (module.exports)
function somar(a, b) {       // Cria a função 'somar' que recebe dois números (a e b)
  return a + b;              // Devolve o resultado da soma de a + b
}                            // Fecha a função somar

function dobrar(n) {         // Cria a função 'dobrar' que recebe um número (n)
  return n * 2;              // Devolve o número multiplicado por 2
}                            // Fecha a função dobrar

module.exports = {           // Exporta um objeto no padrão CommonJS para que outros arquivos possam usar:
  somar,                     // Disponibiliza a função 'somar' para quem importar este arquivo
  dobrar                     // Disponibiliza a função 'dobrar' para quem importar este arquivo
};                           // Fecha a exportação do módulo

