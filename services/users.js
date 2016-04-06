
var users = [
	{
		username: 'user',
		password: 'password'
	},
	{
		username: 'admin',
		password: 'password'
	}
];

var login = (username, password) => {
	for (let user of users) {
		if (user.username === username) {
			return user.password === password;
		}
	}
}

module.exports = {
	login: login
};