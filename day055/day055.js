class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Fila está vazia';
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return 'Fila está vazia';
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Fila:', queue.items);
console.log('Desenfileirar:', queue.dequeue());
console.log('Fila após desenfileirar:', queue.items);
console.log('Frente da fila:', queue.front());
console.log('Tamanho da fila:', queue.size());
queue.clear();
console.log('Fila após limpar:', queue.items);