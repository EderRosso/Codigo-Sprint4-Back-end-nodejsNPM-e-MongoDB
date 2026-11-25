// Slide 10 - Exemplo de como o resto do sistema usa o config.js (sem nunca tocar em process.env direto!)
const config = require('./config');                              // Importa o nosso módulo central de configuração './config.js'

console.log(`✅ Configuração validada com sucesso!`);            // Se chegou aqui, é porque nenhuma variável obrigatória faltou!
console.log(`App: ${config.nomeApp} | Porta (número): ${config.porta}`); // Usa config.nomeApp e config.porta limpos
