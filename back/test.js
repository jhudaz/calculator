var server = require('./index');
var assert = require('assert');
var chai = require('chai');
var should = chai.should()


chai.use(chaiHttp);

describe('/GET ', () => {
  it('it should GET all the books', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});