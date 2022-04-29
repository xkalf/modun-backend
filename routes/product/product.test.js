const request = require('supertest')
const app = require('../../app')

describe('Test Get /product', () => {
  test('It should responce with 200 success', async function () {
    const responce = await request(app).get('/product')
    expect(responce.statusCode).toBe(200)
  })
})
describe('Test Post /product', () => { })
describe('Test Put /product', () => { })
