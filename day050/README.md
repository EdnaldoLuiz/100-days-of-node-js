# Desafio 50

Migrações de Banco de Dados com Sequelize

## Explicação

### Ferramentas Utilizadas

- express: Framework web rápido e minimalista para Node.js.
- sequelize: ORM para Node.js.
- sqlite: Banco de dados leve e autônomo.

### Funções Principais

- sequelize.define(): Define um modelo de dados.
- queryInterface.createTable(): Cria uma tabela no banco de dados.
- queryInterface.dropTable(): Remove uma tabela do banco de dados.

## Arquivos


### `day050.js`

```js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('../models');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

const port = 8000;
app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  await sequelize.sync();
});
```

### `migrations/20231010120000-create-user.js`

```js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

### `models/index.js`

```js
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

### `models/user.js`

```js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
```

### `src/controllers/userController.js`

```js
const { User } = require('../../models');

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
};

module.exports = { getUsers, addUser };
```

### `src/routes/userRoutes.js`

```js
const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', addUser);

module.exports = router;
```