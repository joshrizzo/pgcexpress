"use strict";

// Main application module

// Dependencies and declarations
var express = require('express');				// External libraries...
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var routes = require('./routes/index');			// Include our routing middleware files...
var dataroutes = require('./routes/data');
var authroutes = require('./routes/auth');
var pubDir = path.join(__dirname, 'public');	// Directory for publicly accessible files
var viewEngine = 'jade';						// View Engine name
var app = express();							// Express application
var secret = 'd2f66f7a-0cde-4b52-be0a-6f254cefe976';	// Secret for signing cookies

// Allow static files from /public
app.use(express.static(pubDir));

// Lib to parse cookies
app.use(cookieParser());

// Lib to parse sessions
app.use(expressSession({ secret: secret }));

// Jade view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', viewEngine);

// Body-parser setup to parse request data as JSON or URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing middleware setup
// app.use('/', routes);
//app.use('/data', dataroutes);
//app.use('/auth', authroutes);

// Tells the app what port and IP to run on
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

http.createServer(app).listen(app.get('port'), app.get('ip'), () => {
	console.log("Express app listening on port " + app.get('port'));
	console.log("Static files served on " + pubDir);
	console.log("Using " + viewEngine + " view engine.");
	console.log("Parsing JSON and URL Encoded HTTP bodies.");
});