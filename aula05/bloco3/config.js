// Slide 10 - config.js: Tudo num lugar só (Centraliza e valida se alguma variável obrigatória faltou!)
require('dotenv').config({ quiet: true });                       // Carrega o .env uma única vez aqui no config.js

const obrigatorias = ['API_KEY', 'PORT'];                        // Lista de variáveis que são OBRIGATÓRIAS para o sistema funcionar

for (const nome of obrigatorias) {                               // Percorre cada nome da lista de obrigatórias
  if (!process.env[nome]) {                                      // Se a variável não existir ou estiver vazia no .env...
    console.error(`Falta ${nome} no .env`);                      // ...mostra um aviso claro dizendo qual variável faltou
    process.exit(1);                                             // ...e encerra o programa na hora com código de erro (1)!
  }                                                              // Fecha o if
}                                                                // Fecha o for

module.exports = {                                               // Exporta as configurações prontas e convertidas para o resto do sistema:
  porta: Number(process.env.PORT),                               // Já exporta a porta convertida para Número (3000)
  nomeApp: process.env.NOME_APP || 'Sistema',                    // Exporta o nome do app (com valor padrão se faltar)
  apiKey: process.env.API_KEY,                                   // Exporta a chave da API já validada
};                                                               // Fecha o module.exports
