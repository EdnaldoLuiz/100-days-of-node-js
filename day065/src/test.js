const fetchData = require('./../day065');
const mockAPI = require('./mock');

const runTest = async () => {
  mockAPI();

  const url = 'https://api.example.com/data';
  try {
    const data = await fetchData(url);
    console.log('Dados recebidos:', data);
  } catch (error) {
    console.error(error.message);
  }
};

runTest();