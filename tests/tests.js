const assert = require('chai').assert;
const myApp = require('../src/main.js');
describe("aritGeo", function(){
    describe("Handles valid input", function(){
        it("Should return arithmetic", function(){
        assert.equal(myApp.aritGeo([5, 7, 9, 11, 13, 15]),"Arithmetic")
        });
        it("Should return Geometric", function(){
        assert.equal(myApp.aritGeo([2, 4, 8, 16]),"Geometric")
        });
        it("Should return geomtric", function(){
        assert.equal(myApp.aritGeo([16, 8, 4, 2]),"Geometric")
        });
        it("Should return Arithmetic", function(){
        assert.equal(myApp.aritGeo([15, 13, 11, 9, 7]),"Arithmetic")
        });
        it("should return geometric", function(){
        assert.equal(myApp.aritGeo([3, 9, 27]),"Geometric")
        });
    });
    describe("Handles invalid input", function(){
        it("Should return 'invalid input'", function(){
        assert.equal(myApp.aritGeo("demo"),-1)
        });
        it("Should fail", function(){
        assert.equal(myApp.aritGeo([1]),-1)
        });
        it("should return zero if no input", function(){
            assert.equal(myApp.aritGeo(""),0)
        });
        it("should return invalid", function(){
        assert.equal(myApp.aritGeo([9, 28, 13, 10]),-1)
        });
        it("Should return negative 1 (-1)", function(){
            assert.equal(myApp.aritGeo([10, 28, 12, 9]),-1)
            });
    });
})