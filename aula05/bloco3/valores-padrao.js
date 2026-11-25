// Slide 8 - process.env, valores padrão (||) e a pegadinha do texto vs número!
require('dotenv').config({ quiet: true });                       // Carrega as variáveis do arquivo .env para o process.env

// 1. Leitura direta (se faltar no .env, vem undefined)
const senha = process.env.DB_PASSWORD;                           // Lê 'minha_senha' do .env
const chave = process.env.API_KEY;                               // Lê 'sk_live_51H8xYz' do .env
const naoExiste = process.env.VARIAVEL_INVENTADA;                // Como não está no .env, o valor vira 'undefined'
console.log('Leitura direta -> Senha:', senha, '| Não existe:', naoExiste);

// 2. Com valor padrão usando || (se faltar no .env, usa o valor da direita!)
const porta = process.env.PORT || 3000;                          // Se PORT estiver vazio, usa 3000
const env = process.env.NODE_ENV || 'development';               // Como NODE_ENV não está no .env, assume 'development'!
console.log('Com valor padrão (||) -> Ambiente:', env);

// 3. A PEGADINHA DO TEXTO: Tudo no process.env vem como TEXTO (string)!
console.log('Errado (texto + 1):', process.env.PORT + 1);        // Imprime '30001' (juntou o texto '3000' com '1'!)
console.log('Certo (Number + 1):', Number(process.env.PORT) + 1);// Imprime 3001 (converteu para número antes de somar!)
