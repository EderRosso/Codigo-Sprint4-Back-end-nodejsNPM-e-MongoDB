// Slide 14 - Desafio Extra em ESM: formatLog(msg, nivel) com nível de log (ex: 'INFO', 'ERRO')
export function formatLog(msg, nivel = 'INFO') {                 // Exporta com ESM; se 'nivel' não for passado, usa 'INFO' por padrão
  const data = new Date().toLocaleDateString('pt-BR');           // Pega a data atual no formato brasileiro (12/11/2026)
  return `[${data}] [${nivel}] - ${msg}\n`;                      // Devolve '[12/11/2026] [ERRO] - Falha no disco' com quebra de linha (\n)
}                                                                // Fecha a função formatLog

