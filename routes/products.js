const express = require('express');

const router = express.Router();

// In-memory store for demo purposes
const products = [
  { id: 1, name: 'Sample Product A', price: 19.99 },
  { id: 2, name: 'Sample Product B', price: 29.99 }
];
let nextId = products.length + 1;

// GET /products -> return all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products -> add product from JSON body { name, price }
router.post('/', (req, res) => {
  const { name, price } = req.body || {};

  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid payload. Expect { name: string, price: number }' });
  }

  const product = { id: nextId++, name, price };
  products.push(product);
  res.status(201).json(product);
});

module.exports = router;
