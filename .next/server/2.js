exports.ids = [2];
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

/***/ "./components/Cover.jsx":
/*!******************************!*\
  !*** ./components/Cover.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/Cover.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledCover = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div``;
function Cover({
  children
}) {
  return __jsx(StyledCover, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, children);
}

/***/ }),

/***/ "./components/MDXProvider.jsx":
/*!************************************!*\
  !*** ./components/MDXProvider.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_duotone_sea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea */ "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_duotone_sea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_duotone_sea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_SlidePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/SlidePage */ "./layouts/SlidePage.jsx");
/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cover */ "./components/Cover.jsx");
/* harmony import */ var _SpeakerNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerNotes */ "./components/SpeakerNotes.jsx");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Callout */ "./components/Callout.jsx");
/* harmony import */ var _ReactDiff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReactDiff */ "./components/ReactDiff.jsx");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/MDXProvider.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const mdComponents = {
  h1: props => __jsx("h1", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 18
    }
  })),
  pre: props => props.children,
  code: props => {
    const {
      className = ""
    } = props;
    const language = className.replace("language-", "");
    return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], _extends({
      className: className,
      language: language,
      style: react_syntax_highlighter_dist_cjs_styles_prism_duotone_sea__WEBPACK_IMPORTED_MODULE_3___default.a
    }, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }));
  },
  Callout: _Callout__WEBPACK_IMPORTED_MODULE_7__["default"],
  Cover: _Cover__WEBPACK_IMPORTED_MODULE_5__["default"],
  SlidePage: _layouts_SlidePage__WEBPACK_IMPORTED_MODULE_4__["default"],
  SpeakerNotes: _SpeakerNotes__WEBPACK_IMPORTED_MODULE_6__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
  components: mdComponents,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, children));

/***/ }),

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

/***/ }),

/***/ "./components/Slide.jsx":
/*!******************************!*\
  !*** ./components/Slide.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/components/Slide.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledSlide = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
`;
function Slide({
  children,
  id,
  className
}) {
  return __jsx(StyledSlide, {
    id: id,
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./components/SpeakerNotes.jsx":
/*!*************************************!*\
  !*** ./components/SpeakerNotes.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpeakerNotes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SpeakerNotes({
  children
}) {
  return children;
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

/***/ }),

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

/***/ }),

/***/ "./hooks/useEventListener.js":
/*!***********************************!*\
  !*** ./hooks/useEventListener.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedHandler.current = handler;
  }, [handler]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Make sure element supports addEventListener
    // On
    const isSupported = element && element.addEventListener;
    if (!isSupported) return; // Create event listener that calls handler function stored in ref

    const eventListener = event => savedHandler.current(event); // Add event listener


    element.addEventListener(eventName, eventListener); // Remove event listener on cleanup

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element] // Re-run if eventName or element changes
  );
}

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

/***/ }),

/***/ "./layouts/SlidePage.jsx":
/*!*******************************!*\
  !*** ./layouts/SlidePage.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlidePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-swipeable */ "react-swipeable");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Slide */ "./components/Slide.jsx");
/* harmony import */ var _components_PresentationMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PresentationMode */ "./components/PresentationMode.jsx");
/* harmony import */ var _hooks_useEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useEventListener */ "./hooks/useEventListener.js");
/* harmony import */ var _context_TotalPagesContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/TotalPagesContext */ "./context/TotalPagesContext.js");
/* harmony import */ var _context_ModeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/ModeContext */ "./context/ModeContext.jsx");
/* harmony import */ var _context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/CurrentSlideContext */ "./context/CurrentSlideContext.jsx");
/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useStorage */ "./hooks/useStorage.js");
/* harmony import */ var _constants_modes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/modes */ "./constants/modes.js");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/layouts/SlidePage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const eggplant = "#2a2135";
const white = "#fbf4ff";
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  :root {
    --text: #2a2135;
    --meta: #b4aaff;
    --accent: rgb(0, 92, 221);
    --bg: #fbf4ff;
    --base: 1.5rem;
    --code: 1rem;
    --heading-font-family: "Poppins";
    --heading-font-weight: 800;
  }

  @media (max-width: 600px) {
    :root {
      --base: 1.2rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: var(--base);
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'calt', 'liga', 'hist', 'onum', 'pnum';

    overflow: auto;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    color: var(--text);
    background-color: var(--bg);
  }

  #slide {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    padding: 1rem;

    text-align: center;

    -webkit-overflow-scrolling: touch;
  }

  #slide ul,
  #slide ol {
      text-align: left;
      margin-left: 32px;
  }

  #slide ol {
    list-style: none;
    counter-reset: slide-ol-counter;
  }

  #slide ol li {
    counter-increment: slide-ol-counter;
    margin-bottom:0.5em;
  }

  #slide ol li::before {
    content: "0" counter(slide-ol-counter) ".";
    font-weight: bold;
    font-size: 2rem;
    margin-right: 0.5rem;
    letter-spacing:1px;
    font-family: var(--heading-font-family);
    line-height: 1;
    position:relative;
    top:0.1em;
}

  a {
    color: var(--text);

    text-decoration-skip-ink: auto;
  }

  blockquote {
    font-size: 120%;
    font-weight: bold;

    width: 50vw;

    text-align: left;
  }

  @media (max-width: 900px) {
    blockquote {
      width: 90vw;
    }
  }

  blockquote div::before {
    content: '\\201C';
  }

  blockquote div::after {
    content: '\\201D';
  }

  cite {
    font-size: 80%;
    font-weight: normal;
    font-style: normal;

    display: block;

    margin-top: 2rem;
  }

  cite::before {
    content: '\\2014\\00a0';
  }

  pre {
    font-size: 0.75em !important;

    display: inline-block;
    overflow-x: scroll;

    margin: 2rem 0;

    text-align: left;

    color: var(--accent);
  }

  code {
    font-family: menlo, monospace;
  }

  a:hover {
    color: var(--accent);
  }

  h1 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-font-weight);
    font-size: 200%;

    margin-bottom: 0.5rem;
  }

  h2 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-font-weight);
    font-size: 120%;

    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  header {
    font-size: 50%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 20px;

    user-select: none;
  }

  header a,
  time {
    text-decoration: none;

    color: var(--meta);
  }

  header a:hover {
    color: var(--meta);
  }

  header span {
    color: var(--text);
  }
`;
function SlidePage({
  children
}) {
  const {
    currentSlide,
    setSlide
  } = Object(_context_CurrentSlideContext__WEBPACK_IMPORTED_MODULE_9__["useCurrentSlide"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const totalPages = Object(_context_TotalPagesContext__WEBPACK_IMPORTED_MODULE_7__["useTotalPages"])();
  const {
    mode,
    setMode
  } = Object(_context_ModeContext__WEBPACK_IMPORTED_MODULE_8__["useMode"])();
  const NEXT = [13, 32, 39];
  const PREV = 37;
  const PRESENTER = 80;
  let slideCount = 0;

  const navigate = ({
    keyCode,
    altKey
  }) => {
    // Handle Presentation Mode shortcut
    if (altKey) {
      if (keyCode === PRESENTER) {
        if (mode === _constants_modes__WEBPACK_IMPORTED_MODULE_11__["MODES"].SPEAKER) {
          setMode(_constants_modes__WEBPACK_IMPORTED_MODULE_11__["MODES"].SLIDESHOW);
          router.push(router.pathname, `/slides/${router.query.slide}?mode=${_constants_modes__WEBPACK_IMPORTED_MODULE_11__["MODES"].SLIDESHOW}#${currentSlide}`, {
            shallow: true
          });
        } else {
          setMode(_constants_modes__WEBPACK_IMPORTED_MODULE_11__["MODES"].SPEAKER);
          router.push(router.pathname, `/slides/${router.query.slide}?mode=${_constants_modes__WEBPACK_IMPORTED_MODULE_11__["MODES"].SPEAKER}#${currentSlide}`, {
            shallow: true
          });
        }

        return false;
      }
    } // Handle Previous page


    if (keyCode === PREV && currentSlide === 0) {
      if (router.query && router.query.slide) {
        if (router.query.slide > 1) {
          router.push(`/slides/${parseInt(router.query.slide, 10) - 1}?mode=${mode}#999`);
        }
      }

      return false;
    } // Handle next page


    if (NEXT.indexOf(keyCode) !== -1 && currentSlide === slideCount) {
      if (router.query && router.query.slide) {
        // Check for max page count
        if (router.query.slide < totalPages) {
          router.push(`/slides/${parseInt(router.query.slide, 10) + 1}?mode=${mode}`);
        }
      }

      return false;
    } // Handle slide changes


    if (NEXT.indexOf(keyCode) !== -1) {
      setSlide(prevState => {
        router.push(`${router.pathname}`, `/slides/${router.query.slide}?mode=${mode}#${prevState + 1}`);
        return prevState + 1;
      });
    } else if (keyCode === PREV) {
      setSlide(prevState => {
        router.push(`${router.pathname}`, `/slides/${router.query.slide}?mode=${mode}#${prevState - 1}`);
        return prevState - 1;
      });
    }
  };

  Object(_hooks_useEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])("keydown", navigate);

  const swipeLeft = () => {
    navigate({
      keyCode: NEXT[0]
    });
  };

  const swipeRight = () => {
    navigate({
      keyCode: PREV
    });
  };

  const slideNotes = () => {
    let generatorCount = 0;
    let generatedNotes = []; // Filter down children by only Slides

    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || []);

      if (childType && childType.includes("hr")) {
        generatorCount += 1;
        return;
      } // Check if it's a SpeakerNotes component


      if (childType && childType.includes("SpeakerNotes")) {
        if (!Array.isArray(generatedNotes[generatorCount])) {
          generatedNotes[generatorCount] = [];
        }

        generatedNotes[generatorCount].push(child);
      }
    });
    return generatedNotes;
  };

  const renderSlide = () => {
    let generatedSlides = [];
    let generatorCount = 0; // Filter down children by only Slides

    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, child => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || []);

      if (childType && childType.includes("hr")) {
        generatorCount += 1;
        return;
      } // Check if it's a SpeakerNotes component


      if (childType && !childType.includes("SpeakerNotes")) {
        // Add slide content to current generated slide
        if (!Array.isArray(generatedSlides[generatorCount])) {
          generatedSlides[generatorCount] = [];
        }

        generatedSlides[generatorCount].push(child);
      }
    }); // Get total slide count

    slideCount = generatorCount; // Return current slide

    if (currentSlide === 999) {
      router.push(router.pathname, `/slides/${router.query.slide}?mode=${mode}#${slideCount}`, {
        shallow: true
      });
      setSlide(slideCount);
    }

    return __jsx(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 12
      }
    }, generatedSlides[currentSlide]);
  };

  return __jsx(react_swipeable__WEBPACK_IMPORTED_MODULE_1__["Swipeable"], {
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 5
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 7
    }
  }), __jsx(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_10__["Storage"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 7
    }
  }), __jsx(_components_PresentationMode__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mode: mode,
    notes: slideNotes(),
    currentSlide: currentSlide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "slide",
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, renderSlide())));
}

/***/ })

};;
//# sourceMappingURL=2.js.map