'use strict'

var admin = require("firebase-admin");

var serviceAccount = require("../../myazurefunctionstestproject-firebase-adminsdk-gxua0-5b816e2dcd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


async function execute(context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

module.exports = execute;
