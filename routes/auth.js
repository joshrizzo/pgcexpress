// Routing middleware for auth URL

// Dependencies and declarations
var express = require('express');
var httpCode = require('http-status-codes');
var url = require('url');
var users = require('../services/users.js');	// Our user service
var router = express.Router();					// Router

// Secured access page
router.get('/', (request, response) => {
	if (request.session.username) {
		response.render('authenticated', {
			title: "You are authenticated!",
			username: request.session.username
		});
	} else {
		response.redirect(httpCode.TEMPORARY_REDIRECT, '/auth/login?redirect=' + encodeURIComponent(request.originalUrl));
	}
});

// Login page
router.route('/login')
	.get((request, response) => {
		response.render('login', { title: 'Login to this site.', redirect: request.body.redirect });
	})
	.post((request, response) => {
		if (users.login(request.body.username, request.body.password)) {
			request.session.username = request.body.username;
			response.redirect(request.query.redirect);
		} else {
			response.redirect(httpCode.TEMPORARY_REDIRECT, 'error');
		}
	});

// Error page for failed authentication
router.all('/error', (request, response) => {
	response.render('authError', { title: 'Username or Password incorrect.' });
});

// Export module
module.exports = router;