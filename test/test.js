var assert = require('assert');
var chai = require('chai');
var should = chai.should()

function sumar(a, b) {
  return a + b;
}
const tea = {
  flavors: [2,3,8]
};

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('probar igualdad', () => {
  it('que true sea igual a true', () => {
    assert.equal(true, true);
  });

  it('Probar que sumar funcione', () => {
    assert.equal(10, sumar(3, 7));
  })

  it('probar chai', () => {
    tea.should.have.property('flavors').with.lengthOf(3);
  })
});
