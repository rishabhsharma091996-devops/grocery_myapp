const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let groceries = [
  { id: 1, name: 'Rice (1kg)', price: 60 },
  { id: 2, name: 'Milk (1L)', price: 55 },
  { id: 3, name: 'Eggs (12 pcs)', price: 90 },
  { id: 4, name: 'Bread', price: 45 },
  { id: 5, name: 'Bananas (1 dozen)', price: 50 }
];

app.get('/api/groceries', (req, res) => {
  res.json(groceries);
});

app.post('/api/groceries', (req, res) => {
  const newItem = { id: groceries.length + 1, ...req.body };
  groceries.push(newItem);
  res.status(201).json(newItem);
});

app.get('/', (req, res) => {
  res.send('Grocery backend is running');
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});