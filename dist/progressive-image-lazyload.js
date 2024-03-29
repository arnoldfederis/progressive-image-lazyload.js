/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_progressive_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/progressive-image */ "./src/js/progressive-image.js");


/***/ }),

/***/ "./src/js/canvas-image.js":
/*!********************************!*\
  !*** ./src/js/canvas-image.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasImage": () => (/* binding */ CanvasImage)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CanvasImage = /*#__PURE__*/function () {
  function CanvasImage(element, target) {
    _classCallCheck(this, CanvasImage);

    this.element = element;
    element.width = target.width;
    element.height = target.height;
    this.context = element.getContext('2d');
    this.context.drawImage(target, 0, 0);
  }

  _createClass(CanvasImage, [{
    key: "blur",
    value: function blur(element) {
      this.context.globalAlpha = 0.5;

      for (var t = -element; t <= element; t += 2) {
        for (var n = -element; n <= element; n += 2) {
          this.context.drawImage(this.element, n, t);
          n >= 0 && t >= 0 && this.context.drawImage(this.element, -(n - 1), -(t - 1));
        }
      }
    }
  }]);

  return CanvasImage;
}();

/***/ }),

/***/ "./src/js/progressive-image.js":
/*!*************************************!*\
  !*** ./src/js/progressive-image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas-image */ "./src/js/canvas-image.js");


var loadLgImage = function loadLgImage(progressiveMedia) {
  // grab data-src from original image
  // from progressiveMedia-image
  var lgImage = progressiveMedia.querySelector('.progressiveMedia-image');
  lgImage.src = lgImage.dataset.src; // onload image visible

  lgImage.onload = function () {
    progressiveMedia.classList.add('is-imageLoaded');
  };
};

var loadSmImage = function loadSmImage(progressiveMedia) {
  // calculate aspect ratio
  // for the aspectRatioPlaceholder-fill
  // that helps to set a fixed fill for loading images
  var width = progressiveMedia.dataset.width,
      height = progressiveMedia.dataset.height,
      fill = height / width * 100,
      placeholderFill = progressiveMedia.previousElementSibling;
  placeholderFill.setAttribute('style', 'padding-bottom:' + fill + '%;'); // set max-height and max-width to aspectRatioPlaceholder

  var aspectRatioPlaceholder = progressiveMedia.parentElement,
      maxWidth = aspectRatioPlaceholder.offsetWidth,
      maxHeight = aspectRatioPlaceholder.offsetHeight;
  aspectRatioPlaceholder.setAttribute('style', 'max-width:' + maxWidth + 'px; max-height:' + maxHeight + 'px;'); // get thumbnail height wight
  // make canvas fun part

  var thumbnail = progressiveMedia.querySelector('.progressiveMedia-thumbnail'),
      smImageWidth = thumbnail.width,
      canvas = progressiveMedia.querySelector('.progressiveMedia-canvas'),
      context = canvas.getContext('2d');
  canvas.height = thumbnail.height;
  canvas.width = smImageWidth;
  var img = new Image();
  img.src = thumbnail.dataset.thumb;

  img.onload = function () {
    context.drawImage(img, 0, 0); // draw canvas

    var canvasImage = new _canvas_image__WEBPACK_IMPORTED_MODULE_0__.CanvasImage(canvas, img);
    canvasImage.blur(2); // load canvas visible

    progressiveMedia.classList.add('is-canvasLoaded');
  };
};

var lazyLoadImage = function lazyLoadImage(target) {
  var intersectObject = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        loadSmImage(entry.target);
        loadLgImage(entry.target);
        observer.disconnect();
      }
    });
  });
  intersectObject.observe(target);
};

setTimeout(function () {
  return document.querySelectorAll('.progressiveMedia').forEach(lazyLoadImage);
});

/***/ }),

/***/ "./src/scss/_progressive-image.scss":
/*!******************************************!*\
  !*** ./src/scss/_progressive-image.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/progressive-image-lazyload": 0,
/******/ 			"dist/progressive-image-lazyload": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprogressive_image_lazyload_js"] = self["webpackChunkprogressive_image_lazyload_js"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/progressive-image-lazyload"], () => (__webpack_require__("./src/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/progressive-image-lazyload"], () => (__webpack_require__("./src/scss/_progressive-image.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;