# EJERCICIO PRÁCTICO

El objetivo del examen es realizar un PROTOTIPO de una API REST que permita realizar operaciones CRUD sobre una entidad Product. Para la implementación de la API se debe utilizar TypeScript, Node y el framework Express.js. Puedes añadir cualquier librería que consideres muy necesaria.

La entidad Product debe tener los siguientes campos:

id (string)
name (string)
price (number)
stock (number)
is_active (boolean)
created_at (datetime)
updated_at (datetime)
La API debe tener los siguientes endpoints:

GET /products: Debe devolver la lista de productos.
GET /products/:id: Debe devolver un producto por su id.
POST /products: Debe crear un producto.
PATCH /products/:id: Debe actualizar un producto por su id.
DELETE /products/:id: Debe eliminar un producto por su id.
Los datos se almacenarán en memoria, no es necesario utilizar una base de datos. Para que existan datos inicialmente se utilizada un mock de productos, almacenado en un fichero TS.

Todo el código debe estar en un solo fichero, excepto el mock de productos que puede estar en otro fichero. Hazlo lo mas compacto posible, sin crear ninguna capa innecesaria

## Dependencias esenciales para este proyecto:

Instalo Node, TypeScript y Express.js

@types/body-parser y @types/express:

Proporcionan tipos para las bibliotecas body-parser y express, lo cual es esencial cuando usas TypeScript.

@types/node:

Fundamental para trabajar con las APIs internas de Node.js en TypeScript.

typescript:

Obligatoria, ya que el proyecto está en TypeScript.

body-parser, express, y cualquier otra dependencia funcional que instales (como uuid si la utilizaste para generar IDs).



npm install
cuando tenga ya al menos index.
git init

git add .
git commit -m ""

# Proyecto de Películas

Este proyecto es un proyecto simple para el curso IFCD0210.

El proyecto es una aplicación CRUD simple para gestionar películas.

## Configuración inicial

A partir de un proyecto anterior, se incluye la instalación/configuración de:

- `prettier`
- `eslint` / `typescript-eslint`
- `typescript`
- `vitest`
- `cross-env`
- `debug`
- `zod`
- `express`
  - `cors`
  - `body-parser`

Igualmente instalados `prisma` y `@prisma/client`

La estructura inicial, tomada de dicho proyecto incluye en src:

- `index.ts`
- `app.ts`
- `server/error-manager.ts`
- `server/listen-manager.ts`
- `middleware/debug-logger.ts`
- `types/http-error.ts`
- `controllers/base.controller.ts`
- `controllers/errors.controller.ts`

En los ficheros procedentes del proyecto anterior es importante actualizar el espacio de nombres de debug, que en este caso será `films`

En los controladores ya incluidos, sustituiremos la respuesta basada en `res.send` por `res.json` para que la respuesta sea un objeto JSON.

## Modelo de datos y repositorios con Prisma

Modelo en Prisma
Repositorios en Prisma
Operaciones CRUD
Verbos HTTP, enrutamiento y controladores

## ATENCIÓN

mirar en index.ts el nombre de la BD que voy a crear
lin 7. const debug = createDebug('library:server');

mirar en app.ts
lin 16. const debug = createDebug('library:app');
lin 13. import { createBooksRouter } from './router/bookRouter.js';
lin 14. import { BooksController } from './controllers/books.controller.js';

lin40-42 const booksRepo = new BookRepo();
const booksController = new BooksController(booksRepo);
const booksRouter = createBooksRouter(booksController);

lin 46. app.use('/api/books', booksRouter);

mirar en middleware/debug-logger
lin 6.const debug = createDebug(`library:${name}`);

mirar en server/listen-manager.ts
lin3. const debug = createDebug('library:server:listening');
mirar en server/error-manager.ts
lin 4. const debug = createDebug('library:server:errors');

mirar en /controllers/ATENCIÖN al nombre del archivo books.controller.ts
/controllers/book.controller.ts llama a prisma/client
lin 3. import { Books } from "@prisma/client";
lin 4. import { BookCreateDTO, BookIdDTO, BookUpdateDTO } from '../dto/books.dto.js';
lin 11. export class BooksController
lin 12. constructor(private repoBooks: Repository<Books>)
lin 16. private makeResponse(results: Books[], error?: string) {

mirar en prism/schema.prisma
model Books {
id String @id @default(uuid()) @map("book_id")
title String @unique(map: "title")
author String
editorial String
year Int
pages Int
available Boolean @default(true)

@@unique([title, year])
@@index([title])
@@map("books")

<!--
API REST
- Validaciones
--->

## Endpoints

- Películas (estilo e-comerce o administrado)

- `GET /films` - Listado de películas
- `GET /films/:id` - Detalle de una película
- `POST /films` - Crear una película [Editor]
- `PATCH /films/:id` - Actualizar una película [Editor]
- `DELETE /films/:id` - Borrar una película / [Editor]

- Usuarios

- `GET /users` - Listado de usuarios [Admin]
- `GET /users/:id` - Detalle de un usuario [Admin / Propio]
- `POST /users/register` - Crear un usuario (Registrar)
- `POST /users/login` - Iniciar sesión
- `PATCH /users/role` - Cambio de Rol [Admin]
- `PATCH /users/:id` - Actualizar un usuario excepto rol [Propio]
- `DELETE /users/:id` - Borrar un usuario / Eliminar un usuario [Admin / Propio]

- Reviews (Estilo per-to-per)

- `GET /reviews` - Listado de reviews [User]
- `GET /reviews/:id` - Detalle de una review [User]
- `POST /reviews` - Crear una review [User]
- `PATCH /reviews/:id` - Actualizar una review [Propio]
- `DELETE /reviews/:id` - Borrar una review / [Propio]
