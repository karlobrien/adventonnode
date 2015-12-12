var expect = require('chai').expect;
var m = require('../src/puzzle');


describe("Day2", function() {
	
	describe("wrappingPaper", function() {
                it("How much wrapping paper 2X3X4", function() {
                        var paper = m.day2Part1("2x3x4");
                        
                        expect(paper).to.equal(58);
                })
                
                it("How much wrapping paper 2x3x5\n5x2x7", function() {
                        var paper = m.day2Part1("2x3x5\n5x2x7");
                        expect(paper).to.equal(72);
                })
        })

});