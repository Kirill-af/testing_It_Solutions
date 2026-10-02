# Цифровая визитка

Backend на NestJS и GraphQL. Отдаёт профиль, навыки, опыт работы и проекты.

## Стек

TypeScript, NestJS, GraphQL, Prisma, PostgreSQL, Docker.

## Запуск

Нужны Docker и Docker Compose.

```bash
docker compose up --build
```

При старте применяются миграции и база заполняется данными. GraphQL открывается по адресу http://localhost:3000/graphql.

## Пример запроса

```graphql
query {
    profile {
        name
        description
        skills {
            name
        }
        experience {
            company
            position
        }
        projects {
            name
        }
    }
}
```