'use strict';
const { assert } = require('chai');
const request = require('supertest');

const HOST = 'http://0.0.0.0:3000';

describe('Service api', () => {
  describe('/rockstars', () => {
    describe('GET', () => {
      it('will return positive result with status code: 200', async () => {
        const { body, statusCode } = await request(HOST).get('/rockstars');

        assert.equal(statusCode, 200);
        assert.exists(body);
      });
    });

    describe('POST', () => {
      it('will return negative result with status code: 400', async () => {
        const { statusCode } = await request(HOST)
          .post('/rockstar')
          .send({});

        assert.equal(statusCode, 400);
      });

      it('will return negative result with status code: 409', async () => {
        const mock = {
          id: 2,
          name: 'Roger Waters',
          band: 'Pink Floyd',
          instrument: 'guitar'
        };

        const { body, statusCode } = await request(HOST)
          .post('/rockstar')
          .send(mock);

        assert.equal(statusCode, 409);
        assert.equal(body.message, 'Musician already exist.');
      });

      it('will return positive result with status code: 201', async () => {
        const mock = {
          id: 7,
          name: 'Robert Plant',
          band: 'Led Zeppelin',
          instrument: 'vocals'
        };

        const { statusCode } = await request(HOST)
          .post('/rockstar')
          .send(mock);

        assert.equal(statusCode, 201);
      });
    });
  });

  describe('/rockstar/{id}', () => {
    describe('GET', () => {
      it('will return positive result with status code: 200', async () => {
        const { body, statusCode } = await request(HOST).get('/rockstar/3');
        const mock = {
          id: 3,
          name: 'Jimmy Page',
          band: 'Led Zeppelin',
          instrument: 'guitar'
        };

        assert.equal(statusCode, 200);
        assert.equal(body.name, mock.name);
        assert.equal(body.band, mock.band);
      });
    });

    describe('PUT', () => {
      it('will return positive result with status code: 200', async () => {
        const mock = {
          id: 3,
          name: 'James Patrick Page',
          band: 'Led Zeppelin',
          instrument: 'guitar'
        };

        const { body, statusCode } = await request(HOST)
          .put('/rockstar/3')
          .send(mock);

        assert.equal(statusCode, 200);
        assert.equal(body.name, mock.name);
        assert.equal(body.band, mock.band);
      });
    });

    describe('DELETE', () => {
      it('will return positive result with status code: 200', async () => {
        const { body, statusCode } = await request(HOST).delete('/rockstar/6');

        assert.equal(statusCode, 200);
        assert.equal(body.message, 'Musician has been successfully removed.');
      });
    });
  });
});
