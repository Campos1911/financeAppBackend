# Finance App Backend - Em construção

Este é o backend do Finance App, um sistema para gerenciamento financeiro pessoal. Ele fornece endpoints para autenticação de usuários, controle de transações e gerenciamento de categorias de despesas e receitas.

## Tecnologias Utilizadas

- **Node.js**
- **Fastify**
- **MongoDB**
- **Prisma ORM**
- **Joi** (validação de dados)
- **Jsonwebtoken** (autenticação JWT)
- **Bcryptjs** (hash de senhas)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Campos1911/financeAppBackend.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd financeAppBackend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:
```env
DATABASE_URL="mongodb+srv://seu_usuario:senha@cluster.mongodb.net/finance_db"
PORT=3333
```

## Uso

Para iniciar o servidor, execute:
```bash
npm run dev
```
O servidor será iniciado em `http://localhost:3333`

## Endpoints Principais

### Autenticação
- **POST** `/auth/register` - Cadastro de usuário
- **POST** `/auth/login` - Login do usuário

### Transações
- **GET** `/transactions` - Listar transações do usuário
- **POST** `/transactions` - Criar uma nova transação
- **PUT** `/transactions/:id` - Atualizar uma transação
- **DELETE** `/transactions/:id` - Remover uma transação

### Categorias
- **GET** `/categories` - Listar categorias
- **POST** `/categories` - Criar uma nova categoria

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas modificações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

Desenvolvido por [Campos1911](https://github.com/Campos1911).

