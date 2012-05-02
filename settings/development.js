
var connectAssets   = require('connect-assets');

module.exports = function(app, express) {

    app.use(express.logger('dev'));

    //Enable dependency based asset loading
    app.use(connectAssets({
        src : __dirname + "/../public"
    }));

    app.use(express.errorHandler({ 
        dumpExceptions: true, 
        showStack: true 
    }));

}