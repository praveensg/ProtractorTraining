describe('First Demo on Protractor', function(){

	it('Should have a title', function() {
		browser.ignoreSynchronization = true; // this ensures that the protractor not to 
		// wait for any angular promises like $http requests to resolve the page and the
		// page execution could happen without loading any angular code...
		browser.get('http://www.google.com');
		expect(browser.getTitle()).toBe("Google");
	})

	describe('This is my second test', function(){
		browser.actions().sendKeys(protractor.Key.CONTROL + 'T').perform();
		it('Should add 2 numbers', () => {
			browser.ignoreSynchronization = true; 
			browser.get('http://localhost:4200');
			element(by.model('first')).sendKeys(5);
			element(by.model('second')).sendKeys(5);
			element(by.id('getResult')).click();
			browser.sleep(12000);
			expect(element(by.model('result')).getText()).toEqual(10);
		})
	})
})