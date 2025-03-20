import express from 'express';
import { app as serverApp } from './prototipo/server1.js'; // Importamos el CRUD desde server1.ts
const app = express();
const PORT = 3000;
// Usamos el CRUD definido en server1.ts bajo el prefijo "/product-revisar"
app.use('/product-revisar', serverApp);
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}/product-revisar`);
});
