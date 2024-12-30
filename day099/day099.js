const config = require('config');
require('dotenv').config();

const appConfig = {
  port: config.get('App.port'),
  env: process.env.NODE_ENV || 'development',
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
};

console.log('Configurações da aplicação:', appConfig);