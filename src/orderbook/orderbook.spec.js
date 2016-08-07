
var firedax = require('../../firedax');

var assert = require('chai').assert;

describe('firedax.orderbook()', function () {

    before(function () {

    });

    it('should return a realtime order book which is synched with gdax.', function (done) {

        this.timeout(10 * 1000);

        var orderbookSync = firedax.orderbook();

        var book = orderbookSync.book.state();
        var count = 0;

        setInterval(function () {
            count += 1;
            book = orderbookSync.book.state();

            console.log('\t after ', count, ' seconds, ', book.asks.length, ' asks, ', book.bids.length, ' bids.');

            if (count > 4) {
                done();
            }

        }, 1 * 1000)

    });

    after(function () {

    });

});