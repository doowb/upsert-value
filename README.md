# upsert-value [![NPM version](https://badge.fury.io/js/upsert-value.svg)](http://badge.fury.io/js/upsert-value)  [![Build Status](https://travis-ci.org/doowb/upsert-value.svg)](https://travis-ci.org/doowb/upsert-value)

> Update or set nested values and any intermediaries with dot notation (`'a.b.c'`) paths.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i upsert-value --save
```

## Usage

```js
var upsert = require('upsert-value');
```

## API

<!-- add a path or glob pattern for files with code comments to use for docs  -->

### [upsert](index.js#L32)

Update or set a value on the given object with the given key path.

**Params**

* `obj` **{Object}**: Object to update/set.
* `path` **{String}**: Key path to update/set.
* `value` **{*}**: Value to update/set.
* `returns` **{Object}**: Update object.

**Example**

```js
var obj = {};
upsert(obj, 'a.b.c', 'foo');
//=> {a: {b: {c: 'foo'}}}
```

## Related projects

<!-- add an array of related projects, then un-escape the helper -->

* [has-own-deep](https://github.com/jonschlinkert/has-own-deep): Returns true if an object has an own, nested property using dot notation paths ('a.b.c').
* [put-value](https://github.com/tunnckocore/put-value#readme): Update only existing values from an object, works with dot notation paths like `  a.b.c` and… [more](https://github.com/tunnckocore/put-value#readme)
* [set-value](https://github.com/jonschlinkert/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/upsert-value/issues/new)

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2015 Brian Woodward
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 09, 2015._