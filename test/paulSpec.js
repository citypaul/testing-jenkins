describe('Some tests', function() {
	"use strict";

	it('should not fail', function() {
		expect(false).toBeFalsy();
	});
	
	it('should pass', function () {
		expect(true).toBeTruthy(); 
	});

    it('should add up', function () {
       expect(1+1).toEqual(2); 
    });
});
