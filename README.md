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
├── .gitignore
├── README.md
├── docker-compose.yml
├── drizzle.config.ts
├── drizzle/
│   ├── 0000_thankful_lizard.sql
│   ├── 0001_pink_bloodaxe.sql
│   └── meta/
│       ├── 0000_snapshot.json
│       ├── 0001_snapshot.json
│       └── _journal.json
├── package-lock.json
├── package.json
├── requisicoes.http
├── server.ts
├── src/
│   ├── database/
│   │   ├── client.ts
│   │   └── schema.ts
│   └── routes/
│       ├── create-course.ts
│       ├── get-course-by-id.ts
│       └── get-courses.ts
└── tsconfig.json
```

## Comandos executados
- `npm i typescript @types/node -D`  // Instalar TypeScript e seus tipos
- `npx tsc --init` // Inicializar o arquivo tsconfig.json
- `npm i fastify` // Instalar o Fastify
- `npm i pino-pretty` // Instalar o pino-pretty para logs
- `npm i drizzle-orm pg` // Instalar Drizzle ORM e PostgreSQL
- `npm i drizzle-kit -D` // Instalar Drizzle Kit para migrações
- `npm i zod fastify-type-provider-zod` // Instalar Zod para validação
- `npm i @fastify/swagger @fastify/swagger-ui @scalar/fastify-api-reference` // Instalar documentação da API

## Comandos disponíveis

### Desenvolvimento
- `npm run dev` // Executar o servidor em modo de desenvolvimento

### Docker (Banco de dados)
- `docker-compose up -d` // Iniciar o banco PostgreSQL em background
- `docker-compose stop` // Parar o docker
- `docker-compose logs db` // Ver logs do banco de dados
- `docker ps` // Mostrar containers Docker em execução


### Banco de dados (Drizzle)
- `npm run db:generate` // Gerar migrações baseadas no schema
- `npm run db:migrate` // Executar migrações no banco
- `npm run db:studio` // Abrir interface visual do banco (Drizzle Studio)

## Extensões recomendadas
- `REST Client`