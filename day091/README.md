# Desafio 91

Cache Distribuído com Redis

## Explicação

Utilizamos o Redis como um cache distribuído e a biblioteca `ioredis` para interagir com o Redis no Node.js.

### Ferramentas Utilizadas

- `redis`: Servidor de cache distribuído.
- `ioredis`: Biblioteca para interagir com o Redis no Node.js.

### Funções Principais

- `redis.set()`: Define um valor no cache.
- `redis.get()`: Obtém um valor do cache.
- `redis.set() com 'EX'`: Define um valor com tempo de expiração no cache.

## Arquivo

### day091.js

```js
const Redis = require('ioredis');
const redis = new Redis();

async function main() {
  try {
    await redis.set('key', 'value');
    console.log('Valor definido no cache');

    const value = await redis.get('key');
    console.log('Valor obtido do cache:', value);

    await redis.set('expiringKey', 'expiringValue', 'EX', 10);
    console.log('Valor com expiração definido no cache');

    const expiringValue = await redis.get('expiringKey');
    console.log('Valor com expiração obtido do cache:', expiringValue);

    setTimeout(async () => {
      const expiredValue = await redis.get('expiringKey');
      console.log('Valor expirado obtido do cache:', expiredValue);
      redis.disconnect();
    }, 11000);
  } catch (error) {
    console.error('Erro ao executar operações no Redis:', error);
    redis.disconnect();
  }
}

main();
```