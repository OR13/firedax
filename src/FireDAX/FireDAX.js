"use strict";
/**
 * Firebase GDAX
 * @module firedax
 */

var firebase = require('firebase');
var Gdax = require('gdax');

/** Class representing the FireDAX. */
class FireDAX {

    /**
     * Create a FireDAX.
     */
    constructor() {

        this.initializeFirebase();
        this.OrderBook = new Gdax.OrderbookSync();
    }

    /**
    * Connect to Firebase
    * {@link https://firebase.google.com/docs/database/server/start Firebase Server API}.
    */
    initializeFirebase() {

        this.config = {
            firebase: {
                serviceAccount: {
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY
                },
                databaseURL: process.env.FIREBASE_DATABASE_URL
            }
        };

        firebase.initializeApp(this.config.firebase);

    }

}

module.exports = FireDAX;