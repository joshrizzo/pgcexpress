// Routing middleware for base URL

// Dependencies
var express 	= require('express')

// Router
var router 		= express.Router()

// Hello World main page
router.get('/', (request, response) => {
	response.render('index', { title: 'Welcome to Express!', message: 'Hello, World!' })
})

// Page to interact with data API
router.get('/data', (request, response) => {
	var data = 
	response.render('data', { title: "Data API Demo", data: data })
})

// Export module
module.exports = router;