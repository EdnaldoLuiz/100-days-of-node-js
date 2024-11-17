class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return 'Pilha está vazia';
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return 'Pilha está vazia';
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Pilha:', stack.items);
console.log('Desempilhar:', stack.pop());
console.log('Pilha após desempilhar:', stack.items);
console.log('Topo da pilha:', stack.peek());
console.log('Tamanho da pilha:', stack.size());
stack.clear();
console.log('Pilha após limpar:', stack.items);