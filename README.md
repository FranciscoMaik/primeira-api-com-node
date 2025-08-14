# Primeiro Projeto de API
Este é um projeto simples de API construído com Node.js e TypeScript.

## Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Fastify** - Framework web rápido e eficiente
- **Zod** - Biblioteca de validação e parsing de schemas
- **fastify-type-provider-zod** - Integração do Zod com Fastify

### Banco de Dados
- **PostgreSQL** - Sistema de gerenciamento de banco de dados relacional
- **Drizzle ORM** - ORM TypeScript-first para SQL
- **Drizzle Kit** - Ferramenta CLI para migrações e introspection
- **pg** - Driver PostgreSQL para Node.js

### Documentação da API
- **@fastify/swagger** - Geração automática de documentação Swagger/OpenAPI
- **@fastify/swagger-ui** - Interface web para documentação Swagger
- **@scalar/fastify-api-reference** - Interface moderna para documentação da API

### Desenvolvimento
- **Docker** - Containerização do banco de dados
- **pino-pretty** - Formatação de logs para desenvolvimento
- **REST Client** - Extensão do VS Code para testar APIs

### Ferramentas de Build
- **npm** - Gerenciador de pacotes
- **TypeScript Compiler** - Compilador TypeScript

## Pré-requisitos
- Node.js (v22 or higher)
- npm (v10 or higher)
- Docker (para o banco de dados)

## Instalação
Para instalar as dependências do projeto, execute:
`npm i`

## Execução
Para executar o projeto, execute:
`npm run dev`

## Arquitetura de pastas
```text
├── .biomeignore                    # Arquivos ignorados pelo Biome.js
├── .editorconfig                   # Configurações do editor
├── .gitignore                      # Arquivos ignorados pelo Git
├── README.md                       # Documentação do projeto
├── biome.json                      # Configuração do Biome.js (linting/formatação)
├── docker-compose.yml              # Configuração do PostgreSQL
├── drizzle.config.ts               # Configuração do Drizzle ORM
├── drizzle/                        # Migrações do banco de dados
│   ├── 0000_thankful_lizard.sql
│   ├── 0001_pink_bloodaxe.sql
│   ├── 0002_breezy_corsair.sql
│   ├── 0003_white_echo.sql
│   ├── 0004_absurd_madame_web.sql
│   ├── 0005_special_morgan_stark.sql
│   └── meta/                       # Metadados das migrações
│       ├── 0000_snapshot.json
│       ├── 0001_snapshot.json
│       ├── 0002_snapshot.json
│       ├── 0003_snapshot.json
│       ├── 0004_snapshot.json
│       ├── 0005_snapshot.json
│       └── _journal.json
├── package-lock.json               # Lock das dependências
├── package.json                    # Dependências e scripts
├── requisicoes.http                # Arquivo para testar APIs (REST Client)
├── src/                            # Código fonte da aplicação
│   ├── app.ts                      # Configuração principal do Fastify
│   ├── database/                   # Configurações do banco de dados
│   │   ├── client.ts               # Cliente do banco (Drizzle)
│   │   ├── schema.ts               # Schema das tabelas
│   │   └── seed.ts                 # Dados iniciais do banco
│   ├── routes/                     # Rotas da API
│   │   ├── create-course.test.ts   # Testes da rota de criação
│   │   ├── create-course.ts        # Rota para criar curso
│   │   ├── get-course-by-id.test.ts # Testes da rota de busca por ID
│   │   ├── get-course-by-id.ts     # Rota para buscar curso por ID
│   │   ├── get-courses.test.ts     # Testes da rota de listagem
│   │   └── get-courses.ts          # Rota para listar cursos
│   ├── server.ts                   # Servidor principal
│   └── tests/                      # Utilitários para testes
│       └── factories/              # Factories para criar dados de teste
├── tsconfig.json                   # Configuração do TypeScript
└── vitest.config.ts                # Configuração do Vitest (testes)
```

## Comandos executados
- `npm i typescript @types/node -D`  // Instalar TypeScript e seus tipos
- `npx tsc --init` // Inicializar o arquivo tsconfig.json
- `npm i fastify` // Instalar o Fastify
- `npm i pino-pretty` // Instalar o pino-pretty para logs
- `npm i drizzle-orm pg` // Instalar Drizzle ORM e PostgreSQL
- `npm i drizzle-kit -D` // Instalar Drizzle Kit para migrações
- `npm i @types/pg -D` // Instalar tipos do PostgreSQL
- `npm i zod fastify-type-provider-zod` // Instalar Zod para validação
- `npm i @fastify/swagger @fastify/swagger-ui @scalar/fastify-api-reference` // Instalar documentação da API
- `npm i @biomejs/biome -D` // Instalar Biome.js para linting e formatação
- `npm i vitest @vitest/coverage-v8 -D` // Instalar Vitest para testes
- `npm i supertest @types/supertest -D` // Instalar Supertest para testes de API
- `npm i @faker-js/faker -D` // Instalar Faker.js para dados de teste
- `npm i dotenv-cli -D` // Instalar dotenv-cli para variáveis de ambiente em testes

## Comandos disponíveis

### Desenvolvimento
- `npm run dev` // Executar o servidor em modo de desenvolvimento
- `npm run db:seed` // Popular o banco de dados com dados de exemplo

### Docker (Banco de dados)
- `docker-compose up -d` // Iniciar o banco PostgreSQL em background
- `docker-compose stop` // Parar o docker
- `docker-compose logs db` // Ver logs do banco de dados
- `docker ps` // Mostrar containers Docker em execução

### Banco de dados (Drizzle)
- `npm run db:generate` // Gerar migrações baseadas no schema
- `npm run db:migrate` // Executar migrações no banco
- `npm run db:studio` // Abrir interface visual do banco (Drizzle Studio)

### Linting e Formatação (Biome.js)
- `npm run lint` // Verificar problemas de linting
- `npm run lint:fix` // Corrigir problemas de linting automaticamente
- `npm run format` // Verificar formatação do código
- `npm run format:fix` // Formatar código automaticamente
- `npm run check` // Executar linting e formatação juntos
- `npm run check:fix` // Corrigir linting e formatação automaticamente

### Testes
- `npm run test` // Executar todos os testes com cobertura
- `npm run pretest` // Executar migrações no banco de teste (executado automaticamente antes dos testes)

## Extensões recomendadas
- **REST Client** - Para testar APIs diretamente no VS Code
- **Biome** - Linting e formatação rápida para TypeScript/JavaScript
- **TypeScript Importer** - Auto-import para TypeScript
