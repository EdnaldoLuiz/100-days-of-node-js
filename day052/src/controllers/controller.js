const logger = require('../services/logger');

const exampleAction = (req, res) => {
  try {
    throw new Error('Algo deu errado!');
  } catch (error) {
    logger.error('Erro no exampleAction: %o', error);
    res.status(500).send('Erro interno do servidor');
  }
};

module.exports = { exampleAction };