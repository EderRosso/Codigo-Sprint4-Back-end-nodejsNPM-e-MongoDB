// Slide 15 (Passo 3) - Script para disparar 10 requisições com erro seguidas e provar que o servidor continua de pé!
async function testarServidorImortal() {                         // Função assíncrona de teste
  const rotasParaTestar = [                                      // Lista com 10 chamadas às rotas problemáticas
    '/config', '/livros', '/relatorio', '/rota-que-nao-existe',
    '/config', '/livros', '/relatorio', '/config', '/livros', '/relatorio'
  ];                                                             // Fecha a lista de 10 rotas

  console.log('🚀 Disparando 10 requisições seguidas contra http://localhost:3000 ...\n');

  for (let i = 0; i < rotasParaTestar.length; i++) {             // Repete para cada uma das 10 rotas
    const rota = rotasParaTestar[i];                             // Pega a rota da vez
    const resposta = await fetch(`http://localhost:3000${rota}`);// Faz a requisição HTTP para o servidor
    const corpo = await resposta.json();                         // Lê a resposta em JSON devolvida pelo servidor
    console.log(`Teste ${i + 1}/10 -> GET ${rota.padEnd(22)} | Status: ${resposta.status} | Resposta:`, corpo);
  }                                                              // Fim do laço for

  console.log('\n✅ SUCESSO! O servidor sobreviveu às 10 requisições com erro e continua de pé!');
}                                                                // Fecha a função

testarServidorImortal();                                         // Executa o teste
