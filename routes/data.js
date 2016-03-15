// Routing middleware for data URL

// Dependencies and declarations
var express = require('express');
var httpCode = require('http-status-codes');
var db = require('../services/dataLayer.js');	// Our database service
var router = express.Router();					// Router

// Page to interact with data API
router.route('/')
	// Get returns the base page
	.get((request, response) => {
		var data = db.getAll();
		response.render('data', { title: "Data API Demo", data: data });
	})

	// Async action to re-render data list
	.post((request, response) => {
		var item = request.body.item;
		var responseCode = httpCode.INTERNAL_SERVER_ERROR;
		var message = "There was a problem with your request.";

		//TODO: Try/Catch
		if (item) {
			db.insert(item);
			responseCode = httpCode.OK;
			message = item + ' added to db.';
		}

		var data = db.getAll();
		response.render('datalist', { data: data });
	});

// Export module
module.exports = router;