
// -- Global settings
var settings = {
    'siteName' : 'yoursitename',
    'sessionSecret' : 'sessionSecret',
    'uri' : 'http://localhost', // Without trailing /
    'port' : process.env.PORT || 3000,
    'debug' : 0,
    'profile' : 0
};

/**
 * Default configuration manager
 * Inject app and express reference
 */

module.exports = function(app, express, env) {

    // -- DEVELOPMENT
    if ('development' == env) {
        require("./development")(app, express);
    }

    // -- PRODUCTION
    if ('production' == env) {
        require("./production")(app, express);
    }

};

module.exports.settings = settings;