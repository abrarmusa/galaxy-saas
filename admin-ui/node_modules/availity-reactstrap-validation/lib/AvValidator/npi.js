'use strict';

exports.__esModule = true;
exports.default = validate;

var _utils = require('./utils');

var INTEGER_REGEX = /^\d*$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  value = value + '';

  if (!INTEGER_REGEX.test(value) || value.length !== 10) {
    return errorMessage;
  }

  var firstDigit = value.charAt(0);
  if (['1', '2', '3', '4'].indexOf(firstDigit) < 0) {
    return errorMessage;
  }

  var digit = parseInt(value.charAt(9), 10);
  value = value.substring(0, 9);
  value = '80840' + value;

  var alternate = true;
  var total = 0;

  for (var i = value.length; i > 0; i--) {
    var next = parseInt(value.charAt(i - 1), 10);
    if (alternate) {
      next = next * 2;
      if (next > 9) {
        next = next % 10 + 1;
      }
    }
    total += next;
    alternate = !alternate;
  }

  var roundUp = Math.ceil(total / 10) * 10;
  var calculatedCheck = roundUp - total;

  return calculatedCheck === digit || errorMessage;
}