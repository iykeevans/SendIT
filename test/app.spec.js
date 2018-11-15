const request = require('supertest');
const app = require('../src/app');

describe('Test to see if server is working', () => {
	it('should return welcome to the demo of this API in json', (done) =>{
		request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
	});
});
