# Desafio 94

Modularização Avançada

## Explicação

Utilizamos CommonJS e ES Modules para criar módulos e importar/exportar funções no Node.js.

### Ferramentas Utilizadas

- `CommonJS`: Sistema de módulos padrão do Node.js.
- `ES Modules`: Sistema de módulos padrão do JavaScript moderno.

### Funções Principais

- `module.exports`: Exporta funções em CommonJS.
- `require()`: Importa módulos em CommonJS.
- `export`: Exporta funções em ES Modules.
- `import`: Importa módulos em ES Modules.

## Arquivos

### `day094.js`

```js
import { createRequire } from 'module';
const require = createRequire(import.meta.url); 
const commonjsModule = require('./modules/commonjsModule.cjs');
import { greet as esGreet, farewell as esFarewell } from './modules/esModule.js';

console.log('Executando day094.js');

console.log(commonjsModule.greet('Alice'));
console.log(commonjsModule.farewell('Alice'));

console.log(esGreet('Bob'));
console.log(esFarewell('Bob'));
```

### `modules/commonjsModule.js`

```js
function greet(name) {
  return `Hello, ${name}!`;
}

function farewell(name) {
  return `Goodbye, ${name}!`;
}

module.exports = {
  greet,
  farewell
};
```

### `modules/esModule.mjs`

```js
export function greet(name) {
  return `Hello, ${name}!`;
}

export function farewell(name) {
  return `Goodbye, ${name}!`;
}
```