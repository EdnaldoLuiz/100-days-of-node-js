const logger = require('../services/logger');

const errorHandler = (err, req, res, next) => {
  logger.error('Erro no middleware: %o', err);
  res.status(500).send('Erro interno do servidor');
};

module.exports = errorHandler;