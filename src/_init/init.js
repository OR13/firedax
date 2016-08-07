var firebase = require("firebase");

module.exports = function (config) {

    if (config) {
        this.config = config;
    } 

    firebase.initializeApp(this.config.firebase);
}
