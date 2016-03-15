// Routing middleware for base URL

// Dependencies
var express = require('express');
var db = require('../services/dataLayer.js');
var router = express.Router();					// Router

// Hello World main page
router.get('/', (request, response) => {
	response.render('index', { title: 'Jade View Engine', message: 'Hello, World!' });
});

// Simple send response
router.get('/basic', function (request, response) {
	response.send('Hello, World!');
});

// Respond with a static file
router.get('/statichtml', function (request, response) {
	response.sendFile('helloworld.html', {root: './public/'});
});

// Export module
module.exports = router;