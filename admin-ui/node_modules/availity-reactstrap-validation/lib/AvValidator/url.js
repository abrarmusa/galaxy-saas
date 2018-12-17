'use strict';

exports.__esModule = true;
exports.default = validate;

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://gist.github.com/dperini/729294
var URL_REGEXP = new RegExp('^' +
// protocol identifier
'(?:(?:https?|ftps?|sftp)://)' +
// user:pass authentication
'(?:\\S+(?::\\S*)?@)?' + '(?:' +
// IP address exclusion
// private & local networks
'(?!(?:10|127)(?:\\.\\d{1,3}){3})' + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
'(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' + '|' +
// host name
'(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +
// domain name
'(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +
// TLD identifier
'(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
// TLD may end with dot
'\\.?' + ')' +
// port number
'(?::\\d{2,5})?' +
// resource path
'(?:[/?#]\\S*)?' + '$', 'i');

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$pattern = _ref.pattern,
      pattern = _ref$pattern === undefined ? URL_REGEXP : _ref$pattern,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? false : _ref$errorMessage;

  return (0, _pattern2.default)(value, context, { value: pattern, errorMessage: errorMessage });
}