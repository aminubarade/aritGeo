const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("aritGeo", function(){
    
    describe("Handles valid input", function(){
        it("Should return arithmetic", function(){
        assert.equal(myApp.aritGeo([5, 7, 9, 11, 13, 15]),"arithmetic")
        });
    })

    describe("Handles empty input", function(){
        it("should return zero if no input", function(){
        assert.equal(myApp.aritGeo(" "),0)
        });
    })

    describe("Handles valid input", function(){
        it("Should return Geometric", function(){
        assert.equal(myApp.aritGeo([2, 4, 8, 16]),"Geometirc")
        });
    })

    describe("Handles input for non aritmetic and geometric sequence", function(){
        it("Should return negative 1 (-1)", function(){
        assert.equal(myApp.aritGeo([10, 28, 12, 9]),-1)
        });
    })

    describe("Handles valid input", function(){
        it("should retur geometric", function(){
        assert.equal(myApp.aritGeo([3, 9, 27]),"Geometric")
        });
    })

    describe("Handles invalid input", function(){
        it("Should return 'invalid input'", function(){
        assert.equal(myApp.aritGeo("arithmetic"),"invalid input")
        });
    })

    describe("handles single input", function(){
        it("Should fail", function(){
        assert.equal(myApp.aritGeo(1),"invalid")
        });
    })

    describe("Handles valid input", function(){
        it("Should return geomtric", function(){
        assert.equal(myApp.aritGeo([16, 8, 4, 2]),"Geometric")
        });
    })

    describe("Handles valid input", function(){
        it("Should return Arithmetic", function(){
        assert.equal(myApp.aritGeo()[15, 13, 11, 9, 7])
        });
    })

    describe("Handles invalid input", function(){
        it("should return invalid", function(){
        assert.equal(myApp.aritGeo([" "]),"value must be entered")
        });
    })
})