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
router.route('/:item')

	// Put an item into the database.
	.put((request, response) => {

		var item = request.params.item;
		item += delimiter

		fs.appendFileSync(fileName, item, encoding, (error) => { 

			if (error) 	
				response.sendStatus(httpCode.INTERNAL_SERVER_ERROR) 
			else
				response.sendStatus(httpCode.OK)
		})
	})
	
	// Get an item from the database or get all items if none are specified.
	.get((request, response) => {

		var item 		= request.params.item;  //TODO: Filter on param
		var fileText 	= fs.readFileSync('/filedb.txt', 'utf8')

		response.send(httpCode.OK, fileText)
	})

// Export module
module.exports = router;