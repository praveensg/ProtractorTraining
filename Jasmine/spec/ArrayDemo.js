var fs = require('fs');
var code = module.exports = {};
code.getArray = function() {
	// contain the mock objects to test....
	var data = fs.readFileSync('spec/EmpData.json');
	var contents = JSON.parse(data.toString())
	return contents;
}

code.findEmp = function(name){
	var data = fs.readFileSync('spec/EmpData.json');
	var json = JSON.parse(data.toString());
	for(var i=0; i<json.length; i++) {
		if(json[i].Empname === name) {
			return json[i];
		}
	}
	return null;
}