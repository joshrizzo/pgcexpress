// Main application module

// Dependencies
var express 	= require('express')

// Routing middleware
var dataapi 	= require('/routes/api/data')
var routes 		= require('/routes/index')

// Express application
var app 		= express()

// Routes
app.use('/', routes)
app.use('/dataapi', dataapi)
