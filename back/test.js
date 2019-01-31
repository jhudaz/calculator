var server = require('./index');
var assert = require('assert');
var chai = require('chai');
var should = chai.should();
let chaiHttp = require('chai-http');

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
describe('/GET ', () => {
  it('it should GET only one user!', (done) => {
    let users = {
      id: 86,
    }
    chai.request(server)
      .get('/user')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
// describe('/GET/user', () => {
//   it('it should GET a user by the given id', (done) => {
//       let users = new User({ 
//         firstName: "Ruperto", 
//         author: "Alqueria"
//       });
//       users.save((err, users) => {
//           chai.request(server)
//         .get('/user/' + users.id)
//         .send(users)
//         .end((err, res) => {
//               res.should.have.status(200);
//               res.body.should.be.a('string');
//               res.body.should.have.property('firstName');
//               res.body.should.have.property('lastName');
//               res.body.should.have.property('id').eql(users.id);
//           done();
//         });
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