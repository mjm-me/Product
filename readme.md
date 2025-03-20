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

Instalo Node, TypeScript y Express.js y también instalo las dependencias de eslint y prettier para mejorar la calidad del código y mantener un estilo consistente. Al final dejo mi package.json así:
"devDependencies": {
"@eslint/js": "^9.19.0",
"@types/express": "^5.0.1",
"@types/node": "^22.12.0",
"eslint": "^9.19.0",
"prettier": "^3.4.2",
"typescript": "^5.7.3",
"typescript-eslint": "^8.22.0"
},

# Desarrollo proyecto

Me creo un proyecto llamado Producto donde instalo todo lo necesario.

## index.js

Creo la carpeta src donde creo el archivo index.js, me va ayudar a ver la entrada principal para mi servidor.
He configurado el servidor Express, definiendo rutas y manejando solicitudes.
Hace que la API funcione como un intermediario para consultar mi base de datos de mock.js.
Configuro el servidor usando express. Lo necesito para definir la ruta que usaré para pedir el CRUD a mis datos.

## mock.js

Aquí creo mi base de datos local que servirá de modelo con datos de prueba para que mi API funcione correctamente durante el desarrollo.

- Importar randomUUID del módulo crypto porque genera identificadores únicos (id) para cada producto. Así cada producto tiene un id único. son seguros y cumplen con estándares globales de identificación. Crypto forma parte de Node.js.
- Luego defino el array de mis productos para simular la base de datos que se quiere en memoria. Con este esquema puedo probar la API sin necesidad de conectarme a una base de datos real.
- Con estos datos podré hacer luego las operaciones de CRUD que me piden
- Las propiedades created_at y updated_at me dejan registrar el historial del producto que podría servir par en el futuro hacer informes.
- La propiedad is_active será un booleano que nos indicará si hay producto para vender o hay que pedirlo.

## server1.js

Aquí construyo la API que gestiona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de mi base de datos local.

- Tengo que configuro el servidor de Express para manejar el servidor HTTP.
- Importo randomUUID que me servirá para generar un id único cuando se crean nuevos productos. Ya lo trae Node.
- Importo products desde mock.js para usarlos como base de datos y trabajar con esa Api.
- app.use(express.json()) es un middleware que uso para que el servidor pueda manejar solicitudes JSON (con POST y PATCH).
- Ahora implementación de los endpoints que me piden en el proyecto:
  GET /products
  GET /products/:id (aquí busco por uin producto específico que me lo da el id único)
  POST /products
  PATCH /products/:id
  DELETE /products/:id
-

### get/products

Devuelve toda la lista de productos como un array JSON.

### get/id

Busca un producto específico por su id en el array products.
Lo tengo que encontrar mediante el id:
const { id } = req.params;
const product = products.find((p) => p.id === id);
Si existe, me lo devuelve como respuesta:
res.json(product);
} else {
Si no está, me devuelve un error 404 (No encontrado).
res.status(404).send('Producto no encontrado');

### post/id

Creará un nuevo producto en función de los datos enviados en el cuerpo de la solicitud (name, price, stock, is_active).
El id no lo pongo porque se genera de manera automática con el randomUUID.

const { name, price, stock, is_active } = req.body;
const newProduct = {
id: randomUUID(),
name,
price,
stock,
is_active,
created_at: new Date(),
updated_at: new Date(),
};

Me devuelve el producto creado con un código de estado 201 (Creado).
res.status(201).json(newProduct);

### patch/products/:id

Primero tengo que buscar si existe, lo hago por id porque es único
const { id } = req.params;
const productIndex = products.findIndex((p) => p.id === id);
Si el producto existe, actualizo solo los campos proporcionados en el cuerpo de la solicitud (req.body).
El producto actual
...products[productIndex], Producto actual
Sobrescribe los campos con los datos del cuerpo de la solicitud y actualizop la fecha de modificación
...req.body,
updated_at: new Date(),
Luego tiene que volver a poner el nuevo producto en el array
products[productIndex] = updatedProduct;
Si no lo encuentra lanzo un error
res.status(404).send('Producto no encontrado');

### delete/products/:id

Para borrar un producto también busco por el id.
const { id } = req.params;
const productIndex = products.findIndex((p) => p.id === id);

Si existe, lo elimino del array products con splice y lo devuelve como respuesta, en clase siempre decíamos que queríamos informar que se había borrado.
const [removedProduct] = products.splice(productIndex, 1);
res.json(removedProduct);

Si no se encuentra, devuelve un error 404.
res.status(404).send('Producto no encontrado'); // Error si no se encuentra
