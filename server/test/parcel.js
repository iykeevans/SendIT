const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Test for All Parcel routes', () => {
  describe('Test for All GET routes', () => {

    // test for all parcel delivery order
    describe('GET /parcels', () => {
      it('it should return success code 200', () => {
        request(app).get('/api/v1/parcels')
          .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('array');
          })
          .catch((err) => {
            expect(err.statusCode).to.equal(404);
          });
      });
    });

    // test for specific parcel delivery order
    describe('GET /parcels/:id', () => {
      it('it should return success code 200', () => {
        request(app).get('/api/v1/parcels/1')
          .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('userId');
          })
          .catch((err) => {
            expect(err.statusCode).to.equal(404);
          });
      });
    });
  });
});
