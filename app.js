// Main application module

// Dependencies and declarations
var express = require('express');				// External libraries...
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var routes = require('./routes/index');			// Include our routing middleware files...
var dataroutes = require('./routes/data');
var pubDir = path.join(__dirname, 'public');	// Directory for publicly accessible files
var viewEngine = 'jade';						// View Engine name
var port = 1337;								// Basic Node.js port
var expressport = 1338;							// Express port
var app = express();							// Express application

// This is a basic Node.js setup, for reference...
http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end('Hello, World!');
}).listen(port);

// Allow static files from /public
app.use(express.static(pubDir));

// Jade view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', viewEngine);

// Body-parser setup to parse request data as JSON or URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing middleware setup
app.use('/', routes);
app.use('/data', dataroutes);

// Tells the app what port to run on
app.listen(expressport, () => {
	console.log(`Express app listening on port ${expressport}.`);
	console.log(`Static files served on ${pubDir}.`);
	console.log(`Using ${viewEngine} view engine.`);
	console.log('Parsing JSON and URL Encoded HTTP bodies.');
});