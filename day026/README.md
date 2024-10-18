# Desafio 26

Depuração no Node.js com Node.js Inspector

## Explicação

### Ferramentas Utilizadas

- `Node.js Inspector`: Ferramenta de depuração integrada ao Node.js.

### Funções Principais

- `node --inspect`: Inicia o Node.js com o Inspector habilitado.
- `debugger`: Palavra-chave para definir um ponto de interrupção no código.

## Resultado

```js
function add(a, b) {
  return a + b;
}

function main() {
  const result = add(2, 3);
  console.log(`Resultado: ${result}`);
  debugger;
}

main();
console.log('Executando day026.js');
```