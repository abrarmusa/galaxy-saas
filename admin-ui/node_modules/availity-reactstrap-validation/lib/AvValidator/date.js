'use strict';

exports.__esModule = true;
exports.default = validate;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Format needs to be ' + format : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var date = (0, _moment2.default)(value, [_utils.isoDateFormat, format], true);

  return date.isValid() || errorMessage;
}