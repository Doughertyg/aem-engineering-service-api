const request = require('supertest');
const app = require('../app.ts');
const { MAX_NUMBER_INPUT, MIN_NUMBER_INPUT } = require('../utils/constants.ts');
const { ERROR_MESSAGES } = require('../utils/error-messages.ts');

test('GET /romannumeral',  async () => {
  await request(app)
    .get('/romannumeral?query=3')
    .expect(200)
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.body)
      expect(Object.keys(res.body).includes('input')).toBeTruthy()
      expect(Object.keys(res.body).includes('output')).toBeTruthy()
    })
});

test('GET /romannumeral returns 400 error if no number provided',  async () => {
  await request(app)
    .get('/romannumeral?query=')
    .expect(400)
});

test('GET /romannumeral returns 400 error if number provided is out of range',  async () => {
  await request(app)
    .get(`/romannumeral?query=${MAX_NUMBER_INPUT + 1}`)
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    })

  await request(app)
    .get(`/romannumeral?query=${MIN_NUMBER_INPUT - 1}`)
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    })
});

test('GET /romannumeral returns 400 error if no number provided is not an integer',  async () => {
  await request(app)
    .get('/romannumeral?query=3.4')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  await request(app)
    .get('/romannumeral?query=3.4.6')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  await request(app)
    .get('/romannumeral?query=three')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  await request(app)
    .get('/romannumeral?query=true')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  await request(app)
    .get('/romannumeral?query=[36]')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  // In javascript numbers are represented as floating-point numbers which have a precision limit that means 5.0000000000000001 will be considered an integer
  // test that 5.0000000000000001 fails validation and is not considered an integer by this API. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  await request(app)
    .get('/romannumeral?query=5.00000000000000000001')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    });

  await request(app)
    .get('/romannumeral?query=4500000000000000.1')
    .expect(400)
    .then((res) => {
      expect(res.text).toEqual(ERROR_MESSAGES.INVALID_INPUT)
    }); 
});

