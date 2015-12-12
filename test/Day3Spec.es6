//import { expect } from 'chai';
var expect = require('chai').expect;
//var assert = require('assert');

//var tests = require('../src/puzzle.js');
//import * as m from '../src/puzzle';
var m = require('../src/puzzle');

describe("Day3", function() {
        
        describe("numberPresents", function() {
                it("How much wrapping paper ^>v<", function() {
                        var paper = m.numberPresents("^>v<");
                        expect(paper).to.equal(4);
                })
                
                it("How much wrapping paper ^v^v^v^v^v", function() {
                        var paper = m.numberPresents("^v^v^v^v^v");
                        expect(paper).to.equal(2);
                })
                
            it("How much wrapping paper ^v^v^v^v^v", function() {
                        var paper = m.numberPresents(">");
                        expect(paper).to.equal(2);
                })
        })
});
