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
var port = 1337;								// Basic Node.js port
var expressport = OPENSHIFT_NODEJS_PORT || 1338;// Express port
var app = express();							// Express application
var secret = 'd2f66f7a-0cde-4b52-be0a-6f254cefe976';	// Secret for signing cookies

//// This is a basic Node.js setup, for reference...
//http.createServer((request, response) => {
//	response.writeHead(200, { 'Content-Type': 'text/plain' });
//	response.end('Hello, World!');
//}).listen(port);

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
//app.use('/', routes);
//app.use('/data', dataroutes);
//app.use('/auth', authroutes);

// Tells the app what port to run on
app.listen(expressport, function () {
	console.log("Express app listening on port " + expressport);
	console.log("Static files served on " + pubDir);
	console.log("Using " + viewEngine + " view engine.");
	console.log("Parsing JSON and URL Encoded HTTP bodies.");
});