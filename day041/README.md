# Desafio 41

Compilação JIT com `vm2`

## Explicação

### Ferramentas Utilizadas

- `vm2`: Biblioteca para executar código JavaScript em um ambiente de sandbox.

### Funções Principais

- `new VM()`: Cria uma nova instância da máquina virtual.
- `vm.run()`: Executa código JavaScript dentro da máquina virtual.

## Resultado

```js
const { VM } = require('vm2');

const code = `
function add(a, b) {
  return a + b;
}
add(2, 3);
`;

const vm = new VM();
const result = vm.run(code);

console.log('Resultado da execução do código:', result);
```