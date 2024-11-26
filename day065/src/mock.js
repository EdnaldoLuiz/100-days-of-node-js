const nock = require('nock');

const mockAPI = () => {
  nock('https://api.example.com')
    .get('/data')
    .reply(200, {
      success: true,
      data: { id: 1, name: 'Mocked Data' }
    });
};

module.exports = mockAPI;