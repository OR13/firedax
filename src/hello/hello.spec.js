
var firedax = require('../../firedax');

var assert = require('chai').assert;

describe('firedax.hello()', function () {

    before(function () {

        // firedax.init({
        //     firebase: {
        //         serviceAccount: {
        //             projectId: process.env.FIREBASE_PROJECT_ID,
        //             clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        //             privateKey: process.env.FIREBASE_PRIVATE_KEY
        //         },
        //         databaseURL: process.env.FIREBASE_DATABASE_URL
        //     }
        // });

    });

    it('should return "hello"', function () {
        assert.equal(firedax.hello(), 'hello');
    });

    after(function () {

    });

});