exports.ids = [5];
exports.modules = {

/***/ "./components/Callout.jsx":
/*!********************************!*\
  !*** ./components/Callout.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Callout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _callout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callout.module.css */ "./components/callout.module.css?aba4");
/* harmony import */ var _callout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_callout_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/Callout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* @jsx jsx */



function Callout({
  variant = 'info',
  children
}) {
  const classes = `${_callout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.infoBox} ${_callout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[variant]}`;
  const variantStyles = {
    info: {
      borderLeft: '4px solid #b4aaff',
      backgroundColor: 'rgba(224, 226, 255, 0.5)',
      color: '#2a2135'
    },
    danger: {
      borderLeft: '4px solid #ff7828',
      backgroundColor: 'rgb(253, 236, 234)'
    },
    garden: {
      borderLeft: '4px solid #72bc23',
      backgroundColor: 'rgb(249, 253, 234)'
    },
    book: {
      borderLeft: '4px solid #44a9ba',
      backgroundColor: 'rgb(234, 248, 253);'
    }
  };
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("aside", {
    css: _objectSpread({
      margin: '1.5rem auto',
      borderRadius: '0px 10px 10px 0px',
      padding: '0.8em 1em',
      lineHeight: '1.2',
      textAlign: 'center',
      position: 'relative',
      clear: 'both',
      width: '80%'
    }, variantStyles[variant]),
    className: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./components/callout.module.css?aba4":
/*!***************************************!*\
  !*** ./components/callout.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"infoBox": "callout_infoBox__ZLkMI",
	"danger": "callout_danger__2J70g",
	"info": "callout_info__7UeeR",
	"garden": "callout_garden__1EWNe",
	"book": "callout_book__3bDTN"
};

/***/ })

};;
//# sourceMappingURL=5.js.map