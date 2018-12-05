// All your nodejs code will be in 2 parts: 1st part is the sever part that 
//provides the services in the form of objects and methods.
// 2nd part is the client part which consumens the services provided by the 1st part.

//JS code is exposed to the clients thro modules. modules are independent units with little or 
//less dependencies on other external components that will perform certain operations related to ur project/domain.

// Modules are exported by the servers and clients use require moehtod to load those modules into their JS files.

// functions can be created globally, anonymous and named way.

require('./globalExample') // tells the node environment that we are using a user defined module.
// As the methods are declared within any module defn, it is accessible directly after the require statement.

var emp = require('./employee');
emp.Id = 123;
emp.empName = 'Praveen';

console.log(emp.empName);

var emp2 = require('./employee');
console.log(emp2.empId);

// console.log(addMethod(123, 234)); // invoking the methods...

// console.log(sqrtMethod(25));

// To test run this code , u shud open the command prompt and run the command: node filename.js

var emp = require('./employee');

// var e1 = new emp(123, 'Phani', );