// Slide 10 - Seu primeiro programa no servidor
const nome = 'Turma Full-Stack';                           // Cria uma constante de texto (string) na memória
const hoje = new Date();                                   // Captura a data e hora atual do relógio do computador/servidor

console.log(`Olá, ${nome}!`);                              // Usa crases (Template String) para injetar a variável ${nome} no texto
console.log('Hoje é', hoje.toLocaleDateString('pt-BR'));   // Formata a data para o padrão brasileiro (DD/MM/AAAA) e imprime no terminal
