// All anonymous modules are exported to external js files thro module.exports.
// It is a nodejs object that exports the componenets for usability.

//Usually anonymous modules are self invoking modules.

// var emp = require('./Employee');
//emp gets the contents of the return statement of the module....
module.exports = (function() {

	var repository = [];

	// create the Js functions here....
	function addNewEmployee(emp) {
		repository.push(emp);
	}

	function deleteEmployee(id) {
		repository.find(function(element){
			return element.empId = id;
		})
		var index = repository.indexOf(emp);
		repository.splice(index, 1);
	}

	function updateEmployee(emp) {
		for(var i = 0; i< repository.length; i++){
			if(repository[i].empId == emp.empId) {
				repository[i].empName = emp.empName;
				repository[i].empAddress = emp.empAddress;
				return;
			}
			throw "employee not found";
		}
	}

	function getAllEmployees() {
		return repository;
	}

	return {
		addNew : addNewEmployee,
		deleteOld : deleteEmployee,
		update : updateEmployee,
		getAll : getAllEmployees
	}

}) ();