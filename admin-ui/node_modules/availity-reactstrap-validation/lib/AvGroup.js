'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvGroup = function (_Component) {
  (0, _inherits3.default)(AvGroup, _Component);

  function AvGroup(props) {
    (0, _classCallCheck3.default)(this, AvGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { input: { props: {} } };
    return _this;
  }

  AvGroup.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    this.FormCtrl = (0, _extends3.default)({}, this.context.FormCtrl);
    var registerValidator = this.FormCtrl.register;
    this.FormCtrl.register = function (input) {
      _this2.setState({ input: input });
      registerValidator(input, _this2.update.bind(_this2, input));
    };
    return {
      Group: {
        getInput: function getInput() {
          return _this2.state.input;
        },
        getInputState: this.getInputState.bind(this)
      },
      FormCtrl: this.FormCtrl
    };
  };

  AvGroup.prototype.getInputState = function getInputState() {
    return this.context.FormCtrl.getInputState(this.state.input.props.name);
  };

  AvGroup.prototype.update = function update(input) {
    if (input && input.setState) input.setState.call(input, {});
    this.setState({});
  };

  AvGroup.prototype.render = function render() {
    var validation = this.getInputState();
    var classname = (0, _classnames2.default)(this.props.className, validation.color && 'text-' + validation.color);
    return _react2.default.createElement(_reactstrap.FormGroup, (0, _extends3.default)({ className: classname }, this.props));
  };

  return AvGroup;
}(_react.Component);

AvGroup.propTypes = (0, _assign2.default)({}, _reactstrap.FormGroup.propTypes);
AvGroup.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired
};
AvGroup.childContextTypes = {
  Group: _propTypes2.default.object.isRequired,
  FormCtrl: _propTypes2.default.object.isRequired
};
exports.default = AvGroup;