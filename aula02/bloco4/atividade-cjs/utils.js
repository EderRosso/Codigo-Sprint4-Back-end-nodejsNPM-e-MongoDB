// Slide 13 - Passo 1: Em utils.js, exporte formatLog(msg), que devolve [data] - msg
function formatLog(msg) {                                        // Recebe a mensagem (ex: 'Olá!') como parâmetro
  const data = new Date().toLocaleDateString('pt-BR');           // Pega a data de hoje no formato brasileiro (12/11/2026)
  return `[${data}] - ${msg}\n`;                                 // Monta '[12/11/2026] - Olá!' com quebra de linha (\n) no final
}                                                                // Fecha a função formatLog

module.exports = { formatLog };                                  // Exporta a função formatLog usando CommonJS

