// Slides 7 e 8 - Importando com ES Modules (import ... from '...js')
import { somar, dobrar } from './calculadora.js';  // Exportação NOMEADA: usa { chaves } com o nome exato e extensão '.js'
import oi from './saudacao.js';                    // Exportação DEFAULT: NÃO usa chaves e o nome ('oi') é livre!

console.log(somar(2, 3));                          // Usa a função somar importada -> imprime 5
console.log(dobrar(10));                           // Usa a função dobrar importada -> imprime 20
console.log(oi('Turma SENAI'));                    // Usa a função default (saudar) chamada aqui de 'oi' -> imprime 'Olá, Turma SENAI!'

