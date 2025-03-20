import express from 'express';
const app = express();
const PORT = 3000;
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
