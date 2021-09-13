'use strict'

const admin = require("firebase-admin");

async function execute(context, req) {
    

    const tokenFake = admin
    .auth()
    .createCustomToken(req.query.name)
    .then(customToken => customToken)
    .catch((error) => {
      throw createFirebaseError(error.errorInfo.message);
    });
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: tokenFake
    };
}

module.exports = execute;
