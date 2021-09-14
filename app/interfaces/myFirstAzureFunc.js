'use strict'
const { initializeFirebase } = require('../infrastructure/initialization')
const admin = initializeFirebase();


async function execute(context, req) {
    
    console.log('number of instances: ', admin.apps.length);
    
    const tokenResponse = await admin
      .auth()
      .createCustomToken(req.headers.uid)
      .then((customToken) => {
        return {
            status: 200,
            body: {customToken},
            headers: {
              'Content-Type': 'application/json'
            }
        }
      })
      .catch((error) => {
          return {
            status: 409,
            body: {error: 'Error creating custom token:', error},
            headers: {
              'Content-Type': 'application/json'
            }
        }
       
      });
  
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = tokenResponse;
}

module.exports = execute;
