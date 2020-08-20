const http = require('http');
const app = require('../app')
const server = http.createServer(app)

const request = require('supertest')

describe('Alive?', () => {
    it('The server should be alive', async () => {
        const theServer = await request(server)
            .get('/')
        expect(theServer.statusCode).toEqual(200)
    })
})

describe('SignUp EndPoint', () => {
    it('should create new user', async () => {
        const user = await request(server)
            .post('/signup')
            .send({
                email: "test@mail.com",
                name: "Test User",
                accounType: "Moral",
                password: "123123123"
            })
        expect(user.statusCode).toEqual(201)
        expect(user.body.success).toEqual(true)
    })
})

describe('LogIn Endpoint', () => {
    it('should make login', async () => {
        const user = await request(server)
            .post('/login')
            .send({
                email: "test@mail.com",
                password: "123123123"
            })
        expect(user.statusCode).toEqual(200)
        expect(user.body.success).toEqual(true)
    })
})

describe('LogOut EndPoint', () => {
    it('should make logout', async () => {
        const bai = await request(server)
            .get('/logout')
        expect(bai.statusCode).toEqual(200)
    })
})