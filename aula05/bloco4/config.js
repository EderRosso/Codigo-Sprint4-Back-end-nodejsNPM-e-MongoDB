// Slide 14 (Passo 4) - GABARITO: config.js (Centraliza a leitura do .env e valida variáveis obrigatórias)
require('dotenv').config({ quiet: true });                       // Carrega o arquivo .env (se o --env-file não tiver carregado antes)

const obrigatorias = ['API_KEY', 'PORT', 'NOME_APP'];            // Lista das 3 variáveis obrigatórias da atividade

for (const nome of obrigatorias) {                               // Verifica uma por uma
  if (!process.env[nome]) {                                      // Se alguma variável obrigatória não estiver preenchida no .env...
    console.error(`Falta ${nome} no .env`);                      // ...avisa exatamente qual variável está faltando
    process.exit(1);                                             // ...e interrompe a inicialização do programa na hora!
  }                                                              // Fecha o if
}                                                                // Fecha o for

module.exports = {                                               // Exporta o objeto de configuração pronto para o app.js:
  apiKey: process.env.API_KEY,                                   // Chave secreta da API
  porta: Number(process.env.PORT),                               // Porta convertida de texto para Número
  nomeApp: process.env.NOME_APP,                                 // Nome da aplicação ('Loja SENAI')
  modo: process.env.NODE_ENV || 'development',                   // Desafio Extra (Slide 15): Ambiente ('development' ou 'production')
};                                                               // Fecha o module.exports
