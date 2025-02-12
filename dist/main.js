/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --chocolate-brown: #5B3A29;\r\n    --vanila-cream: #FAF3DD;\r\n    --shadow-color: #2E2E2E;\r\n    --luxury-color: #FFD166;\r\n}\r\n\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* justify-content: center; */\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    padding: 2rem;\r\n    background: radial-gradient(circle, var(--vanila-cream) 10%, var(--chocolate-brown) 100%);\r\n    font-family: \"Raleway\", serif;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n}\r\n\r\nnav {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 2rem;\r\n}\r\n\r\nnav button {\r\n    outline: none;\r\n    border: rgba(52, 26, 14, 0.895);\r\n    padding: 0.6rem;\r\n    width: 70px;\r\n    height: 35px;\r\n    transition-duration: 200ms;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    color: rgb(198, 156, 77);\r\n    box-shadow: 4px 4px 10px rgba(50, 20, 14, 0.3);\r\n\r\n}\r\n\r\nnav button:hover {\r\n    background: #472a1b;\r\n    color: wheat;\r\n\r\n}\r\n\r\n\r\n.page-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    color: rgb(60, 43, 11);\r\n\r\n}\r\n\r\n\r\n.page-content img {\r\n    border-radius: 3%;\r\n    width: 400px;\r\n    height: 250px;\r\n    \r\n}\r\n\r\n\r\n\r\n.page-content p {\r\n    /* display: inline-block; */\r\n    font-size: 1rem;\r\n    \r\n}\r\n\r\n/* menu styling  */\r\n\r\n#menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: rgb(60, 43, 11);\r\n}\r\n\r\n.rows {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.rows div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.rows div p {\r\n    color: rgb(60, 43, 11);\r\n    width: 70%;\r\n}\r\n\r\n.rows div button {\r\n    outline: none;\r\n    border: rgba(52, 26, 14, 0.895);\r\n    padding: 0.6rem;\r\n    /* width: 70px; */\r\n    height: 35px;\r\n    transition-duration: 200ms;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    color: rgb(198, 156, 77);\r\n    box-shadow: 4px 4px 10px rgba(50, 20, 14, 0.3);\r\n}\r\n\r\n.rows div button:hover {\r\n    background: #472a1b;\r\n    color: wheat;\r\n}\r\n \r\n#menu-grid {\r\n    /* width: 75%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n}\r\n\r\n#menu-grid img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 10%;\r\n}\r\n\r\n \r\n\r\n/* About section styling  */\r\n\r\n.about-div {\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    /* align-items: center; */\r\n    gap: 3rem;\r\n    color: rgb(60, 43, 11);\r\n\r\n}\r\n\r\n#about-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    /* align-items: center; */\r\n    justify-content: center;\r\n}\r\n\r\n#cunkfood {\r\n    width: 500px;\r\n    height: 280px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n#image-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n#outro {\r\ndisplay: flex;\r\nflex-direction: column;\r\ngap: 1rem;\r\n}\r\n\r\n#footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n#footer p {\r\n    font-size: 20px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_cunkfood_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cunkfood.jpg */ \"./src/images/cunkfood.jpg\");\n\r\n\r\n\r\n\r\nconst aboutFunc = () => {\r\n    const contentDiv = document.querySelector('#content');\r\n\r\n    let aboutDiv = document.createElement('div');\r\n    aboutDiv.setAttribute('class', 'about-div');\r\n     \r\n\r\n    //first inner div for aboutDiv\r\n    let aboutInfoDiv = document.createElement('div');\r\n    aboutInfoDiv.setAttribute('id', 'about-info');\r\n    aboutDiv.appendChild(aboutInfoDiv);\r\n\r\n    // first div for aboutInfoDiv\r\n    let aboutInfoDiv1 = document.createElement('div');\r\n    aboutInfoDiv1.setAttribute('id', 'image-div');\r\n    aboutInfoDiv.appendChild(aboutInfoDiv1);\r\n\r\n    let h1 = document.createElement('h1');\r\n    h1.innerText = \"Cunk on Cuisine\";\r\n    aboutInfoDiv1.appendChild(h1)\r\n\r\n    let img = document.createElement('img');\r\n    img.setAttribute('id', 'cunkfood');\r\n    img.src = _images_cunkfood_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.alt = \"Philomena Cunk\";\r\n    aboutInfoDiv1.appendChild(img);\r\n\r\n    // second div for aboutInfoDiv\r\n    let aboutInfoDiv2 = document.createElement('div');\r\n    aboutInfoDiv2.setAttribute('id', 'outro');\r\n    aboutInfoDiv.appendChild(aboutInfoDiv2)\r\n\r\n    let h3One = document.createElement('h3');\r\n    h3One.innerText = \"At Cunk on Cuisine, we believe desserts should be indulgent, slightly confusing, and entirely unnecessary—just like most of history. Our menu is a carefully curated selection of sweet masterpieces, inspired by centuries of human innovation and a deep misunderstanding of what counts as 'healthy'.\";\r\n    aboutInfoDiv2.appendChild(h3One)\r\n\r\n    let h3Two = document.createElement('h3');\r\n    h3Two.innerText = \"From our towering cakes to our unnecessarily tiny pastries, every dish here is made with love, sugar, and an alarming amount of butter. So whether you're here to celebrate, commiserate, or just avoid eating a real meal, we’ve got you covered.\";\r\n    aboutInfoDiv2.appendChild(h3Two);\r\n\r\n\r\n\r\n    let h2 = document.createElement('h2');\r\n    h2.innerText = \"Come for the desserts. Stay for the existential crisis about how many calories are in them.\";\r\n    aboutInfoDiv2.appendChild(h2)\r\n\r\n    // now we create the footer div with id footer\r\n    let footer = document.createElement('div');\r\n    footer.setAttribute('id', 'footer');\r\n    aboutDiv.appendChild(footer);\r\n\r\n    let h1Footer = document.createElement('h1');\r\n    h1Footer.innerText = \"Project Built with Modern Web Technologies\";\r\n    footer.appendChild(h1Footer);\r\n\r\n    let footerPara = document.createElement('p');\r\n    footerPara.innerText = \"This project was developed using Webpack for module bundling and asset management, ensuring optimized builds and efficient dependency handling. The structure is based on HTML, CSS, and JavaScript (ES Modules), following a modular approach for better maintainability and scalability. Webpack is configured to process styles, images, and scripts, generating a clean and optimized distribution folder for deployment.\"\r\n    footer.appendChild(footerPara);\r\n\r\n    // appending aboutDiv in the content div\r\n    contentDiv.appendChild(aboutDiv);\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutFunc);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\r\n\r\n\r\n// import cunkfoodImage from './images/cunkfood.jpg'\r\n\r\n// document.getElementById('cunkfood').src = cunkfoodImage;\r\n\r\ndocument.body.addEventListener('click', clickHandler)\r\n \r\nfunction clickHandler(e) {\r\n    let contentOfPage = document.querySelector('#content');\r\n    let pageContent = document.querySelector('.page-content');\r\n    let menu = document.querySelector('#menu');\r\n    let about = document.querySelector('.about-div');\r\n\r\n    if (e.target.id === \"homeBtn\") {\r\n        if (!pageContent) {\r\n            (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();\r\n        }\r\n        if (menu) contentOfPage.removeChild(menu);\r\n        if (about) contentOfPage.removeChild(about);\r\n        return;\r\n    }\r\n\r\n    if (e.target.id === \"menuBtn\") {\r\n        if (!menu) {\r\n            (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.menuLoad)();\r\n        }\r\n        if (pageContent) contentOfPage.removeChild(pageContent);\r\n        if (about) contentOfPage.removeChild(about);\r\n        return;\r\n    }\r\n\r\n    if (e.target.id === \"aboutBtn\") {\r\n        if (!about) {\r\n            (0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__.aboutLoad)();\r\n        }\r\n        if (pageContent) contentOfPage.removeChild(pageContent);\r\n        if (menu) contentOfPage.removeChild(menu);\r\n    }\r\n}\r\n\r\n//  pageLoad();\r\n//  menuCreaterFunc();\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_stollen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/stollen.jpg */ \"./src/images/stollen.jpg\");\n/* harmony import */ var _images_taiyaki_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/taiyaki.jpg */ \"./src/images/taiyaki.jpg\");\n/* harmony import */ var _images_ghulab_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ghulab.jpg */ \"./src/images/ghulab.jpg\");\n/* harmony import */ var _images_cannoli_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cannoli.jpg */ \"./src/images/cannoli.jpg\");\n/* harmony import */ var _images_chipcookie_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/chipcookie.jpg */ \"./src/images/chipcookie.jpg\");\n/* harmony import */ var _images_churrons_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/churrons.jpg */ \"./src/images/churrons.jpg\");\n // Import image\r\n // Import image\r\n // Import image\r\n // Import image\r\n // Import image\r\n // Import image\r\n\r\n\r\nconst menuCreaterFunc = () => {\r\n\r\n    const contentMenuDiv = document.querySelector('#content');\r\n    const pageMenuContent = document.createElement('div');\r\n    pageMenuContent.setAttribute('id', 'menu');\r\n\r\n    // creating a info div\r\n\r\n    const infoDiv = document.createElement('div');\r\n    infoDiv.setAttribute('class', 'info');\r\n\r\n    // create h1 and p tag to put inside info div\r\n    const h1 = document.createElement('h1');\r\n    const para = document.createElement('p');\r\n\r\n    // adding text content to these h1 and p tag\r\n    h1.textContent = \"Cunk on Cuisine – The Menu From Round the Globe.\"\r\n    para.innerHTML = `Desserts have existed since the beginning of time, or at least since sugar was invented in 1974. <br>Nobody\r\n                    really knows where they come from, but we do know they usually arrive at the end of a meal, like an\r\n                    afterthought. <br>Here are some of our finest selections, all carefully made by people with access to a\r\n                    kitchen.`\r\n\r\n    // appending these inside info Div\r\n    infoDiv.appendChild(h1);\r\n    infoDiv.appendChild(para);\r\n    pageMenuContent.appendChild(infoDiv); // appending info inside Menu Div\r\n\r\n\r\n    // now we create another div and give it the id of menu-grid and append it inside the Menu div\r\n    const MenuGrid = document.createElement('div');\r\n    MenuGrid.setAttribute('id', 'menu-grid');\r\n\r\n    // now we make row One with the class rows\r\n    const rowOne = document.createElement('div');\r\n    rowOne.setAttribute('class', 'rows');\r\n    MenuGrid.appendChild(rowOne);\r\n    // cell 1 of Row 1\r\n    const cell1 = document.createElement('div');\r\n\r\n    //adding image \r\n    const stollen = document.createElement(\"img\");\r\n    stollen.src = _images_stollen_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    stollen.alt = \"Delicious Stollen\";\r\n    cell1.appendChild(stollen);\r\n\r\n\r\n    // // adding the para and button\r\n    const cell1Para = document.createElement('p');\r\n    cell1Para.innerText = \"Stollen – A Christmas fruitcake that nobody actually likes, but everyone pretends to enjoy once a year.\";\r\n    cell1.appendChild(cell1Para);\r\n\r\n    const cell1Btn = document.createElement('button');\r\n    cell1Btn.innerText = \"Add To Cart\";\r\n    cell1.appendChild(cell1Btn);\r\n    rowOne.appendChild(cell1);\r\n    // // end of cell 1 of row 1\r\n    // // cell 2 of row 1\r\n    const cell2 = document.createElement('div');\r\n\r\n    // //adding image \r\n    const taiyaki = document.createElement(\"img\");\r\n    taiyaki.src = _images_taiyaki_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    taiyaki.alt = \"Delicious Taiyaki\";\r\n    cell2.appendChild(taiyaki);\r\n\r\n    // // adding the para and button\r\n    const cell2Para = document.createElement('p');\r\n    cell2Para.innerText = \"Taiyaki – A fish-shaped cake, for people who like their desserts to resemble wildlife.\";\r\n    cell2.appendChild(cell2Para);\r\n\r\n    const cell2Btn = document.createElement('button');\r\n    cell2Btn.innerText = \"Add To Cart\";\r\n    cell2.appendChild(cell2Btn);\r\n    rowOne.appendChild(cell2)\r\n\r\n    // // end of cell 2 of row 1\r\n\r\n    // // cell 3 of row 1\r\n    const cell3 = document.createElement('div');\r\n\r\n    // //adding image \r\n    const ghulab = document.createElement(\"img\");\r\n    ghulab.src = _images_ghulab_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    ghulab.alt = \"Delicious Ghulab Jamun\";\r\n    cell3.appendChild(ghulab);\r\n\r\n    // // adding the para and button\r\n    const cell3Para = document.createElement('p');\r\n    cell3Para.innerText = \"Gulab Jamun – Dough balls soaked in sugar syrup, proving that frying something and drowning it in sugar is a universal human instinct.\";\r\n    cell3.appendChild(cell3Para);\r\n\r\n    const cell3Btn = document.createElement('button');\r\n    cell3Btn.innerText = \"Add To Cart\";\r\n    cell3.appendChild(cell3Btn);\r\n    rowOne.appendChild(cell3)\r\n    // // appending the whole row one\r\n    // MenuGrid.appendChild(rowOne);\r\n    // // end of row One\r\n\r\n    // // now we make row Two with the class rows\r\n    const rowTwo = document.createElement('div');\r\n    rowTwo.setAttribute('class', 'rows');\r\n    MenuGrid.appendChild(rowTwo)\r\n    // // cell 1 of Row 2\r\n    const cell1R2 = document.createElement('div');\r\n\r\n    // //adding image in cell1R2\r\n    const cannoli = document.createElement(\"img\");\r\n    cannoli.src = _images_cannoli_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    cannoli.alt = \"Delicious Cannoli\";\r\n    cell1R2.appendChild(cannoli);\r\n\r\n    // // adding the para and button\r\n    const cell1R2Para = document.createElement('p');\r\n    cell1R2Para.innerText = \"Cannoli – A crispy tube stuffed with sweet cheese, proving once again that Italians will put cheese in anything.\";\r\n    cell1R2.appendChild(cell1R2Para);\r\n\r\n    const cell1R2Btn = document.createElement('button');\r\n    cell1R2Btn.innerText = \"Add To Cart\";\r\n    cell1R2.appendChild(cell1R2Btn);\r\n    rowTwo.appendChild(cell1R2);\r\n    // // end of cell 1 of row 2\r\n    // // cell 2 of row 1\r\n    const cell2R2 = document.createElement('div');\r\n\r\n    // //adding image \r\n    const chipcookie = document.createElement(\"img\");\r\n    chipcookie.src = _images_chipcookie_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n    chipcookie.alt = \"Delicious Cookie\";\r\n    cell2R2.appendChild(chipcookie);\r\n\r\n    // // adding the para and button\r\n    const cell2R2Para = document.createElement('p');\r\n    cell2R2Para.innerText = \"Chocolate Chip Cookie – Invented when someone accidentally dropped chocolate into dough and decided to just roll with it.\";\r\n    cell2R2.appendChild(cell2R2Para);\r\n\r\n    const cell2R2Btn = document.createElement('button');\r\n    cell2R2Btn.innerText = \"Add To Cart\";\r\n    cell2R2.appendChild(cell2R2Btn);\r\n    rowTwo.appendChild(cell2R2)\r\n\r\n    // // end of cell 2 of row 1\r\n\r\n    // // cell 3 of row 1\r\n    const cell3R2 = document.createElement('div');\r\n\r\n    // //adding image \r\n    const churrons = document.createElement(\"img\");\r\n    churrons.src = _images_churrons_jpg__WEBPACK_IMPORTED_MODULE_5__;\r\n    churrons.alt = \"Delicious Churrons\";\r\n    cell3R2.appendChild(churrons);\r\n\r\n    // // adding the para and button\r\n    const cell3R2Para = document.createElement('p');\r\n    cell3R2Para.innerText = \"Churros – Basically, a deep-fried dough stick covered in sugar, because cinnamon alone wasn’t enough.\";\r\n    cell3R2.appendChild(cell3R2Para);\r\n\r\n    const cell3R2Btn = document.createElement('button');\r\n    cell3R2Btn.innerText = \"Add To Cart\";\r\n    cell3R2.appendChild(cell3R2Btn);\r\n    rowTwo.appendChild(cell3R2);\r\n    // end of row two\r\n\r\n\r\n    // appending the menu grid to pageContent \r\n    pageMenuContent.appendChild(MenuGrid);\r\n\r\n\r\n    contentMenuDiv.appendChild(pageMenuContent);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCreaterFunc);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad),\n/* harmony export */   initialLoad: () => (/* binding */ initialLoad),\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nfunction initialLoad(params) {\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction menuLoad () {\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\nfunction aboutLoad () {\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_icecreams_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icecreams.jpg */ \"./src/images/icecreams.jpg\");\n // Import image\r\n\r\n\r\nconst createRestaurantHomePage = () => {\r\n\r\n    const contentDiv = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    // create image and append an image \r\n    const image = document.createElement(\"img\");\r\n    image.src = _images_icecreams_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.alt = \"Delicious Ice Cream\";\r\n    image.id = \"icecream-img\";\r\n    pageContent.appendChild(image);\r\n\r\n    // create and append headline\r\n    const headline = document.createElement('h1');\r\n    headline.textContent = \"Cunk on Cuisine: Exploring Food, Poorly\";\r\n    pageContent.appendChild(headline);\r\n\r\n    // create p and append it\r\n    const paragraphLine = document.createElement('p');\r\n    paragraphLine.textContent = \"Ever wondered why toast exists? Or who decided ice cream should be cold? Neither have we, but we’re here to pretend we have.\"\r\n    pageContent.appendChild(paragraphLine);\r\n\r\n    // append pageContent that contains everything\r\n    contentDiv.appendChild(pageContent);\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

/***/ }),

/***/ "./src/images/cannoli.jpg":
/*!********************************!*\
  !*** ./src/images/cannoli.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cannoli.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cannoli.jpg?");

/***/ }),

/***/ "./src/images/chipcookie.jpg":
/*!***********************************!*\
  !*** ./src/images/chipcookie.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/chipcookie.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chipcookie.jpg?");

/***/ }),

/***/ "./src/images/churrons.jpg":
/*!*********************************!*\
  !*** ./src/images/churrons.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/churrons.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/churrons.jpg?");

/***/ }),

/***/ "./src/images/cunkfood.jpg":
/*!*********************************!*\
  !*** ./src/images/cunkfood.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cunkfood.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cunkfood.jpg?");

/***/ }),

/***/ "./src/images/ghulab.jpg":
/*!*******************************!*\
  !*** ./src/images/ghulab.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ghulab.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ghulab.jpg?");

/***/ }),

/***/ "./src/images/icecreams.jpg":
/*!**********************************!*\
  !*** ./src/images/icecreams.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icecreams.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icecreams.jpg?");

/***/ }),

/***/ "./src/images/stollen.jpg":
/*!********************************!*\
  !*** ./src/images/stollen.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/stollen.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/stollen.jpg?");

/***/ }),

/***/ "./src/images/taiyaki.jpg":
/*!********************************!*\
  !*** ./src/images/taiyaki.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/taiyaki.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/taiyaki.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/restaurant-page/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;