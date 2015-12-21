"use strict";
/* global describe, it */
/* jshint expr: true */

const { expect } = require("chai");
const Test = require("../lib");

describe("test", function() {
  it("test", function() {
    const test = new Test();
    expect(test.do()).to.be.true;
  });
});
