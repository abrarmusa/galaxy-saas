'use strict';
var should = require('chai').should();
var consecutive = require('../');

describe('consecutive begins defined', function () {

  describe('begins with 0, base 10 (by default)', function () {

    beforeEach(function () {
      this.c = consecutive();
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal(0);
      id = this.c();
      id.should.equal(1);
      id = this.c();
      id.should.equal(2);
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal(i);
      }

      done();
    });
  });

  describe('begins with 11, base 10', function () {

    beforeEach(function () {
      this.c = consecutive(11);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal(11);
      id = this.c();
      id.should.equal(12);
      done();
    });

    it('for series', function (done) {
      for (var i = 11; i < 1000; i++) {
        this.c().should.equal(i);
      }

      done();
    });
  });

  describe('begins with 0, base 2', function () {

    beforeEach(function () {
      this.c = consecutive(null, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('0');
      id = this.c();
      id.should.equal('1');
      id = this.c();
      id.should.equal('10');
      id = this.c();
      id.should.equal('11');
      done();
    });

  });

  describe('begins with 11, base 2', function () {

    beforeEach(function () {
      this.c = consecutive(11, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('11');
      id = this.c();
      id.should.equal('100');
      id = this.c();
      id.should.equal('101');
      id = this.c();
      id.should.equal('110');
      done();
    });

  });

  describe('begins with 0, base 16', function () {

    beforeEach(function () {
      this.c = consecutive(null, 16);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('0');
      id = this.c();
      id.should.equal('1');
      id = this.c();
      id.should.equal('2');
      done();
    });

  });

  describe('begins with "b", base 16', function () {

    beforeEach(function () {
      this.c = consecutive('b', 16);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('b');
      id = this.c();
      id.should.equal('c');
      id = this.c();
      id.should.equal('d');
      id = this.c();
      id.should.equal('e');
      done();
    });

    it('for series', function (done) {
      for (var i = 11; i < 1000; i++) {
        this.c().should.equal(i.toString(16));
      }

      done();
    });
  });

});

describe('consecutive base defined', function () {

  describe('base 2', function () {

    beforeEach(function () {
      this.c = consecutive(null, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal(i.toString(2));
      }

      done();
    });

  });

  describe('base 2, begins with 110', function () {

    beforeEach(function () {
      this.c = consecutive(110, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('110');
      id = this.c();
      id.should.equal('111');
      id = this.c();
      id.should.equal('1000');
      id = this.c();
      id.should.equal('1001');
      done();
    });

    it('for series', function (done) {
      for (var i = 6; i < 1000; i++) {
        this.c().should.equal(i.toString(2));
      }

      done();
    });
  });

  describe('base 16', function () {

    beforeEach(function () {
      this.c = consecutive(null, 16);
    });

    afterEach(function () {
      this.c = null;
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal(i.toString(16));
      }

      done();
    });
  });

  describe('base 16, begins with "fe"', function () {

    beforeEach(function () {
      this.c = consecutive('fe', 16);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('fe');
      id = this.c();
      id.should.equal('ff');
      id = this.c();
      id.should.equal('100');
      id = this.c();
      id.should.equal('101');
      done();
    });

    it('for series', function (done) {
      for (var i = 254; i < 1000; i++) {
        this.c().should.equal(i.toString(16));
      }

      done();
    });
  });

});

describe('consecutive incremental defined', function () {

  describe('increment 2, begins with 0, base 10', function () {

    beforeEach(function () {
      this.c = consecutive(null, null, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal(0);
      id = this.c();
      id.should.equal(2);
      id = this.c();
      id.should.equal(4);
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal(i * 2);
      }

      done();
    });
  });

  describe('increment 4, begins with 4, base 10', function () {

    beforeEach(function () {
      this.c = consecutive(4, null, 4);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal(4);
      id = this.c();
      id.should.equal(8);
      id = this.c();
      id.should.equal(12);
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal(i * 4 + 4);
      }

      done();
    });
  });

  describe('increment 2, begins with 0, base 2', function () {

    beforeEach(function () {
      this.c = consecutive(null, 2, 2);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('0');
      id = this.c();
      id.should.equal('10');
      id = this.c();
      id.should.equal('100');
      id = this.c();
      id.should.equal('110');
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal((i * 2).toString(2));
      }

      done();
    });
  });

  describe('increment 4, begins with 100, base 2', function () {

    beforeEach(function () {
      this.c = consecutive(100, 2, 4);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('100');
      id = this.c();
      id.should.equal('1000');
      id = this.c();
      id.should.equal('1100');
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal((i * 4 + 4).toString(2));
      }

      done();
    });
  });

  describe('increment 7, begins with 0, base 16', function () {

    beforeEach(function () {
      this.c = consecutive(null, 16, 7);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('0');
      id = this.c();
      id.should.equal('7');
      id = this.c();
      id.should.equal('e');
      id = this.c();
      id.should.equal('15');
      id = this.c();
      id.should.equal('1c');
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal((i * 7).toString(16));
      }

      done();
    });
  });

  describe('increment 4, begins with "fb", base 16', function () {

    beforeEach(function () {
      this.c = consecutive('fb', 16, 4);
    });

    afterEach(function () {
      this.c = null;
    });

    it('simple usage', function (done) {
      var id = this.c();
      id.should.equal('fb');
      id = this.c();
      id.should.equal('ff');
      id = this.c();
      id.should.equal('103');
      done();
    });

    it('for series', function (done) {
      for (var i = 0; i < 1000; i++) {
        this.c().should.equal((i * 4 + 251).toString(16));
      }

      done();
    });
  });

});
