'use strict';

exports.__esModule = true;
exports.default = validate;

var _utils = require('./utils');

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _utils.isEmpty)(value) || value === (0, _get2.default)(context, constraint.value) || constraint.errorMessage || false;
}