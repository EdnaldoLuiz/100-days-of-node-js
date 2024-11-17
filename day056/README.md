# Desafio 56

Implementação de uma Pilha (Stack)

## Explicação

### Ferramentas Utilizadas

- JavaScript: Linguagem de programação utilizada para implementar a pilha.

### Funções Principais

- `push()`: Adiciona um elemento à pilha.
- `pop()`: Remove um elemento da pilha.
- `isEmpty()`: Verifica se a pilha está vazia.
- `peek()`: Obtém o elemento do topo da pilha.
- `size()`: Obtém o tamanho da pilha.
- `clear()`: Limpa a pilha.

## Arquivos

### `day056.js`

```js
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
```