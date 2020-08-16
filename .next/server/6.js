exports.ids = [6];
exports.modules = {

/***/ "./components/PresentationMode.jsx":
/*!*****************************************!*\
  !*** ./components/PresentationMode.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PresentationMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/modes */ "./constants/modes.js");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/PresentationMode.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PresentationFrame = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  padding: 3rem;
  max-height: 100vh;
`;
const SlideWindow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 65%;
  overflow-y: scroll;

  & > div {
    padding: 1rem;
    max-height: 80vh;
  }

  #slide {
    border: 1px solid #fff;
    align-items:flex-start;
    height:auto;
  }
`;
const Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 35%;

  & > div {
    padding: 1rem;
  }
`;
const SpeakerNotesWindow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  border: 1px solid #fff;

  font-size: 16px;

  & > div {
    padding: 1rem;
  }
`;
function PresentationMode({
  mode,
  notes,
  currentSlide,
  children
}) {
  if (mode === _constants_modes__WEBPACK_IMPORTED_MODULE_2__["MODES"].SPEAKER) {
    return __jsx(PresentationFrame, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx(SlideWindow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, children)), __jsx(Sidebar, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx(SpeakerNotesWindow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, notes[currentSlide])))));
  }

  return children;
}

/***/ }),

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

/***/ })

};;
//# sourceMappingURL=6.js.map