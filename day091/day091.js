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