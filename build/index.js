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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_ExampleReactComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ExampleReactComponent */ "./src/scripts/ExampleReactComponent.js");
/* harmony import */ var _scripts_EditorBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/EditorBlock.js */ "./src/scripts/EditorBlock.js");
 // import { registerBlockType } from '@wordpress/scripts';
// import { __ } from '@wordpress/scripts';
// registerBlockType('test/my-first-block', {
//     title: 'Test Block',
//     icon: 'dashicons-admin-users',
//     category: 'layout',
//     edit: () => <div>Hi!</div>,
//     save: () => <div>Hi!</div>
// });
// console.log("we has block?");

/**
 * Import internal dependencies
 */
//  import '../css/style.css';
//  import blockIcons from 'scripts/icons.js';


/**
 * Get WordPress libraries from the wp global
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Register Block.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {WPBlock} The block, if it has been successfully registered; otherwise `undefined`.
 */

registerBlockType('wcms20/google-map', {
  title: __('Google Map'),
  description: __('This block creates either an interactive Google map or a static map image. Simply enter text for a location in the map block. Advanced settings can be adjusted below.'),
  icon: blockIcons.googleMap,
  category: 'embed',
  supports: {
    html: false
  },
  edit: _scripts_EditorBlock_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/scripts/EditorBlock.js":
/*!************************************!*\
  !*** ./src/scripts/EditorBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditorBlock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _getMapHTML_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getMapHTML.js */ "./src/scripts/getMapHTML.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Import internal dependencies
 */
//  import '../css/style.css';


/**
 * Get WordPress libraries from the wp global
 */

var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var settings;
wp.api.loadPromise.then(function () {
  settings = new wp.api.models.Settings();
});
var googleAPIkeyLink = 'https://console.developers.google.com/flows/enableapi?apiid=maps_backend,static_maps_backend,maps_embed_backend&keyType=CLIENT_SIDE&reusekey=true';

var EditorBlock = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditorBlock, _Component);

  var _super = _createSuper(EditorBlock);

  function EditorBlock() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorBlock);

    _this = _super.apply(this, arguments);
    _this.saveApiKey = _this.saveApiKey.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.state = {
      apiKey: PantheonGoogleMapsData.APIKey,
      isSavedKey: PantheonGoogleMapsData.APIKey !== '',
      isLoading: PantheonGoogleMapsData.userCanManageOptions,
      APIKeyConstantDefined: !!PantheonGoogleMapsData.APIKeyConstantDefined,
      userCanManageOptions: !!PantheonGoogleMapsData.userCanManageOptions,
      isSaving: false,
      keySaved: false
    };
    settings.on('change:pantheon_google_map_block_api_key', function (model) {
      var apiKey = model.get('pantheon_google_map_block_api_key');

      _this.setState({
        apiKey: settings.get('pantheon_google_map_block_api_key'),
        isSavedKey: apiKey === '' ? false : true
      });
    });

    if (_this.state.userCanManageOptions) {
      settings.fetch().then(function (response) {
        _this.setState({
          apiKey: response.pantheon_google_map_block_api_key
        });

        if (_this.state.apiKey && _this.state.apiKey !== '') {
          _this.setState({
            isSavedKey: true
          });
        }

        _this.setState({
          isLoading: false
        });
      });
    } else {
      _this.setState({
        apiKey: PantheonGoogleMapsData.APIKey
      });

      if (_this.state.apiKey && _this.state.apiKey !== '') {
        _this.setState({
          isSavedKey: true
        });
      }

      _this.setState({
        isLoading: false
      });
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorBlock, [{
    key: "saveApiKey",
    value: function saveApiKey() {
      var _this2 = this;

      this.setState({
        isSaving: true
      });
      var model = new wp.api.models.Settings({
        pantheon_google_map_block_api_key: this.state.apiKey
      });
      model.save().then(function (response) {
        _this2.setState({
          isSavedKey: true,
          isLoading: false,
          isSaving: false,
          keySaved: true
        });

        settings.fetch();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;
      var location = attributes.location,
          mapType = attributes.mapType,
          zoom = attributes.zoom,
          interactive = attributes.interactive,
          maxWidth = attributes.maxWidth,
          maxHeight = attributes.maxHeight,
          aspectRatio = attributes.aspectRatio;
      var editorPadding = '0 1em';
      var classNames = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, "ratio".concat(aspectRatio), {
        'interactive': interactive,
        'has-api-key': this.state.apiKey
      });
      var linkOptions = [{
        value: 'roadmap',
        label: __('roadmap')
      }, {
        value: 'satellite',
        label: __('satellite')
      }];
      var aspectRatioOptions = [{
        value: '2_1',
        label: __('2:1')
      }, {
        value: '16_9',
        label: __('16:9')
      }, {
        value: '4_3',
        label: __('4:3')
      }, {
        value: '1_1',
        label: __('1:1')
      }, {
        value: '1_2',
        label: __('1:2')
      }];

      if (!!this.state.isLoading) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "".concat(className, " notice notice-warning"),
          style: {
            padding: editorPadding
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
          style: {
            textAlign: 'center'
          }
        }, __('Loading map...')));
      }

      var apiKeyMessage = '';

      if (this.state.APIKeyConstantDefined) {
        apiKeyMessage = __('The Google Maps API key is defined with the GOOGLE_MAPS_API_KEY constant. To change the API key, update the constant value.');
      } else if (this.state.isSavedKey) {
        apiKeyMessage = this.state.userCanManageOptions ? '' : __('Only administrators can change the Google Maps API key.');
      } else {
        apiKeyMessage = this.state.userCanManageOptions ? __('A valid Google Maps API key is required to use the map block, please enter one below.') : __('A valid Google Maps API key is required to use the map block, please ask an administrator to enter one.');
      }

      var keyInput = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "api-key-input-container"
      }, this.state.APIKeyConstantDefined ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        style: {
          textAlign: 'center'
        }
      }, apiKeyMessage) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        style: {
          textAlign: 'center'
        }
      }, apiKeyMessage, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("br", null), this.state.isSavedKey && this.state.userCanManageOptions ? __('Note: changing the API key effects all Google Map Embed blocks.') : null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        key: "api-input",
        value: this.state.apiKey,
        onChange: function onChange(value) {
          return _this3.setState({
            apiKey: value
          });
        },
        style: {
          textAlign: 'center',
          border: 'solid 1px rgba(100,100,100,0.25)'
        },
        readOnly: this.state.APIKeyConstantDefined || !this.state.userCanManageOptions,
        placeholder: __('API Key')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        style: {
          textAlign: 'center',
          paddingBottom: '1em'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
        href: googleAPIkeyLink
      }, __('An API key can be obtained here.')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isPrimary: true,
        onClick: this.saveApiKey,
        isBusy: this.state.isSaving,
        disabled: this.state.APIKeyConstantDefined || !this.state.userCanManageOptions || this.state.apiKey === ''
      }, __('Save API key')))));

      if (!this.state.isSavedKey) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "".concat(className, " error"),
          style: {
            padding: editorPadding
          }
        }, keyInput);
      }

      return [!!isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, !!interactive ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        label: __('Aspect Ratio'),
        select: aspectRatio,
        options: aspectRatioOptions,
        onChange: function onChange(value) {
          return setAttributes({
            aspectRatio: value
          });
        },
        value: aspectRatio
      }) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RangeControl, {
        label: __('Zoom Level'),
        value: zoom,
        onChange: function onChange(value) {
          return setAttributes({
            zoom: value
          });
        },
        min: 5,
        max: 20
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
        label: __('Map Type'),
        select: mapType,
        options: linkOptions,
        onChange: function onChange(value) {
          return setAttributes({
            mapType: value
          });
        },
        value: mapType
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ToggleControl, {
        label: __('Toggle interactive map (on) or static image (off)'),
        checked: !!interactive,
        onChange: function onChange() {
          return setAttributes({
            interactive: !interactive
          });
        }
      }), !interactive ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Maximum width (in pixels)'),
        onChange: function onChange(value) {
          return setAttributes({
            maxWidth: Number.parseInt(value, 10)
          });
        },
        value: maxWidth,
        type: "number",
        min: 0,
        step: 1
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        label: __('Maximum height (in pixels)'),
        onChange: function onChange(value) {
          return setAttributes({
            maxHeight: Number.parseInt(value, 10)
          });
        },
        value: maxHeight,
        type: "number",
        min: 0,
        step: 1
      })) : null, keyInput), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextControl, {
        key: "location-input",
        style: {
          textAlign: 'center',
          border: 'solid 1px rgba(100,100,100,0.25)'
        },
        onChange: function onChange(value) {
          return setAttributes({
            location: value
          });
        },
        value: location,
        placeholder: __('Enter a location...'),
        label: location === '' || !location.length ? __('Location') : null
      }), location === '' || !location.length ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "".concat(className, " error"),
        style: {
          padding: editorPadding
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
        style: {
          textAlign: 'center'
        }
      }, __('A location is required. Please enter one in the field above.'))) : this.state.apiKey === '' && this.state.keySaved === false ? keyInput : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classNames
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "map"
      }, Object(_getMapHTML_js__WEBPACK_IMPORTED_MODULE_7__["default"])(attributes, this.state.apiKey)))];
    }
  }]);

  return EditorBlock;
}(Component);



/***/ }),

/***/ "./src/scripts/ExampleReactComponent.js":
/*!**********************************************!*\
  !*** ./src/scripts/ExampleReactComponent.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

wp.blocks.registerBlockType("test/test-name", {
  title: "Testblock",
  icon: "dashicons-admin-user",
  category: "common",
  attributes: {
    skyColor: {
      type: "string"
    },
    grassColor: {
      type: "string"
    }
  },
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hi!");
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Hi, this block is saved!");
  }
});

/***/ }),

/***/ "./src/scripts/getMapHTML.js":
/*!***********************************!*\
  !*** ./src/scripts/getMapHTML.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMapHTML; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getMapURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMapURL.js */ "./src/scripts/getMapURL.js");


function getMapHTML(attributes, apiKey) {
  var interactive = attributes.interactive;

  if (apiKey === '' || apiKey === undefined) {
    return null;
  }

  var mapURL = Object(_getMapURL_js__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes, apiKey);

  if (!!interactive) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      width: "100%",
      height: "100%",
      frameBorder: "0",
      style: {
        border: 0
      },
      src: mapURL,
      allowFullScreen: true
    });
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: mapURL
    });
  }
}

/***/ }),

/***/ "./src/scripts/getMapURL.js":
/*!**********************************!*\
  !*** ./src/scripts/getMapURL.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMapURL; });
function getMapURL(attributes, apiKey) {
  var location = attributes.location,
      mapType = attributes.mapType,
      zoom = attributes.zoom,
      interactive = attributes.interactive,
      maxHeight = attributes.maxHeight,
      maxWidth = attributes.maxWidth;

  if (apiKey === '' || apiKey === undefined) {
    return null;
  }

  if (!!interactive) {
    return "https://www.google.com/maps/embed/v1/place?key=".concat(apiKey, "&q=").concat(encodeURI(location), "&zoom=").concat(zoom, "&maptype=").concat(mapType);
  } else {
    return "https://maps.googleapis.com/maps/api/staticmap?center=".concat(encodeURI(location), "&zoom=").concat(zoom, "&size=").concat(maxWidth, "x").concat(maxHeight, "&maptype=").concat(mapType, "&key=").concat(apiKey);
  }
}

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map