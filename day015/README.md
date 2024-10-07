# Desafio 15

Operações CRUD com MongoDB usando Mongoose

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `mongoose`: Biblioteca de modelagem de dados para MongoDB.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `mongoose.connect()`: Conecta ao banco de dados MongoDB.
- `app.get()`: Define uma rota GET.
- `app.post()`: Define uma rota POST.
- `app.put()`: Define uma rota PUT.
- `app.delete()`: Define uma rota DELETE.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Arquivos 

### `day015.js`

```js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/itemRoutes');

mongoose.connect('mongodb://localhost:27017/day015', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `models/item.js`

```js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
```

### `controllers/itemController.js`

```js
const Item = require('../models/item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    const updatedItem = await item.save();
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.remove();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

### `routes/itemRoutes.js`

```js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/items', itemController.getItems);
router.post('/items', itemController.createItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
```