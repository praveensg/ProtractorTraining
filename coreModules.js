// node js contain certain required for developing various knhds of apps: websites, file io operations, string manipulations,m os related activities and many more.
// use these modules to create apps that can perform IO operatioins in JS....
var fs = require('fs');
var employee = require('./Employee');
var util = require('util');
var employees = [];

employees.push(new employee(123, 'Phaniraj', 'Bangalore'));
employees.push(new employee(124, 'Praveen', 'Kochi'));
employees.push(new employee(125, 'Govind', 'Hyderabad'));

var allData = "complete.txt";
employees.forEach((e, i) => {
	var data = util.format("%s, %s, %s", e.empId, e.empName, e.empAddress);
	fs.appendFileSync(allData , data);
})

console.log("Files by name" + allData + " has been written");

