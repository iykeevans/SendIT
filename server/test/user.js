const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('GET /users/:id/parcels', () => {
  it('it should return success code 200', () => {
    request(app).get('/api/v1/users/:id/parcels')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
      })
      .catch((err) => {
        expect(err.statusCode).to.equal(404);
      });
  });
});