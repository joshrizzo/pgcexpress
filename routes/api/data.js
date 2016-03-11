// Routing middleware for database API

// Dependencies
var express 	= require('express');
var httpCode	= require('http-status-codes');
var db			= require('../../services/dataLayer');

// Router
var router 		= express.Router();

// Routes
router.route('/data')

	// Put an item into the database.
	.post((request, response) => {

		var item = request.body.item;
		var responseCode;

		if (item) responseCode = httpCode.OK;
		else responseCode = httpCode.INTERNAL_SERVER_ERROR;

		db.insert(item);

		response.status(responseCode).send(item + ' added to db.');
	});

// Export module
module.exports = router;