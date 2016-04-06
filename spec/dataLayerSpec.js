var dataLayer = require('../services/dataLayer.js');

describe("dataLayer", function () {
	describe("getAll", function () {
		it("returns nothing first", function () {
			var results = dataLayer.getAll();
			expect(results.length).toBe(0);
		});
	});
});