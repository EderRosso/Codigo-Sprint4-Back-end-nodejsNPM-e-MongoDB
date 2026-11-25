// Slide 5 - Buffer: uma caixinha de bytes na memória
const b = Buffer.from('Olá');      // Transforma o texto 'Olá' em uma caixinha de bytes crus (Buffer)

console.log(b);                    // Imprime os bytes em hexadecimal: <Buffer 4f 6c c3 a1>
console.log(b.length);             // Imprime quantos bytes ocupa na memória: 4 ('O'=1, 'l'=1, 'á'=2 bytes!)
console.log(b.toString());         // Converte os bytes de volta para texto humano: 'Olá'

