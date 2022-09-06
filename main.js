/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/svg-pan-zoom/src/browserify.js":
/*!*****************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/browserify.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SvgPanZoom = __webpack_require__(/*! ./svg-pan-zoom.js */ "./node_modules/svg-pan-zoom/src/svg-pan-zoom.js");

module.exports = SvgPanZoom;

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/control-icons.js":
/*!********************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/control-icons.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SvgUtils = __webpack_require__(/*! ./svg-utilities */ "./node_modules/svg-pan-zoom/src/svg-utilities.js");

module.exports = {
  enable: function enable(instance) {
    // Select (and create if necessary) defs
    var defs = instance.svg.querySelector("defs");

    if (!defs) {
      defs = document.createElementNS(SvgUtils.svgNS, "defs");
      instance.svg.appendChild(defs);
    } // Check for style element, and create it if it doesn't exist


    var styleEl = defs.querySelector("style#svg-pan-zoom-controls-styles");

    if (!styleEl) {
      var style = document.createElementNS(SvgUtils.svgNS, "style");
      style.setAttribute("id", "svg-pan-zoom-controls-styles");
      style.setAttribute("type", "text/css");
      style.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }";
      defs.appendChild(style);
    } // Zoom Group


    var zoomGroup = document.createElementNS(SvgUtils.svgNS, "g");
    zoomGroup.setAttribute("id", "svg-pan-zoom-controls");
    zoomGroup.setAttribute("transform", "translate(" + (instance.width - 70) + " " + (instance.height - 76) + ") scale(0.75)");
    zoomGroup.setAttribute("class", "svg-pan-zoom-control"); // Control elements

    zoomGroup.appendChild(this._createZoomIn(instance));
    zoomGroup.appendChild(this._createZoomReset(instance));
    zoomGroup.appendChild(this._createZoomOut(instance)); // Finally append created element

    instance.svg.appendChild(zoomGroup); // Cache control instance

    instance.controlIcons = zoomGroup;
  },
  _createZoomIn: function _createZoomIn(instance) {
    var zoomIn = document.createElementNS(SvgUtils.svgNS, "g");
    zoomIn.setAttribute("id", "svg-pan-zoom-zoom-in");
    zoomIn.setAttribute("transform", "translate(30.5 5) scale(0.015)");
    zoomIn.setAttribute("class", "svg-pan-zoom-control");
    zoomIn.addEventListener("click", function () {
      instance.getPublicInstance().zoomIn();
    }, false);
    zoomIn.addEventListener("touchstart", function () {
      instance.getPublicInstance().zoomIn();
    }, false);
    var zoomInBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier

    zoomInBackground.setAttribute("x", "0");
    zoomInBackground.setAttribute("y", "0");
    zoomInBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down

    zoomInBackground.setAttribute("height", "1400");
    zoomInBackground.setAttribute("class", "svg-pan-zoom-control-background");
    zoomIn.appendChild(zoomInBackground);
    var zoomInShape = document.createElementNS(SvgUtils.svgNS, "path");
    zoomInShape.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z");
    zoomInShape.setAttribute("class", "svg-pan-zoom-control-element");
    zoomIn.appendChild(zoomInShape);
    return zoomIn;
  },
  _createZoomReset: function _createZoomReset(instance) {
    // reset
    var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, "g");
    resetPanZoomControl.setAttribute("id", "svg-pan-zoom-reset-pan-zoom");
    resetPanZoomControl.setAttribute("transform", "translate(5 35) scale(0.4)");
    resetPanZoomControl.setAttribute("class", "svg-pan-zoom-control");
    resetPanZoomControl.addEventListener("click", function () {
      instance.getPublicInstance().reset();
    }, false);
    resetPanZoomControl.addEventListener("touchstart", function () {
      instance.getPublicInstance().reset();
    }, false);
    var resetPanZoomControlBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier

    resetPanZoomControlBackground.setAttribute("x", "2");
    resetPanZoomControlBackground.setAttribute("y", "2");
    resetPanZoomControlBackground.setAttribute("width", "182"); // larger than expected because the whole group is transformed to scale down

    resetPanZoomControlBackground.setAttribute("height", "58");
    resetPanZoomControlBackground.setAttribute("class", "svg-pan-zoom-control-background");
    resetPanZoomControl.appendChild(resetPanZoomControlBackground);
    var resetPanZoomControlShape1 = document.createElementNS(SvgUtils.svgNS, "path");
    resetPanZoomControlShape1.setAttribute("d", "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z");
    resetPanZoomControlShape1.setAttribute("class", "svg-pan-zoom-control-element");
    resetPanZoomControl.appendChild(resetPanZoomControlShape1);
    var resetPanZoomControlShape2 = document.createElementNS(SvgUtils.svgNS, "path");
    resetPanZoomControlShape2.setAttribute("d", "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z");
    resetPanZoomControlShape2.setAttribute("class", "svg-pan-zoom-control-element");
    resetPanZoomControl.appendChild(resetPanZoomControlShape2);
    return resetPanZoomControl;
  },
  _createZoomOut: function _createZoomOut(instance) {
    // zoom out
    var zoomOut = document.createElementNS(SvgUtils.svgNS, "g");
    zoomOut.setAttribute("id", "svg-pan-zoom-zoom-out");
    zoomOut.setAttribute("transform", "translate(30.5 70) scale(0.015)");
    zoomOut.setAttribute("class", "svg-pan-zoom-control");
    zoomOut.addEventListener("click", function () {
      instance.getPublicInstance().zoomOut();
    }, false);
    zoomOut.addEventListener("touchstart", function () {
      instance.getPublicInstance().zoomOut();
    }, false);
    var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier

    zoomOutBackground.setAttribute("x", "0");
    zoomOutBackground.setAttribute("y", "0");
    zoomOutBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down

    zoomOutBackground.setAttribute("height", "1400");
    zoomOutBackground.setAttribute("class", "svg-pan-zoom-control-background");
    zoomOut.appendChild(zoomOutBackground);
    var zoomOutShape = document.createElementNS(SvgUtils.svgNS, "path");
    zoomOutShape.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z");
    zoomOutShape.setAttribute("class", "svg-pan-zoom-control-element");
    zoomOut.appendChild(zoomOutShape);
    return zoomOut;
  },
  disable: function disable(instance) {
    if (instance.controlIcons) {
      instance.controlIcons.parentNode.removeChild(instance.controlIcons);
      instance.controlIcons = null;
    }
  }
};

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/shadow-viewport.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/shadow-viewport.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SvgUtils = __webpack_require__(/*! ./svg-utilities */ "./node_modules/svg-pan-zoom/src/svg-utilities.js"),
    Utils = __webpack_require__(/*! ./utilities */ "./node_modules/svg-pan-zoom/src/utilities.js");

var ShadowViewport = function ShadowViewport(viewport, options) {
  this.init(viewport, options);
};
/**
 * Initialization
 *
 * @param  {SVGElement} viewport
 * @param  {Object} options
 */


ShadowViewport.prototype.init = function (viewport, options) {
  // DOM Elements
  this.viewport = viewport;
  this.options = options; // State cache

  this.originalState = {
    zoom: 1,
    x: 0,
    y: 0
  };
  this.activeState = {
    zoom: 1,
    x: 0,
    y: 0
  };
  this.updateCTMCached = Utils.proxy(this.updateCTM, this); // Create a custom requestAnimationFrame taking in account refreshRate

  this.requestAnimationFrame = Utils.createRequestAnimationFrame(this.options.refreshRate); // ViewBox

  this.viewBox = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  this.cacheViewBox(); // Process CTM

  var newCTM = this.processCTM(); // Update viewport CTM and cache zoom and pan

  this.setCTM(newCTM); // Update CTM in this frame

  this.updateCTM();
};
/**
 * Cache initial viewBox value
 * If no viewBox is defined, then use viewport size/position instead for viewBox values
 */


ShadowViewport.prototype.cacheViewBox = function () {
  var svgViewBox = this.options.svg.getAttribute("viewBox");

  if (svgViewBox) {
    var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function (v) {
      return v;
    }).map(parseFloat); // Cache viewbox x and y offset

    this.viewBox.x = viewBoxValues[0];
    this.viewBox.y = viewBoxValues[1];
    this.viewBox.width = viewBoxValues[2];
    this.viewBox.height = viewBoxValues[3];
    var zoom = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height); // Update active state

    this.activeState.zoom = zoom;
    this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2;
    this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2; // Force updating CTM

    this.updateCTMOnNextFrame();
    this.options.svg.removeAttribute("viewBox");
  } else {
    this.simpleViewBoxCache();
  }
};
/**
 * Recalculate viewport sizes and update viewBox cache
 */


ShadowViewport.prototype.simpleViewBoxCache = function () {
  var bBox = this.viewport.getBBox();
  this.viewBox.x = bBox.x;
  this.viewBox.y = bBox.y;
  this.viewBox.width = bBox.width;
  this.viewBox.height = bBox.height;
};
/**
 * Returns a viewbox object. Safe to alter
 *
 * @return {Object} viewbox object
 */


ShadowViewport.prototype.getViewBox = function () {
  return Utils.extend({}, this.viewBox);
};
/**
 * Get initial zoom and pan values. Save them into originalState
 * Parses viewBox attribute to alter initial sizes
 *
 * @return {CTM} CTM object based on options
 */


ShadowViewport.prototype.processCTM = function () {
  var newCTM = this.getCTM();

  if (this.options.fit || this.options.contain) {
    var newScale;

    if (this.options.fit) {
      newScale = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
    } else {
      newScale = Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
    }

    newCTM.a = newScale; //x-scale

    newCTM.d = newScale; //y-scale

    newCTM.e = -this.viewBox.x * newScale; //x-transform

    newCTM.f = -this.viewBox.y * newScale; //y-transform
  }

  if (this.options.center) {
    var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5,
        offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5;
    newCTM.e = offsetX;
    newCTM.f = offsetY;
  } // Cache initial values. Based on activeState and fix+center opitons


  this.originalState.zoom = newCTM.a;
  this.originalState.x = newCTM.e;
  this.originalState.y = newCTM.f;
  return newCTM;
};
/**
 * Return originalState object. Safe to alter
 *
 * @return {Object}
 */


ShadowViewport.prototype.getOriginalState = function () {
  return Utils.extend({}, this.originalState);
};
/**
 * Return actualState object. Safe to alter
 *
 * @return {Object}
 */


ShadowViewport.prototype.getState = function () {
  return Utils.extend({}, this.activeState);
};
/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */


ShadowViewport.prototype.getZoom = function () {
  return this.activeState.zoom;
};
/**
 * Get zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */


ShadowViewport.prototype.getRelativeZoom = function () {
  return this.activeState.zoom / this.originalState.zoom;
};
/**
 * Compute zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */


ShadowViewport.prototype.computeRelativeZoom = function (scale) {
  return scale / this.originalState.zoom;
};
/**
 * Get pan
 *
 * @return {Object}
 */


ShadowViewport.prototype.getPan = function () {
  return {
    x: this.activeState.x,
    y: this.activeState.y
  };
};
/**
 * Return cached viewport CTM value that can be safely modified
 *
 * @return {SVGMatrix}
 */


ShadowViewport.prototype.getCTM = function () {
  var safeCTM = this.options.svg.createSVGMatrix(); // Copy values manually as in FF they are not itterable

  safeCTM.a = this.activeState.zoom;
  safeCTM.b = 0;
  safeCTM.c = 0;
  safeCTM.d = this.activeState.zoom;
  safeCTM.e = this.activeState.x;
  safeCTM.f = this.activeState.y;
  return safeCTM;
};
/**
 * Set a new CTM
 *
 * @param {SVGMatrix} newCTM
 */


ShadowViewport.prototype.setCTM = function (newCTM) {
  var willZoom = this.isZoomDifferent(newCTM),
      willPan = this.isPanDifferent(newCTM);

  if (willZoom || willPan) {
    // Before zoom
    if (willZoom) {
      // If returns false then cancel zooming
      if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(newCTM.a)) === false) {
        newCTM.a = newCTM.d = this.activeState.zoom;
        willZoom = false;
      } else {
        this.updateCache(newCTM);
        this.options.onZoom(this.getRelativeZoom());
      }
    } // Before pan


    if (willPan) {
      var preventPan = this.options.beforePan(this.getPan(), {
        x: newCTM.e,
        y: newCTM.f
      }),
          // If prevent pan is an object
      preventPanX = false,
          preventPanY = false; // If prevent pan is Boolean false

      if (preventPan === false) {
        // Set x and y same as before
        newCTM.e = this.getPan().x;
        newCTM.f = this.getPan().y;
        preventPanX = preventPanY = true;
      } else if (Utils.isObject(preventPan)) {
        // Check for X axes attribute
        if (preventPan.x === false) {
          // Prevent panning on x axes
          newCTM.e = this.getPan().x;
          preventPanX = true;
        } else if (Utils.isNumber(preventPan.x)) {
          // Set a custom pan value
          newCTM.e = preventPan.x;
        } // Check for Y axes attribute


        if (preventPan.y === false) {
          // Prevent panning on x axes
          newCTM.f = this.getPan().y;
          preventPanY = true;
        } else if (Utils.isNumber(preventPan.y)) {
          // Set a custom pan value
          newCTM.f = preventPan.y;
        }
      } // Update willPan flag
      // Check if newCTM is still different


      if (preventPanX && preventPanY || !this.isPanDifferent(newCTM)) {
        willPan = false;
      } else {
        this.updateCache(newCTM);
        this.options.onPan(this.getPan());
      }
    } // Check again if should zoom or pan


    if (willZoom || willPan) {
      this.updateCTMOnNextFrame();
    }
  }
};

ShadowViewport.prototype.isZoomDifferent = function (newCTM) {
  return this.activeState.zoom !== newCTM.a;
};

ShadowViewport.prototype.isPanDifferent = function (newCTM) {
  return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f;
};
/**
 * Update cached CTM and active state
 *
 * @param {SVGMatrix} newCTM
 */


ShadowViewport.prototype.updateCache = function (newCTM) {
  this.activeState.zoom = newCTM.a;
  this.activeState.x = newCTM.e;
  this.activeState.y = newCTM.f;
};

ShadowViewport.prototype.pendingUpdate = false;
/**
 * Place a request to update CTM on next Frame
 */

ShadowViewport.prototype.updateCTMOnNextFrame = function () {
  if (!this.pendingUpdate) {
    // Lock
    this.pendingUpdate = true; // Throttle next update

    this.requestAnimationFrame.call(window, this.updateCTMCached);
  }
};
/**
 * Update viewport CTM with cached CTM
 */


ShadowViewport.prototype.updateCTM = function () {
  var ctm = this.getCTM(); // Updates SVG element

  SvgUtils.setCTM(this.viewport, ctm, this.defs); // Free the lock

  this.pendingUpdate = false; // Notify about the update

  if (this.options.onUpdatedCTM) {
    this.options.onUpdatedCTM(ctm);
  }
};

module.exports = function (viewport, options) {
  return new ShadowViewport(viewport, options);
};

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/svg-pan-zoom.js":
/*!*******************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/svg-pan-zoom.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Wheel = __webpack_require__(/*! ./uniwheel */ "./node_modules/svg-pan-zoom/src/uniwheel.js"),
    ControlIcons = __webpack_require__(/*! ./control-icons */ "./node_modules/svg-pan-zoom/src/control-icons.js"),
    Utils = __webpack_require__(/*! ./utilities */ "./node_modules/svg-pan-zoom/src/utilities.js"),
    SvgUtils = __webpack_require__(/*! ./svg-utilities */ "./node_modules/svg-pan-zoom/src/svg-utilities.js"),
    ShadowViewport = __webpack_require__(/*! ./shadow-viewport */ "./node_modules/svg-pan-zoom/src/shadow-viewport.js");

var SvgPanZoom = function SvgPanZoom(svg, options) {
  this.init(svg, options);
};

var optionsDefaults = {
  viewportSelector: ".svg-pan-zoom_viewport",
  // Viewport selector. Can be querySelector string or SVGElement
  panEnabled: true,
  // enable or disable panning (default enabled)
  controlIconsEnabled: false,
  // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
  zoomEnabled: true,
  // enable or disable zooming (default enabled)
  dblClickZoomEnabled: true,
  // enable or disable zooming by double clicking (default enabled)
  mouseWheelZoomEnabled: true,
  // enable or disable zooming by mouse wheel (default enabled)
  preventMouseEventsDefault: true,
  // enable or disable preventDefault for mouse events
  zoomScaleSensitivity: 0.1,
  // Zoom sensitivity
  minZoom: 0.5,
  // Minimum Zoom level
  maxZoom: 10,
  // Maximum Zoom level
  fit: true,
  // enable or disable viewport fit in SVG (default true)
  contain: false,
  // enable or disable viewport contain the svg (default false)
  center: true,
  // enable or disable viewport centering in SVG (default true)
  refreshRate: "auto",
  // Maximum number of frames per second (altering SVG's viewport)
  beforeZoom: null,
  onZoom: null,
  beforePan: null,
  onPan: null,
  customEventsHandler: null,
  eventsListenerElement: null,
  onUpdatedCTM: null
};
var passiveListenerOption = {
  passive: true
};

SvgPanZoom.prototype.init = function (svg, options) {
  var that = this;
  this.svg = svg;
  this.defs = svg.querySelector("defs"); // Add default attributes to SVG

  SvgUtils.setupSvgAttributes(this.svg); // Set options

  this.options = Utils.extend(Utils.extend({}, optionsDefaults), options); // Set default state

  this.state = "none"; // Get dimensions

  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(svg);
  this.width = boundingClientRectNormalized.width;
  this.height = boundingClientRectNormalized.height; // Init shadow viewport

  this.viewport = ShadowViewport(SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
    svg: this.svg,
    width: this.width,
    height: this.height,
    fit: this.options.fit,
    contain: this.options.contain,
    center: this.options.center,
    refreshRate: this.options.refreshRate,
    // Put callbacks into functions as they can change through time
    beforeZoom: function beforeZoom(oldScale, newScale) {
      if (that.viewport && that.options.beforeZoom) {
        return that.options.beforeZoom(oldScale, newScale);
      }
    },
    onZoom: function onZoom(scale) {
      if (that.viewport && that.options.onZoom) {
        return that.options.onZoom(scale);
      }
    },
    beforePan: function beforePan(oldPoint, newPoint) {
      if (that.viewport && that.options.beforePan) {
        return that.options.beforePan(oldPoint, newPoint);
      }
    },
    onPan: function onPan(point) {
      if (that.viewport && that.options.onPan) {
        return that.options.onPan(point);
      }
    },
    onUpdatedCTM: function onUpdatedCTM(ctm) {
      if (that.viewport && that.options.onUpdatedCTM) {
        return that.options.onUpdatedCTM(ctm);
      }
    }
  }); // Wrap callbacks into public API context

  var publicInstance = this.getPublicInstance();
  publicInstance.setBeforeZoom(this.options.beforeZoom);
  publicInstance.setOnZoom(this.options.onZoom);
  publicInstance.setBeforePan(this.options.beforePan);
  publicInstance.setOnPan(this.options.onPan);
  publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM);

  if (this.options.controlIconsEnabled) {
    ControlIcons.enable(this);
  } // Init events handlers


  this.lastMouseWheelEventTime = Date.now();
  this.setupHandlers();
};
/**
 * Register event handlers
 */


SvgPanZoom.prototype.setupHandlers = function () {
  var that = this,
      prevEvt = null; // use for touchstart event to detect double tap

  this.eventListeners = {
    // Mouse down group
    mousedown: function mousedown(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt;
      return result;
    },
    touchstart: function touchstart(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt;
      return result;
    },
    // Mouse up group
    mouseup: function mouseup(evt) {
      return that.handleMouseUp(evt);
    },
    touchend: function touchend(evt) {
      return that.handleMouseUp(evt);
    },
    // Mouse move group
    mousemove: function mousemove(evt) {
      return that.handleMouseMove(evt);
    },
    touchmove: function touchmove(evt) {
      return that.handleMouseMove(evt);
    },
    // Mouse leave group
    mouseleave: function mouseleave(evt) {
      return that.handleMouseUp(evt);
    },
    touchleave: function touchleave(evt) {
      return that.handleMouseUp(evt);
    },
    touchcancel: function touchcancel(evt) {
      return that.handleMouseUp(evt);
    }
  }; // Init custom events handler if available
  // eslint-disable-next-line eqeqeq

  if (this.options.customEventsHandler != null) {
    this.options.customEventsHandler.init({
      svgElement: this.svg,
      eventsListenerElement: this.options.eventsListenerElement,
      instance: this.getPublicInstance()
    }); // Custom event handler may halt builtin listeners

    var haltEventListeners = this.options.customEventsHandler.haltEventListeners;

    if (haltEventListeners && haltEventListeners.length) {
      for (var i = haltEventListeners.length - 1; i >= 0; i--) {
        if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
          delete this.eventListeners[haltEventListeners[i]];
        }
      }
    }
  } // Bind eventListeners


  for (var event in this.eventListeners) {
    // Attach event to eventsListenerElement or SVG if not available
    (this.options.eventsListenerElement || this.svg).addEventListener(event, this.eventListeners[event], !this.options.preventMouseEventsDefault ? passiveListenerOption : false);
  } // Zoom using mouse wheel


  if (this.options.mouseWheelZoomEnabled) {
    this.options.mouseWheelZoomEnabled = false; // set to false as enable will set it back to true

    this.enableMouseWheelZoom();
  }
};
/**
 * Enable ability to zoom using mouse wheel
 */


SvgPanZoom.prototype.enableMouseWheelZoom = function () {
  if (!this.options.mouseWheelZoomEnabled) {
    var that = this; // Mouse wheel listener

    this.wheelListener = function (evt) {
      return that.handleMouseWheel(evt);
    }; // Bind wheelListener


    var isPassiveListener = !this.options.preventMouseEventsDefault;
    Wheel.on(this.options.eventsListenerElement || this.svg, this.wheelListener, isPassiveListener);
    this.options.mouseWheelZoomEnabled = true;
  }
};
/**
 * Disable ability to zoom using mouse wheel
 */


SvgPanZoom.prototype.disableMouseWheelZoom = function () {
  if (this.options.mouseWheelZoomEnabled) {
    var isPassiveListener = !this.options.preventMouseEventsDefault;
    Wheel.off(this.options.eventsListenerElement || this.svg, this.wheelListener, isPassiveListener);
    this.options.mouseWheelZoomEnabled = false;
  }
};
/**
 * Handle mouse wheel event
 *
 * @param  {Event} evt
 */


SvgPanZoom.prototype.handleMouseWheel = function (evt) {
  if (!this.options.zoomEnabled || this.state !== "none") {
    return;
  }

  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  } // Default delta in case that deltaY is not available


  var delta = evt.deltaY || 1,
      timeDelta = Date.now() - this.lastMouseWheelEventTime,
      divider = 3 + Math.max(0, 30 - timeDelta); // Update cache

  this.lastMouseWheelEventTime = Date.now(); // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)

  if ("deltaMode" in evt && evt.deltaMode === 0 && evt.wheelDelta) {
    delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY;
  }

  delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider;
  var inversedScreenCTM = this.svg.getScreenCTM().inverse(),
      relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(inversedScreenCTM),
      zoom = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

  this.zoomAtPoint(zoom, relativeMousePoint);
};
/**
 * Zoom in at a SVG point
 *
 * @param  {SVGPoint} point
 * @param  {Float} zoomScale    Number representing how much to zoom
 * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
 *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
 */


SvgPanZoom.prototype.zoomAtPoint = function (zoomScale, point, zoomAbsolute) {
  var originalState = this.viewport.getOriginalState();

  if (!zoomAbsolute) {
    // Fit zoomScale in set bounds
    if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
      zoomScale = this.options.minZoom * originalState.zoom / this.getZoom();
    } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
      zoomScale = this.options.maxZoom * originalState.zoom / this.getZoom();
    }
  } else {
    // Fit zoomScale in set bounds
    zoomScale = Math.max(this.options.minZoom * originalState.zoom, Math.min(this.options.maxZoom * originalState.zoom, zoomScale)); // Find relative scale to achieve desired scale

    zoomScale = zoomScale / this.getZoom();
  }

  var oldCTM = this.viewport.getCTM(),
      relativePoint = point.matrixTransform(oldCTM.inverse()),
      modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y),
      newCTM = oldCTM.multiply(modifier);

  if (newCTM.a !== oldCTM.a) {
    this.viewport.setCTM(newCTM);
  }
};
/**
 * Zoom at center point
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */


SvgPanZoom.prototype.zoom = function (scale, absolute) {
  this.zoomAtPoint(scale, SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height), absolute);
};
/**
 * Zoom used by public instance
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */


SvgPanZoom.prototype.publicZoom = function (scale, absolute) {
  if (absolute) {
    scale = this.computeFromRelativeZoom(scale);
  }

  this.zoom(scale, absolute);
};
/**
 * Zoom at point used by public instance
 *
 * @param  {Float} scale
 * @param  {SVGPoint|Object} point    An object that has x and y attributes
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */


SvgPanZoom.prototype.publicZoomAtPoint = function (scale, point, absolute) {
  if (absolute) {
    // Transform zoom into a relative value
    scale = this.computeFromRelativeZoom(scale);
  } // If not a SVGPoint but has x and y then create a SVGPoint


  if (Utils.getType(point) !== "SVGPoint") {
    if ("x" in point && "y" in point) {
      point = SvgUtils.createSVGPoint(this.svg, point.x, point.y);
    } else {
      throw new Error("Given point is invalid");
    }
  }

  this.zoomAtPoint(scale, point, absolute);
};
/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */


SvgPanZoom.prototype.getZoom = function () {
  return this.viewport.getZoom();
};
/**
 * Get zoom scale for public usage
 *
 * @return {Float} zoom scale
 */


SvgPanZoom.prototype.getRelativeZoom = function () {
  return this.viewport.getRelativeZoom();
};
/**
 * Compute actual zoom from public zoom
 *
 * @param  {Float} zoom
 * @return {Float} zoom scale
 */


SvgPanZoom.prototype.computeFromRelativeZoom = function (zoom) {
  return zoom * this.viewport.getOriginalState().zoom;
};
/**
 * Set zoom to initial state
 */


SvgPanZoom.prototype.resetZoom = function () {
  var originalState = this.viewport.getOriginalState();
  this.zoom(originalState.zoom, true);
};
/**
 * Set pan to initial state
 */


SvgPanZoom.prototype.resetPan = function () {
  this.pan(this.viewport.getOriginalState());
};
/**
 * Set pan and zoom to initial state
 */


SvgPanZoom.prototype.reset = function () {
  this.resetZoom();
  this.resetPan();
};
/**
 * Handle double click event
 * See handleMouseDown() for alternate detection method
 *
 * @param {Event} evt
 */


SvgPanZoom.prototype.handleDblClick = function (evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  } // Check if target was a control button


  if (this.options.controlIconsEnabled) {
    var targetClass = evt.target.getAttribute("class") || "";

    if (targetClass.indexOf("svg-pan-zoom-control") > -1) {
      return false;
    }
  }

  var zoomFactor;

  if (evt.shiftKey) {
    zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2); // zoom out when shift key pressed
  } else {
    zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2;
  }

  var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
  this.zoomAtPoint(zoomFactor, point);
};
/**
 * Handle click event
 *
 * @param {Event} evt
 */


SvgPanZoom.prototype.handleMouseDown = function (evt, prevEvt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  Utils.mouseAndTouchNormalize(evt, this.svg); // Double click detection; more consistent than ondblclick

  if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
    this.handleDblClick(evt);
  } else {
    // Pan mode
    this.state = "pan";
    this.firstEventCTM = this.viewport.getCTM();
    this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse());
  }
};
/**
 * Handle mouse move event
 *
 * @param  {Event} evt
 */


SvgPanZoom.prototype.handleMouseMove = function (evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  if (this.state === "pan" && this.options.panEnabled) {
    // Pan mode
    var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse()),
        viewportCTM = this.firstEventCTM.translate(point.x - this.stateOrigin.x, point.y - this.stateOrigin.y);
    this.viewport.setCTM(viewportCTM);
  }
};
/**
 * Handle mouse button release event
 *
 * @param {Event} evt
 */


SvgPanZoom.prototype.handleMouseUp = function (evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  if (this.state === "pan") {
    // Quit pan mode
    this.state = "none";
  }
};
/**
 * Adjust viewport size (only) so it will fit in SVG
 * Does not center image
 */


SvgPanZoom.prototype.fit = function () {
  var viewBox = this.viewport.getViewBox(),
      newScale = Math.min(this.width / viewBox.width, this.height / viewBox.height);
  this.zoom(newScale, true);
};
/**
 * Adjust viewport size (only) so it will contain the SVG
 * Does not center image
 */


SvgPanZoom.prototype.contain = function () {
  var viewBox = this.viewport.getViewBox(),
      newScale = Math.max(this.width / viewBox.width, this.height / viewBox.height);
  this.zoom(newScale, true);
};
/**
 * Adjust viewport pan (only) so it will be centered in SVG
 * Does not zoom/fit/contain image
 */


SvgPanZoom.prototype.center = function () {
  var viewBox = this.viewport.getViewBox(),
      offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5,
      offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5;
  this.getPublicInstance().pan({
    x: offsetX,
    y: offsetY
  });
};
/**
 * Update content cached BorderBox
 * Use when viewport contents change
 */


SvgPanZoom.prototype.updateBBox = function () {
  this.viewport.simpleViewBoxCache();
};
/**
 * Pan to a rendered position
 *
 * @param  {Object} point {x: 0, y: 0}
 */


SvgPanZoom.prototype.pan = function (point) {
  var viewportCTM = this.viewport.getCTM();
  viewportCTM.e = point.x;
  viewportCTM.f = point.y;
  this.viewport.setCTM(viewportCTM);
};
/**
 * Relatively pan the graph by a specified rendered position vector
 *
 * @param  {Object} point {x: 0, y: 0}
 */


SvgPanZoom.prototype.panBy = function (point) {
  var viewportCTM = this.viewport.getCTM();
  viewportCTM.e += point.x;
  viewportCTM.f += point.y;
  this.viewport.setCTM(viewportCTM);
};
/**
 * Get pan vector
 *
 * @return {Object} {x: 0, y: 0}
 */


SvgPanZoom.prototype.getPan = function () {
  var state = this.viewport.getState();
  return {
    x: state.x,
    y: state.y
  };
};
/**
 * Recalculates cached svg dimensions and controls position
 */


SvgPanZoom.prototype.resize = function () {
  // Get dimensions
  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(this.svg);
  this.width = boundingClientRectNormalized.width;
  this.height = boundingClientRectNormalized.height; // Recalculate original state

  var viewport = this.viewport;
  viewport.options.width = this.width;
  viewport.options.height = this.height;
  viewport.processCTM(); // Reposition control icons by re-enabling them

  if (this.options.controlIconsEnabled) {
    this.getPublicInstance().disableControlIcons();
    this.getPublicInstance().enableControlIcons();
  }
};
/**
 * Unbind mouse events, free callbacks and destroy public instance
 */


SvgPanZoom.prototype.destroy = function () {
  var that = this; // Free callbacks

  this.beforeZoom = null;
  this.onZoom = null;
  this.beforePan = null;
  this.onPan = null;
  this.onUpdatedCTM = null; // Destroy custom event handlers
  // eslint-disable-next-line eqeqeq

  if (this.options.customEventsHandler != null) {
    this.options.customEventsHandler.destroy({
      svgElement: this.svg,
      eventsListenerElement: this.options.eventsListenerElement,
      instance: this.getPublicInstance()
    });
  } // Unbind eventListeners


  for (var event in this.eventListeners) {
    (this.options.eventsListenerElement || this.svg).removeEventListener(event, this.eventListeners[event], !this.options.preventMouseEventsDefault ? passiveListenerOption : false);
  } // Unbind wheelListener


  this.disableMouseWheelZoom(); // Remove control icons

  this.getPublicInstance().disableControlIcons(); // Reset zoom and pan

  this.reset(); // Remove instance from instancesStore

  instancesStore = instancesStore.filter(function (instance) {
    return instance.svg !== that.svg;
  }); // Delete options and its contents

  delete this.options; // Delete viewport to make public shadow viewport functions uncallable

  delete this.viewport; // Destroy public instance and rewrite getPublicInstance

  delete this.publicInstance;
  delete this.pi;

  this.getPublicInstance = function () {
    return null;
  };
};
/**
 * Returns a public instance object
 *
 * @return {Object} Public instance object
 */


SvgPanZoom.prototype.getPublicInstance = function () {
  var that = this; // Create cache

  if (!this.publicInstance) {
    this.publicInstance = this.pi = {
      // Pan
      enablePan: function enablePan() {
        that.options.panEnabled = true;
        return that.pi;
      },
      disablePan: function disablePan() {
        that.options.panEnabled = false;
        return that.pi;
      },
      isPanEnabled: function isPanEnabled() {
        return !!that.options.panEnabled;
      },
      pan: function pan(point) {
        that.pan(point);
        return that.pi;
      },
      panBy: function panBy(point) {
        that.panBy(point);
        return that.pi;
      },
      getPan: function getPan() {
        return that.getPan();
      },
      // Pan event
      setBeforePan: function setBeforePan(fn) {
        that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      setOnPan: function setOnPan(fn) {
        that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Zoom and Control Icons
      enableZoom: function enableZoom() {
        that.options.zoomEnabled = true;
        return that.pi;
      },
      disableZoom: function disableZoom() {
        that.options.zoomEnabled = false;
        return that.pi;
      },
      isZoomEnabled: function isZoomEnabled() {
        return !!that.options.zoomEnabled;
      },
      enableControlIcons: function enableControlIcons() {
        if (!that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = true;
          ControlIcons.enable(that);
        }

        return that.pi;
      },
      disableControlIcons: function disableControlIcons() {
        if (that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = false;
          ControlIcons.disable(that);
        }

        return that.pi;
      },
      isControlIconsEnabled: function isControlIconsEnabled() {
        return !!that.options.controlIconsEnabled;
      },
      // Double click zoom
      enableDblClickZoom: function enableDblClickZoom() {
        that.options.dblClickZoomEnabled = true;
        return that.pi;
      },
      disableDblClickZoom: function disableDblClickZoom() {
        that.options.dblClickZoomEnabled = false;
        return that.pi;
      },
      isDblClickZoomEnabled: function isDblClickZoomEnabled() {
        return !!that.options.dblClickZoomEnabled;
      },
      // Mouse wheel zoom
      enableMouseWheelZoom: function enableMouseWheelZoom() {
        that.enableMouseWheelZoom();
        return that.pi;
      },
      disableMouseWheelZoom: function disableMouseWheelZoom() {
        that.disableMouseWheelZoom();
        return that.pi;
      },
      isMouseWheelZoomEnabled: function isMouseWheelZoomEnabled() {
        return !!that.options.mouseWheelZoomEnabled;
      },
      // Zoom scale and bounds
      setZoomScaleSensitivity: function setZoomScaleSensitivity(scale) {
        that.options.zoomScaleSensitivity = scale;
        return that.pi;
      },
      setMinZoom: function setMinZoom(zoom) {
        that.options.minZoom = zoom;
        return that.pi;
      },
      setMaxZoom: function setMaxZoom(zoom) {
        that.options.maxZoom = zoom;
        return that.pi;
      },
      // Zoom event
      setBeforeZoom: function setBeforeZoom(fn) {
        that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      setOnZoom: function setOnZoom(fn) {
        that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Zooming
      zoom: function zoom(scale) {
        that.publicZoom(scale, true);
        return that.pi;
      },
      zoomBy: function zoomBy(scale) {
        that.publicZoom(scale, false);
        return that.pi;
      },
      zoomAtPoint: function zoomAtPoint(scale, point) {
        that.publicZoomAtPoint(scale, point, true);
        return that.pi;
      },
      zoomAtPointBy: function zoomAtPointBy(scale, point) {
        that.publicZoomAtPoint(scale, point, false);
        return that.pi;
      },
      zoomIn: function zoomIn() {
        this.zoomBy(1 + that.options.zoomScaleSensitivity);
        return that.pi;
      },
      zoomOut: function zoomOut() {
        this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
        return that.pi;
      },
      getZoom: function getZoom() {
        return that.getRelativeZoom();
      },
      // CTM update
      setOnUpdatedCTM: function setOnUpdatedCTM(fn) {
        that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance);
        return that.pi;
      },
      // Reset
      resetZoom: function resetZoom() {
        that.resetZoom();
        return that.pi;
      },
      resetPan: function resetPan() {
        that.resetPan();
        return that.pi;
      },
      reset: function reset() {
        that.reset();
        return that.pi;
      },
      // Fit, Contain and Center
      fit: function fit() {
        that.fit();
        return that.pi;
      },
      contain: function contain() {
        that.contain();
        return that.pi;
      },
      center: function center() {
        that.center();
        return that.pi;
      },
      // Size and Resize
      updateBBox: function updateBBox() {
        that.updateBBox();
        return that.pi;
      },
      resize: function resize() {
        that.resize();
        return that.pi;
      },
      getSizes: function getSizes() {
        return {
          width: that.width,
          height: that.height,
          realZoom: that.getZoom(),
          viewBox: that.viewport.getViewBox()
        };
      },
      // Destroy
      destroy: function destroy() {
        that.destroy();
        return that.pi;
      }
    };
  }

  return this.publicInstance;
};
/**
 * Stores pairs of instances of SvgPanZoom and SVG
 * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
 *
 * @type {Array}
 */


var instancesStore = [];

var svgPanZoom = function svgPanZoom(elementOrSelector, options) {
  var svg = Utils.getSvg(elementOrSelector);

  if (svg === null) {
    return null;
  } else {
    // Look for existent instance
    for (var i = instancesStore.length - 1; i >= 0; i--) {
      if (instancesStore[i].svg === svg) {
        return instancesStore[i].instance.getPublicInstance();
      }
    } // If instance not found - create one


    instancesStore.push({
      svg: svg,
      instance: new SvgPanZoom(svg, options)
    }); // Return just pushed instance

    return instancesStore[instancesStore.length - 1].instance.getPublicInstance();
  }
};

module.exports = svgPanZoom;

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/svg-utilities.js":
/*!********************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/svg-utilities.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Utils = __webpack_require__(/*! ./utilities */ "./node_modules/svg-pan-zoom/src/utilities.js"),
    _browser = "unknown"; // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser


if (
/*@cc_on!@*/
 false || !!document.documentMode) {
  // internet explorer
  _browser = "ie";
}

module.exports = {
  svgNS: "http://www.w3.org/2000/svg",
  xmlNS: "http://www.w3.org/XML/1998/namespace",
  xmlnsNS: "http://www.w3.org/2000/xmlns/",
  xlinkNS: "http://www.w3.org/1999/xlink",
  evNS: "http://www.w3.org/2001/xml-events",

  /**
   * Get svg dimensions: width and height
   *
   * @param  {SVGSVGElement} svg
   * @return {Object}     {width: 0, height: 0}
   */
  getBoundingClientRectNormalized: function getBoundingClientRectNormalized(svg) {
    if (svg.clientWidth && svg.clientHeight) {
      return {
        width: svg.clientWidth,
        height: svg.clientHeight
      };
    } else if (!!svg.getBoundingClientRect()) {
      return svg.getBoundingClientRect();
    } else {
      throw new Error("Cannot get BoundingClientRect for SVG.");
    }
  },

  /**
   * Gets g element with class of "viewport" or creates it if it doesn't exist
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGElement}     g (group) element
   */
  getOrCreateViewport: function getOrCreateViewport(svg, selector) {
    var viewport = null;

    if (Utils.isElement(selector)) {
      viewport = selector;
    } else {
      viewport = svg.querySelector(selector);
    } // Check if there is just one main group in SVG


    if (!viewport) {
      var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function (el) {
        return el.nodeName !== "defs" && el.nodeName !== "#text";
      }); // Node name should be SVGGElement and should have no transform attribute
      // Groups with transform are not used as viewport because it involves parsing of all transform possibilities

      if (childNodes.length === 1 && childNodes[0].nodeName === "g" && childNodes[0].getAttribute("transform") === null) {
        viewport = childNodes[0];
      }
    } // If no favorable group element exists then create one


    if (!viewport) {
      var viewportId = "viewport-" + new Date().toISOString().replace(/\D/g, "");
      viewport = document.createElementNS(this.svgNS, "g");
      viewport.setAttribute("id", viewportId); // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes

      var svgChildren = svg.childNodes || svg.children;

      if (!!svgChildren && svgChildren.length > 0) {
        for (var i = svgChildren.length; i > 0; i--) {
          // Move everything into viewport except defs
          if (svgChildren[svgChildren.length - i].nodeName !== "defs") {
            viewport.appendChild(svgChildren[svgChildren.length - i]);
          }
        }
      }

      svg.appendChild(viewport);
    } // Parse class names


    var classNames = [];

    if (viewport.getAttribute("class")) {
      classNames = viewport.getAttribute("class").split(" ");
    } // Set class (if not set already)


    if (!~classNames.indexOf("svg-pan-zoom_viewport")) {
      classNames.push("svg-pan-zoom_viewport");
      viewport.setAttribute("class", classNames.join(" "));
    }

    return viewport;
  },

  /**
   * Set SVG attributes
   *
   * @param  {SVGSVGElement} svg
   */
  setupSvgAttributes: function setupSvgAttributes(svg) {
    // Setting default attributes
    svg.setAttribute("xmlns", this.svgNS);
    svg.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS);
    svg.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS); // Needed for Internet Explorer, otherwise the viewport overflows

    if (svg.parentNode !== null) {
      var style = svg.getAttribute("style") || "";

      if (style.toLowerCase().indexOf("overflow") === -1) {
        svg.setAttribute("style", "overflow: hidden; " + style);
      }
    }
  },

  /**
   * How long Internet Explorer takes to finish updating its display (ms).
   */
  internetExplorerRedisplayInterval: 300,

  /**
   * Forces the browser to redisplay all SVG elements that rely on an
   * element defined in a 'defs' section. It works globally, for every
   * available defs element on the page.
   * The throttling is intentionally global.
   *
   * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
   * visible after pan/zoom when there are multiple SVGs on the page.
   * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
   * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
   */
  refreshDefsGlobal: Utils.throttle(function () {
    var allDefs = document.querySelectorAll("defs");
    var allDefsCount = allDefs.length;

    for (var i = 0; i < allDefsCount; i++) {
      var thisDefs = allDefs[i];
      thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
    }
  }, this ? this.internetExplorerRedisplayInterval : null),

  /**
   * Sets the current transform matrix of an element
   *
   * @param {SVGElement} element
   * @param {SVGMatrix} matrix  CTM
   * @param {SVGElement} defs
   */
  setCTM: function setCTM(element, matrix, defs) {
    var that = this,
        s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
    element.setAttributeNS(null, "transform", s);

    if ("transform" in element.style) {
      element.style.transform = s;
    } else if ("-ms-transform" in element.style) {
      element.style["-ms-transform"] = s;
    } else if ("-webkit-transform" in element.style) {
      element.style["-webkit-transform"] = s;
    } // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
    // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
    // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/


    if (_browser === "ie" && !!defs) {
      // this refresh is intended for redisplaying the SVG during zooming
      defs.parentNode.insertBefore(defs, defs); // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
      // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
      // are located under any other element(s).

      window.setTimeout(function () {
        that.refreshDefsGlobal();
      }, that.internetExplorerRedisplayInterval);
    }
  },

  /**
   * Instantiate an SVGPoint object with given event coordinates
   *
   * @param {Event} evt
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}     point
   */
  getEventPoint: function getEventPoint(evt, svg) {
    var point = svg.createSVGPoint();
    Utils.mouseAndTouchNormalize(evt, svg);
    point.x = evt.clientX;
    point.y = evt.clientY;
    return point;
  },

  /**
   * Get SVG center point
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}
   */
  getSvgCenterPoint: function getSvgCenterPoint(svg, width, height) {
    return this.createSVGPoint(svg, width / 2, height / 2);
  },

  /**
   * Create a SVGPoint with given x and y
   *
   * @param  {SVGSVGElement} svg
   * @param  {Number} x
   * @param  {Number} y
   * @return {SVGPoint}
   */
  createSVGPoint: function createSVGPoint(svg, x, y) {
    var point = svg.createSVGPoint();
    point.x = x;
    point.y = y;
    return point;
  }
};

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/uniwheel.js":
/*!***************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/uniwheel.js ***!
  \***************************************************/
/***/ ((module) => {

// uniwheel 0.1.2 (customized)
// A unified cross browser mouse wheel event handler
// https://github.com/teemualap/uniwheel
module.exports = function () {
  //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel
  var prefix = "",
      _addEventListener,
      _removeEventListener,
      support,
      fns = [];

  var passiveOption = {
    passive: true
  }; // detect event model

  if (window.addEventListener) {
    _addEventListener = "addEventListener";
    _removeEventListener = "removeEventListener";
  } else {
    _addEventListener = "attachEvent";
    _removeEventListener = "detachEvent";
    prefix = "on";
  } // detect available wheel event


  support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
  document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
  "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

  function createCallback(element, callback) {
    var fn = function fn(originalEvent) {
      !originalEvent && (originalEvent = window.event); // create a normalized event object

      var event = {
        // keep a ref to the original event object
        originalEvent: originalEvent,
        target: originalEvent.target || originalEvent.srcElement,
        type: "wheel",
        deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
        deltaX: 0,
        delatZ: 0,
        preventDefault: function preventDefault() {
          originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
        }
      }; // calculate deltaY (and deltaX) according to the event

      if (support == "mousewheel") {
        event.deltaY = -1 / 40 * originalEvent.wheelDelta; // Webkit also support wheelDeltaX

        originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
      } else {
        event.deltaY = originalEvent.detail;
      } // it's time to fire the callback


      return callback(event);
    };

    fns.push({
      element: element,
      fn: fn
    });
    return fn;
  }

  function getCallback(element) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element) {
        return fns[i].fn;
      }
    }

    return function () {};
  }

  function removeCallback(element) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element) {
        return fns.splice(i, 1);
      }
    }
  }

  function _addWheelListener(elem, eventName, callback, isPassiveListener) {
    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = createCallback(elem, callback);
    }

    elem[_addEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);
  }

  function _removeWheelListener(elem, eventName, callback, isPassiveListener) {
    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = getCallback(elem);
    }

    elem[_removeEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);

    removeCallback(elem);
  }

  function addWheelListener(elem, callback, isPassiveListener) {
    _addWheelListener(elem, support, callback, isPassiveListener); // handle MozMousePixelScroll in older Firefox


    if (support == "DOMMouseScroll") {
      _addWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
    }
  }

  function removeWheelListener(elem, callback, isPassiveListener) {
    _removeWheelListener(elem, support, callback, isPassiveListener); // handle MozMousePixelScroll in older Firefox


    if (support == "DOMMouseScroll") {
      _removeWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
    }
  }

  return {
    on: addWheelListener,
    off: removeWheelListener
  };
}();

/***/ }),

/***/ "./node_modules/svg-pan-zoom/src/utilities.js":
/*!****************************************************!*\
  !*** ./node_modules/svg-pan-zoom/src/utilities.js ***!
  \****************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

module.exports = {
  /**
   * Extends an object
   *
   * @param  {Object} target object to extend
   * @param  {Object} source object to take properties from
   * @return {Object}        extended object
   */
  extend: function extend(target, source) {
    target = target || {};

    for (var prop in source) {
      // Go recursively
      if (this.isObject(source[prop])) {
        target[prop] = this.extend(target[prop], source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }

    return target;
  },

  /**
   * Checks if an object is a DOM element
   *
   * @param  {Object}  o HTML element or String
   * @return {Boolean}   returns true if object is a DOM element
   */
  isElement: function isElement(o) {
    return o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
    o && _typeof(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
  },

  /**
   * Checks if an object is an Object
   *
   * @param  {Object}  o Object
   * @return {Boolean}   returns true if object is an Object
   */
  isObject: function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  },

  /**
   * Checks if variable is Number
   *
   * @param  {Integer|Float}  n
   * @return {Boolean}   returns true if variable is Number
   */
  isNumber: function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  /**
   * Search for an SVG element
   *
   * @param  {Object|String} elementOrSelector DOM Element or selector String
   * @return {Object|Null}                   SVG or null
   */
  getSvg: function getSvg(elementOrSelector) {
    var element, svg;

    if (!this.isElement(elementOrSelector)) {
      // If selector provided
      if (typeof elementOrSelector === "string" || elementOrSelector instanceof String) {
        // Try to find the element
        element = document.querySelector(elementOrSelector);

        if (!element) {
          throw new Error("Provided selector did not find any elements. Selector: " + elementOrSelector);
          return null;
        }
      } else {
        throw new Error("Provided selector is not an HTML object nor String");
        return null;
      }
    } else {
      element = elementOrSelector;
    }

    if (element.tagName.toLowerCase() === "svg") {
      svg = element;
    } else {
      if (element.tagName.toLowerCase() === "object") {
        svg = element.contentDocument.documentElement;
      } else {
        if (element.tagName.toLowerCase() === "embed") {
          svg = element.getSVGDocument().documentElement;
        } else {
          if (element.tagName.toLowerCase() === "img") {
            throw new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.');
          } else {
            throw new Error("Cannot get SVG.");
          }

          return null;
        }
      }
    }

    return svg;
  },

  /**
   * Attach a given context to a function
   * @param  {Function} fn      Function
   * @param  {Object}   context Context
   * @return {Function}           Function with certain context
   */
  proxy: function proxy(fn, context) {
    return function () {
      return fn.apply(context, arguments);
    };
  },

  /**
   * Returns object type
   * Uses toString that returns [object SVGPoint]
   * And than parses object type from string
   *
   * @param  {Object} o Any object
   * @return {String}   Object type
   */
  getType: function getType(o) {
    return Object.prototype.toString.apply(o).replace(/^\[object\s/, "").replace(/\]$/, "");
  },

  /**
   * If it is a touch event than add clientX and clientY to event object
   *
   * @param  {Event} evt
   * @param  {SVGSVGElement} svg
   */
  mouseAndTouchNormalize: function mouseAndTouchNormalize(evt, svg) {
    // If no clientX then fallback
    if (evt.clientX === void 0 || evt.clientX === null) {
      // Fallback
      evt.clientX = 0;
      evt.clientY = 0; // If it is a touch event

      if (evt.touches !== void 0 && evt.touches.length) {
        if (evt.touches[0].clientX !== void 0) {
          evt.clientX = evt.touches[0].clientX;
          evt.clientY = evt.touches[0].clientY;
        } else if (evt.touches[0].pageX !== void 0) {
          var rect = svg.getBoundingClientRect();
          evt.clientX = evt.touches[0].pageX - rect.left;
          evt.clientY = evt.touches[0].pageY - rect.top;
        } // If it is a custom event

      } else if (evt.originalEvent !== void 0) {
        if (evt.originalEvent.clientX !== void 0) {
          evt.clientX = evt.originalEvent.clientX;
          evt.clientY = evt.originalEvent.clientY;
        }
      }
    }
  },

  /**
   * Check if an event is a double click/tap
   * TODO: For touch gestures use a library (hammer.js) that takes in account other events
   * (touchmove and touchend). It should take in account tap duration and traveled distance
   *
   * @param  {Event}  evt
   * @param  {Event}  prevEvt Previous Event
   * @return {Boolean}
   */
  isDblClick: function isDblClick(evt, prevEvt) {
    // Double click detected by browser
    if (evt.detail === 2) {
      return true;
    } // Try to compare events
    else if (prevEvt !== void 0 && prevEvt !== null) {
      var timeStampDiff = evt.timeStamp - prevEvt.timeStamp,
          // should be lower than 250 ms
      touchesDistance = Math.sqrt(Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2));
      return timeStampDiff < 250 && touchesDistance < 10;
    } // Nothing found


    return false;
  },

  /**
   * Returns current timestamp as an integer
   *
   * @return {Number}
   */
  now: Date.now || function () {
    return new Date().getTime();
  },
  // From underscore.
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  throttle: function throttle(func, wait, options) {
    var that = this;
    var context, args, result;
    var timeout = null;
    var previous = 0;

    if (!options) {
      options = {};
    }

    var later = function later() {
      previous = options.leading === false ? 0 : that.now();
      timeout = null;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    };

    return function () {
      var now = that.now();

      if (!previous && options.leading === false) {
        previous = now;
      }

      var remaining = wait - (now - previous);
      context = this; // eslint-disable-line consistent-this

      args = arguments;

      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  },

  /**
   * Create a requestAnimationFrame simulation
   *
   * @param  {Number|String} refreshRate
   * @return {Function}
   */
  createRequestAnimationFrame: function createRequestAnimationFrame(refreshRate) {
    var timeout = null; // Convert refreshRate to timeout

    if (refreshRate !== "auto" && refreshRate < 60 && refreshRate > 1) {
      timeout = Math.floor(1000 / refreshRate);
    }

    if (timeout === null) {
      return window.requestAnimationFrame || requestTimeout(33);
    } else {
      return requestTimeout(timeout);
    }
  }
};
/**
 * Create a callback that will execute after a given timeout
 *
 * @param  {Function} timeout
 * @return {Function}
 */

function requestTimeout(timeout) {
  return function (callback) {
    window.setTimeout(callback, timeout);
  };
}

/***/ }),

/***/ "./node_modules/svgmap/dist/svgMap.min.js":
/*!************************************************!*\
  !*** ./node_modules/svgmap/dist/svgMap.min.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! svgMap | https://github.com/StephanWagner/svgMap | MIT License | Copyright Stephan Wagner | https://stephanwagner.me */
function svgMapWrapper(i) {
  function a(l) {
    this.init(l);
  }

  return a.prototype.init = function (l) {
    this.options = Object.assign({}, {
      targetElementID: "",
      minZoom: 1,
      maxZoom: 25,
      initialZoom: 1.06,
      initialPan: {
        x: 0,
        y: 0
      },
      zoomScaleSensitivity: .2,
      mouseWheelZoomEnabled: !0,
      mouseWheelZoomWithKey: !1,
      mouseWheelKeyMessage: "Press the [ALT] key to zoom",
      mouseWheelKeyMessageMac: "Press the [COMMAND] key to zoom",
      colorMax: "#CC0033",
      colorMin: "#FFE5D9",
      colorNoData: "#E2E2E2",
      manualColorAttribute: "color",
      flagType: "image",
      flagURL: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/{0}.svg",
      hideFlag: !1,
      hideMissingData: !1,
      noDataText: "No data available",
      touchLink: !1,
      showZoomReset: !1,
      onGetTooltip: function onGetTooltip(l, t, e) {
        return null;
      },
      countries: {
        EH: !0,
        Crimea: "UA"
      },
      showContinentSelector: !1
    }, l || {}), this.options.targetElementID && document.getElementById(this.options.targetElementID) || this.error("Target element not found"), this.options.data || this.error("No data"), this.id = this.options.targetElementID, this.wrapper = document.getElementById(this.options.targetElementID), this.wrapper.classList.add("svgMap-wrapper"), this.container = document.createElement("div"), this.container.classList.add("svgMap-container"), this.wrapper.appendChild(this.container), this.options.mouseWheelZoomEnabled && this.options.mouseWheelZoomWithKey && (this.addMouseWheelZoomNotice(), this.addMouseWheelZoomWithKeyEvents()), this.mapContainer = document.createElement("div"), this.mapContainer.classList.add("svgMap-map-container"), this.container.appendChild(this.mapContainer), this.createMap(), this.applyData(this.options.data);
  }, a.prototype.countries = {
    AF: "Afghanistan",
    AX: "Åland Islands",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    VG: "British Virgin Islands",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    BQ: "Caribbean Netherlands",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CK: "Cook Islands",
    CR: "Costa Rica",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    CD: "Democratic Republic of the Congo",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FM: "Federated States of Micronesia",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    CI: "Ivory Coast",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    XK: "Kosovo",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macau",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn Islands",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé and Príncipe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    KR: "South Korea",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SZ: "Eswatini",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UM: "United States Minor Outlying Islands",
    VI: "United States Virgin Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VA: "Vatican City",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe"
  }, a.prototype.applyData = function (o) {
    var i = null,
        a = null;
    Object.keys(o.values).forEach(function (l) {
      l = parseInt(o.values[l][o.applyData], 10);
      (i = null === i ? l : i) < l && (i = l), l < (a = null === a ? l : a) && (a = l);
    }), o.data[o.applyData].thresholdMax && (i = Math.min(i, o.data[o.applyData].thresholdMax)), o.data[o.applyData].thresholdMin && (a = Math.max(a, o.data[o.applyData].thresholdMin)), Object.keys(this.countries).forEach(function (l) {
      var t,
          e = document.getElementById(this.id + "-map-country-" + l);
      e && (o.values[l] ? void 0 === o.values[l].color ? (t = Math.max(a, parseInt(o.values[l][o.applyData], 10)), t = Math.max(0, Math.min(1, (t - a) / (i - a))), t = this.getColor(this.options.colorMax, this.options.colorMin, t || 0 === t ? t : 1), e.setAttribute("fill", t)) : e.setAttribute("fill", o.values[l].color) : e.setAttribute("fill", this.options.colorNoData));
    }.bind(this));
  }, a.prototype.emojiFlags = {
    AF: "🇦🇫",
    AX: "🇦🇽",
    AL: "🇦🇱",
    DZ: "🇩🇿",
    AS: "🇦🇸",
    AD: "🇦🇩",
    AO: "🇦🇴",
    AI: "🇦🇮",
    AQ: "🇦🇶",
    AG: "🇦🇬",
    AR: "🇦🇷",
    AM: "🇦🇲",
    AW: "🇦🇼",
    AU: "🇦🇺",
    AT: "🇦🇹",
    AZ: "🇦🇿",
    BS: "🇧🇸",
    BH: "🇧🇭",
    BD: "🇧🇩",
    BB: "🇧🇧",
    BY: "🇧🇾",
    BE: "🇧🇪",
    BZ: "🇧🇿",
    BJ: "🇧🇯",
    BM: "🇧🇲",
    BT: "🇧🇹",
    BO: "🇧🇴",
    BA: "🇧🇦",
    BW: "🇧🇼",
    BR: "🇧🇷",
    IO: "🇮🇴",
    VG: "🇻🇬",
    BN: "🇧🇳",
    BG: "🇧🇬",
    BF: "🇧🇫",
    BI: "🇧🇮",
    KH: "🇰🇭",
    CM: "🇨🇲",
    CA: "🇨🇦",
    CV: "🇨🇻",
    BQ: "🇧🇶",
    KY: "🇰🇾",
    CF: "🇨🇫",
    TD: "🇹🇩",
    CL: "🇨🇱",
    CN: "🇨🇳",
    CX: "🇨🇽",
    CC: "🇨🇨",
    CO: "🇨🇴",
    KM: "🇰🇲",
    CG: "🇨🇬",
    CK: "🇨🇰",
    CR: "🇨🇷",
    HR: "🇭🇷",
    CU: "🇨🇺",
    CW: "🇨🇼",
    CY: "🇨🇾",
    CZ: "🇨🇿",
    CD: "🇨🇩",
    DK: "🇩🇰",
    DJ: "🇩🇯",
    DM: "🇩🇲",
    DO: "🇩🇴",
    EC: "🇪🇨",
    EG: "🇪🇬",
    SV: "🇸🇻",
    GQ: "🇬🇶",
    ER: "🇪🇷",
    EE: "🇪🇪",
    ET: "🇪🇹",
    FK: "🇫🇰",
    FO: "🇫🇴",
    FM: "🇫🇲",
    FJ: "🇫🇯",
    FI: "🇫🇮",
    FR: "🇫🇷",
    GF: "🇬🇫",
    PF: "🇵🇫",
    TF: "🇹🇫",
    GA: "🇬🇦",
    GM: "🇬🇲",
    GE: "🇬🇪",
    DE: "🇩🇪",
    GH: "🇬🇭",
    GI: "🇬🇮",
    GR: "🇬🇷",
    GL: "🇬🇱",
    GD: "🇬🇩",
    GP: "🇬🇵",
    GU: "🇬🇺",
    GT: "🇬🇹",
    GN: "🇬🇳",
    GW: "🇬🇼",
    GY: "🇬🇾",
    HT: "🇭🇹",
    HN: "🇭🇳",
    HK: "🇭🇰",
    HU: "🇭🇺",
    IS: "🇮🇸",
    IN: "🇮🇳",
    ID: "🇮🇩",
    IR: "🇮🇷",
    IQ: "🇮🇶",
    IE: "🇮🇪",
    IM: "🇮🇲",
    IL: "🇮🇱",
    IT: "🇮🇹",
    CI: "🇨🇮",
    JM: "🇯🇲",
    JP: "🇯🇵",
    JE: "🇯🇪",
    JO: "🇯🇴",
    KZ: "🇰🇿",
    KE: "🇰🇪",
    KI: "🇰🇮",
    XK: "🇽🇰",
    KW: "🇰🇼",
    KG: "🇰🇬",
    LA: "🇱🇦",
    LV: "🇱🇻",
    LB: "🇱🇧",
    LS: "🇱🇸",
    LR: "🇱🇷",
    LY: "🇱🇾",
    LI: "🇱🇮",
    LT: "🇱🇹",
    LU: "🇱🇺",
    MO: "🇲🇴",
    MK: "🇲🇰",
    MG: "🇲🇬",
    MW: "🇲🇼",
    MY: "🇲🇾",
    MV: "🇲🇻",
    ML: "🇲🇱",
    MT: "🇲🇹",
    MH: "🇲🇭",
    MQ: "🇲🇶",
    MR: "🇲🇷",
    MU: "🇲🇺",
    YT: "🇾🇹",
    MX: "🇲🇽",
    MD: "🇲🇩",
    MC: "🇲🇨",
    MN: "🇲🇳",
    ME: "🇲🇪",
    MS: "🇲🇸",
    MA: "🇲🇦",
    MZ: "🇲🇿",
    MM: "🇲🇲",
    NA: "🇳🇦",
    NR: "🇳🇷",
    NP: "🇳🇵",
    NL: "🇳🇱",
    NC: "🇳🇨",
    NZ: "🇳🇿",
    NI: "🇳🇮",
    NE: "🇳🇪",
    NG: "🇳🇬",
    NU: "🇳🇺",
    NF: "🇳🇫",
    KP: "🇰🇵",
    MP: "🇲🇵",
    NO: "🇳🇴",
    OM: "🇴🇲",
    PK: "🇵🇰",
    PW: "🇵🇼",
    PS: "🇵🇸",
    PA: "🇵🇦",
    PG: "🇵🇬",
    PY: "🇵🇾",
    PE: "🇵🇪",
    PH: "🇵🇭",
    PN: "🇵🇳",
    PL: "🇵🇱",
    PT: "🇵🇹",
    PR: "🇵🇷",
    QA: "🇶🇦",
    RE: "🇷🇪",
    RO: "🇷🇴",
    RU: "🇷🇺",
    RW: "🇷🇼",
    SH: "🇸🇭",
    KN: "🇰🇳",
    LC: "🇱🇨",
    PM: "🇵🇲",
    VC: "🇻🇨",
    WS: "🇼🇸",
    SM: "🇸🇲",
    ST: "🇸🇹",
    SA: "🇸🇦",
    SN: "🇸🇳",
    RS: "🇷🇸",
    SC: "🇸🇨",
    SL: "🇸🇱",
    SG: "🇸🇬",
    SX: "🇸🇽",
    SK: "🇸🇰",
    SI: "🇸🇮",
    SB: "🇸🇧",
    SO: "🇸🇴",
    ZA: "🇿🇦",
    GS: "🇬🇸",
    KR: "🇰🇷",
    SS: "🇸🇸",
    ES: "🇪🇸",
    LK: "🇱🇰",
    SD: "🇸🇩",
    SR: "🇸🇷",
    SJ: "🇸🇯",
    SZ: "🇸🇿",
    SE: "🇸🇪",
    CH: "🇨🇭",
    SY: "🇸🇾",
    TW: "🇹🇼",
    TJ: "🇹🇯",
    TZ: "🇹🇿",
    TH: "🇹🇭",
    TL: "🇹🇱",
    TG: "🇹🇬",
    TK: "🇹🇰",
    TO: "🇹🇴",
    TT: "🇹🇹",
    TN: "🇹🇳",
    TR: "🇹🇷",
    TM: "🇹🇲",
    TC: "🇹🇨",
    TV: "🇹🇻",
    UG: "🇺🇬",
    UA: "🇺🇦",
    AE: "🇦🇪",
    GB: "🇬🇧",
    US: "🇺🇸",
    UM: "🇺🇲",
    VI: "🇻🇮",
    UY: "🇺🇾",
    UZ: "🇺🇿",
    VU: "🇻🇺",
    VA: "🇻🇦",
    VE: "🇻🇪",
    VN: "🇻🇳",
    WF: "🇼🇫",
    EH: "🇪🇭",
    YE: "🇾🇪",
    ZM: "🇿🇲",
    ZW: "🇿🇼"
  }, a.prototype.continents = {
    EA: {
      iso: "EA",
      name: "World"
    },
    AF: {
      iso: "AF",
      name: "Africa",
      pan: {
        x: 454,
        y: 250
      },
      zoom: 1.9
    },
    AS: {
      iso: "AS",
      name: "Asia",
      pan: {
        x: 904,
        y: 80
      },
      zoom: 1.8
    },
    EU: {
      iso: "EU",
      name: "Europe",
      pan: {
        x: 404,
        y: 80
      },
      zoom: 5
    },
    NA: {
      iso: "NA",
      name: "North America",
      pan: {
        x: 104,
        y: 55
      },
      zoom: 2.6
    },
    MA: {
      iso: "MA",
      name: "Middle America",
      pan: {
        x: 104,
        y: 200
      },
      zoom: 2.6
    },
    SA: {
      iso: "SA",
      name: "South America",
      pan: {
        x: 104,
        y: 340
      },
      zoom: 2.2
    },
    OC: {
      iso: "OC",
      name: "Oceania",
      pan: {
        x: 954,
        y: 350
      },
      zoom: 1.9
    }
  }, a.prototype.createMap = function () {
    this.createTooltip(), this.mapWrapper = this.createElement("div", "svgMap-map-wrapper", this.mapContainer), this.mapImage = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.mapImage.setAttribute("viewBox", "0 0 2000 1001"), this.mapImage.classList.add("svgMap-map-image"), this.mapWrapper.appendChild(this.mapImage);
    var e,
        l = this.createElement("div", "svgMap-map-controls-wrapper", this.mapWrapper),
        o = this.createElement("div", "svgMap-map-controls-zoom", l);
    ["in", "out", "reset"].forEach(function (l) {
      var t;
      ("reset" === l && this.options.showZoomReset || "reset" !== l) && (this[t = "zoomControl" + l.charAt(0).toUpperCase() + l.slice(1)] = this.createElement("button", "svgMap-control-button svgMap-zoom-button svgMap-zoom-" + l + "-button", o), this[t].type = "button", this[t].addEventListener("click", function () {
        this.zoomMap(l);
      }.bind(this), {
        passive: !0
      }));
    }.bind(this)), this.zoomControlIn.setAttribute("aria-label", "Zoom in"), this.zoomControlOut.setAttribute("aria-label", "Zoom out"), this.options.showContinentSelector && (t = this.createElement("div", "svgMap-map-continent-controls-wrapper", this.mapWrapper), this.continentSelect = this.createElement("select", "svgMap-continent-select", t), e = this, Object.keys(a.prototype.continents).forEach(function (l) {
      var t = e.createElement("option", "svgMap-continent-option svgMap-continent-iso-" + a.prototype.continents[l].iso, e.continentSelect, a.prototype.continents[l].name);
      t.value = l;
    }), this.continentSelect.addEventListener("change", function (l) {
      l.target.value && this.zoomContinent(l.target.value);
    }.bind(e), {
      passive: !0
    }), t.setAttribute("aria-label", "Select continent"));
    var t = Object.assign({}, this.mapPaths);
    this.options.countries.EH || (t.MA.d = t["MA-EH"].d, delete t.EH), delete t["MA-EH"], "RU" === this.options.countries.Crimea && (t.RU.d = t["RU-WITH-CRIMEA"].d, t.UA.d = t["UA-WITHOUT-CRIMEA"].d), delete t["RU-WITH-CRIMEA"], delete t["UA-WITHOUT-CRIMEA"], this.tooltipMoveEvent = function (l) {
      this.moveTooltip(l);
    }.bind(this), Object.keys(t).forEach(function (l) {
      var t = this.mapPaths[l];

      if (t.d) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", "path");

        if (i.setAttribute("d", t.d), i.setAttribute("id", this.id + "-map-country-" + l), i.setAttribute("data-id", l), i.classList.add("svgMap-country"), this.mapImage.appendChild(i), i.addEventListener("touchstart", function (l) {
          i.parentNode.appendChild(i), i.classList.add("svgMap-active");
          var t = i.getAttribute("data-id"),
              e = i.getAttribute("data-link");
          this.options.touchLink && e ? window.location.href = e : (this.setTooltipContent(this.getTooltipContent(t)), this.showTooltip(l), this.moveTooltip(l), i.addEventListener("touchmove", this.tooltipMoveEvent, {
            passive: !0
          }));
        }.bind(this), {
          passive: !0
        }), i.addEventListener("mouseenter", function (l) {
          i.parentNode.appendChild(i);
          var t = i.getAttribute("data-id");
          this.setTooltipContent(this.getTooltipContent(t)), this.showTooltip(l), i.addEventListener("mousemove", this.tooltipMoveEvent, {
            passive: !0
          });
        }.bind(this), {
          passive: !0
        }), this.options.data.values && this.options.data.values[l] && this.options.data.values[l].link) {
          i.setAttribute("data-link", this.options.data.values[l].link), this.options.data.values[l].linkTarget && i.setAttribute("data-link-target", this.options.data.values[l].linkTarget);

          var _o = !1;

          i.addEventListener("mousedown", function () {
            _o = !1;
          }), i.addEventListener("touchstart", function () {
            _o = !1;
          }), i.addEventListener("mousemove", function () {
            _o = !0;
          }), i.addEventListener("touchmove", function () {
            _o = !0;
          });

          l = function l(_l) {
            var t, e;
            _o || (t = i.getAttribute("data-link"), (e = i.getAttribute("data-link-target")) ? window.open(t, e) : window.location.href = t);
          };

          i.addEventListener("click", l), i.addEventListener("touchend", l);
        }

        i.addEventListener("mouseleave", function () {
          this.hideTooltip(), i.removeEventListener("mousemove", this.tooltipMoveEvent, {
            passive: !0
          });
        }.bind(this), {
          passive: !0
        }), i.addEventListener("touchend", function () {
          this.hideTooltip(), i.classList.remove("svgMap-active"), i.removeEventListener("touchmove", this.tooltipMoveEvent, {
            passive: !0
          });
        }.bind(this), {
          passive: !0
        });
      }
    }.bind(this));
    var n = this;
    this.mapPanZoom = i(this.mapImage, {
      zoomEnabled: !0,
      fit: !0,
      center: !0,
      minZoom: this.options.minZoom,
      maxZoom: this.options.maxZoom,
      zoomScaleSensitivity: this.options.zoomScaleSensitivity,
      controlIconsEnabled: !1,
      mouseWheelZoomEnabled: this.options.mouseWheelZoomEnabled,
      preventMouseEventsDefault: !0,
      onZoom: function onZoom() {
        n.setControlStatuses();
      },
      beforePan: function beforePan(l, t) {
        var e = .85 * n.mapWrapper.offsetWidth,
            o = .85 * n.mapWrapper.offsetHeight,
            i = this.getSizes(),
            a = -((i.viewBox.x + i.viewBox.width) * i.realZoom) + e,
            L = i.width - e - i.viewBox.x * i.realZoom,
            e = -((i.viewBox.y + i.viewBox.height) * i.realZoom) + o,
            i = i.height - o - i.viewBox.y * i.realZoom;
        return {
          x: Math.max(a, Math.min(L, t.x)),
          y: Math.max(e, Math.min(i, t.y))
        };
      }
    }), 0 != this.options.initialPan.x || 0 != this.options.initialPan.y ? this.mapPanZoom.zoomAtPointBy(this.options.initialZoom, {
      x: this.options.initialPan.x,
      y: this.options.initialPan.y
    }) : this.mapPanZoom.zoom(this.options.initialZoom), this.setControlStatuses();
  }, a.prototype.getTooltipContent = function (e) {
    if (this.options.onGetTooltip) {
      var l = this.options.onGetTooltip(this.tooltip, e, this.options.data.values[e]);
      if (l) return l;
    }

    l = this.createElement("div", "svgMap-tooltip-content-container");
    !1 === this.options.hideFlag && (t = this.createElement("div", "svgMap-tooltip-flag-container svgMap-tooltip-flag-container-" + this.options.flagType, l), "image" === this.options.flagType ? this.createElement("img", "svgMap-tooltip-flag", t).setAttribute("src", this.options.flagURL.replace("{0}", e.toLowerCase())) : "emoji" === this.options.flagType && (t.innerHTML = this.emojiFlags[e])), this.createElement("div", "svgMap-tooltip-title", l).innerHTML = this.getCountryName(e);
    var o,
        t = this.createElement("div", "svgMap-tooltip-content", l);
    return this.options.data.values[e] ? (o = "<table>", Object.keys(this.options.data.data).forEach(function (l) {
      var t = this.options.data.data[l],
          l = this.options.data.values[e][l];
      (void 0 !== l && !0 === this.options.hideMissingData || !1 === this.options.hideMissingData) && (t.floatingNumbers && (l = l.toFixed(1)), t.thousandSeparator && (l = this.numberWithCommas(l, t.thousandSeparator)), l = t.format ? t.format.replace("{0}", "<span>" + l + "</span>") : "<span>" + l + "</span>", o += "<tr><td>" + (t.name || "") + "</td><td>" + l + "</td></tr>");
    }.bind(this)), o += "</table>", t.innerHTML = o) : this.createElement("div", "svgMap-tooltip-no-data", t).innerHTML = this.options.noDataText, l;
  }, a.prototype.setControlStatuses = function () {
    this.zoomControlIn.classList.remove("svgMap-disabled"), this.zoomControlIn.setAttribute("aria-disabled", "false"), this.zoomControlOut.classList.remove("svgMap-disabled"), this.zoomControlOut.setAttribute("aria-disabled", "false"), this.options.showZoomReset && (this.zoomControlReset.classList.remove("svgMap-disabled"), this.zoomControlReset.setAttribute("aria-disabled", "false")), this.mapPanZoom.getZoom().toFixed(3) <= this.options.minZoom && (this.zoomControlOut.classList.add("svgMap-disabled"), this.zoomControlOut.setAttribute("aria-disabled", "true")), this.mapPanZoom.getZoom().toFixed(3) >= this.options.maxZoom && (this.zoomControlIn.classList.add("svgMap-disabled"), this.zoomControlIn.setAttribute("aria-disabled", "true")), this.options.showZoomReset && this.mapPanZoom.getZoom().toFixed(3) == this.options.initialZoom && (this.zoomControlReset.classList.add("svgMap-disabled"), this.zoomControlReset.setAttribute("aria-disabled", "true"));
  }, a.prototype.zoomMap = function (l) {
    if (this["zoomControl" + l.charAt(0).toUpperCase() + l.slice(1)].classList.contains("svgMap-disabled")) return !1;
    "reset" === l ? (this.mapPanZoom.reset(), 0 != this.options.initialPan.x || 0 != this.options.initialPan.y ? this.mapPanZoom.zoomAtPointBy(this.options.initialZoom, {
      x: this.options.initialPan.x,
      y: this.options.initialPan.y
    }) : this.mapPanZoom.zoom(this.options.initialZoom)) : this.mapPanZoom["in" == l ? "zoomIn" : "zoomOut"]();
  }, a.prototype.zoomContinent = function (l) {
    l = this.continents[l];
    "EA" == l.iso ? this.mapPanZoom.reset() : l.pan && (this.mapPanZoom.reset(), this.mapPanZoom.zoomAtPoint(l.zoom, l.pan));
  }, a.prototype.addMouseWheelZoomNotice = function () {
    var l = document.createElement("div");
    l.classList.add("svgMap-block-zoom-notice");
    var t = document.createElement("div");
    t.innerHTML = -1 != navigator.appVersion.indexOf("Mac") ? this.options.mouseWheelKeyMessageMac : this.options.mouseWheelKeyMessage, l.append(t), this.wrapper.append(l);
  }, a.prototype.showMouseWheelZoomNotice = function (l) {
    this.mouseWheelNoticeJustHidden || (this.autoHideMouseWheelNoticeTimeout && clearTimeout(this.autoHideMouseWheelNoticeTimeout), this.autoHideMouseWheelNoticeTimeout = setTimeout(function () {
      this.hideMouseWheelZoomNotice();
    }.bind(this), l || 2400), this.wrapper.classList.add("svgMap-block-zoom-notice-active"));
  }, a.prototype.hideMouseWheelZoomNotice = function () {
    this.wrapper.classList.remove("svgMap-block-zoom-notice-active"), this.autoHideMouseWheelNoticeTimeout && clearTimeout(this.autoHideMouseWheelNoticeTimeout);
  }, a.prototype.blockMouseWheelZoomNotice = function (l) {
    this.mouseWheelNoticeJustHidden = !0, this.mouseWheelNoticeJustHiddenTimeout && clearTimeout(this.mouseWheelNoticeJustHiddenTimeout), this.mouseWheelNoticeJustHiddenTimeout = setTimeout(function () {
      this.mouseWheelNoticeJustHidden = !1;
    }.bind(this), l || 600);
  }, a.prototype.addMouseWheelZoomWithKeyEvents = function () {
    if (this.wrapper.addEventListener("wheel", function (l) {
      document.body.classList.contains("svgMap-zoom-key-pressed") ? (this.hideMouseWheelZoomNotice(), this.blockMouseWheelZoomNotice()) : this.showMouseWheelZoomNotice();
    }.bind(this), {
      passive: !0
    }), document.addEventListener("keydown", function (l) {
      "Alt" != l.key && "Control" != l.key && "Meta" != l.key && "Shift" != l.key || (document.body.classList.add("svgMap-zoom-key-pressed"), this.hideMouseWheelZoomNotice(), this.blockMouseWheelZoomNotice());
    }.bind(this)), this.wrapper.addEventListener("wheel", function (l) {
      (l.altKey || l.ctrlKey || l.metaKey || l.shiftKey) && document.body.classList.add("svgMap-zoom-key-pressed");
    }), document.body.classList.contains("svgMap-key-events-added")) return !1;
    document.body.classList.add("svgMap-key-events-added"), document.addEventListener("keyup", function (l) {
      "Alt" != l.key && "Control" != l.key && "Meta" != l.key && "Shift" != l.key || document.body.classList.remove("svgMap-zoom-key-pressed");
    });
  }, a.prototype.mapPaths = {
    AF: {
      d: "M1369.9,333.8h-5.4l-3.8-0.5l-2.5,2.9l-2.1,0.7l-1.5,1.3l-2.6-2.1l-1-5.4l-1.6-0.3v-2l-3.2-1.5l-1.7,2.3l0.2,2.6 l-0.6,0.9l-3.2-0.1l-0.9,3l-2.1-1.3l-3.3,2.1l-1.8-0.8l-4.3-1.4h-2.9l-1.6-0.2l-2.9-1.7l-0.3,2.3l-4.1,1.2l0.1,5.2l-2.5,2l-4,0.9 l-0.4,3l-3.9,0.8l-5.9-2.4l-0.5,8l-0.5,4.7l2.5,0.9l-1.6,3.5l2.7,5.1l1.1,4l4.3,1.1l1.1,4l-3.9,5.8l9.6,3.2l5.3-0.9l3.3,0.8l0.9-1.4 l3.8,0.5l6.6-2.6l-0.8-5.4l2.3-3.6h4l0.2-1.7l4-0.9l2.1,0.6l1.7-1.8l-1.1-3.8l1.5-3.8l3-1.6l-3-4.2l5.1,0.2l0.9-2.3l-0.8-2.5l2-2.7 l-1.4-3.2l-1.9-2.8l2.4-2.8l5.3-1.3l5.8-0.8l2.4-1.2l2.8-0.7L1369.9,333.8L1369.9,333.8z"
    },
    AL: {
      d: "M1077.5,300.5l-2,3.1l0.5,1.9l0,0l1,1l-0.5,1.9l-0.1,4.3l0.7,3l3,2.1l0.2,1.4l1,0.4l2.1-3l0.1-2.1l1.6-0.9V312 l-2.3-1.6l-0.9-2.6l0.4-2.1l0,0l-0.5-2.3l-1.3-0.6l-1.3-1.6l-1.3,0.5L1077.5,300.5L1077.5,300.5z"
    },
    DZ: {
      d: "M1021,336.9l-3.6,0.4l-2.2-1.5h-5.6l-4.9,2.6l-2.7-1l-8.7,0.5l-8.9,1.2l-5,2l-3.4,2.6l-5.7,1.2l-5.1,3.5l2,4.1 l0.3,3.9l1.8,6.7l1.4,1.4l-1,2.5l-7,1l-2.5,2.4l-3.1,0.5l-0.3,4.7l-6.3,2.5l-2.1,3.2L944,383l-5.4,1l-8.9,4.7l-0.1,7.5v0.4l-0.1,1.2 l20.3,15.5l18.4,13.9l18.6,13.8l1.3,3l3.4,1.8l2.6,1.1l0.1,4l6.1-0.6l7.8-2.8l15.8-12.5l18.6-12.2l-2.5-4l-4.3-2.9l-2.6,1.2l-2-3.6 l-0.2-2.7l-3.4-4.7l2.1-2.6l-0.5-4l0.6-3.5l-0.5-2.9l0.9-5.2l-0.4-3l-1.9-5.6l-2.6-11.3l-3.4-2.6v-1.5l-4.5-3.8l-0.6-4.8l3.2-3.6 l1.1-5.3l-1-6.2L1021,336.9L1021,336.9z"
    },
    AD: {
      d: "M985.4,301.7l0.2-0.4l-0.2-0.2l-0.7-0.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l0.1,0.1v0.4l0.1,0.2h0.4L985.4,301.7 L985.4,301.7z"
    },
    AO: {
      d: "M1068.3,609.6l-16.6-0.1l-1.9,0.7l-1.7-0.1l-2.3,0.9l-0.5,1.2l2.8,4l1.1,4.3l1.6,6.1l-1.7,2.6l-0.3,1.3l1.3,3.8 l1.5,3.9l1.6,2.2l0.3,3.6l-0.7,4.8l-1.8,2.8l-3.3,4.2l-1.3,2.6l-1.9,5.7l-0.3,2.7l-2,5.9l-0.9,5.5l0.5,4l2.7-1.2l3.3-1l3.6,0.1 l3.2,2.9l0.9-0.4l22.5-0.3l3.7,3l13.4,0.9l10.3-2.5l-3.5-4l-3.6-5.2l0.8-20.3l11.6,0.1l-0.5-2.2l0.9-2.4l-0.9-3l0.7-3l-0.5-2 l-2.6-0.4l-3.5,1l-2.4-0.2l-1.4,0.6l0.5-7.6l-1.9-2.3l-0.3-4l0.9-3.8l-1.2-2.4v-4h-6.8l0.5-2.3h-2.9l-0.3,1.1l-3.4,0.3l-1.5,3.7 l-0.9,1.6l-3-0.9l-1.9,0.9l-3.7,0.5l-2.1-3.3l-1.3-2.1l-1.6-3.8L1068.3,609.6L1068.3,609.6z M1046.5,608.3l0.2-2.7l0.9-1.7l2-1.3 l-2-2.2l-1.8,1.1l-2.2,2.7l1.4,4.8L1046.5,608.3L1046.5,608.3z"
    },
    AI: {
      d: "M627.9,456.2l0.1-0.2l-0.2-0.1l-0.8,0.5v0.1L627.9,456.2z"
    },
    AG: {
      d: "M634.3,463.8l0.2-0.1v-0.1v-0.2l-0.1-0.1l-0.1-0.2l-0.4-0.2l-0.5,0.5v0.2l0.1,0.3l0.6,0.1L634.3,463.8L634.3,463.8z M634.5,460.3v-0.5l-0.1-0.2h-0.3l-0.1-0.1h-0.1l-0.1,0.1l0.1,0.6l0.5,0.3L634.5,460.3L634.5,460.3z"
    },
    AR: {
      d: "M669.8,920.7l0.9-3l-7.3-1.5l-7.7-3.6l-4.3-4.6l-3-2.8l5.9,13.5h5l2.9,0.2l3.3,2.1L669.8,920.7L669.8,920.7z M619.4,712.6l-7.4-1.5l-4,5.7l0.9,1.6l-1.1,6.6l-5.6,3.2l1.6,10.6l-0.9,2l2,2.5l-3.2,4l-2.6,5.9l-0.9,5.8l1.7,6.2l-2.1,6.5 l4.9,10.9l1.6,1.2l1.3,5.9l-1.6,6.2l1.4,5.4l-2.9,4.3l1.5,5.9l3.3,6.3l-2.5,2.4l0.3,5.7l0.7,6.4l3.3,7.6l-1.6,1.2l3.6,7.1l3.1,2.3 l-0.8,2.6l2.8,1.3l1.3,2.3l-1.8,1.1l1.8,3.7l1.1,8.2l-0.7,5.3l1.8,3.2l-0.1,3.9l-2.7,2.7l3.1,6.6l2.6,2.2l3.1-0.4l1.8,4.6l3.5,3.6 l12,0.8l4.8,0.9l2.2,0.4l-4.7-3.6l-4.1-6.3l0.9-2.9l3.5-2.5l0.5-7.2l4.7-3.5l-0.2-5.6l-5.2-1.3l-6.4-4.5l-0.1-4.7l2.9-3.1l4.7-0.1 l0.2-3.3l-1.2-6.1l2.9-3.9l4.1-1.9l-2.5-3.2l-2.2,2l-4-1.9l-2.5-6.2l1.5-1.6l5.6,2.3l5-0.9l2.5-2.2l-1.8-3.1l-0.1-4.8l-2-3.8 l5.8,0.6l10.2-1.3l6.9-3.4l3.3-8.3l-0.3-3.2l-3.9-2.8l-0.1-4.5l-7.8-5.5l-0.3-3.3l-0.4-4.2l0.9-1.4l-1.1-6.3l0.3-6.5l0.5-5.1 l5.9-8.6l5.3-6.2l3.3-2.6l4.2-3.5l-0.5-5.1l-3.1-3.7l-2.6,1.2l-0.3,5.7l-4.3,4.8l-4.2,1.1l-6.2-1l-5.7-1.8l4.2-9.6l-1.1-2.8 l-5.9-2.5l-7.2-4.7l-4.6-1L632,713.7l-1-1.3l-6.3-0.3l-1.6,5.1L619.4,712.6L619.4,712.6z"
    },
    AM: {
      d: "M1219,325.1l-0.9-4.4l-2.5-1.1l-2.5-1.7l1-2l-3.1-2.2l0.7-1.5l-2.2-1.1l-1.4-1.7l-6.9,1l1.3,2.2v3.1l4.2,1.5 l2.4,1.9l1-0.2l1.8,1.7h2.3l0.2,1l2.8,3.7L1219,325.1L1219,325.1z"
    },
    AW: {
      d: "M586.6,492.9l-0.1-0.1l-0.3-0.6l-0.3-0.3l-0.1,0.1l-0.1,0.3l0.3,0.3l0.3,0.4l0.3,0.1L586.6,492.9L586.6,492.9z"
    },
    AU: {
      d: "M1726.7,832l-3-0.5l-1.9,2.9l-0.6,5.4l-2.1,4l-0.5,5.3l3,0.2l0.8,0.3l6.6-4.3l0.6,1.7l4-4.9l3.2-2.2l4.5-7.3 l-2.8-0.5l-4.8,1.2l-3.4,0.9L1726.7,832L1726.7,832z M1776.8,659.7l0.5-2.3l0.1-3.6l-1.6-3.2l0.1-2.7l-1.3-0.8l0.1-3.9l-1.2-3.2 l-2.3,2.4l-0.4,1.8l-1.5,3.5l-1.8,3.4l0.6,2.1l-1.2,1.3l-1.5,4.8l0.1,3.7l-0.7,1.8l0.3,3.1l-2.6,5l-1.3,3.5l-1.7,2.9l-1.7,3.4 l-4.1,2.1l-4.9-2.1l-0.5-2l-2.5-1.6h-1.6l-3.3-3.8l-2.5-2.2l-3.9-2l-3.9-3.5l-0.1-1.8l2.5-3.1l2.1-3.2l-0.3-2.6l1.9-0.2l2.5-2.5 l2-3.4l-2.2-3.2l-1.5,1.2l-2-0.5l-3.5,1.8l-3.2-2l-1.7,0.7l-4.5-1.6l-2.7-2.7l-3.5-1.5l-3.1,0.9l3.9,2.1l-0.3,3.2l-4.8,1.2l-2.8-0.7 l-3.6,2.2l-2.9,3.7l0.6,1.5l-2.7,1.7l-3.4,5.1l0.6,3.5l-3.4-0.6h-3.5l-2.5-3.8l-3.7-2.9l-2.8,0.8l-2.6,0.9l-0.3,1.6l-2.4-0.7 l-0.3,1.8l-3,1.1l-1.7,2.5l-3.5,3.1l-1.4,4.8l-2.3-1.3l-2.2,3.1l1.5,3l-2.6,1.2l-1.4-5.5l-4.8,5.4l-0.8,3.5l-0.7,2.5l-3.8,3.3 l-2,3.4l-3.5,2.8l-6.1,1.9l-3.1-0.2l-1.5,0.6l-1.1,1.4l-3.5,0.7l-4.7,2.4l-1.4-0.8l-2.6,0.5l-4.6,2.3l-3.2,2.7l-4.8,2.1l-3.1,4.4 l0.4-4.8l-3.1,4.6l-0.1,3.7l-1.3,3.2l-1.5,1.5l-1.3,3.7l0.9,1.9l0.1,2l1.6,5l-0.7,3.3l-1-2.5l-2.3-1.8l0.4,5.9l-1.7-2.8l0.1,2.8 l1.8,5l-0.6,5l1.7,2.5l-0.4,1.9l0.9,4.1l-1.3,3.6l-0.3,3.6l0.7,6.5l-0.7,3.7l-2.2,4.4l-0.6,2.3l-1.5,1.5l-2.9,0.8l-1.5,3.7l2.4,1.2 l4,4.1h3.6l3.8,0.3l3.3-2.1l3.4-1.8l1.4,0.3l4.5-3.4l3.8-0.3l4.1-0.7l4.2,1.2l3.6-0.6l4.6-0.2l3-2.6l2.3-3.3l5.2-1.5l6.9-3.2l5,0.4 l6.9-2.1l7.8-2.3l9.8-0.6l4,3.1l3.7,0.2l5.3,3.8l-1.6,1.5l1.8,2.4l1.3,4.6l-1.6,3.4l2.9,2.6l4.3-5.1l4.3-2.1l6.7-5.5l-1.6,4.7 l-3.4,3.2l-2.5,3.7l-4.4,3.5l5.2-1.2l4.7-4.4l-0.9,4.8l-3.2,3.1l4.7,0.8l1.3,2.6l-0.4,3.3l-1.5,4.9l1.4,4l4,1.9l2.8,0.4l2.4,1 l3.5,1.8l7.2-4.7l3.5-1.2l-2.7,3.4l2.6,1.1l2.7,2.8l4.7-2.7l3.8-2.5l6.3-2.7l6-0.2l4.2-2.3l0.9-2l3-4.5l3.9-4.8l3.6-3.2l4.4-5.6 l3.3-3.1l4.4-5l5.4-3.1l5-5.8l3.1-4.5l1.4-3.6l3.8-5.7l2.1-2.9l2.5-5.7l-0.7-5.4l1.7-3.9l1.1-3.7v-5.1l-2.8-5.1l-1.9-2.5l-2.9-3.9 l0.7-6.7l-1.5,1l-1.6-2.8l-2.5,1.4l-0.6-6.9l-2.2-4l1-1.5l-3.1-2.8l-3.2-3l-5.3-3.3l-0.9-4.3l1.3-3.3l-0.4-5.5l-1.3-0.7l-0.2-3.2 l-0.2-5.5l1.1-2.8l-2.3-2.5l-1.4-2.7l-3.9,2.4L1776.8,659.7L1776.8,659.7z"
    },
    AT: {
      d: "M1060.2,264l-2.3-1.2l-2.3,0.3l-4-1.9l-1.7,0.5l-2.6,2.5l-3.8-2l-1.5,2.9l-1.7,0.8l1,4l-0.4,1.1l-1.7-1.3l-2.4-0.2 l-3.4,1.2l-4.4-0.3l-0.6,1.6l-2.6-1.7l-1.5,0.3l0.2,1.1l-0.7,1.6l2.3,1.1l2.6,0.2l3.1,0.9l0.5-1.2l4.8-1.1l1.3,2.2l7.2,1.6l4.2,0.4 l2.4-1.4l4.3-0.1l0.9-1.1l1.3-4l-1.1-1.3h2.8l0.2-2.6l-0.7-2.1L1060.2,264L1060.2,264z"
    },
    AZ: {
      d: "M1210.1,318.9l-1,0.2l1.2,2.4l3.2,2.9l3.7,0.9l-2.8-3.7l-0.2-1h-2.3L1210.1,318.9L1210.1,318.9z M1220.5,309.6 l-4.3-3.8l-1.5-0.2l-1.1,0.9l3.2,3.4l-0.6,0.7l-2.8-0.4l-4.2-1.8l-1.1,1l1.4,1.7l2.2,1.1l-0.7,1.5l3.1,2.2l-1,2l2.5,1.7l2.5,1.1 l0.9,4.4l5.3-4.7l1.9-0.5l1.9,1.9l-1.2,3.1l3.8,3.4l1.3-0.3l-0.8-3.2l1.7-1.5l0.4-2.2l-0.1-5l4.2-0.5l-2-1.7l-2.5-0.2l-3.5-4.5 l-3.4-3.2l0,0l-2.6,2.5l-0.5,1.5L1220.5,309.6L1220.5,309.6z"
    },
    BS: {
      d: "M574.4,437.3l0.2-0.6l-0.3-0.1l-0.5,0.7l-0.6,0.3h-0.3l-0.7-0.3h-0.5l-0.4,0.5l-0.6,0.1l0.1,0.1v0.2l-0.2,0.3v0.2 l0.1,0.3l1.5-0.1l1.3-0.2l0.7-0.9L574.4,437.3z M575.2,435.3l-0.4-0.3l-0.4,0.3l0.1,0.3L575.2,435.3L575.2,435.3z M575.2,429.5 l-0.4-0.2l-0.3,0.5l0.3,0.1l0.7-0.1l0.5,0.1l0.5,0.4l0.3-0.2l-0.1-0.1l-0.4-0.3l-0.6-0.1h-0.2L575.2,429.5L575.2,429.5z M568.6,430.8l0.7-0.6l0.7-0.3l0.9-1.1l-0.1-0.9l0.2-0.4l-0.6,0.1l-0.1,0.3l-0.1,0.3l0.3,0.4v0.2l-0.2,0.4l-0.3,0.1l-0.1,0.2 l-0.3,0.1l-0.4,0.5l-0.8,0.6l-0.2,0.3L568.6,430.8L568.6,430.8z M569.8,427.6l-0.6-0.2L569,427l-0.4-0.1l-0.1,0.2v0.2l0.1,0.4 l0.2-0.1l0.8,0.4l0.4-0.3L569.8,427.6z M565.7,426.5v-0.7l-0.4-0.5l-0.6-0.4l-0.1-1.2l-0.3-0.7l-0.2-0.6l-0.4-0.8v0.5l0.1,0.1 l0.1,0.6l0.4,0.9l0.1,0.4l-0.1,0.4l-0.4,0.1l-0.1,0.2l0.5,0.3l0.8,0.3l0.5,1.3L565.7,426.5L565.7,426.5z M561.6,423l-0.5-0.3 l-0.2-0.3l-0.7-0.7l-0.3-0.1l-0.2,0.4l0.4,0.1l0.9,0.7l0.4,0.2L561.6,423L561.6,423z M568.9,419l-0.1-0.3h-0.1l-0.3,0.1l-0.3,0.9 h0.3L568.9,419L568.9,419z M551.3,417.9l-0.2-0.3l-0.3,0.2h-0.5l-0.2,0.1h-0.4l-0.3,0.2l0.4,0.8l0.3,0.3l0.1,1l0.2,0.1l-0.1,0.7 l1.1,0.1l0.4-0.8V420v-0.1v-0.2v-0.2v-0.9l-0.3-0.5l-0.4,0.6l-0.4-0.3l0.6-0.4L551.3,417.9L551.3,417.9z M564.2,418.2l-1-1.4v-0.2 l-0.5-1.5l-0.3-0.1l-0.1,0.1l-0.1,0.2l0.4,0.4v0.4l0.3,0.2l0.4,1.1l0.4,0.4l-0.1,0.3l-0.4,0.3l-0.1,0.2h0.1l0.6-0.1h0.4L564.2,418.2 L564.2,418.2z M553.7,413l0.5-0.2l0,0l-0.3-0.2h-0.7l-0.4,0.1l-0.2,0.2l0.1,0.1l0.4,0.1L553.7,413L553.7,413z M551.3,415l-0.5-0.6 l-0.3-0.9l-0.2-0.4l0.1-0.5l-0.3-0.4l-0.6-0.4l-0.3,0.1l0.1,1.1l-0.2,0.6l-0.8,1.1l0.1,0.4l0,0l0.1,0.2l-0.5,0.4v-0.3l-0.6,0.1 l0.3,0.5l0.6,0.4l0.3,0.1l0.3-0.2v0.5l0.3,0.4l0.1,0.4l0.3-0.3l0.6-0.2l0.2-0.2l0.7-0.4v-0.2l0.1-0.6L551.3,415L551.3,415z M558,410 l-0.3-0.5l-0.1,0.1l-0.1,0.4l-0.3,0.4l0.5-0.1l0.4,0.1l0.6,0.5l0.7,0.2l0.3,0.6l0.6,0.6v0.6l-0.4,0.6l-0.1,0.7l-0.6,0.1l0.1,0.1 l0.3,0.3l0.1,0.4l0.2,0.2v-0.7l0.3-0.8l0.4-1.3l-0.1-0.3l-0.3-0.3l-0.7-0.9l-0.7-0.3L558,410L558,410z M549.2,402.1l-0.5-0.4 l-0.2,0.4v0.1l-0.1,0.3l-0.5,0.4l-0.5,0.1l-0.7-0.6l-0.2-0.1l0.8,1.1l0.3,0.1h0.4l0.9-0.3l1.6-0.5l1.7-0.2l0.1-0.2l-0.1-0.3 l-0.8,0.2l-1-0.1l-0.2,0.2h-0.4L549.2,402.1z M555.3,407.3l0.2-0.3l0.4-1.8l0.8-0.6l0.1-1.2l-0.5-0.5l-0.4-0.2l-0.1-0.2l0.1-0.2 l-0.2-0.1l-0.3-0.2l-0.4-0.6l-0.4-0.4l-0.7-0.1l-0.6-0.1l-0.4-0.1l-0.5,0.3h0.8l1.5,0.3l0.7,1.5l0.5,0.4l0.1,0.4l-0.2,0.4v0.4 l-0.3,0.5l-0.1,0.8l-0.3,0.4l-0.7,0.5l0.4,0.2l0.3,0.6L555.3,407.3L555.3,407.3z"
    },
    BH: {
      d: "M1253,408.3l0.7-3l-0.5-0.9l-1.6,1.2l0.6,0.9l-0.2,0.7L1253,408.3z"
    },
    BD: {
      d: "M1486.5,431.9l-4.5-10.1l-1.5,0.1l-0.2,4l-3.5-3.3l1.1-3.6l2.4-0.4l1.6-5.3l-3.4-1.1l-5,0.1l-5.4-0.9l-1.2-4.4 l-2.7-0.4l-4.8-2.7l-1.2,4.3l4.6,3.4l-3.1,2.4l-0.8,2.3l3.7,1.7l-0.4,3.8l2.6,4.8l1.6,5.2l2.2,0.6l1.7,0.7l0.6-1.2l2.5,1.3l1.3-3.5 l-0.9-2.6l5.1,0.2l2.8,3.7l1.5,3.1l0.8,3.2l2,3.3l-1.1-5.1l2.1,1L1486.5,431.9L1486.5,431.9z"
    },
    BB: {
      d: "M644.9,488.9l0.4-0.4l-0.3-0.3l-0.6-0.8l-0.3,0.1v1l0.1,0.3l0.5,0.3L644.9,488.9L644.9,488.9z"
    },
    BY: {
      d: "M1112.8,219.4l-5.2-1.5l-4.6,2.3l-2.6,1l0.9,2.6l-3.5,2l-0.5,3.4l-4.8,2.2h-4.6l0.6,2.7l1.7,2.3l0.3,2.4l-2.7,1.2 l1.9,2.9l0.5,2.7l2.2-0.3l2.4-1.6l3.7-0.2l5,0.5l5.6,1.5l3.8,0.1l2,0.9l1.6-1.1l1.5,1.5l4.3-0.3l2,0.6l-0.2-3.1l1.2-1.4l4.1-0.3l0,0 l-2-3.9l-1.5-2l0.8-0.6l3.9,0.2l1.6-1.3l-1.7-1.6l-3.4-1.1l0.1-1.1l-2.2-1.1l-3.7-3.9l0.6-1.6l-1-2.9l-4.8-1.4l-2.3,0.7 L1112.8,219.4L1112.8,219.4z"
    },
    BE: {
      d: "M1000.7,246.2l-4.4,1.3l-3.6-0.5l0,0l-3.8,1.2l0.7,2.2l2.2,0.1l2.4,2.4l3.4,2.9l2.5-0.4l4.4,2.8l0.4-3.5l1.3-0.2 l0.4-4.2l-2.8-1.4L1000.7,246.2L1000.7,246.2z"
    },
    BZ: {
      d: "M482.5,471.1l1.4-2.2l1-0.2l1.3-1.7l1-3.2l-0.3-0.6l0.9-2.3l-0.4-1l1.3-2.7l0.3-1.8h-1.1l0.1-0.9h-1l-2.5,3.9 l-0.9-0.8l-0.7,0.3l-0.1,1l-0.7,5l-1.2,7.2L482.5,471.1L482.5,471.1z"
    },
    BJ: {
      d: "M996.9,498l-4.3-3.7h-2l-1.9,1.9l-1.2,1.9l-2.7,0.6l-1.2,2.8l-1.9,0.7l-0.7,3.3l1.7,1.9l2,2.3l0.2,3.1l1.1,1.3 l-0.2,14.6l1.4,4.4l4.6-0.8l0.3-10.2L992,518l1-4l1.7-1.9l2.7-4l-0.6-1.7l1.1-2.5l-1.2-3.8L996.9,498L996.9,498z"
    },
    BM: {
      d: "M630.2,366.8l0.4-0.6h-0.1l-0.5,0.5l-0.6,0.2l0.1,0.1h0.1L630.2,366.8z"
    },
    BT: {
      d: "M1474.7,395.5l-2.7-1.8l-2.9-0.1l-4.2-1.5l-2.6,1.6l-2.6,4.8l0.3,1.2l5.5,2.5l3.2-1l4.7,0.4l4.4-0.2l-0.4-3.9 L1474.7,395.5L1474.7,395.5z"
    },
    BO: {
      d: "M655.7,700.5l1.6-1.3l-0.8-3.6l1.3-2.8l0.5-5l-1.6-4l-3.2-1.7l-0.8-2.6l0.6-3.6l-10.7-0.3l-2.7-7.4l1.6-0.1 l-0.3-2.8l-1.2-1.8l-0.5-3.7l-3.3-1.9l-3.5,0.1l-2.5-1.9l-3.8-1.2l-2.4-2.4l-6.3-1l-6.4-5.7l0.3-4.3l-0.9-2.5l0.4-4.7l-7.3,1.1 l-2.8,2.3l-4.8,2.6l-1.1,1.9l-2.9,0.2l-4.2-0.6l5.5,10.3l-1.1,2.1l0.1,4.5l0.3,5.4l-1.9,3.2l1.2,2.4l-1.1,2.1l2.8,5.3L591,684 l3.1,4.3l1.2,4.6l3.2,2.7l-1.1,6.2l3.7,7.1l3.1,8.8l3.8-0.9l4-5.7l7.4,1.5l3.7,4.6l1.6-5.1l6.3,0.3l1,1.3l1.5-7.6l-0.2-3.4l2.1-5.6 l9.5-1.9l5.1,0.1l5.4,3.3L655.7,700.5L655.7,700.5z"
    },
    BA: {
      d: "M1062.2,284.9l-2.3,0.1l-1,1.3l-1.9-1.4l-0.9,2.5l2.7,2.9l1.3,1.9l2.5,2.3l2,1.4l2.2,2.5l4.7,2.4l0.4-3.4l1.5-1.4 l0.9-0.6l1.2-0.3l0.5-2.9l-2.7-2.3l1-2.7h-1.8l0,0l-2.4-1.4l-3.5,0.1L1062.2,284.9L1062.2,284.9z"
    },
    BW: {
      d: "M1116.7,685l-1-0.5l-3.2,1.5h-1.6l-3.7,2.5l-2-2.6l-8.6,2.2l-4.1,0.2l-0.9,22.7l-5.4,0.2l-0.6,18.5l1.4,1l3,6.1 l-0.7,3.8l1.1,2.3l4-0.7l2.8-2.8l2.7-1.9l1.5-3.1l2.7-1.5l2.3,0.8l2.5,1.8l4.4,0.3l3.6-1.5l0.6-2l1.2-3l3-0.5l1.7-2.4l2-4.3l5.2-4.7 l8-4.7l-3.4-2.9l-4.2-0.9l-1.5-4.1l0.1-2.2l-2.3-0.7l-6-7l-1.6-3.7l-1.1-1.1L1116.7,685L1116.7,685z"
    },
    BR: {
      d: "M659,560.1l-1.4,0.2l-3.1-0.5l-1.8,1.7l-2.6,1.1l-1.7,0.2l-0.7,1.3l-2.7-0.3l-3.5-3l-0.3-2.9l-1.4-3.3l1-5.4 l1.6-2.2l-1.2-3l-1.9-0.9l0.8-2.8l-1.3-1.5l-2.9,0.3l0.7,1.8l-2.1,2.4l-6.4,2.4l-4,1l-1.7,1.5l-4.4-1.6l-4.2-0.8l-1,0.6l2.4,1.6 l-0.3,4.3l0.7,4l4.8,0.5l0.3,1.4l-4.1,1.8l-0.7,2.7l-2.3,1l-4.2,1.5l-1.1,1.9l-4.4,0.5l-3-3.4l-1.1,0.8l-1-3.8l-1.6-2l-1.9,2.2 l-10.9-0.1v3.9l3.3,0.7l-0.2,2.4l-1.1-0.6l-3.2,1v4.6l2.5,2.4l0.9,3.6l-0.1,2.8l-2.2,17.4l-5.1-0.3l-0.7,1l-4.6,1.2l-6.2,4.3l-0.4,3 l-1.3,2.2l0.7,3.4l-3.3,1.9l0.1,2.7L562,620l2.6,5.8l3.3,3.8l-1,2.8l3.7,0.3l2.3,3.4l4.9,0.2l4.4-3.8l0.2,9.7l2.6,0.7l3-1.1l4.2,0.6 l2.9-0.2l1.1-1.9l4.8-2.6l2.8-2.3l7.3-1.1l-0.4,4.7l0.9,2.5l-0.3,4.3l6.4,5.7l6.3,1l2.4,2.4l3.8,1.2l2.5,1.9l3.5-0.1l3.3,1.9 l0.5,3.7l1.2,1.8l0.3,2.8l-1.6,0.1l2.7,7.4l10.7,0.3l-0.6,3.6l0.8,2.6l3.2,1.7l1.6,4l-0.5,5l-1.3,2.8l0.8,3.6l-1.6,1.3l1.9,3.6 l0.4,8.6l6,1.2l2.1-1.2l3.9,1.7l1.2,1.9l1,5.8l0.9,2.5l2,0.3l2-1.1l2.1,1.2l0.3,3.5l-0.3,3.8l-0.7,3.6l2.6-1.2l3.1,3.7l0.5,5.1 l-4.2,3.5l-3.3,2.6l-5.3,6.2l-5.9,8.6l3.4-0.7l6.2,4.9l1.9-0.2l6.2,4.1l4.8,3.5l3.8,4.3l-1.9,3l2.1,3.7l2.9-3.7l1.5-6l3.2-3l3.9-5 l4.5-11.2l3.4-3.5l0.8-3.1l0.3-6.4l-1.3-3.5l0.3-4.8l4.1-6.3l6-5.1l6-1.8l3.6-2.9l8.5-2.4h5.9l1.1-3.8l4.2-2.8l0.6-6.5l5.1-8.3 l0.5-8.5l1.6-2.6l0.3-4.1l1.1-9.9l-1-11.9l1.4-4.7l1.4-0.1l3.9-5.5l3.3-7.2l7.7-8.8l2.7-4.2l2-10.5l-1-3.9l-2-8.1l-2.1-2l-4.8-0.2 l-4.3-1.9l-7.3-7.1l-8.4-5.3l-8.4,0.3l-10.9-3.4l-6.5,2l0.8-3.5l-2.7-3.8l-9.4-3.8l-7.1-2.3l-4.2,4.1l-0.3-6.3l-9.9-1l-1.7-2 l4.2-5.2l-0.1-4.4l-3-1l-3-11.2l-1.3-3.5l-1.9,0.3l-3.5,5.8l-1.8,4.7l-2.1,2.4l-2.7,0.5l-0.8-1.8l-1.2-0.3l-1.8,1.8l-2.4-1.3 l-3.2-1.4l-2.7,0.7l-2.3-0.6l-0.5,1.8l0.9,1.3l-0.5,1.3L659,560.1L659,560.1z"
    },
    VG: {
      d: "M619.2,455.1l0.3-0.2l-0.2-0.1h-0.4l-0.3,0.2l0.1,0.1H619.2L619.2,455.1z M620.3,454.7l0.4-0.4l-0.5,0.1l-0.2,0.2 l0.1,0.1h0.1L620.3,454.7L620.3,454.7z M621.1,452.9h-0.2h-0.5l0,0l0.1,0.1h0.3l0.3,0.1l0,0L621.1,452.9L621.1,452.9z"
    },
    BN: {
      d: "M1617.8,543.4l2.7,3.3l1.1-2.2l2.7,0.2l0.1-4.1l0.1-3.1l-4.6,3.5L1617.8,543.4L1617.8,543.4z"
    },
    BG: {
      d: "M1121.6,294.3l-3-0.7l-4-2.2l-5.8,1.4l-2.3,1.6l-7.5-0.3l-4-1l-1.9,0.5l-1.8-2.6l-1.1,1.4l0.7,2.3l2.8,2.6l-1.7,1.9 l-0.7,2l0.6,0.7l-0.7,0.9l2.8,2l0.8,4.1l3.8,0.2l3.9-1.7l3.9,2.1l4.6-0.6l-0.3-3l5-2l4.5,0.8l-2.1-3.5l1.3-4.4L1121.6,294.3 L1121.6,294.3z"
    },
    BF: {
      d: "M978.8,477.2h-3.6l-1.4-1.2l-3,0.9l-5.2,2.6l-1.1,2l-4.3,2.9l-0.8,1.6l-2.3,1.3l-2.7-0.9l-1.6,1.6l-0.8,4.4 l-4.5,5.2l0.2,2.2l-1.6,2.7l0.4,3.7l2.5,1.4l1,2.1l2.5,1.3l1.9-1.6l2.7-0.2l3.8,1.6l-0.8-4.8l0.2-3.6l9.7-0.3l2.4,0.5l1.8-1l2.6,0.5 l4.9,0.1l1.9-0.7l1.2-2.8l2.7-0.6l1.2-1.9l0.1-4.4l-6.4-1.4l-0.2-3.1l-3.1-4.1l-0.8-2.9L978.8,477.2L978.8,477.2z"
    },
    BI: {
      d: "M1148.2,590l-0.3-2.5l0,0l-3-0.4l-1.7,3.6l-3.5-0.5l1.4,2.9l0.1,1.1l2,6.1l-0.1,0.3l0.6-0.1l2.1-2.3l2.2-3.3 l1.4-1.4v-2L1148.2,590L1148.2,590z"
    },
    KH: {
      d: "M1574.8,481.8l-5.2-2.3l-2,4.3l-4.9-2.4l-5.3-1l-7.1,1.3l-3,5.2l2.1,7.7l3.4,6.6l2.6,3.3l4.7,0.9l4.7-2.5l5.8-0.5 l-2.8-3.8l8.9-4.9l-0.1-7.7L1574.8,481.8L1574.8,481.8z"
    },
    CM: {
      d: "M1060.1,502.9l0.2-4.3l-0.5-4.2l-2.2-4.1l-1.6,0.4l-0.2,2l2.3,2.6l-0.6,1.1l-0.3,2.1l-4.6,5l-1.5,4l-0.7,3.3 l-1.2,1.4l-1.1,4.5l-3,2.6l-0.8,3.2l-1.2,2.6l-0.5,2.6l-3.9,2.2l-3.2-2.6l-2.1,0.1l-3.3,3.7l-1.6,0.1l-2.7,6.1l-1.4,4.5v1.8l1.4,0.9 l1.1,2.8l2.6,1.1l2.2,4.2l-0.8,5l9.2,0.2l2.6-0.4l3.4,0.8l3.4-0.8l0.7,0.3l7.1,0.3l4.5,1.7l4.5,1.5l0.4-3.5l-0.6-1.8l-0.3-2.9 l-2.6-2.1l-2.1-3.2l-0.5-2.3l-2.6-3.3l0.4-1.9l-0.6-2.7l0.4-5l1.4-1.1l2.7-6.5l0.9-1.7l-1.8-4.4l-0.8-2.6l-2.5-1.1l-3.3-3.7l1.2-3 l2.5,0.6l1.6-0.4l3.1,0.1L1060.1,502.9L1060.1,502.9z"
    },
    CA: {
      d: "M659,276.7l-0.7-3l-2.5,1.9l0.5,2.1l5.6,2.6l1.9-0.4l3.3-2.5l-4.7,0.1L659,276.7L659,276.7z M673.4,260.8l0.2-1.1 l-4.1-2.6l-5.9-1.6l-1.9,0.6l3.5,2.9l5.7,1.9L673.4,260.8L673.4,260.8z M368.1,264.5l0.2-3.4l-3.2-2.6l-0.4-2.9l-0.1-2.1l-4.1-0.7 l-2.4-0.9l-4.1-1.4l-1.4,1.5l-0.6,3.3l4.3,1.1l-0.4,1.8l2.9,2.2v2.2l6.3,2.8L368.1,264.5L368.1,264.5z M704.2,251l3.9-3.8l1.4-1.7 l-2.1-0.3l-4.9,2.2l-4.2,3.5l-8.1,9.8l-5.3,3.7l1.6,1.7l-3.8,2.2l0.2,1.9l9.6,0.1l5.4-0.3l4.4,1.5l-4.4,2.9l2.9,0.2l7.3-5.4l1.2,0.8 l-2.5,5.1l3,1.2l2.3-0.2l3.5-5.5l-0.5-3.9l0.3-3.3l-3.7,1.1l2.8-4.6l-4.3-1.9l-2.7,1.5l-3.9-1.7l2.4-2.1l-2.9-1.3l-3.8,2L704.2,251 L704.2,251z M347.4,229.8l-1.9,2l-1.4,2.6l0.9,1.9l-0.6,2.8l0.7,2.8h1.9l-0.2-4.9l7.1-6.9l-4.9,0.5L347.4,229.8L347.4,229.8z M628.3,182.8l-0.4-1.2l-1.7-0.1l-2.8,1.7l-0.4,0.4l0.1,1.7l1.7,0.5L628.3,182.8L628.3,182.8z M618.7,179.6l0.8-1.1l-6-0.1l-4.9,2.7 v1.5l3,0.2L618.7,179.6L618.7,179.6z M615.6,163l-2.7-0.5l-5,5.2l-3.6,4.4l-5.7,2.8l6.3-0.6l-0.8,3.4l8.2-3l6.2-3l0.8,2.6l5.9,1.3 l4.9-1.8l-1.9-1.8l-3.4,0.4l1.3-2.7l-3.7-1.7l-3.4-1.9l-1.5-1.5l-2.8,0.9L615.6,163L615.6,163z M660.2,154.8l3.7-1.7l1-0.7l1.4-2.3 l-2.3-1.5l-4.2,0.7l-3.8,3.1l-0.7,2.6L660.2,154.8L660.2,154.8z M586.4,144.1l-0.8-2l-0.3-1l-1.6-1l-3-1.5l-4.9,2.3l-5,1.7l3.5,2.4 l3.8-0.6l4.1,1.6L586.4,144.1z M608.8,142l-6.6-1l5.7-2.6l-0.4-6l-1.9-2.3l-4.5-0.8l-8.1,3.8l-5.5,5.8l2.9,2.1l1.6,3.3l-6.3,5.5 l-3.2-0.2l-6.2,4.4l4.2-5.2l-4.8-1.8l-4.5,0.9l-2.4,3.4l-5.9-0.1l-7.2,0.8l-5.1-2.4l-5,0.4l-1.5-2.9l-2.1-1.3l-3.8,0.5l-5.2,0.3 l-4.4,1.8l2,2.3l-7,2.8l-1.4-3.3l-4.4,1l-11.8,0.6l-6.4-1.2l8.5-2.6l-2.8-2.8l-4.4,0.4l-4.7-1l-7.5-1.9l-3.8-2.3l-4.5-0.3l-3.3,1.6 l-5.9,0.9l3.9-4.1l-9.4,3.6l-1.4-4.7l-2.1-0.6l-3.8,2.5l-4.5,1.2l-0.2-2.2l-8.2,1.4l-8.8,2.3l-5.2-0.6l-7,1.6l-6.2,2.3l-3.7-0.5 l-3.3-2.6l-5.9-1.3l0,0l-24.3,20.2l-35.4,32.4l4.2,0.1l2.7,1.6l0.6,2.6l0.2,3.9l7.6-3.3l6.4-1.9l-0.5,3l0.7,2.4l1.7,2.7l-1.1,4.2 l-1.5,6.8l4.6,3.8l-3.1,3.7l-5.1,2.9l0,0l-2.5,3.1l2.1,4.4l-3.1,4.9l4.1,2.6l-3.6,3.7l-1.3,5.5l6.9,2.5l1.6,2.7l5.4,6.1h0.7h13.9 h14.6h4.8h15h14.5h14.7h14.8h16.7h16.8h10.1l1.3-2.4h1.6l-0.8,3.4l1,1l3.2,0.4l4.6,1l3.8,1.9l4.4-0.8l5.3,1.6l0,0l3.2-2.4l3.2-1 l1.8-1.5l1.5-0.8l4,1.2l3.3,0.2l0.8,0.8l0.1,3.5l5.2,1l-1.7,1.7l1.2,1.9l-1.9,2.3l1.8,0.8l-1.9,2.1l0,0l1.2,0.2l1.3-0.9l0.5,1.4 l3.4,0.7l3.8,0.1l3.8,0.6l4,1.2l0.8,2l1.4,4.7l-2.4,2l-3.8-0.8l-1-3.8l-0.9,3.9l-3.8,3.4l-0.8,2.9l-1.1,1.7l-4.1,2l0,0l-3.7,3.4 l-2,2.2l2.7,0.4l4.5-2l2.9-1.7l1.6-0.3l2.6,0.6l1.7-0.9l2.8-0.8l4.7-0.8l0,0l0,0l0.3-1.8l-0.3,0.1l-1.7,0.3l-1.8-0.6l2.3-2.1 l1.9-0.7l3.9-0.9l4.6-0.9l1.8,1.2l1.9-1.4l1.9-0.8l0.9,0.4l0.1,0.1l6.7-4.2l2.7-1.2h7.7h9.3l1-1.6l1.7-0.3l2.5-0.9l2.7-2.8l3.2-4.9 l5.5-4.7l1.1,1.7l3.7-1.1l1.5,1.8l-2.8,8.5l2.1,3.5l5.9-0.8l8.1-0.2l-10.4,5.1l-1.5,5.2l3.7,0.5l7.1-4.5l5.8-2.4l12.2-3.7l7.5-4.1 l-2.6-2.2l1-4.5l-7.1,7l-8.6,0.8l-5.5-3.1l-0.1-4.6l0.6-6.8l6.1-4.1l-3.3-3.1l-7.6,0.6l-12.1,5.2l-10.9,8.2l-4.6,1l7.8-5.7l10.1-8.3 l7.2-2.7l5.7-4.4l5.2-0.5l7.3,0.1l10,1.3l8.6-1l7.8-5.1l8.7-2.2l4.2-2.1l4.2-2.3l2-6.8l-1.1-2.3l-3.4-0.8v-5.1l-2.3-1.9l-6.9-1.6 l-2.8-3.4l-4.8-3.4l3.4-3.7l-2-7.1l-2.6-7.5l-1-5.2l-4.3,2.7l-7.4,6.5l-8.1,3.2l-1.6-3.4l-3.7-1l2.2-7.3l2.6-4.9l-7.7-0.5l-0.1-2.2 l-3.6-3.3l-3-2l-4.5,1.5l-4.2-0.5l-6.6-1.6l-3.9,1.3l-3.8,9l-1,5.3l-8.8,6.1l3.1,4.5l0.5,5l-1.7,4l-4.7,4.1L610,224l-9,2.8l1.7,3.2 l-2.2,9.6l-5.6,6.3l-4.6,1.9l-4.4-5.8l-0.1-6.8l1.7-6l3.6-5.2l-4.8-0.6l-7.5-0.4l-3.6-2.5l-4.8-1.6l-1.7-2.9l-3.3-2.2l-7-2.6 l-7.1,1.2l0.7-4.5l1.5-5.5l-6-1l4.9-6.8l4.9-4.6l9.4-6.5l8.6-4.6l5.6-0.7l2.9-3.7l5.1-2.4l6.4-0.4l7.7-3.8l2.9-2.4l7.4-4.7l3.2-2.8 l3.2,1.7l6.5-0.9L637,155l2.3-2.7l-0.8-2.9l5-2.9l1.7-2.7l-3.5-2.6l-5.4-0.8l-5.5-0.4l-4.6,5.9l-6.5,4.6l-7.2,4l-1.3-3.7l4.2-4 l-2.2-3.5l-8.7,4.2L608.8,142L608.8,142z M533.3,123.1l-2.8-1l-14.1,3.2l-5.1,2l-7.8,3.9l5.4,1.4l6.2-0.1l-11.5,2.1v1.9l5.6,0.1 l9-0.4l6.5,1.2l-6.2,1l-5.5-0.3l-7.1,0.9l-3.3,0.6l0.6,4.2l4.2-0.6l4.1,1.5l-0.3,2.5l7.8-0.5l11.2-0.8l9.4-1.8l5-0.4l5.7,1.5 l6.7,0.8l3.1-1.9l-0.7-2.1l7-0.4l2.6-2.4l-5-2.5l-4.2-2.6l2.4-3.6l2.7-5.1l-2.2-2l-3-0.9l-4.2,0.8l-2.8,5.3l-4.3,2.1l2.2-5.1 l-1.7-1.7l-7.3,2.7L539,124l-10.4,1.5L533.3,123.1L533.3,123.1z M572.4,121.6l-1.7-1.1l-5.4,0.2l-2.1,0.7l2.2,3.6 C565.4,125,572.4,121.6,572.4,121.6z M680.1,123.2l-4.4-2.8l-8.4-0.5l-2.1,0.3l-1.7,1.8l2,2.8l0.9,0.3l4.8-0.7l4.1,0.1l4.1,0.1 L680.1,123.2L680.1,123.2z M640.7,122.9l5.7-3.2l-11.2,1.3l-5.8,2.1l-7.1,4.6l-3.3,5.2l5.6,0.1l-6.1,2.3l1.8,1.9l5.9,0.8l7.3,1.5 l13.8,1.2l7.9-0.6l3.2-1.6l2,1.8l3.3,0.3l2,3.3l-3.5,1.4l7.1,1.8l4.6,2.6l0.5,1.9L674,154l-8.6,5.4l-3.2,2.7l0.2,2l-9.2,0.7l-8,0.1 l-5.4,4.2l2.4,1.9l13-0.9l0.9-1.6l4.7,2.7l4.7,2.9l-2.4,1.6l3.8,2.8l7.6,3.3l10.7,2.3l0.3-2l-2.8-3.5l-3.5-4.9l8.5,4.6l4.7,1.5 l3.6-4.1v-5.6l-1-1.5l-4.4-2.5l-2.7-3.3l2.3-3.2l5.8-0.7l3.8,5.4l4,2.4l10.7-6.5l3.3-3.9l-6.4-0.3l-3.2-5.1l-5.9-1.2l-7.7-3.5l9-2.5 l-0.8-5l-2.2-2.1l-8.3-2.1l-1.9-3.3l-8.2,1.2l1.1-2.3l-3.6-2.5l-6.8-2.6l-5.2,2.1l-9,1.5l3.3-3.4l-2.3-5.3l-11.6,2.1l-7.1,4.1 L640.7,122.9L640.7,122.9z M590.7,119.5l-7.1,2.4l0.9,3.4l-7.4-0.7l-1.7,1.7l5.8,3.9l0.9,2l3.4,0.5l8.4-2l5.1-4.7l-3.8-2.2l6-2.4 l0.5-1.5l-7.5,0.6L590.7,119.5L590.7,119.5z M613,124.9l5.6-1l10-4.5l-6.1-1.2l-7.8-0.2l-5.2,1.4l-4.2,2.1l-2.5,2.6l-1.8,4.5 l4.3,0.2L613,124.9z M498.3,132.1l2.6-2.3l9.1-3.6l13.8-3.6l6.4-1.3l-1.6-2.1l-1.9-1.5l-9.4-0.2l-4.1-1.1l-14,0.8l-0.3,3.1l-7.6,3.3 l-7.4,3.8l-4.3,2.2l5.9,2.7l-0.6,2.3L498.3,132.1L498.3,132.1z M622.4,113.8l0.3-1.6l-1.4-1.7l-6.9,1.3L610,114l3.2,1.3l5.1,0.4 L622.4,113.8L622.4,113.8z M613.7,105.2l-1.1,0.7l-4.8-0.3l-7.6,1.6l-3.8-0.1l-4.3,3.8l6.6-0.4l-3.4,2.9l3.2,0.8l6.8-0.5l5.8-3.7 l2.8-2.5L613.7,105.2z M574.6,107.7l1.8-2.3l-3.1-0.5l-5.7,1.7l-0.7,4.7l-6.1-0.4L558,108l-8.2-1.6l-5.4,1.4l-11.6,4.8l4.1,0.8 l17.8-0.5l-10.6,2.2l-1.5,1.6l5.9-0.1l12.2-2.2l13.8-0.8l5.1-2.3l2.3-2.4l-3.7-0.2l-4.3,0.8C573.9,109.5,574.6,107.7,574.6,107.7z M629.8,103.4l-7.1-0.3l-3.8,2l2.6,1.5l7,0.6l1.4,2.1l-2.2,2.4l-1.5,2.8l8.5,1.6l5.5,0.6l8-0.1l11.6-0.8l4.3,0.6l6.7-1l3.5-1.4l1-2 l-2.3-1.9l-5.8-0.3l-8,0.4l-7,1.1l-5.1-0.4l-4.8-0.3l-1.2-1.1l-3.1-1.1l2.8-1.9l-1.4-1.6l-7.3,0.1L629.8,103.4L629.8,103.4z M554.8,100.8l-6,0.7l-5.5-0.1l-12.1,3.1l-11.6,3.7l0,0l3.6,1l7-0.7l9.8-2.1l3.8-0.3l5.2-1.6L554.8,100.8z M635.3,101.4l1-0.5 l-1.5-0.9l-7.2-0.1l-0.6,1.3l6.4,0.3L635.3,101.4L635.3,101.4z M576.9,100.6l3.2-1.4l-4.1-0.8l-5.9,0.5l-5.1,1.5l3.3,1.5 C568.3,101.9,576.9,100.6,576.9,100.6z M584.7,96.4l-3.3-0.9l-1.6-0.2l-5.7,1.3l-1,0.7h6L584.7,96.4z M631.1,98.9l3-1.7l-2.3-1.6 l-1.7-0.3l-4.4-0.1l-2.1,1.8l-0.7,1.8l1.6,1.1L631.1,98.9L631.1,98.9z M617.4,97.7l0.1-2.2l-7.4-1.7l-6.1-0.6l-2.1,1.7l2.8,1.1 l-5.3,1.4l7.7,0.2l4,1.5l5.2,0.5L617.4,97.7z M671.1,91.6l0.6-2.8L667,88l-4.7-0.9l-1.6-2.2l-8.2,0.2l0.3,0.9l-3.9,0.3l-4.1,1.3 l-4.9,1.9l-0.3,1.9l2,1.5h6.5l-4.3,1.2l-2.1,1.6l1.6,1.9l6.7,0.6l6.8-0.4l10.5-3.4l6.4-1.3L671.1,91.6z M749.6,77.8l-7-0.2l-6.9-0.3 l-10.2,0.6l-1.4-0.4l-10.3,0.2l-6.4,0.4l-5.1,0.6l-5,2l-2.3-1l-3.9-0.2l-6.7,1.4l-7.4,0.6l-4.1,0.1l-6,0.8l-1.1,1.3l2.5,1.2l0.8,1.6 l4.4,1.5l12.4-0.3l7.2,0.5l-7.2,1.5l-2.2-0.4l-9.3-0.2l-1.1,2.2l3,1.7l-2.8,1.6l-7.5,1.1l-4.9,1.7l4.8,0.9l1.7,3l-7.5-2l-2.5,0.3 l-2,3.4l-8,1.1l-2,2.3l6.7,0.3l4.9,0.6l11.7-0.8l8.4,1.4l12.6-3l1-1.1l-6.4,0.2l0.5-1.1l6.5-1.4l3.6-1.9l6.8-1.3l5-1.6l-0.8-2.2 l3.3-0.8l-4.3-0.6l11.1-0.4l3.2-0.9l7.9-0.8l9.3-3.5l6.8-1.1l10.3-2.5h-7.4l3.9-0.9l9-0.8l9.7-1.6l1.1-1.1l-5.2-1l-6.7-0.4 L749.6,77.8L749.6,77.8z"
    },
    CV: {
      d: "M841.4,477.6l0.1-0.4l-0.2-0.6l-0.3-0.1l-0.6,0.4l-0.1,0.3l0.1,0.3l0.3,0.3l0.3,0.1L841.4,477.6L841.4,477.6z M847.7,475.9l0.4-0.2V475l-0.1-0.3h-0.4l-0.2,0.4v0.1v0.4L847.7,475.9L847.7,475.9L847.7,475.9z M846.3,476.7l-0.5-0.9l-0.3-0.1 l-0.6-0.7v-0.3l-0.3-0.1v0.2v0.4l-0.2,0.5v0.5l0.4,0.8l0.4,0.2l0.7,0.1L846.3,476.7L846.3,476.7z M849.4,468.9v0.5l-0.3,0.7l0.5,0.3 l0.3,0.1l0.6-0.4l0.2-0.5l-0.1-0.3l-0.3-0.3l-0.3-0.1l-0.1,0.1L849.4,468.9L849.4,468.9z M843,466.4l-1-0.1l-0.6-0.2h-0.1v0.3 l0.4,0.8l0.2-0.5l0.2-0.1l0.8,0.2l0.4-0.1l-0.1-0.1L843,466.4L843,466.4z M849.7,466.2l-0.1-0.5V465h-0.2l-0.3,0.2l0.1,0.7l0.1,0.1 l0.2,0.5L849.7,466.2L849.7,466.2z M838.6,465.2V465l-0.3-0.5l-0.3,0.1l-0.4,0.2l-0.1,0.3l0.4,0.2h0.2L838.6,465.2L838.6,465.2z M837.1,464.3l0.8-0.6l0.2-0.3l-0.2-0.5l-0.5-0.1l-1.2,0.6l-0.1,0.2l0.1,0.3l0.1,0.5l0.2,0.1L837.1,464.3L837.1,464.3z"
    },
    KY: {
      d: "M527,449.1l-0.1-0.3l-0.1,0.1v0.6h0.5h0.2l0.3-0.2h0.6l-0.1-0.2l-0.8-0.1l-0.1,0.1l-0.2,0.1L527,449.1L527,449.1z M535,446.8L535,446.8l-0.1-0.1h-0.1l-0.3,0.1h-0.1h-0.1l-0.1,0.1l-0.1,0.1h0.2l0.4-0.2H535L535,446.8L535,446.8z M535.8,446.7 l0.5-0.2l0,0l-0.1-0.1h-0.1l-0.1,0.1h-0.1l-0.5,0.3h0.2L535.8,446.7L535.8,446.7z"
    },
    CF: {
      d: "M1110.5,517.3l-0.5-0.3l-2-1.8l-0.3-2l0.8-2.6V508l-3.3-4l-0.7-2.7l-3.5,1.1l-2.8,2.5l-4,7l-5.2,2.9l-5.4-0.4 l-1.6,0.6l0.6,2.3l-2.9,2.2l-2.3,2.5l-7.1,2.4l-1.4-1.4l-0.9-0.2l-1,1.7l-4.7,0.4l-2.7,6.5l-1.4,1.1l-0.4,5l0.6,2.7l-0.4,1.9 l2.6,3.3l0.5,2.3l2.1,3.2l2.6,2.1l0.3,2.9l0.6,1.8l2.9-5.9l3.3-3.4l3.8,1.1l3.6,0.4l0.5-4.5l2.2-3.2l3-2l4.6,2.1l3.6,2.4l4.1,0.6 l4.2,1.2l1.6-3.8l0.8-0.5l2.6,0.6l6.2-3.1l2.2,1.3l1.8-0.2l0.9-1.5l2-0.6l4.3,0.7l3.6,0.1l1.8-0.6l-0.9-2.1l-4.2-2.5l-1.5-3.8 l-2.4-2.7l-3.8-3.4l-0.1-2l-3.1-2.6L1110.5,517.3L1110.5,517.3z"
    },
    TD: {
      d: "M1108.4,447.6l-22.4-12.2l-22.3-12.2l-5.4,3.5l1.6,9.9l2,1.6l0.2,2.1l2.3,2.2l-1.1,2.7l-1.8,12.9l-0.2,8.3l-6.9,6 l-2.3,8.4l2.4,2.3v4.1l3.6,0.2l-0.5,2.9l2.2,4.1l0.5,4.2l-0.2,4.3l3.1,5.8l-3.1-0.1l-1.6,0.4l-2.5-0.6l-1.2,3l3.3,3.7l2.5,1.1 l0.8,2.6l1.8,4.4l-0.9,1.7l4.7-0.4l1-1.7l0.9,0.2l1.4,1.4l7.1-2.4l2.3-2.5l2.9-2.2l-0.6-2.3l1.6-0.6l5.4,0.4l5.2-2.9l4-7l2.8-2.5 l3.5-1.1v-1.6l-2.1-1.8l-0.1-3.7l-1.2-2.5l-2,0.4l0.5-2.4l1.4-2.6l-0.7-2.7l1.8-1.9l-1.2-1.5l1.4-3.9l2.4-4.7l4.8,0.4L1108.4,447.6 L1108.4,447.6z"
    },
    CL: {
      d: "M648.4,905.2l-3.7-0.7l-3.3,2.5l0.2,4.1l-1.2,2.8l-7.2-2.2l-8.6-4l-4.5-1.3l9.7,6.8l6.3,3.2l7.5,3.4l5.3,0.9 l4.3,1.8l3,0.5l2.3,0.1l3.2-1.8l0.5-2.4l-2.9-0.2h-5L648.4,905.2L648.4,905.2z M601.1,708.9l-3.7-7.1l1.1-6.2l-3.2-2.7l-1.2-4.6 L591,684l-1.2,3.3l-2.7,1.6l2.1,9l1.5,10.4l-0.1,14.2v13.2l0.9,12.3l-1.9,7.8l2.1,7.8l-0.5,5.3l3.2,9.5l-0.1,9.5l-1.2,10.2 l-0.6,10.5l-2.1,0.2l2.4,7.3l3.3,6.3l-1.1,4.3l1.9,11.6l1.5,8.8l3.5,0.9l-1.1-7.7l4,1.6l1.8,12.7l-6.4-2.1l2,10.2l-2.7,5.5l8.2,1.8 l-3.4,4.8l0.2,6l5,10.6l4.2,4.1l0.2,3.6l3.3,3.8l7.5,3.5l0,0l7.4,4.2l6.2,2l2-0.1l-1.8-5.7l3.4-2.2l1.7-1.5h4.2l-4.8-0.9l-12-0.8 l-3.5-3.6l-1.8-4.6l-3.1,0.4l-2.6-2.2l-3.1-6.6l2.7-2.7l0.1-3.9l-1.8-3.2l0.7-5.3l-1.1-8.2l-1.8-3.7l1.8-1.1l-1.3-2.3l-2.8-1.3 l0.8-2.6l-3.1-2.3l-3.6-7.1l1.6-1.2l-3.3-7.6l-0.7-6.4l-0.3-5.7l2.5-2.4l-3.3-6.3l-1.5-5.9l2.9-4.3l-1.4-5.4l1.6-6.2l-1.3-5.9 l-1.6-1.2l-4.9-10.9l2.1-6.5l-1.7-6.2l0.9-5.8l2.6-5.9l3.2-4l-2-2.5l0.9-2l-1.6-10.6l5.6-3.2l1.1-6.6l-0.9-1.6l-3.8,0.9L601.1,708.9 L601.1,708.9z"
    },
    CN: {
      d: "M1587.2,453.3l0.6-3.6l2-2.8l-1.6-2.5l-3.2-0.1l-5.8,1.8l-2.2,2.8l1,5.5l4.9,2L1587.2,453.3L1587.2,453.3z M1600.4,256.8l-6.1-6.1l-4.4-3.7l-3.8-2.7l-7.7-6.1l-5.9-2.3l-8.5-1.8l-6.2,0.2l-5.1,1.1l-1.7,3l3.7,1.5l2.5,3.3l-1.2,2l0.1,6.5 l1.9,2.7l-4.4,3.9l-7.3-2.3l0.6,4.6l0.3,6.2l2.7,2.6l2.4-0.8l5.4,1l2.5-2.3l5.1,2l7.2,4.3l0.7,2.2l-4.3-0.7l-6.8,0.8l-2.4,1.8 l-1.4,4.1l-6.3,2.4l-3.1,3.3l-5.9-1.3l-3.2-0.5l-0.4,4l2.9,2.3l1.9,2.1l-2.5,2l-1.9,3.3l-4.9,2.2l-7.5,0.2l-7.2,2.2l-4.4,3.3l-3.2-2 l-6.2,0.1l-9.3-3.8l-5.5-0.9l-6.4,0.8l-11.2-1.3l-5.5,0.1l-4.7-3.6l-4.9-5.7l-3.4-0.7l-7.9-3.8l-7.2-0.9l-6.4-1l-3-2.7l-1.3-7.3 l-5.8-5l-8.1-2.3l-5.7-3.3l-3.3-4.4l-1.7,0.5l-1.8,4.2l-3.8,0.6l2.5,6.2l-1.6,2.8l-10.7-2l1,11.1l-2,1.4l-9,2.4l8.7,10.7l-2.9,1.6 l1.7,3.5l-0.2,1.4l-6.8,3.4l-1,2.4l-6.4,0.8l-0.6,4l-5.7-0.9l-3.2,1.2l-4,3l1.1,1.5l-1,1.5l3,5.9l1.6-0.6l3.5,1.4l0.6,2.5l1.8,3.7 l1.4,1.9l4.7,3l2.9,5l9.4,2.6l7.6,7.5l0.8,5.2l3,3.3l0.6,3.3l-4.1-0.9l3.2,7l6.2,4l8.5,4.4l1.9-1.5l4.7,2l6.4,4.1l3.2,0.9l2.5,3.1 l4.5,1.2l5,2.8l6.4,1.5l6.5,0.6l3-1.4l1.5,5.1l2.6-4.8l2.6-1.6l4.2,1.5l2.9,0.1l2.7,1.8l4.2-0.8l3.9-4.8l5.3-4l4.9,1.5l3.2-2.6 l3.5,3.9l-1.2,2.7l6.1,0.9l3-0.4l2.7,3.7l2.7,1.5l1.3,4.9l0.8,5.3l-4.1,5.3l0.7,7.5l5.6-1l2.3,5.8l3.7,1.3l-0.8,5.2l4.5,2.4l2.5,1.2 l3.8-1.8l0.6,2.6l0.7,1.5l2.9,0.1l-1.9-7.2l2.7-1l2.7-1.5h4.3l5.3-0.7l4.1-3.4l3,2.4l5.2,1.1l-0.2,3.7l3,2.6l5.9,1.6l2.4-1l7.7,2 l-0.9,2.5l2.2,4.6l3-0.4l0.8-6.7l5.6-0.9l7.2-3.2l2.5-3.2l2.3,2.1l2.8-2.9l6.1-0.7l6.6-5.3l6.3-5.9l3.3-7.6l2.3-8.4l2.1-6.9l2.8-0.5 l-0.1-5.1l-0.8-5.1l-3.8-2l-2.5-3.4l2.8-1.7l-1.6-4.7l-5.4-4.9l-5.4-5.8l-4.6-6.3l-7.1-3.5l0.9-4.6l3.8-3.2l1-3.5l6.7-1.8l-2.4-3.4 l-3.4-0.2l-5.8-2.5l-3.9,4.6l-4.9-1.9l-1.5-2.9l-4.7-1l-4.7-4.4l1.2-3l5-0.3l1.2-4.1l3.6-4.4l3.4-2.2l4.4,3.3l-1.9,4.2l2.3,2.5 l-1.4,3l4.8-1.8l2.4-2.9l6.3-1.9l2.1-4l3.8-3.4l1-4.4l3.6,2l4.6,0.2l-2.7-3.3l6.3-2.6l-0.1-3.5l5.5,3.6l0,0l-1.9-3.1l2.5-0.1 l-3.8-7.3l-4.7-5.3l2.9-2.2l6.8,1.1l-0.6-6l-2.8-6.8l0.4-2.3l-1.3-5.6l-6.9,1.8l-2.6,2.5h-7.5l-6-5.8l-8.9-4.5L1600.4,256.8 L1600.4,256.8z"
    },
    CO: {
      d: "M578.3,497.2l1.2-2.1l-1.3-1.7l-2-0.4l-2.9,3.1l-2.3,1.4l-4.6,3.2l-4.3-0.5l-0.5,1.3l-3.6,0.1l-3.3,3l-1.4,5.4 l-0.1,2.1l-2.4,0.7l-4.4,4.4l-2.9-0.2l-0.7,0.9l1.1,3.8l-1.1,1.9l-1.8-0.5l-0.9,3.1l2.2,3.4l0.6,5.4l-1.2,1.6l1.1,5.9l-1.2,3.7 l2,1.5l-2.2,3.3l-2.5,4l-2.8,0.4l-1.4,2.3l0.2,3.2l-2.1,0.5l0.8,2l5.6,3.6l1-0.1l1.4,2.7l4.7,0.9l1.6-1l2.8,2.1l2.4,1.5l1.5-0.6 l3.7,3l1.8,3l2.7,1.7l3.4,6.7l4.2,0.8l3-1.7l2.1,1.1l3.3-0.6l4.4,3l-3.5,6.5l1.7,0.1l2.9,3.4l2.2-17.4l0.1-2.8l-0.9-3.6l-2.5-2.4 v-4.6l3.2-1l1.1,0.6l0.2-2.4l-3.3-0.7v-3.9l10.9,0.1l1.9-2.2l1.6,2l1,3.8l1.1-0.8l-1.7-6.4l-1.4-2.2l-2-1.4l2.9-3.1l-0.2-1.5 l-1.5-1.9l-1-4.2l0.5-4.6l1.3-2.1l1.2-3.4l-2-1.1l-3.2,0.7l-4-0.3l-2.3,0.7l-3.8-5.5l-3.2-0.8l-7.2,0.6l-1.3-2.2l-1.3-0.6l-0.2-1.3 l0.8-2.4l-0.4-2.5l-1.1-1.4l-0.6-2.9l-2.9-0.5l1.8-3.7l0.9-4.5l1.8-2.4l2.2-1.8l1.6-3.2L578.3,497.2L578.3,497.2z"
    },
    KM: {
      d: "M1221.1,650.5l-0.4-0.4h-0.4v0.2l0.1,0.4l1.1,0.2L1221.1,650.5L1221.1,650.5z M1225,649L1225,649l-0.3,0.1l-0.1,0.2 l-0.1,0.3h-0.3h-0.2h-0.4l0.8,0.5l0.5,0.5l0.2,0.2l0.1-0.2l0.1-0.7L1225,649L1225,649z M1219.4,647.9l0.2-0.3l-0.2-0.7l-0.4-0.8 l0.1-1.4l-0.2-0.2h-0.3l-0.1,0.1l-0.1,0.3l-0.3,2l0.4,0.6l0.3,0.1L1219.4,647.9L1219.4,647.9L1219.4,647.9z"
    },
    CG: {
      d: "M1080.3,549.9l-3.6-0.4l-3.8-1.1l-3.3,3.4l-2.9,5.9l-0.4,3.5l-4.5-1.5l-4.5-1.7l-7.1-0.3l-0.4,2.8l1.5,3.3l4.2-0.5 l1.4,1.2l-2.4,7.4l2.7,3.8l0.6,4.9l-0.8,4.3l-1.7,3l-4.9-0.3l-3-3l-0.5,2.8l-3.8,0.8l-1.9,1.6l2.1,4.2l-4.3,3.5l4.6,6.7l2.2-2.7 l1.8-1.1l2,2.2l1.5,0.6l1.9-2.4l3.1,0.1l0.4,1.8l2,1.1l3.4-4l3.3-3.1l1.4-2l-0.2-5.3l2.5-6.2l2.6-3.2l3.7-3.1l0.6-2l0.2-2.4l0.9-2.2 l-0.3-3.6l0.7-5.6l1.1-4l1.6-3.4L1080.3,549.9L1080.3,549.9z"
    },
    CR: {
      d: "M509.1,502.6l-1.4,1.3l-1.7-0.4l-0.8-1.3l-1.7-0.5l-1.4,0.8l-3.5-1.7l-0.9,0.8l-1.4,1.2l1.5,0.9l-0.9,2l-0.1,2 l0.7,1.3l1.7,0.6l1.2,1.8l1.2-1.6l-0.3-1.8l1.4,1.1l0.3,1.9l1.9,0.8l2.1,1.3l1.5,1.5l0.1,1.4l-0.7,1.1l1.1,1.3l2.9,1.4l0.4-1.2 l0.5-1.3l-0.1-1.2l0.8-0.7l-1.1-1l0.1-2.5l2.2-0.6l-2.4-2.7l-2-2.6L509.1,502.6L509.1,502.6z"
    },
    HR: {
      d: "M1065,280.4l-4-2.6l-1.6-0.8l-3.9,1.7l-0.3,2.5l-1.7,0.6l0.2,1.7l-2-0.1l-1.8-1l-0.8,1l-3.5-0.2l-0.2,0.1v2.2l1.7,2 l1.3-2.6l3.3,1l0.3,2l2.5,2.6l-1,0.5l4.6,4.5l4.8,1.8l3.1,2.2l5,2.3l0,0l0.5-1l-4.7-2.4l-2.2-2.5l-2-1.4l-2.5-2.3l-1.3-1.9l-2.7-2.9 l0.9-2.5l1.9,1.4l1-1.3l2.3-0.1l4.4,1l3.5-0.1l2.4,1.4l0,0l1.7-2.3l-1.7-1.8l-1.5-2.4l0,0l-1.8,0.9L1065,280.4L1065,280.4z"
    },
    CU: {
      d: "M539,427.3l-4.9-2.1l-4.3-0.1l-4.7-0.5l-1.4,0.7l-4.2,0.6l-3,1.3l-2.7,1.4l-1.5,2.3l-3.1,2l2.2,0.6l2.9-0.7l0.9-1.6 l2.3-0.1l4.4-3.3l5.4,0.3l-2.3,1.6l1.8,1.3l7,1l1.5,1.3l4.9,1.7l3.2-0.2l0.8,3.6l1.7,1.8l3.5,0.4l2.1,1.7l-4.1,3.5l7.9-0.6l3.8,0.5 l3.7-0.3l3.8-0.8l0.8-1.5l-3.9-2.6l-4-0.3l0.6-1.7l-3.1-1.3h-1.9l-3-2.8l-4.2-4l-1.8-1.5l-5.2,0.8L539,427.3L539,427.3z"
    },
    CW: {
      d: "M595.9,494.9v-0.6l-0.9-0.4v0.3l0.1,0.2l0.3,0.1l0.1,0.2l-0.1,0.6l0.2,0.3L595.9,494.9L595.9,494.9z"
    },
    CY: {
      d: "M1149.9,348.4l-0.3-0.1l-0.5,0.2l-0.4,0.4l-0.4,0.3l-0.5-0.3l0.2,0.9l0.6,1.1l0.2,0.3l0.3,0.2l1.1,0.3h0.3h0.6 l0.2,0.1l0.2,0.4h0.4v-0.1v-0.3l0.2-0.2l0.3-0.2h0.3l0.6-0.1l0.6-0.2l0.5-0.4l0.9-1h0.3h0.3h0.6l0.6-0.1l-0.2-0.4l-0.1-0.1l-0.4-0.5 l-0.2-0.4l0.1-0.6l2.5-1.9l0.5-0.5l-0.8,0.2l-0.6,0.4l-0.4,0.2l-0.7,0.4l-2.3,0.8l-0.8,0.1h-0.8l-1-0.1l-0.9-0.2v0.7l-0.2,0.6 l-0.6,0.2L1149.9,348.4L1149.9,348.4z"
    },
    CZ: {
      d: "M1049.4,248.5l-2.1,0.6l-1.4-0.7l-1.1,1.2l-3.4,1.2l-1.7,1.5l-3.4,1.3l1,1.9l0.7,2.6l2.6,1.5l2.9,2.6l3.8,2l2.6-2.5 l1.7-0.5l4,1.9l2.3-0.3l2.3,1.2l0.6-1.4l2.2,0.1l1.6-0.6l0.1-0.6l0.9-0.3l0.2-1.4l1.1-0.3l0.6-1.1h1.5l-2.6-3.1l-3.6-0.3l-0.7-2 l-3.4-0.6l-0.6,1.5l-2.7-1.2l0.1-1.7l-3.7-0.6L1049.4,248.5L1049.4,248.5z"
    },
    CD: {
      d: "M1124.9,539.4l-4.3-0.7l-2,0.6l-0.9,1.5l-1.8,0.2l-2.2-1.3l-6.2,3.1l-2.6-0.6l-0.8,0.5l-1.6,3.8l-4.2-1.2l-4.1-0.6 l-3.6-2.4l-4.6-2.1l-3,2l-2.2,3.2l-0.5,4.5l-0.3,3.8l-1.6,3.4l-1.1,4l-0.7,5.6l0.3,3.6l-0.9,2.2l-0.2,2.4l-0.6,2l-3.7,3.1l-2.6,3.2 l-2.5,6.2l0.2,5.3l-1.4,2l-3.3,3.1l-3.4,4l-2-1.1l-0.4-1.8l-3.1-0.1l-1.9,2.4l-1.5-0.6l-2,1.3l-0.9,1.7l-0.2,2.7l-1.5,0.7l0.8,2 l2.3-0.9l1.7,0.1l1.9-0.7l16.6,0.1l1.3,4.7l1.6,3.8l1.3,2.1l2.1,3.3l3.7-0.5l1.9-0.9l3,0.9l0.9-1.6l1.5-3.7l3.4-0.3l0.3-1.1h2.9 l-0.5,2.3h6.8v4l1.2,2.4l-0.9,3.8l0.3,4l1.9,2.3l-0.5,7.6l1.4-0.6l2.4,0.2l3.5-1l2.6,0.4l1.9,0.1l0.3,2l2.6-0.1l3.5,0.6l1.8,2.8 l4.5,0.9l3.4-2l1.2,3.4l4.3,0.8l2,2.8l2.1,3.5h4.3l-0.3-6.9l-1.5,1.2l-3.9-2.5l-1.4-1.1l0.8-6.4l1.2-7.5l-1.2-2.8l1.6-4.1l1.6-0.7 l7.5-1.1l1,0.3l0.2-1.1l-1.5-1.7l-0.7-3.5l-3.4-3.5l-1.8-4.5l1-2.7l-1.5-3.6l1.1-10.2l0.1,0.1l-0.1-1.1l-1.4-2.9l0.6-3.5l0.8-0.4 l0.2-3.8l1.6-1.8l0.1-4.8l1.3-2.4l0.3-5.1l1.2-3l2.1-3.3l2.2-1.7l1.8-2.3l-2.3-0.8l0.3-7.5l0,0l-5-4.2l-1.4-2.7l-3.1,1.3l-2.6-0.4 l-1.5,1.1l-2.5-0.8l-3.5-5.2l-1.8,0.6L1124.9,539.4L1124.9,539.4z"
    },
    DK: {
      d: "M1035.9,221.2l-1.7-3l-6.7,2l0.9,2.5l5.1,3.4L1035.9,221.2L1035.9,221.2z M1027.3,216.1l-2.6-0.9l-0.7-1.6l1.3-2 l-0.1-3l-3.6,1.6l-1.5,1.7l-4,0.4l-1.2,1.7l-0.7,1.6l0.4,6.1l2.1,3.4l3.6,0.8l3-0.9l-1.5-3l3.1-4.3l1.4,0.7L1027.3,216.1 L1027.3,216.1z"
    },
    DJ: {
      d: "M1217.8,499.2l-2.5-1.7l3.1-1.5l0.1-2.7l-1.4-1.9l-1.6,1.5l-2.4-0.5l-1.9,2.8l-1.8,3l0.5,1.7l0.2,2l3.1,0.1l1.3-0.5 l1.3,1.1L1217.8,499.2L1217.8,499.2z"
    },
    DM: {
      d: "M635.8,475.1l0.3-0.7l-0.1-1l-0.2-0.4l-0.8-0.3v0.2l-0.1,0.5l0.3,0.8l0.1,1.1L635.8,475.1z"
    },
    DO: {
      d: "M579.6,457.4v1.8l1.4,1l2.6-4.4l2-0.9l0.6,1.6l2.2-0.4l1.1-1.2l1.8,0.3l2.6-0.2l2.5,1.3l2.3-2.6l-2.5-2.3l-2.4-0.2 l0.3-1.9l-3,0.1l-0.8-2.2l-1.4,0.1l-3.1-1.6l-4.4-0.1l-0.8,1.1l0.2,3.5l-0.7,2.4l-1.5,1.1l1.2,1.9L579.6,457.4L579.6,457.4z"
    },
    EC: {
      d: "M553.1,573.1l-2.4-1.5l-2.8-2.1l-1.6,1l-4.7-0.9l-1.4-2.7l-1,0.1l-5.6-3.6l-3.9,2.5l-3.1,1.4l0.4,2.6l-2.2,4.1 l-1,3.9l-1.9,1l1,5.8l-1.1,1.8l3.4,2.7l2.1-2.9l1.3,2.8l-2.9,4.7l0.7,2.7l-1.5,1.5l0.2,2.3l2.3-0.5l2.3,0.7l2.5,3.2l3.1-2.6l0.9-4.3 l3.3-5.5l6.7-2.5l6-6.7l1.7-4.1L553.1,573.1z"
    },
    EG: {
      d: "M1129.7,374.8l-5.5-1.9l-5.3-1.7l-7.1,0.2l-1.8,3l1.1,2.7l-1.2,3.9l2,5.1l1.3,22.7l1,23.4h22.1h21.4h21.8l-1-1.3 l-6.8-5.7l-0.4-4.2l1-1.1l-5.3-7l-2-3.6l-2.3-3.5l-4.8-9.9l-3.9-6.4l-2.8-6.7l0.5-0.6l4.6,9.1l2.7,2.9l2,2l1.2-1.1l1.2-3.3l0.7-4.8 l1.3-2.5l-0.7-1.7l-3.9-9.2l0,0l-2.5,1.6l-4.2-0.4l-4.4-1.5l-1.1,2.1l-1.7-3.2l-3.9-0.8l-4.7,0.6l-2.1,1.8l-3.9,2L1129.7,374.8 L1129.7,374.8z"
    },
    SV: {
      d: "M487.2,487l0.6-2.5l-0.7-0.7l-1.1-0.5l-2.5,0.8l-0.1-0.9l-1.6-1l-1.1-1.3l-1.5-0.5l-1.4,0.4l0.2,0.7l-1.1,0.7 l-2.1,1.6l-0.2,1l1.4,1.3l3.1,0.4l2.2,1.3l1.9,0.6l3.3,0.1L487.2,487L487.2,487z"
    },
    GQ: {
      d: "M 1040.1 557.8 l -9.2 -0.2 l -1.9 7.2 l 1 0.9 l 1.9 -0.3 h 8.2 V 557.8 L 1040.1 557.8 z M 1023 551 L 1023.6 550.2 L 1023.6 549.8 L 1024.6 548.25 L 1024.45 547.5 L 1023.04 547.4 L 1022.5 548.2 L 1022.55 548.55 L 1022.25 549.36 L 1021.55 549.5 L 1021.25 550.15 L 1021.5 550.7 L 1023 551 M 1003.8 580.2 L 1003.9 580.44 L 1003.82 580.62 L 1003.65 580.55 L 1003.63 580.232 L 1003.8 580.2"
    },
    ER: {
      d: "M1198.1,474l-3.2-3.1l-1.8-5.9l-3.7-7.3l-2.6,3.6l-4,1l-1.6,2l-0.4,4.2l-1.9,9.4l0.7,2.5l6.5,1.3l1.5-4.7l3.5,2.9 l3.2-1.5l1.4,1.3l3.9,0.1l4.9,2.5l1.6,2.2l2.5,2.1l2.5,3.7l2,2.1l2.4,0.5l1.6-1.5l-2.8-1.9l-1.9-2.2l-3.2-3.7l-3.2-3.6L1198.1,474z"
    },
    EE: {
      d: "M1093.2,197.5l-5.5,0.9l-5.4,1.6l0.9,3.4l3.3,2.1l1.5-0.8l0.1,3.5l3.7-1l2.1,0.7l4.4,2.2h3.8l1.6-1.9l-2.5-5.5 l2.6-3.4l-0.9-1l0,0l-4.6,0.2L1093.2,197.5z"
    },
    ET: {
      d: "M1187.6,477l-1.5,4.7l-6.5-1.3l-0.7,5.5l-2.1,6.2l-3.2,3.2l-2.3,4.8l-0.5,2.6l-2.6,1.8l-1.4,6.7v0.7l0.2,5l-0.8,2 l-3,0.1l-1.8,3.6l3.4,0.5l2.9,3.1l1,2.5l2.6,1.5l3.5,6.9l2.9,1.1v3.6l2,2.1h3.9l7.2,5.4h1.8l1.3-0.1l1.2,0.7l3.8,0.5l1.6-2.7 l5.1-2.6l2.3,2.1h3.8l1.5-2l3.6-0.1l4.9-4.5l7.4-0.3l15.4-19.1l-4.8,0.1l-18.5-7.6l-2.2-2.2l-2.1-3.1l-2.2-3.5l1.1-2.3l-1.3-1.1 l-1.3,0.5l-3.1-0.1l-0.2-2l-0.5-1.7l1.8-3l1.9-2.8l-2-2.1l-2.5-3.7l-2.5-2.1l-1.6-2.2l-4.9-2.5l-3.9-0.1l-1.4-1.3l-3.2,1.5 L1187.6,477L1187.6,477z"
    },
    FK: {
      d: "M690.3,902.7l-0.1-0.3l-0.4-0.2l-0.2-0.1l0.1,0.2l0.1,0.3l0.1,0.2l0.2,0.1L690.3,902.7L690.3,902.7z M695.8,901.4 L695.8,901.4l-0.3-0.1l-0.1,0.2l0.2,0.3l0.4,0.1L695.8,901.4L695.8,901.4z M682.9,900l-0.1,0.2l-0.4,0.1l0.2,0.3l0.6,0.4h0.4 l0.1-0.3l-0.1-0.6h-0.3L682.9,900L682.9,900z M685.7,898l-0.9-0.3l-0.4-0.3h-0.3l0.4,0.4l0.1,0.2l0.1,0.2l0.6,0.3l0.6,0.3l0.4,0.3 l-0.1,0.1l-0.8,0.3h-0.3l-0.2,0.1l0.4,0.2l0.6-0.1l0.2-0.1h0.2l0.3,0.1v0.2l-0.1,0.2l-0.2,0.2l-0.4,0.3l-0.6,0.4h-0.8l-0.7,0.7 l0.9,0.5l0.7,0.3h0.9v-0.1l0.2-0.1h0.3l0.1-0.1l0.2-0.4v-0.6h0.2l0.3,0.1l0.7-0.1l0.3-0.1l0.6-0.9l0.4-0.8l0.2-0.4l0.3-0.2l0.1-0.2 l0.1-0.3l0.3-0.2v-0.3l-0.4-0.2l-0.3-0.2l-0.3,0.3l-0.2-0.1l-0.9,0.3h-0.4l-0.3-0.2l-0.4-0.1l-0.4,0.1l-0.5,0.5L685.7,898L685.7,898 z M686.4,897.6l0.1-0.3l-0.1-0.2l-0.5-0.2h-0.5l0.2,0.5l0.2,0.2H686.4z M692.3,896.9h-0.4l0.4,0.5l-0.8,0.8l0.2,0.6l0.3,0.4l0.1,0.2 l-0.1,0.1l-0.4,0.1l-0.3,0.1l-0.2,0.3l-0.9,0.9l0.2,0.2l-0.3,0.7l0.2,0.3l0.8,0.7l0.8,0.4v-0.7l0.4-0.1l0.4,0.2l0.4-0.2l-0.9-1h0.3 l2.5,0.5l-0.1-0.4l-0.1-0.2l-0.3-0.4l1.5-0.4l0.5-0.3l0.2-0.3l0.6-0.1l0.8-0.3l-0.1-0.1l0.1-0.3l-0.4-0.2l-0.5-0.1l0.1-0.3l0.5-0.1 l-0.8-0.7l-0.3-0.1l-1,0.1l-0.3,0.1v0.2l0.1,0.3l0.3,0.3l0.1,0.2l-0.2-0.1l-1.1-0.4l-0.2-0.1l-0.2-0.4l0.2-0.1l0.3,0.1l0.1-0.3 l-0.4-0.3l-0.4-0.1l-0.9,0.1L692.3,896.9L692.3,896.9z"
    },
    FO: {
      d: "M947,186.9v-0.3l-0.1-0.3v-0.2h-0.1l-0.5-0.1l-0.1-0.2h-0.1v0.2l0.1,0.4l0.5,0.4L947,186.9L947,186.9L947,186.9zM947.5,184.8v-0.1l-0.2-0.2l-0.5-0.2l-0.2-0.1l-0.2,0.1v0.2l0.1,0.1l0.4,0.1l0.4,0.3h0.1L947.5,184.8L947.5,184.8z M945.1,182.9l-0.2-0.1l-0.5,0.1h-0.3l0.1,0.3l0.6,0.2h0.3h0.3l0.2-0.1l-0.1-0.2L945.1,182.9L945.1,182.9z M947.6,182.4l-0.8-0.2l-0.6-0.3l-1,0.1l0.7,1.1l0.8,0.7l0.4,0.2v-0.1v-0.2l-0.4-0.5l-0.1-0.1V183l0.1-0.1h0.2l0.3,0.2h0.2L947.6,182.4L947.6,182.4z M948.6,182.2l-0.3-0.2l-0.4-0.4v0.5v0.3v0.1h0.1l0.3,0.1L948.6,182.2L948.6,182.2z"
    },
    FJ: {
      d: "M1976.7,674.4l-3.7,2l-1.9,0.3l-3.1,1.3l0.2,2.4l3.9-1.3l3.9-1.6L1976.7,674.4L1976.7,674.4z M1965.7,682.5l-1.6,1 l-2.3-0.8l-2.7,2.2l-0.2,2.8l2.9,0.8l3.6-0.9l1.8-3.3L1965.7,682.5L1965.7,682.5z"
    },
    FI: {
      d: "M1093.4,144.4l0.8-3.8l-5.7-2.1l-5.8,1.8l-1.1,3.9l-3.4,2.4l-4.7-1.3l-5.3,0.3l-5.1-2.9l-2.1,1.4l5.9,2.7l7.2,3.7 l1.7,8.4l1.9,2.2l6.4,2.6l0.9,2.3l-2.6,1.2l-8.7,6.1l-3.3,3.6l-1.5,3.3l2.9,5.2l-0.1,5.7l4.7,1.9l3.1,3.1l7.1-1.2l7.5-2.1l8-0.5l0,0 l7.9-7.4l3.3-3.3l0.9-2.9l-7.3-3.9l0.9-3.7l-4.9-4.1l1.7-4.8l-6.4-6.3l2.8-4.1l-7.2-3.7L1093.4,144.4L1093.4,144.4z"
    },
    FR: {
      d: "M1012.2,290.9l2.7,0.8l-0.5,2.7l-0.1,0.1l-0.3-0.2l-0.5,0.6l0,0.3l-3.6,2.6l-10-1.6l-7.4,2l-0.5,3.7l-6,0.8 l-1.3-0.7l0.7-0.3l0.2-0.4l-0.2-0.2l-0.7-0.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l0.1,0.1v0.2l-3.7-1.8l-1.9,1.3l-9.4-2.8l-2-2.4l2.7-3.7 l1-12.3l-5.1-6.5l-3.6-3.1l-7.5-2.4l-0.4-4.6l6.4-1.3l8.2,1.6l-1.4-7l4.6,2.6l11.3-4.8l1.4-5.1l4.3-1.2l0.7,2.2l2.2,0.1l2.4,2.4 l3.4,2.9l2.5-0.4l4.4,2.8l0,0l1.1,0.5l1.4-0.1l2.4,1.6l7.1,1.2l-2.3,4.2l-0.5,4.5l-1.3,1l-2.3-0.6l0.2,1.6l-3.5,3.5v2.8l2.4-0.9 l1.8,2.7l0,0l-0.2,1.7l1.6,2.4l-1.7,1.8L1012.2,290.9z M1025.6,304.3l-1-6l-0.6,1.6l-2.7,1.1l-0.7,4.3l3,3.7L1025.6,304.3z"
    },
    GF: {
      d: "M681.4,556.2l1.8-4.7l3.5-5.8l-0.9-2.6l-5.8-5.4l-4.1-1.5l-1.9-0.7l-3.1,5.5l0.4,4.4l2.1,3.7l-1,2.7l-0.6,2.9 l-1.4,2.8l2.4,1.3l1.8-1.8l1.2,0.3l0.8,1.8l2.7-0.5L681.4,556.2z"
    },
    PF: {
      d: "M213.2,704.9l-0.1-0.3l-0.2-0.3l-0.1,0.1l0.1,0.1l0.2,0.3v0.2L213.2,704.9z M222.5,690.2l-0.2-0.2l-0.4-0.2 l-0.2-0.1l-0.2-0.1l-0.1,0.1l0.1,0.1h0.1l0.3,0.2l0.3,0.1L222.5,690.2L222.5,690.2L222.5,690.2L222.5,690.2z M198,689.1l-0.6-0.3 l0.1,0.2l0.4,0.2l0.2,0.1L198,689.1L198,689.1z M218.5,688.9l-0.4-0.5h-0.3L218.5,688.9L218.5,688.9z M196.9,687.9l-0.4-0.4 l-0.2-0.3l-0.3-0.1l0.1,0.1l0.4,0.4l0.3,0.4l0.2,0.1L196.9,687.9z M196.6,685.8l-0.1-0.1l0,0v-0.3l0.2-0.3l0.6-0.4v-0.1l0,0 l-0.2,0.1l-0.4,0.2l-0.2,0.2l-0.1,0.2l-0.1,0.3l0.1,0.2l0.1,0.1h0.2L196.6,685.8L196.6,685.8z M149.2,684.7l-0.2-0.6l-0.3-0.5 l-0.8-0.1l-0.5,0.2l-0.1,0.2l0.1,0.4l0.5,0.7l0.5,0.1l0.8-0.1l0.4,0.6l0.2,0.1l0.4,0.1l0.1-0.3l-0.2-0.5L149.2,684.7L149.2,684.7z M146.3,683.8l0.1-0.4l-0.2-0.1h-0.5v0.2l0.1,0.2l0.1,0.1l0.3,0.2L146.3,683.8L146.3,683.8z M136.6,679.5h0.2l-0.4-0.6l-0.3-0.2v0.1 v0.7l0.3,0.1L136.6,679.5z M180.5,677.9h-0.2H180h-0.1l0.5,0.1l0.4,0.2L180.5,677.9L180.5,677.9z M179.8,678l-0.3-0.1l-0.3-0.2h-0.3 l0.7,0.3H179.8L179.8,678z M136,678.1l0.1-0.2l-0.1-0.1l-0.4-0.2l0.1,0.3v0.2H136L136,678.1L136,678.1z M168.8,676.1l-0.3-0.4 l-0.2-0.3l-0.2-0.4l-0.4-0.5l0.1,0.3l0.1,0.2l0.2,0.2l0.2,0.4l0.1,0.2l0.3,0.4h0.1L168.8,676.1L168.8,676.1z M185,674.6l0.1-0.5 h-0.2L185,674.6L185,674.6L185,674.6z M170.6,673l-0.6-0.6h-0.1l0.1,0.2l0.5,0.5l0.1,0.2V673L170.6,673z M201.4,639.1l0.1-0.2v-0.2 l-0.1-0.1l-0.3-0.1l0.1,0.7L201.4,639.1L201.4,639.1z M198.7,635.4l-0.1-0.2h-0.2l-0.1,0.1v0.5L198.7,635.4L198.7,635.4z M198.8,633.8l-0.8,0.5l0.2,0.4l0.4,0.1l0.2-0.2l0.8-0.1l0.3-0.4l-0.3,0.1L198.8,633.8L198.8,633.8z M192.7,632.1l0.2-0.5l-0.2-0.1 l-0.4,0.2v0.2l0.3,0.4L192.7,632.1L192.7,632.1z M195.3,629l0.3-0.1v-0.1l-0.2-0.2l-0.3-0.1l-0.1,0.1l-0.1,0.2l0.1,0.3L195.3,629 L195.3,629z M192.4,628.9l0.1-0.3v-0.2l-0.1-0.2l-0.9-0.2l-0.1,0.1v0.4l0.2,0.5h0.3L192.4,628.9z"
    },
    GA: {
      d: "M1050.2,557.7l-0.7-0.3l-3.4,0.8l-3.4-0.8l-2.6,0.4v7.6h-8.2l-1.9,0.3l-1.1,4.8l-1.3,4.6l-1.3,2l-0.2,2.1l3.4,6.6 l3.7,5.3l5.8,6.4l4.3-3.5l-2.1-4.2l1.9-1.6l3.8-0.8l0.5-2.8l3,3l4.9,0.3l1.7-3l0.8-4.3l-0.6-4.9l-2.7-3.8l2.4-7.4l-1.4-1.2l-4.2,0.5 l-1.5-3.3L1050.2,557.7L1050.2,557.7z"
    },
    GM: {
      d: "M882.8,488.5l5,0.1l1.4-0.9h1l2.1-1.5l2.4,1.4l2.4,0.1l2.4-1.5l-1.1-1.8l-1.8,1.1l-1.8-0.1l-2.1-1.5l-1.8,0.1 l-1.3,1.5l-6.1,0.2L882.8,488.5L882.8,488.5z"
    },
    GE: {
      d: "M1200,300.2l-7.5-2.9l-7.7-1l-4.5-1.1l-0.5,0.7l2.2,1.9l3,0.7l3.4,2.3l2.1,4.2l-0.3,2.7l5.4-0.3l5.6,3l6.9-1l1.1-1 l4.2,1.8l2.8,0.4l0.6-0.7l-3.2-3.4l1.1-0.9l-3.5-1.4l-2.1-2.5l-5.1-1.3l-2.9,1L1200,300.2L1200,300.2z"
    },
    DE: {
      d: "M1043.6,232.3l-2.4-1.9l-5.5-2.4l-2.5,1.7l-4.7,1.1l-0.1-2.1l-4.9-1.4l-0.2-2.3l-3,0.9l-3.6-0.8l0.4,3.4l1.2,2.2 l-3,3l-1-1.3l-3.9,0.3l-0.9,1.3l1,2l-1,5.6l-1.1,2.3h-2.9l1.1,6.4l-0.4,4.2l1,1.4l-0.2,2.7l2.4,1.6l7.1,1.2l-2.3,4.2l-0.5,4.5h4.2 l1-1.4l5.4,1.9l1.5-0.3l2.6,1.7l0.6-1.6l4.4,0.3l3.4-1.2l2.4,0.2l1.7,1.3l0.4-1.1l-1-4l1.7-0.8l1.5-2.9l-2.9-2.6l-2.6-1.5l-0.7-2.6 l-1-1.9l3.4-1.3l1.7-1.5l3.4-1.2l1.1-1.2l1.4,0.7l2.1-0.6l-2.3-3.9l0.1-2.1l-1.4-3.3l-2-2.2l1.2-1.6L1043.6,232.3L1043.6,232.3z"
    },
    GH: {
      d: "M976.8,502.1l-2.6-0.5l-1.8,1l-2.4-0.5l-9.7,0.3l-0.2,3.6l0.8,4.8l1.4,9.1l-2.3,5.3l-1.5,7.2l2.4,5.5l-0.2,2.5 l5,1.8l5-1.9l3.2-2.1l8.7-3.8l-1.2-2.2l-1.5-4l-0.4-3.2l1.2-5.7l-1.4-2.3l-0.6-5.1l0.1-4.6l-2.4-3.3L976.8,502.1L976.8,502.1z"
    },
    GR: {
      d: "M1101.9,344.9l-0.8,2.8l6.6,1.2v1.1l7.6-0.6l0.5-1.9l-2.8,0.8v-1.1l-3.9-0.5l-4.1,0.4L1101.9,344.9L1101.9,344.9z M1113.4,307.5l-2.7-1.6l0.3,3l-4.6,0.6l-3.9-2.1l-3.9,1.7l-3.8-0.2l-1,0.2l-0.7,1.1l-2.8-0.1l-1.9,1.3l-3.3,0.6v1.6l-1.6,0.9 l-0.1,2.1l-2.1,3l0.5,1.9l2.9,3.6l2.3,3l1.3,4.3l2.3,5.1l4.6,2.9l3.4-0.1l-2.4-5.7l3.3-0.7l-1.9-3.3l5,1.7l-0.4-3.7l-2.7-1.8l-3.2-3 l1.8-1.4l-2.8-3l-1.6-3.8l0.9-1.3l3,3.2h2.9l2.5-1l-3.9-3.6l6.1-1.6l2.7,0.6l3.2,0.2l1.1-0.7L1113.4,307.5L1113.4,307.5z"
    },
    GL: {
      d: "M887.4,76.3l-26-0.4l-11.8,0.3l-5,1.3l-11.5-0.1l-12.7,2.1l-1.6,1.7l6.7,2.1l-6.2-1.3l-4.5-0.3l-7-1.4l-10.6,2.1 l-2.7-1.2h-10.4l-10.9,0.6l-8.9,1l-0.2,1.8l-5.3,0.5L744.2,88l-4.6,1.7l8.1,1.5l-2.8,1.6L730,95l-15.5,2.2l-2.2,1.7l6.4,2l14.5,1.2 l-7.5,0.2l-10.9,1.5l3.8,3.1l3,1.5l9.4-0.3l10.1-0.2l7.6,0.3l8,2.9l-1.4,2.1l3.6,1.9l1.4,5.3l1,3.6l1.4,1.9l-7,4.8l2.6,1.3l4.4-0.8 l2.6,1.8l5.3,3.4l-7.5-1.4h-3.8l-3,2.8l-1.5,3.6l4.2,1.8l4-0.8l2.6-0.8l5.5-1.9l-2.8,4.2l-2.6,2.3l-7.1,2l-7,6.3l2,2l-3.4,4l3.7,5.2 l-1.5,5l0.7,3.7l4.8,7.1l0.8,5.6l3.1,3.2h8.9l5,4.7l6.5-0.3l4.1-5.7l3.5-4.8l-0.3-4.4l8.6-4.6l3.3-3.7l1.4-3.9l4.7-3.5l6.5-1.3 l6.1-1.4l3-0.2l10.2-3.9l7.4-5.7l4.8-2.1l4.6-0.1l12.5-1.8l12.1-4.3l11.9-4.6l-5.5-0.3l-10.6-0.2l5.3-2.8l-0.5-3.6l4.2,3l2.7,2.1 l7.3-1l-0.6-4.3l-4.5-3.1l-5-1.3l2.4-1.4l7.2,2.1l0.5-2.3l-4.1-3.4h5.4l5.6-0.8l1.7-1.8l-4-2.1l8.6-0.3l-4-4.3l4.1-0.5l0.1-4.2 l-6.2-2.5l6.4-1.6l5.8-0.1l-3.6-3.2l1.1-5.1l3.6-2.9l4.9-3.2l-8-0.2l11.3-0.7l2.2-1l14.6-2.9l-1.6-1.7l-10-0.8l-16.9,1.5l-9.2,1.5 l4.5-2.3l-2.3-1.4l-7,1.2l-9.7-1.4l-12.1,0.5l-1.4-0.7l18.3-0.4l12.9-0.2l6.6-1.4L887.4,76.3L887.4,76.3z"
    },
    GD: {
      d: "M632.1,495.7l0.5-0.2l0.2-1.1l-0.3-0.1l-0.3,0.3l-0.3,0.5v0.4l-0.2,0.3L632.1,495.7L632.1,495.7z"
    },
    GP: {
      d: "M636.4,471.1l0.2-0.2v-0.3l-0.2-0.3l-0.2,0.1l-0.2,0.3v0.3l0.1,0.1H636.4L636.4,471.1z M634.5,470.3l0.2-0.2v-1.2 l0.1-0.3l-0.2-0.1l-0.2-0.2l-0.6-0.2l-0.1,0.1l-0.2,0.3l0.1,1.5l0.2,0.5l0.2,0.1L634.5,470.3L634.5,470.3z M636.1,468.9l0.8-0.2 l-0.9-0.6l-0.2-0.4v-0.3l-0.4-0.3l-0.2,0.2l-0.1,0.3l0.1,0.5l-0.3,0.4l0.1,0.4l0.4,0.1L636.1,468.9L636.1,468.9z"
    },
    GT: {
      d: "M482.8,458.9l-5.1-0.1h-5.2l-0.4,3.6h-2.6l1.8,2.1l1.9,1.5l0.5,1.4l0.8,0.4l-0.4,2.1H467l-3.3,5.2l0.7,1.2l-0.8,1.5 l-0.4,1.9l2.7,2.6l2.5,1.3l3.4,0.1l2.8,1.1l0.2-1l2.1-1.6l1.1-0.7l-0.2-0.7l1.4-0.4l1.3-1.6l-0.3-1.3l0.5-1.2l2.8-1.8l2.8-2.4 l-1.5-0.8l-0.6,0.9l-1.7-1.1h-1.6l1.2-7.2L482.8,458.9L482.8,458.9z"
    },
    GN: {
      d: "M912.4,493l-0.8,0.4l-3-0.5l-0.4,0.7l-1.3,0.1l-4-1.5l-2.7-0.1l-0.1,2.1l-0.6,0.7l0.4,2.1l-0.8,0.9h-1.3l-1.4,1 l-1.7-0.1l-2.6,3.1l1.6,1.1l0.8,1.4l0.7,2.8l1.3,1.2l1.5,0.9l2.1,2.5l2.4,3.7l3-2.8l0.7-1.7l1-1.4l1.5-0.2l1.3-1.2h4.5l1.5,2.3 l1.2,2.7L917,515l0.9,1.7v2.3l1.5-0.3l1.2-0.2l1.5-0.7l2.3,3.9l-0.4,2.6l1.1,1.3l1.6,0.1l1.1-2.6l1.6,0.2h0.9l0.3-2.8l-0.4-1.2 l0.6-0.9l2-0.8l-1.3-5.1l-1.3-2.6l0.5-2.2l1.1-0.5l-1.7-1.8l0.3-1.9l-0.7-0.7l-1.2,0.6l0.2-2.1l1.2-1.6l-2.3-2.7l-0.6-1.7l-1.3-1.4 l-1.1-0.2l-1.3,0.9l-1.8,0.8l-1.6,1.4l-2.4-0.5l-1.5-1.6l-0.9-0.2l-1.5,0.8h-0.9L912.4,493L912.4,493z"
    },
    GW: {
      d: "M900.2,492.1l-10.3-0.3l-1.5,0.7l-1.8-0.2l-3,1.1l0.3,1.3l1.7,1.4v0.9l1.2,1.8l2.4,0.5l2.9,2.6l2.6-3.1l1.7,0.1 l1.4-1h1.3l0.8-0.9l-0.4-2.1l0.6-0.7L900.2,492.1L900.2,492.1z"
    },
    GY: {
      d: "M656.1,534.2l-2.1-2.3l-2.9-3.1l-2.1-0.1l-0.1-3.3l-3.3-4.1l-3.6-2.4l-4.6,3.8l-0.6,2.3l1.9,2.3l-1.5,1.2l-3.4,1.1 v2.9l-1.6,1.8l3.7,4.8l2.9-0.3l1.3,1.5l-0.8,2.8l1.9,0.9l1.2,3l-1.6,2.2l-1,5.4l1.4,3.3l0.3,2.9l3.5,3l2.7,0.3l0.7-1.3l1.7-0.2 l2.6-1.1l1.8-1.7l3.1,0.5l1.4-0.2l-3.3-5.6L655,551l-1.8-0.1l-2.4-4.6l1.1-3.3l-0.3-1.5l3.5-1.6L656.1,534.2L656.1,534.2z"
    },
    HT: {
      d: "M580.6,446.7l-4.6-1l-3.4-0.2l-1.4,1.7l3.4,1l-0.3,2.4l2.2,2.8l-2.1,1.4l-4.2-0.5l-5-0.9l-0.7,2.1l2.8,1.9l2.7-1.1 l3.3,0.4l2.7-0.4l3.6,1.1l0.2-1.8l-1.2-1.9l1.5-1.1l0.7-2.4L580.6,446.7z"
    },
    HN: {
      d: "M514.1,476.8l-1.3-1.8l-1.9-1l-1.5-1.4l-1.6-1.2l-0.8-0.1l-2.5-0.9l-1.1,0.5l-1.5,0.2l-1.3-0.4l-1.7-0.4l-0.8,0.7 l-1.8,0.7l-2.6,0.2l-2.5-0.6l-0.9,0.4l-0.5-0.6l-1.6,0.1l-1.3,1.1l-0.6-0.2l-2.8,2.4l-2.8,1.8l-0.5,1.2l0.3,1.3l-1.3,1.6l1.5,0.5 l1.1,1.3l1.6,1l0.1,0.9l2.5-0.8l1.1,0.5l0.7,0.7l-0.6,2.5l1.7,0.6l0.7,2l1.8-0.3l0.8-1.5h0.8l0.2-3.1l1.3-0.2h1.2l1.4-1.7l1.5,1.3 l0.6-0.8l1.1-0.7l2.1-1.8l0.3-1.3l0.5,0.1l0.8-1.5l0.6-0.2l0.9,0.9l1.1,0.3l1.3-0.8h1.4l2-0.8l0.9-0.9L514.1,476.8L514.1,476.8z"
    },
    HK: {
      d: "M1604.9,430.9v-0.2v-0.2l-0.4-0.2h-0.3l0.1,0.2l0.4,0.5L1604.9,430.9L1604.9,430.9z M1603.6,430.9l-0.1-0.5l0.2-0.3 l-0.9,0.3l-0.1,0.3v0.1l0.2,0.1H1603.6L1603.6,430.9z M1605.2,429.7l-0.1-0.3l-0.2-0.1l-0.1-0.3l-0.1-0.2l0,0l-0.3-0.1l-0.2-0.1 h-0.4l-0.1,0.1h-0.2l-0.2,0.2l0,0v0.2l-0.5,0.4v0.2l0.3,0.2l0.5-0.1l0.6,0.2l0.8,0.3v-0.2v-0.3L1605.2,429.7L1605.2,429.7z"
    },
    HU: {
      d: "M1079.1,263.8l-1.6,0.4l-1,1.5l-2.2,0.7l-0.6-0.4l-2.3,1l-1.9,0.2l-0.3,1.2l-4.1,0.8l-1.9-0.7l-2.6-1.6l-0.2,2.6 h-2.8l1.1,1.3l-1.3,4l0.8,0.1l1.2,2.1l1.6,0.8l4,2.6l4.2,1.2l1.8-0.9l0,0l3.7-1.6l3.2,0.2l3.8-1.1l2.6-4.3l1.9-4.2l2.9-1.3l-0.6-1.6 l-2.9-1.7l-1,0.6L1079.1,263.8L1079.1,263.8z"
    },
    IS: {
      d: "M915.7,158.6l-6.9-0.4l-7.3,2.9l-5.1-1.5l-6.9,3l-5.9-3.8l-6.5,0.8l-3.6,3.7l8.7,1.3l-0.1,1.6l-7.8,1.1l8.8,2.7 l-4.6,2.5l11.7,1.8l5.6,0.8l3.9-1l12.9-3.9l6.1-4.2l-4.4-3.8L915.7,158.6L915.7,158.6z"
    },
    IN: {
      d: "M1414.1,380.1l-8.5-4.4l-6.2-4l-3.2-7l4.1,0.9l-0.6-3.3l-3-3.3l-0.8-5.2l-7.6-7.5l-3.7,5.4l-5.7,1l-8.5-1.6 l-1.9,2.8l3.2,5.6l2.9,4.3l5,3.1l-3.7,3.7l1,4.5l-3.9,6.3l-2.1,6.5l-4.5,6.7l-6.4-0.5l-4.9,6.6l4,2.9l1.3,4.9l3.5,3.2l1.8,5.5h-12 l-3.2,4.2l7.1,5.4l1.9,2.5l-2.4,2.3l8,7.7l4,0.8l7.6-3.8l1.7,5.9l0.8,7.8l2.5,8.1l3.6,12.3l5.8,8.8l1.3,3.9l2,8l3.4,6.1l2.2,3 l2.5,6.4l3.1,8.9l5.5,6l2.2-1.8l1.7-4.4l5-1.8l-1.8-2.1l2.2-4.8l2.9-0.3l-0.7-10.8l1.9-6.1l-0.7-5.3l-1.9-8.2l1.2-4.9l2.5-0.3 l4.8-2.3l2.6-1.6l-0.3-2.9l5-4.2l3.7-4l5.3-7.5l7.4-4.2l2.4-3.8l-0.9-4.8l6.6-1.3l3.7,0.1l0.5-2.4l-1.6-5.2l-2.6-4.8l0.4-3.8 l-3.7-1.7l0.8-2.3l3.1-2.4l-4.6-3.4l1.2-4.3l4.8,2.7l2.7,0.4l1.2,4.4l5.4,0.9l5-0.1l3.4,1.1l-1.6,5.3l-2.4,0.4l-1.1,3.6l3.5,3.3 l0.2-4l1.5-0.1l4.5,10.1l2.4-1.5l-0.9-2.7l0.9-2.1l-0.9-6.6l4.6,1.4l1.5-5.2l-0.3-3.1l2.1-5.4l-0.9-3.6l6.1-4.4l4.1,1.1l-1.3-3.9 l1.6-1.2l-0.9-2.4l-6.1-0.9l1.2-2.7l-3.5-3.9l-3.2,2.6l-4.9-1.5l-5.3,4l-3.9,4.8l-4.2,0.8l2.7,2l0.4,3.9l-4.4,0.2l-4.7-0.4l-3.2,1 l-5.5-2.5l-0.3-1.2l-1.5-5.1l-3,1.4l0.1,2.7l1.5,4.1l-0.1,2.5l-4.6,0.1l-6.8-1.5l-4.3-0.6l-3.8-3.2l-7.6-0.9l-7.7-3.5l-5.8-3.1 l-5.7-2.5l0.9-5.9L1414.1,380.1L1414.1,380.1z"
    },
    ID: {
      d: "M1651.9,637.3l0.5-1.7l-1.8-1.9l-2.8-2l-5.3,1.3l7,4.4L1651.9,637.3L1651.9,637.3z M1672.8,636.7l4-4.8l0.1-1.9 l-0.5-1.3l-5.7,2.6l-2.8,3.9l-0.7,2.1l0.6,0.8L1672.8,636.7L1672.8,636.7z M1637.2,623.7l-1.6,2.2l-3.1,0.1l-2.2,3.6l3,0.1l3.9-0.9 l6.6-1.2l-1.2-2.8l-3.5,0.6L1637.2,623.7L1637.2,623.7z M1665.3,623.7l-5.2,2.3l-3.8,0.5l-3.4-1.9l-4.5,1.3l-0.2,2.3l7.4,0.8 l8.6-1.8L1665.3,623.7L1665.3,623.7z M1585.8,615.3l-0.7-2.3l-2.3-0.5l-4.4-2.4l-6.8-0.4l-4.1,6.1l5.1,0.4l0.8,2.8l10,2.6l2.4-0.8 l4.1,0.6l6.3,2.4l5.2,1.2l5.8,0.5l5.1-0.2l5.9,2.5l6.6-2.4l-6.6-3.8l-8.3-1.1l-1.8-4.1l-10.3-3.1l-1.3,2.6L1585.8,615.3 L1585.8,615.3z M1732.4,611.7l0.2-3l-1.2-1.9l-1.3,2.2l-1.2,2.2l0.3,4.8L1732.4,611.7z M1691.4,594.2l-1.4-2.1l-5.7,0.3l1,2.7 l3.9,1.2L1691.4,594.2L1691.4,594.2z M1709.5,591.8l-6.1-1.8l-6.9,0.3l-1.5,3.5l3.9,0.2l3.2-0.4l4.6,0.5l4.7,2.6L1709.5,591.8 L1709.5,591.8z M1730.5,579.5l-0.8-2.4l-9-2.6l-2.9,2.1l-7.6,1.5l2.3,3.2l5,1.2l2.1,3.7l8.3,0.1l0.4,1.6l-4-0.1l-6.2,2.3l4.2,3.1 l-0.1,2.8l1.2,2.3l2.1-0.5l1.8-3.1l8.2,5.9l4.6,0.5l10.6,5.4l2.3,5.3l1,6.9l-3.7,1.8l-2.8,5.2l7.1-0.2l1.6-1.8l5.5,1.3l4.6,5.2 l1.5-20.8l1-20.7l-6-1.2l-4.1-2.3l-4.7-2.2h-5l-6.6,3.8l-4.9,6.8l-5.7-3.8L1730.5,579.5z M1680.5,563.1l-1-1.4l-5.5,4.6l-6.5,0.3 l-7.1-0.9l-4.4-1.9l-4.7,4.8l-1.2,2.6l-2.9,9.6l-0.9,5l-2.4,4.2l1.6,4.3l2.3,0.1l0.6,6.1l-1.9,5.9l2.3,1.9l3.6-1l0.3-9.1l-0.2-7.4 l3.8-1.9l-0.7,6.2l3.9,3.7l-0.8,2.5l1.3,1.7l5.6-2.4l-3,5.2l2.1,2.2l3.1-1.9l0.3-4.1l-4.7-7.4l1.1-2.2l-5.1-8.1l5-2.5l2.6-3.7 l2.4,0.9l0.5-2.9l-10.5,2.1l-3.1,2.9l-5-5.6l0.9-4.8l4.9-1l9.3-0.3l5.4,1.3l4.3-1.3L1680.5,563.1L1680.5,563.1z M1699.9,565 l-0.6-2.6l-3.3-0.6l-0.5-3.5l-1.8,2.3l-1,5.1l1.7,8.2l2.2,4l1.6-0.8l-2.3-3.3l0.9-3.9l2.9,0.6L1699.9,565L1699.9,565z M1639,560.5 l0.9-2.9l-4.3-6l3-5.8l-5-1h-6.4l-1.7,7.2l-2,2.2l-2.7,8.9l-4.5,1.3l-5.4-1.8l-2.7,0.6l-3.2,3.2l-3.6-0.4l-3.6,1.2l-3.9-3.5l-1-4.3 l-3.3,4.2l-0.6,5.9l0.8,5.6l2.6,5.4l2.8,1.8l0.7,8.5l4.6,0.8l3.6-0.4l2,3.1l6.7-2.3l2.8,2l4,0.4l2,3.9l6.5-2.9l0.8,2.3l2.5-9.7 l0.3-6.4l5.5-4.3l-0.2-5.8l1.8-4.3l6.7-0.8L1639,560.5L1639,560.5z M1570.3,609.4l0.7-9.8l1.7-8l-2.6-4l-4.1-0.5l-1.9-3.6l-0.9-4.4 l-2-0.2l-3.2-2.2l2.3-5.2l-4.3-2.9l-3.3-5.3l-4.8-4.4l-5.7-0.1l-5.5-6.8l-3.2-2.7l-4.5-4.3l-5.2-6.2l-8.8-1.2l-3.6-0.3l0.6,3.2 l6.1,7l4.4,3.6l3.1,5.5l5.1,4l2.2,4.9l1.7,5.5l4.9,5.3l4.1,8.9l2.7,4.8l4.1,5.2l2.2,3.8l7,5.2l4.5,5.3L1570.3,609.4L1570.3,609.4z"
    },
    IR: {
      d: "M1213.5,324.4l-3.2-2.9l-1.2-2.4l-3.3,1.8l2.9,7.3l-0.7,2l3.7,5.2l0,0l4.7,7.8l3.7,1.9l1,3.8l-2.3,2.2l-0.5,5 l4.6,6.1l7,3.4l3.5,4.9l-0.2,4.6h1.7l0.5,3.3l3.4,3.4l1.7-2.5l3.7,2.1l2.8-1l5.1,8.4l4.3,6.1l5.5,1.8l6.1,4.9l6.9,2.1l5.1-3.1l4-1.1 l2.8,1.1l3.2,7.8l6.3,0.8l6.1,1.5l10.5,1.9l1.2-7.4l7.4-3.3l-0.9-2.9l-2.7-1l-1-5.7l-5.6-2.7l-2.8-3.9l-3.2-3.3l3.9-5.8l-1.1-4 l-4.3-1.1l-1.1-4l-2.7-5.1l1.6-3.5l-2.5-0.9l0.5-4.7l0.5-8l-1.6-5.5l-3.9-0.2l-7.3-5.7l-4.3-0.7l-6.5-3.3l-3.8-0.6l-2.1,1.2 l-3.5-0.2l-3,3.7l-4.4,1.2l-0.2,1.6l-7.9,1.7l-7.6-1.1l-4.3-3.3l-5.2-1.3l-2.5-4.8l-1.3,0.3l-3.8-3.4l1.2-3.1l-1.9-1.9l-1.9,0.5 l-5.3,4.7l-1.8,0.2L1213.5,324.4L1213.5,324.4z"
    },
    IQ: {
      d: "M1207.3,334.9l-6.2-0.9l-2.1,1l-2.1,4.1l-2.7,1.6l1.2,4.7l-0.9,7.8l-11,6.7l3.1,7.7l6.7,1.7l8.5,4.5l16.7,12.7 l10.2,0.5l3.2-6.1l3.7,0.5l3.2,0.4l-3.4-3.4l-0.5-3.3h-1.7l0.2-4.6l-3.5-4.9l-7-3.4l-4.6-6.1l0.5-5l2.3-2.2l-1-3.8l-3.7-1.9 l-4.7-7.8l0,0l-2.3,1.1L1207.3,334.9L1207.3,334.9z"
    },
    IE: {
      d: "M947.3,231.7l-3.5-1.3l-2.9,0.1l1.1-3.2l-0.8-3.2l-3.7,2.8l-6.7,4.7l2.1,6.1l-4.2,6.4l6.7,0.9l8.7-3.6l3.9-5.4 L947.3,231.7L947.3,231.7z"
    },
    IL: {
      d: "M1167.8,360.5l-1.4,0.1l-0.4,1.1h-1.8l-0.1,0.1l-0.6,1.6l-0.6,4.8l-1.1,2.9l0.4,0.4l-1.4,2.1l0,0l3.9,9.2l0.7,1.7 l1.7-10.2l-0.4-2.4l-2.4,0.8l0.1-1.7l1.2-0.8l-1.4-0.7l0.7-4.3l2,0.9l0.7-2h-0.1l0.6-1L1167.8,360.5L1167.8,360.5z"
    },
    IT: {
      d: "M1057.8,328.6l-1.6,5.1l0.9,2l-0.9,3.3l-4.2-2.4l-2.7-0.7l-7.5-3.3l0.6-3.4l6.2,0.6l5.2-0.7L1057.8,328.6z M1072.3,316.2l-0.8,2.3l-3.1-3l-4.5-1l-1.9,4.1l3.9,2.3l-0.4,3.3l-2.1,0.4l-2.5,5.6l-2.1,0.5l-0.1-2l0.8-3.5l1.1-1.3l-2.3-3.7 l-1.8-3.2l-2.2-0.8l-1.7-2.7l-3.4-1.2l-2.3-2.5l-3.9-0.4l-4.2-2.8l-4.9-4l-3.6-3.6l-1.9-6l-2.6-0.7l-4.2-2.1l-2.3,0.9l-2.8,2.8 l-2.1,0.5l0.5-2.7l-2.7-0.8l-1.5-4.8l1.7-1.8l-1.6-2.4l0.2-1.7l2.2,1.3l2.4-0.3l2.7-2.1l0.9,1l2.4-0.2l0.9-2.5l3.8,0.8l2.1-1.1 l0.3-2.5l3.1,0.9l0.5-1.2l4.8-1.1l1.3,2.2l7.2,1.6l-0.3,3l1.4,2.7l-4.1-0.9l-3.9,2.2l0.4,3l-0.5,1.8l1.9,3.1l4.9,3.1l2.9,5.1l6,5 l4-0.1l1.4,1.4l-1.4,1.2l4.8,2.3l3.9,1.9l4.7,3.2L1072.3,316.2z M1040.2,305.3l-0.1-0.6l-0.6,0.1l-0.2,0.5H1040.2z M1040.3,292.4 l-0.9,0.3l0.2,0.9l0.7-0.1L1040.3,292.4z M1021.6,311.6l-2.8-0.3l1.3,3.6l0.4,7.6l2.1,1.7l2-2.1l2.4,0.4l0.4-8.4l-3.3-4.4 L1021.6,311.6z"
    },
    CI: {
      d: "M946.5,506.2l-2.3,0.9l-1.3,0.8l-0.9-2.7l-1.6,0.7l-1-0.1l-1,1.9l-4.3-0.1l-1.6-1l-0.7,0.6l-1.1,0.5l-0.5,2.2 l1.3,2.6l1.3,5.1l-2,0.8l-0.6,0.9l0.4,1.2l-0.3,2.8h-0.9l-0.3,1.8l0.6,3.1l-1.2,2.8l1.6,1.8l1.8,0.4l2.3,2.7l0.2,2.5l-0.5,0.8 l-0.5,5.2l1.1,0.2l5.6-2.4l3.9-1.8l6.6-1.1l3.6-0.1l3.9,1.3l2.6-0.1l0.2-2.5l-2.4-5.5l1.5-7.2l2.3-5.3l-1.4-9.1l-3.8-1.6l-2.7,0.2 l-1.9,1.6l-2.5-1.3l-1-2.1L946.5,506.2L946.5,506.2z"
    },
    JM: {
      d: "M550.7,458.5l3.9-0.1l-0.8-1.8l-2.7-1.5l-3.7-0.6l-1.2-0.2l-2.4,0.4l-0.8,1.5l2.9,2.3l3,1L550.7,458.5L550.7,458.5z "
    },
    JP: {
      d: "M1692.5,354.9l-4.5-1.3l-1.1,2.7l-3.3-0.8l-1.3,3.8l1.2,3l4.2,1.8l-0.1-3.7l2.1-1.5l3.1,2.1l1.3-3.9L1692.5,354.9 L1692.5,354.9z M1716.9,335.6l-3.6-6.7l1.3-6.4l-2.8-5.2l-8.1-8.7l-4.8,1.2l0.2,3.9l5.1,7.1l1,7.9l-1.7,2.5l-4.5,6.5l-5-3.1v11.5 l-6.3-1.3l-9.6,1.9l-1.9,4.4l-3.9,3.3l-1.1,4l-4.3,2l4,4.3l4.1,1.9l0.9,5.7l3.5,2.5l2.5-2.7l-0.8-10.8l-7.3-4.7l6.1-0.1l5-3l8.6-1.4 l2.4,4.8l4.6,2.4l4.4-7.3l9.1-0.4l5.4-3l0.6-4.6l-2.5-3.2L1716.9,335.6L1716.9,335.6z M1705.1,291.4l-5.3-2.1l-10.4-6.4l1.9,4.8 l4.3,8.5l-5.2,0.4l0.6,4.7l4.6,6.1h5.7l-1.6-6.8l10.8,4.2l0.4-6.1l6.4-1.7l-6-6.9l-1.7,2.6L1705.1,291.4L1705.1,291.4z"
    },
    JO: {
      d: "M1186.6,367.6l-3.1-7.7l-9.6,6.7l-6.3-2.5l-0.7,2l0.4,3.9l-0.6,1.9l0.4,2.4l-1.7,10.2l0.3,0.9l6.1,1l2.1-2l1.1-2.3 l4-0.8l0.7-2.2l1.7-1l-6.1-6.4l10.4-3.1L1186.6,367.6L1186.6,367.6z"
    },
    KZ: {
      d: "M1308.8,223.8l-9-1.3l-3.1,2.5l-10.8,2.2l-1.7,1.5l-16.8,2.1l-1.4,2.1l5,4.1l-3.9,1.6l1.5,1.7l-3.6,2.9l9.4,4.2 l-0.2,3l-6.9-0.3l-0.8,1.8l-7.3-3.2l-7.6,0.2l-4.3,2.5l-6.6-2.4l-11.9-4.3l-7.5,0.2l-8.1,6.6l0.7,4.6l-6-3.6l-2.1,6.8l1.7,1.2 l-1.7,4.7l5.3,4.3l3.6-0.2l4.2,4.1l0.2,3.2l2.8,1l4.4-1.3l5-2.7l4.7,1.5l4.9-0.3l1.9,3.9l0.6,6l-4.6-0.9l-4,1l0.9,4.5l-5-0.6l0.6,2 l3.2,1.6l3.7,5.5l6.4,2.1l1.5,2.1l-0.7,2.6l0.7,1.5l1.8-2l5.5-1.3l3.8,1.7l4.9,4.9l2.5-0.3l-6.2-22.8l11.9-3.6l1.1,0.5l9.1,4.5 l4.8,2.3l6.5,5.5l5.7-0.9l8.6-0.5l7.5,4.5l1.5,6.2l2.5,0.1l2.6,5l6.6,0.2l2.3,3h1.9l0.9-4.5l5.4-4.3l2.5-1.2l0.3-2.7l3.1-0.8 l9.1,2.1l-0.5-3.6l2.5-1.3l8.1,2.6l1.6-0.7l8.6,0.2l7.8,0.6l3.3,2.2l3.5,0.9l-1.7-3.5l2.9-1.6l-8.7-10.7l9-2.4l2-1.4l-1-11.1l10.7,2 l1.6-2.8l-2.5-6.2l3.8-0.6l1.8-4.2l-4.3-3.8l-6,0.9l-3.3-2.6l-3.9-1.2l-4.1-3.6l-3.2-1.1l-6.2,1.6l-8.3-3.6l-1.1,3.3l-18.1-15.5 l-8.3-4.7l0.8-1.9l-9.1,5.7l-4.4,0.4l-1.2-3.3l-7-2.1l-4.3,1.5L1308.8,223.8L1308.8,223.8z"
    },
    KE: {
      d: "M1211.7,547.2h-3.8l-2.3-2.1l-5.1,2.6l-1.6,2.7l-3.8-0.5l-1.2-0.7l-1.3,0.1h-1.8l-7.2-5.4h-3.9l-2-2.1v-3.6 l-2.9-1.1l-3.8,4.2l-3.4,3.8l2.7,4.4l0.7,3.2l2.6,7.3l-2.1,4.7l-2.7,4.2l-1.6,2.6v0.3l1.4,2.4l-0.4,4.7l20.2,13l0.4,3.7l8,6.3 l2.2-2.1l1.2-4.2l1.8-2.6l0.9-4.5l2.1-0.4l1.4-2.7l4-2.5l-3.3-5.3l-0.2-23.2L1211.7,547.2L1211.7,547.2z"
    },
    KW: {
      d: "M1235.6,381.4l-3.7-0.5l-3.2,6.1l4.9,0.6l1.7,3.1l3.8-0.2l-2.4-4.8l0.3-1.5L1235.6,381.4L1235.6,381.4z"
    },
    KG: {
      d: "M1387.2,302.6l-3.5-0.9l-3.3-2.2l-7.8-0.6l-8.6-0.2l-1.6,0.7l-8.1-2.6l-2.5,1.3l0.5,3.6l-9.1-2.1l-3.1,0.8l-0.3,2.7 l1.8,0.6l-3.1,4.1l4.6,2.3l3.2-1.6l7.1,3.3l-5.2,4.5l-4.1-0.6l-1.4,2l-5.9-1.1l0.6,3.7l5.4-0.5l7.1,2l9.5-0.9l1-1.5l-1.1-1.5l4-3 l3.2-1.2l5.7,0.9l0.6-4l6.4-0.8l1-2.4l6.8-3.4L1387.2,302.6L1387.2,302.6z"
    },
    LA: {
      d: "M1574.8,481.8l0.2-6.4l-2-4.5l-4.8-4.4l-4.3-5.6l-5.7-7.5l-7.3-3.8l1.3-2.3l3.3-1.7l-3-5.5l-6.8-0.1l-3.4-5.7 l-4-5.1l-2.7,1l1.9,7.2l-2.9-0.1l-0.7-1.5l-4.1,4.1l-0.8,2.4l2.6,1.9l0.9,3.8l3.8,0.3l-0.4,6.7l1,5.7l5.3-3.8l1.8,1.2l3.2-0.2 l0.8-2.2l4.3,0.4l4.9,5.2l1.3,6.3l5.2,5.5l0.5,5.4l-1.5,2.9l4.9,2.4l2-4.3L1574.8,481.8L1574.8,481.8z"
    },
    LV: {
      d: "M1102.1,210.1h-3.8l-4.4-2.2l-2.1-0.7l-3.7,1l-0.2,4.6l-3.6,0.1l-4.4-4.5l-4,2.1l-1.7,3.7l0.5,4.5l5-1.9l7.9,0.4 l4.4-0.6l0.9,1.3l2.5,0.4l5,2.9l2.6-1l4.6-2.3l-2.1-3.6l-1-2.8L1102.1,210.1L1102.1,210.1z"
    },
    LB: {
      d: "M1167.8,360.5l0.9-3.5l2.6-2.4l-1.2-2.5l-2.4-0.3l-0.1,0.2l-2.1,4.5l-1.3,5.2h1.8l0.4-1.1L1167.8,360.5 L1167.8,360.5z"
    },
    LS: {
      d: "M1128.1,766.5l1.1-2l3.1-1l1.1-2.1l1.9-3.1l-1.7-1.9l-2.3-2l-2.6,1.3l-3.1,2.5l-3.2,4l3.7,4.9L1128.1,766.5 L1128.1,766.5z"
    },
    LR: {
      d: "M929.4,523.3l-1.6-0.2l-1.1,2.6l-1.6-0.1l-1.1-1.3l0.4-2.6l-2.3-3.9l-1.5,0.7l-1.2,0.2l-2.6,3l-2.6,3.4l-0.3,1.9 l-1.3,2l3.7,4.1l4.8,3.5l5.1,4.8l5.7,3.1l1.5-0.1l0.5-5.2l0.5-0.8l-0.2-2.5l-2.3-2.7l-1.8-0.4l-1.6-1.8l1.2-2.8l-0.6-3.1 L929.4,523.3L929.4,523.3z"
    },
    LY: {
      d: "M1111.8,371.4l-1.5-2.1l-5.4-0.8l-1.8-1.1h-2l-2-2.8l-7.3-1.3l-3.6,0.8l-3.7,3l-1.5,3.1l1.5,4.8l-2.4,3l-2.5,1.6 l-5.9-3.1l-7.7-2.7l-4.9-1.2l-2.8-5.7l-7.2-2.8l-4.5-1.1l-2.2,0.6l-6.4-2.2l-0.1,4.9l-2.6,1.8l-1.5,2l-3.7,2.5l0.7,2.6l-0.4,2.7 l-2.6,1.4l1.9,5.6l0.4,3l-0.9,5.2l0.5,2.9l-0.6,3.5l0.5,4l-2.1,2.6l3.4,4.7l0.2,2.7l2,3.6l2.6-1.2l4.3,2.9l2.5,4l8.8,2.8l3.1,3.5 l3.9-2.4l5.4-3.5l22.3,12.2l22.4,12.2v-2.7h6.3l-0.5-12.7l-1-23.4l-1.3-22.7l-2-5.1l1.2-3.9l-1.1-2.7L1111.8,371.4L1111.8,371.4z"
    },
    LI: {
      d: "M1024.4,273.6v-0.2l0.1-0.2l-0.1-0.1l-0.1-0.2l-0.1-0.1v-0.2l-0.1-0.1v-0.2l-0.1-0.1l-0.2,0.6v0.5l0.1,0.2h0.1 L1024.4,273.6L1024.4,273.6z"
    },
    LT: {
      d: "M1100.4,221.2l-5-2.9l-2.5-0.4l-0.9-1.3l-4.4,0.6l-7.9-0.4l-5,1.9l1.7,5l5,1.1l2.2,0.9l-0.2,1.7l0.6,1.5l2.5,0.6 l1.4,1.9h4.6l4.8-2.2l0.5-3.4l3.5-2L1100.4,221.2L1100.4,221.2z"
    },
    LU: {
      d: "M1007,258.6l0.2-2.7l-1-1.4l-1.3,0.2l-0.4,3.5l1.1,0.5L1007,258.6z"
    },
    MK: {
      d: "M1094,304.8l-2.8-2l-2.4,0.1l-1.7,0.4l-1.1,0.2l-2.9,1l-0.1,1.2h-0.7l0,0l-0.4,2.1l0.9,2.6l2.3,1.6l3.3-0.6l1.9-1.3 l2.8,0.1l0.7-1.1l1-0.2L1094,304.8L1094,304.8z"
    },
    MG: {
      d: "M1255.7,658.4l-1.1-4.2l-1.4-2.7l-1.8-2.7l-2,2.8l-0.3,3.8l-3.3,4.5l-2.3-0.8l0.6,2.7l-1.8,3.2l-4.8,3.9l-3.4,3.7 h-2.4l-2.2,1.2l-3.1,1.3l-2.8,0.2l-1,4.1l-2.2,3.5l0.1,5.9l0.8,4l1.1,3l-0.8,4.1l-2.9,4.8l-0.2,2.1l-2.6,1.1l-1.3,4.6l0.2,4.6l1.6,5 l-0.1,5.7l1.2,3.3l4.2,2.3l3,1.7l5-2.7l4.6-1.5l3.1-7.4l2.8-8.9l4.3-12l3.3-8.8l2.7-7.4l0.8-5.4l1.6-1.5l0.7-2.7l-0.8-4.7l1.2-1.9 l1.6,3.8l1.1-1.9l0.8-3.1l-1.3-2.9L1255.7,658.4L1255.7,658.4z"
    },
    MW: {
      d: "M1169.2,661.5l0.1-2.3l-1.2-1.9l0.1-2.8l-1.5-4.7l1.7-3.5l-0.1-7.7l-1.9-4.1l0.2-0.7l0,0l-1.1-1.7l-5.4-1.2l2.6,2.8 l1.2,5.4l-1,1.8l-1.2,5.1l0.9,5.3l-1.8,2.2l-1.9,5.9l2.9,1.7l3,3l1.6-0.6l2.1,1.6l0.3,2.6l-1.3,2.9l0.2,4.5l3.4,4l1.9-4.5l2.5-1.3 l-0.1-8.2l-2.2-4.6l-1.9-2h-0.3v0.8l1.1,0.3l1,3.4l-0.2,0.8l-1.9-2.5l-1,1.6L1169.2,661.5L1169.2,661.5z"
    },
    MY: {
      d: "M1558.1,554.4l-0.5-3.8l-0.6-2.1l0.5-2.9l-0.5-4.3l-2.6-4.3l-3.5-3.8l-1.3-0.6l-1.7,2.6l-3.7,0.8l-0.6-3.3l-4.7-2.8 l-0.9,1.1l1.4,2.7l-0.4,4.7l2.1,3.4l1,5.3l3.4,4.3l0.8,3.2l6.7,5l5.4,4.8l4-0.5l0.1-2.1l-2.3-5.6L1558.1,554.4z M1560.9,563.3 l0.2,0.2l-0.1,0.2l-0.9,0.4l-0.9-0.4l0.3-0.6l0.6-0.1l0.5,0.2L1560.9,563.3z M1645.2,540.2l-3.8,0.4l1.2,3.1l-4,2.1l-5-1h-6.4 l-1.7,7.2l-2,2.2l-2.7,8.9l-4.5,1.3l-5.4-1.8l-2.7,0.6l-3.2,3.2l-3.6-0.4l-3.6,1.2l-3.9-3.5l-1-4.3l4.1,2.2l4.4-1.2l0.9-5.4l2.4-1.2 l6.7-1.4l3.8-5l2.6-4l2.7,3.3l1.1-2.2l2.7,0.2l0.1-4.1l0.1-3.1l4.1-4.4l2.5-5h2.3l3.1,3.2l0.4,2.8l3.8,1.7l4.8,2L1645.2,540.2z"
    },
    MV: {
      d: "M1389.1,551.6L1389.1,551.6l0.1-0.3l-0.1-0.1h-0.1l-0.1,0.2v0.1v0.1H1389.1z M1389.4,545.7l0.1-0.2v-0.1v-0.1v-0.1 v-0.1l-0.1,0.1l-0.1,0.2v0.1l-0.1,0.1v0.1H1389.4L1389.4,545.7z"
    },
    ML: {
      d: "M1000.3,450.3l-6.1,0.6l-0.1-4l-2.6-1.1l-3.4-1.8l-1.3-3l-18.6-13.8l-18.4-13.9l-8.4,0.1l2.4,27.4l2.4,27.5l1,0.8 l-1.3,4.4l-22.3,0.1l-0.9,1.4l-2.1-0.4l-3.2,1.3l-3.8-1.8l-1.8,0.2l-1,3.7l-1.9,1.2l0.2,3.9l1.1,3.7l2.1,1.8l0.4,2.4l-0.3,2l0.3,2.3 h0.9l1.5-0.8l0.9,0.2l1.5,1.6l2.4,0.5l1.6-1.4l1.8-0.8l1.3-0.9l1.1,0.2l1.3,1.4l0.6,1.7l2.3,2.7l-1.2,1.6l-0.2,2.1l1.2-0.6l0.7,0.7 l-0.3,1.9l1.7,1.8l0.7-0.6l1.6,1l4.3,0.1l1-1.9l1,0.1l1.6-0.7l0.9,2.7l1.3-0.8l2.3-0.9l-0.4-3.7l1.6-2.7l-0.2-2.2l4.5-5.2l0.8-4.4 l1.6-1.6l2.7,0.9l2.3-1.3l0.8-1.6l4.3-2.9l1.1-2l5.2-2.6l3-0.9l1.4,1.2h3.6l3.6-0.3l2-2.2l7.6-0.6l4.9-1l0.5-3.9l3-4.3L1000.3,450.3 L1000.3,450.3z"
    },
    MT: {
      d: "M1053.6,344l-0.2-0.2l-0.5-0.5l-0.5-0.1l0.1,0.6l0.4,0.4h0.5L1053.6,344L1053.6,344z M1052.2,342.8L1052.2,342.8 v-0.2l-0.3-0.1l-0.4,0.1l0.1,0.1l0.3,0.2L1052.2,342.8z"
    },
    MQ: {
      d: "M638,479.9l-0.2-0.7l-0.1-0.2l-0.2-0.3l0.1-0.3v-0.1h-0.2l-0.3-0.5l-0.6-0.3h-0.3l-0.2,0.2v0.3l0.3,0.9l0.2,0.2 l0.5,0.2l-0.4,0.4v0.1l0.1,0.3h0.9l0.2,0.3l0.1-0.1L638,479.9L638,479.9z"
    },
    MR: {
      d: "M949.8,413.3l-20.3-15.5l-0.2,9.7l-17.9-0.3l-0.2,16.3L906,424l-1.4,3.3l0.9,9.2l-21.6-0.1l-1.2,2.2l2.8,2.7l1.4,3 l-0.7,3.2l0.6,3.2l0.5,6.3l-0.8,5.9l-1.7,3.2l0.4,3.4l2-2l2.7,0.5l2.8-1.4h3.1l2.6,1.8l3.7,1.7l3.2,4.7l3.6,4.4l1.9-1.2l1-3.7 l1.8-0.2l3.8,1.8l3.2-1.3l2.1,0.4l0.9-1.4l22.3-0.1l1.3-4.4l-1-0.8l-2.4-27.5l-2.4-27.4L949.8,413.3L949.8,413.3z"
    },
    MU: {
      d: "M1294.7,702.5l0.3-0.3l0.2-0.4l0.3-0.3l0.1-0.7l-0.2-0.8l-0.4-0.7l-0.5,0.1l-0.3,0.4l-0.2,0.5l-0.5,0.3l-0.1,0.3 l-0.2,0.7l-0.1,0.4l-0.2,0.1v0.2l0.3,0.3l0.8,0.1L1294.7,702.5L1294.7,702.5z"
    },
    YT: {
      d: "M1228.7,654.7v-0.3l0.2-0.5v-0.1l0.1-0.5l-0.3-0.3h-0.2l-0.2-0.3l-0.3,0.3l0.3,0.5l-0.1,0.3l-0.1,0.4l0.1,0.4 l0.2,0.2L1228.7,654.7L1228.7,654.7z"
    },
    MX: {
      d: "M444.4,407.8l-3.6-1.4l-3.9-2l-0.8-3l-0.2-4.5l-2.4-3.6l-1-3.7l-1.6-4.4l-3.1-2.5l-4.4,0.1l-4.8,5l-4-1.9l-2.2-1.9 l-0.4-3.5l-0.8-3.3l-2.4-2.8l-2.1-2l-1.3-2.2h-9.3l-0.8,2.6H391h-10.7l-10.7-4.4l-7.1-3.1l1-1.3l-7,0.7l-6.3,0.5l0.2,5.7l0.7,5.1 l0.7,4.1l0.8,4l2.6,1.8l2.9,4.5l-1,2.9l-2.7,2.3l-2.1-0.3l-0.6,0.5l2.3,3.7l2.9,1.5l1,1.7l0.9-0.9l3.1,2.9l2.1,2l0.1,3.4l-1.2,4.7 l2.5,1.6l3.3,3.1l2.9,3.6l0.7,3.9h1l2.7-2.3l0.4-1.2l-1.5-2.8l-1.6-2.9l-2.6-0.2l0.4-3.4l-0.9-3l-1-2.8l-0.5-5.9l-2.6-3.2l-0.6-2.3 l-1.2-1.6v-4.1l-1,0.1l-0.1-2.2l-0.7-0.5l-0.4-1.4l-2.7-4.4l-1.1-2.6l1-4.8l0.1-3l1.8-2.6l2.4,1.7l1.9-0.2l3.1,2.5l-0.9,2.4l0.4,4.9 l1.5,4.7l-0.4,2l1.7,3.1l2.3,3.4l2.7,0.5l0.3,4.4l2.4,3.1l2.5,1.5l-1.8,4l0.7,1.5l4.1,2.6l1.9,4l4.5,4.9l3.8,6.4l1.3,3.2v2.5 l1.4,2.9l-0.3,2.2l-1.6,1.6l0.3,1.8l-1.9,0.7l0.8,3.1l2.2,4l5.3,3.6l1.9,2.9l5.4,2l3,0.4l1.2,1.7l4.2,3l5.9,3l4,0.9l4.8,2.9l4,1.2 l3.7,1.7l2.9-0.7l4.8-2.4l3.1-0.4l4.4,1.6l2.6,2.1l5.5,6.9l0.4-1.9l0.8-1.5l-0.7-1.2l3.3-5.2h7.1l0.4-2.1l-0.8-0.4l-0.5-1.4 l-1.9-1.5l-1.8-2.1h2.6l0.4-3.6h5.2l5.1,0.1l0.1-1l0.7-0.3l0.9,0.8l2.5-3.9h1l1.2-0.1l1.2,1.6l2-5l1.2-2.7l-0.9-1.1l1.8-3.9l3.5-3.8 l0.6-3.1l-1.2-1.3l-3.4,0.5l-4.8-0.2l-6,1.5l-4,1.7l-1.2,1.8l-1.2,5.4l-1.8,3.7l-3.9,2.6l-3.6,1.1l-4.3,1.1l-4.3,0.6l-5.1,1.8 l-1.9-2.6l-5.6-1.7l-1.8-3.2l-0.7-3.6l-3-4.7l-0.4-5l-1.2-3.1l-0.5-3.4l1.1-3.1l1.8-8.6l1.8-4.5l3.1-5.6L444.4,407.8L444.4,407.8z"
    },
    MD: {
      d: "M1118.5,283.3l1.2-0.7l0.5-2.1l1.1-2l-0.5-1.1l1-0.5l0.6,0.9l3,0.2l1.2-0.5l-1-0.6l0.2-1l-2-1.5l-1.1-2.6l-1.9-1.1 v-2.1l-2.5-1.6l-2-0.3l-3.9-1.9l-3.2,0.6l-1.1,0.9l1.6,0.6l1.8,1.9l1.9,2.6l3.4,3.7l0.6,2.7l-0.2,2.7L1118.5,283.3z"
    },
    MC: {
      d: "M1013.5,295.2l0-0.3l0.5-0.6l0.3,0.2L1013.5,295.2z"
    },
    MN: {
      d: "M1473.7,252.1l-3.7-4.6l-6.6-1.5l-4.8-0.8l-6.9-2.5l-1.3,6.4l4,3.6l-2.4,4.3l-7.9-1.6l-5-0.2l-4.7-2.9l-5.1-0.1 l-5.3-1.9l-5.9,2.9l-6.6,5.4l-4.7,1l3.3,4.4l5.7,3.3l8.1,2.3l5.8,5l1.3,7.3l3,2.7l6.4,1l7.2,0.9l7.9,3.8l3.4,0.7l4.9,5.7l4.7,3.6 l5.5-0.1l11.2,1.3l6.4-0.8l5.5,0.9l9.3,3.8l6.2-0.1l3.2,2l4.4-3.3l7.2-2.2l7.5-0.2l4.9-2.2l1.9-3.3l2.5-2l-1.9-2.1l-2.9-2.3l0.4-4 l3.2,0.5l5.9,1.3l3.1-3.3l6.3-2.4l1.4-4.1l2.4-1.8l6.8-0.8l4.3,0.7l-0.7-2.2l-7.2-4.3l-5.1-2l-2.5,2.3l-5.4-1l-2.4,0.8l-2.7-2.6 l-0.3-6.2l-0.6-4.6l-5.5,0.5l-3.9-2.1l-3.3-0.7l-4.5,4.4l-5.8,1l-3.6,1.6l-6.7-1h-4.5l-4.9-3.1l-6.5-3l-5.4-0.8l-5.7,0.8l-3.9,1.1 L1473.7,252.1L1473.7,252.1z"
    },
    ME: {
      d: "M1080,299.8l0.4-0.6l-2-1.2l-1.8-0.7l-0.8-0.8l-1.5-1.1l-0.9,0.6l-1.5,1.4l-0.4,3.4l-0.5,1l0,0l2.3,1.2l1.6,2.1 l1.1,0.4l0,0l-0.5-1.9l2-3.1l0.4,1.2l1.3-0.5L1080,299.8z"
    },
    MS: {
      d: "M631.8,465.7l-0.1-0.5h-0.1l-0.2,0.4v0.3l0.3,0.1L631.8,465.7z"
    },
    MA: {
      d: "M965.2,348.4l-2.3-0.1l-5.5-1.4l-5,0.4l-3.1-2.7h-3.9l-1.8,3.9l-3.7,6.7l-4,2.6l-5.4,2.9L927,365l-0.9,3.4l-2.1,5.4 l1.1,7.9l-4.7,5.3l-2.7,1.7l-4.4,4.4l-5.1,0.7l-2.8,2.4l-0.1,0.1l-3.6,6.5l-3.7,2.3l-2.1,4l-0.2,3.3l-1.6,3.8l-1.9,1l-3.1,4l-2,4.5 l0.3,2.2l-1.9,3.3l-2.2,1.7l-0.3,3h0.1l12.4-0.5l0.7-2.3l2.3-2.9l2-8.8l7.8-6.8l2.8-8.1l1.7-0.4l1.9-5l4.6-0.7l1.9,0.9h2.5l1.8-1.5 l3.4-0.2l-0.1-3.4l0,0h0.8l0.1-7.5l8.9-4.7l5.4-1l4.4-1.7l2.1-3.2l6.3-2.5l0.3-4.7l3.1-0.5l2.5-2.4l7-1l1-2.5l-1.4-1.4l-1.8-6.7 l-0.3-3.9L965.2,348.4L965.2,348.4z"
    },
    MZ: {
      d: "M1203,640.7l-0.8-2.9l0,0l0,0l-4.6,3.7l-6.2,2.5l-3.3-0.1l-2.1,1.9l-3.9,0.1l-1.4,0.8l-6.7-1.8l-2.1,0.3l-1.6,6 l0.7,7.3h0.3l1.9,2l2.2,4.6l0.1,8.2l-2.5,1.3l-1.9,4.5l-3.4-4l-0.2-4.5l1.3-2.9l-0.3-2.6l-2.1-1.6l-1.6,0.6l-3-3l-17.1,5.2l0.3,4.5 l0.3,2.4l4.6-0.1l2.6,1.3l1.1,1.6l2.6,0.5l2.8,2l-0.3,8.1l-1.3,4.4l-0.5,4.7l0.8,1.9l-0.8,3.7l-0.9,0.6l-1.6,4.6l-6.2,7.2l2.2,9 l1.1,4.5l-1.4,7.1l0.4,2.3l0.6,2.9l0.3,2.8h4.1l0.7-3.3l-1.4-0.5l-0.3-2.6l2.6-2.4l6.8-3.4l4.6-2.2l2.5-2.3l0.9-2.6l-1.2-1.1l1.1-3 l0.5-6.2l-1,0.3v-1.9l-0.8-3.7l-2.4-4.8l0.7-4.6l2.3-1.4l4.1-4.6l2.2-1.1l6.7-6.8l6.4-3.1l5.2-2.5l3.7-3.9l2.4-4.4l1.9-4.6l-0.9-3.1 l0.2-9.9l-0.4-5.6L1203,640.7L1203,640.7z"
    },
    MM: {
      d: "M1533.9,435.8l-0.6-2.6l-3.8,1.8l-2.5-1.2l-4.5-2.4l0.8-5.2l-3.7-1.3l-2.3-5.8l-5.6,1l-0.7-7.5l4.1-5.3l-0.8-5.3 l-1.3-4.9l-2.7-1.5l-2.7-3.7l-3,0.4l0.9,2.4l-1.6,1.2l1.3,3.9l-4.1-1.1l-6.1,4.4l0.9,3.6l-2.1,5.4l0.3,3.1l-1.5,5.2l-4.6-1.4 l0.9,6.6l-0.9,2.1l0.9,2.7l-2.4,1.5l0.5,4.6l-2.1-1l1.1,5.1l4.6,5.2l3.4,0.9l-0.4,2.2l5.4,7.4l1.9,5.9l-0.9,7.9l3.6,1.5l3.2,0.6 l5.8-4.6l3.2-3.1l3.1,5.2l2,8.1l2.6,7.6l2.6,3.3l0.2,6.9l2.2,3.8l-1.3,4.8l0.9,4.8l2.2-6.6l2.6-5.9l-2.8-5.8l-0.2-3l-1-3.5l-4.2-5.1 l-1.7-3.2l1.7-1.1l1.4-5.6l-2.9-4.2l-4.1-4.6l-3.5-5.6l2.2-1.1l1.5-6.9l3.9-0.3l2.8-2.8l3-1.4l0.8-2.4L1533.9,435.8L1533.9,435.8z"
    },
    NA: {
      d: "M1105.4,683.7l-10.3,2.5l-13.4-0.9l-3.7-3l-22.5,0.3l-0.9,0.4l-3.2-2.9l-3.6-0.1l-3.3,1l-2.7,1.2l0.2,4.9l4.4,6.2 l1.1,4l2.8,7.7l2.7,5.2l2.1,2.6l0.6,3.5v7.6l1.6,9.8l1.2,4.6l1,6.2l1.9,4.7l3.9,4.8l2.7-3.2l2.1,1.8l0.8,2.7l2.4,0.5l3.3,1.2 l2.9-0.5l5-3.2l1.1-23.6l0.6-18.5l5.4-0.2l0.9-22.7l4.1-0.2l8.6-2.2l2,2.6l3.7-2.5h1.6l3.2-1.5V684l-2.1-1.4l-3.6-0.4L1105.4,683.7 L1105.4,683.7z"
    },
    NR: {
      d: "M1915,575.5v-0.2h-0.1h-0.1l-0.1,0.2l0.1,0.1l0.1,0.1L1915,575.5L1915,575.5z"
    },
    NP: {
      d: "M1455.2,394.8l-6.5-0.6l-6.4-1.5l-5-2.8l-4.5-1.2l-2.5-3.1l-3.2-0.9l-6.4-4.1l-4.7-2l-1.9,1.5l-2.8,2.9l-0.9,5.9 l5.7,2.5l5.8,3.1l7.7,3.5l7.6,0.9l3.8,3.2l4.3,0.6l6.8,1.5l4.6-0.1l0.1-2.5l-1.5-4.1L1455.2,394.8L1455.2,394.8z"
    },
    NL: {
      d: "M1005.5,243.9h2.9l1.1-2.3l1-5.6l-1-2l-3.9-0.2l-6.5,2.6l-3.9,8.9l-2.5,1.7l0,0l3.6,0.5l4.4-1.3l3.1,2.7l2.8,1.4 L1005.5,243.9L1005.5,243.9z"
    },
    NC: {
      d: "M1897.3,716.1v-0.3l-0.4-0.2l-0.2,0.5v0.1l0.2,0.1h0.2L1897.3,716.1L1897.3,716.1z M1901.9,708.5L1901.9,708.5 l-0.1-0.4l0.1-0.2l-0.4,0.2l-0.6,0.2l0.1,0.8l-0.1,0.4l0.3,0.1l0.1,0.3h0.2l0.7-0.2l0.3-1.1h-0.4L1901.9,708.5L1901.9,708.5z M1898.9,706.8l0.3-0.5l0.1-0.2l-0.2-0.7l-0.3-0.3l0.3-1l-0.1-0.2l-0.4-0.2l-0.9,0.3l-0.1,0.2l0.5,0.1l0.2,0.2l-0.5,0.7l-0.5,0.1 l0.1,0.5l0.2,0.4l0.7,0.2l0.3,0.4H1898.9z M1895,703.9l0.3-0.3l0.3-0.4l-0.1-0.1v-0.3l0.2-0.4l0.3-0.1l-0.2-0.2l-0.2-0.1v0.3 l-0.3,0.7l-0.1,0.3l-0.5,0.6H1895L1895,703.9z M1882.7,701l-0.6-0.7l-0.1,0.2l-0.1,0.4v0.3l0.3,0.2l0.1,0.2l-0.1,0.5v0.4l0.6,0.9 l0.1,0.7l0.3,0.6l0.5,0.5l0.4,0.5l0.8,1.4l0.2,0.5l0.4,0.3l1,1.2l0.4,0.4l0.4,0.2l0.9,0.7l0.6,0.3l0.3,0.5l0.6,0.3l0.8,0.4l0.1,0.2 v0.3l0.1,0.3l0.5,0.4l0.6,0.3l0.1,0.2l0.1,0.2l0.3-0.1l0.3,0.1l0.9,0.7l0.4-0.1h0.3l0.5-0.2l0.3-0.4l-0.1-1.1l-0.5-0.5l-0.7-0.4 l-0.4-0.5l-0.4-0.5l-0.8-1l-1.1-1l-0.5-0.2l-0.3-0.4l-0.3-0.1l-0.2-0.3l-0.5-0.3l-0.3-0.6l-0.6-0.6l-0.1-0.3l0.1-0.3l-0.1-0.3 l-0.4-0.3l-0.2-0.5l-0.2-0.3l-0.4-0.2l-0.7-0.4l-1.6-1.9l-0.7-0.6l-0.7,0.2L1882.7,701L1882.7,701z M1860.7,695l0.2-0.4l0.1-0.8 l-0.2,0.4l-0.2,1L1860.7,695z"
    },
    NZ: {
      d: "M1868.6,832.8l0.9-2.6l-5.8,2.9l-3.4,3.4l-3.2,1.6l-5.9,4.6l-5.6,3.2l-7,3.2l-5.5,2.4l-4.3,1.1l-11.3,6.1l-6.4,4.6 l-1.1,2.3l5.1,0.4l1.5,2.1l4.5,0.1l4-1.8l6.3-2.8l8.1-6.2l4.7-4.1l6.2-2.3l4-0.1l0.6-2.9l4.6-2.5l7-4.5l4.2-2.9l2.1-2.6l0.5-2.6 l-5.6,2.5L1868.6,832.8L1868.6,832.8z M1897.4,802.3l1.9-5.7l-3.1-1.7l-0.8-3.6l-2.3,0.5l-0.4,4.6l0.8,5.7l0.9,2.7l-0.9,1.1 l-0.6,4.4l-2.4,4.1l-4.2,5l-5.3,2.2l-1.7,2.4l3.7,2.5l-0.8,3.5l-6.9,5.1l1.4,0.9l-0.4,1.6l5.9-2.5l5.9-4.2l4.5-3.4l1.6-1.2l1.5-2.7 l2.8-2l3.8,0.2l4.2-3.8l5.1-5.7l-2.1-0.8l-4.6,2.5l-3.2-0.5l-2.9-2.1l2.3-4.9l-1.2-1.8l-2.9,4.4L1897.4,802.3L1897.4,802.3z"
    },
    NI: {
      d: "M514.1,476.8l-1.9-0.2l-0.9,0.9l-2,0.8h-1.4l-1.3,0.8l-1.1-0.3l-0.9-0.9l-0.6,0.2l-0.8,1.5l-0.5-0.1l-0.3,1.3 l-2.1,1.8l-1.1,0.7l-0.6,0.8l-1.5-1.3l-1.4,1.7h-1.2l-1.3,0.2l-0.2,3.1h-0.8l-0.8,1.5l-1.8,0.3l-0.4,0.4l-0.9-1l-0.7,1l2.6,2.9 l2.2,2l1,2.1l2.5,2.6l1.8,2l0.9-0.8l3.5,1.7l1.4-0.8l1.7,0.5l0.8,1.3l1.7,0.4l1.4-1.3l-0.8-1.1l-0.1-1.7l1.2-1.6l-0.2-1.7l0.7-2.7 l0.9-0.7l0.1-2.8l-0.2-1.7l0.4-2.8l0.9-2.5l1.4-2.2l-0.3-2.3l0.4-1.4L514.1,476.8L514.1,476.8z"
    },
    NE: {
      d: "M1051.3,425.6l-8.8-2.8l-18.6,12.2l-15.8,12.5l-7.8,2.8l0.1,14.6l-3,4.3l-0.5,3.9l-4.9,1l-7.6,0.6l-2,2.2l-3.6,0.3 l-0.5,3.1l0.8,2.9l3.1,4.1l0.2,3.1l6.4,1.4l-0.1,4.4l1.9-1.9h2l4.3,3.7l0.3-5.7l1.6-2.6l0.8-3.6l1.4-1.4l6-0.8l5.6,2.4l2.1,2.4 l2.9,0.1l2.6-1.5l6.8,3.3l2.8-0.2l3.3-2.7l3.3,0.2l1.6-0.9l3,0.4l4.3,1.8l4.3-3.5l1.3,0.2l3.9,7l1-0.2l0.2-2l1.6-0.4l0.5-2.9 l-3.6-0.2v-4.1l-2.4-2.3l2.3-8.4l6.9-6l0.2-8.3l1.8-12.9l1.1-2.7l-2.3-2.2l-0.2-2.1l-2-1.6l-1.6-9.9l-3.9,2.4L1051.3,425.6 L1051.3,425.6z"
    },
    NG: {
      d: "M1055.8,492.7l-1,0.2l-3.9-7l-1.3-0.2l-4.3,3.5l-4.3-1.8l-3-0.4l-1.6,0.9l-3.3-0.2l-3.3,2.7l-2.8,0.2l-6.8-3.3 l-2.6,1.5l-2.9-0.1l-2.1-2.4l-5.6-2.4l-6,0.8l-1.4,1.4l-0.8,3.6l-1.6,2.6l-0.3,5.7l-0.2,2.1l1.2,3.8l-1.1,2.5l0.6,1.7l-2.7,4 L993,514l-1,4l0.1,4.1l-0.3,10.2h4.9h4.3l3.9,4.2l1.9,4.6l3,3.9l4.5,0.2l2.2-1.4l2.1,0.3l5.8-2.3l1.4-4.5l2.7-6.1l1.6-0.1l3.3-3.7 l2.1-0.1l3.2,2.6l3.9-2.2l0.5-2.6l1.2-2.6l0.8-3.2l3-2.6l1.1-4.5l1.2-1.4l0.7-3.3l1.5-4l4.6-5l0.3-2.1l0.6-1.1L1055.8,492.7 L1055.8,492.7z"
    },
    KP: {
      d: "M1644.7,302.3L1644.7,302.3l-5.5-3.6l0.1,3.5l-6.3,2.6l2.7,3.3l-4.6-0.2l-3.6-2l-1,4.4l-3.8,3.4l-2.1,4l3.3,1.7 l3.4,0.7l0.8,1l0.4,3.5l1.1,1.2l-0.9,0.7l-0.1,2.9l1.9,1l1.6,0.6l0.8,1.2l1.3-0.5v-1.3l3.1,1.3l0.1-0.6l2.4,0.2l0.7-2.9l3.5-0.3 l2.1-0.4l-0.1-1.6l-4.3-2.8l-2.6-1l0.2-0.7l-1.2-2.8l1.3-1.7l2.9-1l1-1.9l0.3-1.1l1.9-1.4l-2.8-4.5l0.3-2.1l0.9-2l2.2,0.3l0,0l0,0 l0,0L1644.7,302.3L1644.7,302.3z"
    },
    NO: {
      d: "M1088.8,133.1l-6.9,1.1l-7.3-0.3l-5.1,4.4l-6.7-0.3l-8.5,2.3l-10.1,6.8l-6.4,4l-8.8,10.7l-7.1,7.8l-8.1,5.8 l-11.2,4.8l-3.9,3.6l1.9,13.4l1.9,6.3l6.4,3l6-1.4l8.5-6.8l3.3,3.6l1.7-3.3l3.4-4l0.9-6.9l-3.1-2.9l-1-7.6l2.3-5.3l4.3,0.1l1.3-2.2 l-1.8-1.9l5.7-7.9l3.4-6.1l2.2-3.9l4,0.1l0.6-3.1l7.9,0.9v-3.5l2.5-0.3l2.1-1.4l5.1,2.9l5.3-0.3l4.7,1.3l3.4-2.4l1.1-3.9l5.8-1.8 l5.7,2.1l-0.8,3.8l3.2-0.5l6.4-2.2l0,0l-5.4-3.3l4.8-1.4L1088.8,133.1L1088.8,133.1z M1066.2,99.8l-5.6-1l-1.9-1.7l-7.2,0.9l2.6,1.5 l-2.2,1.2l6.7,1.1L1066.2,99.8z M1040.8,91.5l-4.8-1.6l-5.1,0.2l-1,1.5h-5l-2.2-1.5l-9.3,1.6l3.2,3.5l7.6,3.8l5.7,1.4l-3,1.7 l8.4,2.9l4.4-0.2l0.9-3.9l3-0.9l1.2-3.4l8.5-1.8C1053.3,94.8,1040.8,91.5,1040.8,91.5z M1065,88.4l-9.1-1l-3.2,1.2l-5.3-1l-10.4,1.2 l4.3,2h5.1l0.9,1.3l10.6,0.7l10.1-0.5l4.3-2.4C1072.3,89.9,1065,88.4,1065,88.4z"
    },
    OM: {
      d: "M1301,437.8l2.1-2l0.8-1.8l1.6-3.8l-0.1-1.4l-2.1-0.8l-1.6-2.1l-2.9-3.7l-3.3-1.1l-4.1-0.9l-3.3-2.3l-2.9-4.3h-2.8 l-0.1,4.2l1.1,0.8l-2.4,1.3l0.3,2.6l-1.4,2.6l0.1,2.6l2.9,4.5l-2.6,12.7l-16.1,6.4l5.2,10.5l2.1,4.4l2.5-0.3l3.6-2.2l3.1,0.6 l2.5-1.8l-0.2-2.5l2.1-1.6h3.4l1.2-1.3l0.2-3.1l3.3-2.4h2.6l0.4-0.8l-1-4.2l0.6-3.2l1-1.5l2.5,0.3L1301,437.8L1301,437.8z M1284.4,407.4l0.2-2.6l-0.7-0.6l-1.3,2.2l1.3,2.2L1284.4,407.4z"
    },
    PK: {
      d: "M1388.3,346.3l-9.4-2.6l-2.9-5l-4.7-3l-2.8,0.7l-2.4,1.2l-5.8,0.8l-5.3,1.3l-2.4,2.8l1.9,2.8l1.4,3.2l-2,2.7 l0.8,2.5l-0.9,2.3l-5.1-0.2l3,4.2l-3,1.6l-1.5,3.8l1.1,3.8l-1.7,1.8l-2.1-0.6l-4,0.9l-0.2,1.7h-4l-2.3,3.6l0.8,5.4l-6.6,2.6 l-3.8-0.5l-0.9,1.4l-3.3-0.8l-5.3,0.9l-9.6-3.2l3.2,3.3l2.8,3.9l5.6,2.7l1,5.7l2.7,1l0.9,2.9l-7.4,3.3l-1.2,7.4l7.6-0.9l8.9-0.1 l9.9-1.2l4.9,4.8l2.1,4.6l4.2,1.6l3.2-4.2h12l-1.8-5.5l-3.5-3.2l-1.3-4.9l-4-2.9l4.9-6.6l6.4,0.5l4.5-6.7l2.1-6.5l3.9-6.3l-1-4.5 l3.7-3.7l-5-3.1l-2.9-4.3l-3.2-5.6l1.9-2.8l8.5,1.6l5.7-1L1388.3,346.3L1388.3,346.3z"
    },
    PS: {
      d: "M1166.9,366.1l-2-0.9l-0.7,4.3l1.4,0.7l-1.2,0.8l-0.1,1.7l2.4-0.8l0.6-1.9L1166.9,366.1L1166.9,366.1z"
    },
    PA: {
      d: "M543.5,517l-2-1.8l-1.7-1.9l-2.5-1.1l-3.1-0.2l0.3-0.6l-3.1-0.4l-2,1.9l-3.5,1.3l-2.5,1.6l-2.7,0.5l-1.5-1.6 l-0.5,0.5l-2.3-0.3l0.2-1.3l-1.9-2.3l-2.2,0.6l-0.1,2.5l1.1,1l-0.8,0.7l0.1,1.2l-0.5,1.3l-0.4,1.2l0.6,1l0.3-1.4h2.4l1.4,0.7 l2.3,0.5l1,2.5l1.8,0.4l0.8-1.1l0.8,3.8l2.6-0.3l0.9-0.9l1.5-0.9l-2.5-3.4l0.6-1.3l1.3-0.3l2.3-1.6l1.2-2.2l2.5-0.4l2.7,1.8l1,2.1 l1.4,0.4l-1.5,1.7l1,3.5l1.8,1.8l0.9-3.1l1.8,0.5l1.1-1.9l-1.1-3.8L543.5,517z"
    },
    PG: {
      d: "M1850.7,615.6l0.9-1.8l-2.4-2.2l-2.5-4l-1.6-1.5l-0.5-1.9l-0.8,0.7l0.9,4.8l2.2,4l2.2,2.5L1850.7,615.6 L1850.7,615.6z M1829.5,607l2.1-3.9l0.4-3.5l-1.1-1l-3.4,0.1l0.4,3.7l-3.3,2.3l-1.7,2.2l-3.2,0.5l-0.4-3.4l-0.8,0.1l-1,3.1l-3.1,0.5 l-5-0.9l-0.6,1.9l3.1,1.8l4.5,1.9h2.9l3-1.5l3.2-1.6l1-1.8L1829.5,607L1829.5,607z M1801.7,619.2l-0.9-4.3l5.2-0.7l-1.1-3.3l-9.1-4 l-0.6-3.7l-2.9-3.2l-3.7-3.3l-10.2-3.6l-9.6-4.4l-1,20.7l-1.5,20.8l5.7,0.2l3.1,1.1l4.6-2.2l-0.3-4.7l3.6-2.1l4.9-1.8l7,2.8l2.4,5.6 l2.9,3.5l3.9,4l5.5,1l4.8,0.7l1.1,1.6l3.8-0.4l0.8-1.8l-5.6-2.7l1.8-1.2l-4.2-1.1l0.5-2.8l-3.2,0.2l-3-6.8L1801.7,619.2 L1801.7,619.2z M1836.4,600.8l-0.5-3.3l-2-2.1l-2.1-2.6l-2.3-1.5l-1.9-1.4l-2.9-1.8l-1.6,1.5l3.9,1.9l3.1,2.7l2.4,2.1l1.2,2.4 l0.8,3.8L1836.4,600.8L1836.4,600.8z"
    },
    PY: {
      d: "M655.7,700.5l-0.3-1.9l-5.4-3.3l-5.1-0.1l-9.5,1.9l-2.1,5.6l0.2,3.4l-1.5,7.6l11.2,10.4l4.6,1l7.2,4.7l5.9,2.5 l1.1,2.8l-4.2,9.6l5.7,1.8l6.2,1l4.2-1.1l4.3-4.8l0.3-5.7l0.7-3.6l0.3-3.8l-0.3-3.5l-2.1-1.2l-2,1.1l-2-0.3l-0.9-2.5l-1-5.8 l-1.2-1.9l-3.9-1.7l-2.1,1.2l-6-1.2l-0.4-8.6L655.7,700.5L655.7,700.5z"
    },
    PE: {
      d: "M584.3,599.5l-2.9-3.4l-1.7-0.1l3.5-6.5l-4.4-3l-3.3,0.6l-2.1-1.1l-3,1.7l-4.2-0.8l-3.4-6.7l-2.7-1.7l-1.8-3l-3.7-3 l-1.5,0.6l0.8,4.9l-1.7,4.1l-6,6.7l-6.7,2.5l-3.3,5.5l-0.9,4.3l-3.1,2.6l-2.5-3.2l-2.3-0.7l-2.3,0.5l-0.2-2.3l1.5-1.5l-0.7-2.7 l-4.4,4l-1.6,4.5l3,6.1l-1.7,2.8l4.1,2.6l4.5,4.1l2,4.7l2.4,2.9l6,12.7l6.2,11.7l5.4,8.4l-0.8,1.8l2.8,5.3l4.6,3.9l10.7,6.9 l11.6,6.4l0.7,2.6l5.9,3.7l2.7-1.6l1.2-3.3l2.8-6.9l-2.8-5.3l1.1-2.1l-1.2-2.4l1.9-3.2l-0.3-5.4l-0.1-4.5l1.1-2.1l-5.5-10.3l-3,1.1 l-2.6-0.7l-0.2-9.7l-4.4,3.8l-4.9-0.2l-2.3-3.4l-3.7-0.3l1-2.8l-3.3-3.8L562,620l1.5-1.1l-0.1-2.7l3.3-1.9l-0.7-3.4l1.3-2.2l0.4-3 l6.2-4.3l4.6-1.2l0.7-1L584.3,599.5L584.3,599.5z"
    },
    PH: {
      d: "M1684.6,518.6l-0.6-2.3l-0.8-3.2l-4.8-3l0.8,4.9l-3.9,0.2l-0.7,2.8l-4.2,1.7l-2.2-2.8l-2.8,2.4l-3.4,1.7l-1.9,5.4 l1.1,1.9l3.9-3.6l2.7,0.3l1.5-2.7l3.8,3l-1.5,3.1l1.9,4.6l6.8,3.7l1.4-3l-2.1-4.7l2.4-3.2l2.5,6.4l1.5-5.8l-0.6-3.5L1684.6,518.6 L1684.6,518.6z M1670.1,506.8v-6.1l-3.6,6.1l0.5-4.2l-3,0.3l-0.3,4l-1.2,1.8l-1,1.7l3.8,4.4l1.6-1.9l1.4-4L1670.1,506.8 L1670.1,506.8z M1640,512.9l2.6-4.4l3.4-3.5l-1.5-5.2l-2.4,6.3l-2.9,4.4l-3.8,4l-2.4,4.4L1640,512.9L1640,512.9z M1657.4,496.5 l1.2,3l-0.1,3.3l0.5,2.9l3.3-1.9l2.4-2.7l-0.2-2.6h-3.6L1657.4,496.5L1657.4,496.5z M1677.4,494.8l-1.8-2.4l-5.4-0.1l4,4.8l0.3,2.4 l-3.3-0.5l1.2,3.9l1.7,0.3l0.7,4.5l2.5-1.4l-1.7-4l-0.4-2.1l4.5,1.7L1677.4,494.8L1677.4,494.8z M1654.5,489l-2.2-2.3l-4.8-0.2 l3.4,4.8l2.8,3.2L1654.5,489L1654.5,489z M1648.1,454.4h-3.3l-0.9,5.8l1.1,9.9l-2.6-2l1.2,6l1.2,2.8l3.3,3.7l0.4-2.3l1.8,1.4 l-1.5,1.7l0.1,2.6l2.9,1.4l5-0.9l4,3.8l1.1-2.4l2.5,3.4l4.8,3.1l0.2-2.9l-2-1.6l0.1-3.4l-7.5-3.6l-2.3,0.8l-3.1-0.7l-2-5.1l0.1-5.1 l3-2.1l0.6-5.3l-2.7-4.6l0.4-2.6l-0.7-1.6l-1.5,1.6L1648.1,454.4L1648.1,454.4z"
    },
    PN: {
      d: "M274.2,727.4v-0.2l-0.1-0.2l-0.2-0.1l-0.1,0.1l0.1,0.2l0.2,0.2H274.2L274.2,727.4z"
    },
    PL: {
      d: "M1069.4,228.3l-4.6-0.1l-0.5-1.4l-4.8-1.1l-5.7,2.1l-7.1,2.8l-3.1,1.7l1.4,3.1l-1.2,1.6l2,2.2l1.4,3.3l-0.1,2.1 l2.3,3.9l2.4,1.9l3.7,0.6l-0.1,1.7l2.7,1.2l0.6-1.5l3.4,0.6l0.7,2l3.6,0.3l2.6,3.1l0.3,0.4l1.9-0.9l2.7,2.2l2.8-1.3l2.4,0.6l3.4-0.8 l4.9,2.3l1.1,0.4l-1.6-2.8l3.8-5.1l2.3-0.7l0.3-1.8l-3.1-5.3l-0.5-2.7l-1.9-2.9l2.7-1.2l-0.3-2.4l-1.7-2.3l-0.6-2.7l-1.4-1.9 l-2.5-0.6l-8.7,0.1L1069.4,228.3L1069.4,228.3z"
    },
    PT: {
      d: "M937.6,335.9l-0.4-2.1l2-2.5l0.8-1.7l-1.8-1.9l1.6-4.3l-2-3.8l2.2-0.5l0.3-3l0.9-0.9l0.2-4.9l2.4-1.7l-1.3-3.1 l-3-0.2l-0.9,0.8h-3l-1.2-3.1l-2.1,0.9l-1.9,1.6l0.1,2.1l0.9,2.2l0.1,2.7l-1.3,3.8l-0.4,2.5l-2.2,2.3l-0.6,4.2l1.2,2.4l2.3,0.6 l0.4,4l-1,5.1l2.8-0.7l2.7,0.9L937.6,335.9L937.6,335.9z"
    },
    PR: {
      d: "M600.8,457.3v-0.1l0,0h0.1v-0.1l0.1-0.1l0,0v-0.1h-0.1l0,0h-0.3h-0.1v0.1v0.1l0.2,0.1l0,0L600.8,457.3L600.8,457.3 L600.8,457.3z M614.4,457l0.7-0.2v-0.1l-0.4-0.1h-0.6l-0.5,0.2l0.1,0.2h0.2H614.4z M610.7,454.8l-0.1-0.2h-0.2l-3.5-0.1l-1.3-0.2 l-0.3,0.1l-0.3,0.1l-0.1,0.4l-0.2,0.2l-0.3,0.2l0.1,0.3l0.1,0.2l0.2,0.4l-0.1,0.5l-0.2,1l0.3,0.2l0.7-0.1l0.3,0.1l0.3,0.1l0.4-0.1 l0.4-0.2l0.9,0.1l0.5-0.1l0.6,0.3l0.4-0.1l0.2,0.1h0.3h0.6l0.9-0.2l0.8-0.5l0.3-0.5l0.4-0.3l0.6-0.4v-0.9l-0.7-0.1l-0.6-0.3 l-1.1-0.1h-0.1l0.1,0.2h-0.1L610.7,454.8L610.7,454.8z"
    },
    QA: {
      d: "M1258,415.5l0.8-3.8l-0.5-3.7l-1.9-2l-1.4,0.7l-1.1,3.3l0.8,4.7l1.8,1.2L1258,415.5L1258,415.5z"
    },
    RE: {
      d: "M1284,707.9l0.2-0.4l0.1-0.8l-0.4-0.8l-0.4-0.7l-0.4-0.2l-0.8-0.1l-0.7,0.3l-0.4,0.6l-0.2,0.3l0.4,1.1l0.2,0.3 l1.1,0.6h0.5L1284,707.9L1284,707.9z"
    },
    RO: {
      d: "M1108.1,266.3h-2.1l-1,1.5l-3.6,0.6l-1.6,0.9l-2.4-1.5h-3.2l-3.2-0.7l-1.9,1.3l-2.9,1.3l-1.9,4.2l-2.6,4.3l-3.8,1.1 l2.9,2.5l0.8,1.9l3.2,1.5l0.7,2.5l3.1,1.8l1.4-1.3l1.4,0.7l-1.1,1.1l1,1l1.8,2.6l1.9-0.5l4,1l7.5,0.3l2.3-1.6l5.8-1.4l4,2.2l3,0.7 l0.4-7.4l1.6,0.5l2.3-1.3l-0.4-1.6l-2.4-1.1l-2.2,1l-2.4-1.1l-1.3-2.8l0.2-2.7l-0.6-2.7l-3.4-3.7l-1.9-2.6l-1.8-1.9L1108.1,266.3 L1108.1,266.3z"
    },
    RU: {
      d: "M1332.3,95.1l-4.5-4l-13.6-4.1l-9.4-2.1l-6.2,0.9l-5.3,2.9l5.8,0.8l6.6,3.2l8,1.7l11.5,1.3 C1325.2,95.7,1332.3,95.1,1332.3,95.1z M1153.6,87.8l0.9-0.6l-5.7-0.9L1146,87l-1.3,1l-1.5-1.2l-5.2,0.1l-6.2,0.8l7.7,0.1l-1.1,1.3 l4.4,1l3.6-0.7l0.1-0.7l2.9-0.3C1149.4,88.4,1153.6,87.8,1153.6,87.8z M1354.1,97.7l-1.5-1.8l-12.5-2.6l-3-0.3l-2.2,0.5l1.2,6 C1336.1,99.5,1354.1,97.7,1354.1,97.7z M1369.3,104l-9.2-0.7l3.4-1.2l-8.2-1.5l-6.1,1.9l-1,2l1.5,2.1l-6.9-0.1l-5.3,2.6l-4.3-1.1 l-9.3,0.5l0.3,1.3l-9.2,0.7l-4.9,2.4l-4.2,0.2l-1.2,3.3l5.5,2.6l-7.7,0.7l-9.5-0.3l-5.8,1.1l4.8,5.4l6.9,4.3l-9.6-3l-7.9,0.3l-5.1,2 l4.5,3.8l-4.9-1l-2.1-5l-4.2-2.8l-1.8,0.1l3.6,3.7l-4.6,3.5l8.1,4.2l0.4,5.4l2.9,2.9l4.7,0.5l0.4,3.5l4.4,3.1l-1.9,2.6l0.5,2.7 l-3.7,1.4l-0.5,2l-5.3-0.8l3.5-7.8l-0.5-3.6l-6.7-3.3l-3.8-7.3l-3.7-3.7l-3.6-1.6l0.8-4.2l-2.9-2.9l-11.3-1.4l-2.1,1l0.5,4.7 l-4.3,4.7l1.2,1.7l4.7,4.1l0.1,2.6l5.3,0.5l0.8,1.1l5.8,2.9l-1,2.8l-18.5-6.1l-6.6-1.7l-12.8-1.6l-1.2,1.7l5.9,3.1l-2.7,3.6 l-6.4-3.2l-5,2.2l-7.6,0.1l-2.1,1.9l-5.3-0.6l2.5-3.3l-3.2-0.2l-12.3,4.6l-7.6,2.6l0.4,3.5l-6,1.2l-4-1.9l-1.2-3l5-0.7l-3.6-3 l-12.2-1.8l4.3,3.4l-0.8,3.2l4.7,3.3l-1.1,3.8l-4.6-1.9l-4-0.3l-8,5.4l4.2,4.1l-3.2,1.4l-11.4-3.5l-2.1,2.1l3.3,2.4l0.2,2.7 l-3.8-1.4l-6-1.7l-1.9-5.8l-1-2.6l-8-4l2.9-0.7l20.1,4.2l6.4-1.5l3.7-2.9l-1.6-3.6l-4-2.6l-17.6-6.1l-11.6-1.3l-7.6-3.2l-3.6,1.8 l0,0l-6.4,2.2l-3.2,0.5l0.4,3.7l7.2,3.7l-2.8,4.1l6.4,6.3l-1.7,4.8l4.9,4.1l-0.9,3.7l7.3,3.9l-0.9,2.9l-3.3,3.3l-7.9,7.4l0,0 l5.3,2.8l-4.5,3.2l0,0l0.9,1l-2.6,3.4l2.5,5.5l-1.6,1.9l2.4,1.4l1,2.8l2.1,3.6l5.2,1.5l1,1.4l2.3-0.7l4.8,1.4l1,2.9l-0.6,1.6 l3.7,3.9l2.2,1.1l-0.1,1.1l3.4,1.1l1.7,1.6l-1.6,1.3l-3.9-0.2l-0.8,0.6l1.5,2l2,3.9l0,0l1.8,0.2l1-1.4l1.5,0.3l4.8-0.5l3.8,3.4 l-0.9,1.3l0.7,1.9l4,0.2l2.2,2.7l0.2,1.2l6.6,2.2l3.5-1l3.6,2.9l2.9-0.1l7.6,2l0.4,1.9l-1.3,3.2l1.8,3.4l-0.3,2.1l-4.7,0.5l-2.2,1.7 l0.4,2.8l4.2-1l0.4,1.3l-6.8,2.6l3.2,2.4l-3.2,5.2l-3.4,1l5,3.6l6.2,2.4l7.4,5.1l0.5-0.7l4.5,1.1l7.7,1l7.5,2.9l1.1,1.2l2.9-1 l5.1,1.3l2.1,2.5l3.5,1.4l1.5,0.2l4.3,3.8l2.4,0.4l0.5-1.5l2.6-2.5l0,0l-7.3-7.3l-0.4-4.1l-5.9-5.9l3.5-6.3l4.6-1.1l1.4-3.7l-2.8-1 l-0.2-3.2l-4.2-4.1l-3.6,0.2l-5.3-4.3l1.7-4.7l-1.7-1.2l2.1-6.8l6,3.6l-0.7-4.6l8.1-6.6l7.5-0.2l11.9,4.3l6.6,2.4l4.3-2.5l7.6-0.2 l7.3,3.2l0.8-1.8l6.9,0.3l0.2-3l-9.4-4.2l3.6-2.9l-1.5-1.7l3.9-1.6l-5-4.1l1.4-2.1l16.8-2.1l1.7-1.5l10.8-2.2l3.1-2.5l9,1.3l4.3,6.3 l4.3-1.5l7,2.1l1.2,3.3l4.4-0.4l9.1-5.7l-0.8,1.9l8.3,4.7l18.1,15.5l1.1-3.3l8.3,3.6l6.2-1.6l3.2,1.1l4.1,3.6l3.9,1.2l3.3,2.6l6-0.9 l4.3,3.8l1.7-0.5l4.7-1l6.6-5.4l5.9-2.9l5.3,1.9l5.1,0.1l4.7,2.9l5,0.2l7.9,1.6l2.4-4.3l-4-3.6l1.3-6.4l6.9,2.5l4.8,0.8l6.6,1.5 l3.7,4.6l8.4,2.6l3.9-1.1l5.7-0.8l5.4,0.8l6.5,3l4.9,3.1h4.5l6.7,1l3.6-1.6l5.8-1l4.5-4.4l3.3,0.7l3.9,2.1l5.5-0.5l7.3,2.3l4.4-3.9 l-1.9-2.7l-0.1-6.5l1.2-2l-2.5-3.3l-3.7-1.5l1.7-3l5.1-1.1l6.2-0.2l8.5,1.8l5.9,2.3l7.7,6.1l3.8,2.7l4.4,3.7l6.1,6.1l9.9,1.9 l8.9,4.5l6,5.8h7.5l2.6-2.5l6.9-1.8l1.3,5.6l-0.4,2.3l2.8,6.8l0.6,6l-6.8-1.1l-2.9,2.2l4.7,5.3l3.8,7.3l-2.5,0.1l1.9,3.1l0,0 l1.4,1.1l0,0l0,0l0,0l-0.4-2l4-4.5l5.1,3l3.2-0.1l4.4-3.6l1-3.7l2.1-7.1l1.9-7.2l-1.3-4.3l1-9l-5.2-9.9l-5.5-7.3l-1.3-6.2l-4.7-5.1 l-12.7-6.7l-5.6-0.4l-0.3,3l-5.8-1.3l-5.7-3.8l-8-0.7l4.9-14.1l3.5-11.5l13.1-1.8l14.9,1l2.5-2.8l7.9,0.8l4.3,4.3l6.4-0.6l8.4-1.6 l-7.7-3.5v-9.8l9.1-1.9l12.1,7.1l3.6-6.4l-3.2-4.7l4.7-0.5l6.5,8.1l-2.4,4.6l-0.8,6l0.3,7.5l-5.7,1.3l2.8,2.7l-0.1,3.6l6.4,8.3 l16,13.4l10.5,8.8l5.7,4.3l1.6-5.7l-4.5-6.2l5.7-1.5l-5.4-6.9l5-3.1l-4.7-2.6l-3.4-5l4.1-0.2l-9-8.6l-6.7-1.4l-2.9-2.4l-1.1-5.6 l-3.1-3.9l7,0.8l1.3-2.5l4.7,2.2l6.1-4.6l11.4,4l-1.7-2.6l2-3.6l1.5-4l3.1-0.7l6.5-4.3l9.8,1.2l-0.9-1.5l-3.8-2.3l-4.1-1.6l-9.1-4.6 l-8.1-3l6.1,0.4l2-2.5l0,0l-32.9-21.9l-9.4-2.3l-15.7-2.6l-7.9,0.3l-15.2-1.4l1.8,2.3l8.5,3.4l-2.5,1.8l-14.2-4.8l-6.8,0.6l-9.2-1.1 l-7,0.2l-3.9,1.1l-7.2-1.6l-5.1-3.8l-6.5-2.2l-9.2-0.9l-14.7,1l-16.1-4l-7.8-3l-40.1-3.4l-2.1,2.2l9.3,4.8l-7.5-0.7l-1,1.5l-9.7-1.6 l-5,1.4l-9.3-2.4l3,5.5l-8.9-2.1l-10-4.1l-0.4-2.2l-6-3.3l-9.8-2.6h-6.1l-9.3-0.9l4.7,3.9l-17.2-0.8l-3.9-2.3l-13.3-0.9l-5.3,0.8 l-0.1,1.3l-5.8-3.2l-2.3,0.9l-7.2-1.2l-5.6-0.7l1.1-1.5l6.6-2.8l2.3-1.5l-2.4-2.5l-5.5-1.9l-11.5-2.3l-10.8-0.1l-1.9,1.2L1369.3,104 L1369.3,104z M1207.1,135.6l-9.9-4.3l-3.1-4.3l3.3-4.9l2.8-5l8.6-4.7l9.8-2.4l11.3-2.4l1.3-1.5l-4.2-1.9l-6.6,0.6l-4.9,1.8 l-11.7,0.9l-10.1,3.1l-6.8,2.7l2.5,2.2l-6.6,4.4l3.9,0.7l-5.4,4.3l1.6,2.8l-3.4,1.1l1.9,2.8l7.9,1.4l2.2,2.3l13.4,0.7L1207.1,135.6 L1207.1,135.6z M1521.1,110.9l-17.9-2.6l-10.2-0.2l-3.4,0.9l3.4,3.4l12.4,3.2l4.5-1.2l14.2,0.2 C1524.1,114.6,1521.1,110.9,1521.1,110.9z M1546.3,113.2l-11.7-1.3l-8.2-0.7l1.7,1.6l10.3,2l6.8,0.4L1546.3,113.2L1546.3,113.2z M1533.8,122.7l-2.5-1.4l-8.3-1.9l-4.1,0.5l-0.8,2l1.1,0.2l8.8,0.6C1528,122.7,1533.8,122.7,1533.8,122.7z M1696.4,135l-6-3.6 l-1.4,2.2l3.5,1.6L1696.4,135z M1084,228.9l-0.6-1.5l0.2-1.7l-2.2-0.9l-5-1.1l-6.3,2l-0.7,2.6l5.9,0.7L1084,228.9z M1673.7,250.7 l-7.2-6.2l-5.1-6l-6.8-5.8l-4.9-4l-1.3,0.8l4.4,2.8l-1.9,2.8l6.8,8.3l7.8,6l6.4,8.3l2.4,4.6l5.5,6.8l3.8,6l4.6,5.2l-0.1-4.8l6.5,3.8 l-3-4.4l-9.5-6.3l-3.7-9l8.9,2L1673.7,250.7L1673.7,250.7z"
    },
    RW: {
      d: "M1147.6,579.4l-3.3,1.9l-1.4-0.6l-1.6,1.8l-0.2,3.8l-0.8,0.4l-0.6,3.5l3.5,0.5l1.7-3.6l3,0.4l0,0l1.6-0.8l0.4-3.7 L1147.6,579.4L1147.6,579.4z"
    },
    KN: {
      d: "M629.9,463.2v-0.3l-0.2-0.2h-0.3v0.5l0.2,0.2L629.9,463.2z M629.4,462.5l-0.1-0.2l-0.1-0.1l-0.2-0.4l-0.4-0.4 l-0.2,0.1l-0.1,0.2v0.1l0,0l0.3,0.3l0.4,0.1l0.2,0.4L629.4,462.5L629.4,462.5z"
    },
    LC: {
      d: "M637.4,484.2l0.1-1.2l-0.1-0.5l-0.2,0.1l-0.3,0.4l-0.4,0.6l-0.1,0.3v0.6l0.6,0.4L637.4,484.2L637.4,484.2z"
    },
    VC: {
      d: "M634.5,491.4L634.5,491.4v-0.1h0.1v-0.1l0,0v-0.1h-0.1v0.1l0,0v0.1h-0.1L634.5,491.4L634.5,491.4L634.5,491.4 L634.5,491.4z M635.2,489.5l0.1-0.2l0.1-0.1l0,0l0,0l-0.1-0.1l0,0v0.1l-0.2,0.1l0,0v0.1l0,0v0.1H635h-0.1l0,0h0.1l0,0l0.1,0.1l0,0 l0,0l0,0L635.2,489.5L635.2,489.5z M635.5,488.4l0.3-0.2l0.1-0.6l-0.1-0.4h-0.2l-0.3,0.1l-0.2,0.3l-0.1,0.5L635.5,488.4L635.5,488.4 L635.5,488.4z"
    },
    SM: {
      d: "M1040.3,293.5l-0.7,0.1l-0.2-0.9l0.9-0.3L1040.3,293.5z"
    },
    ST: {
      d: "M1014.1,571.4l0.5-0.8v-0.5l-0.3-0.5h-0.4l-0.5,0.4l-0.3,0.4v0.3l0.1,0.7l0.1,0.3l0.3,0.2L1014.1,571.4 L1014.1,571.4z M1018.4,562.2l0.2-0.4v-0.2l-0.1-0.1l-0.1-0.1l-0.2,0.1l-0.3,0.5l0.1,0.2l0.2,0.2L1018.4,562.2L1018.4,562.2z"
    },
    SA: {
      d: "M1228.7,387l-10.2-0.5l-16.7-12.7l-8.5-4.5l-6.7-1.7l-0.9,1l-10.4,3.1l6.1,6.4l-1.7,1l-0.7,2.2l-4,0.8l-1.1,2.3 l-2.1,2l-6.1-1l-0.5,2.5v2.2l-0.6,3.5h2.7l3.2,4.4l3.7,5.1l2.5,4.7l1.7,1.5l1.7,3.3l-0.2,1.4l2.1,3.7l3,1.3l2.8,2.5l3.6,7v3.8 l0.9,4.4l4,6.1l2.5,1l4.1,4.4l1.9,5.2l3.2,5.3l3,2.3l0.6,2.5l1.8,1.9l0.9,2.8l2.3-2.1l-0.7-2.7l1.2-3.1l2.4,1.7l1.5-0.6l6.4-0.2 l1,0.7l5.4,0.6l2.1-0.3l1.6,2.1l2.5-1l3.5-6.7l5-2.9l15.7-2.4l16.1-6.4l2.6-12.7l-2.9-4.5l-1,1.3l-16.8-3.2l-2.6-6.4l-0.4-1.5 l-1.2-2.4l-1.5,0.4l-1.8-1.2l-1-1.6l-0.9-2.1l-1.7-1.8l-1-2.1l0.4-2.1l-0.6-2.7l-4-2.6l-1.2-2.3l-2.9-1.4l-2.7-5.5l-3.8,0.2 l-1.7-3.1L1228.7,387L1228.7,387z"
    },
    SN: {
      d: "M908.9,479.2l-3.6-4.4l-3.2-4.7l-3.7-1.7l-2.6-1.8h-3.1l-2.8,1.4l-2.7-0.5l-2,2l-1.3,3.3l-2.8,4.4l-2.5,1.2l2.7,2.3 l2.2,5l6.1-0.2l1.3-1.5l1.8-0.1l2.1,1.5l1.8,0.1l1.8-1.1l1.1,1.8l-2.4,1.5l-2.4-0.1l-2.4-1.4l-2.1,1.5h-1l-1.4,0.9l-5-0.1l0.8,4.9 l3-1.1l1.8,0.2l1.5-0.7l10.3,0.3l2.7,0.1l4,1.5l1.3-0.1l0.4-0.7l3,0.5l0.8-0.4l0.3-2l-0.4-2.4l-2.1-1.8l-1.1-3.7L908.9,479.2 L908.9,479.2z"
    },
    RS: {
      d: "M1084.8,285.2l-3.2-1.5l-0.8-1.9l-2.9-2.5l-3.2-0.2l-3.7,1.6l0,0l1.5,2.4l1.7,1.8l-1.7,2.3l0,0h1.8l-1,2.7l2.7,2.3 l-0.5,2.9l-1.2,0.3l1.5,1.1l0.8,0.8l1.8,0.7l2,1.2l-0.4,0.6l1.2-0.5l0.5-2l0.9-0.4l0.8,0.9l1,0.4l0.8,1l0.8,0.3l1.1,1.1h0.8 l-0.5,1.5l-0.5,0.7l0.2,0.5l1.7-0.4l2.4-0.1l0.7-0.9l-0.6-0.7l0.7-2l1.7-1.9l-2.8-2.6l-0.7-2.3l1.1-1.4l-1-1l1.1-1.1l-1.4-0.7 l-1.4,1.3l-3.1-1.8L1084.8,285.2L1084.8,285.2z"
    },
    SC: {
      d: "M1288.5,602l-0.5-0.8l-0.4,0.3l0.2,0.3l0.3,0.2l0.1,0.4l0.3,0.2V602L1288.5,602z"
    },
    SL: {
      d: "M919.4,518.7l-1.5,0.3v-2.3L917,515l0.2-1.8l-1.2-2.7l-1.5-2.3H910l-1.3,1.2l-1.5,0.2l-1,1.4l-0.7,1.7l-3,2.8 l0.7,4.7l0.9,2.3l2.9,3.5l4.1,2.5l1.5,0.5l1.3-2l0.3-1.9l2.6-3.4L919.4,518.7L919.4,518.7z"
    },
    SG: {
      d: "M1561,563.7l0.1-0.2l-0.2-0.2l-0.3-0.1l-0.5-0.2l-0.6,0.1l-0.3,0.6l0.9,0.4L1561,563.7L1561,563.7z"
    },
    SX: {
      d: "M627.1,457.2L627.1,457.2l0.2,0.2l0.3,0.1l0.1-0.1v-0.2H627.1z"
    },
    SK: {
      d: "M1087.4,260.9l-4.9-2.3l-3.4,0.8l-2.4-0.6l-2.8,1.3l-2.7-2.2l-1.9,0.9l-0.3-0.4h-1.5l-0.6,1.1l-1.1,0.3l-0.2,1.4 l-0.9,0.3l-0.1,0.6l-1.6,0.6l-2.2-0.1l-0.6,1.4l-0.3,0.8l0.7,2.1l2.6,1.6l1.9,0.7l4.1-0.8l0.3-1.2l1.9-0.2l2.3-1l0.6,0.4l2.2-0.7 l1-1.5l1.6-0.4l5.5,1.9l1-0.6l0.7-2.5L1087.4,260.9L1087.4,260.9z"
    },
    SI: {
      d: "M1059.4,277l-1.2-2.1l-0.8-0.1l-0.9,1.1l-4.3,0.1l-2.4,1.4l-4.2-0.4l-0.3,3l1.4,2.7l-1.1,0.5l3.5,0.2l0.8-1l1.8,1 l2,0.1l-0.2-1.7l1.7-0.6l0.3-2.5L1059.4,277L1059.4,277z"
    },
    SB: {
      d: "M1909.1,646.4l-0.2-0.2l-0.1-0.4h-0.3l-0.3,0.1l0.2,0.6h0.2L1909.1,646.4L1909.1,646.4z M1873.5,647.2l-0.1-0.2 l-0.5-0.4l-1.9-1.3l-0.4-0.1l-0.1,0.1l-0.1,0.3l0.1,0.2l0.5,0.1v0.1l0.3,0.2l0.7,0.2l0.4,0.3l0.1,0.5l0.3,0.1l0.3,0.1L1873.5,647.2 L1873.5,647.2z M1905.5,640.6L1905.5,640.6l0.2-0.4l-0.2-0.1l-0.5-0.1l-0.7,0.1l-0.3,0.2l-0.2,0.3h-0.2v0.2l0.1,0.4l0.2-0.1l0.2,0.1 l0.5-0.5h0.3h0.1L1905.5,640.6L1905.5,640.6z M1881.1,638.3l-0.1-0.2l-0.2-0.1l-0.9-0.7l-0.5-0.2h-0.5l-0.1,0.5v0.3h0.6l0.4,0.2v0.6 l0.2,0.2v0.5l1.2,0.9l0.7,0.4l0.7,0.1l0.4,0.2l0.5-0.1l0.5,0.2l0.4-0.1l-0.4-0.3v-0.4l-0.5-1.3l-0.3-0.3l-0.5,0.1l-0.5-0.2h-0.4 L1881.1,638.3L1881.1,638.3z M1880.7,633.4l-0.6-1.6l-0.2-0.1l0.1,0.6l0.1,0.4l-0.1,0.5l-0.1,0.6l0.2,0.2l0.2-0.2l0.4,0.5v-0.2 V633.4z M1870.9,631.2l-0.3-0.1l-0.4,0.3l-0.1,0.3l-0.1,0.7v0.4l0.3,0.7l0.3,0.5l0.3,0.3l0.2,0.2l0.9,0.1l1.7,0.1l0.9,0.4l0.9,0.2 l0.4-0.1l0.5-0.2l0.1-0.1l-0.1-0.6l-0.2-0.3l-0.4-0.2l-0.2-0.6l-0.5-0.4l-0.9-0.7h-1.6l-0.6,0.1L1870.9,631.2L1870.9,631.2z M1873.5,629.4l-0.5,0.2v0.3l0.4,0.1l0.4,0.2l0.1,0.3l0,0l0.2-0.1l0.4,0.2l0.2-0.3l-0.4-0.5l-0.4-0.3h-0.1L1873.5,629.4 L1873.5,629.4z M1867.9,630.2l0.3-0.2v-0.4h-0.3l-0.1-0.2h-0.2l-0.3,0.2l-0.2,0.3l0.1,0.2h0.4L1867.9,630.2L1867.9,630.2 L1867.9,630.2z M1859.5,627.9l-0.1-0.2l-0.3-0.2h-0.2l-0.5,0.1l0.1,0.1l0.6,0.3l0.3,0.1L1859.5,627.9L1859.5,627.9z M1862.6,628.3 l0.3-0.2l-0.1-0.2l-0.1-0.5l-0.4,0.7l0.1,0.2H1862.6z M1862.1,627.4v-0.2V627l-0.2-0.1l0.4-0.3l-0.1-0.1l-0.6-0.2l-0.2,0.2l-0.2,0.1 l-0.1,0.1l-0.1,0.1l-0.1,0.5l0.2,0.4l0.4,0.2L1862.1,627.4L1862.1,627.4z M1858.1,627.6l-0.3-0.4l0.1-0.5l0.2-0.1l0.2-0.5l-0.1-0.4 l-0.2,0.1l-0.7,0.6l-0.1,0.3l0.6,0.8L1858.1,627.6L1858.1,627.6L1858.1,627.6z M1871.1,626.3l-0.2-0.4v-0.2l-0.3-0.2l-0.2,0.1 l-0.1,0.3l0.1,0.2l0.4,0.3L1871.1,626.3L1871.1,626.3z M1877.1,625.1h-0.2l-0.1,0.1h-0.2h-0.3l-0.1,0.2l0.6,1.1l-0.3,0.5l0.4,2.2 l0.4,1.2l0.8,0.8v0.2l0.8,0.5l0.6,1.3l0.2,0.1l0.1-0.2v-0.6l-0.5-1.1l0.1-0.8l-0.2-0.3V630l-0.2-0.8l-0.6-0.7l-0.3-0.1l-0.2-0.3 l0.2-0.6l0.2-0.2l0.1-0.3L1877.1,625.1L1877.1,625.1z M1860.5,624.6l-0.6-0.2l-0.2-0.3v-1l-0.6-0.3l-0.3,0.2l-0.6,0.7l-0.2,0.4 l-0.5,0.3l-0.1,0.3v0.4l0.4,0.1l0.3-0.4l0.9-0.1l0.3,0.1v0.4l0.1,0.7l0.3,0.3l0.5,0.2l0.4,0.6l0.1-0.3h0.2l0.2-0.4l-0.3-1.2 L1860.5,624.6L1860.5,624.6z M1854,624.2l0.1-0.5l-0.1-0.9l-0.2,0.1v0.2l-0.1,0.4L1854,624.2L1854,624.2z M1857.2,623.8l0.2-0.2 v-0.4v-0.5l-0.2-0.4l-0.2-0.2l-0.5,0.1l-0.4,0.5v0.5l0.4,0.6L1857.2,623.8L1857.2,623.8L1857.2,623.8z M1854.6,622.6l0.2-0.3 l0.5-0.7l0.1-0.3l-0.5-0.2l-0.4-0.5l-0.4-0.2l-0.3,0.4v0.4l0.5,0.6l-0.1,0.4l0.2,0.1l0.1,0.4L1854.6,622.6L1854.6,622.6z M1872.1,626.5l-0.1-0.5l-0.3-0.4l0.4-0.5l-2.2-1.9l-0.3-0.2l-0.4-0.1l-0.5-0.4l-0.5-0.1l-0.5-0.4l-0.2-0.3l-0.6-0.4l-0.6-0.8 l-1.5-0.3l0.1,0.2l0.4,0.4l0.1,0.7l0.5,0.4l0.5,0.6l0.2,0.1l0.2,0.2l0.4,0.5l0.8,0.4l0.8,0.6l0.3,0.1l0.3,0.3l1.5,0.7l0.5,0.7 L1872.1,626.5L1872.1,626.5L1872.1,626.5z M1850.3,617.3l0.2-0.3l-0.7-0.5l-0.2,0.3l-0.2,0.5l0.4,0.2L1850.3,617.3L1850.3,617.3z M1859.4,618.8L1859.4,618.8l-0.4-0.1l-0.4-0.2l-0.7-0.8l-0.2-0.3l-0.2-1l-0.4-0.4l-1.4-0.8l-0.8-0.8l-0.7-0.2l-0.2,0.2v0.5l0.2,0.3 l1,0.9l1.1,1.7l1,1l0.8,0.1h0.4v0.1l0.1,0.2l0.5,0.2l0.5-0.4L1859.4,618.8L1859.4,618.8z"
    },
    SO: {
      d: "M1223.4,505.7l-2.6-2.7l-1.2-2.6l-1.8-1.2l-2,3.4l-1.1,2.3l2.2,3.5l2.1,3.1l2.2,2.2l18.5,7.6l4.8-0.1l-15.4,19.1 l-7.4,0.3l-4.9,4.5l-3.6,0.1l-1.5,2l-4.8,7.2l0.2,23.2l3.3,5.3l1.3-1.5l1.3-3.4l6.1-7.7l5.3-4.8l8.3-6.4l5.6-5.1l6.4-8.7l4.7-7.1 l4.6-9.3l3.2-8.2l2.5-7.1l1.3-6.8l1.1-2.3l-0.2-3.4l0.4-3.7l-0.2-1.7h-2.1l-2.6,2.2l-2.9,0.6l-2.5,0.9l-1.8,0.2l0,0l-3.2,0.2 l-1.9,1.1l-2.8,0.5l-4.8,1.9l-6.1,0.8l-5.2,1.6L1223.4,505.7L1223.4,505.7z"
    },
    ZA: {
      d: "M1148.2,713.7l-2.9-0.6l-1.9,0.8l-2.6-1.1l-2.2-0.1l-8,4.7l-5.2,4.7l-2,4.3l-1.7,2.4l-3,0.5l-1.2,3l-0.6,2l-3.6,1.5 l-4.4-0.3l-2.5-1.8l-2.3-0.8l-2.7,1.5l-1.5,3.1l-2.7,1.9l-2.8,2.8l-4,0.7l-1.1-2.3l0.7-3.8l-3-6.1l-1.4-1l-1.1,23.6l-5,3.2l-2.9,0.5 l-3.3-1.2l-2.4-0.5l-0.8-2.7l-2.1-1.8l-2.7,3.2l3.5,8.2v0.1l2.5,5.3l3.2,6l-0.2,4.8l-1.7,1.2l1.4,4.2l-0.2,3.8l0.6,1.7l0.3-0.9 l2.1,2.9l1.8,0.1l2.1,2.3l2.4-0.2l3.5-2.4l4.6-1l5.6-2.5l2.2,0.3l3.3-0.8l5.7,1.2l2.7-1.2l3.2,1l0.8-1.8l2.7-0.3l5.8-2.5l4.3-2.9 l4.1-3.8l6.7-6.5l3.4-4.6l1.8-3.2l2.5-3.3l1.2-0.9l3.9-3.2l1.6-2.9l1.1-5.2l1.7-4.7h-4.1l-1.3,2.8l-3.3,0.7l-3-3.5l0.1-2.2l1.6-2.4 l0.7-1.8l1.6-0.5l2.7,1.2l-0.4-2.3l1.4-7.1l-1.1-4.5L1148.2,713.7L1148.2,713.7z M1128.1,766.5l-2,0.6l-3.7-4.9l3.2-4l3.1-2.5 l2.6-1.3l2.3,2l1.7,1.9l-1.9,3.1l-1.1,2.1l-3.1,1L1128.1,766.5L1128.1,766.5z"
    },
    KR: {
      d: "M1637.3,331.7l6.2,5.5l-3.4,1.1l5.2,6.8l1.1,4.8l2.1,3.5l4.5-0.5l3.2-2.7l4.2-1.2l0.5-3.6l-3.4-7.5l-3.3-4.2 l-8.2-7.6l0.1,1.6l-2.1,0.4l-3.5,0.3l-0.7,2.9l-2.4-0.2L1637.3,331.7L1637.3,331.7z"
    },
    SS: {
      d: "M1166,508.7l-0.7-2.2l-2.9-2.5l-0.8-4.6l0.5-4.7l-2.6-0.5l-0.3,1.5l-3.4,0.3l1.4,1.8l0.6,3.9l-3,3.5l-2.7,4.5 l-2.8,0.7l-4.8-3.7l-2.1,1.3l-0.5,1.9l-2.9,1.2l-0.2,1.3h-5.5l-0.8-1.3l-4.1-0.3l-2,1.1l-1.5-0.5l-3-3.7l-1-1.8l-4,0.9l-1.5,2.9 l-1.3,5.7l-1.9,1.2l-1.7,0.7l3.8,2.5l3.1,2.6l0.1,2l3.8,3.4l2.4,2.7l1.5,3.8l4.2,2.5l0.9,2.1l3.5,5.2l2.5,0.8l1.5-1.1l2.6,0.4 l3.1-1.3l1.4,2.7l5,4.2l0,0l2.3-1.7l3.5,1.4l4.5-1.5l4,0.1l3.4-3l3.4-3.8l3.8-4.2l-3.5-6.9l-2.6-1.5l-1-2.5l-2.9-3.1l-3.4-0.5 l1.8-3.6l3-0.1l0.8-2l-0.2-5l-0.8-0.1L1166,508.7L1166,508.7z"
    },
    ES: {
      d: "M888.3,390.4l1-0.1v0.3l-1.2,1l-0.5,1.4l-0.4,0.6l-0.3,0.2l-0.6,0.2l-0.7-0.9l-0.4-1l-0.2-0.3l0.4-0.2h0.5l1-0.1 l0.3-0.1L888.3,390.4z M883.3,392.7h-0.2l-0.2,0.2l-0.2,0.4l0.3,0.5l0.2,0.1h0.2l0.5-0.4v-0.2l-0.1-0.3L883.3,392.7z M880.6,389 l-0.3-0.4h-0.7l-0.4,0.6l0.6,1.2l0.1,0.5h0.1l0.5-0.5l0.1-0.3l-0.1-0.5l0.2-0.2L880.6,389z M878.7,395.5h-0.6l0.1,0.2l0.1,0.2 l0.7,0.4l0.6-1.1l-0.2-0.2L878.7,395.5z M901.1,389.3l-0.3,0.2l-0.1,0.6l-0.7,1.3l-0.5,1.2l-0.7,0.6l-0.7,0.2l0.1,0.1l0.7,0.1 l0.8-0.7l1.5-0.5l0.3-1l0.3-1.1v-0.7l-0.3-0.3L901.1,389.3L901.1,389.3z M893.1,393.1L893.1,393.1L893.1,393.1h-0.2l-1.3-0.1 l-0.2,0.6l-0.5,0.4v0.7l0.5,0.7l0.3,0.1l0.5,0.1l0.7-0.4l0.2-0.4l0.1-0.8l-0.1-0.4V393.1z M994.3,318.7l-0.3-0.1l-0.5,0.2l-0.5-0.2 l0.1-0.3l0.1-0.2l0.1-0.1l-0.2-0.2v-0.1l0.2-0.2l-0.2-0.1l-1.3,0.4l-0.7,0.4l-2.1,1.5v0.3l0.1,0.2h0.4l0.2,0.4l0.4-0.4l0.3-0.1 l0.3,0.1l0.3,0.2l0.1,0.6l0.1,0.2l0.6,0.1l0.9,0.4l0.4-0.2l0.5-0.3l0.2-0.6l0.3-0.5l0.3-0.5l0.3-0.4l-0.1-0.4L994.3,318.7z M998.6,317.1l-0.9-0.3l-1,0.1l-0.1,0.1v0.4l0.1,0.1l0.6,0.1l1.6,0.7h0.1l0.1-0.4v-0.1L998.6,317.1z M992,301.9l-6,0.8l-1.3-0.7 l-0.2,0.1h-0.4l-0.1-0.2v-0.2l-3.7-1.8l-1.9,1.3l-9.4-2.8l-2-2.4l-8.2-0.2l-4.2,0.3l-5.4-1h-6.8l-6.2-1.1l-7.4,4.5l2,2.6l-0.4,4.4 l1.9-1.6l2.1-0.9l1.2,3.1h3l0.9-0.8l3,0.2l1.3,3.1l-2.4,1.7l-0.2,4.9l-0.9,0.9l-0.3,3l-2.2,0.5l2,3.8l-1.6,4.3l1.8,1.9l-0.8,1.7 l-2,2.5l0.4,2.1l4.8,1l1.4,3.7l2,2.2l2.5,0.6l2.1-2.5l3.3-2.3l5,0.1h6.7l3.8-5l3.9-1.3l1.2-4.2l3-2.9l-2-3.7l2-5.1l3.1-3.5l0.5-2.1 l6.6-1.3l4.8-4.2L992,301.9z M903.7,386.3l-0.2,0.4l-0.6,0.2l-0.8,0.4l-0.2,0.3l-0.2,0.9l0.4,0.1l0.3-0.4l0.9-0.3l0.5-0.3l0.1-0.9 l0.2-0.3l-0.2-0.3L903.7,386.3z M983.7,323.1l-0.2,0.3v0.3l-0.3,0.1l-0.1,0.4l0.1,0.2l0.8,0.1l0.2-0.4h0.3l0.6-0.7v-0.3l-0.3-0.2 L983.7,323.1z M984.2,325.1l-0.1,0.2l-0.1,0.2v0.2h0.5l0.4,0.1l0.1-0.1v-0.2h-0.5L984.2,325.1z"
    },
    LK: {
      d: "M1432.2,532.7l2.3-1.8l0.6-6.6l-3-6.6l-2.9-4.5l-4.1-3.5l-1.9,10.3l1.4,9.1l2.8,5.1L1432.2,532.7L1432.2,532.7z"
    },
    SD: {
      d: "M1180.8,468.5l0.4-4.2l1.6-2l4-1l2.6-3.6l-3.1-2.4l-2.2-1.6l-2.5-7.6l-1.1-6.5l1.1-1.2l-2.1-6.2h-21.8h-21.4h-22.1 l0.5,12.7h-6.3v2.7l1.1,25.2l-4.8-0.4l-2.4,4.7l-1.4,3.9l1.2,1.5l-1.8,1.9l0.7,2.7l-1.4,2.6l-0.5,2.4l2-0.4l1.2,2.5l0.1,3.7l2.1,1.8 v1.6l0.7,2.7l3.3,4v2.6l-0.8,2.6l0.3,2l2,1.8l0.5,0.3l1.7-0.7l1.9-1.2l1.3-5.7l1.5-2.9l4-0.9l1,1.8l3,3.7l1.5,0.5l2-1.1l4.1,0.3 l0.8,1.3h5.5l0.2-1.3l2.9-1.2l0.5-1.9l2.1-1.3l4.8,3.7l2.8-0.7l2.7-4.5l3-3.5l-0.6-3.9l-1.4-1.8l3.4-0.3l0.3-1.5l2.6,0.5l-0.5,4.7 l0.8,4.6l2.9,2.5l0.7,2.2v3.1l0.8,0.1v-0.7l1.4-6.7l2.6-1.8l0.5-2.6l2.3-4.8l3.2-3.2l2.1-6.2l0.7-5.5l-0.7-2.5L1180.8,468.5 L1180.8,468.5z"
    },
    SR: {
      d: "M668,533.8l-4.6,0.5l-0.6,1.1l-6.7-1.2l-1,5.7l-3.5,1.6l0.3,1.5l-1.1,3.3l2.4,4.6l1.8,0.1l0.7,3.5l3.3,5.6l3.1,0.5 l0.5-1.3l-0.9-1.3l0.5-1.8l2.3,0.6l2.7-0.7l3.2,1.4l1.4-2.7l0.6-2.9l1-2.8l-2.1-3.7l-0.4-4.4l3.1-5.5L668,533.8L668,533.8z"
    },
    SZ: {
      d: "M1150.5,736.6l-2.7-1.2l-1.6,0.5l-0.7,1.8l-1.6,2.4l-0.1,2.2l3,3.5l3.3-0.7l1.3-2.8l-0.3-2.8L1150.5,736.6 L1150.5,736.6z"
    },
    SE: {
      d: "M1077.7,161.1l-1.9-2.2l-1.7-8.4l-7.2-3.7l-5.9-2.7l-2.5,0.3v3.5l-7.9-0.9l-0.6,3.1l-4-0.1l-2.2,3.9l-3.4,6.1 l-5.7,7.9l1.8,1.9l-1.3,2.2l-4.3-0.1l-2.3,5.3l1,7.6l3.1,2.9l-0.9,6.9l-3.4,4l-1.7,3.3l4.2,8.4l4.4,6.7l2,5.7l5.3-0.3l2.2-4.7 l5.7,0.5l2-5.5l0.6-10l4.6-1.3l3.3-6.6l-4.8-3.3l-3.6-4l2.1-8.1l7.7-4.9l6.1-4.5l-1.2-3.5l3.4-3.9L1077.7,161.1L1077.7,161.1z"
    },
    CH: {
      d: "M1024.3,270.6l-5.4-1.9l-1,1.4h-4.2l-1.3,1l-2.3-0.6l0.2,1.6l-3.5,3.5v2.8l2.4-0.9l1.8,2.7l2.2,1.3l2.4-0.3l2.7-2.1 l0.9,1l2.4-0.2l0.9-2.5l3.8,0.8l2.1-1.1l0.3-2.5l-2.6-0.2l-2.3-1.1l0.7-1.6L1024.3,270.6L1024.3,270.6z"
    },
    SY: {
      d: "M1183.5,359.9l11-6.7l0.9-7.8l-1.2-4.7l2.7-1.6l2.1-4.1l-5.9,1.1l-2.8-0.2l-5.7,2.5h-4.3l-3-1.2l-5.5,1.8l-1.9-1.3 l0.1,3.6l-1.2,1.5l-1.2,1.4l-1,2.6l1.1,5l2.4,0.3l1.2,2.5l-2.6,2.4l-0.9,3.5l0.3,2.6l-0.6,1h0.1l6.3,2.5L1183.5,359.9L1183.5,359.9z "
    },
    TW: {
      d: "M1642.3,427.2l1.2-10.2l0.1-3.9l-2.9-1.9l-3.3,4.8l-1.9,6.3l1.5,4.7l4,5.4L1642.3,427.2L1642.3,427.2z"
    },
    TJ: {
      d: "M1344.1,315.7l-2.1,0.2l-1.3-1.8l0.2-2.9l-6.4,1.5l-0.5,4l-1.5,3.5l-4.4-0.3l-0.6,2.8l4.2,1.6l2.4,4.7l-1.3,6.6 l1.8,0.8l3.3-2.1l2.1,1.3l0.9-3l3.2,0.1l0.6-0.9l-0.2-2.6l1.7-2.3l3.2,1.5v2l1.6,0.3l1,5.4l2.6,2.1l1.5-1.3l2.1-0.7l2.5-2.9l3.8,0.5 h5.4l-1.8-3.7l-0.6-2.5l-3.5-1.4l-1.6,0.6l-3-5.9l-9.5,0.9l-7.1-2l-5.4,0.5l-0.6-3.7l5.9,1.1L1344.1,315.7L1344.1,315.7z"
    },
    TZ: {
      d: "M1149.6,578.6l-2,0.8l2.3,3.6l-0.4,3.7l-1.6,0.8l0,0l0.3,2.5l1.2,1.5v2l-1.4,1.4l-2.2,3.3l-2.1,2.3l-0.6,0.1 l-0.3,2.7l1.1,0.9l-0.2,2.7l1,2.6l-1.3,2.4l4.5,4.3l0.3,3.9l2.7,6.5l0,0l0.3,0.2l2.2,1.1l3.5,1.1l3.2,1.9l5.4,1.2l1.1,1.7l0,0 l0.4-1.2l2.8,3.4l0.3,6.7l1.8,2.4v0.1l2.1-0.3l6.7,1.8l1.4-0.8l3.9-0.1l2.1-1.9l3.3,0.1l6.2-2.5l4.6-3.7l0,0l-2-1.4l-2.2-6.3 l-1.8-3.9l0.4-3.1l-0.3-1.9l1.7-3.9l-0.2-1.6l-3.5-2.3l-0.3-3.6l2.8-7.9l-8-6.3l-0.4-3.7l-20.2-13l0,0l-2.8,2.8l-1.9,2.9l2.2,2.2 l-3.2,1.6l-0.7-0.8l-3.2,0.4l-2.5,1.4l-1.6-2.4l1.1-4.5l0.2-3.8l0,0l0,0L1149.6,578.6L1149.6,578.6z"
    },
    TH: {
      d: "M1562.7,481.4l1.5-2.9l-0.5-5.4l-5.2-5.5l-1.3-6.3l-4.9-5.2l-4.3-0.4l-0.8,2.2l-3.2,0.2l-1.8-1.2l-5.3,3.8l-1-5.7 l0.4-6.7l-3.8-0.3l-0.9-3.8l-2.6-1.9l-3,1.4l-2.8,2.8l-3.9,0.3l-1.5,6.9l-2.2,1.1l3.5,5.6l4.1,4.6l2.9,4.2l-1.4,5.6l-1.7,1.1 l1.7,3.2l4.2,5.1l1,3.5l0.2,3l2.8,5.8l-2.6,5.9l-2.2,6.6l-1.3,6.1l-0.3,3.9l1.2,3.6l0.7-3.8l2.9,3.1l3.2,3.5l1.1,3.2l2.4,2.4 l0.9-1.1l4.7,2.8l0.6,3.3l3.7-0.8l1.7-2.6l-3.1-3.3l-3.4-0.8l-3.3-3.6l-1.4-5.5l-2.6-5.8l-3.7-0.2l-0.7-4.6l1.4-5.6l2.2-9.3l-0.2-7 l4.9-0.1l-0.3,5l4.7-0.1l5.3,2.9l-2.1-7.7l3-5.2l7.1-1.3L1562.7,481.4L1562.7,481.4z"
    },
    TL: {
      d: "M1676.8,631.9l4.9-1.8l6-2.8l2.2-1.7l-2-0.8l-1.8,0.8l-4,0.2l-4.9,1.4l-0.8,1.5l0.5,1.3L1676.8,631.9L1676.8,631.9z "
    },
    TG: {
      d: "M981.7,502.2l-4.9-0.1l-0.4,1.9l2.4,3.3l-0.1,4.6l0.6,5.1l1.4,2.3l-1.2,5.7l0.4,3.2l1.5,4l1.2,2.2l4.6-1.3l-1.4-4.4 l0.2-14.6l-1.1-1.3l-0.2-3.1l-2-2.3l-1.7-1.9L981.7,502.2L981.7,502.2z"
    },
    TO: {
      d: "M13.3,707.7L13.3,707.7l-0.2,0.3v0.2l0.4,0.4L13.3,707.7z M11.7,706.8h-0.2H11.7l-0.4-0.3h-0.4l-0.2-0.1v-0.2 l-0.2,0.3l0.2,0.3l0.9,0.4l0.3,0.2l0.2-0.6v-0.2l-0.3,0.1v0.1H11.7z M14.2,690.8l0.1-0.2v-0.2l-0.3-0.1h-0.1l-0.3,0.5l0.1,0.1 l0.3,0.2h0.1L14.2,690.8z"
    },
    TT: {
      d: "M635.4,507.7l0.1-0.2v-0.6l0.2-0.4l-0.2-0.4l-0.1-0.6l0.1-0.5v-0.7l0.2-0.3l0.5-0.8h-0.9l-0.6,0.2l-1.1,0.1 l-0.5,0.2l-0.7,0.1L632,504l0.1,0.1l0.5,0.2l0.2,0.2l0.1,0.2l0.1,0.4l-0.3,1.7l-0.1,0.1L632,507l-0.2,0.3l-1.4,0.8l0.8-0.1l0.9,0.1 l2.4-0.1L635.4,507.7L635.4,507.7z M637.2,501l1.2-0.5l0.1-0.4h-0.2l-0.8,0.3l-0.6,0.5v0.2L637.2,501z"
    },
    TN: {
      d: "M1038,361.4l-2-1l-1.5-3l-2.8-0.1l-1.1-3.5l3.4-3.2l0.5-5.6l-1.9-1.6l-0.1-3l2.5-3.2l-0.4-1.3l-4.4,2.4l0.1-3.3 l-3.7-0.7l-5.6,2.6l-1,3.3l1,6.2l-1.1,5.3l-3.2,3.6l0.6,4.8l4.5,3.8v1.5l3.4,2.6l2.6,11.3l2.6-1.4l0.4-2.7l-0.7-2.6l3.7-2.5l1.5-2 l2.6-1.8L1038,361.4L1038,361.4z"
    },
    TR: {
      d: "M1166.6,308.9l-9.7-4.4l-8.5,0.2l-5.7,1.7l-5.6,4l-9.9-0.8l-1.6,4.8l-7.9,0.2l-5.1,6.1l3.6,3l-2,5l4.2,3.6l3.7,6.4 l5.8-0.1l5.4,3.5l3.6-0.8l0.9-2.7l5.7,0.2l4.6,3.5l8-0.7l3.1-3.7l4.6,1.5l3.2-0.6l-1.7,2.4l2.3,3l1.2-1.4l1.2-1.5l-0.1-3.6l1.9,1.3 l5.5-1.8l3,1.2h4.3l5.7-2.5l2.8,0.2l5.9-1.1l2.1-1l6.2,0.9l2.1,1.6l2.3-1.1l0,0l-3.7-5.2l0.7-2l-2.9-7.3l3.3-1.8l-2.4-1.9l-4.2-1.5 v-3.1l-1.3-2.2l-5.6-3l-5.4,0.3l-5.5,3.2l-4.5-0.6l-5.8,1L1166.6,308.9L1166.6,308.9z M1117,312.9l2-1.9l6.1-0.4l0.7-1.5l-4.7-2 l-0.9-2.4l-4.5-0.8l-5,2l2.7,1.6l-1.2,3.9l-1.1,0.7l0.1,1.3l1.9,2.9L1117,312.9L1117,312.9z"
    },
    TM: {
      d: "M1325.6,334.2l-0.8-4l-7.7-2.7l-6.2-3.2l-4.2-3l-7-4.4l-4.3-6.4l-2-1.2l-5.5,0.3l-2.3-1.3l-1.9-4.9l-7.8-3.3 l-3.3,3.6l-3.8,2.2l1.6,3.1l-5.8,0.1l-2.5,0.3l-4.9-4.9l-3.8-1.7l-5.5,1.3l-1.8,2l2.5,4l-0.5-4.5l3.7-1.6l2.4,3.6l4.6,3.7l-4,2 l-5.3-1.5l0.1,5.2l3.5,0.4l-0.4,4.4l4.5,2.1l0.7,6.8l1.8,4.5l4.4-1.2l3-3.7l3.5,0.2l2.1-1.2l3.8,0.6l6.5,3.3l4.3,0.7l7.3,5.7 l3.9,0.2l1.6,5.5l5.9,2.4l3.9-0.8l0.4-3l4-0.9l2.5-2l-0.1-5.2l4.1-1.2l0.3-2.3l2.9,1.7L1325.6,334.2L1325.6,334.2z"
    },
    TC: {
      d: "M578.7,433.1l-0.1,0.4v0.2l0.2,0.1l0.6-0.1l0.1-0.1l0.2-0.1v-0.1l-0.4,0.1L578.7,433.1z M582.3,433.7l0.2-0.2 l-0.2-0.2l-0.7-0.2l-0.2,0.1v0.3h0.6L582.3,433.7L582.3,433.7L582.3,433.7z M581.2,433.2l-0.1-0.1l-0.1-0.6h-0.5v0.2l0.1,0.2h0.1 l0.1,0.2l0.3,0.2L581.2,433.2L581.2,433.2z"
    },
    UG: {
      d: "M1167.6,545.1l-3.4,3l-4-0.1l-4.5,1.5l-3.5-1.4l-2.3,1.7l0,0l-0.3,7.5l2.3,0.8l-1.8,2.3l-2.2,1.7l-2.1,3.3l-1.2,3 l-0.3,5.1l-1.3,2.4l-0.1,4.8l1.4,0.6l3.3-1.9l2-0.8l6.2,0.1l0,0l-0.3-2.5l2.6-3.7l3.5-0.9l2.4-1.5l2.9,1.2l0.3,0.5v-0.3l1.6-2.6 l2.7-4.2l2.1-4.7l-2.6-7.3l-0.7-3.2L1167.6,545.1L1167.6,545.1z"
    },
    UA: {
      d: "M1138.5,241l-4.8,0.5l-1.5-0.3l-1,1.4l-1.8-0.2l0,0l-4.1,0.3l-1.2,1.4l0.2,3.1l-2-0.6l-4.3,0.3l-1.5-1.5l-1.6,1.1 l-2-0.9l-3.8-0.1l-5.6-1.5l-5-0.5l-3.7,0.2l-2.4,1.6l-2.2,0.3l3.1,5.3l-0.3,1.8l-2.3,0.7l-3.8,5.1l1.6,2.8l-1.1-0.4l-1.1,1.7 l-0.7,2.5l2.9,1.7l0.6,1.6l1.9-1.3l3.2,0.7h3.2l2.4,1.5l1.6-0.9l3.6-0.6l1-1.5h2.1l1.1-0.9l3.2-0.6l3.9,1.9l2,0.3l2.5,1.6v2.1 l1.9,1.1l1.1,2.6l2,1.5l-0.2,1l1,0.6l-1.2,0.5l-3-0.2l-0.6-0.9l-1,0.5l0.5,1.1l-1.1,2l-0.5,2.1l-1.2,0.7l2.4,1.1l2.2-1l2.4,1.1 l3.3-4.6l1.3-3.4l4.5-0.8l0.7,2.4l8,1.5l1.7,1.4l-4.5,2.1l-0.7,1.2l5.8,1.8l-0.6,2.9l3,1.3l6.3-3.6l5.3-1.1l0.6-2.2l-5.1,0.4 l-2.7-1.5l-1-3.9l3.9-2.3l4.6-0.3l3-2l3.9-0.5l-0.4-2.8l2.2-1.7l4.7-0.5l0.3-2.1l-1.8-3.4l1.3-3.2l-0.4-1.9l-7.6-2l-2.9,0.1 l-3.6-2.9l-3.5,1l-6.6-2.2l-0.2-1.2l-2.2-2.7l-4-0.2l-0.7-1.9l0.9-1.3L1138.5,241L1138.5,241z"
    },
    AE: {
      d: "M1283.9,408.6l-1.3-2.2l-3,3.9l-3.7,4.1l-3.3,4.3l-3.3-0.2l-4.6-0.2l-4.2,1l-0.3-1.7l-1,0.3l0.4,1.5l2.6,6.4 l16.8,3.2l1-1.3l-0.1-2.6l1.4-2.6l-0.3-2.6l2.4-1.3l-1.1-0.8l0.1-4.2h2.8L1283.9,408.6L1283.9,408.6z"
    },
    GB: {
      d: "M950,227.5l-4.9-3.7l-3.9,0.3l0.8,3.2l-1.1,3.2l2.9-0.1l3.5,1.3L950,227.5z M963,203.2l-5.5,0.5l-3.6-0.4l-3.7,4.8 l-1.9,6.1l2.2,3l0.1,5.8l2.6-2.8l1.4,1.6l-1.7,2.7l1,1.6l5.7,1.1h0.1l3.1,3.8l-0.8,3.5l0,0l-7.1-0.6l-1,4l2.6,3.3l-5.1,1.9l1.3,2.4 l7.5,1l0,0l-4.3,1.3l-7.3,6.5l2.5,1.2l3.5-2.3l4.5,0.7l3.3-2.9l2.2,1.2l8.3-1.7l6.5,0.1l4.3-3.3l-1.9-3.1l2.4-1.8l0.5-3.9l-5.8-1.2 l-1.3-2.3l-2.9-6.9l-3.2-1l-4.1-7.1l-0.4-0.6l-4.8-0.4l4.2-5.3l1.3-4.9h-5l-4.7,0.8L963,203.2L963,203.2z"
    },
    US: {
      d: "M116.7,450.7l2-0.9l2.5-1.4l0.2-0.4l-0.9-2.2l-0.7-0.8l-0.8-0.6l-1.9-1.1l-0.4-0.1l-0.4,0.6v1.3l-1.2,1l-0.4,0.7 l0.4,2.3l-0.6,1.8l1.2,0.9L116.7,450.7L116.7,450.7z M116.1,440.8l0.6-0.7l-1.2-1l-1.8-0.6L113,439v0.4l0.5,0.5l0.6,1.4L116.1,440.8 L116.1,440.8z M113.1,437.4l-2.6-0.2l-0.6,0.7l2.9,0.2L113.1,437.4z M108.4,436.5l-1.1-2.1L107,434l-1.7,0.9l0.1,0.2l0.4,1.5 l1.8,0.2l0.4,0.1L108.4,436.5L108.4,436.5z M100.1,432.3l0.3-1.5l-1.3-0.1l-1,0.6l-0.4,0.5l1.6,1.1L100.1,432.3z M512.2,259.1h-1.6 l-1.3,2.4h-10.1h-16.8h-16.7h-14.8h-14.7h-14.5h-15h-4.8h-14.6h-13.9l-1.6,5.1l-2.4,5.1l-2.3,1.6l1.1-5.9l-5.8-2.1l-1.4,1.2 l-0.4,2.9l-1.8,5.4l-4.2,8.3l-4,5.6l-4,5.6l-5.4,5.8l-1.1,4.7l-2.8,5.3l-3.9,5.2l1,3.4l-1.9,5.2l1.5,5.4l1.3,2.2l-0.8,1.5l0.4,9 l2.5,6.5l-0.8,3.5l1,1l4.6,0.7l1.3,1.7l2.8,0.3l-0.1,1.9l2.2,0.7l2.1,3.7l-0.3,3.2l6.3-0.5l7-0.7l-1,1.3l7.1,3.1l10.7,4.4H391h4.3 l0.8-2.6h9.3l1.3,2.2l2.1,2l2.4,2.8l0.8,3.3l0.4,3.5l2.2,1.9l4,1.9l4.8-5l4.4-0.1l3.1,2.5l1.6,4.4l1,3.7l2.4,3.6l0.2,4.5l0.8,3 l3.9,2l3.6,1.4l2.1-0.2l-0.6-2.2l0.4-3.1l1-4.4l1.9-2.8l3.7-3.1l6-2.7l6.1-4.7l4.9-1.5l3.5-0.4l3.5,1.4l4.9-0.8l3.3,3.4l3.8,0.2 l2.4-1.2l1.7,0.9l1.3-0.8l-0.9-1.3l0.7-2.5l-0.5-1.7l2.4-1l4.2-0.4l4.7,0.7l6.2-0.8l3,1.5l2,3l0.9,0.3l6.1-2.9l1.9,1l3,5.3l0.8,3.5 l-2,4.2l0.4,2.5l1.6,4.9l2,5.5l1.8,1.4l0.4,2.8l2.6,0.8l1.7-0.8l2-3.9l0.7-2.5l0.9-4.3l-1.2-7.4l0.5-2.7l-1.5-4.5l-0.7-5.4l0.1-4.4 l1.8-4.5l3.5-3.8l3.7-3l6.9-4.1l1.3-2.2l3.3-2.3l2.8-0.4l4.4-3.8l6-1.9l4.6-4.8l0.9-6.5l0.1-2.2l-1.4-0.4l1.5-6.2l-3-2.1l3.2,1v-4.1 l1.9-2.7l-1,5.3l2,2.5l-2.9,4.4l0.4,0.2l4.4-5.1l2.4-2.5l0.6-2.5l-0.9-1.1l-0.1-3.5l1.2,1.6l1.1,0.4l-0.1,1.6l5.2-4.9l2.5-4.5 l-1.4-0.3l2.1-1.8l-0.4,0.8h3.3l7.8-1.9l-1.1-1.2l-7.9,1.2l4.8-1.8l3.1-0.3l2.4-0.3l4.1-1.1l2.4,0.1l3.8-1l1-1.7l-1.1-1.4l-0.2,2.2 L615,306l-0.6-3.3l1.1-3.3l1.4-1.3l3.9-3.7l5.9-1.8l6-2.1l6.3-3l-0.2-2l-2.1-3.5l2.8-8.5l-1.5-1.8l-3.7,1.1l-1.1-1.7l-5.5,4.7 l-3.2,4.9l-2.7,2.8l-2.5,0.9l-1.7,0.3l-1,1.6h-9.3h-7.7l-2.7,1.2l-6.7,4.2l0.2,0.9l-0.6,2.4l-4.6,2l-3.9-0.5l-4-0.2l-2.6,0.7 l-0.3,1.8l0,0l-0.1,0.6l-5.8,3.7l-4.5,1.8l-2.9,0.8l-3.7,1.7l-4,0.9l-2.5-0.3l-2.7-1.3l2.7-2.4l0,0l2-2.2l3.7-3.4l0,0l0,0l0.7-2.5 l0.5-3.5l-1.6-0.7l-4.3,2.8l-0.9-0.1l0.3-1.5l3.8-2.5l1.6-2.8l0.7-2.8l-2.7-2.4l-3.7-1.3l-1.7,2.4l-1.4,0.6l-2.2,3.1l0.4-2.1 l-2.6,1.5l-2.1,2l-2.6,3.1l-1.3,2.6l0.1,3.8l-1.8,4l-3.3,3l-1.4,0.9l-1.6,0.7h-1.8l-0.3-0.4l-0.1-3.3l0.7-1.6l0.7-1.5l0.6-3l2.5-3.5 l2.9-4.3l4.6-4.7h-0.7l-5.4,4l-0.4-0.7l2.9-2.3l4.7-4l3.7-0.5l4.4-1.3l3.7,0.7h0.1l4.7-0.5l-1.5-2.5l0,0l-1.2-0.2l0,0l0,0l-1.4-0.3 l-0.4-1.7l-5.1,0.5l-5,1.4l-2.5-2.3l-2.5-0.8l3.1-3.3l-5.3,2l-4.9,2.1l-4.6,1.5l-2.1-2.1l-5.5,1.3l0.4-0.9l4.6-2.6l4.7-2.5l5.9-2.1 l0,0l0,0l-5.3-1.6l-4.4,0.8l-3.8-1.9l-4.6-1l-3.2-0.4l-1-1L512.2,259.1L512.2,259.1z M271.6,212.2l6.9-2.8v-1.8l-2.6-0.4l-3.4,0.9 l-6.4,2.1l-2.2,2.7l0.7,1.6L271.6,212.2z M232.9,195.8l2.3-2.3l-2.9-0.5l-5.7,1l0.8,1.6l1.6,1.1L232.9,195.8L232.9,195.8z M234.1,173.5l-3.1,2.2l0.4,0.5l4.2-0.4l0.3,1.1l1.7,1.2l4.9-1.2l1.2-0.6l-3.3-0.8l-1.6-1.5l-3.4,0.6L234.1,173.5L234.1,173.5z M359,133.3l-4.4-1.1l-10.2,2.8l-3.2-0.3l-11,2.3l-4.8,0.6l-7.8,2.5l-4.8,2.6l-8.6,2.5l-7.6,0.1l-6.3,2.9l3.2,1.7l0.7,2.3l-0.8,2.7 l2.3,2.1l-1.2,3.5l-9.2,0.2l4.3-2.8h-3.4l-13.1,2.7l-9.1,2.3l1,3.3l-1.2,2.2l4.5,1.4l6.9-0.7l1.8,1.3l2.9-1.3l6.1-1.2h2.7l-5.9,2.1 l1.1,1l-2.5,2.6l-5.5,1.8l-2.5-0.5l-7,2.7l-1.8-0.9l-4.1,0.4l-5.3,3l-7.6,3.1l-5.8,3.4l0.3,2.4l-4,3.3l1.4,1.4l0.5,2.7l7.2-1.1 l0.4,2.1l-3.3,2.1l-3.6,3.5h2.8l7.2-2.3l-1.6,2.9l3.6-2.1l-0.4,3l4.8-2.2l0.4,1.1l7.2-1.8l-6.2,3.4l-5.7,4.5l-5.7,2.1l-2.3,1.2 l-10.3,3.6l-4.9,2.4l-6.5,0.7l-8.5,3.3l-6.6,1.8l-8.1,2.8l-0.4,1l10-1.7l6-2l6.9-2l6.1-1.7l2.8,0.5l8.1-2.6l4.5-2.8l10.5-3.1 l3.9-2.6l6.6-1.8l7.6-2.5l8.9-4.2l-0.2-2.9l11.1-4.1l7.4-3.9l9.2-3.2l-0.4,1.4l-6.7,1.8l-8.3,5.7l-3.2,3.5l6.4-1.3l6.1-1.9l6.5-1.3 l2.9-0.3l3.5-4.1l6.3-1.2l2.6,2.5l6,2.7l6.7-0.5l5.7,2l3.2,1.1l3.3,6.1l3.7,1.7l7.1,0.2l4.1,0.4l-2.7,5.5l1.6,4.9l-3.3,5.2l2.5,1.9 l0.6,2.2l0,0l5.1-2.9l3.1-3.7l-4.6-3.8l1.5-6.8l1.1-4.2l-1.7-2.7l-0.7-2.4l0.5-3l-6.4,1.9l-7.6,3.3l-0.2-3.9l-0.6-2.6l-2.7-1.6 l-4.2-0.1l35.4-32.4l24.3-20.2l0,0l0,0l-3.5-0.7l-4.1-1.6l-6.5,0.8l-2.2-0.7l-7.1-0.5l-6.2-1.6l-4.8,0.5l-4.9-0.9l2-1.2l-6.3-0.3 l-3.3,1L359,133.3L359,133.3z"
    },
    VI: {
      d: "M617.9,458.9l-0.7,0.2l-0.1,0.4h1.1l0.7-0.3h-0.6L617.9,458.9L617.9,458.9z M618.8,455.4l-0.5-0.1l-0.2,0.2l0,0 l0.3,0.1L618.8,455.4z M617.7,455.5l-0.2-0.2l-0.3-0.1l-0.4,0.1l0.5,0.3L617.7,455.5L617.7,455.5z"
    },
    UY: {
      d: "M692.5,787l-2.1-3.7l1.9-3l-3.8-4.3l-4.8-3.5l-6.2-4.1l-1.9,0.2l-6.2-4.9l-3.4,0.7l-0.5,5.1l-0.3,6.5l1.1,6.3 l-0.9,1.4l0.4,4.2l3.9,3.5l3.6-0.2l5.4,2.7l2.7-0.6l4.2,1.2l5.3-3.5L692.5,787L692.5,787z"
    },
    UZ: {
      d: "M1339.8,303.1l-2.5,1.2l-5.4,4.3l-0.9,4.5h-1.9l-2.3-3l-6.6-0.2l-2.6-5l-2.5-0.1l-1.5-6.2l-7.5-4.5l-8.6,0.5 l-5.7,0.9l-6.5-5.5l-4.8-2.3l-9.1-4.5l-1.1-0.5l-11.9,3.6l6.2,22.8l5.8-0.1l-1.6-3.1l3.8-2.2l3.3-3.6l7.8,3.3l1.9,4.9l2.3,1.3 l5.5-0.3l2,1.2l4.3,6.4l7,4.4l4.2,3l6.2,3.2l7.7,2.7l0.8,4h2.9l4.3,1.4l1.3-6.6l-2.4-4.7l-4.2-1.6l0.6-2.8l4.4,0.3l1.5-3.5l0.5-4 l6.4-1.5l-0.2,2.9l1.3,1.8l2.1-0.2l4.1,0.6l5.2-4.5l-7.1-3.3l-3.2,1.6l-4.6-2.3l3.1-4.1L1339.8,303.1L1339.8,303.1z"
    },
    VU: {
      d: "M1908.6,676.9l-2.7-3.6l-0.6,1.7l1.3,2.8L1908.6,676.9L1908.6,676.9z M1906.6,667.2l-2.3-2l-0.9,4.9l0.5,1.8 l1.2-0.4l1.3,0.8L1906.6,667.2L1906.6,667.2z"
    },
    VA: {
      d: "M1039.5,304.8l0.6-0.1l0.1,0.6h-0.9L1039.5,304.8z"
    },
    VE: {
      d: "M642,518.9l-2.2-1.5l-2.9,0.2l-0.7-5.1l-4.1-3.2l-4.4-0.4l-1.8-3l4.8-1.9l-6.7,0.1l-6.9,0.4l-0.2,1.6l-3.2,1.9 l-4.2-0.7l-3.1-2.9l-6,0.7l-5-0.1l-0.1-2.1l-3.5-3.5l-3.9-0.1l-1.7-4.5l-2.1,2l0.6,3l-7.1,2.6v4.8l1.6,2.2l-1.5,4.6l-2.4,0.4l-1.9-5 l2.7-3.7l0.3-3.3l-1.7-2.9l3.3-0.8l0.3-1.5l-3.7,1.1l-1.6,3.2l-2.2,1.8l-1.8,2.4l-0.9,4.5l-1.8,3.7l2.9,0.5l0.6,2.9l1.1,1.4l0.4,2.5 l-0.8,2.4l0.2,1.3l1.3,0.6l1.3,2.2l7.2-0.6l3.2,0.8l3.8,5.5l2.3-0.7l4,0.3l3.2-0.7l2,1.1l-1.2,3.4l-1.3,2.1l-0.5,4.6l1,4.2l1.5,1.9 l0.2,1.5l-2.9,3.1l2,1.4l1.4,2.2l1.7,6.4l3,3.4l4.4-0.5l1.1-1.9l4.2-1.5l2.3-1l0.7-2.7l4.1-1.8l-0.3-1.4l-4.8-0.5l-0.7-4l0.3-4.3 l-2.4-1.6l1-0.6l4.2,0.8l4.4,1.6l1.7-1.5l4-1l6.4-2.4l2.1-2.4l-0.7-1.8l-3.7-4.8l1.6-1.8v-2.9l3.4-1.1l1.5-1.2l-1.9-2.3l0.6-2.3 L642,518.9L642,518.9z"
    },
    VN: {
      d: "M1571.6,435l-5.9-1.6l-3-2.6l0.2-3.7l-5.2-1.1l-3-2.4l-4.1,3.4l-5.3,0.7h-4.3l-2.7,1.5l4,5.1l3.4,5.7l6.8,0.1l3,5.5 l-3.3,1.7l-1.3,2.3l7.3,3.8l5.7,7.5l4.3,5.6l4.8,4.4l2,4.5l-0.2,6.4l1.8,4.2l0.1,7.7l-8.9,4.9l2.8,3.8l-5.8,0.5l-4.7,2.5l4.5,3.7 l-1.3,4.3l2.3,4l6.6-5.9l4.1-5.3l6.1-4.1l4.3-4.2l-0.4-11.2l-4-11.7l-4.1-5.1l-5.6-4l-6.4-8.3l-5.3-6.7l0.5-4.4l3.7-6L1571.6,435z"
    },
    EH: {
      d: "M928.8,396.2h0.8v0.4l-0.1,1.2l-0.2,9.7l-17.9-0.3l-0.2,16.3L906,424l-1.4,3.3l0.9,9.2l-21.6-0.1l-1.2,2.2l0.3-2.7 h0.1l12.4-0.5l0.7-2.3l2.3-2.9l2-8.8l7.8-6.8l2.8-8.1l1.7-0.4l1.9-5l4.6-0.7l1.9,0.9h2.5l1.8-1.5l3.4-0.2L928.8,396.2z"
    },
    YE: {
      d: "M1271.5,466.2l-2.1-4.4l-5.2-10.5l-15.7,2.4l-5,2.9l-3.5,6.7l-2.5,1l-1.6-2.1l-2.1,0.3l-5.4-0.6l-1-0.7l-6.4,0.2 l-1.5,0.6l-2.4-1.7l-1.2,3.1l0.7,2.7l-2.3,2.1l0.4,2.7l-0.6,1.3l0.7,2.9l-1.1,0.3l1.7,2.6l1.3,4.7l1,1.9v3.4l1.6,3.8l3.9,0.3 l1.8-0.9l2.7,0.2l0.8-1.7l1.5-0.4l1.1-1.7l1.4-0.4l4.7-0.3l3.5-1.2l3.1-2.7l1.7,0.4l2.4-0.3l4.7-4.5l8.8-3l5.3-2.7v-2.1l0.9-2.9 L1271.5,466.2L1271.5,466.2z"
    },
    ZM: {
      d: "M1149.2,626.7l-1.9-0.5l0.4-1.3l-1-0.3l-7.5,1.1l-1.6,0.7l-1.6,4.1l1.2,2.8l-1.2,7.5l-0.8,6.4l1.4,1.1l3.9,2.5 l1.5-1.2l0.3,6.9h-4.3l-2.1-3.5l-2-2.8l-4.3-0.8l-1.2-3.4l-3.4,2l-4.5-0.9l-1.8-2.8l-3.5-0.6l-2.6,0.1l-0.3-2l-1.9-0.1l0.5,2l-0.7,3 l0.9,3l-0.9,2.4l0.5,2.2l-11.6-0.1l-0.8,20.3l3.6,5.2l3.5,4l4.6-1.5l3.6,0.4l2.1,1.4v0.5l1,0.5l6.2,0.7l1.7,0.7l1.9-0.1l3.2-4.1 l5.1-5.3l2-0.5l0.7-2.2l3.3-2.5l4.2-0.9l-0.3-4.5l17.1-5.2l-2.9-1.7l1.9-5.9l1.8-2.2l-0.9-5.3l1.2-5.1l1-1.8l-1.2-5.4l-2.6-2.8 l-3.2-1.9l-3.5-1.1l-2.2-1.1l-0.3-0.2l0,0l0.5,1.1l-1,0.4L1149.2,626.7L1149.2,626.7z"
    },
    ZW: {
      d: "M1148.2,713.7l6.2-7.2l1.6-4.6l0.9-0.6l0.8-3.7l-0.8-1.9l0.5-4.7l1.3-4.4l0.3-8.1l-2.8-2l-2.6-0.5l-1.1-1.6 l-2.6-1.3l-4.6,0.1l-0.3-2.4l-4.2,0.9l-3.3,2.5l-0.7,2.2l-2,0.5l-5.1,5.3l-3.2,4.1l-1.9,0.1l-1.7-0.7l-6.2-0.7l1.9,5.1l1.1,1.1 l1.6,3.7l6,7l2.3,0.7l-0.1,2.2l1.5,4.1l4.2,0.9l3.4,2.9l2.2,0.1l2.6,1.1l1.9-0.8L1148.2,713.7L1148.2,713.7z"
    },
    XK: {
      d: "M1080,299.8l1.2-0.5l0.5-2l0.9-0.4l0.8,0.9l1,0.4l0.8,1l0.8,0.3l1.1,1.1h0.8l-0.5,1.5l-0.5,0.7l0.2,0.5l-1.1,0.2l-2.9,1l-0.1,1.2h-0.7l-0.5-2.3l-1.3-0.6l-1.3-1.6L1080,299.8z"
    },
    "MA-EH": {
      d: "M969.3,363.1l-1.8-6.7l-0.3-3.9l-2-4.1l-2.3-0.1l-5.5-1.4l-5,0.4l-3.1-2.7h-3.9l-1.8,3.9l-3.7,6.7l-4,2.6 l-5.4,2.9L927,365l-0.9,3.4l-2.1,5.4l1.1,7.9l-4.7,5.3l-2.7,1.7l-4.4,4.4l-5.1,0.7l-2.8,2.4l-0.1,0.1l-3.6,6.5l-3.7,2.3l-2.1,4 l-0.2,3.3l-1.6,3.8l-1.9,1l-3.1,4l-2,4.5l0.3,2.2l-1.9,3.3l-2.2,1.7l-0.3,3l-0.3,2.7l1.2-2.2l21.6,0.1l-0.9-9.2l1.4-3.3l5.2-0.5 l0.2-16.3l17.9,0.3l0.2-9.7l0.1-1.2v-0.4l0,0l0,0l0,0l0.1-7.5l8.9-4.7l5.4-1l4.4-1.7l2.1-3.2l6.3-2.5l0.3-4.7l3.1-0.5l2.5-2.4l7-1 l1-2.5L969.3,363.1z"
    },
    "RU-WITH-CRIMEA": {
      d: "M1145,281l-4.5,2.1l-0.7,1.2l5.8,1.8l-0.6,2.9l3,1.3l6.3-3.6l5.3-1.1l0.6-2.2l-5.1,0.4l-2.7-1.5L1145,281z M1332.3,95.1l-4.5-4l-13.6-4.1l-9.4-2.1l-6.2,0.9l-5.3,2.9l5.8,0.8l6.6,3.2l8,1.7l11.5,1.3C1325.2,95.7,1332.3,95.1,1332.3,95.1z M1153.6,87.8l0.9-0.6l-5.7-0.9L1146,87l-1.3,1l-1.5-1.2l-5.2,0.1l-6.2,0.8l7.7,0.1l-1.1,1.3l4.4,1l3.6-0.7l0.1-0.7l2.9-0.3C1149.4,88.4,1153.6,87.8,1153.6,87.8z M1354.1,97.7l-1.5-1.8l-12.5-2.6l-3-0.3l-2.2,0.5l1.2,6C1336.1,99.5,1354.1,97.7,1354.1,97.7z M1369.3,104l-9.2-0.7l3.4-1.2l-8.2-1.5l-6.1,1.9l-1,2l1.5,2.1l-6.9-0.1l-5.3,2.6l-4.3-1.1l-9.3,0.5l0.3,1.3l-9.2,0.7l-4.9,2.4l-4.2,0.2l-1.2,3.3l5.5,2.6l-7.7,0.7l-9.5-0.3l-5.8,1.1l4.8,5.4l6.9,4.3l-9.6-3l-7.9,0.3l-5.1,2l4.5,3.8l-4.9-1l-2.1-5l-4.2-2.8l-1.8,0.1l3.6,3.7l-4.6,3.5l8.1,4.2l0.4,5.4l2.9,2.9l4.7,0.5l0.4,3.5l4.4,3.1l-1.9,2.6l0.5,2.7l-3.7,1.4l-0.5,2l-5.3-0.8l3.5-7.8l-0.5-3.6l-6.7-3.3l-3.8-7.3l-3.7-3.7l-3.6-1.6l0.8-4.2l-2.9-2.9l-11.3-1.4l-2.1,1l0.5,4.7l-4.3,4.7l1.2,1.7l4.7,4.1l0.1,2.6l5.3,0.5l0.8,1.1l5.8,2.9l-1,2.8l-18.5-6.1l-6.6-1.7l-12.8-1.6l-1.2,1.7l5.9,3.1l-2.7,3.6l-6.4-3.2l-5,2.2l-7.6,0.1l-2.1,1.9l-5.3-0.6l2.5-3.3l-3.2-0.2l-12.3,4.6l-7.6,2.6l0.4,3.5l-6,1.2l-4-1.9l-1.2-3l5-0.7l-3.6-3l-12.2-1.8l4.3,3.4l-0.8,3.2l4.7,3.3l-1.1,3.8l-4.6-1.9l-4-0.3l-8,5.4l4.2,4.1l-3.2,1.4l-11.4-3.5l-2.1,2.1l3.3,2.4l0.2,2.7l-3.8-1.4l-6-1.7l-1.9-5.8l-1-2.6l-8-4l2.9-0.7l20.1,4.2l6.4-1.5l3.7-2.9l-1.6-3.6l-4-2.6l-17.6-6.1l-11.6-1.3l-7.6-3.2l-3.6,1.8l0,0l-6.4,2.2l-3.2,0.5l0.4,3.7l7.2,3.7l-2.8,4.1l6.4,6.3l-1.7,4.8l4.9,4.1l-0.9,3.7l7.3,3.9l-0.9,2.9l-3.3,3.3l-7.9,7.4l0,0l5.3,2.8l-4.5,3.2l0,0l0.9,1l-2.6,3.4l2.5,5.5l-1.6,1.9l2.4,1.4l1,2.8l2.1,3.6l5.2,1.5l1,1.4l2.3-0.7l4.8,1.4l1,2.9l-0.6,1.6l3.7,3.9l2.2,1.1l-0.1,1.1l3.4,1.1l1.7,1.6l-1.6,1.3l-3.9-0.2l-0.8,0.6l1.5,2l2,3.9l0,0l1.8,0.2l1-1.4l1.5,0.3l4.8-0.5l3.8,3.4l-0.9,1.3l0.7,1.9l4,0.2l2.2,2.7l0.2,1.2l6.6,2.2l3.5-1l3.6,2.9l2.9-0.1l7.6,2l0.4,1.9l-1.3,3.2l1.8,3.4l-0.3,2.1l-4.7,0.5l-2.2,1.7l0.4,2.8l4.2-1l0.4,1.3l-6.8,2.6l3.2,2.4l-3.2,5.2l-3.4,1l5,3.6l6.2,2.4l7.4,5.1l0.5-0.7l4.5,1.1l7.7,1l7.5,2.9l1.1,1.2l2.9-1l5.1,1.3l2.1,2.5l3.5,1.4l1.5,0.2l4.3,3.8l2.4,0.4l0.5-1.5l2.6-2.5l0,0l-7.3-7.3l-0.4-4.1l-5.9-5.9l3.5-6.3l4.6-1.1l1.4-3.7l-2.8-1l-0.2-3.2l-4.2-4.1l-3.6,0.2l-5.3-4.3l1.7-4.7l-1.7-1.2l2.1-6.8l6,3.6l-0.7-4.6l8.1-6.6l7.5-0.2l11.9,4.3l6.6,2.4l4.3-2.5l7.6-0.2l7.3,3.2l0.8-1.8l6.9,0.3l0.2-3l-9.4-4.2l3.6-2.9l-1.5-1.7l3.9-1.6l-5-4.1l1.4-2.1l16.8-2.1l1.7-1.5l10.8-2.2l3.1-2.5l9,1.3l4.3,6.3l4.3-1.5l7,2.1l1.2,3.3l4.4-0.4l9.1-5.7l-0.8,1.9l8.3,4.7l18.1,15.5l1.1-3.3l8.3,3.6l6.2-1.6l3.2,1.1l4.1,3.6l3.9,1.2l3.3,2.6l6-0.9l4.3,3.8l1.7-0.5l4.7-1l6.6-5.4l5.9-2.9l5.3,1.9l5.1,0.1l4.7,2.9l5,0.2l7.9,1.6l2.4-4.3l-4-3.6l1.3-6.4l6.9,2.5l4.8,0.8l6.6,1.5l3.7,4.6l8.4,2.6l3.9-1.1l5.7-0.8l5.4,0.8l6.5,3l4.9,3.1h4.5l6.7,1l3.6-1.6l5.8-1l4.5-4.4l3.3,0.7l3.9,2.1l5.5-0.5l7.3,2.3l4.4-3.9l-1.9-2.7l-0.1-6.5l1.2-2l-2.5-3.3l-3.7-1.5l1.7-3l5.1-1.1l6.2-0.2l8.5,1.8l5.9,2.3l7.7,6.1l3.8,2.7l4.4,3.7l6.1,6.1l9.9,1.9l8.9,4.5l6,5.8h7.5l2.6-2.5l6.9-1.8l1.3,5.6l-0.4,2.3l2.8,6.8l0.6,6l-6.8-1.1l-2.9,2.2l4.7,5.3l3.8,7.3l-2.5,0.1l1.9,3.1l0,0l1.4,1.1l0,0l0,0l0,0l-0.4-2l4-4.5l5.1,3l3.2-0.1l4.4-3.6l1-3.7l2.1-7.1l1.9-7.2l-1.3-4.3l1-9l-5.2-9.9l-5.5-7.3l-1.3-6.2l-4.7-5.1l-12.7-6.7l-5.6-0.4l-0.3,3l-5.8-1.3l-5.7-3.8l-8-0.7l4.9-14.1l3.5-11.5l13.1-1.8l14.9,1l2.5-2.8l7.9,0.8l4.3,4.3l6.4-0.6l8.4-1.6l-7.7-3.5v-9.8l9.1-1.9l12.1,7.1l3.6-6.4l-3.2-4.7l4.7-0.5l6.5,8.1l-2.4,4.6l-0.8,6l0.3,7.5l-5.7,1.3l2.8,2.7l-0.1,3.6l6.4,8.3l16,13.4l10.5,8.8l5.7,4.3l1.6-5.7l-4.5-6.2l5.7-1.5l-5.4-6.9l5-3.1l-4.7-2.6l-3.4-5l4.1-0.2l-9-8.6l-6.7-1.4l-2.9-2.4l-1.1-5.6l-3.1-3.9l7,0.8l1.3-2.5l4.7,2.2l6.1-4.6l11.4,4l-1.7-2.6l2-3.6l1.5-4l3.1-0.7l6.5-4.3l9.8,1.2l-0.9-1.5l-3.8-2.3l-4.1-1.6l-9.1-4.6l-8.1-3l6.1,0.4l2-2.5l0,0l-32.9-21.9l-9.4-2.3l-15.7-2.6l-7.9,0.3l-15.2-1.4l1.8,2.3l8.5,3.4l-2.5,1.8l-14.2-4.8l-6.8,0.6l-9.2-1.1l-7,0.2l-3.9,1.1l-7.2-1.6l-5.1-3.8l-6.5-2.2l-9.2-0.9l-14.7,1l-16.1-4l-7.8-3l-40.1-3.4l-2.1,2.2l9.3,4.8l-7.5-0.7l-1,1.5l-9.7-1.6l-5,1.4l-9.3-2.4l3,5.5l-8.9-2.1l-10-4.1l-0.4-2.2l-6-3.3l-9.8-2.6h-6.1l-9.3-0.9l4.7,3.9l-17.2-0.8l-3.9-2.3l-13.3-0.9l-5.3,0.8l-0.1,1.3l-5.8-3.2l-2.3,0.9l-7.2-1.2l-5.6-0.7l1.1-1.5l6.6-2.8l2.3-1.5l-2.4-2.5l-5.5-1.9l-11.5-2.3l-10.8-0.1l-1.9,1.2L1369.3,104L1369.3,104z M1207.1,135.6l-9.9-4.3l-3.1-4.3l3.3-4.9l2.8-5l8.6-4.7l9.8-2.4l11.3-2.4l1.3-1.5l-4.2-1.9l-6.6,0.6l-4.9,1.8l-11.7,0.9l-10.1,3.1l-6.8,2.7l2.5,2.2l-6.6,4.4l3.9,0.7l-5.4,4.3l1.6,2.8l-3.4,1.1l1.9,2.8l7.9,1.4l2.2,2.3l13.4,0.7L1207.1,135.6L1207.1,135.6z M1521.1,110.9l-17.9-2.6l-10.2-0.2l-3.4,0.9l3.4,3.4l12.4,3.2l4.5-1.2l14.2,0.2C1524.1,114.6,1521.1,110.9,1521.1,110.9z M1546.3,113.2l-11.7-1.3l-8.2-0.7l1.7,1.6l10.3,2l6.8,0.4L1546.3,113.2L1546.3,113.2z M1533.8,122.7l-2.5-1.4l-8.3-1.9l-4.1,0.5l-0.8,2l1.1,0.2l8.8,0.6C1528,122.7,1533.8,122.7,1533.8,122.7z M1696.4,135l-6-3.6l-1.4,2.2l3.5,1.6L1696.4,135z M1084,228.9l-0.6-1.5l0.2-1.7l-2.2-0.9l-5-1.1l-6.3,2l-0.7,2.6l5.9,0.7L1084,228.9z M1673.7,250.7l-7.2-6.2l-5.1-6l-6.8-5.8l-4.9-4l-1.3,0.8l4.4,2.8l-1.9,2.8l6.8,8.3l7.8,6l6.4,8.3l2.4,4.6l5.5,6.8l3.8,6l4.6,5.2l-0.1-4.8l6.5,3.8l-3-4.4l-9.5-6.3l-3.7-9l8.9,2L1673.7,250.7L1673.7,250.7z"
    },
    "UA-WITHOUT-CRIMEA": {
      d: "M1138.5,241l-4.8,0.5l-1.5-0.3l-1,1.4l-1.8-0.2l0,0l-4.1,0.3l-1.2,1.4l0.2,3.1l-2-0.6l-4.3,0.3l-1.5-1.5l-1.6,1.1l-2-0.9l-3.8-0.1l-5.6-1.5l-5-0.5l-3.7,0.2l-2.4,1.6l-2.2,0.3l3.1,5.3l-0.3,1.8l-2.3,0.7l-3.8,5.1l1.6,2.8l-1.1-0.4l-1.1,1.7l-0.7,2.5l2.9,1.7l0.6,1.6l1.9-1.3l3.2,0.7h3.2l2.4,1.5l1.6-0.9l3.6-0.6l1-1.5h2.1l1.1-0.9l3.2-0.6l3.9,1.9l2,0.3l2.5,1.6v2.1l1.9,1.1l1.1,2.6l2,1.5l-0.2,1l1,0.6l-1.2,0.5l-3-0.2l-0.6-0.9l-1,0.5l0.5,1.1l-1.1,2l-0.5,2.1l-1.2,0.7l2.4,1.1l2.2-1l2.4,1.1l3.3-4.6l1.3-3.4l4.5-0.8l0.7,2.4l8,1.5l1.7,1.4l7.4,1.3l-1-3.9l3.9-2.3l4.6-0.3l3-2l3.9-0.5l-0.4-2.8l2.2-1.7l4.7-0.5l0.3-2.1l-1.8-3.4l1.3-3.2l-0.4-1.9l-7.6-2l-2.9,0.1l-3.6-2.9l-3.5,1l-6.6-2.2l-0.2-1.2l-2.2-2.7l-4.7-2.1l0.9-1.3L1138.5,241L1138.5,241z"
    }
  }, a.prototype.createTooltip = function () {
    if (this.tooltip) return !1;
    this.tooltip = this.createElement("div", "svgMap-tooltip", document.getElementsByTagName("body")[0]), this.tooltipContent = this.createElement("div", "svgMap-tooltip-content-wrapper", this.tooltip), this.tooltipPointer = this.createElement("div", "svgMap-tooltip-pointer", this.tooltip);
  }, a.prototype.setTooltipContent = function (l) {
    this.tooltip && (this.tooltipContent.innerHTML = "", this.tooltipContent.append(l));
  }, a.prototype.showTooltip = function (l) {
    this.tooltip.classList.add("svgMap-active"), this.moveTooltip(l);
  }, a.prototype.hideTooltip = function () {
    this.tooltip.classList.remove("svgMap-active");
  }, a.prototype.moveTooltip = function (l) {
    var t,
        e,
        o,
        i,
        a = l.pageX || (l.touches && l.touches[0] ? l.touches[0].pageX : null),
        L = l.pageY || (l.touches && l.touches[0] ? l.touches[0].pageY : null);
    null !== a && null !== L && (t = window.innerWidth, e = this.tooltip.offsetWidth, o = this.tooltip.offsetHeight, (i = a - e / 2) <= 6 ? (a = 6 + e / 2, this.tooltipPointer.style.marginLeft = i - 6 + "px") : t - 6 <= i + e ? (a = t - 6 - e / 2, this.tooltipPointer.style.marginLeft = -1 * (t - 6 - l.pageX - e / 2) + "px") : this.tooltipPointer.style.marginLeft = "0px", L - 12 - o <= 6 ? (this.tooltip.classList.add("svgMap-tooltip-flipped"), L += 32) : (this.tooltip.classList.remove("svgMap-tooltip-flipped"), L -= 12), this.tooltip.style.left = a + "px", this.tooltip.style.top = L + "px");
  }, a.prototype.error = function (l) {
    (console.error || console.log)("svgMap error: " + (l || "Unknown error"));
  }, a.prototype.createElement = function (l, t, e, o) {
    var i = document.createElement(l);
    return t && (t = t.split(" ")).forEach(function (l) {
      i.classList.add(l);
    }), o && (i.innerHTML = o), e && e.appendChild(i), i;
  }, a.prototype.numberWithCommas = function (l, t) {
    return l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t || ",");
  }, a.prototype.getColor = function (l, t, e) {
    l = l.slice(-6), t = t.slice(-6), e = parseFloat(e).toFixed(1);
    var o = Math.ceil(parseInt(l.substring(0, 2), 16) * e + parseInt(t.substring(0, 2), 16) * (1 - e)),
        i = Math.ceil(parseInt(l.substring(2, 4), 16) * e + parseInt(t.substring(2, 4), 16) * (1 - e)),
        e = Math.ceil(parseInt(l.substring(4, 6), 16) * e + parseInt(t.substring(4, 6), 16) * (1 - e));
    return "#" + this.getHex(o) + this.getHex(i) + this.getHex(e);
  }, a.prototype.getHex = function (l) {
    return ("0" + (l = l.toString(16))).slice(-2);
  }, a.prototype.getCountryName = function (l) {
    return (this.options.countryNames && this.options.countryNames[l] ? this.options.countryNames : this.countries)[l];
  }, a;
}

!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! svg-pan-zoom */ "./node_modules/svg-pan-zoom/src/browserify.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (l) {
    return t.svgMap = e(l);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (l) {
  return svgMapWrapper(l);
});

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/components/PopupVid.js":
/*!************************************!*\
  !*** ./src/components/PopupVid.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var PopupVid = /*#__PURE__*/function () {
  function PopupVid(_ref) {
    var selector = _ref.selector;

    _classCallCheck(this, PopupVid);

    this._selectorElement = document.querySelector("".concat(selector));
    this._exploreBtn = document.querySelector(".explore__btn");
  }

  _createClass(PopupVid, [{
    key: "openPopupVid",
    value: function openPopupVid() {
      this._selectorElement.classList.add("popup__vid_open");
    }
  }, {
    key: "closeVid",
    value: function closeVid() {
      this._selectorElement.classList.remove("popup__vid_open");
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._exploreBtn.addEventListener("click", function () {
        return _this.openPopupVid();
      });

      this._selectorElement.addEventListener("click", function () {
        return _this.closeVid();
      });
    }
  }]);

  return PopupVid;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupVid);

/***/ }),

/***/ "./node_modules/svgmap/dist/svgMap.min.css":
/*!*************************************************!*\
  !*** ./node_modules/svgmap/dist/svgMap.min.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
/* harmony import */ var _components_PopupVid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupVid.js */ "./src/components/PopupVid.js");
/* harmony import */ var svgmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svgmap */ "./node_modules/svgmap/dist/svgMap.min.js");
/* harmony import */ var svgmap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svgmap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svgmap_dist_svgMap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svgmap/dist/svgMap.min.css */ "./node_modules/svgmap/dist/svgMap.min.css");
var _values;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth"
});
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
var popupVid = new _components_PopupVid_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  selector: ".popup__vid"
});
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
popupVid.setEventListeners();
popup.setEventListeners();
popup2.setEventListeners();
new (svgmap__WEBPACK_IMPORTED_MODULE_3___default())({
  targetElementID: "svgMap",
  data: {
    data: {
      MW: {
        name: "MegaWatt Capacity:",
        thresholdMax: 50000,
        thresholdMin: 1000
      },
      SF: {
        name: "Solar Farms:"
      }
    },
    applyData: "MW",
    values: (_values = {
      US: {
        MW: 147086,
        color: "#FFFFE0",
        SF: 1359
      },
      CN: {
        MW: 139994,
        color: "#FFFFE0",
        SF: 2735
      },
      IN: {
        MW: 59271,
        color: "#FED8B1",
        SF: 461
      },
      AU: {
        MW: 55702,
        color: "#FED8B1",
        SF: 208
      },
      GR: {
        MW: 43046,
        color: "#FED8B1",
        SF: 524
      },
      BR: {
        MW: 36238,
        color: "#FED8B1",
        SF: 683
      },
      MX: {
        MW: 20858,
        color: "#FED8B1",
        SF: 236
      },
      ES: {
        MW: 20606,
        color: "#FED8B1",
        SF: 203
      },
      CO: {
        MW: 19054,
        color: "#FED8B1",
        SF: 178
      },
      OM: {
        MW: 15430,
        color: "#FED8B1",
        SF: 10
      },
      MA: {
        MW: 14132,
        color: "#FED8B1",
        SF: 25
      },
      CL: {
        MW: 13967,
        color: "#FED8B1",
        SF: 87
      },
      VN: {
        MW: 15430,
        color: "#FED8B1",
        SF: 155
      },
      PH: {
        MW: 11696,
        color: "#FED8B1",
        SF: 127
      },
      JP: {
        MW: 10099,
        color: "#FED8B1",
        SF: 229
      },
      KW: {
        MW: 9520,
        color: "#90EE90",
        SF: 6
      },
      GB: {
        MW: 8314,
        color: "#90EE90",
        SF: 197
      },
      MM: {
        MW: 6050,
        color: "#90EE90",
        SF: 4
      },
      AE: {
        MW: 5620,
        color: "#90EE90",
        SF: 14
      },
      SA: {
        MW: 4886,
        color: "#90EE90",
        SF: 19
      },
      DZ: {
        MW: 4455,
        color: "#90EE90",
        SF: 22
      },
      DE: {
        MW: 4433,
        color: "#90EE90",
        SF: 88
      },
      ZA: {
        MW: 3742,
        color: "#90EE90",
        SF: 49
      },
      KR: {
        MW: 3385,
        color: "#90EE90",
        SF: 17
      },
      AF: {
        MW: 3135,
        color: "#90EE90",
        SF: 5
      },
      PT: {
        MW: 2895,
        color: "#90EE90",
        SF: 32
      },
      BD: {
        MW: 2793,
        color: "#90EE90",
        SF: 40
      },
      ID: {
        MW: 2565,
        color: "#90EE90",
        SF: 6
      },
      CA: {
        MW: 2527,
        color: "#90EE90",
        SF: 44
      },
      FR: {
        MW: 2489,
        color: "#90EE90",
        SF: 32
      },
      EG: {
        MW: 2286,
        color: "#90EE90",
        SF: 40
      },
      MY: {
        MW: 2138,
        color: "#90EE90",
        SF: 40
      },
      IT: {
        MW: 2019,
        color: "#90EE90",
        SF: 38
      },
      TR: {
        MW: 1777,
        color: "#90EE90",
        SF: 13
      },
      TW: {
        MW: 1715,
        color: "#90EE90",
        SF: 14
      },
      UA: {
        MW: 1703,
        color: "#90EE90",
        SF: 31
      },
      TH: {
        MW: 1699,
        color: "#90EE90",
        SF: 11
      },
      GH: {
        MW: 1662,
        color: "#90EE90",
        SF: 20
      },
      JO: {
        MW: 1648,
        color: "#90EE90",
        SF: 28
      },
      DK: {
        MW: 1471,
        color: "#90EE90",
        SF: 20
      },
      IQ: {
        MW: 1300,
        color: "#90EE90",
        SF: 2
      },
      LK: {
        MW: 1270,
        color: "#90EE90",
        SF: 6
      },
      RO: {
        MW: 1263,
        color: "#90EE90",
        SF: 21
      },
      NZ: {
        MW: 1211,
        color: "#90EE90",
        SF: 11
      },
      RU: {
        MW: 1134,
        color: "#90EE90",
        SF: 35
      },
      ET: {
        MW: 1100,
        color: "#90EE90",
        SF: 3
      },
      KZ: {
        MW: 1087,
        color: "#90EE90",
        SF: 19
      },
      AR: {
        MW: 1001,
        color: "#90EE90",
        SF: 13
      },
      NL: {
        MW: 1000,
        color: "#90EE90",
        SF: 21
      },
      PL: {
        MW: 918,
        color: "#CBC3E3",
        SF: 9
      },
      PE: {
        MW: 904,
        color: "#CBC3E3",
        SF: 11
      },
      QA: {
        MW: 815,
        color: "#CBC3E3",
        SF: 3
      },
      IL: {
        MW: 788,
        color: "#CBC3E3",
        SF: 9
      },
      DO: {
        MW: 714,
        color: "#CBC3E3",
        SF: 12
      },
      TN: {
        MW: 700,
        color: "#CBC3E3",
        SF: 13
      },
      CD: {
        MW: 640,
        color: "#CBC3E3",
        SF: 3
      },
      BA: {
        MW: 632,
        color: "#CBC3E3",
        SF: 12
      },
      HN: {
        MW: 572,
        color: "#CBC3E3",
        SF: 15
      },
      BG: {
        MW: 549,
        color: "#CBC3E3",
        SF: 9
      },
      MK: {
        MW: 530,
        color: "#CBC3E3",
        SF: 3
      },
      KE: {
        MW: 514,
        color: "#CBC3E3",
        SF: 12
      },
      KH: {
        MW: 485,
        color: "#CBC3E3",
        SF: 12
      },
      PK: {
        MW: 450,
        color: "#CBC3E3",
        SF: 3
      },
      AL: {
        MW: 390,
        color: "#CBC3E3",
        SF: 5
      },
      EC: {
        MW: 362,
        color: "#CBC3E3",
        SF: 4
      },
      PR: {
        MW: 342,
        color: "#CBC3E3",
        SF: 5
      },
      SY: {
        MW: 338,
        color: "#CBC3E3",
        SF: 3
      },
      HU: {
        MW: 314,
        color: "#CBC3E3",
        SF: 10
      },
      RS: {
        MW: 280,
        color: "#CBC3E3",
        SF: 5
      },
      SG: {
        MW: 274,
        color: "#CBC3E3",
        SF: 4
      },
      SV: {
        MW: 265,
        color: "#CBC3E3",
        SF: 5
      },
      AZ: {
        MW: 250,
        color: "#CBC3E3",
        SF: 2
      },
      BF: {
        MW: 241,
        color: "#CBC3E3",
        SF: 8
      },
      BE: {
        MW: 233,
        color: "#CBC3E3",
        SF: 5
      },
      SN: {
        MW: 212,
        color: "#CBC3E3",
        SF: 8
      },
      AM: {
        MW: 200,
        color: "#CBC3E3",
        SF: 1
      },
      GU: {
        MW: 196,
        color: "#CBC3E3",
        SF: 5
      },
      UY: {
        MW: 190,
        color: "#CBC3E3",
        SF: 5
      },
      XK: {
        MW: 180,
        color: "#CBC3E3",
        SF: 2
      },
      NI: {
        MW: 180,
        color: "#CBC3E3",
        SF: 5
      },
      PA: {
        MW: 177,
        color: "#CBC3E3",
        SF: 3
      },
      BO: {
        MW: 160,
        color: "#CBC3E3",
        SF: 3
      },
      TD: {
        MW: 160,
        color: "#CBC3E3",
        SF: 4
      },
      MW: {
        MW: 151,
        color: "#CBC3E3",
        SF: 4
      },
      GM: {
        MW: 150,
        color: "#CBC3E3",
        SF: 2
      },
      TT: {
        MW: 150,
        color: "#CBC3E3",
        SF: 2
      },
      EH: {
        MW: 105,
        color: "#CBC3E3",
        SF: 2
      },
      BH: {
        MW: 100,
        color: "#CBC3E3",
        SF: 1
      },
      SZ: {
        MW: 100,
        color: "#CBC3E3",
        SF: 1
      },
      VA: {
        MW: 100,
        color: "#CBC3E3",
        SF: 1
      },
      ML: {
        MW: 100,
        color: "#CBC3E3",
        SF: 3
      },
      UZ: {
        MW: 100,
        color: "#CBC3E3",
        SF: 1
      },
      GT: {
        MW: 93,
        color: "#528AAE",
        SF: 2
      },
      ZM: {
        MW: 88,
        color: "#528AAE",
        SF: 2
      },
      CZ: {
        MW: 87,
        color: "#528AAE",
        SF: 3
      },
      JM: {
        MW: 72,
        color: "#528AAE",
        SF: 2
      },
      MR: {
        MW: 65,
        color: "#528AAE",
        SF: 2
      },
      LA: {
        MW: 64,
        color: "#528AAE",
        SF: 1
      },
      SK: {
        MW: 58,
        color: "#528AAE",
        SF: 1
      },
      UG: {
        MW: 57,
        color: "#528AAE",
        SF: 2
      },
      BY: {
        MW: 55,
        color: "#528AAE",
        SF: 1
      },
      GF: {
        MW: 55,
        color: "#528AAE",
        SF: 1
      },
      BJ: {
        MW: 50,
        color: "#528AAE",
        SF: 2
      },
      TG: {
        MW: 50,
        color: "#528AAE",
        SF: 2
      },
      NA: {
        MW: 46,
        color: "#528AAE",
        SF: 1
      },
      SE: {
        MW: 46,
        color: "#528AAE",
        SF: 2
      },
      MZ: {
        MW: 40,
        color: "#528AAE",
        SF: 1
      },
      CU: {
        MW: 39,
        color: "#528AAE",
        SF: 1
      },
      KN: {
        MW: 38,
        color: "#528AAE",
        SF: 1
      },
      MN: {
        MW: 30,
        color: "#528AAE",
        SF: 1
      },
      NC: {
        MW: 30,
        color: "#528AAE",
        SF: 1
      },
      CF: {
        MW: 25,
        color: "#528AAE",
        SF: 1
      },
      NP: {
        MW: 25,
        color: "#528AAE",
        SF: 1
      },
      ZW: {
        MW: 25,
        color: "#528AAE",
        SF: 1
      },
      AT: {
        MW: 24,
        color: "#528AAE",
        SF: 1
      },
      IR: {
        MW: 20,
        color: "#528AAE",
        SF: 1
      },
      MG: {
        MW: 20,
        color: "#528AAE",
        SF: 1
      },
      SS: {
        MW: 20,
        color: "#528AAE",
        SF: 1
      },
      SO: {
        MW: 10,
        color: "#528AAE",
        SF: 1
      },
      SD: {
        MW: 10,
        color: "#528AAE",
        SF: 1
      },
      GL: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      NO: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      HT: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      VE: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      PY: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      CR: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      GY: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      SR: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      FK: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      PG: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      SB: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      FI: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      EE: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      LV: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      LT: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      IS: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      IE: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      },
      HR: {
        MW: "No megawatt capacity",
        color: "#FFCCCB",
        SF: 0
      }
    }, _defineProperty(_values, "PG", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "CH", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "SI", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "MD", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "ME", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "GE", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "TJ", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "TM", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "KP", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "KG", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "YE", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "LY", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "AO", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "BW", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "TZ", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "ER", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "LS", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "NE", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "CG", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "GA", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "NG", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "CM", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "GQ", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "PF", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "BZ", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "BS", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "BI", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "RW", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "CY", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "LB", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "PS", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "MT", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "CI", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "LR", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "GN", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "GW", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "SL", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "ST", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "TL", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _defineProperty(_values, "FO", {
      MW: "No megawatt capacity",
      color: "#FFCCCB",
      SF: 0
    }), _values)
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQTdLQSxrQ0E4S0E7TUFBRTdOLEVBQUUsRUFBRSxzQkFBTjtNQUE4QndILEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQTlLQSxrQ0ErS0E7TUFBRTdOLEVBQUUsRUFBRSxzQkFBTjtNQUE4QndILEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQS9LQSxrQ0FnTEE7TUFBRTdOLEVBQUUsRUFBRSxzQkFBTjtNQUE4QndILEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQWhMQSxrQ0FpTEE7TUFBRTdOLEVBQUUsRUFBRSxzQkFBTjtNQUE4QndILEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQWpMQSxrQ0FrTEE7TUFBRTdOLEVBQUUsRUFBRSxzQkFBTjtNQUE4QndILEtBQUssRUFBRSxTQUFyQztNQUFnRHFHLEVBQUUsRUFBRTtJQUFwRCxDQWxMQTtFQVpGO0FBRkcsQ0FBWCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL2Jyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL2NvbnRyb2wtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL3NoYWRvdy12aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvc3ZnLXBhbi16b29tLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy9zdmctdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy91bml3aGVlbC5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnbWFwL2Rpc3Qvc3ZnTWFwLm1pbi5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL3NyYy9jb21wb25lbnRzL1BvcHVwVmlkLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnbWFwL2Rpc3Qvc3ZnTWFwLm1pbi5jc3M/YTg3ZiIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBTdmdQYW5ab29tID0gcmVxdWlyZShcIi4vc3ZnLXBhbi16b29tLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2Z1Bhblpvb207XG4iLCJ2YXIgU3ZnVXRpbHMgPSByZXF1aXJlKFwiLi9zdmctdXRpbGl0aWVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5hYmxlOiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIC8vIFNlbGVjdCAoYW5kIGNyZWF0ZSBpZiBuZWNlc3NhcnkpIGRlZnNcbiAgICB2YXIgZGVmcyA9IGluc3RhbmNlLnN2Zy5xdWVyeVNlbGVjdG9yKFwiZGVmc1wiKTtcbiAgICBpZiAoIWRlZnMpIHtcbiAgICAgIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwiZGVmc1wiKTtcbiAgICAgIGluc3RhbmNlLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3Igc3R5bGUgZWxlbWVudCwgYW5kIGNyZWF0ZSBpdCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgdmFyIHN0eWxlRWwgPSBkZWZzLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZSNzdmctcGFuLXpvb20tY29udHJvbHMtc3R5bGVzXCIpO1xuICAgIGlmICghc3R5bGVFbCkge1xuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcInN0eWxlXCIpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbHMtc3R5bGVzXCIpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPVxuICAgICAgICBcIi5zdmctcGFuLXpvb20tY29udHJvbCB7IGN1cnNvcjogcG9pbnRlcjsgZmlsbDogYmxhY2s7IGZpbGwtb3BhY2l0eTogMC4zMzM7IH0gLnN2Zy1wYW4tem9vbS1jb250cm9sOmhvdmVyIHsgZmlsbC1vcGFjaXR5OiAwLjg7IH0gLnN2Zy1wYW4tem9vbS1jb250cm9sLWJhY2tncm91bmQgeyBmaWxsOiB3aGl0ZTsgZmlsbC1vcGFjaXR5OiAwLjU7IH0gLnN2Zy1wYW4tem9vbS1jb250cm9sLWJhY2tncm91bmQgeyBmaWxsLW9wYWNpdHk6IDAuODsgfVwiO1xuICAgICAgZGVmcy5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgLy8gWm9vbSBHcm91cFxuICAgIHZhciB6b29tR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwiZ1wiKTtcbiAgICB6b29tR3JvdXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbHNcIik7XG4gICAgem9vbUdyb3VwLnNldEF0dHJpYnV0ZShcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcInRyYW5zbGF0ZShcIiArXG4gICAgICAgIChpbnN0YW5jZS53aWR0aCAtIDcwKSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgKGluc3RhbmNlLmhlaWdodCAtIDc2KSArXG4gICAgICAgIFwiKSBzY2FsZSgwLjc1KVwiXG4gICAgKTtcbiAgICB6b29tR3JvdXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbFwiKTtcblxuICAgIC8vIENvbnRyb2wgZWxlbWVudHNcbiAgICB6b29tR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlWm9vbUluKGluc3RhbmNlKSk7XG4gICAgem9vbUdyb3VwLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVpvb21SZXNldChpbnN0YW5jZSkpO1xuICAgIHpvb21Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVab29tT3V0KGluc3RhbmNlKSk7XG5cbiAgICAvLyBGaW5hbGx5IGFwcGVuZCBjcmVhdGVkIGVsZW1lbnRcbiAgICBpbnN0YW5jZS5zdmcuYXBwZW5kQ2hpbGQoem9vbUdyb3VwKTtcblxuICAgIC8vIENhY2hlIGNvbnRyb2wgaW5zdGFuY2VcbiAgICBpbnN0YW5jZS5jb250cm9sSWNvbnMgPSB6b29tR3JvdXA7XG4gIH0sXG5cbiAgX2NyZWF0ZVpvb21JbjogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICB2YXIgem9vbUluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcImdcIik7XG4gICAgem9vbUluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ZnLXBhbi16b29tLXpvb20taW5cIik7XG4gICAgem9vbUluLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMC41IDUpIHNjYWxlKDAuMDE1KVwiKTtcbiAgICB6b29tSW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbFwiKTtcbiAgICB6b29tSW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnpvb21JbigpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB6b29tSW4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkuem9vbUluKCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgdmFyIHpvb21JbkJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwicmVjdFwiKTsgLy8gVE9ETyBjaGFuZ2UgdGhlc2UgYmFja2dyb3VuZCBzcGFjZSBmaWxsZXJzIHRvIHJvdW5kZWQgcmVjdGFuZ2xlcyBzbyB0aGV5IGxvb2sgcHJldHRpZXJcbiAgICB6b29tSW5CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInhcIiwgXCIwXCIpO1xuICAgIHpvb21JbkJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieVwiLCBcIjBcIik7XG4gICAgem9vbUluQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MDBcIik7IC8vIGxhcmdlciB0aGFuIGV4cGVjdGVkIGJlY2F1c2UgdGhlIHdob2xlIGdyb3VwIGlzIHRyYW5zZm9ybWVkIHRvIHNjYWxlIGRvd25cbiAgICB6b29tSW5CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE0MDBcIik7XG4gICAgem9vbUluQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sLWJhY2tncm91bmRcIik7XG4gICAgem9vbUluLmFwcGVuZENoaWxkKHpvb21JbkJhY2tncm91bmQpO1xuXG4gICAgdmFyIHpvb21JblNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcInBhdGhcIik7XG4gICAgem9vbUluU2hhcGUuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xMjgwIDU3NnYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0zMjB2MzIwcTAgMjYgLTE5IDQ1dC00NSAxOWgtMTI4cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMzIwaC0zMjBxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgzMjB2LTMyMHEwIC0yNiAxOSAtNDV0NDUgLTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djMyMGgzMjBxMjYgMCA0NSAxOXQxOSA0NXpNMTUzNiAxMTIwdi05NjAgcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41elwiXG4gICAgKTtcbiAgICB6b29tSW5TaGFwZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sLWVsZW1lbnRcIik7XG4gICAgem9vbUluLmFwcGVuZENoaWxkKHpvb21JblNoYXBlKTtcblxuICAgIHJldHVybiB6b29tSW47XG4gIH0sXG5cbiAgX2NyZWF0ZVpvb21SZXNldDogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICAvLyByZXNldFxuICAgIHZhciByZXNldFBhblpvb21Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcImdcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN2Zy1wYW4tem9vbS1yZXNldC1wYW4tem9vbVwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg1IDM1KSBzY2FsZSgwLjQpXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbFwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS5yZXNldCgpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnJlc2V0KCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgdmFyIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgU3ZnVXRpbHMuc3ZnTlMsXG4gICAgICBcInJlY3RcIlxuICAgICk7IC8vIFRPRE8gY2hhbmdlIHRoZXNlIGJhY2tncm91bmQgc3BhY2UgZmlsbGVycyB0byByb3VuZGVkIHJlY3RhbmdsZXMgc28gdGhleSBsb29rIHByZXR0aWVyXG4gICAgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieFwiLCBcIjJcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieVwiLCBcIjJcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxODJcIik7IC8vIGxhcmdlciB0aGFuIGV4cGVjdGVkIGJlY2F1c2UgdGhlIHdob2xlIGdyb3VwIGlzIHRyYW5zZm9ybWVkIHRvIHNjYWxlIGRvd25cbiAgICByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI1OFwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImNsYXNzXCIsXG4gICAgICBcInN2Zy1wYW4tem9vbS1jb250cm9sLWJhY2tncm91bmRcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5hcHBlbmRDaGlsZChyZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZCk7XG5cbiAgICB2YXIgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFN2Z1V0aWxzLnN2Z05TLFxuICAgICAgXCJwYXRoXCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTEuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0zMy4wNTEsMjAuNjMyYy0wLjc0Mi0wLjQwNi0xLjg1NC0wLjYwOS0zLjMzOC0wLjYwOWgtNy45Njl2OS4yODFoNy43NjljMS41NDMsMCwyLjcwMS0wLjE4OCwzLjQ3My0wLjU2MmMxLjM2NS0wLjY1NiwyLjA0OC0xLjk1MywyLjA0OC0zLjg5MUMzNS4wMzIsMjIuNzU3LDM0LjM3MiwyMS4zNTEsMzMuMDUxLDIwLjYzMnpcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImNsYXNzXCIsXG4gICAgICBcInN2Zy1wYW4tem9vbS1jb250cm9sLWVsZW1lbnRcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5hcHBlbmRDaGlsZChyZXNldFBhblpvb21Db250cm9sU2hhcGUxKTtcblxuICAgIHZhciByZXNldFBhblpvb21Db250cm9sU2hhcGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgU3ZnVXRpbHMuc3ZnTlMsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMi5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTE3MC4yMzEsMC41SDE1Ljg0N0M3LjEwMiwwLjUsMC41LDUuNzA4LDAuNSwxMS44NHYzOC44NjFDMC41LDU2LjgzMyw3LjEwMiw2MS41LDE1Ljg0Nyw2MS41aDE1NC4zODRjOC43NDUsMCwxNS4yNjktNC42NjcsMTUuMjY5LTEwLjc5OFYxMS44NEMxODUuNSw1LjcwOCwxNzguOTc2LDAuNSwxNzAuMjMxLDAuNXogTTQyLjgzNyw0OC41NjloLTcuOTY5Yy0wLjIxOS0wLjc2Ni0wLjM3NS0xLjM4My0wLjQ2OS0xLjg1MmMtMC4xODgtMC45NjktMC4yODktMS45NjEtMC4zMDUtMi45NzdsLTAuMDQ3LTMuMjExYy0wLjAzLTIuMjAzLTAuNDEtMy42NzItMS4xNDItNC40MDZjLTAuNzMyLTAuNzM0LTIuMTAzLTEuMTAyLTQuMTEzLTEuMTAyaC03LjA1djEzLjU0N2gtNy4wNTVWMTQuMDIyaDE2LjUyNGMyLjM2MSwwLjA0Nyw0LjE3OCwwLjM0NCw1LjQ1LDAuODkxYzEuMjcyLDAuNTQ3LDIuMzUxLDEuMzUyLDMuMjM0LDIuNDE0YzAuNzMxLDAuODc1LDEuMzEsMS44NDQsMS43MzcsMi45MDZzMC42NCwyLjI3MywwLjY0LDMuNjMzYzAsMS42NDEtMC40MTQsMy4yNTQtMS4yNDIsNC44NHMtMi4xOTUsMi43MDctNC4xMDIsMy4zNjNjMS41OTQsMC42NDEsMi43MjMsMS41NTEsMy4zODcsMi43M3MwLjk5NiwyLjk4LDAuOTk2LDUuNDAydjIuMzJjMCwxLjU3OCwwLjA2MywyLjY0OCwwLjE5LDMuMjExYzAuMTksMC44OTEsMC42MzUsMS41NDcsMS4zMzMsMS45NjlWNDguNTY5eiBNNzUuNTc5LDQ4LjU2OWgtMjYuMThWMTQuMDIyaDI1LjMzNnY2LjExN0g1Ni40NTR2Ny4zMzZoMTYuNzgxdjZINTYuNDU0djguODgzaDE5LjEyNVY0OC41Njl6IE0xMDQuNDk3LDQ2LjMzMWMtMi40NCwyLjA4Ni01Ljg4NywzLjEyOS0xMC4zNCwzLjEyOWMtNC41NDgsMC04LjEyNS0xLjAyNy0xMC43MzEtMy4wODJzLTMuOTA5LTQuODc5LTMuOTA5LTguNDczaDYuODkxYzAuMjI0LDEuNTc4LDAuNjYyLDIuNzU4LDEuMzE2LDMuNTM5YzEuMTk2LDEuNDIyLDMuMjQ2LDIuMTMzLDYuMTUsMi4xMzNjMS43MzksMCwzLjE1MS0wLjE4OCw0LjIzNi0wLjU2MmMyLjA1OC0wLjcxOSwzLjA4Ny0yLjA1NSwzLjA4Ny00LjAwOGMwLTEuMTQxLTAuNTA0LTIuMDIzLTEuNTEyLTIuNjQ4Yy0xLjAwOC0wLjYwOS0yLjYwNy0xLjE0OC00Ljc5Ni0xLjYxN2wtMy43NC0wLjgyYy0zLjY3Ni0wLjgxMi02LjIwMS0xLjY5NS03LjU3Ni0yLjY0OGMtMi4zMjgtMS41OTQtMy40OTItNC4wODYtMy40OTItNy40NzdjMC0zLjA5NCwxLjEzOS01LjY2NCwzLjQxNy03LjcxMXM1LjYyMy0zLjA3LDEwLjAzNi0zLjA3YzMuNjg1LDAsNi44MjksMC45NjUsOS40MzEsMi44OTVjMi42MDIsMS45MywzLjk2Niw0LjczLDQuMDkzLDguNDAyaC02LjkzOGMtMC4xMjgtMi4wNzgtMS4wNTctMy41NTUtMi43ODctNC40M2MtMS4xNTQtMC41NzgtMi41ODctMC44NjctNC4zMDEtMC44NjdjLTEuOTA3LDAtMy40MjgsMC4zNzUtNC41NjUsMS4xMjVjLTEuMTM4LDAuNzUtMS43MDYsMS43OTctMS43MDYsMy4xNDFjMCwxLjIzNCwwLjU2MSwyLjE1NiwxLjY4MiwyLjc2NmMwLjcyMSwwLjQwNiwyLjI1LDAuODgzLDQuNTg5LDEuNDNsNi4wNjMsMS40M2MyLjY1NywwLjYyNSw0LjY0OCwxLjQ2MSw1Ljk3NSwyLjUwOGMyLjA1OSwxLjYyNSwzLjA4OSwzLjk3NywzLjA4OSw3LjA1NUMxMDguMTU3LDQxLjYyNCwxMDYuOTM3LDQ0LjI0NSwxMDQuNDk3LDQ2LjMzMXogTTEzOS42MSw0OC41NjloLTI2LjE4VjE0LjAyMmgyNS4zMzZ2Ni4xMTdoLTE4LjI4MXY3LjMzNmgxNi43ODF2NmgtMTYuNzgxdjguODgzaDE5LjEyNVY0OC41Njl6IE0xNzAuMzM3LDIwLjE0aC0xMC4zMzZ2MjguNDNoLTcuMjY2VjIwLjE0aC0xMC4zODN2LTYuMTE3aDI3Ljk4NFYyMC4xNHpcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMi5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImNsYXNzXCIsXG4gICAgICBcInN2Zy1wYW4tem9vbS1jb250cm9sLWVsZW1lbnRcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5hcHBlbmRDaGlsZChyZXNldFBhblpvb21Db250cm9sU2hhcGUyKTtcblxuICAgIHJldHVybiByZXNldFBhblpvb21Db250cm9sO1xuICB9LFxuXG4gIF9jcmVhdGVab29tT3V0OiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIC8vIHpvb20gb3V0XG4gICAgdmFyIHpvb21PdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwiZ1wiKTtcbiAgICB6b29tT3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ZnLXBhbi16b29tLXpvb20tb3V0XCIpO1xuICAgIHpvb21PdXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDMwLjUgNzApIHNjYWxlKDAuMDE1KVwiKTtcbiAgICB6b29tT3V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xcIik7XG4gICAgem9vbU91dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkuem9vbU91dCgpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB6b29tT3V0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnpvb21PdXQoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB2YXIgem9vbU91dEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwicmVjdFwiKTsgLy8gVE9ETyBjaGFuZ2UgdGhlc2UgYmFja2dyb3VuZCBzcGFjZSBmaWxsZXJzIHRvIHJvdW5kZWQgcmVjdGFuZ2xlcyBzbyB0aGV5IGxvb2sgcHJldHRpZXJcbiAgICB6b29tT3V0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKTtcbiAgICB6b29tT3V0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMFwiKTtcbiAgICB6b29tT3V0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MDBcIik7IC8vIGxhcmdlciB0aGFuIGV4cGVjdGVkIGJlY2F1c2UgdGhlIHdob2xlIGdyb3VwIGlzIHRyYW5zZm9ybWVkIHRvIHNjYWxlIGRvd25cbiAgICB6b29tT3V0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNDAwXCIpO1xuICAgIHpvb21PdXRCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtYmFja2dyb3VuZFwiKTtcbiAgICB6b29tT3V0LmFwcGVuZENoaWxkKHpvb21PdXRCYWNrZ3JvdW5kKTtcblxuICAgIHZhciB6b29tT3V0U2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwicGF0aFwiKTtcbiAgICB6b29tT3V0U2hhcGUuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xMjgwIDU3NnYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC04OTZxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWg4OTZxMjYgMCA0NSAxOXQxOSA0NXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjUgdDg0LjUgLTIwMy41elwiXG4gICAgKTtcbiAgICB6b29tT3V0U2hhcGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbC1lbGVtZW50XCIpO1xuICAgIHpvb21PdXQuYXBwZW5kQ2hpbGQoem9vbU91dFNoYXBlKTtcblxuICAgIHJldHVybiB6b29tT3V0O1xuICB9LFxuXG4gIGRpc2FibGU6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLmNvbnRyb2xJY29ucykge1xuICAgICAgaW5zdGFuY2UuY29udHJvbEljb25zLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW5zdGFuY2UuY29udHJvbEljb25zKTtcbiAgICAgIGluc3RhbmNlLmNvbnRyb2xJY29ucyA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuIiwidmFyIFN2Z1V0aWxzID0gcmVxdWlyZShcIi4vc3ZnLXV0aWxpdGllc1wiKSxcbiAgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXNcIik7XG5cbnZhciBTaGFkb3dWaWV3cG9ydCA9IGZ1bmN0aW9uKHZpZXdwb3J0LCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdCh2aWV3cG9ydCwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemF0aW9uXG4gKlxuICogQHBhcmFtICB7U1ZHRWxlbWVudH0gdmlld3BvcnRcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKHZpZXdwb3J0LCBvcHRpb25zKSB7XG4gIC8vIERPTSBFbGVtZW50c1xuICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgLy8gU3RhdGUgY2FjaGVcbiAgdGhpcy5vcmlnaW5hbFN0YXRlID0geyB6b29tOiAxLCB4OiAwLCB5OiAwIH07XG4gIHRoaXMuYWN0aXZlU3RhdGUgPSB7IHpvb206IDEsIHg6IDAsIHk6IDAgfTtcblxuICB0aGlzLnVwZGF0ZUNUTUNhY2hlZCA9IFV0aWxzLnByb3h5KHRoaXMudXBkYXRlQ1RNLCB0aGlzKTtcblxuICAvLyBDcmVhdGUgYSBjdXN0b20gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRha2luZyBpbiBhY2NvdW50IHJlZnJlc2hSYXRlXG4gIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gVXRpbHMuY3JlYXRlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxuICAgIHRoaXMub3B0aW9ucy5yZWZyZXNoUmF0ZVxuICApO1xuXG4gIC8vIFZpZXdCb3hcbiAgdGhpcy52aWV3Qm94ID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gIHRoaXMuY2FjaGVWaWV3Qm94KCk7XG5cbiAgLy8gUHJvY2VzcyBDVE1cbiAgdmFyIG5ld0NUTSA9IHRoaXMucHJvY2Vzc0NUTSgpO1xuXG4gIC8vIFVwZGF0ZSB2aWV3cG9ydCBDVE0gYW5kIGNhY2hlIHpvb20gYW5kIHBhblxuICB0aGlzLnNldENUTShuZXdDVE0pO1xuXG4gIC8vIFVwZGF0ZSBDVE0gaW4gdGhpcyBmcmFtZVxuICB0aGlzLnVwZGF0ZUNUTSgpO1xufTtcblxuLyoqXG4gKiBDYWNoZSBpbml0aWFsIHZpZXdCb3ggdmFsdWVcbiAqIElmIG5vIHZpZXdCb3ggaXMgZGVmaW5lZCwgdGhlbiB1c2Ugdmlld3BvcnQgc2l6ZS9wb3NpdGlvbiBpbnN0ZWFkIGZvciB2aWV3Qm94IHZhbHVlc1xuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuY2FjaGVWaWV3Qm94ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdmdWaWV3Qm94ID0gdGhpcy5vcHRpb25zLnN2Zy5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuXG4gIGlmIChzdmdWaWV3Qm94KSB7XG4gICAgdmFyIHZpZXdCb3hWYWx1ZXMgPSBzdmdWaWV3Qm94XG4gICAgICAuc3BsaXQoL1tcXHNcXCxdLylcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH0pXG4gICAgICAubWFwKHBhcnNlRmxvYXQpO1xuXG4gICAgLy8gQ2FjaGUgdmlld2JveCB4IGFuZCB5IG9mZnNldFxuICAgIHRoaXMudmlld0JveC54ID0gdmlld0JveFZhbHVlc1swXTtcbiAgICB0aGlzLnZpZXdCb3gueSA9IHZpZXdCb3hWYWx1ZXNbMV07XG4gICAgdGhpcy52aWV3Qm94LndpZHRoID0gdmlld0JveFZhbHVlc1syXTtcbiAgICB0aGlzLnZpZXdCb3guaGVpZ2h0ID0gdmlld0JveFZhbHVlc1szXTtcblxuICAgIHZhciB6b29tID0gTWF0aC5taW4oXG4gICAgICB0aGlzLm9wdGlvbnMud2lkdGggLyB0aGlzLnZpZXdCb3gud2lkdGgsXG4gICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0IC8gdGhpcy52aWV3Qm94LmhlaWdodFxuICAgICk7XG5cbiAgICAvLyBVcGRhdGUgYWN0aXZlIHN0YXRlXG4gICAgdGhpcy5hY3RpdmVTdGF0ZS56b29tID0gem9vbTtcbiAgICB0aGlzLmFjdGl2ZVN0YXRlLnggPSAodGhpcy5vcHRpb25zLndpZHRoIC0gdGhpcy52aWV3Qm94LndpZHRoICogem9vbSkgLyAyO1xuICAgIHRoaXMuYWN0aXZlU3RhdGUueSA9ICh0aGlzLm9wdGlvbnMuaGVpZ2h0IC0gdGhpcy52aWV3Qm94LmhlaWdodCAqIHpvb20pIC8gMjtcblxuICAgIC8vIEZvcmNlIHVwZGF0aW5nIENUTVxuICAgIHRoaXMudXBkYXRlQ1RNT25OZXh0RnJhbWUoKTtcblxuICAgIHRoaXMub3B0aW9ucy5zdmcucmVtb3ZlQXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNpbXBsZVZpZXdCb3hDYWNoZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY2FsY3VsYXRlIHZpZXdwb3J0IHNpemVzIGFuZCB1cGRhdGUgdmlld0JveCBjYWNoZVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuc2ltcGxlVmlld0JveENhY2hlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBiQm94ID0gdGhpcy52aWV3cG9ydC5nZXRCQm94KCk7XG5cbiAgdGhpcy52aWV3Qm94LnggPSBiQm94Lng7XG4gIHRoaXMudmlld0JveC55ID0gYkJveC55O1xuICB0aGlzLnZpZXdCb3gud2lkdGggPSBiQm94LndpZHRoO1xuICB0aGlzLnZpZXdCb3guaGVpZ2h0ID0gYkJveC5oZWlnaHQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB2aWV3Ym94IG9iamVjdC4gU2FmZSB0byBhbHRlclxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gdmlld2JveCBvYmplY3RcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldFZpZXdCb3ggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7fSwgdGhpcy52aWV3Qm94KTtcbn07XG5cbi8qKlxuICogR2V0IGluaXRpYWwgem9vbSBhbmQgcGFuIHZhbHVlcy4gU2F2ZSB0aGVtIGludG8gb3JpZ2luYWxTdGF0ZVxuICogUGFyc2VzIHZpZXdCb3ggYXR0cmlidXRlIHRvIGFsdGVyIGluaXRpYWwgc2l6ZXNcbiAqXG4gKiBAcmV0dXJuIHtDVE19IENUTSBvYmplY3QgYmFzZWQgb24gb3B0aW9uc1xuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUucHJvY2Vzc0NUTSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmV3Q1RNID0gdGhpcy5nZXRDVE0oKTtcblxuICBpZiAodGhpcy5vcHRpb25zLmZpdCB8fCB0aGlzLm9wdGlvbnMuY29udGFpbikge1xuICAgIHZhciBuZXdTY2FsZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpdCkge1xuICAgICAgbmV3U2NhbGUgPSBNYXRoLm1pbihcbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoIC8gdGhpcy52aWV3Qm94LndpZHRoLFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0IC8gdGhpcy52aWV3Qm94LmhlaWdodFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2NhbGUgPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoIC8gdGhpcy52aWV3Qm94LndpZHRoLFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0IC8gdGhpcy52aWV3Qm94LmhlaWdodFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXdDVE0uYSA9IG5ld1NjYWxlOyAvL3gtc2NhbGVcbiAgICBuZXdDVE0uZCA9IG5ld1NjYWxlOyAvL3ktc2NhbGVcbiAgICBuZXdDVE0uZSA9IC10aGlzLnZpZXdCb3gueCAqIG5ld1NjYWxlOyAvL3gtdHJhbnNmb3JtXG4gICAgbmV3Q1RNLmYgPSAtdGhpcy52aWV3Qm94LnkgKiBuZXdTY2FsZTsgLy95LXRyYW5zZm9ybVxuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5jZW50ZXIpIHtcbiAgICB2YXIgb2Zmc2V0WCA9XG4gICAgICAgICh0aGlzLm9wdGlvbnMud2lkdGggLVxuICAgICAgICAgICh0aGlzLnZpZXdCb3gud2lkdGggKyB0aGlzLnZpZXdCb3gueCAqIDIpICogbmV3Q1RNLmEpICpcbiAgICAgICAgMC41LFxuICAgICAgb2Zmc2V0WSA9XG4gICAgICAgICh0aGlzLm9wdGlvbnMuaGVpZ2h0IC1cbiAgICAgICAgICAodGhpcy52aWV3Qm94LmhlaWdodCArIHRoaXMudmlld0JveC55ICogMikgKiBuZXdDVE0uYSkgKlxuICAgICAgICAwLjU7XG5cbiAgICBuZXdDVE0uZSA9IG9mZnNldFg7XG4gICAgbmV3Q1RNLmYgPSBvZmZzZXRZO1xuICB9XG5cbiAgLy8gQ2FjaGUgaW5pdGlhbCB2YWx1ZXMuIEJhc2VkIG9uIGFjdGl2ZVN0YXRlIGFuZCBmaXgrY2VudGVyIG9waXRvbnNcbiAgdGhpcy5vcmlnaW5hbFN0YXRlLnpvb20gPSBuZXdDVE0uYTtcbiAgdGhpcy5vcmlnaW5hbFN0YXRlLnggPSBuZXdDVE0uZTtcbiAgdGhpcy5vcmlnaW5hbFN0YXRlLnkgPSBuZXdDVE0uZjtcblxuICByZXR1cm4gbmV3Q1RNO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gb3JpZ2luYWxTdGF0ZSBvYmplY3QuIFNhZmUgdG8gYWx0ZXJcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRPcmlnaW5hbFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBVdGlscy5leHRlbmQoe30sIHRoaXMub3JpZ2luYWxTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhY3R1YWxTdGF0ZSBvYmplY3QuIFNhZmUgdG8gYWx0ZXJcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gVXRpbHMuZXh0ZW5kKHt9LCB0aGlzLmFjdGl2ZVN0YXRlKTtcbn07XG5cbi8qKlxuICogR2V0IHpvb20gc2NhbGVcbiAqXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hY3RpdmVTdGF0ZS56b29tO1xufTtcblxuLyoqXG4gKiBHZXQgem9vbSBzY2FsZSBmb3IgcHViaWxjIHVzYWdlXG4gKlxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldFJlbGF0aXZlWm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5hY3RpdmVTdGF0ZS56b29tIC8gdGhpcy5vcmlnaW5hbFN0YXRlLnpvb207XG59O1xuXG4vKipcbiAqIENvbXB1dGUgem9vbSBzY2FsZSBmb3IgcHViaWxjIHVzYWdlXG4gKlxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmNvbXB1dGVSZWxhdGl2ZVpvb20gPSBmdW5jdGlvbihzY2FsZSkge1xuICByZXR1cm4gc2NhbGUgLyB0aGlzLm9yaWdpbmFsU3RhdGUuem9vbTtcbn07XG5cbi8qKlxuICogR2V0IHBhblxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldFBhbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyB4OiB0aGlzLmFjdGl2ZVN0YXRlLngsIHk6IHRoaXMuYWN0aXZlU3RhdGUueSB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm4gY2FjaGVkIHZpZXdwb3J0IENUTSB2YWx1ZSB0aGF0IGNhbiBiZSBzYWZlbHkgbW9kaWZpZWRcbiAqXG4gKiBAcmV0dXJuIHtTVkdNYXRyaXh9XG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRDVE0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNhZmVDVE0gPSB0aGlzLm9wdGlvbnMuc3ZnLmNyZWF0ZVNWR01hdHJpeCgpO1xuXG4gIC8vIENvcHkgdmFsdWVzIG1hbnVhbGx5IGFzIGluIEZGIHRoZXkgYXJlIG5vdCBpdHRlcmFibGVcbiAgc2FmZUNUTS5hID0gdGhpcy5hY3RpdmVTdGF0ZS56b29tO1xuICBzYWZlQ1RNLmIgPSAwO1xuICBzYWZlQ1RNLmMgPSAwO1xuICBzYWZlQ1RNLmQgPSB0aGlzLmFjdGl2ZVN0YXRlLnpvb207XG4gIHNhZmVDVE0uZSA9IHRoaXMuYWN0aXZlU3RhdGUueDtcbiAgc2FmZUNUTS5mID0gdGhpcy5hY3RpdmVTdGF0ZS55O1xuXG4gIHJldHVybiBzYWZlQ1RNO1xufTtcblxuLyoqXG4gKiBTZXQgYSBuZXcgQ1RNXG4gKlxuICogQHBhcmFtIHtTVkdNYXRyaXh9IG5ld0NUTVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuc2V0Q1RNID0gZnVuY3Rpb24obmV3Q1RNKSB7XG4gIHZhciB3aWxsWm9vbSA9IHRoaXMuaXNab29tRGlmZmVyZW50KG5ld0NUTSksXG4gICAgd2lsbFBhbiA9IHRoaXMuaXNQYW5EaWZmZXJlbnQobmV3Q1RNKTtcblxuICBpZiAod2lsbFpvb20gfHwgd2lsbFBhbikge1xuICAgIC8vIEJlZm9yZSB6b29tXG4gICAgaWYgKHdpbGxab29tKSB7XG4gICAgICAvLyBJZiByZXR1cm5zIGZhbHNlIHRoZW4gY2FuY2VsIHpvb21pbmdcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5vcHRpb25zLmJlZm9yZVpvb20oXG4gICAgICAgICAgdGhpcy5nZXRSZWxhdGl2ZVpvb20oKSxcbiAgICAgICAgICB0aGlzLmNvbXB1dGVSZWxhdGl2ZVpvb20obmV3Q1RNLmEpXG4gICAgICAgICkgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgbmV3Q1RNLmEgPSBuZXdDVE0uZCA9IHRoaXMuYWN0aXZlU3RhdGUuem9vbTtcbiAgICAgICAgd2lsbFpvb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGUobmV3Q1RNKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uWm9vbSh0aGlzLmdldFJlbGF0aXZlWm9vbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCZWZvcmUgcGFuXG4gICAgaWYgKHdpbGxQYW4pIHtcbiAgICAgIHZhciBwcmV2ZW50UGFuID0gdGhpcy5vcHRpb25zLmJlZm9yZVBhbih0aGlzLmdldFBhbigpLCB7XG4gICAgICAgICAgeDogbmV3Q1RNLmUsXG4gICAgICAgICAgeTogbmV3Q1RNLmZcbiAgICAgICAgfSksXG4gICAgICAgIC8vIElmIHByZXZlbnQgcGFuIGlzIGFuIG9iamVjdFxuICAgICAgICBwcmV2ZW50UGFuWCA9IGZhbHNlLFxuICAgICAgICBwcmV2ZW50UGFuWSA9IGZhbHNlO1xuXG4gICAgICAvLyBJZiBwcmV2ZW50IHBhbiBpcyBCb29sZWFuIGZhbHNlXG4gICAgICBpZiAocHJldmVudFBhbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gU2V0IHggYW5kIHkgc2FtZSBhcyBiZWZvcmVcbiAgICAgICAgbmV3Q1RNLmUgPSB0aGlzLmdldFBhbigpLng7XG4gICAgICAgIG5ld0NUTS5mID0gdGhpcy5nZXRQYW4oKS55O1xuXG4gICAgICAgIHByZXZlbnRQYW5YID0gcHJldmVudFBhblkgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChVdGlscy5pc09iamVjdChwcmV2ZW50UGFuKSkge1xuICAgICAgICAvLyBDaGVjayBmb3IgWCBheGVzIGF0dHJpYnV0ZVxuICAgICAgICBpZiAocHJldmVudFBhbi54ID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIFByZXZlbnQgcGFubmluZyBvbiB4IGF4ZXNcbiAgICAgICAgICBuZXdDVE0uZSA9IHRoaXMuZ2V0UGFuKCkueDtcbiAgICAgICAgICBwcmV2ZW50UGFuWCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1iZXIocHJldmVudFBhbi54KSkge1xuICAgICAgICAgIC8vIFNldCBhIGN1c3RvbSBwYW4gdmFsdWVcbiAgICAgICAgICBuZXdDVE0uZSA9IHByZXZlbnRQYW4ueDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBZIGF4ZXMgYXR0cmlidXRlXG4gICAgICAgIGlmIChwcmV2ZW50UGFuLnkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBwYW5uaW5nIG9uIHggYXhlc1xuICAgICAgICAgIG5ld0NUTS5mID0gdGhpcy5nZXRQYW4oKS55O1xuICAgICAgICAgIHByZXZlbnRQYW5ZID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWJlcihwcmV2ZW50UGFuLnkpKSB7XG4gICAgICAgICAgLy8gU2V0IGEgY3VzdG9tIHBhbiB2YWx1ZVxuICAgICAgICAgIG5ld0NUTS5mID0gcHJldmVudFBhbi55O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB3aWxsUGFuIGZsYWdcbiAgICAgIC8vIENoZWNrIGlmIG5ld0NUTSBpcyBzdGlsbCBkaWZmZXJlbnRcbiAgICAgIGlmICgocHJldmVudFBhblggJiYgcHJldmVudFBhblkpIHx8ICF0aGlzLmlzUGFuRGlmZmVyZW50KG5ld0NUTSkpIHtcbiAgICAgICAgd2lsbFBhbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYWNoZShuZXdDVE0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25QYW4odGhpcy5nZXRQYW4oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYWdhaW4gaWYgc2hvdWxkIHpvb20gb3IgcGFuXG4gICAgaWYgKHdpbGxab29tIHx8IHdpbGxQYW4pIHtcbiAgICAgIHRoaXMudXBkYXRlQ1RNT25OZXh0RnJhbWUoKTtcbiAgICB9XG4gIH1cbn07XG5cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5pc1pvb21EaWZmZXJlbnQgPSBmdW5jdGlvbihuZXdDVE0pIHtcbiAgcmV0dXJuIHRoaXMuYWN0aXZlU3RhdGUuem9vbSAhPT0gbmV3Q1RNLmE7XG59O1xuXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuaXNQYW5EaWZmZXJlbnQgPSBmdW5jdGlvbihuZXdDVE0pIHtcbiAgcmV0dXJuIHRoaXMuYWN0aXZlU3RhdGUueCAhPT0gbmV3Q1RNLmUgfHwgdGhpcy5hY3RpdmVTdGF0ZS55ICE9PSBuZXdDVE0uZjtcbn07XG5cbi8qKlxuICogVXBkYXRlIGNhY2hlZCBDVE0gYW5kIGFjdGl2ZSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7U1ZHTWF0cml4fSBuZXdDVE1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnVwZGF0ZUNhY2hlID0gZnVuY3Rpb24obmV3Q1RNKSB7XG4gIHRoaXMuYWN0aXZlU3RhdGUuem9vbSA9IG5ld0NUTS5hO1xuICB0aGlzLmFjdGl2ZVN0YXRlLnggPSBuZXdDVE0uZTtcbiAgdGhpcy5hY3RpdmVTdGF0ZS55ID0gbmV3Q1RNLmY7XG59O1xuXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xuXG4vKipcbiAqIFBsYWNlIGEgcmVxdWVzdCB0byB1cGRhdGUgQ1RNIG9uIG5leHQgRnJhbWVcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnVwZGF0ZUNUTU9uTmV4dEZyYW1lID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5wZW5kaW5nVXBkYXRlKSB7XG4gICAgLy8gTG9ja1xuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHRydWU7XG5cbiAgICAvLyBUaHJvdHRsZSBuZXh0IHVwZGF0ZVxuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmNhbGwod2luZG93LCB0aGlzLnVwZGF0ZUNUTUNhY2hlZCk7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHZpZXdwb3J0IENUTSB3aXRoIGNhY2hlZCBDVE1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnVwZGF0ZUNUTSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY3RtID0gdGhpcy5nZXRDVE0oKTtcblxuICAvLyBVcGRhdGVzIFNWRyBlbGVtZW50XG4gIFN2Z1V0aWxzLnNldENUTSh0aGlzLnZpZXdwb3J0LCBjdG0sIHRoaXMuZGVmcyk7XG5cbiAgLy8gRnJlZSB0aGUgbG9ja1xuICB0aGlzLnBlbmRpbmdVcGRhdGUgPSBmYWxzZTtcblxuICAvLyBOb3RpZnkgYWJvdXQgdGhlIHVwZGF0ZVxuICBpZiAodGhpcy5vcHRpb25zLm9uVXBkYXRlZENUTSkge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZWRDVE0oY3RtKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2aWV3cG9ydCwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IFNoYWRvd1ZpZXdwb3J0KHZpZXdwb3J0LCBvcHRpb25zKTtcbn07XG4iLCJ2YXIgV2hlZWwgPSByZXF1aXJlKFwiLi91bml3aGVlbFwiKSxcbiAgQ29udHJvbEljb25zID0gcmVxdWlyZShcIi4vY29udHJvbC1pY29uc1wiKSxcbiAgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXNcIiksXG4gIFN2Z1V0aWxzID0gcmVxdWlyZShcIi4vc3ZnLXV0aWxpdGllc1wiKSxcbiAgU2hhZG93Vmlld3BvcnQgPSByZXF1aXJlKFwiLi9zaGFkb3ctdmlld3BvcnRcIik7XG5cbnZhciBTdmdQYW5ab29tID0gZnVuY3Rpb24oc3ZnLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzdmcsIG9wdGlvbnMpO1xufTtcblxudmFyIG9wdGlvbnNEZWZhdWx0cyA9IHtcbiAgdmlld3BvcnRTZWxlY3RvcjogXCIuc3ZnLXBhbi16b29tX3ZpZXdwb3J0XCIsIC8vIFZpZXdwb3J0IHNlbGVjdG9yLiBDYW4gYmUgcXVlcnlTZWxlY3RvciBzdHJpbmcgb3IgU1ZHRWxlbWVudFxuICBwYW5FbmFibGVkOiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSBwYW5uaW5nIChkZWZhdWx0IGVuYWJsZWQpXG4gIGNvbnRyb2xJY29uc0VuYWJsZWQ6IGZhbHNlLCAvLyBpbnNlcnQgaWNvbnMgdG8gZ2l2ZSB1c2VyIGFuIG9wdGlvbiBpbiBhZGRpdGlvbiB0byBtb3VzZSBldmVudHMgdG8gY29udHJvbCBwYW4vem9vbSAoZGVmYXVsdCBkaXNhYmxlZClcbiAgem9vbUVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHpvb21pbmcgKGRlZmF1bHQgZW5hYmxlZClcbiAgZGJsQ2xpY2tab29tRW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgem9vbWluZyBieSBkb3VibGUgY2xpY2tpbmcgKGRlZmF1bHQgZW5hYmxlZClcbiAgbW91c2VXaGVlbFpvb21FbmFibGVkOiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB6b29taW5nIGJ5IG1vdXNlIHdoZWVsIChkZWZhdWx0IGVuYWJsZWQpXG4gIHByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHByZXZlbnREZWZhdWx0IGZvciBtb3VzZSBldmVudHNcbiAgem9vbVNjYWxlU2Vuc2l0aXZpdHk6IDAuMSwgLy8gWm9vbSBzZW5zaXRpdml0eVxuICBtaW5ab29tOiAwLjUsIC8vIE1pbmltdW0gWm9vbSBsZXZlbFxuICBtYXhab29tOiAxMCwgLy8gTWF4aW11bSBab29tIGxldmVsXG4gIGZpdDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgdmlld3BvcnQgZml0IGluIFNWRyAoZGVmYXVsdCB0cnVlKVxuICBjb250YWluOiBmYWxzZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgdmlld3BvcnQgY29udGFpbiB0aGUgc3ZnIChkZWZhdWx0IGZhbHNlKVxuICBjZW50ZXI6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHZpZXdwb3J0IGNlbnRlcmluZyBpbiBTVkcgKGRlZmF1bHQgdHJ1ZSlcbiAgcmVmcmVzaFJhdGU6IFwiYXV0b1wiLCAvLyBNYXhpbXVtIG51bWJlciBvZiBmcmFtZXMgcGVyIHNlY29uZCAoYWx0ZXJpbmcgU1ZHJ3Mgdmlld3BvcnQpXG4gIGJlZm9yZVpvb206IG51bGwsXG4gIG9uWm9vbTogbnVsbCxcbiAgYmVmb3JlUGFuOiBudWxsLFxuICBvblBhbjogbnVsbCxcbiAgY3VzdG9tRXZlbnRzSGFuZGxlcjogbnVsbCxcbiAgZXZlbnRzTGlzdGVuZXJFbGVtZW50OiBudWxsLFxuICBvblVwZGF0ZWRDVE06IG51bGxcbn07XG5cbnZhciBwYXNzaXZlTGlzdGVuZXJPcHRpb24gPSB7IHBhc3NpdmU6IHRydWUgfTtcblxuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKHN2Zywgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdGhpcy5zdmcgPSBzdmc7XG4gIHRoaXMuZGVmcyA9IHN2Zy5xdWVyeVNlbGVjdG9yKFwiZGVmc1wiKTtcblxuICAvLyBBZGQgZGVmYXVsdCBhdHRyaWJ1dGVzIHRvIFNWR1xuICBTdmdVdGlscy5zZXR1cFN2Z0F0dHJpYnV0ZXModGhpcy5zdmcpO1xuXG4gIC8vIFNldCBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IFV0aWxzLmV4dGVuZChVdGlscy5leHRlbmQoe30sIG9wdGlvbnNEZWZhdWx0cyksIG9wdGlvbnMpO1xuXG4gIC8vIFNldCBkZWZhdWx0IHN0YXRlXG4gIHRoaXMuc3RhdGUgPSBcIm5vbmVcIjtcblxuICAvLyBHZXQgZGltZW5zaW9uc1xuICB2YXIgYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZCA9IFN2Z1V0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQoXG4gICAgc3ZnXG4gICk7XG4gIHRoaXMud2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkLndpZHRoO1xuICB0aGlzLmhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQuaGVpZ2h0O1xuXG4gIC8vIEluaXQgc2hhZG93IHZpZXdwb3J0XG4gIHRoaXMudmlld3BvcnQgPSBTaGFkb3dWaWV3cG9ydChcbiAgICBTdmdVdGlscy5nZXRPckNyZWF0ZVZpZXdwb3J0KHRoaXMuc3ZnLCB0aGlzLm9wdGlvbnMudmlld3BvcnRTZWxlY3RvciksXG4gICAge1xuICAgICAgc3ZnOiB0aGlzLnN2ZyxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGZpdDogdGhpcy5vcHRpb25zLmZpdCxcbiAgICAgIGNvbnRhaW46IHRoaXMub3B0aW9ucy5jb250YWluLFxuICAgICAgY2VudGVyOiB0aGlzLm9wdGlvbnMuY2VudGVyLFxuICAgICAgcmVmcmVzaFJhdGU6IHRoaXMub3B0aW9ucy5yZWZyZXNoUmF0ZSxcbiAgICAgIC8vIFB1dCBjYWxsYmFja3MgaW50byBmdW5jdGlvbnMgYXMgdGhleSBjYW4gY2hhbmdlIHRocm91Z2ggdGltZVxuICAgICAgYmVmb3JlWm9vbTogZnVuY3Rpb24ob2xkU2NhbGUsIG5ld1NjYWxlKSB7XG4gICAgICAgIGlmICh0aGF0LnZpZXdwb3J0ICYmIHRoYXQub3B0aW9ucy5iZWZvcmVab29tKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9ucy5iZWZvcmVab29tKG9sZFNjYWxlLCBuZXdTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblpvb206IGZ1bmN0aW9uKHNjYWxlKSB7XG4gICAgICAgIGlmICh0aGF0LnZpZXdwb3J0ICYmIHRoYXQub3B0aW9ucy5vblpvb20pIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25zLm9uWm9vbShzY2FsZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiZWZvcmVQYW46IGZ1bmN0aW9uKG9sZFBvaW50LCBuZXdQb2ludCkge1xuICAgICAgICBpZiAodGhhdC52aWV3cG9ydCAmJiB0aGF0Lm9wdGlvbnMuYmVmb3JlUGFuKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9ucy5iZWZvcmVQYW4ob2xkUG9pbnQsIG5ld1BvaW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uUGFuOiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgICBpZiAodGhhdC52aWV3cG9ydCAmJiB0aGF0Lm9wdGlvbnMub25QYW4pIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25zLm9uUGFuKHBvaW50KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlZENUTTogZnVuY3Rpb24oY3RtKSB7XG4gICAgICAgIGlmICh0aGF0LnZpZXdwb3J0ICYmIHRoYXQub3B0aW9ucy5vblVwZGF0ZWRDVE0pIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25zLm9uVXBkYXRlZENUTShjdG0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIC8vIFdyYXAgY2FsbGJhY2tzIGludG8gcHVibGljIEFQSSBjb250ZXh0XG4gIHZhciBwdWJsaWNJbnN0YW5jZSA9IHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKTtcbiAgcHVibGljSW5zdGFuY2Uuc2V0QmVmb3JlWm9vbSh0aGlzLm9wdGlvbnMuYmVmb3JlWm9vbSk7XG4gIHB1YmxpY0luc3RhbmNlLnNldE9uWm9vbSh0aGlzLm9wdGlvbnMub25ab29tKTtcbiAgcHVibGljSW5zdGFuY2Uuc2V0QmVmb3JlUGFuKHRoaXMub3B0aW9ucy5iZWZvcmVQYW4pO1xuICBwdWJsaWNJbnN0YW5jZS5zZXRPblBhbih0aGlzLm9wdGlvbnMub25QYW4pO1xuICBwdWJsaWNJbnN0YW5jZS5zZXRPblVwZGF0ZWRDVE0odGhpcy5vcHRpb25zLm9uVXBkYXRlZENUTSk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkKSB7XG4gICAgQ29udHJvbEljb25zLmVuYWJsZSh0aGlzKTtcbiAgfVxuXG4gIC8vIEluaXQgZXZlbnRzIGhhbmRsZXJzXG4gIHRoaXMubGFzdE1vdXNlV2hlZWxFdmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICB0aGlzLnNldHVwSGFuZGxlcnMoKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuc2V0dXBIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgcHJldkV2dCA9IG51bGw7IC8vIHVzZSBmb3IgdG91Y2hzdGFydCBldmVudCB0byBkZXRlY3QgZG91YmxlIHRhcFxuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7XG4gICAgLy8gTW91c2UgZG93biBncm91cFxuICAgIG1vdXNlZG93bjogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdGhhdC5oYW5kbGVNb3VzZURvd24oZXZ0LCBwcmV2RXZ0KTtcbiAgICAgIHByZXZFdnQgPSBldnQ7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgdG91Y2hzdGFydDogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdGhhdC5oYW5kbGVNb3VzZURvd24oZXZ0LCBwcmV2RXZ0KTtcbiAgICAgIHByZXZFdnQgPSBldnQ7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvLyBNb3VzZSB1cCBncm91cFxuICAgIG1vdXNldXA6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VVcChldnQpO1xuICAgIH0sXG4gICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VVcChldnQpO1xuICAgIH0sXG5cbiAgICAvLyBNb3VzZSBtb3ZlIGdyb3VwXG4gICAgbW91c2Vtb3ZlOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlTW92ZShldnQpO1xuICAgIH0sXG4gICAgdG91Y2htb3ZlOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlTW92ZShldnQpO1xuICAgIH0sXG5cbiAgICAvLyBNb3VzZSBsZWF2ZSBncm91cFxuICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VVcChldnQpO1xuICAgIH0sXG4gICAgdG91Y2hsZWF2ZTogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVVwKGV2dCk7XG4gICAgfSxcbiAgICB0b3VjaGNhbmNlbDogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVVwKGV2dCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEluaXQgY3VzdG9tIGV2ZW50cyBoYW5kbGVyIGlmIGF2YWlsYWJsZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tRXZlbnRzSGFuZGxlciAhPSBudWxsKSB7XG4gICAgdGhpcy5vcHRpb25zLmN1c3RvbUV2ZW50c0hhbmRsZXIuaW5pdCh7XG4gICAgICBzdmdFbGVtZW50OiB0aGlzLnN2ZyxcbiAgICAgIGV2ZW50c0xpc3RlbmVyRWxlbWVudDogdGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCxcbiAgICAgIGluc3RhbmNlOiB0aGlzLmdldFB1YmxpY0luc3RhbmNlKClcbiAgICB9KTtcblxuICAgIC8vIEN1c3RvbSBldmVudCBoYW5kbGVyIG1heSBoYWx0IGJ1aWx0aW4gbGlzdGVuZXJzXG4gICAgdmFyIGhhbHRFdmVudExpc3RlbmVycyA9IHRoaXMub3B0aW9ucy5jdXN0b21FdmVudHNIYW5kbGVyXG4gICAgICAuaGFsdEV2ZW50TGlzdGVuZXJzO1xuICAgIGlmIChoYWx0RXZlbnRMaXN0ZW5lcnMgJiYgaGFsdEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IGhhbHRFdmVudExpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShoYWx0RXZlbnRMaXN0ZW5lcnNbaV0pKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnNbaGFsdEV2ZW50TGlzdGVuZXJzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEJpbmQgZXZlbnRMaXN0ZW5lcnNcbiAgZm9yICh2YXIgZXZlbnQgaW4gdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIC8vIEF0dGFjaCBldmVudCB0byBldmVudHNMaXN0ZW5lckVsZW1lbnQgb3IgU1ZHIGlmIG5vdCBhdmFpbGFibGVcbiAgICAodGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCB8fCB0aGlzLnN2ZykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIGV2ZW50LFxuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0sXG4gICAgICAhdGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQgPyBwYXNzaXZlTGlzdGVuZXJPcHRpb24gOiBmYWxzZVxuICAgICk7XG4gIH1cblxuICAvLyBab29tIHVzaW5nIG1vdXNlIHdoZWVsXG4gIGlmICh0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkKSB7XG4gICAgdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCA9IGZhbHNlOyAvLyBzZXQgdG8gZmFsc2UgYXMgZW5hYmxlIHdpbGwgc2V0IGl0IGJhY2sgdG8gdHJ1ZVxuICAgIHRoaXMuZW5hYmxlTW91c2VXaGVlbFpvb20oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbmFibGUgYWJpbGl0eSB0byB6b29tIHVzaW5nIG1vdXNlIHdoZWVsXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmVuYWJsZU1vdXNlV2hlZWxab29tID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIC8vIE1vdXNlIHdoZWVsIGxpc3RlbmVyXG4gICAgdGhpcy53aGVlbExpc3RlbmVyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVdoZWVsKGV2dCk7XG4gICAgfTtcblxuICAgIC8vIEJpbmQgd2hlZWxMaXN0ZW5lclxuICAgIHZhciBpc1Bhc3NpdmVMaXN0ZW5lciA9ICF0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdDtcbiAgICBXaGVlbC5vbihcbiAgICAgIHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQgfHwgdGhpcy5zdmcsXG4gICAgICB0aGlzLndoZWVsTGlzdGVuZXIsXG4gICAgICBpc1Bhc3NpdmVMaXN0ZW5lclxuICAgICk7XG5cbiAgICB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNhYmxlIGFiaWxpdHkgdG8gem9vbSB1c2luZyBtb3VzZSB3aGVlbFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5kaXNhYmxlTW91c2VXaGVlbFpvb20gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQpIHtcbiAgICB2YXIgaXNQYXNzaXZlTGlzdGVuZXIgPSAhdGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQ7XG4gICAgV2hlZWwub2ZmKFxuICAgICAgdGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCB8fCB0aGlzLnN2ZyxcbiAgICAgIHRoaXMud2hlZWxMaXN0ZW5lcixcbiAgICAgIGlzUGFzc2l2ZUxpc3RlbmVyXG4gICAgKTtcbiAgICB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIG1vdXNlIHdoZWVsIGV2ZW50XG4gKlxuICogQHBhcmFtICB7RXZlbnR9IGV2dFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5oYW5kbGVNb3VzZVdoZWVsID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLnpvb21FbmFibGVkIHx8IHRoaXMuc3RhdGUgIT09IFwibm9uZVwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0KSB7XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgZGVsdGEgaW4gY2FzZSB0aGF0IGRlbHRhWSBpcyBub3QgYXZhaWxhYmxlXG4gIHZhciBkZWx0YSA9IGV2dC5kZWx0YVkgfHwgMSxcbiAgICB0aW1lRGVsdGEgPSBEYXRlLm5vdygpIC0gdGhpcy5sYXN0TW91c2VXaGVlbEV2ZW50VGltZSxcbiAgICBkaXZpZGVyID0gMyArIE1hdGgubWF4KDAsIDMwIC0gdGltZURlbHRhKTtcblxuICAvLyBVcGRhdGUgY2FjaGVcbiAgdGhpcy5sYXN0TW91c2VXaGVlbEV2ZW50VGltZSA9IERhdGUubm93KCk7XG5cbiAgLy8gTWFrZSBlbXBpcmljYWwgYWRqdXN0bWVudHMgZm9yIGJyb3dzZXJzIHRoYXQgZ2l2ZSBkZWx0YVkgaW4gcGl4ZWxzIChkZWx0YU1vZGU9MClcbiAgaWYgKFwiZGVsdGFNb2RlXCIgaW4gZXZ0ICYmIGV2dC5kZWx0YU1vZGUgPT09IDAgJiYgZXZ0LndoZWVsRGVsdGEpIHtcbiAgICBkZWx0YSA9IGV2dC5kZWx0YVkgPT09IDAgPyAwIDogTWF0aC5hYnMoZXZ0LndoZWVsRGVsdGEpIC8gZXZ0LmRlbHRhWTtcbiAgfVxuXG4gIGRlbHRhID1cbiAgICAtMC4zIDwgZGVsdGEgJiYgZGVsdGEgPCAwLjNcbiAgICAgID8gZGVsdGFcbiAgICAgIDogKChkZWx0YSA+IDAgPyAxIDogLTEpICogTWF0aC5sb2coTWF0aC5hYnMoZGVsdGEpICsgMTApKSAvIGRpdmlkZXI7XG5cbiAgdmFyIGludmVyc2VkU2NyZWVuQ1RNID0gdGhpcy5zdmcuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpLFxuICAgIHJlbGF0aXZlTW91c2VQb2ludCA9IFN2Z1V0aWxzLmdldEV2ZW50UG9pbnQoZXZ0LCB0aGlzLnN2ZykubWF0cml4VHJhbnNmb3JtKFxuICAgICAgaW52ZXJzZWRTY3JlZW5DVE1cbiAgICApLFxuICAgIHpvb20gPSBNYXRoLnBvdygxICsgdGhpcy5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5LCAtMSAqIGRlbHRhKTsgLy8gbXVsdGlwbHlpbmcgYnkgbmVnLiAxIHNvIGFzIHRvIG1ha2Ugem9vbSBpbi9vdXQgYmVoYXZpb3IgbWF0Y2ggR29vZ2xlIG1hcHMgYmVoYXZpb3JcblxuICB0aGlzLnpvb21BdFBvaW50KHpvb20sIHJlbGF0aXZlTW91c2VQb2ludCk7XG59O1xuXG4vKipcbiAqIFpvb20gaW4gYXQgYSBTVkcgcG9pbnRcbiAqXG4gKiBAcGFyYW0gIHtTVkdQb2ludH0gcG9pbnRcbiAqIEBwYXJhbSAge0Zsb2F0fSB6b29tU2NhbGUgICAgTnVtYmVyIHJlcHJlc2VudGluZyBob3cgbXVjaCB0byB6b29tXG4gKiBAcGFyYW0gIHtCb29sZWFufSB6b29tQWJzb2x1dGUgRGVmYXVsdCBmYWxzZS4gSWYgdHJ1ZSwgem9vbVNjYWxlIGlzIHRyZWF0ZWQgYXMgYW4gYWJzb2x1dGUgdmFsdWUuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3RoZXJ3aXNlLCB6b29tU2NhbGUgaXMgdHJlYXRlZCBhcyBhIG11bHRpcGxpZWQgKGUuZy4gMS4xMCB3b3VsZCB6b29tIGluIDEwJSlcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuem9vbUF0UG9pbnQgPSBmdW5jdGlvbih6b29tU2NhbGUsIHBvaW50LCB6b29tQWJzb2x1dGUpIHtcbiAgdmFyIG9yaWdpbmFsU3RhdGUgPSB0aGlzLnZpZXdwb3J0LmdldE9yaWdpbmFsU3RhdGUoKTtcblxuICBpZiAoIXpvb21BYnNvbHV0ZSkge1xuICAgIC8vIEZpdCB6b29tU2NhbGUgaW4gc2V0IGJvdW5kc1xuICAgIGlmIChcbiAgICAgIHRoaXMuZ2V0Wm9vbSgpICogem9vbVNjYWxlIDxcbiAgICAgIHRoaXMub3B0aW9ucy5taW5ab29tICogb3JpZ2luYWxTdGF0ZS56b29tXG4gICAgKSB7XG4gICAgICB6b29tU2NhbGUgPSAodGhpcy5vcHRpb25zLm1pblpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb20pIC8gdGhpcy5nZXRab29tKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuZ2V0Wm9vbSgpICogem9vbVNjYWxlID5cbiAgICAgIHRoaXMub3B0aW9ucy5tYXhab29tICogb3JpZ2luYWxTdGF0ZS56b29tXG4gICAgKSB7XG4gICAgICB6b29tU2NhbGUgPSAodGhpcy5vcHRpb25zLm1heFpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb20pIC8gdGhpcy5nZXRab29tKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEZpdCB6b29tU2NhbGUgaW4gc2V0IGJvdW5kc1xuICAgIHpvb21TY2FsZSA9IE1hdGgubWF4KFxuICAgICAgdGhpcy5vcHRpb25zLm1pblpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb20sXG4gICAgICBNYXRoLm1pbih0aGlzLm9wdGlvbnMubWF4Wm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbSwgem9vbVNjYWxlKVxuICAgICk7XG4gICAgLy8gRmluZCByZWxhdGl2ZSBzY2FsZSB0byBhY2hpZXZlIGRlc2lyZWQgc2NhbGVcbiAgICB6b29tU2NhbGUgPSB6b29tU2NhbGUgLyB0aGlzLmdldFpvb20oKTtcbiAgfVxuXG4gIHZhciBvbGRDVE0gPSB0aGlzLnZpZXdwb3J0LmdldENUTSgpLFxuICAgIHJlbGF0aXZlUG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0ob2xkQ1RNLmludmVyc2UoKSksXG4gICAgbW9kaWZpZXIgPSB0aGlzLnN2Z1xuICAgICAgLmNyZWF0ZVNWR01hdHJpeCgpXG4gICAgICAudHJhbnNsYXRlKHJlbGF0aXZlUG9pbnQueCwgcmVsYXRpdmVQb2ludC55KVxuICAgICAgLnNjYWxlKHpvb21TY2FsZSlcbiAgICAgIC50cmFuc2xhdGUoLXJlbGF0aXZlUG9pbnQueCwgLXJlbGF0aXZlUG9pbnQueSksXG4gICAgbmV3Q1RNID0gb2xkQ1RNLm11bHRpcGx5KG1vZGlmaWVyKTtcblxuICBpZiAobmV3Q1RNLmEgIT09IG9sZENUTS5hKSB7XG4gICAgdGhpcy52aWV3cG9ydC5zZXRDVE0obmV3Q1RNKTtcbiAgfVxufTtcblxuLyoqXG4gKiBab29tIGF0IGNlbnRlciBwb2ludFxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSBzY2FsZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gYWJzb2x1dGUgTWFya3Mgem9vbSBzY2FsZSBhcyByZWxhdGl2ZSBvciBhYnNvbHV0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS56b29tID0gZnVuY3Rpb24oc2NhbGUsIGFic29sdXRlKSB7XG4gIHRoaXMuem9vbUF0UG9pbnQoXG4gICAgc2NhbGUsXG4gICAgU3ZnVXRpbHMuZ2V0U3ZnQ2VudGVyUG9pbnQodGhpcy5zdmcsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSxcbiAgICBhYnNvbHV0ZVxuICApO1xufTtcblxuLyoqXG4gKiBab29tIHVzZWQgYnkgcHVibGljIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7RmxvYXR9IHNjYWxlXG4gKiBAcGFyYW0gIHtCb29sZWFufSBhYnNvbHV0ZSBNYXJrcyB6b29tIHNjYWxlIGFzIHJlbGF0aXZlIG9yIGFic29sdXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnB1YmxpY1pvb20gPSBmdW5jdGlvbihzY2FsZSwgYWJzb2x1dGUpIHtcbiAgaWYgKGFic29sdXRlKSB7XG4gICAgc2NhbGUgPSB0aGlzLmNvbXB1dGVGcm9tUmVsYXRpdmVab29tKHNjYWxlKTtcbiAgfVxuXG4gIHRoaXMuem9vbShzY2FsZSwgYWJzb2x1dGUpO1xufTtcblxuLyoqXG4gKiBab29tIGF0IHBvaW50IHVzZWQgYnkgcHVibGljIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7RmxvYXR9IHNjYWxlXG4gKiBAcGFyYW0gIHtTVkdQb2ludHxPYmplY3R9IHBvaW50ICAgIEFuIG9iamVjdCB0aGF0IGhhcyB4IGFuZCB5IGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IGFic29sdXRlIE1hcmtzIHpvb20gc2NhbGUgYXMgcmVsYXRpdmUgb3IgYWJzb2x1dGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucHVibGljWm9vbUF0UG9pbnQgPSBmdW5jdGlvbihzY2FsZSwgcG9pbnQsIGFic29sdXRlKSB7XG4gIGlmIChhYnNvbHV0ZSkge1xuICAgIC8vIFRyYW5zZm9ybSB6b29tIGludG8gYSByZWxhdGl2ZSB2YWx1ZVxuICAgIHNjYWxlID0gdGhpcy5jb21wdXRlRnJvbVJlbGF0aXZlWm9vbShzY2FsZSk7XG4gIH1cblxuICAvLyBJZiBub3QgYSBTVkdQb2ludCBidXQgaGFzIHggYW5kIHkgdGhlbiBjcmVhdGUgYSBTVkdQb2ludFxuICBpZiAoVXRpbHMuZ2V0VHlwZShwb2ludCkgIT09IFwiU1ZHUG9pbnRcIikge1xuICAgIGlmIChcInhcIiBpbiBwb2ludCAmJiBcInlcIiBpbiBwb2ludCkge1xuICAgICAgcG9pbnQgPSBTdmdVdGlscy5jcmVhdGVTVkdQb2ludCh0aGlzLnN2ZywgcG9pbnQueCwgcG9pbnQueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdpdmVuIHBvaW50IGlzIGludmFsaWRcIik7XG4gICAgfVxuICB9XG5cbiAgdGhpcy56b29tQXRQb2ludChzY2FsZSwgcG9pbnQsIGFic29sdXRlKTtcbn07XG5cbi8qKlxuICogR2V0IHpvb20gc2NhbGVcbiAqXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5nZXRab29tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZpZXdwb3J0LmdldFpvb20oKTtcbn07XG5cbi8qKlxuICogR2V0IHpvb20gc2NhbGUgZm9yIHB1YmxpYyB1c2FnZVxuICpcbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmdldFJlbGF0aXZlWm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52aWV3cG9ydC5nZXRSZWxhdGl2ZVpvb20oKTtcbn07XG5cbi8qKlxuICogQ29tcHV0ZSBhY3R1YWwgem9vbSBmcm9tIHB1YmxpYyB6b29tXG4gKlxuICogQHBhcmFtICB7RmxvYXR9IHpvb21cbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmNvbXB1dGVGcm9tUmVsYXRpdmVab29tID0gZnVuY3Rpb24oem9vbSkge1xuICByZXR1cm4gem9vbSAqIHRoaXMudmlld3BvcnQuZ2V0T3JpZ2luYWxTdGF0ZSgpLnpvb207XG59O1xuXG4vKipcbiAqIFNldCB6b29tIHRvIGluaXRpYWwgc3RhdGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucmVzZXRab29tID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvcmlnaW5hbFN0YXRlID0gdGhpcy52aWV3cG9ydC5nZXRPcmlnaW5hbFN0YXRlKCk7XG5cbiAgdGhpcy56b29tKG9yaWdpbmFsU3RhdGUuem9vbSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFNldCBwYW4gdG8gaW5pdGlhbCBzdGF0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5yZXNldFBhbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhbih0aGlzLnZpZXdwb3J0LmdldE9yaWdpbmFsU3RhdGUoKSk7XG59O1xuXG4vKipcbiAqIFNldCBwYW4gYW5kIHpvb20gdG8gaW5pdGlhbCBzdGF0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlc2V0Wm9vbSgpO1xuICB0aGlzLnJlc2V0UGFuKCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSBkb3VibGUgY2xpY2sgZXZlbnRcbiAqIFNlZSBoYW5kbGVNb3VzZURvd24oKSBmb3IgYWx0ZXJuYXRlIGRldGVjdGlvbiBtZXRob2RcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaGFuZGxlRGJsQ2xpY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0KSB7XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRhcmdldCB3YXMgYSBjb250cm9sIGJ1dHRvblxuICBpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQpIHtcbiAgICB2YXIgdGFyZ2V0Q2xhc3MgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCI7XG4gICAgaWYgKHRhcmdldENsYXNzLmluZGV4T2YoXCJzdmctcGFuLXpvb20tY29udHJvbFwiKSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHpvb21GYWN0b3I7XG5cbiAgaWYgKGV2dC5zaGlmdEtleSkge1xuICAgIHpvb21GYWN0b3IgPSAxIC8gKCgxICsgdGhpcy5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5KSAqIDIpOyAvLyB6b29tIG91dCB3aGVuIHNoaWZ0IGtleSBwcmVzc2VkXG4gIH0gZWxzZSB7XG4gICAgem9vbUZhY3RvciA9ICgxICsgdGhpcy5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5KSAqIDI7XG4gIH1cblxuICB2YXIgcG9pbnQgPSBTdmdVdGlscy5nZXRFdmVudFBvaW50KGV2dCwgdGhpcy5zdmcpLm1hdHJpeFRyYW5zZm9ybShcbiAgICB0aGlzLnN2Zy5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKClcbiAgKTtcbiAgdGhpcy56b29tQXRQb2ludCh6b29tRmFjdG9yLCBwb2ludCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSBjbGljayBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbihldnQsIHByZXZFdnQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0KSB7XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIFV0aWxzLm1vdXNlQW5kVG91Y2hOb3JtYWxpemUoZXZ0LCB0aGlzLnN2Zyk7XG5cbiAgLy8gRG91YmxlIGNsaWNrIGRldGVjdGlvbjsgbW9yZSBjb25zaXN0ZW50IHRoYW4gb25kYmxjbGlja1xuICBpZiAodGhpcy5vcHRpb25zLmRibENsaWNrWm9vbUVuYWJsZWQgJiYgVXRpbHMuaXNEYmxDbGljayhldnQsIHByZXZFdnQpKSB7XG4gICAgdGhpcy5oYW5kbGVEYmxDbGljayhldnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFBhbiBtb2RlXG4gICAgdGhpcy5zdGF0ZSA9IFwicGFuXCI7XG4gICAgdGhpcy5maXJzdEV2ZW50Q1RNID0gdGhpcy52aWV3cG9ydC5nZXRDVE0oKTtcbiAgICB0aGlzLnN0YXRlT3JpZ2luID0gU3ZnVXRpbHMuZ2V0RXZlbnRQb2ludChldnQsIHRoaXMuc3ZnKS5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgICB0aGlzLmZpcnN0RXZlbnRDVE0uaW52ZXJzZSgpXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGUgbW91c2UgbW92ZSBldmVudFxuICpcbiAqIEBwYXJhbSAge0V2ZW50fSBldnRcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaGFuZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCkge1xuICAgIGlmIChldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJwYW5cIiAmJiB0aGlzLm9wdGlvbnMucGFuRW5hYmxlZCkge1xuICAgIC8vIFBhbiBtb2RlXG4gICAgdmFyIHBvaW50ID0gU3ZnVXRpbHMuZ2V0RXZlbnRQb2ludChldnQsIHRoaXMuc3ZnKS5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgICAgIHRoaXMuZmlyc3RFdmVudENUTS5pbnZlcnNlKClcbiAgICAgICksXG4gICAgICB2aWV3cG9ydENUTSA9IHRoaXMuZmlyc3RFdmVudENUTS50cmFuc2xhdGUoXG4gICAgICAgIHBvaW50LnggLSB0aGlzLnN0YXRlT3JpZ2luLngsXG4gICAgICAgIHBvaW50LnkgLSB0aGlzLnN0YXRlT3JpZ2luLnlcbiAgICAgICk7XG5cbiAgICB0aGlzLnZpZXdwb3J0LnNldENUTSh2aWV3cG9ydENUTSk7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIG1vdXNlIGJ1dHRvbiByZWxlYXNlIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbihldnQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0KSB7XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnN0YXRlID09PSBcInBhblwiKSB7XG4gICAgLy8gUXVpdCBwYW4gbW9kZVxuICAgIHRoaXMuc3RhdGUgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGp1c3Qgdmlld3BvcnQgc2l6ZSAob25seSkgc28gaXQgd2lsbCBmaXQgaW4gU1ZHXG4gKiBEb2VzIG5vdCBjZW50ZXIgaW1hZ2VcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZml0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2aWV3Qm94ID0gdGhpcy52aWV3cG9ydC5nZXRWaWV3Qm94KCksXG4gICAgbmV3U2NhbGUgPSBNYXRoLm1pbihcbiAgICAgIHRoaXMud2lkdGggLyB2aWV3Qm94LndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQgLyB2aWV3Qm94LmhlaWdodFxuICAgICk7XG5cbiAgdGhpcy56b29tKG5ld1NjYWxlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogQWRqdXN0IHZpZXdwb3J0IHNpemUgKG9ubHkpIHNvIGl0IHdpbGwgY29udGFpbiB0aGUgU1ZHXG4gKiBEb2VzIG5vdCBjZW50ZXIgaW1hZ2VcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuY29udGFpbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmlld0JveCA9IHRoaXMudmlld3BvcnQuZ2V0Vmlld0JveCgpLFxuICAgIG5ld1NjYWxlID0gTWF0aC5tYXgoXG4gICAgICB0aGlzLndpZHRoIC8gdmlld0JveC53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0IC8gdmlld0JveC5oZWlnaHRcbiAgICApO1xuXG4gIHRoaXMuem9vbShuZXdTY2FsZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEFkanVzdCB2aWV3cG9ydCBwYW4gKG9ubHkpIHNvIGl0IHdpbGwgYmUgY2VudGVyZWQgaW4gU1ZHXG4gKiBEb2VzIG5vdCB6b29tL2ZpdC9jb250YWluIGltYWdlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmNlbnRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmlld0JveCA9IHRoaXMudmlld3BvcnQuZ2V0Vmlld0JveCgpLFxuICAgIG9mZnNldFggPVxuICAgICAgKHRoaXMud2lkdGggLSAodmlld0JveC53aWR0aCArIHZpZXdCb3gueCAqIDIpICogdGhpcy5nZXRab29tKCkpICogMC41LFxuICAgIG9mZnNldFkgPVxuICAgICAgKHRoaXMuaGVpZ2h0IC0gKHZpZXdCb3guaGVpZ2h0ICsgdmlld0JveC55ICogMikgKiB0aGlzLmdldFpvb20oKSkgKiAwLjU7XG5cbiAgdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpLnBhbih7IHg6IG9mZnNldFgsIHk6IG9mZnNldFkgfSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBjb250ZW50IGNhY2hlZCBCb3JkZXJCb3hcbiAqIFVzZSB3aGVuIHZpZXdwb3J0IGNvbnRlbnRzIGNoYW5nZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS51cGRhdGVCQm94ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmlld3BvcnQuc2ltcGxlVmlld0JveENhY2hlKCk7XG59O1xuXG4vKipcbiAqIFBhbiB0byBhIHJlbmRlcmVkIHBvc2l0aW9uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwb2ludCB7eDogMCwgeTogMH1cbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucGFuID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgdmFyIHZpZXdwb3J0Q1RNID0gdGhpcy52aWV3cG9ydC5nZXRDVE0oKTtcbiAgdmlld3BvcnRDVE0uZSA9IHBvaW50Lng7XG4gIHZpZXdwb3J0Q1RNLmYgPSBwb2ludC55O1xuICB0aGlzLnZpZXdwb3J0LnNldENUTSh2aWV3cG9ydENUTSk7XG59O1xuXG4vKipcbiAqIFJlbGF0aXZlbHkgcGFuIHRoZSBncmFwaCBieSBhIHNwZWNpZmllZCByZW5kZXJlZCBwb3NpdGlvbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBvaW50IHt4OiAwLCB5OiAwfVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5wYW5CeSA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHZhciB2aWV3cG9ydENUTSA9IHRoaXMudmlld3BvcnQuZ2V0Q1RNKCk7XG4gIHZpZXdwb3J0Q1RNLmUgKz0gcG9pbnQueDtcbiAgdmlld3BvcnRDVE0uZiArPSBwb2ludC55O1xuICB0aGlzLnZpZXdwb3J0LnNldENUTSh2aWV3cG9ydENUTSk7XG59O1xuXG4vKipcbiAqIEdldCBwYW4gdmVjdG9yXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB7eDogMCwgeTogMH1cbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZ2V0UGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMudmlld3BvcnQuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4geyB4OiBzdGF0ZS54LCB5OiBzdGF0ZS55IH07XG59O1xuXG4vKipcbiAqIFJlY2FsY3VsYXRlcyBjYWNoZWQgc3ZnIGRpbWVuc2lvbnMgYW5kIGNvbnRyb2xzIHBvc2l0aW9uXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBHZXQgZGltZW5zaW9uc1xuICB2YXIgYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZCA9IFN2Z1V0aWxzLmdldEJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQoXG4gICAgdGhpcy5zdmdcbiAgKTtcbiAgdGhpcy53aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQud2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZC5oZWlnaHQ7XG5cbiAgLy8gUmVjYWxjdWxhdGUgb3JpZ2luYWwgc3RhdGVcbiAgdmFyIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydDtcbiAgdmlld3BvcnQub3B0aW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XG4gIHZpZXdwb3J0Lm9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gIHZpZXdwb3J0LnByb2Nlc3NDVE0oKTtcblxuICAvLyBSZXBvc2l0aW9uIGNvbnRyb2wgaWNvbnMgYnkgcmUtZW5hYmxpbmcgdGhlbVxuICBpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQpIHtcbiAgICB0aGlzLmdldFB1YmxpY0luc3RhbmNlKCkuZGlzYWJsZUNvbnRyb2xJY29ucygpO1xuICAgIHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKS5lbmFibGVDb250cm9sSWNvbnMoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBVbmJpbmQgbW91c2UgZXZlbnRzLCBmcmVlIGNhbGxiYWNrcyBhbmQgZGVzdHJveSBwdWJsaWMgaW5zdGFuY2VcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgLy8gRnJlZSBjYWxsYmFja3NcbiAgdGhpcy5iZWZvcmVab29tID0gbnVsbDtcbiAgdGhpcy5vblpvb20gPSBudWxsO1xuICB0aGlzLmJlZm9yZVBhbiA9IG51bGw7XG4gIHRoaXMub25QYW4gPSBudWxsO1xuICB0aGlzLm9uVXBkYXRlZENUTSA9IG51bGw7XG5cbiAgLy8gRGVzdHJveSBjdXN0b20gZXZlbnQgaGFuZGxlcnNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUV2ZW50c0hhbmRsZXIgIT0gbnVsbCkge1xuICAgIHRoaXMub3B0aW9ucy5jdXN0b21FdmVudHNIYW5kbGVyLmRlc3Ryb3koe1xuICAgICAgc3ZnRWxlbWVudDogdGhpcy5zdmcsXG4gICAgICBldmVudHNMaXN0ZW5lckVsZW1lbnQ6IHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQsXG4gICAgICBpbnN0YW5jZTogdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpXG4gICAgfSk7XG4gIH1cblxuICAvLyBVbmJpbmQgZXZlbnRMaXN0ZW5lcnNcbiAgZm9yICh2YXIgZXZlbnQgaW4gdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgICh0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50IHx8IHRoaXMuc3ZnKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgZXZlbnQsXG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XSxcbiAgICAgICF0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCA/IHBhc3NpdmVMaXN0ZW5lck9wdGlvbiA6IGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIC8vIFVuYmluZCB3aGVlbExpc3RlbmVyXG4gIHRoaXMuZGlzYWJsZU1vdXNlV2hlZWxab29tKCk7XG5cbiAgLy8gUmVtb3ZlIGNvbnRyb2wgaWNvbnNcbiAgdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpLmRpc2FibGVDb250cm9sSWNvbnMoKTtcblxuICAvLyBSZXNldCB6b29tIGFuZCBwYW5cbiAgdGhpcy5yZXNldCgpO1xuXG4gIC8vIFJlbW92ZSBpbnN0YW5jZSBmcm9tIGluc3RhbmNlc1N0b3JlXG4gIGluc3RhbmNlc1N0b3JlID0gaW5zdGFuY2VzU3RvcmUuZmlsdGVyKGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnN2ZyAhPT0gdGhhdC5zdmc7XG4gIH0pO1xuXG4gIC8vIERlbGV0ZSBvcHRpb25zIGFuZCBpdHMgY29udGVudHNcbiAgZGVsZXRlIHRoaXMub3B0aW9ucztcblxuICAvLyBEZWxldGUgdmlld3BvcnQgdG8gbWFrZSBwdWJsaWMgc2hhZG93IHZpZXdwb3J0IGZ1bmN0aW9ucyB1bmNhbGxhYmxlXG4gIGRlbGV0ZSB0aGlzLnZpZXdwb3J0O1xuXG4gIC8vIERlc3Ryb3kgcHVibGljIGluc3RhbmNlIGFuZCByZXdyaXRlIGdldFB1YmxpY0luc3RhbmNlXG4gIGRlbGV0ZSB0aGlzLnB1YmxpY0luc3RhbmNlO1xuICBkZWxldGUgdGhpcy5waTtcbiAgdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHVibGljIGluc3RhbmNlIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gUHVibGljIGluc3RhbmNlIG9iamVjdFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5nZXRQdWJsaWNJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgLy8gQ3JlYXRlIGNhY2hlXG4gIGlmICghdGhpcy5wdWJsaWNJbnN0YW5jZSkge1xuICAgIHRoaXMucHVibGljSW5zdGFuY2UgPSB0aGlzLnBpID0ge1xuICAgICAgLy8gUGFuXG4gICAgICBlbmFibGVQYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMucGFuRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVQYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMucGFuRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBpc1BhbkVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGF0Lm9wdGlvbnMucGFuRW5hYmxlZDtcbiAgICAgIH0sXG4gICAgICBwYW46IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIHRoYXQucGFuKHBvaW50KTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgcGFuQnk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIHRoYXQucGFuQnkocG9pbnQpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBnZXRQYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhhdC5nZXRQYW4oKTtcbiAgICAgIH0sXG4gICAgICAvLyBQYW4gZXZlbnRcbiAgICAgIHNldEJlZm9yZVBhbjogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLmJlZm9yZVBhbiA9XG4gICAgICAgICAgZm4gPT09IG51bGwgPyBudWxsIDogVXRpbHMucHJveHkoZm4sIHRoYXQucHVibGljSW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBzZXRPblBhbjogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLm9uUGFuID1cbiAgICAgICAgICBmbiA9PT0gbnVsbCA/IG51bGwgOiBVdGlscy5wcm94eShmbiwgdGhhdC5wdWJsaWNJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIFpvb20gYW5kIENvbnRyb2wgSWNvbnNcbiAgICAgIGVuYWJsZVpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuem9vbUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy56b29tRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBpc1pvb21FbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhhdC5vcHRpb25zLnpvb21FbmFibGVkO1xuICAgICAgfSxcbiAgICAgIGVuYWJsZUNvbnRyb2xJY29uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhhdC5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQpIHtcbiAgICAgICAgICB0aGF0Lm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgQ29udHJvbEljb25zLmVuYWJsZSh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlQ29udHJvbEljb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkKSB7XG4gICAgICAgICAgdGhhdC5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICBDb250cm9sSWNvbnMuZGlzYWJsZSh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBpc0NvbnRyb2xJY29uc0VuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGF0Lm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZDtcbiAgICAgIH0sXG4gICAgICAvLyBEb3VibGUgY2xpY2sgem9vbVxuICAgICAgZW5hYmxlRGJsQ2xpY2tab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLmRibENsaWNrWm9vbUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlRGJsQ2xpY2tab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLmRibENsaWNrWm9vbUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgaXNEYmxDbGlja1pvb21FbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhhdC5vcHRpb25zLmRibENsaWNrWm9vbUVuYWJsZWQ7XG4gICAgICB9LFxuICAgICAgLy8gTW91c2Ugd2hlZWwgem9vbVxuICAgICAgZW5hYmxlTW91c2VXaGVlbFpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmVuYWJsZU1vdXNlV2hlZWxab29tKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVNb3VzZVdoZWVsWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZGlzYWJsZU1vdXNlV2hlZWxab29tKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGlzTW91c2VXaGVlbFpvb21FbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhhdC5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZDtcbiAgICAgIH0sXG4gICAgICAvLyBab29tIHNjYWxlIGFuZCBib3VuZHNcbiAgICAgIHNldFpvb21TY2FsZVNlbnNpdGl2aXR5OiBmdW5jdGlvbihzY2FsZSkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHkgPSBzY2FsZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgc2V0TWluWm9vbTogZnVuY3Rpb24oem9vbSkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMubWluWm9vbSA9IHpvb207XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHNldE1heFpvb206IGZ1bmN0aW9uKHpvb20pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLm1heFpvb20gPSB6b29tO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBab29tIGV2ZW50XG4gICAgICBzZXRCZWZvcmVab29tOiBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuYmVmb3JlWm9vbSA9XG4gICAgICAgICAgZm4gPT09IG51bGwgPyBudWxsIDogVXRpbHMucHJveHkoZm4sIHRoYXQucHVibGljSW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBzZXRPblpvb206IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5vblpvb20gPVxuICAgICAgICAgIGZuID09PSBudWxsID8gbnVsbCA6IFV0aWxzLnByb3h5KGZuLCB0aGF0LnB1YmxpY0luc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gWm9vbWluZ1xuICAgICAgem9vbTogZnVuY3Rpb24oc2NhbGUpIHtcbiAgICAgICAgdGhhdC5wdWJsaWNab29tKHNjYWxlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgem9vbUJ5OiBmdW5jdGlvbihzY2FsZSkge1xuICAgICAgICB0aGF0LnB1YmxpY1pvb20oc2NhbGUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgem9vbUF0UG9pbnQ6IGZ1bmN0aW9uKHNjYWxlLCBwb2ludCkge1xuICAgICAgICB0aGF0LnB1YmxpY1pvb21BdFBvaW50KHNjYWxlLCBwb2ludCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHpvb21BdFBvaW50Qnk6IGZ1bmN0aW9uKHNjYWxlLCBwb2ludCkge1xuICAgICAgICB0aGF0LnB1YmxpY1pvb21BdFBvaW50KHNjYWxlLCBwb2ludCwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICB6b29tSW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnpvb21CeSgxICsgdGhhdC5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5KTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgem9vbU91dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuem9vbUJ5KDEgLyAoMSArIHRoYXQub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSkpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBnZXRab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQuZ2V0UmVsYXRpdmVab29tKCk7XG4gICAgICB9LFxuICAgICAgLy8gQ1RNIHVwZGF0ZVxuICAgICAgc2V0T25VcGRhdGVkQ1RNOiBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMub25VcGRhdGVkQ1RNID1cbiAgICAgICAgICBmbiA9PT0gbnVsbCA/IG51bGwgOiBVdGlscy5wcm94eShmbiwgdGhhdC5wdWJsaWNJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0XG4gICAgICByZXNldFpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlc2V0Wm9vbSgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICByZXNldFBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQucmVzZXRQYW4oKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlc2V0KCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIEZpdCwgQ29udGFpbiBhbmQgQ2VudGVyXG4gICAgICBmaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmZpdCgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBjb250YWluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5jb250YWluKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGNlbnRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuY2VudGVyKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIFNpemUgYW5kIFJlc2l6ZVxuICAgICAgdXBkYXRlQkJveDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQudXBkYXRlQkJveCgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlc2l6ZSgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBnZXRTaXplczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IHRoYXQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGF0LmhlaWdodCxcbiAgICAgICAgICByZWFsWm9vbTogdGhhdC5nZXRab29tKCksXG4gICAgICAgICAgdmlld0JveDogdGhhdC52aWV3cG9ydC5nZXRWaWV3Qm94KClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICAvLyBEZXN0cm95XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdGhpcy5wdWJsaWNJbnN0YW5jZTtcbn07XG5cbi8qKlxuICogU3RvcmVzIHBhaXJzIG9mIGluc3RhbmNlcyBvZiBTdmdQYW5ab29tIGFuZCBTVkdcbiAqIEVhY2ggcGFpciBpcyByZXByZXNlbnRlZCBieSBhbiBvYmplY3Qge3N2ZzogU1ZHU1ZHRWxlbWVudCwgaW5zdGFuY2U6IFN2Z1Bhblpvb219XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgaW5zdGFuY2VzU3RvcmUgPSBbXTtcblxudmFyIHN2Z1Bhblpvb20gPSBmdW5jdGlvbihlbGVtZW50T3JTZWxlY3Rvciwgb3B0aW9ucykge1xuICB2YXIgc3ZnID0gVXRpbHMuZ2V0U3ZnKGVsZW1lbnRPclNlbGVjdG9yKTtcblxuICBpZiAoc3ZnID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgLy8gTG9vayBmb3IgZXhpc3RlbnQgaW5zdGFuY2VcbiAgICBmb3IgKHZhciBpID0gaW5zdGFuY2VzU3RvcmUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChpbnN0YW5jZXNTdG9yZVtpXS5zdmcgPT09IHN2Zykge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2VzU3RvcmVbaV0uaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBpbnN0YW5jZSBub3QgZm91bmQgLSBjcmVhdGUgb25lXG4gICAgaW5zdGFuY2VzU3RvcmUucHVzaCh7XG4gICAgICBzdmc6IHN2ZyxcbiAgICAgIGluc3RhbmNlOiBuZXcgU3ZnUGFuWm9vbShzdmcsIG9wdGlvbnMpXG4gICAgfSk7XG5cbiAgICAvLyBSZXR1cm4ganVzdCBwdXNoZWQgaW5zdGFuY2VcbiAgICByZXR1cm4gaW5zdGFuY2VzU3RvcmVbXG4gICAgICBpbnN0YW5jZXNTdG9yZS5sZW5ndGggLSAxXG4gICAgXS5pbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN2Z1Bhblpvb207XG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsaXRpZXNcIiksXG4gIF9icm93c2VyID0gXCJ1bmtub3duXCI7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTg0NzU4MC9ob3ctdG8tZGV0ZWN0LXNhZmFyaS1jaHJvbWUtaWUtZmlyZWZveC1hbmQtb3BlcmEtYnJvd3NlclxuaWYgKC8qQGNjX29uIUAqLyBmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAvLyBpbnRlcm5ldCBleHBsb3JlclxuICBfYnJvd3NlciA9IFwiaWVcIjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN2Z05TOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhtbE5TOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuc05TOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCIsXG4gIHhsaW5rTlM6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICBldk5TOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDEveG1sLWV2ZW50c1wiLFxuXG4gIC8qKlxuICAgKiBHZXQgc3ZnIGRpbWVuc2lvbnM6IHdpZHRoIGFuZCBoZWlnaHRcbiAgICpcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgIHt3aWR0aDogMCwgaGVpZ2h0OiAwfVxuICAgKi9cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZDogZnVuY3Rpb24oc3ZnKSB7XG4gICAgaWYgKHN2Zy5jbGllbnRXaWR0aCAmJiBzdmcuY2xpZW50SGVpZ2h0KSB7XG4gICAgICByZXR1cm4geyB3aWR0aDogc3ZnLmNsaWVudFdpZHRoLCBoZWlnaHQ6IHN2Zy5jbGllbnRIZWlnaHQgfTtcbiAgICB9IGVsc2UgaWYgKCEhc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSB7XG4gICAgICByZXR1cm4gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgU1ZHLlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgZyBlbGVtZW50IHdpdGggY2xhc3Mgb2YgXCJ2aWV3cG9ydFwiIG9yIGNyZWF0ZXMgaXQgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgKlxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICogQHJldHVybiB7U1ZHRWxlbWVudH0gICAgIGcgKGdyb3VwKSBlbGVtZW50XG4gICAqL1xuICBnZXRPckNyZWF0ZVZpZXdwb3J0OiBmdW5jdGlvbihzdmcsIHNlbGVjdG9yKSB7XG4gICAgdmFyIHZpZXdwb3J0ID0gbnVsbDtcblxuICAgIGlmIChVdGlscy5pc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICB2aWV3cG9ydCA9IHNlbGVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3cG9ydCA9IHN2Zy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBqdXN0IG9uZSBtYWluIGdyb3VwIGluIFNWR1xuICAgIGlmICghdmlld3BvcnQpIHtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgIC5jYWxsKHN2Zy5jaGlsZE5vZGVzIHx8IHN2Zy5jaGlsZHJlbilcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbihlbCkge1xuICAgICAgICAgIHJldHVybiBlbC5ub2RlTmFtZSAhPT0gXCJkZWZzXCIgJiYgZWwubm9kZU5hbWUgIT09IFwiI3RleHRcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIE5vZGUgbmFtZSBzaG91bGQgYmUgU1ZHR0VsZW1lbnQgYW5kIHNob3VsZCBoYXZlIG5vIHRyYW5zZm9ybSBhdHRyaWJ1dGVcbiAgICAgIC8vIEdyb3VwcyB3aXRoIHRyYW5zZm9ybSBhcmUgbm90IHVzZWQgYXMgdmlld3BvcnQgYmVjYXVzZSBpdCBpbnZvbHZlcyBwYXJzaW5nIG9mIGFsbCB0cmFuc2Zvcm0gcG9zc2liaWxpdGllc1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICBjaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09PSBcImdcIiAmJlxuICAgICAgICBjaGlsZE5vZGVzWzBdLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSA9PT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZpZXdwb3J0ID0gY2hpbGROb2Rlc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBubyBmYXZvcmFibGUgZ3JvdXAgZWxlbWVudCBleGlzdHMgdGhlbiBjcmVhdGUgb25lXG4gICAgaWYgKCF2aWV3cG9ydCkge1xuICAgICAgdmFyIHZpZXdwb3J0SWQgPVxuICAgICAgICBcInZpZXdwb3J0LVwiICsgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgIHZpZXdwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnTlMsIFwiZ1wiKTtcbiAgICAgIHZpZXdwb3J0LnNldEF0dHJpYnV0ZShcImlkXCIsIHZpZXdwb3J0SWQpO1xuXG4gICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciAoYWxsIHZlcnNpb25zPykgY2FuJ3QgdXNlIGNoaWxkTm9kZXMsIGJ1dCBvdGhlciBicm93c2VycyBwcmVmZXIgKHJlcXVpcmU/KSB1c2luZyBjaGlsZE5vZGVzXG4gICAgICB2YXIgc3ZnQ2hpbGRyZW4gPSBzdmcuY2hpbGROb2RlcyB8fCBzdmcuY2hpbGRyZW47XG4gICAgICBpZiAoISFzdmdDaGlsZHJlbiAmJiBzdmdDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdmdDaGlsZHJlbi5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAvLyBNb3ZlIGV2ZXJ5dGhpbmcgaW50byB2aWV3cG9ydCBleGNlcHQgZGVmc1xuICAgICAgICAgIGlmIChzdmdDaGlsZHJlbltzdmdDaGlsZHJlbi5sZW5ndGggLSBpXS5ub2RlTmFtZSAhPT0gXCJkZWZzXCIpIHtcbiAgICAgICAgICAgIHZpZXdwb3J0LmFwcGVuZENoaWxkKHN2Z0NoaWxkcmVuW3N2Z0NoaWxkcmVuLmxlbmd0aCAtIGldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgY2xhc3MgbmFtZXNcbiAgICB2YXIgY2xhc3NOYW1lcyA9IFtdO1xuICAgIGlmICh2aWV3cG9ydC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSkge1xuICAgICAgY2xhc3NOYW1lcyA9IHZpZXdwb3J0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgY2xhc3MgKGlmIG5vdCBzZXQgYWxyZWFkeSlcbiAgICBpZiAoIX5jbGFzc05hbWVzLmluZGV4T2YoXCJzdmctcGFuLXpvb21fdmlld3BvcnRcIikpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChcInN2Zy1wYW4tem9vbV92aWV3cG9ydFwiKTtcbiAgICAgIHZpZXdwb3J0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3cG9ydDtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IFNWRyBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKi9cbiAgc2V0dXBTdmdBdHRyaWJ1dGVzOiBmdW5jdGlvbihzdmcpIHtcbiAgICAvLyBTZXR0aW5nIGRlZmF1bHQgYXR0cmlidXRlc1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCB0aGlzLnN2Z05TKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlModGhpcy54bWxuc05TLCBcInhtbG5zOnhsaW5rXCIsIHRoaXMueGxpbmtOUyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKHRoaXMueG1sbnNOUywgXCJ4bWxuczpldlwiLCB0aGlzLmV2TlMpO1xuXG4gICAgLy8gTmVlZGVkIGZvciBJbnRlcm5ldCBFeHBsb3Jlciwgb3RoZXJ3aXNlIHRoZSB2aWV3cG9ydCBvdmVyZmxvd3NcbiAgICBpZiAoc3ZnLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHlsZSA9IHN2Zy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiO1xuICAgICAgaWYgKHN0eWxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm92ZXJmbG93XCIpID09PSAtMSkge1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJvdmVyZmxvdzogaGlkZGVuOyBcIiArIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhvdyBsb25nIEludGVybmV0IEV4cGxvcmVyIHRha2VzIHRvIGZpbmlzaCB1cGRhdGluZyBpdHMgZGlzcGxheSAobXMpLlxuICAgKi9cbiAgaW50ZXJuZXRFeHBsb3JlclJlZGlzcGxheUludGVydmFsOiAzMDAsXG5cbiAgLyoqXG4gICAqIEZvcmNlcyB0aGUgYnJvd3NlciB0byByZWRpc3BsYXkgYWxsIFNWRyBlbGVtZW50cyB0aGF0IHJlbHkgb24gYW5cbiAgICogZWxlbWVudCBkZWZpbmVkIGluIGEgJ2RlZnMnIHNlY3Rpb24uIEl0IHdvcmtzIGdsb2JhbGx5LCBmb3IgZXZlcnlcbiAgICogYXZhaWxhYmxlIGRlZnMgZWxlbWVudCBvbiB0aGUgcGFnZS5cbiAgICogVGhlIHRocm90dGxpbmcgaXMgaW50ZW50aW9uYWxseSBnbG9iYWwuXG4gICAqXG4gICAqIFRoaXMgaXMgb25seSBuZWVkZWQgZm9yIElFLiBJdCBpcyBhcyBhIGhhY2sgdG8gbWFrZSBtYXJrZXJzIChhbmQgJ3VzZScgZWxlbWVudHM/KVxuICAgKiB2aXNpYmxlIGFmdGVyIHBhbi96b29tIHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIFNWR3Mgb24gdGhlIHBhZ2UuXG4gICAqIFNlZSBidWcgcmVwb3J0OiBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzc4MTk2NC9cbiAgICogYWxzbyBzZWUgc3ZnLXBhbi16b29tIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vYXJpdXR0YS9zdmctcGFuLXpvb20vaXNzdWVzLzYyXG4gICAqL1xuICByZWZyZXNoRGVmc0dsb2JhbDogVXRpbHMudGhyb3R0bGUoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYWxsRGVmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZWZzXCIpO1xuICAgICAgdmFyIGFsbERlZnNDb3VudCA9IGFsbERlZnMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxEZWZzQ291bnQ7IGkrKykge1xuICAgICAgICB2YXIgdGhpc0RlZnMgPSBhbGxEZWZzW2ldO1xuICAgICAgICB0aGlzRGVmcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzRGVmcywgdGhpc0RlZnMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcyA/IHRoaXMuaW50ZXJuZXRFeHBsb3JlclJlZGlzcGxheUludGVydmFsIDogbnVsbFxuICApLFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zZm9ybSBtYXRyaXggb2YgYW4gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1NWR0VsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtTVkdNYXRyaXh9IG1hdHJpeCAgQ1RNXG4gICAqIEBwYXJhbSB7U1ZHRWxlbWVudH0gZGVmc1xuICAgKi9cbiAgc2V0Q1RNOiBmdW5jdGlvbihlbGVtZW50LCBtYXRyaXgsIGRlZnMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICBzID1cbiAgICAgICAgXCJtYXRyaXgoXCIgK1xuICAgICAgICBtYXRyaXguYSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgbWF0cml4LmIgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5jICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBtYXRyaXguZCArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgbWF0cml4LmUgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5mICtcbiAgICAgICAgXCIpXCI7XG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidHJhbnNmb3JtXCIsIHMpO1xuICAgIGlmIChcInRyYW5zZm9ybVwiIGluIGVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gcztcbiAgICB9IGVsc2UgaWYgKFwiLW1zLXRyYW5zZm9ybVwiIGluIGVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbXCItbXMtdHJhbnNmb3JtXCJdID0gcztcbiAgICB9IGVsc2UgaWYgKFwiLXdlYmtpdC10cmFuc2Zvcm1cIiBpbiBlbGVtZW50LnN0eWxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW1wiLXdlYmtpdC10cmFuc2Zvcm1cIl0gPSBzO1xuICAgIH1cblxuICAgIC8vIElFIGhhcyBhIGJ1ZyB0aGF0IG1ha2VzIG1hcmtlcnMgZGlzYXBwZWFyIG9uIHpvb20gKHdoZW4gdGhlIG1hdHJpeCBcImFcIiBhbmQvb3IgXCJkXCIgZWxlbWVudHMgY2hhbmdlKVxuICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3NjU0NTc4L3N2Zy1tYXJrZXItZG9lcy1ub3Qtd29yay1pbi1pZTktMTBcbiAgICAvLyBhbmQgaHR0cDovL3NybmRvbGhhLndvcmRwcmVzcy5jb20vMjAxMy8xMS8yNS9zdmctbGluZS1tYXJrZXJzLW1heS1kaXNhcHBlYXItaW4taW50ZXJuZXQtZXhwbG9yZXItMTEvXG4gICAgaWYgKF9icm93c2VyID09PSBcImllXCIgJiYgISFkZWZzKSB7XG4gICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgaW50ZW5kZWQgZm9yIHJlZGlzcGxheWluZyB0aGUgU1ZHIGR1cmluZyB6b29taW5nXG4gICAgICBkZWZzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRlZnMsIGRlZnMpO1xuICAgICAgLy8gdGhpcyByZWZyZXNoIGlzIGludGVuZGVkIGZvciByZWRpc3BsYXlpbmcgdGhlIG90aGVyIFNWR3Mgb24gYSBwYWdlIHdoZW4gcGFubmluZyBhIGdpdmVuIFNWR1xuICAgICAgLy8gaXQgaXMgYWxzbyBuZWVkZWQgZm9yIHRoZSBnaXZlbiBTVkcgaXRzZWxmLCBvbiB6b29tRW5kLCBpZiB0aGUgU1ZHIGNvbnRhaW5zIGFueSBtYXJrZXJzIHRoYXRcbiAgICAgIC8vIGFyZSBsb2NhdGVkIHVuZGVyIGFueSBvdGhlciBlbGVtZW50KHMpLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQucmVmcmVzaERlZnNHbG9iYWwoKTtcbiAgICAgIH0sIHRoYXQuaW50ZXJuZXRFeHBsb3JlclJlZGlzcGxheUludGVydmFsKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIGFuIFNWR1BvaW50IG9iamVjdCB3aXRoIGdpdmVuIGV2ZW50IGNvb3JkaW5hdGVzXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICogQHJldHVybiB7U1ZHUG9pbnR9ICAgICBwb2ludFxuICAgKi9cbiAgZ2V0RXZlbnRQb2ludDogZnVuY3Rpb24oZXZ0LCBzdmcpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcblxuICAgIFV0aWxzLm1vdXNlQW5kVG91Y2hOb3JtYWxpemUoZXZ0LCBzdmcpO1xuXG4gICAgcG9pbnQueCA9IGV2dC5jbGllbnRYO1xuICAgIHBvaW50LnkgPSBldnQuY2xpZW50WTtcblxuICAgIHJldHVybiBwb2ludDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IFNWRyBjZW50ZXIgcG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqIEByZXR1cm4ge1NWR1BvaW50fVxuICAgKi9cbiAgZ2V0U3ZnQ2VudGVyUG9pbnQ6IGZ1bmN0aW9uKHN2Zywgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVNWR1BvaW50KHN2Zywgd2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgU1ZHUG9pbnQgd2l0aCBnaXZlbiB4IGFuZCB5XG4gICAqXG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5XG4gICAqIEByZXR1cm4ge1NWR1BvaW50fVxuICAgKi9cbiAgY3JlYXRlU1ZHUG9pbnQ6IGZ1bmN0aW9uKHN2ZywgeCwgeSkge1xuICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuICAgIHBvaW50LnggPSB4O1xuICAgIHBvaW50LnkgPSB5O1xuXG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG59O1xuIiwiLy8gdW5pd2hlZWwgMC4xLjIgKGN1c3RvbWl6ZWQpXG4vLyBBIHVuaWZpZWQgY3Jvc3MgYnJvd3NlciBtb3VzZSB3aGVlbCBldmVudCBoYW5kbGVyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGVlbXVhbGFwL3VuaXdoZWVsXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCl7XG5cbiAgLy9GdWxsIGRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1JlZmVyZW5jZS9FdmVudHMvd2hlZWxcblxuICB2YXIgcHJlZml4ID0gXCJcIiwgX2FkZEV2ZW50TGlzdGVuZXIsIF9yZW1vdmVFdmVudExpc3RlbmVyLCBzdXBwb3J0LCBmbnMgPSBbXTtcbiAgdmFyIHBhc3NpdmVPcHRpb24gPSB7cGFzc2l2ZTogdHJ1ZX07XG5cbiAgLy8gZGV0ZWN0IGV2ZW50IG1vZGVsXG4gIGlmICggd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImFkZEV2ZW50TGlzdGVuZXJcIjtcbiAgICBfcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiO1xuICB9IGVsc2Uge1xuICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhdHRhY2hFdmVudFwiO1xuICAgIF9yZW1vdmVFdmVudExpc3RlbmVyID0gXCJkZXRhY2hFdmVudFwiO1xuICAgIHByZWZpeCA9IFwib25cIjtcbiAgfVxuXG4gIC8vIGRldGVjdCBhdmFpbGFibGUgd2hlZWwgZXZlbnRcbiAgc3VwcG9ydCA9IFwib253aGVlbFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgPyBcIndoZWVsXCIgOiAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gXCJtb3VzZXdoZWVsXCIgOiAvLyBXZWJraXQgYW5kIElFIHN1cHBvcnQgYXQgbGVhc3QgXCJtb3VzZXdoZWVsXCJcbiAgICAgICAgICAgIFwiRE9NTW91c2VTY3JvbGxcIjsgLy8gbGV0J3MgYXNzdW1lIHRoYXQgcmVtYWluaW5nIGJyb3dzZXJzIGFyZSBvbGRlciBGaXJlZm94XG5cblxuICBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhlbGVtZW50LGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgZm4gPSBmdW5jdGlvbihvcmlnaW5hbEV2ZW50KSB7XG5cbiAgICAgICFvcmlnaW5hbEV2ZW50ICYmICggb3JpZ2luYWxFdmVudCA9IHdpbmRvdy5ldmVudCApO1xuXG4gICAgICAvLyBjcmVhdGUgYSBub3JtYWxpemVkIGV2ZW50IG9iamVjdFxuICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAvLyBrZWVwIGEgcmVmIHRvIHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgICAgICAgb3JpZ2luYWxFdmVudDogb3JpZ2luYWxFdmVudCxcbiAgICAgICAgdGFyZ2V0OiBvcmlnaW5hbEV2ZW50LnRhcmdldCB8fCBvcmlnaW5hbEV2ZW50LnNyY0VsZW1lbnQsXG4gICAgICAgIHR5cGU6IFwid2hlZWxcIixcbiAgICAgICAgZGVsdGFNb2RlOiBvcmlnaW5hbEV2ZW50LnR5cGUgPT0gXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIgPyAwIDogMSxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWxhdFo6IDAsXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0ID9cbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKSA6XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSBkZWx0YVkgKGFuZCBkZWx0YVgpIGFjY29yZGluZyB0byB0aGUgZXZlbnRcbiAgICAgIGlmICggc3VwcG9ydCA9PSBcIm1vdXNld2hlZWxcIiApIHtcbiAgICAgICAgZXZlbnQuZGVsdGFZID0gLSAxLzQwICogb3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xuICAgICAgICAvLyBXZWJraXQgYWxzbyBzdXBwb3J0IHdoZWVsRGVsdGFYXG4gICAgICAgIG9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YVggJiYgKCBldmVudC5kZWx0YVggPSAtIDEvNDAgKiBvcmlnaW5hbEV2ZW50LndoZWVsRGVsdGFYICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5kZWx0YVkgPSBvcmlnaW5hbEV2ZW50LmRldGFpbDtcbiAgICAgIH1cblxuICAgICAgLy8gaXQncyB0aW1lIHRvIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgICByZXR1cm4gY2FsbGJhY2soIGV2ZW50ICk7XG5cbiAgICB9O1xuXG4gICAgZm5zLnB1c2goe1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGZuOiBmbixcbiAgICB9KTtcblxuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZuc1tpXS5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmbnNbaV0uZm47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpe307XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmbnNbaV0uZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZm5zLnNwbGljZShpLDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hZGRXaGVlbExpc3RlbmVyKGVsZW0sIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyICkge1xuICAgIHZhciBjYjtcblxuICAgIGlmIChzdXBwb3J0ID09PSBcIndoZWVsXCIpIHtcbiAgICAgIGNiID0gY2FsbGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiID0gY3JlYXRlQ2FsbGJhY2soZWxlbSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGVsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKHByZWZpeCArIGV2ZW50TmFtZSwgY2IsIGlzUGFzc2l2ZUxpc3RlbmVyID8gcGFzc2l2ZU9wdGlvbiA6IGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVXaGVlbExpc3RlbmVyKGVsZW0sIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyICkge1xuXG4gICAgdmFyIGNiO1xuXG4gICAgaWYgKHN1cHBvcnQgPT09IFwid2hlZWxcIikge1xuICAgICAgY2IgPSBjYWxsYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgY2IgPSBnZXRDYWxsYmFjayhlbGVtKTtcbiAgICB9XG5cbiAgICBlbGVtW19yZW1vdmVFdmVudExpc3RlbmVyXShwcmVmaXggKyBldmVudE5hbWUsIGNiLCBpc1Bhc3NpdmVMaXN0ZW5lciA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZSk7XG5cbiAgICByZW1vdmVDYWxsYmFjayhlbGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFdoZWVsTGlzdGVuZXIoIGVsZW0sIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lciApIHtcbiAgICBfYWRkV2hlZWxMaXN0ZW5lcihlbGVtLCBzdXBwb3J0LCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIgKTtcblxuICAgIC8vIGhhbmRsZSBNb3pNb3VzZVBpeGVsU2Nyb2xsIGluIG9sZGVyIEZpcmVmb3hcbiAgICBpZiggc3VwcG9ydCA9PSBcIkRPTU1vdXNlU2Nyb2xsXCIgKSB7XG4gICAgICBfYWRkV2hlZWxMaXN0ZW5lcihlbGVtLCBcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIiwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlV2hlZWxMaXN0ZW5lcihlbGVtLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIpe1xuICAgIF9yZW1vdmVXaGVlbExpc3RlbmVyKGVsZW0sIHN1cHBvcnQsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICAvLyBoYW5kbGUgTW96TW91c2VQaXhlbFNjcm9sbCBpbiBvbGRlciBGaXJlZm94XG4gICAgaWYoIHN1cHBvcnQgPT0gXCJET01Nb3VzZVNjcm9sbFwiICkge1xuICAgICAgX3JlbW92ZVdoZWVsTGlzdGVuZXIoZWxlbSwgXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbjogYWRkV2hlZWxMaXN0ZW5lcixcbiAgICBvZmY6IHJlbW92ZVdoZWVsTGlzdGVuZXJcbiAgfTtcblxufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICogRXh0ZW5kcyBhbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXQgb2JqZWN0IHRvIGV4dGVuZFxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHNvdXJjZSBvYmplY3QgdG8gdGFrZSBwcm9wZXJ0aWVzIGZyb21cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgZXh0ZW5kZWQgb2JqZWN0XG4gICAqL1xuICBleHRlbmQ6IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAvLyBHbyByZWN1cnNpdmVseVxuICAgICAgaWYgKHRoaXMuaXNPYmplY3Qoc291cmNlW3Byb3BdKSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB0aGlzLmV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgYSBET00gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvIEhUTUwgZWxlbWVudCBvciBTdHJpbmdcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICByZXR1cm5zIHRydWUgaWYgb2JqZWN0IGlzIGEgRE9NIGVsZW1lbnRcbiAgICovXG4gIGlzRWxlbWVudDogZnVuY3Rpb24obykge1xuICAgIHJldHVybiAoXG4gICAgICBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHxcbiAgICAgIG8gaW5zdGFuY2VvZiBTVkdFbGVtZW50IHx8XG4gICAgICBvIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCB8fCAvL0RPTTJcbiAgICAgIChvICYmXG4gICAgICAgIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgIG8gIT09IG51bGwgJiZcbiAgICAgICAgby5ub2RlVHlwZSA9PT0gMSAmJlxuICAgICAgICB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIilcbiAgICApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gb2JqZWN0IGlzIGFuIE9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvIE9iamVjdFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgIHJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYW4gT2JqZWN0XG4gICAqL1xuICBpc09iamVjdDogZnVuY3Rpb24obykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB2YXJpYWJsZSBpcyBOdW1iZXJcbiAgICpcbiAgICogQHBhcmFtICB7SW50ZWdlcnxGbG9hdH0gIG5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICByZXR1cm5zIHRydWUgaWYgdmFyaWFibGUgaXMgTnVtYmVyXG4gICAqL1xuICBpc051bWJlcjogZnVuY3Rpb24obikge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgYW4gU1ZHIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fFN0cmluZ30gZWxlbWVudE9yU2VsZWN0b3IgRE9NIEVsZW1lbnQgb3Igc2VsZWN0b3IgU3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdHxOdWxsfSAgICAgICAgICAgICAgICAgICBTVkcgb3IgbnVsbFxuICAgKi9cbiAgZ2V0U3ZnOiBmdW5jdGlvbihlbGVtZW50T3JTZWxlY3Rvcikge1xuICAgIHZhciBlbGVtZW50LCBzdmc7XG5cbiAgICBpZiAoIXRoaXMuaXNFbGVtZW50KGVsZW1lbnRPclNlbGVjdG9yKSkge1xuICAgICAgLy8gSWYgc2VsZWN0b3IgcHJvdmlkZWRcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGVsZW1lbnRPclNlbGVjdG9yID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgIGVsZW1lbnRPclNlbGVjdG9yIGluc3RhbmNlb2YgU3RyaW5nXG4gICAgICApIHtcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudE9yU2VsZWN0b3IpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUHJvdmlkZWQgc2VsZWN0b3IgZGlkIG5vdCBmaW5kIGFueSBlbGVtZW50cy4gU2VsZWN0b3I6IFwiICtcbiAgICAgICAgICAgICAgZWxlbWVudE9yU2VsZWN0b3JcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBzZWxlY3RvciBpcyBub3QgYW4gSFRNTCBvYmplY3Qgbm9yIFN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50T3JTZWxlY3RvcjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIpIHtcbiAgICAgIHN2ZyA9IGVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBzdmcgPSBlbGVtZW50LmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZW1iZWRcIikge1xuICAgICAgICAgIHN2ZyA9IGVsZW1lbnQuZ2V0U1ZHRG9jdW1lbnQoKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImltZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdDYW5ub3Qgc2NyaXB0IGFuIFNWRyBpbiBhbiBcImltZ1wiIGVsZW1lbnQuIFBsZWFzZSB1c2UgYW4gXCJvYmplY3RcIiBlbGVtZW50IG9yIGFuIGluLWxpbmUgU1ZHLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgU1ZHLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBdHRhY2ggYSBnaXZlbiBjb250ZXh0IHRvIGEgZnVuY3Rpb25cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgRnVuY3Rpb25cbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIGNvbnRleHQgQ29udGV4dFxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgICAgIEZ1bmN0aW9uIHdpdGggY2VydGFpbiBjb250ZXh0XG4gICAqL1xuICBwcm94eTogZnVuY3Rpb24oZm4sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9iamVjdCB0eXBlXG4gICAqIFVzZXMgdG9TdHJpbmcgdGhhdCByZXR1cm5zIFtvYmplY3QgU1ZHUG9pbnRdXG4gICAqIEFuZCB0aGFuIHBhcnNlcyBvYmplY3QgdHlwZSBmcm9tIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG8gQW55IG9iamVjdFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgT2JqZWN0IHR5cGVcbiAgICovXG4gIGdldFR5cGU6IGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuICAgICAgLmFwcGx5KG8pXG4gICAgICAucmVwbGFjZSgvXlxcW29iamVjdFxccy8sIFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFxdJC8sIFwiXCIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZiBpdCBpcyBhIHRvdWNoIGV2ZW50IHRoYW4gYWRkIGNsaWVudFggYW5kIGNsaWVudFkgdG8gZXZlbnQgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSAge0V2ZW50fSBldnRcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqL1xuICBtb3VzZUFuZFRvdWNoTm9ybWFsaXplOiBmdW5jdGlvbihldnQsIHN2Zykge1xuICAgIC8vIElmIG5vIGNsaWVudFggdGhlbiBmYWxsYmFja1xuICAgIGlmIChldnQuY2xpZW50WCA9PT0gdm9pZCAwIHx8IGV2dC5jbGllbnRYID09PSBudWxsKSB7XG4gICAgICAvLyBGYWxsYmFja1xuICAgICAgZXZ0LmNsaWVudFggPSAwO1xuICAgICAgZXZ0LmNsaWVudFkgPSAwO1xuXG4gICAgICAvLyBJZiBpdCBpcyBhIHRvdWNoIGV2ZW50XG4gICAgICBpZiAoZXZ0LnRvdWNoZXMgIT09IHZvaWQgMCAmJiBldnQudG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGV2dC50b3VjaGVzWzBdLmNsaWVudFggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGV2dC5jbGllbnRYID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICBldnQuY2xpZW50WSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LnRvdWNoZXNbMF0ucGFnZVggIT09IHZvaWQgMCkge1xuICAgICAgICAgIHZhciByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgZXZ0LmNsaWVudFggPSBldnQudG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICBldnQuY2xpZW50WSA9IGV2dC50b3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBjdXN0b20gZXZlbnRcbiAgICAgIH0gZWxzZSBpZiAoZXZ0Lm9yaWdpbmFsRXZlbnQgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoZXZ0Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZXZ0LmNsaWVudFggPSBldnQub3JpZ2luYWxFdmVudC5jbGllbnRYO1xuICAgICAgICAgIGV2dC5jbGllbnRZID0gZXZ0Lm9yaWdpbmFsRXZlbnQuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gZXZlbnQgaXMgYSBkb3VibGUgY2xpY2svdGFwXG4gICAqIFRPRE86IEZvciB0b3VjaCBnZXN0dXJlcyB1c2UgYSBsaWJyYXJ5IChoYW1tZXIuanMpIHRoYXQgdGFrZXMgaW4gYWNjb3VudCBvdGhlciBldmVudHNcbiAgICogKHRvdWNobW92ZSBhbmQgdG91Y2hlbmQpLiBJdCBzaG91bGQgdGFrZSBpbiBhY2NvdW50IHRhcCBkdXJhdGlvbiBhbmQgdHJhdmVsZWQgZGlzdGFuY2VcbiAgICpcbiAgICogQHBhcmFtICB7RXZlbnR9ICBldnRcbiAgICogQHBhcmFtICB7RXZlbnR9ICBwcmV2RXZ0IFByZXZpb3VzIEV2ZW50XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0RibENsaWNrOiBmdW5jdGlvbihldnQsIHByZXZFdnQpIHtcbiAgICAvLyBEb3VibGUgY2xpY2sgZGV0ZWN0ZWQgYnkgYnJvd3NlclxuICAgIGlmIChldnQuZGV0YWlsID09PSAyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gVHJ5IHRvIGNvbXBhcmUgZXZlbnRzXG4gICAgZWxzZSBpZiAocHJldkV2dCAhPT0gdm9pZCAwICYmIHByZXZFdnQgIT09IG51bGwpIHtcbiAgICAgIHZhciB0aW1lU3RhbXBEaWZmID0gZXZ0LnRpbWVTdGFtcCAtIHByZXZFdnQudGltZVN0YW1wLCAvLyBzaG91bGQgYmUgbG93ZXIgdGhhbiAyNTAgbXNcbiAgICAgICAgdG91Y2hlc0Rpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgIE1hdGgucG93KGV2dC5jbGllbnRYIC0gcHJldkV2dC5jbGllbnRYLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyhldnQuY2xpZW50WSAtIHByZXZFdnQuY2xpZW50WSwgMilcbiAgICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRpbWVTdGFtcERpZmYgPCAyNTAgJiYgdG91Y2hlc0Rpc3RhbmNlIDwgMTA7XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyBmb3VuZFxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiBpbnRlZ2VyXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIG5vdzpcbiAgICBEYXRlLm5vdyB8fFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH0sXG5cbiAgLy8gRnJvbSB1bmRlcnNjb3JlLlxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAgLy8gZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gIC8vIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAgLy8gYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAgLy8gYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gIHRocm90dGxlOiBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IHRoYXQubm93KCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vdyA9IHRoYXQubm93KCk7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgICBjb250ZXh0ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2ltdWxhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSByZWZyZXNoUmF0ZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGNyZWF0ZVJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24ocmVmcmVzaFJhdGUpIHtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBDb252ZXJ0IHJlZnJlc2hSYXRlIHRvIHRpbWVvdXRcbiAgICBpZiAocmVmcmVzaFJhdGUgIT09IFwiYXV0b1wiICYmIHJlZnJlc2hSYXRlIDwgNjAgJiYgcmVmcmVzaFJhdGUgPiAxKSB7XG4gICAgICB0aW1lb3V0ID0gTWF0aC5mbG9vcigxMDAwIC8gcmVmcmVzaFJhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aW1lb3V0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByZXF1ZXN0VGltZW91dCgzMyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXF1ZXN0VGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FsbGJhY2sgdGhhdCB3aWxsIGV4ZWN1dGUgYWZ0ZXIgYSBnaXZlbiB0aW1lb3V0XG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IHRpbWVvdXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiByZXF1ZXN0VGltZW91dCh0aW1lb3V0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lb3V0KTtcbiAgfTtcbn1cbiIsIi8qISBzdmdNYXAgfCBodHRwczovL2dpdGh1Yi5jb20vU3RlcGhhbldhZ25lci9zdmdNYXAgfCBNSVQgTGljZW5zZSB8IENvcHlyaWdodCBTdGVwaGFuIFdhZ25lciB8IGh0dHBzOi8vc3RlcGhhbndhZ25lci5tZSAqL1xuZnVuY3Rpb24gc3ZnTWFwV3JhcHBlcihpKXtmdW5jdGlvbiBhKGwpe3RoaXMuaW5pdChsKX1yZXR1cm4gYS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihsKXt0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSx7dGFyZ2V0RWxlbWVudElEOlwiXCIsbWluWm9vbToxLG1heFpvb206MjUsaW5pdGlhbFpvb206MS4wNixpbml0aWFsUGFuOnt4OjAseTowfSx6b29tU2NhbGVTZW5zaXRpdml0eTouMixtb3VzZVdoZWVsWm9vbUVuYWJsZWQ6ITAsbW91c2VXaGVlbFpvb21XaXRoS2V5OiExLG1vdXNlV2hlZWxLZXlNZXNzYWdlOlwiUHJlc3MgdGhlIFtBTFRdIGtleSB0byB6b29tXCIsbW91c2VXaGVlbEtleU1lc3NhZ2VNYWM6XCJQcmVzcyB0aGUgW0NPTU1BTkRdIGtleSB0byB6b29tXCIsY29sb3JNYXg6XCIjQ0MwMDMzXCIsY29sb3JNaW46XCIjRkZFNUQ5XCIsY29sb3JOb0RhdGE6XCIjRTJFMkUyXCIsbWFudWFsQ29sb3JBdHRyaWJ1dGU6XCJjb2xvclwiLGZsYWdUeXBlOlwiaW1hZ2VcIixmbGFnVVJMOlwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2hqbmlsc3Nvbi9jb3VudHJ5LWZsYWdzQGxhdGVzdC9zdmcvezB9LnN2Z1wiLGhpZGVGbGFnOiExLGhpZGVNaXNzaW5nRGF0YTohMSxub0RhdGFUZXh0OlwiTm8gZGF0YSBhdmFpbGFibGVcIix0b3VjaExpbms6ITEsc2hvd1pvb21SZXNldDohMSxvbkdldFRvb2x0aXA6ZnVuY3Rpb24obCx0LGUpe3JldHVybiBudWxsfSxjb3VudHJpZXM6e0VIOiEwLENyaW1lYTpcIlVBXCJ9LHNob3dDb250aW5lbnRTZWxlY3RvcjohMX0sbHx8e30pLHRoaXMub3B0aW9ucy50YXJnZXRFbGVtZW50SUQmJmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy50YXJnZXRFbGVtZW50SUQpfHx0aGlzLmVycm9yKFwiVGFyZ2V0IGVsZW1lbnQgbm90IGZvdW5kXCIpLHRoaXMub3B0aW9ucy5kYXRhfHx0aGlzLmVycm9yKFwiTm8gZGF0YVwiKSx0aGlzLmlkPXRoaXMub3B0aW9ucy50YXJnZXRFbGVtZW50SUQsdGhpcy53cmFwcGVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy50YXJnZXRFbGVtZW50SUQpLHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLXdyYXBwZXJcIiksdGhpcy5jb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWNvbnRhaW5lclwiKSx0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpLHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQmJnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbVdpdGhLZXkmJih0aGlzLmFkZE1vdXNlV2hlZWxab29tTm90aWNlKCksdGhpcy5hZGRNb3VzZVdoZWVsWm9vbVdpdGhLZXlFdmVudHMoKSksdGhpcy5tYXBDb250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLW1hcC1jb250YWluZXJcIiksdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tYXBDb250YWluZXIpLHRoaXMuY3JlYXRlTWFwKCksdGhpcy5hcHBseURhdGEodGhpcy5vcHRpb25zLmRhdGEpfSxhLnByb3RvdHlwZS5jb3VudHJpZXM9e0FGOlwiQWZnaGFuaXN0YW5cIixBWDpcIsOFbGFuZCBJc2xhbmRzXCIsQUw6XCJBbGJhbmlhXCIsRFo6XCJBbGdlcmlhXCIsQVM6XCJBbWVyaWNhbiBTYW1vYVwiLEFEOlwiQW5kb3JyYVwiLEFPOlwiQW5nb2xhXCIsQUk6XCJBbmd1aWxsYVwiLEFROlwiQW50YXJjdGljYVwiLEFHOlwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLEFSOlwiQXJnZW50aW5hXCIsQU06XCJBcm1lbmlhXCIsQVc6XCJBcnViYVwiLEFVOlwiQXVzdHJhbGlhXCIsQVQ6XCJBdXN0cmlhXCIsQVo6XCJBemVyYmFpamFuXCIsQlM6XCJCYWhhbWFzXCIsQkg6XCJCYWhyYWluXCIsQkQ6XCJCYW5nbGFkZXNoXCIsQkI6XCJCYXJiYWRvc1wiLEJZOlwiQmVsYXJ1c1wiLEJFOlwiQmVsZ2l1bVwiLEJaOlwiQmVsaXplXCIsQko6XCJCZW5pblwiLEJNOlwiQmVybXVkYVwiLEJUOlwiQmh1dGFuXCIsQk86XCJCb2xpdmlhXCIsQkE6XCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsQlc6XCJCb3Rzd2FuYVwiLEJSOlwiQnJhemlsXCIsSU86XCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIixWRzpcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIixCTjpcIkJydW5laSBEYXJ1c3NhbGFtXCIsQkc6XCJCdWxnYXJpYVwiLEJGOlwiQnVya2luYSBGYXNvXCIsQkk6XCJCdXJ1bmRpXCIsS0g6XCJDYW1ib2RpYVwiLENNOlwiQ2FtZXJvb25cIixDQTpcIkNhbmFkYVwiLENWOlwiQ2FwZSBWZXJkZVwiLEJROlwiQ2FyaWJiZWFuIE5ldGhlcmxhbmRzXCIsS1k6XCJDYXltYW4gSXNsYW5kc1wiLENGOlwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsVEQ6XCJDaGFkXCIsQ0w6XCJDaGlsZVwiLENOOlwiQ2hpbmFcIixDWDpcIkNocmlzdG1hcyBJc2xhbmRcIixDQzpcIkNvY29zIElzbGFuZHNcIixDTzpcIkNvbG9tYmlhXCIsS006XCJDb21vcm9zXCIsQ0c6XCJDb25nb1wiLENLOlwiQ29vayBJc2xhbmRzXCIsQ1I6XCJDb3N0YSBSaWNhXCIsSFI6XCJDcm9hdGlhXCIsQ1U6XCJDdWJhXCIsQ1c6XCJDdXJhw6dhb1wiLENZOlwiQ3lwcnVzXCIsQ1o6XCJDemVjaCBSZXB1YmxpY1wiLENEOlwiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ29cIixESzpcIkRlbm1hcmtcIixESjpcIkRqaWJvdXRpXCIsRE06XCJEb21pbmljYVwiLERPOlwiRG9taW5pY2FuIFJlcHVibGljXCIsRUM6XCJFY3VhZG9yXCIsRUc6XCJFZ3lwdFwiLFNWOlwiRWwgU2FsdmFkb3JcIixHUTpcIkVxdWF0b3JpYWwgR3VpbmVhXCIsRVI6XCJFcml0cmVhXCIsRUU6XCJFc3RvbmlhXCIsRVQ6XCJFdGhpb3BpYVwiLEZLOlwiRmFsa2xhbmQgSXNsYW5kc1wiLEZPOlwiRmFyb2UgSXNsYW5kc1wiLEZNOlwiRmVkZXJhdGVkIFN0YXRlcyBvZiBNaWNyb25lc2lhXCIsRko6XCJGaWppXCIsRkk6XCJGaW5sYW5kXCIsRlI6XCJGcmFuY2VcIixHRjpcIkZyZW5jaCBHdWlhbmFcIixQRjpcIkZyZW5jaCBQb2x5bmVzaWFcIixURjpcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLEdBOlwiR2Fib25cIixHTTpcIkdhbWJpYVwiLEdFOlwiR2VvcmdpYVwiLERFOlwiR2VybWFueVwiLEdIOlwiR2hhbmFcIixHSTpcIkdpYnJhbHRhclwiLEdSOlwiR3JlZWNlXCIsR0w6XCJHcmVlbmxhbmRcIixHRDpcIkdyZW5hZGFcIixHUDpcIkd1YWRlbG91cGVcIixHVTpcIkd1YW1cIixHVDpcIkd1YXRlbWFsYVwiLEdOOlwiR3VpbmVhXCIsR1c6XCJHdWluZWEtQmlzc2F1XCIsR1k6XCJHdXlhbmFcIixIVDpcIkhhaXRpXCIsSE46XCJIb25kdXJhc1wiLEhLOlwiSG9uZyBLb25nXCIsSFU6XCJIdW5nYXJ5XCIsSVM6XCJJY2VsYW5kXCIsSU46XCJJbmRpYVwiLElEOlwiSW5kb25lc2lhXCIsSVI6XCJJcmFuXCIsSVE6XCJJcmFxXCIsSUU6XCJJcmVsYW5kXCIsSU06XCJJc2xlIG9mIE1hblwiLElMOlwiSXNyYWVsXCIsSVQ6XCJJdGFseVwiLENJOlwiSXZvcnkgQ29hc3RcIixKTTpcIkphbWFpY2FcIixKUDpcIkphcGFuXCIsSkU6XCJKZXJzZXlcIixKTzpcIkpvcmRhblwiLEtaOlwiS2F6YWtoc3RhblwiLEtFOlwiS2VueWFcIixLSTpcIktpcmliYXRpXCIsWEs6XCJLb3Nvdm9cIixLVzpcIkt1d2FpdFwiLEtHOlwiS3lyZ3l6c3RhblwiLExBOlwiTGFvc1wiLExWOlwiTGF0dmlhXCIsTEI6XCJMZWJhbm9uXCIsTFM6XCJMZXNvdGhvXCIsTFI6XCJMaWJlcmlhXCIsTFk6XCJMaWJ5YVwiLExJOlwiTGllY2h0ZW5zdGVpblwiLExUOlwiTGl0aHVhbmlhXCIsTFU6XCJMdXhlbWJvdXJnXCIsTU86XCJNYWNhdVwiLE1LOlwiTWFjZWRvbmlhXCIsTUc6XCJNYWRhZ2FzY2FyXCIsTVc6XCJNYWxhd2lcIixNWTpcIk1hbGF5c2lhXCIsTVY6XCJNYWxkaXZlc1wiLE1MOlwiTWFsaVwiLE1UOlwiTWFsdGFcIixNSDpcIk1hcnNoYWxsIElzbGFuZHNcIixNUTpcIk1hcnRpbmlxdWVcIixNUjpcIk1hdXJpdGFuaWFcIixNVTpcIk1hdXJpdGl1c1wiLFlUOlwiTWF5b3R0ZVwiLE1YOlwiTWV4aWNvXCIsTUQ6XCJNb2xkb3ZhXCIsTUM6XCJNb25hY29cIixNTjpcIk1vbmdvbGlhXCIsTUU6XCJNb250ZW5lZ3JvXCIsTVM6XCJNb250c2VycmF0XCIsTUE6XCJNb3JvY2NvXCIsTVo6XCJNb3phbWJpcXVlXCIsTU06XCJNeWFubWFyXCIsTkE6XCJOYW1pYmlhXCIsTlI6XCJOYXVydVwiLE5QOlwiTmVwYWxcIixOTDpcIk5ldGhlcmxhbmRzXCIsTkM6XCJOZXcgQ2FsZWRvbmlhXCIsTlo6XCJOZXcgWmVhbGFuZFwiLE5JOlwiTmljYXJhZ3VhXCIsTkU6XCJOaWdlclwiLE5HOlwiTmlnZXJpYVwiLE5VOlwiTml1ZVwiLE5GOlwiTm9yZm9sayBJc2xhbmRcIixLUDpcIk5vcnRoIEtvcmVhXCIsTVA6XCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixOTzpcIk5vcndheVwiLE9NOlwiT21hblwiLFBLOlwiUGFraXN0YW5cIixQVzpcIlBhbGF1XCIsUFM6XCJQYWxlc3RpbmVcIixQQTpcIlBhbmFtYVwiLFBHOlwiUGFwdWEgTmV3IEd1aW5lYVwiLFBZOlwiUGFyYWd1YXlcIixQRTpcIlBlcnVcIixQSDpcIlBoaWxpcHBpbmVzXCIsUE46XCJQaXRjYWlybiBJc2xhbmRzXCIsUEw6XCJQb2xhbmRcIixQVDpcIlBvcnR1Z2FsXCIsUFI6XCJQdWVydG8gUmljb1wiLFFBOlwiUWF0YXJcIixSRTpcIlJldW5pb25cIixSTzpcIlJvbWFuaWFcIixSVTpcIlJ1c3NpYVwiLFJXOlwiUndhbmRhXCIsU0g6XCJTYWludCBIZWxlbmFcIixLTjpcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLExDOlwiU2FpbnQgTHVjaWFcIixQTTpcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixWQzpcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsV1M6XCJTYW1vYVwiLFNNOlwiU2FuIE1hcmlub1wiLFNUOlwiU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBlXCIsU0E6XCJTYXVkaSBBcmFiaWFcIixTTjpcIlNlbmVnYWxcIixSUzpcIlNlcmJpYVwiLFNDOlwiU2V5Y2hlbGxlc1wiLFNMOlwiU2llcnJhIExlb25lXCIsU0c6XCJTaW5nYXBvcmVcIixTWDpcIlNpbnQgTWFhcnRlblwiLFNLOlwiU2xvdmFraWFcIixTSTpcIlNsb3ZlbmlhXCIsU0I6XCJTb2xvbW9uIElzbGFuZHNcIixTTzpcIlNvbWFsaWFcIixaQTpcIlNvdXRoIEFmcmljYVwiLEdTOlwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIixLUjpcIlNvdXRoIEtvcmVhXCIsU1M6XCJTb3V0aCBTdWRhblwiLEVTOlwiU3BhaW5cIixMSzpcIlNyaSBMYW5rYVwiLFNEOlwiU3VkYW5cIixTUjpcIlN1cmluYW1lXCIsU0o6XCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsU1o6XCJFc3dhdGluaVwiLFNFOlwiU3dlZGVuXCIsQ0g6XCJTd2l0emVybGFuZFwiLFNZOlwiU3lyaWFcIixUVzpcIlRhaXdhblwiLFRKOlwiVGFqaWtpc3RhblwiLFRaOlwiVGFuemFuaWFcIixUSDpcIlRoYWlsYW5kXCIsVEw6XCJUaW1vci1MZXN0ZVwiLFRHOlwiVG9nb1wiLFRLOlwiVG9rZWxhdVwiLFRPOlwiVG9uZ2FcIixUVDpcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixUTjpcIlR1bmlzaWFcIixUUjpcIlR1cmtleVwiLFRNOlwiVHVya21lbmlzdGFuXCIsVEM6XCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixUVjpcIlR1dmFsdVwiLFVHOlwiVWdhbmRhXCIsVUE6XCJVa3JhaW5lXCIsQUU6XCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLEdCOlwiVW5pdGVkIEtpbmdkb21cIixVUzpcIlVuaXRlZCBTdGF0ZXNcIixVTTpcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLFZJOlwiVW5pdGVkIFN0YXRlcyBWaXJnaW4gSXNsYW5kc1wiLFVZOlwiVXJ1Z3VheVwiLFVaOlwiVXpiZWtpc3RhblwiLFZVOlwiVmFudWF0dVwiLFZBOlwiVmF0aWNhbiBDaXR5XCIsVkU6XCJWZW5lenVlbGFcIixWTjpcIlZpZXRuYW1cIixXRjpcIldhbGxpcyBhbmQgRnV0dW5hXCIsRUg6XCJXZXN0ZXJuIFNhaGFyYVwiLFlFOlwiWWVtZW5cIixaTTpcIlphbWJpYVwiLFpXOlwiWmltYmFid2VcIn0sYS5wcm90b3R5cGUuYXBwbHlEYXRhPWZ1bmN0aW9uKG8pe3ZhciBpPW51bGwsYT1udWxsO09iamVjdC5rZXlzKG8udmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe2w9cGFyc2VJbnQoby52YWx1ZXNbbF1bby5hcHBseURhdGFdLDEwKTsoaT1udWxsPT09aT9sOmkpPGwmJihpPWwpLGw8KGE9bnVsbD09PWE/bDphKSYmKGE9bCl9KSxvLmRhdGFbby5hcHBseURhdGFdLnRocmVzaG9sZE1heCYmKGk9TWF0aC5taW4oaSxvLmRhdGFbby5hcHBseURhdGFdLnRocmVzaG9sZE1heCkpLG8uZGF0YVtvLmFwcGx5RGF0YV0udGhyZXNob2xkTWluJiYoYT1NYXRoLm1heChhLG8uZGF0YVtvLmFwcGx5RGF0YV0udGhyZXNob2xkTWluKSksT2JqZWN0LmtleXModGhpcy5jb3VudHJpZXMpLmZvckVhY2goZnVuY3Rpb24obCl7dmFyIHQsZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkK1wiLW1hcC1jb3VudHJ5LVwiK2wpO2UmJihvLnZhbHVlc1tsXT92b2lkIDA9PT1vLnZhbHVlc1tsXS5jb2xvcj8odD1NYXRoLm1heChhLHBhcnNlSW50KG8udmFsdWVzW2xdW28uYXBwbHlEYXRhXSwxMCkpLHQ9TWF0aC5tYXgoMCxNYXRoLm1pbigxLCh0LWEpLyhpLWEpKSksdD10aGlzLmdldENvbG9yKHRoaXMub3B0aW9ucy5jb2xvck1heCx0aGlzLm9wdGlvbnMuY29sb3JNaW4sdHx8MD09PXQ/dDoxKSxlLnNldEF0dHJpYnV0ZShcImZpbGxcIix0KSk6ZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsby52YWx1ZXNbbF0uY29sb3IpOmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLHRoaXMub3B0aW9ucy5jb2xvck5vRGF0YSkpfS5iaW5kKHRoaXMpKX0sYS5wcm90b3R5cGUuZW1vamlGbGFncz17QUY6XCLwn4em8J+Hq1wiLEFYOlwi8J+HpvCfh71cIixBTDpcIvCfh6bwn4exXCIsRFo6XCLwn4ep8J+Hv1wiLEFTOlwi8J+HpvCfh7hcIixBRDpcIvCfh6bwn4epXCIsQU86XCLwn4em8J+HtFwiLEFJOlwi8J+HpvCfh65cIixBUTpcIvCfh6bwn4e2XCIsQUc6XCLwn4em8J+HrFwiLEFSOlwi8J+HpvCfh7dcIixBTTpcIvCfh6bwn4eyXCIsQVc6XCLwn4em8J+HvFwiLEFVOlwi8J+HpvCfh7pcIixBVDpcIvCfh6bwn4e5XCIsQVo6XCLwn4em8J+Hv1wiLEJTOlwi8J+Hp/Cfh7hcIixCSDpcIvCfh6fwn4etXCIsQkQ6XCLwn4en8J+HqVwiLEJCOlwi8J+Hp/Cfh6dcIixCWTpcIvCfh6fwn4e+XCIsQkU6XCLwn4en8J+HqlwiLEJaOlwi8J+Hp/Cfh79cIixCSjpcIvCfh6fwn4evXCIsQk06XCLwn4en8J+HslwiLEJUOlwi8J+Hp/Cfh7lcIixCTzpcIvCfh6fwn4e0XCIsQkE6XCLwn4en8J+HplwiLEJXOlwi8J+Hp/Cfh7xcIixCUjpcIvCfh6fwn4e3XCIsSU86XCLwn4eu8J+HtFwiLFZHOlwi8J+Hu/Cfh6xcIixCTjpcIvCfh6fwn4ezXCIsQkc6XCLwn4en8J+HrFwiLEJGOlwi8J+Hp/Cfh6tcIixCSTpcIvCfh6fwn4euXCIsS0g6XCLwn4ew8J+HrVwiLENNOlwi8J+HqPCfh7JcIixDQTpcIvCfh6jwn4emXCIsQ1Y6XCLwn4eo8J+Hu1wiLEJROlwi8J+Hp/Cfh7ZcIixLWTpcIvCfh7Dwn4e+XCIsQ0Y6XCLwn4eo8J+Hq1wiLFREOlwi8J+HufCfh6lcIixDTDpcIvCfh6jwn4exXCIsQ046XCLwn4eo8J+Hs1wiLENYOlwi8J+HqPCfh71cIixDQzpcIvCfh6jwn4eoXCIsQ086XCLwn4eo8J+HtFwiLEtNOlwi8J+HsPCfh7JcIixDRzpcIvCfh6jwn4esXCIsQ0s6XCLwn4eo8J+HsFwiLENSOlwi8J+HqPCfh7dcIixIUjpcIvCfh63wn4e3XCIsQ1U6XCLwn4eo8J+HulwiLENXOlwi8J+HqPCfh7xcIixDWTpcIvCfh6jwn4e+XCIsQ1o6XCLwn4eo8J+Hv1wiLENEOlwi8J+HqPCfh6lcIixESzpcIvCfh6nwn4ewXCIsREo6XCLwn4ep8J+Hr1wiLERNOlwi8J+HqfCfh7JcIixETzpcIvCfh6nwn4e0XCIsRUM6XCLwn4eq8J+HqFwiLEVHOlwi8J+HqvCfh6xcIixTVjpcIvCfh7jwn4e7XCIsR1E6XCLwn4es8J+HtlwiLEVSOlwi8J+HqvCfh7dcIixFRTpcIvCfh6rwn4eqXCIsRVQ6XCLwn4eq8J+HuVwiLEZLOlwi8J+Hq/Cfh7BcIixGTzpcIvCfh6vwn4e0XCIsRk06XCLwn4er8J+HslwiLEZKOlwi8J+Hq/Cfh69cIixGSTpcIvCfh6vwn4euXCIsRlI6XCLwn4er8J+Ht1wiLEdGOlwi8J+HrPCfh6tcIixQRjpcIvCfh7Xwn4erXCIsVEY6XCLwn4e58J+Hq1wiLEdBOlwi8J+HrPCfh6ZcIixHTTpcIvCfh6zwn4eyXCIsR0U6XCLwn4es8J+HqlwiLERFOlwi8J+HqfCfh6pcIixHSDpcIvCfh6zwn4etXCIsR0k6XCLwn4es8J+HrlwiLEdSOlwi8J+HrPCfh7dcIixHTDpcIvCfh6zwn4exXCIsR0Q6XCLwn4es8J+HqVwiLEdQOlwi8J+HrPCfh7VcIixHVTpcIvCfh6zwn4e6XCIsR1Q6XCLwn4es8J+HuVwiLEdOOlwi8J+HrPCfh7NcIixHVzpcIvCfh6zwn4e8XCIsR1k6XCLwn4es8J+HvlwiLEhUOlwi8J+HrfCfh7lcIixITjpcIvCfh63wn4ezXCIsSEs6XCLwn4et8J+HsFwiLEhVOlwi8J+HrfCfh7pcIixJUzpcIvCfh67wn4e4XCIsSU46XCLwn4eu8J+Hs1wiLElEOlwi8J+HrvCfh6lcIixJUjpcIvCfh67wn4e3XCIsSVE6XCLwn4eu8J+HtlwiLElFOlwi8J+HrvCfh6pcIixJTTpcIvCfh67wn4eyXCIsSUw6XCLwn4eu8J+HsVwiLElUOlwi8J+HrvCfh7lcIixDSTpcIvCfh6jwn4euXCIsSk06XCLwn4ev8J+HslwiLEpQOlwi8J+Hr/Cfh7VcIixKRTpcIvCfh6/wn4eqXCIsSk86XCLwn4ev8J+HtFwiLEtaOlwi8J+HsPCfh79cIixLRTpcIvCfh7Dwn4eqXCIsS0k6XCLwn4ew8J+HrlwiLFhLOlwi8J+HvfCfh7BcIixLVzpcIvCfh7Dwn4e8XCIsS0c6XCLwn4ew8J+HrFwiLExBOlwi8J+HsfCfh6ZcIixMVjpcIvCfh7Hwn4e7XCIsTEI6XCLwn4ex8J+Hp1wiLExTOlwi8J+HsfCfh7hcIixMUjpcIvCfh7Hwn4e3XCIsTFk6XCLwn4ex8J+HvlwiLExJOlwi8J+HsfCfh65cIixMVDpcIvCfh7Hwn4e5XCIsTFU6XCLwn4ex8J+HulwiLE1POlwi8J+HsvCfh7RcIixNSzpcIvCfh7Lwn4ewXCIsTUc6XCLwn4ey8J+HrFwiLE1XOlwi8J+HsvCfh7xcIixNWTpcIvCfh7Lwn4e+XCIsTVY6XCLwn4ey8J+Hu1wiLE1MOlwi8J+HsvCfh7FcIixNVDpcIvCfh7Lwn4e5XCIsTUg6XCLwn4ey8J+HrVwiLE1ROlwi8J+HsvCfh7ZcIixNUjpcIvCfh7Lwn4e3XCIsTVU6XCLwn4ey8J+HulwiLFlUOlwi8J+HvvCfh7lcIixNWDpcIvCfh7Lwn4e9XCIsTUQ6XCLwn4ey8J+HqVwiLE1DOlwi8J+HsvCfh6hcIixNTjpcIvCfh7Lwn4ezXCIsTUU6XCLwn4ey8J+HqlwiLE1TOlwi8J+HsvCfh7hcIixNQTpcIvCfh7Lwn4emXCIsTVo6XCLwn4ey8J+Hv1wiLE1NOlwi8J+HsvCfh7JcIixOQTpcIvCfh7Pwn4emXCIsTlI6XCLwn4ez8J+Ht1wiLE5QOlwi8J+Hs/Cfh7VcIixOTDpcIvCfh7Pwn4exXCIsTkM6XCLwn4ez8J+HqFwiLE5aOlwi8J+Hs/Cfh79cIixOSTpcIvCfh7Pwn4euXCIsTkU6XCLwn4ez8J+HqlwiLE5HOlwi8J+Hs/Cfh6xcIixOVTpcIvCfh7Pwn4e6XCIsTkY6XCLwn4ez8J+Hq1wiLEtQOlwi8J+HsPCfh7VcIixNUDpcIvCfh7Lwn4e1XCIsTk86XCLwn4ez8J+HtFwiLE9NOlwi8J+HtPCfh7JcIixQSzpcIvCfh7Xwn4ewXCIsUFc6XCLwn4e18J+HvFwiLFBTOlwi8J+HtfCfh7hcIixQQTpcIvCfh7Xwn4emXCIsUEc6XCLwn4e18J+HrFwiLFBZOlwi8J+HtfCfh75cIixQRTpcIvCfh7Xwn4eqXCIsUEg6XCLwn4e18J+HrVwiLFBOOlwi8J+HtfCfh7NcIixQTDpcIvCfh7Xwn4exXCIsUFQ6XCLwn4e18J+HuVwiLFBSOlwi8J+HtfCfh7dcIixRQTpcIvCfh7bwn4emXCIsUkU6XCLwn4e38J+HqlwiLFJPOlwi8J+Ht/Cfh7RcIixSVTpcIvCfh7fwn4e6XCIsUlc6XCLwn4e38J+HvFwiLFNIOlwi8J+HuPCfh61cIixLTjpcIvCfh7Dwn4ezXCIsTEM6XCLwn4ex8J+HqFwiLFBNOlwi8J+HtfCfh7JcIixWQzpcIvCfh7vwn4eoXCIsV1M6XCLwn4e88J+HuFwiLFNNOlwi8J+HuPCfh7JcIixTVDpcIvCfh7jwn4e5XCIsU0E6XCLwn4e48J+HplwiLFNOOlwi8J+HuPCfh7NcIixSUzpcIvCfh7fwn4e4XCIsU0M6XCLwn4e48J+HqFwiLFNMOlwi8J+HuPCfh7FcIixTRzpcIvCfh7jwn4esXCIsU1g6XCLwn4e48J+HvVwiLFNLOlwi8J+HuPCfh7BcIixTSTpcIvCfh7jwn4euXCIsU0I6XCLwn4e48J+Hp1wiLFNPOlwi8J+HuPCfh7RcIixaQTpcIvCfh7/wn4emXCIsR1M6XCLwn4es8J+HuFwiLEtSOlwi8J+HsPCfh7dcIixTUzpcIvCfh7jwn4e4XCIsRVM6XCLwn4eq8J+HuFwiLExLOlwi8J+HsfCfh7BcIixTRDpcIvCfh7jwn4epXCIsU1I6XCLwn4e48J+Ht1wiLFNKOlwi8J+HuPCfh69cIixTWjpcIvCfh7jwn4e/XCIsU0U6XCLwn4e48J+HqlwiLENIOlwi8J+HqPCfh61cIixTWTpcIvCfh7jwn4e+XCIsVFc6XCLwn4e58J+HvFwiLFRKOlwi8J+HufCfh69cIixUWjpcIvCfh7nwn4e/XCIsVEg6XCLwn4e58J+HrVwiLFRMOlwi8J+HufCfh7FcIixURzpcIvCfh7nwn4esXCIsVEs6XCLwn4e58J+HsFwiLFRPOlwi8J+HufCfh7RcIixUVDpcIvCfh7nwn4e5XCIsVE46XCLwn4e58J+Hs1wiLFRSOlwi8J+HufCfh7dcIixUTTpcIvCfh7nwn4eyXCIsVEM6XCLwn4e58J+HqFwiLFRWOlwi8J+HufCfh7tcIixVRzpcIvCfh7rwn4esXCIsVUE6XCLwn4e68J+HplwiLEFFOlwi8J+HpvCfh6pcIixHQjpcIvCfh6zwn4enXCIsVVM6XCLwn4e68J+HuFwiLFVNOlwi8J+HuvCfh7JcIixWSTpcIvCfh7vwn4euXCIsVVk6XCLwn4e68J+HvlwiLFVaOlwi8J+HuvCfh79cIixWVTpcIvCfh7vwn4e6XCIsVkE6XCLwn4e78J+HplwiLFZFOlwi8J+Hu/Cfh6pcIixWTjpcIvCfh7vwn4ezXCIsV0Y6XCLwn4e88J+Hq1wiLEVIOlwi8J+HqvCfh61cIixZRTpcIvCfh77wn4eqXCIsWk06XCLwn4e/8J+HslwiLFpXOlwi8J+Hv/Cfh7xcIn0sYS5wcm90b3R5cGUuY29udGluZW50cz17RUE6e2lzbzpcIkVBXCIsbmFtZTpcIldvcmxkXCJ9LEFGOntpc286XCJBRlwiLG5hbWU6XCJBZnJpY2FcIixwYW46e3g6NDU0LHk6MjUwfSx6b29tOjEuOX0sQVM6e2lzbzpcIkFTXCIsbmFtZTpcIkFzaWFcIixwYW46e3g6OTA0LHk6ODB9LHpvb206MS44fSxFVTp7aXNvOlwiRVVcIixuYW1lOlwiRXVyb3BlXCIscGFuOnt4OjQwNCx5OjgwfSx6b29tOjV9LE5BOntpc286XCJOQVwiLG5hbWU6XCJOb3J0aCBBbWVyaWNhXCIscGFuOnt4OjEwNCx5OjU1fSx6b29tOjIuNn0sTUE6e2lzbzpcIk1BXCIsbmFtZTpcIk1pZGRsZSBBbWVyaWNhXCIscGFuOnt4OjEwNCx5OjIwMH0sem9vbToyLjZ9LFNBOntpc286XCJTQVwiLG5hbWU6XCJTb3V0aCBBbWVyaWNhXCIscGFuOnt4OjEwNCx5OjM0MH0sem9vbToyLjJ9LE9DOntpc286XCJPQ1wiLG5hbWU6XCJPY2VhbmlhXCIscGFuOnt4Ojk1NCx5OjM1MH0sem9vbToxLjl9fSxhLnByb3RvdHlwZS5jcmVhdGVNYXA9ZnVuY3Rpb24oKXt0aGlzLmNyZWF0ZVRvb2x0aXAoKSx0aGlzLm1hcFdyYXBwZXI9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtbWFwLXdyYXBwZXJcIix0aGlzLm1hcENvbnRhaW5lciksdGhpcy5tYXBJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwic3ZnXCIpLHRoaXMubWFwSW1hZ2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLFwiMCAwIDIwMDAgMTAwMVwiKSx0aGlzLm1hcEltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtbWFwLWltYWdlXCIpLHRoaXMubWFwV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLm1hcEltYWdlKTt2YXIgZSxsPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLW1hcC1jb250cm9scy13cmFwcGVyXCIsdGhpcy5tYXBXcmFwcGVyKSxvPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLW1hcC1jb250cm9scy16b29tXCIsbCk7W1wiaW5cIixcIm91dFwiLFwicmVzZXRcIl0uZm9yRWFjaChmdW5jdGlvbihsKXt2YXIgdDsoXCJyZXNldFwiPT09bCYmdGhpcy5vcHRpb25zLnNob3dab29tUmVzZXR8fFwicmVzZXRcIiE9PWwpJiYodGhpc1t0PVwiem9vbUNvbnRyb2xcIitsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2wuc2xpY2UoMSldPXRoaXMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLFwic3ZnTWFwLWNvbnRyb2wtYnV0dG9uIHN2Z01hcC16b29tLWJ1dHRvbiBzdmdNYXAtem9vbS1cIitsK1wiLWJ1dHRvblwiLG8pLHRoaXNbdF0udHlwZT1cImJ1dHRvblwiLHRoaXNbdF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt0aGlzLnpvb21NYXAobCl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KSl9LmJpbmQodGhpcykpLHRoaXMuem9vbUNvbnRyb2xJbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJab29tIGluXCIpLHRoaXMuem9vbUNvbnRyb2xPdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiWm9vbSBvdXRcIiksdGhpcy5vcHRpb25zLnNob3dDb250aW5lbnRTZWxlY3RvciYmKHQ9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtbWFwLWNvbnRpbmVudC1jb250cm9scy13cmFwcGVyXCIsdGhpcy5tYXBXcmFwcGVyKSx0aGlzLmNvbnRpbmVudFNlbGVjdD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIixcInN2Z01hcC1jb250aW5lbnQtc2VsZWN0XCIsdCksZT10aGlzLE9iamVjdC5rZXlzKGEucHJvdG90eXBlLmNvbnRpbmVudHMpLmZvckVhY2goZnVuY3Rpb24obCl7bGV0IHQ9ZS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsXCJzdmdNYXAtY29udGluZW50LW9wdGlvbiBzdmdNYXAtY29udGluZW50LWlzby1cIithLnByb3RvdHlwZS5jb250aW5lbnRzW2xdLmlzbyxlLmNvbnRpbmVudFNlbGVjdCxhLnByb3RvdHlwZS5jb250aW5lbnRzW2xdLm5hbWUpO3QudmFsdWU9bH0pLHRoaXMuY29udGluZW50U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbihsKXtsLnRhcmdldC52YWx1ZSYmdGhpcy56b29tQ29udGluZW50KGwudGFyZ2V0LnZhbHVlKX0uYmluZChlKSx7cGFzc2l2ZTohMH0pLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiU2VsZWN0IGNvbnRpbmVudFwiKSk7dmFyIHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzLm1hcFBhdGhzKTt0aGlzLm9wdGlvbnMuY291bnRyaWVzLkVIfHwodC5NQS5kPXRbXCJNQS1FSFwiXS5kLGRlbGV0ZSB0LkVIKSxkZWxldGUgdFtcIk1BLUVIXCJdLFwiUlVcIj09PXRoaXMub3B0aW9ucy5jb3VudHJpZXMuQ3JpbWVhJiYodC5SVS5kPXRbXCJSVS1XSVRILUNSSU1FQVwiXS5kLHQuVUEuZD10W1wiVUEtV0lUSE9VVC1DUklNRUFcIl0uZCksZGVsZXRlIHRbXCJSVS1XSVRILUNSSU1FQVwiXSxkZWxldGUgdFtcIlVBLVdJVEhPVVQtQ1JJTUVBXCJdLHRoaXMudG9vbHRpcE1vdmVFdmVudD1mdW5jdGlvbihsKXt0aGlzLm1vdmVUb29sdGlwKGwpfS5iaW5kKHRoaXMpLE9iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24obCl7dmFyIHQ9dGhpcy5tYXBQYXRoc1tsXTtpZih0LmQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJwYXRoXCIpO2lmKGkuc2V0QXR0cmlidXRlKFwiZFwiLHQuZCksaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuaWQrXCItbWFwLWNvdW50cnktXCIrbCksaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsbCksaS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWNvdW50cnlcIiksdGhpcy5tYXBJbWFnZS5hcHBlbmRDaGlsZChpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24obCl7aS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGkpLGkuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1hY3RpdmVcIik7dmFyIHQ9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpLGU9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmtcIik7dGhpcy5vcHRpb25zLnRvdWNoTGluayYmZT93aW5kb3cubG9jYXRpb24uaHJlZj1lOih0aGlzLnNldFRvb2x0aXBDb250ZW50KHRoaXMuZ2V0VG9vbHRpcENvbnRlbnQodCkpLHRoaXMuc2hvd1Rvb2x0aXAobCksdGhpcy5tb3ZlVG9vbHRpcChsKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvb2x0aXBNb3ZlRXZlbnQse3Bhc3NpdmU6ITB9KSl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsZnVuY3Rpb24obCl7aS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGkpO3ZhciB0PWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTt0aGlzLnNldFRvb2x0aXBDb250ZW50KHRoaXMuZ2V0VG9vbHRpcENvbnRlbnQodCkpLHRoaXMuc2hvd1Rvb2x0aXAobCksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy50b29sdGlwTW92ZUV2ZW50LHtwYXNzaXZlOiEwfSl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KSx0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXMmJnRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tsXSYmdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2xdLmxpbmspe2kuc2V0QXR0cmlidXRlKFwiZGF0YS1saW5rXCIsdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2xdLmxpbmspLHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tsXS5saW5rVGFyZ2V0JiZpLnNldEF0dHJpYnV0ZShcImRhdGEtbGluay10YXJnZXRcIix0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbbF0ubGlua1RhcmdldCk7bGV0IG89ITE7aS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oKXtvPSExfSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKCl7bz0hMX0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGZ1bmN0aW9uKCl7bz0hMH0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGZ1bmN0aW9uKCl7bz0hMH0pO2w9ZnVuY3Rpb24obCl7dmFyIHQsZTtvfHwodD1pLmdldEF0dHJpYnV0ZShcImRhdGEtbGlua1wiKSwoZT1pLmdldEF0dHJpYnV0ZShcImRhdGEtbGluay10YXJnZXRcIikpP3dpbmRvdy5vcGVuKHQsZSk6d2luZG93LmxvY2F0aW9uLmhyZWY9dCl9O2kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbCksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixsKX1pLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oKXt0aGlzLmhpZGVUb29sdGlwKCksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy50b29sdGlwTW92ZUV2ZW50LHtwYXNzaXZlOiEwfSl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGZ1bmN0aW9uKCl7dGhpcy5oaWRlVG9vbHRpcCgpLGkuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1hY3RpdmVcIiksaS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b29sdGlwTW92ZUV2ZW50LHtwYXNzaXZlOiEwfSl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KX19LmJpbmQodGhpcykpO3ZhciBuPXRoaXM7dGhpcy5tYXBQYW5ab29tPWkodGhpcy5tYXBJbWFnZSx7em9vbUVuYWJsZWQ6ITAsZml0OiEwLGNlbnRlcjohMCxtaW5ab29tOnRoaXMub3B0aW9ucy5taW5ab29tLG1heFpvb206dGhpcy5vcHRpb25zLm1heFpvb20sem9vbVNjYWxlU2Vuc2l0aXZpdHk6dGhpcy5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5LGNvbnRyb2xJY29uc0VuYWJsZWQ6ITEsbW91c2VXaGVlbFpvb21FbmFibGVkOnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQscHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdDohMCxvblpvb206ZnVuY3Rpb24oKXtuLnNldENvbnRyb2xTdGF0dXNlcygpfSxiZWZvcmVQYW46ZnVuY3Rpb24obCx0KXt2YXIgZT0uODUqbi5tYXBXcmFwcGVyLm9mZnNldFdpZHRoLG89Ljg1Km4ubWFwV3JhcHBlci5vZmZzZXRIZWlnaHQsaT10aGlzLmdldFNpemVzKCksYT0tKChpLnZpZXdCb3gueCtpLnZpZXdCb3gud2lkdGgpKmkucmVhbFpvb20pK2UsTD1pLndpZHRoLWUtaS52aWV3Qm94LngqaS5yZWFsWm9vbSxlPS0oKGkudmlld0JveC55K2kudmlld0JveC5oZWlnaHQpKmkucmVhbFpvb20pK28saT1pLmhlaWdodC1vLWkudmlld0JveC55KmkucmVhbFpvb207cmV0dXJue3g6TWF0aC5tYXgoYSxNYXRoLm1pbihMLHQueCkpLHk6TWF0aC5tYXgoZSxNYXRoLm1pbihpLHQueSkpfX19KSwwIT10aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi54fHwwIT10aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi55P3RoaXMubWFwUGFuWm9vbS56b29tQXRQb2ludEJ5KHRoaXMub3B0aW9ucy5pbml0aWFsWm9vbSx7eDp0aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi54LHk6dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueX0pOnRoaXMubWFwUGFuWm9vbS56b29tKHRoaXMub3B0aW9ucy5pbml0aWFsWm9vbSksdGhpcy5zZXRDb250cm9sU3RhdHVzZXMoKX0sYS5wcm90b3R5cGUuZ2V0VG9vbHRpcENvbnRlbnQ9ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRpb25zLm9uR2V0VG9vbHRpcCl7dmFyIGw9dGhpcy5vcHRpb25zLm9uR2V0VG9vbHRpcCh0aGlzLnRvb2x0aXAsZSx0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbZV0pO2lmKGwpcmV0dXJuIGx9bD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLWNvbnRlbnQtY29udGFpbmVyXCIpOyExPT09dGhpcy5vcHRpb25zLmhpZGVGbGFnJiYodD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLWZsYWctY29udGFpbmVyIHN2Z01hcC10b29sdGlwLWZsYWctY29udGFpbmVyLVwiK3RoaXMub3B0aW9ucy5mbGFnVHlwZSxsKSxcImltYWdlXCI9PT10aGlzLm9wdGlvbnMuZmxhZ1R5cGU/dGhpcy5jcmVhdGVFbGVtZW50KFwiaW1nXCIsXCJzdmdNYXAtdG9vbHRpcC1mbGFnXCIsdCkuc2V0QXR0cmlidXRlKFwic3JjXCIsdGhpcy5vcHRpb25zLmZsYWdVUkwucmVwbGFjZShcInswfVwiLGUudG9Mb3dlckNhc2UoKSkpOlwiZW1vamlcIj09PXRoaXMub3B0aW9ucy5mbGFnVHlwZSYmKHQuaW5uZXJIVE1MPXRoaXMuZW1vamlGbGFnc1tlXSkpLHRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtdGl0bGVcIixsKS5pbm5lckhUTUw9dGhpcy5nZXRDb3VudHJ5TmFtZShlKTt2YXIgbyx0PXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtY29udGVudFwiLGwpO3JldHVybiB0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbZV0/KG89XCI8dGFibGU+XCIsT2JqZWN0LmtleXModGhpcy5vcHRpb25zLmRhdGEuZGF0YSkuZm9yRWFjaChmdW5jdGlvbihsKXt2YXIgdD10aGlzLm9wdGlvbnMuZGF0YS5kYXRhW2xdLGw9dGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2VdW2xdOyh2b2lkIDAhPT1sJiYhMD09PXRoaXMub3B0aW9ucy5oaWRlTWlzc2luZ0RhdGF8fCExPT09dGhpcy5vcHRpb25zLmhpZGVNaXNzaW5nRGF0YSkmJih0LmZsb2F0aW5nTnVtYmVycyYmKGw9bC50b0ZpeGVkKDEpKSx0LnRob3VzYW5kU2VwYXJhdG9yJiYobD10aGlzLm51bWJlcldpdGhDb21tYXMobCx0LnRob3VzYW5kU2VwYXJhdG9yKSksbD10LmZvcm1hdD90LmZvcm1hdC5yZXBsYWNlKFwiezB9XCIsXCI8c3Bhbj5cIitsK1wiPC9zcGFuPlwiKTpcIjxzcGFuPlwiK2wrXCI8L3NwYW4+XCIsbys9XCI8dHI+PHRkPlwiKyh0Lm5hbWV8fFwiXCIpK1wiPC90ZD48dGQ+XCIrbCtcIjwvdGQ+PC90cj5cIil9LmJpbmQodGhpcykpLG8rPVwiPC90YWJsZT5cIix0LmlubmVySFRNTD1vKTp0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLW5vLWRhdGFcIix0KS5pbm5lckhUTUw9dGhpcy5vcHRpb25zLm5vRGF0YVRleHQsbH0sYS5wcm90b3R5cGUuc2V0Q29udHJvbFN0YXR1c2VzPWZ1bmN0aW9uKCl7dGhpcy56b29tQ29udHJvbEluLmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbEluLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLHRoaXMuem9vbUNvbnRyb2xPdXQuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sT3V0LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLHRoaXMub3B0aW9ucy5zaG93Wm9vbVJlc2V0JiYodGhpcy56b29tQ29udHJvbFJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbFJlc2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpKSx0aGlzLm1hcFBhblpvb20uZ2V0Wm9vbSgpLnRvRml4ZWQoMyk8PXRoaXMub3B0aW9ucy5taW5ab29tJiYodGhpcy56b29tQ29udHJvbE91dC5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xPdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSksdGhpcy5tYXBQYW5ab29tLmdldFpvb20oKS50b0ZpeGVkKDMpPj10aGlzLm9wdGlvbnMubWF4Wm9vbSYmKHRoaXMuem9vbUNvbnRyb2xJbi5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xJbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKSx0aGlzLm9wdGlvbnMuc2hvd1pvb21SZXNldCYmdGhpcy5tYXBQYW5ab29tLmdldFpvb20oKS50b0ZpeGVkKDMpPT10aGlzLm9wdGlvbnMuaW5pdGlhbFpvb20mJih0aGlzLnpvb21Db250cm9sUmVzZXQuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sUmVzZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSl9LGEucHJvdG90eXBlLnpvb21NYXA9ZnVuY3Rpb24obCl7aWYodGhpc1tcInpvb21Db250cm9sXCIrbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStsLnNsaWNlKDEpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdmdNYXAtZGlzYWJsZWRcIikpcmV0dXJuITE7XCJyZXNldFwiPT09bD8odGhpcy5tYXBQYW5ab29tLnJlc2V0KCksMCE9dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueHx8MCE9dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueT90aGlzLm1hcFBhblpvb20uem9vbUF0UG9pbnRCeSh0aGlzLm9wdGlvbnMuaW5pdGlhbFpvb20se3g6dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueCx5OnRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnl9KTp0aGlzLm1hcFBhblpvb20uem9vbSh0aGlzLm9wdGlvbnMuaW5pdGlhbFpvb20pKTp0aGlzLm1hcFBhblpvb21bXCJpblwiPT1sP1wiem9vbUluXCI6XCJ6b29tT3V0XCJdKCl9LGEucHJvdG90eXBlLnpvb21Db250aW5lbnQ9ZnVuY3Rpb24obCl7bD10aGlzLmNvbnRpbmVudHNbbF07XCJFQVwiPT1sLmlzbz90aGlzLm1hcFBhblpvb20ucmVzZXQoKTpsLnBhbiYmKHRoaXMubWFwUGFuWm9vbS5yZXNldCgpLHRoaXMubWFwUGFuWm9vbS56b29tQXRQb2ludChsLnpvb20sbC5wYW4pKX0sYS5wcm90b3R5cGUuYWRkTW91c2VXaGVlbFpvb21Ob3RpY2U9ZnVuY3Rpb24oKXt2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1ibG9jay16b29tLW5vdGljZVwiKTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3QuaW5uZXJIVE1MPS0xIT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTWFjXCIpP3RoaXMub3B0aW9ucy5tb3VzZVdoZWVsS2V5TWVzc2FnZU1hYzp0aGlzLm9wdGlvbnMubW91c2VXaGVlbEtleU1lc3NhZ2UsbC5hcHBlbmQodCksdGhpcy53cmFwcGVyLmFwcGVuZChsKX0sYS5wcm90b3R5cGUuc2hvd01vdXNlV2hlZWxab29tTm90aWNlPWZ1bmN0aW9uKGwpe3RoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW58fCh0aGlzLmF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLmF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQpLHRoaXMuYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5oaWRlTW91c2VXaGVlbFpvb21Ob3RpY2UoKX0uYmluZCh0aGlzKSxsfHwyNDAwKSx0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1ibG9jay16b29tLW5vdGljZS1hY3RpdmVcIikpfSxhLnByb3RvdHlwZS5oaWRlTW91c2VXaGVlbFpvb21Ob3RpY2U9ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1ibG9jay16b29tLW5vdGljZS1hY3RpdmVcIiksdGhpcy5hdXRvSGlkZU1vdXNlV2hlZWxOb3RpY2VUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5hdXRvSGlkZU1vdXNlV2hlZWxOb3RpY2VUaW1lb3V0KX0sYS5wcm90b3R5cGUuYmxvY2tNb3VzZVdoZWVsWm9vbU5vdGljZT1mdW5jdGlvbihsKXt0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuPSEwLHRoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW5UaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlblRpbWVvdXQpLHRoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW5UaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuPSExfS5iaW5kKHRoaXMpLGx8fDYwMCl9LGEucHJvdG90eXBlLmFkZE1vdXNlV2hlZWxab29tV2l0aEtleUV2ZW50cz1mdW5jdGlvbigpe2lmKHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIixmdW5jdGlvbihsKXtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInN2Z01hcC16b29tLWtleS1wcmVzc2VkXCIpPyh0aGlzLmhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZSgpLHRoaXMuYmxvY2tNb3VzZVdoZWVsWm9vbU5vdGljZSgpKTp0aGlzLnNob3dNb3VzZVdoZWVsWm9vbU5vdGljZSgpfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmdW5jdGlvbihsKXtcIkFsdFwiIT1sLmtleSYmXCJDb250cm9sXCIhPWwua2V5JiZcIk1ldGFcIiE9bC5rZXkmJlwiU2hpZnRcIiE9bC5rZXl8fChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtem9vbS1rZXktcHJlc3NlZFwiKSx0aGlzLmhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZSgpLHRoaXMuYmxvY2tNb3VzZVdoZWVsWm9vbU5vdGljZSgpKX0uYmluZCh0aGlzKSksdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGZ1bmN0aW9uKGwpeyhsLmFsdEtleXx8bC5jdHJsS2V5fHxsLm1ldGFLZXl8fGwuc2hpZnRLZXkpJiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtem9vbS1rZXktcHJlc3NlZFwiKX0pLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ZnTWFwLWtleS1ldmVudHMtYWRkZWRcIikpcmV0dXJuITE7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWtleS1ldmVudHMtYWRkZWRcIiksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24obCl7XCJBbHRcIiE9bC5rZXkmJlwiQ29udHJvbFwiIT1sLmtleSYmXCJNZXRhXCIhPWwua2V5JiZcIlNoaWZ0XCIhPWwua2V5fHxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtem9vbS1rZXktcHJlc3NlZFwiKX0pfSxhLnByb3RvdHlwZS5tYXBQYXRocz17QUY6e2Q6XCJNMTM2OS45LDMzMy44aC01LjRsLTMuOC0wLjVsLTIuNSwyLjlsLTIuMSwwLjdsLTEuNSwxLjNsLTIuNi0yLjFsLTEtNS40bC0xLjYtMC4zdi0ybC0zLjItMS41bC0xLjcsMi4zbDAuMiwyLjYgbC0wLjYsMC45bC0zLjItMC4xbC0wLjksM2wtMi4xLTEuM2wtMy4zLDIuMWwtMS44LTAuOGwtNC4zLTEuNGgtMi45bC0xLjYtMC4ybC0yLjktMS43bC0wLjMsMi4zbC00LjEsMS4ybDAuMSw1LjJsLTIuNSwybC00LDAuOSBsLTAuNCwzbC0zLjksMC44bC01LjktMi40bC0wLjUsOGwtMC41LDQuN2wyLjUsMC45bC0xLjYsMy41bDIuNyw1LjFsMS4xLDRsNC4zLDEuMWwxLjEsNGwtMy45LDUuOGw5LjYsMy4ybDUuMy0wLjlsMy4zLDAuOGwwLjktMS40IGwzLjgsMC41bDYuNi0yLjZsLTAuOC01LjRsMi4zLTMuNmg0bDAuMi0xLjdsNC0wLjlsMi4xLDAuNmwxLjctMS44bC0xLjEtMy44bDEuNS0zLjhsMy0xLjZsLTMtNC4ybDUuMSwwLjJsMC45LTIuM2wtMC44LTIuNWwyLTIuNyBsLTEuNC0zLjJsLTEuOS0yLjhsMi40LTIuOGw1LjMtMS4zbDUuOC0wLjhsMi40LTEuMmwyLjgtMC43TDEzNjkuOSwzMzMuOEwxMzY5LjksMzMzLjh6XCJ9LEFMOntkOlwiTTEwNzcuNSwzMDAuNWwtMiwzLjFsMC41LDEuOWwwLDBsMSwxbC0wLjUsMS45bC0wLjEsNC4zbDAuNywzbDMsMi4xbDAuMiwxLjRsMSwwLjRsMi4xLTNsMC4xLTIuMWwxLjYtMC45VjMxMiBsLTIuMy0xLjZsLTAuOS0yLjZsMC40LTIuMWwwLDBsLTAuNS0yLjNsLTEuMy0wLjZsLTEuMy0xLjZsLTEuMywwLjVMMTA3Ny41LDMwMC41TDEwNzcuNSwzMDAuNXpcIn0sRFo6e2Q6XCJNMTAyMSwzMzYuOWwtMy42LDAuNGwtMi4yLTEuNWgtNS42bC00LjksMi42bC0yLjctMWwtOC43LDAuNWwtOC45LDEuMmwtNSwybC0zLjQsMi42bC01LjcsMS4ybC01LjEsMy41bDIsNC4xIGwwLjMsMy45bDEuOCw2LjdsMS40LDEuNGwtMSwyLjVsLTcsMWwtMi41LDIuNGwtMy4xLDAuNWwtMC4zLDQuN2wtNi4zLDIuNWwtMi4xLDMuMkw5NDQsMzgzbC01LjQsMWwtOC45LDQuN2wtMC4xLDcuNXYwLjRsLTAuMSwxLjIgbDIwLjMsMTUuNWwxOC40LDEzLjlsMTguNiwxMy44bDEuMywzbDMuNCwxLjhsMi42LDEuMWwwLjEsNGw2LjEtMC42bDcuOC0yLjhsMTUuOC0xMi41bDE4LjYtMTIuMmwtMi41LTRsLTQuMy0yLjlsLTIuNiwxLjJsLTItMy42IGwtMC4yLTIuN2wtMy40LTQuN2wyLjEtMi42bC0wLjUtNGwwLjYtMy41bC0wLjUtMi45bDAuOS01LjJsLTAuNC0zbC0xLjktNS42bC0yLjYtMTEuM2wtMy40LTIuNnYtMS41bC00LjUtMy44bC0wLjYtNC44bDMuMi0zLjYgbDEuMS01LjNsLTEtNi4yTDEwMjEsMzM2LjlMMTAyMSwzMzYuOXpcIn0sQUQ6e2Q6XCJNOTg1LjQsMzAxLjdsMC4yLTAuNGwtMC4yLTAuMmwtMC43LTAuMmwtMC4zLTAuMWwtMC40LDAuM2wtMC4xLDAuM2wwLjEsMC4xdjAuNGwwLjEsMC4yaDAuNEw5ODUuNCwzMDEuNyBMOTg1LjQsMzAxLjd6XCJ9LEFPOntkOlwiTTEwNjguMyw2MDkuNmwtMTYuNi0wLjFsLTEuOSwwLjdsLTEuNy0wLjFsLTIuMywwLjlsLTAuNSwxLjJsMi44LDRsMS4xLDQuM2wxLjYsNi4xbC0xLjcsMi42bC0wLjMsMS4zbDEuMywzLjggbDEuNSwzLjlsMS42LDIuMmwwLjMsMy42bC0wLjcsNC44bC0xLjgsMi44bC0zLjMsNC4ybC0xLjMsMi42bC0xLjksNS43bC0wLjMsMi43bC0yLDUuOWwtMC45LDUuNWwwLjUsNGwyLjctMS4ybDMuMy0xbDMuNiwwLjEgbDMuMiwyLjlsMC45LTAuNGwyMi41LTAuM2wzLjcsM2wxMy40LDAuOWwxMC4zLTIuNWwtMy41LTRsLTMuNi01LjJsMC44LTIwLjNsMTEuNiwwLjFsLTAuNS0yLjJsMC45LTIuNGwtMC45LTNsMC43LTNsLTAuNS0yIGwtMi42LTAuNGwtMy41LDFsLTIuNC0wLjJsLTEuNCwwLjZsMC41LTcuNmwtMS45LTIuM2wtMC4zLTRsMC45LTMuOGwtMS4yLTIuNHYtNGgtNi44bDAuNS0yLjNoLTIuOWwtMC4zLDEuMWwtMy40LDAuM2wtMS41LDMuNyBsLTAuOSwxLjZsLTMtMC45bC0xLjksMC45bC0zLjcsMC41bC0yLjEtMy4zbC0xLjMtMi4xbC0xLjYtMy44TDEwNjguMyw2MDkuNkwxMDY4LjMsNjA5LjZ6IE0xMDQ2LjUsNjA4LjNsMC4yLTIuN2wwLjktMS43bDItMS4zIGwtMi0yLjJsLTEuOCwxLjFsLTIuMiwyLjdsMS40LDQuOEwxMDQ2LjUsNjA4LjNMMTA0Ni41LDYwOC4zelwifSxBSTp7ZDpcIk02MjcuOSw0NTYuMmwwLjEtMC4ybC0wLjItMC4xbC0wLjgsMC41djAuMUw2MjcuOSw0NTYuMnpcIn0sQUc6e2Q6XCJNNjM0LjMsNDYzLjhsMC4yLTAuMXYtMC4xdi0wLjJsLTAuMS0wLjFsLTAuMS0wLjJsLTAuNC0wLjJsLTAuNSwwLjV2MC4ybDAuMSwwLjNsMC42LDAuMUw2MzQuMyw0NjMuOEw2MzQuMyw0NjMuOHogTTYzNC41LDQ2MC4zdi0wLjVsLTAuMS0wLjJoLTAuM2wtMC4xLTAuMWgtMC4xbC0wLjEsMC4xbDAuMSwwLjZsMC41LDAuM0w2MzQuNSw0NjAuM0w2MzQuNSw0NjAuM3pcIn0sQVI6e2Q6XCJNNjY5LjgsOTIwLjdsMC45LTNsLTcuMy0xLjVsLTcuNy0zLjZsLTQuMy00LjZsLTMtMi44bDUuOSwxMy41aDVsMi45LDAuMmwzLjMsMi4xTDY2OS44LDkyMC43TDY2OS44LDkyMC43eiBNNjE5LjQsNzEyLjZsLTcuNC0xLjVsLTQsNS43bDAuOSwxLjZsLTEuMSw2LjZsLTUuNiwzLjJsMS42LDEwLjZsLTAuOSwybDIsMi41bC0zLjIsNGwtMi42LDUuOWwtMC45LDUuOGwxLjcsNi4ybC0yLjEsNi41IGw0LjksMTAuOWwxLjYsMS4ybDEuMyw1LjlsLTEuNiw2LjJsMS40LDUuNGwtMi45LDQuM2wxLjUsNS45bDMuMyw2LjNsLTIuNSwyLjRsMC4zLDUuN2wwLjcsNi40bDMuMyw3LjZsLTEuNiwxLjJsMy42LDcuMWwzLjEsMi4zIGwtMC44LDIuNmwyLjgsMS4zbDEuMywyLjNsLTEuOCwxLjFsMS44LDMuN2wxLjEsOC4ybC0wLjcsNS4zbDEuOCwzLjJsLTAuMSwzLjlsLTIuNywyLjdsMy4xLDYuNmwyLjYsMi4ybDMuMS0wLjRsMS44LDQuNmwzLjUsMy42IGwxMiwwLjhsNC44LDAuOWwyLjIsMC40bC00LjctMy42bC00LjEtNi4zbDAuOS0yLjlsMy41LTIuNWwwLjUtNy4ybDQuNy0zLjVsLTAuMi01LjZsLTUuMi0xLjNsLTYuNC00LjVsLTAuMS00LjdsMi45LTMuMWw0LjctMC4xIGwwLjItMy4zbC0xLjItNi4xbDIuOS0zLjlsNC4xLTEuOWwtMi41LTMuMmwtMi4yLDJsLTQtMS45bC0yLjUtNi4ybDEuNS0xLjZsNS42LDIuM2w1LTAuOWwyLjUtMi4ybC0xLjgtMy4xbC0wLjEtNC44bC0yLTMuOCBsNS44LDAuNmwxMC4yLTEuM2w2LjktMy40bDMuMy04LjNsLTAuMy0zLjJsLTMuOS0yLjhsLTAuMS00LjVsLTcuOC01LjVsLTAuMy0zLjNsLTAuNC00LjJsMC45LTEuNGwtMS4xLTYuM2wwLjMtNi41bDAuNS01LjEgbDUuOS04LjZsNS4zLTYuMmwzLjMtMi42bDQuMi0zLjVsLTAuNS01LjFsLTMuMS0zLjdsLTIuNiwxLjJsLTAuMyw1LjdsLTQuMyw0LjhsLTQuMiwxLjFsLTYuMi0xbC01LjctMS44bDQuMi05LjZsLTEuMS0yLjggbC01LjktMi41bC03LjItNC43bC00LjYtMUw2MzIsNzEzLjdsLTEtMS4zbC02LjMtMC4zbC0xLjYsNS4xTDYxOS40LDcxMi42TDYxOS40LDcxMi42elwifSxBTTp7ZDpcIk0xMjE5LDMyNS4xbC0wLjktNC40bC0yLjUtMS4xbC0yLjUtMS43bDEtMmwtMy4xLTIuMmwwLjctMS41bC0yLjItMS4xbC0xLjQtMS43bC02LjksMWwxLjMsMi4ydjMuMWw0LjIsMS41IGwyLjQsMS45bDEtMC4ybDEuOCwxLjdoMi4zbDAuMiwxbDIuOCwzLjdMMTIxOSwzMjUuMUwxMjE5LDMyNS4xelwifSxBVzp7ZDpcIk01ODYuNiw0OTIuOWwtMC4xLTAuMWwtMC4zLTAuNmwtMC4zLTAuM2wtMC4xLDAuMWwtMC4xLDAuM2wwLjMsMC4zbDAuMywwLjRsMC4zLDAuMUw1ODYuNiw0OTIuOUw1ODYuNiw0OTIuOXpcIn0sQVU6e2Q6XCJNMTcyNi43LDgzMmwtMy0wLjVsLTEuOSwyLjlsLTAuNiw1LjRsLTIuMSw0bC0wLjUsNS4zbDMsMC4ybDAuOCwwLjNsNi42LTQuM2wwLjYsMS43bDQtNC45bDMuMi0yLjJsNC41LTcuMyBsLTIuOC0wLjVsLTQuOCwxLjJsLTMuNCwwLjlMMTcyNi43LDgzMkwxNzI2LjcsODMyeiBNMTc3Ni44LDY1OS43bDAuNS0yLjNsMC4xLTMuNmwtMS42LTMuMmwwLjEtMi43bC0xLjMtMC44bDAuMS0zLjlsLTEuMi0zLjIgbC0yLjMsMi40bC0wLjQsMS44bC0xLjUsMy41bC0xLjgsMy40bDAuNiwyLjFsLTEuMiwxLjNsLTEuNSw0LjhsMC4xLDMuN2wtMC43LDEuOGwwLjMsMy4xbC0yLjYsNWwtMS4zLDMuNWwtMS43LDIuOWwtMS43LDMuNCBsLTQuMSwyLjFsLTQuOS0yLjFsLTAuNS0ybC0yLjUtMS42aC0xLjZsLTMuMy0zLjhsLTIuNS0yLjJsLTMuOS0ybC0zLjktMy41bC0wLjEtMS44bDIuNS0zLjFsMi4xLTMuMmwtMC4zLTIuNmwxLjktMC4ybDIuNS0yLjUgbDItMy40bC0yLjItMy4ybC0xLjUsMS4ybC0yLTAuNWwtMy41LDEuOGwtMy4yLTJsLTEuNywwLjdsLTQuNS0xLjZsLTIuNy0yLjdsLTMuNS0xLjVsLTMuMSwwLjlsMy45LDIuMWwtMC4zLDMuMmwtNC44LDEuMmwtMi44LTAuNyBsLTMuNiwyLjJsLTIuOSwzLjdsMC42LDEuNWwtMi43LDEuN2wtMy40LDUuMWwwLjYsMy41bC0zLjQtMC42aC0zLjVsLTIuNS0zLjhsLTMuNy0yLjlsLTIuOCwwLjhsLTIuNiwwLjlsLTAuMywxLjZsLTIuNC0wLjcgbC0wLjMsMS44bC0zLDEuMWwtMS43LDIuNWwtMy41LDMuMWwtMS40LDQuOGwtMi4zLTEuM2wtMi4yLDMuMWwxLjUsM2wtMi42LDEuMmwtMS40LTUuNWwtNC44LDUuNGwtMC44LDMuNWwtMC43LDIuNWwtMy44LDMuMyBsLTIsMy40bC0zLjUsMi44bC02LjEsMS45bC0zLjEtMC4ybC0xLjUsMC42bC0xLjEsMS40bC0zLjUsMC43bC00LjcsMi40bC0xLjQtMC44bC0yLjYsMC41bC00LjYsMi4zbC0zLjIsMi43bC00LjgsMi4xbC0zLjEsNC40IGwwLjQtNC44bC0zLjEsNC42bC0wLjEsMy43bC0xLjMsMy4ybC0xLjUsMS41bC0xLjMsMy43bDAuOSwxLjlsMC4xLDJsMS42LDVsLTAuNywzLjNsLTEtMi41bC0yLjMtMS44bDAuNCw1LjlsLTEuNy0yLjhsMC4xLDIuOCBsMS44LDVsLTAuNiw1bDEuNywyLjVsLTAuNCwxLjlsMC45LDQuMWwtMS4zLDMuNmwtMC4zLDMuNmwwLjcsNi41bC0wLjcsMy43bC0yLjIsNC40bC0wLjYsMi4zbC0xLjUsMS41bC0yLjksMC44bC0xLjUsMy43bDIuNCwxLjIgbDQsNC4xaDMuNmwzLjgsMC4zbDMuMy0yLjFsMy40LTEuOGwxLjQsMC4zbDQuNS0zLjRsMy44LTAuM2w0LjEtMC43bDQuMiwxLjJsMy42LTAuNmw0LjYtMC4ybDMtMi42bDIuMy0zLjNsNS4yLTEuNWw2LjktMy4ybDUsMC40IGw2LjktMi4xbDcuOC0yLjNsOS44LTAuNmw0LDMuMWwzLjcsMC4ybDUuMywzLjhsLTEuNiwxLjVsMS44LDIuNGwxLjMsNC42bC0xLjYsMy40bDIuOSwyLjZsNC4zLTUuMWw0LjMtMi4xbDYuNy01LjVsLTEuNiw0LjcgbC0zLjQsMy4ybC0yLjUsMy43bC00LjQsMy41bDUuMi0xLjJsNC43LTQuNGwtMC45LDQuOGwtMy4yLDMuMWw0LjcsMC44bDEuMywyLjZsLTAuNCwzLjNsLTEuNSw0LjlsMS40LDRsNCwxLjlsMi44LDAuNGwyLjQsMSBsMy41LDEuOGw3LjItNC43bDMuNS0xLjJsLTIuNywzLjRsMi42LDEuMWwyLjcsMi44bDQuNy0yLjdsMy44LTIuNWw2LjMtMi43bDYtMC4ybDQuMi0yLjNsMC45LTJsMy00LjVsMy45LTQuOGwzLjYtMy4ybDQuNC01LjYgbDMuMy0zLjFsNC40LTVsNS40LTMuMWw1LTUuOGwzLjEtNC41bDEuNC0zLjZsMy44LTUuN2wyLjEtMi45bDIuNS01LjdsLTAuNy01LjRsMS43LTMuOWwxLjEtMy43di01LjFsLTIuOC01LjFsLTEuOS0yLjVsLTIuOS0zLjkgbDAuNy02LjdsLTEuNSwxbC0xLjYtMi44bC0yLjUsMS40bC0wLjYtNi45bC0yLjItNGwxLTEuNWwtMy4xLTIuOGwtMy4yLTNsLTUuMy0zLjNsLTAuOS00LjNsMS4zLTMuM2wtMC40LTUuNWwtMS4zLTAuN2wtMC4yLTMuMiBsLTAuMi01LjVsMS4xLTIuOGwtMi4zLTIuNWwtMS40LTIuN2wtMy45LDIuNEwxNzc2LjgsNjU5LjdMMTc3Ni44LDY1OS43elwifSxBVDp7ZDpcIk0xMDYwLjIsMjY0bC0yLjMtMS4ybC0yLjMsMC4zbC00LTEuOWwtMS43LDAuNWwtMi42LDIuNWwtMy44LTJsLTEuNSwyLjlsLTEuNywwLjhsMSw0bC0wLjQsMS4xbC0xLjctMS4zbC0yLjQtMC4yIGwtMy40LDEuMmwtNC40LTAuM2wtMC42LDEuNmwtMi42LTEuN2wtMS41LDAuM2wwLjIsMS4xbC0wLjcsMS42bDIuMywxLjFsMi42LDAuMmwzLjEsMC45bDAuNS0xLjJsNC44LTEuMWwxLjMsMi4ybDcuMiwxLjZsNC4yLDAuNCBsMi40LTEuNGw0LjMtMC4xbDAuOS0xLjFsMS4zLTRsLTEuMS0xLjNoMi44bDAuMi0yLjZsLTAuNy0yLjFMMTA2MC4yLDI2NEwxMDYwLjIsMjY0elwifSxBWjp7ZDpcIk0xMjEwLjEsMzE4LjlsLTEsMC4ybDEuMiwyLjRsMy4yLDIuOWwzLjcsMC45bC0yLjgtMy43bC0wLjItMWgtMi4zTDEyMTAuMSwzMTguOUwxMjEwLjEsMzE4Ljl6IE0xMjIwLjUsMzA5LjYgbC00LjMtMy44bC0xLjUtMC4ybC0xLjEsMC45bDMuMiwzLjRsLTAuNiwwLjdsLTIuOC0wLjRsLTQuMi0xLjhsLTEuMSwxbDEuNCwxLjdsMi4yLDEuMWwtMC43LDEuNWwzLjEsMi4ybC0xLDJsMi41LDEuN2wyLjUsMS4xIGwwLjksNC40bDUuMy00LjdsMS45LTAuNWwxLjksMS45bC0xLjIsMy4xbDMuOCwzLjRsMS4zLTAuM2wtMC44LTMuMmwxLjctMS41bDAuNC0yLjJsLTAuMS01bDQuMi0wLjVsLTItMS43bC0yLjUtMC4ybC0zLjUtNC41IGwtMy40LTMuMmwwLDBsLTIuNiwyLjVsLTAuNSwxLjVMMTIyMC41LDMwOS42TDEyMjAuNSwzMDkuNnpcIn0sQlM6e2Q6XCJNNTc0LjQsNDM3LjNsMC4yLTAuNmwtMC4zLTAuMWwtMC41LDAuN2wtMC42LDAuM2gtMC4zbC0wLjctMC4zaC0wLjVsLTAuNCwwLjVsLTAuNiwwLjFsMC4xLDAuMXYwLjJsLTAuMiwwLjN2MC4yIGwwLjEsMC4zbDEuNS0wLjFsMS4zLTAuMmwwLjctMC45TDU3NC40LDQzNy4zeiBNNTc1LjIsNDM1LjNsLTAuNC0wLjNsLTAuNCwwLjNsMC4xLDAuM0w1NzUuMiw0MzUuM0w1NzUuMiw0MzUuM3ogTTU3NS4yLDQyOS41IGwtMC40LTAuMmwtMC4zLDAuNWwwLjMsMC4xbDAuNy0wLjFsMC41LDAuMWwwLjUsMC40bDAuMy0wLjJsLTAuMS0wLjFsLTAuNC0wLjNsLTAuNi0wLjFoLTAuMkw1NzUuMiw0MjkuNUw1NzUuMiw0MjkuNXogTTU2OC42LDQzMC44bDAuNy0wLjZsMC43LTAuM2wwLjktMS4xbC0wLjEtMC45bDAuMi0wLjRsLTAuNiwwLjFsLTAuMSwwLjNsLTAuMSwwLjNsMC4zLDAuNHYwLjJsLTAuMiwwLjRsLTAuMywwLjFsLTAuMSwwLjIgbC0wLjMsMC4xbC0wLjQsMC41bC0wLjgsMC42bC0wLjIsMC4zTDU2OC42LDQzMC44TDU2OC42LDQzMC44eiBNNTY5LjgsNDI3LjZsLTAuNi0wLjJMNTY5LDQyN2wtMC40LTAuMWwtMC4xLDAuMnYwLjJsMC4xLDAuNCBsMC4yLTAuMWwwLjgsMC40bDAuNC0wLjNMNTY5LjgsNDI3LjZ6IE01NjUuNyw0MjYuNXYtMC43bC0wLjQtMC41bC0wLjYtMC40bC0wLjEtMS4ybC0wLjMtMC43bC0wLjItMC42bC0wLjQtMC44djAuNWwwLjEsMC4xIGwwLjEsMC42bDAuNCwwLjlsMC4xLDAuNGwtMC4xLDAuNGwtMC40LDAuMWwtMC4xLDAuMmwwLjUsMC4zbDAuOCwwLjNsMC41LDEuM0w1NjUuNyw0MjYuNUw1NjUuNyw0MjYuNXogTTU2MS42LDQyM2wtMC41LTAuMyBsLTAuMi0wLjNsLTAuNy0wLjdsLTAuMy0wLjFsLTAuMiwwLjRsMC40LDAuMWwwLjksMC43bDAuNCwwLjJMNTYxLjYsNDIzTDU2MS42LDQyM3ogTTU2OC45LDQxOWwtMC4xLTAuM2gtMC4xbC0wLjMsMC4xbC0wLjMsMC45IGgwLjNMNTY4LjksNDE5TDU2OC45LDQxOXogTTU1MS4zLDQxNy45bC0wLjItMC4zbC0wLjMsMC4yaC0wLjVsLTAuMiwwLjFoLTAuNGwtMC4zLDAuMmwwLjQsMC44bDAuMywwLjNsMC4xLDFsMC4yLDAuMWwtMC4xLDAuNyBsMS4xLDAuMWwwLjQtMC44VjQyMHYtMC4xdi0wLjJ2LTAuMnYtMC45bC0wLjMtMC41bC0wLjQsMC42bC0wLjQtMC4zbDAuNi0wLjRMNTUxLjMsNDE3LjlMNTUxLjMsNDE3Ljl6IE01NjQuMiw0MTguMmwtMS0xLjR2LTAuMiBsLTAuNS0xLjVsLTAuMy0wLjFsLTAuMSwwLjFsLTAuMSwwLjJsMC40LDAuNHYwLjRsMC4zLDAuMmwwLjQsMS4xbDAuNCwwLjRsLTAuMSwwLjNsLTAuNCwwLjNsLTAuMSwwLjJoMC4xbDAuNi0wLjFoMC40TDU2NC4yLDQxOC4yIEw1NjQuMiw0MTguMnogTTU1My43LDQxM2wwLjUtMC4ybDAsMGwtMC4zLTAuMmgtMC43bC0wLjQsMC4xbC0wLjIsMC4ybDAuMSwwLjFsMC40LDAuMUw1NTMuNyw0MTNMNTUzLjcsNDEzeiBNNTUxLjMsNDE1bC0wLjUtMC42IGwtMC4zLTAuOWwtMC4yLTAuNGwwLjEtMC41bC0wLjMtMC40bC0wLjYtMC40bC0wLjMsMC4xbDAuMSwxLjFsLTAuMiwwLjZsLTAuOCwxLjFsMC4xLDAuNGwwLDBsMC4xLDAuMmwtMC41LDAuNHYtMC4zbC0wLjYsMC4xIGwwLjMsMC41bDAuNiwwLjRsMC4zLDAuMWwwLjMtMC4ydjAuNWwwLjMsMC40bDAuMSwwLjRsMC4zLTAuM2wwLjYtMC4ybDAuMi0wLjJsMC43LTAuNHYtMC4ybDAuMS0wLjZMNTUxLjMsNDE1TDU1MS4zLDQxNXogTTU1OCw0MTAgbC0wLjMtMC41bC0wLjEsMC4xbC0wLjEsMC40bC0wLjMsMC40bDAuNS0wLjFsMC40LDAuMWwwLjYsMC41bDAuNywwLjJsMC4zLDAuNmwwLjYsMC42djAuNmwtMC40LDAuNmwtMC4xLDAuN2wtMC42LDAuMWwwLjEsMC4xIGwwLjMsMC4zbDAuMSwwLjRsMC4yLDAuMnYtMC43bDAuMy0wLjhsMC40LTEuM2wtMC4xLTAuM2wtMC4zLTAuM2wtMC43LTAuOWwtMC43LTAuM0w1NTgsNDEwTDU1OCw0MTB6IE01NDkuMiw0MDIuMWwtMC41LTAuNCBsLTAuMiwwLjR2MC4xbC0wLjEsMC4zbC0wLjUsMC40bC0wLjUsMC4xbC0wLjctMC42bC0wLjItMC4xbDAuOCwxLjFsMC4zLDAuMWgwLjRsMC45LTAuM2wxLjYtMC41bDEuNy0wLjJsMC4xLTAuMmwtMC4xLTAuMyBsLTAuOCwwLjJsLTEtMC4xbC0wLjIsMC4yaC0wLjRMNTQ5LjIsNDAyLjF6IE01NTUuMyw0MDcuM2wwLjItMC4zbDAuNC0xLjhsMC44LTAuNmwwLjEtMS4ybC0wLjUtMC41bC0wLjQtMC4ybC0wLjEtMC4ybDAuMS0wLjIgbC0wLjItMC4xbC0wLjMtMC4ybC0wLjQtMC42bC0wLjQtMC40bC0wLjctMC4xbC0wLjYtMC4xbC0wLjQtMC4xbC0wLjUsMC4zaDAuOGwxLjUsMC4zbDAuNywxLjVsMC41LDAuNGwwLjEsMC40bC0wLjIsMC40djAuNCBsLTAuMywwLjVsLTAuMSwwLjhsLTAuMywwLjRsLTAuNywwLjVsMC40LDAuMmwwLjMsMC42TDU1NS4zLDQwNy4zTDU1NS4zLDQwNy4zelwifSxCSDp7ZDpcIk0xMjUzLDQwOC4zbDAuNy0zbC0wLjUtMC45bC0xLjYsMS4ybDAuNiwwLjlsLTAuMiwwLjdMMTI1Myw0MDguM3pcIn0sQkQ6e2Q6XCJNMTQ4Ni41LDQzMS45bC00LjUtMTAuMWwtMS41LDAuMWwtMC4yLDRsLTMuNS0zLjNsMS4xLTMuNmwyLjQtMC40bDEuNi01LjNsLTMuNC0xLjFsLTUsMC4xbC01LjQtMC45bC0xLjItNC40IGwtMi43LTAuNGwtNC44LTIuN2wtMS4yLDQuM2w0LjYsMy40bC0zLjEsMi40bC0wLjgsMi4zbDMuNywxLjdsLTAuNCwzLjhsMi42LDQuOGwxLjYsNS4ybDIuMiwwLjZsMS43LDAuN2wwLjYtMS4ybDIuNSwxLjNsMS4zLTMuNSBsLTAuOS0yLjZsNS4xLDAuMmwyLjgsMy43bDEuNSwzLjFsMC44LDMuMmwyLDMuM2wtMS4xLTUuMWwyLjEsMUwxNDg2LjUsNDMxLjlMMTQ4Ni41LDQzMS45elwifSxCQjp7ZDpcIk02NDQuOSw0ODguOWwwLjQtMC40bC0wLjMtMC4zbC0wLjYtMC44bC0wLjMsMC4xdjFsMC4xLDAuM2wwLjUsMC4zTDY0NC45LDQ4OC45TDY0NC45LDQ4OC45elwifSxCWTp7ZDpcIk0xMTEyLjgsMjE5LjRsLTUuMi0xLjVsLTQuNiwyLjNsLTIuNiwxbDAuOSwyLjZsLTMuNSwybC0wLjUsMy40bC00LjgsMi4yaC00LjZsMC42LDIuN2wxLjcsMi4zbDAuMywyLjRsLTIuNywxLjIgbDEuOSwyLjlsMC41LDIuN2wyLjItMC4zbDIuNC0xLjZsMy43LTAuMmw1LDAuNWw1LjYsMS41bDMuOCwwLjFsMiwwLjlsMS42LTEuMWwxLjUsMS41bDQuMy0wLjNsMiwwLjZsLTAuMi0zLjFsMS4yLTEuNGw0LjEtMC4zbDAsMCBsLTItMy45bC0xLjUtMmwwLjgtMC42bDMuOSwwLjJsMS42LTEuM2wtMS43LTEuNmwtMy40LTEuMWwwLjEtMS4xbC0yLjItMS4xbC0zLjctMy45bDAuNi0xLjZsLTEtMi45bC00LjgtMS40bC0yLjMsMC43IEwxMTEyLjgsMjE5LjRMMTExMi44LDIxOS40elwifSxCRTp7ZDpcIk0xMDAwLjcsMjQ2LjJsLTQuNCwxLjNsLTMuNi0wLjVsMCwwbC0zLjgsMS4ybDAuNywyLjJsMi4yLDAuMWwyLjQsMi40bDMuNCwyLjlsMi41LTAuNGw0LjQsMi44bDAuNC0zLjVsMS4zLTAuMiBsMC40LTQuMmwtMi44LTEuNEwxMDAwLjcsMjQ2LjJMMTAwMC43LDI0Ni4yelwifSxCWjp7ZDpcIk00ODIuNSw0NzEuMWwxLjQtMi4ybDEtMC4ybDEuMy0xLjdsMS0zLjJsLTAuMy0wLjZsMC45LTIuM2wtMC40LTFsMS4zLTIuN2wwLjMtMS44aC0xLjFsMC4xLTAuOWgtMWwtMi41LDMuOSBsLTAuOS0wLjhsLTAuNywwLjNsLTAuMSwxbC0wLjcsNWwtMS4yLDcuMkw0ODIuNSw0NzEuMUw0ODIuNSw0NzEuMXpcIn0sQko6e2Q6XCJNOTk2LjksNDk4bC00LjMtMy43aC0ybC0xLjksMS45bC0xLjIsMS45bC0yLjcsMC42bC0xLjIsMi44bC0xLjksMC43bC0wLjcsMy4zbDEuNywxLjlsMiwyLjNsMC4yLDMuMWwxLjEsMS4zIGwtMC4yLDE0LjZsMS40LDQuNGw0LjYtMC44bDAuMy0xMC4yTDk5Miw1MThsMS00bDEuNy0xLjlsMi43LTRsLTAuNi0xLjdsMS4xLTIuNWwtMS4yLTMuOEw5OTYuOSw0OThMOTk2LjksNDk4elwifSxCTTp7ZDpcIk02MzAuMiwzNjYuOGwwLjQtMC42aC0wLjFsLTAuNSwwLjVsLTAuNiwwLjJsMC4xLDAuMWgwLjFMNjMwLjIsMzY2Ljh6XCJ9LEJUOntkOlwiTTE0NzQuNywzOTUuNWwtMi43LTEuOGwtMi45LTAuMWwtNC4yLTEuNWwtMi42LDEuNmwtMi42LDQuOGwwLjMsMS4ybDUuNSwyLjVsMy4yLTFsNC43LDAuNGw0LjQtMC4ybC0wLjQtMy45IEwxNDc0LjcsMzk1LjVMMTQ3NC43LDM5NS41elwifSxCTzp7ZDpcIk02NTUuNyw3MDAuNWwxLjYtMS4zbC0wLjgtMy42bDEuMy0yLjhsMC41LTVsLTEuNi00bC0zLjItMS43bC0wLjgtMi42bDAuNi0zLjZsLTEwLjctMC4zbC0yLjctNy40bDEuNi0wLjEgbC0wLjMtMi44bC0xLjItMS44bC0wLjUtMy43bC0zLjMtMS45bC0zLjUsMC4xbC0yLjUtMS45bC0zLjgtMS4ybC0yLjQtMi40bC02LjMtMWwtNi40LTUuN2wwLjMtNC4zbC0wLjktMi41bDAuNC00LjdsLTcuMywxLjEgbC0yLjgsMi4zbC00LjgsMi42bC0xLjEsMS45bC0yLjksMC4ybC00LjItMC42bDUuNSwxMC4zbC0xLjEsMi4xbDAuMSw0LjVsMC4zLDUuNGwtMS45LDMuMmwxLjIsMi40bC0xLjEsMi4xbDIuOCw1LjNMNTkxLDY4NCBsMy4xLDQuM2wxLjIsNC42bDMuMiwyLjdsLTEuMSw2LjJsMy43LDcuMWwzLjEsOC44bDMuOC0wLjlsNC01LjdsNy40LDEuNWwzLjcsNC42bDEuNi01LjFsNi4zLDAuM2wxLDEuM2wxLjUtNy42bC0wLjItMy40bDIuMS01LjYgbDkuNS0xLjlsNS4xLDAuMWw1LjQsMy4zTDY1NS43LDcwMC41TDY1NS43LDcwMC41elwifSxCQTp7ZDpcIk0xMDYyLjIsMjg0LjlsLTIuMywwLjFsLTEsMS4zbC0xLjktMS40bC0wLjksMi41bDIuNywyLjlsMS4zLDEuOWwyLjUsMi4zbDIsMS40bDIuMiwyLjVsNC43LDIuNGwwLjQtMy40bDEuNS0xLjQgbDAuOS0wLjZsMS4yLTAuM2wwLjUtMi45bC0yLjctMi4zbDEtMi43aC0xLjhsMCwwbC0yLjQtMS40bC0zLjUsMC4xTDEwNjIuMiwyODQuOUwxMDYyLjIsMjg0Ljl6XCJ9LEJXOntkOlwiTTExMTYuNyw2ODVsLTEtMC41bC0zLjIsMS41aC0xLjZsLTMuNywyLjVsLTItMi42bC04LjYsMi4ybC00LjEsMC4ybC0wLjksMjIuN2wtNS40LDAuMmwtMC42LDE4LjVsMS40LDFsMyw2LjEgbC0wLjcsMy44bDEuMSwyLjNsNC0wLjdsMi44LTIuOGwyLjctMS45bDEuNS0zLjFsMi43LTEuNWwyLjMsMC44bDIuNSwxLjhsNC40LDAuM2wzLjYtMS41bDAuNi0ybDEuMi0zbDMtMC41bDEuNy0yLjRsMi00LjNsNS4yLTQuNyBsOC00LjdsLTMuNC0yLjlsLTQuMi0wLjlsLTEuNS00LjFsMC4xLTIuMmwtMi4zLTAuN2wtNi03bC0xLjYtMy43bC0xLjEtMS4xTDExMTYuNyw2ODVMMTExNi43LDY4NXpcIn0sQlI6e2Q6XCJNNjU5LDU2MC4xbC0xLjQsMC4ybC0zLjEtMC41bC0xLjgsMS43bC0yLjYsMS4xbC0xLjcsMC4ybC0wLjcsMS4zbC0yLjctMC4zbC0zLjUtM2wtMC4zLTIuOWwtMS40LTMuM2wxLTUuNCBsMS42LTIuMmwtMS4yLTNsLTEuOS0wLjlsMC44LTIuOGwtMS4zLTEuNWwtMi45LDAuM2wwLjcsMS44bC0yLjEsMi40bC02LjQsMi40bC00LDFsLTEuNywxLjVsLTQuNC0xLjZsLTQuMi0wLjhsLTEsMC42bDIuNCwxLjYgbC0wLjMsNC4zbDAuNyw0bDQuOCwwLjVsMC4zLDEuNGwtNC4xLDEuOGwtMC43LDIuN2wtMi4zLDFsLTQuMiwxLjVsLTEuMSwxLjlsLTQuNCwwLjVsLTMtMy40bC0xLjEsMC44bC0xLTMuOGwtMS42LTJsLTEuOSwyLjIgbC0xMC45LTAuMXYzLjlsMy4zLDAuN2wtMC4yLDIuNGwtMS4xLTAuNmwtMy4yLDF2NC42bDIuNSwyLjRsMC45LDMuNmwtMC4xLDIuOGwtMi4yLDE3LjRsLTUuMS0wLjNsLTAuNywxbC00LjYsMS4ybC02LjIsNC4zbC0wLjQsMyBsLTEuMywyLjJsMC43LDMuNGwtMy4zLDEuOWwwLjEsMi43TDU2Miw2MjBsMi42LDUuOGwzLjMsMy44bC0xLDIuOGwzLjcsMC4zbDIuMywzLjRsNC45LDAuMmw0LjQtMy44bDAuMiw5LjdsMi42LDAuN2wzLTEuMWw0LjIsMC42IGwyLjktMC4ybDEuMS0xLjlsNC44LTIuNmwyLjgtMi4zbDcuMy0xLjFsLTAuNCw0LjdsMC45LDIuNWwtMC4zLDQuM2w2LjQsNS43bDYuMywxbDIuNCwyLjRsMy44LDEuMmwyLjUsMS45bDMuNS0wLjFsMy4zLDEuOSBsMC41LDMuN2wxLjIsMS44bDAuMywyLjhsLTEuNiwwLjFsMi43LDcuNGwxMC43LDAuM2wtMC42LDMuNmwwLjgsMi42bDMuMiwxLjdsMS42LDRsLTAuNSw1bC0xLjMsMi44bDAuOCwzLjZsLTEuNiwxLjNsMS45LDMuNiBsMC40LDguNmw2LDEuMmwyLjEtMS4ybDMuOSwxLjdsMS4yLDEuOWwxLDUuOGwwLjksMi41bDIsMC4zbDItMS4xbDIuMSwxLjJsMC4zLDMuNWwtMC4zLDMuOGwtMC43LDMuNmwyLjYtMS4ybDMuMSwzLjdsMC41LDUuMSBsLTQuMiwzLjVsLTMuMywyLjZsLTUuMyw2LjJsLTUuOSw4LjZsMy40LTAuN2w2LjIsNC45bDEuOS0wLjJsNi4yLDQuMWw0LjgsMy41bDMuOCw0LjNsLTEuOSwzbDIuMSwzLjdsMi45LTMuN2wxLjUtNmwzLjItM2wzLjktNSBsNC41LTExLjJsMy40LTMuNWwwLjgtMy4xbDAuMy02LjRsLTEuMy0zLjVsMC4zLTQuOGw0LjEtNi4zbDYtNS4xbDYtMS44bDMuNi0yLjlsOC41LTIuNGg1LjlsMS4xLTMuOGw0LjItMi44bDAuNi02LjVsNS4xLTguMyBsMC41LTguNWwxLjYtMi42bDAuMy00LjFsMS4xLTkuOWwtMS0xMS45bDEuNC00LjdsMS40LTAuMWwzLjktNS41bDMuMy03LjJsNy43LTguOGwyLjctNC4ybDItMTAuNWwtMS0zLjlsLTItOC4xbC0yLjEtMmwtNC44LTAuMiBsLTQuMy0xLjlsLTcuMy03LjFsLTguNC01LjNsLTguNCwwLjNsLTEwLjktMy40bC02LjUsMmwwLjgtMy41bC0yLjctMy44bC05LjQtMy44bC03LjEtMi4zbC00LjIsNC4xbC0wLjMtNi4zbC05LjktMWwtMS43LTIgbDQuMi01LjJsLTAuMS00LjRsLTMtMWwtMy0xMS4ybC0xLjMtMy41bC0xLjksMC4zbC0zLjUsNS44bC0xLjgsNC43bC0yLjEsMi40bC0yLjcsMC41bC0wLjgtMS44bC0xLjItMC4zbC0xLjgsMS44bC0yLjQtMS4zIGwtMy4yLTEuNGwtMi43LDAuN2wtMi4zLTAuNmwtMC41LDEuOGwwLjksMS4zbC0wLjUsMS4zTDY1OSw1NjAuMUw2NTksNTYwLjF6XCJ9LFZHOntkOlwiTTYxOS4yLDQ1NS4xbDAuMy0wLjJsLTAuMi0wLjFoLTAuNGwtMC4zLDAuMmwwLjEsMC4xSDYxOS4yTDYxOS4yLDQ1NS4xeiBNNjIwLjMsNDU0LjdsMC40LTAuNGwtMC41LDAuMWwtMC4yLDAuMiBsMC4xLDAuMWgwLjFMNjIwLjMsNDU0LjdMNjIwLjMsNDU0Ljd6IE02MjEuMSw0NTIuOWgtMC4yaC0wLjVsMCwwbDAuMSwwLjFoMC4zbDAuMywwLjFsMCwwTDYyMS4xLDQ1Mi45TDYyMS4xLDQ1Mi45elwifSxCTjp7ZDpcIk0xNjE3LjgsNTQzLjRsMi43LDMuM2wxLjEtMi4ybDIuNywwLjJsMC4xLTQuMWwwLjEtMy4xbC00LjYsMy41TDE2MTcuOCw1NDMuNEwxNjE3LjgsNTQzLjR6XCJ9LEJHOntkOlwiTTExMjEuNiwyOTQuM2wtMy0wLjdsLTQtMi4ybC01LjgsMS40bC0yLjMsMS42bC03LjUtMC4zbC00LTFsLTEuOSwwLjVsLTEuOC0yLjZsLTEuMSwxLjRsMC43LDIuM2wyLjgsMi42bC0xLjcsMS45IGwtMC43LDJsMC42LDAuN2wtMC43LDAuOWwyLjgsMmwwLjgsNC4xbDMuOCwwLjJsMy45LTEuN2wzLjksMi4xbDQuNi0wLjZsLTAuMy0zbDUtMmw0LjUsMC44bC0yLjEtMy41bDEuMy00LjRMMTEyMS42LDI5NC4zIEwxMTIxLjYsMjk0LjN6XCJ9LEJGOntkOlwiTTk3OC44LDQ3Ny4yaC0zLjZsLTEuNC0xLjJsLTMsMC45bC01LjIsMi42bC0xLjEsMmwtNC4zLDIuOWwtMC44LDEuNmwtMi4zLDEuM2wtMi43LTAuOWwtMS42LDEuNmwtMC44LDQuNCBsLTQuNSw1LjJsMC4yLDIuMmwtMS42LDIuN2wwLjQsMy43bDIuNSwxLjRsMSwyLjFsMi41LDEuM2wxLjktMS42bDIuNy0wLjJsMy44LDEuNmwtMC44LTQuOGwwLjItMy42bDkuNy0wLjNsMi40LDAuNWwxLjgtMWwyLjYsMC41IGw0LjksMC4xbDEuOS0wLjdsMS4yLTIuOGwyLjctMC42bDEuMi0xLjlsMC4xLTQuNGwtNi40LTEuNGwtMC4yLTMuMWwtMy4xLTQuMWwtMC44LTIuOUw5NzguOCw0NzcuMkw5NzguOCw0NzcuMnpcIn0sQkk6e2Q6XCJNMTE0OC4yLDU5MGwtMC4zLTIuNWwwLDBsLTMtMC40bC0xLjcsMy42bC0zLjUtMC41bDEuNCwyLjlsMC4xLDEuMWwyLDYuMWwtMC4xLDAuM2wwLjYtMC4xbDIuMS0yLjNsMi4yLTMuMyBsMS40LTEuNHYtMkwxMTQ4LjIsNTkwTDExNDguMiw1OTB6XCJ9LEtIOntkOlwiTTE1NzQuOCw0ODEuOGwtNS4yLTIuM2wtMiw0LjNsLTQuOS0yLjRsLTUuMy0xbC03LjEsMS4zbC0zLDUuMmwyLjEsNy43bDMuNCw2LjZsMi42LDMuM2w0LjcsMC45bDQuNy0yLjVsNS44LTAuNSBsLTIuOC0zLjhsOC45LTQuOWwtMC4xLTcuN0wxNTc0LjgsNDgxLjhMMTU3NC44LDQ4MS44elwifSxDTTp7ZDpcIk0xMDYwLjEsNTAyLjlsMC4yLTQuM2wtMC41LTQuMmwtMi4yLTQuMWwtMS42LDAuNGwtMC4yLDJsMi4zLDIuNmwtMC42LDEuMWwtMC4zLDIuMWwtNC42LDVsLTEuNSw0bC0wLjcsMy4zIGwtMS4yLDEuNGwtMS4xLDQuNWwtMywyLjZsLTAuOCwzLjJsLTEuMiwyLjZsLTAuNSwyLjZsLTMuOSwyLjJsLTMuMi0yLjZsLTIuMSwwLjFsLTMuMywzLjdsLTEuNiwwLjFsLTIuNyw2LjFsLTEuNCw0LjV2MS44bDEuNCwwLjkgbDEuMSwyLjhsMi42LDEuMWwyLjIsNC4ybC0wLjgsNWw5LjIsMC4ybDIuNi0wLjRsMy40LDAuOGwzLjQtMC44bDAuNywwLjNsNy4xLDAuM2w0LjUsMS43bDQuNSwxLjVsMC40LTMuNWwtMC42LTEuOGwtMC4zLTIuOSBsLTIuNi0yLjFsLTIuMS0zLjJsLTAuNS0yLjNsLTIuNi0zLjNsMC40LTEuOWwtMC42LTIuN2wwLjQtNWwxLjQtMS4xbDIuNy02LjVsMC45LTEuN2wtMS44LTQuNGwtMC44LTIuNmwtMi41LTEuMWwtMy4zLTMuN2wxLjItMyBsMi41LDAuNmwxLjYtMC40bDMuMSwwLjFMMTA2MC4xLDUwMi45TDEwNjAuMSw1MDIuOXpcIn0sQ0E6e2Q6XCJNNjU5LDI3Ni43bC0wLjctM2wtMi41LDEuOWwwLjUsMi4xbDUuNiwyLjZsMS45LTAuNGwzLjMtMi41bC00LjcsMC4xTDY1OSwyNzYuN0w2NTksMjc2Ljd6IE02NzMuNCwyNjAuOGwwLjItMS4xIGwtNC4xLTIuNmwtNS45LTEuNmwtMS45LDAuNmwzLjUsMi45bDUuNywxLjlMNjczLjQsMjYwLjhMNjczLjQsMjYwLjh6IE0zNjguMSwyNjQuNWwwLjItMy40bC0zLjItMi42bC0wLjQtMi45bC0wLjEtMi4xbC00LjEtMC43IGwtMi40LTAuOWwtNC4xLTEuNGwtMS40LDEuNWwtMC42LDMuM2w0LjMsMS4xbC0wLjQsMS44bDIuOSwyLjJ2Mi4ybDYuMywyLjhMMzY4LjEsMjY0LjVMMzY4LjEsMjY0LjV6IE03MDQuMiwyNTFsMy45LTMuOGwxLjQtMS43IGwtMi4xLTAuM2wtNC45LDIuMmwtNC4yLDMuNWwtOC4xLDkuOGwtNS4zLDMuN2wxLjYsMS43bC0zLjgsMi4ybDAuMiwxLjlsOS42LDAuMWw1LjQtMC4zbDQuNCwxLjVsLTQuNCwyLjlsMi45LDAuMmw3LjMtNS40bDEuMiwwLjggbC0yLjUsNS4xbDMsMS4ybDIuMy0wLjJsMy41LTUuNWwtMC41LTMuOWwwLjMtMy4zbC0zLjcsMS4xbDIuOC00LjZsLTQuMy0xLjlsLTIuNywxLjVsLTMuOS0xLjdsMi40LTIuMWwtMi45LTEuM2wtMy44LDJMNzA0LjIsMjUxIEw3MDQuMiwyNTF6IE0zNDcuNCwyMjkuOGwtMS45LDJsLTEuNCwyLjZsMC45LDEuOWwtMC42LDIuOGwwLjcsMi44aDEuOWwtMC4yLTQuOWw3LjEtNi45bC00LjksMC41TDM0Ny40LDIyOS44TDM0Ny40LDIyOS44eiBNNjI4LjMsMTgyLjhsLTAuNC0xLjJsLTEuNy0wLjFsLTIuOCwxLjdsLTAuNCwwLjRsMC4xLDEuN2wxLjcsMC41TDYyOC4zLDE4Mi44TDYyOC4zLDE4Mi44eiBNNjE4LjcsMTc5LjZsMC44LTEuMWwtNi0wLjFsLTQuOSwyLjcgdjEuNWwzLDAuMkw2MTguNywxNzkuNkw2MTguNywxNzkuNnogTTYxNS42LDE2M2wtMi43LTAuNWwtNSw1LjJsLTMuNiw0LjRsLTUuNywyLjhsNi4zLTAuNmwtMC44LDMuNGw4LjItM2w2LjItM2wwLjgsMi42bDUuOSwxLjMgbDQuOS0xLjhsLTEuOS0xLjhsLTMuNCwwLjRsMS4zLTIuN2wtMy43LTEuN2wtMy40LTEuOWwtMS41LTEuNWwtMi44LDAuOUw2MTUuNiwxNjNMNjE1LjYsMTYzeiBNNjYwLjIsMTU0LjhsMy43LTEuN2wxLTAuN2wxLjQtMi4zIGwtMi4zLTEuNWwtNC4yLDAuN2wtMy44LDMuMWwtMC43LDIuNkw2NjAuMiwxNTQuOEw2NjAuMiwxNTQuOHogTTU4Ni40LDE0NC4xbC0wLjgtMmwtMC4zLTFsLTEuNi0xbC0zLTEuNWwtNC45LDIuM2wtNSwxLjdsMy41LDIuNCBsMy44LTAuNmw0LjEsMS42TDU4Ni40LDE0NC4xeiBNNjA4LjgsMTQybC02LjYtMWw1LjctMi42bC0wLjQtNmwtMS45LTIuM2wtNC41LTAuOGwtOC4xLDMuOGwtNS41LDUuOGwyLjksMi4xbDEuNiwzLjNsLTYuMyw1LjUgbC0zLjItMC4ybC02LjIsNC40bDQuMi01LjJsLTQuOC0xLjhsLTQuNSwwLjlsLTIuNCwzLjRsLTUuOS0wLjFsLTcuMiwwLjhsLTUuMS0yLjRsLTUsMC40bC0xLjUtMi45bC0yLjEtMS4zbC0zLjgsMC41bC01LjIsMC4zIGwtNC40LDEuOGwyLDIuM2wtNywyLjhsLTEuNC0zLjNsLTQuNCwxbC0xMS44LDAuNmwtNi40LTEuMmw4LjUtMi42bC0yLjgtMi44bC00LjQsMC40bC00LjctMWwtNy41LTEuOWwtMy44LTIuM2wtNC41LTAuM2wtMy4zLDEuNiBsLTUuOSwwLjlsMy45LTQuMWwtOS40LDMuNmwtMS40LTQuN2wtMi4xLTAuNmwtMy44LDIuNWwtNC41LDEuMmwtMC4yLTIuMmwtOC4yLDEuNGwtOC44LDIuM2wtNS4yLTAuNmwtNywxLjZsLTYuMiwyLjNsLTMuNy0wLjUgbC0zLjMtMi42bC01LjktMS4zbDAsMGwtMjQuMywyMC4ybC0zNS40LDMyLjRsNC4yLDAuMWwyLjcsMS42bDAuNiwyLjZsMC4yLDMuOWw3LjYtMy4zbDYuNC0xLjlsLTAuNSwzbDAuNywyLjRsMS43LDIuN2wtMS4xLDQuMiBsLTEuNSw2LjhsNC42LDMuOGwtMy4xLDMuN2wtNS4xLDIuOWwwLDBsLTIuNSwzLjFsMi4xLDQuNGwtMy4xLDQuOWw0LjEsMi42bC0zLjYsMy43bC0xLjMsNS41bDYuOSwyLjVsMS42LDIuN2w1LjQsNi4xaDAuN2gxMy45IGgxNC42aDQuOGgxNWgxNC41aDE0LjdoMTQuOGgxNi43aDE2LjhoMTAuMWwxLjMtMi40aDEuNmwtMC44LDMuNGwxLDFsMy4yLDAuNGw0LjYsMWwzLjgsMS45bDQuNC0wLjhsNS4zLDEuNmwwLDBsMy4yLTIuNGwzLjItMSBsMS44LTEuNWwxLjUtMC44bDQsMS4ybDMuMywwLjJsMC44LDAuOGwwLjEsMy41bDUuMiwxbC0xLjcsMS43bDEuMiwxLjlsLTEuOSwyLjNsMS44LDAuOGwtMS45LDIuMWwwLDBsMS4yLDAuMmwxLjMtMC45bDAuNSwxLjQgbDMuNCwwLjdsMy44LDAuMWwzLjgsMC42bDQsMS4ybDAuOCwybDEuNCw0LjdsLTIuNCwybC0zLjgtMC44bC0xLTMuOGwtMC45LDMuOWwtMy44LDMuNGwtMC44LDIuOWwtMS4xLDEuN2wtNC4xLDJsMCwwbC0zLjcsMy40IGwtMiwyLjJsMi43LDAuNGw0LjUtMmwyLjktMS43bDEuNi0wLjNsMi42LDAuNmwxLjctMC45bDIuOC0wLjhsNC43LTAuOGwwLDBsMCwwbDAuMy0xLjhsLTAuMywwLjFsLTEuNywwLjNsLTEuOC0wLjZsMi4zLTIuMSBsMS45LTAuN2wzLjktMC45bDQuNi0wLjlsMS44LDEuMmwxLjktMS40bDEuOS0wLjhsMC45LDAuNGwwLjEsMC4xbDYuNy00LjJsMi43LTEuMmg3LjdoOS4zbDEtMS42bDEuNy0wLjNsMi41LTAuOWwyLjctMi44bDMuMi00LjkgbDUuNS00LjdsMS4xLDEuN2wzLjctMS4xbDEuNSwxLjhsLTIuOCw4LjVsMi4xLDMuNWw1LjktMC44bDguMS0wLjJsLTEwLjQsNS4xbC0xLjUsNS4ybDMuNywwLjVsNy4xLTQuNWw1LjgtMi40bDEyLjItMy43bDcuNS00LjEgbC0yLjYtMi4ybDEtNC41bC03LjEsN2wtOC42LDAuOGwtNS41LTMuMWwtMC4xLTQuNmwwLjYtNi44bDYuMS00LjFsLTMuMy0zLjFsLTcuNiwwLjZsLTEyLjEsNS4ybC0xMC45LDguMmwtNC42LDFsNy44LTUuN2wxMC4xLTguMyBsNy4yLTIuN2w1LjctNC40bDUuMi0wLjVsNy4zLDAuMWwxMCwxLjNsOC42LTFsNy44LTUuMWw4LjctMi4ybDQuMi0yLjFsNC4yLTIuM2wyLTYuOGwtMS4xLTIuM2wtMy40LTAuOHYtNS4xbC0yLjMtMS45bC02LjktMS42IGwtMi44LTMuNGwtNC44LTMuNGwzLjQtMy43bC0yLTcuMWwtMi42LTcuNWwtMS01LjJsLTQuMywyLjdsLTcuNCw2LjVsLTguMSwzLjJsLTEuNi0zLjRsLTMuNy0xbDIuMi03LjNsMi42LTQuOWwtNy43LTAuNWwtMC4xLTIuMiBsLTMuNi0zLjNsLTMtMmwtNC41LDEuNWwtNC4yLTAuNWwtNi42LTEuNmwtMy45LDEuM2wtMy44LDlsLTEsNS4zbC04LjgsNi4xbDMuMSw0LjVsMC41LDVsLTEuNyw0bC00LjcsNC4xTDYxMCwyMjRsLTksMi44bDEuNywzLjIgbC0yLjIsOS42bC01LjYsNi4zbC00LjYsMS45bC00LjQtNS44bC0wLjEtNi44bDEuNy02bDMuNi01LjJsLTQuOC0wLjZsLTcuNS0wLjRsLTMuNi0yLjVsLTQuOC0xLjZsLTEuNy0yLjlsLTMuMy0yLjJsLTctMi42IGwtNy4xLDEuMmwwLjctNC41bDEuNS01LjVsLTYtMWw0LjktNi44bDQuOS00LjZsOS40LTYuNWw4LjYtNC42bDUuNi0wLjdsMi45LTMuN2w1LjEtMi40bDYuNC0wLjRsNy43LTMuOGwyLjktMi40bDcuNC00LjdsMy4yLTIuOCBsMy4yLDEuN2w2LjUtMC45TDYzNywxNTVsMi4zLTIuN2wtMC44LTIuOWw1LTIuOWwxLjctMi43bC0zLjUtMi42bC01LjQtMC44bC01LjUtMC40bC00LjYsNS45bC02LjUsNC42bC03LjIsNGwtMS4zLTMuN2w0LjItNCBsLTIuMi0zLjVsLTguNyw0LjJMNjA4LjgsMTQyTDYwOC44LDE0MnogTTUzMy4zLDEyMy4xbC0yLjgtMWwtMTQuMSwzLjJsLTUuMSwybC03LjgsMy45bDUuNCwxLjRsNi4yLTAuMWwtMTEuNSwyLjF2MS45bDUuNiwwLjEgbDktMC40bDYuNSwxLjJsLTYuMiwxbC01LjUtMC4zbC03LjEsMC45bC0zLjMsMC42bDAuNiw0LjJsNC4yLTAuNmw0LjEsMS41bC0wLjMsMi41bDcuOC0wLjVsMTEuMi0wLjhsOS40LTEuOGw1LTAuNGw1LjcsMS41IGw2LjcsMC44bDMuMS0xLjlsLTAuNy0yLjFsNy0wLjRsMi42LTIuNGwtNS0yLjVsLTQuMi0yLjZsMi40LTMuNmwyLjctNS4xbC0yLjItMmwtMy0wLjlsLTQuMiwwLjhsLTIuOCw1LjNsLTQuMywyLjFsMi4yLTUuMSBsLTEuNy0xLjdsLTcuMywyLjdMNTM5LDEyNGwtMTAuNCwxLjVMNTMzLjMsMTIzLjFMNTMzLjMsMTIzLjF6IE01NzIuNCwxMjEuNmwtMS43LTEuMWwtNS40LDAuMmwtMi4xLDAuN2wyLjIsMy42IEM1NjUuNCwxMjUsNTcyLjQsMTIxLjYsNTcyLjQsMTIxLjZ6IE02ODAuMSwxMjMuMmwtNC40LTIuOGwtOC40LTAuNWwtMi4xLDAuM2wtMS43LDEuOGwyLDIuOGwwLjksMC4zbDQuOC0wLjdsNC4xLDAuMWw0LjEsMC4xIEw2ODAuMSwxMjMuMkw2ODAuMSwxMjMuMnogTTY0MC43LDEyMi45bDUuNy0zLjJsLTExLjIsMS4zbC01LjgsMi4xbC03LjEsNC42bC0zLjMsNS4ybDUuNiwwLjFsLTYuMSwyLjNsMS44LDEuOWw1LjksMC44bDcuMywxLjUgbDEzLjgsMS4ybDcuOS0wLjZsMy4yLTEuNmwyLDEuOGwzLjMsMC4zbDIsMy4zbC0zLjUsMS40bDcuMSwxLjhsNC42LDIuNmwwLjUsMS45TDY3NCwxNTRsLTguNiw1LjRsLTMuMiwyLjdsMC4yLDJsLTkuMiwwLjdsLTgsMC4xIGwtNS40LDQuMmwyLjQsMS45bDEzLTAuOWwwLjktMS42bDQuNywyLjdsNC43LDIuOWwtMi40LDEuNmwzLjgsMi44bDcuNiwzLjNsMTAuNywyLjNsMC4zLTJsLTIuOC0zLjVsLTMuNS00LjlsOC41LDQuNmw0LjcsMS41IGwzLjYtNC4xdi01LjZsLTEtMS41bC00LjQtMi41bC0yLjctMy4zbDIuMy0zLjJsNS44LTAuN2wzLjgsNS40bDQsMi40bDEwLjctNi41bDMuMy0zLjlsLTYuNC0wLjNsLTMuMi01LjFsLTUuOS0xLjJsLTcuNy0zLjVsOS0yLjUgbC0wLjgtNWwtMi4yLTIuMWwtOC4zLTIuMWwtMS45LTMuM2wtOC4yLDEuMmwxLjEtMi4zbC0zLjYtMi41bC02LjgtMi42bC01LjIsMi4xbC05LDEuNWwzLjMtMy40bC0yLjMtNS4zbC0xMS42LDIuMWwtNy4xLDQuMSBMNjQwLjcsMTIyLjlMNjQwLjcsMTIyLjl6IE01OTAuNywxMTkuNWwtNy4xLDIuNGwwLjksMy40bC03LjQtMC43bC0xLjcsMS43bDUuOCwzLjlsMC45LDJsMy40LDAuNWw4LjQtMmw1LjEtNC43bC0zLjgtMi4ybDYtMi40IGwwLjUtMS41bC03LjUsMC42TDU5MC43LDExOS41TDU5MC43LDExOS41eiBNNjEzLDEyNC45bDUuNi0xbDEwLTQuNWwtNi4xLTEuMmwtNy44LTAuMmwtNS4yLDEuNGwtNC4yLDIuMWwtMi41LDIuNmwtMS44LDQuNSBsNC4zLDAuMkw2MTMsMTI0Ljl6IE00OTguMywxMzIuMWwyLjYtMi4zbDkuMS0zLjZsMTMuOC0zLjZsNi40LTEuM2wtMS42LTIuMWwtMS45LTEuNWwtOS40LTAuMmwtNC4xLTEuMWwtMTQsMC44bC0wLjMsMy4xbC03LjYsMy4zIGwtNy40LDMuOGwtNC4zLDIuMmw1LjksMi43bC0wLjYsMi4zTDQ5OC4zLDEzMi4xTDQ5OC4zLDEzMi4xeiBNNjIyLjQsMTEzLjhsMC4zLTEuNmwtMS40LTEuN2wtNi45LDEuM0w2MTAsMTE0bDMuMiwxLjNsNS4xLDAuNCBMNjIyLjQsMTEzLjhMNjIyLjQsMTEzLjh6IE02MTMuNywxMDUuMmwtMS4xLDAuN2wtNC44LTAuM2wtNy42LDEuNmwtMy44LTAuMWwtNC4zLDMuOGw2LjYtMC40bC0zLjQsMi45bDMuMiwwLjhsNi44LTAuNWw1LjgtMy43IGwyLjgtMi41TDYxMy43LDEwNS4yeiBNNTc0LjYsMTA3LjdsMS44LTIuM2wtMy4xLTAuNWwtNS43LDEuN2wtMC43LDQuN2wtNi4xLTAuNEw1NTgsMTA4bC04LjItMS42bC01LjQsMS40bC0xMS42LDQuOGw0LjEsMC44IGwxNy44LTAuNWwtMTAuNiwyLjJsLTEuNSwxLjZsNS45LTAuMWwxMi4yLTIuMmwxMy44LTAuOGw1LjEtMi4zbDIuMy0yLjRsLTMuNy0wLjJsLTQuMywwLjhDNTczLjksMTA5LjUsNTc0LjYsMTA3LjcsNTc0LjYsMTA3Ljd6IE02MjkuOCwxMDMuNGwtNy4xLTAuM2wtMy44LDJsMi42LDEuNWw3LDAuNmwxLjQsMi4xbC0yLjIsMi40bC0xLjUsMi44bDguNSwxLjZsNS41LDAuNmw4LTAuMWwxMS42LTAuOGw0LjMsMC42bDYuNy0xbDMuNS0xLjRsMS0yIGwtMi4zLTEuOWwtNS44LTAuM2wtOCwwLjRsLTcsMS4xbC01LjEtMC40bC00LjgtMC4zbC0xLjItMS4xbC0zLjEtMS4xbDIuOC0xLjlsLTEuNC0xLjZsLTcuMywwLjFMNjI5LjgsMTAzLjRMNjI5LjgsMTAzLjR6IE01NTQuOCwxMDAuOGwtNiwwLjdsLTUuNS0wLjFsLTEyLjEsMy4xbC0xMS42LDMuN2wwLDBsMy42LDFsNy0wLjdsOS44LTIuMWwzLjgtMC4zbDUuMi0xLjZMNTU0LjgsMTAwLjh6IE02MzUuMywxMDEuNGwxLTAuNSBsLTEuNS0wLjlsLTcuMi0wLjFsLTAuNiwxLjNsNi40LDAuM0w2MzUuMywxMDEuNEw2MzUuMywxMDEuNHogTTU3Ni45LDEwMC42bDMuMi0xLjRsLTQuMS0wLjhsLTUuOSwwLjVsLTUuMSwxLjVsMy4zLDEuNSBDNTY4LjMsMTAxLjksNTc2LjksMTAwLjYsNTc2LjksMTAwLjZ6IE01ODQuNyw5Ni40bC0zLjMtMC45bC0xLjYtMC4ybC01LjcsMS4zbC0xLDAuN2g2TDU4NC43LDk2LjR6IE02MzEuMSw5OC45bDMtMS43bC0yLjMtMS42IGwtMS43LTAuM2wtNC40LTAuMWwtMi4xLDEuOGwtMC43LDEuOGwxLjYsMS4xTDYzMS4xLDk4LjlMNjMxLjEsOTguOXogTTYxNy40LDk3LjdsMC4xLTIuMmwtNy40LTEuN2wtNi4xLTAuNmwtMi4xLDEuN2wyLjgsMS4xIGwtNS4zLDEuNGw3LjcsMC4ybDQsMS41bDUuMiwwLjVMNjE3LjQsOTcuN3ogTTY3MS4xLDkxLjZsMC42LTIuOEw2NjcsODhsLTQuNy0wLjlsLTEuNi0yLjJsLTguMiwwLjJsMC4zLDAuOWwtMy45LDAuM2wtNC4xLDEuMyBsLTQuOSwxLjlsLTAuMywxLjlsMiwxLjVoNi41bC00LjMsMS4ybC0yLjEsMS42bDEuNiwxLjlsNi43LDAuNmw2LjgtMC40bDEwLjUtMy40bDYuNC0xLjNMNjcxLjEsOTEuNnogTTc0OS42LDc3LjhsLTctMC4ybC02LjktMC4zIGwtMTAuMiwwLjZsLTEuNC0wLjRsLTEwLjMsMC4ybC02LjQsMC40bC01LjEsMC42bC01LDJsLTIuMy0xbC0zLjktMC4ybC02LjcsMS40bC03LjQsMC42bC00LjEsMC4xbC02LDAuOGwtMS4xLDEuM2wyLjUsMS4ybDAuOCwxLjYgbDQuNCwxLjVsMTIuNC0wLjNsNy4yLDAuNWwtNy4yLDEuNWwtMi4yLTAuNGwtOS4zLTAuMmwtMS4xLDIuMmwzLDEuN2wtMi44LDEuNmwtNy41LDEuMWwtNC45LDEuN2w0LjgsMC45bDEuNywzbC03LjUtMmwtMi41LDAuMyBsLTIsMy40bC04LDEuMWwtMiwyLjNsNi43LDAuM2w0LjksMC42bDExLjctMC44bDguNCwxLjRsMTIuNi0zbDEtMS4xbC02LjQsMC4ybDAuNS0xLjFsNi41LTEuNGwzLjYtMS45bDYuOC0xLjNsNS0xLjZsLTAuOC0yLjIgbDMuMy0wLjhsLTQuMy0wLjZsMTEuMS0wLjRsMy4yLTAuOWw3LjktMC44bDkuMy0zLjVsNi44LTEuMWwxMC4zLTIuNWgtNy40bDMuOS0wLjlsOS0wLjhsOS43LTEuNmwxLjEtMS4xbC01LjItMWwtNi43LTAuNCBMNzQ5LjYsNzcuOEw3NDkuNiw3Ny44elwifSxDVjp7ZDpcIk04NDEuNCw0NzcuNmwwLjEtMC40bC0wLjItMC42bC0wLjMtMC4xbC0wLjYsMC40bC0wLjEsMC4zbDAuMSwwLjNsMC4zLDAuM2wwLjMsMC4xTDg0MS40LDQ3Ny42TDg0MS40LDQ3Ny42eiBNODQ3LjcsNDc1LjlsMC40LTAuMlY0NzVsLTAuMS0wLjNoLTAuNGwtMC4yLDAuNHYwLjF2MC40TDg0Ny43LDQ3NS45TDg0Ny43LDQ3NS45TDg0Ny43LDQ3NS45eiBNODQ2LjMsNDc2LjdsLTAuNS0wLjlsLTAuMy0wLjEgbC0wLjYtMC43di0wLjNsLTAuMy0wLjF2MC4ydjAuNGwtMC4yLDAuNXYwLjVsMC40LDAuOGwwLjQsMC4ybDAuNywwLjFMODQ2LjMsNDc2LjdMODQ2LjMsNDc2Ljd6IE04NDkuNCw0NjguOXYwLjVsLTAuMywwLjdsMC41LDAuMyBsMC4zLDAuMWwwLjYtMC40bDAuMi0wLjVsLTAuMS0wLjNsLTAuMy0wLjNsLTAuMy0wLjFsLTAuMSwwLjFMODQ5LjQsNDY4LjlMODQ5LjQsNDY4Ljl6IE04NDMsNDY2LjRsLTEtMC4xbC0wLjYtMC4yaC0wLjF2MC4zIGwwLjQsMC44bDAuMi0wLjVsMC4yLTAuMWwwLjgsMC4ybDAuNC0wLjFsLTAuMS0wLjFMODQzLDQ2Ni40TDg0Myw0NjYuNHogTTg0OS43LDQ2Ni4ybC0wLjEtMC41VjQ2NWgtMC4ybC0wLjMsMC4ybDAuMSwwLjdsMC4xLDAuMSBsMC4yLDAuNUw4NDkuNyw0NjYuMkw4NDkuNyw0NjYuMnogTTgzOC42LDQ2NS4yVjQ2NWwtMC4zLTAuNWwtMC4zLDAuMWwtMC40LDAuMmwtMC4xLDAuM2wwLjQsMC4yaDAuMkw4MzguNiw0NjUuMkw4MzguNiw0NjUuMnogTTgzNy4xLDQ2NC4zbDAuOC0wLjZsMC4yLTAuM2wtMC4yLTAuNWwtMC41LTAuMWwtMS4yLDAuNmwtMC4xLDAuMmwwLjEsMC4zbDAuMSwwLjVsMC4yLDAuMUw4MzcuMSw0NjQuM0w4MzcuMSw0NjQuM3pcIn0sS1k6e2Q6XCJNNTI3LDQ0OS4xbC0wLjEtMC4zbC0wLjEsMC4xdjAuNmgwLjVoMC4ybDAuMy0wLjJoMC42bC0wLjEtMC4ybC0wLjgtMC4xbC0wLjEsMC4xbC0wLjIsMC4xTDUyNyw0NDkuMUw1MjcsNDQ5LjF6IE01MzUsNDQ2LjhMNTM1LDQ0Ni44bC0wLjEtMC4xaC0wLjFsLTAuMywwLjFoLTAuMWgtMC4xbC0wLjEsMC4xbC0wLjEsMC4xaDAuMmwwLjQtMC4ySDUzNUw1MzUsNDQ2LjhMNTM1LDQ0Ni44eiBNNTM1LjgsNDQ2LjcgbDAuNS0wLjJsMCwwbC0wLjEtMC4xaC0wLjFsLTAuMSwwLjFoLTAuMWwtMC41LDAuM2gwLjJMNTM1LjgsNDQ2LjdMNTM1LjgsNDQ2Ljd6XCJ9LENGOntkOlwiTTExMTAuNSw1MTcuM2wtMC41LTAuM2wtMi0xLjhsLTAuMy0ybDAuOC0yLjZWNTA4bC0zLjMtNGwtMC43LTIuN2wtMy41LDEuMWwtMi44LDIuNWwtNCw3bC01LjIsMi45bC01LjQtMC40IGwtMS42LDAuNmwwLjYsMi4zbC0yLjksMi4ybC0yLjMsMi41bC03LjEsMi40bC0xLjQtMS40bC0wLjktMC4ybC0xLDEuN2wtNC43LDAuNGwtMi43LDYuNWwtMS40LDEuMWwtMC40LDVsMC42LDIuN2wtMC40LDEuOSBsMi42LDMuM2wwLjUsMi4zbDIuMSwzLjJsMi42LDIuMWwwLjMsMi45bDAuNiwxLjhsMi45LTUuOWwzLjMtMy40bDMuOCwxLjFsMy42LDAuNGwwLjUtNC41bDIuMi0zLjJsMy0ybDQuNiwyLjFsMy42LDIuNGw0LjEsMC42IGw0LjIsMS4ybDEuNi0zLjhsMC44LTAuNWwyLjYsMC42bDYuMi0zLjFsMi4yLDEuM2wxLjgtMC4ybDAuOS0xLjVsMi0wLjZsNC4zLDAuN2wzLjYsMC4xbDEuOC0wLjZsLTAuOS0yLjFsLTQuMi0yLjVsLTEuNS0zLjggbC0yLjQtMi43bC0zLjgtMy40bC0wLjEtMmwtMy4xLTIuNkwxMTEwLjUsNTE3LjNMMTExMC41LDUxNy4zelwifSxURDp7ZDpcIk0xMTA4LjQsNDQ3LjZsLTIyLjQtMTIuMmwtMjIuMy0xMi4ybC01LjQsMy41bDEuNiw5LjlsMiwxLjZsMC4yLDIuMWwyLjMsMi4ybC0xLjEsMi43bC0xLjgsMTIuOWwtMC4yLDguM2wtNi45LDYgbC0yLjMsOC40bDIuNCwyLjN2NC4xbDMuNiwwLjJsLTAuNSwyLjlsMi4yLDQuMWwwLjUsNC4ybC0wLjIsNC4zbDMuMSw1LjhsLTMuMS0wLjFsLTEuNiwwLjRsLTIuNS0wLjZsLTEuMiwzbDMuMywzLjdsMi41LDEuMSBsMC44LDIuNmwxLjgsNC40bC0wLjksMS43bDQuNy0wLjRsMS0xLjdsMC45LDAuMmwxLjQsMS40bDcuMS0yLjRsMi4zLTIuNWwyLjktMi4ybC0wLjYtMi4zbDEuNi0wLjZsNS40LDAuNGw1LjItMi45bDQtN2wyLjgtMi41IGwzLjUtMS4xdi0xLjZsLTIuMS0xLjhsLTAuMS0zLjdsLTEuMi0yLjVsLTIsMC40bDAuNS0yLjRsMS40LTIuNmwtMC43LTIuN2wxLjgtMS45bC0xLjItMS41bDEuNC0zLjlsMi40LTQuN2w0LjgsMC40TDExMDguNCw0NDcuNiBMMTEwOC40LDQ0Ny42elwifSxDTDp7ZDpcIk02NDguNCw5MDUuMmwtMy43LTAuN2wtMy4zLDIuNWwwLjIsNC4xbC0xLjIsMi44bC03LjItMi4ybC04LjYtNGwtNC41LTEuM2w5LjcsNi44bDYuMywzLjJsNy41LDMuNGw1LjMsMC45IGw0LjMsMS44bDMsMC41bDIuMywwLjFsMy4yLTEuOGwwLjUtMi40bC0yLjktMC4yaC01TDY0OC40LDkwNS4yTDY0OC40LDkwNS4yeiBNNjAxLjEsNzA4LjlsLTMuNy03LjFsMS4xLTYuMmwtMy4yLTIuN2wtMS4yLTQuNiBMNTkxLDY4NGwtMS4yLDMuM2wtMi43LDEuNmwyLjEsOWwxLjUsMTAuNGwtMC4xLDE0LjJ2MTMuMmwwLjksMTIuM2wtMS45LDcuOGwyLjEsNy44bC0wLjUsNS4zbDMuMiw5LjVsLTAuMSw5LjVsLTEuMiwxMC4yIGwtMC42LDEwLjVsLTIuMSwwLjJsMi40LDcuM2wzLjMsNi4zbC0xLjEsNC4zbDEuOSwxMS42bDEuNSw4LjhsMy41LDAuOWwtMS4xLTcuN2w0LDEuNmwxLjgsMTIuN2wtNi40LTIuMWwyLDEwLjJsLTIuNyw1LjVsOC4yLDEuOCBsLTMuNCw0LjhsMC4yLDZsNSwxMC42bDQuMiw0LjFsMC4yLDMuNmwzLjMsMy44bDcuNSwzLjVsMCwwbDcuNCw0LjJsNi4yLDJsMi0wLjFsLTEuOC01LjdsMy40LTIuMmwxLjctMS41aDQuMmwtNC44LTAuOWwtMTItMC44IGwtMy41LTMuNmwtMS44LTQuNmwtMy4xLDAuNGwtMi42LTIuMmwtMy4xLTYuNmwyLjctMi43bDAuMS0zLjlsLTEuOC0zLjJsMC43LTUuM2wtMS4xLTguMmwtMS44LTMuN2wxLjgtMS4xbC0xLjMtMi4zbC0yLjgtMS4zIGwwLjgtMi42bC0zLjEtMi4zbC0zLjYtNy4xbDEuNi0xLjJsLTMuMy03LjZsLTAuNy02LjRsLTAuMy01LjdsMi41LTIuNGwtMy4zLTYuM2wtMS41LTUuOWwyLjktNC4zbC0xLjQtNS40bDEuNi02LjJsLTEuMy01LjkgbC0xLjYtMS4ybC00LjktMTAuOWwyLjEtNi41bC0xLjctNi4ybDAuOS01LjhsMi42LTUuOWwzLjItNGwtMi0yLjVsMC45LTJsLTEuNi0xMC42bDUuNi0zLjJsMS4xLTYuNmwtMC45LTEuNmwtMy44LDAuOUw2MDEuMSw3MDguOSBMNjAxLjEsNzA4Ljl6XCJ9LENOOntkOlwiTTE1ODcuMiw0NTMuM2wwLjYtMy42bDItMi44bC0xLjYtMi41bC0zLjItMC4xbC01LjgsMS44bC0yLjIsMi44bDEsNS41bDQuOSwyTDE1ODcuMiw0NTMuM0wxNTg3LjIsNDUzLjN6IE0xNjAwLjQsMjU2LjhsLTYuMS02LjFsLTQuNC0zLjdsLTMuOC0yLjdsLTcuNy02LjFsLTUuOS0yLjNsLTguNS0xLjhsLTYuMiwwLjJsLTUuMSwxLjFsLTEuNywzbDMuNywxLjVsMi41LDMuM2wtMS4yLDJsMC4xLDYuNSBsMS45LDIuN2wtNC40LDMuOWwtNy4zLTIuM2wwLjYsNC42bDAuMyw2LjJsMi43LDIuNmwyLjQtMC44bDUuNCwxbDIuNS0yLjNsNS4xLDJsNy4yLDQuM2wwLjcsMi4ybC00LjMtMC43bC02LjgsMC44bC0yLjQsMS44IGwtMS40LDQuMWwtNi4zLDIuNGwtMy4xLDMuM2wtNS45LTEuM2wtMy4yLTAuNWwtMC40LDRsMi45LDIuM2wxLjksMi4xbC0yLjUsMmwtMS45LDMuM2wtNC45LDIuMmwtNy41LDAuMmwtNy4yLDIuMmwtNC40LDMuM2wtMy4yLTIgbC02LjIsMC4xbC05LjMtMy44bC01LjUtMC45bC02LjQsMC44bC0xMS4yLTEuM2wtNS41LDAuMWwtNC43LTMuNmwtNC45LTUuN2wtMy40LTAuN2wtNy45LTMuOGwtNy4yLTAuOWwtNi40LTFsLTMtMi43bC0xLjMtNy4zIGwtNS44LTVsLTguMS0yLjNsLTUuNy0zLjNsLTMuMy00LjRsLTEuNywwLjVsLTEuOCw0LjJsLTMuOCwwLjZsMi41LDYuMmwtMS42LDIuOGwtMTAuNy0ybDEsMTEuMWwtMiwxLjRsLTksMi40bDguNywxMC43bC0yLjksMS42IGwxLjcsMy41bC0wLjIsMS40bC02LjgsMy40bC0xLDIuNGwtNi40LDAuOGwtMC42LDRsLTUuNy0wLjlsLTMuMiwxLjJsLTQsM2wxLjEsMS41bC0xLDEuNWwzLDUuOWwxLjYtMC42bDMuNSwxLjRsMC42LDIuNWwxLjgsMy43IGwxLjQsMS45bDQuNywzbDIuOSw1bDkuNCwyLjZsNy42LDcuNWwwLjgsNS4ybDMsMy4zbDAuNiwzLjNsLTQuMS0wLjlsMy4yLDdsNi4yLDRsOC41LDQuNGwxLjktMS41bDQuNywybDYuNCw0LjFsMy4yLDAuOWwyLjUsMy4xIGw0LjUsMS4ybDUsMi44bDYuNCwxLjVsNi41LDAuNmwzLTEuNGwxLjUsNS4xbDIuNi00LjhsMi42LTEuNmw0LjIsMS41bDIuOSwwLjFsMi43LDEuOGw0LjItMC44bDMuOS00LjhsNS4zLTRsNC45LDEuNWwzLjItMi42IGwzLjUsMy45bC0xLjIsMi43bDYuMSwwLjlsMy0wLjRsMi43LDMuN2wyLjcsMS41bDEuMyw0LjlsMC44LDUuM2wtNC4xLDUuM2wwLjcsNy41bDUuNi0xbDIuMyw1LjhsMy43LDEuM2wtMC44LDUuMmw0LjUsMi40bDIuNSwxLjIgbDMuOC0xLjhsMC42LDIuNmwwLjcsMS41bDIuOSwwLjFsLTEuOS03LjJsMi43LTFsMi43LTEuNWg0LjNsNS4zLTAuN2w0LjEtMy40bDMsMi40bDUuMiwxLjFsLTAuMiwzLjdsMywyLjZsNS45LDEuNmwyLjQtMWw3LjcsMiBsLTAuOSwyLjVsMi4yLDQuNmwzLTAuNGwwLjgtNi43bDUuNi0wLjlsNy4yLTMuMmwyLjUtMy4ybDIuMywyLjFsMi44LTIuOWw2LjEtMC43bDYuNi01LjNsNi4zLTUuOWwzLjMtNy42bDIuMy04LjRsMi4xLTYuOWwyLjgtMC41IGwtMC4xLTUuMWwtMC44LTUuMWwtMy44LTJsLTIuNS0zLjRsMi44LTEuN2wtMS42LTQuN2wtNS40LTQuOWwtNS40LTUuOGwtNC42LTYuM2wtNy4xLTMuNWwwLjktNC42bDMuOC0zLjJsMS0zLjVsNi43LTEuOGwtMi40LTMuNCBsLTMuNC0wLjJsLTUuOC0yLjVsLTMuOSw0LjZsLTQuOS0xLjlsLTEuNS0yLjlsLTQuNy0xbC00LjctNC40bDEuMi0zbDUtMC4zbDEuMi00LjFsMy42LTQuNGwzLjQtMi4ybDQuNCwzLjNsLTEuOSw0LjJsMi4zLDIuNSBsLTEuNCwzbDQuOC0xLjhsMi40LTIuOWw2LjMtMS45bDIuMS00bDMuOC0zLjRsMS00LjRsMy42LDJsNC42LDAuMmwtMi43LTMuM2w2LjMtMi42bC0wLjEtMy41bDUuNSwzLjZsMCwwbC0xLjktMy4xbDIuNS0wLjEgbC0zLjgtNy4zbC00LjctNS4zbDIuOS0yLjJsNi44LDEuMWwtMC42LTZsLTIuOC02LjhsMC40LTIuM2wtMS4zLTUuNmwtNi45LDEuOGwtMi42LDIuNWgtNy41bC02LTUuOGwtOC45LTQuNUwxNjAwLjQsMjU2LjggTDE2MDAuNCwyNTYuOHpcIn0sQ086e2Q6XCJNNTc4LjMsNDk3LjJsMS4yLTIuMWwtMS4zLTEuN2wtMi0wLjRsLTIuOSwzLjFsLTIuMywxLjRsLTQuNiwzLjJsLTQuMy0wLjVsLTAuNSwxLjNsLTMuNiwwLjFsLTMuMywzbC0xLjQsNS40IGwtMC4xLDIuMWwtMi40LDAuN2wtNC40LDQuNGwtMi45LTAuMmwtMC43LDAuOWwxLjEsMy44bC0xLjEsMS45bC0xLjgtMC41bC0wLjksMy4xbDIuMiwzLjRsMC42LDUuNGwtMS4yLDEuNmwxLjEsNS45bC0xLjIsMy43IGwyLDEuNWwtMi4yLDMuM2wtMi41LDRsLTIuOCwwLjRsLTEuNCwyLjNsMC4yLDMuMmwtMi4xLDAuNWwwLjgsMmw1LjYsMy42bDEtMC4xbDEuNCwyLjdsNC43LDAuOWwxLjYtMWwyLjgsMi4xbDIuNCwxLjVsMS41LTAuNiBsMy43LDNsMS44LDNsMi43LDEuN2wzLjQsNi43bDQuMiwwLjhsMy0xLjdsMi4xLDEuMWwzLjMtMC42bDQuNCwzbC0zLjUsNi41bDEuNywwLjFsMi45LDMuNGwyLjItMTcuNGwwLjEtMi44bC0wLjktMy42bC0yLjUtMi40IHYtNC42bDMuMi0xbDEuMSwwLjZsMC4yLTIuNGwtMy4zLTAuN3YtMy45bDEwLjksMC4xbDEuOS0yLjJsMS42LDJsMSwzLjhsMS4xLTAuOGwtMS43LTYuNGwtMS40LTIuMmwtMi0xLjRsMi45LTMuMWwtMC4yLTEuNSBsLTEuNS0xLjlsLTEtNC4ybDAuNS00LjZsMS4zLTIuMWwxLjItMy40bC0yLTEuMWwtMy4yLDAuN2wtNC0wLjNsLTIuMywwLjdsLTMuOC01LjVsLTMuMi0wLjhsLTcuMiwwLjZsLTEuMy0yLjJsLTEuMy0wLjZsLTAuMi0xLjMgbDAuOC0yLjRsLTAuNC0yLjVsLTEuMS0xLjRsLTAuNi0yLjlsLTIuOS0wLjVsMS44LTMuN2wwLjktNC41bDEuOC0yLjRsMi4yLTEuOGwxLjYtMy4yTDU3OC4zLDQ5Ny4yTDU3OC4zLDQ5Ny4yelwifSxLTTp7ZDpcIk0xMjIxLjEsNjUwLjVsLTAuNC0wLjRoLTAuNHYwLjJsMC4xLDAuNGwxLjEsMC4yTDEyMjEuMSw2NTAuNUwxMjIxLjEsNjUwLjV6IE0xMjI1LDY0OUwxMjI1LDY0OWwtMC4zLDAuMWwtMC4xLDAuMiBsLTAuMSwwLjNoLTAuM2gtMC4yaC0wLjRsMC44LDAuNWwwLjUsMC41bDAuMiwwLjJsMC4xLTAuMmwwLjEtMC43TDEyMjUsNjQ5TDEyMjUsNjQ5eiBNMTIxOS40LDY0Ny45bDAuMi0wLjNsLTAuMi0wLjdsLTAuNC0wLjggbDAuMS0xLjRsLTAuMi0wLjJoLTAuM2wtMC4xLDAuMWwtMC4xLDAuM2wtMC4zLDJsMC40LDAuNmwwLjMsMC4xTDEyMTkuNCw2NDcuOUwxMjE5LjQsNjQ3LjlMMTIxOS40LDY0Ny45elwifSxDRzp7ZDpcIk0xMDgwLjMsNTQ5LjlsLTMuNi0wLjRsLTMuOC0xLjFsLTMuMywzLjRsLTIuOSw1LjlsLTAuNCwzLjVsLTQuNS0xLjVsLTQuNS0xLjdsLTcuMS0wLjNsLTAuNCwyLjhsMS41LDMuM2w0LjItMC41IGwxLjQsMS4ybC0yLjQsNy40bDIuNywzLjhsMC42LDQuOWwtMC44LDQuM2wtMS43LDNsLTQuOS0wLjNsLTMtM2wtMC41LDIuOGwtMy44LDAuOGwtMS45LDEuNmwyLjEsNC4ybC00LjMsMy41bDQuNiw2LjdsMi4yLTIuNyBsMS44LTEuMWwyLDIuMmwxLjUsMC42bDEuOS0yLjRsMy4xLDAuMWwwLjQsMS44bDIsMS4xbDMuNC00bDMuMy0zLjFsMS40LTJsLTAuMi01LjNsMi41LTYuMmwyLjYtMy4ybDMuNy0zLjFsMC42LTJsMC4yLTIuNGwwLjktMi4yIGwtMC4zLTMuNmwwLjctNS42bDEuMS00bDEuNi0zLjRMMTA4MC4zLDU0OS45TDEwODAuMyw1NDkuOXpcIn0sQ1I6e2Q6XCJNNTA5LjEsNTAyLjZsLTEuNCwxLjNsLTEuNy0wLjRsLTAuOC0xLjNsLTEuNy0wLjVsLTEuNCwwLjhsLTMuNS0xLjdsLTAuOSwwLjhsLTEuNCwxLjJsMS41LDAuOWwtMC45LDJsLTAuMSwyIGwwLjcsMS4zbDEuNywwLjZsMS4yLDEuOGwxLjItMS42bC0wLjMtMS44bDEuNCwxLjFsMC4zLDEuOWwxLjksMC44bDIuMSwxLjNsMS41LDEuNWwwLjEsMS40bC0wLjcsMS4xbDEuMSwxLjNsMi45LDEuNGwwLjQtMS4yIGwwLjUtMS4zbC0wLjEtMS4ybDAuOC0wLjdsLTEuMS0xbDAuMS0yLjVsMi4yLTAuNmwtMi40LTIuN2wtMi0yLjZMNTA5LjEsNTAyLjZMNTA5LjEsNTAyLjZ6XCJ9LEhSOntkOlwiTTEwNjUsMjgwLjRsLTQtMi42bC0xLjYtMC44bC0zLjksMS43bC0wLjMsMi41bC0xLjcsMC42bDAuMiwxLjdsLTItMC4xbC0xLjgtMWwtMC44LDFsLTMuNS0wLjJsLTAuMiwwLjF2Mi4ybDEuNywyIGwxLjMtMi42bDMuMywxbDAuMywybDIuNSwyLjZsLTEsMC41bDQuNiw0LjVsNC44LDEuOGwzLjEsMi4ybDUsMi4zbDAsMGwwLjUtMWwtNC43LTIuNGwtMi4yLTIuNWwtMi0xLjRsLTIuNS0yLjNsLTEuMy0xLjlsLTIuNy0yLjkgbDAuOS0yLjVsMS45LDEuNGwxLTEuM2wyLjMtMC4xbDQuNCwxbDMuNS0wLjFsMi40LDEuNGwwLDBsMS43LTIuM2wtMS43LTEuOGwtMS41LTIuNGwwLDBsLTEuOCwwLjlMMTA2NSwyODAuNEwxMDY1LDI4MC40elwifSxDVTp7ZDpcIk01MzksNDI3LjNsLTQuOS0yLjFsLTQuMy0wLjFsLTQuNy0wLjVsLTEuNCwwLjdsLTQuMiwwLjZsLTMsMS4zbC0yLjcsMS40bC0xLjUsMi4zbC0zLjEsMmwyLjIsMC42bDIuOS0wLjdsMC45LTEuNiBsMi4zLTAuMWw0LjQtMy4zbDUuNCwwLjNsLTIuMywxLjZsMS44LDEuM2w3LDFsMS41LDEuM2w0LjksMS43bDMuMi0wLjJsMC44LDMuNmwxLjcsMS44bDMuNSwwLjRsMi4xLDEuN2wtNC4xLDMuNWw3LjktMC42bDMuOCwwLjUgbDMuNy0wLjNsMy44LTAuOGwwLjgtMS41bC0zLjktMi42bC00LTAuM2wwLjYtMS43bC0zLjEtMS4zaC0xLjlsLTMtMi44bC00LjItNGwtMS44LTEuNWwtNS4yLDAuOEw1MzksNDI3LjNMNTM5LDQyNy4zelwifSxDVzp7ZDpcIk01OTUuOSw0OTQuOXYtMC42bC0wLjktMC40djAuM2wwLjEsMC4ybDAuMywwLjFsMC4xLDAuMmwtMC4xLDAuNmwwLjIsMC4zTDU5NS45LDQ5NC45TDU5NS45LDQ5NC45elwifSxDWTp7ZDpcIk0xMTQ5LjksMzQ4LjRsLTAuMy0wLjFsLTAuNSwwLjJsLTAuNCwwLjRsLTAuNCwwLjNsLTAuNS0wLjNsMC4yLDAuOWwwLjYsMS4xbDAuMiwwLjNsMC4zLDAuMmwxLjEsMC4zaDAuM2gwLjYgbDAuMiwwLjFsMC4yLDAuNGgwLjR2LTAuMXYtMC4zbDAuMi0wLjJsMC4zLTAuMmgwLjNsMC42LTAuMWwwLjYtMC4ybDAuNS0wLjRsMC45LTFoMC4zaDAuM2gwLjZsMC42LTAuMWwtMC4yLTAuNGwtMC4xLTAuMWwtMC40LTAuNSBsLTAuMi0wLjRsMC4xLTAuNmwyLjUtMS45bDAuNS0wLjVsLTAuOCwwLjJsLTAuNiwwLjRsLTAuNCwwLjJsLTAuNywwLjRsLTIuMywwLjhsLTAuOCwwLjFoLTAuOGwtMS0wLjFsLTAuOS0wLjJ2MC43bC0wLjIsMC42IGwtMC42LDAuMkwxMTQ5LjksMzQ4LjRMMTE0OS45LDM0OC40elwifSxDWjp7ZDpcIk0xMDQ5LjQsMjQ4LjVsLTIuMSwwLjZsLTEuNC0wLjdsLTEuMSwxLjJsLTMuNCwxLjJsLTEuNywxLjVsLTMuNCwxLjNsMSwxLjlsMC43LDIuNmwyLjYsMS41bDIuOSwyLjZsMy44LDJsMi42LTIuNSBsMS43LTAuNWw0LDEuOWwyLjMtMC4zbDIuMywxLjJsMC42LTEuNGwyLjIsMC4xbDEuNi0wLjZsMC4xLTAuNmwwLjktMC4zbDAuMi0xLjRsMS4xLTAuM2wwLjYtMS4xaDEuNWwtMi42LTMuMWwtMy42LTAuM2wtMC43LTIgbC0zLjQtMC42bC0wLjYsMS41bC0yLjctMS4ybDAuMS0xLjdsLTMuNy0wLjZMMTA0OS40LDI0OC41TDEwNDkuNCwyNDguNXpcIn0sQ0Q6e2Q6XCJNMTEyNC45LDUzOS40bC00LjMtMC43bC0yLDAuNmwtMC45LDEuNWwtMS44LDAuMmwtMi4yLTEuM2wtNi4yLDMuMWwtMi42LTAuNmwtMC44LDAuNWwtMS42LDMuOGwtNC4yLTEuMmwtNC4xLTAuNiBsLTMuNi0yLjRsLTQuNi0yLjFsLTMsMmwtMi4yLDMuMmwtMC41LDQuNWwtMC4zLDMuOGwtMS42LDMuNGwtMS4xLDRsLTAuNyw1LjZsMC4zLDMuNmwtMC45LDIuMmwtMC4yLDIuNGwtMC42LDJsLTMuNywzLjFsLTIuNiwzLjIgbC0yLjUsNi4ybDAuMiw1LjNsLTEuNCwybC0zLjMsMy4xbC0zLjQsNGwtMi0xLjFsLTAuNC0xLjhsLTMuMS0wLjFsLTEuOSwyLjRsLTEuNS0wLjZsLTIsMS4zbC0wLjksMS43bC0wLjIsMi43bC0xLjUsMC43bDAuOCwyIGwyLjMtMC45bDEuNywwLjFsMS45LTAuN2wxNi42LDAuMWwxLjMsNC43bDEuNiwzLjhsMS4zLDIuMWwyLjEsMy4zbDMuNy0wLjVsMS45LTAuOWwzLDAuOWwwLjktMS42bDEuNS0zLjdsMy40LTAuM2wwLjMtMS4xaDIuOSBsLTAuNSwyLjNoNi44djRsMS4yLDIuNGwtMC45LDMuOGwwLjMsNGwxLjksMi4zbC0wLjUsNy42bDEuNC0wLjZsMi40LDAuMmwzLjUtMWwyLjYsMC40bDEuOSwwLjFsMC4zLDJsMi42LTAuMWwzLjUsMC42bDEuOCwyLjggbDQuNSwwLjlsMy40LTJsMS4yLDMuNGw0LjMsMC44bDIsMi44bDIuMSwzLjVoNC4zbC0wLjMtNi45bC0xLjUsMS4ybC0zLjktMi41bC0xLjQtMS4xbDAuOC02LjRsMS4yLTcuNWwtMS4yLTIuOGwxLjYtNC4xbDEuNi0wLjcgbDcuNS0xLjFsMSwwLjNsMC4yLTEuMWwtMS41LTEuN2wtMC43LTMuNWwtMy40LTMuNWwtMS44LTQuNWwxLTIuN2wtMS41LTMuNmwxLjEtMTAuMmwwLjEsMC4xbC0wLjEtMS4xbC0xLjQtMi45bDAuNi0zLjVsMC44LTAuNCBsMC4yLTMuOGwxLjYtMS44bDAuMS00LjhsMS4zLTIuNGwwLjMtNS4xbDEuMi0zbDIuMS0zLjNsMi4yLTEuN2wxLjgtMi4zbC0yLjMtMC44bDAuMy03LjVsMCwwbC01LTQuMmwtMS40LTIuN2wtMy4xLDEuM2wtMi42LTAuNCBsLTEuNSwxLjFsLTIuNS0wLjhsLTMuNS01LjJsLTEuOCwwLjZMMTEyNC45LDUzOS40TDExMjQuOSw1MzkuNHpcIn0sREs6e2Q6XCJNMTAzNS45LDIyMS4ybC0xLjctM2wtNi43LDJsMC45LDIuNWw1LjEsMy40TDEwMzUuOSwyMjEuMkwxMDM1LjksMjIxLjJ6IE0xMDI3LjMsMjE2LjFsLTIuNi0wLjlsLTAuNy0xLjZsMS4zLTIgbC0wLjEtM2wtMy42LDEuNmwtMS41LDEuN2wtNCwwLjRsLTEuMiwxLjdsLTAuNywxLjZsMC40LDYuMWwyLjEsMy40bDMuNiwwLjhsMy0wLjlsLTEuNS0zbDMuMS00LjNsMS40LDAuN0wxMDI3LjMsMjE2LjEgTDEwMjcuMywyMTYuMXpcIn0sREo6e2Q6XCJNMTIxNy44LDQ5OS4ybC0yLjUtMS43bDMuMS0xLjVsMC4xLTIuN2wtMS40LTEuOWwtMS42LDEuNWwtMi40LTAuNWwtMS45LDIuOGwtMS44LDNsMC41LDEuN2wwLjIsMmwzLjEsMC4xbDEuMy0wLjUgbDEuMywxLjFMMTIxNy44LDQ5OS4yTDEyMTcuOCw0OTkuMnpcIn0sRE06e2Q6XCJNNjM1LjgsNDc1LjFsMC4zLTAuN2wtMC4xLTFsLTAuMi0wLjRsLTAuOC0wLjN2MC4ybC0wLjEsMC41bDAuMywwLjhsMC4xLDEuMUw2MzUuOCw0NzUuMXpcIn0sRE86e2Q6XCJNNTc5LjYsNDU3LjR2MS44bDEuNCwxbDIuNi00LjRsMi0wLjlsMC42LDEuNmwyLjItMC40bDEuMS0xLjJsMS44LDAuM2wyLjYtMC4ybDIuNSwxLjNsMi4zLTIuNmwtMi41LTIuM2wtMi40LTAuMiBsMC4zLTEuOWwtMywwLjFsLTAuOC0yLjJsLTEuNCwwLjFsLTMuMS0xLjZsLTQuNC0wLjFsLTAuOCwxLjFsMC4yLDMuNWwtMC43LDIuNGwtMS41LDEuMWwxLjIsMS45TDU3OS42LDQ1Ny40TDU3OS42LDQ1Ny40elwifSxFQzp7ZDpcIk01NTMuMSw1NzMuMWwtMi40LTEuNWwtMi44LTIuMWwtMS42LDFsLTQuNy0wLjlsLTEuNC0yLjdsLTEsMC4xbC01LjYtMy42bC0zLjksMi41bC0zLjEsMS40bDAuNCwyLjZsLTIuMiw0LjEgbC0xLDMuOWwtMS45LDFsMSw1LjhsLTEuMSwxLjhsMy40LDIuN2wyLjEtMi45bDEuMywyLjhsLTIuOSw0LjdsMC43LDIuN2wtMS41LDEuNWwwLjIsMi4zbDIuMy0wLjVsMi4zLDAuN2wyLjUsMy4ybDMuMS0yLjZsMC45LTQuMyBsMy4zLTUuNWw2LjctMi41bDYtNi43bDEuNy00LjFMNTUzLjEsNTczLjF6XCJ9LEVHOntkOlwiTTExMjkuNywzNzQuOGwtNS41LTEuOWwtNS4zLTEuN2wtNy4xLDAuMmwtMS44LDNsMS4xLDIuN2wtMS4yLDMuOWwyLDUuMWwxLjMsMjIuN2wxLDIzLjRoMjIuMWgyMS40aDIxLjhsLTEtMS4zIGwtNi44LTUuN2wtMC40LTQuMmwxLTEuMWwtNS4zLTdsLTItMy42bC0yLjMtMy41bC00LjgtOS45bC0zLjktNi40bC0yLjgtNi43bDAuNS0wLjZsNC42LDkuMWwyLjcsMi45bDIsMmwxLjItMS4xbDEuMi0zLjNsMC43LTQuOCBsMS4zLTIuNWwtMC43LTEuN2wtMy45LTkuMmwwLDBsLTIuNSwxLjZsLTQuMi0wLjRsLTQuNC0xLjVsLTEuMSwyLjFsLTEuNy0zLjJsLTMuOS0wLjhsLTQuNywwLjZsLTIuMSwxLjhsLTMuOSwyTDExMjkuNywzNzQuOCBMMTEyOS43LDM3NC44elwifSxTVjp7ZDpcIk00ODcuMiw0ODdsMC42LTIuNWwtMC43LTAuN2wtMS4xLTAuNWwtMi41LDAuOGwtMC4xLTAuOWwtMS42LTFsLTEuMS0xLjNsLTEuNS0wLjVsLTEuNCwwLjRsMC4yLDAuN2wtMS4xLDAuNyBsLTIuMSwxLjZsLTAuMiwxbDEuNCwxLjNsMy4xLDAuNGwyLjIsMS4zbDEuOSwwLjZsMy4zLDAuMUw0ODcuMiw0ODdMNDg3LjIsNDg3elwifSxHUTp7ZDpcIk0gMTA0MC4xIDU1Ny44IGwgLTkuMiAtMC4yIGwgLTEuOSA3LjIgbCAxIDAuOSBsIDEuOSAtMC4zIGggOC4yIFYgNTU3LjggTCAxMDQwLjEgNTU3LjggeiBNIDEwMjMgNTUxIEwgMTAyMy42IDU1MC4yIEwgMTAyMy42IDU0OS44IEwgMTAyNC42IDU0OC4yNSBMIDEwMjQuNDUgNTQ3LjUgTCAxMDIzLjA0IDU0Ny40IEwgMTAyMi41IDU0OC4yIEwgMTAyMi41NSA1NDguNTUgTCAxMDIyLjI1IDU0OS4zNiBMIDEwMjEuNTUgNTQ5LjUgTCAxMDIxLjI1IDU1MC4xNSBMIDEwMjEuNSA1NTAuNyBMIDEwMjMgNTUxIE0gMTAwMy44IDU4MC4yIEwgMTAwMy45IDU4MC40NCBMIDEwMDMuODIgNTgwLjYyIEwgMTAwMy42NSA1ODAuNTUgTCAxMDAzLjYzIDU4MC4yMzIgTCAxMDAzLjggNTgwLjJcIn0sRVI6e2Q6XCJNMTE5OC4xLDQ3NGwtMy4yLTMuMWwtMS44LTUuOWwtMy43LTcuM2wtMi42LDMuNmwtNCwxbC0xLjYsMmwtMC40LDQuMmwtMS45LDkuNGwwLjcsMi41bDYuNSwxLjNsMS41LTQuN2wzLjUsMi45IGwzLjItMS41bDEuNCwxLjNsMy45LDAuMWw0LjksMi41bDEuNiwyLjJsMi41LDIuMWwyLjUsMy43bDIsMi4xbDIuNCwwLjVsMS42LTEuNWwtMi44LTEuOWwtMS45LTIuMmwtMy4yLTMuN2wtMy4yLTMuNkwxMTk4LjEsNDc0elwifSxFRTp7ZDpcIk0xMDkzLjIsMTk3LjVsLTUuNSwwLjlsLTUuNCwxLjZsMC45LDMuNGwzLjMsMi4xbDEuNS0wLjhsMC4xLDMuNWwzLjctMWwyLjEsMC43bDQuNCwyLjJoMy44bDEuNi0xLjlsLTIuNS01LjUgbDIuNi0zLjRsLTAuOS0xbDAsMGwtNC42LDAuMkwxMDkzLjIsMTk3LjV6XCJ9LEVUOntkOlwiTTExODcuNiw0NzdsLTEuNSw0LjdsLTYuNS0xLjNsLTAuNyw1LjVsLTIuMSw2LjJsLTMuMiwzLjJsLTIuMyw0LjhsLTAuNSwyLjZsLTIuNiwxLjhsLTEuNCw2Ljd2MC43bDAuMiw1bC0wLjgsMiBsLTMsMC4xbC0xLjgsMy42bDMuNCwwLjVsMi45LDMuMWwxLDIuNWwyLjYsMS41bDMuNSw2LjlsMi45LDEuMXYzLjZsMiwyLjFoMy45bDcuMiw1LjRoMS44bDEuMy0wLjFsMS4yLDAuN2wzLjgsMC41bDEuNi0yLjcgbDUuMS0yLjZsMi4zLDIuMWgzLjhsMS41LTJsMy42LTAuMWw0LjktNC41bDcuNC0wLjNsMTUuNC0xOS4xbC00LjgsMC4xbC0xOC41LTcuNmwtMi4yLTIuMmwtMi4xLTMuMWwtMi4yLTMuNWwxLjEtMi4zbC0xLjMtMS4xIGwtMS4zLDAuNWwtMy4xLTAuMWwtMC4yLTJsLTAuNS0xLjdsMS44LTNsMS45LTIuOGwtMi0yLjFsLTIuNS0zLjdsLTIuNS0yLjFsLTEuNi0yLjJsLTQuOS0yLjVsLTMuOS0wLjFsLTEuNC0xLjNsLTMuMiwxLjUgTDExODcuNiw0NzdMMTE4Ny42LDQ3N3pcIn0sRks6e2Q6XCJNNjkwLjMsOTAyLjdsLTAuMS0wLjNsLTAuNC0wLjJsLTAuMi0wLjFsMC4xLDAuMmwwLjEsMC4zbDAuMSwwLjJsMC4yLDAuMUw2OTAuMyw5MDIuN0w2OTAuMyw5MDIuN3ogTTY5NS44LDkwMS40IEw2OTUuOCw5MDEuNGwtMC4zLTAuMWwtMC4xLDAuMmwwLjIsMC4zbDAuNCwwLjFMNjk1LjgsOTAxLjRMNjk1LjgsOTAxLjR6IE02ODIuOSw5MDBsLTAuMSwwLjJsLTAuNCwwLjFsMC4yLDAuM2wwLjYsMC40aDAuNCBsMC4xLTAuM2wtMC4xLTAuNmgtMC4zTDY4Mi45LDkwMEw2ODIuOSw5MDB6IE02ODUuNyw4OThsLTAuOS0wLjNsLTAuNC0wLjNoLTAuM2wwLjQsMC40bDAuMSwwLjJsMC4xLDAuMmwwLjYsMC4zbDAuNiwwLjNsMC40LDAuMyBsLTAuMSwwLjFsLTAuOCwwLjNoLTAuM2wtMC4yLDAuMWwwLjQsMC4ybDAuNi0wLjFsMC4yLTAuMWgwLjJsMC4zLDAuMXYwLjJsLTAuMSwwLjJsLTAuMiwwLjJsLTAuNCwwLjNsLTAuNiwwLjRoLTAuOGwtMC43LDAuNyBsMC45LDAuNWwwLjcsMC4zaDAuOXYtMC4xbDAuMi0wLjFoMC4zbDAuMS0wLjFsMC4yLTAuNHYtMC42aDAuMmwwLjMsMC4xbDAuNy0wLjFsMC4zLTAuMWwwLjYtMC45bDAuNC0wLjhsMC4yLTAuNGwwLjMtMC4ybDAuMS0wLjIgbDAuMS0wLjNsMC4zLTAuMnYtMC4zbC0wLjQtMC4ybC0wLjMtMC4ybC0wLjMsMC4zbC0wLjItMC4xbC0wLjksMC4zaC0wLjRsLTAuMy0wLjJsLTAuNC0wLjFsLTAuNCwwLjFsLTAuNSwwLjVMNjg1LjcsODk4TDY4NS43LDg5OCB6IE02ODYuNCw4OTcuNmwwLjEtMC4zbC0wLjEtMC4ybC0wLjUtMC4yaC0wLjVsMC4yLDAuNWwwLjIsMC4ySDY4Ni40eiBNNjkyLjMsODk2LjloLTAuNGwwLjQsMC41bC0wLjgsMC44bDAuMiwwLjZsMC4zLDAuNGwwLjEsMC4yIGwtMC4xLDAuMWwtMC40LDAuMWwtMC4zLDAuMWwtMC4yLDAuM2wtMC45LDAuOWwwLjIsMC4ybC0wLjMsMC43bDAuMiwwLjNsMC44LDAuN2wwLjgsMC40di0wLjdsMC40LTAuMWwwLjQsMC4ybDAuNC0wLjJsLTAuOS0xaDAuMyBsMi41LDAuNWwtMC4xLTAuNGwtMC4xLTAuMmwtMC4zLTAuNGwxLjUtMC40bDAuNS0wLjNsMC4yLTAuM2wwLjYtMC4xbDAuOC0wLjNsLTAuMS0wLjFsMC4xLTAuM2wtMC40LTAuMmwtMC41LTAuMWwwLjEtMC4zbDAuNS0wLjEgbC0wLjgtMC43bC0wLjMtMC4xbC0xLDAuMWwtMC4zLDAuMXYwLjJsMC4xLDAuM2wwLjMsMC4zbDAuMSwwLjJsLTAuMi0wLjFsLTEuMS0wLjRsLTAuMi0wLjFsLTAuMi0wLjRsMC4yLTAuMWwwLjMsMC4xbDAuMS0wLjMgbC0wLjQtMC4zbC0wLjQtMC4xbC0wLjksMC4xTDY5Mi4zLDg5Ni45TDY5Mi4zLDg5Ni45elwifSxGTzp7ZDpcIk05NDcsMTg2Ljl2LTAuM2wtMC4xLTAuM3YtMC4yaC0wLjFsLTAuNS0wLjFsLTAuMS0wLjJoLTAuMXYwLjJsMC4xLDAuNGwwLjUsMC40TDk0NywxODYuOUw5NDcsMTg2LjlMOTQ3LDE4Ni45ek05NDcuNSwxODQuOHYtMC4xbC0wLjItMC4ybC0wLjUtMC4ybC0wLjItMC4xbC0wLjIsMC4xdjAuMmwwLjEsMC4xbDAuNCwwLjFsMC40LDAuM2gwLjFMOTQ3LjUsMTg0LjhMOTQ3LjUsMTg0Ljh6IE05NDUuMSwxODIuOWwtMC4yLTAuMWwtMC41LDAuMWgtMC4zbDAuMSwwLjNsMC42LDAuMmgwLjNoMC4zbDAuMi0wLjFsLTAuMS0wLjJMOTQ1LjEsMTgyLjlMOTQ1LjEsMTgyLjl6IE05NDcuNiwxODIuNGwtMC44LTAuMmwtMC42LTAuM2wtMSwwLjFsMC43LDEuMWwwLjgsMC43bDAuNCwwLjJ2LTAuMXYtMC4ybC0wLjQtMC41bC0wLjEtMC4xVjE4M2wwLjEtMC4xaDAuMmwwLjMsMC4yaDAuMkw5NDcuNiwxODIuNEw5NDcuNiwxODIuNHogTTk0OC42LDE4Mi4ybC0wLjMtMC4ybC0wLjQtMC40djAuNXYwLjN2MC4xaDAuMWwwLjMsMC4xTDk0OC42LDE4Mi4yTDk0OC42LDE4Mi4yelwifSxGSjp7ZDpcIk0xOTc2LjcsNjc0LjRsLTMuNywybC0xLjksMC4zbC0zLjEsMS4zbDAuMiwyLjRsMy45LTEuM2wzLjktMS42TDE5NzYuNyw2NzQuNEwxOTc2LjcsNjc0LjR6IE0xOTY1LjcsNjgyLjVsLTEuNiwxIGwtMi4zLTAuOGwtMi43LDIuMmwtMC4yLDIuOGwyLjksMC44bDMuNi0wLjlsMS44LTMuM0wxOTY1LjcsNjgyLjVMMTk2NS43LDY4Mi41elwifSxGSTp7ZDpcIk0xMDkzLjQsMTQ0LjRsMC44LTMuOGwtNS43LTIuMWwtNS44LDEuOGwtMS4xLDMuOWwtMy40LDIuNGwtNC43LTEuM2wtNS4zLDAuM2wtNS4xLTIuOWwtMi4xLDEuNGw1LjksMi43bDcuMiwzLjcgbDEuNyw4LjRsMS45LDIuMmw2LjQsMi42bDAuOSwyLjNsLTIuNiwxLjJsLTguNyw2LjFsLTMuMywzLjZsLTEuNSwzLjNsMi45LDUuMmwtMC4xLDUuN2w0LjcsMS45bDMuMSwzLjFsNy4xLTEuMmw3LjUtMi4xbDgtMC41bDAsMCBsNy45LTcuNGwzLjMtMy4zbDAuOS0yLjlsLTcuMy0zLjlsMC45LTMuN2wtNC45LTQuMWwxLjctNC44bC02LjQtNi4zbDIuOC00LjFsLTcuMi0zLjdMMTA5My40LDE0NC40TDEwOTMuNCwxNDQuNHpcIn0sRlI6e2Q6XCJNMTAxMi4yLDI5MC45bDIuNywwLjhsLTAuNSwyLjdsLTAuMSwwLjFsLTAuMy0wLjJsLTAuNSwwLjZsMCwwLjNsLTMuNiwyLjZsLTEwLTEuNmwtNy40LDJsLTAuNSwzLjdsLTYsMC44IGwtMS4zLTAuN2wwLjctMC4zbDAuMi0wLjRsLTAuMi0wLjJsLTAuNy0wLjJsLTAuMy0wLjFsLTAuNCwwLjNsLTAuMSwwLjNsMC4xLDAuMXYwLjJsLTMuNy0xLjhsLTEuOSwxLjNsLTkuNC0yLjhsLTItMi40bDIuNy0zLjcgbDEtMTIuM2wtNS4xLTYuNWwtMy42LTMuMWwtNy41LTIuNGwtMC40LTQuNmw2LjQtMS4zbDguMiwxLjZsLTEuNC03bDQuNiwyLjZsMTEuMy00LjhsMS40LTUuMWw0LjMtMS4ybDAuNywyLjJsMi4yLDAuMWwyLjQsMi40IGwzLjQsMi45bDIuNS0wLjRsNC40LDIuOGwwLDBsMS4xLDAuNWwxLjQtMC4xbDIuNCwxLjZsNy4xLDEuMmwtMi4zLDQuMmwtMC41LDQuNWwtMS4zLDFsLTIuMy0wLjZsMC4yLDEuNmwtMy41LDMuNXYyLjhsMi40LTAuOSBsMS44LDIuN2wwLDBsLTAuMiwxLjdsMS42LDIuNGwtMS43LDEuOEwxMDEyLjIsMjkwLjl6IE0xMDI1LjYsMzA0LjNsLTEtNmwtMC42LDEuNmwtMi43LDEuMWwtMC43LDQuM2wzLDMuN0wxMDI1LjYsMzA0LjN6XCJ9LEdGOntkOlwiTTY4MS40LDU1Ni4ybDEuOC00LjdsMy41LTUuOGwtMC45LTIuNmwtNS44LTUuNGwtNC4xLTEuNWwtMS45LTAuN2wtMy4xLDUuNWwwLjQsNC40bDIuMSwzLjdsLTEsMi43bC0wLjYsMi45IGwtMS40LDIuOGwyLjQsMS4zbDEuOC0xLjhsMS4yLDAuM2wwLjgsMS44bDIuNy0wLjVMNjgxLjQsNTU2LjJ6XCJ9LFBGOntkOlwiTTIxMy4yLDcwNC45bC0wLjEtMC4zbC0wLjItMC4zbC0wLjEsMC4xbDAuMSwwLjFsMC4yLDAuM3YwLjJMMjEzLjIsNzA0Ljl6IE0yMjIuNSw2OTAuMmwtMC4yLTAuMmwtMC40LTAuMiBsLTAuMi0wLjFsLTAuMi0wLjFsLTAuMSwwLjFsMC4xLDAuMWgwLjFsMC4zLDAuMmwwLjMsMC4xTDIyMi41LDY5MC4yTDIyMi41LDY5MC4yTDIyMi41LDY5MC4yTDIyMi41LDY5MC4yeiBNMTk4LDY4OS4xbC0wLjYtMC4zIGwwLjEsMC4ybDAuNCwwLjJsMC4yLDAuMUwxOTgsNjg5LjFMMTk4LDY4OS4xeiBNMjE4LjUsNjg4LjlsLTAuNC0wLjVoLTAuM0wyMTguNSw2ODguOUwyMTguNSw2ODguOXogTTE5Ni45LDY4Ny45bC0wLjQtMC40IGwtMC4yLTAuM2wtMC4zLTAuMWwwLjEsMC4xbDAuNCwwLjRsMC4zLDAuNGwwLjIsMC4xTDE5Ni45LDY4Ny45eiBNMTk2LjYsNjg1LjhsLTAuMS0wLjFsMCwwdi0wLjNsMC4yLTAuM2wwLjYtMC40di0wLjFsMCwwIGwtMC4yLDAuMWwtMC40LDAuMmwtMC4yLDAuMmwtMC4xLDAuMmwtMC4xLDAuM2wwLjEsMC4ybDAuMSwwLjFoMC4yTDE5Ni42LDY4NS44TDE5Ni42LDY4NS44eiBNMTQ5LjIsNjg0LjdsLTAuMi0wLjZsLTAuMy0wLjUgbC0wLjgtMC4xbC0wLjUsMC4ybC0wLjEsMC4ybDAuMSwwLjRsMC41LDAuN2wwLjUsMC4xbDAuOC0wLjFsMC40LDAuNmwwLjIsMC4xbDAuNCwwLjFsMC4xLTAuM2wtMC4yLTAuNUwxNDkuMiw2ODQuN0wxNDkuMiw2ODQuN3ogTTE0Ni4zLDY4My44bDAuMS0wLjRsLTAuMi0wLjFoLTAuNXYwLjJsMC4xLDAuMmwwLjEsMC4xbDAuMywwLjJMMTQ2LjMsNjgzLjhMMTQ2LjMsNjgzLjh6IE0xMzYuNiw2NzkuNWgwLjJsLTAuNC0wLjZsLTAuMy0wLjJ2MC4xIHYwLjdsMC4zLDAuMUwxMzYuNiw2NzkuNXogTTE4MC41LDY3Ny45aC0wLjJIMTgwaC0wLjFsMC41LDAuMWwwLjQsMC4yTDE4MC41LDY3Ny45TDE4MC41LDY3Ny45eiBNMTc5LjgsNjc4bC0wLjMtMC4xbC0wLjMtMC4yaC0wLjMgbDAuNywwLjNIMTc5LjhMMTc5LjgsNjc4eiBNMTM2LDY3OC4xbDAuMS0wLjJsLTAuMS0wLjFsLTAuNC0wLjJsMC4xLDAuM3YwLjJIMTM2TDEzNiw2NzguMUwxMzYsNjc4LjF6IE0xNjguOCw2NzYuMWwtMC4zLTAuNCBsLTAuMi0wLjNsLTAuMi0wLjRsLTAuNC0wLjVsMC4xLDAuM2wwLjEsMC4ybDAuMiwwLjJsMC4yLDAuNGwwLjEsMC4ybDAuMywwLjRoMC4xTDE2OC44LDY3Ni4xTDE2OC44LDY3Ni4xeiBNMTg1LDY3NC42bDAuMS0wLjUgaC0wLjJMMTg1LDY3NC42TDE4NSw2NzQuNkwxODUsNjc0LjZ6IE0xNzAuNiw2NzNsLTAuNi0wLjZoLTAuMWwwLjEsMC4ybDAuNSwwLjVsMC4xLDAuMlY2NzNMMTcwLjYsNjczeiBNMjAxLjQsNjM5LjFsMC4xLTAuMnYtMC4yIGwtMC4xLTAuMWwtMC4zLTAuMWwwLjEsMC43TDIwMS40LDYzOS4xTDIwMS40LDYzOS4xeiBNMTk4LjcsNjM1LjRsLTAuMS0wLjJoLTAuMmwtMC4xLDAuMXYwLjVMMTk4LjcsNjM1LjRMMTk4LjcsNjM1LjR6IE0xOTguOCw2MzMuOGwtMC44LDAuNWwwLjIsMC40bDAuNCwwLjFsMC4yLTAuMmwwLjgtMC4xbDAuMy0wLjRsLTAuMywwLjFMMTk4LjgsNjMzLjhMMTk4LjgsNjMzLjh6IE0xOTIuNyw2MzIuMWwwLjItMC41bC0wLjItMC4xIGwtMC40LDAuMnYwLjJsMC4zLDAuNEwxOTIuNyw2MzIuMUwxOTIuNyw2MzIuMXogTTE5NS4zLDYyOWwwLjMtMC4xdi0wLjFsLTAuMi0wLjJsLTAuMy0wLjFsLTAuMSwwLjFsLTAuMSwwLjJsMC4xLDAuM0wxOTUuMyw2MjkgTDE5NS4zLDYyOXogTTE5Mi40LDYyOC45bDAuMS0wLjN2LTAuMmwtMC4xLTAuMmwtMC45LTAuMmwtMC4xLDAuMXYwLjRsMC4yLDAuNWgwLjNMMTkyLjQsNjI4Ljl6XCJ9LEdBOntkOlwiTTEwNTAuMiw1NTcuN2wtMC43LTAuM2wtMy40LDAuOGwtMy40LTAuOGwtMi42LDAuNHY3LjZoLTguMmwtMS45LDAuM2wtMS4xLDQuOGwtMS4zLDQuNmwtMS4zLDJsLTAuMiwyLjFsMy40LDYuNiBsMy43LDUuM2w1LjgsNi40bDQuMy0zLjVsLTIuMS00LjJsMS45LTEuNmwzLjgtMC44bDAuNS0yLjhsMywzbDQuOSwwLjNsMS43LTNsMC44LTQuM2wtMC42LTQuOWwtMi43LTMuOGwyLjQtNy40bC0xLjQtMS4ybC00LjIsMC41IGwtMS41LTMuM0wxMDUwLjIsNTU3LjdMMTA1MC4yLDU1Ny43elwifSxHTTp7ZDpcIk04ODIuOCw0ODguNWw1LDAuMWwxLjQtMC45aDFsMi4xLTEuNWwyLjQsMS40bDIuNCwwLjFsMi40LTEuNWwtMS4xLTEuOGwtMS44LDEuMWwtMS44LTAuMWwtMi4xLTEuNWwtMS44LDAuMSBsLTEuMywxLjVsLTYuMSwwLjJMODgyLjgsNDg4LjVMODgyLjgsNDg4LjV6XCJ9LEdFOntkOlwiTTEyMDAsMzAwLjJsLTcuNS0yLjlsLTcuNy0xbC00LjUtMS4xbC0wLjUsMC43bDIuMiwxLjlsMywwLjdsMy40LDIuM2wyLjEsNC4ybC0wLjMsMi43bDUuNC0wLjNsNS42LDNsNi45LTFsMS4xLTEgbDQuMiwxLjhsMi44LDAuNGwwLjYtMC43bC0zLjItMy40bDEuMS0wLjlsLTMuNS0xLjRsLTIuMS0yLjVsLTUuMS0xLjNsLTIuOSwxTDEyMDAsMzAwLjJMMTIwMCwzMDAuMnpcIn0sREU6e2Q6XCJNMTA0My42LDIzMi4zbC0yLjQtMS45bC01LjUtMi40bC0yLjUsMS43bC00LjcsMS4xbC0wLjEtMi4xbC00LjktMS40bC0wLjItMi4zbC0zLDAuOWwtMy42LTAuOGwwLjQsMy40bDEuMiwyLjIgbC0zLDNsLTEtMS4zbC0zLjksMC4zbC0wLjksMS4zbDEsMmwtMSw1LjZsLTEuMSwyLjNoLTIuOWwxLjEsNi40bC0wLjQsNC4ybDEsMS40bC0wLjIsMi43bDIuNCwxLjZsNy4xLDEuMmwtMi4zLDQuMmwtMC41LDQuNWg0LjIgbDEtMS40bDUuNCwxLjlsMS41LTAuM2wyLjYsMS43bDAuNi0xLjZsNC40LDAuM2wzLjQtMS4ybDIuNCwwLjJsMS43LDEuM2wwLjQtMS4xbC0xLTRsMS43LTAuOGwxLjUtMi45bC0yLjktMi42bC0yLjYtMS41bC0wLjctMi42IGwtMS0xLjlsMy40LTEuM2wxLjctMS41bDMuNC0xLjJsMS4xLTEuMmwxLjQsMC43bDIuMS0wLjZsLTIuMy0zLjlsMC4xLTIuMWwtMS40LTMuM2wtMi0yLjJsMS4yLTEuNkwxMDQzLjYsMjMyLjNMMTA0My42LDIzMi4zelwifSxHSDp7ZDpcIk05NzYuOCw1MDIuMWwtMi42LTAuNWwtMS44LDFsLTIuNC0wLjVsLTkuNywwLjNsLTAuMiwzLjZsMC44LDQuOGwxLjQsOS4xbC0yLjMsNS4zbC0xLjUsNy4ybDIuNCw1LjVsLTAuMiwyLjUgbDUsMS44bDUtMS45bDMuMi0yLjFsOC43LTMuOGwtMS4yLTIuMmwtMS41LTRsLTAuNC0zLjJsMS4yLTUuN2wtMS40LTIuM2wtMC42LTUuMWwwLjEtNC42bC0yLjQtMy4zTDk3Ni44LDUwMi4xTDk3Ni44LDUwMi4xelwifSxHUjp7ZDpcIk0xMTAxLjksMzQ0LjlsLTAuOCwyLjhsNi42LDEuMnYxLjFsNy42LTAuNmwwLjUtMS45bC0yLjgsMC44di0xLjFsLTMuOS0wLjVsLTQuMSwwLjRMMTEwMS45LDM0NC45TDExMDEuOSwzNDQuOXogTTExMTMuNCwzMDcuNWwtMi43LTEuNmwwLjMsM2wtNC42LDAuNmwtMy45LTIuMWwtMy45LDEuN2wtMy44LTAuMmwtMSwwLjJsLTAuNywxLjFsLTIuOC0wLjFsLTEuOSwxLjNsLTMuMywwLjZ2MS42bC0xLjYsMC45IGwtMC4xLDIuMWwtMi4xLDNsMC41LDEuOWwyLjksMy42bDIuMywzbDEuMyw0LjNsMi4zLDUuMWw0LjYsMi45bDMuNC0wLjFsLTIuNC01LjdsMy4zLTAuN2wtMS45LTMuM2w1LDEuN2wtMC40LTMuN2wtMi43LTEuOGwtMy4yLTMgbDEuOC0xLjRsLTIuOC0zbC0xLjYtMy44bDAuOS0xLjNsMywzLjJoMi45bDIuNS0xbC0zLjktMy42bDYuMS0xLjZsMi43LDAuNmwzLjIsMC4ybDEuMS0wLjdMMTExMy40LDMwNy41TDExMTMuNCwzMDcuNXpcIn0sR0w6e2Q6XCJNODg3LjQsNzYuM2wtMjYtMC40bC0xMS44LDAuM2wtNSwxLjNsLTExLjUtMC4xbC0xMi43LDIuMWwtMS42LDEuN2w2LjcsMi4xbC02LjItMS4zbC00LjUtMC4zbC03LTEuNGwtMTAuNiwyLjEgbC0yLjctMS4yaC0xMC40bC0xMC45LDAuNmwtOC45LDFsLTAuMiwxLjhsLTUuMywwLjVMNzQ0LjIsODhsLTQuNiwxLjdsOC4xLDEuNWwtMi44LDEuNkw3MzAsOTVsLTE1LjUsMi4ybC0yLjIsMS43bDYuNCwybDE0LjUsMS4yIGwtNy41LDAuMmwtMTAuOSwxLjVsMy44LDMuMWwzLDEuNWw5LjQtMC4zbDEwLjEtMC4ybDcuNiwwLjNsOCwyLjlsLTEuNCwyLjFsMy42LDEuOWwxLjQsNS4zbDEsMy42bDEuNCwxLjlsLTcsNC44bDIuNiwxLjNsNC40LTAuOCBsMi42LDEuOGw1LjMsMy40bC03LjUtMS40aC0zLjhsLTMsMi44bC0xLjUsMy42bDQuMiwxLjhsNC0wLjhsMi42LTAuOGw1LjUtMS45bC0yLjgsNC4ybC0yLjYsMi4zbC03LjEsMmwtNyw2LjNsMiwybC0zLjQsNGwzLjcsNS4yIGwtMS41LDVsMC43LDMuN2w0LjgsNy4xbDAuOCw1LjZsMy4xLDMuMmg4LjlsNSw0LjdsNi41LTAuM2w0LjEtNS43bDMuNS00LjhsLTAuMy00LjRsOC42LTQuNmwzLjMtMy43bDEuNC0zLjlsNC43LTMuNWw2LjUtMS4zIGw2LjEtMS40bDMtMC4ybDEwLjItMy45bDcuNC01LjdsNC44LTIuMWw0LjYtMC4xbDEyLjUtMS44bDEyLjEtNC4zbDExLjktNC42bC01LjUtMC4zbC0xMC42LTAuMmw1LjMtMi44bC0wLjUtMy42bDQuMiwzbDIuNywyLjEgbDcuMy0xbC0wLjYtNC4zbC00LjUtMy4xbC01LTEuM2wyLjQtMS40bDcuMiwyLjFsMC41LTIuM2wtNC4xLTMuNGg1LjRsNS42LTAuOGwxLjctMS44bC00LTIuMWw4LjYtMC4zbC00LTQuM2w0LjEtMC41bDAuMS00LjIgbC02LjItMi41bDYuNC0xLjZsNS44LTAuMWwtMy42LTMuMmwxLjEtNS4xbDMuNi0yLjlsNC45LTMuMmwtOC0wLjJsMTEuMy0wLjdsMi4yLTFsMTQuNi0yLjlsLTEuNi0xLjdsLTEwLTAuOGwtMTYuOSwxLjVsLTkuMiwxLjUgbDQuNS0yLjNsLTIuMy0xLjRsLTcsMS4ybC05LjctMS40bC0xMi4xLDAuNWwtMS40LTAuN2wxOC4zLTAuNGwxMi45LTAuMmw2LjYtMS40TDg4Ny40LDc2LjNMODg3LjQsNzYuM3pcIn0sR0Q6e2Q6XCJNNjMyLjEsNDk1LjdsMC41LTAuMmwwLjItMS4xbC0wLjMtMC4xbC0wLjMsMC4zbC0wLjMsMC41djAuNGwtMC4yLDAuM0w2MzIuMSw0OTUuN0w2MzIuMSw0OTUuN3pcIn0sR1A6e2Q6XCJNNjM2LjQsNDcxLjFsMC4yLTAuMnYtMC4zbC0wLjItMC4zbC0wLjIsMC4xbC0wLjIsMC4zdjAuM2wwLjEsMC4xSDYzNi40TDYzNi40LDQ3MS4xeiBNNjM0LjUsNDcwLjNsMC4yLTAuMnYtMS4yIGwwLjEtMC4zbC0wLjItMC4xbC0wLjItMC4ybC0wLjYtMC4ybC0wLjEsMC4xbC0wLjIsMC4zbDAuMSwxLjVsMC4yLDAuNWwwLjIsMC4xTDYzNC41LDQ3MC4zTDYzNC41LDQ3MC4zeiBNNjM2LjEsNDY4LjlsMC44LTAuMiBsLTAuOS0wLjZsLTAuMi0wLjR2LTAuM2wtMC40LTAuM2wtMC4yLDAuMmwtMC4xLDAuM2wwLjEsMC41bC0wLjMsMC40bDAuMSwwLjRsMC40LDAuMUw2MzYuMSw0NjguOUw2MzYuMSw0NjguOXpcIn0sR1Q6e2Q6XCJNNDgyLjgsNDU4LjlsLTUuMS0wLjFoLTUuMmwtMC40LDMuNmgtMi42bDEuOCwyLjFsMS45LDEuNWwwLjUsMS40bDAuOCwwLjRsLTAuNCwyLjFINDY3bC0zLjMsNS4ybDAuNywxLjJsLTAuOCwxLjUgbC0wLjQsMS45bDIuNywyLjZsMi41LDEuM2wzLjQsMC4xbDIuOCwxLjFsMC4yLTFsMi4xLTEuNmwxLjEtMC43bC0wLjItMC43bDEuNC0wLjRsMS4zLTEuNmwtMC4zLTEuM2wwLjUtMS4ybDIuOC0xLjhsMi44LTIuNCBsLTEuNS0wLjhsLTAuNiwwLjlsLTEuNy0xLjFoLTEuNmwxLjItNy4yTDQ4Mi44LDQ1OC45TDQ4Mi44LDQ1OC45elwifSxHTjp7ZDpcIk05MTIuNCw0OTNsLTAuOCwwLjRsLTMtMC41bC0wLjQsMC43bC0xLjMsMC4xbC00LTEuNWwtMi43LTAuMWwtMC4xLDIuMWwtMC42LDAuN2wwLjQsMi4xbC0wLjgsMC45aC0xLjNsLTEuNCwxIGwtMS43LTAuMWwtMi42LDMuMWwxLjYsMS4xbDAuOCwxLjRsMC43LDIuOGwxLjMsMS4ybDEuNSwwLjlsMi4xLDIuNWwyLjQsMy43bDMtMi44bDAuNy0xLjdsMS0xLjRsMS41LTAuMmwxLjMtMS4yaDQuNWwxLjUsMi4zIGwxLjIsMi43TDkxNyw1MTVsMC45LDEuN3YyLjNsMS41LTAuM2wxLjItMC4ybDEuNS0wLjdsMi4zLDMuOWwtMC40LDIuNmwxLjEsMS4zbDEuNiwwLjFsMS4xLTIuNmwxLjYsMC4yaDAuOWwwLjMtMi44bC0wLjQtMS4yIGwwLjYtMC45bDItMC44bC0xLjMtNS4xbC0xLjMtMi42bDAuNS0yLjJsMS4xLTAuNWwtMS43LTEuOGwwLjMtMS45bC0wLjctMC43bC0xLjIsMC42bDAuMi0yLjFsMS4yLTEuNmwtMi4zLTIuN2wtMC42LTEuN2wtMS4zLTEuNCBsLTEuMS0wLjJsLTEuMywwLjlsLTEuOCwwLjhsLTEuNiwxLjRsLTIuNC0wLjVsLTEuNS0xLjZsLTAuOS0wLjJsLTEuNSwwLjhoLTAuOUw5MTIuNCw0OTNMOTEyLjQsNDkzelwifSxHVzp7ZDpcIk05MDAuMiw0OTIuMWwtMTAuMy0wLjNsLTEuNSwwLjdsLTEuOC0wLjJsLTMsMS4xbDAuMywxLjNsMS43LDEuNHYwLjlsMS4yLDEuOGwyLjQsMC41bDIuOSwyLjZsMi42LTMuMWwxLjcsMC4xIGwxLjQtMWgxLjNsMC44LTAuOWwtMC40LTIuMWwwLjYtMC43TDkwMC4yLDQ5Mi4xTDkwMC4yLDQ5Mi4xelwifSxHWTp7ZDpcIk02NTYuMSw1MzQuMmwtMi4xLTIuM2wtMi45LTMuMWwtMi4xLTAuMWwtMC4xLTMuM2wtMy4zLTQuMWwtMy42LTIuNGwtNC42LDMuOGwtMC42LDIuM2wxLjksMi4zbC0xLjUsMS4ybC0zLjQsMS4xIHYyLjlsLTEuNiwxLjhsMy43LDQuOGwyLjktMC4zbDEuMywxLjVsLTAuOCwyLjhsMS45LDAuOWwxLjIsM2wtMS42LDIuMmwtMSw1LjRsMS40LDMuM2wwLjMsMi45bDMuNSwzbDIuNywwLjNsMC43LTEuM2wxLjctMC4yIGwyLjYtMS4xbDEuOC0xLjdsMy4xLDAuNWwxLjQtMC4ybC0zLjMtNS42TDY1NSw1NTFsLTEuOC0wLjFsLTIuNC00LjZsMS4xLTMuM2wtMC4zLTEuNWwzLjUtMS42TDY1Ni4xLDUzNC4yTDY1Ni4xLDUzNC4yelwifSxIVDp7ZDpcIk01ODAuNiw0NDYuN2wtNC42LTFsLTMuNC0wLjJsLTEuNCwxLjdsMy40LDFsLTAuMywyLjRsMi4yLDIuOGwtMi4xLDEuNGwtNC4yLTAuNWwtNS0wLjlsLTAuNywyLjFsMi44LDEuOWwyLjctMS4xIGwzLjMsMC40bDIuNy0wLjRsMy42LDEuMWwwLjItMS44bC0xLjItMS45bDEuNS0xLjFsMC43LTIuNEw1ODAuNiw0NDYuN3pcIn0sSE46e2Q6XCJNNTE0LjEsNDc2LjhsLTEuMy0xLjhsLTEuOS0xbC0xLjUtMS40bC0xLjYtMS4ybC0wLjgtMC4xbC0yLjUtMC45bC0xLjEsMC41bC0xLjUsMC4ybC0xLjMtMC40bC0xLjctMC40bC0wLjgsMC43IGwtMS44LDAuN2wtMi42LDAuMmwtMi41LTAuNmwtMC45LDAuNGwtMC41LTAuNmwtMS42LDAuMWwtMS4zLDEuMWwtMC42LTAuMmwtMi44LDIuNGwtMi44LDEuOGwtMC41LDEuMmwwLjMsMS4zbC0xLjMsMS42bDEuNSwwLjUgbDEuMSwxLjNsMS42LDFsMC4xLDAuOWwyLjUtMC44bDEuMSwwLjVsMC43LDAuN2wtMC42LDIuNWwxLjcsMC42bDAuNywybDEuOC0wLjNsMC44LTEuNWgwLjhsMC4yLTMuMWwxLjMtMC4yaDEuMmwxLjQtMS43bDEuNSwxLjMgbDAuNi0wLjhsMS4xLTAuN2wyLjEtMS44bDAuMy0xLjNsMC41LDAuMWwwLjgtMS41bDAuNi0wLjJsMC45LDAuOWwxLjEsMC4zbDEuMy0wLjhoMS40bDItMC44bDAuOS0wLjlMNTE0LjEsNDc2LjhMNTE0LjEsNDc2Ljh6XCJ9LEhLOntkOlwiTTE2MDQuOSw0MzAuOXYtMC4ydi0wLjJsLTAuNC0wLjJoLTAuM2wwLjEsMC4ybDAuNCwwLjVMMTYwNC45LDQzMC45TDE2MDQuOSw0MzAuOXogTTE2MDMuNiw0MzAuOWwtMC4xLTAuNWwwLjItMC4zIGwtMC45LDAuM2wtMC4xLDAuM3YwLjFsMC4yLDAuMUgxNjAzLjZMMTYwMy42LDQzMC45eiBNMTYwNS4yLDQyOS43bC0wLjEtMC4zbC0wLjItMC4xbC0wLjEtMC4zbC0wLjEtMC4ybDAsMGwtMC4zLTAuMWwtMC4yLTAuMSBoLTAuNGwtMC4xLDAuMWgtMC4ybC0wLjIsMC4ybDAsMHYwLjJsLTAuNSwwLjR2MC4ybDAuMywwLjJsMC41LTAuMWwwLjYsMC4ybDAuOCwwLjN2LTAuMnYtMC4zTDE2MDUuMiw0MjkuN0wxNjA1LjIsNDI5Ljd6XCJ9LEhVOntkOlwiTTEwNzkuMSwyNjMuOGwtMS42LDAuNGwtMSwxLjVsLTIuMiwwLjdsLTAuNi0wLjRsLTIuMywxbC0xLjksMC4ybC0wLjMsMS4ybC00LjEsMC44bC0xLjktMC43bC0yLjYtMS42bC0wLjIsMi42IGgtMi44bDEuMSwxLjNsLTEuMyw0bDAuOCwwLjFsMS4yLDIuMWwxLjYsMC44bDQsMi42bDQuMiwxLjJsMS44LTAuOWwwLDBsMy43LTEuNmwzLjIsMC4ybDMuOC0xLjFsMi42LTQuM2wxLjktNC4ybDIuOS0xLjNsLTAuNi0xLjYgbC0yLjktMS43bC0xLDAuNkwxMDc5LjEsMjYzLjhMMTA3OS4xLDI2My44elwifSxJUzp7ZDpcIk05MTUuNywxNTguNmwtNi45LTAuNGwtNy4zLDIuOWwtNS4xLTEuNWwtNi45LDNsLTUuOS0zLjhsLTYuNSwwLjhsLTMuNiwzLjdsOC43LDEuM2wtMC4xLDEuNmwtNy44LDEuMWw4LjgsMi43IGwtNC42LDIuNWwxMS43LDEuOGw1LjYsMC44bDMuOS0xbDEyLjktMy45bDYuMS00LjJsLTQuNC0zLjhMOTE1LjcsMTU4LjZMOTE1LjcsMTU4LjZ6XCJ9LElOOntkOlwiTTE0MTQuMSwzODAuMWwtOC41LTQuNGwtNi4yLTRsLTMuMi03bDQuMSwwLjlsLTAuNi0zLjNsLTMtMy4zbC0wLjgtNS4ybC03LjYtNy41bC0zLjcsNS40bC01LjcsMWwtOC41LTEuNiBsLTEuOSwyLjhsMy4yLDUuNmwyLjksNC4zbDUsMy4xbC0zLjcsMy43bDEsNC41bC0zLjksNi4zbC0yLjEsNi41bC00LjUsNi43bC02LjQtMC41bC00LjksNi42bDQsMi45bDEuMyw0LjlsMy41LDMuMmwxLjgsNS41aC0xMiBsLTMuMiw0LjJsNy4xLDUuNGwxLjksMi41bC0yLjQsMi4zbDgsNy43bDQsMC44bDcuNi0zLjhsMS43LDUuOWwwLjgsNy44bDIuNSw4LjFsMy42LDEyLjNsNS44LDguOGwxLjMsMy45bDIsOGwzLjQsNi4xbDIuMiwzIGwyLjUsNi40bDMuMSw4LjlsNS41LDZsMi4yLTEuOGwxLjctNC40bDUtMS44bC0xLjgtMi4xbDIuMi00LjhsMi45LTAuM2wtMC43LTEwLjhsMS45LTYuMWwtMC43LTUuM2wtMS45LTguMmwxLjItNC45bDIuNS0wLjMgbDQuOC0yLjNsMi42LTEuNmwtMC4zLTIuOWw1LTQuMmwzLjctNGw1LjMtNy41bDcuNC00LjJsMi40LTMuOGwtMC45LTQuOGw2LjYtMS4zbDMuNywwLjFsMC41LTIuNGwtMS42LTUuMmwtMi42LTQuOGwwLjQtMy44IGwtMy43LTEuN2wwLjgtMi4zbDMuMS0yLjRsLTQuNi0zLjRsMS4yLTQuM2w0LjgsMi43bDIuNywwLjRsMS4yLDQuNGw1LjQsMC45bDUtMC4xbDMuNCwxLjFsLTEuNiw1LjNsLTIuNCwwLjRsLTEuMSwzLjZsMy41LDMuMyBsMC4yLTRsMS41LTAuMWw0LjUsMTAuMWwyLjQtMS41bC0wLjktMi43bDAuOS0yLjFsLTAuOS02LjZsNC42LDEuNGwxLjUtNS4ybC0wLjMtMy4xbDIuMS01LjRsLTAuOS0zLjZsNi4xLTQuNGw0LjEsMS4xbC0xLjMtMy45IGwxLjYtMS4ybC0wLjktMi40bC02LjEtMC45bDEuMi0yLjdsLTMuNS0zLjlsLTMuMiwyLjZsLTQuOS0xLjVsLTUuMyw0bC0zLjksNC44bC00LjIsMC44bDIuNywybDAuNCwzLjlsLTQuNCwwLjJsLTQuNy0wLjRsLTMuMiwxIGwtNS41LTIuNWwtMC4zLTEuMmwtMS41LTUuMWwtMywxLjRsMC4xLDIuN2wxLjUsNC4xbC0wLjEsMi41bC00LjYsMC4xbC02LjgtMS41bC00LjMtMC42bC0zLjgtMy4ybC03LjYtMC45bC03LjctMy41bC01LjgtMy4xIGwtNS43LTIuNWwwLjktNS45TDE0MTQuMSwzODAuMUwxNDE0LjEsMzgwLjF6XCJ9LElEOntkOlwiTTE2NTEuOSw2MzcuM2wwLjUtMS43bC0xLjgtMS45bC0yLjgtMmwtNS4zLDEuM2w3LDQuNEwxNjUxLjksNjM3LjNMMTY1MS45LDYzNy4zeiBNMTY3Mi44LDYzNi43bDQtNC44bDAuMS0xLjkgbC0wLjUtMS4zbC01LjcsMi42bC0yLjgsMy45bC0wLjcsMi4xbDAuNiwwLjhMMTY3Mi44LDYzNi43TDE2NzIuOCw2MzYuN3ogTTE2MzcuMiw2MjMuN2wtMS42LDIuMmwtMy4xLDAuMWwtMi4yLDMuNmwzLDAuMWwzLjktMC45IGw2LjYtMS4ybC0xLjItMi44bC0zLjUsMC42TDE2MzcuMiw2MjMuN0wxNjM3LjIsNjIzLjd6IE0xNjY1LjMsNjIzLjdsLTUuMiwyLjNsLTMuOCwwLjVsLTMuNC0xLjlsLTQuNSwxLjNsLTAuMiwyLjNsNy40LDAuOCBsOC42LTEuOEwxNjY1LjMsNjIzLjdMMTY2NS4zLDYyMy43eiBNMTU4NS44LDYxNS4zbC0wLjctMi4zbC0yLjMtMC41bC00LjQtMi40bC02LjgtMC40bC00LjEsNi4xbDUuMSwwLjRsMC44LDIuOGwxMCwyLjZsMi40LTAuOCBsNC4xLDAuNmw2LjMsMi40bDUuMiwxLjJsNS44LDAuNWw1LjEtMC4ybDUuOSwyLjVsNi42LTIuNGwtNi42LTMuOGwtOC4zLTEuMWwtMS44LTQuMWwtMTAuMy0zLjFsLTEuMywyLjZMMTU4NS44LDYxNS4zIEwxNTg1LjgsNjE1LjN6IE0xNzMyLjQsNjExLjdsMC4yLTNsLTEuMi0xLjlsLTEuMywyLjJsLTEuMiwyLjJsMC4zLDQuOEwxNzMyLjQsNjExLjd6IE0xNjkxLjQsNTk0LjJsLTEuNC0yLjFsLTUuNywwLjNsMSwyLjcgbDMuOSwxLjJMMTY5MS40LDU5NC4yTDE2OTEuNCw1OTQuMnogTTE3MDkuNSw1OTEuOGwtNi4xLTEuOGwtNi45LDAuM2wtMS41LDMuNWwzLjksMC4ybDMuMi0wLjRsNC42LDAuNWw0LjcsMi42TDE3MDkuNSw1OTEuOCBMMTcwOS41LDU5MS44eiBNMTczMC41LDU3OS41bC0wLjgtMi40bC05LTIuNmwtMi45LDIuMWwtNy42LDEuNWwyLjMsMy4ybDUsMS4ybDIuMSwzLjdsOC4zLDAuMWwwLjQsMS42bC00LTAuMWwtNi4yLDIuM2w0LjIsMy4xIGwtMC4xLDIuOGwxLjIsMi4zbDIuMS0wLjVsMS44LTMuMWw4LjIsNS45bDQuNiwwLjVsMTAuNiw1LjRsMi4zLDUuM2wxLDYuOWwtMy43LDEuOGwtMi44LDUuMmw3LjEtMC4ybDEuNi0xLjhsNS41LDEuM2w0LjYsNS4yIGwxLjUtMjAuOGwxLTIwLjdsLTYtMS4ybC00LjEtMi4zbC00LjctMi4yaC01bC02LjYsMy44bC00LjksNi44bC01LjctMy44TDE3MzAuNSw1NzkuNXogTTE2ODAuNSw1NjMuMWwtMS0xLjRsLTUuNSw0LjZsLTYuNSwwLjMgbC03LjEtMC45bC00LjQtMS45bC00LjcsNC44bC0xLjIsMi42bC0yLjksOS42bC0wLjksNWwtMi40LDQuMmwxLjYsNC4zbDIuMywwLjFsMC42LDYuMWwtMS45LDUuOWwyLjMsMS45bDMuNi0xbDAuMy05LjFsLTAuMi03LjQgbDMuOC0xLjlsLTAuNyw2LjJsMy45LDMuN2wtMC44LDIuNWwxLjMsMS43bDUuNi0yLjRsLTMsNS4ybDIuMSwyLjJsMy4xLTEuOWwwLjMtNC4xbC00LjctNy40bDEuMS0yLjJsLTUuMS04LjFsNS0yLjVsMi42LTMuNyBsMi40LDAuOWwwLjUtMi45bC0xMC41LDIuMWwtMy4xLDIuOWwtNS01LjZsMC45LTQuOGw0LjktMWw5LjMtMC4zbDUuNCwxLjNsNC4zLTEuM0wxNjgwLjUsNTYzLjFMMTY4MC41LDU2My4xeiBNMTY5OS45LDU2NSBsLTAuNi0yLjZsLTMuMy0wLjZsLTAuNS0zLjVsLTEuOCwyLjNsLTEsNS4xbDEuNyw4LjJsMi4yLDRsMS42LTAuOGwtMi4zLTMuM2wwLjktMy45bDIuOSwwLjZMMTY5OS45LDU2NUwxNjk5LjksNTY1eiBNMTYzOSw1NjAuNSBsMC45LTIuOWwtNC4zLTZsMy01LjhsLTUtMWgtNi40bC0xLjcsNy4ybC0yLDIuMmwtMi43LDguOWwtNC41LDEuM2wtNS40LTEuOGwtMi43LDAuNmwtMy4yLDMuMmwtMy42LTAuNGwtMy42LDEuMmwtMy45LTMuNWwtMS00LjMgbC0zLjMsNC4ybC0wLjYsNS45bDAuOCw1LjZsMi42LDUuNGwyLjgsMS44bDAuNyw4LjVsNC42LDAuOGwzLjYtMC40bDIsMy4xbDYuNy0yLjNsMi44LDJsNCwwLjRsMiwzLjlsNi41LTIuOWwwLjgsMi4zbDIuNS05LjcgbDAuMy02LjRsNS41LTQuM2wtMC4yLTUuOGwxLjgtNC4zbDYuNy0wLjhMMTYzOSw1NjAuNUwxNjM5LDU2MC41eiBNMTU3MC4zLDYwOS40bDAuNy05LjhsMS43LThsLTIuNi00bC00LjEtMC41bC0xLjktMy42bC0wLjktNC40IGwtMi0wLjJsLTMuMi0yLjJsMi4zLTUuMmwtNC4zLTIuOWwtMy4zLTUuM2wtNC44LTQuNGwtNS43LTAuMWwtNS41LTYuOGwtMy4yLTIuN2wtNC41LTQuM2wtNS4yLTYuMmwtOC44LTEuMmwtMy42LTAuM2wwLjYsMy4yIGw2LjEsN2w0LjQsMy42bDMuMSw1LjVsNS4xLDRsMi4yLDQuOWwxLjcsNS41bDQuOSw1LjNsNC4xLDguOWwyLjcsNC44bDQuMSw1LjJsMi4yLDMuOGw3LDUuMmw0LjUsNS4zTDE1NzAuMyw2MDkuNEwxNTcwLjMsNjA5LjR6XCJ9LElSOntkOlwiTTEyMTMuNSwzMjQuNGwtMy4yLTIuOWwtMS4yLTIuNGwtMy4zLDEuOGwyLjksNy4zbC0wLjcsMmwzLjcsNS4ybDAsMGw0LjcsNy44bDMuNywxLjlsMSwzLjhsLTIuMywyLjJsLTAuNSw1IGw0LjYsNi4xbDcsMy40bDMuNSw0LjlsLTAuMiw0LjZoMS43bDAuNSwzLjNsMy40LDMuNGwxLjctMi41bDMuNywyLjFsMi44LTFsNS4xLDguNGw0LjMsNi4xbDUuNSwxLjhsNi4xLDQuOWw2LjksMi4xbDUuMS0zLjFsNC0xLjEgbDIuOCwxLjFsMy4yLDcuOGw2LjMsMC44bDYuMSwxLjVsMTAuNSwxLjlsMS4yLTcuNGw3LjQtMy4zbC0wLjktMi45bC0yLjctMWwtMS01LjdsLTUuNi0yLjdsLTIuOC0zLjlsLTMuMi0zLjNsMy45LTUuOGwtMS4xLTQgbC00LjMtMS4xbC0xLjEtNGwtMi43LTUuMWwxLjYtMy41bC0yLjUtMC45bDAuNS00LjdsMC41LThsLTEuNi01LjVsLTMuOS0wLjJsLTcuMy01LjdsLTQuMy0wLjdsLTYuNS0zLjNsLTMuOC0wLjZsLTIuMSwxLjIgbC0zLjUtMC4ybC0zLDMuN2wtNC40LDEuMmwtMC4yLDEuNmwtNy45LDEuN2wtNy42LTEuMWwtNC4zLTMuM2wtNS4yLTEuM2wtMi41LTQuOGwtMS4zLDAuM2wtMy44LTMuNGwxLjItMy4xbC0xLjktMS45bC0xLjksMC41IGwtNS4zLDQuN2wtMS44LDAuMkwxMjEzLjUsMzI0LjRMMTIxMy41LDMyNC40elwifSxJUTp7ZDpcIk0xMjA3LjMsMzM0LjlsLTYuMi0wLjlsLTIuMSwxbC0yLjEsNC4xbC0yLjcsMS42bDEuMiw0LjdsLTAuOSw3LjhsLTExLDYuN2wzLjEsNy43bDYuNywxLjdsOC41LDQuNWwxNi43LDEyLjcgbDEwLjIsMC41bDMuMi02LjFsMy43LDAuNWwzLjIsMC40bC0zLjQtMy40bC0wLjUtMy4zaC0xLjdsMC4yLTQuNmwtMy41LTQuOWwtNy0zLjRsLTQuNi02LjFsMC41LTVsMi4zLTIuMmwtMS0zLjhsLTMuNy0xLjkgbC00LjctNy44bDAsMGwtMi4zLDEuMUwxMjA3LjMsMzM0LjlMMTIwNy4zLDMzNC45elwifSxJRTp7ZDpcIk05NDcuMywyMzEuN2wtMy41LTEuM2wtMi45LDAuMWwxLjEtMy4ybC0wLjgtMy4ybC0zLjcsMi44bC02LjcsNC43bDIuMSw2LjFsLTQuMiw2LjRsNi43LDAuOWw4LjctMy42bDMuOS01LjQgTDk0Ny4zLDIzMS43TDk0Ny4zLDIzMS43elwifSxJTDp7ZDpcIk0xMTY3LjgsMzYwLjVsLTEuNCwwLjFsLTAuNCwxLjFoLTEuOGwtMC4xLDAuMWwtMC42LDEuNmwtMC42LDQuOGwtMS4xLDIuOWwwLjQsMC40bC0xLjQsMi4xbDAsMGwzLjksOS4ybDAuNywxLjcgbDEuNy0xMC4ybC0wLjQtMi40bC0yLjQsMC44bDAuMS0xLjdsMS4yLTAuOGwtMS40LTAuN2wwLjctNC4zbDIsMC45bDAuNy0yaC0wLjFsMC42LTFMMTE2Ny44LDM2MC41TDExNjcuOCwzNjAuNXpcIn0sSVQ6e2Q6XCJNMTA1Ny44LDMyOC42bC0xLjYsNS4xbDAuOSwybC0wLjksMy4zbC00LjItMi40bC0yLjctMC43bC03LjUtMy4zbDAuNi0zLjRsNi4yLDAuNmw1LjItMC43TDEwNTcuOCwzMjguNnogTTEwNzIuMywzMTYuMmwtMC44LDIuM2wtMy4xLTNsLTQuNS0xbC0xLjksNC4xbDMuOSwyLjNsLTAuNCwzLjNsLTIuMSwwLjRsLTIuNSw1LjZsLTIuMSwwLjVsLTAuMS0ybDAuOC0zLjVsMS4xLTEuM2wtMi4zLTMuNyBsLTEuOC0zLjJsLTIuMi0wLjhsLTEuNy0yLjdsLTMuNC0xLjJsLTIuMy0yLjVsLTMuOS0wLjRsLTQuMi0yLjhsLTQuOS00bC0zLjYtMy42bC0xLjktNmwtMi42LTAuN2wtNC4yLTIuMWwtMi4zLDAuOWwtMi44LDIuOCBsLTIuMSwwLjVsMC41LTIuN2wtMi43LTAuOGwtMS41LTQuOGwxLjctMS44bC0xLjYtMi40bDAuMi0xLjdsMi4yLDEuM2wyLjQtMC4zbDIuNy0yLjFsMC45LDFsMi40LTAuMmwwLjktMi41bDMuOCwwLjhsMi4xLTEuMSBsMC4zLTIuNWwzLjEsMC45bDAuNS0xLjJsNC44LTEuMWwxLjMsMi4ybDcuMiwxLjZsLTAuMywzbDEuNCwyLjdsLTQuMS0wLjlsLTMuOSwyLjJsMC40LDNsLTAuNSwxLjhsMS45LDMuMWw0LjksMy4xbDIuOSw1LjFsNiw1IGw0LTAuMWwxLjQsMS40bC0xLjQsMS4ybDQuOCwyLjNsMy45LDEuOWw0LjcsMy4yTDEwNzIuMywzMTYuMnogTTEwNDAuMiwzMDUuM2wtMC4xLTAuNmwtMC42LDAuMWwtMC4yLDAuNUgxMDQwLjJ6IE0xMDQwLjMsMjkyLjQgbC0wLjksMC4zbDAuMiwwLjlsMC43LTAuMUwxMDQwLjMsMjkyLjR6IE0xMDIxLjYsMzExLjZsLTIuOC0wLjNsMS4zLDMuNmwwLjQsNy42bDIuMSwxLjdsMi0yLjFsMi40LDAuNGwwLjQtOC40bC0zLjMtNC40IEwxMDIxLjYsMzExLjZ6XCJ9LENJOntkOlwiTTk0Ni41LDUwNi4ybC0yLjMsMC45bC0xLjMsMC44bC0wLjktMi43bC0xLjYsMC43bC0xLTAuMWwtMSwxLjlsLTQuMy0wLjFsLTEuNi0xbC0wLjcsMC42bC0xLjEsMC41bC0wLjUsMi4yIGwxLjMsMi42bDEuMyw1LjFsLTIsMC44bC0wLjYsMC45bDAuNCwxLjJsLTAuMywyLjhoLTAuOWwtMC4zLDEuOGwwLjYsMy4xbC0xLjIsMi44bDEuNiwxLjhsMS44LDAuNGwyLjMsMi43bDAuMiwyLjVsLTAuNSwwLjggbC0wLjUsNS4ybDEuMSwwLjJsNS42LTIuNGwzLjktMS44bDYuNi0xLjFsMy42LTAuMWwzLjksMS4zbDIuNi0wLjFsMC4yLTIuNWwtMi40LTUuNWwxLjUtNy4ybDIuMy01LjNsLTEuNC05LjFsLTMuOC0xLjZsLTIuNywwLjIgbC0xLjksMS42bC0yLjUtMS4zbC0xLTIuMUw5NDYuNSw1MDYuMkw5NDYuNSw1MDYuMnpcIn0sSk06e2Q6XCJNNTUwLjcsNDU4LjVsMy45LTAuMWwtMC44LTEuOGwtMi43LTEuNWwtMy43LTAuNmwtMS4yLTAuMmwtMi40LDAuNGwtMC44LDEuNWwyLjksMi4zbDMsMUw1NTAuNyw0NTguNUw1NTAuNyw0NTguNXogXCJ9LEpQOntkOlwiTTE2OTIuNSwzNTQuOWwtNC41LTEuM2wtMS4xLDIuN2wtMy4zLTAuOGwtMS4zLDMuOGwxLjIsM2w0LjIsMS44bC0wLjEtMy43bDIuMS0xLjVsMy4xLDIuMWwxLjMtMy45TDE2OTIuNSwzNTQuOSBMMTY5Mi41LDM1NC45eiBNMTcxNi45LDMzNS42bC0zLjYtNi43bDEuMy02LjRsLTIuOC01LjJsLTguMS04LjdsLTQuOCwxLjJsMC4yLDMuOWw1LjEsNy4xbDEsNy45bC0xLjcsMi41bC00LjUsNi41bC01LTMuMXYxMS41IGwtNi4zLTEuM2wtOS42LDEuOWwtMS45LDQuNGwtMy45LDMuM2wtMS4xLDRsLTQuMywybDQsNC4zbDQuMSwxLjlsMC45LDUuN2wzLjUsMi41bDIuNS0yLjdsLTAuOC0xMC44bC03LjMtNC43bDYuMS0wLjFsNS0zbDguNi0xLjQgbDIuNCw0LjhsNC42LDIuNGw0LjQtNy4zbDkuMS0wLjRsNS40LTNsMC42LTQuNmwtMi41LTMuMkwxNzE2LjksMzM1LjZMMTcxNi45LDMzNS42eiBNMTcwNS4xLDI5MS40bC01LjMtMi4xbC0xMC40LTYuNGwxLjksNC44IGw0LjMsOC41bC01LjIsMC40bDAuNiw0LjdsNC42LDYuMWg1LjdsLTEuNi02LjhsMTAuOCw0LjJsMC40LTYuMWw2LjQtMS43bC02LTYuOWwtMS43LDIuNkwxNzA1LjEsMjkxLjRMMTcwNS4xLDI5MS40elwifSxKTzp7ZDpcIk0xMTg2LjYsMzY3LjZsLTMuMS03LjdsLTkuNiw2LjdsLTYuMy0yLjVsLTAuNywybDAuNCwzLjlsLTAuNiwxLjlsMC40LDIuNGwtMS43LDEwLjJsMC4zLDAuOWw2LjEsMWwyLjEtMmwxLjEtMi4zIGw0LTAuOGwwLjctMi4ybDEuNy0xbC02LjEtNi40bDEwLjQtMy4xTDExODYuNiwzNjcuNkwxMTg2LjYsMzY3LjZ6XCJ9LEtaOntkOlwiTTEzMDguOCwyMjMuOGwtOS0xLjNsLTMuMSwyLjVsLTEwLjgsMi4ybC0xLjcsMS41bC0xNi44LDIuMWwtMS40LDIuMWw1LDQuMWwtMy45LDEuNmwxLjUsMS43bC0zLjYsMi45bDkuNCw0LjIgbC0wLjIsM2wtNi45LTAuM2wtMC44LDEuOGwtNy4zLTMuMmwtNy42LDAuMmwtNC4zLDIuNWwtNi42LTIuNGwtMTEuOS00LjNsLTcuNSwwLjJsLTguMSw2LjZsMC43LDQuNmwtNi0zLjZsLTIuMSw2LjhsMS43LDEuMiBsLTEuNyw0LjdsNS4zLDQuM2wzLjYtMC4ybDQuMiw0LjFsMC4yLDMuMmwyLjgsMWw0LjQtMS4zbDUtMi43bDQuNywxLjVsNC45LTAuM2wxLjksMy45bDAuNiw2bC00LjYtMC45bC00LDFsMC45LDQuNWwtNS0wLjZsMC42LDIgbDMuMiwxLjZsMy43LDUuNWw2LjQsMi4xbDEuNSwyLjFsLTAuNywyLjZsMC43LDEuNWwxLjgtMmw1LjUtMS4zbDMuOCwxLjdsNC45LDQuOWwyLjUtMC4zbC02LjItMjIuOGwxMS45LTMuNmwxLjEsMC41bDkuMSw0LjUgbDQuOCwyLjNsNi41LDUuNWw1LjctMC45bDguNi0wLjVsNy41LDQuNWwxLjUsNi4ybDIuNSwwLjFsMi42LDVsNi42LDAuMmwyLjMsM2gxLjlsMC45LTQuNWw1LjQtNC4zbDIuNS0xLjJsMC4zLTIuN2wzLjEtMC44IGw5LjEsMi4xbC0wLjUtMy42bDIuNS0xLjNsOC4xLDIuNmwxLjYtMC43bDguNiwwLjJsNy44LDAuNmwzLjMsMi4ybDMuNSwwLjlsLTEuNy0zLjVsMi45LTEuNmwtOC43LTEwLjdsOS0yLjRsMi0xLjRsLTEtMTEuMWwxMC43LDIgbDEuNi0yLjhsLTIuNS02LjJsMy44LTAuNmwxLjgtNC4ybC00LjMtMy44bC02LDAuOWwtMy4zLTIuNmwtMy45LTEuMmwtNC4xLTMuNmwtMy4yLTEuMWwtNi4yLDEuNmwtOC4zLTMuNmwtMS4xLDMuM2wtMTguMS0xNS41IGwtOC4zLTQuN2wwLjgtMS45bC05LjEsNS43bC00LjQsMC40bC0xLjItMy4zbC03LTIuMWwtNC4zLDEuNUwxMzA4LjgsMjIzLjhMMTMwOC44LDIyMy44elwifSxLRTp7ZDpcIk0xMjExLjcsNTQ3LjJoLTMuOGwtMi4zLTIuMWwtNS4xLDIuNmwtMS42LDIuN2wtMy44LTAuNWwtMS4yLTAuN2wtMS4zLDAuMWgtMS44bC03LjItNS40aC0zLjlsLTItMi4xdi0zLjYgbC0yLjktMS4xbC0zLjgsNC4ybC0zLjQsMy44bDIuNyw0LjRsMC43LDMuMmwyLjYsNy4zbC0yLjEsNC43bC0yLjcsNC4ybC0xLjYsMi42djAuM2wxLjQsMi40bC0wLjQsNC43bDIwLjIsMTNsMC40LDMuN2w4LDYuMyBsMi4yLTIuMWwxLjItNC4ybDEuOC0yLjZsMC45LTQuNWwyLjEtMC40bDEuNC0yLjdsNC0yLjVsLTMuMy01LjNsLTAuMi0yMy4yTDEyMTEuNyw1NDcuMkwxMjExLjcsNTQ3LjJ6XCJ9LEtXOntkOlwiTTEyMzUuNiwzODEuNGwtMy43LTAuNWwtMy4yLDYuMWw0LjksMC42bDEuNywzLjFsMy44LTAuMmwtMi40LTQuOGwwLjMtMS41TDEyMzUuNiwzODEuNEwxMjM1LjYsMzgxLjR6XCJ9LEtHOntkOlwiTTEzODcuMiwzMDIuNmwtMy41LTAuOWwtMy4zLTIuMmwtNy44LTAuNmwtOC42LTAuMmwtMS42LDAuN2wtOC4xLTIuNmwtMi41LDEuM2wwLjUsMy42bC05LjEtMi4xbC0zLjEsMC44bC0wLjMsMi43IGwxLjgsMC42bC0zLjEsNC4xbDQuNiwyLjNsMy4yLTEuNmw3LjEsMy4zbC01LjIsNC41bC00LjEtMC42bC0xLjQsMmwtNS45LTEuMWwwLjYsMy43bDUuNC0wLjVsNy4xLDJsOS41LTAuOWwxLTEuNWwtMS4xLTEuNWw0LTMgbDMuMi0xLjJsNS43LDAuOWwwLjYtNGw2LjQtMC44bDEtMi40bDYuOC0zLjRMMTM4Ny4yLDMwMi42TDEzODcuMiwzMDIuNnpcIn0sTEE6e2Q6XCJNMTU3NC44LDQ4MS44bDAuMi02LjRsLTItNC41bC00LjgtNC40bC00LjMtNS42bC01LjctNy41bC03LjMtMy44bDEuMy0yLjNsMy4zLTEuN2wtMy01LjVsLTYuOC0wLjFsLTMuNC01LjcgbC00LTUuMWwtMi43LDFsMS45LDcuMmwtMi45LTAuMWwtMC43LTEuNWwtNC4xLDQuMWwtMC44LDIuNGwyLjYsMS45bDAuOSwzLjhsMy44LDAuM2wtMC40LDYuN2wxLDUuN2w1LjMtMy44bDEuOCwxLjJsMy4yLTAuMiBsMC44LTIuMmw0LjMsMC40bDQuOSw1LjJsMS4zLDYuM2w1LjIsNS41bDAuNSw1LjRsLTEuNSwyLjlsNC45LDIuNGwyLTQuM0wxNTc0LjgsNDgxLjhMMTU3NC44LDQ4MS44elwifSxMVjp7ZDpcIk0xMTAyLjEsMjEwLjFoLTMuOGwtNC40LTIuMmwtMi4xLTAuN2wtMy43LDFsLTAuMiw0LjZsLTMuNiwwLjFsLTQuNC00LjVsLTQsMi4xbC0xLjcsMy43bDAuNSw0LjVsNS0xLjlsNy45LDAuNCBsNC40LTAuNmwwLjksMS4zbDIuNSwwLjRsNSwyLjlsMi42LTFsNC42LTIuM2wtMi4xLTMuNmwtMS0yLjhMMTEwMi4xLDIxMC4xTDExMDIuMSwyMTAuMXpcIn0sTEI6e2Q6XCJNMTE2Ny44LDM2MC41bDAuOS0zLjVsMi42LTIuNGwtMS4yLTIuNWwtMi40LTAuM2wtMC4xLDAuMmwtMi4xLDQuNWwtMS4zLDUuMmgxLjhsMC40LTEuMUwxMTY3LjgsMzYwLjUgTDExNjcuOCwzNjAuNXpcIn0sTFM6e2Q6XCJNMTEyOC4xLDc2Ni41bDEuMS0ybDMuMS0xbDEuMS0yLjFsMS45LTMuMWwtMS43LTEuOWwtMi4zLTJsLTIuNiwxLjNsLTMuMSwyLjVsLTMuMiw0bDMuNyw0LjlMMTEyOC4xLDc2Ni41IEwxMTI4LjEsNzY2LjV6XCJ9LExSOntkOlwiTTkyOS40LDUyMy4zbC0xLjYtMC4ybC0xLjEsMi42bC0xLjYtMC4xbC0xLjEtMS4zbDAuNC0yLjZsLTIuMy0zLjlsLTEuNSwwLjdsLTEuMiwwLjJsLTIuNiwzbC0yLjYsMy40bC0wLjMsMS45IGwtMS4zLDJsMy43LDQuMWw0LjgsMy41bDUuMSw0LjhsNS43LDMuMWwxLjUtMC4xbDAuNS01LjJsMC41LTAuOGwtMC4yLTIuNWwtMi4zLTIuN2wtMS44LTAuNGwtMS42LTEuOGwxLjItMi44bC0wLjYtMy4xIEw5MjkuNCw1MjMuM0w5MjkuNCw1MjMuM3pcIn0sTFk6e2Q6XCJNMTExMS44LDM3MS40bC0xLjUtMi4xbC01LjQtMC44bC0xLjgtMS4xaC0ybC0yLTIuOGwtNy4zLTEuM2wtMy42LDAuOGwtMy43LDNsLTEuNSwzLjFsMS41LDQuOGwtMi40LDNsLTIuNSwxLjYgbC01LjktMy4xbC03LjctMi43bC00LjktMS4ybC0yLjgtNS43bC03LjItMi44bC00LjUtMS4xbC0yLjIsMC42bC02LjQtMi4ybC0wLjEsNC45bC0yLjYsMS44bC0xLjUsMmwtMy43LDIuNWwwLjcsMi42bC0wLjQsMi43IGwtMi42LDEuNGwxLjksNS42bDAuNCwzbC0wLjksNS4ybDAuNSwyLjlsLTAuNiwzLjVsMC41LDRsLTIuMSwyLjZsMy40LDQuN2wwLjIsMi43bDIsMy42bDIuNi0xLjJsNC4zLDIuOWwyLjUsNGw4LjgsMi44bDMuMSwzLjUgbDMuOS0yLjRsNS40LTMuNWwyMi4zLDEyLjJsMjIuNCwxMi4ydi0yLjdoNi4zbC0wLjUtMTIuN2wtMS0yMy40bC0xLjMtMjIuN2wtMi01LjFsMS4yLTMuOWwtMS4xLTIuN0wxMTExLjgsMzcxLjRMMTExMS44LDM3MS40elwifSxMSTp7ZDpcIk0xMDI0LjQsMjczLjZ2LTAuMmwwLjEtMC4ybC0wLjEtMC4xbC0wLjEtMC4ybC0wLjEtMC4xdi0wLjJsLTAuMS0wLjF2LTAuMmwtMC4xLTAuMWwtMC4yLDAuNnYwLjVsMC4xLDAuMmgwLjEgTDEwMjQuNCwyNzMuNkwxMDI0LjQsMjczLjZ6XCJ9LExUOntkOlwiTTExMDAuNCwyMjEuMmwtNS0yLjlsLTIuNS0wLjRsLTAuOS0xLjNsLTQuNCwwLjZsLTcuOS0wLjRsLTUsMS45bDEuNyw1bDUsMS4xbDIuMiwwLjlsLTAuMiwxLjdsMC42LDEuNWwyLjUsMC42IGwxLjQsMS45aDQuNmw0LjgtMi4ybDAuNS0zLjRsMy41LTJMMTEwMC40LDIyMS4yTDExMDAuNCwyMjEuMnpcIn0sTFU6e2Q6XCJNMTAwNywyNTguNmwwLjItMi43bC0xLTEuNGwtMS4zLDAuMmwtMC40LDMuNWwxLjEsMC41TDEwMDcsMjU4LjZ6XCJ9LE1LOntkOlwiTTEwOTQsMzA0LjhsLTIuOC0ybC0yLjQsMC4xbC0xLjcsMC40bC0xLjEsMC4ybC0yLjksMWwtMC4xLDEuMmgtMC43bDAsMGwtMC40LDIuMWwwLjksMi42bDIuMywxLjZsMy4zLTAuNmwxLjktMS4zIGwyLjgsMC4xbDAuNy0xLjFsMS0wLjJMMTA5NCwzMDQuOEwxMDk0LDMwNC44elwifSxNRzp7ZDpcIk0xMjU1LjcsNjU4LjRsLTEuMS00LjJsLTEuNC0yLjdsLTEuOC0yLjdsLTIsMi44bC0wLjMsMy44bC0zLjMsNC41bC0yLjMtMC44bDAuNiwyLjdsLTEuOCwzLjJsLTQuOCwzLjlsLTMuNCwzLjcgaC0yLjRsLTIuMiwxLjJsLTMuMSwxLjNsLTIuOCwwLjJsLTEsNC4xbC0yLjIsMy41bDAuMSw1LjlsMC44LDRsMS4xLDNsLTAuOCw0LjFsLTIuOSw0LjhsLTAuMiwyLjFsLTIuNiwxLjFsLTEuMyw0LjZsMC4yLDQuNmwxLjYsNSBsLTAuMSw1LjdsMS4yLDMuM2w0LjIsMi4zbDMsMS43bDUtMi43bDQuNi0xLjVsMy4xLTcuNGwyLjgtOC45bDQuMy0xMmwzLjMtOC44bDIuNy03LjRsMC44LTUuNGwxLjYtMS41bDAuNy0yLjdsLTAuOC00LjdsMS4yLTEuOSBsMS42LDMuOGwxLjEtMS45bDAuOC0zLjFsLTEuMy0yLjlMMTI1NS43LDY1OC40TDEyNTUuNyw2NTguNHpcIn0sTVc6e2Q6XCJNMTE2OS4yLDY2MS41bDAuMS0yLjNsLTEuMi0xLjlsMC4xLTIuOGwtMS41LTQuN2wxLjctMy41bC0wLjEtNy43bC0xLjktNC4xbDAuMi0wLjdsMCwwbC0xLjEtMS43bC01LjQtMS4ybDIuNiwyLjggbDEuMiw1LjRsLTEsMS44bC0xLjIsNS4xbDAuOSw1LjNsLTEuOCwyLjJsLTEuOSw1LjlsMi45LDEuN2wzLDNsMS42LTAuNmwyLjEsMS42bDAuMywyLjZsLTEuMywyLjlsMC4yLDQuNWwzLjQsNGwxLjktNC41bDIuNS0xLjMgbC0wLjEtOC4ybC0yLjItNC42bC0xLjktMmgtMC4zdjAuOGwxLjEsMC4zbDEsMy40bC0wLjIsMC44bC0xLjktMi41bC0xLDEuNkwxMTY5LjIsNjYxLjVMMTE2OS4yLDY2MS41elwifSxNWTp7ZDpcIk0xNTU4LjEsNTU0LjRsLTAuNS0zLjhsLTAuNi0yLjFsMC41LTIuOWwtMC41LTQuM2wtMi42LTQuM2wtMy41LTMuOGwtMS4zLTAuNmwtMS43LDIuNmwtMy43LDAuOGwtMC42LTMuM2wtNC43LTIuOCBsLTAuOSwxLjFsMS40LDIuN2wtMC40LDQuN2wyLjEsMy40bDEsNS4zbDMuNCw0LjNsMC44LDMuMmw2LjcsNWw1LjQsNC44bDQtMC41bDAuMS0yLjFsLTIuMy01LjZMMTU1OC4xLDU1NC40eiBNMTU2MC45LDU2My4zIGwwLjIsMC4ybC0wLjEsMC4ybC0wLjksMC40bC0wLjktMC40bDAuMy0wLjZsMC42LTAuMWwwLjUsMC4yTDE1NjAuOSw1NjMuM3ogTTE2NDUuMiw1NDAuMmwtMy44LDAuNGwxLjIsMy4xbC00LDIuMWwtNS0xaC02LjQgbC0xLjcsNy4ybC0yLDIuMmwtMi43LDguOWwtNC41LDEuM2wtNS40LTEuOGwtMi43LDAuNmwtMy4yLDMuMmwtMy42LTAuNGwtMy42LDEuMmwtMy45LTMuNWwtMS00LjNsNC4xLDIuMmw0LjQtMS4ybDAuOS01LjRsMi40LTEuMiBsNi43LTEuNGwzLjgtNWwyLjYtNGwyLjcsMy4zbDEuMS0yLjJsMi43LDAuMmwwLjEtNC4xbDAuMS0zLjFsNC4xLTQuNGwyLjUtNWgyLjNsMy4xLDMuMmwwLjQsMi44bDMuOCwxLjdsNC44LDJMMTY0NS4yLDU0MC4yelwifSxNVjp7ZDpcIk0xMzg5LjEsNTUxLjZMMTM4OS4xLDU1MS42bDAuMS0wLjNsLTAuMS0wLjFoLTAuMWwtMC4xLDAuMnYwLjF2MC4xSDEzODkuMXogTTEzODkuNCw1NDUuN2wwLjEtMC4ydi0wLjF2LTAuMXYtMC4xIHYtMC4xbC0wLjEsMC4xbC0wLjEsMC4ydjAuMWwtMC4xLDAuMXYwLjFIMTM4OS40TDEzODkuNCw1NDUuN3pcIn0sTUw6e2Q6XCJNMTAwMC4zLDQ1MC4zbC02LjEsMC42bC0wLjEtNGwtMi42LTEuMWwtMy40LTEuOGwtMS4zLTNsLTE4LjYtMTMuOGwtMTguNC0xMy45bC04LjQsMC4xbDIuNCwyNy40bDIuNCwyNy41bDEsMC44IGwtMS4zLDQuNGwtMjIuMywwLjFsLTAuOSwxLjRsLTIuMS0wLjRsLTMuMiwxLjNsLTMuOC0xLjhsLTEuOCwwLjJsLTEsMy43bC0xLjksMS4ybDAuMiwzLjlsMS4xLDMuN2wyLjEsMS44bDAuNCwyLjRsLTAuMywybDAuMywyLjMgaDAuOWwxLjUtMC44bDAuOSwwLjJsMS41LDEuNmwyLjQsMC41bDEuNi0xLjRsMS44LTAuOGwxLjMtMC45bDEuMSwwLjJsMS4zLDEuNGwwLjYsMS43bDIuMywyLjdsLTEuMiwxLjZsLTAuMiwyLjFsMS4yLTAuNmwwLjcsMC43IGwtMC4zLDEuOWwxLjcsMS44bDAuNy0wLjZsMS42LDFsNC4zLDAuMWwxLTEuOWwxLDAuMWwxLjYtMC43bDAuOSwyLjdsMS4zLTAuOGwyLjMtMC45bC0wLjQtMy43bDEuNi0yLjdsLTAuMi0yLjJsNC41LTUuMmwwLjgtNC40IGwxLjYtMS42bDIuNywwLjlsMi4zLTEuM2wwLjgtMS42bDQuMy0yLjlsMS4xLTJsNS4yLTIuNmwzLTAuOWwxLjQsMS4yaDMuNmwzLjYtMC4zbDItMi4ybDcuNi0wLjZsNC45LTFsMC41LTMuOWwzLTQuM0wxMDAwLjMsNDUwLjMgTDEwMDAuMyw0NTAuM3pcIn0sTVQ6e2Q6XCJNMTA1My42LDM0NGwtMC4yLTAuMmwtMC41LTAuNWwtMC41LTAuMWwwLjEsMC42bDAuNCwwLjRoMC41TDEwNTMuNiwzNDRMMTA1My42LDM0NHogTTEwNTIuMiwzNDIuOEwxMDUyLjIsMzQyLjggdi0wLjJsLTAuMy0wLjFsLTAuNCwwLjFsMC4xLDAuMWwwLjMsMC4yTDEwNTIuMiwzNDIuOHpcIn0sTVE6e2Q6XCJNNjM4LDQ3OS45bC0wLjItMC43bC0wLjEtMC4ybC0wLjItMC4zbDAuMS0wLjN2LTAuMWgtMC4ybC0wLjMtMC41bC0wLjYtMC4zaC0wLjNsLTAuMiwwLjJ2MC4zbDAuMywwLjlsMC4yLDAuMiBsMC41LDAuMmwtMC40LDAuNHYwLjFsMC4xLDAuM2gwLjlsMC4yLDAuM2wwLjEtMC4xTDYzOCw0NzkuOUw2MzgsNDc5Ljl6XCJ9LE1SOntkOlwiTTk0OS44LDQxMy4zbC0yMC4zLTE1LjVsLTAuMiw5LjdsLTE3LjktMC4zbC0wLjIsMTYuM0w5MDYsNDI0bC0xLjQsMy4zbDAuOSw5LjJsLTIxLjYtMC4xbC0xLjIsMi4ybDIuOCwyLjdsMS40LDMgbC0wLjcsMy4ybDAuNiwzLjJsMC41LDYuM2wtMC44LDUuOWwtMS43LDMuMmwwLjQsMy40bDItMmwyLjcsMC41bDIuOC0xLjRoMy4xbDIuNiwxLjhsMy43LDEuN2wzLjIsNC43bDMuNiw0LjRsMS45LTEuMmwxLTMuNyBsMS44LTAuMmwzLjgsMS44bDMuMi0xLjNsMi4xLDAuNGwwLjktMS40bDIyLjMtMC4xbDEuMy00LjRsLTEtMC44bC0yLjQtMjcuNWwtMi40LTI3LjRMOTQ5LjgsNDEzLjNMOTQ5LjgsNDEzLjN6XCJ9LE1VOntkOlwiTTEyOTQuNyw3MDIuNWwwLjMtMC4zbDAuMi0wLjRsMC4zLTAuM2wwLjEtMC43bC0wLjItMC44bC0wLjQtMC43bC0wLjUsMC4xbC0wLjMsMC40bC0wLjIsMC41bC0wLjUsMC4zbC0wLjEsMC4zIGwtMC4yLDAuN2wtMC4xLDAuNGwtMC4yLDAuMXYwLjJsMC4zLDAuM2wwLjgsMC4xTDEyOTQuNyw3MDIuNUwxMjk0LjcsNzAyLjV6XCJ9LFlUOntkOlwiTTEyMjguNyw2NTQuN3YtMC4zbDAuMi0wLjV2LTAuMWwwLjEtMC41bC0wLjMtMC4zaC0wLjJsLTAuMi0wLjNsLTAuMywwLjNsMC4zLDAuNWwtMC4xLDAuM2wtMC4xLDAuNGwwLjEsMC40IGwwLjIsMC4yTDEyMjguNyw2NTQuN0wxMjI4LjcsNjU0Ljd6XCJ9LE1YOntkOlwiTTQ0NC40LDQwNy44bC0zLjYtMS40bC0zLjktMmwtMC44LTNsLTAuMi00LjVsLTIuNC0zLjZsLTEtMy43bC0xLjYtNC40bC0zLjEtMi41bC00LjQsMC4xbC00LjgsNWwtNC0xLjlsLTIuMi0xLjkgbC0wLjQtMy41bC0wLjgtMy4zbC0yLjQtMi44bC0yLjEtMmwtMS4zLTIuMmgtOS4zbC0wLjgsMi42SDM5MWgtMTAuN2wtMTAuNy00LjRsLTcuMS0zLjFsMS0xLjNsLTcsMC43bC02LjMsMC41bDAuMiw1LjdsMC43LDUuMSBsMC43LDQuMWwwLjgsNGwyLjYsMS44bDIuOSw0LjVsLTEsMi45bC0yLjcsMi4zbC0yLjEtMC4zbC0wLjYsMC41bDIuMywzLjdsMi45LDEuNWwxLDEuN2wwLjktMC45bDMuMSwyLjlsMi4xLDJsMC4xLDMuNGwtMS4yLDQuNyBsMi41LDEuNmwzLjMsMy4xbDIuOSwzLjZsMC43LDMuOWgxbDIuNy0yLjNsMC40LTEuMmwtMS41LTIuOGwtMS42LTIuOWwtMi42LTAuMmwwLjQtMy40bC0wLjktM2wtMS0yLjhsLTAuNS01LjlsLTIuNi0zLjJsLTAuNi0yLjMgbC0xLjItMS42di00LjFsLTEsMC4xbC0wLjEtMi4ybC0wLjctMC41bC0wLjQtMS40bC0yLjctNC40bC0xLjEtMi42bDEtNC44bDAuMS0zbDEuOC0yLjZsMi40LDEuN2wxLjktMC4ybDMuMSwyLjVsLTAuOSwyLjRsMC40LDQuOSBsMS41LDQuN2wtMC40LDJsMS43LDMuMWwyLjMsMy40bDIuNywwLjVsMC4zLDQuNGwyLjQsMy4xbDIuNSwxLjVsLTEuOCw0bDAuNywxLjVsNC4xLDIuNmwxLjksNGw0LjUsNC45bDMuOCw2LjRsMS4zLDMuMnYyLjUgbDEuNCwyLjlsLTAuMywyLjJsLTEuNiwxLjZsMC4zLDEuOGwtMS45LDAuN2wwLjgsMy4xbDIuMiw0bDUuMywzLjZsMS45LDIuOWw1LjQsMmwzLDAuNGwxLjIsMS43bDQuMiwzbDUuOSwzbDQsMC45bDQuOCwyLjlsNCwxLjIgbDMuNywxLjdsMi45LTAuN2w0LjgtMi40bDMuMS0wLjRsNC40LDEuNmwyLjYsMi4xbDUuNSw2LjlsMC40LTEuOWwwLjgtMS41bC0wLjctMS4ybDMuMy01LjJoNy4xbDAuNC0yLjFsLTAuOC0wLjRsLTAuNS0xLjQgbC0xLjktMS41bC0xLjgtMi4xaDIuNmwwLjQtMy42aDUuMmw1LjEsMC4xbDAuMS0xbDAuNy0wLjNsMC45LDAuOGwyLjUtMy45aDFsMS4yLTAuMWwxLjIsMS42bDItNWwxLjItMi43bC0wLjktMS4xbDEuOC0zLjlsMy41LTMuOCBsMC42LTMuMWwtMS4yLTEuM2wtMy40LDAuNWwtNC44LTAuMmwtNiwxLjVsLTQsMS43bC0xLjIsMS44bC0xLjIsNS40bC0xLjgsMy43bC0zLjksMi42bC0zLjYsMS4xbC00LjMsMS4xbC00LjMsMC42bC01LjEsMS44IGwtMS45LTIuNmwtNS42LTEuN2wtMS44LTMuMmwtMC43LTMuNmwtMy00LjdsLTAuNC01bC0xLjItMy4xbC0wLjUtMy40bDEuMS0zLjFsMS44LTguNmwxLjgtNC41bDMuMS01LjZMNDQ0LjQsNDA3LjhMNDQ0LjQsNDA3Ljh6XCJ9LE1EOntkOlwiTTExMTguNSwyODMuM2wxLjItMC43bDAuNS0yLjFsMS4xLTJsLTAuNS0xLjFsMS0wLjVsMC42LDAuOWwzLDAuMmwxLjItMC41bC0xLTAuNmwwLjItMWwtMi0xLjVsLTEuMS0yLjZsLTEuOS0xLjEgdi0yLjFsLTIuNS0xLjZsLTItMC4zbC0zLjktMS45bC0zLjIsMC42bC0xLjEsMC45bDEuNiwwLjZsMS44LDEuOWwxLjksMi42bDMuNCwzLjdsMC42LDIuN2wtMC4yLDIuN0wxMTE4LjUsMjgzLjN6XCJ9LE1DOntkOlwiTTEwMTMuNSwyOTUuMmwwLTAuM2wwLjUtMC42bDAuMywwLjJMMTAxMy41LDI5NS4yelwifSxNTjp7ZDpcIk0xNDczLjcsMjUyLjFsLTMuNy00LjZsLTYuNi0xLjVsLTQuOC0wLjhsLTYuOS0yLjVsLTEuMyw2LjRsNCwzLjZsLTIuNCw0LjNsLTcuOS0xLjZsLTUtMC4ybC00LjctMi45bC01LjEtMC4xIGwtNS4zLTEuOWwtNS45LDIuOWwtNi42LDUuNGwtNC43LDFsMy4zLDQuNGw1LjcsMy4zbDguMSwyLjNsNS44LDVsMS4zLDcuM2wzLDIuN2w2LjQsMWw3LjIsMC45bDcuOSwzLjhsMy40LDAuN2w0LjksNS43bDQuNywzLjYgbDUuNS0wLjFsMTEuMiwxLjNsNi40LTAuOGw1LjUsMC45bDkuMywzLjhsNi4yLTAuMWwzLjIsMmw0LjQtMy4zbDcuMi0yLjJsNy41LTAuMmw0LjktMi4ybDEuOS0zLjNsMi41LTJsLTEuOS0yLjFsLTIuOS0yLjNsMC40LTQgbDMuMiwwLjVsNS45LDEuM2wzLjEtMy4zbDYuMy0yLjRsMS40LTQuMWwyLjQtMS44bDYuOC0wLjhsNC4zLDAuN2wtMC43LTIuMmwtNy4yLTQuM2wtNS4xLTJsLTIuNSwyLjNsLTUuNC0xbC0yLjQsMC44bC0yLjctMi42IGwtMC4zLTYuMmwtMC42LTQuNmwtNS41LDAuNWwtMy45LTIuMWwtMy4zLTAuN2wtNC41LDQuNGwtNS44LDFsLTMuNiwxLjZsLTYuNy0xaC00LjVsLTQuOS0zLjFsLTYuNS0zbC01LjQtMC44bC01LjcsMC44bC0zLjksMS4xIEwxNDczLjcsMjUyLjFMMTQ3My43LDI1Mi4xelwifSxNRTp7ZDpcIk0xMDgwLDI5OS44bDAuNC0wLjZsLTItMS4ybC0xLjgtMC43bC0wLjgtMC44bC0xLjUtMS4xbC0wLjksMC42bC0xLjUsMS40bC0wLjQsMy40bC0wLjUsMWwwLDBsMi4zLDEuMmwxLjYsMi4xIGwxLjEsMC40bDAsMGwtMC41LTEuOWwyLTMuMWwwLjQsMS4ybDEuMy0wLjVMMTA4MCwyOTkuOHpcIn0sTVM6e2Q6XCJNNjMxLjgsNDY1LjdsLTAuMS0wLjVoLTAuMWwtMC4yLDAuNHYwLjNsMC4zLDAuMUw2MzEuOCw0NjUuN3pcIn0sTUE6e2Q6XCJNOTY1LjIsMzQ4LjRsLTIuMy0wLjFsLTUuNS0xLjRsLTUsMC40bC0zLjEtMi43aC0zLjlsLTEuOCwzLjlsLTMuNyw2LjdsLTQsMi42bC01LjQsMi45TDkyNywzNjVsLTAuOSwzLjRsLTIuMSw1LjQgbDEuMSw3LjlsLTQuNyw1LjNsLTIuNywxLjdsLTQuNCw0LjRsLTUuMSwwLjdsLTIuOCwyLjRsLTAuMSwwLjFsLTMuNiw2LjVsLTMuNywyLjNsLTIuMSw0bC0wLjIsMy4zbC0xLjYsMy44bC0xLjksMWwtMy4xLDRsLTIsNC41IGwwLjMsMi4ybC0xLjksMy4zbC0yLjIsMS43bC0wLjMsM2gwLjFsMTIuNC0wLjVsMC43LTIuM2wyLjMtMi45bDItOC44bDcuOC02LjhsMi44LTguMWwxLjctMC40bDEuOS01bDQuNi0wLjdsMS45LDAuOWgyLjVsMS44LTEuNSBsMy40LTAuMmwtMC4xLTMuNGwwLDBoMC44bDAuMS03LjVsOC45LTQuN2w1LjQtMWw0LjQtMS43bDIuMS0zLjJsNi4zLTIuNWwwLjMtNC43bDMuMS0wLjVsMi41LTIuNGw3LTFsMS0yLjVsLTEuNC0xLjRsLTEuOC02LjcgbC0wLjMtMy45TDk2NS4yLDM0OC40TDk2NS4yLDM0OC40elwifSxNWjp7ZDpcIk0xMjAzLDY0MC43bC0wLjgtMi45bDAsMGwwLDBsLTQuNiwzLjdsLTYuMiwyLjVsLTMuMy0wLjFsLTIuMSwxLjlsLTMuOSwwLjFsLTEuNCwwLjhsLTYuNy0xLjhsLTIuMSwwLjNsLTEuNiw2IGwwLjcsNy4zaDAuM2wxLjksMmwyLjIsNC42bDAuMSw4LjJsLTIuNSwxLjNsLTEuOSw0LjVsLTMuNC00bC0wLjItNC41bDEuMy0yLjlsLTAuMy0yLjZsLTIuMS0xLjZsLTEuNiwwLjZsLTMtM2wtMTcuMSw1LjJsMC4zLDQuNSBsMC4zLDIuNGw0LjYtMC4xbDIuNiwxLjNsMS4xLDEuNmwyLjYsMC41bDIuOCwybC0wLjMsOC4xbC0xLjMsNC40bC0wLjUsNC43bDAuOCwxLjlsLTAuOCwzLjdsLTAuOSwwLjZsLTEuNiw0LjZsLTYuMiw3LjJsMi4yLDkgbDEuMSw0LjVsLTEuNCw3LjFsMC40LDIuM2wwLjYsMi45bDAuMywyLjhoNC4xbDAuNy0zLjNsLTEuNC0wLjVsLTAuMy0yLjZsMi42LTIuNGw2LjgtMy40bDQuNi0yLjJsMi41LTIuM2wwLjktMi42bC0xLjItMS4xbDEuMS0zIGwwLjUtNi4ybC0xLDAuM3YtMS45bC0wLjgtMy43bC0yLjQtNC44bDAuNy00LjZsMi4zLTEuNGw0LjEtNC42bDIuMi0xLjFsNi43LTYuOGw2LjQtMy4xbDUuMi0yLjVsMy43LTMuOWwyLjQtNC40bDEuOS00LjZsLTAuOS0zLjEgbDAuMi05LjlsLTAuNC01LjZMMTIwMyw2NDAuN0wxMjAzLDY0MC43elwifSxNTTp7ZDpcIk0xNTMzLjksNDM1LjhsLTAuNi0yLjZsLTMuOCwxLjhsLTIuNS0xLjJsLTQuNS0yLjRsMC44LTUuMmwtMy43LTEuM2wtMi4zLTUuOGwtNS42LDFsLTAuNy03LjVsNC4xLTUuM2wtMC44LTUuMyBsLTEuMy00LjlsLTIuNy0xLjVsLTIuNy0zLjdsLTMsMC40bDAuOSwyLjRsLTEuNiwxLjJsMS4zLDMuOWwtNC4xLTEuMWwtNi4xLDQuNGwwLjksMy42bC0yLjEsNS40bDAuMywzLjFsLTEuNSw1LjJsLTQuNi0xLjQgbDAuOSw2LjZsLTAuOSwyLjFsMC45LDIuN2wtMi40LDEuNWwwLjUsNC42bC0yLjEtMWwxLjEsNS4xbDQuNiw1LjJsMy40LDAuOWwtMC40LDIuMmw1LjQsNy40bDEuOSw1LjlsLTAuOSw3LjlsMy42LDEuNWwzLjIsMC42IGw1LjgtNC42bDMuMi0zLjFsMy4xLDUuMmwyLDguMWwyLjYsNy42bDIuNiwzLjNsMC4yLDYuOWwyLjIsMy44bC0xLjMsNC44bDAuOSw0LjhsMi4yLTYuNmwyLjYtNS45bC0yLjgtNS44bC0wLjItM2wtMS0zLjVsLTQuMi01LjEgbC0xLjctMy4ybDEuNy0xLjFsMS40LTUuNmwtMi45LTQuMmwtNC4xLTQuNmwtMy41LTUuNmwyLjItMS4xbDEuNS02LjlsMy45LTAuM2wyLjgtMi44bDMtMS40bDAuOC0yLjRMMTUzMy45LDQzNS44TDE1MzMuOSw0MzUuOHpcIn0sTkE6e2Q6XCJNMTEwNS40LDY4My43bC0xMC4zLDIuNWwtMTMuNC0wLjlsLTMuNy0zbC0yMi41LDAuM2wtMC45LDAuNGwtMy4yLTIuOWwtMy42LTAuMWwtMy4zLDFsLTIuNywxLjJsMC4yLDQuOWw0LjQsNi4yIGwxLjEsNGwyLjgsNy43bDIuNyw1LjJsMi4xLDIuNmwwLjYsMy41djcuNmwxLjYsOS44bDEuMiw0LjZsMSw2LjJsMS45LDQuN2wzLjksNC44bDIuNy0zLjJsMi4xLDEuOGwwLjgsMi43bDIuNCwwLjVsMy4zLDEuMiBsMi45LTAuNWw1LTMuMmwxLjEtMjMuNmwwLjYtMTguNWw1LjQtMC4ybDAuOS0yMi43bDQuMS0wLjJsOC42LTIuMmwyLDIuNmwzLjctMi41aDEuNmwzLjItMS41VjY4NGwtMi4xLTEuNGwtMy42LTAuNEwxMTA1LjQsNjgzLjcgTDExMDUuNCw2ODMuN3pcIn0sTlI6e2Q6XCJNMTkxNSw1NzUuNXYtMC4yaC0wLjFoLTAuMWwtMC4xLDAuMmwwLjEsMC4xbDAuMSwwLjFMMTkxNSw1NzUuNUwxOTE1LDU3NS41elwifSxOUDp7ZDpcIk0xNDU1LjIsMzk0LjhsLTYuNS0wLjZsLTYuNC0xLjVsLTUtMi44bC00LjUtMS4ybC0yLjUtMy4xbC0zLjItMC45bC02LjQtNC4xbC00LjctMmwtMS45LDEuNWwtMi44LDIuOWwtMC45LDUuOSBsNS43LDIuNWw1LjgsMy4xbDcuNywzLjVsNy42LDAuOWwzLjgsMy4ybDQuMywwLjZsNi44LDEuNWw0LjYtMC4xbDAuMS0yLjVsLTEuNS00LjFMMTQ1NS4yLDM5NC44TDE0NTUuMiwzOTQuOHpcIn0sTkw6e2Q6XCJNMTAwNS41LDI0My45aDIuOWwxLjEtMi4zbDEtNS42bC0xLTJsLTMuOS0wLjJsLTYuNSwyLjZsLTMuOSw4LjlsLTIuNSwxLjdsMCwwbDMuNiwwLjVsNC40LTEuM2wzLjEsMi43bDIuOCwxLjQgTDEwMDUuNSwyNDMuOUwxMDA1LjUsMjQzLjl6XCJ9LE5DOntkOlwiTTE4OTcuMyw3MTYuMXYtMC4zbC0wLjQtMC4ybC0wLjIsMC41djAuMWwwLjIsMC4xaDAuMkwxODk3LjMsNzE2LjFMMTg5Ny4zLDcxNi4xeiBNMTkwMS45LDcwOC41TDE5MDEuOSw3MDguNSBsLTAuMS0wLjRsMC4xLTAuMmwtMC40LDAuMmwtMC42LDAuMmwwLjEsMC44bC0wLjEsMC40bDAuMywwLjFsMC4xLDAuM2gwLjJsMC43LTAuMmwwLjMtMS4xaC0wLjRMMTkwMS45LDcwOC41TDE5MDEuOSw3MDguNXogTTE4OTguOSw3MDYuOGwwLjMtMC41bDAuMS0wLjJsLTAuMi0wLjdsLTAuMy0wLjNsMC4zLTFsLTAuMS0wLjJsLTAuNC0wLjJsLTAuOSwwLjNsLTAuMSwwLjJsMC41LDAuMWwwLjIsMC4ybC0wLjUsMC43bC0wLjUsMC4xIGwwLjEsMC41bDAuMiwwLjRsMC43LDAuMmwwLjMsMC40SDE4OTguOXogTTE4OTUsNzAzLjlsMC4zLTAuM2wwLjMtMC40bC0wLjEtMC4xdi0wLjNsMC4yLTAuNGwwLjMtMC4xbC0wLjItMC4ybC0wLjItMC4xdjAuMyBsLTAuMywwLjdsLTAuMSwwLjNsLTAuNSwwLjZIMTg5NUwxODk1LDcwMy45eiBNMTg4Mi43LDcwMWwtMC42LTAuN2wtMC4xLDAuMmwtMC4xLDAuNHYwLjNsMC4zLDAuMmwwLjEsMC4ybC0wLjEsMC41djAuNGwwLjYsMC45IGwwLjEsMC43bDAuMywwLjZsMC41LDAuNWwwLjQsMC41bDAuOCwxLjRsMC4yLDAuNWwwLjQsMC4zbDEsMS4ybDAuNCwwLjRsMC40LDAuMmwwLjksMC43bDAuNiwwLjNsMC4zLDAuNWwwLjYsMC4zbDAuOCwwLjRsMC4xLDAuMiB2MC4zbDAuMSwwLjNsMC41LDAuNGwwLjYsMC4zbDAuMSwwLjJsMC4xLDAuMmwwLjMtMC4xbDAuMywwLjFsMC45LDAuN2wwLjQtMC4xaDAuM2wwLjUtMC4ybDAuMy0wLjRsLTAuMS0xLjFsLTAuNS0wLjVsLTAuNy0wLjQgbC0wLjQtMC41bC0wLjQtMC41bC0wLjgtMWwtMS4xLTFsLTAuNS0wLjJsLTAuMy0wLjRsLTAuMy0wLjFsLTAuMi0wLjNsLTAuNS0wLjNsLTAuMy0wLjZsLTAuNi0wLjZsLTAuMS0wLjNsMC4xLTAuM2wtMC4xLTAuMyBsLTAuNC0wLjNsLTAuMi0wLjVsLTAuMi0wLjNsLTAuNC0wLjJsLTAuNy0wLjRsLTEuNi0xLjlsLTAuNy0wLjZsLTAuNywwLjJMMTg4Mi43LDcwMUwxODgyLjcsNzAxeiBNMTg2MC43LDY5NWwwLjItMC40bDAuMS0wLjggbC0wLjIsMC40bC0wLjIsMUwxODYwLjcsNjk1elwifSxOWjp7ZDpcIk0xODY4LjYsODMyLjhsMC45LTIuNmwtNS44LDIuOWwtMy40LDMuNGwtMy4yLDEuNmwtNS45LDQuNmwtNS42LDMuMmwtNywzLjJsLTUuNSwyLjRsLTQuMywxLjFsLTExLjMsNi4xbC02LjQsNC42IGwtMS4xLDIuM2w1LjEsMC40bDEuNSwyLjFsNC41LDAuMWw0LTEuOGw2LjMtMi44bDguMS02LjJsNC43LTQuMWw2LjItMi4zbDQtMC4xbDAuNi0yLjlsNC42LTIuNWw3LTQuNWw0LjItMi45bDIuMS0yLjZsMC41LTIuNiBsLTUuNiwyLjVMMTg2OC42LDgzMi44TDE4NjguNiw4MzIuOHogTTE4OTcuNCw4MDIuM2wxLjktNS43bC0zLjEtMS43bC0wLjgtMy42bC0yLjMsMC41bC0wLjQsNC42bDAuOCw1LjdsMC45LDIuN2wtMC45LDEuMSBsLTAuNiw0LjRsLTIuNCw0LjFsLTQuMiw1bC01LjMsMi4ybC0xLjcsMi40bDMuNywyLjVsLTAuOCwzLjVsLTYuOSw1LjFsMS40LDAuOWwtMC40LDEuNmw1LjktMi41bDUuOS00LjJsNC41LTMuNGwxLjYtMS4ybDEuNS0yLjcgbDIuOC0ybDMuOCwwLjJsNC4yLTMuOGw1LjEtNS43bC0yLjEtMC44bC00LjYsMi41bC0zLjItMC41bC0yLjktMi4xbDIuMy00LjlsLTEuMi0xLjhsLTIuOSw0LjRMMTg5Ny40LDgwMi4zTDE4OTcuNCw4MDIuM3pcIn0sTkk6e2Q6XCJNNTE0LjEsNDc2LjhsLTEuOS0wLjJsLTAuOSwwLjlsLTIsMC44aC0xLjRsLTEuMywwLjhsLTEuMS0wLjNsLTAuOS0wLjlsLTAuNiwwLjJsLTAuOCwxLjVsLTAuNS0wLjFsLTAuMywxLjMgbC0yLjEsMS44bC0xLjEsMC43bC0wLjYsMC44bC0xLjUtMS4zbC0xLjQsMS43aC0xLjJsLTEuMywwLjJsLTAuMiwzLjFoLTAuOGwtMC44LDEuNWwtMS44LDAuM2wtMC40LDAuNGwtMC45LTFsLTAuNywxbDIuNiwyLjkgbDIuMiwybDEsMi4xbDIuNSwyLjZsMS44LDJsMC45LTAuOGwzLjUsMS43bDEuNC0wLjhsMS43LDAuNWwwLjgsMS4zbDEuNywwLjRsMS40LTEuM2wtMC44LTEuMWwtMC4xLTEuN2wxLjItMS42bC0wLjItMS43bDAuNy0yLjcgbDAuOS0wLjdsMC4xLTIuOGwtMC4yLTEuN2wwLjQtMi44bDAuOS0yLjVsMS40LTIuMmwtMC4zLTIuM2wwLjQtMS40TDUxNC4xLDQ3Ni44TDUxNC4xLDQ3Ni44elwifSxORTp7ZDpcIk0xMDUxLjMsNDI1LjZsLTguOC0yLjhsLTE4LjYsMTIuMmwtMTUuOCwxMi41bC03LjgsMi44bDAuMSwxNC42bC0zLDQuM2wtMC41LDMuOWwtNC45LDFsLTcuNiwwLjZsLTIsMi4ybC0zLjYsMC4zIGwtMC41LDMuMWwwLjgsMi45bDMuMSw0LjFsMC4yLDMuMWw2LjQsMS40bC0wLjEsNC40bDEuOS0xLjloMmw0LjMsMy43bDAuMy01LjdsMS42LTIuNmwwLjgtMy42bDEuNC0xLjRsNi0wLjhsNS42LDIuNGwyLjEsMi40IGwyLjksMC4xbDIuNi0xLjVsNi44LDMuM2wyLjgtMC4ybDMuMy0yLjdsMy4zLDAuMmwxLjYtMC45bDMsMC40bDQuMywxLjhsNC4zLTMuNWwxLjMsMC4ybDMuOSw3bDEtMC4ybDAuMi0ybDEuNi0wLjRsMC41LTIuOSBsLTMuNi0wLjJ2LTQuMWwtMi40LTIuM2wyLjMtOC40bDYuOS02bDAuMi04LjNsMS44LTEyLjlsMS4xLTIuN2wtMi4zLTIuMmwtMC4yLTIuMWwtMi0xLjZsLTEuNi05LjlsLTMuOSwyLjRMMTA1MS4zLDQyNS42IEwxMDUxLjMsNDI1LjZ6XCJ9LE5HOntkOlwiTTEwNTUuOCw0OTIuN2wtMSwwLjJsLTMuOS03bC0xLjMtMC4ybC00LjMsMy41bC00LjMtMS44bC0zLTAuNGwtMS42LDAuOWwtMy4zLTAuMmwtMy4zLDIuN2wtMi44LDAuMmwtNi44LTMuMyBsLTIuNiwxLjVsLTIuOS0wLjFsLTIuMS0yLjRsLTUuNi0yLjRsLTYsMC44bC0xLjQsMS40bC0wLjgsMy42bC0xLjYsMi42bC0wLjMsNS43bC0wLjIsMi4xbDEuMiwzLjhsLTEuMSwyLjVsMC42LDEuN2wtMi43LDQgTDk5Myw1MTRsLTEsNGwwLjEsNC4xbC0wLjMsMTAuMmg0LjloNC4zbDMuOSw0LjJsMS45LDQuNmwzLDMuOWw0LjUsMC4ybDIuMi0xLjRsMi4xLDAuM2w1LjgtMi4zbDEuNC00LjVsMi43LTYuMWwxLjYtMC4xbDMuMy0zLjcgbDIuMS0wLjFsMy4yLDIuNmwzLjktMi4ybDAuNS0yLjZsMS4yLTIuNmwwLjgtMy4ybDMtMi42bDEuMS00LjVsMS4yLTEuNGwwLjctMy4zbDEuNS00bDQuNi01bDAuMy0yLjFsMC42LTEuMUwxMDU1LjgsNDkyLjcgTDEwNTUuOCw0OTIuN3pcIn0sS1A6e2Q6XCJNMTY0NC43LDMwMi4zTDE2NDQuNywzMDIuM2wtNS41LTMuNmwwLjEsMy41bC02LjMsMi42bDIuNywzLjNsLTQuNi0wLjJsLTMuNi0ybC0xLDQuNGwtMy44LDMuNGwtMi4xLDRsMy4zLDEuNyBsMy40LDAuN2wwLjgsMWwwLjQsMy41bDEuMSwxLjJsLTAuOSwwLjdsLTAuMSwyLjlsMS45LDFsMS42LDAuNmwwLjgsMS4ybDEuMy0wLjV2LTEuM2wzLjEsMS4zbDAuMS0wLjZsMi40LDAuMmwwLjctMi45bDMuNS0wLjMgbDIuMS0wLjRsLTAuMS0xLjZsLTQuMy0yLjhsLTIuNi0xbDAuMi0wLjdsLTEuMi0yLjhsMS4zLTEuN2wyLjktMWwxLTEuOWwwLjMtMS4xbDEuOS0xLjRsLTIuOC00LjVsMC4zLTIuMWwwLjktMmwyLjIsMC4zbDAsMGwwLDAgbDAsMEwxNjQ0LjcsMzAyLjNMMTY0NC43LDMwMi4zelwifSxOTzp7ZDpcIk0xMDg4LjgsMTMzLjFsLTYuOSwxLjFsLTcuMy0wLjNsLTUuMSw0LjRsLTYuNy0wLjNsLTguNSwyLjNsLTEwLjEsNi44bC02LjQsNGwtOC44LDEwLjdsLTcuMSw3LjhsLTguMSw1LjggbC0xMS4yLDQuOGwtMy45LDMuNmwxLjksMTMuNGwxLjksNi4zbDYuNCwzbDYtMS40bDguNS02LjhsMy4zLDMuNmwxLjctMy4zbDMuNC00bDAuOS02LjlsLTMuMS0yLjlsLTEtNy42bDIuMy01LjNsNC4zLDAuMWwxLjMtMi4yIGwtMS44LTEuOWw1LjctNy45bDMuNC02LjFsMi4yLTMuOWw0LDAuMWwwLjYtMy4xbDcuOSwwLjl2LTMuNWwyLjUtMC4zbDIuMS0xLjRsNS4xLDIuOWw1LjMtMC4zbDQuNywxLjNsMy40LTIuNGwxLjEtMy45bDUuOC0xLjggbDUuNywyLjFsLTAuOCwzLjhsMy4yLTAuNWw2LjQtMi4ybDAsMGwtNS40LTMuM2w0LjgtMS40TDEwODguOCwxMzMuMUwxMDg4LjgsMTMzLjF6IE0xMDY2LjIsOTkuOGwtNS42LTFsLTEuOS0xLjdsLTcuMiwwLjlsMi42LDEuNSBsLTIuMiwxLjJsNi43LDEuMUwxMDY2LjIsOTkuOHogTTEwNDAuOCw5MS41bC00LjgtMS42bC01LjEsMC4ybC0xLDEuNWgtNWwtMi4yLTEuNWwtOS4zLDEuNmwzLjIsMy41bDcuNiwzLjhsNS43LDEuNGwtMywxLjcgbDguNCwyLjlsNC40LTAuMmwwLjktMy45bDMtMC45bDEuMi0zLjRsOC41LTEuOEMxMDUzLjMsOTQuOCwxMDQwLjgsOTEuNSwxMDQwLjgsOTEuNXogTTEwNjUsODguNGwtOS4xLTFsLTMuMiwxLjJsLTUuMy0xbC0xMC40LDEuMiBsNC4zLDJoNS4xbDAuOSwxLjNsMTAuNiwwLjdsMTAuMS0wLjVsNC4zLTIuNEMxMDcyLjMsODkuOSwxMDY1LDg4LjQsMTA2NSw4OC40elwifSxPTTp7ZDpcIk0xMzAxLDQzNy44bDIuMS0ybDAuOC0xLjhsMS42LTMuOGwtMC4xLTEuNGwtMi4xLTAuOGwtMS42LTIuMWwtMi45LTMuN2wtMy4zLTEuMWwtNC4xLTAuOWwtMy4zLTIuM2wtMi45LTQuM2gtMi44IGwtMC4xLDQuMmwxLjEsMC44bC0yLjQsMS4zbDAuMywyLjZsLTEuNCwyLjZsMC4xLDIuNmwyLjksNC41bC0yLjYsMTIuN2wtMTYuMSw2LjRsNS4yLDEwLjVsMi4xLDQuNGwyLjUtMC4zbDMuNi0yLjJsMy4xLDAuNiBsMi41LTEuOGwtMC4yLTIuNWwyLjEtMS42aDMuNGwxLjItMS4zbDAuMi0zLjFsMy4zLTIuNGgyLjZsMC40LTAuOGwtMS00LjJsMC42LTMuMmwxLTEuNWwyLjUsMC4zTDEzMDEsNDM3LjhMMTMwMSw0MzcuOHogTTEyODQuNCw0MDcuNGwwLjItMi42bC0wLjctMC42bC0xLjMsMi4ybDEuMywyLjJMMTI4NC40LDQwNy40elwifSxQSzp7ZDpcIk0xMzg4LjMsMzQ2LjNsLTkuNC0yLjZsLTIuOS01bC00LjctM2wtMi44LDAuN2wtMi40LDEuMmwtNS44LDAuOGwtNS4zLDEuM2wtMi40LDIuOGwxLjksMi44bDEuNCwzLjJsLTIsMi43IGwwLjgsMi41bC0wLjksMi4zbC01LjEtMC4ybDMsNC4ybC0zLDEuNmwtMS41LDMuOGwxLjEsMy44bC0xLjcsMS44bC0yLjEtMC42bC00LDAuOWwtMC4yLDEuN2gtNGwtMi4zLDMuNmwwLjgsNS40bC02LjYsMi42IGwtMy44LTAuNWwtMC45LDEuNGwtMy4zLTAuOGwtNS4zLDAuOWwtOS42LTMuMmwzLjIsMy4zbDIuOCwzLjlsNS42LDIuN2wxLDUuN2wyLjcsMWwwLjksMi45bC03LjQsMy4zbC0xLjIsNy40bDcuNi0wLjlsOC45LTAuMSBsOS45LTEuMmw0LjksNC44bDIuMSw0LjZsNC4yLDEuNmwzLjItNC4yaDEybC0xLjgtNS41bC0zLjUtMy4ybC0xLjMtNC45bC00LTIuOWw0LjktNi42bDYuNCwwLjVsNC41LTYuN2wyLjEtNi41bDMuOS02LjNsLTEtNC41IGwzLjctMy43bC01LTMuMWwtMi45LTQuM2wtMy4yLTUuNmwxLjktMi44bDguNSwxLjZsNS43LTFMMTM4OC4zLDM0Ni4zTDEzODguMywzNDYuM3pcIn0sUFM6e2Q6XCJNMTE2Ni45LDM2Ni4xbC0yLTAuOWwtMC43LDQuM2wxLjQsMC43bC0xLjIsMC44bC0wLjEsMS43bDIuNC0wLjhsMC42LTEuOUwxMTY2LjksMzY2LjFMMTE2Ni45LDM2Ni4xelwifSxQQTp7ZDpcIk01NDMuNSw1MTdsLTItMS44bC0xLjctMS45bC0yLjUtMS4xbC0zLjEtMC4ybDAuMy0wLjZsLTMuMS0wLjRsLTIsMS45bC0zLjUsMS4zbC0yLjUsMS42bC0yLjcsMC41bC0xLjUtMS42IGwtMC41LDAuNWwtMi4zLTAuM2wwLjItMS4zbC0xLjktMi4zbC0yLjIsMC42bC0wLjEsMi41bDEuMSwxbC0wLjgsMC43bDAuMSwxLjJsLTAuNSwxLjNsLTAuNCwxLjJsMC42LDFsMC4zLTEuNGgyLjRsMS40LDAuNyBsMi4zLDAuNWwxLDIuNWwxLjgsMC40bDAuOC0xLjFsMC44LDMuOGwyLjYtMC4zbDAuOS0wLjlsMS41LTAuOWwtMi41LTMuNGwwLjYtMS4zbDEuMy0wLjNsMi4zLTEuNmwxLjItMi4ybDIuNS0wLjRsMi43LDEuOGwxLDIuMSBsMS40LDAuNGwtMS41LDEuN2wxLDMuNWwxLjgsMS44bDAuOS0zLjFsMS44LDAuNWwxLjEtMS45bC0xLjEtMy44TDU0My41LDUxN3pcIn0sUEc6e2Q6XCJNMTg1MC43LDYxNS42bDAuOS0xLjhsLTIuNC0yLjJsLTIuNS00bC0xLjYtMS41bC0wLjUtMS45bC0wLjgsMC43bDAuOSw0LjhsMi4yLDRsMi4yLDIuNUwxODUwLjcsNjE1LjYgTDE4NTAuNyw2MTUuNnogTTE4MjkuNSw2MDdsMi4xLTMuOWwwLjQtMy41bC0xLjEtMWwtMy40LDAuMWwwLjQsMy43bC0zLjMsMi4zbC0xLjcsMi4ybC0zLjIsMC41bC0wLjQtMy40bC0wLjgsMC4xbC0xLDMuMWwtMy4xLDAuNSBsLTUtMC45bC0wLjYsMS45bDMuMSwxLjhsNC41LDEuOWgyLjlsMy0xLjVsMy4yLTEuNmwxLTEuOEwxODI5LjUsNjA3TDE4MjkuNSw2MDd6IE0xODAxLjcsNjE5LjJsLTAuOS00LjNsNS4yLTAuN2wtMS4xLTMuM2wtOS4xLTQgbC0wLjYtMy43bC0yLjktMy4ybC0zLjctMy4zbC0xMC4yLTMuNmwtOS42LTQuNGwtMSwyMC43bC0xLjUsMjAuOGw1LjcsMC4ybDMuMSwxLjFsNC42LTIuMmwtMC4zLTQuN2wzLjYtMi4xbDQuOS0xLjhsNywyLjhsMi40LDUuNiBsMi45LDMuNWwzLjksNGw1LjUsMWw0LjgsMC43bDEuMSwxLjZsMy44LTAuNGwwLjgtMS44bC01LjYtMi43bDEuOC0xLjJsLTQuMi0xLjFsMC41LTIuOGwtMy4yLDAuMmwtMy02LjhMMTgwMS43LDYxOS4yIEwxODAxLjcsNjE5LjJ6IE0xODM2LjQsNjAwLjhsLTAuNS0zLjNsLTItMi4xbC0yLjEtMi42bC0yLjMtMS41bC0xLjktMS40bC0yLjktMS44bC0xLjYsMS41bDMuOSwxLjlsMy4xLDIuN2wyLjQsMi4xbDEuMiwyLjQgbDAuOCwzLjhMMTgzNi40LDYwMC44TDE4MzYuNCw2MDAuOHpcIn0sUFk6e2Q6XCJNNjU1LjcsNzAwLjVsLTAuMy0xLjlsLTUuNC0zLjNsLTUuMS0wLjFsLTkuNSwxLjlsLTIuMSw1LjZsMC4yLDMuNGwtMS41LDcuNmwxMS4yLDEwLjRsNC42LDFsNy4yLDQuN2w1LjksMi41IGwxLjEsMi44bC00LjIsOS42bDUuNywxLjhsNi4yLDFsNC4yLTEuMWw0LjMtNC44bDAuMy01LjdsMC43LTMuNmwwLjMtMy44bC0wLjMtMy41bC0yLjEtMS4ybC0yLDEuMWwtMi0wLjNsLTAuOS0yLjVsLTEtNS44IGwtMS4yLTEuOWwtMy45LTEuN2wtMi4xLDEuMmwtNi0xLjJsLTAuNC04LjZMNjU1LjcsNzAwLjVMNjU1LjcsNzAwLjV6XCJ9LFBFOntkOlwiTTU4NC4zLDU5OS41bC0yLjktMy40bC0xLjctMC4xbDMuNS02LjVsLTQuNC0zbC0zLjMsMC42bC0yLjEtMS4xbC0zLDEuN2wtNC4yLTAuOGwtMy40LTYuN2wtMi43LTEuN2wtMS44LTNsLTMuNy0zIGwtMS41LDAuNmwwLjgsNC45bC0xLjcsNC4xbC02LDYuN2wtNi43LDIuNWwtMy4zLDUuNWwtMC45LDQuM2wtMy4xLDIuNmwtMi41LTMuMmwtMi4zLTAuN2wtMi4zLDAuNWwtMC4yLTIuM2wxLjUtMS41bC0wLjctMi43IGwtNC40LDRsLTEuNiw0LjVsMyw2LjFsLTEuNywyLjhsNC4xLDIuNmw0LjUsNC4xbDIsNC43bDIuNCwyLjlsNiwxMi43bDYuMiwxMS43bDUuNCw4LjRsLTAuOCwxLjhsMi44LDUuM2w0LjYsMy45bDEwLjcsNi45IGwxMS42LDYuNGwwLjcsMi42bDUuOSwzLjdsMi43LTEuNmwxLjItMy4zbDIuOC02LjlsLTIuOC01LjNsMS4xLTIuMWwtMS4yLTIuNGwxLjktMy4ybC0wLjMtNS40bC0wLjEtNC41bDEuMS0yLjFsLTUuNS0xMC4zbC0zLDEuMSBsLTIuNi0wLjdsLTAuMi05LjdsLTQuNCwzLjhsLTQuOS0wLjJsLTIuMy0zLjRsLTMuNy0wLjNsMS0yLjhsLTMuMy0zLjhMNTYyLDYyMGwxLjUtMS4xbC0wLjEtMi43bDMuMy0xLjlsLTAuNy0zLjRsMS4zLTIuMmwwLjQtMyBsNi4yLTQuM2w0LjYtMS4ybDAuNy0xTDU4NC4zLDU5OS41TDU4NC4zLDU5OS41elwifSxQSDp7ZDpcIk0xNjg0LjYsNTE4LjZsLTAuNi0yLjNsLTAuOC0zLjJsLTQuOC0zbDAuOCw0LjlsLTMuOSwwLjJsLTAuNywyLjhsLTQuMiwxLjdsLTIuMi0yLjhsLTIuOCwyLjRsLTMuNCwxLjdsLTEuOSw1LjQgbDEuMSwxLjlsMy45LTMuNmwyLjcsMC4zbDEuNS0yLjdsMy44LDNsLTEuNSwzLjFsMS45LDQuNmw2LjgsMy43bDEuNC0zbC0yLjEtNC43bDIuNC0zLjJsMi41LDYuNGwxLjUtNS44bC0wLjYtMy41TDE2ODQuNiw1MTguNiBMMTY4NC42LDUxOC42eiBNMTY3MC4xLDUwNi44di02LjFsLTMuNiw2LjFsMC41LTQuMmwtMywwLjNsLTAuMyw0bC0xLjIsMS44bC0xLDEuN2wzLjgsNC40bDEuNi0xLjlsMS40LTRMMTY3MC4xLDUwNi44IEwxNjcwLjEsNTA2Ljh6IE0xNjQwLDUxMi45bDIuNi00LjRsMy40LTMuNWwtMS41LTUuMmwtMi40LDYuM2wtMi45LDQuNGwtMy44LDRsLTIuNCw0LjRMMTY0MCw1MTIuOUwxNjQwLDUxMi45eiBNMTY1Ny40LDQ5Ni41IGwxLjIsM2wtMC4xLDMuM2wwLjUsMi45bDMuMy0xLjlsMi40LTIuN2wtMC4yLTIuNmgtMy42TDE2NTcuNCw0OTYuNUwxNjU3LjQsNDk2LjV6IE0xNjc3LjQsNDk0LjhsLTEuOC0yLjRsLTUuNC0wLjFsNCw0LjhsMC4zLDIuNCBsLTMuMy0wLjVsMS4yLDMuOWwxLjcsMC4zbDAuNyw0LjVsMi41LTEuNGwtMS43LTRsLTAuNC0yLjFsNC41LDEuN0wxNjc3LjQsNDk0LjhMMTY3Ny40LDQ5NC44eiBNMTY1NC41LDQ4OWwtMi4yLTIuM2wtNC44LTAuMiBsMy40LDQuOGwyLjgsMy4yTDE2NTQuNSw0ODlMMTY1NC41LDQ4OXogTTE2NDguMSw0NTQuNGgtMy4zbC0wLjksNS44bDEuMSw5LjlsLTIuNi0ybDEuMiw2bDEuMiwyLjhsMy4zLDMuN2wwLjQtMi4zbDEuOCwxLjQgbC0xLjUsMS43bDAuMSwyLjZsMi45LDEuNGw1LTAuOWw0LDMuOGwxLjEtMi40bDIuNSwzLjRsNC44LDMuMWwwLjItMi45bC0yLTEuNmwwLjEtMy40bC03LjUtMy42bC0yLjMsMC44bC0zLjEtMC43bC0yLTUuMWwwLjEtNS4xIGwzLTIuMWwwLjYtNS4zbC0yLjctNC42bDAuNC0yLjZsLTAuNy0xLjZsLTEuNSwxLjZMMTY0OC4xLDQ1NC40TDE2NDguMSw0NTQuNHpcIn0sUE46e2Q6XCJNMjc0LjIsNzI3LjR2LTAuMmwtMC4xLTAuMmwtMC4yLTAuMWwtMC4xLDAuMWwwLjEsMC4ybDAuMiwwLjJIMjc0LjJMMjc0LjIsNzI3LjR6XCJ9LFBMOntkOlwiTTEwNjkuNCwyMjguM2wtNC42LTAuMWwtMC41LTEuNGwtNC44LTEuMWwtNS43LDIuMWwtNy4xLDIuOGwtMy4xLDEuN2wxLjQsMy4xbC0xLjIsMS42bDIsMi4ybDEuNCwzLjNsLTAuMSwyLjEgbDIuMywzLjlsMi40LDEuOWwzLjcsMC42bC0wLjEsMS43bDIuNywxLjJsMC42LTEuNWwzLjQsMC42bDAuNywybDMuNiwwLjNsMi42LDMuMWwwLjMsMC40bDEuOS0wLjlsMi43LDIuMmwyLjgtMS4zbDIuNCwwLjZsMy40LTAuOCBsNC45LDIuM2wxLjEsMC40bC0xLjYtMi44bDMuOC01LjFsMi4zLTAuN2wwLjMtMS44bC0zLjEtNS4zbC0wLjUtMi43bC0xLjktMi45bDIuNy0xLjJsLTAuMy0yLjRsLTEuNy0yLjNsLTAuNi0yLjdsLTEuNC0xLjkgbC0yLjUtMC42bC04LjcsMC4xTDEwNjkuNCwyMjguM0wxMDY5LjQsMjI4LjN6XCJ9LFBUOntkOlwiTTkzNy42LDMzNS45bC0wLjQtMi4xbDItMi41bDAuOC0xLjdsLTEuOC0xLjlsMS42LTQuM2wtMi0zLjhsMi4yLTAuNWwwLjMtM2wwLjktMC45bDAuMi00LjlsMi40LTEuN2wtMS4zLTMuMSBsLTMtMC4ybC0wLjksMC44aC0zbC0xLjItMy4xbC0yLjEsMC45bC0xLjksMS42bDAuMSwyLjFsMC45LDIuMmwwLjEsMi43bC0xLjMsMy44bC0wLjQsMi41bC0yLjIsMi4zbC0wLjYsNC4ybDEuMiwyLjRsMi4zLDAuNiBsMC40LDRsLTEsNS4xbDIuOC0wLjdsMi43LDAuOUw5MzcuNiwzMzUuOUw5MzcuNiwzMzUuOXpcIn0sUFI6e2Q6XCJNNjAwLjgsNDU3LjN2LTAuMWwwLDBoMC4xdi0wLjFsMC4xLTAuMWwwLDB2LTAuMWgtMC4xbDAsMGgtMC4zaC0wLjF2MC4xdjAuMWwwLjIsMC4xbDAsMEw2MDAuOCw0NTcuM0w2MDAuOCw0NTcuMyBMNjAwLjgsNDU3LjN6IE02MTQuNCw0NTdsMC43LTAuMnYtMC4xbC0wLjQtMC4xaC0wLjZsLTAuNSwwLjJsMC4xLDAuMmgwLjJINjE0LjR6IE02MTAuNyw0NTQuOGwtMC4xLTAuMmgtMC4ybC0zLjUtMC4xbC0xLjMtMC4yIGwtMC4zLDAuMWwtMC4zLDAuMWwtMC4xLDAuNGwtMC4yLDAuMmwtMC4zLDAuMmwwLjEsMC4zbDAuMSwwLjJsMC4yLDAuNGwtMC4xLDAuNWwtMC4yLDFsMC4zLDAuMmwwLjctMC4xbDAuMywwLjFsMC4zLDAuMWwwLjQtMC4xIGwwLjQtMC4ybDAuOSwwLjFsMC41LTAuMWwwLjYsMC4zbDAuNC0wLjFsMC4yLDAuMWgwLjNoMC42bDAuOS0wLjJsMC44LTAuNWwwLjMtMC41bDAuNC0wLjNsMC42LTAuNHYtMC45bC0wLjctMC4xbC0wLjYtMC4zIGwtMS4xLTAuMWgtMC4xbDAuMSwwLjJoLTAuMUw2MTAuNyw0NTQuOEw2MTAuNyw0NTQuOHpcIn0sUUE6e2Q6XCJNMTI1OCw0MTUuNWwwLjgtMy44bC0wLjUtMy43bC0xLjktMmwtMS40LDAuN2wtMS4xLDMuM2wwLjgsNC43bDEuOCwxLjJMMTI1OCw0MTUuNUwxMjU4LDQxNS41elwifSxSRTp7ZDpcIk0xMjg0LDcwNy45bDAuMi0wLjRsMC4xLTAuOGwtMC40LTAuOGwtMC40LTAuN2wtMC40LTAuMmwtMC44LTAuMWwtMC43LDAuM2wtMC40LDAuNmwtMC4yLDAuM2wwLjQsMS4xbDAuMiwwLjMgbDEuMSwwLjZoMC41TDEyODQsNzA3LjlMMTI4NCw3MDcuOXpcIn0sUk86e2Q6XCJNMTEwOC4xLDI2Ni4zaC0yLjFsLTEsMS41bC0zLjYsMC42bC0xLjYsMC45bC0yLjQtMS41aC0zLjJsLTMuMi0wLjdsLTEuOSwxLjNsLTIuOSwxLjNsLTEuOSw0LjJsLTIuNiw0LjNsLTMuOCwxLjEgbDIuOSwyLjVsMC44LDEuOWwzLjIsMS41bDAuNywyLjVsMy4xLDEuOGwxLjQtMS4zbDEuNCwwLjdsLTEuMSwxLjFsMSwxbDEuOCwyLjZsMS45LTAuNWw0LDFsNy41LDAuM2wyLjMtMS42bDUuOC0xLjRsNCwyLjJsMywwLjcgbDAuNC03LjRsMS42LDAuNWwyLjMtMS4zbC0wLjQtMS42bC0yLjQtMS4xbC0yLjIsMWwtMi40LTEuMWwtMS4zLTIuOGwwLjItMi43bC0wLjYtMi43bC0zLjQtMy43bC0xLjktMi42bC0xLjgtMS45TDExMDguMSwyNjYuMyBMMTEwOC4xLDI2Ni4zelwifSxSVTp7ZDpcIk0xMzMyLjMsOTUuMWwtNC41LTRsLTEzLjYtNC4xbC05LjQtMi4xbC02LjIsMC45bC01LjMsMi45bDUuOCwwLjhsNi42LDMuMmw4LDEuN2wxMS41LDEuMyBDMTMyNS4yLDk1LjcsMTMzMi4zLDk1LjEsMTMzMi4zLDk1LjF6IE0xMTUzLjYsODcuOGwwLjktMC42bC01LjctMC45TDExNDYsODdsLTEuMywxbC0xLjUtMS4ybC01LjIsMC4xbC02LjIsMC44bDcuNywwLjFsLTEuMSwxLjMgbDQuNCwxbDMuNi0wLjdsMC4xLTAuN2wyLjktMC4zQzExNDkuNCw4OC40LDExNTMuNiw4Ny44LDExNTMuNiw4Ny44eiBNMTM1NC4xLDk3LjdsLTEuNS0xLjhsLTEyLjUtMi42bC0zLTAuM2wtMi4yLDAuNWwxLjIsNiBDMTMzNi4xLDk5LjUsMTM1NC4xLDk3LjcsMTM1NC4xLDk3Ljd6IE0xMzY5LjMsMTA0bC05LjItMC43bDMuNC0xLjJsLTguMi0xLjVsLTYuMSwxLjlsLTEsMmwxLjUsMi4xbC02LjktMC4xbC01LjMsMi42bC00LjMtMS4xIGwtOS4zLDAuNWwwLjMsMS4zbC05LjIsMC43bC00LjksMi40bC00LjIsMC4ybC0xLjIsMy4zbDUuNSwyLjZsLTcuNywwLjdsLTkuNS0wLjNsLTUuOCwxLjFsNC44LDUuNGw2LjksNC4zbC05LjYtM2wtNy45LDAuM2wtNS4xLDIgbDQuNSwzLjhsLTQuOS0xbC0yLjEtNWwtNC4yLTIuOGwtMS44LDAuMWwzLjYsMy43bC00LjYsMy41bDguMSw0LjJsMC40LDUuNGwyLjksMi45bDQuNywwLjVsMC40LDMuNWw0LjQsMy4xbC0xLjksMi42bDAuNSwyLjcgbC0zLjcsMS40bC0wLjUsMmwtNS4zLTAuOGwzLjUtNy44bC0wLjUtMy42bC02LjctMy4zbC0zLjgtNy4zbC0zLjctMy43bC0zLjYtMS42bDAuOC00LjJsLTIuOS0yLjlsLTExLjMtMS40bC0yLjEsMWwwLjUsNC43IGwtNC4zLDQuN2wxLjIsMS43bDQuNyw0LjFsMC4xLDIuNmw1LjMsMC41bDAuOCwxLjFsNS44LDIuOWwtMSwyLjhsLTE4LjUtNi4xbC02LjYtMS43bC0xMi44LTEuNmwtMS4yLDEuN2w1LjksMy4xbC0yLjcsMy42IGwtNi40LTMuMmwtNSwyLjJsLTcuNiwwLjFsLTIuMSwxLjlsLTUuMy0wLjZsMi41LTMuM2wtMy4yLTAuMmwtMTIuMyw0LjZsLTcuNiwyLjZsMC40LDMuNWwtNiwxLjJsLTQtMS45bC0xLjItM2w1LTAuN2wtMy42LTMgbC0xMi4yLTEuOGw0LjMsMy40bC0wLjgsMy4ybDQuNywzLjNsLTEuMSwzLjhsLTQuNi0xLjlsLTQtMC4zbC04LDUuNGw0LjIsNC4xbC0zLjIsMS40bC0xMS40LTMuNWwtMi4xLDIuMWwzLjMsMi40bDAuMiwyLjcgbC0zLjgtMS40bC02LTEuN2wtMS45LTUuOGwtMS0yLjZsLTgtNGwyLjktMC43bDIwLjEsNC4ybDYuNC0xLjVsMy43LTIuOWwtMS42LTMuNmwtNC0yLjZsLTE3LjYtNi4xbC0xMS42LTEuM2wtNy42LTMuMmwtMy42LDEuOCBsMCwwbC02LjQsMi4ybC0zLjIsMC41bDAuNCwzLjdsNy4yLDMuN2wtMi44LDQuMWw2LjQsNi4zbC0xLjcsNC44bDQuOSw0LjFsLTAuOSwzLjdsNy4zLDMuOWwtMC45LDIuOWwtMy4zLDMuM2wtNy45LDcuNGwwLDAgbDUuMywyLjhsLTQuNSwzLjJsMCwwbDAuOSwxbC0yLjYsMy40bDIuNSw1LjVsLTEuNiwxLjlsMi40LDEuNGwxLDIuOGwyLjEsMy42bDUuMiwxLjVsMSwxLjRsMi4zLTAuN2w0LjgsMS40bDEsMi45bC0wLjYsMS42IGwzLjcsMy45bDIuMiwxLjFsLTAuMSwxLjFsMy40LDEuMWwxLjcsMS42bC0xLjYsMS4zbC0zLjktMC4ybC0wLjgsMC42bDEuNSwybDIsMy45bDAsMGwxLjgsMC4ybDEtMS40bDEuNSwwLjNsNC44LTAuNWwzLjgsMy40IGwtMC45LDEuM2wwLjcsMS45bDQsMC4ybDIuMiwyLjdsMC4yLDEuMmw2LjYsMi4ybDMuNS0xbDMuNiwyLjlsMi45LTAuMWw3LjYsMmwwLjQsMS45bC0xLjMsMy4ybDEuOCwzLjRsLTAuMywyLjFsLTQuNywwLjVsLTIuMiwxLjcgbDAuNCwyLjhsNC4yLTFsMC40LDEuM2wtNi44LDIuNmwzLjIsMi40bC0zLjIsNS4ybC0zLjQsMWw1LDMuNmw2LjIsMi40bDcuNCw1LjFsMC41LTAuN2w0LjUsMS4xbDcuNywxbDcuNSwyLjlsMS4xLDEuMmwyLjktMSBsNS4xLDEuM2wyLjEsMi41bDMuNSwxLjRsMS41LDAuMmw0LjMsMy44bDIuNCwwLjRsMC41LTEuNWwyLjYtMi41bDAsMGwtNy4zLTcuM2wtMC40LTQuMWwtNS45LTUuOWwzLjUtNi4zbDQuNi0xLjFsMS40LTMuN2wtMi44LTEgbC0wLjItMy4ybC00LjItNC4xbC0zLjYsMC4ybC01LjMtNC4zbDEuNy00LjdsLTEuNy0xLjJsMi4xLTYuOGw2LDMuNmwtMC43LTQuNmw4LjEtNi42bDcuNS0wLjJsMTEuOSw0LjNsNi42LDIuNGw0LjMtMi41bDcuNi0wLjIgbDcuMywzLjJsMC44LTEuOGw2LjksMC4zbDAuMi0zbC05LjQtNC4ybDMuNi0yLjlsLTEuNS0xLjdsMy45LTEuNmwtNS00LjFsMS40LTIuMWwxNi44LTIuMWwxLjctMS41bDEwLjgtMi4ybDMuMS0yLjVsOSwxLjNsNC4zLDYuMyBsNC4zLTEuNWw3LDIuMWwxLjIsMy4zbDQuNC0wLjRsOS4xLTUuN2wtMC44LDEuOWw4LjMsNC43bDE4LjEsMTUuNWwxLjEtMy4zbDguMywzLjZsNi4yLTEuNmwzLjIsMS4xbDQuMSwzLjZsMy45LDEuMmwzLjMsMi42bDYtMC45IGw0LjMsMy44bDEuNy0wLjVsNC43LTFsNi42LTUuNGw1LjktMi45bDUuMywxLjlsNS4xLDAuMWw0LjcsMi45bDUsMC4ybDcuOSwxLjZsMi40LTQuM2wtNC0zLjZsMS4zLTYuNGw2LjksMi41bDQuOCwwLjhsNi42LDEuNSBsMy43LDQuNmw4LjQsMi42bDMuOS0xLjFsNS43LTAuOGw1LjQsMC44bDYuNSwzbDQuOSwzLjFoNC41bDYuNywxbDMuNi0xLjZsNS44LTFsNC41LTQuNGwzLjMsMC43bDMuOSwyLjFsNS41LTAuNWw3LjMsMi4zbDQuNC0zLjkgbC0xLjktMi43bC0wLjEtNi41bDEuMi0ybC0yLjUtMy4zbC0zLjctMS41bDEuNy0zbDUuMS0xLjFsNi4yLTAuMmw4LjUsMS44bDUuOSwyLjNsNy43LDYuMWwzLjgsMi43bDQuNCwzLjdsNi4xLDYuMWw5LjksMS45IGw4LjksNC41bDYsNS44aDcuNWwyLjYtMi41bDYuOS0xLjhsMS4zLDUuNmwtMC40LDIuM2wyLjgsNi44bDAuNiw2bC02LjgtMS4xbC0yLjksMi4ybDQuNyw1LjNsMy44LDcuM2wtMi41LDAuMWwxLjksMy4xbDAsMCBsMS40LDEuMWwwLDBsMCwwbDAsMGwtMC40LTJsNC00LjVsNS4xLDNsMy4yLTAuMWw0LjQtMy42bDEtMy43bDIuMS03LjFsMS45LTcuMmwtMS4zLTQuM2wxLTlsLTUuMi05LjlsLTUuNS03LjNsLTEuMy02LjJsLTQuNy01LjEgbC0xMi43LTYuN2wtNS42LTAuNGwtMC4zLDNsLTUuOC0xLjNsLTUuNy0zLjhsLTgtMC43bDQuOS0xNC4xbDMuNS0xMS41bDEzLjEtMS44bDE0LjksMWwyLjUtMi44bDcuOSwwLjhsNC4zLDQuM2w2LjQtMC42bDguNC0xLjYgbC03LjctMy41di05LjhsOS4xLTEuOWwxMi4xLDcuMWwzLjYtNi40bC0zLjItNC43bDQuNy0wLjVsNi41LDguMWwtMi40LDQuNmwtMC44LDZsMC4zLDcuNWwtNS43LDEuM2wyLjgsMi43bC0wLjEsMy42bDYuNCw4LjMgbDE2LDEzLjRsMTAuNSw4LjhsNS43LDQuM2wxLjYtNS43bC00LjUtNi4ybDUuNy0xLjVsLTUuNC02LjlsNS0zLjFsLTQuNy0yLjZsLTMuNC01bDQuMS0wLjJsLTktOC42bC02LjctMS40bC0yLjktMi40bC0xLjEtNS42IGwtMy4xLTMuOWw3LDAuOGwxLjMtMi41bDQuNywyLjJsNi4xLTQuNmwxMS40LDRsLTEuNy0yLjZsMi0zLjZsMS41LTRsMy4xLTAuN2w2LjUtNC4zbDkuOCwxLjJsLTAuOS0xLjVsLTMuOC0yLjNsLTQuMS0xLjZsLTkuMS00LjYgbC04LjEtM2w2LjEsMC40bDItMi41bDAsMGwtMzIuOS0yMS45bC05LjQtMi4zbC0xNS43LTIuNmwtNy45LDAuM2wtMTUuMi0xLjRsMS44LDIuM2w4LjUsMy40bC0yLjUsMS44bC0xNC4yLTQuOGwtNi44LDAuNmwtOS4yLTEuMSBsLTcsMC4ybC0zLjksMS4xbC03LjItMS42bC01LjEtMy44bC02LjUtMi4ybC05LjItMC45bC0xNC43LDFsLTE2LjEtNGwtNy44LTNsLTQwLjEtMy40bC0yLjEsMi4ybDkuMyw0LjhsLTcuNS0wLjdsLTEsMS41bC05LjctMS42IGwtNSwxLjRsLTkuMy0yLjRsMyw1LjVsLTguOS0yLjFsLTEwLTQuMWwtMC40LTIuMmwtNi0zLjNsLTkuOC0yLjZoLTYuMWwtOS4zLTAuOWw0LjcsMy45bC0xNy4yLTAuOGwtMy45LTIuM2wtMTMuMy0wLjlsLTUuMywwLjggbC0wLjEsMS4zbC01LjgtMy4ybC0yLjMsMC45bC03LjItMS4ybC01LjYtMC43bDEuMS0xLjVsNi42LTIuOGwyLjMtMS41bC0yLjQtMi41bC01LjUtMS45bC0xMS41LTIuM2wtMTAuOC0wLjFsLTEuOSwxLjJMMTM2OS4zLDEwNCBMMTM2OS4zLDEwNHogTTEyMDcuMSwxMzUuNmwtOS45LTQuM2wtMy4xLTQuM2wzLjMtNC45bDIuOC01bDguNi00LjdsOS44LTIuNGwxMS4zLTIuNGwxLjMtMS41bC00LjItMS45bC02LjYsMC42bC00LjksMS44IGwtMTEuNywwLjlsLTEwLjEsMy4xbC02LjgsMi43bDIuNSwyLjJsLTYuNiw0LjRsMy45LDAuN2wtNS40LDQuM2wxLjYsMi44bC0zLjQsMS4xbDEuOSwyLjhsNy45LDEuNGwyLjIsMi4zbDEzLjQsMC43TDEyMDcuMSwxMzUuNiBMMTIwNy4xLDEzNS42eiBNMTUyMS4xLDExMC45bC0xNy45LTIuNmwtMTAuMi0wLjJsLTMuNCwwLjlsMy40LDMuNGwxMi40LDMuMmw0LjUtMS4ybDE0LjIsMC4yIEMxNTI0LjEsMTE0LjYsMTUyMS4xLDExMC45LDE1MjEuMSwxMTAuOXogTTE1NDYuMywxMTMuMmwtMTEuNy0xLjNsLTguMi0wLjdsMS43LDEuNmwxMC4zLDJsNi44LDAuNEwxNTQ2LjMsMTEzLjJMMTU0Ni4zLDExMy4yeiBNMTUzMy44LDEyMi43bC0yLjUtMS40bC04LjMtMS45bC00LjEsMC41bC0wLjgsMmwxLjEsMC4ybDguOCwwLjZDMTUyOCwxMjIuNywxNTMzLjgsMTIyLjcsMTUzMy44LDEyMi43eiBNMTY5Ni40LDEzNWwtNi0zLjYgbC0xLjQsMi4ybDMuNSwxLjZMMTY5Ni40LDEzNXogTTEwODQsMjI4LjlsLTAuNi0xLjVsMC4yLTEuN2wtMi4yLTAuOWwtNS0xLjFsLTYuMywybC0wLjcsMi42bDUuOSwwLjdMMTA4NCwyMjguOXogTTE2NzMuNywyNTAuNyBsLTcuMi02LjJsLTUuMS02bC02LjgtNS44bC00LjktNGwtMS4zLDAuOGw0LjQsMi44bC0xLjksMi44bDYuOCw4LjNsNy44LDZsNi40LDguM2wyLjQsNC42bDUuNSw2LjhsMy44LDZsNC42LDUuMmwtMC4xLTQuOGw2LjUsMy44IGwtMy00LjRsLTkuNS02LjNsLTMuNy05bDguOSwyTDE2NzMuNywyNTAuN0wxNjczLjcsMjUwLjd6XCJ9LFJXOntkOlwiTTExNDcuNiw1NzkuNGwtMy4zLDEuOWwtMS40LTAuNmwtMS42LDEuOGwtMC4yLDMuOGwtMC44LDAuNGwtMC42LDMuNWwzLjUsMC41bDEuNy0zLjZsMywwLjRsMCwwbDEuNi0wLjhsMC40LTMuNyBMMTE0Ny42LDU3OS40TDExNDcuNiw1NzkuNHpcIn0sS046e2Q6XCJNNjI5LjksNDYzLjJ2LTAuM2wtMC4yLTAuMmgtMC4zdjAuNWwwLjIsMC4yTDYyOS45LDQ2My4yeiBNNjI5LjQsNDYyLjVsLTAuMS0wLjJsLTAuMS0wLjFsLTAuMi0wLjRsLTAuNC0wLjQgbC0wLjIsMC4xbC0wLjEsMC4ydjAuMWwwLDBsMC4zLDAuM2wwLjQsMC4xbDAuMiwwLjRMNjI5LjQsNDYyLjVMNjI5LjQsNDYyLjV6XCJ9LExDOntkOlwiTTYzNy40LDQ4NC4ybDAuMS0xLjJsLTAuMS0wLjVsLTAuMiwwLjFsLTAuMywwLjRsLTAuNCwwLjZsLTAuMSwwLjN2MC42bDAuNiwwLjRMNjM3LjQsNDg0LjJMNjM3LjQsNDg0LjJ6XCJ9LFZDOntkOlwiTTYzNC41LDQ5MS40TDYzNC41LDQ5MS40di0wLjFoMC4xdi0wLjFsMCwwdi0wLjFoLTAuMXYwLjFsMCwwdjAuMWgtMC4xTDYzNC41LDQ5MS40TDYzNC41LDQ5MS40TDYzNC41LDQ5MS40IEw2MzQuNSw0OTEuNHogTTYzNS4yLDQ4OS41bDAuMS0wLjJsMC4xLTAuMWwwLDBsMCwwbC0wLjEtMC4xbDAsMHYwLjFsLTAuMiwwLjFsMCwwdjAuMWwwLDB2MC4xSDYzNWgtMC4xbDAsMGgwLjFsMCwwbDAuMSwwLjFsMCwwIGwwLDBsMCwwTDYzNS4yLDQ4OS41TDYzNS4yLDQ4OS41eiBNNjM1LjUsNDg4LjRsMC4zLTAuMmwwLjEtMC42bC0wLjEtMC40aC0wLjJsLTAuMywwLjFsLTAuMiwwLjNsLTAuMSwwLjVMNjM1LjUsNDg4LjRMNjM1LjUsNDg4LjQgTDYzNS41LDQ4OC40elwifSxTTTp7ZDpcIk0xMDQwLjMsMjkzLjVsLTAuNywwLjFsLTAuMi0wLjlsMC45LTAuM0wxMDQwLjMsMjkzLjV6XCJ9LFNUOntkOlwiTTEwMTQuMSw1NzEuNGwwLjUtMC44di0wLjVsLTAuMy0wLjVoLTAuNGwtMC41LDAuNGwtMC4zLDAuNHYwLjNsMC4xLDAuN2wwLjEsMC4zbDAuMywwLjJMMTAxNC4xLDU3MS40IEwxMDE0LjEsNTcxLjR6IE0xMDE4LjQsNTYyLjJsMC4yLTAuNHYtMC4ybC0wLjEtMC4xbC0wLjEtMC4xbC0wLjIsMC4xbC0wLjMsMC41bDAuMSwwLjJsMC4yLDAuMkwxMDE4LjQsNTYyLjJMMTAxOC40LDU2Mi4yelwifSxTQTp7ZDpcIk0xMjI4LjcsMzg3bC0xMC4yLTAuNWwtMTYuNy0xMi43bC04LjUtNC41bC02LjctMS43bC0wLjksMWwtMTAuNCwzLjFsNi4xLDYuNGwtMS43LDFsLTAuNywyLjJsLTQsMC44bC0xLjEsMi4zIGwtMi4xLDJsLTYuMS0xbC0wLjUsMi41djIuMmwtMC42LDMuNWgyLjdsMy4yLDQuNGwzLjcsNS4xbDIuNSw0LjdsMS43LDEuNWwxLjcsMy4zbC0wLjIsMS40bDIuMSwzLjdsMywxLjNsMi44LDIuNWwzLjYsN3YzLjggbDAuOSw0LjRsNCw2LjFsMi41LDFsNC4xLDQuNGwxLjksNS4ybDMuMiw1LjNsMywyLjNsMC42LDIuNWwxLjgsMS45bDAuOSwyLjhsMi4zLTIuMWwtMC43LTIuN2wxLjItMy4xbDIuNCwxLjdsMS41LTAuNmw2LjQtMC4yIGwxLDAuN2w1LjQsMC42bDIuMS0wLjNsMS42LDIuMWwyLjUtMWwzLjUtNi43bDUtMi45bDE1LjctMi40bDE2LjEtNi40bDIuNi0xMi43bC0yLjktNC41bC0xLDEuM2wtMTYuOC0zLjJsLTIuNi02LjRsLTAuNC0xLjUgbC0xLjItMi40bC0xLjUsMC40bC0xLjgtMS4ybC0xLTEuNmwtMC45LTIuMWwtMS43LTEuOGwtMS0yLjFsMC40LTIuMWwtMC42LTIuN2wtNC0yLjZsLTEuMi0yLjNsLTIuOS0xLjRsLTIuNy01LjVsLTMuOCwwLjIgbC0xLjctMy4xTDEyMjguNywzODdMMTIyOC43LDM4N3pcIn0sU046e2Q6XCJNOTA4LjksNDc5LjJsLTMuNi00LjRsLTMuMi00LjdsLTMuNy0xLjdsLTIuNi0xLjhoLTMuMWwtMi44LDEuNGwtMi43LTAuNWwtMiwybC0xLjMsMy4zbC0yLjgsNC40bC0yLjUsMS4ybDIuNywyLjMgbDIuMiw1bDYuMS0wLjJsMS4zLTEuNWwxLjgtMC4xbDIuMSwxLjVsMS44LDAuMWwxLjgtMS4xbDEuMSwxLjhsLTIuNCwxLjVsLTIuNC0wLjFsLTIuNC0xLjRsLTIuMSwxLjVoLTFsLTEuNCwwLjlsLTUtMC4xbDAuOCw0LjkgbDMtMS4xbDEuOCwwLjJsMS41LTAuN2wxMC4zLDAuM2wyLjcsMC4xbDQsMS41bDEuMy0wLjFsMC40LTAuN2wzLDAuNWwwLjgtMC40bDAuMy0ybC0wLjQtMi40bC0yLjEtMS44bC0xLjEtMy43TDkwOC45LDQ3OS4yIEw5MDguOSw0NzkuMnpcIn0sUlM6e2Q6XCJNMTA4NC44LDI4NS4ybC0zLjItMS41bC0wLjgtMS45bC0yLjktMi41bC0zLjItMC4ybC0zLjcsMS42bDAsMGwxLjUsMi40bDEuNywxLjhsLTEuNywyLjNsMCwwaDEuOGwtMSwyLjdsMi43LDIuMyBsLTAuNSwyLjlsLTEuMiwwLjNsMS41LDEuMWwwLjgsMC44bDEuOCwwLjdsMiwxLjJsLTAuNCwwLjZsMS4yLTAuNWwwLjUtMmwwLjktMC40bDAuOCwwLjlsMSwwLjRsMC44LDFsMC44LDAuM2wxLjEsMS4xaDAuOCBsLTAuNSwxLjVsLTAuNSwwLjdsMC4yLDAuNWwxLjctMC40bDIuNC0wLjFsMC43LTAuOWwtMC42LTAuN2wwLjctMmwxLjctMS45bC0yLjgtMi42bC0wLjctMi4zbDEuMS0xLjRsLTEtMWwxLjEtMS4xbC0xLjQtMC43IGwtMS40LDEuM2wtMy4xLTEuOEwxMDg0LjgsMjg1LjJMMTA4NC44LDI4NS4yelwifSxTQzp7ZDpcIk0xMjg4LjUsNjAybC0wLjUtMC44bC0wLjQsMC4zbDAuMiwwLjNsMC4zLDAuMmwwLjEsMC40bDAuMywwLjJWNjAyTDEyODguNSw2MDJ6XCJ9LFNMOntkOlwiTTkxOS40LDUxOC43bC0xLjUsMC4zdi0yLjNMOTE3LDUxNWwwLjItMS44bC0xLjItMi43bC0xLjUtMi4zSDkxMGwtMS4zLDEuMmwtMS41LDAuMmwtMSwxLjRsLTAuNywxLjdsLTMsMi44IGwwLjcsNC43bDAuOSwyLjNsMi45LDMuNWw0LjEsMi41bDEuNSwwLjVsMS4zLTJsMC4zLTEuOWwyLjYtMy40TDkxOS40LDUxOC43TDkxOS40LDUxOC43elwifSxTRzp7ZDpcIk0xNTYxLDU2My43bDAuMS0wLjJsLTAuMi0wLjJsLTAuMy0wLjFsLTAuNS0wLjJsLTAuNiwwLjFsLTAuMywwLjZsMC45LDAuNEwxNTYxLDU2My43TDE1NjEsNTYzLjd6XCJ9LFNYOntkOlwiTTYyNy4xLDQ1Ny4yTDYyNy4xLDQ1Ny4ybDAuMiwwLjJsMC4zLDAuMWwwLjEtMC4xdi0wLjJINjI3LjF6XCJ9LFNLOntkOlwiTTEwODcuNCwyNjAuOWwtNC45LTIuM2wtMy40LDAuOGwtMi40LTAuNmwtMi44LDEuM2wtMi43LTIuMmwtMS45LDAuOWwtMC4zLTAuNGgtMS41bC0wLjYsMS4xbC0xLjEsMC4zbC0wLjIsMS40IGwtMC45LDAuM2wtMC4xLDAuNmwtMS42LDAuNmwtMi4yLTAuMWwtMC42LDEuNGwtMC4zLDAuOGwwLjcsMi4xbDIuNiwxLjZsMS45LDAuN2w0LjEtMC44bDAuMy0xLjJsMS45LTAuMmwyLjMtMWwwLjYsMC40bDIuMi0wLjcgbDEtMS41bDEuNi0wLjRsNS41LDEuOWwxLTAuNmwwLjctMi41TDEwODcuNCwyNjAuOUwxMDg3LjQsMjYwLjl6XCJ9LFNJOntkOlwiTTEwNTkuNCwyNzdsLTEuMi0yLjFsLTAuOC0wLjFsLTAuOSwxLjFsLTQuMywwLjFsLTIuNCwxLjRsLTQuMi0wLjRsLTAuMywzbDEuNCwyLjdsLTEuMSwwLjVsMy41LDAuMmwwLjgtMWwxLjgsMSBsMiwwLjFsLTAuMi0xLjdsMS43LTAuNmwwLjMtMi41TDEwNTkuNCwyNzdMMTA1OS40LDI3N3pcIn0sU0I6e2Q6XCJNMTkwOS4xLDY0Ni40bC0wLjItMC4ybC0wLjEtMC40aC0wLjNsLTAuMywwLjFsMC4yLDAuNmgwLjJMMTkwOS4xLDY0Ni40TDE5MDkuMSw2NDYuNHogTTE4NzMuNSw2NDcuMmwtMC4xLTAuMiBsLTAuNS0wLjRsLTEuOS0xLjNsLTAuNC0wLjFsLTAuMSwwLjFsLTAuMSwwLjNsMC4xLDAuMmwwLjUsMC4xdjAuMWwwLjMsMC4ybDAuNywwLjJsMC40LDAuM2wwLjEsMC41bDAuMywwLjFsMC4zLDAuMUwxODczLjUsNjQ3LjIgTDE4NzMuNSw2NDcuMnogTTE5MDUuNSw2NDAuNkwxOTA1LjUsNjQwLjZsMC4yLTAuNGwtMC4yLTAuMWwtMC41LTAuMWwtMC43LDAuMWwtMC4zLDAuMmwtMC4yLDAuM2gtMC4ydjAuMmwwLjEsMC40bDAuMi0wLjFsMC4yLDAuMSBsMC41LTAuNWgwLjNoMC4xTDE5MDUuNSw2NDAuNkwxOTA1LjUsNjQwLjZ6IE0xODgxLjEsNjM4LjNsLTAuMS0wLjJsLTAuMi0wLjFsLTAuOS0wLjdsLTAuNS0wLjJoLTAuNWwtMC4xLDAuNXYwLjNoMC42bDAuNCwwLjJ2MC42IGwwLjIsMC4ydjAuNWwxLjIsMC45bDAuNywwLjRsMC43LDAuMWwwLjQsMC4ybDAuNS0wLjFsMC41LDAuMmwwLjQtMC4xbC0wLjQtMC4zdi0wLjRsLTAuNS0xLjNsLTAuMy0wLjNsLTAuNSwwLjFsLTAuNS0wLjJoLTAuNCBMMTg4MS4xLDYzOC4zTDE4ODEuMSw2MzguM3ogTTE4ODAuNyw2MzMuNGwtMC42LTEuNmwtMC4yLTAuMWwwLjEsMC42bDAuMSwwLjRsLTAuMSwwLjVsLTAuMSwwLjZsMC4yLDAuMmwwLjItMC4ybDAuNCwwLjV2LTAuMiBWNjMzLjR6IE0xODcwLjksNjMxLjJsLTAuMy0wLjFsLTAuNCwwLjNsLTAuMSwwLjNsLTAuMSwwLjd2MC40bDAuMywwLjdsMC4zLDAuNWwwLjMsMC4zbDAuMiwwLjJsMC45LDAuMWwxLjcsMC4xbDAuOSwwLjRsMC45LDAuMiBsMC40LTAuMWwwLjUtMC4ybDAuMS0wLjFsLTAuMS0wLjZsLTAuMi0wLjNsLTAuNC0wLjJsLTAuMi0wLjZsLTAuNS0wLjRsLTAuOS0wLjdoLTEuNmwtMC42LDAuMUwxODcwLjksNjMxLjJMMTg3MC45LDYzMS4yeiBNMTg3My41LDYyOS40bC0wLjUsMC4ydjAuM2wwLjQsMC4xbDAuNCwwLjJsMC4xLDAuM2wwLDBsMC4yLTAuMWwwLjQsMC4ybDAuMi0wLjNsLTAuNC0wLjVsLTAuNC0wLjNoLTAuMUwxODczLjUsNjI5LjQgTDE4NzMuNSw2MjkuNHogTTE4NjcuOSw2MzAuMmwwLjMtMC4ydi0wLjRoLTAuM2wtMC4xLTAuMmgtMC4ybC0wLjMsMC4ybC0wLjIsMC4zbDAuMSwwLjJoMC40TDE4NjcuOSw2MzAuMkwxODY3LjksNjMwLjIgTDE4NjcuOSw2MzAuMnogTTE4NTkuNSw2MjcuOWwtMC4xLTAuMmwtMC4zLTAuMmgtMC4ybC0wLjUsMC4xbDAuMSwwLjFsMC42LDAuM2wwLjMsMC4xTDE4NTkuNSw2MjcuOUwxODU5LjUsNjI3Ljl6IE0xODYyLjYsNjI4LjMgbDAuMy0wLjJsLTAuMS0wLjJsLTAuMS0wLjVsLTAuNCwwLjdsMC4xLDAuMkgxODYyLjZ6IE0xODYyLjEsNjI3LjR2LTAuMlY2MjdsLTAuMi0wLjFsMC40LTAuM2wtMC4xLTAuMWwtMC42LTAuMmwtMC4yLDAuMmwtMC4yLDAuMSBsLTAuMSwwLjFsLTAuMSwwLjFsLTAuMSwwLjVsMC4yLDAuNGwwLjQsMC4yTDE4NjIuMSw2MjcuNEwxODYyLjEsNjI3LjR6IE0xODU4LjEsNjI3LjZsLTAuMy0wLjRsMC4xLTAuNWwwLjItMC4xbDAuMi0wLjVsLTAuMS0wLjQgbC0wLjIsMC4xbC0wLjcsMC42bC0wLjEsMC4zbDAuNiwwLjhMMTg1OC4xLDYyNy42TDE4NTguMSw2MjcuNkwxODU4LjEsNjI3LjZ6IE0xODcxLjEsNjI2LjNsLTAuMi0wLjR2LTAuMmwtMC4zLTAuMmwtMC4yLDAuMSBsLTAuMSwwLjNsMC4xLDAuMmwwLjQsMC4zTDE4NzEuMSw2MjYuM0wxODcxLjEsNjI2LjN6IE0xODc3LjEsNjI1LjFoLTAuMmwtMC4xLDAuMWgtMC4yaC0wLjNsLTAuMSwwLjJsMC42LDEuMWwtMC4zLDAuNWwwLjQsMi4yIGwwLjQsMS4ybDAuOCwwLjh2MC4ybDAuOCwwLjVsMC42LDEuM2wwLjIsMC4xbDAuMS0wLjJ2LTAuNmwtMC41LTEuMWwwLjEtMC44bC0wLjItMC4zVjYzMGwtMC4yLTAuOGwtMC42LTAuN2wtMC4zLTAuMWwtMC4yLTAuMyBsMC4yLTAuNmwwLjItMC4ybDAuMS0wLjNMMTg3Ny4xLDYyNS4xTDE4NzcuMSw2MjUuMXogTTE4NjAuNSw2MjQuNmwtMC42LTAuMmwtMC4yLTAuM3YtMWwtMC42LTAuM2wtMC4zLDAuMmwtMC42LDAuN2wtMC4yLDAuNCBsLTAuNSwwLjNsLTAuMSwwLjN2MC40bDAuNCwwLjFsMC4zLTAuNGwwLjktMC4xbDAuMywwLjF2MC40bDAuMSwwLjdsMC4zLDAuM2wwLjUsMC4ybDAuNCwwLjZsMC4xLTAuM2gwLjJsMC4yLTAuNGwtMC4zLTEuMiBMMTg2MC41LDYyNC42TDE4NjAuNSw2MjQuNnogTTE4NTQsNjI0LjJsMC4xLTAuNWwtMC4xLTAuOWwtMC4yLDAuMXYwLjJsLTAuMSwwLjRMMTg1NCw2MjQuMkwxODU0LDYyNC4yeiBNMTg1Ny4yLDYyMy44bDAuMi0wLjIgdi0wLjR2LTAuNWwtMC4yLTAuNGwtMC4yLTAuMmwtMC41LDAuMWwtMC40LDAuNXYwLjVsMC40LDAuNkwxODU3LjIsNjIzLjhMMTg1Ny4yLDYyMy44TDE4NTcuMiw2MjMuOHogTTE4NTQuNiw2MjIuNmwwLjItMC4zIGwwLjUtMC43bDAuMS0wLjNsLTAuNS0wLjJsLTAuNC0wLjVsLTAuNC0wLjJsLTAuMywwLjR2MC40bDAuNSwwLjZsLTAuMSwwLjRsMC4yLDAuMWwwLjEsMC40TDE4NTQuNiw2MjIuNkwxODU0LjYsNjIyLjZ6IE0xODcyLjEsNjI2LjVsLTAuMS0wLjVsLTAuMy0wLjRsMC40LTAuNWwtMi4yLTEuOWwtMC4zLTAuMmwtMC40LTAuMWwtMC41LTAuNGwtMC41LTAuMWwtMC41LTAuNGwtMC4yLTAuM2wtMC42LTAuNGwtMC42LTAuOCBsLTEuNS0wLjNsMC4xLDAuMmwwLjQsMC40bDAuMSwwLjdsMC41LDAuNGwwLjUsMC42bDAuMiwwLjFsMC4yLDAuMmwwLjQsMC41bDAuOCwwLjRsMC44LDAuNmwwLjMsMC4xbDAuMywwLjNsMS41LDAuN2wwLjUsMC43IEwxODcyLjEsNjI2LjVMMTg3Mi4xLDYyNi41TDE4NzIuMSw2MjYuNXogTTE4NTAuMyw2MTcuM2wwLjItMC4zbC0wLjctMC41bC0wLjIsMC4zbC0wLjIsMC41bDAuNCwwLjJMMTg1MC4zLDYxNy4zTDE4NTAuMyw2MTcuM3ogTTE4NTkuNCw2MTguOEwxODU5LjQsNjE4LjhsLTAuNC0wLjFsLTAuNC0wLjJsLTAuNy0wLjhsLTAuMi0wLjNsLTAuMi0xbC0wLjQtMC40bC0xLjQtMC44bC0wLjgtMC44bC0wLjctMC4ybC0wLjIsMC4ydjAuNWwwLjIsMC4zIGwxLDAuOWwxLjEsMS43bDEsMWwwLjgsMC4xaDAuNHYwLjFsMC4xLDAuMmwwLjUsMC4ybDAuNS0wLjRMMTg1OS40LDYxOC44TDE4NTkuNCw2MTguOHpcIn0sU086e2Q6XCJNMTIyMy40LDUwNS43bC0yLjYtMi43bC0xLjItMi42bC0xLjgtMS4ybC0yLDMuNGwtMS4xLDIuM2wyLjIsMy41bDIuMSwzLjFsMi4yLDIuMmwxOC41LDcuNmw0LjgtMC4xbC0xNS40LDE5LjEgbC03LjQsMC4zbC00LjksNC41bC0zLjYsMC4xbC0xLjUsMmwtNC44LDcuMmwwLjIsMjMuMmwzLjMsNS4zbDEuMy0xLjVsMS4zLTMuNGw2LjEtNy43bDUuMy00LjhsOC4zLTYuNGw1LjYtNS4xbDYuNC04LjdsNC43LTcuMSBsNC42LTkuM2wzLjItOC4ybDIuNS03LjFsMS4zLTYuOGwxLjEtMi4zbC0wLjItMy40bDAuNC0zLjdsLTAuMi0xLjdoLTIuMWwtMi42LDIuMmwtMi45LDAuNmwtMi41LDAuOWwtMS44LDAuMmwwLDBsLTMuMiwwLjIgbC0xLjksMS4xbC0yLjgsMC41bC00LjgsMS45bC02LjEsMC44bC01LjIsMS42TDEyMjMuNCw1MDUuN0wxMjIzLjQsNTA1Ljd6XCJ9LFpBOntkOlwiTTExNDguMiw3MTMuN2wtMi45LTAuNmwtMS45LDAuOGwtMi42LTEuMWwtMi4yLTAuMWwtOCw0LjdsLTUuMiw0LjdsLTIsNC4zbC0xLjcsMi40bC0zLDAuNWwtMS4yLDNsLTAuNiwybC0zLjYsMS41IGwtNC40LTAuM2wtMi41LTEuOGwtMi4zLTAuOGwtMi43LDEuNWwtMS41LDMuMWwtMi43LDEuOWwtMi44LDIuOGwtNCwwLjdsLTEuMS0yLjNsMC43LTMuOGwtMy02LjFsLTEuNC0xbC0xLjEsMjMuNmwtNSwzLjJsLTIuOSwwLjUgbC0zLjMtMS4ybC0yLjQtMC41bC0wLjgtMi43bC0yLjEtMS44bC0yLjcsMy4ybDMuNSw4LjJ2MC4xbDIuNSw1LjNsMy4yLDZsLTAuMiw0LjhsLTEuNywxLjJsMS40LDQuMmwtMC4yLDMuOGwwLjYsMS43bDAuMy0wLjkgbDIuMSwyLjlsMS44LDAuMWwyLjEsMi4zbDIuNC0wLjJsMy41LTIuNGw0LjYtMWw1LjYtMi41bDIuMiwwLjNsMy4zLTAuOGw1LjcsMS4ybDIuNy0xLjJsMy4yLDFsMC44LTEuOGwyLjctMC4zbDUuOC0yLjVsNC4zLTIuOSBsNC4xLTMuOGw2LjctNi41bDMuNC00LjZsMS44LTMuMmwyLjUtMy4zbDEuMi0wLjlsMy45LTMuMmwxLjYtMi45bDEuMS01LjJsMS43LTQuN2gtNC4xbC0xLjMsMi44bC0zLjMsMC43bC0zLTMuNWwwLjEtMi4ybDEuNi0yLjQgbDAuNy0xLjhsMS42LTAuNWwyLjcsMS4ybC0wLjQtMi4zbDEuNC03LjFsLTEuMS00LjVMMTE0OC4yLDcxMy43TDExNDguMiw3MTMuN3ogTTExMjguMSw3NjYuNWwtMiwwLjZsLTMuNy00LjlsMy4yLTRsMy4xLTIuNSBsMi42LTEuM2wyLjMsMmwxLjcsMS45bC0xLjksMy4xbC0xLjEsMi4xbC0zLjEsMUwxMTI4LjEsNzY2LjVMMTEyOC4xLDc2Ni41elwifSxLUjp7ZDpcIk0xNjM3LjMsMzMxLjdsNi4yLDUuNWwtMy40LDEuMWw1LjIsNi44bDEuMSw0LjhsMi4xLDMuNWw0LjUtMC41bDMuMi0yLjdsNC4yLTEuMmwwLjUtMy42bC0zLjQtNy41bC0zLjMtNC4yIGwtOC4yLTcuNmwwLjEsMS42bC0yLjEsMC40bC0zLjUsMC4zbC0wLjcsMi45bC0yLjQtMC4yTDE2MzcuMywzMzEuN0wxNjM3LjMsMzMxLjd6XCJ9LFNTOntkOlwiTTExNjYsNTA4LjdsLTAuNy0yLjJsLTIuOS0yLjVsLTAuOC00LjZsMC41LTQuN2wtMi42LTAuNWwtMC4zLDEuNWwtMy40LDAuM2wxLjQsMS44bDAuNiwzLjlsLTMsMy41bC0yLjcsNC41IGwtMi44LDAuN2wtNC44LTMuN2wtMi4xLDEuM2wtMC41LDEuOWwtMi45LDEuMmwtMC4yLDEuM2gtNS41bC0wLjgtMS4zbC00LjEtMC4zbC0yLDEuMWwtMS41LTAuNWwtMy0zLjdsLTEtMS44bC00LDAuOWwtMS41LDIuOSBsLTEuMyw1LjdsLTEuOSwxLjJsLTEuNywwLjdsMy44LDIuNWwzLjEsMi42bDAuMSwybDMuOCwzLjRsMi40LDIuN2wxLjUsMy44bDQuMiwyLjVsMC45LDIuMWwzLjUsNS4ybDIuNSwwLjhsMS41LTEuMWwyLjYsMC40IGwzLjEtMS4zbDEuNCwyLjdsNSw0LjJsMCwwbDIuMy0xLjdsMy41LDEuNGw0LjUtMS41bDQsMC4xbDMuNC0zbDMuNC0zLjhsMy44LTQuMmwtMy41LTYuOWwtMi42LTEuNWwtMS0yLjVsLTIuOS0zLjFsLTMuNC0wLjUgbDEuOC0zLjZsMy0wLjFsMC44LTJsLTAuMi01bC0wLjgtMC4xTDExNjYsNTA4LjdMMTE2Niw1MDguN3pcIn0sRVM6e2Q6XCJNODg4LjMsMzkwLjRsMS0wLjF2MC4zbC0xLjIsMWwtMC41LDEuNGwtMC40LDAuNmwtMC4zLDAuMmwtMC42LDAuMmwtMC43LTAuOWwtMC40LTFsLTAuMi0wLjNsMC40LTAuMmgwLjVsMS0wLjEgbDAuMy0wLjFMODg4LjMsMzkwLjR6IE04ODMuMywzOTIuN2gtMC4ybC0wLjIsMC4ybC0wLjIsMC40bDAuMywwLjVsMC4yLDAuMWgwLjJsMC41LTAuNHYtMC4ybC0wLjEtMC4zTDg4My4zLDM5Mi43eiBNODgwLjYsMzg5IGwtMC4zLTAuNGgtMC43bC0wLjQsMC42bDAuNiwxLjJsMC4xLDAuNWgwLjFsMC41LTAuNWwwLjEtMC4zbC0wLjEtMC41bDAuMi0wLjJMODgwLjYsMzg5eiBNODc4LjcsMzk1LjVoLTAuNmwwLjEsMC4ybDAuMSwwLjIgbDAuNywwLjRsMC42LTEuMWwtMC4yLTAuMkw4NzguNywzOTUuNXogTTkwMS4xLDM4OS4zbC0wLjMsMC4ybC0wLjEsMC42bC0wLjcsMS4zbC0wLjUsMS4ybC0wLjcsMC42bC0wLjcsMC4ybDAuMSwwLjFsMC43LDAuMSBsMC44LTAuN2wxLjUtMC41bDAuMy0xbDAuMy0xLjF2LTAuN2wtMC4zLTAuM0w5MDEuMSwzODkuM0w5MDEuMSwzODkuM3ogTTg5My4xLDM5My4xTDg5My4xLDM5My4xTDg5My4xLDM5My4xaC0wLjJsLTEuMy0wLjEgbC0wLjIsMC42bC0wLjUsMC40djAuN2wwLjUsMC43bDAuMywwLjFsMC41LDAuMWwwLjctMC40bDAuMi0wLjRsMC4xLTAuOGwtMC4xLTAuNFYzOTMuMXogTTk5NC4zLDMxOC43bC0wLjMtMC4xbC0wLjUsMC4ybC0wLjUtMC4yIGwwLjEtMC4zbDAuMS0wLjJsMC4xLTAuMWwtMC4yLTAuMnYtMC4xbDAuMi0wLjJsLTAuMi0wLjFsLTEuMywwLjRsLTAuNywwLjRsLTIuMSwxLjV2MC4zbDAuMSwwLjJoMC40bDAuMiwwLjRsMC40LTAuNGwwLjMtMC4xIGwwLjMsMC4xbDAuMywwLjJsMC4xLDAuNmwwLjEsMC4ybDAuNiwwLjFsMC45LDAuNGwwLjQtMC4ybDAuNS0wLjNsMC4yLTAuNmwwLjMtMC41bDAuMy0wLjVsMC4zLTAuNGwtMC4xLTAuNEw5OTQuMywzMTguN3ogTTk5OC42LDMxNy4xbC0wLjktMC4zbC0xLDAuMWwtMC4xLDAuMXYwLjRsMC4xLDAuMWwwLjYsMC4xbDEuNiwwLjdoMC4xbDAuMS0wLjR2LTAuMUw5OTguNiwzMTcuMXogTTk5MiwzMDEuOWwtNiwwLjhsLTEuMy0wLjcgbC0wLjIsMC4xaC0wLjRsLTAuMS0wLjJ2LTAuMmwtMy43LTEuOGwtMS45LDEuM2wtOS40LTIuOGwtMi0yLjRsLTguMi0wLjJsLTQuMiwwLjNsLTUuNC0xaC02LjhsLTYuMi0xLjFsLTcuNCw0LjVsMiwyLjZsLTAuNCw0LjQgbDEuOS0xLjZsMi4xLTAuOWwxLjIsMy4xaDNsMC45LTAuOGwzLDAuMmwxLjMsMy4xbC0yLjQsMS43bC0wLjIsNC45bC0wLjksMC45bC0wLjMsM2wtMi4yLDAuNWwyLDMuOGwtMS42LDQuM2wxLjgsMS45bC0wLjgsMS43IGwtMiwyLjVsMC40LDIuMWw0LjgsMWwxLjQsMy43bDIsMi4ybDIuNSwwLjZsMi4xLTIuNWwzLjMtMi4zbDUsMC4xaDYuN2wzLjgtNWwzLjktMS4zbDEuMi00LjJsMy0yLjlsLTItMy43bDItNS4xbDMuMS0zLjVsMC41LTIuMSBsNi42LTEuM2w0LjgtNC4yTDk5MiwzMDEuOXogTTkwMy43LDM4Ni4zbC0wLjIsMC40bC0wLjYsMC4ybC0wLjgsMC40bC0wLjIsMC4zbC0wLjIsMC45bDAuNCwwLjFsMC4zLTAuNGwwLjktMC4zbDAuNS0wLjNsMC4xLTAuOSBsMC4yLTAuM2wtMC4yLTAuM0w5MDMuNywzODYuM3ogTTk4My43LDMyMy4xbC0wLjIsMC4zdjAuM2wtMC4zLDAuMWwtMC4xLDAuNGwwLjEsMC4ybDAuOCwwLjFsMC4yLTAuNGgwLjNsMC42LTAuN3YtMC4zbC0wLjMtMC4yIEw5ODMuNywzMjMuMXogTTk4NC4yLDMyNS4xbC0wLjEsMC4ybC0wLjEsMC4ydjAuMmgwLjVsMC40LDAuMWwwLjEtMC4xdi0wLjJoLTAuNUw5ODQuMiwzMjUuMXpcIn0sTEs6e2Q6XCJNMTQzMi4yLDUzMi43bDIuMy0xLjhsMC42LTYuNmwtMy02LjZsLTIuOS00LjVsLTQuMS0zLjVsLTEuOSwxMC4zbDEuNCw5LjFsMi44LDUuMUwxNDMyLjIsNTMyLjdMMTQzMi4yLDUzMi43elwifSxTRDp7ZDpcIk0xMTgwLjgsNDY4LjVsMC40LTQuMmwxLjYtMmw0LTFsMi42LTMuNmwtMy4xLTIuNGwtMi4yLTEuNmwtMi41LTcuNmwtMS4xLTYuNWwxLjEtMS4ybC0yLjEtNi4yaC0yMS44aC0yMS40aC0yMi4xIGwwLjUsMTIuN2gtNi4zdjIuN2wxLjEsMjUuMmwtNC44LTAuNGwtMi40LDQuN2wtMS40LDMuOWwxLjIsMS41bC0xLjgsMS45bDAuNywyLjdsLTEuNCwyLjZsLTAuNSwyLjRsMi0wLjRsMS4yLDIuNWwwLjEsMy43bDIuMSwxLjggdjEuNmwwLjcsMi43bDMuMyw0djIuNmwtMC44LDIuNmwwLjMsMmwyLDEuOGwwLjUsMC4zbDEuNy0wLjdsMS45LTEuMmwxLjMtNS43bDEuNS0yLjlsNC0wLjlsMSwxLjhsMywzLjdsMS41LDAuNWwyLTEuMWw0LjEsMC4zIGwwLjgsMS4zaDUuNWwwLjItMS4zbDIuOS0xLjJsMC41LTEuOWwyLjEtMS4zbDQuOCwzLjdsMi44LTAuN2wyLjctNC41bDMtMy41bC0wLjYtMy45bC0xLjQtMS44bDMuNC0wLjNsMC4zLTEuNWwyLjYsMC41bC0wLjUsNC43IGwwLjgsNC42bDIuOSwyLjVsMC43LDIuMnYzLjFsMC44LDAuMXYtMC43bDEuNC02LjdsMi42LTEuOGwwLjUtMi42bDIuMy00LjhsMy4yLTMuMmwyLjEtNi4ybDAuNy01LjVsLTAuNy0yLjVMMTE4MC44LDQ2OC41IEwxMTgwLjgsNDY4LjV6XCJ9LFNSOntkOlwiTTY2OCw1MzMuOGwtNC42LDAuNWwtMC42LDEuMWwtNi43LTEuMmwtMSw1LjdsLTMuNSwxLjZsMC4zLDEuNWwtMS4xLDMuM2wyLjQsNC42bDEuOCwwLjFsMC43LDMuNWwzLjMsNS42bDMuMSwwLjUgbDAuNS0xLjNsLTAuOS0xLjNsMC41LTEuOGwyLjMsMC42bDIuNy0wLjdsMy4yLDEuNGwxLjQtMi43bDAuNi0yLjlsMS0yLjhsLTIuMS0zLjdsLTAuNC00LjRsMy4xLTUuNUw2NjgsNTMzLjhMNjY4LDUzMy44elwifSxTWjp7ZDpcIk0xMTUwLjUsNzM2LjZsLTIuNy0xLjJsLTEuNiwwLjVsLTAuNywxLjhsLTEuNiwyLjRsLTAuMSwyLjJsMywzLjVsMy4zLTAuN2wxLjMtMi44bC0wLjMtMi44TDExNTAuNSw3MzYuNiBMMTE1MC41LDczNi42elwifSxTRTp7ZDpcIk0xMDc3LjcsMTYxLjFsLTEuOS0yLjJsLTEuNy04LjRsLTcuMi0zLjdsLTUuOS0yLjdsLTIuNSwwLjN2My41bC03LjktMC45bC0wLjYsMy4xbC00LTAuMWwtMi4yLDMuOWwtMy40LDYuMSBsLTUuNyw3LjlsMS44LDEuOWwtMS4zLDIuMmwtNC4zLTAuMWwtMi4zLDUuM2wxLDcuNmwzLjEsMi45bC0wLjksNi45bC0zLjQsNGwtMS43LDMuM2w0LjIsOC40bDQuNCw2LjdsMiw1LjdsNS4zLTAuM2wyLjItNC43IGw1LjcsMC41bDItNS41bDAuNi0xMGw0LjYtMS4zbDMuMy02LjZsLTQuOC0zLjNsLTMuNi00bDIuMS04LjFsNy43LTQuOWw2LjEtNC41bC0xLjItMy41bDMuNC0zLjlMMTA3Ny43LDE2MS4xTDEwNzcuNywxNjEuMXpcIn0sQ0g6e2Q6XCJNMTAyNC4zLDI3MC42bC01LjQtMS45bC0xLDEuNGgtNC4ybC0xLjMsMWwtMi4zLTAuNmwwLjIsMS42bC0zLjUsMy41djIuOGwyLjQtMC45bDEuOCwyLjdsMi4yLDEuM2wyLjQtMC4zbDIuNy0yLjEgbDAuOSwxbDIuNC0wLjJsMC45LTIuNWwzLjgsMC44bDIuMS0xLjFsMC4zLTIuNWwtMi42LTAuMmwtMi4zLTEuMWwwLjctMS42TDEwMjQuMywyNzAuNkwxMDI0LjMsMjcwLjZ6XCJ9LFNZOntkOlwiTTExODMuNSwzNTkuOWwxMS02LjdsMC45LTcuOGwtMS4yLTQuN2wyLjctMS42bDIuMS00LjFsLTUuOSwxLjFsLTIuOC0wLjJsLTUuNywyLjVoLTQuM2wtMy0xLjJsLTUuNSwxLjhsLTEuOS0xLjMgbDAuMSwzLjZsLTEuMiwxLjVsLTEuMiwxLjRsLTEsMi42bDEuMSw1bDIuNCwwLjNsMS4yLDIuNWwtMi42LDIuNGwtMC45LDMuNWwwLjMsMi42bC0wLjYsMWgwLjFsNi4zLDIuNUwxMTgzLjUsMzU5LjlMMTE4My41LDM1OS45eiBcIn0sVFc6e2Q6XCJNMTY0Mi4zLDQyNy4ybDEuMi0xMC4ybDAuMS0zLjlsLTIuOS0xLjlsLTMuMyw0LjhsLTEuOSw2LjNsMS41LDQuN2w0LDUuNEwxNjQyLjMsNDI3LjJMMTY0Mi4zLDQyNy4yelwifSxUSjp7ZDpcIk0xMzQ0LjEsMzE1LjdsLTIuMSwwLjJsLTEuMy0xLjhsMC4yLTIuOWwtNi40LDEuNWwtMC41LDRsLTEuNSwzLjVsLTQuNC0wLjNsLTAuNiwyLjhsNC4yLDEuNmwyLjQsNC43bC0xLjMsNi42IGwxLjgsMC44bDMuMy0yLjFsMi4xLDEuM2wwLjktM2wzLjIsMC4xbDAuNi0wLjlsLTAuMi0yLjZsMS43LTIuM2wzLjIsMS41djJsMS42LDAuM2wxLDUuNGwyLjYsMi4xbDEuNS0xLjNsMi4xLTAuN2wyLjUtMi45bDMuOCwwLjUgaDUuNGwtMS44LTMuN2wtMC42LTIuNWwtMy41LTEuNGwtMS42LDAuNmwtMy01LjlsLTkuNSwwLjlsLTcuMS0ybC01LjQsMC41bC0wLjYtMy43bDUuOSwxLjFMMTM0NC4xLDMxNS43TDEzNDQuMSwzMTUuN3pcIn0sVFo6e2Q6XCJNMTE0OS42LDU3OC42bC0yLDAuOGwyLjMsMy42bC0wLjQsMy43bC0xLjYsMC44bDAsMGwwLjMsMi41bDEuMiwxLjV2MmwtMS40LDEuNGwtMi4yLDMuM2wtMi4xLDIuM2wtMC42LDAuMSBsLTAuMywyLjdsMS4xLDAuOWwtMC4yLDIuN2wxLDIuNmwtMS4zLDIuNGw0LjUsNC4zbDAuMywzLjlsMi43LDYuNWwwLDBsMC4zLDAuMmwyLjIsMS4xbDMuNSwxLjFsMy4yLDEuOWw1LjQsMS4ybDEuMSwxLjdsMCwwIGwwLjQtMS4ybDIuOCwzLjRsMC4zLDYuN2wxLjgsMi40djAuMWwyLjEtMC4zbDYuNywxLjhsMS40LTAuOGwzLjktMC4xbDIuMS0xLjlsMy4zLDAuMWw2LjItMi41bDQuNi0zLjdsMCwwbC0yLTEuNGwtMi4yLTYuMyBsLTEuOC0zLjlsMC40LTMuMWwtMC4zLTEuOWwxLjctMy45bC0wLjItMS42bC0zLjUtMi4zbC0wLjMtMy42bDIuOC03LjlsLTgtNi4zbC0wLjQtMy43bC0yMC4yLTEzbDAsMGwtMi44LDIuOGwtMS45LDIuOWwyLjIsMi4yIGwtMy4yLDEuNmwtMC43LTAuOGwtMy4yLDAuNGwtMi41LDEuNGwtMS42LTIuNGwxLjEtNC41bDAuMi0zLjhsMCwwbDAsMEwxMTQ5LjYsNTc4LjZMMTE0OS42LDU3OC42elwifSxUSDp7ZDpcIk0xNTYyLjcsNDgxLjRsMS41LTIuOWwtMC41LTUuNGwtNS4yLTUuNWwtMS4zLTYuM2wtNC45LTUuMmwtNC4zLTAuNGwtMC44LDIuMmwtMy4yLDAuMmwtMS44LTEuMmwtNS4zLDMuOGwtMS01LjcgbDAuNC02LjdsLTMuOC0wLjNsLTAuOS0zLjhsLTIuNi0xLjlsLTMsMS40bC0yLjgsMi44bC0zLjksMC4zbC0xLjUsNi45bC0yLjIsMS4xbDMuNSw1LjZsNC4xLDQuNmwyLjksNC4ybC0xLjQsNS42bC0xLjcsMS4xIGwxLjcsMy4ybDQuMiw1LjFsMSwzLjVsMC4yLDNsMi44LDUuOGwtMi42LDUuOWwtMi4yLDYuNmwtMS4zLDYuMWwtMC4zLDMuOWwxLjIsMy42bDAuNy0zLjhsMi45LDMuMWwzLjIsMy41bDEuMSwzLjJsMi40LDIuNCBsMC45LTEuMWw0LjcsMi44bDAuNiwzLjNsMy43LTAuOGwxLjctMi42bC0zLjEtMy4zbC0zLjQtMC44bC0zLjMtMy42bC0xLjQtNS41bC0yLjYtNS44bC0zLjctMC4ybC0wLjctNC42bDEuNC01LjZsMi4yLTkuM2wtMC4yLTcgbDQuOS0wLjFsLTAuMyw1bDQuNy0wLjFsNS4zLDIuOWwtMi4xLTcuN2wzLTUuMmw3LjEtMS4zTDE1NjIuNyw0ODEuNEwxNTYyLjcsNDgxLjR6XCJ9LFRMOntkOlwiTTE2NzYuOCw2MzEuOWw0LjktMS44bDYtMi44bDIuMi0xLjdsLTItMC44bC0xLjgsMC44bC00LDAuMmwtNC45LDEuNGwtMC44LDEuNWwwLjUsMS4zTDE2NzYuOCw2MzEuOUwxNjc2LjgsNjMxLjl6IFwifSxURzp7ZDpcIk05ODEuNyw1MDIuMmwtNC45LTAuMWwtMC40LDEuOWwyLjQsMy4zbC0wLjEsNC42bDAuNiw1LjFsMS40LDIuM2wtMS4yLDUuN2wwLjQsMy4ybDEuNSw0bDEuMiwyLjJsNC42LTEuM2wtMS40LTQuNCBsMC4yLTE0LjZsLTEuMS0xLjNsLTAuMi0zLjFsLTItMi4zbC0xLjctMS45TDk4MS43LDUwMi4yTDk4MS43LDUwMi4yelwifSxUTzp7ZDpcIk0xMy4zLDcwNy43TDEzLjMsNzA3LjdsLTAuMiwwLjN2MC4ybDAuNCwwLjRMMTMuMyw3MDcuN3ogTTExLjcsNzA2LjhoLTAuMkgxMS43bC0wLjQtMC4zaC0wLjRsLTAuMi0wLjF2LTAuMiBsLTAuMiwwLjNsMC4yLDAuM2wwLjksMC40bDAuMywwLjJsMC4yLTAuNnYtMC4ybC0wLjMsMC4xdjAuMUgxMS43eiBNMTQuMiw2OTAuOGwwLjEtMC4ydi0wLjJsLTAuMy0wLjFoLTAuMWwtMC4zLDAuNWwwLjEsMC4xIGwwLjMsMC4yaDAuMUwxNC4yLDY5MC44elwifSxUVDp7ZDpcIk02MzUuNCw1MDcuN2wwLjEtMC4ydi0wLjZsMC4yLTAuNGwtMC4yLTAuNGwtMC4xLTAuNmwwLjEtMC41di0wLjdsMC4yLTAuM2wwLjUtMC44aC0wLjlsLTAuNiwwLjJsLTEuMSwwLjEgbC0wLjUsMC4ybC0wLjcsMC4xTDYzMiw1MDRsMC4xLDAuMWwwLjUsMC4ybDAuMiwwLjJsMC4xLDAuMmwwLjEsMC40bC0wLjMsMS43bC0wLjEsMC4xTDYzMiw1MDdsLTAuMiwwLjNsLTEuNCwwLjhsMC44LTAuMWwwLjksMC4xIGwyLjQtMC4xTDYzNS40LDUwNy43TDYzNS40LDUwNy43eiBNNjM3LjIsNTAxbDEuMi0wLjVsMC4xLTAuNGgtMC4ybC0wLjgsMC4zbC0wLjYsMC41djAuMkw2MzcuMiw1MDF6XCJ9LFROOntkOlwiTTEwMzgsMzYxLjRsLTItMWwtMS41LTNsLTIuOC0wLjFsLTEuMS0zLjVsMy40LTMuMmwwLjUtNS42bC0xLjktMS42bC0wLjEtM2wyLjUtMy4ybC0wLjQtMS4zbC00LjQsMi40bDAuMS0zLjMgbC0zLjctMC43bC01LjYsMi42bC0xLDMuM2wxLDYuMmwtMS4xLDUuM2wtMy4yLDMuNmwwLjYsNC44bDQuNSwzLjh2MS41bDMuNCwyLjZsMi42LDExLjNsMi42LTEuNGwwLjQtMi43bC0wLjctMi42bDMuNy0yLjVsMS41LTIgbDIuNi0xLjhMMTAzOCwzNjEuNEwxMDM4LDM2MS40elwifSxUUjp7ZDpcIk0xMTY2LjYsMzA4LjlsLTkuNy00LjRsLTguNSwwLjJsLTUuNywxLjdsLTUuNiw0bC05LjktMC44bC0xLjYsNC44bC03LjksMC4ybC01LjEsNi4xbDMuNiwzbC0yLDVsNC4yLDMuNmwzLjcsNi40IGw1LjgtMC4xbDUuNCwzLjVsMy42LTAuOGwwLjktMi43bDUuNywwLjJsNC42LDMuNWw4LTAuN2wzLjEtMy43bDQuNiwxLjVsMy4yLTAuNmwtMS43LDIuNGwyLjMsM2wxLjItMS40bDEuMi0xLjVsLTAuMS0zLjZsMS45LDEuMyBsNS41LTEuOGwzLDEuMmg0LjNsNS43LTIuNWwyLjgsMC4ybDUuOS0xLjFsMi4xLTFsNi4yLDAuOWwyLjEsMS42bDIuMy0xLjFsMCwwbC0zLjctNS4ybDAuNy0ybC0yLjktNy4zbDMuMy0xLjhsLTIuNC0xLjlsLTQuMi0xLjUgdi0zLjFsLTEuMy0yLjJsLTUuNi0zbC01LjQsMC4zbC01LjUsMy4ybC00LjUtMC42bC01LjgsMUwxMTY2LjYsMzA4LjlMMTE2Ni42LDMwOC45eiBNMTExNywzMTIuOWwyLTEuOWw2LjEtMC40bDAuNy0xLjVsLTQuNy0yIGwtMC45LTIuNGwtNC41LTAuOGwtNSwybDIuNywxLjZsLTEuMiwzLjlsLTEuMSwwLjdsMC4xLDEuM2wxLjksMi45TDExMTcsMzEyLjlMMTExNywzMTIuOXpcIn0sVE06e2Q6XCJNMTMyNS42LDMzNC4ybC0wLjgtNGwtNy43LTIuN2wtNi4yLTMuMmwtNC4yLTNsLTctNC40bC00LjMtNi40bC0yLTEuMmwtNS41LDAuM2wtMi4zLTEuM2wtMS45LTQuOWwtNy44LTMuMyBsLTMuMywzLjZsLTMuOCwyLjJsMS42LDMuMWwtNS44LDAuMWwtMi41LDAuM2wtNC45LTQuOWwtMy44LTEuN2wtNS41LDEuM2wtMS44LDJsMi41LDRsLTAuNS00LjVsMy43LTEuNmwyLjQsMy42bDQuNiwzLjdsLTQsMiBsLTUuMy0xLjVsMC4xLDUuMmwzLjUsMC40bC0wLjQsNC40bDQuNSwyLjFsMC43LDYuOGwxLjgsNC41bDQuNC0xLjJsMy0zLjdsMy41LDAuMmwyLjEtMS4ybDMuOCwwLjZsNi41LDMuM2w0LjMsMC43bDcuMyw1LjcgbDMuOSwwLjJsMS42LDUuNWw1LjksMi40bDMuOS0wLjhsMC40LTNsNC0wLjlsMi41LTJsLTAuMS01LjJsNC4xLTEuMmwwLjMtMi4zbDIuOSwxLjdMMTMyNS42LDMzNC4yTDEzMjUuNiwzMzQuMnpcIn0sVEM6e2Q6XCJNNTc4LjcsNDMzLjFsLTAuMSwwLjR2MC4ybDAuMiwwLjFsMC42LTAuMWwwLjEtMC4xbDAuMi0wLjF2LTAuMWwtMC40LDAuMUw1NzguNyw0MzMuMXogTTU4Mi4zLDQzMy43bDAuMi0wLjIgbC0wLjItMC4ybC0wLjctMC4ybC0wLjIsMC4xdjAuM2gwLjZMNTgyLjMsNDMzLjdMNTgyLjMsNDMzLjdMNTgyLjMsNDMzLjd6IE01ODEuMiw0MzMuMmwtMC4xLTAuMWwtMC4xLTAuNmgtMC41djAuMmwwLjEsMC4yaDAuMSBsMC4xLDAuMmwwLjMsMC4yTDU4MS4yLDQzMy4yTDU4MS4yLDQzMy4yelwifSxVRzp7ZDpcIk0xMTY3LjYsNTQ1LjFsLTMuNCwzbC00LTAuMWwtNC41LDEuNWwtMy41LTEuNGwtMi4zLDEuN2wwLDBsLTAuMyw3LjVsMi4zLDAuOGwtMS44LDIuM2wtMi4yLDEuN2wtMi4xLDMuM2wtMS4yLDMgbC0wLjMsNS4xbC0xLjMsMi40bC0wLjEsNC44bDEuNCwwLjZsMy4zLTEuOWwyLTAuOGw2LjIsMC4xbDAsMGwtMC4zLTIuNWwyLjYtMy43bDMuNS0wLjlsMi40LTEuNWwyLjksMS4ybDAuMywwLjV2LTAuM2wxLjYtMi42IGwyLjctNC4ybDIuMS00LjdsLTIuNi03LjNsLTAuNy0zLjJMMTE2Ny42LDU0NS4xTDExNjcuNiw1NDUuMXpcIn0sVUE6e2Q6XCJNMTEzOC41LDI0MWwtNC44LDAuNWwtMS41LTAuM2wtMSwxLjRsLTEuOC0wLjJsMCwwbC00LjEsMC4zbC0xLjIsMS40bDAuMiwzLjFsLTItMC42bC00LjMsMC4zbC0xLjUtMS41bC0xLjYsMS4xIGwtMi0wLjlsLTMuOC0wLjFsLTUuNi0xLjVsLTUtMC41bC0zLjcsMC4ybC0yLjQsMS42bC0yLjIsMC4zbDMuMSw1LjNsLTAuMywxLjhsLTIuMywwLjdsLTMuOCw1LjFsMS42LDIuOGwtMS4xLTAuNGwtMS4xLDEuNyBsLTAuNywyLjVsMi45LDEuN2wwLjYsMS42bDEuOS0xLjNsMy4yLDAuN2gzLjJsMi40LDEuNWwxLjYtMC45bDMuNi0wLjZsMS0xLjVoMi4xbDEuMS0wLjlsMy4yLTAuNmwzLjksMS45bDIsMC4zbDIuNSwxLjZ2Mi4xIGwxLjksMS4xbDEuMSwyLjZsMiwxLjVsLTAuMiwxbDEsMC42bC0xLjIsMC41bC0zLTAuMmwtMC42LTAuOWwtMSwwLjVsMC41LDEuMWwtMS4xLDJsLTAuNSwyLjFsLTEuMiwwLjdsMi40LDEuMWwyLjItMWwyLjQsMS4xIGwzLjMtNC42bDEuMy0zLjRsNC41LTAuOGwwLjcsMi40bDgsMS41bDEuNywxLjRsLTQuNSwyLjFsLTAuNywxLjJsNS44LDEuOGwtMC42LDIuOWwzLDEuM2w2LjMtMy42bDUuMy0xLjFsMC42LTIuMmwtNS4xLDAuNCBsLTIuNy0xLjVsLTEtMy45bDMuOS0yLjNsNC42LTAuM2wzLTJsMy45LTAuNWwtMC40LTIuOGwyLjItMS43bDQuNy0wLjVsMC4zLTIuMWwtMS44LTMuNGwxLjMtMy4ybC0wLjQtMS45bC03LjYtMmwtMi45LDAuMSBsLTMuNi0yLjlsLTMuNSwxbC02LjYtMi4ybC0wLjItMS4ybC0yLjItMi43bC00LTAuMmwtMC43LTEuOWwwLjktMS4zTDExMzguNSwyNDFMMTEzOC41LDI0MXpcIn0sQUU6e2Q6XCJNMTI4My45LDQwOC42bC0xLjMtMi4ybC0zLDMuOWwtMy43LDQuMWwtMy4zLDQuM2wtMy4zLTAuMmwtNC42LTAuMmwtNC4yLDFsLTAuMy0xLjdsLTEsMC4zbDAuNCwxLjVsMi42LDYuNCBsMTYuOCwzLjJsMS0xLjNsLTAuMS0yLjZsMS40LTIuNmwtMC4zLTIuNmwyLjQtMS4zbC0xLjEtMC44bDAuMS00LjJoMi44TDEyODMuOSw0MDguNkwxMjgzLjksNDA4LjZ6XCJ9LEdCOntkOlwiTTk1MCwyMjcuNWwtNC45LTMuN2wtMy45LDAuM2wwLjgsMy4ybC0xLjEsMy4ybDIuOS0wLjFsMy41LDEuM0w5NTAsMjI3LjV6IE05NjMsMjAzLjJsLTUuNSwwLjVsLTMuNi0wLjRsLTMuNyw0LjggbC0xLjksNi4xbDIuMiwzbDAuMSw1LjhsMi42LTIuOGwxLjQsMS42bC0xLjcsMi43bDEsMS42bDUuNywxLjFoMC4xbDMuMSwzLjhsLTAuOCwzLjVsMCwwbC03LjEtMC42bC0xLDRsMi42LDMuM2wtNS4xLDEuOWwxLjMsMi40IGw3LjUsMWwwLDBsLTQuMywxLjNsLTcuMyw2LjVsMi41LDEuMmwzLjUtMi4zbDQuNSwwLjdsMy4zLTIuOWwyLjIsMS4ybDguMy0xLjdsNi41LDAuMWw0LjMtMy4zbC0xLjktMy4xbDIuNC0xLjhsMC41LTMuOWwtNS44LTEuMiBsLTEuMy0yLjNsLTIuOS02LjlsLTMuMi0xbC00LjEtNy4xbC0wLjQtMC42bC00LjgtMC40bDQuMi01LjNsMS4zLTQuOWgtNWwtNC43LDAuOEw5NjMsMjAzLjJMOTYzLDIwMy4yelwifSxVUzp7ZDpcIk0xMTYuNyw0NTAuN2wyLTAuOWwyLjUtMS40bDAuMi0wLjRsLTAuOS0yLjJsLTAuNy0wLjhsLTAuOC0wLjZsLTEuOS0xLjFsLTAuNC0wLjFsLTAuNCwwLjZ2MS4zbC0xLjIsMWwtMC40LDAuNyBsMC40LDIuM2wtMC42LDEuOGwxLjIsMC45TDExNi43LDQ1MC43TDExNi43LDQ1MC43eiBNMTE2LjEsNDQwLjhsMC42LTAuN2wtMS4yLTFsLTEuOC0wLjZMMTEzLDQzOXYwLjRsMC41LDAuNWwwLjYsMS40TDExNi4xLDQ0MC44IEwxMTYuMSw0NDAuOHogTTExMy4xLDQzNy40bC0yLjYtMC4ybC0wLjYsMC43bDIuOSwwLjJMMTEzLjEsNDM3LjR6IE0xMDguNCw0MzYuNWwtMS4xLTIuMUwxMDcsNDM0bC0xLjcsMC45bDAuMSwwLjJsMC40LDEuNSBsMS44LDAuMmwwLjQsMC4xTDEwOC40LDQzNi41TDEwOC40LDQzNi41eiBNMTAwLjEsNDMyLjNsMC4zLTEuNWwtMS4zLTAuMWwtMSwwLjZsLTAuNCwwLjVsMS42LDEuMUwxMDAuMSw0MzIuM3ogTTUxMi4yLDI1OS4xaC0xLjYgbC0xLjMsMi40aC0xMC4xaC0xNi44aC0xNi43aC0xNC44aC0xNC43aC0xNC41aC0xNWgtNC44aC0xNC42aC0xMy45bC0xLjYsNS4xbC0yLjQsNS4xbC0yLjMsMS42bDEuMS01LjlsLTUuOC0yLjFsLTEuNCwxLjIgbC0wLjQsMi45bC0xLjgsNS40bC00LjIsOC4zbC00LDUuNmwtNCw1LjZsLTUuNCw1LjhsLTEuMSw0LjdsLTIuOCw1LjNsLTMuOSw1LjJsMSwzLjRsLTEuOSw1LjJsMS41LDUuNGwxLjMsMi4ybC0wLjgsMS41bDAuNCw5IGwyLjUsNi41bC0wLjgsMy41bDEsMWw0LjYsMC43bDEuMywxLjdsMi44LDAuM2wtMC4xLDEuOWwyLjIsMC43bDIuMSwzLjdsLTAuMywzLjJsNi4zLTAuNWw3LTAuN2wtMSwxLjNsNy4xLDMuMWwxMC43LDQuNEgzOTFoNC4zIGwwLjgtMi42aDkuM2wxLjMsMi4ybDIuMSwybDIuNCwyLjhsMC44LDMuM2wwLjQsMy41bDIuMiwxLjlsNCwxLjlsNC44LTVsNC40LTAuMWwzLjEsMi41bDEuNiw0LjRsMSwzLjdsMi40LDMuNmwwLjIsNC41bDAuOCwzIGwzLjksMmwzLjYsMS40bDIuMS0wLjJsLTAuNi0yLjJsMC40LTMuMWwxLTQuNGwxLjktMi44bDMuNy0zLjFsNi0yLjdsNi4xLTQuN2w0LjktMS41bDMuNS0wLjRsMy41LDEuNGw0LjktMC44bDMuMywzLjRsMy44LDAuMiBsMi40LTEuMmwxLjcsMC45bDEuMy0wLjhsLTAuOS0xLjNsMC43LTIuNWwtMC41LTEuN2wyLjQtMWw0LjItMC40bDQuNywwLjdsNi4yLTAuOGwzLDEuNWwyLDNsMC45LDAuM2w2LjEtMi45bDEuOSwxbDMsNS4zbDAuOCwzLjUgbC0yLDQuMmwwLjQsMi41bDEuNiw0LjlsMiw1LjVsMS44LDEuNGwwLjQsMi44bDIuNiwwLjhsMS43LTAuOGwyLTMuOWwwLjctMi41bDAuOS00LjNsLTEuMi03LjRsMC41LTIuN2wtMS41LTQuNWwtMC43LTUuNGwwLjEtNC40IGwxLjgtNC41bDMuNS0zLjhsMy43LTNsNi45LTQuMWwxLjMtMi4ybDMuMy0yLjNsMi44LTAuNGw0LjQtMy44bDYtMS45bDQuNi00LjhsMC45LTYuNWwwLjEtMi4ybC0xLjQtMC40bDEuNS02LjJsLTMtMi4xbDMuMiwxdi00LjEgbDEuOS0yLjdsLTEsNS4zbDIsMi41bC0yLjksNC40bDAuNCwwLjJsNC40LTUuMWwyLjQtMi41bDAuNi0yLjVsLTAuOS0xLjFsLTAuMS0zLjVsMS4yLDEuNmwxLjEsMC40bC0wLjEsMS42bDUuMi00LjlsMi41LTQuNSBsLTEuNC0wLjNsMi4xLTEuOGwtMC40LDAuOGgzLjNsNy44LTEuOWwtMS4xLTEuMmwtNy45LDEuMmw0LjgtMS44bDMuMS0wLjNsMi40LTAuM2w0LjEtMS4xbDIuNCwwLjFsMy44LTFsMS0xLjdsLTEuMS0xLjRsLTAuMiwyLjIgTDYxNSwzMDZsLTAuNi0zLjNsMS4xLTMuM2wxLjQtMS4zbDMuOS0zLjdsNS45LTEuOGw2LTIuMWw2LjMtM2wtMC4yLTJsLTIuMS0zLjVsMi44LTguNWwtMS41LTEuOGwtMy43LDEuMWwtMS4xLTEuN2wtNS41LDQuNyBsLTMuMiw0LjlsLTIuNywyLjhsLTIuNSwwLjlsLTEuNywwLjNsLTEsMS42aC05LjNoLTcuN2wtMi43LDEuMmwtNi43LDQuMmwwLjIsMC45bC0wLjYsMi40bC00LjYsMmwtMy45LTAuNWwtNC0wLjJsLTIuNiwwLjcgbC0wLjMsMS44bDAsMGwtMC4xLDAuNmwtNS44LDMuN2wtNC41LDEuOGwtMi45LDAuOGwtMy43LDEuN2wtNCwwLjlsLTIuNS0wLjNsLTIuNy0xLjNsMi43LTIuNGwwLDBsMi0yLjJsMy43LTMuNGwwLDBsMCwwbDAuNy0yLjUgbDAuNS0zLjVsLTEuNi0wLjdsLTQuMywyLjhsLTAuOS0wLjFsMC4zLTEuNWwzLjgtMi41bDEuNi0yLjhsMC43LTIuOGwtMi43LTIuNGwtMy43LTEuM2wtMS43LDIuNGwtMS40LDAuNmwtMi4yLDMuMWwwLjQtMi4xIGwtMi42LDEuNWwtMi4xLDJsLTIuNiwzLjFsLTEuMywyLjZsMC4xLDMuOGwtMS44LDRsLTMuMywzbC0xLjQsMC45bC0xLjYsMC43aC0xLjhsLTAuMy0wLjRsLTAuMS0zLjNsMC43LTEuNmwwLjctMS41bDAuNi0zbDIuNS0zLjUgbDIuOS00LjNsNC42LTQuN2gtMC43bC01LjQsNGwtMC40LTAuN2wyLjktMi4zbDQuNy00bDMuNy0wLjVsNC40LTEuM2wzLjcsMC43aDAuMWw0LjctMC41bC0xLjUtMi41bDAsMGwtMS4yLTAuMmwwLDBsMCwwbC0xLjQtMC4zIGwtMC40LTEuN2wtNS4xLDAuNWwtNSwxLjRsLTIuNS0yLjNsLTIuNS0wLjhsMy4xLTMuM2wtNS4zLDJsLTQuOSwyLjFsLTQuNiwxLjVsLTIuMS0yLjFsLTUuNSwxLjNsMC40LTAuOWw0LjYtMi42bDQuNy0yLjVsNS45LTIuMSBsMCwwbDAsMGwtNS4zLTEuNmwtNC40LDAuOGwtMy44LTEuOWwtNC42LTFsLTMuMi0wLjRsLTEtMUw1MTIuMiwyNTkuMUw1MTIuMiwyNTkuMXogTTI3MS42LDIxMi4ybDYuOS0yLjh2LTEuOGwtMi42LTAuNGwtMy40LDAuOSBsLTYuNCwyLjFsLTIuMiwyLjdsMC43LDEuNkwyNzEuNiwyMTIuMnogTTIzMi45LDE5NS44bDIuMy0yLjNsLTIuOS0wLjVsLTUuNywxbDAuOCwxLjZsMS42LDEuMUwyMzIuOSwxOTUuOEwyMzIuOSwxOTUuOHogTTIzNC4xLDE3My41bC0zLjEsMi4ybDAuNCwwLjVsNC4yLTAuNGwwLjMsMS4xbDEuNywxLjJsNC45LTEuMmwxLjItMC42bC0zLjMtMC44bC0xLjYtMS41bC0zLjQsMC42TDIzNC4xLDE3My41TDIzNC4xLDE3My41eiBNMzU5LDEzMy4zbC00LjQtMS4xbC0xMC4yLDIuOGwtMy4yLTAuM2wtMTEsMi4zbC00LjgsMC42bC03LjgsMi41bC00LjgsMi42bC04LjYsMi41bC03LjYsMC4xbC02LjMsMi45bDMuMiwxLjdsMC43LDIuM2wtMC44LDIuNyBsMi4zLDIuMWwtMS4yLDMuNWwtOS4yLDAuMmw0LjMtMi44aC0zLjRsLTEzLjEsMi43bC05LjEsMi4zbDEsMy4zbC0xLjIsMi4ybDQuNSwxLjRsNi45LTAuN2wxLjgsMS4zbDIuOS0xLjNsNi4xLTEuMmgyLjdsLTUuOSwyLjEgbDEuMSwxbC0yLjUsMi42bC01LjUsMS44bC0yLjUtMC41bC03LDIuN2wtMS44LTAuOWwtNC4xLDAuNGwtNS4zLDNsLTcuNiwzLjFsLTUuOCwzLjRsMC4zLDIuNGwtNCwzLjNsMS40LDEuNGwwLjUsMi43bDcuMi0xLjEgbDAuNCwyLjFsLTMuMywyLjFsLTMuNiwzLjVoMi44bDcuMi0yLjNsLTEuNiwyLjlsMy42LTIuMWwtMC40LDNsNC44LTIuMmwwLjQsMS4xbDcuMi0xLjhsLTYuMiwzLjRsLTUuNyw0LjVsLTUuNywyLjFsLTIuMywxLjIgbC0xMC4zLDMuNmwtNC45LDIuNGwtNi41LDAuN2wtOC41LDMuM2wtNi42LDEuOGwtOC4xLDIuOGwtMC40LDFsMTAtMS43bDYtMmw2LjktMmw2LjEtMS43bDIuOCwwLjVsOC4xLTIuNmw0LjUtMi44bDEwLjUtMy4xIGwzLjktMi42bDYuNi0xLjhsNy42LTIuNWw4LjktNC4ybC0wLjItMi45bDExLjEtNC4xbDcuNC0zLjlsOS4yLTMuMmwtMC40LDEuNGwtNi43LDEuOGwtOC4zLDUuN2wtMy4yLDMuNWw2LjQtMS4zbDYuMS0xLjlsNi41LTEuMyBsMi45LTAuM2wzLjUtNC4xbDYuMy0xLjJsMi42LDIuNWw2LDIuN2w2LjctMC41bDUuNywybDMuMiwxLjFsMy4zLDYuMWwzLjcsMS43bDcuMSwwLjJsNC4xLDAuNGwtMi43LDUuNWwxLjYsNC45bC0zLjMsNS4ybDIuNSwxLjkgbDAuNiwyLjJsMCwwbDUuMS0yLjlsMy4xLTMuN2wtNC42LTMuOGwxLjUtNi44bDEuMS00LjJsLTEuNy0yLjdsLTAuNy0yLjRsMC41LTNsLTYuNCwxLjlsLTcuNiwzLjNsLTAuMi0zLjlsLTAuNi0yLjZsLTIuNy0xLjYgbC00LjItMC4xbDM1LjQtMzIuNGwyNC4zLTIwLjJsMCwwbDAsMGwtMy41LTAuN2wtNC4xLTEuNmwtNi41LDAuOGwtMi4yLTAuN2wtNy4xLTAuNWwtNi4yLTEuNmwtNC44LDAuNWwtNC45LTAuOWwyLTEuMmwtNi4zLTAuMyBsLTMuMywxTDM1OSwxMzMuM0wzNTksMTMzLjN6XCJ9LFZJOntkOlwiTTYxNy45LDQ1OC45bC0wLjcsMC4ybC0wLjEsMC40aDEuMWwwLjctMC4zaC0wLjZMNjE3LjksNDU4LjlMNjE3LjksNDU4Ljl6IE02MTguOCw0NTUuNGwtMC41LTAuMWwtMC4yLDAuMmwwLDAgbDAuMywwLjFMNjE4LjgsNDU1LjR6IE02MTcuNyw0NTUuNWwtMC4yLTAuMmwtMC4zLTAuMWwtMC40LDAuMWwwLjUsMC4zTDYxNy43LDQ1NS41TDYxNy43LDQ1NS41elwifSxVWTp7ZDpcIk02OTIuNSw3ODdsLTIuMS0zLjdsMS45LTNsLTMuOC00LjNsLTQuOC0zLjVsLTYuMi00LjFsLTEuOSwwLjJsLTYuMi00LjlsLTMuNCwwLjdsLTAuNSw1LjFsLTAuMyw2LjVsMS4xLDYuMyBsLTAuOSwxLjRsMC40LDQuMmwzLjksMy41bDMuNi0wLjJsNS40LDIuN2wyLjctMC42bDQuMiwxLjJsNS4zLTMuNUw2OTIuNSw3ODdMNjkyLjUsNzg3elwifSxVWjp7ZDpcIk0xMzM5LjgsMzAzLjFsLTIuNSwxLjJsLTUuNCw0LjNsLTAuOSw0LjVoLTEuOWwtMi4zLTNsLTYuNi0wLjJsLTIuNi01bC0yLjUtMC4xbC0xLjUtNi4ybC03LjUtNC41bC04LjYsMC41IGwtNS43LDAuOWwtNi41LTUuNWwtNC44LTIuM2wtOS4xLTQuNWwtMS4xLTAuNWwtMTEuOSwzLjZsNi4yLDIyLjhsNS44LTAuMWwtMS42LTMuMWwzLjgtMi4ybDMuMy0zLjZsNy44LDMuM2wxLjksNC45bDIuMywxLjMgbDUuNS0wLjNsMiwxLjJsNC4zLDYuNGw3LDQuNGw0LjIsM2w2LjIsMy4ybDcuNywyLjdsMC44LDRoMi45bDQuMywxLjRsMS4zLTYuNmwtMi40LTQuN2wtNC4yLTEuNmwwLjYtMi44bDQuNCwwLjNsMS41LTMuNWwwLjUtNCBsNi40LTEuNWwtMC4yLDIuOWwxLjMsMS44bDIuMS0wLjJsNC4xLDAuNmw1LjItNC41bC03LjEtMy4zbC0zLjIsMS42bC00LjYtMi4zbDMuMS00LjFMMTMzOS44LDMwMy4xTDEzMzkuOCwzMDMuMXpcIn0sVlU6e2Q6XCJNMTkwOC42LDY3Ni45bC0yLjctMy42bC0wLjYsMS43bDEuMywyLjhMMTkwOC42LDY3Ni45TDE5MDguNiw2NzYuOXogTTE5MDYuNiw2NjcuMmwtMi4zLTJsLTAuOSw0LjlsMC41LDEuOCBsMS4yLTAuNGwxLjMsMC44TDE5MDYuNiw2NjcuMkwxOTA2LjYsNjY3LjJ6XCJ9LFZBOntkOlwiTTEwMzkuNSwzMDQuOGwwLjYtMC4xbDAuMSwwLjZoLTAuOUwxMDM5LjUsMzA0Ljh6XCJ9LFZFOntkOlwiTTY0Miw1MTguOWwtMi4yLTEuNWwtMi45LDAuMmwtMC43LTUuMWwtNC4xLTMuMmwtNC40LTAuNGwtMS44LTNsNC44LTEuOWwtNi43LDAuMWwtNi45LDAuNGwtMC4yLDEuNmwtMy4yLDEuOSBsLTQuMi0wLjdsLTMuMS0yLjlsLTYsMC43bC01LTAuMWwtMC4xLTIuMWwtMy41LTMuNWwtMy45LTAuMWwtMS43LTQuNWwtMi4xLDJsMC42LDNsLTcuMSwyLjZ2NC44bDEuNiwyLjJsLTEuNSw0LjZsLTIuNCwwLjRsLTEuOS01IGwyLjctMy43bDAuMy0zLjNsLTEuNy0yLjlsMy4zLTAuOGwwLjMtMS41bC0zLjcsMS4xbC0xLjYsMy4ybC0yLjIsMS44bC0xLjgsMi40bC0wLjksNC41bC0xLjgsMy43bDIuOSwwLjVsMC42LDIuOWwxLjEsMS40bDAuNCwyLjUgbC0wLjgsMi40bDAuMiwxLjNsMS4zLDAuNmwxLjMsMi4ybDcuMi0wLjZsMy4yLDAuOGwzLjgsNS41bDIuMy0wLjdsNCwwLjNsMy4yLTAuN2wyLDEuMWwtMS4yLDMuNGwtMS4zLDIuMWwtMC41LDQuNmwxLDQuMmwxLjUsMS45IGwwLjIsMS41bC0yLjksMy4xbDIsMS40bDEuNCwyLjJsMS43LDYuNGwzLDMuNGw0LjQtMC41bDEuMS0xLjlsNC4yLTEuNWwyLjMtMWwwLjctMi43bDQuMS0xLjhsLTAuMy0xLjRsLTQuOC0wLjVsLTAuNy00bDAuMy00LjMgbC0yLjQtMS42bDEtMC42bDQuMiwwLjhsNC40LDEuNmwxLjctMS41bDQtMWw2LjQtMi40bDIuMS0yLjRsLTAuNy0xLjhsLTMuNy00LjhsMS42LTEuOHYtMi45bDMuNC0xLjFsMS41LTEuMmwtMS45LTIuM2wwLjYtMi4zIEw2NDIsNTE4LjlMNjQyLDUxOC45elwifSxWTjp7ZDpcIk0xNTcxLjYsNDM1bC01LjktMS42bC0zLTIuNmwwLjItMy43bC01LjItMS4xbC0zLTIuNGwtNC4xLDMuNGwtNS4zLDAuN2gtNC4zbC0yLjcsMS41bDQsNS4xbDMuNCw1LjdsNi44LDAuMWwzLDUuNSBsLTMuMywxLjdsLTEuMywyLjNsNy4zLDMuOGw1LjcsNy41bDQuMyw1LjZsNC44LDQuNGwyLDQuNWwtMC4yLDYuNGwxLjgsNC4ybDAuMSw3LjdsLTguOSw0LjlsMi44LDMuOGwtNS44LDAuNWwtNC43LDIuNWw0LjUsMy43IGwtMS4zLDQuM2wyLjMsNGw2LjYtNS45bDQuMS01LjNsNi4xLTQuMWw0LjMtNC4ybC0wLjQtMTEuMmwtNC0xMS43bC00LjEtNS4xbC01LjYtNGwtNi40LTguM2wtNS4zLTYuN2wwLjUtNC40bDMuNy02TDE1NzEuNiw0MzV6XCJ9LEVIOntkOlwiTTkyOC44LDM5Ni4yaDAuOHYwLjRsLTAuMSwxLjJsLTAuMiw5LjdsLTE3LjktMC4zbC0wLjIsMTYuM0w5MDYsNDI0bC0xLjQsMy4zbDAuOSw5LjJsLTIxLjYtMC4xbC0xLjIsMi4ybDAuMy0yLjcgaDAuMWwxMi40LTAuNWwwLjctMi4zbDIuMy0yLjlsMi04LjhsNy44LTYuOGwyLjgtOC4xbDEuNy0wLjRsMS45LTVsNC42LTAuN2wxLjksMC45aDIuNWwxLjgtMS41bDMuNC0wLjJMOTI4LjgsMzk2LjJ6XCJ9LFlFOntkOlwiTTEyNzEuNSw0NjYuMmwtMi4xLTQuNGwtNS4yLTEwLjVsLTE1LjcsMi40bC01LDIuOWwtMy41LDYuN2wtMi41LDFsLTEuNi0yLjFsLTIuMSwwLjNsLTUuNC0wLjZsLTEtMC43bC02LjQsMC4yIGwtMS41LDAuNmwtMi40LTEuN2wtMS4yLDMuMWwwLjcsMi43bC0yLjMsMi4xbDAuNCwyLjdsLTAuNiwxLjNsMC43LDIuOWwtMS4xLDAuM2wxLjcsMi42bDEuMyw0LjdsMSwxLjl2My40bDEuNiwzLjhsMy45LDAuMyBsMS44LTAuOWwyLjcsMC4ybDAuOC0xLjdsMS41LTAuNGwxLjEtMS43bDEuNC0wLjRsNC43LTAuM2wzLjUtMS4ybDMuMS0yLjdsMS43LDAuNGwyLjQtMC4zbDQuNy00LjVsOC44LTNsNS4zLTIuN3YtMi4xbDAuOS0yLjkgTDEyNzEuNSw0NjYuMkwxMjcxLjUsNDY2LjJ6XCJ9LFpNOntkOlwiTTExNDkuMiw2MjYuN2wtMS45LTAuNWwwLjQtMS4zbC0xLTAuM2wtNy41LDEuMWwtMS42LDAuN2wtMS42LDQuMWwxLjIsMi44bC0xLjIsNy41bC0wLjgsNi40bDEuNCwxLjFsMy45LDIuNSBsMS41LTEuMmwwLjMsNi45aC00LjNsLTIuMS0zLjVsLTItMi44bC00LjMtMC44bC0xLjItMy40bC0zLjQsMmwtNC41LTAuOWwtMS44LTIuOGwtMy41LTAuNmwtMi42LDAuMWwtMC4zLTJsLTEuOS0wLjFsMC41LDJsLTAuNywzIGwwLjksM2wtMC45LDIuNGwwLjUsMi4ybC0xMS42LTAuMWwtMC44LDIwLjNsMy42LDUuMmwzLjUsNGw0LjYtMS41bDMuNiwwLjRsMi4xLDEuNHYwLjVsMSwwLjVsNi4yLDAuN2wxLjcsMC43bDEuOS0wLjFsMy4yLTQuMSBsNS4xLTUuM2wyLTAuNWwwLjctMi4ybDMuMy0yLjVsNC4yLTAuOWwtMC4zLTQuNWwxNy4xLTUuMmwtMi45LTEuN2wxLjktNS45bDEuOC0yLjJsLTAuOS01LjNsMS4yLTUuMWwxLTEuOGwtMS4yLTUuNGwtMi42LTIuOCBsLTMuMi0xLjlsLTMuNS0xLjFsLTIuMi0xLjFsLTAuMy0wLjJsMCwwbDAuNSwxLjFsLTEsMC40TDExNDkuMiw2MjYuN0wxMTQ5LjIsNjI2Ljd6XCJ9LFpXOntkOlwiTTExNDguMiw3MTMuN2w2LjItNy4ybDEuNi00LjZsMC45LTAuNmwwLjgtMy43bC0wLjgtMS45bDAuNS00LjdsMS4zLTQuNGwwLjMtOC4xbC0yLjgtMmwtMi42LTAuNWwtMS4xLTEuNiBsLTIuNi0xLjNsLTQuNiwwLjFsLTAuMy0yLjRsLTQuMiwwLjlsLTMuMywyLjVsLTAuNywyLjJsLTIsMC41bC01LjEsNS4zbC0zLjIsNC4xbC0xLjksMC4xbC0xLjctMC43bC02LjItMC43bDEuOSw1LjFsMS4xLDEuMSBsMS42LDMuN2w2LDdsMi4zLDAuN2wtMC4xLDIuMmwxLjUsNC4xbDQuMiwwLjlsMy40LDIuOWwyLjIsMC4xbDIuNiwxLjFsMS45LTAuOEwxMTQ4LjIsNzEzLjdMMTE0OC4yLDcxMy43elwifSxYSzp7ZDpcIk0xMDgwLDI5OS44bDEuMi0wLjVsMC41LTJsMC45LTAuNGwwLjgsMC45bDEsMC40bDAuOCwxbDAuOCwwLjNsMS4xLDEuMWgwLjhsLTAuNSwxLjVsLTAuNSwwLjdsMC4yLDAuNWwtMS4xLDAuMmwtMi45LDFsLTAuMSwxLjJoLTAuN2wtMC41LTIuM2wtMS4zLTAuNmwtMS4zLTEuNkwxMDgwLDI5OS44elwifSxcIk1BLUVIXCI6e2Q6XCJNOTY5LjMsMzYzLjFsLTEuOC02LjdsLTAuMy0zLjlsLTItNC4xbC0yLjMtMC4xbC01LjUtMS40bC01LDAuNGwtMy4xLTIuN2gtMy45bC0xLjgsMy45bC0zLjcsNi43bC00LDIuNiBsLTUuNCwyLjlMOTI3LDM2NWwtMC45LDMuNGwtMi4xLDUuNGwxLjEsNy45bC00LjcsNS4zbC0yLjcsMS43bC00LjQsNC40bC01LjEsMC43bC0yLjgsMi40bC0wLjEsMC4xbC0zLjYsNi41bC0zLjcsMi4zbC0yLjEsNCBsLTAuMiwzLjNsLTEuNiwzLjhsLTEuOSwxbC0zLjEsNGwtMiw0LjVsMC4zLDIuMmwtMS45LDMuM2wtMi4yLDEuN2wtMC4zLDNsLTAuMywyLjdsMS4yLTIuMmwyMS42LDAuMWwtMC45LTkuMmwxLjQtMy4zbDUuMi0wLjUgbDAuMi0xNi4zbDE3LjksMC4zbDAuMi05LjdsMC4xLTEuMnYtMC40bDAsMGwwLDBsMCwwbDAuMS03LjVsOC45LTQuN2w1LjQtMWw0LjQtMS43bDIuMS0zLjJsNi4zLTIuNWwwLjMtNC43bDMuMS0wLjVsMi41LTIuNGw3LTEgbDEtMi41TDk2OS4zLDM2My4xelwifSxcIlJVLVdJVEgtQ1JJTUVBXCI6e2Q6XCJNMTE0NSwyODFsLTQuNSwyLjFsLTAuNywxLjJsNS44LDEuOGwtMC42LDIuOWwzLDEuM2w2LjMtMy42bDUuMy0xLjFsMC42LTIuMmwtNS4xLDAuNGwtMi43LTEuNUwxMTQ1LDI4MXogTTEzMzIuMyw5NS4xbC00LjUtNGwtMTMuNi00LjFsLTkuNC0yLjFsLTYuMiwwLjlsLTUuMywyLjlsNS44LDAuOGw2LjYsMy4ybDgsMS43bDExLjUsMS4zQzEzMjUuMiw5NS43LDEzMzIuMyw5NS4xLDEzMzIuMyw5NS4xeiBNMTE1My42LDg3LjhsMC45LTAuNmwtNS43LTAuOUwxMTQ2LDg3bC0xLjMsMWwtMS41LTEuMmwtNS4yLDAuMWwtNi4yLDAuOGw3LjcsMC4xbC0xLjEsMS4zbDQuNCwxbDMuNi0wLjdsMC4xLTAuN2wyLjktMC4zQzExNDkuNCw4OC40LDExNTMuNiw4Ny44LDExNTMuNiw4Ny44eiBNMTM1NC4xLDk3LjdsLTEuNS0xLjhsLTEyLjUtMi42bC0zLTAuM2wtMi4yLDAuNWwxLjIsNkMxMzM2LjEsOTkuNSwxMzU0LjEsOTcuNywxMzU0LjEsOTcuN3ogTTEzNjkuMywxMDRsLTkuMi0wLjdsMy40LTEuMmwtOC4yLTEuNWwtNi4xLDEuOWwtMSwybDEuNSwyLjFsLTYuOS0wLjFsLTUuMywyLjZsLTQuMy0xLjFsLTkuMywwLjVsMC4zLDEuM2wtOS4yLDAuN2wtNC45LDIuNGwtNC4yLDAuMmwtMS4yLDMuM2w1LjUsMi42bC03LjcsMC43bC05LjUtMC4zbC01LjgsMS4xbDQuOCw1LjRsNi45LDQuM2wtOS42LTNsLTcuOSwwLjNsLTUuMSwybDQuNSwzLjhsLTQuOS0xbC0yLjEtNWwtNC4yLTIuOGwtMS44LDAuMWwzLjYsMy43bC00LjYsMy41bDguMSw0LjJsMC40LDUuNGwyLjksMi45bDQuNywwLjVsMC40LDMuNWw0LjQsMy4xbC0xLjksMi42bDAuNSwyLjdsLTMuNywxLjRsLTAuNSwybC01LjMtMC44bDMuNS03LjhsLTAuNS0zLjZsLTYuNy0zLjNsLTMuOC03LjNsLTMuNy0zLjdsLTMuNi0xLjZsMC44LTQuMmwtMi45LTIuOWwtMTEuMy0xLjRsLTIuMSwxbDAuNSw0LjdsLTQuMyw0LjdsMS4yLDEuN2w0LjcsNC4xbDAuMSwyLjZsNS4zLDAuNWwwLjgsMS4xbDUuOCwyLjlsLTEsMi44bC0xOC41LTYuMWwtNi42LTEuN2wtMTIuOC0xLjZsLTEuMiwxLjdsNS45LDMuMWwtMi43LDMuNmwtNi40LTMuMmwtNSwyLjJsLTcuNiwwLjFsLTIuMSwxLjlsLTUuMy0wLjZsMi41LTMuM2wtMy4yLTAuMmwtMTIuMyw0LjZsLTcuNiwyLjZsMC40LDMuNWwtNiwxLjJsLTQtMS45bC0xLjItM2w1LTAuN2wtMy42LTNsLTEyLjItMS44bDQuMywzLjRsLTAuOCwzLjJsNC43LDMuM2wtMS4xLDMuOGwtNC42LTEuOWwtNC0wLjNsLTgsNS40bDQuMiw0LjFsLTMuMiwxLjRsLTExLjQtMy41bC0yLjEsMi4xbDMuMywyLjRsMC4yLDIuN2wtMy44LTEuNGwtNi0xLjdsLTEuOS01LjhsLTEtMi42bC04LTRsMi45LTAuN2wyMC4xLDQuMmw2LjQtMS41bDMuNy0yLjlsLTEuNi0zLjZsLTQtMi42bC0xNy42LTYuMWwtMTEuNi0xLjNsLTcuNi0zLjJsLTMuNiwxLjhsMCwwbC02LjQsMi4ybC0zLjIsMC41bDAuNCwzLjdsNy4yLDMuN2wtMi44LDQuMWw2LjQsNi4zbC0xLjcsNC44bDQuOSw0LjFsLTAuOSwzLjdsNy4zLDMuOWwtMC45LDIuOWwtMy4zLDMuM2wtNy45LDcuNGwwLDBsNS4zLDIuOGwtNC41LDMuMmwwLDBsMC45LDFsLTIuNiwzLjRsMi41LDUuNWwtMS42LDEuOWwyLjQsMS40bDEsMi44bDIuMSwzLjZsNS4yLDEuNWwxLDEuNGwyLjMtMC43bDQuOCwxLjRsMSwyLjlsLTAuNiwxLjZsMy43LDMuOWwyLjIsMS4xbC0wLjEsMS4xbDMuNCwxLjFsMS43LDEuNmwtMS42LDEuM2wtMy45LTAuMmwtMC44LDAuNmwxLjUsMmwyLDMuOWwwLDBsMS44LDAuMmwxLTEuNGwxLjUsMC4zbDQuOC0wLjVsMy44LDMuNGwtMC45LDEuM2wwLjcsMS45bDQsMC4ybDIuMiwyLjdsMC4yLDEuMmw2LjYsMi4ybDMuNS0xbDMuNiwyLjlsMi45LTAuMWw3LjYsMmwwLjQsMS45bC0xLjMsMy4ybDEuOCwzLjRsLTAuMywyLjFsLTQuNywwLjVsLTIuMiwxLjdsMC40LDIuOGw0LjItMWwwLjQsMS4zbC02LjgsMi42bDMuMiwyLjRsLTMuMiw1LjJsLTMuNCwxbDUsMy42bDYuMiwyLjRsNy40LDUuMWwwLjUtMC43bDQuNSwxLjFsNy43LDFsNy41LDIuOWwxLjEsMS4ybDIuOS0xbDUuMSwxLjNsMi4xLDIuNWwzLjUsMS40bDEuNSwwLjJsNC4zLDMuOGwyLjQsMC40bDAuNS0xLjVsMi42LTIuNWwwLDBsLTcuMy03LjNsLTAuNC00LjFsLTUuOS01LjlsMy41LTYuM2w0LjYtMS4xbDEuNC0zLjdsLTIuOC0xbC0wLjItMy4ybC00LjItNC4xbC0zLjYsMC4ybC01LjMtNC4zbDEuNy00LjdsLTEuNy0xLjJsMi4xLTYuOGw2LDMuNmwtMC43LTQuNmw4LjEtNi42bDcuNS0wLjJsMTEuOSw0LjNsNi42LDIuNGw0LjMtMi41bDcuNi0wLjJsNy4zLDMuMmwwLjgtMS44bDYuOSwwLjNsMC4yLTNsLTkuNC00LjJsMy42LTIuOWwtMS41LTEuN2wzLjktMS42bC01LTQuMWwxLjQtMi4xbDE2LjgtMi4xbDEuNy0xLjVsMTAuOC0yLjJsMy4xLTIuNWw5LDEuM2w0LjMsNi4zbDQuMy0xLjVsNywyLjFsMS4yLDMuM2w0LjQtMC40bDkuMS01LjdsLTAuOCwxLjlsOC4zLDQuN2wxOC4xLDE1LjVsMS4xLTMuM2w4LjMsMy42bDYuMi0xLjZsMy4yLDEuMWw0LjEsMy42bDMuOSwxLjJsMy4zLDIuNmw2LTAuOWw0LjMsMy44bDEuNy0wLjVsNC43LTFsNi42LTUuNGw1LjktMi45bDUuMywxLjlsNS4xLDAuMWw0LjcsMi45bDUsMC4ybDcuOSwxLjZsMi40LTQuM2wtNC0zLjZsMS4zLTYuNGw2LjksMi41bDQuOCwwLjhsNi42LDEuNWwzLjcsNC42bDguNCwyLjZsMy45LTEuMWw1LjctMC44bDUuNCwwLjhsNi41LDNsNC45LDMuMWg0LjVsNi43LDFsMy42LTEuNmw1LjgtMWw0LjUtNC40bDMuMywwLjdsMy45LDIuMWw1LjUtMC41bDcuMywyLjNsNC40LTMuOWwtMS45LTIuN2wtMC4xLTYuNWwxLjItMmwtMi41LTMuM2wtMy43LTEuNWwxLjctM2w1LjEtMS4xbDYuMi0wLjJsOC41LDEuOGw1LjksMi4zbDcuNyw2LjFsMy44LDIuN2w0LjQsMy43bDYuMSw2LjFsOS45LDEuOWw4LjksNC41bDYsNS44aDcuNWwyLjYtMi41bDYuOS0xLjhsMS4zLDUuNmwtMC40LDIuM2wyLjgsNi44bDAuNiw2bC02LjgtMS4xbC0yLjksMi4ybDQuNyw1LjNsMy44LDcuM2wtMi41LDAuMWwxLjksMy4xbDAsMGwxLjQsMS4xbDAsMGwwLDBsMCwwbC0wLjQtMmw0LTQuNWw1LjEsM2wzLjItMC4xbDQuNC0zLjZsMS0zLjdsMi4xLTcuMWwxLjktNy4ybC0xLjMtNC4zbDEtOWwtNS4yLTkuOWwtNS41LTcuM2wtMS4zLTYuMmwtNC43LTUuMWwtMTIuNy02LjdsLTUuNi0wLjRsLTAuMywzbC01LjgtMS4zbC01LjctMy44bC04LTAuN2w0LjktMTQuMWwzLjUtMTEuNWwxMy4xLTEuOGwxNC45LDFsMi41LTIuOGw3LjksMC44bDQuMyw0LjNsNi40LTAuNmw4LjQtMS42bC03LjctMy41di05LjhsOS4xLTEuOWwxMi4xLDcuMWwzLjYtNi40bC0zLjItNC43bDQuNy0wLjVsNi41LDguMWwtMi40LDQuNmwtMC44LDZsMC4zLDcuNWwtNS43LDEuM2wyLjgsMi43bC0wLjEsMy42bDYuNCw4LjNsMTYsMTMuNGwxMC41LDguOGw1LjcsNC4zbDEuNi01LjdsLTQuNS02LjJsNS43LTEuNWwtNS40LTYuOWw1LTMuMWwtNC43LTIuNmwtMy40LTVsNC4xLTAuMmwtOS04LjZsLTYuNy0xLjRsLTIuOS0yLjRsLTEuMS01LjZsLTMuMS0zLjlsNywwLjhsMS4zLTIuNWw0LjcsMi4ybDYuMS00LjZsMTEuNCw0bC0xLjctMi42bDItMy42bDEuNS00bDMuMS0wLjdsNi41LTQuM2w5LjgsMS4ybC0wLjktMS41bC0zLjgtMi4zbC00LjEtMS42bC05LjEtNC42bC04LjEtM2w2LjEsMC40bDItMi41bDAsMGwtMzIuOS0yMS45bC05LjQtMi4zbC0xNS43LTIuNmwtNy45LDAuM2wtMTUuMi0xLjRsMS44LDIuM2w4LjUsMy40bC0yLjUsMS44bC0xNC4yLTQuOGwtNi44LDAuNmwtOS4yLTEuMWwtNywwLjJsLTMuOSwxLjFsLTcuMi0xLjZsLTUuMS0zLjhsLTYuNS0yLjJsLTkuMi0wLjlsLTE0LjcsMWwtMTYuMS00bC03LjgtM2wtNDAuMS0zLjRsLTIuMSwyLjJsOS4zLDQuOGwtNy41LTAuN2wtMSwxLjVsLTkuNy0xLjZsLTUsMS40bC05LjMtMi40bDMsNS41bC04LjktMi4xbC0xMC00LjFsLTAuNC0yLjJsLTYtMy4zbC05LjgtMi42aC02LjFsLTkuMy0wLjlsNC43LDMuOWwtMTcuMi0wLjhsLTMuOS0yLjNsLTEzLjMtMC45bC01LjMsMC44bC0wLjEsMS4zbC01LjgtMy4ybC0yLjMsMC45bC03LjItMS4ybC01LjYtMC43bDEuMS0xLjVsNi42LTIuOGwyLjMtMS41bC0yLjQtMi41bC01LjUtMS45bC0xMS41LTIuM2wtMTAuOC0wLjFsLTEuOSwxLjJMMTM2OS4zLDEwNEwxMzY5LjMsMTA0eiBNMTIwNy4xLDEzNS42bC05LjktNC4zbC0zLjEtNC4zbDMuMy00LjlsMi44LTVsOC42LTQuN2w5LjgtMi40bDExLjMtMi40bDEuMy0xLjVsLTQuMi0xLjlsLTYuNiwwLjZsLTQuOSwxLjhsLTExLjcsMC45bC0xMC4xLDMuMWwtNi44LDIuN2wyLjUsMi4ybC02LjYsNC40bDMuOSwwLjdsLTUuNCw0LjNsMS42LDIuOGwtMy40LDEuMWwxLjksMi44bDcuOSwxLjRsMi4yLDIuM2wxMy40LDAuN0wxMjA3LjEsMTM1LjZMMTIwNy4xLDEzNS42eiBNMTUyMS4xLDExMC45bC0xNy45LTIuNmwtMTAuMi0wLjJsLTMuNCwwLjlsMy40LDMuNGwxMi40LDMuMmw0LjUtMS4ybDE0LjIsMC4yQzE1MjQuMSwxMTQuNiwxNTIxLjEsMTEwLjksMTUyMS4xLDExMC45eiBNMTU0Ni4zLDExMy4ybC0xMS43LTEuM2wtOC4yLTAuN2wxLjcsMS42bDEwLjMsMmw2LjgsMC40TDE1NDYuMywxMTMuMkwxNTQ2LjMsMTEzLjJ6IE0xNTMzLjgsMTIyLjdsLTIuNS0xLjRsLTguMy0xLjlsLTQuMSwwLjVsLTAuOCwybDEuMSwwLjJsOC44LDAuNkMxNTI4LDEyMi43LDE1MzMuOCwxMjIuNywxNTMzLjgsMTIyLjd6IE0xNjk2LjQsMTM1bC02LTMuNmwtMS40LDIuMmwzLjUsMS42TDE2OTYuNCwxMzV6IE0xMDg0LDIyOC45bC0wLjYtMS41bDAuMi0xLjdsLTIuMi0wLjlsLTUtMS4xbC02LjMsMmwtMC43LDIuNmw1LjksMC43TDEwODQsMjI4Ljl6IE0xNjczLjcsMjUwLjdsLTcuMi02LjJsLTUuMS02bC02LjgtNS44bC00LjktNGwtMS4zLDAuOGw0LjQsMi44bC0xLjksMi44bDYuOCw4LjNsNy44LDZsNi40LDguM2wyLjQsNC42bDUuNSw2LjhsMy44LDZsNC42LDUuMmwtMC4xLTQuOGw2LjUsMy44bC0zLTQuNGwtOS41LTYuM2wtMy43LTlsOC45LDJMMTY3My43LDI1MC43TDE2NzMuNywyNTAuN3pcIn0sXCJVQS1XSVRIT1VULUNSSU1FQVwiOntkOlwiTTExMzguNSwyNDFsLTQuOCwwLjVsLTEuNS0wLjNsLTEsMS40bC0xLjgtMC4ybDAsMGwtNC4xLDAuM2wtMS4yLDEuNGwwLjIsMy4xbC0yLTAuNmwtNC4zLDAuM2wtMS41LTEuNWwtMS42LDEuMWwtMi0wLjlsLTMuOC0wLjFsLTUuNi0xLjVsLTUtMC41bC0zLjcsMC4ybC0yLjQsMS42bC0yLjIsMC4zbDMuMSw1LjNsLTAuMywxLjhsLTIuMywwLjdsLTMuOCw1LjFsMS42LDIuOGwtMS4xLTAuNGwtMS4xLDEuN2wtMC43LDIuNWwyLjksMS43bDAuNiwxLjZsMS45LTEuM2wzLjIsMC43aDMuMmwyLjQsMS41bDEuNi0wLjlsMy42LTAuNmwxLTEuNWgyLjFsMS4xLTAuOWwzLjItMC42bDMuOSwxLjlsMiwwLjNsMi41LDEuNnYyLjFsMS45LDEuMWwxLjEsMi42bDIsMS41bC0wLjIsMWwxLDAuNmwtMS4yLDAuNWwtMy0wLjJsLTAuNi0wLjlsLTEsMC41bDAuNSwxLjFsLTEuMSwybC0wLjUsMi4xbC0xLjIsMC43bDIuNCwxLjFsMi4yLTFsMi40LDEuMWwzLjMtNC42bDEuMy0zLjRsNC41LTAuOGwwLjcsMi40bDgsMS41bDEuNywxLjRsNy40LDEuM2wtMS0zLjlsMy45LTIuM2w0LjYtMC4zbDMtMmwzLjktMC41bC0wLjQtMi44bDIuMi0xLjdsNC43LTAuNWwwLjMtMi4xbC0xLjgtMy40bDEuMy0zLjJsLTAuNC0xLjlsLTcuNi0ybC0yLjksMC4xbC0zLjYtMi45bC0zLjUsMWwtNi42LTIuMmwtMC4yLTEuMmwtMi4yLTIuN2wtNC43LTIuMWwwLjktMS4zTDExMzguNSwyNDFMMTEzOC41LDI0MXpcIn19LGEucHJvdG90eXBlLmNyZWF0ZVRvb2x0aXA9ZnVuY3Rpb24oKXtpZih0aGlzLnRvb2x0aXApcmV0dXJuITE7dGhpcy50b29sdGlwPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXBcIixkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0pLHRoaXMudG9vbHRpcENvbnRlbnQ9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1jb250ZW50LXdyYXBwZXJcIix0aGlzLnRvb2x0aXApLHRoaXMudG9vbHRpcFBvaW50ZXI9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1wb2ludGVyXCIsdGhpcy50b29sdGlwKX0sYS5wcm90b3R5cGUuc2V0VG9vbHRpcENvbnRlbnQ9ZnVuY3Rpb24obCl7dGhpcy50b29sdGlwJiYodGhpcy50b29sdGlwQ29udGVudC5pbm5lckhUTUw9XCJcIix0aGlzLnRvb2x0aXBDb250ZW50LmFwcGVuZChsKSl9LGEucHJvdG90eXBlLnNob3dUb29sdGlwPWZ1bmN0aW9uKGwpe3RoaXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWFjdGl2ZVwiKSx0aGlzLm1vdmVUb29sdGlwKGwpfSxhLnByb3RvdHlwZS5oaWRlVG9vbHRpcD1mdW5jdGlvbigpe3RoaXMudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWFjdGl2ZVwiKX0sYS5wcm90b3R5cGUubW92ZVRvb2x0aXA9ZnVuY3Rpb24obCl7dmFyIHQsZSxvLGksYT1sLnBhZ2VYfHwobC50b3VjaGVzJiZsLnRvdWNoZXNbMF0/bC50b3VjaGVzWzBdLnBhZ2VYOm51bGwpLEw9bC5wYWdlWXx8KGwudG91Y2hlcyYmbC50b3VjaGVzWzBdP2wudG91Y2hlc1swXS5wYWdlWTpudWxsKTtudWxsIT09YSYmbnVsbCE9PUwmJih0PXdpbmRvdy5pbm5lcldpZHRoLGU9dGhpcy50b29sdGlwLm9mZnNldFdpZHRoLG89dGhpcy50b29sdGlwLm9mZnNldEhlaWdodCwoaT1hLWUvMik8PTY/KGE9NitlLzIsdGhpcy50b29sdGlwUG9pbnRlci5zdHlsZS5tYXJnaW5MZWZ0PWktNitcInB4XCIpOnQtNjw9aStlPyhhPXQtNi1lLzIsdGhpcy50b29sdGlwUG9pbnRlci5zdHlsZS5tYXJnaW5MZWZ0PS0xKih0LTYtbC5wYWdlWC1lLzIpK1wicHhcIik6dGhpcy50b29sdGlwUG9pbnRlci5zdHlsZS5tYXJnaW5MZWZ0PVwiMHB4XCIsTC0xMi1vPD02Pyh0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZChcInN2Z01hcC10b29sdGlwLWZsaXBwZWRcIiksTCs9MzIpOih0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC10b29sdGlwLWZsaXBwZWRcIiksTC09MTIpLHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0PWErXCJweFwiLHRoaXMudG9vbHRpcC5zdHlsZS50b3A9TCtcInB4XCIpfSxhLnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbihsKXsoY29uc29sZS5lcnJvcnx8Y29uc29sZS5sb2cpKFwic3ZnTWFwIGVycm9yOiBcIisobHx8XCJVbmtub3duIGVycm9yXCIpKX0sYS5wcm90b3R5cGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbihsLHQsZSxvKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGwpO3JldHVybiB0JiYodD10LnNwbGl0KFwiIFwiKSkuZm9yRWFjaChmdW5jdGlvbihsKXtpLmNsYXNzTGlzdC5hZGQobCl9KSxvJiYoaS5pbm5lckhUTUw9byksZSYmZS5hcHBlbmRDaGlsZChpKSxpfSxhLnByb3RvdHlwZS5udW1iZXJXaXRoQ29tbWFzPWZ1bmN0aW9uKGwsdCl7cmV0dXJuIGwudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLHR8fFwiLFwiKX0sYS5wcm90b3R5cGUuZ2V0Q29sb3I9ZnVuY3Rpb24obCx0LGUpe2w9bC5zbGljZSgtNiksdD10LnNsaWNlKC02KSxlPXBhcnNlRmxvYXQoZSkudG9GaXhlZCgxKTt2YXIgbz1NYXRoLmNlaWwocGFyc2VJbnQobC5zdWJzdHJpbmcoMCwyKSwxNikqZStwYXJzZUludCh0LnN1YnN0cmluZygwLDIpLDE2KSooMS1lKSksaT1NYXRoLmNlaWwocGFyc2VJbnQobC5zdWJzdHJpbmcoMiw0KSwxNikqZStwYXJzZUludCh0LnN1YnN0cmluZygyLDQpLDE2KSooMS1lKSksZT1NYXRoLmNlaWwocGFyc2VJbnQobC5zdWJzdHJpbmcoNCw2KSwxNikqZStwYXJzZUludCh0LnN1YnN0cmluZyg0LDYpLDE2KSooMS1lKSk7cmV0dXJuXCIjXCIrdGhpcy5nZXRIZXgobykrdGhpcy5nZXRIZXgoaSkrdGhpcy5nZXRIZXgoZSl9LGEucHJvdG90eXBlLmdldEhleD1mdW5jdGlvbihsKXtyZXR1cm4oXCIwXCIrKGw9bC50b1N0cmluZygxNikpKS5zbGljZSgtMil9LGEucHJvdG90eXBlLmdldENvdW50cnlOYW1lPWZ1bmN0aW9uKGwpe3JldHVybih0aGlzLm9wdGlvbnMuY291bnRyeU5hbWVzJiZ0aGlzLm9wdGlvbnMuY291bnRyeU5hbWVzW2xdP3RoaXMub3B0aW9ucy5jb3VudHJ5TmFtZXM6dGhpcy5jb3VudHJpZXMpW2xdfSxhfSFmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wic3ZnLXBhbi16b29tXCJdLGZ1bmN0aW9uKGwpe3JldHVybiB0LnN2Z01hcD1lKGwpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dC5zdmdNYXA9ZShyZXF1aXJlKFwic3ZnLXBhbi16b29tXCIpKTp0LnN2Z01hcD1lKHQuc3ZnUGFuWm9vbSl9KHRoaXMsZnVuY3Rpb24obCl7cmV0dXJuIHN2Z01hcFdyYXBwZXIobCl9KTsiLCJjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgYnV0dG9uLCBidXR0b25DbG9zZSB9KSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwb3B1cFNlbGVjdG9yfWApO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2J1dHRvbn1gKTtcbiAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2J1dHRvbkNsb3NlfWApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5cIik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5cIik7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbGxJbmZvKG5hbWUsIGpvYiwgYWJvdXQpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIik7XG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLmpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam9iXCIpO1xuICAgIHRoaXMuam9iLnRleHRDb250ZW50ID0gam9iO1xuICAgIHRoaXMuYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190ZXh0XCIpO1xuICAgIHRoaXMuYWJvdXQudGV4dENvbnRlbnQgPSBhYm91dDtcbiAgfVxuXG4gIGZpbGxVc2VySW5mbyhuYW1lLCBqb2IsIGFib3V0KSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lMlwiKTtcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb2IyXCIpO1xuICAgIHRoaXMuam9iLnRleHRDb250ZW50ID0gam9iO1xuICAgIHRoaXMuYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190ZXh0MlwiKTtcbiAgICB0aGlzLmFib3V0LnRleHRDb250ZW50ID0gYWJvdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJjbGFzcyBQb3B1cFZpZCB7XG4gIGNvbnN0cnVjdG9yKHsgc2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3NlbGVjdG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7c2VsZWN0b3J9YCk7XG4gICAgdGhpcy5fZXhwbG9yZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhwbG9yZV9fYnRuXCIpO1xuICB9XG5cbiAgb3BlblBvcHVwVmlkKCkge1xuICAgIHRoaXMuX3NlbGVjdG9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfX3ZpZF9vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2VWaWQoKSB7XG4gICAgdGhpcy5fc2VsZWN0b3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fdmlkX29wZW5cIik7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9leHBsb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLm9wZW5Qb3B1cFZpZCgpKTtcblxuICAgIHRoaXMuX3NlbGVjdG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZVZpZCgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFZpZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xuaW1wb3J0IFBvcHVwVmlkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwVmlkLmpzXCI7XG5pbXBvcnQgc3ZnTWFwIGZyb20gXCJzdmdtYXBcIjtcbmltcG9ydCBcInN2Z21hcC9kaXN0L3N2Z01hcC5taW4uY3NzXCI7XG5cbndpbmRvdy5zY3JvbGwoe1xuICB0b3A6IDEwMCxcbiAgbGVmdDogMTAwLFxuICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuY29uc3QgcG9wdXBWaWQgPSBuZXcgUG9wdXBWaWQoeyBzZWxlY3RvcjogXCIucG9wdXBfX3ZpZFwiIH0pO1xuXG5jb25zdCBwb3B1cCA9IG5ldyBQb3B1cCh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiI3BvcHVwXCIsXG4gIGJ1dHRvbjogXCIjYnV0dG9uMVwiLFxuICBidXR0b25DbG9zZTogXCIucG9wdXBfX2J1dHRvblwiLFxufSk7XG5cbmNvbnN0IHBvcHVwMiA9IG5ldyBQb3B1cCh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiI3BvcHVwMlwiLFxuICBidXR0b246IFwiI2J1dHRvbjJcIixcbiAgYnV0dG9uQ2xvc2U6IFwiI2J1dHRvbjNcIixcbn0pO1xuXG5wb3B1cC5maWxsSW5mbyhcbiAgXCJBbmkgUGV0cmljaG9yXCIsXG4gIFwiRGF0YSBBbmFseXN0XCIsXG4gIFwiQW5pIFBldHJpY2hvciBpcyBhIEJyb29rbHluLWJhc2VkIGRhdGEgYW5hbHlzdC4gU2hlIGhhcyBhIGJhY2tncm91bmQgaW4gb3BlcmF0aW9ucyAmIGxvZ2lzdGljcyBpbiB0aGUgc3VzdGFpbmFiaWxpdHkgZm9vZCBzZWN0b3IsIHByaW1hcmlseSB3b3JraW5nIHRvIGJyaW5nIGxvY2FsbHkgZmFybWVkIGluZ3JlZGllbnRzIHRvIHVyYmFuIHJlc2lkZW50cy4gU2hlIGJlbGlldmVzIHRoYXQgYmlnIGRhdGEgY2FuIGJlIHVzZWQgdG8gZWZmZWN0IGdvb2QgaW4gdGhlIHdvcmxkLlwiXG4pO1xuXG5wb3B1cDIuZmlsbFVzZXJJbmZvKFxuICBcIkt1cnRuZXkgSm9zZXBoXCIsXG4gIFwiU29mdHdhcmUgRW5naW5lZXJcIixcbiAgXCJLdXJ0bmV5IEpvc2VwaCBpcyBhbiBPcmxhbmRvIGJhc2VkIHNvZnR3YXJlIGVuZ2luZWVyIHdobyBhaW1zIHRvIHByb3ZpZGUgY29tcGFuaWVzIGFuZCBsb2NhbCBidXNpbmVzc2VzIHdpdGggZWZmZWN0aXZlIHNvbHV0aW9ucyB0aG91Z2ggd2ViIGRldmVsb3BtZW50LlwiXG4pO1xuXG5wb3B1cFZpZC5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwMi5zZXRFdmVudExpc3RlbmVycygpO1xuXG5uZXcgc3ZnTWFwKHtcbiAgdGFyZ2V0RWxlbWVudElEOiBcInN2Z01hcFwiLFxuICBkYXRhOiB7XG4gICAgZGF0YToge1xuICAgICAgTVc6IHtcbiAgICAgICAgbmFtZTogXCJNZWdhV2F0dCBDYXBhY2l0eTpcIixcbiAgICAgICAgdGhyZXNob2xkTWF4OiA1MDAwMCxcbiAgICAgICAgdGhyZXNob2xkTWluOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIFNGOiB7XG4gICAgICAgIG5hbWU6IFwiU29sYXIgRmFybXM6XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXBwbHlEYXRhOiBcIk1XXCIsXG4gICAgdmFsdWVzOiB7XG4gICAgICBVUzogeyBNVzogMTQ3MDg2LCBjb2xvcjogXCIjRkZGRkUwXCIsIFNGOiAxMzU5IH0sXG4gICAgICBDTjogeyBNVzogMTM5OTk0LCBjb2xvcjogXCIjRkZGRkUwXCIsIFNGOiAyNzM1IH0sXG4gICAgICBJTjogeyBNVzogNTkyNzEsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDQ2MSB9LFxuICAgICAgQVU6IHsgTVc6IDU1NzAyLCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAyMDggfSxcbiAgICAgIEdSOiB7IE1XOiA0MzA0NiwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogNTI0IH0sXG4gICAgICBCUjogeyBNVzogMzYyMzgsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDY4MyB9LFxuICAgICAgTVg6IHsgTVc6IDIwODU4LCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAyMzYgfSxcbiAgICAgIEVTOiB7IE1XOiAyMDYwNiwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMjAzIH0sXG4gICAgICBDTzogeyBNVzogMTkwNTQsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDE3OCB9LFxuICAgICAgT006IHsgTVc6IDE1NDMwLCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAxMCB9LFxuICAgICAgTUE6IHsgTVc6IDE0MTMyLCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAyNSB9LFxuICAgICAgQ0w6IHsgTVc6IDEzOTY3LCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiA4NyB9LFxuICAgICAgVk46IHsgTVc6IDE1NDMwLCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAxNTUgfSxcbiAgICAgIFBIOiB7IE1XOiAxMTY5NiwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMTI3IH0sXG4gICAgICBKUDogeyBNVzogMTAwOTksIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDIyOSB9LFxuICAgICAgS1c6IHsgTVc6IDk1MjAsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDYgfSxcbiAgICAgIEdCOiB7IE1XOiA4MzE0LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxOTcgfSxcbiAgICAgIE1NOiB7IE1XOiA2MDUwLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA0IH0sXG4gICAgICBBRTogeyBNVzogNTYyMCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTQgfSxcbiAgICAgIFNBOiB7IE1XOiA0ODg2LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxOSB9LFxuICAgICAgRFo6IHsgTVc6IDQ0NTUsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDIyIH0sXG4gICAgICBERTogeyBNVzogNDQzMywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogODggfSxcbiAgICAgIFpBOiB7IE1XOiAzNzQyLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA0OSB9LFxuICAgICAgS1I6IHsgTVc6IDMzODUsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDE3IH0sXG4gICAgICBBRjogeyBNVzogMzEzNSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNSB9LFxuICAgICAgUFQ6IHsgTVc6IDI4OTUsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDMyIH0sXG4gICAgICBCRDogeyBNVzogMjc5MywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNDAgfSxcbiAgICAgIElEOiB7IE1XOiAyNTY1LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA2IH0sXG4gICAgICBDQTogeyBNVzogMjUyNywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNDQgfSxcbiAgICAgIEZSOiB7IE1XOiAyNDg5LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAzMiB9LFxuICAgICAgRUc6IHsgTVc6IDIyODYsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDQwIH0sXG4gICAgICBNWTogeyBNVzogMjEzOCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNDAgfSxcbiAgICAgIElUOiB7IE1XOiAyMDE5LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAzOCB9LFxuICAgICAgVFI6IHsgTVc6IDE3NzcsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDEzIH0sXG4gICAgICBUVzogeyBNVzogMTcxNSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTQgfSxcbiAgICAgIFVBOiB7IE1XOiAxNzAzLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAzMSB9LFxuICAgICAgVEg6IHsgTVc6IDE2OTksIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDExIH0sXG4gICAgICBHSDogeyBNVzogMTY2MiwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMjAgfSxcbiAgICAgIEpPOiB7IE1XOiAxNjQ4LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAyOCB9LFxuICAgICAgREs6IHsgTVc6IDE0NzEsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDIwIH0sXG4gICAgICBJUTogeyBNVzogMTMwMCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMiB9LFxuICAgICAgTEs6IHsgTVc6IDEyNzAsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDYgfSxcbiAgICAgIFJPOiB7IE1XOiAxMjYzLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAyMSB9LFxuICAgICAgTlo6IHsgTVc6IDEyMTEsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDExIH0sXG4gICAgICBSVTogeyBNVzogMTEzNCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMzUgfSxcbiAgICAgIEVUOiB7IE1XOiAxMTAwLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAzIH0sXG4gICAgICBLWjogeyBNVzogMTA4NywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTkgfSxcbiAgICAgIEFSOiB7IE1XOiAxMDAxLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxMyB9LFxuICAgICAgTkw6IHsgTVc6IDEwMDAsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDIxIH0sXG4gICAgICBQTDogeyBNVzogOTE4LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA5IH0sXG4gICAgICBQRTogeyBNVzogOTA0LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxMSB9LFxuICAgICAgUUE6IHsgTVc6IDgxNSwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMyB9LFxuICAgICAgSUw6IHsgTVc6IDc4OCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogOSB9LFxuICAgICAgRE86IHsgTVc6IDcxNCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTIgfSxcbiAgICAgIFROOiB7IE1XOiA3MDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEzIH0sXG4gICAgICBDRDogeyBNVzogNjQwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAzIH0sXG4gICAgICBCQTogeyBNVzogNjMyLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxMiB9LFxuICAgICAgSE46IHsgTVc6IDU3MiwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTUgfSxcbiAgICAgIEJHOiB7IE1XOiA1NDksIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDkgfSxcbiAgICAgIE1LOiB7IE1XOiA1MzAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIEtFOiB7IE1XOiA1MTQsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEyIH0sXG4gICAgICBLSDogeyBNVzogNDg1LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxMiB9LFxuICAgICAgUEs6IHsgTVc6IDQ1MCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMyB9LFxuICAgICAgQUw6IHsgTVc6IDM5MCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogNSB9LFxuICAgICAgRUM6IHsgTVc6IDM2MiwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogNCB9LFxuICAgICAgUFI6IHsgTVc6IDM0MiwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogNSB9LFxuICAgICAgU1k6IHsgTVc6IDMzOCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMyB9LFxuICAgICAgSFU6IHsgTVc6IDMxNCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTAgfSxcbiAgICAgIFJTOiB7IE1XOiAyODAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFNHOiB7IE1XOiAyNzQsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDQgfSxcbiAgICAgIFNWOiB7IE1XOiAyNjUsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIEFaOiB7IE1XOiAyNTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDIgfSxcbiAgICAgIEJGOiB7IE1XOiAyNDEsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDggfSxcbiAgICAgIEJFOiB7IE1XOiAyMzMsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFNOOiB7IE1XOiAyMTIsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDggfSxcbiAgICAgIEFNOiB7IE1XOiAyMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEgfSxcbiAgICAgIEdVOiB7IE1XOiAxOTYsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFVZOiB7IE1XOiAxOTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFhLOiB7IE1XOiAxODAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDIgfSxcbiAgICAgIE5JOiB7IE1XOiAxODAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFBBOiB7IE1XOiAxNzcsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIEJPOiB7IE1XOiAxNjAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIFREOiB7IE1XOiAxNjAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDQgfSxcbiAgICAgIE1XOiB7IE1XOiAxNTEsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDQgfSxcbiAgICAgIEdNOiB7IE1XOiAxNTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDIgfSxcbiAgICAgIFRUOiB7IE1XOiAxNTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDIgfSxcbiAgICAgIEVIOiB7IE1XOiAxMDUsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDIgfSxcbiAgICAgIEJIOiB7IE1XOiAxMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEgfSxcbiAgICAgIFNaOiB7IE1XOiAxMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEgfSxcbiAgICAgIFZBOiB7IE1XOiAxMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEgfSxcbiAgICAgIE1MOiB7IE1XOiAxMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIFVaOiB7IE1XOiAxMDAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEgfSxcbiAgICAgIEdUOiB7IE1XOiA5MywgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgWk06IHsgTVc6IDg4LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBDWjogeyBNVzogODcsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDMgfSxcbiAgICAgIEpNOiB7IE1XOiA3MiwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgTVI6IHsgTVc6IDY1LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBMQTogeyBNVzogNjQsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFNLOiB7IE1XOiA1OCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgVUc6IHsgTVc6IDU3LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBCWTogeyBNVzogNTUsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIEdGOiB7IE1XOiA1NSwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgQko6IHsgTVc6IDUwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBURzogeyBNVzogNTAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDIgfSxcbiAgICAgIE5BOiB7IE1XOiA0NiwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgU0U6IHsgTVc6IDQ2LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBNWjogeyBNVzogNDAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIENVOiB7IE1XOiAzOSwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgS046IHsgTVc6IDM4LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBNTjogeyBNVzogMzAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIE5DOiB7IE1XOiAzMCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgQ0Y6IHsgTVc6IDI1LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBOUDogeyBNVzogMjUsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFpXOiB7IE1XOiAyNSwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgQVQ6IHsgTVc6IDI0LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBJUjogeyBNVzogMjAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIE1HOiB7IE1XOiAyMCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgU1M6IHsgTVc6IDIwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBTTzogeyBNVzogMTAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFNEOiB7IE1XOiAxMCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgR0w6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTk86IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgSFQ6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgVkU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUFk6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ1I6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR1k6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgU1I6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgRks6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUEc6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgU0I6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgRkk6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgRUU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTFY6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTFQ6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgSVM6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgSUU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgSFI6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUEc6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ0g6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgU0k6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTUQ6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTUU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR0U6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgVEo6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgVE06IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgS1A6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgS0c6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgWUU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTFk6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQU86IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQlc6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgVFo6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgRVI6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTFM6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTkU6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ0c6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR0E6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTkc6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ006IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR1E6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUEY6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQlo6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQlM6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQkk6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUlc6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ1k6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTEI6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgUFM6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTVQ6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgQ0k6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgTFI6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR046IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgR1c6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgU0w6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgU1Q6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgVEw6IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgICAgRk86IHsgTVc6IFwiTm8gbWVnYXdhdHQgY2FwYWNpdHlcIiwgY29sb3I6IFwiI0ZGQ0NDQlwiLCBTRjogMCB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJTdmdQYW5ab29tIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdmdVdGlscyIsImVuYWJsZSIsImluc3RhbmNlIiwiZGVmcyIsInN2ZyIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z05TIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZUVsIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInpvb21Hcm91cCIsIndpZHRoIiwiaGVpZ2h0IiwiX2NyZWF0ZVpvb21JbiIsIl9jcmVhdGVab29tUmVzZXQiLCJfY3JlYXRlWm9vbU91dCIsImNvbnRyb2xJY29ucyIsInpvb21JbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRQdWJsaWNJbnN0YW5jZSIsInpvb21JbkJhY2tncm91bmQiLCJ6b29tSW5TaGFwZSIsInJlc2V0UGFuWm9vbUNvbnRyb2wiLCJyZXNldCIsInJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kIiwicmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMSIsInJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIiLCJ6b29tT3V0Iiwiem9vbU91dEJhY2tncm91bmQiLCJ6b29tT3V0U2hhcGUiLCJkaXNhYmxlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiVXRpbHMiLCJTaGFkb3dWaWV3cG9ydCIsInZpZXdwb3J0Iiwib3B0aW9ucyIsImluaXQiLCJwcm90b3R5cGUiLCJvcmlnaW5hbFN0YXRlIiwiem9vbSIsIngiLCJ5IiwiYWN0aXZlU3RhdGUiLCJ1cGRhdGVDVE1DYWNoZWQiLCJwcm94eSIsInVwZGF0ZUNUTSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZVJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlZnJlc2hSYXRlIiwidmlld0JveCIsImNhY2hlVmlld0JveCIsIm5ld0NUTSIsInByb2Nlc3NDVE0iLCJzZXRDVE0iLCJzdmdWaWV3Qm94IiwiZ2V0QXR0cmlidXRlIiwidmlld0JveFZhbHVlcyIsInNwbGl0IiwiZmlsdGVyIiwidiIsIm1hcCIsInBhcnNlRmxvYXQiLCJNYXRoIiwibWluIiwidXBkYXRlQ1RNT25OZXh0RnJhbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzaW1wbGVWaWV3Qm94Q2FjaGUiLCJiQm94IiwiZ2V0QkJveCIsImdldFZpZXdCb3giLCJleHRlbmQiLCJnZXRDVE0iLCJmaXQiLCJjb250YWluIiwibmV3U2NhbGUiLCJtYXgiLCJhIiwiZCIsImUiLCJmIiwiY2VudGVyIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRPcmlnaW5hbFN0YXRlIiwiZ2V0U3RhdGUiLCJnZXRab29tIiwiZ2V0UmVsYXRpdmVab29tIiwiY29tcHV0ZVJlbGF0aXZlWm9vbSIsInNjYWxlIiwiZ2V0UGFuIiwic2FmZUNUTSIsImNyZWF0ZVNWR01hdHJpeCIsImIiLCJjIiwid2lsbFpvb20iLCJpc1pvb21EaWZmZXJlbnQiLCJ3aWxsUGFuIiwiaXNQYW5EaWZmZXJlbnQiLCJiZWZvcmVab29tIiwidXBkYXRlQ2FjaGUiLCJvblpvb20iLCJwcmV2ZW50UGFuIiwiYmVmb3JlUGFuIiwicHJldmVudFBhblgiLCJwcmV2ZW50UGFuWSIsImlzT2JqZWN0IiwiaXNOdW1iZXIiLCJvblBhbiIsInBlbmRpbmdVcGRhdGUiLCJjYWxsIiwid2luZG93IiwiY3RtIiwib25VcGRhdGVkQ1RNIiwiV2hlZWwiLCJDb250cm9sSWNvbnMiLCJvcHRpb25zRGVmYXVsdHMiLCJ2aWV3cG9ydFNlbGVjdG9yIiwicGFuRW5hYmxlZCIsImNvbnRyb2xJY29uc0VuYWJsZWQiLCJ6b29tRW5hYmxlZCIsImRibENsaWNrWm9vbUVuYWJsZWQiLCJtb3VzZVdoZWVsWm9vbUVuYWJsZWQiLCJwcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0Iiwiem9vbVNjYWxlU2Vuc2l0aXZpdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsImN1c3RvbUV2ZW50c0hhbmRsZXIiLCJldmVudHNMaXN0ZW5lckVsZW1lbnQiLCJwYXNzaXZlTGlzdGVuZXJPcHRpb24iLCJwYXNzaXZlIiwidGhhdCIsInNldHVwU3ZnQXR0cmlidXRlcyIsInN0YXRlIiwiYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQiLCJnZXRPckNyZWF0ZVZpZXdwb3J0Iiwib2xkU2NhbGUiLCJvbGRQb2ludCIsIm5ld1BvaW50IiwicG9pbnQiLCJwdWJsaWNJbnN0YW5jZSIsInNldEJlZm9yZVpvb20iLCJzZXRPblpvb20iLCJzZXRCZWZvcmVQYW4iLCJzZXRPblBhbiIsInNldE9uVXBkYXRlZENUTSIsImxhc3RNb3VzZVdoZWVsRXZlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsInNldHVwSGFuZGxlcnMiLCJwcmV2RXZ0IiwiZXZlbnRMaXN0ZW5lcnMiLCJtb3VzZWRvd24iLCJldnQiLCJyZXN1bHQiLCJoYW5kbGVNb3VzZURvd24iLCJ0b3VjaHN0YXJ0IiwibW91c2V1cCIsImhhbmRsZU1vdXNlVXAiLCJ0b3VjaGVuZCIsIm1vdXNlbW92ZSIsImhhbmRsZU1vdXNlTW92ZSIsInRvdWNobW92ZSIsIm1vdXNlbGVhdmUiLCJ0b3VjaGxlYXZlIiwidG91Y2hjYW5jZWwiLCJzdmdFbGVtZW50IiwiaGFsdEV2ZW50TGlzdGVuZXJzIiwibGVuZ3RoIiwiaSIsImhhc093blByb3BlcnR5IiwiZXZlbnQiLCJlbmFibGVNb3VzZVdoZWVsWm9vbSIsIndoZWVsTGlzdGVuZXIiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaXNQYXNzaXZlTGlzdGVuZXIiLCJvbiIsImRpc2FibGVNb3VzZVdoZWVsWm9vbSIsIm9mZiIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJkZWx0YSIsImRlbHRhWSIsInRpbWVEZWx0YSIsImRpdmlkZXIiLCJkZWx0YU1vZGUiLCJ3aGVlbERlbHRhIiwiYWJzIiwibG9nIiwiaW52ZXJzZWRTY3JlZW5DVE0iLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwicmVsYXRpdmVNb3VzZVBvaW50IiwiZ2V0RXZlbnRQb2ludCIsIm1hdHJpeFRyYW5zZm9ybSIsInBvdyIsInpvb21BdFBvaW50Iiwiem9vbVNjYWxlIiwiem9vbUFic29sdXRlIiwib2xkQ1RNIiwicmVsYXRpdmVQb2ludCIsIm1vZGlmaWVyIiwidHJhbnNsYXRlIiwibXVsdGlwbHkiLCJhYnNvbHV0ZSIsImdldFN2Z0NlbnRlclBvaW50IiwicHVibGljWm9vbSIsImNvbXB1dGVGcm9tUmVsYXRpdmVab29tIiwicHVibGljWm9vbUF0UG9pbnQiLCJnZXRUeXBlIiwiY3JlYXRlU1ZHUG9pbnQiLCJFcnJvciIsInJlc2V0Wm9vbSIsInJlc2V0UGFuIiwicGFuIiwiaGFuZGxlRGJsQ2xpY2siLCJ0YXJnZXRDbGFzcyIsInRhcmdldCIsImluZGV4T2YiLCJ6b29tRmFjdG9yIiwic2hpZnRLZXkiLCJtb3VzZUFuZFRvdWNoTm9ybWFsaXplIiwiaXNEYmxDbGljayIsImZpcnN0RXZlbnRDVE0iLCJzdGF0ZU9yaWdpbiIsInZpZXdwb3J0Q1RNIiwidXBkYXRlQkJveCIsInBhbkJ5IiwicmVzaXplIiwiZGlzYWJsZUNvbnRyb2xJY29ucyIsImVuYWJsZUNvbnRyb2xJY29ucyIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5zdGFuY2VzU3RvcmUiLCJwaSIsImVuYWJsZVBhbiIsImRpc2FibGVQYW4iLCJpc1BhbkVuYWJsZWQiLCJmbiIsImVuYWJsZVpvb20iLCJkaXNhYmxlWm9vbSIsImlzWm9vbUVuYWJsZWQiLCJpc0NvbnRyb2xJY29uc0VuYWJsZWQiLCJlbmFibGVEYmxDbGlja1pvb20iLCJkaXNhYmxlRGJsQ2xpY2tab29tIiwiaXNEYmxDbGlja1pvb21FbmFibGVkIiwiaXNNb3VzZVdoZWVsWm9vbUVuYWJsZWQiLCJzZXRab29tU2NhbGVTZW5zaXRpdml0eSIsInNldE1pblpvb20iLCJzZXRNYXhab29tIiwiem9vbUJ5Iiwiem9vbUF0UG9pbnRCeSIsImdldFNpemVzIiwicmVhbFpvb20iLCJzdmdQYW5ab29tIiwiZWxlbWVudE9yU2VsZWN0b3IiLCJnZXRTdmciLCJwdXNoIiwiX2Jyb3dzZXIiLCJkb2N1bWVudE1vZGUiLCJ4bWxOUyIsInhtbG5zTlMiLCJ4bGlua05TIiwiZXZOUyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2VsZWN0b3IiLCJpc0VsZW1lbnQiLCJjaGlsZE5vZGVzIiwiQXJyYXkiLCJzbGljZSIsImNoaWxkcmVuIiwiZWwiLCJub2RlTmFtZSIsInZpZXdwb3J0SWQiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJzdmdDaGlsZHJlbiIsImNsYXNzTmFtZXMiLCJqb2luIiwic2V0QXR0cmlidXRlTlMiLCJ0b0xvd2VyQ2FzZSIsImludGVybmV0RXhwbG9yZXJSZWRpc3BsYXlJbnRlcnZhbCIsInJlZnJlc2hEZWZzR2xvYmFsIiwidGhyb3R0bGUiLCJhbGxEZWZzIiwicXVlcnlTZWxlY3RvckFsbCIsImFsbERlZnNDb3VudCIsInRoaXNEZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZWxlbWVudCIsIm1hdHJpeCIsInMiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJwcmVmaXgiLCJfYWRkRXZlbnRMaXN0ZW5lciIsIl9yZW1vdmVFdmVudExpc3RlbmVyIiwic3VwcG9ydCIsImZucyIsInBhc3NpdmVPcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwib25tb3VzZXdoZWVsIiwidW5kZWZpbmVkIiwiY3JlYXRlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9yaWdpbmFsRXZlbnQiLCJzcmNFbGVtZW50IiwidHlwZSIsImRlbHRhWCIsImRlbGF0WiIsIndoZWVsRGVsdGFYIiwiZGV0YWlsIiwiZ2V0Q2FsbGJhY2siLCJyZW1vdmVDYWxsYmFjayIsInNwbGljZSIsIl9hZGRXaGVlbExpc3RlbmVyIiwiZWxlbSIsImV2ZW50TmFtZSIsImNiIiwiX3JlbW92ZVdoZWVsTGlzdGVuZXIiLCJhZGRXaGVlbExpc3RlbmVyIiwicmVtb3ZlV2hlZWxMaXN0ZW5lciIsInNvdXJjZSIsInByb3AiLCJvIiwiSFRNTEVsZW1lbnQiLCJTVkdFbGVtZW50IiwiU1ZHU1ZHRWxlbWVudCIsIm5vZGVUeXBlIiwiT2JqZWN0IiwidG9TdHJpbmciLCJuIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIlN0cmluZyIsInRhZ05hbWUiLCJjb250ZW50RG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRTVkdEb2N1bWVudCIsImNvbnRleHQiLCJhcHBseSIsImFyZ3VtZW50cyIsInRvdWNoZXMiLCJwYWdlWCIsInJlY3QiLCJsZWZ0IiwicGFnZVkiLCJ0b3AiLCJ0aW1lU3RhbXBEaWZmIiwidGltZVN0YW1wIiwidG91Y2hlc0Rpc3RhbmNlIiwic3FydCIsImdldFRpbWUiLCJmdW5jIiwid2FpdCIsImFyZ3MiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsImZsb29yIiwicmVxdWVzdFRpbWVvdXQiLCJzdmdNYXBXcmFwcGVyIiwibCIsImFzc2lnbiIsInRhcmdldEVsZW1lbnRJRCIsImluaXRpYWxab29tIiwiaW5pdGlhbFBhbiIsIm1vdXNlV2hlZWxab29tV2l0aEtleSIsIm1vdXNlV2hlZWxLZXlNZXNzYWdlIiwibW91c2VXaGVlbEtleU1lc3NhZ2VNYWMiLCJjb2xvck1heCIsImNvbG9yTWluIiwiY29sb3JOb0RhdGEiLCJtYW51YWxDb2xvckF0dHJpYnV0ZSIsImZsYWdUeXBlIiwiZmxhZ1VSTCIsImhpZGVGbGFnIiwiaGlkZU1pc3NpbmdEYXRhIiwibm9EYXRhVGV4dCIsInRvdWNoTGluayIsInNob3dab29tUmVzZXQiLCJvbkdldFRvb2x0aXAiLCJ0IiwiY291bnRyaWVzIiwiRUgiLCJDcmltZWEiLCJzaG93Q29udGluZW50U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsImVycm9yIiwiZGF0YSIsImlkIiwid3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5lciIsImFkZE1vdXNlV2hlZWxab29tTm90aWNlIiwiYWRkTW91c2VXaGVlbFpvb21XaXRoS2V5RXZlbnRzIiwibWFwQ29udGFpbmVyIiwiY3JlYXRlTWFwIiwiYXBwbHlEYXRhIiwiQUYiLCJBWCIsIkFMIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBSSIsIkFRIiwiQUciLCJBUiIsIkFNIiwiQVciLCJBVSIsIkFUIiwiQVoiLCJCUyIsIkJIIiwiQkQiLCJCQiIsIkJZIiwiQkUiLCJCWiIsIkJKIiwiQk0iLCJCVCIsIkJPIiwiQkEiLCJCVyIsIkJSIiwiSU8iLCJWRyIsIkJOIiwiQkciLCJCRiIsIkJJIiwiS0giLCJDTSIsIkNBIiwiQ1YiLCJCUSIsIktZIiwiQ0YiLCJURCIsIkNMIiwiQ04iLCJDWCIsIkNDIiwiQ08iLCJLTSIsIkNHIiwiQ0siLCJDUiIsIkhSIiwiQ1UiLCJDVyIsIkNZIiwiQ1oiLCJDRCIsIkRLIiwiREoiLCJETSIsIkRPIiwiRUMiLCJFRyIsIlNWIiwiR1EiLCJFUiIsIkVFIiwiRVQiLCJGSyIsIkZPIiwiRk0iLCJGSiIsIkZJIiwiRlIiLCJHRiIsIlBGIiwiVEYiLCJHQSIsIkdNIiwiR0UiLCJERSIsIkdIIiwiR0kiLCJHUiIsIkdMIiwiR0QiLCJHUCIsIkdVIiwiR1QiLCJHTiIsIkdXIiwiR1kiLCJIVCIsIkhOIiwiSEsiLCJIVSIsIklTIiwiSU4iLCJJRCIsIklSIiwiSVEiLCJJRSIsIklNIiwiSUwiLCJJVCIsIkNJIiwiSk0iLCJKUCIsIkpFIiwiSk8iLCJLWiIsIktFIiwiS0kiLCJYSyIsIktXIiwiS0ciLCJMQSIsIkxWIiwiTEIiLCJMUyIsIkxSIiwiTFkiLCJMSSIsIkxUIiwiTFUiLCJNTyIsIk1LIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTUgiLCJNUSIsIk1SIiwiTVUiLCJZVCIsIk1YIiwiTUQiLCJNQyIsIk1OIiwiTUUiLCJNUyIsIk1BIiwiTVoiLCJNTSIsIk5BIiwiTlIiLCJOUCIsIk5MIiwiTkMiLCJOWiIsIk5JIiwiTkUiLCJORyIsIk5VIiwiTkYiLCJLUCIsIk1QIiwiTk8iLCJPTSIsIlBLIiwiUFciLCJQUyIsIlBBIiwiUEciLCJQWSIsIlBFIiwiUEgiLCJQTiIsIlBMIiwiUFQiLCJQUiIsIlFBIiwiUkUiLCJSTyIsIlJVIiwiUlciLCJTSCIsIktOIiwiTEMiLCJQTSIsIlZDIiwiV1MiLCJTTSIsIlNUIiwiU0EiLCJTTiIsIlJTIiwiU0MiLCJTTCIsIlNHIiwiU1giLCJTSyIsIlNJIiwiU0IiLCJTTyIsIlpBIiwiR1MiLCJLUiIsIlNTIiwiRVMiLCJMSyIsIlNEIiwiU1IiLCJTSiIsIlNaIiwiU0UiLCJDSCIsIlNZIiwiVFciLCJUSiIsIlRaIiwiVEgiLCJUTCIsIlRHIiwiVEsiLCJUTyIsIlRUIiwiVE4iLCJUUiIsIlRNIiwiVEMiLCJUViIsIlVHIiwiVUEiLCJBRSIsIkdCIiwiVVMiLCJVTSIsIlZJIiwiVVkiLCJVWiIsIlZVIiwiVkEiLCJWRSIsIlZOIiwiV0YiLCJZRSIsIlpNIiwiWlciLCJrZXlzIiwidmFsdWVzIiwiZm9yRWFjaCIsInBhcnNlSW50IiwidGhyZXNob2xkTWF4IiwidGhyZXNob2xkTWluIiwiY29sb3IiLCJnZXRDb2xvciIsImJpbmQiLCJlbW9qaUZsYWdzIiwiY29udGluZW50cyIsIkVBIiwiaXNvIiwibmFtZSIsIkVVIiwiT0MiLCJjcmVhdGVUb29sdGlwIiwibWFwV3JhcHBlciIsIm1hcEltYWdlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ6b29tTWFwIiwiem9vbUNvbnRyb2xJbiIsInpvb21Db250cm9sT3V0IiwiY29udGluZW50U2VsZWN0IiwidmFsdWUiLCJ6b29tQ29udGluZW50IiwibWFwUGF0aHMiLCJ0b29sdGlwTW92ZUV2ZW50IiwibW92ZVRvb2x0aXAiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRUb29sdGlwQ29udGVudCIsImdldFRvb2x0aXBDb250ZW50Iiwic2hvd1Rvb2x0aXAiLCJsaW5rIiwibGlua1RhcmdldCIsIm9wZW4iLCJoaWRlVG9vbHRpcCIsInJlbW92ZSIsIm1hcFBhblpvb20iLCJzZXRDb250cm9sU3RhdHVzZXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIkwiLCJ0b29sdGlwIiwiaW5uZXJIVE1MIiwiZ2V0Q291bnRyeU5hbWUiLCJmbG9hdGluZ051bWJlcnMiLCJ0b0ZpeGVkIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJudW1iZXJXaXRoQ29tbWFzIiwiZm9ybWF0Iiwiem9vbUNvbnRyb2xSZXNldCIsImNvbnRhaW5zIiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsImFwcGVuZCIsInNob3dNb3VzZVdoZWVsWm9vbU5vdGljZSIsIm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuIiwiYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCIsImhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZSIsImJsb2NrTW91c2VXaGVlbFpvb21Ob3RpY2UiLCJtb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlblRpbWVvdXQiLCJib2R5Iiwia2V5IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRvb2x0aXBDb250ZW50IiwidG9vbHRpcFBvaW50ZXIiLCJpbm5lcldpZHRoIiwibWFyZ2luTGVmdCIsImNvbnNvbGUiLCJjZWlsIiwic3Vic3RyaW5nIiwiZ2V0SGV4IiwiY291bnRyeU5hbWVzIiwiZGVmaW5lIiwiYW1kIiwic3ZnTWFwIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiYnV0dG9uIiwiYnV0dG9uQ2xvc2UiLCJfcG9wdXBFbGVtZW50IiwiX2J1dHRvbkVsZW1lbnQiLCJfYnV0dG9uIiwiY2xvc2UiLCJqb2IiLCJhYm91dCIsIlBvcHVwVmlkIiwiX3NlbGVjdG9yRWxlbWVudCIsIl9leHBsb3JlQnRuIiwib3BlblBvcHVwVmlkIiwiY2xvc2VWaWQiLCJzY3JvbGwiLCJiZWhhdmlvciIsImFuY2hvciIsInNjcm9sbEludG9WaWV3IiwicG9wdXBWaWQiLCJwb3B1cCIsInBvcHVwMiIsImZpbGxJbmZvIiwiZmlsbFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJTRiJdLCJzb3VyY2VSb290IjoiIn0=