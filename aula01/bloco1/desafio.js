// Slide 8 - Desafio relâmpago: qual é a saída? (Ordem final: A -> D -> C -> B)
console.log('A');                                // 1º A RODAR: Código síncrono (imprime 'A' na hora)

setTimeout(() => console.log('B'), 0);           // 4º A RODAR: Macrotask (fila comum, fica por último -> imprime 'B')

Promise.resolve()                                // Cria uma Promise resolvida imediatamente
  .then(() => console.log('C'));                 // 3º A RODAR: Microtask (fila VIP, roda logo após o síncrono -> imprime 'C')

console.log('D');                                // 2º A RODAR: Código síncrono (imprime 'D' antes das filas assíncronas)
