// Slide 11 - path: caminhos para qualquer sistema operacional
const path = require('path');                                    // Importa o módulo nativo 'path' (não precisa de npm install)

const caminho = path.join('logs', '2026', 'system.log');         // Junta pastas usando a barra certa do sistema (\ no Windows, / no Linux)
console.log('Caminho montado:', caminho);                        // No Windows imprime: logs\2026\system.log

console.log('Extensão:', path.extname('capa.png'));              // Extrai apenas a extensão do arquivo -> imprime '.png'
console.log('Nome do arquivo:', path.basename('a/nota.txt'));    // Extrai apenas o nome final do arquivo -> imprime 'nota.txt'
console.log('Pasta atual (__dirname):', __dirname);              // Mostra o caminho completo da pasta onde este arquivo está salvo

