//restService.js: If UR Apps have to give data which will be consumed by other apps, then we provide that data thro HTTP verbs: GET(Extracting), POST(Adding), PUT(Updating) and DELETE(Removing) the data . The data will be in the form of both XML and JSON...
//Most of the server side applications will render the data in the form REST services and JS applications on their client will access this data in ajax format(async) and display it in their UIs...
//For performing web related activites, U use http module...
var http = require('http');
var data = require('./EmpData.json');


http.createServer(function(req, res){
	res.setHeader('Access-Control-Allow-Origin', "*");
	res.end(JSON.stringify(data));
	
}).listen(1235);
