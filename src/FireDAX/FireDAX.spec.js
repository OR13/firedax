"use strict";

var firedax = require('../../firedax');
var assert = require('chai').assert;

var firebase = require('firebase');

describe('let fd = new firedax.FireDAX(4, 2)', function () {

    var fd;

    before(function () {
        fd = new firedax.FireDAX(4, 2);
    });

    it('fd.getX() should be 4', function () {
        assert.equal(fd.getX(), 4);
    });

    it('fd.getY() should be 2', function () {
        assert.equal(fd.getY(), 2);
    });

    after(function () {
        firebase.app().delete().then(function () {
            // console.log("[DEFAULT] App is Gone Now");
        });
    });

});