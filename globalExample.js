//This file contains a global methods that can be consumed by the js client....

addMethod = function(first, second) {
	return first + second;
}

// Every function returns an object in js which is used by the consumer. 

sqrtMethod = function(value) {
	return Math.sqrt(value);
}

// limitations of global methods:  hard to maintain as too many methods would be available and will not be modular. u should not make the global scope dirty. 
//Certain Nodejs global functions would give naming conflicts when u create global scoped objects.

// It is good to create the module either as an anonymous module or named module.

