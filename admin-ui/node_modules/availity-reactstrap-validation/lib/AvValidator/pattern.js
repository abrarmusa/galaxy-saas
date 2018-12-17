'use strict';

exports.__esModule = true;
exports.default = validate;

var _isRegExp = require('lodash/isRegExp');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression

function asRegExp(pattern) {
  // if regex then return it
  if ((0, _isRegExp2.default)(pattern)) {
    return pattern;
  }

  // if string then test for valid regex then convert to regex and return
  var match = pattern.match(REGEX);
  if (match) {
    return new RegExp(match[1], match[2]);
  }

  return new RegExp(pattern);
}

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

  return values.some(function (expression) {
    return asRegExp(expression).test(value);
  }) || constraint.errorMessage || false;
}