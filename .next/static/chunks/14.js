(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ }),

/***/ "./hooks/useStorage.js":
/*!*****************************!*\
  !*** ./hooks/useStorage.js ***!
  \*****************************/
/*! exports provided: useStorage, Storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return useStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CurrentSlideContext */ "./context/CurrentSlideContext.jsx");



var keys = {
  slide: 'next-mdx-deck-slide',
  page: 'next-mdx-deck-page'
};
var useStorage = function useStorage() {
  var _useCurrentSlide = Object(_context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_2__["useCurrentSlide"])(),
      currentSlide = _useCurrentSlide.currentSlide,
      setSlide = _useCurrentSlide.setSlide;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var currentPage = router.query && 'slide' in router.query && parseInt(router.query.slide, 10);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      focused = _useState[0],
      setFocused = _useState[1];
  /**
   * Checks when user enters (focus) or
   * leaves (blur) browser window/tab
   */


  var handleFocus = function handleFocus() {
    return setFocused(true);
  };

  var handleBlur = function handleBlur() {
    return setFocused(false);
  };
  /**
   * Updates route or context with local storage data
   * from event listener
   * @param {*} e
   */


  var handleStorageChange = function handleStorageChange(e) {
    var n = parseInt(e.newValue, 10);
    var syncedSlide = localStorage.getItem(keys.slide); // if (focused) return

    if (Number.isNaN(n)) return;

    switch (e.key) {
      case keys.page:
        router.push("/slides/".concat(parseInt(n, 10), "#").concat(syncedSlide));
        break;

      case keys.slide:
        window.location.hash = "#".concat(n);
        setSlide(n);
        break;

      default:
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFocused(document.hasFocus());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!focused) window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    return function () {
      if (!focused) window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [focused]);
  /**
   * Sync localstorage with changes to slides or pages
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!focused) return;
    localStorage.setItem(keys.slide, currentSlide);
    localStorage.setItem(keys.page, currentPage);
  }, [focused, currentSlide, currentPage]);
};
var Storage = function Storage() {
  useStorage();
  return false;
};
/* harmony default export */ __webpack_exports__["default"] = (useStorage);

/***/ })

}]);
//# sourceMappingURL=14.js.map