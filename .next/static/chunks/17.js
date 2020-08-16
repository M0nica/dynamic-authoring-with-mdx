(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./context/CurrentSlideContext.jsx":
/*!*****************************************!*\
  !*** ./context/CurrentSlideContext.jsx ***!
  \*****************************************/
/*! exports provided: CurrentSlideContext, CurrentSlideProvider, useCurrentSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSlideContext", function() { return CurrentSlideContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSlideProvider", function() { return CurrentSlideProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentSlide", function() { return useCurrentSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/context/CurrentSlideContext.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CurrentSlideContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  currentSlide: 0,
  setSlide: function setSlide() {}
});
function CurrentSlideProvider(_ref) {
  var children = _ref.children;
  // Grab initial slide from hash (#) in URL
  var initialSlide =  true && window.location.hash ? parseInt(window.location.hash.replace('#', '')) : 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSlide),
      currentSlide = _useState[0],
      setSlide = _useState[1];

  return __jsx(CurrentSlideContext.Provider, {
    value: {
      currentSlide: currentSlide,
      setSlide: setSlide
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
}
var useCurrentSlide = function useCurrentSlide() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CurrentSlideContext);
};

/***/ })

}]);
//# sourceMappingURL=17.js.map