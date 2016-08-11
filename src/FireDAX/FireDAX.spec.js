"use strict";

var firedax = require('../../firedax');
var assert = require('chai').assert;

var firebase = require('firebase');

describe('let fd = new firedax.FireDAX()', function () {

    var fd;

    before(function () {
        fd = new firedax.FireDAX();
    });

    it('should define fd.OrderBook', function () {
        assert.isObject(fd.OrderBook);
    });

    it('should define fd.config.firebase', function () {
        assert.isObject(fd.config.firebase);
    });

    it('should define fd.ipfs', function () {
        assert.isObject(fd.ipfs);
    });

    after(function () {
        firebase.app().delete().then(function () {
            // console.log("[DEFAULT] App is Gone Now");
        });
    });

});