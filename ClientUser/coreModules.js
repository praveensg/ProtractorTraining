// node js contain certain required for developing various knhds of apps: websites, file io operations, string manipulations,m os related activities and many more.
// use these modules to create apps that can perform IO operatioins in JS....
var fs = require('fs');
var emp = require('./Employee');
var util = require('util');
var employees = [];

employees.push(new Employee(123, 'Phaniraj', 'Bangalore'));
employees.push(new Employee(124, 'Praveen', 'Kochi'));
employees.push(new Employee(125, 'Govind', 'Hyderabad'));

employees.forEach((e, i) => {
	var data = util.format("%s, %s, %s", e.empId, e.empName, e.empAddress);
	fs.writeFileSync("Content" + i + ".txt" , data);
	console.log("Files by name Content" + i + ".txt has been written");
})

