(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mapboxSuperset"] = factory();
	else
		root["mapboxSuperset"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randomId = __webpack_require__(1);

exports.default = {

  /**
  * Use this as default 'layout' property when not provided.
  */
  defaultLayout: {
    'icon-image': 'marker-11',
    'icon-size': 1.8
  },

  /**
    * Use this as default 'paint' property when not provided.
  */
  defaultPaint: {},

  /**
  * Add a marker (POI) to the location described by lng and lat.
  * Under the hood, a source is created with only one point. This source is styled
  * with the layout and paint properties. The function returns a handle to the marker.
  */
  add: function add(map, _ref) {
    var lng = _ref.lng,
        lat = _ref.lat;
    var layout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.defaultLayout;
    var paint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.defaultPaint;

    var srcId = 'mapbox-superset-src' + (0, _randomId.uniqId)();

    map.addSource(srcId, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          properties: {}
        }]
      }
    });

    var layerId = 'mapbox-superset-layer' + (0, _randomId.uniqId)();

    map.addLayer({
      id: layerId,
      type: 'symbol',
      source: srcId,
      layout: layout,
      paint: paint
    });

    return {
      layerId: layerId,
      srcId: srcId
    };
  },


  /**
   * Remove the marker described by its handle.
   */
  remove: function remove(map, _ref2) {
    var srcId = _ref2.srcId,
        layerId = _ref2.layerId;

    map.removeSource(srcId);
    map.removeLayer(layerId);
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function guidGenerator() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

function uniqId() {
  return btoa(guidGenerator);
}

exports.uniqId = uniqId;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _marker = __webpack_require__(0);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * compose the library using the different modules
 */
exports.default = {
  marker: _marker2.default
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map