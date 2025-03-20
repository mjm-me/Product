import express from 'express';
import { products } from './prototipo/mock.js'; // Importo la base de datos simulada

const app = express();
const PORT = 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
