const knex = require('knex')(require('./knexfile').development);

async function main() {
  try {
    await knex('users').insert({ name: 'John Doe', email: 'john.doe@example.com' });
    console.log('Usuário inserido');

    const users = await knex('users').select('*');
    console.log('Usuários:', users);

    await knex('users').where({ id: 1 }).update({ name: 'Jane Doe' });
    console.log('Usuário atualizado');

    await knex('users').where({ id: 1 }).del();
    console.log('Usuário deletado');
  } catch (error) {
    console.error('Erro ao executar operações no banco de dados:', error);
  } finally {
    knex.destroy();
  }
}

main();