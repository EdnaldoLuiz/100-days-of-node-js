const request = require('supertest');
const app = require('../day048');

describe('Testes de Integração para a API de Usuários', () => {
  it('Deve retornar a lista de usuários', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('Deve adicionar um novo usuário', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(newUser);
  });
});