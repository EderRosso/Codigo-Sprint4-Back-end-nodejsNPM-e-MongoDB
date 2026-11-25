// Slide 8 - Exportação PADRÃO (export default) — exporta uma coisa principal do arquivo
export default function saudar(n) {    // 'export default' define a função principal deste arquivo
  return `Olá, ${n}!`;                 // Devolve a frase de saudação usando Template String
}                                      // Quem importar pode escolher qualquer nome (sem precisar de chaves { })

