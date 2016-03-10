// Routing middleware for database API

// Dependencies
var express 	= require('express')
var httpCode 	= require('http-status-codes')
var fs 			= require('fs')

// Router
var router 		= express.Router()

// Module properties
var fileName 	= '/data/database.csv'
var encoding 	= 'utf8'
var delimiter 	= ','

// Routes
router.route('/data')

	// Put an item into the database.
	.post((request, response) => {

		var item = request.body.item;
		item += delimiter

		fs.appendFileSync(fileName, item, encoding, (error) => { 

			if (error) 	
				response.sendStatus(httpCode.INTERNAL_SERVER_ERROR) 
			else
				response.sendStatus(httpCode.OK)
		})
	})

	// Get all items from the database.
	.get((request, response) => {

		var fileText 	= fs.readFileSync('/filedb.txt', 'utf8')
		response.send(httpCode.OK, fileText)
	})

// Export module
module.exports = router;