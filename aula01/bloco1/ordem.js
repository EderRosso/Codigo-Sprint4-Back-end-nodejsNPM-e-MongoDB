// Slide 7 - Quem executa primeiro? (1º Síncrono -> 2º Microtask -> 3º Macrotask)
console.log('1 - Síncrono');                     // 1º A RODAR: Código síncrono executa na hora, linha a linha

setTimeout(() => {                               // Agenda um timer (Macrotask -> 3ª prioridade, fila comum)
  console.log('4 - Macrotask');                  // 4º A RODAR: Mesmo com tempo 0, só roda depois do síncrono e das Promises
}, 0);                                           // Tempo de espera: 0 milissegundos (entra na fila Macrotask)

Promise.resolve().then(() => {                   // Cria uma Promise resolvida (Microtask -> 2ª prioridade, fila VIP)
  console.log('3 - Microtask');                  // 3º A RODAR: Roda assim que o código síncrono acaba, antes do setTimeout
});                                              // Fecha o .then() da Promise

console.log('2 - Síncrono');                     // 2º A RODAR: Código síncrono executa na hora, antes de qualquer fila
