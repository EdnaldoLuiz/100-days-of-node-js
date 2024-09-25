# Desafio 3

Console para Depuração

## Explicação

### Ferramentas Utilizadas

- `console`: Objeto global do Node.js usado para imprimir mensagens e informações no terminal.

### Funções Principais

- `console.log()`: Imprime uma mensagem de log.
- `console.error()`: Imprime uma mensagem de erro.
- `console.warn()`: Imprime uma mensagem de aviso.
- `console.info()`: Imprime uma mensagem informativa.
- `console.debug()`: Imprime uma mensagem de depuração.
- `console.trace()`: Imprime um rastreamento de pilha.
- `console.group()`: Inicia um novo grupo de logs.
- `console.groupEnd()`: Encerra o grupo de logs.
- `console.time()`: Inicia um temporizador.
- `console.timeEnd()`: Encerra o temporizador e imprime o tempo decorrido.
- `console.table()`: Exibe dados em formato de tabela.
- `console.assert()`: Imprime uma mensagem de erro se a expressão for falsa.
- `console.count()`: Conta o número de vezes que é chamado com a mesma etiqueta.
- `console.countReset()`: Reseta a contagem para a etiqueta especificada.

## Resultado

```js
console.log('Executando day003.js');
console.error('Erro ao executar day003.js');
console.warn('Cuidado ao executar day003.js');
console.info('Informação ao executar day003.js');
console.debug('Debugando day003.js');
console.trace('Traçando day003.js');
console.group('Grupo de logs');
console.log('Log 1');
console.log('Log 2');
console.groupEnd();
console.time('Tempo de execução');
console.timeEnd('Tempo de execução');
console.table(['item1', 'item2', 'item3']);
console.assert(1 === 2, 'Erro de assert');
console.count('count');
console.count('count');
console.count('count');
console.count('count');
console.count('count');
console.countReset('count');
console.log('Fim da execução de day003.js');
```