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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _armoirie = __webpack_require__(2);

var _armoirie2 = _interopRequireDefault(_armoirie);

var _main = __webpack_require__(3);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all armoiries
var armoirieAnchors = [].slice.call(document.querySelectorAll(".timeline__item"));
var armoiries = [].slice.call(document.querySelectorAll(".armoirie"));

armoirieAnchors.map(function (anchor) {
    anchor.addEventListener("click", function (e) {

        var clickedAnchor = e.target.getAttribute("data-id");

        armoirieAnchors.map(function (anchor) {
            anchor.classList.remove("is-active");
        });

        e.target.classList.add("is-active");

        armoiries.map(function (armoirie) {
            var armoirieId = armoirie.getAttribute("data-id");
            armoirieId == clickedAnchor ? armoirie.classList.add("is-visible") : armoirie.classList.remove("is-visible");
        });
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Armoirie = function () {
  function Armoirie(id, imgSrc, desc, tagsList, date, motto, logotypeSrc) {
    _classCallCheck(this, Armoirie);

    this._id = id; // Number
    this._imgSrc = imgSrc; // String
    this._desc = desc; // String
    this._tagsList = tagsList; // Array of Number
    this._date = date; // Number or String
    this._motto = motto; // optional String
    this._logotypeSrc = logotypeSrc; //optional String
  }

  _createClass(Armoirie, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "imgSrc",
    get: function get() {
      return this._imgSrc;
    }
  }, {
    key: "desc",
    get: function get() {
      return this._desc;
    }
  }, {
    key: "tagsList",
    get: function get() {
      return this._tagsList;
    }
  }, {
    key: "date",
    get: function get() {
      return this._date;
    }
  }, {
    key: "motto",
    get: function get() {
      return this._motto;
    }
  }, {
    key: "logotypeSrc",
    get: function get() {
      return this._logotypeSrc;
    }
  }]);

  return Armoirie;
}();

exports.default = Armoirie;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509594278654
      var cssReload = require("../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })
/******/ ]);