// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '180283492539752', // your App ID
        'clientSecret'  : '3adb5b9504b984b90ad9b52692094548', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'syuNeckYv27p32OsDqy2sP4Rf',
        'consumerSecret'    : '0MqPvi3cv0KvZ4CRyj8sL6Ie6AvOVUQS6mRAcOFlo5DPfoFqyV',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};