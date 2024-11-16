# Desafio 55

Implementação de uma Fila (Queue)

## Explicação

### Ferramentas Utilizadas

- JavaScript: Linguagem de programação utilizada para implementar a fila.

### Funções Principais

- `enqueue()`: Adiciona um elemento à fila.
- `dequeue()`: Remove um elemento da fila.
- `isEmpty()`: Verifica se a fila está vazia.
- `front()`: Obtém o elemento da frente da fila.
- `size()`: Obtém o tamanho da fila.
- `clear()`: Limpa a fila.

## Arquivos

### `day055.js`

```js
class Queue {
  constructor() {
    this.items = [];
  }

  // Adicionar um elemento à fila
  enqueue(element) {
    this.items.push(element);
  }

  // Remover um elemento da fila
  dequeue() {
    if (this.isEmpty()) {
      return 'Fila está vazia';
    }
    return this.items.shift();
  }

  // Verificar se a fila está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Obter o elemento da frente da fila
  front() {
    if (this.isEmpty()) {
      return 'Fila está vazia';
    }
    return this.items[0];
  }

  // Obter o tamanho da fila
  size() {
    return this.items.length;
  }

  // Limpar a fila
  clear() {
    this.items = [];
  }
}

// Exemplo de uso da fila
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
```