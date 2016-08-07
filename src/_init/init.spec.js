

var firedax = require('../../firedax');

var assert = require('chai').assert;


describe('firedax.init(config)', function () {

    before('reset config object', function () {
        firedax.config = undefined;
    });

    it('should initialize firedax.config from an object', function () {

        assert.equal(firedax.config, undefined);

        var config = {
            firebase: {
                serviceAccount: {
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY
                },
                databaseURL: process.env.FIREBASE_DATABASE_URL
            }
        }

        firedax.init(config);

        assert.equal(firedax.config.firebase.serviceAccount.projectId, config.firebase.serviceAccount.projectId);
        assert.equal(firedax.config.firebase.serviceAccount.clientEmail, config.firebase.serviceAccount.clientEmail);
        assert.equal(firedax.config.firebase.serviceAccount.privateKey, config.firebase.serviceAccount.privateKey);
        assert.equal(firedax.config.firebase.serviceAccount.databaseURL, config.firebase.serviceAccount.databaseURL);


    });

    after('reset config object', function () {
        firedax.config = undefined;
    });

});
