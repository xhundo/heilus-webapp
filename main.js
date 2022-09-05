/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(_ref) {
    var popupSelector = _ref.popupSelector,
        button = _ref.button,
        buttonClose = _ref.buttonClose;

    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector("".concat(popupSelector));
    this._buttonElement = document.querySelector("".concat(button));
    this._button = document.querySelector("".concat(buttonClose));
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add("popup_open");
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("popup_open");
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._button.addEventListener("click", function () {
        _this.close();
      });

      this._buttonElement.addEventListener("click", function () {
        _this.open();
      });
    }
  }, {
    key: "fillInfo",
    value: function fillInfo(name, job, about) {
      this.name = document.querySelector("#name");
      this.name.textContent = name;
      this.job = document.querySelector("#job");
      this.job.textContent = job;
      this.about = document.querySelector(".popup__text");
      this.about.textContent = about;
    }
  }, {
    key: "fillUserInfo",
    value: function fillUserInfo(name, job, about) {
      this.name = document.querySelector("#name2");
      this.name.textContent = name;
      this.job = document.querySelector("#job2");
      this.job.textContent = job;
      this.about = document.querySelector(".popup__text2");
      this.about.textContent = about;
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");


var popup = new _components_Popup_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  popupSelector: "#popup",
  button: "#button1",
  buttonClose: ".popup__button"
});
var popup2 = new _components_Popup_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  popupSelector: "#popup2",
  button: "#button2",
  buttonClose: "#button3"
});
popup.fillInfo("Ani Petrichor", "Data Analyst", "Ani Petrichor is a Brooklyn-based data analyst. She has a background in operations & logistics in the sustainability food sector, primarily working to bring locally farmed ingredients to urban residents. She believes that big data can be used to effect good in the world.");
popup2.fillUserInfo("Kurtney Joseph", "Software Engineer", "Kurtney Joseph is an Orlando based software engineer who aims to provide companies and local businesses with effective solutions though web development.");
popup.setEventListeners();
popup2.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUEsSUFBTWlCLE1BQU0sR0FBRyxJQUFJcEIsNERBQUosQ0FBVTtFQUN2QkMsYUFBYSxFQUFFLFNBRFE7RUFFdkJDLE1BQU0sRUFBRSxVQUZlO0VBR3ZCQyxXQUFXLEVBQUU7QUFIVSxDQUFWLENBQWY7QUFNQWdCLEtBQUssQ0FBQ0UsUUFBTixDQUNFLGVBREYsRUFFRSxjQUZGLEVBR0UsaVJBSEY7QUFNQUQsTUFBTSxDQUFDRSxZQUFQLENBQ0UsZ0JBREYsRUFFRSxtQkFGRixFQUdFLDBKQUhGO0FBTUFILEtBQUssQ0FBQ0ksaUJBQU47QUFDQUgsTUFBTSxDQUFDRyxpQkFBUCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBidXR0b24sIGJ1dHRvbkNsb3NlIH0pIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YnV0dG9ufWApO1xuICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YnV0dG9uQ2xvc2V9YCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsbEluZm8obmFtZSwgam9iLCBhYm91dCkge1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb2JcIik7XG4gICAgdGhpcy5qb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHRcIik7XG4gICAgdGhpcy5hYm91dC50ZXh0Q29udGVudCA9IGFib3V0O1xuICB9XG5cbiAgZmlsbFVzZXJJbmZvKG5hbWUsIGpvYiwgYWJvdXQpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUyXCIpO1xuICAgIHRoaXMubmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvYjJcIik7XG4gICAgdGhpcy5qb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHQyXCIpO1xuICAgIHRoaXMuYWJvdXQudGV4dENvbnRlbnQgPSBhYm91dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcblxuY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAoe1xuICBwb3B1cFNlbGVjdG9yOiBcIiNwb3B1cFwiLFxuICBidXR0b246IFwiI2J1dHRvbjFcIixcbiAgYnV0dG9uQ2xvc2U6IFwiLnBvcHVwX19idXR0b25cIixcbn0pO1xuXG5jb25zdCBwb3B1cDIgPSBuZXcgUG9wdXAoe1xuICBwb3B1cFNlbGVjdG9yOiBcIiNwb3B1cDJcIixcbiAgYnV0dG9uOiBcIiNidXR0b24yXCIsXG4gIGJ1dHRvbkNsb3NlOiBcIiNidXR0b24zXCIsXG59KTtcblxucG9wdXAuZmlsbEluZm8oXG4gIFwiQW5pIFBldHJpY2hvclwiLFxuICBcIkRhdGEgQW5hbHlzdFwiLFxuICBcIkFuaSBQZXRyaWNob3IgaXMgYSBCcm9va2x5bi1iYXNlZCBkYXRhIGFuYWx5c3QuIFNoZSBoYXMgYSBiYWNrZ3JvdW5kIGluIG9wZXJhdGlvbnMgJiBsb2dpc3RpY3MgaW4gdGhlIHN1c3RhaW5hYmlsaXR5IGZvb2Qgc2VjdG9yLCBwcmltYXJpbHkgd29ya2luZyB0byBicmluZyBsb2NhbGx5IGZhcm1lZCBpbmdyZWRpZW50cyB0byB1cmJhbiByZXNpZGVudHMuIFNoZSBiZWxpZXZlcyB0aGF0IGJpZyBkYXRhIGNhbiBiZSB1c2VkIHRvIGVmZmVjdCBnb29kIGluIHRoZSB3b3JsZC5cIlxuKTtcblxucG9wdXAyLmZpbGxVc2VySW5mbyhcbiAgXCJLdXJ0bmV5IEpvc2VwaFwiLFxuICBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gIFwiS3VydG5leSBKb3NlcGggaXMgYW4gT3JsYW5kbyBiYXNlZCBzb2Z0d2FyZSBlbmdpbmVlciB3aG8gYWltcyB0byBwcm92aWRlIGNvbXBhbmllcyBhbmQgbG9jYWwgYnVzaW5lc3NlcyB3aXRoIGVmZmVjdGl2ZSBzb2x1dGlvbnMgdGhvdWdoIHdlYiBkZXZlbG9wbWVudC5cIlxuKTtcblxucG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwMi5zZXRFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImJ1dHRvbiIsImJ1dHRvbkNsb3NlIiwiX3BvcHVwRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9idXR0b25FbGVtZW50IiwiX2J1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsIm9wZW4iLCJuYW1lIiwiam9iIiwiYWJvdXQiLCJ0ZXh0Q29udGVudCIsInBvcHVwIiwicG9wdXAyIiwiZmlsbEluZm8iLCJmaWxsVXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=