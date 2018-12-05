var list = require('./AnonymousModule');
var emp = require('./employee');

var e1 = new emp(123, 'Phaniraj', 'Bangalore');
var e2 = new emp(124, 'Praveen', 'Bangalore');
var e3 = new emp(125, 'govind', 'Bangalore');
var e4 = new emp(126, 'raj', 'Bangalore');

list.addNew(e1);
list.addNew(e2);
list.addNew(e3);
list.addNew(e4);

var data = list.getAll();
data.forEach((e) => console.log(e.empName));


// If a created module has to be exported to a larger audience, you could place the code in tghe npm repository. 
// node package manager is a large repository of node modules that developers can share and consume external modules. Major domain specific modules are available thro npm only.
// npm needs a registered user to allow adding and removing the modules. modulenames are to be unique for the repository...


//npm is available to u when u install nodejs.

// 3 steps to convert ur module to node modules
// first : make ur module a node package.  
//  --- a node module accompanied witha a package.json will make it a node package. use command: npm init to create a package.json.

//second :  then thro command prompt create the user for login into the npm 

//third: publish ur module to the npm...

