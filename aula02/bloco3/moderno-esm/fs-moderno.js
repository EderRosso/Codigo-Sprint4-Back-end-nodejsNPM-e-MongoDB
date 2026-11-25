// Slide 12 (Direita) - fs: o jeito moderno com Promises + await (não bloqueia o garçom!)
import fs from 'fs/promises';                                    // Importa a versão moderna do 'fs' baseada em Promises

await fs.writeFile('nota.txt', 'Oi');                            // Grava 'nota.txt' sem travar o servidor (Top-level await: só funciona no ESM!)
const t = await fs.readFile('nota.txt', 'utf8');                 // Espera a leitura terminar de forma assíncrona e guarda o texto em 't'
console.log('Conteúdo lido (Promises + await):', t);             // Imprime no terminal: Oi

