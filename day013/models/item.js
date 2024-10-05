class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let items = [];

module.exports = { Item, items };