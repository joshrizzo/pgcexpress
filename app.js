// Main application module

// Dependencies
var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require('path');

// Routing middleware
var dataapi 	= require('./routes/api/data');
var routes 		= require('./routes/index');

// Express application
var app 		= express();

// Jade view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Body-parser setup to parse request data as JSON or URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Tells the app what port to run on
app.listen(3000, () => {
	console.log("I'm listening on port 3000!");
});

// Routes
app.use('/', routes);
app.use('/api', dataapi);
