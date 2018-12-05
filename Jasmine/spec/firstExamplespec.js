var app = require('./firstDemo');

describe('Test suite for math operations', ()=> {
	//contains one or more specs, tear-ups, tear-down functions that will be executed either sequentially or randomly...

	it('Adding 2 numbers', function() {
		var rs = app.addFunc(2, 3);
		expect(rs).toBe((2 + 3));
	})

	it('Subtracting 2 numbers', function() {
		var rs = app.subFunc(2, 3);
		expect(rs).toBe((2 - 3));
	})

	it('Square of a number', function() {
		var rs = app.square(3);
		expect(rs).toBe((3 * 3));
	})

	it('SquareRoot of a number', function() {
		var rs = app.squareRt(9);
		expect(rs).toBe((3));
	})


})