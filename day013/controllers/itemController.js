const { Item, items } = require('../models/item');
const HttpStatus = require('../enums/httpStatus');

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