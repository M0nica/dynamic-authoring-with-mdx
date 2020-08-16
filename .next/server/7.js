exports.ids = [7];
exports.modules = {

/***/ "./constants/modes.js":
/*!****************************!*\
  !*** ./constants/modes.js ***!
  \****************************/
/*! exports provided: MODES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODES", function() { return MODES; });
const MODES = {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/modes */ "./constants/modes.js");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/context/ModeContext.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ModeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function ModeProvider({
  children
}) {
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_modes__WEBPACK_IMPORTED_MODULE_2__["MODES"].SLIDESHOW);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const newMode = router.query.mode;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newMode) setMode(newMode);
  }, [newMode]);
  return __jsx(ModeContext.Provider, {
    value: {
      mode,
      setMode
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, children);
}
const useMode = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ModeContext);

/***/ })

};;
//# sourceMappingURL=7.js.map