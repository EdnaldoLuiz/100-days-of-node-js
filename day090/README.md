# Desafio 90

Integração de Banco de Dados SQL com Knex.js

## Explicação

Utilizamos a biblioteca Knex.js para realizar operações de CRUD em um banco de dados MySQL.

### Ferramentas Utilizadas

- `knex`: Query builder para SQL.
- `mysql`: Driver MySQL para Node.js.

### Funções Principais

- `knex.schema.createTable()`: Cria uma nova tabela no banco de dados.
- `knex('table').insert()`: Insere um novo registro na tabela.
- `knex('table').select()`: Seleciona registros da tabela.
- `knex('table').where().update()`: Atualiza registros na tabela.
- `knex('table').where().del()`: Deleta registros da tabela.

## Arquivos

### `knexfile.js`

```js
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'day090_db'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
```

### `migrations/20231010_create_users_table.js`

```js
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
```

### `day090.js`

```js
const knex = require('knex')(require('./knexfile').development);

async function main() {
  try {
    // Inserir um novo usuário
    await knex('users').insert({ name: 'John Doe', email: 'john.doe@example.com' });
    console.log('Usuário inserido');

    // Selecionar todos os usuários
    const users = await knex('users').select('*');
    console.log('Usuários:', users);

    // Atualizar um usuário
    await knex('users').where({ id: 1 }).update({ name: 'Jane Doe' });
    console.log('Usuário atualizado');

    // Deletar um usuário
    await knex('users').where({ id: 1 }).del();
    console.log('Usuário deletado');
  } catch (error) {
    console.error('Erro ao executar operações no banco de dados:', error);
  } finally {
    knex.destroy();
  }
}

main();
```