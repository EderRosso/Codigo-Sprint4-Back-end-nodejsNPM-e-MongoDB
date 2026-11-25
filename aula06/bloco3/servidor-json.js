// Slide 11 (Esquerda) - Enviando JSON (O formato padrão de todas as APIs modernas!)
const http = require('http');                                    // Importa o módulo nativo 'http'

const servidor = http.createServer((req, res) => {               // Cria o servidor HTTP
  res.writeHead(200, {                                           // Define Status 200 (Sucesso) e o cabeçalho:
    'Content-Type': 'application/json; charset=utf-8',           // Avisa ao navegador/cliente que a resposta é um objeto JSON!
  });                                                            // Fecha o writeHead
  res.end(JSON.stringify({                                       // Transforma o objeto JS em texto JSON (stringify) e envia ao cliente:
    mensagem: 'Sucesso!',                                        // Dados enviados no JSON
  }));                                                           // Fecha o JSON.stringify e o res.end
});                                                              // Fecha o createServer

servidor.listen(3000, () => {                                    // Escuta na porta 3000
  console.log('Servidor JSON rodando em http://localhost:3000'); // Avisa no terminal
});                                                              // Fecha o listen
