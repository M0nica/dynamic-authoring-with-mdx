exports.ids = [8];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/context/CurrentSlideContext.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CurrentSlideContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  currentSlide: 0,
  setSlide: () => {}
});
function CurrentSlideProvider({
  children
}) {
  // Grab initial slide from hash (#) in URL
  const initialSlide =  false ? undefined : 0;
  const {
    0: currentSlide,
    1: setSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSlide);
  return __jsx(CurrentSlideContext.Provider, {
    value: {
      currentSlide,
      setSlide
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
}
const useCurrentSlide = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CurrentSlideContext);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CurrentSlideContext */ "./context/CurrentSlideContext.jsx");



const keys = {
  slide: 'next-mdx-deck-slide',
  page: 'next-mdx-deck-page'
};
const useStorage = () => {
  const {
    currentSlide,
    setSlide
  } = Object(_context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_2__["useCurrentSlide"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const currentPage = router.query && 'slide' in router.query && parseInt(router.query.slide, 10);
  const {
    0: focused,
    1: setFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /**
   * Checks when user enters (focus) or
   * leaves (blur) browser window/tab
   */

  const handleFocus = () => setFocused(true);

  const handleBlur = () => setFocused(false);
  /**
   * Updates route or context with local storage data
   * from event listener
   * @param {*} e
   */


  const handleStorageChange = e => {
    const n = parseInt(e.newValue, 10);
    const syncedSlide = localStorage.getItem(keys.slide); // if (focused) return

    if (Number.isNaN(n)) return;

    switch (e.key) {
      case keys.page:
        router.push(`/slides/${parseInt(n, 10)}#${syncedSlide}`);
        break;

      case keys.slide:
        window.location.hash = `#${n}`;
        setSlide(n);
        break;

      default:
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFocused(document.hasFocus());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!focused) window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    return () => {
      if (!focused) window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [focused]);
  /**
   * Sync localstorage with changes to slides or pages
   */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!focused) return;
    localStorage.setItem(keys.slide, currentSlide);
    localStorage.setItem(keys.page, currentPage);
  }, [focused, currentSlide, currentPage]);
};
const Storage = () => {
  useStorage();
  return false;
};
/* harmony default export */ __webpack_exports__["default"] = (useStorage);

/***/ })

};;
//# sourceMappingURL=8.js.map