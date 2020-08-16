(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./constants/modes.js":
/*!****************************!*\
  !*** ./constants/modes.js ***!
  \****************************/
/*! exports provided: MODES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODES", function() { return MODES; });
var MODES = {
  SLIDESHOW: 'slideshow',
  SPEAKER: 'speaker'
};
/* harmony default export */ __webpack_exports__["default"] = (MODES);

/***/ }),

/***/ "./context/ModeContext.jsx":
/*!*********************************!*\
  !*** ./context/ModeContext.jsx ***!
  \*********************************/
/*! exports provided: ModeContext, ModeProvider, useMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeContext", function() { return ModeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeProvider", function() { return ModeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMode", function() { return useMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/modes */ "./constants/modes.js");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/context/ModeContext.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ModeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function ModeProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_modes__WEBPACK_IMPORTED_MODULE_2__["MODES"].SLIDESHOW),
      mode = _useState[0],
      setMode = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var newMode = router.query.mode;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (newMode) setMode(newMode);
  }, [newMode]);
  return __jsx(ModeContext.Provider, {
    value: {
      mode: mode,
      setMode: setMode
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, children);
}
var useMode = function useMode() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ModeContext);
};

/***/ })

}]);
//# sourceMappingURL=13.js.map