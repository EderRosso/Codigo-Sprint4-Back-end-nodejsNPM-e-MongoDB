// Slide 6 - O mistério do <Buffer ...> no console ao ler arquivos
const fs = require('fs');                                // Importa o módulo nativo 'fs' (File System)

// 1º Jeito: SEM 'utf8' (vem o dado cru em bytes = Buffer)
const cru = fs.readFileSync('nota.txt');                 // Lê os bytes do arquivo sem traduzir para texto
console.log('Sem utf8 (Buffer cru):', cru);              // Imprime: <Buffer 4f 69> (4f = 'O', 69 = 'i')

// 2º Jeito: COM 'utf8' (vem o texto traduzido)
const texto = fs.readFileSync('nota.txt', 'utf8');       // Lê os bytes e já traduz para texto UTF-8
console.log('Com utf8 (Texto):', texto);                 // Imprime: Oi
console.log('Usando .toString():', cru.toString());      // Outra forma de traduzir o Buffer para texto: 'Oi'

