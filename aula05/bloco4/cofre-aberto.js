// Slide 14 (Passo 2) - cofre-aberto.js: Código INSEGURO com segredos expostos (Hardcoded)!
// Missão da dupla: Tirar esses 3 valores daqui e colocá-los no cofre (.env + config.js)!

const nomeApp = 'Loja SENAI';                                    // ❌ EXPÔS A CONFIGURAÇÃO FIXA NO CÓDIGO
const apiKey = 'sk_live_998877';                                 // ❌ PERIGO GRAVE: Chave secreta de pagamento exposta no código!
const porta = 3000;                                              // ❌ Porta chumbada no código (Hardcoded)

console.log(`${nomeApp} no ar!`);                                // Mostra o nome da loja
console.log(`Chave exposta: ${apiKey}`);                         // ❌ Mostra a chave inteira na tela sem esconder nada!
console.log(`Porta: ${porta}`);                                  // Mostra a porta
