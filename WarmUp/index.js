module.exports = async function (context, warmupContext) {
    context.log('Function App instance is warm 🌞🌞🌞');

    var admin = require("firebase-admin");

    var serviceAccount = require("../../myazurefunctionstestproject-firebase-adminsdk-gxua0-5b816e2dcd.json");

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

    console.log('number of instances: ', admin.apps.length);
};