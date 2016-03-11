// Routing middleware for base URL

// Dependencies
var express 	= require('express');
var db			= require('../services/dataLayer.js');

// Router
var router 		= express.Router();

// Hello World main page
router.get('/', (request, response) => {
	response.render('index', { title: 'Welcome to Express!', message: 'Hello, World!' });
});

// Page to interact with data API
router.get('/data', (request, response) => {
	var data = db.getAll();
	response.render('data', { title: "Data API Demo", data: data });
});

router.get('/dataList', (request, response) => {
	var data = db.getAll();
	response.render('datalist', { data: data });
});

// Export module
module.exports = router;