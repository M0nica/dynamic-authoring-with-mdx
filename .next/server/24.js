exports.ids = [24];
exports.modules = {

/***/ "./slides/1.mdx":
/*!**********************!*\
  !*** ./slides/1.mdx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/slides/1.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* @jsx mdx */

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("div", _extends({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 14
    }
  }));
};

const SlidePage = makeShortcode("SlidePage");
const Cover = makeShortcode("Cover");
const SpeakerNotes = makeShortcode("SpeakerNotes");
const Callout = makeShortcode("Callout");
const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(SlidePage, {
    mdxType: "SlidePage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Cover, {
    mdxType: "Cover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, `Migrating Blog to MDX 📝`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, `Monica Powell `, `•`, ` MDX Conf 2020`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, `Why I migrated to MDX`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, `FOMO Driven Development`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, `to create engaging and interactive content!`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, `What is Remark?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, `A collection of Markdown parser plugins that check, lint, generate and compiles Markdown.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://remark.js.org/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }), `https://remark.js.org/`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, `Transformer Remark Plugins`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, `In Gatsby, Remark Transformer plugins are used in the `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 68
    }
  }, `gatsby-config`), ` to transform
Markdown on a site into HTML.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    style: {
      maxWidth: '50%',
      textAlign: 'center'
    },
    src: "/MDXtoHTML.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, `Remark plugins can be used to:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, `autolink headers with anchor tags`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, `process responsive images`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, `add syntax highlight`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, `embed content`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, `and more!`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, `Remark plugins can be used to:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    style: {
      maxWidth: '50%',
      textAlign: 'center'
    },
    src: "/codepen-embed.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, `Remark plugins can be used to:`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    style: {
      maxWidth: '50%',
      textAlign: 'center'
    },
    src: "/tweet-embed.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, `Goodbye gatsby-transformer-remark, Hello gatsby-plugin-mdx 👋🏾`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, `Gatsby-plugin-mdx is the official integration for using MDX with Gatsby`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, `Can be used in combination with Remark plugins.`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(SpeakerNotes, {
    mdxType: "SpeakerNotes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, ' ', "Considered a regular Gatsby plugin vs. Remark plugin", ' '), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, `Cannot Query Field`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Callout, {
    variant: "danger",
    mdxType: "Callout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "error Cannot query field \"body\" on type \"Mdx\". Did you mean \"rawBody\"? graphql/template-strings"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, `I ran into an error accessing some of the fields that should be available for mdx nodes like `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 107
    }
  }, `body`), `, `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 161
    }
  }, `timeToRead`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 224
    }
  }, `excerpt`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, `Debugging Conflicting Gatsby Plugins`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, `Commented out all of the plugins in gatsbyRemarkPlugins`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, `Confirmed that all of the data that should be available to query from mdx was available without Remark plugins.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, `Re-added each plugin one-by-one to identify the culprit`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, `Resolving Conflicting Gatsby Plugins`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, `There was a conflict`, `*`, ` with gatsby-plugin-mdx and the plugin, gatsby-plugin-my-social-cards, used to generate Open Graph images for all of my posts.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, `*`, ` Multiple plugins that transform Abstract Syntax Tree (AST) can sometimes conflict or behave in unexpected ways. Sometimes re-ordering plugins in `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 165
    }
  }, `gatsby-config`), ` can resolve this type issue.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, `Fix: replacing gatsby-plugin-my-social-cards with gatsby-remark-twitter-cards`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, `What have I done with it?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, `Added Table of Contents Component`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    style: {
      maxWidth: '40%',
      textAlign: 'center'
    },
    src: "/table-of-contents-visual.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, `Added Table of Contents Component`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("img", {
    style: {
      maxWidth: '80%',
      textAlign: 'center'
    },
    src: "/toc-diff.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, `Added Callout Banners`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Callout, {
    mdxType: "Callout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Here's some important information for you to know!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Callout, {
    variant: "danger",
    mdxType: "Callout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Oops, there was an error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Callout, {
    variant: "garden",
    mdxType: "Callout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "That's all for now! \uD83E\uDD55 I am continuing to update this post, so check back later!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(Callout, {
    variant: "book",
    mdxType: "Callout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "\"Here's a great quote from something I read recently."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, `Added Callout Banners`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-jsx"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 12
    }
  }), `<>
  <Callout>...</Callout>
  <Callout variant="danger">...</Callout>
  <Callout variant="garden">...</Callout>
  <Callout variant="book">...</Callout>
</>
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, `What have I done with it?`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, `Upgraded the code snippets on my site’s blog post to be powered by React a.k.a MDX!`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, `I wanted to be able to easily add additional functionality to code snippets on my site like click to copy functionality`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, `I was using `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 26
    }
  }, `gatsby-remark-prismjs`), ` and ran into some issue since currently additional support for PrismJS plugin environment variables is `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/gatsbyjs/gatsby/issues/20642"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 199
    }
  }), `in development`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, `I decided to switch to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  }, `prism-react-renderer`), ` in order to tap into the more robust functionality that’s available with React/MDX.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, `which highlights based on line number.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, `Prism-react-renderer is a lot more flexible then gatsby-remark-prismjs`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, `I was wondering how certain websites are able to display language and copy to clipboard feature as seen in the photo below.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, `A custom code block for MDX and some CSS: `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/code-block/index.js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 82
    }
  }), `https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/code-block/index.js`), ` > `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/styles/global.js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 114
    }
  }), `https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/styles/global.js`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, `Display language is also possible with gatsby-remark-prismjs `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.lekoarts.de/en/blog/language-tabs-for-gatsbys-code-blocks"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 75
    }
  }), `https://www.lekoarts.de/en/blog/language-tabs-for-gatsbys-code-blocks`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, `adding-line-numbers-and-code-highlighting-to-mdx-code-blocks`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://www.lekoarts.de/en/blog/adding-line-numbers-and-code-highlighting-to-mdx-code-blocks"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 10
    }
  }), `https://www.lekoarts.de/en/blog/adding-line-numbers-and-code-highlighting-to-mdx-code-blocks`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, `——`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("code", _extends({
    parentName: "pre"
  }, {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 12
    }
  }), `- Added callouts with different variants
- Table of contents — reduced amount of code that needed to be written to load table of contents
`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, `[image:65DEA490-8194-4688-BCAD-CCF4F70CBDB5-75650-0001FBA5C041DCCC/toc-diff.png]`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, `what issues did I run into it with Gatsby? - conficting plugins`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, `Migrated from “gatsby-remark-prismjs” to “prism-react-renderer”: “^1.1.1” (much fancier code snippets) 👨‍🍳 - `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "li"
  }, {
    "href": "https://github.com/M0nica/monica-site-playground/compare/improveCodeBlocks"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 144
    }
  }), `https://github.com/M0nica/monica-site-playground/compare/improveCodeBlocks`), `[image:3B3BE6B0-1B59-45ED-AFBD-93321A20DC77-75650-0001FB2ED8820415/Screen_Shot_2020-07-24_at_11.30.27_PM.png][image:5528dbcb-fd05-487e-953b-3363b990a363-75650-0001fb2ed9318c60/screen_shot_2020-07-24_at_11.30.31_pm.png]`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, `[file:F5F1DD06-53F8-4737-8E89-2CCF805CB5F0-75650-0001FBA5BFC7F365/2020-07-25-upgrading-code-snippets-migrating-to-prism-react-renderer.md]`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, `Things I want to explore in MDX:
A production-focused playground for live editing React code. 👀
`, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _extends({
    parentName: "p"
  }, {
    "href": "https://formidable.com/open-source/react-live/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 3
    }
  }), `https://formidable.com/open-source/react-live/`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, `Thank you 👋🏾`)));
}
;
MDXContent.isMDXComponent = true;

/***/ })

};;
//# sourceMappingURL=24.js.map