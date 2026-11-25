# 🚀 Sprint 4 — Codificação para Back-End: Node.js, NPM, NestJS e MongoDB

**Curso:** Programador Full-Stack — SENAI Canoas  
**Professor:** Éder Oliveira de Rosso  
**Status da Sprint:** 🟢 Em andamento (Aulas 01 a 10 concluídas)

---

## 📖 Sobre esta Sprint

Bem-vindo(a) ao repositório oficial de códigos da **Sprint 4 (Codificação para Back-End)** do curso **Programador Full-Stack**.

Nesta Sprint, saímos do navegador e mergulhamos no desenvolvimento de servidores modernos, seguros e escaláveis. A jornada começa pelos fundamentos internos do **Node.js** (Event Loop, gerenciamento de pacotes com NPM, sistema de módulos, manipulação de arquivos com `fs` e processamento de grandes volumes de dados com *Streams* e *Buffers*), passa por resiliência de servidores, variáveis de ambiente (`.env`) e protocolo **HTTP nativo**, e evolui até a construção de **APIs RESTful** profissionais com arquitetura em camadas utilizando **TypeScript** e **NestJS**, preparando a base para persistência de dados com **MongoDB**.

---

## 🛠️ Tecnologias, Ferramentas e Pré-requisitos

| Categoria | Tecnologia / Ferramenta | Finalidade na Sprint |
| :--- | :--- | :--- |
| **Runtime** | **Node.js** (v20+ LTS) | Execução de JavaScript/TypeScript no servidor (motor V8 + libuv) |
| **Gerenciador de Pacotes** | **NPM** / **NPX** | Instalação de dependências, scripts de automação e CLI |
| **Linguagem** | **JavaScript (ES6+)** & **TypeScript** | Tipagem estática, Decorators (`@Controller`, `@Get`, `@Post`) e POO |
| **Frameworks Back-End** | **Express** & **NestJS** | Middlewares HTTP e arquitetura modular corporativa (Controllers, Services, DTOs, Pipes) |
| **Banco de Dados** | **MongoDB** *(próximas etapas)* | Banco de dados NoSQL orientado a documentos |
| **Testes de API** | **Thunder Client** (VS Code) / Navegador | Disparo e inspeção de requisições HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) |

### Pré-requisitos para rodar os códigos localmente
1. Ter o **[Node.js](https://nodejs.org/)** (versão 20 LTS ou superior) instalado:
   ```bash
   node -v
   npm -v
   ```
2. Para as aulas de **NestJS** (Aula 07 em diante), instalar a CLI globalmente (uma única vez na máquina):
   ```bash
   npm install -g @nestjs/cli
   ```
3. Ter o **VS Code** com a extensão **Thunder Client** instalada para testar as rotas HTTP.

---

## 🗂️ Metodologia e Organização das Aulas

Cada aula do repositório possui sua própria pasta (`aula01/`, `aula02/`, ...) dividida pedagogicamente em **4 blocos progressivos**:

- 🔹 **`bloco1/`** — Aquecimento e revisão rápida dos conceitos da aula anterior.
- 🔹 **`bloco2/`** — Exemplos práticos fundamentais do tema do dia.
- 🔹 **`bloco3/`** — Aprofundamento técnico, boas práticas de mercado e recursos modernos.
- 🔹 **`bloco4/`** — **Atividade Prática ("Mão na Massa")** + **Desafio Extra** resolvidos passo a passo.

---

## 📅 Cronograma e Índice de Aulas

| Aula | Data | Tema Principal | Tecnologias / Conceitos-Chave | Pasta |
| :---: | :---: | :--- | :--- | :---: |
| **01** | 11/11/2026 | **Revisão Node.js e NPM** | Event Loop, Call Stack, Microtasks vs Macrotasks, `process`, `os`, `package.json`, `dayjs`, scripts NPM | [`aula01/`](./aula01) |
| **02** | 12/11/2026 | **Módulos (CommonJS e ESM), `path` e `fs`** | `require`/`module.exports` vs `import`/`export`, `path.join`, `fs` síncrono vs `fs/promises` com `await` | [`aula02/`](./aula02) |
| **03** | 13/11/2026 | **Streams e Buffers** | Manipulação binária (`Buffer`), `createReadStream`, `createWriteStream`, `pipeline`, `zlib` (Gzip) e `readline` | [`aula03/`](./aula03) |
| **04** | 16/11/2026 | **Tratamento de Exceções Global** | `try/catch` síncrono e assíncrono, `uncaughtException`, `unhandledRejection` e Middleware Global de Erro no Express | [`aula04/`](./aula04) |
| **05** | 17/11/2026 | **Variáveis de Ambiente e Configuração (`.env`)** | Segurança de credenciais, `dotenv`, `process.env`, `.env.example`, `.gitignore`, validação em `config.js` e `--env-file` | [`aula05/`](./aula05) |
| **06** | 18/11/2026 | **Networking e Primeiro Servidor HTTP** | DNS, IP, Portas, TCP/UDP, Verbos HTTP, Status Codes (`2xx`, `4xx`, `5xx`), módulo nativo `http`, respostas Texto/JSON/HTML | [`aula06/`](./aula06) |
| **07** | 19/11/2026 | **Estrutura de Projeto e Fundamentos do NestJS** | Arquitetura em camadas (`@Module`, `@Controller`, `@Injectable` Service), Nest CLI (`nest new`) e rotas iniciais | [`aula07/`](./aula07) |
| **08** | 23/11/2026 | **Route Handlers (`GET` e `POST`)** | `@Get()`, `@Post()`, filtros com `@Query()`, leitura de corpo JSON com `@Body()`, classes **DTO** e `@HttpCode(204)` | [`aula08/`](./aula08) |
| **09** | 24/11/2026 | **Route Handlers (`PUT`, `PATCH` e `DELETE`)** | CRUD completo em memória com `Service`, `@Param('id')`, substituição (`@Put`) vs atualização parcial (`@Patch`), `@Delete`, `NotFoundException` e *Soft Delete* | [`aula09/`](./aula09) |
| **10** | 25/11/2026 | **Rotas Dinâmicas (`Params`, `Query` e `ParseIntPipe`)** | Validação e conversão automática de parâmetros com `ParseIntPipe` (erro `400`), múltiplos filtros `@Query()` e rotas aninhadas (`:paiId/itens/:filhoId`) | [`aula10/`](./aula10) |

---

## 📚 Detalhamento de Cada Aula e Como Executar

### 🔹 [Aula 01 — Revisão Node.js e NPM](./aula01)
- **O que aprendemos:** Como o Node.js funciona por dentro (single-thread com Event Loop não-bloqueante), diferença entre leitura síncrona e assíncrona, prioridade de execução (`Síncrono` → `Microtask / Promise` → `Macrotask / setTimeout`), objetos globais do servidor (`process`, `os`) e gerenciamento de pacotes com `npm init`, `npm install dayjs` e scripts no `package.json`.
- **Estrutura e Arquivos:**
  - `bloco1/`: `sincrono.js`, `assincrono.js`, `ordem.js`, `desafio.js`
  - `bloco2/`: `ola.js`, `teste.js`
  - `bloco3/`: `index.js`, `natal.js` (cálculo de dias até o Natal com `dayjs`)
  - `bloco4/` *(Atividade Prática)*: `diagnostico.js` (relatório de hardware/SO), `provas.js` e `desafio-extra.js` (geração automática de relatório).
- **Como rodar:**
  ```bash
  cd aula01/bloco3
  npm install
  node natal.js

  cd ../bloco4
  npm install
  node diagnostico.js
  node provas.js
  ```

---

### 🔹 [Aula 02 — Módulos (CommonJS e ESM), `path` e `fs`](./aula02)
- **O que aprendemos:** Organização de código em múltiplos arquivos usando **CommonJS** (`require` / `module.exports`) e **ES Modules** (`import` / `export` com `"type": "module"`). Manipulação segura de caminhos entre sistemas operacionais com `path.join` e leitura/escrita de arquivos com `fs` (síncrono vs assíncrono moderno com `fs/promises` e Top-Level `await`).
- **Estrutura e Arquivos:**
  - `bloco2/exemplo1-cjs/` e `bloco2/exemplo2-esm/`: Calculadoras modulares nos dois padrões.
  - `bloco3/sincrono/` (`caminhos.js`, `fs-sincrono.js`) e `bloco3/moderno-esm/` (`fs-moderno.js`).
  - `bloco4/` *(Atividade "Organizador de Logs")*: `atividade-cjs/` e `desafio-esm/` (sistema que cria a pasta `logs/` automaticamente e acumula registros datados em `logs/system.log`).
- **Como rodar:**
  ```bash
  # Testar exemplo ESM moderno com fs/promises
  cd aula02/bloco3/moderno-esm
  node fs-moderno.js

  # Rodar a atividade Organizador de Logs (CommonJS e ESM)
  cd ../../bloco4/atividade-cjs
  node index.js

  cd ../desafio-esm
  node index.js
  ```

---

### 🔹 [Aula 03 — Streams e Buffers](./aula03)
- **O que aprendemos:** Como processar arquivos gigantescos sem estourar a memória RAM do servidor. Entendemos o que é um `Buffer` (dados binários em hexadecimal na memória) e usamos `fs.createReadStream`, `fs.createWriteStream`, `stream/promises` (`pipeline`), compressão `zlib.createGzip()` e leitura linha a linha com `readline`.
- **Estrutura e Arquivos:**
  - `bloco2/`: `buffer.js` e `misterio-buffer.js` (diferença entre ler com e sem `'utf8'`).
  - `bloco3/`: `gerar-log.js` (gera arquivo de 111 MB / 2 milhões de linhas), `ler.js` (chunks de 64 KB), `compactar-exemplo.js` e `linhas.js`.
  - `bloco4/` *(Atividade "O Caçador de Erros")*: `filtrar.js` (filtra 200.000 linhas de `ERROR` gastando apenas ~55 MB de RAM), `compactar.js` (gera `.gz`) e `comparar-memoria.js` (compara com `readFileSync`, que consome +340 MB de RAM).
- **Como rodar:**
  ```bash
  cd aula03/bloco4
  node gerar-log.js
  node filtrar.js
  node compactar.js
  node comparar-memoria.js
  ```

---

### 🔹 [Aula 04 — Tratamento de Exceções Global](./aula04)
- **O que aprendemos:** Como impedir que erros inesperados derrubem o servidor em produção. Uso de `try/catch` em funções síncronas e `async/await`, captura de erros extremos no processo (`process.on('uncaughtException')` e `process.on('unhandledRejection')`) e criação de um **Middleware Global de Erros** `(err, req, res, next)` no **Express** com gravação de histórico de falhas em arquivo de log.
- **Estrutura e Arquivos:**
  - `bloco2/`: `ler.js`, `ler-await.js`, `rede-seguranca.js`.
  - `bloco3/`: `app.js` (primeiro servidor Express) e `middleware-erro.js`.
  - `bloco4/` *(Atividade "O Servidor Imortal")*: `servidor-instavel.js` (código que cai), `servidor-imortal.js` (protegido com middleware global e log de erros), `servidor-esperto.js` (diferencia erro `404 ENOENT` de `500`) e `testar-10-erros.js`.
- **Como rodar:**
  ```bash
  cd aula04/bloco4
  npm install
  node servidor-esperto.js
  # Em outro terminal na mesma pasta, dispare a bateria de testes:
  node testar-10-erros.js
  ```

---

### 🔹 [Aula 05 — Variáveis de Ambiente e Configuração (`.env`)](./aula05)
- **O que aprendemos:** Por que jamais devemos deixar senhas, chaves de API (`API_KEY`) ou configurações fixas (*hardcoded*) no código-fonte. Uso de arquivos `.env`, pacote `dotenv`, proteção com `.gitignore`, documentação de variáveis com `.env.example`, criação de um módulo centralizador e validador (`config.js`) e uso da flag nativa moderna do Node.js `--env-file`.
- **Estrutura e Arquivos:**
  - `bloco2/`: `server.js` lendo `.env` com `dotenv`.
  - `bloco3/`: `valores-padrao.js` (conversão com `Number()` e fallback `||`), `config.js`, `usar-config.js` e `app-sem-dotenv.js`.
  - `bloco4/` *(Atividade "Operação Cofre Aberto")*: Refatoração de `cofre-aberto.js` para `app.js` + `config.js`, mascaramento de chave secreta no log (`sk_l****`) e alternância entre ambientes de desenvolvimento e produção.
- **Como rodar:**
  ```bash
  cd aula05/bloco4
  npm install
  node --env-file=.env.example app.js
  ```

---

### 🔹 [Aula 06 — Networking e Primeiro Servidor HTTP](./aula06)
- **O que aprendemos:** Fundamentos de redes para desenvolvedores Back-End (DNS, IP, `localhost`, Portas, diferenças entre TCP e UDP), anatomia de uma requisição e resposta HTTP (Headers, Body, Verbos `GET`, `POST`, `PUT`, `PATCH`, `DELETE` e famílias de Status Codes `2xx`, `3xx`, `4xx`, `5xx`). Construção de servidores do zero usando apenas o módulo nativo `http` do Node.js.
- **Estrutura e Arquivos:**
  - `bloco3/`: `servidor-texto.js` (`text/plain`), `servidor-json.js` (`application/json`), `servidor-html.js` (`text/html`) e `rotas-na-mao.js`.
  - `bloco4/` *(Atividade "O Servidor Sentinela")*: `sentinela.js` (logger de método/URL no terminal + rota `/status` `200` + fallback `404`) e `sentinela-livros.js` (rota `/livros` aceitando apenas `GET` `200` e barrando outros verbos com `405 Method Not Allowed` + header de segurança `X-Content-Type-Options: nosniff`).
- **Como rodar:**
  ```bash
  cd aula06/bloco4
  node sentinela-livros.js
  # Acesse no navegador ou Thunder Client:
  # GET  http://localhost:3000/status
  # GET  http://localhost:3000/livros
  # POST http://localhost:3000/livros (retorna 405)
  ```

---

### 🔹 [Aula 07 — Estrutura de Projeto e Fundamentos do NestJS](./aula07)
- **O que aprendemos:** Introdução ao **NestJS** e por que grandes empresas o utilizam (arquitetura padronizada em TypeScript inspirada no Angular). Entendemos a analogia da "Empresa Organizada":
  - `main.ts`: Ponto de entrada que inicia o servidor na porta `3000`.
  - `app.module.ts` (`@Module`): Departamento que organiza e conecta `controllers` e `providers`.
  - `app.controller.ts` (`@Controller`): Recepção que escuta as rotas HTTP e chama o especialista.
  - `app.service.ts` (`@Injectable`): Especialista onde fica a regra de negócio.
- **Estrutura e Arquivos:**
  - `bloco3/src-original/`: Arquivos originais do NestJS comentados linha por linha.
  - `bloco4/projeto-aula-07/` *(Atividade "O Arquiteto de Software")*: Configuração do prefixo global `@Controller('api')` retornando `'Servidor Nest.js Ativo'` em `GET /api` e rota extra `@Get('sobre')` em `GET /api/sobre`.
- **Como rodar:**
  ```bash
  cd aula07/bloco4/projeto-aula-07
  npm install
  npm run start:dev
  # Teste: GET http://localhost:3000/api e GET http://localhost:3000/api/sobre
  ```

---

### 🔹 [Aula 08 — Route Handlers (`GET` e `POST`)](./aula08)
- **O que aprendemos:** Criação de múltiplos Controllers com `nest g controller <nome> --no-spec`, leitura de parâmetros de busca opcionais na URL com `@Query()`, envio de dados no corpo da requisição com `@Post()` e `@Body()`, padronização do formato de entrada com classes **DTO (Data Transfer Object)** e personalização de código de status com `@HttpCode(204)`.
- **Estrutura e Arquivos:**
  - `bloco2/`: `ProdutosController` (`GET /produtos` e `GET /produtos/filtrar?categoria=moveis`).
  - `bloco3/`: `UsuariosController` + `CreateUsuarioDto` (`POST /usuarios` retornando `201 Created` e `POST /usuarios/sair` retornando `204 No Content`).
  - `bloco4/` *(Atividade "O Porteiro Digital")*: `ConvidadosController` + `CreateConvidadoDto` com lista em memória que cresce a cada `POST /convidados` e filtra por nome via `GET /convidados?nome=an`.
- **Como rodar:**
  ```bash
  cd aula08/bloco4
  npm install
  npm run start:dev
  # Teste no Thunder Client:
  # GET  http://localhost:3000/convidados
  # POST http://localhost:3000/convidados (Body JSON: {"nome": "Diana", "idade": 17})
  ```

---

### 🔹 [Aula 09 — Route Handlers (`PUT`, `PATCH` e `DELETE`)](./aula09)
- **O que aprendemos:** Construção de um **CRUD completo** separando responsabilidades entre `Controller` e `Service` (`nest g service convidados --no-spec`) com Injeção de Dependência no `constructor`. Captura de parâmetros de rota com `@Param('id')`, lançamento de erro `404` automático com `NotFoundException`, diferença prática entre substituição total (`@Put(':id')`) e atualização parcial (`@Patch(':id')` com campos opcionais `?` no `UpdateConvidadoDto`), remoção com `@Delete(':id')` (`@HttpCode(204)`) e padrão corporativo **Soft Delete** (`ativo: false` + rota `@Patch(':id/restaurar')`).
- **Estrutura e Arquivos:**
  - `bloco2/`: `ConvidadosController` + `ConvidadosService` (`findAll`, `findOne` com `NotFoundException` e `create`).
  - `bloco3/`: Implementação completa de `replace` (`PUT`), `update` (`PATCH`) e `remove` (`DELETE`).
  - `bloco4/` *(Atividade CRUD Completo + Desafio Soft Delete)*: Gabarito do CRUD e versão com exclusão lógica (`ativo: false`) e restauração de registros.
- **Como rodar:**
  ```bash
  cd aula09/bloco4
  npm install
  npm run start:dev
  # Rotas disponíveis:
  # GET    http://localhost:3000/convidados
  # GET    http://localhost:3000/convidados/1
  # POST   http://localhost:3000/convidados
  # PUT    http://localhost:3000/convidados/1
  # PATCH  http://localhost:3000/convidados/1
  # DELETE http://localhost:3000/convidados/2
  ```

---

### 🔹 [Aula 10 — Rotas Dinâmicas (`Params`, `Query` e `ParseIntPipe`)](./aula10)
- **O que aprendemos:** Aprofundamento em rotas dinâmicas no NestJS:
  - Diferença entre **Route Params** (`/livros/:id` — identifica um recurso obrigatório) e **Query Params** (`/livros?autor=machado&ano=1899` — filtra ou ordena uma listagem).
  - Uso do **`ParseIntPipe`** (`@Param('id', ParseIntPipe) id: number`) para validar e converter automaticamente o parâmetro da URL para número (ou barrar textos inválidos como `/livros/abc` com `400 Bad Request` antes mesmo de entrar no método).
  - Construção de **Rotas Aninhadas** (`/pedidos/:pedidoId/itens/:itemId` e `/livros/autores/:autorId/livros/:livroId`) validando a hierarquia entre o recurso Pai e o recurso Filho.
- **Estrutura e Arquivos:**
  - `bloco2/`: `LivrosController` com `ParseIntPipe` e múltiplos filtros `@Query('autor')` e `@Query('ano')`.
  - `bloco3/`: `PedidosController` demonstrando rotas aninhadas com dois parâmetros validados (`:pedidoId` e `:itemId`).
  - `bloco4/` *(Atividade "A Biblioteca Digital")*: Acervo completo com busca por ID validada, filtros combinados de autor/ano e rota aninhada de livros por autor (`/livros/autores/:autorId/livros/:livroId`).
- **Como rodar:**
  ```bash
  cd aula10/bloco4
  npm install
  npm run start:dev
  # Testes principais:
  # GET http://localhost:3000/livros/1                        -> 200 OK
  # GET http://localhost:3000/livros/abc                      -> 400 Bad Request (ParseIntPipe)
  # GET http://localhost:3000/livros/99                       -> 404 Not Found
  # GET http://localhost:3000/livros?autor=machado&ano=1899   -> 200 OK (Filtro combinado)
  # GET http://localhost:3000/livros/autores/10/livros/1      -> 200 OK (Rota aninhada)
  ```

---

<!-- NOVAS AULAS SERÃO ADICIONADAS AUTOMATICAMENTE ABAIXO DESTA LINHA -->

## 🔄 Atualização Contínua deste README

Este `README.md` é mantido sincronizado com o andamento da **Sprint 4** e é atualizado automaticamente a cada nova aula adicionada ao repositório (`aula11/`, `aula12/`, etc.).

