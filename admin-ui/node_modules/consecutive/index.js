/*!
 * consecutive
 * Get consecutive numbers
 * Copyright(c) 2017 ivanoff .$ curl -A cv ivanoff.org.ua
 * MIT Licensed
 */
'use strict';

module.exports = function (begin, base, inc) {
  var number = begin || 0;
  if (typeof base !== 'number') base = 10;
  if (typeof inc !== 'number') inc = 1;

  return function () {
    var res;
    if (typeof base === 'undefined' || base === 10) {
      res = number;
      number += inc;
    } else {
      res = number.toString();
      number = (parseInt(number, base) + inc).toString(base);
    }

    return res;
  };
};
