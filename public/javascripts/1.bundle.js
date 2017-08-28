webpackJsonp([1],{

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Title = __webpack_require__(703);

var _Title2 = _interopRequireDefault(_Title);

var _Divider = __webpack_require__(168);

var _Divider2 = _interopRequireDefault(_Divider);

var _reactFlexboxGrid = __webpack_require__(285);

var _Paper = __webpack_require__(24);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paperStyles = {
  padding: '20px',
  marginBottom: '20px'
};

var ShortsList = function ShortsList() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      _reactFlexboxGrid.Row,
      null,
      React.createElement(
        _reactFlexboxGrid.Col,
        { md: 12 },
        React.createElement(_Title2.default, { title: '\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u043C\u0435\u0442\u0440\u0430\u0436\u043A\u0438', type: 'h2' }),
        React.createElement(_Divider2.default, null)
      )
    ),
    React.createElement(
      _reactFlexboxGrid.Row,
      null,
      React.createElement(
        _reactFlexboxGrid.Col,
        { md: 6 },
        React.createElement(
          _Paper2.default,
          { style: paperStyles, zDepth: 2 },
          'Hello'
        )
      ),
      React.createElement(
        _reactFlexboxGrid.Col,
        { md: 6 },
        React.createElement(
          _Paper2.default,
          { style: paperStyles, zDepth: 2 },
          'Hello'
        )
      ),
      React.createElement(
        _reactFlexboxGrid.Col,
        { md: 6 },
        React.createElement(
          _Paper2.default,
          { style: paperStyles, zDepth: 2 },
          'Hello'
        )
      ),
      React.createElement(
        _reactFlexboxGrid.Col,
        { md: 6 },
        React.createElement(
          _Paper2.default,
          { style: paperStyles, zDepth: 2 },
          'Hello'
        )
      )
    )
  );
};

exports.default = ShortsList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(704);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(705);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Title = function Title(_ref) {
  var _classNames;

  var title = _ref.title,
      type = _ref.type,
      marginBottom = _ref.marginBottom;

  var classList = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _styles2.default.h1, type === 'h1'), _defineProperty(_classNames, _styles2.default.h2, type === 'h2'), _defineProperty(_classNames, _styles2.default.h3, type === 'h3'), _defineProperty(_classNames, _styles2.default.h4, type === 'h4'), _defineProperty(_classNames, _styles2.default.h5, type === 'h5'), _defineProperty(_classNames, _styles2.default.h6, type === 'h6'), _defineProperty(_classNames, _styles2.default.shiftedBottom, marginBottom), _classNames));
  return React.createElement(
    'h2',
    { className: classList },
    title
  );
};

Title.defaultProps = {
  type: 'h3',
  marginBottom: true
};

Title.propTypes = {
  title: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  marginBottom: _propTypes2.default.bool
};

exports.default = Title;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 705:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"h1":"_18eEqxfmtLnJHOMbhC3YDD","h2":"_2lC5APZIO6TR1CbeCRSS0K","h3":"_3t21__S-agD6U6sGlNYjKv","h4":"_1qfJRoUI_qVJSU9VrVtAU6","h5":"_8cGR7G74V5mKbq2ZgJAcL","h6":"_2bpa18sGVIY0BZzECCiZRi","shiftedBottom":"_33OZ71KtufMBp4D6ezLR9u"};

/***/ })

});