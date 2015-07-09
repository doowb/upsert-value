/*!
 * upsert-value <https://github.com/doowb/upsert-value>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var lazy = require('lazy-cache')(require);
var put = lazy('put-value');
var set = lazy('set-value');
var has = lazy('has-own-deep');

/**
 * Update or set a value on the given object with the given key path.
 *
 * ```js
 * var obj = {};
 * upsert(obj, 'a.b.c', 'foo');
 * //=> {a: {b: {c: 'foo'}}}
 * ```
 *
 * @param  {Object} `obj` Object to update/set.
 * @param  {String} `path` Key path to update/set.
 * @param  {*} `value` Value to update/set.
 * @return {Object} Update object.
 * @api public
 * @name  upsert
 */

module.exports = function upsert (obj, path, value) {
  if (has()(obj, path)) {
    return put()(obj, path, value);
  }
  return set()(obj, path, value);
};
