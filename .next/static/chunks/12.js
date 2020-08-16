(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./next.config.js":
/*!************************!*\
  !*** ./next.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var withMDX = __webpack_require__(/*! @next/mdx */ "./node_modules/@next/mdx/index.js")({
  extension: /\.(md|mdx)$/
});

module.exports = withMDX({
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});

/***/ }),

/***/ "./node_modules/@next/mdx/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@next/mdx/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const extension = pluginOptions.extension || /\.mdx$/

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: pluginOptions.options,
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}


/***/ })

}]);
//# sourceMappingURL=12.js.map