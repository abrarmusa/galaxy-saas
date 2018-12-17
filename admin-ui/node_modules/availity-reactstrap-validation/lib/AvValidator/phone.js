'use strict';

exports.__esModule = true;
exports.default = validate;

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NANP_REGEXP = /^(\+?1[\.\-\s]?)?\(?[2-9]\d{2}[\)\.\-\s]?\s?[2-9]\d{2}[\.\-\s]?\d{4}$/;

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? NANP_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}