var app = require('./mathCalc');
var calc = null;
var currVal = 0;

describe("Test for calc component", function() {
	// An operation to invoke before any of the test suites run....
	beforeAll (function() {
		calc = new app.mathCalc();
	});

	// beforeEach(function() {
	// 	console.log("Calling test");
	// 	calc.currVal = currVal;
	// })

	// afterEach(function() {
	// 	currVal = calc.currVal;
	// })

	it('Should add 2 numbers', function(){
		var res = calc.add(2);
		expect(res).toBe(2);
	})

	it('Should add to the same no', function(){
		var res = calc.add(2);
		expect(res).toBe(4);
	})

	it('Should add many values to the number', function() {
		var res = calc.addMany([2, 3, 3]);
		expect(res).toBe(12);
	})
})