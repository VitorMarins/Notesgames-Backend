# 🎮 NotesGames API

NotesGames é uma API RESTful construída com **Node.js**, **TypeScript**, **Express** e **MongoDB**. Ela permite que usuários gerenciem jogos que estão jogando ou já finalizaram. A API conta com autenticação via JWT e documentação com Swagger.

## 🧠 Funcionalidade

- Cadastro e login de usuários com senha criptografada
- Criação, leitura, atualização e exclusão de jogos
- Associação de jogos a usuários
- Autenticação com Bearer Token (JWT)
- Documentação automática com Swagger

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Swagger (swagger-jsdoc + swagger-ui-express)

## 📂 Estrutura do Projeto

```
src/
├── controllers/
│   ├── auth.controller.ts
│   ├── jogo.controller.ts
│   └── usuario.controller.ts
├── models/
│   ├── jogo.model.ts
│   └── usuario.model.ts
├── routes/
│   ├── auth.routes.ts
│   ├── jogo.routes.ts
│   └── usuario.routes.ts
├── middleware/
│   └── auth.middleware.ts
├── config/
│   └── jwt.ts
├── docs/
│   └── swagger.ts
├── app.ts
└── index.ts
```

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/notesgames.git
cd notesgames
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` com:

```
MONGO_URI=<sua_string_de_conexão>
JWT_SECRET=<sua_chave_jwt>
PORT=3000
```

4. Rode o servidor:

```bash
npm run dev
```

## 🔐 Rotas de Autenticação

| Método | Rota           | Descrição           |
|--------|----------------|---------------------|
| POST   | /auth/registrar | Registrar novo usuário |
| POST   | /auth/login     | Login do usuário        |

## 🕹️ Rotas de Jogos (com JWT)

| Método | Rota              | Descrição                            |
|--------|-------------------|----------------------------------------|
| GET    | /jogos            | Listar todos os jogos                 |
| GET    | /jogos/:id        | Obter jogo por ID                     |
| GET    | /jogos/usuario/:id| Listar jogos de um usuário            |
| POST   | /jogos            | Criar um novo jogo                    |
| PUT    | /jogos/:id        | Atualizar jogo                        |
| DELETE | /jogos/:id        | Remover jogo                          |

## 👤 Rotas de Usuário (com JWT)

| Método | Rota          | Descrição                |
|--------|---------------|--------------------------|
| GET    | /usuarios     | Listar todos os usuários |
| GET    | /usuarios/:id | Obter usuário por ID     |
| PUT    | /usuarios/:id | Atualizar usuário        |
| DELETE | /usuarios/:id | Remover usuário          |

## 📄 Documentação Swagger

Acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 🛠 Scripts Úteis

- `npm run dev` – Executa o servidor em modo desenvolvimento com `ts-node-dev`
- `npm run build` – Compila os arquivos TypeScript para JavaScript
- `npm start` – Inicia o servidor a partir da build

## 💡 Objetivo

Esse projeto foi criado para facilitar o gerenciamento de jogos que você está jogando ou já finalizou, funcionando como uma "lista gamer pessoal".