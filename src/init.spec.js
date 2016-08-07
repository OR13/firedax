

var firedax = require('../firedax');

var assert = require('chai').assert;

describe('firedax.init()', function () {

    before('reset config object', function () {
        firedax.config = undefined;
    });

    it('should initialize firedax.config from env variables', function () {

        assert.equal(firedax.config, undefined);

        firedax.init();

        assert.equal(firedax.config.type, "env");

    });

    after('reset config object', function () {
        firedax.config = undefined;
    });

});

describe('firedax.init(config)', function () {

    before('reset config object', function () {
        firedax.config = undefined;
    });

    it('should initialize firedax.config from an object', function () {

        assert.equal(firedax.config, undefined);

        var config = {
            type: "object"
        }

        firedax.init(config);

        assert.equal(firedax.config.type, config.type);
        assert.equal(firedax.config.type, "object");

    });

    after('reset config object', function () {
        firedax.config = undefined;
    });

});
