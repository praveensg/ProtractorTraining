// settings required for ur protractor to run....

exports.config ={
	'framework' : 'jasmine',
	'seleniumAddress' : 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	multiCapabilities:[{
		browserName : 'Edge'
	}, {
		browserName : 'chrome'
	}]
}