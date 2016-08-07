
var firedax = require('../../firedax');

var assert = require('chai').assert;

describe('firedax.hello()', function () {

    before(function () {
        firedax.init();
    });

    it('should return "hello"', function () {
        assert.equal(firedax.hello(), 'hello');
    });

    after(function () {

    });

});