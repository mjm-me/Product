import express from 'express';
import { products } from './mock.js'; // Importamos el mock de datos
export const app = express();
app.use(express.json());
// GET /products: Devuelve la lista de productos
app.get('/products', (req, res) => {
    res.json(products);
});
// GET /products/:id: Devuelve un producto por su ID
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).send('Producto no encontrado');
    }
});
// POST /products: Crea un nuevo producto
app.post('/products', (req, res) => {
    const { id, name, price, stock, is_active } = req.body;
    const newProduct = {
        id,
        name,
        price,
        stock,
        is_active,
        created_at: new Date(),
        updated_at: new Date(),
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PATCH /products/:id: Actualiza un producto por su ID
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);
    if (product) {
        Object.assign(product, req.body, { updated_at: new Date() });
        res.json(product);
    }
    else {
        res.status(404).send('Producto no encontrado');
    }
});
// DELETE /products/:id: Elimina un producto por su ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
        const removedProduct = products.splice(index, 1);
        res.json({ message: 'Producto eliminado', product: removedProduct[0] });
    }
    else {
        res.status(404).send('Producto no encontrado');
    }
});
