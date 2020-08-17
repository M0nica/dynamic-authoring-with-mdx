exports.ids = [10];
exports.modules = {

/***/ "./components/ReactDiff.jsx":
/*!**********************************!*\
  !*** ./components/ReactDiff.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_diff_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-diff-viewer */ "react-diff-viewer");
/* harmony import */ var react_diff_viewer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_diff_viewer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/ReactDiff.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const oldCode = `
const a = 10
const b = 10
const c = () => console.log('foo')

if(a > 10) {
  console.log('bar')
}

console.log('done')
`;
const newCode = `
const a = 10
const boo = 10

if(a === 10) {
  console.log('bar')
}
`;
class Diff extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "render", () => {
      return __jsx(react_diff_viewer__WEBPACK_IMPORTED_MODULE_1___default.a, {
        oldValue: oldCode,
        newValue: newCode,
        splitView: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      });
    });
  }

}

/***/ })

};;
//# sourceMappingURL=10.js.map