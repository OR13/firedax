
var Gdax = require('gdax');
  
module.exports = function () {
    return new Gdax.OrderbookSync(); 
};
