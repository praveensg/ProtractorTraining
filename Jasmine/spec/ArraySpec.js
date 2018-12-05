var app = require('./ArrayDemo');

describe('Tests for Array based functions', function() {
	it('should get the length of the array', function(){
		var data = app.getArray();
		expect(data.length).toEqual(1000);
	})

	it('Check for Employee', function () {
		var data = app.getArray();
		expect(data).toContain({"Empname":"Colver Spillard","EmpAddress":"Mumbai","EmpSalary":"52283.92"});
		console.log(JSON.stringify(data));
	})

	it('find an Employee based on name', function() {
		var emp = app.findEmp('Colver Spillard');
		expect(emp).toEqual({"Empname":"Colver Spillard","EmpAddress":"Mumbai","EmpSalary":"52283.92"});
		console.log("Emp Found");
	})

	it('Should return null if no emp is found', function() {
		var emp = app.findEmp('Phaniraj');
		expect(emp).toBeNull();
	})
})