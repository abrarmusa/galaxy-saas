'use strict';

exports.__esModule = true;
exports.default = validate;

var _utils = require('./utils');

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$value = _ref.value,
      enabled = _ref$value === undefined ? true : _ref$value,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return !enabled || !(0, _utils.isEmpty)(value) || errorMessage || false;
}