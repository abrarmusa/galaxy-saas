
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![js-standard-style][standard-style-image]][standard-style-url]
[![Build Status: Linux][travis-image]][travis-url]
[![Build Status: Windows][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]


# consecutive

### Get consecutive numbers

 v5.0.4


## Installation
```$ npm install --save consecutive```


## Usage

```javascript
var consecutive = require('consecutive');

var next = consecutive();
console.log(next(), next(), next());
//=> 0 1 2

//starts with 5
var begin = consecutive(5);
console.log(begin(), begin(), begin());
//=> 5 6 7

//base 2
var base2 = consecutive(null, 2);
console.log(base2(), base2(), base2());
//=> 0 1 10

//base 16, starts with 9ffa, step 3
var base16 = consecutive('9ffa', 16, 3);
console.log(base16(), base16(), base16());
//=> 9ffa 9ffd a000

```


## API

### consecutive(begin, base, step)

Returns a function that when called will return a consecutive number, counting on base and step.

 name | optional | default value | description
------|----------|---------------|-------------
begin | yes | 0 | Number to start from
base | yes | 10 | An integer between 2 and 36 specifying the base to use for representing numeric values
step | yes | 1 | Number to increment


## Tests

```npm test```


## Change Log

[all changes](CHANGELOG.md)


## Created by

Dimitry, 2@ivanoff.org.ua

```curl -A cv ivanoff.org.ua```


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[standard-style-image]: https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat
[standard-style-url]: https://github.com/airbnb/javascript

[npm-url]: https://npmjs.org/package/consecutive
[npm-version-image]: http://img.shields.io/npm/v/consecutive.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/consecutive.svg?style=flat

[travis-url]: https://travis-ci.org/ivanoff/consecutive
[travis-image]: https://travis-ci.org/ivanoff/consecutive.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/ivanoff/consecutive/branch/master
[appveyor-image]: https://ci.appveyor.com/api/projects/status/lp3nhnam1eyyqh33/branch/master?svg=true

[coveralls-url]: https://coveralls.io/github/ivanoff/consecutive
[coveralls-image]: https://coveralls.io/repos/github/ivanoff/consecutive/badge.svg
