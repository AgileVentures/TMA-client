'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {
  this.World = require('../support/world').World;

  this.Given(/^I am on the homepage$/, function (callback) {
    browser.get('#/');
    callback();
  });

  this.Then(/^I should see a navbar$/, function (callback) {
    var navbar = element(by.id('navbar'));
    expect(navbar.isPresent()).to.eventually.equal(true).and.notify(callback);
    callback();
  });
};
