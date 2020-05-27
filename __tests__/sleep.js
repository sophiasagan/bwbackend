const request = require('supertest')

const server = require('../server')


describe('server', () => {
    describe('GET /sleep', () => {
        it('gets sleep database', () => {
            return request(server)
            .get('/sleep')
            .expect(404)
        })
    })
})