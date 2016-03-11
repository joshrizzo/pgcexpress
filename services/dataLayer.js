// Data access layer

var inMemoryDatabase = [];

var insert = (item) => {
	inMemoryDatabase.push(item);
};

var getAll = () => {
	return inMemoryDatabase;
};

module.exports = {
	insert: insert,
	getAll: getAll
};