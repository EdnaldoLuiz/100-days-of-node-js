# Desafio 13

Design de API RESTful com Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.get()`: Define uma rota GET.
- `app.post()`: Define uma rota POST.
- `app.put()`: Define uma rota PUT.
- `app.delete()`: Define uma rota DELETE.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Arquivos

### `day013.js`

```js
const express = require('express');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

### `controllers/itemController.js`

```js
const { Item, items } = require('../models/item');
const HttpStatus = require('../utils/httpStatus');

exports.getItems = (req, res) => {
    res.status(HttpStatus.OK).json(items);
};

exports.createItem = (req, res) => {
    const { id, name, price } = req.body;
    const newItem = new Item(id, name, price);
    items.push(newItem);
    res.status(HttpStatus.CREATED).json(newItem);
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedItem = new Item(id, name, price);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = updatedItem;
        res.status(HttpStatus.OK).json(updatedItem);
    } else {
        res.status(HttpStatus.NOT_FOUND).send('Item not found');
    }
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        res.status(HttpStatus.NO_CONTENT).send();
    } else {
        res.status(HttpStatus.NOT_FOUND).send('Item not found');
    }
};
```

### `models.item.js`

```js
class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let items = [];

module.exports = { Item, items };
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

### `enums/httpStatus.js`

````js
const HttpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

module.exports = HttpStatus;
```