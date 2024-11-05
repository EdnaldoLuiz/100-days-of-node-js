const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const setCache = (req, res) => {
  const key = req.query.key;
  const value = req.query.value;
  if (key && value) {
    myCache.set(key, value);
    res.send(`Chave ${key} com valor ${value} armazenada no cache.`);
  } else {
    res.status(400).send('Chave e valor são obrigatórios.');
  }
};

const getCache = (req, res) => {
  const key = req.query.key;
  if (key) {
    const value = myCache.get(key);
    if (value) {
      res.send(`Valor para a chave ${key}: ${value}`);
    } else {
      res.status(404).send('Chave não encontrada no cache.');
    }
  } else {
    res.status(400).send('Chave é obrigatória.');
  }
};

const delCache = (req, res) => {
  const key = req.query.key;
  if (key) {
    myCache.del(key);
    res.send(`Chave ${key} removida do cache.`);
  } else {
    res.status(400).send('Chave é obrigatória.');
  }
};

module.exports = { setCache, getCache, delCache };