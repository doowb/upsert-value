'use strict';

var assert = require('assert');
var upsert = require('./');

describe('upsert', function () {
  it('should set a value that does not exist', function () {
    var actual = upsert({}, 'a.b.c', 'foo');
    assert.deepEqual(actual, {a: {b: {c: 'foo'}}});
  });

  it('should update a value that already exists', function () {
    var actual = upsert({a: {b: {c: 'foo'}}}, 'a.b.c', 'bar');
    assert.deepEqual(actual, {a: {b: {c: 'bar'}}});
  });
});
