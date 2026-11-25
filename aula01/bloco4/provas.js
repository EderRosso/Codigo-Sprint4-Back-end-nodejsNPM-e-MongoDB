// Slide 18 - Atividade 2: Contagem regressiva das provas
const dayjs = require('dayjs');                            // Importa o pacote 'dayjs' instalado via NPM

const hoje = dayjs().startOf('day');                       // Pega a data de hoje zerando as horas (meia-noite) para contar dias inteiros

const provas = [                                           // Cria uma lista (array) de objetos com nome e data de cada avaliação
  { nome: 'Checkpoint 1', data: '2026-12-04' },            // 1ª prova (em 11/11/2026 faltam exatos 23 dias)
  { nome: 'Checkpoint 2', data: '2026-12-18' },            // 2ª prova (em 11/11/2026 faltam exatos 37 dias)
  { nome: 'Entrega Final API Biblioteca', data: '2027-01-29' }, // Entrega final do projeto da UC
];                                                         // Fecha a lista de provas

console.log('=== CONTAGEM REGRESSIVA DAS PROVAS ===');     // Imprime o cabeçalho no terminal

for (const prova of provas) {                              // Percorre cada prova dentro da lista 'provas'
  const dataProva = dayjs(prova.data);                     // Converte o texto da data da prova em um objeto do dayjs
  const faltam = dataProva.diff(hoje, 'day');              // Calcula a diferença de dias entre a data da prova e hoje

  console.log(`${prova.nome}: faltam ${faltam} dias`);     // Imprime o nome da prova e quantos dias faltam
}                                                          // Fim do laço de repetição (for...of)
