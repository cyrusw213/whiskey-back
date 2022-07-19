const expect = require('chai').expect
const request = require('supertest')
const route = require('../../../controllers/whiskeys')
const app = require('../../../server')
const conn = require('../../../db/index')
const chai = require('chai')
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe("post new whiskey", () => {
    it('it should post new whiskey', (done) => {
        const whiskey = {
            Name: 'jamo',
            Rating: 0,
            completed: false
        };
        chai.request(app)
        .post("/whiskey")
        .send(whiskey)
        .end((err, response) => {
            response.should.have.status(200)    
            response.body.should.have.property('Name').eq('jamo')
            response.body.should.have.property('Rating').eq(0)
        done();
        })
    })
})