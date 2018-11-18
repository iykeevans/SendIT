const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Test for App.js', () => {
  it('it should return success code 200', () => {
    request(app).get('/')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
      })
      .catch((err) => {
        expect(err.statusCode).to.equal(404);
      });
  });
});
