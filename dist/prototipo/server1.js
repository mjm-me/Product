import express from 'express';
import { randomUUID } from 'crypto';
import { products } from './mock';
const app = express();
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
// POST /products: Crea un nuevo producto (ya lo tienes)
app.post('/products', (req, res) => {
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
    products.push(newProduct);
    res.status(201).json(newProduct);
});
// PATCH /products/:id: Actualiza un producto por su ID
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const updatedProduct = {
            ...products[productIndex],
            ...req.body,
            updated_at: new Date(),
        };
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).send('Producto no encontrado');
    }
});
// DELETE /products/:id: Elimina un producto por su ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const [removedProduct] = products.splice(productIndex, 1);
        res.json(removedProduct);
    }
    else {
        res.status(404).send('Producto no encontrado');
    }
});
