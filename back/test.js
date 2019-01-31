var server = require('./index');
var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
const models = require('./models');

chai.use(chaiHttp);

//test api get all
describe('/GET ', () => {
  it('it should GET all the users', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        // res.body.length.should.be.eql();
        done();
      });
  });
});
//test api get only one user
// describe('/GET ', () => {
//   it('it should GET only one user!', (done) => {
//     let users = {
//       id: 86,
//     }
//     chai.request(server)
//       .get('/user')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//         done();
//       });
//   });
// });



//test api post
describe('/POST ', () => {
  it('it should  POST a user in the db', (done) => {
    let users = {
      firstName: "PRUEBA",
      lastName: "PRUEBA"
    }
    chai.request(server)
      .post('/')
      .send(users)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        done();
      });
  });
});