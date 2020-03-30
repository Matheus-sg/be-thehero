const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
  it('should be able to create a new ong', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD2',
      email: 'contato',
      whatsapp: '21965411402',
      city: 'rio de janeiro',
      uf: 'RJ',
    });

    console.log(response.body);
  });
});
