import { randomUUID } from 'crypto'; // Importo el módulo crypto para generar UUID
// Datos simulados para la base de datos en memoria
export const products = [
    {
        id: randomUUID(), // Generación de un UUID único
        name: 'Alicate',
        price: 100,
        stock: 10,
        is_active: true,
        created_at: new Date('2025-03-01T10:00:00'),
        updated_at: new Date('2025-03-01T10:00:00'),
    },
    {
        id: randomUUID(), // Generación de un UUID único
        name: 'Destornillador',
        price: 200,
        stock: 5,
        is_active: false,
        created_at: new Date('2025-03-02T11:00:00'),
        updated_at: new Date('2025-03-02T11:00:00'),
    },
    {
        id: randomUUID(), // Generación de un UUID único
        name: 'Martillo',
        price: 50,
        stock: 20,
        is_active: true,
        created_at: new Date('2025-03-03T12:00:00'),
        updated_at: new Date('2025-03-03T12:00:00'),
    },
    {
        id: randomUUID(), // Generación de un UUID único
        name: 'Alcayata',
        price: 1,
        stock: 500,
        is_active: true,
        created_at: new Date('2025-03-03T12:00:00'),
        updated_at: new Date('2025-03-03T12:00:00'),
    },
    {
        id: randomUUID(), // Generación de un UUID único
        name: 'Escofina',
        price: 78,
        stock: 3,
        is_active: false,
        created_at: new Date('2025-03-03T12:00:00'),
        updated_at: new Date('2025-03-03T12:00:00'),
    },
];
