// Slide 13 - Instalando e usando um pacote externo do NPM (dayjs)
const dayjs = require('dayjs');                            // Importa o pacote 'dayjs' que foi instalado na pasta node_modules

const natal = dayjs('2026-12-25');                         // Cria um objeto de data representando o Natal (25/12/2026)
const faltam = natal.diff(dayjs(), 'day');                 // Calcula a diferença (.diff) entre o Natal e hoje (dayjs()) em dias ('day')

console.log(`Faltam ${faltam} dias para o Natal!`);        // Mostra o resultado da contagem regressiva no terminal
