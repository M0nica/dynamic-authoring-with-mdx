(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./layouts/TransitionPage.jsx":
/*!************************************!*\
  !*** ./layouts/TransitionPage.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/monica/Dev/migrating-to-mdx/layouts/TransitionPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TransitionPage(_ref) {
  var children = _ref.children;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: {
      opacity: 0,
      transition: {
        duration: 2
      }
    },
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@popmotion/easing/dist/easing.es.js ***!
  \**********************************************************/
/*! exports provided: reversed, mirrored, createReversedEasing, createMirroredEasing, createExpoIn, createBackIn, createAnticipateEasing, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, bounceOut, bounceIn, bounceInOut, cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return mirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReversedEasing", function() { return createReversedEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirroredEasing", function() { return createMirroredEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return createAnticipateEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reversed(easeIn);
var easeInOut = /*#__PURE__*/mirrored(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reversed(circIn);
var circInOut = /*#__PURE__*/mirrored(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reversed(backIn);
var backInOut = /*#__PURE__*/mirrored(backIn);
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function (p) {
    return 1.0 - bounceOut(1.0 - p);
};
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    calcSampleValues();
    var resolver = function (aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}




/***/ }),

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@popmotion/popcorn/dist/popcorn.es.js ***!
  \************************************************************/
/*! exports provided: createAnticipateEasing, createBackIn, createExpoIn, cubicBezier, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, reversed, mirrored, angle, applyOffset, clamp, conditional, degreesToRadians, distance, interpolate, isPoint, isPoint3D, mix, mixArray, mixColor, mixComplex, mixObject, pipe, pointFromVector, progress, radiansToDegrees, smooth, smoothFrame, snap, springForce, springForceExpo, springForceLinear, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixObject", function() { return mixObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForce", function() { return springForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceExpo", function() { return springForceExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceLinear", function() { return springForceLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap$1; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createAnticipateEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["cubicBezier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["reversed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["mirrored"]; });







var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };

var radiansToDegrees = (function (radians) { return (radians * 180) / Math.PI; });

var angle = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
});

var applyOffset = (function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
});

var curryRange = (function (func) { return function (min, max, v) { return (v !== undefined ? func(min, max, v) : function (cv) { return func(min, max, cv); }); }; });

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);

var conditional = (function (check, apply) { return function (v) {
    return check(v) ? apply(v) : v;
}; });

var degreesToRadians = (function (degrees) { return (degrees * Math.PI) / 180; });

var isPoint = (function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
});

var isPoint3D = (function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
});

var distance1D = function (a, b) { return Math.abs(a - b); };
var distance = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
});

var progress = (function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});

var mix = (function (from, to, progress) {
    return -progress * from + progress * to + from;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color$$1) {
    return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = (function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
});

var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = (function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
});

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) { return mix(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = __assign({}, origin, target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var mixNumber = function (from, to) { return function (p) { return mix(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer(progress(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, clamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return clamp
        ? pipe(clamp$1(input[0], input[inputLength - 1]), interpolator)
        : interpolator;
}

var pointFromVector = (function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
});

var toDecimal = (function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
});

var smoothFrame = (function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(prevValue +
        (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
});

var smooth = (function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta
            ? smoothFrame(previousValue, v, timeDelta, strength)
            : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
});

var snap = (function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
});

var identity = function (v) { return v; };
var springForce = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = identity; }
    return curryRange(function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0
            ? origin + springModifiedDisplacement
            : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);

var velocityPerFrame = (function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
});

var velocityPerSecond = (function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
});

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
var wrap$1 = curryRange(wrap);

var clampProgress = clamp$1(0, 1);
var steps = (function (steps, direction) {
    if (direction === void 0) { direction = 'end'; }
    return function (progress) {
        progress =
            direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
});




/***/ }),

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/framer-motion.es.js ***!
  \*************************************************************/
/*! exports provided: AnimatePresence, AnimationControls, DragControls, MotionContext, MotionPluginContext, MotionPlugins, MotionValue, Point, ReducedMotion, UnstableSyncLayout, animationControls, createMotionComponent, isValidMotionProp, motion, motionValue, transform, unwrapMotionValue, useAnimatedState, useAnimation, useCycle, useDomEvent, useDragControls, useElementScroll, useExternalRef, useGestures, useInvertedScale, useMotionValue, usePanGesture, usePresence, useReducedMotion, useSpring, useTapGesture, useTransform, useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationControls", function() { return AnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionContext", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginContext", function() { return MotionPluginContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPlugins", function() { return MotionPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducedMotion", function() { return ReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnstableSyncLayout", function() { return UnstableSyncLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapMotionValue", function() { return unwrapMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return useElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExternalRef", function() { return useExternalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGestures", function() { return useGestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylefire */ "./node_modules/stylefire/dist/stylefire.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");











var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, transformer = _b.transformer, parent = _b.parent;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = _this.transformer ? _this.transformer(v) : v;
            if (_this.updateSubscribers && _this.prev !== _this.current) {
                _this.updateSubscribers.forEach(_this.notifySubscriber);
            }
            if (_this.children) {
                _this.children.forEach(_this.setChild);
            }
            if (render && _this.renderSubscribers) {
                _this.renderSubscribers.forEach(_this.notifySubscriber);
            }
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.scheduleVelocityCheck);
            }
        };
        /**
         * Notify a subscriber with the latest value.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @param subscriber - The subscriber to notify.
         *
         * @internal
         */
        this.notifySubscriber = function (subscriber) {
            subscriber(_this.current);
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        /**
         * Updates child `MotionValue`.
         *
         * @param child - Child `MotionValue`.
         *
         * @internal
         */
        this.setChild = function (child) { return child.set(_this.current); };
        this.parent = parent;
        this.transformer = transformer;
        this.set(init, false);
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Creates a new `MotionValue` that's subscribed to the output of this one.
     *
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    MotionValue.prototype.addChild = function (config) {
        if (config === void 0) { config = {}; }
        var child = new MotionValue(this.current, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ parent: this }, config));
        if (!this.children)
            this.children = new Set();
        this.children.add(child);
        return child;
    };
    /**
     * Stops a `MotionValue` from being subscribed to this one.
     *
     * @param child - The subscribed `MotionValue`
     *
     * @internal
     */
    MotionValue.prototype.removeChild = function (child) {
        if (!this.children) {
            return;
        }
        this.children.delete(child);
    };
    /**
     * Subscribes a subscriber function to a subscription list.
     *
     * @param subscriptions - A `Set` of subscribers.
     * @param subscription - A subscriber function.
     */
    MotionValue.prototype.subscribeTo = function (subscriptions, subscription) {
        var _this = this;
        var updateSubscriber = function () { return subscription(_this.current); };
        subscriptions.add(updateSubscriber);
        return function () { return subscriptions.delete(updateSubscriber); };
    };
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        if (!this.updateSubscribers)
            this.updateSubscribers = new Set();
        return this.subscribeTo(this.updateSubscribers, subscription);
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        if (!this.renderSubscribers)
            this.renderSubscribers = new Set();
        // Render immediately
        this.notifySubscriber(subscription);
        return this.subscribeTo(this.renderSubscribers, subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["velocityPerSecond"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers && this.updateSubscribers.clear();
        this.renderSubscribers && this.renderSubscribers.clear();
        this.parent && this.parent.removeChild(this);
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init, opts) {
    return new MotionValue(init, opts);
}

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

var isMotionValue = function (value) {
    return value instanceof MotionValue;
};

// Creating a styler factory for the `onUpdate` prop allows all values
// to fire and the `onUpdate` prop will only fire once per frame
var updateStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["createStylerFactory"])({
    onRead: function () { return null; },
    onRender: function (state, _a) {
        var onUpdate = _a.onUpdate;
        return onUpdate(state);
    },
});
var MotionValuesMap = /** @class */ (function () {
    function MotionValuesMap() {
        this.hasMounted = false;
        this.values = new Map();
        this.unsubscribers = new Map();
    }
    MotionValuesMap.prototype.has = function (key) {
        return this.values.has(key);
    };
    MotionValuesMap.prototype.set = function (key, value) {
        this.values.set(key, value);
        if (this.hasMounted) {
            this.bindValueToOutput(key, value);
        }
    };
    MotionValuesMap.prototype.get = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = new MotionValue(defaultValue);
            this.set(key, value);
        }
        return value;
    };
    MotionValuesMap.prototype.forEach = function (callback) {
        return this.values.forEach(callback);
    };
    MotionValuesMap.prototype.bindValueToOutput = function (key, value) {
        var _this = this;
        var onRender = function (v) { return _this.output && _this.output(key, v); };
        var unsubscribeOnRender = value.onRenderRequest(onRender);
        var onChange = function (v) {
            _this.onUpdate && _this.onUpdate.set(key, v);
        };
        var unsubscribeOnChange = value.onChange(onChange);
        if (this.unsubscribers.has(key)) {
            this.unsubscribers.get(key)();
        }
        this.unsubscribers.set(key, function () {
            unsubscribeOnRender();
            unsubscribeOnChange();
        });
    };
    MotionValuesMap.prototype.setOnUpdate = function (onUpdate) {
        this.onUpdate = undefined;
        if (onUpdate) {
            this.onUpdate = updateStyler({ onUpdate: onUpdate });
        }
    };
    MotionValuesMap.prototype.setTransformTemplate = function (transformTemplate) {
        if (this.transformTemplate !== transformTemplate) {
            this.transformTemplate = transformTemplate;
            this.updateTransformTemplate();
        }
    };
    MotionValuesMap.prototype.getTransformTemplate = function () {
        return this.transformTemplate;
    };
    MotionValuesMap.prototype.updateTransformTemplate = function () {
        if (this.output) {
            this.output("transform", this.transformTemplate);
        }
    };
    MotionValuesMap.prototype.mount = function (output) {
        var _this = this;
        this.hasMounted = true;
        if (output)
            this.output = output;
        this.values.forEach(function (value, key) { return _this.bindValueToOutput(key, value); });
        this.updateTransformTemplate();
    };
    MotionValuesMap.prototype.unmount = function () {
        var _this = this;
        this.values.forEach(function (_value, key) {
            var unsubscribe = _this.unsubscribers.get(key);
            unsubscribe && unsubscribe();
        });
    };
    return MotionValuesMap;
}());
var specialMotionValueProps = new Set(["dragOriginX", "dragOriginY"]);
var useMotionValues = function (props) {
    var motionValues = useConstant(function () {
        var map = new MotionValuesMap();
        /**
         * Loop through every prop and add any detected `MotionValue`s. This is SVG-specific
         * code that should be extracted, perhaps considered hollistically with `useMotionStyles`.
         *
         * <motion.circle cx={motionValue(0)} />
         */
        for (var key in props) {
            if (isMotionValue(props[key]) &&
                !specialMotionValueProps.has(key)) {
                map.set(key, props[key]);
            }
        }
        return map;
    });
    motionValues.setOnUpdate(props.onUpdate);
    motionValues.setTransformTemplate(props.transformTemplate);
    return motionValues;
};

var session = null;
var syncRenderSession = {
    isOpen: function () { return session !== null; },
    open: function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!session, "Sync render session already open");
        session = [];
    },
    flush: function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(session !== null, "No sync render session found");
        session && session.forEach(function (styler) { return styler.render(); });
        session = null;
    },
    push: function (styler) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(session !== null, "No sync render session found");
        session && session.push(styler);
    },
};

/**
 * `useEffect` gets resolved bottom-up. We defer some optional functionality to child
 * components, so to ensure everything runs correctly we export the ref-binding logic
 * to a new component rather than in `useMotionValues`.
 */
var MountComponent = function (_a) {
    var ref = _a.innerRef, values = _a.values, isStatic = _a.isStatic;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(ref.current instanceof Element, "No `ref` found. Ensure components created with `motion.custom` forward refs using `React.forwardRef`");
        var domStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(ref.current, {
            preparseOutput: false,
            enableHardwareAcceleration: !isStatic,
        });
        values.mount(function (key, value) {
            domStyler.set(key, value);
            if (syncRenderSession.isOpen()) {
                syncRenderSession.push(domStyler);
            }
        });
        return function () { return values.unmount(); };
    }, []);
    return null;
};
var Mount = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(MountComponent);

var createValueResolver = function (resolver) { return function (values) {
    var resolvedValues = {};
    values.forEach(function (value, key) { return (resolvedValues[key] = resolver(value)); });
    return resolvedValues;
}; };
var resolveCurrent = createValueResolver(function (value) { return value.get(); });

var transformOriginProps = new Set(["originX", "originY", "originZ"]);
var isTransformOriginProp = function (key) { return transformOriginProps.has(key); };
var buildStyleAttr = function (values, styleProp, isStatic) {
    var motionValueStyles = resolveCurrent(values);
    var transformTemplate = values.getTransformTemplate();
    if (transformTemplate) {
        // If `transform` has been manually set as a string, pass that through the template
        // otherwise pass it forward to Stylefire's style property builder
        motionValueStyles.transform = styleProp.transform
            ? transformTemplate({}, styleProp.transform)
            : transformTemplate;
    }
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["buildStyleProperty"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, styleProp), motionValueStyles), !isStatic);
};
var useMotionStyles = function (values, styleProp, isStatic, transformValues) {
    if (styleProp === void 0) { styleProp = {}; }
    var style = {};
    var prevMotionStyles = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({}).current;
    for (var key in styleProp) {
        var thisStyle = styleProp[key];
        if (isMotionValue(thisStyle)) {
            // If this is a motion value, add it to our MotionValuesMap
            values.set(key, thisStyle);
        }
        else if (!isStatic &&
            (Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["isTransformProp"])(key) || isTransformOriginProp(key))) {
            // Or if it's a transform prop, create a motion value (or update an existing one)
            // to ensure Stylefire can reconcile all the transform values together.
            // A further iteration on this would be to create a single styler per component that gets
            // used in the DOM renderer's buildStyleAttr *and* animations, then we would only
            // have to convert animating values to `MotionValues` (we could probably remove this entire function).
            // The only architectural consideration is to allow Stylefire to have elements mounted after
            // a styler is created.
            if (!values.has(key)) {
                // If it doesn't exist as a motion value, create it
                values.set(key, motionValue(thisStyle));
            }
            else {
                // Otherwise only update it if it's changed from a previous render
                if (thisStyle !== prevMotionStyles[key]) {
                    var value = values.get(key);
                    value.set(thisStyle);
                }
            }
            prevMotionStyles[key] = thisStyle;
        }
        else {
            style[key] = thisStyle;
        }
    }
    return transformValues ? transformValues(style) : style;
};

var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};

var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};
var dimensionTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_6__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["vh"], auto];
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(dimensionTypes, [style_value_types__WEBPACK_IMPORTED_MODULE_6__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"]]);
var testValueType = function (v) { return function (type) { return type.test(v); }; };
var getDimensionValueType = function (v) {
    return dimensionTypes.find(testValueType(v));
};
var getValueType = function (v) { return valueTypes.find(testValueType(v)); };

var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var overDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 700,
    damping: to === 0 ? 100 : 35,
}); };
var linearTween = function () { return ({
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: overDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: to }, transitionFactory(to));
};

/**
 * A Popmotion action that accepts a single `to` prop. When it starts, it immediately
 * updates with `to` and then completes. By using this we can compose instant transitions
 * in with the same logic that applies `delay` or returns a `Promise` etc.
 *
 * Accepting `duration` is a little bit of a hack that simply defers the completetion of
 * the animation until after the duration finishes. This is for situations when you're **only**
 * animating non-animatable values and then setting something on `transitionEnd`. Really
 * you want this to fire after the "animation" finishes, rather than instantly.
 *
 * ```
 * animate={{
 *   display: 'block',
 *   transitionEnd: { display: 'none' }
 * }}
 * ```
 */
var just = function (_a) {
    var to = _a.to, duration = _a.duration;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["action"])(function (_a) {
        var update = _a.update, complete = _a.complete;
        update(to);
        duration ? Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["delay"])(duration).start({ complete: complete }) : complete();
    });
};

var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var x1 = definition[0], y1 = definition[1], x2 = definition[2], y2 = definition[3];
        return Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_8__["cubicBezier"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(_popmotion_easing__WEBPACK_IMPORTED_MODULE_8__[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

var isDurationAnimation = function (v) {
    return v.hasOwnProperty("duration") || v.hasOwnProperty("repeatDelay");
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

var transitions = { tween: popmotion__WEBPACK_IMPORTED_MODULE_7__["tween"], spring: popmotion__WEBPACK_IMPORTED_MODULE_7__["spring"], keyframes: popmotion__WEBPACK_IMPORTED_MODULE_7__["keyframes"], inertia: popmotion__WEBPACK_IMPORTED_MODULE_7__["inertia"], just: just };
var transitionOptionParser = {
    tween: function (opts) {
        if (opts.ease) {
            var ease = isEasingArray(opts.ease) ? opts.ease[0] : opts.ease;
            opts.ease = easingDefinitionToFunction(ease);
        }
        return opts;
    },
    keyframes: function (_a) {
        var from = _a.from, to = _a.to, velocity = _a.velocity, opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to", "velocity"]);
        if (opts.values && opts.values[0] === null) {
            var values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(opts.values);
            values[0] = from;
            opts.values = values;
        }
        if (opts.ease) {
            opts.easings = isEasingArray(opts.ease)
                ? opts.ease.map(easingDefinitionToFunction)
                : easingDefinitionToFunction(opts.ease);
        }
        opts.ease = _popmotion_easing__WEBPACK_IMPORTED_MODULE_8__["linear"];
        return opts;
    },
};
var isTransitionDefined = function (_a) {
    var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection"]);
    return Object.keys(transition).length;
};
var getTransitionDefinition = function (key, to, transitionDefinition) {
    var delay = transitionDefinition ? transitionDefinition.delay : 0;
    // If no object, return default transition
    // A better way to handle this would be to deconstruct out all the shared Orchestration props
    // and see if there's any props remaining
    if (transitionDefinition === undefined ||
        !isTransitionDefined(transitionDefinition)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, getDefaultTransition(key, to));
    }
    var valueTransitionDefinition = transitionDefinition[key] ||
        transitionDefinition.default ||
        transitionDefinition;
    if (valueTransitionDefinition.type === false) {
        return {
            delay: valueTransitionDefinition.hasOwnProperty("delay")
                ? valueTransitionDefinition.delay
                : delay,
            to: isKeyframesTarget(to)
                ? to[to.length - 1]
                : to,
            type: "just",
        };
    }
    else if (isKeyframesTarget(to)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ values: to, duration: 0.8, delay: delay, ease: "linear" }, valueTransitionDefinition), { 
            // This animation must be keyframes if we're animating through an array
            type: "keyframes" });
    }
    else {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "tween", to: to,
            delay: delay }, valueTransitionDefinition);
    }
};
var preprocessOptions = function (type, opts) {
    return transitionOptionParser[type]
        ? transitionOptionParser[type](opts)
        : opts;
};
var getAnimation = function (key, value, target, transition) {
    var origin = value.get();
    var isOriginAnimatable = isAnimatable(key, origin);
    var isTargetAnimatable = isAnimatable(key, target);
    // TODO we could probably improve this check to ensure both values are of the same type -
    // for instance 100 to #fff. This might live better in Popmotion.
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to " + target + ". \"" + origin + "\" is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    // Parse the `transition` prop and return options for the Popmotion animation
    var _a = getTransitionDefinition(key, target, transition), _b = _a.type, type = _b === void 0 ? "tween" : _b, transitionDefinition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["type"]);
    // If this is an animatable pair of values, return an animation, otherwise use `just`
    var actionFactory = isOriginAnimatable && isTargetAnimatable
        ? transitions[type]
        : just;
    var opts = preprocessOptions(type, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: origin, velocity: value.getVelocity() }, transitionDefinition));
    // Convert duration from Framer Motion's seconds into Popmotion's milliseconds
    if (isDurationAnimation(opts)) {
        if (opts.duration) {
            opts.duration = secondsToMilliseconds(opts.duration);
        }
        if (opts.repeatDelay) {
            opts.repeatDelay = secondsToMilliseconds(opts.repeatDelay);
        }
    }
    return [actionFactory, opts];
};
/**
 * Start animation on a value. This function completely encapsulates Popmotion-specific logic.
 *
 * @internal
 */
function startAnimation(key, value, target, _a) {
    var _b = _a.delay, delay$1 = _b === void 0 ? 0 : _b, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["delay"]);
    return value.start(function (complete) {
        var activeAnimation;
        var _a = getAnimation(key, value, target, transition), animationFactory = _a[0], _b = _a[1], valueDelay = _b.delay, options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["delay"]);
        if (valueDelay !== undefined) {
            delay$1 = valueDelay;
        }
        var animate = function () {
            var animation = animationFactory(options);
            // Bind animation opts to animation
            activeAnimation = animation.start({
                update: function (v) { return value.set(v); },
                complete: complete,
            });
        };
        // If we're delaying this animation, only resolve it **after** the delay to
        // ensure the value's resolve velocity is up-to-date.
        if (delay$1) {
            activeAnimation = Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["delay"])(secondsToMilliseconds(delay$1)).start({
                complete: animate,
            });
        }
        else {
            animate();
        }
        return function () {
            if (activeAnimation)
                activeAnimation.stop();
        };
    });
}

/**
 * Get the current value of every `MotionValue`
 * @param values -
 */
var getCurrent = function (values) {
    var current = {};
    values.forEach(function (value, key) { return (current[key] = value.get()); });
    return current;
};
/**
 * Get the current velocity of every `MotionValue`
 * @param values -
 */
var getVelocity = function (values) {
    var velocity = {};
    values.forEach(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
};
/**
 * Check if value is a function that returns a `Target`. A generic typeof === 'function'
 * check, just helps with typing.
 * @param p -
 */
var isTargetResolver = function (p) {
    return typeof p === "function";
};
/**
 * Check if value is a list of variant labels
 * @param v -
 */
var isVariantLabels = function (v) { return Array.isArray(v); };
/**
 * Check if value is a numerical string, ie "100" or "100px"
 */
var isNumericalString = function (v) { return /^\d*\.?\d+$/.test(v); };
/**
 * Control animations for a single component
 *
 * @internal
 */
var ValueAnimationControls = /** @class */ (function () {
    function ValueAnimationControls(_a) {
        var _this = this;
        var values = _a.values, readValueFromSource = _a.readValueFromSource, makeTargetAnimatable = _a.makeTargetAnimatable;
        /**
         * A reference to the component's latest props. We could probably ditch this in
         * favour to a reference to the `custom` prop now we don't send all props through
         * to target resolvers.
         */
        this.props = {};
        /**
         * The component's variants, as provided by `variants`
         */
        this.variants = {};
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        /**
         * A series of target overrides that we can animate to/from when overrides are set/cleared.
         */
        this.overrides = [];
        /**
         * A series of target overrides as they were originally resolved.
         */
        this.resolvedOverrides = [];
        /**
         * A Set of currently active override indexes
         */
        this.activeOverrides = new Set();
        /**
         * A Set of value keys that are currently animating.
         */
        this.isAnimating = new Set();
        /**
         * Check if the associated `MotionValueMap` has a key with the provided string.
         * Pre-bound to the class so we can provide directly to the `filter` in `checkForNewValues`.
         */
        this.hasValue = function (key) { return !_this.values.has(key); };
        this.values = values;
        this.readValueFromSource = readValueFromSource;
        this.makeTargetAnimatable = makeTargetAnimatable;
        this.values.forEach(function (value, key) { return (_this.baseTarget[key] = value.get()); });
    }
    /**
     * Set the reference to the component's props.
     * @param props -
     */
    ValueAnimationControls.prototype.setProps = function (props) {
        this.props = props;
    };
    /**
     * Set the reference to the component's variants
     * @param variants -
     */
    ValueAnimationControls.prototype.setVariants = function (variants) {
        if (variants)
            this.variants = variants;
    };
    /**
     * Set the component's default transition
     * @param transition -
     */
    ValueAnimationControls.prototype.setDefaultTransition = function (transition) {
        if (transition)
            this.defaultTransition = transition;
    };
    /**
     * Set motion values without animation.
     *
     * @param definition -
     * @param isActive -
     */
    ValueAnimationControls.prototype.setValues = function (definition, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? new Set() : _c, priority = _b.priority;
        var _d = this.resolveVariant(definition), target = _d.target, transitionEnd = _d.transitionEnd;
        target = this.transformValues(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd));
        return Object.keys(target).forEach(function (key) {
            if (isActive.has(key))
                return;
            isActive.add(key);
            if (target) {
                var targetValue = resolveFinalValueInKeyframes(target[key]);
                if (_this.values.has(key)) {
                    var value = _this.values.get(key);
                    value && value.set(targetValue);
                }
                else {
                    _this.values.set(key, motionValue(targetValue));
                }
                if (!priority)
                    _this.baseTarget[key] = targetValue;
            }
        });
    };
    /**
     * Allows `transformValues` to be set by a component that allows us to
     * transform the values in a given `Target`. This allows Framer Library
     * to extend Framer Motion to animate `Color` variables etc. Currently we have
     * to manually support these extended types here in Framer Motion.
     *
     * @param values -
     */
    ValueAnimationControls.prototype.transformValues = function (values) {
        var transformValues = this.props.transformValues;
        return transformValues ? transformValues(values) : values;
    };
    /**
     * Check a `Target` for new values we haven't animated yet, and add them
     * to the `MotionValueMap`.
     *
     * Currently there's functionality here that is DOM-specific, we should allow
     * this functionality to be injected by the factory that creates DOM-specific
     * components.
     *
     * @param target -
     */
    ValueAnimationControls.prototype.checkForNewValues = function (target) {
        var newValueKeys = Object.keys(target).filter(this.hasValue);
        var numNewValues = newValueKeys.length;
        if (!numNewValues)
            return;
        for (var i = 0; i < numNewValues; i++) {
            var key = newValueKeys[i];
            var targetValue = target[key];
            var value = null;
            // If this is a keyframes value, we can attempt to use the first value in the
            // array as that's going to be the first value of the animation anyway
            if (Array.isArray(targetValue)) {
                value = targetValue[0];
            }
            // If it isn't a keyframes or the first keyframes value was set as `null`, read the
            // value from the DOM. It might be worth investigating whether to check props (for SVG)
            // or props.style (for HTML) if the value exists there before attempting to read.
            if (value === null) {
                value = this.readValueFromSource(key);
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
            }
            if (typeof value === "string" && isNumericalString(value)) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!getValueType(value) && style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].test(targetValue)) {
                // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
                value = style_value_types__WEBPACK_IMPORTED_MODULE_6__["complex"].getAnimatableNone(targetValue);
            }
            this.values.set(key, motionValue(value));
            this.baseTarget[key] = value;
        }
    };
    /**
     * Resolve a variant from its label or resolver into an actual `Target` we can animate to.
     * @param variant -
     */
    ValueAnimationControls.prototype.resolveVariant = function (variant) {
        if (!variant) {
            return {
                target: undefined,
                transition: undefined,
                transitionEnd: undefined,
            };
        }
        if (isTargetResolver(variant)) {
            // resolve current and velocity
            variant = variant(this.props.custom, getCurrent(this.values), getVelocity(this.values));
        }
        var _a = variant.transition, transition = _a === void 0 ? this.defaultTransition : _a, transitionEnd = variant.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(variant, ["transition", "transitionEnd"]);
        return { transition: transition, transitionEnd: transitionEnd, target: target };
    };
    /**
     * Get the highest active override priority index
     */
    ValueAnimationControls.prototype.getHighestPriority = function () {
        if (!this.activeOverrides.size)
            return 0;
        return Math.max.apply(Math, Array.from(this.activeOverrides));
    };
    /**
     * Set an override. We add this layer of indirection so if, for instance, a tap gesture
     * starts and overrides a hover gesture, when we clear the tap gesture and fallback to the
     * hover gesture, if that hover gesture has changed in the meantime we can go to that rather
     * than the one that was resolved when the hover gesture animation started.
     *
     * @param definition -
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.setOverride = function (definition, overrideIndex) {
        this.overrides[overrideIndex] = definition;
        if (this.children) {
            this.children.forEach(function (child) {
                return child.setOverride(definition, overrideIndex);
            });
        }
    };
    /**
     * Start an override animation.
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.startOverride = function (overrideIndex) {
        var override = this.overrides[overrideIndex];
        if (override) {
            return this.start(override, { priority: overrideIndex });
        }
    };
    /**
     * Clear an override. We check every value we animated to in this override to see if
     * its present on any lower-priority overrides. If not, we animate it back to its base target.
     * @param overrideIndex -
     */
    ValueAnimationControls.prototype.clearOverride = function (overrideIndex) {
        var _this = this;
        if (this.children) {
            this.children.forEach(function (child) { return child.clearOverride(overrideIndex); });
        }
        var override = this.overrides[overrideIndex];
        if (!override)
            return;
        this.activeOverrides.delete(overrideIndex);
        var highest = this.getHighestPriority();
        this.resetIsAnimating();
        if (highest) {
            var highestOverride = this.overrides[highest];
            highestOverride && this.startOverride(highest);
        }
        // Figure out which remaining values were affected by the override and animate those
        var overrideTarget = this.resolvedOverrides[overrideIndex];
        if (!overrideTarget)
            return;
        var remainingValues = {};
        for (var key in this.baseTarget) {
            if (overrideTarget[key] !== undefined) {
                remainingValues[key] = this.baseTarget[key];
            }
        }
        this.onStart();
        this.animate(remainingValues).then(function () { return _this.onComplete(); });
    };
    /**
     * Apply a target/variant without any animation
     */
    ValueAnimationControls.prototype.apply = function (definition) {
        if (Array.isArray(definition)) {
            return this.applyVariantLabels(definition);
        }
        else if (typeof definition === "string") {
            return this.applyVariantLabels([definition]);
        }
        else {
            this.setValues(definition);
        }
    };
    /**
     * Apply variant labels without animation
     */
    ValueAnimationControls.prototype.applyVariantLabels = function (variantLabelList) {
        var _this = this;
        var isActive = new Set();
        var reversedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(variantLabelList).reverse();
        reversedList.forEach(function (key) {
            var _a = _this.resolveVariant(_this.variants[key]), target = _a.target, transitionEnd = _a.transitionEnd;
            if (transitionEnd) {
                _this.setValues(transitionEnd, { isActive: isActive });
            }
            if (target) {
                _this.setValues(target, { isActive: isActive });
            }
            if (_this.children && _this.children.size) {
                _this.children.forEach(function (child) {
                    return child.applyVariantLabels(variantLabelList);
                });
            }
        });
    };
    ValueAnimationControls.prototype.start = function (definition, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (opts.priority) {
            this.activeOverrides.add(opts.priority);
        }
        this.resetIsAnimating(opts.priority);
        var animation;
        if (isVariantLabels(definition)) {
            animation = this.animateVariantLabels(definition, opts);
        }
        else if (typeof definition === "string") {
            animation = this.animateVariant(definition, opts);
        }
        else {
            animation = this.animate(definition, opts);
        }
        this.onStart();
        return animation.then(function () { return _this.onComplete(); });
    };
    ValueAnimationControls.prototype.animate = function (animationDefinition, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.priority, priority = _d === void 0 ? 0 : _d, transitionOverride = _b.transitionOverride;
        var _e = this.resolveVariant(animationDefinition), target = _e.target, transition = _e.transition, transitionEnd = _e.transitionEnd;
        if (transitionOverride) {
            transition = transitionOverride;
        }
        if (!target)
            return Promise.resolve();
        target = this.transformValues(target);
        if (transitionEnd) {
            transitionEnd = this.transformValues(transitionEnd);
        }
        this.checkForNewValues(target);
        if (this.makeTargetAnimatable) {
            var animatable = this.makeTargetAnimatable(target, transitionEnd);
            target = animatable.target;
            transitionEnd = animatable.transitionEnd;
        }
        if (priority) {
            this.resolvedOverrides[priority] = target;
        }
        this.checkForNewValues(target);
        var animations = [];
        for (var key in target) {
            var value = this.values.get(key);
            if (!value || !target || target[key] === undefined)
                continue;
            var valueTarget = target[key];
            if (!priority) {
                this.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
            }
            if (this.isAnimating.has(key))
                continue;
            this.isAnimating.add(key);
            animations.push(startAnimation(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, transition)));
        }
        var allAnimations = Promise.all(animations);
        return transitionEnd
            ? allAnimations.then(function () {
                _this.setValues(transitionEnd, { priority: priority });
            })
            : allAnimations;
    };
    ValueAnimationControls.prototype.animateVariantLabels = function (variantLabels, opts) {
        var _this = this;
        var animations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(variantLabels).reverse()
            .map(function (label) { return _this.animateVariant(label, opts); });
        return Promise.all(animations);
    };
    ValueAnimationControls.prototype.animateVariant = function (variantLabel, opts) {
        var _this = this;
        var when = false;
        var delayChildren = 0;
        var staggerChildren = 0;
        var staggerDirection = 1;
        var priority = (opts && opts.priority) || 0;
        var variant = this.variants[variantLabel];
        var getAnimations = variant
            ? function () { return _this.animate(variant, opts); }
            : function () { return Promise.resolve(); };
        var getChildrenAnimations = this.children
            ? function () {
                return _this.animateChildren(variantLabel, delayChildren, staggerChildren, staggerDirection, priority);
            }
            : function () { return Promise.resolve(); };
        if (variant && this.children) {
            var transition = this.resolveVariant(variant).transition;
            if (transition) {
                when = transition.when || when;
                delayChildren = transition.delayChildren || delayChildren;
                staggerChildren = transition.staggerChildren || staggerChildren;
                staggerDirection =
                    transition.staggerDirection || staggerDirection;
            }
        }
        if (when) {
            var _a = when === "beforeChildren"
                ? [getAnimations, getChildrenAnimations]
                : [getChildrenAnimations, getAnimations], first = _a[0], last = _a[1];
            return first().then(last);
        }
        else {
            return Promise.all([getAnimations(), getChildrenAnimations()]);
        }
    };
    ValueAnimationControls.prototype.animateChildren = function (variantLabel, delayChildren, staggerChildren, staggerDirection, priority) {
        if (delayChildren === void 0) { delayChildren = 0; }
        if (staggerChildren === void 0) { staggerChildren = 0; }
        if (staggerDirection === void 0) { staggerDirection = 1; }
        if (priority === void 0) { priority = 0; }
        if (!this.children) {
            return Promise.resolve();
        }
        var animations = [];
        var maxStaggerDuration = (this.children.size - 1) * staggerChildren;
        var generateStaggerDuration = staggerDirection === 1
            ? function (i) { return i * staggerChildren; }
            : function (i) { return maxStaggerDuration - i * staggerChildren; };
        Array.from(this.children).forEach(function (childControls, i) {
            var animation = childControls.animateVariant(variantLabel, {
                priority: priority,
                delay: delayChildren + generateStaggerDuration(i),
            });
            animations.push(animation);
        });
        return Promise.all(animations);
    };
    ValueAnimationControls.prototype.onStart = function () {
        var onAnimationStart = this.props.onAnimationStart;
        onAnimationStart && onAnimationStart();
    };
    ValueAnimationControls.prototype.onComplete = function () {
        var onAnimationComplete = this.props.onAnimationComplete;
        onAnimationComplete && onAnimationComplete();
    };
    ValueAnimationControls.prototype.checkOverrideIsAnimating = function (priority) {
        var numOverrides = this.overrides.length;
        for (var i = priority + 1; i < numOverrides; i++) {
            var resolvedOverride = this.resolvedOverrides[i];
            if (resolvedOverride) {
                for (var key in resolvedOverride) {
                    this.isAnimating.add(key);
                }
            }
        }
    };
    ValueAnimationControls.prototype.resetIsAnimating = function (priority) {
        if (priority === void 0) { priority = 0; }
        this.isAnimating.clear();
        // If this isn't the highest priority gesture, block the animation
        // of anything that's currently being animated
        if (priority < this.getHighestPriority()) {
            this.checkOverrideIsAnimating(priority);
        }
        if (this.children) {
            this.children.forEach(function (child) { return child.resetIsAnimating(priority); });
        }
    };
    ValueAnimationControls.prototype.stop = function () {
        this.values.forEach(function (value) { return value.stop(); });
    };
    /**
     * Add the controls of a child component.
     * @param controls -
     */
    ValueAnimationControls.prototype.addChild = function (controls) {
        if (!this.children) {
            this.children = new Set();
        }
        this.children.add(controls);
        // We set child overrides when `setOverride` is called, but also have to do it here
        // as the first time `setOverride` is called all the children might not have been added yet.
        this.overrides.forEach(function (override, i) {
            override && controls.setOverride(override, i);
        });
    };
    ValueAnimationControls.prototype.removeChild = function (controls) {
        if (!this.children) {
            return;
        }
        this.children.delete(controls);
    };
    ValueAnimationControls.prototype.resetChildren = function () {
        if (this.children)
            this.children.clear();
    };
    return ValueAnimationControls;
}());

/**
 * Use callback either only on the initial render or on all renders. In concurrent mode
 * the "initial" render might run multiple times
 *
 * @param callback - Callback to run
 * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
 *
 * @public
 */
function useInitialOrEveryRender(callback, isInitialOnly) {
    if (isInitialOnly === void 0) { isInitialOnly = false; }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
    }
    isInitialRender.current = false;
}

/**
 * Control animations on one or more components.
 *
 * @public
 */
var AnimationControls = /** @class */ (function () {
    function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.componentControls = new Set();
    }
    /**
     * Set variants on this and all child components.
     *
     * @param variants - The variants to set
     *
     * @internal
     */
    AnimationControls.prototype.setVariants = function (variants) {
        this.variants = variants;
        this.componentControls.forEach(function (controls) {
            return controls.setVariants(variants);
        });
    };
    /**
     * Set a default transition on this and all child components
     *
     * @param transition - The default transition to set
     *
     * @internal
     */
    AnimationControls.prototype.setDefaultTransition = function (transition) {
        this.defaultTransition = transition;
        this.componentControls.forEach(function (controls) {
            return controls.setDefaultTransition(transition);
        });
    };
    /**
     * Subscribes a component's animation controls to this.
     *
     * @param controls - The controls to subscribe
     * @returns An unsubscribe function.
     *
     * @internal
     */
    AnimationControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        if (this.variants)
            controls.setVariants(this.variants);
        if (this.defaultTransition)
            controls.setDefaultTransition(this.defaultTransition);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Starts an animation on all linked components.
     *
     * @remarks
     *
     * ```jsx
     * controls.start("variantLabel")
     * controls.start({
     *   x: 0,
     *   transition: { duration: 1 }
     * })
     * ```
     *
     * @param definition - Properties or variant label to animate to
     * @param transition - Optional `transtion` to apply to a variant
     * @returns - A `Promise` that resolves when all animations have completed.
     *
     * @public
     */
    AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
            var animations_1 = [];
            this.componentControls.forEach(function (controls) {
                var animation = controls.start(definition, {
                    transitionOverride: transitionOverride,
                });
                animations_1.push(animation);
            });
            return Promise.all(animations_1);
        }
        else {
            return new Promise(function (resolve) {
                _this.pendingAnimations.push({
                    animation: [definition, transitionOverride],
                    resolve: resolve,
                });
            });
        }
    };
    /**
     * Instantly set to a set of properties or a variant.
     *
     * ```jsx
     * // With properties
     * controls.set({ opacity: 0 })
     *
     * // With variants
     * controls.set("hidden")
     * ```
     *
     * @internalremarks
     * We could perform a similar trick to `.start` where this can be called before mount
     * and we maintain a list of of pending actions that get applied on mount. But the
     * expectation of `set` is that it happens synchronously and this would be difficult
     * to do before any children have even attached themselves. It's also poor practise
     * and we should discourage render-synchronous `.start` calls rather than lean into this.
     *
     * @public
     */
    AnimationControls.prototype.set = function (definition) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return this.componentControls.forEach(function (controls) {
            return controls.apply(definition);
        });
    };
    /**
     * Stops animations on all linked components.
     *
     * ```jsx
     * controls.stop()
     * ```
     *
     * @public
     */
    AnimationControls.prototype.stop = function () {
        this.componentControls.forEach(function (controls) { return controls.stop(); });
    };
    /**
     * Initialises the animation controls.
     *
     * @internal
     */
    AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
            var animation = _a.animation, resolve = _a.resolve;
            return _this.start.apply(_this, animation).then(resolve);
        });
    };
    /**
     * Stops all child animations when the host component unmounts.
     *
     * @internal
     */
    AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
    };
    return AnimationControls;
}());
/**
 * @internal
 */
var animationControls = function () { return new AnimationControls(); };

var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);

/**
 * @internal
 */
var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
    static: false,
});
var isVariantLabel = function (v) {
    return typeof v === "string" || Array.isArray(v);
};
var isAnimationControls = function (v) {
    return v instanceof AnimationControls;
};
/**
 * Set up the context for children motion components.
 *
 * We also use this opportunity to apply `initial` values
 */
var useMotionContext = function (parentContext, controls, values, isStatic, _a) {
    if (isStatic === void 0) { isStatic = false; }
    var initial = _a.initial, animate = _a.animate, variants = _a.variants, whileTap = _a.whileTap, whileHover = _a.whileHover;
    var _b;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    // Override initial with that from a parent context, if defined
    if (((_b = presenceContext) === null || _b === void 0 ? void 0 : _b.initial) !== undefined) {
        initial = presenceContext.initial;
    }
    var initialState;
    if (initial === false && !isAnimationControls(animate)) {
        initialState = animate;
    }
    else if (typeof initial !== "boolean") {
        initialState = initial;
    }
    // Track mounted status so children can detect whether they were present during their
    // parent's first render
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    // We propagate this component's ValueAnimationControls *if* we're being provided variants,
    // if we're being used to control variants, or if we're being passed animation controls.
    // Otherwise this component should be "invisible" to variant propagation. This is a slight concession
    // to Framer X where every `Frame` is a `motion` component and it might be if we change that in the future
    // that this restriction is removed.
    var shouldPropagateControls = variants ||
        isVariantLabel(animate) ||
        isVariantLabel(whileTap) ||
        isVariantLabel(whileHover) ||
        isAnimationControls(animate);
    // If this component's `initial` prop is a variant label, propagate it. Otherwise pass the parent's.
    var targetInitial = isVariantLabel(initialState)
        ? initialState
        : parentContext.initial;
    // If this is a variant tree we need to propagate the `animate` prop in case new children are added after
    // the tree initially animates.
    var targetAnimate = isVariantLabel(animate)
        ? animate
        : parentContext.animate;
    // Only allow `initial` to trigger context re-renders if this is a `static` component (ie we're on the Framer canvas)
    // or in another non-animation/interaction environment.
    var initialDependency = isStatic ? targetInitial : null;
    // Only allow `animate` to trigger context re-renders if it's a variant label. If this is an array of
    // variant labels there's probably an optimisation to deep-compare but it might be an over-optimisation.
    // We want to do this as we rely on React's component rendering order each render cycle to determine
    // the new order of any child components for the `staggerChildren` functionality.
    var animateDependency = shouldPropagateControls && isVariantLabel(targetAnimate)
        ? targetAnimate
        : null;
    // The context to provide to the child. We `useMemo` because although `controls` and `initial` are
    // unlikely to change, by making the context an object it'll be considered a new value every render.
    // So all child motion components will re-render as a result.
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return ({
        controls: shouldPropagateControls
            ? controls
            : parentContext.controls,
        initial: targetInitial,
        animate: targetAnimate,
        values: values,
        hasMounted: hasMounted,
        isReducedMotion: parentContext.isReducedMotion,
    }); }, [initialDependency, animateDependency, parentContext.isReducedMotion]);
    // Update the `static` property every render. This is unlikely to change but also essentially free.
    context.static = isStatic;
    // Set initial state. If this is a static component (ie in Framer canvas), respond to updates
    // in `initial`.
    useInitialOrEveryRender(function () {
        var initialToApply = initialState || parentContext.initial;
        initialToApply && controls.apply(initialToApply);
    }, !isStatic);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        hasMounted.current = true;
    }, []);
    return context;
};

/**
 * Creates an imperative set of controls to trigger animations.
 *
 * This allows a consolidated, uniform API for animations, to be triggered by other APIs like the `animate` prop, or the gesture handlers.
 *
 * @param values
 * @param props
 * @param ref
 * @param subscribeToParentControls
 *
 * @internal
 */
function useValueAnimationControls(config, props, subscribeToParentControls) {
    var variants = props.variants, transition = props.transition;
    var parentControls = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).controls;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    var controls = useConstant(function () { return new ValueAnimationControls(config); });
    // Reset and resubscribe children every render to ensure stagger order is correct
    if (!presenceContext || presenceContext.isPresent) {
        controls.resetChildren();
        controls.setProps(props);
        controls.setVariants(variants);
        controls.setDefaultTransition(transition);
    }
    // We have to subscribe to the parent controls within a useEffect rather than during render,
    // as
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (subscribeToParentControls && parentControls) {
            parentControls.addChild(controls);
        }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return function () {
            // Remove reference to onAnimationComplete from controls. All the MotionValues
            // are unsubscribed from this component separately. We let animations run out
            // as they might be animating other components.
            var onAnimationComplete = props.onAnimationComplete, unmountProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["onAnimationComplete"]);
            controls.setProps(unmountProps);
            parentControls && parentControls.removeChild(controls);
        };
    }, []);
    return controls;
}

var checkShouldInheritVariant = function (_a) {
    var animate = _a.animate, variants = _a.variants, _b = _a.inherit, inherit = _b === void 0 ? true : _b;
    return (inherit &&
        !!variants &&
        (!animate || animate instanceof AnimationControls));
};

/**
 * Uses the ref that is passed in, or creates a new one
 * @param external - External ref
 * @internal
 */
function useExternalRef(externalRef) {
    // We're conditionally calling `useRef` here which is sort of naughty as hooks
    // shouldn't be called conditionally. However, Framer Motion will break if this
    // condition changes anyway. It might be possible to use an invariant here to
    // make it explicit, but I expect changing `ref` is not normal behaviour.
    var ref = !externalRef || typeof externalRef === "function"
        ? Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null)
        : externalRef;
    // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
    // but `ref` types changing between renders would break Motion anyway. If we receive
    // bug reports about this, we should track the provided ref and throw an invariant
    // rather than move the conditional to inside the useEffect as this will be fired
    // for every Frame component within Framer.
    if (externalRef && typeof externalRef === "function") {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            externalRef(ref.current);
            return function () { return externalRef(null); };
        }, []);
    }
    return ref;
}

/**
 * @internal
 */
var createMotionComponent = function (_a) {
    var getValueControlsConfig = _a.getValueControlsConfig, loadFunctionalityComponents = _a.loadFunctionalityComponents, renderComponent = _a.renderComponent;
    function MotionComponent(props, externalRef) {
        var ref = useExternalRef(externalRef);
        var parentContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
        var isStatic = parentContext.static || props.static || false;
        var values = useMotionValues(props);
        var style = useMotionStyles(values, props.style, isStatic, props.transformValues);
        var shouldInheritVariant = checkShouldInheritVariant(props);
        var controlsConfig = useConstant(function () {
            return getValueControlsConfig(ref, values);
        });
        var controls = useValueAnimationControls(controlsConfig, props, shouldInheritVariant);
        var context = useMotionContext(parentContext, controls, values, isStatic, props);
        var functionality = isStatic
            ? null
            : loadFunctionalityComponents(ref, values, props, parentContext, controls, shouldInheritVariant);
        var renderedComponent = renderComponent(ref, style, values, props, isStatic);
        return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionContext.Provider, { value: context }, renderedComponent),
            Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Mount, { innerRef: ref, values: values, isStatic: isStatic }),
                functionality)));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(MotionComponent);
};

/**
 * @internal
 */
var htmlElements = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "webview",
];
/**
 * @internal
 */
var svgElements = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
];

/**
 * @internal
 */
var MotionPluginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
    transformPagePoint: function (p) { return p; },
});
/**
 * @remarks For now I think this should remain a private API for our own use
 * until we can figure out a nicer way of allowing people to add these
 *
 * @internal
 */
function MotionPlugins(_a) {
    var children = _a.children, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children"]);
    var pluginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext);
    var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pluginContext)).current;
    // Mutative to prevent triggering rerenders in all listening
    // components every time this component renders
    for (var key in props) {
        value[key] = props[key];
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionPluginContext.Provider, { value: value }, children));
}

function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return function () { return callback(); }; }, []);
}

function addDomEvent(target, eventName, handler, options) {
    if (!handler)
        return;
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    if (!eventHandler)
        return undefined;
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e) {
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var _a = primaryTouch || defaultPagePoint, pageX = _a.pageX, pageY = _a.pageY;
    return { x: pageX, y: pageY };
}
function pointFromMouse(_a) {
    var _b = _a.pageX, pageX = _b === void 0 ? 0 : _b, _c = _a.pageY, pageY = _c === void 0 ? 0 : _c;
    return { x: pageX, y: pageY };
}
function extractEventInfo(event) {
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event)
            : pointFromMouse(event),
    };
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    if (!handler)
        return;
    var listener = function (event) { return handler(event, extractEventInfo(event)); };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

var isBrowser = typeof window !== "undefined";
// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return isBrowser && window.onmousedown === null;
};

var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

/** @public */
var Point;
(function (Point) {
    /** @beta */
    Point.subtract = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    };
    /** @beta */
    Point.relativeTo = function (idOrElem) {
        var elem;
        var getElem = function () {
            // Caching element here could be leaky because of React lifecycle
            if (elem !== undefined)
                return elem;
            if (typeof idOrElem === "string") {
                elem = document.getElementById(idOrElem);
            }
            else {
                elem = idOrElem;
            }
            return elem;
        };
        return function (_a) {
            var x = _a.x, y = _a.y;
            var localElem = getElem();
            if (!localElem)
                return undefined;
            var rect = localElem.getBoundingClientRect();
            return {
                x: x - rect.left - window.scrollX,
                y: y - rect.top - window.scrollY,
            };
        };
    };
})(Point || (Point = {}));

var isViewportScrollBlocked = false;
var isBrowser$1 = typeof window !== "undefined";
if (isBrowser$1) {
    document.addEventListener("touchmove", function (event) {
        if (isViewportScrollBlocked) {
            event.preventDefault();
        }
    }, { passive: false });
}
var blockViewportScroll = function () { return (isViewportScrollBlocked = true); };
var unblockViewportScroll = function () { return (isViewportScrollBlocked = false); };

/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["distance"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        var removeOnPointerMove = addPointerEvent(window, "pointermove", function (event, info) { return _this.handlePointerMove(event, info); });
        var removeOnPointerUp = addPointerEvent(window, "pointerup", function (event, info) { return _this.handlePointerUp(event, info); });
        this.removeListeners = function () {
            removeOnPointerMove && removeOnPointerMove();
            removeOnPointerUp && removeOnPointerUp();
        };
    }
    PanSession.prototype.handlePointerMove = function (event, info) {
        this.lastMoveEvent = event;
        this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
        // Because Safari doesn't trigger mouseup events when it's above a `<select>`
        if (isMouseEvent(event) && event.buttons === 0) {
            this.handlePointerUp(event, info);
            return;
        }
        // Throttle mouse move event to once per frame
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(this.updatePoint, true);
    };
    PanSession.prototype.handlePointerUp = function (event, info) {
        this.end();
        var onEnd = this.handlers.onEnd;
        if (!onEnd)
            return;
        var panInfo = getPanInfo(transformPoint(info, this.transformPagePoint), this.history);
        onEnd && onEnd(event, panInfo);
    };
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(this.updatePoint);
        unblockViewportScroll();
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: Point.subtract(point, lastDevicePoint(history)),
        offset: Point.subtract(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a, ref) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

var order = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function (gesture) {
    return order.indexOf(gesture) + 1;
};

function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}

var tapGesturePriority = getGesturePriority("whileTap");
/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a, ref) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, controls = _a.controls;
    var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isTapping = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    var cancelPointerEventListener = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    function removePointerUp() {
        cancelPointerEventListener.current &&
            cancelPointerEventListener.current();
        cancelPointerEventListener.current = null;
    }
    if (whileTap && controls) {
        controls.setOverride(whileTap, tapGesturePriority);
    }
    // We load this event handler into a ref so we can later refer to
    // onPointerUp.current which will always have reference to the latest props
    var onPointerUp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    onPointerUp.current = function (event, info) {
        var element = ref.current;
        removePointerUp();
        if (!isTapping.current || !element)
            return;
        isTapping.current = false;
        if (controls && whileTap) {
            controls.clearOverride(tapGesturePriority);
        }
        // Check the gesture lock - if we get it, it means no drag gesture is active
        // and we can safely fire the tap gesture.
        var openGestureLock = getGlobalLock(true);
        if (!openGestureLock)
            return;
        openGestureLock();
        if (!isNodeOrChild(element, event.target)) {
            onTapCancel && onTapCancel(event, info);
        }
        else {
            onTap && onTap(event, info);
        }
    };
    function onPointerDown(event, info) {
        removePointerUp();
        cancelPointerEventListener.current = addPointerEvent(window, "pointerup", function (event, info) { return onPointerUp.current(event, info); });
        var element = ref.current;
        if (!element || isTapping.current)
            return;
        isTapping.current = true;
        onTapStart && onTapStart(event, info);
        if (controls && whileTap) {
            controls.startOverride(tapGesturePriority);
        }
    }
    usePointerEvent(ref, "pointerdown", hasTapListeners ? onPointerDown : undefined);
    useUnmountEffect(removePointerUp);
}

var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function (listener) { return function (event, info) {
    if (isMouseEvent(event))
        listener(event, info);
}; };
/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useHoverGesture(_a, ref) {
    var whileHover = _a.whileHover, onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, controls = _a.controls;
    if (whileHover && controls) {
        controls.setOverride(whileHover, hoverPriority);
    }
    usePointerEvent(ref, "pointerenter", filterTouch(function (event, info) {
        if (onHoverStart)
            onHoverStart(event, info);
        if (whileHover && controls) {
            controls.startOverride(hoverPriority);
        }
    }));
    usePointerEvent(ref, "pointerleave", filterTouch(function (event, info) {
        if (onHoverEnd)
            onHoverEnd(event, info);
        if (whileHover && controls) {
            controls.clearOverride(hoverPriority);
        }
    }));
}

/**
 * Add pan and tap gesture recognition to an element.
 *
 * @param props - Gesture event handlers
 * @param ref - React `ref` containing a DOM `Element`
 * @public
 */
function useGestures(props, ref) {
    usePanGesture(props, ref);
    useTapGesture(props, ref);
    useHoverGesture(props, ref);
}

var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };

var gestureProps = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
];
var Gestures = {
    key: "gestures",
    shouldRender: function (props) {
        return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
    },
    Component: makeRenderlessComponent(function (_a) {
        var innerRef = _a.innerRef, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["innerRef"]);
        useGestures(props, innerRef);
    }),
};

var isRefObject = function (ref) {
    return typeof ref === "object" && ref.hasOwnProperty("current");
};

var noop = function (v) { return v; };
var ComponentDragControls = /** @class */ (function () {
    function ComponentDragControls(_a) {
        var ref = _a.ref, values = _a.values, controls = _a.controls;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted t/r/b/l boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {
            transformPagePoint: noop,
        };
        /**
         * References to the MotionValues used for tracking the current dragged point.
         *
         * @internal
         */
        this.point = {};
        /**
         * The origin point for the current drag gesture.
         *
         * @internal
         */
        this.origin = {
            x: motionValue(0),
            y: motionValue(0),
        };
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        /**
         * A reference to the previous constraints bounding box
         *
         * @internal
         */
        this.prevConstraintsBox = {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        };
        this.ref = ref;
        this.values = values;
        this.controls = controls;
    }
    /**
     * Start dragging the host component.
     *
     * @param event - The originating pointer event.
     * @param options -
     *
     * @public
     */
    ComponentDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).snapToCursor, snapToCursor = _b === void 0 ? false : _b;
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
            // Initiate viewport scroll blocking on touch start. This is a very aggressive approach
            // which has come out of the difficulty in us being able to do this once a scroll gesture
            // has initiated in mobile browsers. This means if there's a horizontally-scrolling carousel
            // on a page we can't let a user scroll the page itself from it. Ideally what we'd do is
            // trigger this once we've got a scroll direction determined. This approach sort-of worked
            // but if the component was dragged too far in a single frame page scrolling would initiate.
            blockViewportScroll();
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            bothAxis(function (axis) {
                var axisPoint = _this.point[axis];
                axisPoint && axisPoint.stop();
            });
        };
        var onStart = function (event, info) {
            // If constraints are an element, resolve them again in case they've updated.
            if (_this.constraintsNeedResolution) {
                var _a = _this.props, dragConstraints = _a.dragConstraints, transformPagePoint_1 = _a.transformPagePoint;
                _this.constraints = calculateConstraintsFromDom(dragConstraints, _this.ref, _this.point, transformPagePoint_1);
                _this.applyConstraintsToPoint();
            }
            // Set point origin and stop any existing animations.
            bothAxis(function (axis) {
                var axisPoint = _this.point[axis];
                if (!axisPoint)
                    return;
                _this.origin[axis].set(axisPoint.get());
            });
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _b = _this.props, drag = _b.drag, dragPropagation = _b.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = getGlobalLock(drag);
                if (!_this.openGlobalLock)
                    return;
            }
            _this.isDragging = true;
            _this.currentDirection = null;
            var onDragStart = _this.props.onDragStart;
            onDragStart &&
                onDragStart(event, convertPanToDrag(info, _this.point));
        };
        var onMove = function (event, info) {
            var _a = _this.props, dragPropagation = _a.dragPropagation, dragDirectionLock = _a.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    var onDirectionLock = _this.props.onDirectionLock;
                    onDirectionLock && onDirectionLock(_this.currentDirection);
                }
                return;
            }
            _this.updatePoint("x", offset);
            _this.updatePoint("y", offset);
            var onDrag = _this.props.onDrag;
            onDrag && onDrag(event, convertPanToDrag(info, _this.point));
        };
        var onEnd = function (event, info) {
            _this.stop(event, info);
        };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    ComponentDragControls.prototype.cancelDrag = function () {
        unblockViewportScroll();
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
    };
    ComponentDragControls.prototype.stop = function (event, info) {
        var _a;
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        else {
            this.recordBoxInfo(this.constraints);
        }
        onDragEnd && onDragEnd(event, convertPanToDrag(info, this.point));
    };
    ComponentDragControls.prototype.recordBoxInfo = function (constraints) {
        if (constraints) {
            var right = constraints.right, left = constraints.left, bottom = constraints.bottom, top_1 = constraints.top;
            this.prevConstraintsBox.width = (right || 0) - (left || 0);
            this.prevConstraintsBox.height = (bottom || 0) - (top_1 || 0);
        }
        if (this.point.x)
            this.prevConstraintsBox.x = this.point.x.get();
        if (this.point.y)
            this.prevConstraintsBox.y = this.point.y.get();
    };
    ComponentDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        var transformPagePoint = this.props.transformPagePoint;
        var point = extractEventInfo(event).point;
        var boundingBox = getBoundingBox(this.ref, transformPagePoint);
        var center = {
            x: boundingBox.width / 2 + boundingBox.left + window.scrollX,
            y: boundingBox.height / 2 + boundingBox.top + window.scrollY,
        };
        var offset = {
            x: point.x - center.x,
            y: point.y - center.y,
        };
        bothAxis(function (axis) {
            var point = _this.point[axis];
            if (!point)
                return;
            _this.origin[axis].set(point.get());
        });
        this.updatePoint("x", offset);
        this.updatePoint("y", offset);
    };
    ComponentDragControls.prototype.setPoint = function (axis, value) {
        this.point[axis] = value;
    };
    ComponentDragControls.prototype.updatePoint = function (axis, offset) {
        var _a = this.props, drag = _a.drag, dragElastic = _a.dragElastic;
        var axisPoint = this.point[axis];
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection) || !axisPoint)
            return;
        var current = applyConstraints(axis, this.origin[axis].get() + offset[axis], this.constraints, dragElastic);
        axisPoint.set(current);
    };
    ComponentDragControls.prototype.updateProps = function (_a) {
        var _this = this;
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? true : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
        var _dragValueX = remainingProps._dragValueX, _dragValueY = remainingProps._dragValueY, dragOriginX = remainingProps.dragOriginX, dragOriginY = remainingProps.dragOriginY;
        if (dragOriginX)
            this.origin.x = dragOriginX;
        if (dragOriginY)
            this.origin.y = dragOriginY;
        // Get the `MotionValue` for both draggable axes, or create them if they don't already
        // exist on this component.
        bothAxis(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection))
                return;
            var defaultValue = axis === "x" ? _dragValueX : _dragValueY;
            _this.setPoint(axis, defaultValue || _this.values.get(axis, 0));
        });
        // If `dragConstraints` is a React `ref`, we should resolve the constraints once the
        // component has rendered.
        this.constraintsNeedResolution = isRefObject(dragConstraints);
        this.constraints = this.constraintsNeedResolution
            ? this.constraints || false
            : dragConstraints;
    };
    ComponentDragControls.prototype.applyConstraintsToPoint = function (constraints) {
        var _this = this;
        if (constraints === void 0) { constraints = this.constraints; }
        return bothAxis(function (axis) {
            var axisPoint = _this.point[axis];
            axisPoint &&
                !axisPoint.isAnimating() &&
                applyConstraints(axis, axisPoint, constraints, 0);
        });
    };
    ComponentDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, _dragValueX = _a._dragValueX, _dragValueY = _a._dragValueY, _dragTransitionControls = _a._dragTransitionControls;
        var momentumAnimations = bothAxis(function (axis) {
            var _a;
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints
                ? getConstraints(axis, _this.constraints)
                : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var animationControls = _dragTransitionControls || _this.controls;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1 }, dragTransition), transition);
            var externalAxisMotionValue = axis === "x" ? _dragValueX : _dragValueY;
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return externalAxisMotionValue
                ? startAnimation(axis, externalAxisMotionValue, 0, inertia)
                : animationControls.start((_a = {},
                    _a[axis] = 0,
                    _a.transition = inertia,
                    _a));
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            _this.recordBoxInfo(_this.constraints);
            _this.scalePoint();
            var onDragTransitionEnd = _this.props.onDragTransitionEnd;
            onDragTransitionEnd && onDragTransitionEnd();
        });
    };
    ComponentDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, dragConstraints = _a.dragConstraints, transformPagePoint = _a.transformPagePoint;
        if (!isRefObject(dragConstraints))
            return;
        var constraintsBox = getBoundingBox(dragConstraints, transformPagePoint);
        var draggableBox = getBoundingBox(this.ref, transformPagePoint);
        // Scale a point relative to the transformation of a constraints-providing element.
        var scaleAxisPoint = function (axis, dimension) {
            var pointToScale = _this.point[axis];
            if (!pointToScale)
                return;
            // Stop any current animations as they bug out if you resize during one
            if (pointToScale.isAnimating()) {
                pointToScale.stop();
                _this.recordBoxInfo();
                return;
            }
            // If the previous dimension was `0` (default), set `scale` to `1` to prevent
            // divide by zero errors.
            var scale = _this.prevConstraintsBox[dimension]
                ? (constraintsBox[dimension] - draggableBox[dimension]) /
                    _this.prevConstraintsBox[dimension]
                : 1;
            pointToScale.set(_this.prevConstraintsBox[axis] * scale);
        };
        scaleAxisPoint("x", "width");
        scaleAxisPoint("y", "height");
    };
    ComponentDragControls.prototype.mount = function (element) {
        var _this = this;
        var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        var stopResizeListener = addDomEvent(window, "resize", function () {
            return _this.scalePoint();
        });
        if (this.constraintsNeedResolution) {
            var _a = this.props, dragConstraints = _a.dragConstraints, transformPagePoint = _a.transformPagePoint;
            var constraints = calculateConstraintsFromDom(dragConstraints, this.ref, this.point, transformPagePoint);
            this.applyConstraintsToPoint(constraints);
            this.recordBoxInfo(constraints);
        }
        else if (!this.isDragging && this.constraints) {
            this.applyConstraintsToPoint();
        }
        return function () {
            stopPointerListener && stopPointerListener();
            stopResizeListener && stopResizeListener();
            _this.cancelDrag();
        };
    };
    return ComponentDragControls;
}());
// Call a handler once for each axis
function bothAxis(handler) {
    return [handler("x"), handler("y")];
}
function convertPanToDrag(info, point) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, info), { point: {
            x: point.x ? point.x.get() : 0,
            y: point.y ? point.y.get() : 0,
        } });
}
function getConstraints(axis, _a) {
    var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    if (axis === "x") {
        return { min: left, max: right };
    }
    else {
        return { min: top, max: bottom };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}
/**
 * Takes a parent Element and a draggable Element and returns pixel-based drag constraints.
 *
 * @param constraintsRef
 * @param draggableRef
 */
function calculateConstraintsFromDom(constraintsRef, draggableRef, point, transformPagePoint) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(constraintsRef.current !== null && draggableRef.current !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var parentBoundingBox = getBoundingBox(constraintsRef, transformPagePoint);
    var draggableBoundingBox = getBoundingBox(draggableRef, transformPagePoint);
    var left = parentBoundingBox.left -
        draggableBoundingBox.left +
        getCurrentOffset(point.x);
    var top = parentBoundingBox.top -
        draggableBoundingBox.top +
        getCurrentOffset(point.y);
    var right = parentBoundingBox.width - draggableBoundingBox.width + left;
    var bottom = parentBoundingBox.height - draggableBoundingBox.height + top;
    return { top: top, left: left, right: right, bottom: bottom };
}
function getBoundingBox(ref, transformPagePoint) {
    var rect = ref.current.getBoundingClientRect();
    var _a = transformPagePoint({
        x: rect.left,
        y: rect.top,
    }), left = _a.x, top = _a.y;
    var _b = transformPagePoint({
        x: rect.width,
        y: rect.height,
    }), width = _b.x, height = _b.y;
    return { left: left, top: top, width: width, height: height };
}
function getCurrentOffset(point) {
    return point ? point.get() : 0;
}
function applyConstraints(axis, value, constraints, dragElastic) {
    var constrainedValue = value instanceof MotionValue ? value.get() : value;
    if (!constraints) {
        return constrainedValue;
    }
    var _a = getConstraints(axis, constraints), min = _a.min, max = _a.max;
    if (min !== undefined && constrainedValue < min) {
        constrainedValue = dragElastic
            ? applyOverdrag(min, constrainedValue, dragElastic)
            : Math.max(min, constrainedValue);
    }
    else if (max !== undefined && constrainedValue > max) {
        constrainedValue = dragElastic
            ? applyOverdrag(max, constrainedValue, dragElastic)
            : Math.min(max, constrainedValue);
    }
    if (value instanceof MotionValue) {
        value.set(constrainedValue);
    }
    return constrainedValue;
}
function applyOverdrag(origin, current, dragElastic) {
    var dragFactor = typeof dragElastic === "number" ? dragElastic : 0.35;
    return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["mix"])(origin, current, dragFactor);
}

/**
 * A hook that allows an element to be dragged.
 *
 * @param param
 * @param ref
 * @param values
 * @param controls
 *
 * @internal
 */
function useDrag(props, ref, values, controls) {
    var groupDragControls = props.dragControls;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionPluginContext).transformPagePoint;
    var dragControls = useConstant(function () { return new ComponentDragControls({ ref: ref, values: values, controls: controls }); });
    dragControls.updateProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { transformPagePoint: transformPagePoint }));
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return dragControls.mount(ref.current); }, []);
}

var Drag = {
    key: "drag",
    shouldRender: function (props) { return !!props.drag; },
    Component: makeRenderlessComponent(function (_a) {
        var innerRef = _a.innerRef, values = _a.values, controls = _a.controls, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["innerRef", "values", "controls"]);
        return useDrag(props, innerRef, values, controls);
    }),
};

function isCSSVariable(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var token = match[1], fallback = match[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = parseCSSVariable(current), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved;
    }
    else if (isCSSVariable(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(values, ref, _a, transitionEnd) {
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
    var element = ref.current;
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    values.forEach(function (value) {
        var current = value.get();
        if (!isCSSVariable(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd && transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target: target, transitionEnd: transitionEnd };
}

var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_6__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = stylefire__WEBPACK_IMPORTED_MODULE_4__["transformProps"].filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(values, elementStyler) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = values.get(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        elementStyler.render();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var width = _a.width;
        return width;
    },
    height: function (_a) {
        var height = _a.height;
        return height;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var height = _a.height;
        var top = _b.top;
        return parseFloat(top) + height;
    },
    right: function (_a, _b) {
        var width = _a.width;
        var left = _b.left;
        return parseFloat(left) + width;
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, values, element, elementStyler, changedKeys) {
    var originBbox = element.getBoundingClientRect();
    var elementComputedStyle = getComputedStyle(element);
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        elementStyler.set("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    elementStyler.render();
    var targetBbox = element.getBoundingClientRect();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = values.get(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (values, ref, target, transitionEnd) {
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    var element = ref.current;
    var elementStyler = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = targetPositionalKeys.reduce(function (acc, key) {
        var value = values.get(key);
        if (!value)
            return acc;
        var from = value.get();
        var to = target[key];
        var fromType = getDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = getDimensionValueType(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(toType === fromType ||
                        (isNumOrPxType(fromType) &&
                            isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(getDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = getDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_6__["px"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(values, elementStyler);
                    hasAttemptedToRemoveTransformValues = true;
                }
                acc.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
        return acc;
    }, []);
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, values, element, elementStyler, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                values.get(key).set(value);
            });
        }
        // Reapply original values
        elementStyler.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @param values
 * @param ref
 * @param target
 * @param transitionEnd
 * @internal
 */
function unitConversion(values, ref, target, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(values, ref, target, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}

var parseDomVariant = function (values, ref) {
    return function (target, transitionEnd) {
        var resolved = resolveCSSVariables(values, ref, target, transitionEnd);
        target = resolved.target;
        transitionEnd = resolved.transitionEnd;
        return unitConversion(values, ref, target, transitionEnd);
    };
};

function useForceUpdate() {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () { return setForcedRenderCount(forcedRenderCount + 1); }, [
        forcedRenderCount,
    ]);
}

var SyncLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/**
 * When layout changes happen asynchronously to their instigating render (ie when exiting
 * children of `AnimatePresence` are removed), `SyncLayout` can wrap parent and sibling
 * components that need to animate as a result of this layout change.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = ({ isVisible }) => {
 *   return (
 *     <SyncLayout>
 *       <AnimatePresence>
 *         {isVisible && (
 *           <motion.div exit={{ opacity: 0 }} />
 *         )}
 *       </AnimatePresence>
 *       <motion.div positionTransition />
 *     </SyncLayout>
 *   )
 * }
 * ```
 *
 * @internalremarks
 *
 * The way this component works is by memoising a function and passing it down via context.
 * The function, when called, updates the local state, which is used to invalidate the
 * memoisation cache. A new function is called, performing a synced re-render of components
 * that are using the SyncLayoutContext.
 *
 * @internal
 */
var UnstableSyncLayout = function (_a) {
    var children = _a.children;
    var forceUpdate = useForceUpdate();
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SyncLayoutContext.Provider, { value: forceUpdate }, children));
};

var _a;
var StepName;
(function (StepName) {
    StepName["Prepare"] = "prepare";
    StepName["Read"] = "read";
    StepName["Render"] = "render";
})(StepName || (StepName = {}));
var stepOrder = [StepName.Prepare, StepName.Read, StepName.Render];
var jobs = stepOrder.reduce(function (acc, key) {
    acc[key] = [];
    return acc;
}, {});
var jobsNeedProcessing = false;
function flushCallbackList(list) {
    var numJobs = list.length;
    for (var i = 0; i < numJobs; i++) {
        list[i]();
    }
    list.length = 0;
}
function flushAllJobs() {
    if (!jobsNeedProcessing)
        return;
    flushCallbackList(jobs.prepare);
    flushCallbackList(jobs.read);
    flushCallbackList(jobs.render);
    jobsNeedProcessing = false;
}
// Note: The approach of schedulng jobs during the render step is incompatible with concurrent mode
// where multiple renders might happen without a DOM update. This would result in unneccessary batched
// jobs. But this was already a problem with our previous approach to positionTransition.
// Hopefully the React team offer a getSnapshotBeforeUpdate-esque hook and we can move to that.
var createUseSyncEffect = function (stepName) { return function (callback) {
    if (!callback)
        return;
    jobsNeedProcessing = true;
    jobs[stepName].push(callback);
}; };
var layoutSync = (_a = {},
    _a[StepName.Prepare] = createUseSyncEffect(StepName.Prepare),
    _a[StepName.Read] = createUseSyncEffect(StepName.Read),
    _a[StepName.Render] = createUseSyncEffect(StepName.Render),
    _a.flush = flushAllJobs,
    _a);

function isHTMLElement(element) {
    return element instanceof HTMLElement;
}

var defaultLayoutTransition = {
    duration: 0.8,
    ease: [0.45, 0.05, 0.19, 1.0],
};
var defaultPositionTransition = underDampedSpring();
function getDefaultLayoutTransition(isPositionOnly) {
    return isPositionOnly ? defaultPositionTransition : defaultLayoutTransition;
}
function isResolver(transition) {
    return typeof transition === "function";
}
var axisLabels = {
    x: {
        id: "x",
        size: "width",
        min: "left",
        max: "right",
        origin: "originX",
    },
    y: {
        id: "y",
        size: "height",
        min: "top",
        max: "bottom",
        origin: "originY",
    },
};
function centerOf(min, max) {
    return (min + max) / 2;
}
function calcAxisDelta(prev, next, names) {
    var _a;
    var sizeDelta = prev[names.size] - next[names.size];
    var origin = 0.5;
    // If the element has changed size we want to check whether either side is in
    // the same position before/after the layout transition. If so, we can anchor
    // the element to that position and only animate its size.
    if (sizeDelta) {
        if (prev[names.min] === next[names.min]) {
            origin = 0;
        }
        else if (prev[names.max] === next[names.max]) {
            origin = 1;
        }
    }
    var delta = (_a = {},
        _a[names.size] = sizeDelta,
        _a[names.origin] = origin,
        _a[names.id] = 
        // Only measure a position delta if we haven't anchored to one side
        origin === 0.5
            ? centerOf(prev[names.min], prev[names.max]) -
                centerOf(next[names.min], next[names.max])
            : 0,
        _a);
    return delta;
}
function calcDelta(prev, next) {
    var delta = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, calcAxisDelta(prev, next, axisLabels.x)), calcAxisDelta(prev, next, axisLabels.y));
    return delta;
}
var offset = {
    getLayout: function (_a) {
        var offset = _a.offset;
        return offset;
    },
    measure: function (element) {
        var offsetLeft = element.offsetLeft, offsetTop = element.offsetTop, offsetWidth = element.offsetWidth, offsetHeight = element.offsetHeight;
        return {
            left: offsetLeft,
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            width: offsetWidth,
            height: offsetHeight,
        };
    },
};
var boundingBox = {
    getLayout: function (_a) {
        var boundingBox = _a.boundingBox;
        return boundingBox;
    },
    measure: function (element) {
        var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height, right = _a.right, bottom = _a.bottom;
        return { left: left, top: top, width: width, height: height, right: right, bottom: bottom };
    },
};
function readPositionStyle(element) {
    return window.getComputedStyle(element).position;
}
function getLayoutType(prev, next, isPositionOnly) {
    return isPositionOnly && prev === next ? offset : boundingBox;
}
function isSizeKey(key) {
    return key === "width" || key === "height";
}
function getTransition(_a) {
    var layoutTransition = _a.layoutTransition, positionTransition = _a.positionTransition;
    return layoutTransition || positionTransition;
}
var LayoutAnimation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAnimation, _super);
    function LayoutAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Measure the current state of the DOM before it's updated, and schedule checks to see
    // if it's changed as a result of a React render.
    LayoutAnimation.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, innerRef = _a.innerRef, positionTransition = _a.positionTransition, values = _a.values, controls = _a.controls;
        var element = innerRef.current;
        if (!isHTMLElement(element))
            return;
        var layoutTransition = getTransition(this.props);
        var isPositionOnly = !!positionTransition;
        var positionStyle = readPositionStyle(element);
        var prev = {
            offset: offset.measure(element),
            boundingBox: boundingBox.measure(element),
        };
        var transform;
        var next;
        var compare;
        // We split the unsetting, read and reapplication of the `transform` style prop into
        // different steps via useSyncEffect. Multiple components might all be doing the same
        // thing and by splitting these jobs and flushing them in batches we prevent layout thrashing.
        layoutSync.prepare(function () {
            // Unset the transform of all layoutTransition components so we can accurately measure
            // the target bounding box
            transform = element.style.transform;
            element.style.transform = "";
        });
        layoutSync.read(function () {
            // Read the target VisualInfo of all layoutTransition components
            next = {
                offset: offset.measure(element),
                boundingBox: boundingBox.measure(element),
            };
            var nextPosition = readPositionStyle(element);
            compare = getLayoutType(positionStyle, nextPosition, isPositionOnly);
        });
        layoutSync.render(function () {
            // Reverse the layout delta of all newly laid-out layoutTransition components into their
            // prev visual state and then animate them into their new one using transforms.
            var prevLayout = compare.getLayout(prev);
            var nextLayout = compare.getLayout(next);
            var delta = calcDelta(prevLayout, nextLayout);
            var hasAnyChanged = delta.x || delta.y || delta.width || delta.height;
            if (!hasAnyChanged) {
                // If layout hasn't changed, reapply the transform and get out of here.
                transform && (element.style.transform = transform);
                return;
            }
            Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(element).set({
                originX: delta.originX,
                originY: delta.originY,
            });
            syncRenderSession.open();
            var target = {};
            var transition = {};
            var transitionDefinition = isResolver(layoutTransition)
                ? layoutTransition({ delta: delta })
                : layoutTransition;
            function makeTransition(layoutKey, transformKey, targetValue, visualOrigin) {
                // If this dimension hasn't changed, early return
                var deltaKey = isSizeKey(layoutKey) ? layoutKey : transformKey;
                if (!delta[deltaKey])
                    return;
                var baseTransition = typeof transitionDefinition === "boolean"
                    ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getDefaultLayoutTransition(isPositionOnly)) : transitionDefinition;
                var value = values.get(transformKey, targetValue);
                var velocity = value.getVelocity();
                transition[transformKey] = baseTransition[transformKey]
                    ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransition[transformKey]) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransition);
                if (transition[transformKey].velocity === undefined) {
                    transition[transformKey].velocity = velocity || 0;
                }
                // The target value of all transforms is the default value of that prop (ie x = 0, scaleX = 1)
                // This is because we're inverting the layout change with `transform` and then animating to `transform: none`
                target[transformKey] = targetValue;
                var offsetToApply = !isSizeKey(layoutKey) && compare === offset
                    ? value.get()
                    : 0;
                value.set(visualOrigin + offsetToApply);
            }
            makeTransition("left", "x", 0, delta.x);
            makeTransition("top", "y", 0, delta.y);
            if (!isPositionOnly) {
                makeTransition("width", "scaleX", 1, prev.boundingBox.width / next.boundingBox.width);
                makeTransition("height", "scaleY", 1, prev.boundingBox.height / next.boundingBox.height);
            }
            target.transition = transition;
            // Only start the transition if `transitionDefinition` isn't `false`. Otherwise we want
            // to leave the values in their newly-inverted state and let the user cope with the rest.
            transitionDefinition && controls.start(target);
            // Force a render to ensure there's no visual flickering
            syncRenderSession.flush();
        });
        return null;
    };
    LayoutAnimation.prototype.componentDidUpdate = function () {
        layoutSync.flush();
    };
    LayoutAnimation.prototype.render = function () {
        return null;
    };
    LayoutAnimation.contextType = SyncLayoutContext;
    return LayoutAnimation;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var Layout = {
    key: "layout",
    shouldRender: function (_a) {
        var positionTransition = _a.positionTransition, layoutTransition = _a.layoutTransition;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!(positionTransition && layoutTransition), "Don't set both positionTransition and layoutTransition on the same component");
        return (typeof window !== "undefined" &&
            !!(positionTransition || layoutTransition));
    },
    Component: LayoutAnimation,
};

/**
 * A list of all valid MotionProps
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "static",
    "positionTransition",
    "layoutTransition",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "_dragValueX",
    "_dragValueY",
    "_dragTransitionControls",
    "dragOriginX",
    "dragOriginY",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileHover",
    "whileTap",
    "onHoverEnd",
    "onHoverStart",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

var AnimatePropType;
(function (AnimatePropType) {
    AnimatePropType["Target"] = "Target";
    AnimatePropType["VariantLabel"] = "VariantLabel";
    AnimatePropType["AnimationSubscription"] = "AnimationSubscription";
})(AnimatePropType || (AnimatePropType = {}));

function shallowCompare(next, prev) {
    if (prev === null)
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

var hasUpdated = function (prev, next) {
    return (next !== undefined &&
        (Array.isArray(prev) && Array.isArray(next)
            ? !shallowCompare(next, prev)
            : prev !== next));
};
function targetWithoutTransition(_a, mergeTransitionEnd) {
    if (mergeTransitionEnd === void 0) { mergeTransitionEnd = false; }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    return mergeTransitionEnd
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd)
        : target;
}
/**
 * Handle the `animate` prop when its an object of values, ie:
 *
 * ```jsx
 * <motion.div animate={{ opacity: 1 }} />
 * ```
 *
 * @internalremarks
 * It might be worth consolidating this with `use-variants`
 *
 * ```jsx
 * <motion.div animate="visible" />
 * ```
 *
 * @param target
 * @param controls
 * @param values
 * @param transition
 *
 * @internal
 */
function useAnimateProp(targetAndTransition, controls, values, defaultTransition) {
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    var prevValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (!prevValues.current) {
        prevValues.current = targetWithoutTransition(targetAndTransition, true);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var targetToAnimate = {};
        // These are the values we're actually animating
        var animatingTarget = targetWithoutTransition(targetAndTransition);
        // This is the target as it'll be once transitionEnd values are applied
        var finalTarget = targetWithoutTransition(targetAndTransition, true);
        // Detect which values have changed between renders
        for (var key in animatingTarget) {
            // This value should animate on mount if this value doesn't already exist (wasn't
            // defined in `style` or `initial`) or if it does exist and it's already changed.
            var shouldAnimateOnMount = isInitialRender.current &&
                (!values.has(key) ||
                    values.get(key).get() !== finalTarget[key]);
            // If this value has updated between renders or it's we're animating this value on mount,
            // add it to the animate target.
            var isValidValue = finalTarget[key] !== null;
            var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
            if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
                targetToAnimate[key] = animatingTarget[key];
            }
        }
        isInitialRender.current = false;
        prevValues.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevValues.current), finalTarget);
        if (Object.keys(targetToAnimate).length) {
            controls.start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
        }
    }, [targetAndTransition]);
}

var labelsToArray = function (label) {
    if (!label) {
        return [];
    }
    if (Array.isArray(label)) {
        return label;
    }
    return [label];
};
var resolveVariantLabels = function (variant) {
    var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
    return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
/**
 * Hooks in React sometimes accept a dependency array as their final argument. (ie useEffect/useMemo)
 * When values in this array change, React re-runs the dependency. However if the array
 * contains a variable number of items, React throws an error.
 */
var asDependencyList = function (list) { return [
    list.join(","),
]; };

var hasVariantChanged = function (oldVariant, newVariant) {
    return oldVariant.join(",") !== newVariant.join(",");
};
/**
 * Handle variants and the `animate` prop when its set as variant labels.
 *
 * @param initial - Initial variant(s)
 * @param animate - Variant(s) to animate to
 * @param inherit - `true` is inheriting animations from parent
 * @param controls - Animation controls
 *
 * @internal
 */
function useVariants(initial, animate, inherit, controls) {
    var targetVariants = resolveVariantLabels(animate);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
    var parentAlreadyMounted = context.hasMounted && context.hasMounted.current;
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var shouldAnimate = false;
        if (inherit) {
            // If we're inheriting variant changes and the parent has already
            // mounted when this component loads, we need to manually trigger
            // this animation.
            shouldAnimate = !!parentAlreadyMounted;
            targetVariants = resolveVariantLabels(context.animate);
        }
        else {
            shouldAnimate =
                hasMounted.current ||
                    hasVariantChanged(resolveVariantLabels(initial), targetVariants);
        }
        shouldAnimate && controls.start(targetVariants);
        hasMounted.current = true;
    }, asDependencyList(targetVariants));
}

/**
 * `useAnimationGroupSubscription` allows a component to subscribe to an
 * externally-created `AnimationControls`, created by the `useAnimation` hook.
 *
 * @param animation
 * @param controls
 *
 * @internal
 */
function useAnimationGroupSubscription(animation, controls) {
    var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return animation.subscribe(controls); }, [
        animation,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return function () {
        unsubscribe && unsubscribe();
    }; }, [unsubscribe]);
}

var _a$1, _b;
var AnimatePropComponents = (_a$1 = {},
    _a$1[AnimatePropType.Target] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls, values = _a.values, transition = _a.transition;
        return useAnimateProp(animate, controls, values, transition);
    }),
    _a$1[AnimatePropType.VariantLabel] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, _b = _a.inherit, inherit = _b === void 0 ? true : _b, controls = _a.controls, initial = _a.initial;
        return useVariants(initial, animate, inherit, controls);
    }),
    _a$1[AnimatePropType.AnimationSubscription] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls;
        return useAnimationGroupSubscription(animate, controls);
    }),
    _a$1);
var isVariantLabel$1 = function (prop) {
    return Array.isArray(prop) || typeof prop === "string";
};
var isAnimationSubscription = function (_a) {
    var animate = _a.animate;
    return animate instanceof AnimationControls;
};
var animationProps = ["initial", "animate", "whileTap", "whileHover"];
var animatePropTypeTests = (_b = {},
    _b[AnimatePropType.Target] = function (props) {
        return (props.animate !== undefined &&
            !isVariantLabel$1(props.animate) &&
            !isAnimationSubscription(props));
    },
    _b[AnimatePropType.VariantLabel] = function (props) {
        return (props.variants !== undefined ||
            animationProps.some(function (key) { return typeof props[key] === "string"; }));
    },
    _b[AnimatePropType.AnimationSubscription] = isAnimationSubscription,
    _b);
var getAnimationComponent = function (props) {
    var animatePropType = undefined;
    for (var key in AnimatePropType) {
        if (animatePropTypeTests[key](props)) {
            animatePropType = key;
        }
    }
    return animatePropType ? AnimatePropComponents[animatePropType] : undefined;
};

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
    if (context === null)
        return [true];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(register, []);
    return !isPresent && onExitComplete ? [false, onExitComplete] : [true];
}

var Exit = {
    key: "exit",
    shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
    Component: makeRenderlessComponent(function (props) {
        var _a;
        var animate = props.animate, controls = props.controls, exit = props.exit;
        var _b = usePresence(), isPresent = _b[0], onExitComplete = _b[1];
        var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PresenceContext);
        var isPlayingExitAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
        var custom = ((_a = presenceContext) === null || _a === void 0 ? void 0 : _a.custom) !== undefined
            ? presenceContext.custom
            : props.custom;
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            if (!isPresent) {
                if (!isPlayingExitAnimation.current && exit) {
                    controls.setProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { custom: custom }));
                    controls.start(exit).then(onExitComplete);
                }
                isPlayingExitAnimation.current = true;
            }
            else if (isPlayingExitAnimation.current &&
                animate &&
                !(animate instanceof AnimationControls)) {
                controls.start(animate);
            }
            if (isPresent) {
                isPlayingExitAnimation.current = false;
            }
        }, [isPresent]);
    }),
};

var isPropValid = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterValidProps(props) {
    var domProps = {};
    for (var key in props) {
        if (isPropValid(key)) {
            domProps[key] = props[key];
        }
    }
    return domProps;
}
var buildHTMLProps = function (values, style, isStatic, isDrag) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var props = {
        style: buildStyleAttr(values, style, isStatic),
    };
    if (isDrag) {
        // Disable text selection
        props.style.userSelect = "none";
        // Disable the ghost element when a user drags
        props.draggable = false;
    }
    return props;
};
var buildSVGProps = function (values, style) {
    var motionValueStyles = resolveCurrent(values);
    var props = Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["buildSVGAttrs"])(motionValueStyles, undefined, undefined, undefined, undefined, false);
    props.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style), props.style);
    return props;
};
var functionalityComponents = [Layout, Drag, Gestures, Exit];
var numFunctionalityComponents = functionalityComponents.length;
/**
 * Create a configuration for `motion` components that provides DOM-specific functionality.
 *
 * @internal
 */
function createDomMotionConfig(Component) {
    var isDOM = typeof Component === "string";
    var isSVG = isDOM && svgElements.indexOf(Component) !== -1;
    return {
        renderComponent: function (ref, style, values, props, isStatic) {
            var forwardedProps = isDOM ? filterValidProps(props) : props;
            var staticVisualStyles = isSVG
                ? buildSVGProps(values, style)
                : buildHTMLProps(values, style, isStatic, !!props.drag);
            return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, forwardedProps), { ref: ref }), staticVisualStyles));
        },
        /**
         * loadFunctionalityComponents gets used by the `motion` component
         *
         * Each functionality component gets provided the `ref`, animation controls and the `MotionValuesMap`
         * generated for that component, as well as all the `props` passed to it by the user.
         *
         * The pattern used to determine whether to load and use each piece of functionality is
         * consistent (should render? Then push component) and could be used to extend functionality.
         *
         * By exposing a mutable piece of memory via an API like `extendMotionComponent` we could
         * allow users to add `FunctionalComponentDefinition`s. This would allow us to offer file size
         * reductions by shipping an entry point that doesn't load gesture and drag functionality, and
         * also offer a way for users to develop plugins/other functionality. Because these functionalities
         * are loaded as components, we can look into using Suspense for this purpose.
         *
         * For user-defined functionality we'd need to allow
         *  1) User-defined prop typing (extending `P`)
         *  2) User-defined "clean props" function that removes their plugin's props before being passed to the DOM.
         */
        loadFunctionalityComponents: function (ref, values, props, context, controls, inherit) {
            var activeComponents = [];
            // TODO: Consolidate Animation functionality loading strategy with other functionality components
            var Animation = getAnimationComponent(props);
            if (Animation) {
                activeComponents.push(Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Animation, { key: "animation", initial: props.initial, animate: props.animate, variants: props.variants, transition: props.transition, controls: controls, inherit: inherit, values: values }));
            }
            for (var i = 0; i < numFunctionalityComponents; i++) {
                var _a = functionalityComponents[i], shouldRender = _a.shouldRender, key = _a.key, Component_1 = _a.Component;
                if (shouldRender(props, context)) {
                    activeComponents.push(Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Component_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, props, { parentContext: context, values: values, controls: controls, innerRef: ref })));
                }
            }
            return activeComponents;
        },
        getValueControlsConfig: function (ref, values) {
            return {
                values: values,
                readValueFromSource: function (key) {
                    return Object(stylefire__WEBPACK_IMPORTED_MODULE_4__["default"])(ref.current).get(key);
                },
                // TODO: This is a good second source of plugins. This function contains the CSS variable
                // and unit conversion support. These functions share a common signature. We could make another
                // API for adding these.
                makeTargetAnimatable: parseDomVariant(values, ref),
            };
        },
    };
}

var htmlMotionComponents = htmlElements.reduce(function (acc, Component) {
    var config = createDomMotionConfig(Component);
    // Suppress "Expression produces a union type that is too complex to represent" error
    // @ts-ignore
    acc[Component] = createMotionComponent(config);
    return acc;
}, {});
var svgMotionComponents = svgElements.reduce(function (acc, Component) {
    // Suppress "Expression produces a union type that is too complex to represent" error
    // @ts-ignore
    acc[Component] = createMotionComponent(createDomMotionConfig(Component));
    return acc;
}, {});
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @internalremarks
 *
 * I'd like to make it possible for these to be loaded "on demand" - to reduce bundle size by only
 * including HTML/SVG stylers, animation and/or gesture support when necessary.
 *
 * ```jsx
 * <motion.div animate={{ x: 100 }} />
 *
 * <motion.p animate={{ height: 200 }} />
 *
 * <svg><motion.circle r={10} animate={{ r: 20 }} /></svg>
 * ```
 *
 * @public
 */
var motion = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
    /**
     * Convert a custom React component into a `motion` component.
     *
     * It can also accept a string, to create [custom DOM elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).
     *
     * ```jsx
     * const Component = React.forwardRef((props: Props, ref) => {
     *   return <div ref={ref} />
     * })
     *
     * const MotionComponent = motion.custom<Props>(Component)
     * ```
     *
     * @param Component -
     */
    custom: function custom(Component) {
        return createMotionComponent(createDomMotionConfig(Component));
    } }, htmlMotionComponents), svgMotionComponents);

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    return useConstant(function () { return motionValue(initial); });
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function unwrapMotionValue(value) {
    var unwrappedValue = value instanceof MotionValue ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}

var isTransformer = function (v) {
    return typeof v === "function";
};
var noop$1 = function (v) { return v; };
function useTransform(parent, customTransform, to, options) {
    var value = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var comparitor = [parent];
    var transformer = noop$1;
    if (isTransformer(customTransform)) {
        transformer = customTransform;
    }
    else if (Array.isArray(to)) {
        var from = customTransform;
        transformer = transform(from, to, options);
        comparitor = [parent, from.join(","), to.join(",")];
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        if (value.current)
            value.current.destroy();
        value.current = parent.addChild({ transformer: transformer });
        return value.current;
    }, comparitor);
}

// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function (scale) { return (scale > 0.001 ? 1 / scale : maxScale); };
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @public
 */
function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var values = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).values;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!(scale || values), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    }
    else if (values) {
        parentScaleX = values.get("scaleX", 1);
        parentScaleY = values.get("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX: scaleX, scaleY: scaleY };
}

function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return (isMotionValue(value) ? value.onChange(callback) : undefined); }, [value]);
}

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
    if (config === void 0) { config = {}; }
    var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        return value.attach(function (v, set) {
            if (activeSpringAnimation.current) {
                activeSpringAnimation.current.stop();
            }
            activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_7__["spring"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: value.get(), to: v, velocity: value.getVelocity() }, config)).start(set);
            return value.get();
        });
    }, Object.values(config));
    useOnChange(source, function (v) { return value.set(parseFloat(v)); });
    return value;
}

function createScrollMotionValues() {
    return {
        scrollX: motionValue(0),
        scrollY: motionValue(0),
        scrollXProgress: motionValue(0),
        scrollYProgress: motionValue(0),
    };
}
function setProgress(offset, maxOffset, value) {
    value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}
function createScrollUpdater(values, getOffsets) {
    var update = function () {
        var _a = getOffsets(), xOffset = _a.xOffset, yOffset = _a.yOffset, xMaxOffset = _a.xMaxOffset, yMaxOffset = _a.yMaxOffset;
        // Set absolute positions
        values.scrollX.set(xOffset);
        values.scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, xMaxOffset, values.scrollXProgress);
        setProgress(yOffset, yMaxOffset, values.scrollYProgress);
    };
    update();
    return update;
}

var isBrowser$2 = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser$2 ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];

var getElementScrollOffsets = function (element) { return function () {
    return {
        xOffset: element.scrollLeft,
        yOffset: element.scrollTop,
        xMaxOffset: element.scrollWidth - element.offsetWidth,
        yMaxOffset: element.scrollHeight - element.offsetHeight,
    };
}; };
/**
 * Returns MotionValues that update when the provided element scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useElementScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const ref = React.useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <Frame ref={ref}>
 *       <Frame scaleX={scrollYProgress} />
 *     </Frame>
 *   )
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const ref = useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ scaleX: scrollYProgress }} />
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
function useElementScroll(ref) {
    var values = useConstant(createScrollMotionValues);
    useIsomorphicLayoutEffect(function () {
        var element = ref.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!element, "ref provided to useScroll must be passed into a HTML element.");
        if (!element)
            return;
        var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
        var scrollListener = addDomEvent(element, "scroll", updateScrollValues, { passive: true });
        var resizeListener = addDomEvent(element, "resize", updateScrollValues);
        return function () {
            scrollListener && scrollListener();
            resizeListener && resizeListener();
        };
    }, []);
    return values;
}

var viewportScrollValues = createScrollMotionValues();
function getViewportScrollOffsets() {
    return {
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        xMaxOffset: document.body.clientWidth - window.innerWidth,
        yMaxOffset: document.body.clientHeight - window.innerHeight,
    };
}
var hasListeners = false;
function addEventListeners() {
    hasListeners = true;
    if (typeof window === "undefined")
        return;
    var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
    addDomEvent(window, "scroll", updateScrollValues, { passive: true });
    addDomEvent(window, "resize", updateScrollValues);
}
/**
 * Returns MotionValues that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @public
 */
function useViewportScroll() {
    useIsomorphicLayoutEffect(function () {
        !hasListeners && addEventListeners();
    }, []);
    return viewportScrollValues;
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var animationControls = useConstant(function () { return new AnimationControls(); });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        animationControls.mount();
        return function () { return animationControls.unmount(); };
    }, []);
    return animationControls;
}

/**
 * Experimental API.
 *
 * Makes an animated version of `useState`.
 *
 * @remarks
 *
 * When the returned state setter is called, values will be animated to their new target.
 *
 * This allows the animation of arbitrary React components.
 *
 * **Note:** When animating DOM components, it's always preferable to use the `animate` prop, as Framer
 * will bypass React's rendering cycle with one optimised for 60fps motion. This Hook is specifically
 * for animating props on arbitrary React components, or for animating text content.
 *
 * ```jsx
 * const [state, setState] = useAnimatedState({ percentage: 0 })
 *
 * return (
 *   <Graph
 *     percentage={state.percentage}
 *     onTap={() => setState({ percentage: 50 })}
 *   />
 * )
 * ```
 *
 * @internalremarks
 *
 * TODO:
 * - Make hook accept a typed version of Target that accepts any value (not just DOM values)
 * - Allow hook to accept single values. ie useAnimatedState(0)
 * - Allow providing MotionValues via initialState.
 *
 * @beta
 */
function useAnimatedState(initialState) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState), animationState = _a[0], onUpdate = _a[1];
    var config = useConstant(function () { return ({ onUpdate: onUpdate }); });
    var values = useMotionValues(config);
    var controls = useValueAnimationControls({
        values: values,
        readValueFromSource: function (key) { return animationState[key]; },
    }, {}, false);
    var startAnimation = useConstant(function () { return function (animationDefinition) {
        return controls.start(animationDefinition);
    }; });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        values.mount();
        return function () { return values.unmount(); };
    }, []);
    return [animationState, startAnimation];
}

/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // TODO: After Framer X beta, remove this warning
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["warning"])(items.length > 1, "useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`");
    var index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(items[index.current]), item = _a[0], setItem = _a[1];
    return [
        item,
        function (next) {
            index.current =
                typeof next !== "number"
                    ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__["wrap"])(0, items.length, index.current + 1)
                    : next;
            setItem(items[index.current]);
        },
    ];
}

/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onMouseDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */ (function () {
    function DragControls() {
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `ComponentDragControls` to the user-facing API.
     *
     * @internal
     */
    DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - A mouse/touch/pointer event.
     * @param options - Options
     *
     * @public
     */
    DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
            controls.start(event.nativeEvent || event, options);
        });
    };
    return DragControls;
}());
var createDragControls = function () { return new DragControls(); };
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onMouseDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
    return useConstant(createDragControls);
}

var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom;
    var numPresenceChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var numExitComplete = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
    var context = {
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function () {
            numExitComplete.current++;
            var allComplete = numExitComplete.current >= numPresenceChildren.current;
            onExitComplete && allComplete && onExitComplete();
        },
    };
    var register = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        numExitComplete.current = 0;
        return function () {
            numPresenceChildren.current++;
            return function () { return numPresenceChildren.current--; };
        };
    }, [isPresent]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { register: register }) }, children));
};

function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceUpdate function, or one from a parent context if it exists.
    var localForceUpdate = useForceUpdate();
    var contextForceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SyncLayoutContext);
    var forceUpdate = contextForceUpdate || localForceUpdate;
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, filteredChildren.map(function (child) { return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(filteredChildren);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (child) { return child.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceUpdate();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child); })));
};

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
function determineShouldReduceMotion(prefersReduced, isReducedMotion) {
    return typeof isReducedMotion === "boolean"
        ? isReducedMotion
        : Boolean(prefersReduced);
}

/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    var isReducedMotion = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext).isReducedMotion;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(determineShouldReduceMotion(prefersReducedMotion.get(), isReducedMotion)), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return prefersReducedMotion.onChange(function (v) {
            setShouldReduceMotion(determineShouldReduceMotion(v, isReducedMotion));
        });
    }, [setShouldReduceMotion, isReducedMotion]);
    return shouldReduceMotion;
}

/**
 * Define accessibility options for a tree. Can be used to force the tree into Reduced Motion mode,
 * or disable device detection.
 *
 * @internal
 */
function ReducedMotion(_a) {
    var children = _a.children, enabled = _a.enabled;
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MotionContext);
    context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { isReducedMotion: enabled })); }, [enabled]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MotionContext.Provider, { value: context }, children));
}




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var timestamp = Date.now();
        var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

var createStep = (function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === 'function', 'Argument must be a function');
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive)
                toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer)
                    numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
});

var StepId;
(function (StepId) {
    StepId["Read"] = "read";
    StepId["Update"] = "update";
    StepId["Render"] = "render";
    StepId["PostRender"] = "postRender";
    StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = (1 / 60) * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    StepId.Read,
    StepId.Update,
    StepId.Render,
    StepId.PostRender
];
var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
var _a = stepsOrder.reduce(function (acc, key) {
    var step = createStep(setWillRunNextFrame);
    acc.sync[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) { keepAlive = false; }
        if (immediate === void 0) { immediate = false; }
        if (!willRunNextFrame)
            startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    acc.cancelSync[key] = function (process) { return step.cancel(process); };
    acc.steps[key] = step;
    return acc;
}, {
    steps: {},
    sync: {},
    cancelSync: {}
}), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
var processStep = function (stepId) { return steps[stepId].process(frame); };
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed)
        defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
var getFrameData = function () { return frame; };

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: Action, ValueReaction, action, chain, composite, crossfade, decay, delay, everyFrame, inertia, keyframes, listen, merge, mouse, multicast, multitouch, parallel, physics, pointer, schedule, spring, stagger, styler, timeline, tween, value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return styler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");







var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var _this = this;
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function () {
    function Action(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription, api) : subscription;
        if (isComplete) subscription.stop();
        return subscription;
    };
    Action.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Action.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    return Action;
}();
var action = function (init) {
    return new Action({ init: init });
};

var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        _this.updateCurrent = function (v) {
            return _this.current = v;
        };
        _this.getVelocityOfCurrent = function () {
            return _this.getSingleVelocity(_this.current, _this.prev);
        };
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(),
            delta = _a.delta,
            timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.subscribers[this.subscribers.length - 1].update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, this.timeDelta) : Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.some(function (key) {
            return isVectorProp(props[key], key);
        });
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_3__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vh"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createMixerAction = function (mixer) {
    return function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
        return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(mixer(from, to));
    };
};
var createColorAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"]);
var createComplexAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixComplex"]);
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    if (typeof prop === 'number') {
        return createAction;
    } else if (isUnitProp(prop)) {
        return createUnitAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].test(prop)) {
        return createColorAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].test(prop)) {
        return createComplexAction;
    } else {
        return createAction;
    }
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            } else {
                update(position);
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var inertia = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 700 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget;
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var prev = from;
        var current = from;
        var activeAnimation;
        var isSpring = false;
        var isLessThanMin = function (v) {
            return min !== undefined && v <= min;
        };
        var isMoreThanMax = function (v) {
            return max !== undefined && v >= max;
        };
        var isOutOfBounds = function (v) {
            return isLessThanMin(v) || isMoreThanMax(v);
        };
        var isTravellingAwayFromBounds = function (v, currentVelocity) {
            return isLessThanMin(v) && currentVelocity < 0 || isMoreThanMax(v) && currentVelocity > 0;
        };
        var onUpdate = function (v) {
            update(v);
            prev = current;
            current = v;
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().delta);
            if (activeAnimation && !isSpring && isTravellingAwayFromBounds(v, velocity)) {
                startSpring({ from: v, velocity: velocity });
            }
        };
        var startAnimation = function (animation, next) {
            activeAnimation && activeAnimation.stop();
            activeAnimation = animation.start({
                update: onUpdate,
                complete: function () {
                    if (next) {
                        next();
                        return;
                    }
                    complete();
                }
            });
        };
        var startSpring = function (props) {
            isSpring = true;
            startAnimation(vectorSpring(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { to: isLessThanMin(props.from) ? min : max, stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta })));
        };
        if (isOutOfBounds(from)) {
            startSpring({ from: from, velocity: velocity });
        } else if (velocity !== 0) {
            var animation = vectorDecay({
                from: from,
                velocity: velocity,
                timeConstant: timeConstant,
                power: power,
                restDelta: isOutOfBounds(from) ? 20 : restDelta,
                modifyTarget: modifyTarget
            });
            startAnimation(animation, function () {
                if (isOutOfBounds(current)) {
                    startSpring({ from: current, velocity: velocity });
                } else {
                    complete();
                }
            });
        } else {
            complete();
        }
        return {
            stop: function () {
                return activeAnimation && activeAnimation.stop();
            }
        };
    });
};
var index = /*#__PURE__*/createVectorAction(inertia, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    min: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    max: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    }
});

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _d,
        _e = _a.reverseEase,
        reverseEase = _e === void 0 ? false : _e;
    if (reverseEase) {
        ease = Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["createReversedEasing"])(ease);
    }
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function (v) {
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var clampProgress = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"] : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f,
            _g = props.repeatDelay,
            repeatDelay = _g === void 0 ? 0 : _g;
        var _h = props.from,
            from = _h === void 0 ? 0 : _h,
            _j = props.to,
            to = _j === void 0 ? 1 : _j,
            _k = props.elapsed,
            elapsed = _k === void 0 ? 0 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseAnimation = function (reverseEase) {
            var _a;
            if (reverseEase === void 0) {
                reverseEase = false;
            }
            _a = [to, from], from = _a[0], to = _a[1];
            playhead = vectorScrubber({ from: from, to: to, ease: ease, reverseEase: reverseEase }).start(update);
        };
        var isTweenComplete = function () {
            var isComplete = isActive && elapsed > duration + repeatDelay;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var overtime = elapsed - duration;
            elapsed = overtime - repeatDelay;
            if (loop && loopCount < loop) {
                loopCount++;
                return false;
            } else if (flip && flipCount < flip) {
                flipCount++;
                reverseAnimation();
                return false;
            } else if (yoyo && yoyoCount < yoyo) {
                yoyoCount++;
                reverseAnimation(yoyoCount % 2 !== 0);
                return false;
            }
            return true;
        };
        var updateTween = function () {
            currentProgress = clampProgress(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function () {
            isActive = true;
            process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
                var delta = _a.delta;
                elapsed += delta;
                updateTween();
                if (isTweenComplete()) {
                    framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                    complete && framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function () {
            isActive = false;
            if (process) framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, duration, elapsed);
            },
            getProgress: function () {
                return currentProgress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                if (!isActive) startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(0, duration, newProgress);
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateTween, false, true);
                return this;
            },
            reverse: function () {
                reverseAnimation();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () {
        return easing || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"];
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(springStrength, elapsed);
            }
            current += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                var _a;
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeInOut"]);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
            initialRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
                var newRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$1 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(x || 0);
        var applyYOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var styler = function () {
    return Object(hey_listen__WEBPACK_IMPORTED_MODULE_5__["invariant"])(false, 'styler has been removed from Popmotion in 9.0. Downgrade to 8.x or npm install stylefire');
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: alpha, color, complex, degrees, hex, hsla, number, percent, progressPercentage, px, rgbUnit, rgba, scale, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: clamp(0, 1) });
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
function getValuesAsArray(value) {
    return getValueFromFunctionString(value)
        .replace(/(,|\/)/g, ' ')
        .split(/ \s*/);
}
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/stylefire/dist/stylefire.es.js ***!
  \*****************************************************/
/*! exports provided: default, buildSVGAttrs, buildStyleProperty, createStylerFactory, isTransformProp, transformProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSVGAttrs", function() { return buildSVGAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyleProperty", function() { return buildStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformProps", function() { return transformProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");





var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.uncachedValues,
        uncachedValues = _b === void 0 ? new Set() : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        function setValue(key, value) {
            if (key.startsWith('--')) {
                props.hasCSSVariable = true;
            }
            var currentValue = state[key];
            state[key] = value;
            if (state[key] === currentValue) return;
            if (changedValues.indexOf(key) === -1) {
                changedValues.push(key);
            }
            if (!hasChanged) {
                hasChanged = true;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(styler.render);
            }
        }
        var styler = {
            get: function (key, forceRead) {
                if (forceRead === void 0) {
                    forceRead = false;
                }
                var useCached = !forceRead && useCache && !uncachedValues.has(key) && state[key] !== undefined;
                return useCached ? state[key] : onRead(key, props);
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    setValue(values, value);
                } else {
                    for (var key in values) {
                        setValue(key, values[key]);
                    }
                }
                return this;
            },
            render: function (forceRender) {
                if (forceRender === void 0) {
                    forceRender = false;
                }
                if (hasChanged || forceRender === true) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
        };
        return styler;
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== 'undefined';
var testElement;
var setDashPrefix = function (key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            if (noPrefix && key === 'clipPath' && dashCache.has(key)) {
                return;
            }
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function (key) {
    return setDashPrefix(key, key);
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) {
        isBrowser ? testPrefix(key) : setServerProperty(key);
    }
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
function isTransformProp(key) {
    return transformPropDictionary[key] === true;
}
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
var transformOriginProps = /*#__PURE__*/new Set(['originX', 'originY', 'originZ']);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var int = /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])( /*#__PURE__*/Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"]), { transform: Math.round });
var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_2__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"],
    zIndex: int,
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["alpha"],
    numOctaves: int
};
var getValueType = function (key) {
    return valueTypes[key];
};
var getValueAsType = function (value, type) {
    return type && typeof value === 'number' ? type.transform(value) : value;
};

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollKeys = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);

var blacklist = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP, 'transform']);
var translateAlias = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
function isCustomTemplate(v) {
    return typeof v === 'function';
}
function buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
    if (allowTransformNone === void 0) {
        allowTransformNone = true;
    }
    var transformString = '';
    var transformHasZ = false;
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        transformHasZ = key === 'z' ? true : transformHasZ;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += 'translateZ(0)';
    } else {
        transformString = transformString.trim();
    }
    if (isCustomTemplate(state.transform)) {
        transformString = state.transform(transform, transformIsDefault ? '' : transformString);
    } else if (allowTransformNone && transformIsDefault) {
        transformString = 'none';
    }
    return transformString;
}
function buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase, allowTransformNone) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (styles === void 0) {
        styles = {};
    }
    if (transform === void 0) {
        transform = {};
    }
    if (transformOrigin === void 0) {
        transformOrigin = {};
    }
    if (transformKeys === void 0) {
        transformKeys = [];
    }
    if (isDashCase === void 0) {
        isDashCase = false;
    }
    if (allowTransformNone === void 0) {
        allowTransformNone = true;
    }
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for (var key in state) {
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
            styles[prefixer(key, isDashCase)] = valueAsType;
        }
    }
    if (hasTransform || typeof state.transform === 'function') {
        styles.transform = buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration, allowTransformNone);
    }
    if (hasTransformOrigin) {
        styles.transformOrigin = (transformOrigin.originX || '50%') + " " + (transformOrigin.originY || '50%') + " " + (transformOrigin.originZ || 0);
    }
    return styles;
}
function createStyleBuilder(_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.enableHardwareAcceleration,
        enableHardwareAcceleration = _c === void 0 ? true : _c,
        _d = _b.isDashCase,
        isDashCase = _d === void 0 ? true : _d,
        _e = _b.allowTransformNone,
        allowTransformNone = _e === void 0 ? true : _e;
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function (state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase, allowTransformNone);
        return styles;
    };
}

function onRead(key, options) {
    var element = options.element,
        preparseOutput = options.preparseOutput;
    var defaultValueType = getValueType(key);
    if (isTransformProp(key)) {
        return defaultValueType ? defaultValueType.default || 0 : 0;
    } else if (scrollKeys.has(key)) {
        return element[key];
    } else {
        var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
        return preparseOutput && defaultValueType && defaultValueType.test(domValue) && defaultValueType.parse ? defaultValueType.parse(domValue) : domValue;
    }
}
function onRender(state, _a, changedValues) {
    var element = _a.element,
        buildStyles = _a.buildStyles,
        hasCSSVariable = _a.hasCSSVariable;
    Object.assign(element.style, buildStyles(state));
    if (hasCSSVariable) {
        var numChangedValues = changedValues.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = changedValues[i];
            if (key.startsWith('--')) {
                element.style.setProperty(key, state[key]);
            }
        }
    }
    if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
        element[SCROLL_LEFT] = state[SCROLL_LEFT];
    }
    if (changedValues.indexOf(SCROLL_TOP) !== -1) {
        element[SCROLL_TOP] = state[SCROLL_TOP];
    }
}
var cssStyler = /*#__PURE__*/createStyler({
    onRead: onRead,
    onRender: onRender,
    uncachedValues: scrollKeys
});
function createCssStyler(element, _a) {
    if (_a === void 0) {
        _a = {};
    }
    var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        allowTransformNone = _a.allowTransformNone,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["enableHardwareAcceleration", "allowTransformNone"]);
    return cssStyler(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ element: element, buildStyles: createStyleBuilder({
            enableHardwareAcceleration: enableHardwareAcceleration,
            allowTransformNone: allowTransformNone
        }), preparseOutput: true }, props));
}

var camelCaseAttributes = /*#__PURE__*/new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues']);

var defaultOrigin = 0.5;
var svgAttrsTemplate = function () {
    return {
        style: {}
    };
};
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(progress * length);
};
var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
function calcOrigin(origin, offset, size) {
    return typeof origin === 'string' ? origin : style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"].transform(offset + size * origin);
}
function calculateSVGTransformOrigin(dimensions, originX, originY) {
    return calcOrigin(originX, dimensions.x, dimensions.width) + " " + calcOrigin(originY, dimensions.y, dimensions.height);
}
var svgStyleConfig = {
    enableHardwareAcceleration: false,
    isDashCase: false
};
function buildSVGAttrs(_a, dimensions, totalPathLength, cssBuilder, attrs, isDashCase) {
    if (dimensions === void 0) {
        dimensions = unmeasured;
    }
    if (cssBuilder === void 0) {
        cssBuilder = createStyleBuilder(svgStyleConfig);
    }
    if (attrs === void 0) {
        attrs = svgAttrsTemplate();
    }
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrX = _a.attrX,
        attrY = _a.attrY,
        originX = _a.originX,
        originY = _a.originY,
        pathLength = _a.pathLength,
        _b = _a.pathSpacing,
        pathSpacing = _b === void 0 ? 1 : _b,
        _c = _a.pathOffset,
        pathOffset = _c === void 0 ? 0 : _c,
        state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    var style = cssBuilder(state);
    for (var key in style) {
        if (key === 'transform') {
            attrs.style.transform = style[key];
        } else {
            var attrKey = isDashCase && !camelCaseAttributes.has(key) ? camelToDash(key) : key;
            attrs[attrKey] = style[key];
        }
    }
    if (originX !== undefined || originY !== undefined || style.transform) {
        attrs.style.transformOrigin = calculateSVGTransformOrigin(dimensions, originX !== undefined ? originX : defaultOrigin, originY !== undefined ? originY : defaultOrigin);
    }
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (totalPathLength !== undefined && pathLength !== undefined) {
        attrs[isDashCase ? 'stroke-dashoffset' : 'strokeDashoffset'] = progressToPixels(-pathOffset, totalPathLength);
        attrs[isDashCase ? 'stroke-dasharray' : 'strokeDasharray'] = progressToPixels(pathLength, totalPathLength) + " " + progressToPixels(pathSpacing, totalPathLength);
    }
    return attrs;
}
function createAttrBuilder(dimensions, totalPathLength, isDashCase) {
    if (isDashCase === void 0) {
        isDashCase = true;
    }
    var attrs = svgAttrsTemplate();
    var cssBuilder = createStyleBuilder(svgStyleConfig);
    return function (state) {
        return buildSVGAttrs(state, dimensions, totalPathLength, cssBuilder, attrs, isDashCase);
    };
}

var getDimensions = function (element) {
    return typeof element.getBBox === 'function' ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function (element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }
};

var isPath = function (element) {
    return element.tagName === 'path';
};
var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType(key);
            return valueType ? valueType.default || 0 : 0;
        }
    },
    onRender: function (state, _a) {
        var element = _a.element,
            buildAttrs = _a.buildAttrs;
        var attrs = buildAttrs(state);
        for (var key in attrs) {
            if (key === 'style') {
                Object.assign(element.style, attrs.style);
            } else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
});
var svg = function (element) {
    var dimensions = getSVGElementDimensions(element);
    var pathLength = isPath(element) && element.getTotalLength ? element.getTotalLength() : undefined;
    return svgStyler({
        element: element,
        buildAttrs: createAttrBuilder(dimensions, pathLength)
    });
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var isHTMLElement = function (node) {
    return node instanceof HTMLElement || typeof node.click === 'function';
};
var isSVGElement = function (node) {
    return node instanceof SVGElement || 'ownerSVGElement' in node;
};
var createDOMStyler = function (node, props) {
    var styler;
    if (node === window) {
        styler = viewport(node);
    } else if (isHTMLElement(node)) {
        styler = createCssStyler(node, props);
    } else if (isSVGElement(node)) {
        styler = svg(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=7.js.map