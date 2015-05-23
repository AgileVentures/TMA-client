'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var assert = require('assert');

module.exports = function() {
  this.World = require('../support/world').World;

  this.Given(/^I am on the homepage$/, function (callback) {
    browser.get('#/');
    callback();
  });

  this.Then(/^I should see a navbar$/, function (callback) {
    var navbar = element(by.id('navbar'));

    // navbar.isElementPresent().then(function(v) {
    //   expect(v).to.be.true;
    // });
    // expect(navbar.isElementPresent().then).to.be.true;
    // assert.equal(element(by.css('#navbar')).isPresent(), true);
    callback.pending();
  });
};
