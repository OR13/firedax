"use strict";
/**
 * Firebase GDAX and IPFS
 * @module firedax
 */

var firebase = require('firebase');
var Gdax = require('gdax');
var ipfsAPI = require('ipfs-api');

/** Class representing the FireDAX. */
class FireDAX {

    /**
     * Create a FireDAX.
     */
    constructor() {

        this.initializeIPFS();
        this.initializeFirebase();

        this.OrderBook = new Gdax.OrderbookSync();
    }

    /**
    * Connect to IPFS
    * {@link https://github.com/ipfs/js-ipfs-api IPFS JS API}.
    */
    initializeIPFS() {

        this.ipfs = ipfsAPI('/ip4/127.0.0.1/tcp/5001')

        // // connect to ipfs daemon API server
        // var ipfs = ipfsAPI('localhost', '5001', { protocol: 'http' }) // leaving out the arguments will default to these values

        // // or using options
        // var ipfs = ipfsAPI({ host: 'localhost', port: '5001', procotol: 'http' })

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