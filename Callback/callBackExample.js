// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4"); 
// synchronous coding where each line executes after the previous line executes successfully

console.log("1");

setTimeout((() => {
	console.log("2");
}), 3000);
console.log("3");
console.log("4");

// Promise is an object whose value is not known when it is created but 
//allows to be notified later once the value is obtained/generated. In this case, 
//the object also provides an option of the handling a failure of the value generation does not happen.....

function addFunc(v1, v2) {
	return v1 + v2;
}

const waiter = new Promise((resolver, reject) => {
	console.log("Doing some big task....");

	var answer = addFunc(123, 234);
	if(answer == (123+234)) {
		resolver(answer);
	} else {
		reject('Adding is not done');
	}
})