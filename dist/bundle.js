(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Poll"] = factory();
	else
		root["Poll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./src/index.css ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".cdx-poll {\\n    padding-top: 13px;\\n    padding-bottom: 20px;\\n}\\n\\n.cdx-poll-wrap-title {\\n    margin-bottom: 20px;\\n}\\n\\n.cdx-poll-title {\\n    width: 100%;\\n    padding: 0;\\n    margin: 0;\\n    font-family: inherit;\\n    font-size: 2rem;\\n    font-weight: 600;\\n    color: #000;\\n    text-transform: uppercase;\\n    border: 0;\\n    outline: none;\\n    background: transparent;\\n}\\n\\n.cdx-poll-wrap-option {\\n    position: relative;\\n    margin-bottom: 20px;\\n}\\n\\n.cdx-poll-option {\\n    width: 100%;\\n    height: 50px;\\n    padding-left: 20px;\\n    padding-right: 40px;\\n    font-family: inherit;\\n    font-size: 1.4rem;\\n    font-weight: 700;\\n    letter-spacing: 0.03em;\\n    color: #000;\\n    text-transform: uppercase;    \\n    border: 1px solid #c4c4c4;\\n    border-radius: 3px;\\n}\\n\\n.cdx-poll-remove-icon {\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    right: 20px;\\n    margin: auto;\\n    width: 13px;\\n    height: 13px;\\n    cursor: pointer;\\n}\\n\\n.cdx-poll-remove-icon svg {\\n        vertical-align: top;\\n    }\\n\\n.cdx-poll-settings {\\n    font-size: 0;\\n}\\n\\n.cdx-poll-wrap-checkbox {\\n    display: inline-block;\\n    vertical-align: middle;\\n    cursor: pointer;\\n    margin-right: 10px;\\n}\\n\\n.cdx-poll-wrap-checkbox:last-child {\\n        margin-right: 0;\\n    }\\n\\n.cdx-poll-checkbox {\\n    display: none;\\n}\\n\\n.cdx-poll-checkbox:checked + .cdx-poll-pseudoCheckbox svg {\\n            display: block;\\n        }\\n\\n.cdx-poll-pseudoCheckbox {\\n    display: inline-flex;\\n    align-items: center;\\n    justify-content: center;\\n    vertical-align: middle;\\n    width: 18px;;\\n    height: 18px;\\n    border: 1px solid #c4c4c4;\\n    background: #fff;\\n    border-radius: 3px;\\n    margin-right: 7px;\\n}\\n\\n.cdx-poll-pseudoCheckbox svg {\\n        display: none;\\n    }\\n\\n.cdx-poll-checkbox-name {\\n    display: inline-block;\\n    vertical-align: middle;\\n    font-size: 1.6rem;\\n    color: #333;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Poll/./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Poll/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nanoid\", function() { return nanoid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customAlphabet\", function() { return customAlphabet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customRandom\", function() { return customRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__[\"urlAlphabet\"]; });\n\n// This file replaces `index.js` in bundlers like webpack or Rollup,\n// according to `browser` config in `package.json`.\n\n\n\nif (true) {\n  // All bundlers will remove this block in the production bundle.\n  if (\n    typeof navigator !== 'undefined' &&\n    navigator.product === 'ReactNative' &&\n    typeof crypto === 'undefined'\n  ) {\n    throw new Error(\n      'React Native does not have a built-in secure random generator. ' +\n        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +\n        'For secure IDs, import `react-native-get-random-values` ' +\n        'before Nano ID. If you use Expo, install `expo-random` ' +\n        'and use `nanoid/async`.'\n    )\n  }\n  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {\n    throw new Error(\n      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +\n        ' before importing Nano ID to fix IE 11 support'\n    )\n  }\n  if (typeof crypto === 'undefined') {\n    throw new Error(\n      'Your browser does not have secure random generator. ' +\n        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'\n    )\n  }\n}\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  // `Math.clz32` is not used, because it is not available in browsers.\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n\n  // `-~f => Math.ceil(f)` if f is a float\n  // `-~i => i + 1` if i is an integer\n  let step = -~((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (var i = 0; i < step; i++)`.\n      let j = step\n      while (j--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[j] & mask] || ''\n        // `id.length + 1 === size` is a more compact option.\n        if (id.length === +size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let id = ''\n  let bytes = crypto.getRandomValues(new Uint8Array(size))\n\n  // A compact alternative for `for (var i = 0; i < step; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    let byte = bytes[size] & 63\n    if (byte < 36) {\n      // `0-9a-z`\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      // `A-Z`\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte < 63) {\n      id += '_'\n    } else {\n      id += '-'\n    }\n  }\n  return id\n}\n\n\n\n\n//# sourceURL=webpack://Poll/./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return urlAlphabet; });\n// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\n\n\n\n//# sourceURL=webpack://Poll/./node_modules/nanoid/url-alphabet/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Poll/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"make\", function() { return make; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar make = function make(tag) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tag);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n\n    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n  } else {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n};\n\n//# sourceURL=webpack://Poll/./src/helpers.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--5-2!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Poll/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Poll; });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _svg_toolboxIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/toolboxIcon.svg */ \"./src/svg/toolboxIcon.svg\");\n/* harmony import */ var _svg_toolboxIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_toolboxIcon_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _svg_removeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/removeIcon.svg */ \"./src/svg/removeIcon.svg\");\n/* harmony import */ var _svg_removeIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_removeIcon_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _svg_checkMark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/checkMark.svg */ \"./src/svg/checkMark.svg\");\n/* harmony import */ var _svg_checkMark_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_checkMark_svg__WEBPACK_IMPORTED_MODULE_5__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n/**\n * Plugin for create poll in editor\n */\n\nvar Poll = /*#__PURE__*/function () {\n  _createClass(Poll, null, [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        title: 'Poll',\n        icon: _svg_toolboxIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n      };\n    }\n    /**\n     * Prepare nodes and other default values\n     */\n\n  }]);\n\n  function Poll(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api;\n\n    _classCallCheck(this, Poll);\n\n    this.nodes = {\n      wrapper: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.wrapper),\n      wrapperTitle: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.wrapperTitle),\n      title: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('input', this.CSS.title, {\n        name: 'title',\n        value: data.title || '',\n        type: 'text',\n        placeholder: 'Add title',\n        autocomplete: 'off'\n      }),\n      options: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.wrapperOptions),\n      settings: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.settings)\n    };\n    this.nodes.wrapperTitle.appendChild(this.nodes.title);\n    this.nodes.wrapper.appendChild(this.nodes.wrapperTitle);\n    this.nodes.wrapper.append(this.nodes.options);\n    this._data = {\n      title: '',\n      items: [],\n      uid: data.uid || Object(nanoid__WEBPACK_IMPORTED_MODULE_0__[\"nanoid\"])(13),\n      isPublic: false,\n      isMultiple: false\n    };\n    this.data = data;\n    this.api = api;\n  }\n  /**\n   * Styles\n   * @private\n   */\n\n\n  _createClass(Poll, [{\n    key: \"render\",\n\n    /**\n     * Init method\n     */\n    value: function render() {\n      var _this = this;\n\n      if (this._data.items.length > 0) {\n        this._data.items.forEach(function (item) {\n          _this.addOptionInput(item);\n        });\n      }\n\n      this.addOptionInput();\n      this.addSettings();\n      return this.nodes.wrapper;\n    }\n    /**\n     * Create UI input\n     */\n\n  }, {\n    key: \"addOptionInput\",\n    value: function addOptionInput(item) {\n      var options = this.nodes.options.querySelectorAll(\".\".concat(this.CSS.option));\n      if (options.length >= 10 || options[options.length - 1] && options[options.length - 1].value === '' && !item) return;\n      var wrapper = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.wrapperOption);\n      var id = item ? item.key : \"a\".concat(Date.now() / 1000 | 0).concat(options.length);\n      var option = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('input', this.CSS.option, {\n        name: 'option',\n        type: 'text',\n        value: item ? item.value : '',\n        placeholder: 'add option',\n        autocomplete: 'off'\n      });\n\n      if (options.length) {\n        var removeButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.removeIcon, {\n          innerHTML: _svg_removeIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a\n        });\n        wrapper.appendChild(removeButton);\n        removeButton.addEventListener('click', this.removeSelf.bind(this), false);\n      }\n\n      wrapper.appendChild(option);\n      option.addEventListener('blur', this.onChangeInput.bind(this, id), false);\n      option.addEventListener('keydown', this.optionHandler.bind(this), false);\n      this.nodes.options.appendChild(wrapper);\n    }\n    /**\n     * Create UI checkbox\n     */\n\n  }, {\n    key: \"addSettings\",\n    value: function addSettings() {\n      this.appendCheckBox(this.nodes.settings, {\n        title: 'Multiple choise',\n        name: 'isMultiple'\n      });\n      this.appendCheckBox(this.nodes.settings, {\n        title: 'Anonymous poll',\n        name: 'isPublic'\n      });\n      this.nodes.wrapper.appendChild(this.nodes.settings);\n    }\n    /**\n    * Utility method for create checkbox\n    */\n\n  }, {\n    key: \"appendCheckBox\",\n    value: function appendCheckBox(parentNode, _ref2) {\n      var name = _ref2.name,\n          title = _ref2.title;\n      var wrapper = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('label', this.CSS.wrapperCheckbox, {\n        htmlFor: \"\".concat(name, \"_\").concat(this._data.uid)\n      });\n      var pseudoCheckbox = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.pseudoCheckbox, {\n        innerHTML: _svg_checkMark_svg__WEBPACK_IMPORTED_MODULE_5___default.a\n      });\n      var checkbox = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('input', this.CSS.checkbox, {\n        type: 'checkbox',\n        name: name,\n        id: \"\".concat(name, \"_\").concat(this._data.uid),\n        checked: this._data[name]\n      });\n      var checkboxName = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.checkboxName, {\n        innerHTML: title\n      });\n      wrapper.appendChild(checkbox);\n      wrapper.appendChild(pseudoCheckbox);\n      wrapper.appendChild(checkboxName);\n      parentNode.appendChild(wrapper);\n      checkbox.addEventListener('change', this.checkboxHandler.bind(this), false);\n    }\n    /**\n     * Called when user typing in option input and set value in data\n     */\n\n  }, {\n    key: \"onChangeInput\",\n    value: function onChangeInput(key, _ref3) {\n      var value = _ref3.target.value;\n\n      if (value !== '') {\n        this._data.items.push({\n          key: key,\n          value: value\n        });\n      }\n    }\n    /**\n     * Called when user typing in option input, and call methods by keys\n     */\n\n  }, {\n    key: \"optionHandler\",\n    value: function optionHandler(event) {\n      var ENTER = 13,\n          BACKSPACE = 8; // key codes\n\n      if (event.target.value !== '') {\n        this.addOptionInput();\n      }\n\n      switch (event.keyCode) {\n        case BACKSPACE:\n          this.backspace(event);\n          break;\n\n        default:\n          break;\n      }\n    }\n    /**\n     * Called when checbox changed state, set checkbox state in data \n     */\n\n  }, {\n    key: \"checkboxHandler\",\n    value: function checkboxHandler(_ref4) {\n      var _ref4$target = _ref4.target,\n          name = _ref4$target.name,\n          checked = _ref4$target.checked;\n      this._data[name] = checked;\n    }\n    /**\n     * Called after press BACKSPACE, if option is empty then remove option and change focus on last option\n     */\n\n  }, {\n    key: \"backspace\",\n    value: function backspace(event) {\n      if (event.target.value === '') {\n        var options = this.nodes.options.querySelectorAll(\".\".concat(this.CSS.option));\n        event.preventDefault();\n        event.stopPropagation();\n        this.removeSelf(event);\n\n        if (options.length !== 1) {\n          options[options.length - 2].focus();\n        }\n      }\n    }\n    /**\n     * Remove option from list options\n     */\n\n  }, {\n    key: \"removeSelf\",\n    value: function removeSelf(_ref5) {\n      var currentTarget = _ref5.currentTarget;\n      var options = this.nodes.options.querySelectorAll(\".\".concat(this.CSS.option));\n      if (options.length === 1) return;\n      var indexNode = Array.from(currentTarget.parentNode.parentNode.children).indexOf(currentTarget.parentNode);\n\n      var items = this._data.items.filter(function (item, index) {\n        return index !== indexNode;\n      });\n\n      this._data.items = items;\n      currentTarget.parentNode.remove();\n    }\n    /**\n     * Stores all Tool's data\n     * @private\n     *\n     * @param {ImageToolData} data\n     */\n\n  }, {\n    key: \"save\",\n\n    /**\n     * Save date for send\n     */\n    value: function save(blockContent) {\n      var title = blockContent.querySelector(\".\".concat(this.CSS.title));\n      this._data.title = title.value;\n      return this.data;\n    }\n  }, {\n    key: \"CSS\",\n    get: function get() {\n      return {\n        wrapper: 'cdx-poll',\n        wrapperTitle: 'cdx-poll-wrap-title',\n        title: 'cdx-poll-title',\n        wrapperOptions: 'cdx-poll-wrap-options',\n        wrapperOption: 'cdx-poll-wrap-option',\n        option: 'cdx-poll-option',\n        settings: 'cdx-poll-settings',\n        wrapperCheckbox: 'cdx-poll-wrap-checkbox',\n        checkbox: 'cdx-poll-checkbox',\n        pseudoCheckbox: 'cdx-poll-pseudoCheckbox',\n        checkboxName: 'cdx-poll-checkbox-name',\n        removeIcon: 'cdx-poll-remove-icon'\n      };\n    }\n  }, {\n    key: \"data\",\n    set: function set(data) {\n      if (Object.values(data).length === 0) return;\n      console.log('set data', data);\n      this._data = data;\n    }\n    /**\n     * Return Tool data\n     * @private\n     */\n    ,\n    get: function get() {\n      return this._data;\n    }\n  }]);\n\n  return Poll;\n}();\n\n\n\n//# sourceURL=webpack://Poll/./src/index.js?");

/***/ }),

/***/ "./src/svg/checkMark.svg":
/*!*******************************!*\
  !*** ./src/svg/checkMark.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg width=\\\"11\\\" height=\\\"9\\\" viewBox=\\\"0 0 11 9\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M9.7075 0L3.66667 6.29618L1.2925 3.83121L0 5.17834L3.66667 9L11 1.35669L9.7075 0Z\\\" fill=\\\"#9B7B81\\\"></path></svg>\"\n\n//# sourceURL=webpack://Poll/./src/svg/checkMark.svg?");

/***/ }),

/***/ "./src/svg/removeIcon.svg":
/*!********************************!*\
  !*** ./src/svg/removeIcon.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"13\\\" height=\\\"13\\\" viewBox=\\\"0 0 13 13\\\" fill=\\\"none\\\"><rect x=\\\"0.910156\\\" y=\\\"11.6567\\\" width=\\\"15.1982\\\" height=\\\"1.89977\\\" transform=\\\"rotate(-45 0.910156 11.6567)\\\" fill=\\\"currentColor\\\"></rect><rect x=\\\"2.25391\\\" y=\\\"0.910156\\\" width=\\\"15.1982\\\" height=\\\"1.89977\\\" transform=\\\"rotate(45 2.25391 0.910156)\\\" fill=\\\"currentColor\\\"></rect></svg>\"\n\n//# sourceURL=webpack://Poll/./src/svg/removeIcon.svg?");

/***/ }),

/***/ "./src/svg/toolboxIcon.svg":
/*!*********************************!*\
  !*** ./src/svg/toolboxIcon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM8 12.17L14.59 5.58L16 7L8 15L4 11L5.41 9.59L8 12.17Z\\\" fill=\\\"currentColor\\\"></path></svg>\"\n\n//# sourceURL=webpack://Poll/./src/svg/toolboxIcon.svg?");

/***/ })

/******/ })["default"];
});