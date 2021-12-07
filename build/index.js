/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/google-maps-block/attributes.js":
/*!****************************************************!*\
  !*** ./src/blocks/google-maps-block/attributes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  zoom: {
    type: 'number',
    "default": 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/google-maps-block/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/google-maps-block/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/src/blocks/google-maps-block/edit.js: 'Const declarations' require an initialization value. (32:9)\n\n\u001b[0m \u001b[90m 30 |\u001b[39m             }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 31 |\u001b[39m             \u001b[90m// setAttributes,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 32 |\u001b[39m         }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m         \u001b[90m// const options = {\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m         \u001b[90m//     zoomControl: true,\u001b[39m\u001b[0m\n    at Object._raise (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:541:17)\n    at Object.raiseWithData (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:534:17)\n    at Object.raise (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:495:17)\n    at Object.parseVar (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14026:18)\n    at Object.parseVarStatement (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13836:10)\n    at Object.parseStatementContent (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13421:21)\n    at Object.parseStatement (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13352:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13941:25)\n    at Object.parseBlockBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13932:10)\n    at Object.parseBlock (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13916:10)\n    at Object.parseFunctionBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:12786:24)\n    at Object.parseFunctionBodyAndFinish (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:12770:10)\n    at Object.parseMethod (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:12720:10)\n    at Object.pushClassMethod (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14393:30)\n    at Object.parseClassMemberWithIsStatic (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14278:12)\n    at Object.parseClassMember (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14215:10)\n    at /Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14159:14\n    at Object.withSmartMixTopicForbiddingContext (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13108:14)\n    at Object.parseClassBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14136:10)\n    at Object.parseClass (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14110:22)\n    at Object.parseExportDefaultExpression (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14576:19)\n    at Object.parseExport (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:14486:31)\n    at Object.parseStatementContent (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13460:27)\n    at Object.parseStatement (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13352:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13941:25)\n    at Object.parseBlockBody (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13932:10)\n    at Object.parseProgram (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13272:10)\n    at Object.parseTopLevel (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:13263:25)\n    at Object.parse (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:15037:10)\n    at parse (/Users/fl/web/cms-projekt.test/wp-content/themes/wcm20_bootscore/node_modules/@babel/parser/lib/index.js:15089:38)");

/***/ }),

/***/ "./src/blocks/google-maps-block/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/google-maps-block/index.js ***!
  \***********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/google-maps-block/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/google-maps-block/attributes.js");
var BLOCK_NAME = 'wcms-maps/google-map';

var BLOCK_TITLE = wp.i18n._x('Google Map', 'wcms20-blocks', 'wcms-maps');

var BLOCK_DESCRIPTION = wp.i18n._x('Add a nice map!', 'wcms20-blocks', 'wcms-maps'); // Internal dependencies




var name = BLOCK_NAME;
var settings = {
  title: BLOCK_TITLE,
  description: BLOCK_DESCRIPTION,
  icon: 'heart',
  category: 'layout',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"] // save: GoogleMapSave,

};

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_maps_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-maps-block */ "./src/blocks/google-maps-block/index.js");
/*
* Import the blocks.
*/

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;
[_google_maps_block__WEBPACK_IMPORTED_MODULE_1__ // Add more custom blocks here
].forEach(function (block) {
  if (!block) {
    return;
  } // Register block in the editor


  var name = block.name,
      settings = block.settings;
  registerBlockType(name, settings);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_FirstBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/FirstBlock */ "./src/scripts/FirstBlock.js");
/* harmony import */ var _scripts_FirstBlock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_FirstBlock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");



/***/ }),

/***/ "./src/scripts/FirstBlock.js":
/*!***********************************!*\
  !*** ./src/scripts/FirstBlock.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
var RichText = wp.editor.RichText;
registerBlockType('wcms20/firstblock', {
  title: 'My First Block',
  category: 'layout',
  icon: 'smiley',
  description: 'Our very first block',
  attributes: {
    exampleText: {
      type: 'string',
      "default": 'Example Text'
    },
    myRichText: {
      // type: 'string',
      source: 'html',
      "default": 'My Richie Rich text'
    }
  },
  edit: function edit(props) {
    console.log(props);
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextControl, {
      tagName: "h2",
      value: attributes.exampleText,
      onChange: function onChange(newtext) {
        return setAttributes({
          exampleText: newtext
        });
      }
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "h2",
      value: attributes.myRichText,
      onChange: function onChange(newtext) {
        return setAttributes({
          myRichText: newtext
        });
      }
    }));
  },
  save: function save(props) {
    var attributes = props.attributes;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h2",
      value: attributes.myRichText
    }));
  }
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map