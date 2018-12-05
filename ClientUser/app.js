var code = require('sg_employee_module');
console.log(code);

code.addNew(123, 'Phaniraj', 'Bangalore');
// var e2 = new emp(124, 'Praveen', 'Bangalore');
// var e3 = new emp(125, 'govind', 'Bangalore');
// var e4 = new emp(126, 'raj', 'Bangalore');

var data = code.getAll();
console.log(data);

require('./test');
console.log(display());