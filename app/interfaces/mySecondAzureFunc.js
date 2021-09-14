'use strict'
const { initializeFirebase } = require('../infrastructure/initialization')
const admin = initializeFirebase();

async function execute(context, req) {
    
  console.log('number of instances: ', admin.apps.length);
    const uidResponse = await admin
    .auth()
    .createUser(req.body)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
      return {
        status: 200,
        body: {uid: userRecord.uid},
        headers: {
          'Content-Type': 'application/json'
        }
    };
    })
    .catch((error) => {
      return {
        status: 409,
        body: {error: 'Error creating new user:', error},
        headers: {
          'Content-Type': 'application/json'
        }
    };
    });
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = uidResponse;
}

module.exports = execute;
