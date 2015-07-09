'use strict';

var upsert = require('./');
var obj = {};
upsert(obj, 'a.b.c', 'foo');
console.log(obj);
//=> {a: {b: {c: 'foo'}}}
