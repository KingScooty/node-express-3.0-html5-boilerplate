
// -- Module dependencies.
var express     = require('express'),
    http        = require('http'),
    logo        = require('./lib/logo'),
    color       = require('colors');

// -- Create Express instance and export
var app         = express(),
    env         = app.settings.env,
    
// -- Import configuration
    conf        = require('./settings/config'),
    settings    = conf.settings;
    conf        (app, express, env);

// -- Bootstrap Config
require('./bootstrap').boot(app);

// -- Routes
require('./routes/index')(app);

// -- Only listen on $ node app.js
logo.print();

http.createServer(app).listen(settings.port, function(){
    console.log("Express server listening on "+" port %d ".bold.inverse.red+" in " + " %s mode ".bold.inverse.green + " //", settings.port, env);
    console.log('Using Express %s...', express.version.red.bold);
});