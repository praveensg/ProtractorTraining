// It is the entity class for our empRepository....

// module.exports = (function() {
// 	var empId;
// 	var empName;
// 	var empAddress;

// 	// The return will be the value obtained when the module is acquired by the required statemnt that is called by the user.

// 	return {
// 		empId: empId,
// 		empName: empName,
// 		empAddress: empAddress
// 	}
// }) ();


// Use this for creating objects with constructors ...

module.exports = employee;

function employee(id, name, address) {
	this.empId = id;
	this.empName = name;
	this.empAddress = address;
	this.display = " Employee details : Id - " + id + ", Name - " + name + " , Address - " + address;
}