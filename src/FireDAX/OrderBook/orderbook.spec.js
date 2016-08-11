
var firedax = require('../../../firedax');
var assert = require('chai').assert;
var firebase = require('firebase');

describe('fd.OrderBook', function () {

    var fd;
    before(function () {
        fd = new firedax.FireDAX();
    });

    it('should return a realtime order book which is synched with gdax.', function (done) {

        this.timeout(10 * 1000);

        var book = fd.OrderBook.book.state();
        var count = 0;

        setInterval(function () {
            count += 1;
            book = fd.OrderBook.book.state();

            console.log('\t after ', count, ' seconds, ', book.asks.length, ' asks, ', book.bids.length, ' bids.');

            if (count > 4) {
                done();
            }

        }, 1 * 1000)

    });

    after(function () {
        firebase.app().delete().then(function () {
            // console.log("[DEFAULT] App is Gone Now");
        });
    });

});