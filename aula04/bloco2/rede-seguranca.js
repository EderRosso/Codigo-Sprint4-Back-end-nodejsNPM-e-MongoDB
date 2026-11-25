// Slide 7 - A rede de segurança do processo (Última linha de defesa: pega o que escapou dos try/catch)
process.on('uncaughtException', (err) => {                       // Escuta erros SÍNCRONOS que ninguém tratou com try/catch
  console.log('Rede pegou:', err.message);                       // Registra a mensagem do erro que escapou
});                                                              // Fecha o uncaughtException

process.on('unhandledRejection', (motivo) => {                   // Escuta PROMISES rejeitadas que ninguém tratou com .catch() ou try/catch
  console.log('Rede pegou a Promise:', motivo.message);          // Registra o motivo da falha da Promise
});                                                              // Fecha o unhandledRejection

setTimeout(() => {                                               // Simula um erro inesperado dentro de um timer após 100ms
  throw new Error('Erro no timer');                              // Lança um erro sem try/catch (será pego pelo uncaughtException!)
}, 100);                                                         // Fecha o setTimeout

Promise.reject(new Error('Promise sem catch'));                  // Simula uma Promise que falhou sem .catch() (pega pelo unhandledRejection!)
