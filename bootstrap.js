
// -- Module dependencies
var express = require('express');

// -- Global paths
var views = __dirname + '/views',
    static_root = __dirname + '/public';

/**
 * Express base configuration 
 * Bootstrap
 */
module.exports.boot = function(app) {

    /**
     * Global configuration
     */
     app.configure(function() {

         // -- Define view engine with its options
         app.set('views', views);
         app.set('view engine', 'jade');
         
         // -- Set uncompressed html output and disable layout templating
         app.locals({
             pretty : true,
             layout: false
         });
         
         // -- Parses x-www-form-urlencoded request bodies (and json)
         app.use(express.bodyParser());
         app.use(express.methodOverride());
         
         // -- Express routing
         app.use(app.router);
         
         // -- Static ressources
         app.use(express.favicon());
         app.use(express.static(static_root));
         

         // -- 500 status
         app.use(function(err, req, res, next) {
             res.render('500', {
                 status: err.status || 500,
                 error: err
             });
         });

         // -- 404 status
         app.use(function(req, res, next) {
             res.render('404', {
                 status: 404,
                 url: req.url
             });
         });
         

     });

}