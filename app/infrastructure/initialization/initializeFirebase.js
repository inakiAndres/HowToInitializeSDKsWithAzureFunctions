'use strict'
const admin = require("firebase-admin");
const serviceAccount = require("../../../myazurefunctionstestproject-firebase-adminsdk-gxua0-5b816e2dcd.json");

function initializeFirebase() {
    if(!admin.apps.length) {
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
        });
        console.log("Firebase initialized");
    }
    return admin;
}

module.exports = { initializeFirebase };