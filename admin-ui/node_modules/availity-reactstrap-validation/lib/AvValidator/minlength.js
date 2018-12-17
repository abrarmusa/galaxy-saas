'use strict';

exports.__esModule = true;
exports.default = validate;

var _toNumber = require('lodash/toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _utils.isEmpty)(value)) return true;

  var length = value.length;

  return length >= (0, _toNumber2.default)(constraint.value) || constraint.errorMessage || false;
}