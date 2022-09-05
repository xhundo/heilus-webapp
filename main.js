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
/* harmony import */ var svgmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svgmap */ "./node_modules/svgmap/dist/svgMap.min.js");
/* harmony import */ var svgmap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svgmap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svgmap_dist_svgMap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svgmap/dist/svgMap.min.css */ "./node_modules/svgmap/dist/svgMap.min.css");




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
new (svgmap__WEBPACK_IMPORTED_MODULE_2___default())({
  targetElementID: "svgMap",
  data: {
    data: {
      MW: {
        name: "MW output per country",
        format: "{0} USD",
        thousandSeparator: ",",
        thresholdMax: 50000,
        thresholdMin: 1000
      },
      change: {
        name: "Change to year before",
        format: "{0} %"
      }
    },
    applyData: "MW",
    values: {
      AF: {
        MW: 587,
        change: 4.73,
        color: "blue"
      },
      AL: {
        MW: 4583,
        change: 11.09,
        color: "green"
      },
      DZ: {
        MW: 4293,
        change: 10.01,
        color: "yellow"
      }
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDSSxpQkFBTjtBQUNBSCxNQUFNLENBQUNHLGlCQUFQO0FBRUEsSUFBSWYsK0NBQUosQ0FBVztFQUNUelcsZUFBZSxFQUFFLFFBRFI7RUFFVHlCLElBQUksRUFBRTtJQUNKQSxJQUFJLEVBQUU7TUFDSjZJLEVBQUUsRUFBRTtRQUNGK0gsSUFBSSxFQUFFLHVCQURKO1FBRUZ1QyxNQUFNLEVBQUUsU0FGTjtRQUdGRixpQkFBaUIsRUFBRSxHQUhqQjtRQUlGOUMsWUFBWSxFQUFFLEtBSlo7UUFLRkMsWUFBWSxFQUFFO01BTFosQ0FEQTtNQVFKNEYsTUFBTSxFQUFFO1FBQ05wRixJQUFJLEVBQUUsdUJBREE7UUFFTnVDLE1BQU0sRUFBRTtNQUZGO0lBUkosQ0FERjtJQWNKelMsU0FBUyxFQUFFLElBZFA7SUFlSnNQLE1BQU0sRUFBRTtNQUNOclAsRUFBRSxFQUFFO1FBQUVrSSxFQUFFLEVBQUUsR0FBTjtRQUFXbU4sTUFBTSxFQUFFLElBQW5CO1FBQXlCM0YsS0FBSyxFQUFFO01BQWhDLENBREU7TUFFTnhQLEVBQUUsRUFBRTtRQUFFZ0ksRUFBRSxFQUFFLElBQU47UUFBWW1OLE1BQU0sRUFBRSxLQUFwQjtRQUEyQjNGLEtBQUssRUFBRTtNQUFsQyxDQUZFO01BR052UCxFQUFFLEVBQUU7UUFBRStILEVBQUUsRUFBRSxJQUFOO1FBQVltTixNQUFNLEVBQUUsS0FBcEI7UUFBMkIzRixLQUFLLEVBQUU7TUFBbEM7SUFIRTtFQWZKO0FBRkcsQ0FBWCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL2Jyb3dzZXJpZnkuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL2NvbnRyb2wtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL3NoYWRvdy12aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvc3ZnLXBhbi16b29tLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy9zdmctdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy91bml3aGVlbC5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnbWFwL2Rpc3Qvc3ZnTWFwLm1pbi5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmdtYXAvZGlzdC9zdmdNYXAubWluLmNzcz9hODdmIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFN2Z1Bhblpvb20gPSByZXF1aXJlKFwiLi9zdmctcGFuLXpvb20uanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ZnUGFuWm9vbTtcbiIsInZhciBTdmdVdGlscyA9IHJlcXVpcmUoXCIuL3N2Zy11dGlsaXRpZXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmFibGU6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgLy8gU2VsZWN0IChhbmQgY3JlYXRlIGlmIG5lY2Vzc2FyeSkgZGVmc1xuICAgIHZhciBkZWZzID0gaW5zdGFuY2Uuc3ZnLnF1ZXJ5U2VsZWN0b3IoXCJkZWZzXCIpO1xuICAgIGlmICghZGVmcykge1xuICAgICAgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJkZWZzXCIpO1xuICAgICAgaW5zdGFuY2Uuc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBzdHlsZSBlbGVtZW50LCBhbmQgY3JlYXRlIGl0IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICB2YXIgc3R5bGVFbCA9IGRlZnMucXVlcnlTZWxlY3RvcihcInN0eWxlI3N2Zy1wYW4tem9vbS1jb250cm9scy1zdHlsZXNcIik7XG4gICAgaWYgKCFzdHlsZUVsKSB7XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwic3R5bGVcIik7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN2Zy1wYW4tem9vbS1jb250cm9scy1zdHlsZXNcIik7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiLnN2Zy1wYW4tem9vbS1jb250cm9sIHsgY3Vyc29yOiBwb2ludGVyOyBmaWxsOiBibGFjazsgZmlsbC1vcGFjaXR5OiAwLjMzMzsgfSAuc3ZnLXBhbi16b29tLWNvbnRyb2w6aG92ZXIgeyBmaWxsLW9wYWNpdHk6IDAuODsgfSAuc3ZnLXBhbi16b29tLWNvbnRyb2wtYmFja2dyb3VuZCB7IGZpbGw6IHdoaXRlOyBmaWxsLW9wYWNpdHk6IDAuNTsgfSAuc3ZnLXBhbi16b29tLWNvbnRyb2wtYmFja2dyb3VuZCB7IGZpbGwtb3BhY2l0eTogMC44OyB9XCI7XG4gICAgICBkZWZzLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICAvLyBab29tIEdyb3VwXG4gICAgdmFyIHpvb21Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJnXCIpO1xuICAgIHpvb21Hcm91cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sc1wiKTtcbiAgICB6b29tR3JvdXAuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICtcbiAgICAgICAgKGluc3RhbmNlLndpZHRoIC0gNzApICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICAoaW5zdGFuY2UuaGVpZ2h0IC0gNzYpICtcbiAgICAgICAgXCIpIHNjYWxlKDAuNzUpXCJcbiAgICApO1xuICAgIHpvb21Hcm91cC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sXCIpO1xuXG4gICAgLy8gQ29udHJvbCBlbGVtZW50c1xuICAgIHpvb21Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVab29tSW4oaW5zdGFuY2UpKTtcbiAgICB6b29tR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlWm9vbVJlc2V0KGluc3RhbmNlKSk7XG4gICAgem9vbUdyb3VwLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVpvb21PdXQoaW5zdGFuY2UpKTtcblxuICAgIC8vIEZpbmFsbHkgYXBwZW5kIGNyZWF0ZWQgZWxlbWVudFxuICAgIGluc3RhbmNlLnN2Zy5hcHBlbmRDaGlsZCh6b29tR3JvdXApO1xuXG4gICAgLy8gQ2FjaGUgY29udHJvbCBpbnN0YW5jZVxuICAgIGluc3RhbmNlLmNvbnRyb2xJY29ucyA9IHpvb21Hcm91cDtcbiAgfSxcblxuICBfY3JlYXRlWm9vbUluOiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHZhciB6b29tSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwiZ1wiKTtcbiAgICB6b29tSW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmctcGFuLXpvb20tem9vbS1pblwiKTtcbiAgICB6b29tSW4uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDMwLjUgNSkgc2NhbGUoMC4wMTUpXCIpO1xuICAgIHpvb21Jbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sXCIpO1xuICAgIHpvb21Jbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkuem9vbUluKCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHpvb21Jbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS56b29tSW4oKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB2YXIgem9vbUluQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJyZWN0XCIpOyAvLyBUT0RPIGNoYW5nZSB0aGVzZSBiYWNrZ3JvdW5kIHNwYWNlIGZpbGxlcnMgdG8gcm91bmRlZCByZWN0YW5nbGVzIHNvIHRoZXkgbG9vayBwcmV0dGllclxuICAgIHpvb21JbkJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XG4gICAgem9vbUluQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMFwiKTtcbiAgICB6b29tSW5CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTUwMFwiKTsgLy8gbGFyZ2VyIHRoYW4gZXhwZWN0ZWQgYmVjYXVzZSB0aGUgd2hvbGUgZ3JvdXAgaXMgdHJhbnNmb3JtZWQgdG8gc2NhbGUgZG93blxuICAgIHpvb21JbkJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTQwMFwiKTtcbiAgICB6b29tSW5CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtYmFja2dyb3VuZFwiKTtcbiAgICB6b29tSW4uYXBwZW5kQ2hpbGQoem9vbUluQmFja2dyb3VuZCk7XG5cbiAgICB2YXIgem9vbUluU2hhcGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwicGF0aFwiKTtcbiAgICB6b29tSW5TaGFwZS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTEyODAgNTc2djEyOHEwIDI2IC0xOSA0NXQtNDUgMTloLTMyMHYzMjBxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0zMjBoLTMyMHEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTEyOHEwIC0yNiAxOSAtNDV0NDUgLTE5aDMyMHYtMzIwcTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV2MzIwaDMyMHEyNiAwIDQ1IDE5dDE5IDQ1ek0xNTM2IDExMjB2LTk2MCBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6XCJcbiAgICApO1xuICAgIHpvb21JblNoYXBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtZWxlbWVudFwiKTtcbiAgICB6b29tSW4uYXBwZW5kQ2hpbGQoem9vbUluU2hhcGUpO1xuXG4gICAgcmV0dXJuIHpvb21JbjtcbiAgfSxcblxuICBfY3JlYXRlWm9vbVJlc2V0OiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIC8vIHJlc2V0XG4gICAgdmFyIHJlc2V0UGFuWm9vbUNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU3ZnVXRpbHMuc3ZnTlMsIFwiZ1wiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ZnLXBhbi16b29tLXJlc2V0LXBhbi16b29tXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDUgMzUpIHNjYWxlKDAuNClcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnJlc2V0KCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkucmVzZXQoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB2YXIgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBTdmdVdGlscy5zdmdOUyxcbiAgICAgIFwicmVjdFwiXG4gICAgKTsgLy8gVE9ETyBjaGFuZ2UgdGhlc2UgYmFja2dyb3VuZCBzcGFjZSBmaWxsZXJzIHRvIHJvdW5kZWQgcmVjdGFuZ2xlcyBzbyB0aGV5IGxvb2sgcHJldHRpZXJcbiAgICByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMlwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMlwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE4MlwiKTsgLy8gbGFyZ2VyIHRoYW4gZXhwZWN0ZWQgYmVjYXVzZSB0aGUgd2hvbGUgZ3JvdXAgaXMgdHJhbnNmb3JtZWQgdG8gc2NhbGUgZG93blxuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjU4XCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtYmFja2dyb3VuZFwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLmFwcGVuZENoaWxkKHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kKTtcblxuICAgIHZhciByZXNldFBhblpvb21Db250cm9sU2hhcGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgU3ZnVXRpbHMuc3ZnTlMsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTMzLjA1MSwyMC42MzJjLTAuNzQyLTAuNDA2LTEuODU0LTAuNjA5LTMuMzM4LTAuNjA5aC03Ljk2OXY5LjI4MWg3Ljc2OWMxLjU0MywwLDIuNzAxLTAuMTg4LDMuNDczLTAuNTYyYzEuMzY1LTAuNjU2LDIuMDQ4LTEuOTUzLDIuMDQ4LTMuODkxQzM1LjAzMiwyMi43NTcsMzQuMzcyLDIxLjM1MSwzMy4wNTEsMjAuNjMyelwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sU2hhcGUxLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtZWxlbWVudFwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLmFwcGVuZENoaWxkKHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTEpO1xuXG4gICAgdmFyIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBTdmdVdGlscy5zdmdOUyxcbiAgICAgIFwicGF0aFwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sU2hhcGUyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTcwLjIzMSwwLjVIMTUuODQ3QzcuMTAyLDAuNSwwLjUsNS43MDgsMC41LDExLjg0djM4Ljg2MUMwLjUsNTYuODMzLDcuMTAyLDYxLjUsMTUuODQ3LDYxLjVoMTU0LjM4NGM4Ljc0NSwwLDE1LjI2OS00LjY2NywxNS4yNjktMTAuNzk4VjExLjg0QzE4NS41LDUuNzA4LDE3OC45NzYsMC41LDE3MC4yMzEsMC41eiBNNDIuODM3LDQ4LjU2OWgtNy45NjljLTAuMjE5LTAuNzY2LTAuMzc1LTEuMzgzLTAuNDY5LTEuODUyYy0wLjE4OC0wLjk2OS0wLjI4OS0xLjk2MS0wLjMwNS0yLjk3N2wtMC4wNDctMy4yMTFjLTAuMDMtMi4yMDMtMC40MS0zLjY3Mi0xLjE0Mi00LjQwNmMtMC43MzItMC43MzQtMi4xMDMtMS4xMDItNC4xMTMtMS4xMDJoLTcuMDV2MTMuNTQ3aC03LjA1NVYxNC4wMjJoMTYuNTI0YzIuMzYxLDAuMDQ3LDQuMTc4LDAuMzQ0LDUuNDUsMC44OTFjMS4yNzIsMC41NDcsMi4zNTEsMS4zNTIsMy4yMzQsMi40MTRjMC43MzEsMC44NzUsMS4zMSwxLjg0NCwxLjczNywyLjkwNnMwLjY0LDIuMjczLDAuNjQsMy42MzNjMCwxLjY0MS0wLjQxNCwzLjI1NC0xLjI0Miw0Ljg0cy0yLjE5NSwyLjcwNy00LjEwMiwzLjM2M2MxLjU5NCwwLjY0MSwyLjcyMywxLjU1MSwzLjM4NywyLjczczAuOTk2LDIuOTgsMC45OTYsNS40MDJ2Mi4zMmMwLDEuNTc4LDAuMDYzLDIuNjQ4LDAuMTksMy4yMTFjMC4xOSwwLjg5MSwwLjYzNSwxLjU0NywxLjMzMywxLjk2OVY0OC41Njl6IE03NS41NzksNDguNTY5aC0yNi4xOFYxNC4wMjJoMjUuMzM2djYuMTE3SDU2LjQ1NHY3LjMzNmgxNi43ODF2Nkg1Ni40NTR2OC44ODNoMTkuMTI1VjQ4LjU2OXogTTEwNC40OTcsNDYuMzMxYy0yLjQ0LDIuMDg2LTUuODg3LDMuMTI5LTEwLjM0LDMuMTI5Yy00LjU0OCwwLTguMTI1LTEuMDI3LTEwLjczMS0zLjA4MnMtMy45MDktNC44NzktMy45MDktOC40NzNoNi44OTFjMC4yMjQsMS41NzgsMC42NjIsMi43NTgsMS4zMTYsMy41MzljMS4xOTYsMS40MjIsMy4yNDYsMi4xMzMsNi4xNSwyLjEzM2MxLjczOSwwLDMuMTUxLTAuMTg4LDQuMjM2LTAuNTYyYzIuMDU4LTAuNzE5LDMuMDg3LTIuMDU1LDMuMDg3LTQuMDA4YzAtMS4xNDEtMC41MDQtMi4wMjMtMS41MTItMi42NDhjLTEuMDA4LTAuNjA5LTIuNjA3LTEuMTQ4LTQuNzk2LTEuNjE3bC0zLjc0LTAuODJjLTMuNjc2LTAuODEyLTYuMjAxLTEuNjk1LTcuNTc2LTIuNjQ4Yy0yLjMyOC0xLjU5NC0zLjQ5Mi00LjA4Ni0zLjQ5Mi03LjQ3N2MwLTMuMDk0LDEuMTM5LTUuNjY0LDMuNDE3LTcuNzExczUuNjIzLTMuMDcsMTAuMDM2LTMuMDdjMy42ODUsMCw2LjgyOSwwLjk2NSw5LjQzMSwyLjg5NWMyLjYwMiwxLjkzLDMuOTY2LDQuNzMsNC4wOTMsOC40MDJoLTYuOTM4Yy0wLjEyOC0yLjA3OC0xLjA1Ny0zLjU1NS0yLjc4Ny00LjQzYy0xLjE1NC0wLjU3OC0yLjU4Ny0wLjg2Ny00LjMwMS0wLjg2N2MtMS45MDcsMC0zLjQyOCwwLjM3NS00LjU2NSwxLjEyNWMtMS4xMzgsMC43NS0xLjcwNiwxLjc5Ny0xLjcwNiwzLjE0MWMwLDEuMjM0LDAuNTYxLDIuMTU2LDEuNjgyLDIuNzY2YzAuNzIxLDAuNDA2LDIuMjUsMC44ODMsNC41ODksMS40M2w2LjA2MywxLjQzYzIuNjU3LDAuNjI1LDQuNjQ4LDEuNDYxLDUuOTc1LDIuNTA4YzIuMDU5LDEuNjI1LDMuMDg5LDMuOTc3LDMuMDg5LDcuMDU1QzEwOC4xNTcsNDEuNjI0LDEwNi45MzcsNDQuMjQ1LDEwNC40OTcsNDYuMzMxeiBNMTM5LjYxLDQ4LjU2OWgtMjYuMThWMTQuMDIyaDI1LjMzNnY2LjExN2gtMTguMjgxdjcuMzM2aDE2Ljc4MXY2aC0xNi43ODF2OC44ODNoMTkuMTI1VjQ4LjU2OXogTTE3MC4zMzcsMjAuMTRoLTEwLjMzNnYyOC40M2gtNy4yNjZWMjAuMTRoLTEwLjM4M3YtNi4xMTdoMjcuOTg0VjIwLjE0elwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sU2hhcGUyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtZWxlbWVudFwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLmFwcGVuZENoaWxkKHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIpO1xuXG4gICAgcmV0dXJuIHJlc2V0UGFuWm9vbUNvbnRyb2w7XG4gIH0sXG5cbiAgX2NyZWF0ZVpvb21PdXQ6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgLy8gem9vbSBvdXRcbiAgICB2YXIgem9vbU91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJnXCIpO1xuICAgIHpvb21PdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmctcGFuLXpvb20tem9vbS1vdXRcIik7XG4gICAgem9vbU91dC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMzAuNSA3MCkgc2NhbGUoMC4wMTUpXCIpO1xuICAgIHpvb21PdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbFwiKTtcbiAgICB6b29tT3V0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS56b29tT3V0KCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIHpvb21PdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidG91Y2hzdGFydFwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkuem9vbU91dCgpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHZhciB6b29tT3V0QmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJyZWN0XCIpOyAvLyBUT0RPIGNoYW5nZSB0aGVzZSBiYWNrZ3JvdW5kIHNwYWNlIGZpbGxlcnMgdG8gcm91bmRlZCByZWN0YW5nbGVzIHNvIHRoZXkgbG9vayBwcmV0dGllclxuICAgIHpvb21PdXRCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInhcIiwgXCIwXCIpO1xuICAgIHpvb21PdXRCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xuICAgIHpvb21PdXRCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTUwMFwiKTsgLy8gbGFyZ2VyIHRoYW4gZXhwZWN0ZWQgYmVjYXVzZSB0aGUgd2hvbGUgZ3JvdXAgaXMgdHJhbnNmb3JtZWQgdG8gc2NhbGUgZG93blxuICAgIHpvb21PdXRCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjE0MDBcIik7XG4gICAgem9vbU91dEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbC1iYWNrZ3JvdW5kXCIpO1xuICAgIHpvb21PdXQuYXBwZW5kQ2hpbGQoem9vbU91dEJhY2tncm91bmQpO1xuXG4gICAgdmFyIHpvb21PdXRTaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJwYXRoXCIpO1xuICAgIHpvb21PdXRTaGFwZS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTEyODAgNTc2djEyOHEwIDI2IC0xOSA0NXQtNDUgMTloLTg5NnEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTEyOHEwIC0yNiAxOSAtNDV0NDUgLTE5aDg5NnEyNiAwIDQ1IDE5dDE5IDQ1ek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNSB0ODQuNSAtMjAzLjV6XCJcbiAgICApO1xuICAgIHpvb21PdXRTaGFwZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sLWVsZW1lbnRcIik7XG4gICAgem9vbU91dC5hcHBlbmRDaGlsZCh6b29tT3V0U2hhcGUpO1xuXG4gICAgcmV0dXJuIHpvb21PdXQ7XG4gIH0sXG5cbiAgZGlzYWJsZTogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuY29udHJvbEljb25zKSB7XG4gICAgICBpbnN0YW5jZS5jb250cm9sSWNvbnMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnN0YW5jZS5jb250cm9sSWNvbnMpO1xuICAgICAgaW5zdGFuY2UuY29udHJvbEljb25zID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG4iLCJ2YXIgU3ZnVXRpbHMgPSByZXF1aXJlKFwiLi9zdmctdXRpbGl0aWVzXCIpLFxuICBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKTtcblxudmFyIFNoYWRvd1ZpZXdwb3J0ID0gZnVuY3Rpb24odmlld3BvcnQsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHZpZXdwb3J0LCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb25cbiAqXG4gKiBAcGFyYW0gIHtTVkdFbGVtZW50fSB2aWV3cG9ydFxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24odmlld3BvcnQsIG9wdGlvbnMpIHtcbiAgLy8gRE9NIEVsZW1lbnRzXG4gIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAvLyBTdGF0ZSBjYWNoZVxuICB0aGlzLm9yaWdpbmFsU3RhdGUgPSB7IHpvb206IDEsIHg6IDAsIHk6IDAgfTtcbiAgdGhpcy5hY3RpdmVTdGF0ZSA9IHsgem9vbTogMSwgeDogMCwgeTogMCB9O1xuXG4gIHRoaXMudXBkYXRlQ1RNQ2FjaGVkID0gVXRpbHMucHJveHkodGhpcy51cGRhdGVDVE0sIHRoaXMpO1xuXG4gIC8vIENyZWF0ZSBhIGN1c3RvbSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGFraW5nIGluIGFjY291bnQgcmVmcmVzaFJhdGVcbiAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBVdGlscy5jcmVhdGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXG4gICAgdGhpcy5vcHRpb25zLnJlZnJlc2hSYXRlXG4gICk7XG5cbiAgLy8gVmlld0JveFxuICB0aGlzLnZpZXdCb3ggPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgdGhpcy5jYWNoZVZpZXdCb3goKTtcblxuICAvLyBQcm9jZXNzIENUTVxuICB2YXIgbmV3Q1RNID0gdGhpcy5wcm9jZXNzQ1RNKCk7XG5cbiAgLy8gVXBkYXRlIHZpZXdwb3J0IENUTSBhbmQgY2FjaGUgem9vbSBhbmQgcGFuXG4gIHRoaXMuc2V0Q1RNKG5ld0NUTSk7XG5cbiAgLy8gVXBkYXRlIENUTSBpbiB0aGlzIGZyYW1lXG4gIHRoaXMudXBkYXRlQ1RNKCk7XG59O1xuXG4vKipcbiAqIENhY2hlIGluaXRpYWwgdmlld0JveCB2YWx1ZVxuICogSWYgbm8gdmlld0JveCBpcyBkZWZpbmVkLCB0aGVuIHVzZSB2aWV3cG9ydCBzaXplL3Bvc2l0aW9uIGluc3RlYWQgZm9yIHZpZXdCb3ggdmFsdWVzXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5jYWNoZVZpZXdCb3ggPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN2Z1ZpZXdCb3ggPSB0aGlzLm9wdGlvbnMuc3ZnLmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG5cbiAgaWYgKHN2Z1ZpZXdCb3gpIHtcbiAgICB2YXIgdmlld0JveFZhbHVlcyA9IHN2Z1ZpZXdCb3hcbiAgICAgIC5zcGxpdCgvW1xcc1xcLF0vKVxuICAgICAgLmZpbHRlcihmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfSlcbiAgICAgIC5tYXAocGFyc2VGbG9hdCk7XG5cbiAgICAvLyBDYWNoZSB2aWV3Ym94IHggYW5kIHkgb2Zmc2V0XG4gICAgdGhpcy52aWV3Qm94LnggPSB2aWV3Qm94VmFsdWVzWzBdO1xuICAgIHRoaXMudmlld0JveC55ID0gdmlld0JveFZhbHVlc1sxXTtcbiAgICB0aGlzLnZpZXdCb3gud2lkdGggPSB2aWV3Qm94VmFsdWVzWzJdO1xuICAgIHRoaXMudmlld0JveC5oZWlnaHQgPSB2aWV3Qm94VmFsdWVzWzNdO1xuXG4gICAgdmFyIHpvb20gPSBNYXRoLm1pbihcbiAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAvIHRoaXMudmlld0JveC53aWR0aCxcbiAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgLyB0aGlzLnZpZXdCb3guaGVpZ2h0XG4gICAgKTtcblxuICAgIC8vIFVwZGF0ZSBhY3RpdmUgc3RhdGVcbiAgICB0aGlzLmFjdGl2ZVN0YXRlLnpvb20gPSB6b29tO1xuICAgIHRoaXMuYWN0aXZlU3RhdGUueCA9ICh0aGlzLm9wdGlvbnMud2lkdGggLSB0aGlzLnZpZXdCb3gud2lkdGggKiB6b29tKSAvIDI7XG4gICAgdGhpcy5hY3RpdmVTdGF0ZS55ID0gKHRoaXMub3B0aW9ucy5oZWlnaHQgLSB0aGlzLnZpZXdCb3guaGVpZ2h0ICogem9vbSkgLyAyO1xuXG4gICAgLy8gRm9yY2UgdXBkYXRpbmcgQ1RNXG4gICAgdGhpcy51cGRhdGVDVE1Pbk5leHRGcmFtZSgpO1xuXG4gICAgdGhpcy5vcHRpb25zLnN2Zy5yZW1vdmVBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2ltcGxlVmlld0JveENhY2hlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjYWxjdWxhdGUgdmlld3BvcnQgc2l6ZXMgYW5kIHVwZGF0ZSB2aWV3Qm94IGNhY2hlXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5zaW1wbGVWaWV3Qm94Q2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJCb3ggPSB0aGlzLnZpZXdwb3J0LmdldEJCb3goKTtcblxuICB0aGlzLnZpZXdCb3gueCA9IGJCb3gueDtcbiAgdGhpcy52aWV3Qm94LnkgPSBiQm94Lnk7XG4gIHRoaXMudmlld0JveC53aWR0aCA9IGJCb3gud2lkdGg7XG4gIHRoaXMudmlld0JveC5oZWlnaHQgPSBiQm94LmhlaWdodDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHZpZXdib3ggb2JqZWN0LiBTYWZlIHRvIGFsdGVyXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB2aWV3Ym94IG9iamVjdFxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0Vmlld0JveCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gVXRpbHMuZXh0ZW5kKHt9LCB0aGlzLnZpZXdCb3gpO1xufTtcblxuLyoqXG4gKiBHZXQgaW5pdGlhbCB6b29tIGFuZCBwYW4gdmFsdWVzLiBTYXZlIHRoZW0gaW50byBvcmlnaW5hbFN0YXRlXG4gKiBQYXJzZXMgdmlld0JveCBhdHRyaWJ1dGUgdG8gYWx0ZXIgaW5pdGlhbCBzaXplc1xuICpcbiAqIEByZXR1cm4ge0NUTX0gQ1RNIG9iamVjdCBiYXNlZCBvbiBvcHRpb25zXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5wcm9jZXNzQ1RNID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuZXdDVE0gPSB0aGlzLmdldENUTSgpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuZml0IHx8IHRoaXMub3B0aW9ucy5jb250YWluKSB7XG4gICAgdmFyIG5ld1NjYWxlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZml0KSB7XG4gICAgICBuZXdTY2FsZSA9IE1hdGgubWluKFxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggLyB0aGlzLnZpZXdCb3gud2lkdGgsXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgLyB0aGlzLnZpZXdCb3guaGVpZ2h0XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTY2FsZSA9IE1hdGgubWF4KFxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggLyB0aGlzLnZpZXdCb3gud2lkdGgsXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgLyB0aGlzLnZpZXdCb3guaGVpZ2h0XG4gICAgICApO1xuICAgIH1cblxuICAgIG5ld0NUTS5hID0gbmV3U2NhbGU7IC8veC1zY2FsZVxuICAgIG5ld0NUTS5kID0gbmV3U2NhbGU7IC8veS1zY2FsZVxuICAgIG5ld0NUTS5lID0gLXRoaXMudmlld0JveC54ICogbmV3U2NhbGU7IC8veC10cmFuc2Zvcm1cbiAgICBuZXdDVE0uZiA9IC10aGlzLnZpZXdCb3gueSAqIG5ld1NjYWxlOyAvL3ktdHJhbnNmb3JtXG4gIH1cblxuICBpZiAodGhpcy5vcHRpb25zLmNlbnRlcikge1xuICAgIHZhciBvZmZzZXRYID1cbiAgICAgICAgKHRoaXMub3B0aW9ucy53aWR0aCAtXG4gICAgICAgICAgKHRoaXMudmlld0JveC53aWR0aCArIHRoaXMudmlld0JveC54ICogMikgKiBuZXdDVE0uYSkgKlxuICAgICAgICAwLjUsXG4gICAgICBvZmZzZXRZID1cbiAgICAgICAgKHRoaXMub3B0aW9ucy5oZWlnaHQgLVxuICAgICAgICAgICh0aGlzLnZpZXdCb3guaGVpZ2h0ICsgdGhpcy52aWV3Qm94LnkgKiAyKSAqIG5ld0NUTS5hKSAqXG4gICAgICAgIDAuNTtcblxuICAgIG5ld0NUTS5lID0gb2Zmc2V0WDtcbiAgICBuZXdDVE0uZiA9IG9mZnNldFk7XG4gIH1cblxuICAvLyBDYWNoZSBpbml0aWFsIHZhbHVlcy4gQmFzZWQgb24gYWN0aXZlU3RhdGUgYW5kIGZpeCtjZW50ZXIgb3BpdG9uc1xuICB0aGlzLm9yaWdpbmFsU3RhdGUuem9vbSA9IG5ld0NUTS5hO1xuICB0aGlzLm9yaWdpbmFsU3RhdGUueCA9IG5ld0NUTS5lO1xuICB0aGlzLm9yaWdpbmFsU3RhdGUueSA9IG5ld0NUTS5mO1xuXG4gIHJldHVybiBuZXdDVE07XG59O1xuXG4vKipcbiAqIFJldHVybiBvcmlnaW5hbFN0YXRlIG9iamVjdC4gU2FmZSB0byBhbHRlclxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldE9yaWdpbmFsU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7fSwgdGhpcy5vcmlnaW5hbFN0YXRlKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFjdHVhbFN0YXRlIG9iamVjdC4gU2FmZSB0byBhbHRlclxuICpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBVdGlscy5leHRlbmQoe30sIHRoaXMuYWN0aXZlU3RhdGUpO1xufTtcblxuLyoqXG4gKiBHZXQgem9vbSBzY2FsZVxuICpcbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRab29tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmFjdGl2ZVN0YXRlLnpvb207XG59O1xuXG4vKipcbiAqIEdldCB6b29tIHNjYWxlIGZvciBwdWJpbGMgdXNhZ2VcbiAqXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0UmVsYXRpdmVab29tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmFjdGl2ZVN0YXRlLnpvb20gLyB0aGlzLm9yaWdpbmFsU3RhdGUuem9vbTtcbn07XG5cbi8qKlxuICogQ29tcHV0ZSB6b29tIHNjYWxlIGZvciBwdWJpbGMgdXNhZ2VcbiAqXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuY29tcHV0ZVJlbGF0aXZlWm9vbSA9IGZ1bmN0aW9uKHNjYWxlKSB7XG4gIHJldHVybiBzY2FsZSAvIHRoaXMub3JpZ2luYWxTdGF0ZS56b29tO1xufTtcblxuLyoqXG4gKiBHZXQgcGFuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0UGFuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7IHg6IHRoaXMuYWN0aXZlU3RhdGUueCwgeTogdGhpcy5hY3RpdmVTdGF0ZS55IH07XG59O1xuXG4vKipcbiAqIFJldHVybiBjYWNoZWQgdmlld3BvcnQgQ1RNIHZhbHVlIHRoYXQgY2FuIGJlIHNhZmVseSBtb2RpZmllZFxuICpcbiAqIEByZXR1cm4ge1NWR01hdHJpeH1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldENUTSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2FmZUNUTSA9IHRoaXMub3B0aW9ucy5zdmcuY3JlYXRlU1ZHTWF0cml4KCk7XG5cbiAgLy8gQ29weSB2YWx1ZXMgbWFudWFsbHkgYXMgaW4gRkYgdGhleSBhcmUgbm90IGl0dGVyYWJsZVxuICBzYWZlQ1RNLmEgPSB0aGlzLmFjdGl2ZVN0YXRlLnpvb207XG4gIHNhZmVDVE0uYiA9IDA7XG4gIHNhZmVDVE0uYyA9IDA7XG4gIHNhZmVDVE0uZCA9IHRoaXMuYWN0aXZlU3RhdGUuem9vbTtcbiAgc2FmZUNUTS5lID0gdGhpcy5hY3RpdmVTdGF0ZS54O1xuICBzYWZlQ1RNLmYgPSB0aGlzLmFjdGl2ZVN0YXRlLnk7XG5cbiAgcmV0dXJuIHNhZmVDVE07XG59O1xuXG4vKipcbiAqIFNldCBhIG5ldyBDVE1cbiAqXG4gKiBAcGFyYW0ge1NWR01hdHJpeH0gbmV3Q1RNXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5zZXRDVE0gPSBmdW5jdGlvbihuZXdDVE0pIHtcbiAgdmFyIHdpbGxab29tID0gdGhpcy5pc1pvb21EaWZmZXJlbnQobmV3Q1RNKSxcbiAgICB3aWxsUGFuID0gdGhpcy5pc1BhbkRpZmZlcmVudChuZXdDVE0pO1xuXG4gIGlmICh3aWxsWm9vbSB8fCB3aWxsUGFuKSB7XG4gICAgLy8gQmVmb3JlIHpvb21cbiAgICBpZiAod2lsbFpvb20pIHtcbiAgICAgIC8vIElmIHJldHVybnMgZmFsc2UgdGhlbiBjYW5jZWwgem9vbWluZ1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm9wdGlvbnMuYmVmb3JlWm9vbShcbiAgICAgICAgICB0aGlzLmdldFJlbGF0aXZlWm9vbSgpLFxuICAgICAgICAgIHRoaXMuY29tcHV0ZVJlbGF0aXZlWm9vbShuZXdDVE0uYSlcbiAgICAgICAgKSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBuZXdDVE0uYSA9IG5ld0NUTS5kID0gdGhpcy5hY3RpdmVTdGF0ZS56b29tO1xuICAgICAgICB3aWxsWm9vbSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVDYWNoZShuZXdDVE0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25ab29tKHRoaXMuZ2V0UmVsYXRpdmVab29tKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJlZm9yZSBwYW5cbiAgICBpZiAod2lsbFBhbikge1xuICAgICAgdmFyIHByZXZlbnRQYW4gPSB0aGlzLm9wdGlvbnMuYmVmb3JlUGFuKHRoaXMuZ2V0UGFuKCksIHtcbiAgICAgICAgICB4OiBuZXdDVE0uZSxcbiAgICAgICAgICB5OiBuZXdDVE0uZlxuICAgICAgICB9KSxcbiAgICAgICAgLy8gSWYgcHJldmVudCBwYW4gaXMgYW4gb2JqZWN0XG4gICAgICAgIHByZXZlbnRQYW5YID0gZmFsc2UsXG4gICAgICAgIHByZXZlbnRQYW5ZID0gZmFsc2U7XG5cbiAgICAgIC8vIElmIHByZXZlbnQgcGFuIGlzIEJvb2xlYW4gZmFsc2VcbiAgICAgIGlmIChwcmV2ZW50UGFuID09PSBmYWxzZSkge1xuICAgICAgICAvLyBTZXQgeCBhbmQgeSBzYW1lIGFzIGJlZm9yZVxuICAgICAgICBuZXdDVE0uZSA9IHRoaXMuZ2V0UGFuKCkueDtcbiAgICAgICAgbmV3Q1RNLmYgPSB0aGlzLmdldFBhbigpLnk7XG5cbiAgICAgICAgcHJldmVudFBhblggPSBwcmV2ZW50UGFuWSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzT2JqZWN0KHByZXZlbnRQYW4pKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBYIGF4ZXMgYXR0cmlidXRlXG4gICAgICAgIGlmIChwcmV2ZW50UGFuLnggPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBwYW5uaW5nIG9uIHggYXhlc1xuICAgICAgICAgIG5ld0NUTS5lID0gdGhpcy5nZXRQYW4oKS54O1xuICAgICAgICAgIHByZXZlbnRQYW5YID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChVdGlscy5pc051bWJlcihwcmV2ZW50UGFuLngpKSB7XG4gICAgICAgICAgLy8gU2V0IGEgY3VzdG9tIHBhbiB2YWx1ZVxuICAgICAgICAgIG5ld0NUTS5lID0gcHJldmVudFBhbi54O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIFkgYXhlcyBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKHByZXZlbnRQYW4ueSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IHBhbm5pbmcgb24geCBheGVzXG4gICAgICAgICAgbmV3Q1RNLmYgPSB0aGlzLmdldFBhbigpLnk7XG4gICAgICAgICAgcHJldmVudFBhblkgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzTnVtYmVyKHByZXZlbnRQYW4ueSkpIHtcbiAgICAgICAgICAvLyBTZXQgYSBjdXN0b20gcGFuIHZhbHVlXG4gICAgICAgICAgbmV3Q1RNLmYgPSBwcmV2ZW50UGFuLnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHdpbGxQYW4gZmxhZ1xuICAgICAgLy8gQ2hlY2sgaWYgbmV3Q1RNIGlzIHN0aWxsIGRpZmZlcmVudFxuICAgICAgaWYgKChwcmV2ZW50UGFuWCAmJiBwcmV2ZW50UGFuWSkgfHwgIXRoaXMuaXNQYW5EaWZmZXJlbnQobmV3Q1RNKSkge1xuICAgICAgICB3aWxsUGFuID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKG5ld0NUTSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBhbih0aGlzLmdldFBhbigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBhZ2FpbiBpZiBzaG91bGQgem9vbSBvciBwYW5cbiAgICBpZiAod2lsbFpvb20gfHwgd2lsbFBhbikge1xuICAgICAgdGhpcy51cGRhdGVDVE1Pbk5leHRGcmFtZSgpO1xuICAgIH1cbiAgfVxufTtcblxuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmlzWm9vbURpZmZlcmVudCA9IGZ1bmN0aW9uKG5ld0NUTSkge1xuICByZXR1cm4gdGhpcy5hY3RpdmVTdGF0ZS56b29tICE9PSBuZXdDVE0uYTtcbn07XG5cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5pc1BhbkRpZmZlcmVudCA9IGZ1bmN0aW9uKG5ld0NUTSkge1xuICByZXR1cm4gdGhpcy5hY3RpdmVTdGF0ZS54ICE9PSBuZXdDVE0uZSB8fCB0aGlzLmFjdGl2ZVN0YXRlLnkgIT09IG5ld0NUTS5mO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgY2FjaGVkIENUTSBhbmQgYWN0aXZlIHN0YXRlXG4gKlxuICogQHBhcmFtIHtTVkdNYXRyaXh9IG5ld0NUTVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUudXBkYXRlQ2FjaGUgPSBmdW5jdGlvbihuZXdDVE0pIHtcbiAgdGhpcy5hY3RpdmVTdGF0ZS56b29tID0gbmV3Q1RNLmE7XG4gIHRoaXMuYWN0aXZlU3RhdGUueCA9IG5ld0NUTS5lO1xuICB0aGlzLmFjdGl2ZVN0YXRlLnkgPSBuZXdDVE0uZjtcbn07XG5cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XG5cbi8qKlxuICogUGxhY2UgYSByZXF1ZXN0IHRvIHVwZGF0ZSBDVE0gb24gbmV4dCBGcmFtZVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUudXBkYXRlQ1RNT25OZXh0RnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnBlbmRpbmdVcGRhdGUpIHtcbiAgICAvLyBMb2NrXG4gICAgdGhpcy5wZW5kaW5nVXBkYXRlID0gdHJ1ZTtcblxuICAgIC8vIFRocm90dGxlIG5leHQgdXBkYXRlXG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuY2FsbCh3aW5kb3csIHRoaXMudXBkYXRlQ1RNQ2FjaGVkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdmlld3BvcnQgQ1RNIHdpdGggY2FjaGVkIENUTVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUudXBkYXRlQ1RNID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjdG0gPSB0aGlzLmdldENUTSgpO1xuXG4gIC8vIFVwZGF0ZXMgU1ZHIGVsZW1lbnRcbiAgU3ZnVXRpbHMuc2V0Q1RNKHRoaXMudmlld3BvcnQsIGN0bSwgdGhpcy5kZWZzKTtcblxuICAvLyBGcmVlIHRoZSBsb2NrXG4gIHRoaXMucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xuXG4gIC8vIE5vdGlmeSBhYm91dCB0aGUgdXBkYXRlXG4gIGlmICh0aGlzLm9wdGlvbnMub25VcGRhdGVkQ1RNKSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlZENUTShjdG0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZpZXdwb3J0LCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU2hhZG93Vmlld3BvcnQodmlld3BvcnQsIG9wdGlvbnMpO1xufTtcbiIsInZhciBXaGVlbCA9IHJlcXVpcmUoXCIuL3VuaXdoZWVsXCIpLFxuICBDb250cm9sSWNvbnMgPSByZXF1aXJlKFwiLi9jb250cm9sLWljb25zXCIpLFxuICBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKSxcbiAgU3ZnVXRpbHMgPSByZXF1aXJlKFwiLi9zdmctdXRpbGl0aWVzXCIpLFxuICBTaGFkb3dWaWV3cG9ydCA9IHJlcXVpcmUoXCIuL3NoYWRvdy12aWV3cG9ydFwiKTtcblxudmFyIFN2Z1Bhblpvb20gPSBmdW5jdGlvbihzdmcsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHN2Zywgb3B0aW9ucyk7XG59O1xuXG52YXIgb3B0aW9uc0RlZmF1bHRzID0ge1xuICB2aWV3cG9ydFNlbGVjdG9yOiBcIi5zdmctcGFuLXpvb21fdmlld3BvcnRcIiwgLy8gVmlld3BvcnQgc2VsZWN0b3IuIENhbiBiZSBxdWVyeVNlbGVjdG9yIHN0cmluZyBvciBTVkdFbGVtZW50XG4gIHBhbkVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHBhbm5pbmcgKGRlZmF1bHQgZW5hYmxlZClcbiAgY29udHJvbEljb25zRW5hYmxlZDogZmFsc2UsIC8vIGluc2VydCBpY29ucyB0byBnaXZlIHVzZXIgYW4gb3B0aW9uIGluIGFkZGl0aW9uIHRvIG1vdXNlIGV2ZW50cyB0byBjb250cm9sIHBhbi96b29tIChkZWZhdWx0IGRpc2FibGVkKVxuICB6b29tRW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgem9vbWluZyAoZGVmYXVsdCBlbmFibGVkKVxuICBkYmxDbGlja1pvb21FbmFibGVkOiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB6b29taW5nIGJ5IGRvdWJsZSBjbGlja2luZyAoZGVmYXVsdCBlbmFibGVkKVxuICBtb3VzZVdoZWVsWm9vbUVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHpvb21pbmcgYnkgbW91c2Ugd2hlZWwgKGRlZmF1bHQgZW5hYmxlZClcbiAgcHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgcHJldmVudERlZmF1bHQgZm9yIG1vdXNlIGV2ZW50c1xuICB6b29tU2NhbGVTZW5zaXRpdml0eTogMC4xLCAvLyBab29tIHNlbnNpdGl2aXR5XG4gIG1pblpvb206IDAuNSwgLy8gTWluaW11bSBab29tIGxldmVsXG4gIG1heFpvb206IDEwLCAvLyBNYXhpbXVtIFpvb20gbGV2ZWxcbiAgZml0OiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB2aWV3cG9ydCBmaXQgaW4gU1ZHIChkZWZhdWx0IHRydWUpXG4gIGNvbnRhaW46IGZhbHNlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB2aWV3cG9ydCBjb250YWluIHRoZSBzdmcgKGRlZmF1bHQgZmFsc2UpXG4gIGNlbnRlcjogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgdmlld3BvcnQgY2VudGVyaW5nIGluIFNWRyAoZGVmYXVsdCB0cnVlKVxuICByZWZyZXNoUmF0ZTogXCJhdXRvXCIsIC8vIE1heGltdW0gbnVtYmVyIG9mIGZyYW1lcyBwZXIgc2Vjb25kIChhbHRlcmluZyBTVkcncyB2aWV3cG9ydClcbiAgYmVmb3JlWm9vbTogbnVsbCxcbiAgb25ab29tOiBudWxsLFxuICBiZWZvcmVQYW46IG51bGwsXG4gIG9uUGFuOiBudWxsLFxuICBjdXN0b21FdmVudHNIYW5kbGVyOiBudWxsLFxuICBldmVudHNMaXN0ZW5lckVsZW1lbnQ6IG51bGwsXG4gIG9uVXBkYXRlZENUTTogbnVsbFxufTtcblxudmFyIHBhc3NpdmVMaXN0ZW5lck9wdGlvbiA9IHsgcGFzc2l2ZTogdHJ1ZSB9O1xuXG5TdmdQYW5ab29tLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oc3ZnLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICB0aGlzLnN2ZyA9IHN2ZztcbiAgdGhpcy5kZWZzID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoXCJkZWZzXCIpO1xuXG4gIC8vIEFkZCBkZWZhdWx0IGF0dHJpYnV0ZXMgdG8gU1ZHXG4gIFN2Z1V0aWxzLnNldHVwU3ZnQXR0cmlidXRlcyh0aGlzLnN2Zyk7XG5cbiAgLy8gU2V0IG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gVXRpbHMuZXh0ZW5kKFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9uc0RlZmF1bHRzKSwgb3B0aW9ucyk7XG5cbiAgLy8gU2V0IGRlZmF1bHQgc3RhdGVcbiAgdGhpcy5zdGF0ZSA9IFwibm9uZVwiO1xuXG4gIC8vIEdldCBkaW1lbnNpb25zXG4gIHZhciBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkID0gU3ZnVXRpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZChcbiAgICBzdmdcbiAgKTtcbiAgdGhpcy53aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQud2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZC5oZWlnaHQ7XG5cbiAgLy8gSW5pdCBzaGFkb3cgdmlld3BvcnRcbiAgdGhpcy52aWV3cG9ydCA9IFNoYWRvd1ZpZXdwb3J0KFxuICAgIFN2Z1V0aWxzLmdldE9yQ3JlYXRlVmlld3BvcnQodGhpcy5zdmcsIHRoaXMub3B0aW9ucy52aWV3cG9ydFNlbGVjdG9yKSxcbiAgICB7XG4gICAgICBzdmc6IHRoaXMuc3ZnLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgZml0OiB0aGlzLm9wdGlvbnMuZml0LFxuICAgICAgY29udGFpbjogdGhpcy5vcHRpb25zLmNvbnRhaW4sXG4gICAgICBjZW50ZXI6IHRoaXMub3B0aW9ucy5jZW50ZXIsXG4gICAgICByZWZyZXNoUmF0ZTogdGhpcy5vcHRpb25zLnJlZnJlc2hSYXRlLFxuICAgICAgLy8gUHV0IGNhbGxiYWNrcyBpbnRvIGZ1bmN0aW9ucyBhcyB0aGV5IGNhbiBjaGFuZ2UgdGhyb3VnaCB0aW1lXG4gICAgICBiZWZvcmVab29tOiBmdW5jdGlvbihvbGRTY2FsZSwgbmV3U2NhbGUpIHtcbiAgICAgICAgaWYgKHRoYXQudmlld3BvcnQgJiYgdGhhdC5vcHRpb25zLmJlZm9yZVpvb20pIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25zLmJlZm9yZVpvb20ob2xkU2NhbGUsIG5ld1NjYWxlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uWm9vbTogZnVuY3Rpb24oc2NhbGUpIHtcbiAgICAgICAgaWYgKHRoYXQudmlld3BvcnQgJiYgdGhhdC5vcHRpb25zLm9uWm9vbSkge1xuICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbnMub25ab29tKHNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJlZm9yZVBhbjogZnVuY3Rpb24ob2xkUG9pbnQsIG5ld1BvaW50KSB7XG4gICAgICAgIGlmICh0aGF0LnZpZXdwb3J0ICYmIHRoYXQub3B0aW9ucy5iZWZvcmVQYW4pIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25zLmJlZm9yZVBhbihvbGRQb2ludCwgbmV3UG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25QYW46IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIGlmICh0aGF0LnZpZXdwb3J0ICYmIHRoYXQub3B0aW9ucy5vblBhbikge1xuICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbnMub25QYW4ocG9pbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25VcGRhdGVkQ1RNOiBmdW5jdGlvbihjdG0pIHtcbiAgICAgICAgaWYgKHRoYXQudmlld3BvcnQgJiYgdGhhdC5vcHRpb25zLm9uVXBkYXRlZENUTSkge1xuICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbnMub25VcGRhdGVkQ1RNKGN0bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG5cbiAgLy8gV3JhcCBjYWxsYmFja3MgaW50byBwdWJsaWMgQVBJIGNvbnRleHRcbiAgdmFyIHB1YmxpY0luc3RhbmNlID0gdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpO1xuICBwdWJsaWNJbnN0YW5jZS5zZXRCZWZvcmVab29tKHRoaXMub3B0aW9ucy5iZWZvcmVab29tKTtcbiAgcHVibGljSW5zdGFuY2Uuc2V0T25ab29tKHRoaXMub3B0aW9ucy5vblpvb20pO1xuICBwdWJsaWNJbnN0YW5jZS5zZXRCZWZvcmVQYW4odGhpcy5vcHRpb25zLmJlZm9yZVBhbik7XG4gIHB1YmxpY0luc3RhbmNlLnNldE9uUGFuKHRoaXMub3B0aW9ucy5vblBhbik7XG4gIHB1YmxpY0luc3RhbmNlLnNldE9uVXBkYXRlZENUTSh0aGlzLm9wdGlvbnMub25VcGRhdGVkQ1RNKTtcblxuICBpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQpIHtcbiAgICBDb250cm9sSWNvbnMuZW5hYmxlKHRoaXMpO1xuICB9XG5cbiAgLy8gSW5pdCBldmVudHMgaGFuZGxlcnNcbiAgdGhpcy5sYXN0TW91c2VXaGVlbEV2ZW50VGltZSA9IERhdGUubm93KCk7XG4gIHRoaXMuc2V0dXBIYW5kbGVycygpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBldmVudCBoYW5kbGVyc1xuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5zZXR1cEhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0aGF0ID0gdGhpcyxcbiAgICBwcmV2RXZ0ID0gbnVsbDsgLy8gdXNlIGZvciB0b3VjaHN0YXJ0IGV2ZW50IHRvIGRldGVjdCBkb3VibGUgdGFwXG5cbiAgdGhpcy5ldmVudExpc3RlbmVycyA9IHtcbiAgICAvLyBNb3VzZSBkb3duIGdyb3VwXG4gICAgbW91c2Vkb3duOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0aGF0LmhhbmRsZU1vdXNlRG93bihldnQsIHByZXZFdnQpO1xuICAgICAgcHJldkV2dCA9IGV2dDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0aGF0LmhhbmRsZU1vdXNlRG93bihldnQsIHByZXZFdnQpO1xuICAgICAgcHJldkV2dCA9IGV2dDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8vIE1vdXNlIHVwIGdyb3VwXG4gICAgbW91c2V1cDogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVVwKGV2dCk7XG4gICAgfSxcbiAgICB0b3VjaGVuZDogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVVwKGV2dCk7XG4gICAgfSxcblxuICAgIC8vIE1vdXNlIG1vdmUgZ3JvdXBcbiAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VNb3ZlKGV2dCk7XG4gICAgfSxcbiAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VNb3ZlKGV2dCk7XG4gICAgfSxcblxuICAgIC8vIE1vdXNlIGxlYXZlIGdyb3VwXG4gICAgbW91c2VsZWF2ZTogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZVVwKGV2dCk7XG4gICAgfSxcbiAgICB0b3VjaGxlYXZlOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlVXAoZXZ0KTtcbiAgICB9LFxuICAgIHRvdWNoY2FuY2VsOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlVXAoZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSW5pdCBjdXN0b20gZXZlbnRzIGhhbmRsZXIgaWYgYXZhaWxhYmxlXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21FdmVudHNIYW5kbGVyICE9IG51bGwpIHtcbiAgICB0aGlzLm9wdGlvbnMuY3VzdG9tRXZlbnRzSGFuZGxlci5pbml0KHtcbiAgICAgIHN2Z0VsZW1lbnQ6IHRoaXMuc3ZnLFxuICAgICAgZXZlbnRzTGlzdGVuZXJFbGVtZW50OiB0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50LFxuICAgICAgaW5zdGFuY2U6IHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKVxuICAgIH0pO1xuXG4gICAgLy8gQ3VzdG9tIGV2ZW50IGhhbmRsZXIgbWF5IGhhbHQgYnVpbHRpbiBsaXN0ZW5lcnNcbiAgICB2YXIgaGFsdEV2ZW50TGlzdGVuZXJzID0gdGhpcy5vcHRpb25zLmN1c3RvbUV2ZW50c0hhbmRsZXJcbiAgICAgIC5oYWx0RXZlbnRMaXN0ZW5lcnM7XG4gICAgaWYgKGhhbHRFdmVudExpc3RlbmVycyAmJiBoYWx0RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gaGFsdEV2ZW50TGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmhhc093blByb3BlcnR5KGhhbHRFdmVudExpc3RlbmVyc1tpXSkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyc1toYWx0RXZlbnRMaXN0ZW5lcnNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQmluZCBldmVudExpc3RlbmVyc1xuICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgLy8gQXR0YWNoIGV2ZW50IHRvIGV2ZW50c0xpc3RlbmVyRWxlbWVudCBvciBTVkcgaWYgbm90IGF2YWlsYWJsZVxuICAgICh0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50IHx8IHRoaXMuc3ZnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgZXZlbnQsXG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XSxcbiAgICAgICF0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCA/IHBhc3NpdmVMaXN0ZW5lck9wdGlvbiA6IGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIC8vIFpvb20gdXNpbmcgbW91c2Ugd2hlZWxcbiAgaWYgKHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQpIHtcbiAgICB0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkID0gZmFsc2U7IC8vIHNldCB0byBmYWxzZSBhcyBlbmFibGUgd2lsbCBzZXQgaXQgYmFjayB0byB0cnVlXG4gICAgdGhpcy5lbmFibGVNb3VzZVdoZWVsWm9vbSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEVuYWJsZSBhYmlsaXR5IHRvIHpvb20gdXNpbmcgbW91c2Ugd2hlZWxcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZW5hYmxlTW91c2VXaGVlbFpvb20gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgLy8gTW91c2Ugd2hlZWwgbGlzdGVuZXJcbiAgICB0aGlzLndoZWVsTGlzdGVuZXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlV2hlZWwoZXZ0KTtcbiAgICB9O1xuXG4gICAgLy8gQmluZCB3aGVlbExpc3RlbmVyXG4gICAgdmFyIGlzUGFzc2l2ZUxpc3RlbmVyID0gIXRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0O1xuICAgIFdoZWVsLm9uKFxuICAgICAgdGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCB8fCB0aGlzLnN2ZyxcbiAgICAgIHRoaXMud2hlZWxMaXN0ZW5lcixcbiAgICAgIGlzUGFzc2l2ZUxpc3RlbmVyXG4gICAgKTtcblxuICAgIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQgPSB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIERpc2FibGUgYWJpbGl0eSB0byB6b29tIHVzaW5nIG1vdXNlIHdoZWVsXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmRpc2FibGVNb3VzZVdoZWVsWm9vbSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCkge1xuICAgIHZhciBpc1Bhc3NpdmVMaXN0ZW5lciA9ICF0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdDtcbiAgICBXaGVlbC5vZmYoXG4gICAgICB0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50IHx8IHRoaXMuc3ZnLFxuICAgICAgdGhpcy53aGVlbExpc3RlbmVyLFxuICAgICAgaXNQYXNzaXZlTGlzdGVuZXJcbiAgICApO1xuICAgIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQgPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGUgbW91c2Ugd2hlZWwgZXZlbnRcbiAqXG4gKiBAcGFyYW0gIHtFdmVudH0gZXZ0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmhhbmRsZU1vdXNlV2hlZWwgPSBmdW5jdGlvbihldnQpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMuem9vbUVuYWJsZWQgfHwgdGhpcy5zdGF0ZSAhPT0gXCJub25lXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQpIHtcbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVmYXVsdCBkZWx0YSBpbiBjYXNlIHRoYXQgZGVsdGFZIGlzIG5vdCBhdmFpbGFibGVcbiAgdmFyIGRlbHRhID0gZXZ0LmRlbHRhWSB8fCAxLFxuICAgIHRpbWVEZWx0YSA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RNb3VzZVdoZWVsRXZlbnRUaW1lLFxuICAgIGRpdmlkZXIgPSAzICsgTWF0aC5tYXgoMCwgMzAgLSB0aW1lRGVsdGEpO1xuXG4gIC8vIFVwZGF0ZSBjYWNoZVxuICB0aGlzLmxhc3RNb3VzZVdoZWVsRXZlbnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAvLyBNYWtlIGVtcGlyaWNhbCBhZGp1c3RtZW50cyBmb3IgYnJvd3NlcnMgdGhhdCBnaXZlIGRlbHRhWSBpbiBwaXhlbHMgKGRlbHRhTW9kZT0wKVxuICBpZiAoXCJkZWx0YU1vZGVcIiBpbiBldnQgJiYgZXZ0LmRlbHRhTW9kZSA9PT0gMCAmJiBldnQud2hlZWxEZWx0YSkge1xuICAgIGRlbHRhID0gZXZ0LmRlbHRhWSA9PT0gMCA/IDAgOiBNYXRoLmFicyhldnQud2hlZWxEZWx0YSkgLyBldnQuZGVsdGFZO1xuICB9XG5cbiAgZGVsdGEgPVxuICAgIC0wLjMgPCBkZWx0YSAmJiBkZWx0YSA8IDAuM1xuICAgICAgPyBkZWx0YVxuICAgICAgOiAoKGRlbHRhID4gMCA/IDEgOiAtMSkgKiBNYXRoLmxvZyhNYXRoLmFicyhkZWx0YSkgKyAxMCkpIC8gZGl2aWRlcjtcblxuICB2YXIgaW52ZXJzZWRTY3JlZW5DVE0gPSB0aGlzLnN2Zy5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCksXG4gICAgcmVsYXRpdmVNb3VzZVBvaW50ID0gU3ZnVXRpbHMuZ2V0RXZlbnRQb2ludChldnQsIHRoaXMuc3ZnKS5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgICBpbnZlcnNlZFNjcmVlbkNUTVxuICAgICksXG4gICAgem9vbSA9IE1hdGgucG93KDEgKyB0aGlzLm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHksIC0xICogZGVsdGEpOyAvLyBtdWx0aXBseWluZyBieSBuZWcuIDEgc28gYXMgdG8gbWFrZSB6b29tIGluL291dCBiZWhhdmlvciBtYXRjaCBHb29nbGUgbWFwcyBiZWhhdmlvclxuXG4gIHRoaXMuem9vbUF0UG9pbnQoem9vbSwgcmVsYXRpdmVNb3VzZVBvaW50KTtcbn07XG5cbi8qKlxuICogWm9vbSBpbiBhdCBhIFNWRyBwb2ludFxuICpcbiAqIEBwYXJhbSAge1NWR1BvaW50fSBwb2ludFxuICogQHBhcmFtICB7RmxvYXR9IHpvb21TY2FsZSAgICBOdW1iZXIgcmVwcmVzZW50aW5nIGhvdyBtdWNoIHRvIHpvb21cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHpvb21BYnNvbHV0ZSBEZWZhdWx0IGZhbHNlLiBJZiB0cnVlLCB6b29tU2NhbGUgaXMgdHJlYXRlZCBhcyBhbiBhYnNvbHV0ZSB2YWx1ZS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlcndpc2UsIHpvb21TY2FsZSBpcyB0cmVhdGVkIGFzIGEgbXVsdGlwbGllZCAoZS5nLiAxLjEwIHdvdWxkIHpvb20gaW4gMTAlKVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS56b29tQXRQb2ludCA9IGZ1bmN0aW9uKHpvb21TY2FsZSwgcG9pbnQsIHpvb21BYnNvbHV0ZSkge1xuICB2YXIgb3JpZ2luYWxTdGF0ZSA9IHRoaXMudmlld3BvcnQuZ2V0T3JpZ2luYWxTdGF0ZSgpO1xuXG4gIGlmICghem9vbUFic29sdXRlKSB7XG4gICAgLy8gRml0IHpvb21TY2FsZSBpbiBzZXQgYm91bmRzXG4gICAgaWYgKFxuICAgICAgdGhpcy5nZXRab29tKCkgKiB6b29tU2NhbGUgPFxuICAgICAgdGhpcy5vcHRpb25zLm1pblpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb21cbiAgICApIHtcbiAgICAgIHpvb21TY2FsZSA9ICh0aGlzLm9wdGlvbnMubWluWm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbSkgLyB0aGlzLmdldFpvb20oKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5nZXRab29tKCkgKiB6b29tU2NhbGUgPlxuICAgICAgdGhpcy5vcHRpb25zLm1heFpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb21cbiAgICApIHtcbiAgICAgIHpvb21TY2FsZSA9ICh0aGlzLm9wdGlvbnMubWF4Wm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbSkgLyB0aGlzLmdldFpvb20oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRml0IHpvb21TY2FsZSBpbiBzZXQgYm91bmRzXG4gICAgem9vbVNjYWxlID0gTWF0aC5tYXgoXG4gICAgICB0aGlzLm9wdGlvbnMubWluWm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbSxcbiAgICAgIE1hdGgubWluKHRoaXMub3B0aW9ucy5tYXhab29tICogb3JpZ2luYWxTdGF0ZS56b29tLCB6b29tU2NhbGUpXG4gICAgKTtcbiAgICAvLyBGaW5kIHJlbGF0aXZlIHNjYWxlIHRvIGFjaGlldmUgZGVzaXJlZCBzY2FsZVxuICAgIHpvb21TY2FsZSA9IHpvb21TY2FsZSAvIHRoaXMuZ2V0Wm9vbSgpO1xuICB9XG5cbiAgdmFyIG9sZENUTSA9IHRoaXMudmlld3BvcnQuZ2V0Q1RNKCksXG4gICAgcmVsYXRpdmVQb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShvbGRDVE0uaW52ZXJzZSgpKSxcbiAgICBtb2RpZmllciA9IHRoaXMuc3ZnXG4gICAgICAuY3JlYXRlU1ZHTWF0cml4KClcbiAgICAgIC50cmFuc2xhdGUocmVsYXRpdmVQb2ludC54LCByZWxhdGl2ZVBvaW50LnkpXG4gICAgICAuc2NhbGUoem9vbVNjYWxlKVxuICAgICAgLnRyYW5zbGF0ZSgtcmVsYXRpdmVQb2ludC54LCAtcmVsYXRpdmVQb2ludC55KSxcbiAgICBuZXdDVE0gPSBvbGRDVE0ubXVsdGlwbHkobW9kaWZpZXIpO1xuXG4gIGlmIChuZXdDVE0uYSAhPT0gb2xkQ1RNLmEpIHtcbiAgICB0aGlzLnZpZXdwb3J0LnNldENUTShuZXdDVE0pO1xuICB9XG59O1xuXG4vKipcbiAqIFpvb20gYXQgY2VudGVyIHBvaW50XG4gKlxuICogQHBhcmFtICB7RmxvYXR9IHNjYWxlXG4gKiBAcGFyYW0gIHtCb29sZWFufSBhYnNvbHV0ZSBNYXJrcyB6b29tIHNjYWxlIGFzIHJlbGF0aXZlIG9yIGFic29sdXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnpvb20gPSBmdW5jdGlvbihzY2FsZSwgYWJzb2x1dGUpIHtcbiAgdGhpcy56b29tQXRQb2ludChcbiAgICBzY2FsZSxcbiAgICBTdmdVdGlscy5nZXRTdmdDZW50ZXJQb2ludCh0aGlzLnN2ZywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLFxuICAgIGFic29sdXRlXG4gICk7XG59O1xuXG4vKipcbiAqIFpvb20gdXNlZCBieSBwdWJsaWMgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtGbG9hdH0gc2NhbGVcbiAqIEBwYXJhbSAge0Jvb2xlYW59IGFic29sdXRlIE1hcmtzIHpvb20gc2NhbGUgYXMgcmVsYXRpdmUgb3IgYWJzb2x1dGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucHVibGljWm9vbSA9IGZ1bmN0aW9uKHNjYWxlLCBhYnNvbHV0ZSkge1xuICBpZiAoYWJzb2x1dGUpIHtcbiAgICBzY2FsZSA9IHRoaXMuY29tcHV0ZUZyb21SZWxhdGl2ZVpvb20oc2NhbGUpO1xuICB9XG5cbiAgdGhpcy56b29tKHNjYWxlLCBhYnNvbHV0ZSk7XG59O1xuXG4vKipcbiAqIFpvb20gYXQgcG9pbnQgdXNlZCBieSBwdWJsaWMgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtGbG9hdH0gc2NhbGVcbiAqIEBwYXJhbSAge1NWR1BvaW50fE9iamVjdH0gcG9pbnQgICAgQW4gb2JqZWN0IHRoYXQgaGFzIHggYW5kIHkgYXR0cmlidXRlc1xuICogQHBhcmFtICB7Qm9vbGVhbn0gYWJzb2x1dGUgTWFya3Mgem9vbSBzY2FsZSBhcyByZWxhdGl2ZSBvciBhYnNvbHV0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5wdWJsaWNab29tQXRQb2ludCA9IGZ1bmN0aW9uKHNjYWxlLCBwb2ludCwgYWJzb2x1dGUpIHtcbiAgaWYgKGFic29sdXRlKSB7XG4gICAgLy8gVHJhbnNmb3JtIHpvb20gaW50byBhIHJlbGF0aXZlIHZhbHVlXG4gICAgc2NhbGUgPSB0aGlzLmNvbXB1dGVGcm9tUmVsYXRpdmVab29tKHNjYWxlKTtcbiAgfVxuXG4gIC8vIElmIG5vdCBhIFNWR1BvaW50IGJ1dCBoYXMgeCBhbmQgeSB0aGVuIGNyZWF0ZSBhIFNWR1BvaW50XG4gIGlmIChVdGlscy5nZXRUeXBlKHBvaW50KSAhPT0gXCJTVkdQb2ludFwiKSB7XG4gICAgaWYgKFwieFwiIGluIHBvaW50ICYmIFwieVwiIGluIHBvaW50KSB7XG4gICAgICBwb2ludCA9IFN2Z1V0aWxzLmNyZWF0ZVNWR1BvaW50KHRoaXMuc3ZnLCBwb2ludC54LCBwb2ludC55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2l2ZW4gcG9pbnQgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnpvb21BdFBvaW50KHNjYWxlLCBwb2ludCwgYWJzb2x1dGUpO1xufTtcblxuLyoqXG4gKiBHZXQgem9vbSBzY2FsZVxuICpcbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmdldFpvb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmlld3BvcnQuZ2V0Wm9vbSgpO1xufTtcblxuLyoqXG4gKiBHZXQgem9vbSBzY2FsZSBmb3IgcHVibGljIHVzYWdlXG4gKlxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZ2V0UmVsYXRpdmVab29tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZpZXdwb3J0LmdldFJlbGF0aXZlWm9vbSgpO1xufTtcblxuLyoqXG4gKiBDb21wdXRlIGFjdHVhbCB6b29tIGZyb20gcHVibGljIHpvb21cbiAqXG4gKiBAcGFyYW0gIHtGbG9hdH0gem9vbVxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuY29tcHV0ZUZyb21SZWxhdGl2ZVpvb20gPSBmdW5jdGlvbih6b29tKSB7XG4gIHJldHVybiB6b29tICogdGhpcy52aWV3cG9ydC5nZXRPcmlnaW5hbFN0YXRlKCkuem9vbTtcbn07XG5cbi8qKlxuICogU2V0IHpvb20gdG8gaW5pdGlhbCBzdGF0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5yZXNldFpvb20gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9yaWdpbmFsU3RhdGUgPSB0aGlzLnZpZXdwb3J0LmdldE9yaWdpbmFsU3RhdGUoKTtcblxuICB0aGlzLnpvb20ob3JpZ2luYWxTdGF0ZS56b29tLCB0cnVlKTtcbn07XG5cbi8qKlxuICogU2V0IHBhbiB0byBpbml0aWFsIHN0YXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnJlc2V0UGFuID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFuKHRoaXMudmlld3BvcnQuZ2V0T3JpZ2luYWxTdGF0ZSgpKTtcbn07XG5cbi8qKlxuICogU2V0IHBhbiBhbmQgem9vbSB0byBpbml0aWFsIHN0YXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucmVzZXRab29tKCk7XG4gIHRoaXMucmVzZXRQYW4oKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGRvdWJsZSBjbGljayBldmVudFxuICogU2VlIGhhbmRsZU1vdXNlRG93bigpIGZvciBhbHRlcm5hdGUgZGV0ZWN0aW9uIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5oYW5kbGVEYmxDbGljayA9IGZ1bmN0aW9uKGV2dCkge1xuICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQpIHtcbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGFyZ2V0IHdhcyBhIGNvbnRyb2wgYnV0dG9uXG4gIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCkge1xuICAgIHZhciB0YXJnZXRDbGFzcyA9IGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIjtcbiAgICBpZiAodGFyZ2V0Q2xhc3MuaW5kZXhPZihcInN2Zy1wYW4tem9vbS1jb250cm9sXCIpID4gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgem9vbUZhY3RvcjtcblxuICBpZiAoZXZ0LnNoaWZ0S2V5KSB7XG4gICAgem9vbUZhY3RvciA9IDEgLyAoKDEgKyB0aGlzLm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHkpICogMik7IC8vIHpvb20gb3V0IHdoZW4gc2hpZnQga2V5IHByZXNzZWRcbiAgfSBlbHNlIHtcbiAgICB6b29tRmFjdG9yID0gKDEgKyB0aGlzLm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHkpICogMjtcbiAgfVxuXG4gIHZhciBwb2ludCA9IFN2Z1V0aWxzLmdldEV2ZW50UG9pbnQoZXZ0LCB0aGlzLnN2ZykubWF0cml4VHJhbnNmb3JtKFxuICAgIHRoaXMuc3ZnLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKVxuICApO1xuICB0aGlzLnpvb21BdFBvaW50KHpvb21GYWN0b3IsIHBvaW50KTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGNsaWNrIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uKGV2dCwgcHJldkV2dCkge1xuICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQpIHtcbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgVXRpbHMubW91c2VBbmRUb3VjaE5vcm1hbGl6ZShldnQsIHRoaXMuc3ZnKTtcblxuICAvLyBEb3VibGUgY2xpY2sgZGV0ZWN0aW9uOyBtb3JlIGNvbnNpc3RlbnQgdGhhbiBvbmRibGNsaWNrXG4gIGlmICh0aGlzLm9wdGlvbnMuZGJsQ2xpY2tab29tRW5hYmxlZCAmJiBVdGlscy5pc0RibENsaWNrKGV2dCwgcHJldkV2dCkpIHtcbiAgICB0aGlzLmhhbmRsZURibENsaWNrKGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gUGFuIG1vZGVcbiAgICB0aGlzLnN0YXRlID0gXCJwYW5cIjtcbiAgICB0aGlzLmZpcnN0RXZlbnRDVE0gPSB0aGlzLnZpZXdwb3J0LmdldENUTSgpO1xuICAgIHRoaXMuc3RhdGVPcmlnaW4gPSBTdmdVdGlscy5nZXRFdmVudFBvaW50KGV2dCwgdGhpcy5zdmcpLm1hdHJpeFRyYW5zZm9ybShcbiAgICAgIHRoaXMuZmlyc3RFdmVudENUTS5pbnZlcnNlKClcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZSBtb3VzZSBtb3ZlIGV2ZW50XG4gKlxuICogQHBhcmFtICB7RXZlbnR9IGV2dFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5oYW5kbGVNb3VzZU1vdmUgPSBmdW5jdGlvbihldnQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0KSB7XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnN0YXRlID09PSBcInBhblwiICYmIHRoaXMub3B0aW9ucy5wYW5FbmFibGVkKSB7XG4gICAgLy8gUGFuIG1vZGVcbiAgICB2YXIgcG9pbnQgPSBTdmdVdGlscy5nZXRFdmVudFBvaW50KGV2dCwgdGhpcy5zdmcpLm1hdHJpeFRyYW5zZm9ybShcbiAgICAgICAgdGhpcy5maXJzdEV2ZW50Q1RNLmludmVyc2UoKVxuICAgICAgKSxcbiAgICAgIHZpZXdwb3J0Q1RNID0gdGhpcy5maXJzdEV2ZW50Q1RNLnRyYW5zbGF0ZShcbiAgICAgICAgcG9pbnQueCAtIHRoaXMuc3RhdGVPcmlnaW4ueCxcbiAgICAgICAgcG9pbnQueSAtIHRoaXMuc3RhdGVPcmlnaW4ueVxuICAgICAgKTtcblxuICAgIHRoaXMudmlld3BvcnQuc2V0Q1RNKHZpZXdwb3J0Q1RNKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGUgbW91c2UgYnV0dG9uIHJlbGVhc2UgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uKGV2dCkge1xuICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQpIHtcbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuc3RhdGUgPT09IFwicGFuXCIpIHtcbiAgICAvLyBRdWl0IHBhbiBtb2RlXG4gICAgdGhpcy5zdGF0ZSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG4vKipcbiAqIEFkanVzdCB2aWV3cG9ydCBzaXplIChvbmx5KSBzbyBpdCB3aWxsIGZpdCBpbiBTVkdcbiAqIERvZXMgbm90IGNlbnRlciBpbWFnZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5maXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHZpZXdCb3ggPSB0aGlzLnZpZXdwb3J0LmdldFZpZXdCb3goKSxcbiAgICBuZXdTY2FsZSA9IE1hdGgubWluKFxuICAgICAgdGhpcy53aWR0aCAvIHZpZXdCb3gud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCAvIHZpZXdCb3guaGVpZ2h0XG4gICAgKTtcblxuICB0aGlzLnpvb20obmV3U2NhbGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBBZGp1c3Qgdmlld3BvcnQgc2l6ZSAob25seSkgc28gaXQgd2lsbCBjb250YWluIHRoZSBTVkdcbiAqIERvZXMgbm90IGNlbnRlciBpbWFnZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5jb250YWluID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2aWV3Qm94ID0gdGhpcy52aWV3cG9ydC5nZXRWaWV3Qm94KCksXG4gICAgbmV3U2NhbGUgPSBNYXRoLm1heChcbiAgICAgIHRoaXMud2lkdGggLyB2aWV3Qm94LndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQgLyB2aWV3Qm94LmhlaWdodFxuICAgICk7XG5cbiAgdGhpcy56b29tKG5ld1NjYWxlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogQWRqdXN0IHZpZXdwb3J0IHBhbiAob25seSkgc28gaXQgd2lsbCBiZSBjZW50ZXJlZCBpbiBTVkdcbiAqIERvZXMgbm90IHpvb20vZml0L2NvbnRhaW4gaW1hZ2VcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuY2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciB2aWV3Qm94ID0gdGhpcy52aWV3cG9ydC5nZXRWaWV3Qm94KCksXG4gICAgb2Zmc2V0WCA9XG4gICAgICAodGhpcy53aWR0aCAtICh2aWV3Qm94LndpZHRoICsgdmlld0JveC54ICogMikgKiB0aGlzLmdldFpvb20oKSkgKiAwLjUsXG4gICAgb2Zmc2V0WSA9XG4gICAgICAodGhpcy5oZWlnaHQgLSAodmlld0JveC5oZWlnaHQgKyB2aWV3Qm94LnkgKiAyKSAqIHRoaXMuZ2V0Wm9vbSgpKSAqIDAuNTtcblxuICB0aGlzLmdldFB1YmxpY0luc3RhbmNlKCkucGFuKHsgeDogb2Zmc2V0WCwgeTogb2Zmc2V0WSB9KTtcbn07XG5cbi8qKlxuICogVXBkYXRlIGNvbnRlbnQgY2FjaGVkIEJvcmRlckJveFxuICogVXNlIHdoZW4gdmlld3BvcnQgY29udGVudHMgY2hhbmdlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnVwZGF0ZUJCb3ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52aWV3cG9ydC5zaW1wbGVWaWV3Qm94Q2FjaGUoKTtcbn07XG5cbi8qKlxuICogUGFuIHRvIGEgcmVuZGVyZWQgcG9zaXRpb25cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBvaW50IHt4OiAwLCB5OiAwfVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5wYW4gPSBmdW5jdGlvbihwb2ludCkge1xuICB2YXIgdmlld3BvcnRDVE0gPSB0aGlzLnZpZXdwb3J0LmdldENUTSgpO1xuICB2aWV3cG9ydENUTS5lID0gcG9pbnQueDtcbiAgdmlld3BvcnRDVE0uZiA9IHBvaW50Lnk7XG4gIHRoaXMudmlld3BvcnQuc2V0Q1RNKHZpZXdwb3J0Q1RNKTtcbn07XG5cbi8qKlxuICogUmVsYXRpdmVseSBwYW4gdGhlIGdyYXBoIGJ5IGEgc3BlY2lmaWVkIHJlbmRlcmVkIHBvc2l0aW9uIHZlY3RvclxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcG9pbnQge3g6IDAsIHk6IDB9XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnBhbkJ5ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgdmFyIHZpZXdwb3J0Q1RNID0gdGhpcy52aWV3cG9ydC5nZXRDVE0oKTtcbiAgdmlld3BvcnRDVE0uZSArPSBwb2ludC54O1xuICB2aWV3cG9ydENUTS5mICs9IHBvaW50Lnk7XG4gIHRoaXMudmlld3BvcnQuc2V0Q1RNKHZpZXdwb3J0Q1RNKTtcbn07XG5cbi8qKlxuICogR2V0IHBhbiB2ZWN0b3JcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHt4OiAwLCB5OiAwfVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5nZXRQYW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy52aWV3cG9ydC5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB7IHg6IHN0YXRlLngsIHk6IHN0YXRlLnkgfTtcbn07XG5cbi8qKlxuICogUmVjYWxjdWxhdGVzIGNhY2hlZCBzdmcgZGltZW5zaW9ucyBhbmQgY29udHJvbHMgcG9zaXRpb25cbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIC8vIEdldCBkaW1lbnNpb25zXG4gIHZhciBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkID0gU3ZnVXRpbHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZChcbiAgICB0aGlzLnN2Z1xuICApO1xuICB0aGlzLndpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZC53aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkLmhlaWdodDtcblxuICAvLyBSZWNhbGN1bGF0ZSBvcmlnaW5hbCBzdGF0ZVxuICB2YXIgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0O1xuICB2aWV3cG9ydC5vcHRpb25zLndpZHRoID0gdGhpcy53aWR0aDtcbiAgdmlld3BvcnQub3B0aW9ucy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgdmlld3BvcnQucHJvY2Vzc0NUTSgpO1xuXG4gIC8vIFJlcG9zaXRpb24gY29udHJvbCBpY29ucyBieSByZS1lbmFibGluZyB0aGVtXG4gIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCkge1xuICAgIHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKS5kaXNhYmxlQ29udHJvbEljb25zKCk7XG4gICAgdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpLmVuYWJsZUNvbnRyb2xJY29ucygpO1xuICB9XG59O1xuXG4vKipcbiAqIFVuYmluZCBtb3VzZSBldmVudHMsIGZyZWUgY2FsbGJhY2tzIGFuZCBkZXN0cm95IHB1YmxpYyBpbnN0YW5jZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICAvLyBGcmVlIGNhbGxiYWNrc1xuICB0aGlzLmJlZm9yZVpvb20gPSBudWxsO1xuICB0aGlzLm9uWm9vbSA9IG51bGw7XG4gIHRoaXMuYmVmb3JlUGFuID0gbnVsbDtcbiAgdGhpcy5vblBhbiA9IG51bGw7XG4gIHRoaXMub25VcGRhdGVkQ1RNID0gbnVsbDtcblxuICAvLyBEZXN0cm95IGN1c3RvbSBldmVudCBoYW5kbGVyc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tRXZlbnRzSGFuZGxlciAhPSBudWxsKSB7XG4gICAgdGhpcy5vcHRpb25zLmN1c3RvbUV2ZW50c0hhbmRsZXIuZGVzdHJveSh7XG4gICAgICBzdmdFbGVtZW50OiB0aGlzLnN2ZyxcbiAgICAgIGV2ZW50c0xpc3RlbmVyRWxlbWVudDogdGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCxcbiAgICAgIGluc3RhbmNlOiB0aGlzLmdldFB1YmxpY0luc3RhbmNlKClcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVuYmluZCBldmVudExpc3RlbmVyc1xuICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgKHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQgfHwgdGhpcy5zdmcpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBldmVudCxcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLFxuICAgICAgIXRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0ID8gcGFzc2l2ZUxpc3RlbmVyT3B0aW9uIDogZmFsc2VcbiAgICApO1xuICB9XG5cbiAgLy8gVW5iaW5kIHdoZWVsTGlzdGVuZXJcbiAgdGhpcy5kaXNhYmxlTW91c2VXaGVlbFpvb20oKTtcblxuICAvLyBSZW1vdmUgY29udHJvbCBpY29uc1xuICB0aGlzLmdldFB1YmxpY0luc3RhbmNlKCkuZGlzYWJsZUNvbnRyb2xJY29ucygpO1xuXG4gIC8vIFJlc2V0IHpvb20gYW5kIHBhblxuICB0aGlzLnJlc2V0KCk7XG5cbiAgLy8gUmVtb3ZlIGluc3RhbmNlIGZyb20gaW5zdGFuY2VzU3RvcmVcbiAgaW5zdGFuY2VzU3RvcmUgPSBpbnN0YW5jZXNTdG9yZS5maWx0ZXIoZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2Uuc3ZnICE9PSB0aGF0LnN2ZztcbiAgfSk7XG5cbiAgLy8gRGVsZXRlIG9wdGlvbnMgYW5kIGl0cyBjb250ZW50c1xuICBkZWxldGUgdGhpcy5vcHRpb25zO1xuXG4gIC8vIERlbGV0ZSB2aWV3cG9ydCB0byBtYWtlIHB1YmxpYyBzaGFkb3cgdmlld3BvcnQgZnVuY3Rpb25zIHVuY2FsbGFibGVcbiAgZGVsZXRlIHRoaXMudmlld3BvcnQ7XG5cbiAgLy8gRGVzdHJveSBwdWJsaWMgaW5zdGFuY2UgYW5kIHJld3JpdGUgZ2V0UHVibGljSW5zdGFuY2VcbiAgZGVsZXRlIHRoaXMucHVibGljSW5zdGFuY2U7XG4gIGRlbGV0ZSB0aGlzLnBpO1xuICB0aGlzLmdldFB1YmxpY0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBwdWJsaWMgaW5zdGFuY2Ugb2JqZWN0XG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBQdWJsaWMgaW5zdGFuY2Ugb2JqZWN0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmdldFB1YmxpY0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICAvLyBDcmVhdGUgY2FjaGVcbiAgaWYgKCF0aGlzLnB1YmxpY0luc3RhbmNlKSB7XG4gICAgdGhpcy5wdWJsaWNJbnN0YW5jZSA9IHRoaXMucGkgPSB7XG4gICAgICAvLyBQYW5cbiAgICAgIGVuYWJsZVBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5wYW5FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZVBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5wYW5FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGlzUGFuRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoYXQub3B0aW9ucy5wYW5FbmFibGVkO1xuICAgICAgfSxcbiAgICAgIHBhbjogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgdGhhdC5wYW4ocG9pbnQpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBwYW5CeTogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgdGhhdC5wYW5CeShwb2ludCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGdldFBhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGF0LmdldFBhbigpO1xuICAgICAgfSxcbiAgICAgIC8vIFBhbiBldmVudFxuICAgICAgc2V0QmVmb3JlUGFuOiBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuYmVmb3JlUGFuID1cbiAgICAgICAgICBmbiA9PT0gbnVsbCA/IG51bGwgOiBVdGlscy5wcm94eShmbiwgdGhhdC5wdWJsaWNJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHNldE9uUGFuOiBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMub25QYW4gPVxuICAgICAgICAgIGZuID09PSBudWxsID8gbnVsbCA6IFV0aWxzLnByb3h5KGZuLCB0aGF0LnB1YmxpY0luc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gWm9vbSBhbmQgQ29udHJvbCBJY29uc1xuICAgICAgZW5hYmxlWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy56b29tRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLnpvb21FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGlzWm9vbUVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGF0Lm9wdGlvbnMuem9vbUVuYWJsZWQ7XG4gICAgICB9LFxuICAgICAgZW5hYmxlQ29udHJvbEljb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCkge1xuICAgICAgICAgIHRoYXQub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICBDb250cm9sSWNvbnMuZW5hYmxlKHRoYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVDb250cm9sSWNvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhhdC5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQpIHtcbiAgICAgICAgICB0aGF0Lm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIENvbnRyb2xJY29ucy5kaXNhYmxlKHRoYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGlzQ29udHJvbEljb25zRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoYXQub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkO1xuICAgICAgfSxcbiAgICAgIC8vIERvdWJsZSBjbGljayB6b29tXG4gICAgICBlbmFibGVEYmxDbGlja1pvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuZGJsQ2xpY2tab29tRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGRpc2FibGVEYmxDbGlja1pvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuZGJsQ2xpY2tab29tRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBpc0RibENsaWNrWm9vbUVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGF0Lm9wdGlvbnMuZGJsQ2xpY2tab29tRW5hYmxlZDtcbiAgICAgIH0sXG4gICAgICAvLyBNb3VzZSB3aGVlbCB6b29tXG4gICAgICBlbmFibGVNb3VzZVdoZWVsWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZW5hYmxlTW91c2VXaGVlbFpvb20oKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZU1vdXNlV2hlZWxab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5kaXNhYmxlTW91c2VXaGVlbFpvb20oKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgaXNNb3VzZVdoZWVsWm9vbUVuYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gISF0aGF0Lm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkO1xuICAgICAgfSxcbiAgICAgIC8vIFpvb20gc2NhbGUgYW5kIGJvdW5kc1xuICAgICAgc2V0Wm9vbVNjYWxlU2Vuc2l0aXZpdHk6IGZ1bmN0aW9uKHNjYWxlKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSA9IHNjYWxlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBzZXRNaW5ab29tOiBmdW5jdGlvbih6b29tKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5taW5ab29tID0gem9vbTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgc2V0TWF4Wm9vbTogZnVuY3Rpb24oem9vbSkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMubWF4Wm9vbSA9IHpvb207XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIFpvb20gZXZlbnRcbiAgICAgIHNldEJlZm9yZVpvb206IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5iZWZvcmVab29tID1cbiAgICAgICAgICBmbiA9PT0gbnVsbCA/IG51bGwgOiBVdGlscy5wcm94eShmbiwgdGhhdC5wdWJsaWNJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHNldE9uWm9vbTogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLm9uWm9vbSA9XG4gICAgICAgICAgZm4gPT09IG51bGwgPyBudWxsIDogVXRpbHMucHJveHkoZm4sIHRoYXQucHVibGljSW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBab29taW5nXG4gICAgICB6b29tOiBmdW5jdGlvbihzY2FsZSkge1xuICAgICAgICB0aGF0LnB1YmxpY1pvb20oc2NhbGUsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICB6b29tQnk6IGZ1bmN0aW9uKHNjYWxlKSB7XG4gICAgICAgIHRoYXQucHVibGljWm9vbShzY2FsZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICB6b29tQXRQb2ludDogZnVuY3Rpb24oc2NhbGUsIHBvaW50KSB7XG4gICAgICAgIHRoYXQucHVibGljWm9vbUF0UG9pbnQoc2NhbGUsIHBvaW50LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgem9vbUF0UG9pbnRCeTogZnVuY3Rpb24oc2NhbGUsIHBvaW50KSB7XG4gICAgICAgIHRoYXQucHVibGljWm9vbUF0UG9pbnQoc2NhbGUsIHBvaW50LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHpvb21JbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuem9vbUJ5KDEgKyB0aGF0Lm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHkpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICB6b29tT3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy56b29tQnkoMSAvICgxICsgdGhhdC5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5KSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGdldFpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhhdC5nZXRSZWxhdGl2ZVpvb20oKTtcbiAgICAgIH0sXG4gICAgICAvLyBDVE0gdXBkYXRlXG4gICAgICBzZXRPblVwZGF0ZWRDVE06IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5vblVwZGF0ZWRDVE0gPVxuICAgICAgICAgIGZuID09PSBudWxsID8gbnVsbCA6IFV0aWxzLnByb3h5KGZuLCB0aGF0LnB1YmxpY0luc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gUmVzZXRcbiAgICAgIHJlc2V0Wm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQucmVzZXRab29tKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHJlc2V0UGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZXNldFBhbigpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gRml0LCBDb250YWluIGFuZCBDZW50ZXJcbiAgICAgIGZpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZml0KCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmNvbnRhaW4oKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgY2VudGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5jZW50ZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gU2l6ZSBhbmQgUmVzaXplXG4gICAgICB1cGRhdGVCQm94OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC51cGRhdGVCQm94KCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQucmVzaXplKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGdldFNpemVzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogdGhhdC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoYXQuaGVpZ2h0LFxuICAgICAgICAgIHJlYWxab29tOiB0aGF0LmdldFpvb20oKSxcbiAgICAgICAgICB2aWV3Qm94OiB0aGF0LnZpZXdwb3J0LmdldFZpZXdCb3goKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC8vIERlc3Ryb3lcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnB1YmxpY0luc3RhbmNlO1xufTtcblxuLyoqXG4gKiBTdG9yZXMgcGFpcnMgb2YgaW5zdGFuY2VzIG9mIFN2Z1Bhblpvb20gYW5kIFNWR1xuICogRWFjaCBwYWlyIGlzIHJlcHJlc2VudGVkIGJ5IGFuIG9iamVjdCB7c3ZnOiBTVkdTVkdFbGVtZW50LCBpbnN0YW5jZTogU3ZnUGFuWm9vbX1cbiAqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBpbnN0YW5jZXNTdG9yZSA9IFtdO1xuXG52YXIgc3ZnUGFuWm9vbSA9IGZ1bmN0aW9uKGVsZW1lbnRPclNlbGVjdG9yLCBvcHRpb25zKSB7XG4gIHZhciBzdmcgPSBVdGlscy5nZXRTdmcoZWxlbWVudE9yU2VsZWN0b3IpO1xuXG4gIGlmIChzdmcgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICAvLyBMb29rIGZvciBleGlzdGVudCBpbnN0YW5jZVxuICAgIGZvciAodmFyIGkgPSBpbnN0YW5jZXNTdG9yZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKGluc3RhbmNlc1N0b3JlW2ldLnN2ZyA9PT0gc3ZnKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZXNTdG9yZVtpXS5pbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGluc3RhbmNlIG5vdCBmb3VuZCAtIGNyZWF0ZSBvbmVcbiAgICBpbnN0YW5jZXNTdG9yZS5wdXNoKHtcbiAgICAgIHN2Zzogc3ZnLFxuICAgICAgaW5zdGFuY2U6IG5ldyBTdmdQYW5ab29tKHN2Zywgb3B0aW9ucylcbiAgICB9KTtcblxuICAgIC8vIFJldHVybiBqdXN0IHB1c2hlZCBpbnN0YW5jZVxuICAgIHJldHVybiBpbnN0YW5jZXNTdG9yZVtcbiAgICAgIGluc3RhbmNlc1N0b3JlLmxlbmd0aCAtIDFcbiAgICBdLmluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3ZnUGFuWm9vbTtcbiIsInZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKSxcbiAgX2Jyb3dzZXIgPSBcInVua25vd25cIjtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85ODQ3NTgwL2hvdy10by1kZXRlY3Qtc2FmYXJpLWNocm9tZS1pZS1maXJlZm94LWFuZC1vcGVyYS1icm93c2VyXG5pZiAoLypAY2Nfb24hQCovIGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG4gIC8vIGludGVybmV0IGV4cGxvcmVyXG4gIF9icm93c2VyID0gXCJpZVwiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3ZnTlM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeG1sTlM6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zTlM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIixcbiAgeGxpbmtOUzogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIGV2TlM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzXCIsXG5cbiAgLyoqXG4gICAqIEdldCBzdmcgZGltZW5zaW9uczogd2lkdGggYW5kIGhlaWdodFxuICAgKlxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAge3dpZHRoOiAwLCBoZWlnaHQ6IDB9XG4gICAqL1xuICBnZXRCb3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkOiBmdW5jdGlvbihzdmcpIHtcbiAgICBpZiAoc3ZnLmNsaWVudFdpZHRoICYmIHN2Zy5jbGllbnRIZWlnaHQpIHtcbiAgICAgIHJldHVybiB7IHdpZHRoOiBzdmcuY2xpZW50V2lkdGgsIGhlaWdodDogc3ZnLmNsaWVudEhlaWdodCB9O1xuICAgIH0gZWxzZSBpZiAoISFzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpIHtcbiAgICAgIHJldHVybiBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBnZXQgQm91bmRpbmdDbGllbnRSZWN0IGZvciBTVkcuXCIpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0cyBnIGVsZW1lbnQgd2l0aCBjbGFzcyBvZiBcInZpZXdwb3J0XCIgb3IgY3JlYXRlcyBpdCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAqXG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKiBAcmV0dXJuIHtTVkdFbGVtZW50fSAgICAgZyAoZ3JvdXApIGVsZW1lbnRcbiAgICovXG4gIGdldE9yQ3JlYXRlVmlld3BvcnQ6IGZ1bmN0aW9uKHN2Zywgc2VsZWN0b3IpIHtcbiAgICB2YXIgdmlld3BvcnQgPSBudWxsO1xuXG4gICAgaWYgKFV0aWxzLmlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIHZpZXdwb3J0ID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdwb3J0ID0gc3ZnLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGp1c3Qgb25lIG1haW4gZ3JvdXAgaW4gU1ZHXG4gICAgaWYgKCF2aWV3cG9ydCkge1xuICAgICAgdmFyIGNoaWxkTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwoc3ZnLmNoaWxkTm9kZXMgfHwgc3ZnLmNoaWxkcmVuKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSBcImRlZnNcIiAmJiBlbC5ub2RlTmFtZSAhPT0gXCIjdGV4dFwiO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gTm9kZSBuYW1lIHNob3VsZCBiZSBTVkdHRWxlbWVudCBhbmQgc2hvdWxkIGhhdmUgbm8gdHJhbnNmb3JtIGF0dHJpYnV0ZVxuICAgICAgLy8gR3JvdXBzIHdpdGggdHJhbnNmb3JtIGFyZSBub3QgdXNlZCBhcyB2aWV3cG9ydCBiZWNhdXNlIGl0IGludm9sdmVzIHBhcnNpbmcgb2YgYWxsIHRyYW5zZm9ybSBwb3NzaWJpbGl0aWVzXG4gICAgICBpZiAoXG4gICAgICAgIGNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgIGNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT09IFwiZ1wiICYmXG4gICAgICAgIGNoaWxkTm9kZXNbMF0uZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpID09PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmlld3BvcnQgPSBjaGlsZE5vZGVzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIGZhdm9yYWJsZSBncm91cCBlbGVtZW50IGV4aXN0cyB0aGVuIGNyZWF0ZSBvbmVcbiAgICBpZiAoIXZpZXdwb3J0KSB7XG4gICAgICB2YXIgdmlld3BvcnRJZCA9XG4gICAgICAgIFwidmlld3BvcnQtXCIgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgdmlld3BvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5zdmdOUywgXCJnXCIpO1xuICAgICAgdmlld3BvcnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgdmlld3BvcnRJZCk7XG5cbiAgICAgIC8vIEludGVybmV0IEV4cGxvcmVyIChhbGwgdmVyc2lvbnM/KSBjYW4ndCB1c2UgY2hpbGROb2RlcywgYnV0IG90aGVyIGJyb3dzZXJzIHByZWZlciAocmVxdWlyZT8pIHVzaW5nIGNoaWxkTm9kZXNcbiAgICAgIHZhciBzdmdDaGlsZHJlbiA9IHN2Zy5jaGlsZE5vZGVzIHx8IHN2Zy5jaGlsZHJlbjtcbiAgICAgIGlmICghIXN2Z0NoaWxkcmVuICYmIHN2Z0NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN2Z0NoaWxkcmVuLmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgIC8vIE1vdmUgZXZlcnl0aGluZyBpbnRvIHZpZXdwb3J0IGV4Y2VwdCBkZWZzXG4gICAgICAgICAgaWYgKHN2Z0NoaWxkcmVuW3N2Z0NoaWxkcmVuLmxlbmd0aCAtIGldLm5vZGVOYW1lICE9PSBcImRlZnNcIikge1xuICAgICAgICAgICAgdmlld3BvcnQuYXBwZW5kQ2hpbGQoc3ZnQ2hpbGRyZW5bc3ZnQ2hpbGRyZW4ubGVuZ3RoIC0gaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3ZnLmFwcGVuZENoaWxkKHZpZXdwb3J0KTtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBjbGFzcyBuYW1lc1xuICAgIHZhciBjbGFzc05hbWVzID0gW107XG4gICAgaWYgKHZpZXdwb3J0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKSB7XG4gICAgICBjbGFzc05hbWVzID0gdmlld3BvcnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cblxuICAgIC8vIFNldCBjbGFzcyAoaWYgbm90IHNldCBhbHJlYWR5KVxuICAgIGlmICghfmNsYXNzTmFtZXMuaW5kZXhPZihcInN2Zy1wYW4tem9vbV92aWV3cG9ydFwiKSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKFwic3ZnLXBhbi16b29tX3ZpZXdwb3J0XCIpO1xuICAgICAgdmlld3BvcnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXdwb3J0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgU1ZHIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqL1xuICBzZXR1cFN2Z0F0dHJpYnV0ZXM6IGZ1bmN0aW9uKHN2Zykge1xuICAgIC8vIFNldHRpbmcgZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIHRoaXMuc3ZnTlMpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyh0aGlzLnhtbG5zTlMsIFwieG1sbnM6eGxpbmtcIiwgdGhpcy54bGlua05TKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlModGhpcy54bWxuc05TLCBcInhtbG5zOmV2XCIsIHRoaXMuZXZOUyk7XG5cbiAgICAvLyBOZWVkZWQgZm9yIEludGVybmV0IEV4cGxvcmVyLCBvdGhlcndpc2UgdGhlIHZpZXdwb3J0IG92ZXJmbG93c1xuICAgIGlmIChzdmcucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFyIHN0eWxlID0gc3ZnLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCI7XG4gICAgICBpZiAoc3R5bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwib3ZlcmZsb3dcIikgPT09IC0xKSB7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm92ZXJmbG93OiBoaWRkZW47IFwiICsgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSG93IGxvbmcgSW50ZXJuZXQgRXhwbG9yZXIgdGFrZXMgdG8gZmluaXNoIHVwZGF0aW5nIGl0cyBkaXNwbGF5IChtcykuXG4gICAqL1xuICBpbnRlcm5ldEV4cGxvcmVyUmVkaXNwbGF5SW50ZXJ2YWw6IDMwMCxcblxuICAvKipcbiAgICogRm9yY2VzIHRoZSBicm93c2VyIHRvIHJlZGlzcGxheSBhbGwgU1ZHIGVsZW1lbnRzIHRoYXQgcmVseSBvbiBhblxuICAgKiBlbGVtZW50IGRlZmluZWQgaW4gYSAnZGVmcycgc2VjdGlvbi4gSXQgd29ya3MgZ2xvYmFsbHksIGZvciBldmVyeVxuICAgKiBhdmFpbGFibGUgZGVmcyBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICAgKiBUaGUgdGhyb3R0bGluZyBpcyBpbnRlbnRpb25hbGx5IGdsb2JhbC5cbiAgICpcbiAgICogVGhpcyBpcyBvbmx5IG5lZWRlZCBmb3IgSUUuIEl0IGlzIGFzIGEgaGFjayB0byBtYWtlIG1hcmtlcnMgKGFuZCAndXNlJyBlbGVtZW50cz8pXG4gICAqIHZpc2libGUgYWZ0ZXIgcGFuL3pvb20gd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgU1ZHcyBvbiB0aGUgcGFnZS5cbiAgICogU2VlIGJ1ZyByZXBvcnQ6IGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvNzgxOTY0L1xuICAgKiBhbHNvIHNlZSBzdmctcGFuLXpvb20gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcml1dHRhL3N2Zy1wYW4tem9vbS9pc3N1ZXMvNjJcbiAgICovXG4gIHJlZnJlc2hEZWZzR2xvYmFsOiBVdGlscy50aHJvdHRsZShcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbGxEZWZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRlZnNcIik7XG4gICAgICB2YXIgYWxsRGVmc0NvdW50ID0gYWxsRGVmcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbERlZnNDb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciB0aGlzRGVmcyA9IGFsbERlZnNbaV07XG4gICAgICAgIHRoaXNEZWZzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNEZWZzLCB0aGlzRGVmcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0aGlzID8gdGhpcy5pbnRlcm5ldEV4cGxvcmVyUmVkaXNwbGF5SW50ZXJ2YWwgOiBudWxsXG4gICksXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgdHJhbnNmb3JtIG1hdHJpeCBvZiBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U1ZHRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge1NWR01hdHJpeH0gbWF0cml4ICBDVE1cbiAgICogQHBhcmFtIHtTVkdFbGVtZW50fSBkZWZzXG4gICAqL1xuICBzZXRDVE06IGZ1bmN0aW9uKGVsZW1lbnQsIG1hdHJpeCwgZGVmcykge1xuICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgIHMgPVxuICAgICAgICBcIm1hdHJpeChcIiArXG4gICAgICAgIG1hdHJpeC5hICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBtYXRyaXguYiArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgbWF0cml4LmMgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5kICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBtYXRyaXguZSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgbWF0cml4LmYgK1xuICAgICAgICBcIilcIjtcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ0cmFuc2Zvcm1cIiwgcyk7XG4gICAgaWYgKFwidHJhbnNmb3JtXCIgaW4gZWxlbWVudC5zdHlsZSkge1xuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBzO1xuICAgIH0gZWxzZSBpZiAoXCItbXMtdHJhbnNmb3JtXCIgaW4gZWxlbWVudC5zdHlsZSkge1xuICAgICAgZWxlbWVudC5zdHlsZVtcIi1tcy10cmFuc2Zvcm1cIl0gPSBzO1xuICAgIH0gZWxzZSBpZiAoXCItd2Via2l0LXRyYW5zZm9ybVwiIGluIGVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbXCItd2Via2l0LXRyYW5zZm9ybVwiXSA9IHM7XG4gICAgfVxuXG4gICAgLy8gSUUgaGFzIGEgYnVnIHRoYXQgbWFrZXMgbWFya2VycyBkaXNhcHBlYXIgb24gem9vbSAod2hlbiB0aGUgbWF0cml4IFwiYVwiIGFuZC9vciBcImRcIiBlbGVtZW50cyBjaGFuZ2UpXG4gICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTc2NTQ1Nzgvc3ZnLW1hcmtlci1kb2VzLW5vdC13b3JrLWluLWllOS0xMFxuICAgIC8vIGFuZCBodHRwOi8vc3JuZG9saGEud29yZHByZXNzLmNvbS8yMDEzLzExLzI1L3N2Zy1saW5lLW1hcmtlcnMtbWF5LWRpc2FwcGVhci1pbi1pbnRlcm5ldC1leHBsb3Jlci0xMS9cbiAgICBpZiAoX2Jyb3dzZXIgPT09IFwiaWVcIiAmJiAhIWRlZnMpIHtcbiAgICAgIC8vIHRoaXMgcmVmcmVzaCBpcyBpbnRlbmRlZCBmb3IgcmVkaXNwbGF5aW5nIHRoZSBTVkcgZHVyaW5nIHpvb21pbmdcbiAgICAgIGRlZnMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGVmcywgZGVmcyk7XG4gICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgaW50ZW5kZWQgZm9yIHJlZGlzcGxheWluZyB0aGUgb3RoZXIgU1ZHcyBvbiBhIHBhZ2Ugd2hlbiBwYW5uaW5nIGEgZ2l2ZW4gU1ZHXG4gICAgICAvLyBpdCBpcyBhbHNvIG5lZWRlZCBmb3IgdGhlIGdpdmVuIFNWRyBpdHNlbGYsIG9uIHpvb21FbmQsIGlmIHRoZSBTVkcgY29udGFpbnMgYW55IG1hcmtlcnMgdGhhdFxuICAgICAgLy8gYXJlIGxvY2F0ZWQgdW5kZXIgYW55IG90aGVyIGVsZW1lbnQocykuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZWZyZXNoRGVmc0dsb2JhbCgpO1xuICAgICAgfSwgdGhhdC5pbnRlcm5ldEV4cGxvcmVyUmVkaXNwbGF5SW50ZXJ2YWwpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgYW4gU1ZHUG9pbnQgb2JqZWN0IHdpdGggZ2l2ZW4gZXZlbnQgY29vcmRpbmF0ZXNcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKiBAcmV0dXJuIHtTVkdQb2ludH0gICAgIHBvaW50XG4gICAqL1xuICBnZXRFdmVudFBvaW50OiBmdW5jdGlvbihldnQsIHN2Zykge1xuICAgIHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXG4gICAgVXRpbHMubW91c2VBbmRUb3VjaE5vcm1hbGl6ZShldnQsIHN2Zyk7XG5cbiAgICBwb2ludC54ID0gZXZ0LmNsaWVudFg7XG4gICAgcG9pbnQueSA9IGV2dC5jbGllbnRZO1xuXG4gICAgcmV0dXJuIHBvaW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgU1ZHIGNlbnRlciBwb2ludFxuICAgKlxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICogQHJldHVybiB7U1ZHUG9pbnR9XG4gICAqL1xuICBnZXRTdmdDZW50ZXJQb2ludDogZnVuY3Rpb24oc3ZnLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlU1ZHUG9pbnQoc3ZnLCB3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBTVkdQb2ludCB3aXRoIGdpdmVuIHggYW5kIHlcbiAgICpcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqIEBwYXJhbSAge051bWJlcn0geFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAgICogQHJldHVybiB7U1ZHUG9pbnR9XG4gICAqL1xuICBjcmVhdGVTVkdQb2ludDogZnVuY3Rpb24oc3ZnLCB4LCB5KSB7XG4gICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgcG9pbnQueCA9IHg7XG4gICAgcG9pbnQueSA9IHk7XG5cbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cbn07XG4iLCIvLyB1bml3aGVlbCAwLjEuMiAoY3VzdG9taXplZClcbi8vIEEgdW5pZmllZCBjcm9zcyBicm93c2VyIG1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90ZWVtdWFsYXAvdW5pd2hlZWxcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKXtcblxuICAvL0Z1bGwgZGV0YWlsczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvUmVmZXJlbmNlL0V2ZW50cy93aGVlbFxuXG4gIHZhciBwcmVmaXggPSBcIlwiLCBfYWRkRXZlbnRMaXN0ZW5lciwgX3JlbW92ZUV2ZW50TGlzdGVuZXIsIHN1cHBvcnQsIGZucyA9IFtdO1xuICB2YXIgcGFzc2l2ZU9wdGlvbiA9IHtwYXNzaXZlOiB0cnVlfTtcblxuICAvLyBkZXRlY3QgZXZlbnQgbW9kZWxcbiAgaWYgKCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYWRkRXZlbnRMaXN0ZW5lclwiO1xuICAgIF9yZW1vdmVFdmVudExpc3RlbmVyID0gXCJyZW1vdmVFdmVudExpc3RlbmVyXCI7XG4gIH0gZWxzZSB7XG4gICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImF0dGFjaEV2ZW50XCI7XG4gICAgX3JlbW92ZUV2ZW50TGlzdGVuZXIgPSBcImRldGFjaEV2ZW50XCI7XG4gICAgcHJlZml4ID0gXCJvblwiO1xuICB9XG5cbiAgLy8gZGV0ZWN0IGF2YWlsYWJsZSB3aGVlbCBldmVudFxuICBzdXBwb3J0ID0gXCJvbndoZWVsXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSA/IFwid2hlZWxcIiA6IC8vIE1vZGVybiBicm93c2VycyBzdXBwb3J0IFwid2hlZWxcIlxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQgPyBcIm1vdXNld2hlZWxcIiA6IC8vIFdlYmtpdCBhbmQgSUUgc3VwcG9ydCBhdCBsZWFzdCBcIm1vdXNld2hlZWxcIlxuICAgICAgICAgICAgXCJET01Nb3VzZVNjcm9sbFwiOyAvLyBsZXQncyBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcblxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGVsZW1lbnQsY2FsbGJhY2spIHtcblxuICAgIHZhciBmbiA9IGZ1bmN0aW9uKG9yaWdpbmFsRXZlbnQpIHtcblxuICAgICAgIW9yaWdpbmFsRXZlbnQgJiYgKCBvcmlnaW5hbEV2ZW50ID0gd2luZG93LmV2ZW50ICk7XG5cbiAgICAgIC8vIGNyZWF0ZSBhIG5vcm1hbGl6ZWQgZXZlbnQgb2JqZWN0XG4gICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgIC8vIGtlZXAgYSByZWYgdG8gdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgICAgICB0YXJnZXQ6IG9yaWdpbmFsRXZlbnQudGFyZ2V0IHx8IG9yaWdpbmFsRXZlbnQuc3JjRWxlbWVudCxcbiAgICAgICAgdHlwZTogXCJ3aGVlbFwiLFxuICAgICAgICBkZWx0YU1vZGU6IG9yaWdpbmFsRXZlbnQudHlwZSA9PSBcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIiA/IDAgOiAxLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbGF0WjogMCxcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQgP1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gY2FsY3VsYXRlIGRlbHRhWSAoYW5kIGRlbHRhWCkgYWNjb3JkaW5nIHRvIHRoZSBldmVudFxuICAgICAgaWYgKCBzdXBwb3J0ID09IFwibW91c2V3aGVlbFwiICkge1xuICAgICAgICBldmVudC5kZWx0YVkgPSAtIDEvNDAgKiBvcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XG4gICAgICAgIC8vIFdlYmtpdCBhbHNvIHN1cHBvcnQgd2hlZWxEZWx0YVhcbiAgICAgICAgb3JpZ2luYWxFdmVudC53aGVlbERlbHRhWCAmJiAoIGV2ZW50LmRlbHRhWCA9IC0gMS80MCAqIG9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YVggKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LmRlbHRhWSA9IG9yaWdpbmFsRXZlbnQuZGV0YWlsO1xuICAgICAgfVxuXG4gICAgICAvLyBpdCdzIHRpbWUgdG8gZmlyZSB0aGUgY2FsbGJhY2tcbiAgICAgIHJldHVybiBjYWxsYmFjayggZXZlbnQgKTtcblxuICAgIH07XG5cbiAgICBmbnMucHVzaCh7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgZm46IGZuLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2FsbGJhY2soZWxlbWVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm5zW2ldLmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZuc1tpXS5mbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZuc1tpXS5lbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmbnMuc3BsaWNlKGksMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2FkZFdoZWVsTGlzdGVuZXIoZWxlbSwgZXZlbnROYW1lLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIgKSB7XG4gICAgdmFyIGNiO1xuXG4gICAgaWYgKHN1cHBvcnQgPT09IFwid2hlZWxcIikge1xuICAgICAgY2IgPSBjYWxsYmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgY2IgPSBjcmVhdGVDYWxsYmFjayhlbGVtLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0ocHJlZml4ICsgZXZlbnROYW1lLCBjYiwgaXNQYXNzaXZlTGlzdGVuZXIgPyBwYXNzaXZlT3B0aW9uIDogZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZVdoZWVsTGlzdGVuZXIoZWxlbSwgZXZlbnROYW1lLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIgKSB7XG5cbiAgICB2YXIgY2I7XG5cbiAgICBpZiAoc3VwcG9ydCA9PT0gXCJ3aGVlbFwiKSB7XG4gICAgICBjYiA9IGNhbGxiYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYiA9IGdldENhbGxiYWNrKGVsZW0pO1xuICAgIH1cblxuICAgIGVsZW1bX3JlbW92ZUV2ZW50TGlzdGVuZXJdKHByZWZpeCArIGV2ZW50TmFtZSwgY2IsIGlzUGFzc2l2ZUxpc3RlbmVyID8gcGFzc2l2ZU9wdGlvbiA6IGZhbHNlKTtcblxuICAgIHJlbW92ZUNhbGxiYWNrKGVsZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkV2hlZWxMaXN0ZW5lciggZWxlbSwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyICkge1xuICAgIF9hZGRXaGVlbExpc3RlbmVyKGVsZW0sIHN1cHBvcnQsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lciApO1xuXG4gICAgLy8gaGFuZGxlIE1vek1vdXNlUGl4ZWxTY3JvbGwgaW4gb2xkZXIgRmlyZWZveFxuICAgIGlmKCBzdXBwb3J0ID09IFwiRE9NTW91c2VTY3JvbGxcIiApIHtcbiAgICAgIF9hZGRXaGVlbExpc3RlbmVyKGVsZW0sIFwiTW96TW91c2VQaXhlbFNjcm9sbFwiLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVXaGVlbExpc3RlbmVyKGVsZW0sIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lcil7XG4gICAgX3JlbW92ZVdoZWVsTGlzdGVuZXIoZWxlbSwgc3VwcG9ydCwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgIC8vIGhhbmRsZSBNb3pNb3VzZVBpeGVsU2Nyb2xsIGluIG9sZGVyIEZpcmVmb3hcbiAgICBpZiggc3VwcG9ydCA9PSBcIkRPTU1vdXNlU2Nyb2xsXCIgKSB7XG4gICAgICBfcmVtb3ZlV2hlZWxMaXN0ZW5lcihlbGVtLCBcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIiwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uOiBhZGRXaGVlbExpc3RlbmVyLFxuICAgIG9mZjogcmVtb3ZlV2hlZWxMaXN0ZW5lclxuICB9O1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgKiBFeHRlbmRzIGFuIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHRhcmdldCBvYmplY3QgdG8gZXh0ZW5kXG4gICAqIEBwYXJhbSAge09iamVjdH0gc291cmNlIG9iamVjdCB0byB0YWtlIHByb3BlcnRpZXMgZnJvbVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICBleHRlbmRlZCBvYmplY3RcbiAgICovXG4gIGV4dGVuZDogZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgIC8vIEdvIHJlY3Vyc2l2ZWx5XG4gICAgICBpZiAodGhpcy5pc09iamVjdChzb3VyY2VbcHJvcF0pKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHRoaXMuZXh0ZW5kKHRhcmdldFtwcm9wXSwgc291cmNlW3Byb3BdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBhIERPTSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG8gSFRNTCBlbGVtZW50IG9yIFN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgIHJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYSBET00gZWxlbWVudFxuICAgKi9cbiAgaXNFbGVtZW50OiBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fFxuICAgICAgbyBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgfHxcbiAgICAgIG8gaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50IHx8IC8vRE9NMlxuICAgICAgKG8gJiZcbiAgICAgICAgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgbyAhPT0gbnVsbCAmJlxuICAgICAgICBvLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiKVxuICAgICk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgYW4gT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG8gT2JqZWN0XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgcmV0dXJucyB0cnVlIGlmIG9iamVjdCBpcyBhbiBPYmplY3RcbiAgICovXG4gIGlzT2JqZWN0OiBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHZhcmlhYmxlIGlzIE51bWJlclxuICAgKlxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfEZsb2F0fSAgblxuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgIHJldHVybnMgdHJ1ZSBpZiB2YXJpYWJsZSBpcyBOdW1iZXJcbiAgICovXG4gIGlzTnVtYmVyOiBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoIGZvciBhbiBTVkcgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R8U3RyaW5nfSBlbGVtZW50T3JTZWxlY3RvciBET00gRWxlbWVudCBvciBzZWxlY3RvciBTdHJpbmdcbiAgICogQHJldHVybiB7T2JqZWN0fE51bGx9ICAgICAgICAgICAgICAgICAgIFNWRyBvciBudWxsXG4gICAqL1xuICBnZXRTdmc6IGZ1bmN0aW9uKGVsZW1lbnRPclNlbGVjdG9yKSB7XG4gICAgdmFyIGVsZW1lbnQsIHN2ZztcblxuICAgIGlmICghdGhpcy5pc0VsZW1lbnQoZWxlbWVudE9yU2VsZWN0b3IpKSB7XG4gICAgICAvLyBJZiBzZWxlY3RvciBwcm92aWRlZFxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgZWxlbWVudE9yU2VsZWN0b3IgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgZWxlbWVudE9yU2VsZWN0b3IgaW5zdGFuY2VvZiBTdHJpbmdcbiAgICAgICkge1xuICAgICAgICAvLyBUcnkgdG8gZmluZCB0aGUgZWxlbWVudFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50T3JTZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJQcm92aWRlZCBzZWxlY3RvciBkaWQgbm90IGZpbmQgYW55IGVsZW1lbnRzLiBTZWxlY3RvcjogXCIgK1xuICAgICAgICAgICAgICBlbGVtZW50T3JTZWxlY3RvclxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIHNlbGVjdG9yIGlzIG5vdCBhbiBIVE1MIG9iamVjdCBub3IgU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnRPclNlbGVjdG9yO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIikge1xuICAgICAgc3ZnID0gZWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHN2ZyA9IGVsZW1lbnQuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbWJlZFwiKSB7XG4gICAgICAgICAgc3ZnID0gZWxlbWVudC5nZXRTVkdEb2N1bWVudCgpLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW1nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ0Nhbm5vdCBzY3JpcHQgYW4gU1ZHIGluIGFuIFwiaW1nXCIgZWxlbWVudC4gUGxlYXNlIHVzZSBhbiBcIm9iamVjdFwiIGVsZW1lbnQgb3IgYW4gaW4tbGluZSBTVkcuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBTVkcuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdmc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEF0dGFjaCBhIGdpdmVuIGNvbnRleHQgdG8gYSBmdW5jdGlvblxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICBGdW5jdGlvblxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgY29udGV4dCBDb250ZXh0XG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgRnVuY3Rpb24gd2l0aCBjZXJ0YWluIGNvbnRleHRcbiAgICovXG4gIHByb3h5OiBmdW5jdGlvbihmbiwgY29udGV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgb2JqZWN0IHR5cGVcbiAgICogVXNlcyB0b1N0cmluZyB0aGF0IHJldHVybnMgW29iamVjdCBTVkdQb2ludF1cbiAgICogQW5kIHRoYW4gcGFyc2VzIG9iamVjdCB0eXBlIGZyb20gc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gbyBBbnkgb2JqZWN0XG4gICAqIEByZXR1cm4ge1N0cmluZ30gICBPYmplY3QgdHlwZVxuICAgKi9cbiAgZ2V0VHlwZTogZnVuY3Rpb24obykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG4gICAgICAuYXBwbHkobylcbiAgICAgIC5yZXBsYWNlKC9eXFxbb2JqZWN0XFxzLywgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9cXF0kLywgXCJcIik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIElmIGl0IGlzIGEgdG91Y2ggZXZlbnQgdGhhbiBhZGQgY2xpZW50WCBhbmQgY2xpZW50WSB0byBldmVudCBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtICB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICovXG4gIG1vdXNlQW5kVG91Y2hOb3JtYWxpemU6IGZ1bmN0aW9uKGV2dCwgc3ZnKSB7XG4gICAgLy8gSWYgbm8gY2xpZW50WCB0aGVuIGZhbGxiYWNrXG4gICAgaWYgKGV2dC5jbGllbnRYID09PSB2b2lkIDAgfHwgZXZ0LmNsaWVudFggPT09IG51bGwpIHtcbiAgICAgIC8vIEZhbGxiYWNrXG4gICAgICBldnQuY2xpZW50WCA9IDA7XG4gICAgICBldnQuY2xpZW50WSA9IDA7XG5cbiAgICAgIC8vIElmIGl0IGlzIGEgdG91Y2ggZXZlbnRcbiAgICAgIGlmIChldnQudG91Y2hlcyAhPT0gdm9pZCAwICYmIGV2dC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZ0LnRvdWNoZXNbMF0uY2xpZW50WCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZXZ0LmNsaWVudFggPSBldnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgIGV2dC5jbGllbnRZID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgfSBlbHNlIGlmIChldnQudG91Y2hlc1swXS5wYWdlWCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdmFyIHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICBldnQuY2xpZW50WCA9IGV2dC50b3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgIGV2dC5jbGllbnRZID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCBpcyBhIGN1c3RvbSBldmVudFxuICAgICAgfSBlbHNlIGlmIChldnQub3JpZ2luYWxFdmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlmIChldnQub3JpZ2luYWxFdmVudC5jbGllbnRYICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBldnQuY2xpZW50WCA9IGV2dC5vcmlnaW5hbEV2ZW50LmNsaWVudFg7XG4gICAgICAgICAgZXZ0LmNsaWVudFkgPSBldnQub3JpZ2luYWxFdmVudC5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBldmVudCBpcyBhIGRvdWJsZSBjbGljay90YXBcbiAgICogVE9ETzogRm9yIHRvdWNoIGdlc3R1cmVzIHVzZSBhIGxpYnJhcnkgKGhhbW1lci5qcykgdGhhdCB0YWtlcyBpbiBhY2NvdW50IG90aGVyIGV2ZW50c1xuICAgKiAodG91Y2htb3ZlIGFuZCB0b3VjaGVuZCkuIEl0IHNob3VsZCB0YWtlIGluIGFjY291bnQgdGFwIGR1cmF0aW9uIGFuZCB0cmF2ZWxlZCBkaXN0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0gIHtFdmVudH0gIGV2dFxuICAgKiBAcGFyYW0gIHtFdmVudH0gIHByZXZFdnQgUHJldmlvdXMgRXZlbnRcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzRGJsQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgcHJldkV2dCkge1xuICAgIC8vIERvdWJsZSBjbGljayBkZXRlY3RlZCBieSBicm93c2VyXG4gICAgaWYgKGV2dC5kZXRhaWwgPT09IDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBUcnkgdG8gY29tcGFyZSBldmVudHNcbiAgICBlbHNlIGlmIChwcmV2RXZ0ICE9PSB2b2lkIDAgJiYgcHJldkV2dCAhPT0gbnVsbCkge1xuICAgICAgdmFyIHRpbWVTdGFtcERpZmYgPSBldnQudGltZVN0YW1wIC0gcHJldkV2dC50aW1lU3RhbXAsIC8vIHNob3VsZCBiZSBsb3dlciB0aGFuIDI1MCBtc1xuICAgICAgICB0b3VjaGVzRGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgTWF0aC5wb3coZXZ0LmNsaWVudFggLSBwcmV2RXZ0LmNsaWVudFgsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KGV2dC5jbGllbnRZIC0gcHJldkV2dC5jbGllbnRZLCAyKVxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gdGltZVN0YW1wRGlmZiA8IDI1MCAmJiB0b3VjaGVzRGlzdGFuY2UgPCAxMDtcbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIGZvdW5kXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXJcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgbm93OlxuICAgIERhdGUubm93IHx8XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfSxcblxuICAvLyBGcm9tIHVuZGVyc2NvcmUuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgICB2YXIgdGltZW91dCA9IG51bGw7XG4gICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogdGhhdC5ub3coKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gdGhhdC5ub3coKTtcbiAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkge1xuICAgICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICAgIGNvbnRleHQgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtdGhpc1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJlcXVlc3RBbmltYXRpb25GcmFtZSBzaW11bGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHJlZnJlc2hSYXRlXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgY3JlYXRlUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbihyZWZyZXNoUmF0ZSkge1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcblxuICAgIC8vIENvbnZlcnQgcmVmcmVzaFJhdGUgdG8gdGltZW91dFxuICAgIGlmIChyZWZyZXNoUmF0ZSAhPT0gXCJhdXRvXCIgJiYgcmVmcmVzaFJhdGUgPCA2MCAmJiByZWZyZXNoUmF0ZSA+IDEpIHtcbiAgICAgIHRpbWVvdXQgPSBNYXRoLmZsb29yKDEwMDAgLyByZWZyZXNoUmF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJlcXVlc3RUaW1lb3V0KDMzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcXVlc3RUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjYWxsYmFjayB0aGF0IHdpbGwgZXhlY3V0ZSBhZnRlciBhIGdpdmVuIHRpbWVvdXRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gdGltZW91dFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3RUaW1lb3V0KHRpbWVvdXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWVvdXQpO1xuICB9O1xufVxuIiwiLyohIHN2Z01hcCB8IGh0dHBzOi8vZ2l0aHViLmNvbS9TdGVwaGFuV2FnbmVyL3N2Z01hcCB8IE1JVCBMaWNlbnNlIHwgQ29weXJpZ2h0IFN0ZXBoYW4gV2FnbmVyIHwgaHR0cHM6Ly9zdGVwaGFud2FnbmVyLm1lICovXG5mdW5jdGlvbiBzdmdNYXBXcmFwcGVyKGkpe2Z1bmN0aW9uIGEobCl7dGhpcy5pbml0KGwpfXJldHVybiBhLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGwpe3RoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LHt0YXJnZXRFbGVtZW50SUQ6XCJcIixtaW5ab29tOjEsbWF4Wm9vbToyNSxpbml0aWFsWm9vbToxLjA2LGluaXRpYWxQYW46e3g6MCx5OjB9LHpvb21TY2FsZVNlbnNpdGl2aXR5Oi4yLG1vdXNlV2hlZWxab29tRW5hYmxlZDohMCxtb3VzZVdoZWVsWm9vbVdpdGhLZXk6ITEsbW91c2VXaGVlbEtleU1lc3NhZ2U6XCJQcmVzcyB0aGUgW0FMVF0ga2V5IHRvIHpvb21cIixtb3VzZVdoZWVsS2V5TWVzc2FnZU1hYzpcIlByZXNzIHRoZSBbQ09NTUFORF0ga2V5IHRvIHpvb21cIixjb2xvck1heDpcIiNDQzAwMzNcIixjb2xvck1pbjpcIiNGRkU1RDlcIixjb2xvck5vRGF0YTpcIiNFMkUyRTJcIixtYW51YWxDb2xvckF0dHJpYnV0ZTpcImNvbG9yXCIsZmxhZ1R5cGU6XCJpbWFnZVwiLGZsYWdVUkw6XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvaGpuaWxzc29uL2NvdW50cnktZmxhZ3NAbGF0ZXN0L3N2Zy97MH0uc3ZnXCIsaGlkZUZsYWc6ITEsaGlkZU1pc3NpbmdEYXRhOiExLG5vRGF0YVRleHQ6XCJObyBkYXRhIGF2YWlsYWJsZVwiLHRvdWNoTGluazohMSxzaG93Wm9vbVJlc2V0OiExLG9uR2V0VG9vbHRpcDpmdW5jdGlvbihsLHQsZSl7cmV0dXJuIG51bGx9LGNvdW50cmllczp7RUg6ITAsQ3JpbWVhOlwiVUFcIn0sc2hvd0NvbnRpbmVudFNlbGVjdG9yOiExfSxsfHx7fSksdGhpcy5vcHRpb25zLnRhcmdldEVsZW1lbnRJRCYmZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLnRhcmdldEVsZW1lbnRJRCl8fHRoaXMuZXJyb3IoXCJUYXJnZXQgZWxlbWVudCBub3QgZm91bmRcIiksdGhpcy5vcHRpb25zLmRhdGF8fHRoaXMuZXJyb3IoXCJObyBkYXRhXCIpLHRoaXMuaWQ9dGhpcy5vcHRpb25zLnRhcmdldEVsZW1lbnRJRCx0aGlzLndyYXBwZXI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLnRhcmdldEVsZW1lbnRJRCksdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtd3JhcHBlclwiKSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtY29udGFpbmVyXCIpLHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lciksdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCYmdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tV2l0aEtleSYmKHRoaXMuYWRkTW91c2VXaGVlbFpvb21Ob3RpY2UoKSx0aGlzLmFkZE1vdXNlV2hlZWxab29tV2l0aEtleUV2ZW50cygpKSx0aGlzLm1hcENvbnRhaW5lcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubWFwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtbWFwLWNvbnRhaW5lclwiKSx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1hcENvbnRhaW5lciksdGhpcy5jcmVhdGVNYXAoKSx0aGlzLmFwcGx5RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSl9LGEucHJvdG90eXBlLmNvdW50cmllcz17QUY6XCJBZmdoYW5pc3RhblwiLEFYOlwiw4VsYW5kIElzbGFuZHNcIixBTDpcIkFsYmFuaWFcIixEWjpcIkFsZ2VyaWFcIixBUzpcIkFtZXJpY2FuIFNhbW9hXCIsQUQ6XCJBbmRvcnJhXCIsQU86XCJBbmdvbGFcIixBSTpcIkFuZ3VpbGxhXCIsQVE6XCJBbnRhcmN0aWNhXCIsQUc6XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsQVI6XCJBcmdlbnRpbmFcIixBTTpcIkFybWVuaWFcIixBVzpcIkFydWJhXCIsQVU6XCJBdXN0cmFsaWFcIixBVDpcIkF1c3RyaWFcIixBWjpcIkF6ZXJiYWlqYW5cIixCUzpcIkJhaGFtYXNcIixCSDpcIkJhaHJhaW5cIixCRDpcIkJhbmdsYWRlc2hcIixCQjpcIkJhcmJhZG9zXCIsQlk6XCJCZWxhcnVzXCIsQkU6XCJCZWxnaXVtXCIsQlo6XCJCZWxpemVcIixCSjpcIkJlbmluXCIsQk06XCJCZXJtdWRhXCIsQlQ6XCJCaHV0YW5cIixCTzpcIkJvbGl2aWFcIixCQTpcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixCVzpcIkJvdHN3YW5hXCIsQlI6XCJCcmF6aWxcIixJTzpcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLFZHOlwiQnJpdGlzaCBWaXJnaW4gSXNsYW5kc1wiLEJOOlwiQnJ1bmVpIERhcnVzc2FsYW1cIixCRzpcIkJ1bGdhcmlhXCIsQkY6XCJCdXJraW5hIEZhc29cIixCSTpcIkJ1cnVuZGlcIixLSDpcIkNhbWJvZGlhXCIsQ006XCJDYW1lcm9vblwiLENBOlwiQ2FuYWRhXCIsQ1Y6XCJDYXBlIFZlcmRlXCIsQlE6XCJDYXJpYmJlYW4gTmV0aGVybGFuZHNcIixLWTpcIkNheW1hbiBJc2xhbmRzXCIsQ0Y6XCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIixURDpcIkNoYWRcIixDTDpcIkNoaWxlXCIsQ046XCJDaGluYVwiLENYOlwiQ2hyaXN0bWFzIElzbGFuZFwiLENDOlwiQ29jb3MgSXNsYW5kc1wiLENPOlwiQ29sb21iaWFcIixLTTpcIkNvbW9yb3NcIixDRzpcIkNvbmdvXCIsQ0s6XCJDb29rIElzbGFuZHNcIixDUjpcIkNvc3RhIFJpY2FcIixIUjpcIkNyb2F0aWFcIixDVTpcIkN1YmFcIixDVzpcIkN1cmHDp2FvXCIsQ1k6XCJDeXBydXNcIixDWjpcIkN6ZWNoIFJlcHVibGljXCIsQ0Q6XCJEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nb1wiLERLOlwiRGVubWFya1wiLERKOlwiRGppYm91dGlcIixETTpcIkRvbWluaWNhXCIsRE86XCJEb21pbmljYW4gUmVwdWJsaWNcIixFQzpcIkVjdWFkb3JcIixFRzpcIkVneXB0XCIsU1Y6XCJFbCBTYWx2YWRvclwiLEdROlwiRXF1YXRvcmlhbCBHdWluZWFcIixFUjpcIkVyaXRyZWFcIixFRTpcIkVzdG9uaWFcIixFVDpcIkV0aGlvcGlhXCIsRks6XCJGYWxrbGFuZCBJc2xhbmRzXCIsRk86XCJGYXJvZSBJc2xhbmRzXCIsRk06XCJGZWRlcmF0ZWQgU3RhdGVzIG9mIE1pY3JvbmVzaWFcIixGSjpcIkZpamlcIixGSTpcIkZpbmxhbmRcIixGUjpcIkZyYW5jZVwiLEdGOlwiRnJlbmNoIEd1aWFuYVwiLFBGOlwiRnJlbmNoIFBvbHluZXNpYVwiLFRGOlwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsR0E6XCJHYWJvblwiLEdNOlwiR2FtYmlhXCIsR0U6XCJHZW9yZ2lhXCIsREU6XCJHZXJtYW55XCIsR0g6XCJHaGFuYVwiLEdJOlwiR2licmFsdGFyXCIsR1I6XCJHcmVlY2VcIixHTDpcIkdyZWVubGFuZFwiLEdEOlwiR3JlbmFkYVwiLEdQOlwiR3VhZGVsb3VwZVwiLEdVOlwiR3VhbVwiLEdUOlwiR3VhdGVtYWxhXCIsR046XCJHdWluZWFcIixHVzpcIkd1aW5lYS1CaXNzYXVcIixHWTpcIkd1eWFuYVwiLEhUOlwiSGFpdGlcIixITjpcIkhvbmR1cmFzXCIsSEs6XCJIb25nIEtvbmdcIixIVTpcIkh1bmdhcnlcIixJUzpcIkljZWxhbmRcIixJTjpcIkluZGlhXCIsSUQ6XCJJbmRvbmVzaWFcIixJUjpcIklyYW5cIixJUTpcIklyYXFcIixJRTpcIklyZWxhbmRcIixJTTpcIklzbGUgb2YgTWFuXCIsSUw6XCJJc3JhZWxcIixJVDpcIkl0YWx5XCIsQ0k6XCJJdm9yeSBDb2FzdFwiLEpNOlwiSmFtYWljYVwiLEpQOlwiSmFwYW5cIixKRTpcIkplcnNleVwiLEpPOlwiSm9yZGFuXCIsS1o6XCJLYXpha2hzdGFuXCIsS0U6XCJLZW55YVwiLEtJOlwiS2lyaWJhdGlcIixYSzpcIktvc292b1wiLEtXOlwiS3V3YWl0XCIsS0c6XCJLeXJneXpzdGFuXCIsTEE6XCJMYW9zXCIsTFY6XCJMYXR2aWFcIixMQjpcIkxlYmFub25cIixMUzpcIkxlc290aG9cIixMUjpcIkxpYmVyaWFcIixMWTpcIkxpYnlhXCIsTEk6XCJMaWVjaHRlbnN0ZWluXCIsTFQ6XCJMaXRodWFuaWFcIixMVTpcIkx1eGVtYm91cmdcIixNTzpcIk1hY2F1XCIsTUs6XCJNYWNlZG9uaWFcIixNRzpcIk1hZGFnYXNjYXJcIixNVzpcIk1hbGF3aVwiLE1ZOlwiTWFsYXlzaWFcIixNVjpcIk1hbGRpdmVzXCIsTUw6XCJNYWxpXCIsTVQ6XCJNYWx0YVwiLE1IOlwiTWFyc2hhbGwgSXNsYW5kc1wiLE1ROlwiTWFydGluaXF1ZVwiLE1SOlwiTWF1cml0YW5pYVwiLE1VOlwiTWF1cml0aXVzXCIsWVQ6XCJNYXlvdHRlXCIsTVg6XCJNZXhpY29cIixNRDpcIk1vbGRvdmFcIixNQzpcIk1vbmFjb1wiLE1OOlwiTW9uZ29saWFcIixNRTpcIk1vbnRlbmVncm9cIixNUzpcIk1vbnRzZXJyYXRcIixNQTpcIk1vcm9jY29cIixNWjpcIk1vemFtYmlxdWVcIixNTTpcIk15YW5tYXJcIixOQTpcIk5hbWliaWFcIixOUjpcIk5hdXJ1XCIsTlA6XCJOZXBhbFwiLE5MOlwiTmV0aGVybGFuZHNcIixOQzpcIk5ldyBDYWxlZG9uaWFcIixOWjpcIk5ldyBaZWFsYW5kXCIsTkk6XCJOaWNhcmFndWFcIixORTpcIk5pZ2VyXCIsTkc6XCJOaWdlcmlhXCIsTlU6XCJOaXVlXCIsTkY6XCJOb3Jmb2xrIElzbGFuZFwiLEtQOlwiTm9ydGggS29yZWFcIixNUDpcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLE5POlwiTm9yd2F5XCIsT006XCJPbWFuXCIsUEs6XCJQYWtpc3RhblwiLFBXOlwiUGFsYXVcIixQUzpcIlBhbGVzdGluZVwiLFBBOlwiUGFuYW1hXCIsUEc6XCJQYXB1YSBOZXcgR3VpbmVhXCIsUFk6XCJQYXJhZ3VheVwiLFBFOlwiUGVydVwiLFBIOlwiUGhpbGlwcGluZXNcIixQTjpcIlBpdGNhaXJuIElzbGFuZHNcIixQTDpcIlBvbGFuZFwiLFBUOlwiUG9ydHVnYWxcIixQUjpcIlB1ZXJ0byBSaWNvXCIsUUE6XCJRYXRhclwiLFJFOlwiUmV1bmlvblwiLFJPOlwiUm9tYW5pYVwiLFJVOlwiUnVzc2lhXCIsUlc6XCJSd2FuZGFcIixTSDpcIlNhaW50IEhlbGVuYVwiLEtOOlwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsTEM6XCJTYWludCBMdWNpYVwiLFBNOlwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFZDOlwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixXUzpcIlNhbW9hXCIsU006XCJTYW4gTWFyaW5vXCIsU1Q6XCJTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGVcIixTQTpcIlNhdWRpIEFyYWJpYVwiLFNOOlwiU2VuZWdhbFwiLFJTOlwiU2VyYmlhXCIsU0M6XCJTZXljaGVsbGVzXCIsU0w6XCJTaWVycmEgTGVvbmVcIixTRzpcIlNpbmdhcG9yZVwiLFNYOlwiU2ludCBNYWFydGVuXCIsU0s6XCJTbG92YWtpYVwiLFNJOlwiU2xvdmVuaWFcIixTQjpcIlNvbG9tb24gSXNsYW5kc1wiLFNPOlwiU29tYWxpYVwiLFpBOlwiU291dGggQWZyaWNhXCIsR1M6XCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLEtSOlwiU291dGggS29yZWFcIixTUzpcIlNvdXRoIFN1ZGFuXCIsRVM6XCJTcGFpblwiLExLOlwiU3JpIExhbmthXCIsU0Q6XCJTdWRhblwiLFNSOlwiU3VyaW5hbWVcIixTSjpcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIixTWjpcIkVzd2F0aW5pXCIsU0U6XCJTd2VkZW5cIixDSDpcIlN3aXR6ZXJsYW5kXCIsU1k6XCJTeXJpYVwiLFRXOlwiVGFpd2FuXCIsVEo6XCJUYWppa2lzdGFuXCIsVFo6XCJUYW56YW5pYVwiLFRIOlwiVGhhaWxhbmRcIixUTDpcIlRpbW9yLUxlc3RlXCIsVEc6XCJUb2dvXCIsVEs6XCJUb2tlbGF1XCIsVE86XCJUb25nYVwiLFRUOlwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLFROOlwiVHVuaXNpYVwiLFRSOlwiVHVya2V5XCIsVE06XCJUdXJrbWVuaXN0YW5cIixUQzpcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFRWOlwiVHV2YWx1XCIsVUc6XCJVZ2FuZGFcIixVQTpcIlVrcmFpbmVcIixBRTpcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsR0I6XCJVbml0ZWQgS2luZ2RvbVwiLFVTOlwiVW5pdGVkIFN0YXRlc1wiLFVNOlwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsVkk6XCJVbml0ZWQgU3RhdGVzIFZpcmdpbiBJc2xhbmRzXCIsVVk6XCJVcnVndWF5XCIsVVo6XCJVemJla2lzdGFuXCIsVlU6XCJWYW51YXR1XCIsVkE6XCJWYXRpY2FuIENpdHlcIixWRTpcIlZlbmV6dWVsYVwiLFZOOlwiVmlldG5hbVwiLFdGOlwiV2FsbGlzIGFuZCBGdXR1bmFcIixFSDpcIldlc3Rlcm4gU2FoYXJhXCIsWUU6XCJZZW1lblwiLFpNOlwiWmFtYmlhXCIsWlc6XCJaaW1iYWJ3ZVwifSxhLnByb3RvdHlwZS5hcHBseURhdGE9ZnVuY3Rpb24obyl7dmFyIGk9bnVsbCxhPW51bGw7T2JqZWN0LmtleXMoby52YWx1ZXMpLmZvckVhY2goZnVuY3Rpb24obCl7bD1wYXJzZUludChvLnZhbHVlc1tsXVtvLmFwcGx5RGF0YV0sMTApOyhpPW51bGw9PT1pP2w6aSk8bCYmKGk9bCksbDwoYT1udWxsPT09YT9sOmEpJiYoYT1sKX0pLG8uZGF0YVtvLmFwcGx5RGF0YV0udGhyZXNob2xkTWF4JiYoaT1NYXRoLm1pbihpLG8uZGF0YVtvLmFwcGx5RGF0YV0udGhyZXNob2xkTWF4KSksby5kYXRhW28uYXBwbHlEYXRhXS50aHJlc2hvbGRNaW4mJihhPU1hdGgubWF4KGEsby5kYXRhW28uYXBwbHlEYXRhXS50aHJlc2hvbGRNaW4pKSxPYmplY3Qua2V5cyh0aGlzLmNvdW50cmllcykuZm9yRWFjaChmdW5jdGlvbihsKXt2YXIgdCxlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQrXCItbWFwLWNvdW50cnktXCIrbCk7ZSYmKG8udmFsdWVzW2xdP3ZvaWQgMD09PW8udmFsdWVzW2xdLmNvbG9yPyh0PU1hdGgubWF4KGEscGFyc2VJbnQoby52YWx1ZXNbbF1bby5hcHBseURhdGFdLDEwKSksdD1NYXRoLm1heCgwLE1hdGgubWluKDEsKHQtYSkvKGktYSkpKSx0PXRoaXMuZ2V0Q29sb3IodGhpcy5vcHRpb25zLmNvbG9yTWF4LHRoaXMub3B0aW9ucy5jb2xvck1pbix0fHwwPT09dD90OjEpLGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLHQpKTplLnNldEF0dHJpYnV0ZShcImZpbGxcIixvLnZhbHVlc1tsXS5jb2xvcik6ZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsdGhpcy5vcHRpb25zLmNvbG9yTm9EYXRhKSl9LmJpbmQodGhpcykpfSxhLnByb3RvdHlwZS5lbW9qaUZsYWdzPXtBRjpcIvCfh6bwn4erXCIsQVg6XCLwn4em8J+HvVwiLEFMOlwi8J+HpvCfh7FcIixEWjpcIvCfh6nwn4e/XCIsQVM6XCLwn4em8J+HuFwiLEFEOlwi8J+HpvCfh6lcIixBTzpcIvCfh6bwn4e0XCIsQUk6XCLwn4em8J+HrlwiLEFROlwi8J+HpvCfh7ZcIixBRzpcIvCfh6bwn4esXCIsQVI6XCLwn4em8J+Ht1wiLEFNOlwi8J+HpvCfh7JcIixBVzpcIvCfh6bwn4e8XCIsQVU6XCLwn4em8J+HulwiLEFUOlwi8J+HpvCfh7lcIixBWjpcIvCfh6bwn4e/XCIsQlM6XCLwn4en8J+HuFwiLEJIOlwi8J+Hp/Cfh61cIixCRDpcIvCfh6fwn4epXCIsQkI6XCLwn4en8J+Hp1wiLEJZOlwi8J+Hp/Cfh75cIixCRTpcIvCfh6fwn4eqXCIsQlo6XCLwn4en8J+Hv1wiLEJKOlwi8J+Hp/Cfh69cIixCTTpcIvCfh6fwn4eyXCIsQlQ6XCLwn4en8J+HuVwiLEJPOlwi8J+Hp/Cfh7RcIixCQTpcIvCfh6fwn4emXCIsQlc6XCLwn4en8J+HvFwiLEJSOlwi8J+Hp/Cfh7dcIixJTzpcIvCfh67wn4e0XCIsVkc6XCLwn4e78J+HrFwiLEJOOlwi8J+Hp/Cfh7NcIixCRzpcIvCfh6fwn4esXCIsQkY6XCLwn4en8J+Hq1wiLEJJOlwi8J+Hp/Cfh65cIixLSDpcIvCfh7Dwn4etXCIsQ006XCLwn4eo8J+HslwiLENBOlwi8J+HqPCfh6ZcIixDVjpcIvCfh6jwn4e7XCIsQlE6XCLwn4en8J+HtlwiLEtZOlwi8J+HsPCfh75cIixDRjpcIvCfh6jwn4erXCIsVEQ6XCLwn4e58J+HqVwiLENMOlwi8J+HqPCfh7FcIixDTjpcIvCfh6jwn4ezXCIsQ1g6XCLwn4eo8J+HvVwiLENDOlwi8J+HqPCfh6hcIixDTzpcIvCfh6jwn4e0XCIsS006XCLwn4ew8J+HslwiLENHOlwi8J+HqPCfh6xcIixDSzpcIvCfh6jwn4ewXCIsQ1I6XCLwn4eo8J+Ht1wiLEhSOlwi8J+HrfCfh7dcIixDVTpcIvCfh6jwn4e6XCIsQ1c6XCLwn4eo8J+HvFwiLENZOlwi8J+HqPCfh75cIixDWjpcIvCfh6jwn4e/XCIsQ0Q6XCLwn4eo8J+HqVwiLERLOlwi8J+HqfCfh7BcIixESjpcIvCfh6nwn4evXCIsRE06XCLwn4ep8J+HslwiLERPOlwi8J+HqfCfh7RcIixFQzpcIvCfh6rwn4eoXCIsRUc6XCLwn4eq8J+HrFwiLFNWOlwi8J+HuPCfh7tcIixHUTpcIvCfh6zwn4e2XCIsRVI6XCLwn4eq8J+Ht1wiLEVFOlwi8J+HqvCfh6pcIixFVDpcIvCfh6rwn4e5XCIsRks6XCLwn4er8J+HsFwiLEZPOlwi8J+Hq/Cfh7RcIixGTTpcIvCfh6vwn4eyXCIsRko6XCLwn4er8J+Hr1wiLEZJOlwi8J+Hq/Cfh65cIixGUjpcIvCfh6vwn4e3XCIsR0Y6XCLwn4es8J+Hq1wiLFBGOlwi8J+HtfCfh6tcIixURjpcIvCfh7nwn4erXCIsR0E6XCLwn4es8J+HplwiLEdNOlwi8J+HrPCfh7JcIixHRTpcIvCfh6zwn4eqXCIsREU6XCLwn4ep8J+HqlwiLEdIOlwi8J+HrPCfh61cIixHSTpcIvCfh6zwn4euXCIsR1I6XCLwn4es8J+Ht1wiLEdMOlwi8J+HrPCfh7FcIixHRDpcIvCfh6zwn4epXCIsR1A6XCLwn4es8J+HtVwiLEdVOlwi8J+HrPCfh7pcIixHVDpcIvCfh6zwn4e5XCIsR046XCLwn4es8J+Hs1wiLEdXOlwi8J+HrPCfh7xcIixHWTpcIvCfh6zwn4e+XCIsSFQ6XCLwn4et8J+HuVwiLEhOOlwi8J+HrfCfh7NcIixISzpcIvCfh63wn4ewXCIsSFU6XCLwn4et8J+HulwiLElTOlwi8J+HrvCfh7hcIixJTjpcIvCfh67wn4ezXCIsSUQ6XCLwn4eu8J+HqVwiLElSOlwi8J+HrvCfh7dcIixJUTpcIvCfh67wn4e2XCIsSUU6XCLwn4eu8J+HqlwiLElNOlwi8J+HrvCfh7JcIixJTDpcIvCfh67wn4exXCIsSVQ6XCLwn4eu8J+HuVwiLENJOlwi8J+HqPCfh65cIixKTTpcIvCfh6/wn4eyXCIsSlA6XCLwn4ev8J+HtVwiLEpFOlwi8J+Hr/Cfh6pcIixKTzpcIvCfh6/wn4e0XCIsS1o6XCLwn4ew8J+Hv1wiLEtFOlwi8J+HsPCfh6pcIixLSTpcIvCfh7Dwn4euXCIsWEs6XCLwn4e98J+HsFwiLEtXOlwi8J+HsPCfh7xcIixLRzpcIvCfh7Dwn4esXCIsTEE6XCLwn4ex8J+HplwiLExWOlwi8J+HsfCfh7tcIixMQjpcIvCfh7Hwn4enXCIsTFM6XCLwn4ex8J+HuFwiLExSOlwi8J+HsfCfh7dcIixMWTpcIvCfh7Hwn4e+XCIsTEk6XCLwn4ex8J+HrlwiLExUOlwi8J+HsfCfh7lcIixMVTpcIvCfh7Hwn4e6XCIsTU86XCLwn4ey8J+HtFwiLE1LOlwi8J+HsvCfh7BcIixNRzpcIvCfh7Lwn4esXCIsTVc6XCLwn4ey8J+HvFwiLE1ZOlwi8J+HsvCfh75cIixNVjpcIvCfh7Lwn4e7XCIsTUw6XCLwn4ey8J+HsVwiLE1UOlwi8J+HsvCfh7lcIixNSDpcIvCfh7Lwn4etXCIsTVE6XCLwn4ey8J+HtlwiLE1SOlwi8J+HsvCfh7dcIixNVTpcIvCfh7Lwn4e6XCIsWVQ6XCLwn4e+8J+HuVwiLE1YOlwi8J+HsvCfh71cIixNRDpcIvCfh7Lwn4epXCIsTUM6XCLwn4ey8J+HqFwiLE1OOlwi8J+HsvCfh7NcIixNRTpcIvCfh7Lwn4eqXCIsTVM6XCLwn4ey8J+HuFwiLE1BOlwi8J+HsvCfh6ZcIixNWjpcIvCfh7Lwn4e/XCIsTU06XCLwn4ey8J+HslwiLE5BOlwi8J+Hs/Cfh6ZcIixOUjpcIvCfh7Pwn4e3XCIsTlA6XCLwn4ez8J+HtVwiLE5MOlwi8J+Hs/Cfh7FcIixOQzpcIvCfh7Pwn4eoXCIsTlo6XCLwn4ez8J+Hv1wiLE5JOlwi8J+Hs/Cfh65cIixORTpcIvCfh7Pwn4eqXCIsTkc6XCLwn4ez8J+HrFwiLE5VOlwi8J+Hs/Cfh7pcIixORjpcIvCfh7Pwn4erXCIsS1A6XCLwn4ew8J+HtVwiLE1QOlwi8J+HsvCfh7VcIixOTzpcIvCfh7Pwn4e0XCIsT006XCLwn4e08J+HslwiLFBLOlwi8J+HtfCfh7BcIixQVzpcIvCfh7Xwn4e8XCIsUFM6XCLwn4e18J+HuFwiLFBBOlwi8J+HtfCfh6ZcIixQRzpcIvCfh7Xwn4esXCIsUFk6XCLwn4e18J+HvlwiLFBFOlwi8J+HtfCfh6pcIixQSDpcIvCfh7Xwn4etXCIsUE46XCLwn4e18J+Hs1wiLFBMOlwi8J+HtfCfh7FcIixQVDpcIvCfh7Xwn4e5XCIsUFI6XCLwn4e18J+Ht1wiLFFBOlwi8J+HtvCfh6ZcIixSRTpcIvCfh7fwn4eqXCIsUk86XCLwn4e38J+HtFwiLFJVOlwi8J+Ht/Cfh7pcIixSVzpcIvCfh7fwn4e8XCIsU0g6XCLwn4e48J+HrVwiLEtOOlwi8J+HsPCfh7NcIixMQzpcIvCfh7Hwn4eoXCIsUE06XCLwn4e18J+HslwiLFZDOlwi8J+Hu/Cfh6hcIixXUzpcIvCfh7zwn4e4XCIsU006XCLwn4e48J+HslwiLFNUOlwi8J+HuPCfh7lcIixTQTpcIvCfh7jwn4emXCIsU046XCLwn4e48J+Hs1wiLFJTOlwi8J+Ht/Cfh7hcIixTQzpcIvCfh7jwn4eoXCIsU0w6XCLwn4e48J+HsVwiLFNHOlwi8J+HuPCfh6xcIixTWDpcIvCfh7jwn4e9XCIsU0s6XCLwn4e48J+HsFwiLFNJOlwi8J+HuPCfh65cIixTQjpcIvCfh7jwn4enXCIsU086XCLwn4e48J+HtFwiLFpBOlwi8J+Hv/Cfh6ZcIixHUzpcIvCfh6zwn4e4XCIsS1I6XCLwn4ew8J+Ht1wiLFNTOlwi8J+HuPCfh7hcIixFUzpcIvCfh6rwn4e4XCIsTEs6XCLwn4ex8J+HsFwiLFNEOlwi8J+HuPCfh6lcIixTUjpcIvCfh7jwn4e3XCIsU0o6XCLwn4e48J+Hr1wiLFNaOlwi8J+HuPCfh79cIixTRTpcIvCfh7jwn4eqXCIsQ0g6XCLwn4eo8J+HrVwiLFNZOlwi8J+HuPCfh75cIixUVzpcIvCfh7nwn4e8XCIsVEo6XCLwn4e58J+Hr1wiLFRaOlwi8J+HufCfh79cIixUSDpcIvCfh7nwn4etXCIsVEw6XCLwn4e58J+HsVwiLFRHOlwi8J+HufCfh6xcIixUSzpcIvCfh7nwn4ewXCIsVE86XCLwn4e58J+HtFwiLFRUOlwi8J+HufCfh7lcIixUTjpcIvCfh7nwn4ezXCIsVFI6XCLwn4e58J+Ht1wiLFRNOlwi8J+HufCfh7JcIixUQzpcIvCfh7nwn4eoXCIsVFY6XCLwn4e58J+Hu1wiLFVHOlwi8J+HuvCfh6xcIixVQTpcIvCfh7rwn4emXCIsQUU6XCLwn4em8J+HqlwiLEdCOlwi8J+HrPCfh6dcIixVUzpcIvCfh7rwn4e4XCIsVU06XCLwn4e68J+HslwiLFZJOlwi8J+Hu/Cfh65cIixVWTpcIvCfh7rwn4e+XCIsVVo6XCLwn4e68J+Hv1wiLFZVOlwi8J+Hu/Cfh7pcIixWQTpcIvCfh7vwn4emXCIsVkU6XCLwn4e78J+HqlwiLFZOOlwi8J+Hu/Cfh7NcIixXRjpcIvCfh7zwn4erXCIsRUg6XCLwn4eq8J+HrVwiLFlFOlwi8J+HvvCfh6pcIixaTTpcIvCfh7/wn4eyXCIsWlc6XCLwn4e/8J+HvFwifSxhLnByb3RvdHlwZS5jb250aW5lbnRzPXtFQTp7aXNvOlwiRUFcIixuYW1lOlwiV29ybGRcIn0sQUY6e2lzbzpcIkFGXCIsbmFtZTpcIkFmcmljYVwiLHBhbjp7eDo0NTQseToyNTB9LHpvb206MS45fSxBUzp7aXNvOlwiQVNcIixuYW1lOlwiQXNpYVwiLHBhbjp7eDo5MDQseTo4MH0sem9vbToxLjh9LEVVOntpc286XCJFVVwiLG5hbWU6XCJFdXJvcGVcIixwYW46e3g6NDA0LHk6ODB9LHpvb206NX0sTkE6e2lzbzpcIk5BXCIsbmFtZTpcIk5vcnRoIEFtZXJpY2FcIixwYW46e3g6MTA0LHk6NTV9LHpvb206Mi42fSxNQTp7aXNvOlwiTUFcIixuYW1lOlwiTWlkZGxlIEFtZXJpY2FcIixwYW46e3g6MTA0LHk6MjAwfSx6b29tOjIuNn0sU0E6e2lzbzpcIlNBXCIsbmFtZTpcIlNvdXRoIEFtZXJpY2FcIixwYW46e3g6MTA0LHk6MzQwfSx6b29tOjIuMn0sT0M6e2lzbzpcIk9DXCIsbmFtZTpcIk9jZWFuaWFcIixwYW46e3g6OTU0LHk6MzUwfSx6b29tOjEuOX19LGEucHJvdG90eXBlLmNyZWF0ZU1hcD1mdW5jdGlvbigpe3RoaXMuY3JlYXRlVG9vbHRpcCgpLHRoaXMubWFwV3JhcHBlcj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC1tYXAtd3JhcHBlclwiLHRoaXMubWFwQ29udGFpbmVyKSx0aGlzLm1hcEltYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJzdmdcIiksdGhpcy5tYXBJbWFnZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsXCIwIDAgMjAwMCAxMDAxXCIpLHRoaXMubWFwSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1tYXAtaW1hZ2VcIiksdGhpcy5tYXBXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMubWFwSW1hZ2UpO3ZhciBlLGw9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtbWFwLWNvbnRyb2xzLXdyYXBwZXJcIix0aGlzLm1hcFdyYXBwZXIpLG89dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtbWFwLWNvbnRyb2xzLXpvb21cIixsKTtbXCJpblwiLFwib3V0XCIsXCJyZXNldFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGwpe3ZhciB0OyhcInJlc2V0XCI9PT1sJiZ0aGlzLm9wdGlvbnMuc2hvd1pvb21SZXNldHx8XCJyZXNldFwiIT09bCkmJih0aGlzW3Q9XCJ6b29tQ29udHJvbFwiK2wuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbC5zbGljZSgxKV09dGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsXCJzdmdNYXAtY29udHJvbC1idXR0b24gc3ZnTWFwLXpvb20tYnV0dG9uIHN2Z01hcC16b29tLVwiK2wrXCItYnV0dG9uXCIsbyksdGhpc1t0XS50eXBlPVwiYnV0dG9uXCIsdGhpc1t0XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3RoaXMuem9vbU1hcChsKX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pKX0uYmluZCh0aGlzKSksdGhpcy56b29tQ29udHJvbEluLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlpvb20gaW5cIiksdGhpcy56b29tQ29udHJvbE91dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJab29tIG91dFwiKSx0aGlzLm9wdGlvbnMuc2hvd0NvbnRpbmVudFNlbGVjdG9yJiYodD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC1tYXAtY29udGluZW50LWNvbnRyb2xzLXdyYXBwZXJcIix0aGlzLm1hcFdyYXBwZXIpLHRoaXMuY29udGluZW50U2VsZWN0PXRoaXMuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLFwic3ZnTWFwLWNvbnRpbmVudC1zZWxlY3RcIix0KSxlPXRoaXMsT2JqZWN0LmtleXMoYS5wcm90b3R5cGUuY29udGluZW50cykuZm9yRWFjaChmdW5jdGlvbihsKXtsZXQgdD1lLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIixcInN2Z01hcC1jb250aW5lbnQtb3B0aW9uIHN2Z01hcC1jb250aW5lbnQtaXNvLVwiK2EucHJvdG90eXBlLmNvbnRpbmVudHNbbF0uaXNvLGUuY29udGluZW50U2VsZWN0LGEucHJvdG90eXBlLmNvbnRpbmVudHNbbF0ubmFtZSk7dC52YWx1ZT1sfSksdGhpcy5jb250aW5lbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGZ1bmN0aW9uKGwpe2wudGFyZ2V0LnZhbHVlJiZ0aGlzLnpvb21Db250aW5lbnQobC50YXJnZXQudmFsdWUpfS5iaW5kKGUpLHtwYXNzaXZlOiEwfSksdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJTZWxlY3QgY29udGluZW50XCIpKTt2YXIgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMubWFwUGF0aHMpO3RoaXMub3B0aW9ucy5jb3VudHJpZXMuRUh8fCh0Lk1BLmQ9dFtcIk1BLUVIXCJdLmQsZGVsZXRlIHQuRUgpLGRlbGV0ZSB0W1wiTUEtRUhcIl0sXCJSVVwiPT09dGhpcy5vcHRpb25zLmNvdW50cmllcy5DcmltZWEmJih0LlJVLmQ9dFtcIlJVLVdJVEgtQ1JJTUVBXCJdLmQsdC5VQS5kPXRbXCJVQS1XSVRIT1VULUNSSU1FQVwiXS5kKSxkZWxldGUgdFtcIlJVLVdJVEgtQ1JJTUVBXCJdLGRlbGV0ZSB0W1wiVUEtV0lUSE9VVC1DUklNRUFcIl0sdGhpcy50b29sdGlwTW92ZUV2ZW50PWZ1bmN0aW9uKGwpe3RoaXMubW92ZVRvb2x0aXAobCl9LmJpbmQodGhpcyksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihsKXt2YXIgdD10aGlzLm1hcFBhdGhzW2xdO2lmKHQuZCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInBhdGhcIik7aWYoaS5zZXRBdHRyaWJ1dGUoXCJkXCIsdC5kKSxpLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5pZCtcIi1tYXAtY291bnRyeS1cIitsKSxpLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIixsKSxpLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtY291bnRyeVwiKSx0aGlzLm1hcEltYWdlLmFwcGVuZENoaWxkKGkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixmdW5jdGlvbihsKXtpLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaSksaS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWFjdGl2ZVwiKTt2YXIgdD1pLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIiksZT1pLmdldEF0dHJpYnV0ZShcImRhdGEtbGlua1wiKTt0aGlzLm9wdGlvbnMudG91Y2hMaW5rJiZlP3dpbmRvdy5sb2NhdGlvbi5ocmVmPWU6KHRoaXMuc2V0VG9vbHRpcENvbnRlbnQodGhpcy5nZXRUb29sdGlwQ29udGVudCh0KSksdGhpcy5zaG93VG9vbHRpcChsKSx0aGlzLm1vdmVUb29sdGlwKGwpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG9vbHRpcE1vdmVFdmVudCx7cGFzc2l2ZTohMH0pKX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbihsKXtpLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaSk7dmFyIHQ9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO3RoaXMuc2V0VG9vbHRpcENvbnRlbnQodGhpcy5nZXRUb29sdGlwQ29udGVudCh0KSksdGhpcy5zaG93VG9vbHRpcChsKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnRvb2x0aXBNb3ZlRXZlbnQse3Bhc3NpdmU6ITB9KX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pLHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlcyYmdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2xdJiZ0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbbF0ubGluayl7aS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmtcIix0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbbF0ubGluayksdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2xdLmxpbmtUYXJnZXQmJmkuc2V0QXR0cmlidXRlKFwiZGF0YS1saW5rLXRhcmdldFwiLHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tsXS5saW5rVGFyZ2V0KTtsZXQgbz0hMTtpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixmdW5jdGlvbigpe289ITF9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZnVuY3Rpb24oKXtvPSExfSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsZnVuY3Rpb24oKXtvPSEwfSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZnVuY3Rpb24oKXtvPSEwfSk7bD1mdW5jdGlvbihsKXt2YXIgdCxlO298fCh0PWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5rXCIpLChlPWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5rLXRhcmdldFwiKSk/d2luZG93Lm9wZW4odCxlKTp3aW5kb3cubG9jYXRpb24uaHJlZj10KX07aS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixsKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGwpfWkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbigpe3RoaXMuaGlkZVRvb2x0aXAoKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnRvb2x0aXBNb3ZlRXZlbnQse3Bhc3NpdmU6ITB9KX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsZnVuY3Rpb24oKXt0aGlzLmhpZGVUb29sdGlwKCksaS5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWFjdGl2ZVwiKSxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLnRvb2x0aXBNb3ZlRXZlbnQse3Bhc3NpdmU6ITB9KX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pfX0uYmluZCh0aGlzKSk7dmFyIG49dGhpczt0aGlzLm1hcFBhblpvb209aSh0aGlzLm1hcEltYWdlLHt6b29tRW5hYmxlZDohMCxmaXQ6ITAsY2VudGVyOiEwLG1pblpvb206dGhpcy5vcHRpb25zLm1pblpvb20sbWF4Wm9vbTp0aGlzLm9wdGlvbnMubWF4Wm9vbSx6b29tU2NhbGVTZW5zaXRpdml0eTp0aGlzLm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHksY29udHJvbEljb25zRW5hYmxlZDohMSxtb3VzZVdoZWVsWm9vbUVuYWJsZWQ6dGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCxwcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0OiEwLG9uWm9vbTpmdW5jdGlvbigpe24uc2V0Q29udHJvbFN0YXR1c2VzKCl9LGJlZm9yZVBhbjpmdW5jdGlvbihsLHQpe3ZhciBlPS44NSpuLm1hcFdyYXBwZXIub2Zmc2V0V2lkdGgsbz0uODUqbi5tYXBXcmFwcGVyLm9mZnNldEhlaWdodCxpPXRoaXMuZ2V0U2l6ZXMoKSxhPS0oKGkudmlld0JveC54K2kudmlld0JveC53aWR0aCkqaS5yZWFsWm9vbSkrZSxMPWkud2lkdGgtZS1pLnZpZXdCb3gueCppLnJlYWxab29tLGU9LSgoaS52aWV3Qm94LnkraS52aWV3Qm94LmhlaWdodCkqaS5yZWFsWm9vbSkrbyxpPWkuaGVpZ2h0LW8taS52aWV3Qm94LnkqaS5yZWFsWm9vbTtyZXR1cm57eDpNYXRoLm1heChhLE1hdGgubWluKEwsdC54KSkseTpNYXRoLm1heChlLE1hdGgubWluKGksdC55KSl9fX0pLDAhPXRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnh8fDAhPXRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnk/dGhpcy5tYXBQYW5ab29tLnpvb21BdFBvaW50QnkodGhpcy5vcHRpb25zLmluaXRpYWxab29tLHt4OnRoaXMub3B0aW9ucy5pbml0aWFsUGFuLngseTp0aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi55fSk6dGhpcy5tYXBQYW5ab29tLnpvb20odGhpcy5vcHRpb25zLmluaXRpYWxab29tKSx0aGlzLnNldENvbnRyb2xTdGF0dXNlcygpfSxhLnByb3RvdHlwZS5nZXRUb29sdGlwQ29udGVudD1mdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMub25HZXRUb29sdGlwKXt2YXIgbD10aGlzLm9wdGlvbnMub25HZXRUb29sdGlwKHRoaXMudG9vbHRpcCxlLHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tlXSk7aWYobClyZXR1cm4gbH1sPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtY29udGVudC1jb250YWluZXJcIik7ITE9PT10aGlzLm9wdGlvbnMuaGlkZUZsYWcmJih0PXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtZmxhZy1jb250YWluZXIgc3ZnTWFwLXRvb2x0aXAtZmxhZy1jb250YWluZXItXCIrdGhpcy5vcHRpb25zLmZsYWdUeXBlLGwpLFwiaW1hZ2VcIj09PXRoaXMub3B0aW9ucy5mbGFnVHlwZT90aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixcInN2Z01hcC10b29sdGlwLWZsYWdcIix0KS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix0aGlzLm9wdGlvbnMuZmxhZ1VSTC5yZXBsYWNlKFwiezB9XCIsZS50b0xvd2VyQ2FzZSgpKSk6XCJlbW9qaVwiPT09dGhpcy5vcHRpb25zLmZsYWdUeXBlJiYodC5pbm5lckhUTUw9dGhpcy5lbW9qaUZsYWdzW2VdKSksdGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC10aXRsZVwiLGwpLmlubmVySFRNTD10aGlzLmdldENvdW50cnlOYW1lKGUpO3ZhciBvLHQ9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1jb250ZW50XCIsbCk7cmV0dXJuIHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tlXT8obz1cIjx0YWJsZT5cIixPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMuZGF0YS5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe3ZhciB0PXRoaXMub3B0aW9ucy5kYXRhLmRhdGFbbF0sbD10aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbZV1bbF07KHZvaWQgMCE9PWwmJiEwPT09dGhpcy5vcHRpb25zLmhpZGVNaXNzaW5nRGF0YXx8ITE9PT10aGlzLm9wdGlvbnMuaGlkZU1pc3NpbmdEYXRhKSYmKHQuZmxvYXRpbmdOdW1iZXJzJiYobD1sLnRvRml4ZWQoMSkpLHQudGhvdXNhbmRTZXBhcmF0b3ImJihsPXRoaXMubnVtYmVyV2l0aENvbW1hcyhsLHQudGhvdXNhbmRTZXBhcmF0b3IpKSxsPXQuZm9ybWF0P3QuZm9ybWF0LnJlcGxhY2UoXCJ7MH1cIixcIjxzcGFuPlwiK2wrXCI8L3NwYW4+XCIpOlwiPHNwYW4+XCIrbCtcIjwvc3Bhbj5cIixvKz1cIjx0cj48dGQ+XCIrKHQubmFtZXx8XCJcIikrXCI8L3RkPjx0ZD5cIitsK1wiPC90ZD48L3RyPlwiKX0uYmluZCh0aGlzKSksbys9XCI8L3RhYmxlPlwiLHQuaW5uZXJIVE1MPW8pOnRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtbm8tZGF0YVwiLHQpLmlubmVySFRNTD10aGlzLm9wdGlvbnMubm9EYXRhVGV4dCxsfSxhLnByb3RvdHlwZS5zZXRDb250cm9sU3RhdHVzZXM9ZnVuY3Rpb24oKXt0aGlzLnpvb21Db250cm9sSW4uY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sSW4uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIiksdGhpcy56b29tQ29udHJvbE91dC5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xPdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIiksdGhpcy5vcHRpb25zLnNob3dab29tUmVzZXQmJih0aGlzLnpvb21Db250cm9sUmVzZXQuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sUmVzZXQuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpLHRoaXMubWFwUGFuWm9vbS5nZXRab29tKCkudG9GaXhlZCgzKTw9dGhpcy5vcHRpb25zLm1pblpvb20mJih0aGlzLnpvb21Db250cm9sT3V0LmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbE91dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKSx0aGlzLm1hcFBhblpvb20uZ2V0Wm9vbSgpLnRvRml4ZWQoMyk+PXRoaXMub3B0aW9ucy5tYXhab29tJiYodGhpcy56b29tQ29udHJvbEluLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbEluLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIikpLHRoaXMub3B0aW9ucy5zaG93Wm9vbVJlc2V0JiZ0aGlzLm1hcFBhblpvb20uZ2V0Wm9vbSgpLnRvRml4ZWQoMyk9PXRoaXMub3B0aW9ucy5pbml0aWFsWm9vbSYmKHRoaXMuem9vbUNvbnRyb2xSZXNldC5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xSZXNldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKX0sYS5wcm90b3R5cGUuem9vbU1hcD1mdW5jdGlvbihsKXtpZih0aGlzW1wiem9vbUNvbnRyb2xcIitsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2wuc2xpY2UoMSldLmNsYXNzTGlzdC5jb250YWlucyhcInN2Z01hcC1kaXNhYmxlZFwiKSlyZXR1cm4hMTtcInJlc2V0XCI9PT1sPyh0aGlzLm1hcFBhblpvb20ucmVzZXQoKSwwIT10aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi54fHwwIT10aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi55P3RoaXMubWFwUGFuWm9vbS56b29tQXRQb2ludEJ5KHRoaXMub3B0aW9ucy5pbml0aWFsWm9vbSx7eDp0aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi54LHk6dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueX0pOnRoaXMubWFwUGFuWm9vbS56b29tKHRoaXMub3B0aW9ucy5pbml0aWFsWm9vbSkpOnRoaXMubWFwUGFuWm9vbVtcImluXCI9PWw/XCJ6b29tSW5cIjpcInpvb21PdXRcIl0oKX0sYS5wcm90b3R5cGUuem9vbUNvbnRpbmVudD1mdW5jdGlvbihsKXtsPXRoaXMuY29udGluZW50c1tsXTtcIkVBXCI9PWwuaXNvP3RoaXMubWFwUGFuWm9vbS5yZXNldCgpOmwucGFuJiYodGhpcy5tYXBQYW5ab29tLnJlc2V0KCksdGhpcy5tYXBQYW5ab29tLnpvb21BdFBvaW50KGwuem9vbSxsLnBhbikpfSxhLnByb3RvdHlwZS5hZGRNb3VzZVdoZWVsWm9vbU5vdGljZT1mdW5jdGlvbigpe3ZhciBsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWJsb2NrLXpvb20tbm90aWNlXCIpO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5pbm5lckhUTUw9LTEhPW5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJNYWNcIik/dGhpcy5vcHRpb25zLm1vdXNlV2hlZWxLZXlNZXNzYWdlTWFjOnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsS2V5TWVzc2FnZSxsLmFwcGVuZCh0KSx0aGlzLndyYXBwZXIuYXBwZW5kKGwpfSxhLnByb3RvdHlwZS5zaG93TW91c2VXaGVlbFpvb21Ob3RpY2U9ZnVuY3Rpb24obCl7dGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlbnx8KHRoaXMuYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCksdGhpcy5hdXRvSGlkZU1vdXNlV2hlZWxOb3RpY2VUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzLmhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZSgpfS5iaW5kKHRoaXMpLGx8fDI0MDApLHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLWJsb2NrLXpvb20tbm90aWNlLWFjdGl2ZVwiKSl9LGEucHJvdG90eXBlLmhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZT1mdW5jdGlvbigpe3RoaXMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWJsb2NrLXpvb20tbm90aWNlLWFjdGl2ZVwiKSx0aGlzLmF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLmF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQpfSxhLnByb3RvdHlwZS5ibG9ja01vdXNlV2hlZWxab29tTm90aWNlPWZ1bmN0aW9uKGwpe3RoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW49ITAsdGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlblRpbWVvdXQmJmNsZWFyVGltZW91dCh0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuVGltZW91dCksdGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlblRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW49ITF9LmJpbmQodGhpcyksbHx8NjAwKX0sYS5wcm90b3R5cGUuYWRkTW91c2VXaGVlbFpvb21XaXRoS2V5RXZlbnRzPWZ1bmN0aW9uKCl7aWYodGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGZ1bmN0aW9uKGwpe2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ZnTWFwLXpvb20ta2V5LXByZXNzZWRcIik/KHRoaXMuaGlkZU1vdXNlV2hlZWxab29tTm90aWNlKCksdGhpcy5ibG9ja01vdXNlV2hlZWxab29tTm90aWNlKCkpOnRoaXMuc2hvd01vdXNlV2hlZWxab29tTm90aWNlKCl9LmJpbmQodGhpcykse3Bhc3NpdmU6ITB9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGZ1bmN0aW9uKGwpe1wiQWx0XCIhPWwua2V5JiZcIkNvbnRyb2xcIiE9bC5rZXkmJlwiTWV0YVwiIT1sLmtleSYmXCJTaGlmdFwiIT1sLmtleXx8KGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInN2Z01hcC16b29tLWtleS1wcmVzc2VkXCIpLHRoaXMuaGlkZU1vdXNlV2hlZWxab29tTm90aWNlKCksdGhpcy5ibG9ja01vdXNlV2hlZWxab29tTm90aWNlKCkpfS5iaW5kKHRoaXMpKSx0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsZnVuY3Rpb24obCl7KGwuYWx0S2V5fHxsLmN0cmxLZXl8fGwubWV0YUtleXx8bC5zaGlmdEtleSkmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInN2Z01hcC16b29tLWtleS1wcmVzc2VkXCIpfSksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdmdNYXAta2V5LWV2ZW50cy1hZGRlZFwiKSlyZXR1cm4hMTtkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAta2V5LWV2ZW50cy1hZGRlZFwiKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixmdW5jdGlvbihsKXtcIkFsdFwiIT1sLmtleSYmXCJDb250cm9sXCIhPWwua2V5JiZcIk1ldGFcIiE9bC5rZXkmJlwiU2hpZnRcIiE9bC5rZXl8fGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC16b29tLWtleS1wcmVzc2VkXCIpfSl9LGEucHJvdG90eXBlLm1hcFBhdGhzPXtBRjp7ZDpcIk0xMzY5LjksMzMzLjhoLTUuNGwtMy44LTAuNWwtMi41LDIuOWwtMi4xLDAuN2wtMS41LDEuM2wtMi42LTIuMWwtMS01LjRsLTEuNi0wLjN2LTJsLTMuMi0xLjVsLTEuNywyLjNsMC4yLDIuNiBsLTAuNiwwLjlsLTMuMi0wLjFsLTAuOSwzbC0yLjEtMS4zbC0zLjMsMi4xbC0xLjgtMC44bC00LjMtMS40aC0yLjlsLTEuNi0wLjJsLTIuOS0xLjdsLTAuMywyLjNsLTQuMSwxLjJsMC4xLDUuMmwtMi41LDJsLTQsMC45IGwtMC40LDNsLTMuOSwwLjhsLTUuOS0yLjRsLTAuNSw4bC0wLjUsNC43bDIuNSwwLjlsLTEuNiwzLjVsMi43LDUuMWwxLjEsNGw0LjMsMS4xbDEuMSw0bC0zLjksNS44bDkuNiwzLjJsNS4zLTAuOWwzLjMsMC44bDAuOS0xLjQgbDMuOCwwLjVsNi42LTIuNmwtMC44LTUuNGwyLjMtMy42aDRsMC4yLTEuN2w0LTAuOWwyLjEsMC42bDEuNy0xLjhsLTEuMS0zLjhsMS41LTMuOGwzLTEuNmwtMy00LjJsNS4xLDAuMmwwLjktMi4zbC0wLjgtMi41bDItMi43IGwtMS40LTMuMmwtMS45LTIuOGwyLjQtMi44bDUuMy0xLjNsNS44LTAuOGwyLjQtMS4ybDIuOC0wLjdMMTM2OS45LDMzMy44TDEzNjkuOSwzMzMuOHpcIn0sQUw6e2Q6XCJNMTA3Ny41LDMwMC41bC0yLDMuMWwwLjUsMS45bDAsMGwxLDFsLTAuNSwxLjlsLTAuMSw0LjNsMC43LDNsMywyLjFsMC4yLDEuNGwxLDAuNGwyLjEtM2wwLjEtMi4xbDEuNi0wLjlWMzEyIGwtMi4zLTEuNmwtMC45LTIuNmwwLjQtMi4xbDAsMGwtMC41LTIuM2wtMS4zLTAuNmwtMS4zLTEuNmwtMS4zLDAuNUwxMDc3LjUsMzAwLjVMMTA3Ny41LDMwMC41elwifSxEWjp7ZDpcIk0xMDIxLDMzNi45bC0zLjYsMC40bC0yLjItMS41aC01LjZsLTQuOSwyLjZsLTIuNy0xbC04LjcsMC41bC04LjksMS4ybC01LDJsLTMuNCwyLjZsLTUuNywxLjJsLTUuMSwzLjVsMiw0LjEgbDAuMywzLjlsMS44LDYuN2wxLjQsMS40bC0xLDIuNWwtNywxbC0yLjUsMi40bC0zLjEsMC41bC0wLjMsNC43bC02LjMsMi41bC0yLjEsMy4yTDk0NCwzODNsLTUuNCwxbC04LjksNC43bC0wLjEsNy41djAuNGwtMC4xLDEuMiBsMjAuMywxNS41bDE4LjQsMTMuOWwxOC42LDEzLjhsMS4zLDNsMy40LDEuOGwyLjYsMS4xbDAuMSw0bDYuMS0wLjZsNy44LTIuOGwxNS44LTEyLjVsMTguNi0xMi4ybC0yLjUtNGwtNC4zLTIuOWwtMi42LDEuMmwtMi0zLjYgbC0wLjItMi43bC0zLjQtNC43bDIuMS0yLjZsLTAuNS00bDAuNi0zLjVsLTAuNS0yLjlsMC45LTUuMmwtMC40LTNsLTEuOS01LjZsLTIuNi0xMS4zbC0zLjQtMi42di0xLjVsLTQuNS0zLjhsLTAuNi00LjhsMy4yLTMuNiBsMS4xLTUuM2wtMS02LjJMMTAyMSwzMzYuOUwxMDIxLDMzNi45elwifSxBRDp7ZDpcIk05ODUuNCwzMDEuN2wwLjItMC40bC0wLjItMC4ybC0wLjctMC4ybC0wLjMtMC4xbC0wLjQsMC4zbC0wLjEsMC4zbDAuMSwwLjF2MC40bDAuMSwwLjJoMC40TDk4NS40LDMwMS43IEw5ODUuNCwzMDEuN3pcIn0sQU86e2Q6XCJNMTA2OC4zLDYwOS42bC0xNi42LTAuMWwtMS45LDAuN2wtMS43LTAuMWwtMi4zLDAuOWwtMC41LDEuMmwyLjgsNGwxLjEsNC4zbDEuNiw2LjFsLTEuNywyLjZsLTAuMywxLjNsMS4zLDMuOCBsMS41LDMuOWwxLjYsMi4ybDAuMywzLjZsLTAuNyw0LjhsLTEuOCwyLjhsLTMuMyw0LjJsLTEuMywyLjZsLTEuOSw1LjdsLTAuMywyLjdsLTIsNS45bC0wLjksNS41bDAuNSw0bDIuNy0xLjJsMy4zLTFsMy42LDAuMSBsMy4yLDIuOWwwLjktMC40bDIyLjUtMC4zbDMuNywzbDEzLjQsMC45bDEwLjMtMi41bC0zLjUtNGwtMy42LTUuMmwwLjgtMjAuM2wxMS42LDAuMWwtMC41LTIuMmwwLjktMi40bC0wLjktM2wwLjctM2wtMC41LTIgbC0yLjYtMC40bC0zLjUsMWwtMi40LTAuMmwtMS40LDAuNmwwLjUtNy42bC0xLjktMi4zbC0wLjMtNGwwLjktMy44bC0xLjItMi40di00aC02LjhsMC41LTIuM2gtMi45bC0wLjMsMS4xbC0zLjQsMC4zbC0xLjUsMy43IGwtMC45LDEuNmwtMy0wLjlsLTEuOSwwLjlsLTMuNywwLjVsLTIuMS0zLjNsLTEuMy0yLjFsLTEuNi0zLjhMMTA2OC4zLDYwOS42TDEwNjguMyw2MDkuNnogTTEwNDYuNSw2MDguM2wwLjItMi43bDAuOS0xLjdsMi0xLjMgbC0yLTIuMmwtMS44LDEuMWwtMi4yLDIuN2wxLjQsNC44TDEwNDYuNSw2MDguM0wxMDQ2LjUsNjA4LjN6XCJ9LEFJOntkOlwiTTYyNy45LDQ1Ni4ybDAuMS0wLjJsLTAuMi0wLjFsLTAuOCwwLjV2MC4xTDYyNy45LDQ1Ni4yelwifSxBRzp7ZDpcIk02MzQuMyw0NjMuOGwwLjItMC4xdi0wLjF2LTAuMmwtMC4xLTAuMWwtMC4xLTAuMmwtMC40LTAuMmwtMC41LDAuNXYwLjJsMC4xLDAuM2wwLjYsMC4xTDYzNC4zLDQ2My44TDYzNC4zLDQ2My44eiBNNjM0LjUsNDYwLjN2LTAuNWwtMC4xLTAuMmgtMC4zbC0wLjEtMC4xaC0wLjFsLTAuMSwwLjFsMC4xLDAuNmwwLjUsMC4zTDYzNC41LDQ2MC4zTDYzNC41LDQ2MC4zelwifSxBUjp7ZDpcIk02NjkuOCw5MjAuN2wwLjktM2wtNy4zLTEuNWwtNy43LTMuNmwtNC4zLTQuNmwtMy0yLjhsNS45LDEzLjVoNWwyLjksMC4ybDMuMywyLjFMNjY5LjgsOTIwLjdMNjY5LjgsOTIwLjd6IE02MTkuNCw3MTIuNmwtNy40LTEuNWwtNCw1LjdsMC45LDEuNmwtMS4xLDYuNmwtNS42LDMuMmwxLjYsMTAuNmwtMC45LDJsMiwyLjVsLTMuMiw0bC0yLjYsNS45bC0wLjksNS44bDEuNyw2LjJsLTIuMSw2LjUgbDQuOSwxMC45bDEuNiwxLjJsMS4zLDUuOWwtMS42LDYuMmwxLjQsNS40bC0yLjksNC4zbDEuNSw1LjlsMy4zLDYuM2wtMi41LDIuNGwwLjMsNS43bDAuNyw2LjRsMy4zLDcuNmwtMS42LDEuMmwzLjYsNy4xbDMuMSwyLjMgbC0wLjgsMi42bDIuOCwxLjNsMS4zLDIuM2wtMS44LDEuMWwxLjgsMy43bDEuMSw4LjJsLTAuNyw1LjNsMS44LDMuMmwtMC4xLDMuOWwtMi43LDIuN2wzLjEsNi42bDIuNiwyLjJsMy4xLTAuNGwxLjgsNC42bDMuNSwzLjYgbDEyLDAuOGw0LjgsMC45bDIuMiwwLjRsLTQuNy0zLjZsLTQuMS02LjNsMC45LTIuOWwzLjUtMi41bDAuNS03LjJsNC43LTMuNWwtMC4yLTUuNmwtNS4yLTEuM2wtNi40LTQuNWwtMC4xLTQuN2wyLjktMy4xbDQuNy0wLjEgbDAuMi0zLjNsLTEuMi02LjFsMi45LTMuOWw0LjEtMS45bC0yLjUtMy4ybC0yLjIsMmwtNC0xLjlsLTIuNS02LjJsMS41LTEuNmw1LjYsMi4zbDUtMC45bDIuNS0yLjJsLTEuOC0zLjFsLTAuMS00LjhsLTItMy44IGw1LjgsMC42bDEwLjItMS4zbDYuOS0zLjRsMy4zLTguM2wtMC4zLTMuMmwtMy45LTIuOGwtMC4xLTQuNWwtNy44LTUuNWwtMC4zLTMuM2wtMC40LTQuMmwwLjktMS40bC0xLjEtNi4zbDAuMy02LjVsMC41LTUuMSBsNS45LTguNmw1LjMtNi4ybDMuMy0yLjZsNC4yLTMuNWwtMC41LTUuMWwtMy4xLTMuN2wtMi42LDEuMmwtMC4zLDUuN2wtNC4zLDQuOGwtNC4yLDEuMWwtNi4yLTFsLTUuNy0xLjhsNC4yLTkuNmwtMS4xLTIuOCBsLTUuOS0yLjVsLTcuMi00LjdsLTQuNi0xTDYzMiw3MTMuN2wtMS0xLjNsLTYuMy0wLjNsLTEuNiw1LjFMNjE5LjQsNzEyLjZMNjE5LjQsNzEyLjZ6XCJ9LEFNOntkOlwiTTEyMTksMzI1LjFsLTAuOS00LjRsLTIuNS0xLjFsLTIuNS0xLjdsMS0ybC0zLjEtMi4ybDAuNy0xLjVsLTIuMi0xLjFsLTEuNC0xLjdsLTYuOSwxbDEuMywyLjJ2My4xbDQuMiwxLjUgbDIuNCwxLjlsMS0wLjJsMS44LDEuN2gyLjNsMC4yLDFsMi44LDMuN0wxMjE5LDMyNS4xTDEyMTksMzI1LjF6XCJ9LEFXOntkOlwiTTU4Ni42LDQ5Mi45bC0wLjEtMC4xbC0wLjMtMC42bC0wLjMtMC4zbC0wLjEsMC4xbC0wLjEsMC4zbDAuMywwLjNsMC4zLDAuNGwwLjMsMC4xTDU4Ni42LDQ5Mi45TDU4Ni42LDQ5Mi45elwifSxBVTp7ZDpcIk0xNzI2LjcsODMybC0zLTAuNWwtMS45LDIuOWwtMC42LDUuNGwtMi4xLDRsLTAuNSw1LjNsMywwLjJsMC44LDAuM2w2LjYtNC4zbDAuNiwxLjdsNC00LjlsMy4yLTIuMmw0LjUtNy4zIGwtMi44LTAuNWwtNC44LDEuMmwtMy40LDAuOUwxNzI2LjcsODMyTDE3MjYuNyw4MzJ6IE0xNzc2LjgsNjU5LjdsMC41LTIuM2wwLjEtMy42bC0xLjYtMy4ybDAuMS0yLjdsLTEuMy0wLjhsMC4xLTMuOWwtMS4yLTMuMiBsLTIuMywyLjRsLTAuNCwxLjhsLTEuNSwzLjVsLTEuOCwzLjRsMC42LDIuMWwtMS4yLDEuM2wtMS41LDQuOGwwLjEsMy43bC0wLjcsMS44bDAuMywzLjFsLTIuNiw1bC0xLjMsMy41bC0xLjcsMi45bC0xLjcsMy40IGwtNC4xLDIuMWwtNC45LTIuMWwtMC41LTJsLTIuNS0xLjZoLTEuNmwtMy4zLTMuOGwtMi41LTIuMmwtMy45LTJsLTMuOS0zLjVsLTAuMS0xLjhsMi41LTMuMWwyLjEtMy4ybC0wLjMtMi42bDEuOS0wLjJsMi41LTIuNSBsMi0zLjRsLTIuMi0zLjJsLTEuNSwxLjJsLTItMC41bC0zLjUsMS44bC0zLjItMmwtMS43LDAuN2wtNC41LTEuNmwtMi43LTIuN2wtMy41LTEuNWwtMy4xLDAuOWwzLjksMi4xbC0wLjMsMy4ybC00LjgsMS4ybC0yLjgtMC43IGwtMy42LDIuMmwtMi45LDMuN2wwLjYsMS41bC0yLjcsMS43bC0zLjQsNS4xbDAuNiwzLjVsLTMuNC0wLjZoLTMuNWwtMi41LTMuOGwtMy43LTIuOWwtMi44LDAuOGwtMi42LDAuOWwtMC4zLDEuNmwtMi40LTAuNyBsLTAuMywxLjhsLTMsMS4xbC0xLjcsMi41bC0zLjUsMy4xbC0xLjQsNC44bC0yLjMtMS4zbC0yLjIsMy4xbDEuNSwzbC0yLjYsMS4ybC0xLjQtNS41bC00LjgsNS40bC0wLjgsMy41bC0wLjcsMi41bC0zLjgsMy4zIGwtMiwzLjRsLTMuNSwyLjhsLTYuMSwxLjlsLTMuMS0wLjJsLTEuNSwwLjZsLTEuMSwxLjRsLTMuNSwwLjdsLTQuNywyLjRsLTEuNC0wLjhsLTIuNiwwLjVsLTQuNiwyLjNsLTMuMiwyLjdsLTQuOCwyLjFsLTMuMSw0LjQgbDAuNC00LjhsLTMuMSw0LjZsLTAuMSwzLjdsLTEuMywzLjJsLTEuNSwxLjVsLTEuMywzLjdsMC45LDEuOWwwLjEsMmwxLjYsNWwtMC43LDMuM2wtMS0yLjVsLTIuMy0xLjhsMC40LDUuOWwtMS43LTIuOGwwLjEsMi44IGwxLjgsNWwtMC42LDVsMS43LDIuNWwtMC40LDEuOWwwLjksNC4xbC0xLjMsMy42bC0wLjMsMy42bDAuNyw2LjVsLTAuNywzLjdsLTIuMiw0LjRsLTAuNiwyLjNsLTEuNSwxLjVsLTIuOSwwLjhsLTEuNSwzLjdsMi40LDEuMiBsNCw0LjFoMy42bDMuOCwwLjNsMy4zLTIuMWwzLjQtMS44bDEuNCwwLjNsNC41LTMuNGwzLjgtMC4zbDQuMS0wLjdsNC4yLDEuMmwzLjYtMC42bDQuNi0wLjJsMy0yLjZsMi4zLTMuM2w1LjItMS41bDYuOS0zLjJsNSwwLjQgbDYuOS0yLjFsNy44LTIuM2w5LjgtMC42bDQsMy4xbDMuNywwLjJsNS4zLDMuOGwtMS42LDEuNWwxLjgsMi40bDEuMyw0LjZsLTEuNiwzLjRsMi45LDIuNmw0LjMtNS4xbDQuMy0yLjFsNi43LTUuNWwtMS42LDQuNyBsLTMuNCwzLjJsLTIuNSwzLjdsLTQuNCwzLjVsNS4yLTEuMmw0LjctNC40bC0wLjksNC44bC0zLjIsMy4xbDQuNywwLjhsMS4zLDIuNmwtMC40LDMuM2wtMS41LDQuOWwxLjQsNGw0LDEuOWwyLjgsMC40bDIuNCwxIGwzLjUsMS44bDcuMi00LjdsMy41LTEuMmwtMi43LDMuNGwyLjYsMS4xbDIuNywyLjhsNC43LTIuN2wzLjgtMi41bDYuMy0yLjdsNi0wLjJsNC4yLTIuM2wwLjktMmwzLTQuNWwzLjktNC44bDMuNi0zLjJsNC40LTUuNiBsMy4zLTMuMWw0LjQtNWw1LjQtMy4xbDUtNS44bDMuMS00LjVsMS40LTMuNmwzLjgtNS43bDIuMS0yLjlsMi41LTUuN2wtMC43LTUuNGwxLjctMy45bDEuMS0zLjd2LTUuMWwtMi44LTUuMWwtMS45LTIuNWwtMi45LTMuOSBsMC43LTYuN2wtMS41LDFsLTEuNi0yLjhsLTIuNSwxLjRsLTAuNi02LjlsLTIuMi00bDEtMS41bC0zLjEtMi44bC0zLjItM2wtNS4zLTMuM2wtMC45LTQuM2wxLjMtMy4zbC0wLjQtNS41bC0xLjMtMC43bC0wLjItMy4yIGwtMC4yLTUuNWwxLjEtMi44bC0yLjMtMi41bC0xLjQtMi43bC0zLjksMi40TDE3NzYuOCw2NTkuN0wxNzc2LjgsNjU5Ljd6XCJ9LEFUOntkOlwiTTEwNjAuMiwyNjRsLTIuMy0xLjJsLTIuMywwLjNsLTQtMS45bC0xLjcsMC41bC0yLjYsMi41bC0zLjgtMmwtMS41LDIuOWwtMS43LDAuOGwxLDRsLTAuNCwxLjFsLTEuNy0xLjNsLTIuNC0wLjIgbC0zLjQsMS4ybC00LjQtMC4zbC0wLjYsMS42bC0yLjYtMS43bC0xLjUsMC4zbDAuMiwxLjFsLTAuNywxLjZsMi4zLDEuMWwyLjYsMC4ybDMuMSwwLjlsMC41LTEuMmw0LjgtMS4xbDEuMywyLjJsNy4yLDEuNmw0LjIsMC40IGwyLjQtMS40bDQuMy0wLjFsMC45LTEuMWwxLjMtNGwtMS4xLTEuM2gyLjhsMC4yLTIuNmwtMC43LTIuMUwxMDYwLjIsMjY0TDEwNjAuMiwyNjR6XCJ9LEFaOntkOlwiTTEyMTAuMSwzMTguOWwtMSwwLjJsMS4yLDIuNGwzLjIsMi45bDMuNywwLjlsLTIuOC0zLjdsLTAuMi0xaC0yLjNMMTIxMC4xLDMxOC45TDEyMTAuMSwzMTguOXogTTEyMjAuNSwzMDkuNiBsLTQuMy0zLjhsLTEuNS0wLjJsLTEuMSwwLjlsMy4yLDMuNGwtMC42LDAuN2wtMi44LTAuNGwtNC4yLTEuOGwtMS4xLDFsMS40LDEuN2wyLjIsMS4xbC0wLjcsMS41bDMuMSwyLjJsLTEsMmwyLjUsMS43bDIuNSwxLjEgbDAuOSw0LjRsNS4zLTQuN2wxLjktMC41bDEuOSwxLjlsLTEuMiwzLjFsMy44LDMuNGwxLjMtMC4zbC0wLjgtMy4ybDEuNy0xLjVsMC40LTIuMmwtMC4xLTVsNC4yLTAuNWwtMi0xLjdsLTIuNS0wLjJsLTMuNS00LjUgbC0zLjQtMy4ybDAsMGwtMi42LDIuNWwtMC41LDEuNUwxMjIwLjUsMzA5LjZMMTIyMC41LDMwOS42elwifSxCUzp7ZDpcIk01NzQuNCw0MzcuM2wwLjItMC42bC0wLjMtMC4xbC0wLjUsMC43bC0wLjYsMC4zaC0wLjNsLTAuNy0wLjNoLTAuNWwtMC40LDAuNWwtMC42LDAuMWwwLjEsMC4xdjAuMmwtMC4yLDAuM3YwLjIgbDAuMSwwLjNsMS41LTAuMWwxLjMtMC4ybDAuNy0wLjlMNTc0LjQsNDM3LjN6IE01NzUuMiw0MzUuM2wtMC40LTAuM2wtMC40LDAuM2wwLjEsMC4zTDU3NS4yLDQzNS4zTDU3NS4yLDQzNS4zeiBNNTc1LjIsNDI5LjUgbC0wLjQtMC4ybC0wLjMsMC41bDAuMywwLjFsMC43LTAuMWwwLjUsMC4xbDAuNSwwLjRsMC4zLTAuMmwtMC4xLTAuMWwtMC40LTAuM2wtMC42LTAuMWgtMC4yTDU3NS4yLDQyOS41TDU3NS4yLDQyOS41eiBNNTY4LjYsNDMwLjhsMC43LTAuNmwwLjctMC4zbDAuOS0xLjFsLTAuMS0wLjlsMC4yLTAuNGwtMC42LDAuMWwtMC4xLDAuM2wtMC4xLDAuM2wwLjMsMC40djAuMmwtMC4yLDAuNGwtMC4zLDAuMWwtMC4xLDAuMiBsLTAuMywwLjFsLTAuNCwwLjVsLTAuOCwwLjZsLTAuMiwwLjNMNTY4LjYsNDMwLjhMNTY4LjYsNDMwLjh6IE01NjkuOCw0MjcuNmwtMC42LTAuMkw1NjksNDI3bC0wLjQtMC4xbC0wLjEsMC4ydjAuMmwwLjEsMC40IGwwLjItMC4xbDAuOCwwLjRsMC40LTAuM0w1NjkuOCw0MjcuNnogTTU2NS43LDQyNi41di0wLjdsLTAuNC0wLjVsLTAuNi0wLjRsLTAuMS0xLjJsLTAuMy0wLjdsLTAuMi0wLjZsLTAuNC0wLjh2MC41bDAuMSwwLjEgbDAuMSwwLjZsMC40LDAuOWwwLjEsMC40bC0wLjEsMC40bC0wLjQsMC4xbC0wLjEsMC4ybDAuNSwwLjNsMC44LDAuM2wwLjUsMS4zTDU2NS43LDQyNi41TDU2NS43LDQyNi41eiBNNTYxLjYsNDIzbC0wLjUtMC4zIGwtMC4yLTAuM2wtMC43LTAuN2wtMC4zLTAuMWwtMC4yLDAuNGwwLjQsMC4xbDAuOSwwLjdsMC40LDAuMkw1NjEuNiw0MjNMNTYxLjYsNDIzeiBNNTY4LjksNDE5bC0wLjEtMC4zaC0wLjFsLTAuMywwLjFsLTAuMywwLjkgaDAuM0w1NjguOSw0MTlMNTY4LjksNDE5eiBNNTUxLjMsNDE3LjlsLTAuMi0wLjNsLTAuMywwLjJoLTAuNWwtMC4yLDAuMWgtMC40bC0wLjMsMC4ybDAuNCwwLjhsMC4zLDAuM2wwLjEsMWwwLjIsMC4xbC0wLjEsMC43IGwxLjEsMC4xbDAuNC0wLjhWNDIwdi0wLjF2LTAuMnYtMC4ydi0wLjlsLTAuMy0wLjVsLTAuNCwwLjZsLTAuNC0wLjNsMC42LTAuNEw1NTEuMyw0MTcuOUw1NTEuMyw0MTcuOXogTTU2NC4yLDQxOC4ybC0xLTEuNHYtMC4yIGwtMC41LTEuNWwtMC4zLTAuMWwtMC4xLDAuMWwtMC4xLDAuMmwwLjQsMC40djAuNGwwLjMsMC4ybDAuNCwxLjFsMC40LDAuNGwtMC4xLDAuM2wtMC40LDAuM2wtMC4xLDAuMmgwLjFsMC42LTAuMWgwLjRMNTY0LjIsNDE4LjIgTDU2NC4yLDQxOC4yeiBNNTUzLjcsNDEzbDAuNS0wLjJsMCwwbC0wLjMtMC4yaC0wLjdsLTAuNCwwLjFsLTAuMiwwLjJsMC4xLDAuMWwwLjQsMC4xTDU1My43LDQxM0w1NTMuNyw0MTN6IE01NTEuMyw0MTVsLTAuNS0wLjYgbC0wLjMtMC45bC0wLjItMC40bDAuMS0wLjVsLTAuMy0wLjRsLTAuNi0wLjRsLTAuMywwLjFsMC4xLDEuMWwtMC4yLDAuNmwtMC44LDEuMWwwLjEsMC40bDAsMGwwLjEsMC4ybC0wLjUsMC40di0wLjNsLTAuNiwwLjEgbDAuMywwLjVsMC42LDAuNGwwLjMsMC4xbDAuMy0wLjJ2MC41bDAuMywwLjRsMC4xLDAuNGwwLjMtMC4zbDAuNi0wLjJsMC4yLTAuMmwwLjctMC40di0wLjJsMC4xLTAuNkw1NTEuMyw0MTVMNTUxLjMsNDE1eiBNNTU4LDQxMCBsLTAuMy0wLjVsLTAuMSwwLjFsLTAuMSwwLjRsLTAuMywwLjRsMC41LTAuMWwwLjQsMC4xbDAuNiwwLjVsMC43LDAuMmwwLjMsMC42bDAuNiwwLjZ2MC42bC0wLjQsMC42bC0wLjEsMC43bC0wLjYsMC4xbDAuMSwwLjEgbDAuMywwLjNsMC4xLDAuNGwwLjIsMC4ydi0wLjdsMC4zLTAuOGwwLjQtMS4zbC0wLjEtMC4zbC0wLjMtMC4zbC0wLjctMC45bC0wLjctMC4zTDU1OCw0MTBMNTU4LDQxMHogTTU0OS4yLDQwMi4xbC0wLjUtMC40IGwtMC4yLDAuNHYwLjFsLTAuMSwwLjNsLTAuNSwwLjRsLTAuNSwwLjFsLTAuNy0wLjZsLTAuMi0wLjFsMC44LDEuMWwwLjMsMC4xaDAuNGwwLjktMC4zbDEuNi0wLjVsMS43LTAuMmwwLjEtMC4ybC0wLjEtMC4zIGwtMC44LDAuMmwtMS0wLjFsLTAuMiwwLjJoLTAuNEw1NDkuMiw0MDIuMXogTTU1NS4zLDQwNy4zbDAuMi0wLjNsMC40LTEuOGwwLjgtMC42bDAuMS0xLjJsLTAuNS0wLjVsLTAuNC0wLjJsLTAuMS0wLjJsMC4xLTAuMiBsLTAuMi0wLjFsLTAuMy0wLjJsLTAuNC0wLjZsLTAuNC0wLjRsLTAuNy0wLjFsLTAuNi0wLjFsLTAuNC0wLjFsLTAuNSwwLjNoMC44bDEuNSwwLjNsMC43LDEuNWwwLjUsMC40bDAuMSwwLjRsLTAuMiwwLjR2MC40IGwtMC4zLDAuNWwtMC4xLDAuOGwtMC4zLDAuNGwtMC43LDAuNWwwLjQsMC4ybDAuMywwLjZMNTU1LjMsNDA3LjNMNTU1LjMsNDA3LjN6XCJ9LEJIOntkOlwiTTEyNTMsNDA4LjNsMC43LTNsLTAuNS0wLjlsLTEuNiwxLjJsMC42LDAuOWwtMC4yLDAuN0wxMjUzLDQwOC4zelwifSxCRDp7ZDpcIk0xNDg2LjUsNDMxLjlsLTQuNS0xMC4xbC0xLjUsMC4xbC0wLjIsNGwtMy41LTMuM2wxLjEtMy42bDIuNC0wLjRsMS42LTUuM2wtMy40LTEuMWwtNSwwLjFsLTUuNC0wLjlsLTEuMi00LjQgbC0yLjctMC40bC00LjgtMi43bC0xLjIsNC4zbDQuNiwzLjRsLTMuMSwyLjRsLTAuOCwyLjNsMy43LDEuN2wtMC40LDMuOGwyLjYsNC44bDEuNiw1LjJsMi4yLDAuNmwxLjcsMC43bDAuNi0xLjJsMi41LDEuM2wxLjMtMy41IGwtMC45LTIuNmw1LjEsMC4ybDIuOCwzLjdsMS41LDMuMWwwLjgsMy4ybDIsMy4zbC0xLjEtNS4xbDIuMSwxTDE0ODYuNSw0MzEuOUwxNDg2LjUsNDMxLjl6XCJ9LEJCOntkOlwiTTY0NC45LDQ4OC45bDAuNC0wLjRsLTAuMy0wLjNsLTAuNi0wLjhsLTAuMywwLjF2MWwwLjEsMC4zbDAuNSwwLjNMNjQ0LjksNDg4LjlMNjQ0LjksNDg4Ljl6XCJ9LEJZOntkOlwiTTExMTIuOCwyMTkuNGwtNS4yLTEuNWwtNC42LDIuM2wtMi42LDFsMC45LDIuNmwtMy41LDJsLTAuNSwzLjRsLTQuOCwyLjJoLTQuNmwwLjYsMi43bDEuNywyLjNsMC4zLDIuNGwtMi43LDEuMiBsMS45LDIuOWwwLjUsMi43bDIuMi0wLjNsMi40LTEuNmwzLjctMC4ybDUsMC41bDUuNiwxLjVsMy44LDAuMWwyLDAuOWwxLjYtMS4xbDEuNSwxLjVsNC4zLTAuM2wyLDAuNmwtMC4yLTMuMWwxLjItMS40bDQuMS0wLjNsMCwwIGwtMi0zLjlsLTEuNS0ybDAuOC0wLjZsMy45LDAuMmwxLjYtMS4zbC0xLjctMS42bC0zLjQtMS4xbDAuMS0xLjFsLTIuMi0xLjFsLTMuNy0zLjlsMC42LTEuNmwtMS0yLjlsLTQuOC0xLjRsLTIuMywwLjcgTDExMTIuOCwyMTkuNEwxMTEyLjgsMjE5LjR6XCJ9LEJFOntkOlwiTTEwMDAuNywyNDYuMmwtNC40LDEuM2wtMy42LTAuNWwwLDBsLTMuOCwxLjJsMC43LDIuMmwyLjIsMC4xbDIuNCwyLjRsMy40LDIuOWwyLjUtMC40bDQuNCwyLjhsMC40LTMuNWwxLjMtMC4yIGwwLjQtNC4ybC0yLjgtMS40TDEwMDAuNywyNDYuMkwxMDAwLjcsMjQ2LjJ6XCJ9LEJaOntkOlwiTTQ4Mi41LDQ3MS4xbDEuNC0yLjJsMS0wLjJsMS4zLTEuN2wxLTMuMmwtMC4zLTAuNmwwLjktMi4zbC0wLjQtMWwxLjMtMi43bDAuMy0xLjhoLTEuMWwwLjEtMC45aC0xbC0yLjUsMy45IGwtMC45LTAuOGwtMC43LDAuM2wtMC4xLDFsLTAuNyw1bC0xLjIsNy4yTDQ4Mi41LDQ3MS4xTDQ4Mi41LDQ3MS4xelwifSxCSjp7ZDpcIk05OTYuOSw0OThsLTQuMy0zLjdoLTJsLTEuOSwxLjlsLTEuMiwxLjlsLTIuNywwLjZsLTEuMiwyLjhsLTEuOSwwLjdsLTAuNywzLjNsMS43LDEuOWwyLDIuM2wwLjIsMy4xbDEuMSwxLjMgbC0wLjIsMTQuNmwxLjQsNC40bDQuNi0wLjhsMC4zLTEwLjJMOTkyLDUxOGwxLTRsMS43LTEuOWwyLjctNGwtMC42LTEuN2wxLjEtMi41bC0xLjItMy44TDk5Ni45LDQ5OEw5OTYuOSw0OTh6XCJ9LEJNOntkOlwiTTYzMC4yLDM2Ni44bDAuNC0wLjZoLTAuMWwtMC41LDAuNWwtMC42LDAuMmwwLjEsMC4xaDAuMUw2MzAuMiwzNjYuOHpcIn0sQlQ6e2Q6XCJNMTQ3NC43LDM5NS41bC0yLjctMS44bC0yLjktMC4xbC00LjItMS41bC0yLjYsMS42bC0yLjYsNC44bDAuMywxLjJsNS41LDIuNWwzLjItMWw0LjcsMC40bDQuNC0wLjJsLTAuNC0zLjkgTDE0NzQuNywzOTUuNUwxNDc0LjcsMzk1LjV6XCJ9LEJPOntkOlwiTTY1NS43LDcwMC41bDEuNi0xLjNsLTAuOC0zLjZsMS4zLTIuOGwwLjUtNWwtMS42LTRsLTMuMi0xLjdsLTAuOC0yLjZsMC42LTMuNmwtMTAuNy0wLjNsLTIuNy03LjRsMS42LTAuMSBsLTAuMy0yLjhsLTEuMi0xLjhsLTAuNS0zLjdsLTMuMy0xLjlsLTMuNSwwLjFsLTIuNS0xLjlsLTMuOC0xLjJsLTIuNC0yLjRsLTYuMy0xbC02LjQtNS43bDAuMy00LjNsLTAuOS0yLjVsMC40LTQuN2wtNy4zLDEuMSBsLTIuOCwyLjNsLTQuOCwyLjZsLTEuMSwxLjlsLTIuOSwwLjJsLTQuMi0wLjZsNS41LDEwLjNsLTEuMSwyLjFsMC4xLDQuNWwwLjMsNS40bC0xLjksMy4ybDEuMiwyLjRsLTEuMSwyLjFsMi44LDUuM0w1OTEsNjg0IGwzLjEsNC4zbDEuMiw0LjZsMy4yLDIuN2wtMS4xLDYuMmwzLjcsNy4xbDMuMSw4LjhsMy44LTAuOWw0LTUuN2w3LjQsMS41bDMuNyw0LjZsMS42LTUuMWw2LjMsMC4zbDEsMS4zbDEuNS03LjZsLTAuMi0zLjRsMi4xLTUuNiBsOS41LTEuOWw1LjEsMC4xbDUuNCwzLjNMNjU1LjcsNzAwLjVMNjU1LjcsNzAwLjV6XCJ9LEJBOntkOlwiTTEwNjIuMiwyODQuOWwtMi4zLDAuMWwtMSwxLjNsLTEuOS0xLjRsLTAuOSwyLjVsMi43LDIuOWwxLjMsMS45bDIuNSwyLjNsMiwxLjRsMi4yLDIuNWw0LjcsMi40bDAuNC0zLjRsMS41LTEuNCBsMC45LTAuNmwxLjItMC4zbDAuNS0yLjlsLTIuNy0yLjNsMS0yLjdoLTEuOGwwLDBsLTIuNC0xLjRsLTMuNSwwLjFMMTA2Mi4yLDI4NC45TDEwNjIuMiwyODQuOXpcIn0sQlc6e2Q6XCJNMTExNi43LDY4NWwtMS0wLjVsLTMuMiwxLjVoLTEuNmwtMy43LDIuNWwtMi0yLjZsLTguNiwyLjJsLTQuMSwwLjJsLTAuOSwyMi43bC01LjQsMC4ybC0wLjYsMTguNWwxLjQsMWwzLDYuMSBsLTAuNywzLjhsMS4xLDIuM2w0LTAuN2wyLjgtMi44bDIuNy0xLjlsMS41LTMuMWwyLjctMS41bDIuMywwLjhsMi41LDEuOGw0LjQsMC4zbDMuNi0xLjVsMC42LTJsMS4yLTNsMy0wLjVsMS43LTIuNGwyLTQuM2w1LjItNC43IGw4LTQuN2wtMy40LTIuOWwtNC4yLTAuOWwtMS41LTQuMWwwLjEtMi4ybC0yLjMtMC43bC02LTdsLTEuNi0zLjdsLTEuMS0xLjFMMTExNi43LDY4NUwxMTE2LjcsNjg1elwifSxCUjp7ZDpcIk02NTksNTYwLjFsLTEuNCwwLjJsLTMuMS0wLjVsLTEuOCwxLjdsLTIuNiwxLjFsLTEuNywwLjJsLTAuNywxLjNsLTIuNy0wLjNsLTMuNS0zbC0wLjMtMi45bC0xLjQtMy4zbDEtNS40IGwxLjYtMi4ybC0xLjItM2wtMS45LTAuOWwwLjgtMi44bC0xLjMtMS41bC0yLjksMC4zbDAuNywxLjhsLTIuMSwyLjRsLTYuNCwyLjRsLTQsMWwtMS43LDEuNWwtNC40LTEuNmwtNC4yLTAuOGwtMSwwLjZsMi40LDEuNiBsLTAuMyw0LjNsMC43LDRsNC44LDAuNWwwLjMsMS40bC00LjEsMS44bC0wLjcsMi43bC0yLjMsMWwtNC4yLDEuNWwtMS4xLDEuOWwtNC40LDAuNWwtMy0zLjRsLTEuMSwwLjhsLTEtMy44bC0xLjYtMmwtMS45LDIuMiBsLTEwLjktMC4xdjMuOWwzLjMsMC43bC0wLjIsMi40bC0xLjEtMC42bC0zLjIsMXY0LjZsMi41LDIuNGwwLjksMy42bC0wLjEsMi44bC0yLjIsMTcuNGwtNS4xLTAuM2wtMC43LDFsLTQuNiwxLjJsLTYuMiw0LjNsLTAuNCwzIGwtMS4zLDIuMmwwLjcsMy40bC0zLjMsMS45bDAuMSwyLjdMNTYyLDYyMGwyLjYsNS44bDMuMywzLjhsLTEsMi44bDMuNywwLjNsMi4zLDMuNGw0LjksMC4ybDQuNC0zLjhsMC4yLDkuN2wyLjYsMC43bDMtMS4xbDQuMiwwLjYgbDIuOS0wLjJsMS4xLTEuOWw0LjgtMi42bDIuOC0yLjNsNy4zLTEuMWwtMC40LDQuN2wwLjksMi41bC0wLjMsNC4zbDYuNCw1LjdsNi4zLDFsMi40LDIuNGwzLjgsMS4ybDIuNSwxLjlsMy41LTAuMWwzLjMsMS45IGwwLjUsMy43bDEuMiwxLjhsMC4zLDIuOGwtMS42LDAuMWwyLjcsNy40bDEwLjcsMC4zbC0wLjYsMy42bDAuOCwyLjZsMy4yLDEuN2wxLjYsNGwtMC41LDVsLTEuMywyLjhsMC44LDMuNmwtMS42LDEuM2wxLjksMy42IGwwLjQsOC42bDYsMS4ybDIuMS0xLjJsMy45LDEuN2wxLjIsMS45bDEsNS44bDAuOSwyLjVsMiwwLjNsMi0xLjFsMi4xLDEuMmwwLjMsMy41bC0wLjMsMy44bC0wLjcsMy42bDIuNi0xLjJsMy4xLDMuN2wwLjUsNS4xIGwtNC4yLDMuNWwtMy4zLDIuNmwtNS4zLDYuMmwtNS45LDguNmwzLjQtMC43bDYuMiw0LjlsMS45LTAuMmw2LjIsNC4xbDQuOCwzLjVsMy44LDQuM2wtMS45LDNsMi4xLDMuN2wyLjktMy43bDEuNS02bDMuMi0zbDMuOS01IGw0LjUtMTEuMmwzLjQtMy41bDAuOC0zLjFsMC4zLTYuNGwtMS4zLTMuNWwwLjMtNC44bDQuMS02LjNsNi01LjFsNi0xLjhsMy42LTIuOWw4LjUtMi40aDUuOWwxLjEtMy44bDQuMi0yLjhsMC42LTYuNWw1LjEtOC4zIGwwLjUtOC41bDEuNi0yLjZsMC4zLTQuMWwxLjEtOS45bC0xLTExLjlsMS40LTQuN2wxLjQtMC4xbDMuOS01LjVsMy4zLTcuMmw3LjctOC44bDIuNy00LjJsMi0xMC41bC0xLTMuOWwtMi04LjFsLTIuMS0ybC00LjgtMC4yIGwtNC4zLTEuOWwtNy4zLTcuMWwtOC40LTUuM2wtOC40LDAuM2wtMTAuOS0zLjRsLTYuNSwybDAuOC0zLjVsLTIuNy0zLjhsLTkuNC0zLjhsLTcuMS0yLjNsLTQuMiw0LjFsLTAuMy02LjNsLTkuOS0xbC0xLjctMiBsNC4yLTUuMmwtMC4xLTQuNGwtMy0xbC0zLTExLjJsLTEuMy0zLjVsLTEuOSwwLjNsLTMuNSw1LjhsLTEuOCw0LjdsLTIuMSwyLjRsLTIuNywwLjVsLTAuOC0xLjhsLTEuMi0wLjNsLTEuOCwxLjhsLTIuNC0xLjMgbC0zLjItMS40bC0yLjcsMC43bC0yLjMtMC42bC0wLjUsMS44bDAuOSwxLjNsLTAuNSwxLjNMNjU5LDU2MC4xTDY1OSw1NjAuMXpcIn0sVkc6e2Q6XCJNNjE5LjIsNDU1LjFsMC4zLTAuMmwtMC4yLTAuMWgtMC40bC0wLjMsMC4ybDAuMSwwLjFINjE5LjJMNjE5LjIsNDU1LjF6IE02MjAuMyw0NTQuN2wwLjQtMC40bC0wLjUsMC4xbC0wLjIsMC4yIGwwLjEsMC4xaDAuMUw2MjAuMyw0NTQuN0w2MjAuMyw0NTQuN3ogTTYyMS4xLDQ1Mi45aC0wLjJoLTAuNWwwLDBsMC4xLDAuMWgwLjNsMC4zLDAuMWwwLDBMNjIxLjEsNDUyLjlMNjIxLjEsNDUyLjl6XCJ9LEJOOntkOlwiTTE2MTcuOCw1NDMuNGwyLjcsMy4zbDEuMS0yLjJsMi43LDAuMmwwLjEtNC4xbDAuMS0zLjFsLTQuNiwzLjVMMTYxNy44LDU0My40TDE2MTcuOCw1NDMuNHpcIn0sQkc6e2Q6XCJNMTEyMS42LDI5NC4zbC0zLTAuN2wtNC0yLjJsLTUuOCwxLjRsLTIuMywxLjZsLTcuNS0wLjNsLTQtMWwtMS45LDAuNWwtMS44LTIuNmwtMS4xLDEuNGwwLjcsMi4zbDIuOCwyLjZsLTEuNywxLjkgbC0wLjcsMmwwLjYsMC43bC0wLjcsMC45bDIuOCwybDAuOCw0LjFsMy44LDAuMmwzLjktMS43bDMuOSwyLjFsNC42LTAuNmwtMC4zLTNsNS0ybDQuNSwwLjhsLTIuMS0zLjVsMS4zLTQuNEwxMTIxLjYsMjk0LjMgTDExMjEuNiwyOTQuM3pcIn0sQkY6e2Q6XCJNOTc4LjgsNDc3LjJoLTMuNmwtMS40LTEuMmwtMywwLjlsLTUuMiwyLjZsLTEuMSwybC00LjMsMi45bC0wLjgsMS42bC0yLjMsMS4zbC0yLjctMC45bC0xLjYsMS42bC0wLjgsNC40IGwtNC41LDUuMmwwLjIsMi4ybC0xLjYsMi43bDAuNCwzLjdsMi41LDEuNGwxLDIuMWwyLjUsMS4zbDEuOS0xLjZsMi43LTAuMmwzLjgsMS42bC0wLjgtNC44bDAuMi0zLjZsOS43LTAuM2wyLjQsMC41bDEuOC0xbDIuNiwwLjUgbDQuOSwwLjFsMS45LTAuN2wxLjItMi44bDIuNy0wLjZsMS4yLTEuOWwwLjEtNC40bC02LjQtMS40bC0wLjItMy4xbC0zLjEtNC4xbC0wLjgtMi45TDk3OC44LDQ3Ny4yTDk3OC44LDQ3Ny4yelwifSxCSTp7ZDpcIk0xMTQ4LjIsNTkwbC0wLjMtMi41bDAsMGwtMy0wLjRsLTEuNywzLjZsLTMuNS0wLjVsMS40LDIuOWwwLjEsMS4xbDIsNi4xbC0wLjEsMC4zbDAuNi0wLjFsMi4xLTIuM2wyLjItMy4zIGwxLjQtMS40di0yTDExNDguMiw1OTBMMTE0OC4yLDU5MHpcIn0sS0g6e2Q6XCJNMTU3NC44LDQ4MS44bC01LjItMi4zbC0yLDQuM2wtNC45LTIuNGwtNS4zLTFsLTcuMSwxLjNsLTMsNS4ybDIuMSw3LjdsMy40LDYuNmwyLjYsMy4zbDQuNywwLjlsNC43LTIuNWw1LjgtMC41IGwtMi44LTMuOGw4LjktNC45bC0wLjEtNy43TDE1NzQuOCw0ODEuOEwxNTc0LjgsNDgxLjh6XCJ9LENNOntkOlwiTTEwNjAuMSw1MDIuOWwwLjItNC4zbC0wLjUtNC4ybC0yLjItNC4xbC0xLjYsMC40bC0wLjIsMmwyLjMsMi42bC0wLjYsMS4xbC0wLjMsMi4xbC00LjYsNWwtMS41LDRsLTAuNywzLjMgbC0xLjIsMS40bC0xLjEsNC41bC0zLDIuNmwtMC44LDMuMmwtMS4yLDIuNmwtMC41LDIuNmwtMy45LDIuMmwtMy4yLTIuNmwtMi4xLDAuMWwtMy4zLDMuN2wtMS42LDAuMWwtMi43LDYuMWwtMS40LDQuNXYxLjhsMS40LDAuOSBsMS4xLDIuOGwyLjYsMS4xbDIuMiw0LjJsLTAuOCw1bDkuMiwwLjJsMi42LTAuNGwzLjQsMC44bDMuNC0wLjhsMC43LDAuM2w3LjEsMC4zbDQuNSwxLjdsNC41LDEuNWwwLjQtMy41bC0wLjYtMS44bC0wLjMtMi45IGwtMi42LTIuMWwtMi4xLTMuMmwtMC41LTIuM2wtMi42LTMuM2wwLjQtMS45bC0wLjYtMi43bDAuNC01bDEuNC0xLjFsMi43LTYuNWwwLjktMS43bC0xLjgtNC40bC0wLjgtMi42bC0yLjUtMS4xbC0zLjMtMy43bDEuMi0zIGwyLjUsMC42bDEuNi0wLjRsMy4xLDAuMUwxMDYwLjEsNTAyLjlMMTA2MC4xLDUwMi45elwifSxDQTp7ZDpcIk02NTksMjc2LjdsLTAuNy0zbC0yLjUsMS45bDAuNSwyLjFsNS42LDIuNmwxLjktMC40bDMuMy0yLjVsLTQuNywwLjFMNjU5LDI3Ni43TDY1OSwyNzYuN3ogTTY3My40LDI2MC44bDAuMi0xLjEgbC00LjEtMi42bC01LjktMS42bC0xLjksMC42bDMuNSwyLjlsNS43LDEuOUw2NzMuNCwyNjAuOEw2NzMuNCwyNjAuOHogTTM2OC4xLDI2NC41bDAuMi0zLjRsLTMuMi0yLjZsLTAuNC0yLjlsLTAuMS0yLjFsLTQuMS0wLjcgbC0yLjQtMC45bC00LjEtMS40bC0xLjQsMS41bC0wLjYsMy4zbDQuMywxLjFsLTAuNCwxLjhsMi45LDIuMnYyLjJsNi4zLDIuOEwzNjguMSwyNjQuNUwzNjguMSwyNjQuNXogTTcwNC4yLDI1MWwzLjktMy44bDEuNC0xLjcgbC0yLjEtMC4zbC00LjksMi4ybC00LjIsMy41bC04LjEsOS44bC01LjMsMy43bDEuNiwxLjdsLTMuOCwyLjJsMC4yLDEuOWw5LjYsMC4xbDUuNC0wLjNsNC40LDEuNWwtNC40LDIuOWwyLjksMC4ybDcuMy01LjRsMS4yLDAuOCBsLTIuNSw1LjFsMywxLjJsMi4zLTAuMmwzLjUtNS41bC0wLjUtMy45bDAuMy0zLjNsLTMuNywxLjFsMi44LTQuNmwtNC4zLTEuOWwtMi43LDEuNWwtMy45LTEuN2wyLjQtMi4xbC0yLjktMS4zbC0zLjgsMkw3MDQuMiwyNTEgTDcwNC4yLDI1MXogTTM0Ny40LDIyOS44bC0xLjksMmwtMS40LDIuNmwwLjksMS45bC0wLjYsMi44bDAuNywyLjhoMS45bC0wLjItNC45bDcuMS02LjlsLTQuOSwwLjVMMzQ3LjQsMjI5LjhMMzQ3LjQsMjI5Ljh6IE02MjguMywxODIuOGwtMC40LTEuMmwtMS43LTAuMWwtMi44LDEuN2wtMC40LDAuNGwwLjEsMS43bDEuNywwLjVMNjI4LjMsMTgyLjhMNjI4LjMsMTgyLjh6IE02MTguNywxNzkuNmwwLjgtMS4xbC02LTAuMWwtNC45LDIuNyB2MS41bDMsMC4yTDYxOC43LDE3OS42TDYxOC43LDE3OS42eiBNNjE1LjYsMTYzbC0yLjctMC41bC01LDUuMmwtMy42LDQuNGwtNS43LDIuOGw2LjMtMC42bC0wLjgsMy40bDguMi0zbDYuMi0zbDAuOCwyLjZsNS45LDEuMyBsNC45LTEuOGwtMS45LTEuOGwtMy40LDAuNGwxLjMtMi43bC0zLjctMS43bC0zLjQtMS45bC0xLjUtMS41bC0yLjgsMC45TDYxNS42LDE2M0w2MTUuNiwxNjN6IE02NjAuMiwxNTQuOGwzLjctMS43bDEtMC43bDEuNC0yLjMgbC0yLjMtMS41bC00LjIsMC43bC0zLjgsMy4xbC0wLjcsMi42TDY2MC4yLDE1NC44TDY2MC4yLDE1NC44eiBNNTg2LjQsMTQ0LjFsLTAuOC0ybC0wLjMtMWwtMS42LTFsLTMtMS41bC00LjksMi4zbC01LDEuN2wzLjUsMi40IGwzLjgtMC42bDQuMSwxLjZMNTg2LjQsMTQ0LjF6IE02MDguOCwxNDJsLTYuNi0xbDUuNy0yLjZsLTAuNC02bC0xLjktMi4zbC00LjUtMC44bC04LjEsMy44bC01LjUsNS44bDIuOSwyLjFsMS42LDMuM2wtNi4zLDUuNSBsLTMuMi0wLjJsLTYuMiw0LjRsNC4yLTUuMmwtNC44LTEuOGwtNC41LDAuOWwtMi40LDMuNGwtNS45LTAuMWwtNy4yLDAuOGwtNS4xLTIuNGwtNSwwLjRsLTEuNS0yLjlsLTIuMS0xLjNsLTMuOCwwLjVsLTUuMiwwLjMgbC00LjQsMS44bDIsMi4zbC03LDIuOGwtMS40LTMuM2wtNC40LDFsLTExLjgsMC42bC02LjQtMS4ybDguNS0yLjZsLTIuOC0yLjhsLTQuNCwwLjRsLTQuNy0xbC03LjUtMS45bC0zLjgtMi4zbC00LjUtMC4zbC0zLjMsMS42IGwtNS45LDAuOWwzLjktNC4xbC05LjQsMy42bC0xLjQtNC43bC0yLjEtMC42bC0zLjgsMi41bC00LjUsMS4ybC0wLjItMi4ybC04LjIsMS40bC04LjgsMi4zbC01LjItMC42bC03LDEuNmwtNi4yLDIuM2wtMy43LTAuNSBsLTMuMy0yLjZsLTUuOS0xLjNsMCwwbC0yNC4zLDIwLjJsLTM1LjQsMzIuNGw0LjIsMC4xbDIuNywxLjZsMC42LDIuNmwwLjIsMy45bDcuNi0zLjNsNi40LTEuOWwtMC41LDNsMC43LDIuNGwxLjcsMi43bC0xLjEsNC4yIGwtMS41LDYuOGw0LjYsMy44bC0zLjEsMy43bC01LjEsMi45bDAsMGwtMi41LDMuMWwyLjEsNC40bC0zLjEsNC45bDQuMSwyLjZsLTMuNiwzLjdsLTEuMyw1LjVsNi45LDIuNWwxLjYsMi43bDUuNCw2LjFoMC43aDEzLjkgaDE0LjZoNC44aDE1aDE0LjVoMTQuN2gxNC44aDE2LjdoMTYuOGgxMC4xbDEuMy0yLjRoMS42bC0wLjgsMy40bDEsMWwzLjIsMC40bDQuNiwxbDMuOCwxLjlsNC40LTAuOGw1LjMsMS42bDAsMGwzLjItMi40bDMuMi0xIGwxLjgtMS41bDEuNS0wLjhsNCwxLjJsMy4zLDAuMmwwLjgsMC44bDAuMSwzLjVsNS4yLDFsLTEuNywxLjdsMS4yLDEuOWwtMS45LDIuM2wxLjgsMC44bC0xLjksMi4xbDAsMGwxLjIsMC4ybDEuMy0wLjlsMC41LDEuNCBsMy40LDAuN2wzLjgsMC4xbDMuOCwwLjZsNCwxLjJsMC44LDJsMS40LDQuN2wtMi40LDJsLTMuOC0wLjhsLTEtMy44bC0wLjksMy45bC0zLjgsMy40bC0wLjgsMi45bC0xLjEsMS43bC00LjEsMmwwLDBsLTMuNywzLjQgbC0yLDIuMmwyLjcsMC40bDQuNS0ybDIuOS0xLjdsMS42LTAuM2wyLjYsMC42bDEuNy0wLjlsMi44LTAuOGw0LjctMC44bDAsMGwwLDBsMC4zLTEuOGwtMC4zLDAuMWwtMS43LDAuM2wtMS44LTAuNmwyLjMtMi4xIGwxLjktMC43bDMuOS0wLjlsNC42LTAuOWwxLjgsMS4ybDEuOS0xLjRsMS45LTAuOGwwLjksMC40bDAuMSwwLjFsNi43LTQuMmwyLjctMS4yaDcuN2g5LjNsMS0xLjZsMS43LTAuM2wyLjUtMC45bDIuNy0yLjhsMy4yLTQuOSBsNS41LTQuN2wxLjEsMS43bDMuNy0xLjFsMS41LDEuOGwtMi44LDguNWwyLjEsMy41bDUuOS0wLjhsOC4xLTAuMmwtMTAuNCw1LjFsLTEuNSw1LjJsMy43LDAuNWw3LjEtNC41bDUuOC0yLjRsMTIuMi0zLjdsNy41LTQuMSBsLTIuNi0yLjJsMS00LjVsLTcuMSw3bC04LjYsMC44bC01LjUtMy4xbC0wLjEtNC42bDAuNi02LjhsNi4xLTQuMWwtMy4zLTMuMWwtNy42LDAuNmwtMTIuMSw1LjJsLTEwLjksOC4ybC00LjYsMWw3LjgtNS43bDEwLjEtOC4zIGw3LjItMi43bDUuNy00LjRsNS4yLTAuNWw3LjMsMC4xbDEwLDEuM2w4LjYtMWw3LjgtNS4xbDguNy0yLjJsNC4yLTIuMWw0LjItMi4zbDItNi44bC0xLjEtMi4zbC0zLjQtMC44di01LjFsLTIuMy0xLjlsLTYuOS0xLjYgbC0yLjgtMy40bC00LjgtMy40bDMuNC0zLjdsLTItNy4xbC0yLjYtNy41bC0xLTUuMmwtNC4zLDIuN2wtNy40LDYuNWwtOC4xLDMuMmwtMS42LTMuNGwtMy43LTFsMi4yLTcuM2wyLjYtNC45bC03LjctMC41bC0wLjEtMi4yIGwtMy42LTMuM2wtMy0ybC00LjUsMS41bC00LjItMC41bC02LjYtMS42bC0zLjksMS4zbC0zLjgsOWwtMSw1LjNsLTguOCw2LjFsMy4xLDQuNWwwLjUsNWwtMS43LDRsLTQuNyw0LjFMNjEwLDIyNGwtOSwyLjhsMS43LDMuMiBsLTIuMiw5LjZsLTUuNiw2LjNsLTQuNiwxLjlsLTQuNC01LjhsLTAuMS02LjhsMS43LTZsMy42LTUuMmwtNC44LTAuNmwtNy41LTAuNGwtMy42LTIuNWwtNC44LTEuNmwtMS43LTIuOWwtMy4zLTIuMmwtNy0yLjYgbC03LjEsMS4ybDAuNy00LjVsMS41LTUuNWwtNi0xbDQuOS02LjhsNC45LTQuNmw5LjQtNi41bDguNi00LjZsNS42LTAuN2wyLjktMy43bDUuMS0yLjRsNi40LTAuNGw3LjctMy44bDIuOS0yLjRsNy40LTQuN2wzLjItMi44IGwzLjIsMS43bDYuNS0wLjlMNjM3LDE1NWwyLjMtMi43bC0wLjgtMi45bDUtMi45bDEuNy0yLjdsLTMuNS0yLjZsLTUuNC0wLjhsLTUuNS0wLjRsLTQuNiw1LjlsLTYuNSw0LjZsLTcuMiw0bC0xLjMtMy43bDQuMi00IGwtMi4yLTMuNWwtOC43LDQuMkw2MDguOCwxNDJMNjA4LjgsMTQyeiBNNTMzLjMsMTIzLjFsLTIuOC0xbC0xNC4xLDMuMmwtNS4xLDJsLTcuOCwzLjlsNS40LDEuNGw2LjItMC4xbC0xMS41LDIuMXYxLjlsNS42LDAuMSBsOS0wLjRsNi41LDEuMmwtNi4yLDFsLTUuNS0wLjNsLTcuMSwwLjlsLTMuMywwLjZsMC42LDQuMmw0LjItMC42bDQuMSwxLjVsLTAuMywyLjVsNy44LTAuNWwxMS4yLTAuOGw5LjQtMS44bDUtMC40bDUuNywxLjUgbDYuNywwLjhsMy4xLTEuOWwtMC43LTIuMWw3LTAuNGwyLjYtMi40bC01LTIuNWwtNC4yLTIuNmwyLjQtMy42bDIuNy01LjFsLTIuMi0ybC0zLTAuOWwtNC4yLDAuOGwtMi44LDUuM2wtNC4zLDIuMWwyLjItNS4xIGwtMS43LTEuN2wtNy4zLDIuN0w1MzksMTI0bC0xMC40LDEuNUw1MzMuMywxMjMuMUw1MzMuMywxMjMuMXogTTU3Mi40LDEyMS42bC0xLjctMS4xbC01LjQsMC4ybC0yLjEsMC43bDIuMiwzLjYgQzU2NS40LDEyNSw1NzIuNCwxMjEuNiw1NzIuNCwxMjEuNnogTTY4MC4xLDEyMy4ybC00LjQtMi44bC04LjQtMC41bC0yLjEsMC4zbC0xLjcsMS44bDIsMi44bDAuOSwwLjNsNC44LTAuN2w0LjEsMC4xbDQuMSwwLjEgTDY4MC4xLDEyMy4yTDY4MC4xLDEyMy4yeiBNNjQwLjcsMTIyLjlsNS43LTMuMmwtMTEuMiwxLjNsLTUuOCwyLjFsLTcuMSw0LjZsLTMuMyw1LjJsNS42LDAuMWwtNi4xLDIuM2wxLjgsMS45bDUuOSwwLjhsNy4zLDEuNSBsMTMuOCwxLjJsNy45LTAuNmwzLjItMS42bDIsMS44bDMuMywwLjNsMiwzLjNsLTMuNSwxLjRsNy4xLDEuOGw0LjYsMi42bDAuNSwxLjlMNjc0LDE1NGwtOC42LDUuNGwtMy4yLDIuN2wwLjIsMmwtOS4yLDAuN2wtOCwwLjEgbC01LjQsNC4ybDIuNCwxLjlsMTMtMC45bDAuOS0xLjZsNC43LDIuN2w0LjcsMi45bC0yLjQsMS42bDMuOCwyLjhsNy42LDMuM2wxMC43LDIuM2wwLjMtMmwtMi44LTMuNWwtMy41LTQuOWw4LjUsNC42bDQuNywxLjUgbDMuNi00LjF2LTUuNmwtMS0xLjVsLTQuNC0yLjVsLTIuNy0zLjNsMi4zLTMuMmw1LjgtMC43bDMuOCw1LjRsNCwyLjRsMTAuNy02LjVsMy4zLTMuOWwtNi40LTAuM2wtMy4yLTUuMWwtNS45LTEuMmwtNy43LTMuNWw5LTIuNSBsLTAuOC01bC0yLjItMi4xbC04LjMtMi4xbC0xLjktMy4zbC04LjIsMS4ybDEuMS0yLjNsLTMuNi0yLjVsLTYuOC0yLjZsLTUuMiwyLjFsLTksMS41bDMuMy0zLjRsLTIuMy01LjNsLTExLjYsMi4xbC03LjEsNC4xIEw2NDAuNywxMjIuOUw2NDAuNywxMjIuOXogTTU5MC43LDExOS41bC03LjEsMi40bDAuOSwzLjRsLTcuNC0wLjdsLTEuNywxLjdsNS44LDMuOWwwLjksMmwzLjQsMC41bDguNC0ybDUuMS00LjdsLTMuOC0yLjJsNi0yLjQgbDAuNS0xLjVsLTcuNSwwLjZMNTkwLjcsMTE5LjVMNTkwLjcsMTE5LjV6IE02MTMsMTI0LjlsNS42LTFsMTAtNC41bC02LjEtMS4ybC03LjgtMC4ybC01LjIsMS40bC00LjIsMi4xbC0yLjUsMi42bC0xLjgsNC41IGw0LjMsMC4yTDYxMywxMjQuOXogTTQ5OC4zLDEzMi4xbDIuNi0yLjNsOS4xLTMuNmwxMy44LTMuNmw2LjQtMS4zbC0xLjYtMi4xbC0xLjktMS41bC05LjQtMC4ybC00LjEtMS4xbC0xNCwwLjhsLTAuMywzLjFsLTcuNiwzLjMgbC03LjQsMy44bC00LjMsMi4ybDUuOSwyLjdsLTAuNiwyLjNMNDk4LjMsMTMyLjFMNDk4LjMsMTMyLjF6IE02MjIuNCwxMTMuOGwwLjMtMS42bC0xLjQtMS43bC02LjksMS4zTDYxMCwxMTRsMy4yLDEuM2w1LjEsMC40IEw2MjIuNCwxMTMuOEw2MjIuNCwxMTMuOHogTTYxMy43LDEwNS4ybC0xLjEsMC43bC00LjgtMC4zbC03LjYsMS42bC0zLjgtMC4xbC00LjMsMy44bDYuNi0wLjRsLTMuNCwyLjlsMy4yLDAuOGw2LjgtMC41bDUuOC0zLjcgbDIuOC0yLjVMNjEzLjcsMTA1LjJ6IE01NzQuNiwxMDcuN2wxLjgtMi4zbC0zLjEtMC41bC01LjcsMS43bC0wLjcsNC43bC02LjEtMC40TDU1OCwxMDhsLTguMi0xLjZsLTUuNCwxLjRsLTExLjYsNC44bDQuMSwwLjggbDE3LjgtMC41bC0xMC42LDIuMmwtMS41LDEuNmw1LjktMC4xbDEyLjItMi4ybDEzLjgtMC44bDUuMS0yLjNsMi4zLTIuNGwtMy43LTAuMmwtNC4zLDAuOEM1NzMuOSwxMDkuNSw1NzQuNiwxMDcuNyw1NzQuNiwxMDcuN3ogTTYyOS44LDEwMy40bC03LjEtMC4zbC0zLjgsMmwyLjYsMS41bDcsMC42bDEuNCwyLjFsLTIuMiwyLjRsLTEuNSwyLjhsOC41LDEuNmw1LjUsMC42bDgtMC4xbDExLjYtMC44bDQuMywwLjZsNi43LTFsMy41LTEuNGwxLTIgbC0yLjMtMS45bC01LjgtMC4zbC04LDAuNGwtNywxLjFsLTUuMS0wLjRsLTQuOC0wLjNsLTEuMi0xLjFsLTMuMS0xLjFsMi44LTEuOWwtMS40LTEuNmwtNy4zLDAuMUw2MjkuOCwxMDMuNEw2MjkuOCwxMDMuNHogTTU1NC44LDEwMC44bC02LDAuN2wtNS41LTAuMWwtMTIuMSwzLjFsLTExLjYsMy43bDAsMGwzLjYsMWw3LTAuN2w5LjgtMi4xbDMuOC0wLjNsNS4yLTEuNkw1NTQuOCwxMDAuOHogTTYzNS4zLDEwMS40bDEtMC41IGwtMS41LTAuOWwtNy4yLTAuMWwtMC42LDEuM2w2LjQsMC4zTDYzNS4zLDEwMS40TDYzNS4zLDEwMS40eiBNNTc2LjksMTAwLjZsMy4yLTEuNGwtNC4xLTAuOGwtNS45LDAuNWwtNS4xLDEuNWwzLjMsMS41IEM1NjguMywxMDEuOSw1NzYuOSwxMDAuNiw1NzYuOSwxMDAuNnogTTU4NC43LDk2LjRsLTMuMy0wLjlsLTEuNi0wLjJsLTUuNywxLjNsLTEsMC43aDZMNTg0LjcsOTYuNHogTTYzMS4xLDk4LjlsMy0xLjdsLTIuMy0xLjYgbC0xLjctMC4zbC00LjQtMC4xbC0yLjEsMS44bC0wLjcsMS44bDEuNiwxLjFMNjMxLjEsOTguOUw2MzEuMSw5OC45eiBNNjE3LjQsOTcuN2wwLjEtMi4ybC03LjQtMS43bC02LjEtMC42bC0yLjEsMS43bDIuOCwxLjEgbC01LjMsMS40bDcuNywwLjJsNCwxLjVsNS4yLDAuNUw2MTcuNCw5Ny43eiBNNjcxLjEsOTEuNmwwLjYtMi44TDY2Nyw4OGwtNC43LTAuOWwtMS42LTIuMmwtOC4yLDAuMmwwLjMsMC45bC0zLjksMC4zbC00LjEsMS4zIGwtNC45LDEuOWwtMC4zLDEuOWwyLDEuNWg2LjVsLTQuMywxLjJsLTIuMSwxLjZsMS42LDEuOWw2LjcsMC42bDYuOC0wLjRsMTAuNS0zLjRsNi40LTEuM0w2NzEuMSw5MS42eiBNNzQ5LjYsNzcuOGwtNy0wLjJsLTYuOS0wLjMgbC0xMC4yLDAuNmwtMS40LTAuNGwtMTAuMywwLjJsLTYuNCwwLjRsLTUuMSwwLjZsLTUsMmwtMi4zLTFsLTMuOS0wLjJsLTYuNywxLjRsLTcuNCwwLjZsLTQuMSwwLjFsLTYsMC44bC0xLjEsMS4zbDIuNSwxLjJsMC44LDEuNiBsNC40LDEuNWwxMi40LTAuM2w3LjIsMC41bC03LjIsMS41bC0yLjItMC40bC05LjMtMC4ybC0xLjEsMi4ybDMsMS43bC0yLjgsMS42bC03LjUsMS4xbC00LjksMS43bDQuOCwwLjlsMS43LDNsLTcuNS0ybC0yLjUsMC4zIGwtMiwzLjRsLTgsMS4xbC0yLDIuM2w2LjcsMC4zbDQuOSwwLjZsMTEuNy0wLjhsOC40LDEuNGwxMi42LTNsMS0xLjFsLTYuNCwwLjJsMC41LTEuMWw2LjUtMS40bDMuNi0xLjlsNi44LTEuM2w1LTEuNmwtMC44LTIuMiBsMy4zLTAuOGwtNC4zLTAuNmwxMS4xLTAuNGwzLjItMC45bDcuOS0wLjhsOS4zLTMuNWw2LjgtMS4xbDEwLjMtMi41aC03LjRsMy45LTAuOWw5LTAuOGw5LjctMS42bDEuMS0xLjFsLTUuMi0xbC02LjctMC40IEw3NDkuNiw3Ny44TDc0OS42LDc3Ljh6XCJ9LENWOntkOlwiTTg0MS40LDQ3Ny42bDAuMS0wLjRsLTAuMi0wLjZsLTAuMy0wLjFsLTAuNiwwLjRsLTAuMSwwLjNsMC4xLDAuM2wwLjMsMC4zbDAuMywwLjFMODQxLjQsNDc3LjZMODQxLjQsNDc3LjZ6IE04NDcuNyw0NzUuOWwwLjQtMC4yVjQ3NWwtMC4xLTAuM2gtMC40bC0wLjIsMC40djAuMXYwLjRMODQ3LjcsNDc1LjlMODQ3LjcsNDc1LjlMODQ3LjcsNDc1Ljl6IE04NDYuMyw0NzYuN2wtMC41LTAuOWwtMC4zLTAuMSBsLTAuNi0wLjd2LTAuM2wtMC4zLTAuMXYwLjJ2MC40bC0wLjIsMC41djAuNWwwLjQsMC44bDAuNCwwLjJsMC43LDAuMUw4NDYuMyw0NzYuN0w4NDYuMyw0NzYuN3ogTTg0OS40LDQ2OC45djAuNWwtMC4zLDAuN2wwLjUsMC4zIGwwLjMsMC4xbDAuNi0wLjRsMC4yLTAuNWwtMC4xLTAuM2wtMC4zLTAuM2wtMC4zLTAuMWwtMC4xLDAuMUw4NDkuNCw0NjguOUw4NDkuNCw0NjguOXogTTg0Myw0NjYuNGwtMS0wLjFsLTAuNi0wLjJoLTAuMXYwLjMgbDAuNCwwLjhsMC4yLTAuNWwwLjItMC4xbDAuOCwwLjJsMC40LTAuMWwtMC4xLTAuMUw4NDMsNDY2LjRMODQzLDQ2Ni40eiBNODQ5LjcsNDY2LjJsLTAuMS0wLjVWNDY1aC0wLjJsLTAuMywwLjJsMC4xLDAuN2wwLjEsMC4xIGwwLjIsMC41TDg0OS43LDQ2Ni4yTDg0OS43LDQ2Ni4yeiBNODM4LjYsNDY1LjJWNDY1bC0wLjMtMC41bC0wLjMsMC4xbC0wLjQsMC4ybC0wLjEsMC4zbDAuNCwwLjJoMC4yTDgzOC42LDQ2NS4yTDgzOC42LDQ2NS4yeiBNODM3LjEsNDY0LjNsMC44LTAuNmwwLjItMC4zbC0wLjItMC41bC0wLjUtMC4xbC0xLjIsMC42bC0wLjEsMC4ybDAuMSwwLjNsMC4xLDAuNWwwLjIsMC4xTDgzNy4xLDQ2NC4zTDgzNy4xLDQ2NC4zelwifSxLWTp7ZDpcIk01MjcsNDQ5LjFsLTAuMS0wLjNsLTAuMSwwLjF2MC42aDAuNWgwLjJsMC4zLTAuMmgwLjZsLTAuMS0wLjJsLTAuOC0wLjFsLTAuMSwwLjFsLTAuMiwwLjFMNTI3LDQ0OS4xTDUyNyw0NDkuMXogTTUzNSw0NDYuOEw1MzUsNDQ2LjhsLTAuMS0wLjFoLTAuMWwtMC4zLDAuMWgtMC4xaC0wLjFsLTAuMSwwLjFsLTAuMSwwLjFoMC4ybDAuNC0wLjJINTM1TDUzNSw0NDYuOEw1MzUsNDQ2Ljh6IE01MzUuOCw0NDYuNyBsMC41LTAuMmwwLDBsLTAuMS0wLjFoLTAuMWwtMC4xLDAuMWgtMC4xbC0wLjUsMC4zaDAuMkw1MzUuOCw0NDYuN0w1MzUuOCw0NDYuN3pcIn0sQ0Y6e2Q6XCJNMTExMC41LDUxNy4zbC0wLjUtMC4zbC0yLTEuOGwtMC4zLTJsMC44LTIuNlY1MDhsLTMuMy00bC0wLjctMi43bC0zLjUsMS4xbC0yLjgsMi41bC00LDdsLTUuMiwyLjlsLTUuNC0wLjQgbC0xLjYsMC42bDAuNiwyLjNsLTIuOSwyLjJsLTIuMywyLjVsLTcuMSwyLjRsLTEuNC0xLjRsLTAuOS0wLjJsLTEsMS43bC00LjcsMC40bC0yLjcsNi41bC0xLjQsMS4xbC0wLjQsNWwwLjYsMi43bC0wLjQsMS45IGwyLjYsMy4zbDAuNSwyLjNsMi4xLDMuMmwyLjYsMi4xbDAuMywyLjlsMC42LDEuOGwyLjktNS45bDMuMy0zLjRsMy44LDEuMWwzLjYsMC40bDAuNS00LjVsMi4yLTMuMmwzLTJsNC42LDIuMWwzLjYsMi40bDQuMSwwLjYgbDQuMiwxLjJsMS42LTMuOGwwLjgtMC41bDIuNiwwLjZsNi4yLTMuMWwyLjIsMS4zbDEuOC0wLjJsMC45LTEuNWwyLTAuNmw0LjMsMC43bDMuNiwwLjFsMS44LTAuNmwtMC45LTIuMWwtNC4yLTIuNWwtMS41LTMuOCBsLTIuNC0yLjdsLTMuOC0zLjRsLTAuMS0ybC0zLjEtMi42TDExMTAuNSw1MTcuM0wxMTEwLjUsNTE3LjN6XCJ9LFREOntkOlwiTTExMDguNCw0NDcuNmwtMjIuNC0xMi4ybC0yMi4zLTEyLjJsLTUuNCwzLjVsMS42LDkuOWwyLDEuNmwwLjIsMi4xbDIuMywyLjJsLTEuMSwyLjdsLTEuOCwxMi45bC0wLjIsOC4zbC02LjksNiBsLTIuMyw4LjRsMi40LDIuM3Y0LjFsMy42LDAuMmwtMC41LDIuOWwyLjIsNC4xbDAuNSw0LjJsLTAuMiw0LjNsMy4xLDUuOGwtMy4xLTAuMWwtMS42LDAuNGwtMi41LTAuNmwtMS4yLDNsMy4zLDMuN2wyLjUsMS4xIGwwLjgsMi42bDEuOCw0LjRsLTAuOSwxLjdsNC43LTAuNGwxLTEuN2wwLjksMC4ybDEuNCwxLjRsNy4xLTIuNGwyLjMtMi41bDIuOS0yLjJsLTAuNi0yLjNsMS42LTAuNmw1LjQsMC40bDUuMi0yLjlsNC03bDIuOC0yLjUgbDMuNS0xLjF2LTEuNmwtMi4xLTEuOGwtMC4xLTMuN2wtMS4yLTIuNWwtMiwwLjRsMC41LTIuNGwxLjQtMi42bC0wLjctMi43bDEuOC0xLjlsLTEuMi0xLjVsMS40LTMuOWwyLjQtNC43bDQuOCwwLjRMMTEwOC40LDQ0Ny42IEwxMTA4LjQsNDQ3LjZ6XCJ9LENMOntkOlwiTTY0OC40LDkwNS4ybC0zLjctMC43bC0zLjMsMi41bDAuMiw0LjFsLTEuMiwyLjhsLTcuMi0yLjJsLTguNi00bC00LjUtMS4zbDkuNyw2LjhsNi4zLDMuMmw3LjUsMy40bDUuMywwLjkgbDQuMywxLjhsMywwLjVsMi4zLDAuMWwzLjItMS44bDAuNS0yLjRsLTIuOS0wLjJoLTVMNjQ4LjQsOTA1LjJMNjQ4LjQsOTA1LjJ6IE02MDEuMSw3MDguOWwtMy43LTcuMWwxLjEtNi4ybC0zLjItMi43bC0xLjItNC42IEw1OTEsNjg0bC0xLjIsMy4zbC0yLjcsMS42bDIuMSw5bDEuNSwxMC40bC0wLjEsMTQuMnYxMy4ybDAuOSwxMi4zbC0xLjksNy44bDIuMSw3LjhsLTAuNSw1LjNsMy4yLDkuNWwtMC4xLDkuNWwtMS4yLDEwLjIgbC0wLjYsMTAuNWwtMi4xLDAuMmwyLjQsNy4zbDMuMyw2LjNsLTEuMSw0LjNsMS45LDExLjZsMS41LDguOGwzLjUsMC45bC0xLjEtNy43bDQsMS42bDEuOCwxMi43bC02LjQtMi4xbDIsMTAuMmwtMi43LDUuNWw4LjIsMS44IGwtMy40LDQuOGwwLjIsNmw1LDEwLjZsNC4yLDQuMWwwLjIsMy42bDMuMywzLjhsNy41LDMuNWwwLDBsNy40LDQuMmw2LjIsMmwyLTAuMWwtMS44LTUuN2wzLjQtMi4ybDEuNy0xLjVoNC4ybC00LjgtMC45bC0xMi0wLjggbC0zLjUtMy42bC0xLjgtNC42bC0zLjEsMC40bC0yLjYtMi4ybC0zLjEtNi42bDIuNy0yLjdsMC4xLTMuOWwtMS44LTMuMmwwLjctNS4zbC0xLjEtOC4ybC0xLjgtMy43bDEuOC0xLjFsLTEuMy0yLjNsLTIuOC0xLjMgbDAuOC0yLjZsLTMuMS0yLjNsLTMuNi03LjFsMS42LTEuMmwtMy4zLTcuNmwtMC43LTYuNGwtMC4zLTUuN2wyLjUtMi40bC0zLjMtNi4zbC0xLjUtNS45bDIuOS00LjNsLTEuNC01LjRsMS42LTYuMmwtMS4zLTUuOSBsLTEuNi0xLjJsLTQuOS0xMC45bDIuMS02LjVsLTEuNy02LjJsMC45LTUuOGwyLjYtNS45bDMuMi00bC0yLTIuNWwwLjktMmwtMS42LTEwLjZsNS42LTMuMmwxLjEtNi42bC0wLjktMS42bC0zLjgsMC45TDYwMS4xLDcwOC45IEw2MDEuMSw3MDguOXpcIn0sQ046e2Q6XCJNMTU4Ny4yLDQ1My4zbDAuNi0zLjZsMi0yLjhsLTEuNi0yLjVsLTMuMi0wLjFsLTUuOCwxLjhsLTIuMiwyLjhsMSw1LjVsNC45LDJMMTU4Ny4yLDQ1My4zTDE1ODcuMiw0NTMuM3ogTTE2MDAuNCwyNTYuOGwtNi4xLTYuMWwtNC40LTMuN2wtMy44LTIuN2wtNy43LTYuMWwtNS45LTIuM2wtOC41LTEuOGwtNi4yLDAuMmwtNS4xLDEuMWwtMS43LDNsMy43LDEuNWwyLjUsMy4zbC0xLjIsMmwwLjEsNi41IGwxLjksMi43bC00LjQsMy45bC03LjMtMi4zbDAuNiw0LjZsMC4zLDYuMmwyLjcsMi42bDIuNC0wLjhsNS40LDFsMi41LTIuM2w1LjEsMmw3LjIsNC4zbDAuNywyLjJsLTQuMy0wLjdsLTYuOCwwLjhsLTIuNCwxLjggbC0xLjQsNC4xbC02LjMsMi40bC0zLjEsMy4zbC01LjktMS4zbC0zLjItMC41bC0wLjQsNGwyLjksMi4zbDEuOSwyLjFsLTIuNSwybC0xLjksMy4zbC00LjksMi4ybC03LjUsMC4ybC03LjIsMi4ybC00LjQsMy4zbC0zLjItMiBsLTYuMiwwLjFsLTkuMy0zLjhsLTUuNS0wLjlsLTYuNCwwLjhsLTExLjItMS4zbC01LjUsMC4xbC00LjctMy42bC00LjktNS43bC0zLjQtMC43bC03LjktMy44bC03LjItMC45bC02LjQtMWwtMy0yLjdsLTEuMy03LjMgbC01LjgtNWwtOC4xLTIuM2wtNS43LTMuM2wtMy4zLTQuNGwtMS43LDAuNWwtMS44LDQuMmwtMy44LDAuNmwyLjUsNi4ybC0xLjYsMi44bC0xMC43LTJsMSwxMS4xbC0yLDEuNGwtOSwyLjRsOC43LDEwLjdsLTIuOSwxLjYgbDEuNywzLjVsLTAuMiwxLjRsLTYuOCwzLjRsLTEsMi40bC02LjQsMC44bC0wLjYsNGwtNS43LTAuOWwtMy4yLDEuMmwtNCwzbDEuMSwxLjVsLTEsMS41bDMsNS45bDEuNi0wLjZsMy41LDEuNGwwLjYsMi41bDEuOCwzLjcgbDEuNCwxLjlsNC43LDNsMi45LDVsOS40LDIuNmw3LjYsNy41bDAuOCw1LjJsMywzLjNsMC42LDMuM2wtNC4xLTAuOWwzLjIsN2w2LjIsNGw4LjUsNC40bDEuOS0xLjVsNC43LDJsNi40LDQuMWwzLjIsMC45bDIuNSwzLjEgbDQuNSwxLjJsNSwyLjhsNi40LDEuNWw2LjUsMC42bDMtMS40bDEuNSw1LjFsMi42LTQuOGwyLjYtMS42bDQuMiwxLjVsMi45LDAuMWwyLjcsMS44bDQuMi0wLjhsMy45LTQuOGw1LjMtNGw0LjksMS41bDMuMi0yLjYgbDMuNSwzLjlsLTEuMiwyLjdsNi4xLDAuOWwzLTAuNGwyLjcsMy43bDIuNywxLjVsMS4zLDQuOWwwLjgsNS4zbC00LjEsNS4zbDAuNyw3LjVsNS42LTFsMi4zLDUuOGwzLjcsMS4zbC0wLjgsNS4ybDQuNSwyLjRsMi41LDEuMiBsMy44LTEuOGwwLjYsMi42bDAuNywxLjVsMi45LDAuMWwtMS45LTcuMmwyLjctMWwyLjctMS41aDQuM2w1LjMtMC43bDQuMS0zLjRsMywyLjRsNS4yLDEuMWwtMC4yLDMuN2wzLDIuNmw1LjksMS42bDIuNC0xbDcuNywyIGwtMC45LDIuNWwyLjIsNC42bDMtMC40bDAuOC02LjdsNS42LTAuOWw3LjItMy4ybDIuNS0zLjJsMi4zLDIuMWwyLjgtMi45bDYuMS0wLjdsNi42LTUuM2w2LjMtNS45bDMuMy03LjZsMi4zLTguNGwyLjEtNi45bDIuOC0wLjUgbC0wLjEtNS4xbC0wLjgtNS4xbC0zLjgtMmwtMi41LTMuNGwyLjgtMS43bC0xLjYtNC43bC01LjQtNC45bC01LjQtNS44bC00LjYtNi4zbC03LjEtMy41bDAuOS00LjZsMy44LTMuMmwxLTMuNWw2LjctMS44bC0yLjQtMy40IGwtMy40LTAuMmwtNS44LTIuNWwtMy45LDQuNmwtNC45LTEuOWwtMS41LTIuOWwtNC43LTFsLTQuNy00LjRsMS4yLTNsNS0wLjNsMS4yLTQuMWwzLjYtNC40bDMuNC0yLjJsNC40LDMuM2wtMS45LDQuMmwyLjMsMi41IGwtMS40LDNsNC44LTEuOGwyLjQtMi45bDYuMy0xLjlsMi4xLTRsMy44LTMuNGwxLTQuNGwzLjYsMmw0LjYsMC4ybC0yLjctMy4zbDYuMy0yLjZsLTAuMS0zLjVsNS41LDMuNmwwLDBsLTEuOS0zLjFsMi41LTAuMSBsLTMuOC03LjNsLTQuNy01LjNsMi45LTIuMmw2LjgsMS4xbC0wLjYtNmwtMi44LTYuOGwwLjQtMi4zbC0xLjMtNS42bC02LjksMS44bC0yLjYsMi41aC03LjVsLTYtNS44bC04LjktNC41TDE2MDAuNCwyNTYuOCBMMTYwMC40LDI1Ni44elwifSxDTzp7ZDpcIk01NzguMyw0OTcuMmwxLjItMi4xbC0xLjMtMS43bC0yLTAuNGwtMi45LDMuMWwtMi4zLDEuNGwtNC42LDMuMmwtNC4zLTAuNWwtMC41LDEuM2wtMy42LDAuMWwtMy4zLDNsLTEuNCw1LjQgbC0wLjEsMi4xbC0yLjQsMC43bC00LjQsNC40bC0yLjktMC4ybC0wLjcsMC45bDEuMSwzLjhsLTEuMSwxLjlsLTEuOC0wLjVsLTAuOSwzLjFsMi4yLDMuNGwwLjYsNS40bC0xLjIsMS42bDEuMSw1LjlsLTEuMiwzLjcgbDIsMS41bC0yLjIsMy4zbC0yLjUsNGwtMi44LDAuNGwtMS40LDIuM2wwLjIsMy4ybC0yLjEsMC41bDAuOCwybDUuNiwzLjZsMS0wLjFsMS40LDIuN2w0LjcsMC45bDEuNi0xbDIuOCwyLjFsMi40LDEuNWwxLjUtMC42IGwzLjcsM2wxLjgsM2wyLjcsMS43bDMuNCw2LjdsNC4yLDAuOGwzLTEuN2wyLjEsMS4xbDMuMy0wLjZsNC40LDNsLTMuNSw2LjVsMS43LDAuMWwyLjksMy40bDIuMi0xNy40bDAuMS0yLjhsLTAuOS0zLjZsLTIuNS0yLjQgdi00LjZsMy4yLTFsMS4xLDAuNmwwLjItMi40bC0zLjMtMC43di0zLjlsMTAuOSwwLjFsMS45LTIuMmwxLjYsMmwxLDMuOGwxLjEtMC44bC0xLjctNi40bC0xLjQtMi4ybC0yLTEuNGwyLjktMy4xbC0wLjItMS41IGwtMS41LTEuOWwtMS00LjJsMC41LTQuNmwxLjMtMi4xbDEuMi0zLjRsLTItMS4xbC0zLjIsMC43bC00LTAuM2wtMi4zLDAuN2wtMy44LTUuNWwtMy4yLTAuOGwtNy4yLDAuNmwtMS4zLTIuMmwtMS4zLTAuNmwtMC4yLTEuMyBsMC44LTIuNGwtMC40LTIuNWwtMS4xLTEuNGwtMC42LTIuOWwtMi45LTAuNWwxLjgtMy43bDAuOS00LjVsMS44LTIuNGwyLjItMS44bDEuNi0zLjJMNTc4LjMsNDk3LjJMNTc4LjMsNDk3LjJ6XCJ9LEtNOntkOlwiTTEyMjEuMSw2NTAuNWwtMC40LTAuNGgtMC40djAuMmwwLjEsMC40bDEuMSwwLjJMMTIyMS4xLDY1MC41TDEyMjEuMSw2NTAuNXogTTEyMjUsNjQ5TDEyMjUsNjQ5bC0wLjMsMC4xbC0wLjEsMC4yIGwtMC4xLDAuM2gtMC4zaC0wLjJoLTAuNGwwLjgsMC41bDAuNSwwLjVsMC4yLDAuMmwwLjEtMC4ybDAuMS0wLjdMMTIyNSw2NDlMMTIyNSw2NDl6IE0xMjE5LjQsNjQ3LjlsMC4yLTAuM2wtMC4yLTAuN2wtMC40LTAuOCBsMC4xLTEuNGwtMC4yLTAuMmgtMC4zbC0wLjEsMC4xbC0wLjEsMC4zbC0wLjMsMmwwLjQsMC42bDAuMywwLjFMMTIxOS40LDY0Ny45TDEyMTkuNCw2NDcuOUwxMjE5LjQsNjQ3Ljl6XCJ9LENHOntkOlwiTTEwODAuMyw1NDkuOWwtMy42LTAuNGwtMy44LTEuMWwtMy4zLDMuNGwtMi45LDUuOWwtMC40LDMuNWwtNC41LTEuNWwtNC41LTEuN2wtNy4xLTAuM2wtMC40LDIuOGwxLjUsMy4zbDQuMi0wLjUgbDEuNCwxLjJsLTIuNCw3LjRsMi43LDMuOGwwLjYsNC45bC0wLjgsNC4zbC0xLjcsM2wtNC45LTAuM2wtMy0zbC0wLjUsMi44bC0zLjgsMC44bC0xLjksMS42bDIuMSw0LjJsLTQuMywzLjVsNC42LDYuN2wyLjItMi43IGwxLjgtMS4xbDIsMi4ybDEuNSwwLjZsMS45LTIuNGwzLjEsMC4xbDAuNCwxLjhsMiwxLjFsMy40LTRsMy4zLTMuMWwxLjQtMmwtMC4yLTUuM2wyLjUtNi4ybDIuNi0zLjJsMy43LTMuMWwwLjYtMmwwLjItMi40bDAuOS0yLjIgbC0wLjMtMy42bDAuNy01LjZsMS4xLTRsMS42LTMuNEwxMDgwLjMsNTQ5LjlMMTA4MC4zLDU0OS45elwifSxDUjp7ZDpcIk01MDkuMSw1MDIuNmwtMS40LDEuM2wtMS43LTAuNGwtMC44LTEuM2wtMS43LTAuNWwtMS40LDAuOGwtMy41LTEuN2wtMC45LDAuOGwtMS40LDEuMmwxLjUsMC45bC0wLjksMmwtMC4xLDIgbDAuNywxLjNsMS43LDAuNmwxLjIsMS44bDEuMi0xLjZsLTAuMy0xLjhsMS40LDEuMWwwLjMsMS45bDEuOSwwLjhsMi4xLDEuM2wxLjUsMS41bDAuMSwxLjRsLTAuNywxLjFsMS4xLDEuM2wyLjksMS40bDAuNC0xLjIgbDAuNS0xLjNsLTAuMS0xLjJsMC44LTAuN2wtMS4xLTFsMC4xLTIuNWwyLjItMC42bC0yLjQtMi43bC0yLTIuNkw1MDkuMSw1MDIuNkw1MDkuMSw1MDIuNnpcIn0sSFI6e2Q6XCJNMTA2NSwyODAuNGwtNC0yLjZsLTEuNi0wLjhsLTMuOSwxLjdsLTAuMywyLjVsLTEuNywwLjZsMC4yLDEuN2wtMi0wLjFsLTEuOC0xbC0wLjgsMWwtMy41LTAuMmwtMC4yLDAuMXYyLjJsMS43LDIgbDEuMy0yLjZsMy4zLDFsMC4zLDJsMi41LDIuNmwtMSwwLjVsNC42LDQuNWw0LjgsMS44bDMuMSwyLjJsNSwyLjNsMCwwbDAuNS0xbC00LjctMi40bC0yLjItMi41bC0yLTEuNGwtMi41LTIuM2wtMS4zLTEuOWwtMi43LTIuOSBsMC45LTIuNWwxLjksMS40bDEtMS4zbDIuMy0wLjFsNC40LDFsMy41LTAuMWwyLjQsMS40bDAsMGwxLjctMi4zbC0xLjctMS44bC0xLjUtMi40bDAsMGwtMS44LDAuOUwxMDY1LDI4MC40TDEwNjUsMjgwLjR6XCJ9LENVOntkOlwiTTUzOSw0MjcuM2wtNC45LTIuMWwtNC4zLTAuMWwtNC43LTAuNWwtMS40LDAuN2wtNC4yLDAuNmwtMywxLjNsLTIuNywxLjRsLTEuNSwyLjNsLTMuMSwybDIuMiwwLjZsMi45LTAuN2wwLjktMS42IGwyLjMtMC4xbDQuNC0zLjNsNS40LDAuM2wtMi4zLDEuNmwxLjgsMS4zbDcsMWwxLjUsMS4zbDQuOSwxLjdsMy4yLTAuMmwwLjgsMy42bDEuNywxLjhsMy41LDAuNGwyLjEsMS43bC00LjEsMy41bDcuOS0wLjZsMy44LDAuNSBsMy43LTAuM2wzLjgtMC44bDAuOC0xLjVsLTMuOS0yLjZsLTQtMC4zbDAuNi0xLjdsLTMuMS0xLjNoLTEuOWwtMy0yLjhsLTQuMi00bC0xLjgtMS41bC01LjIsMC44TDUzOSw0MjcuM0w1MzksNDI3LjN6XCJ9LENXOntkOlwiTTU5NS45LDQ5NC45di0wLjZsLTAuOS0wLjR2MC4zbDAuMSwwLjJsMC4zLDAuMWwwLjEsMC4ybC0wLjEsMC42bDAuMiwwLjNMNTk1LjksNDk0LjlMNTk1LjksNDk0Ljl6XCJ9LENZOntkOlwiTTExNDkuOSwzNDguNGwtMC4zLTAuMWwtMC41LDAuMmwtMC40LDAuNGwtMC40LDAuM2wtMC41LTAuM2wwLjIsMC45bDAuNiwxLjFsMC4yLDAuM2wwLjMsMC4ybDEuMSwwLjNoMC4zaDAuNiBsMC4yLDAuMWwwLjIsMC40aDAuNHYtMC4xdi0wLjNsMC4yLTAuMmwwLjMtMC4yaDAuM2wwLjYtMC4xbDAuNi0wLjJsMC41LTAuNGwwLjktMWgwLjNoMC4zaDAuNmwwLjYtMC4xbC0wLjItMC40bC0wLjEtMC4xbC0wLjQtMC41IGwtMC4yLTAuNGwwLjEtMC42bDIuNS0xLjlsMC41LTAuNWwtMC44LDAuMmwtMC42LDAuNGwtMC40LDAuMmwtMC43LDAuNGwtMi4zLDAuOGwtMC44LDAuMWgtMC44bC0xLTAuMWwtMC45LTAuMnYwLjdsLTAuMiwwLjYgbC0wLjYsMC4yTDExNDkuOSwzNDguNEwxMTQ5LjksMzQ4LjR6XCJ9LENaOntkOlwiTTEwNDkuNCwyNDguNWwtMi4xLDAuNmwtMS40LTAuN2wtMS4xLDEuMmwtMy40LDEuMmwtMS43LDEuNWwtMy40LDEuM2wxLDEuOWwwLjcsMi42bDIuNiwxLjVsMi45LDIuNmwzLjgsMmwyLjYtMi41IGwxLjctMC41bDQsMS45bDIuMy0wLjNsMi4zLDEuMmwwLjYtMS40bDIuMiwwLjFsMS42LTAuNmwwLjEtMC42bDAuOS0wLjNsMC4yLTEuNGwxLjEtMC4zbDAuNi0xLjFoMS41bC0yLjYtMy4xbC0zLjYtMC4zbC0wLjctMiBsLTMuNC0wLjZsLTAuNiwxLjVsLTIuNy0xLjJsMC4xLTEuN2wtMy43LTAuNkwxMDQ5LjQsMjQ4LjVMMTA0OS40LDI0OC41elwifSxDRDp7ZDpcIk0xMTI0LjksNTM5LjRsLTQuMy0wLjdsLTIsMC42bC0wLjksMS41bC0xLjgsMC4ybC0yLjItMS4zbC02LjIsMy4xbC0yLjYtMC42bC0wLjgsMC41bC0xLjYsMy44bC00LjItMS4ybC00LjEtMC42IGwtMy42LTIuNGwtNC42LTIuMWwtMywybC0yLjIsMy4ybC0wLjUsNC41bC0wLjMsMy44bC0xLjYsMy40bC0xLjEsNGwtMC43LDUuNmwwLjMsMy42bC0wLjksMi4ybC0wLjIsMi40bC0wLjYsMmwtMy43LDMuMWwtMi42LDMuMiBsLTIuNSw2LjJsMC4yLDUuM2wtMS40LDJsLTMuMywzLjFsLTMuNCw0bC0yLTEuMWwtMC40LTEuOGwtMy4xLTAuMWwtMS45LDIuNGwtMS41LTAuNmwtMiwxLjNsLTAuOSwxLjdsLTAuMiwyLjdsLTEuNSwwLjdsMC44LDIgbDIuMy0wLjlsMS43LDAuMWwxLjktMC43bDE2LjYsMC4xbDEuMyw0LjdsMS42LDMuOGwxLjMsMi4xbDIuMSwzLjNsMy43LTAuNWwxLjktMC45bDMsMC45bDAuOS0xLjZsMS41LTMuN2wzLjQtMC4zbDAuMy0xLjFoMi45IGwtMC41LDIuM2g2Ljh2NGwxLjIsMi40bC0wLjksMy44bDAuMyw0bDEuOSwyLjNsLTAuNSw3LjZsMS40LTAuNmwyLjQsMC4ybDMuNS0xbDIuNiwwLjRsMS45LDAuMWwwLjMsMmwyLjYtMC4xbDMuNSwwLjZsMS44LDIuOCBsNC41LDAuOWwzLjQtMmwxLjIsMy40bDQuMywwLjhsMiwyLjhsMi4xLDMuNWg0LjNsLTAuMy02LjlsLTEuNSwxLjJsLTMuOS0yLjVsLTEuNC0xLjFsMC44LTYuNGwxLjItNy41bC0xLjItMi44bDEuNi00LjFsMS42LTAuNyBsNy41LTEuMWwxLDAuM2wwLjItMS4xbC0xLjUtMS43bC0wLjctMy41bC0zLjQtMy41bC0xLjgtNC41bDEtMi43bC0xLjUtMy42bDEuMS0xMC4ybDAuMSwwLjFsLTAuMS0xLjFsLTEuNC0yLjlsMC42LTMuNWwwLjgtMC40IGwwLjItMy44bDEuNi0xLjhsMC4xLTQuOGwxLjMtMi40bDAuMy01LjFsMS4yLTNsMi4xLTMuM2wyLjItMS43bDEuOC0yLjNsLTIuMy0wLjhsMC4zLTcuNWwwLDBsLTUtNC4ybC0xLjQtMi43bC0zLjEsMS4zbC0yLjYtMC40IGwtMS41LDEuMWwtMi41LTAuOGwtMy41LTUuMmwtMS44LDAuNkwxMTI0LjksNTM5LjRMMTEyNC45LDUzOS40elwifSxESzp7ZDpcIk0xMDM1LjksMjIxLjJsLTEuNy0zbC02LjcsMmwwLjksMi41bDUuMSwzLjRMMTAzNS45LDIyMS4yTDEwMzUuOSwyMjEuMnogTTEwMjcuMywyMTYuMWwtMi42LTAuOWwtMC43LTEuNmwxLjMtMiBsLTAuMS0zbC0zLjYsMS42bC0xLjUsMS43bC00LDAuNGwtMS4yLDEuN2wtMC43LDEuNmwwLjQsNi4xbDIuMSwzLjRsMy42LDAuOGwzLTAuOWwtMS41LTNsMy4xLTQuM2wxLjQsMC43TDEwMjcuMywyMTYuMSBMMTAyNy4zLDIxNi4xelwifSxESjp7ZDpcIk0xMjE3LjgsNDk5LjJsLTIuNS0xLjdsMy4xLTEuNWwwLjEtMi43bC0xLjQtMS45bC0xLjYsMS41bC0yLjQtMC41bC0xLjksMi44bC0xLjgsM2wwLjUsMS43bDAuMiwybDMuMSwwLjFsMS4zLTAuNSBsMS4zLDEuMUwxMjE3LjgsNDk5LjJMMTIxNy44LDQ5OS4yelwifSxETTp7ZDpcIk02MzUuOCw0NzUuMWwwLjMtMC43bC0wLjEtMWwtMC4yLTAuNGwtMC44LTAuM3YwLjJsLTAuMSwwLjVsMC4zLDAuOGwwLjEsMS4xTDYzNS44LDQ3NS4xelwifSxETzp7ZDpcIk01NzkuNiw0NTcuNHYxLjhsMS40LDFsMi42LTQuNGwyLTAuOWwwLjYsMS42bDIuMi0wLjRsMS4xLTEuMmwxLjgsMC4zbDIuNi0wLjJsMi41LDEuM2wyLjMtMi42bC0yLjUtMi4zbC0yLjQtMC4yIGwwLjMtMS45bC0zLDAuMWwtMC44LTIuMmwtMS40LDAuMWwtMy4xLTEuNmwtNC40LTAuMWwtMC44LDEuMWwwLjIsMy41bC0wLjcsMi40bC0xLjUsMS4xbDEuMiwxLjlMNTc5LjYsNDU3LjRMNTc5LjYsNDU3LjR6XCJ9LEVDOntkOlwiTTU1My4xLDU3My4xbC0yLjQtMS41bC0yLjgtMi4xbC0xLjYsMWwtNC43LTAuOWwtMS40LTIuN2wtMSwwLjFsLTUuNi0zLjZsLTMuOSwyLjVsLTMuMSwxLjRsMC40LDIuNmwtMi4yLDQuMSBsLTEsMy45bC0xLjksMWwxLDUuOGwtMS4xLDEuOGwzLjQsMi43bDIuMS0yLjlsMS4zLDIuOGwtMi45LDQuN2wwLjcsMi43bC0xLjUsMS41bDAuMiwyLjNsMi4zLTAuNWwyLjMsMC43bDIuNSwzLjJsMy4xLTIuNmwwLjktNC4zIGwzLjMtNS41bDYuNy0yLjVsNi02LjdsMS43LTQuMUw1NTMuMSw1NzMuMXpcIn0sRUc6e2Q6XCJNMTEyOS43LDM3NC44bC01LjUtMS45bC01LjMtMS43bC03LjEsMC4ybC0xLjgsM2wxLjEsMi43bC0xLjIsMy45bDIsNS4xbDEuMywyMi43bDEsMjMuNGgyMi4xaDIxLjRoMjEuOGwtMS0xLjMgbC02LjgtNS43bC0wLjQtNC4ybDEtMS4xbC01LjMtN2wtMi0zLjZsLTIuMy0zLjVsLTQuOC05LjlsLTMuOS02LjRsLTIuOC02LjdsMC41LTAuNmw0LjYsOS4xbDIuNywyLjlsMiwybDEuMi0xLjFsMS4yLTMuM2wwLjctNC44IGwxLjMtMi41bC0wLjctMS43bC0zLjktOS4ybDAsMGwtMi41LDEuNmwtNC4yLTAuNGwtNC40LTEuNWwtMS4xLDIuMWwtMS43LTMuMmwtMy45LTAuOGwtNC43LDAuNmwtMi4xLDEuOGwtMy45LDJMMTEyOS43LDM3NC44IEwxMTI5LjcsMzc0Ljh6XCJ9LFNWOntkOlwiTTQ4Ny4yLDQ4N2wwLjYtMi41bC0wLjctMC43bC0xLjEtMC41bC0yLjUsMC44bC0wLjEtMC45bC0xLjYtMWwtMS4xLTEuM2wtMS41LTAuNWwtMS40LDAuNGwwLjIsMC43bC0xLjEsMC43IGwtMi4xLDEuNmwtMC4yLDFsMS40LDEuM2wzLjEsMC40bDIuMiwxLjNsMS45LDAuNmwzLjMsMC4xTDQ4Ny4yLDQ4N0w0ODcuMiw0ODd6XCJ9LEdROntkOlwiTSAxMDQwLjEgNTU3LjggbCAtOS4yIC0wLjIgbCAtMS45IDcuMiBsIDEgMC45IGwgMS45IC0wLjMgaCA4LjIgViA1NTcuOCBMIDEwNDAuMSA1NTcuOCB6IE0gMTAyMyA1NTEgTCAxMDIzLjYgNTUwLjIgTCAxMDIzLjYgNTQ5LjggTCAxMDI0LjYgNTQ4LjI1IEwgMTAyNC40NSA1NDcuNSBMIDEwMjMuMDQgNTQ3LjQgTCAxMDIyLjUgNTQ4LjIgTCAxMDIyLjU1IDU0OC41NSBMIDEwMjIuMjUgNTQ5LjM2IEwgMTAyMS41NSA1NDkuNSBMIDEwMjEuMjUgNTUwLjE1IEwgMTAyMS41IDU1MC43IEwgMTAyMyA1NTEgTSAxMDAzLjggNTgwLjIgTCAxMDAzLjkgNTgwLjQ0IEwgMTAwMy44MiA1ODAuNjIgTCAxMDAzLjY1IDU4MC41NSBMIDEwMDMuNjMgNTgwLjIzMiBMIDEwMDMuOCA1ODAuMlwifSxFUjp7ZDpcIk0xMTk4LjEsNDc0bC0zLjItMy4xbC0xLjgtNS45bC0zLjctNy4zbC0yLjYsMy42bC00LDFsLTEuNiwybC0wLjQsNC4ybC0xLjksOS40bDAuNywyLjVsNi41LDEuM2wxLjUtNC43bDMuNSwyLjkgbDMuMi0xLjVsMS40LDEuM2wzLjksMC4xbDQuOSwyLjVsMS42LDIuMmwyLjUsMi4xbDIuNSwzLjdsMiwyLjFsMi40LDAuNWwxLjYtMS41bC0yLjgtMS45bC0xLjktMi4ybC0zLjItMy43bC0zLjItMy42TDExOTguMSw0NzR6XCJ9LEVFOntkOlwiTTEwOTMuMiwxOTcuNWwtNS41LDAuOWwtNS40LDEuNmwwLjksMy40bDMuMywyLjFsMS41LTAuOGwwLjEsMy41bDMuNy0xbDIuMSwwLjdsNC40LDIuMmgzLjhsMS42LTEuOWwtMi41LTUuNSBsMi42LTMuNGwtMC45LTFsMCwwbC00LjYsMC4yTDEwOTMuMiwxOTcuNXpcIn0sRVQ6e2Q6XCJNMTE4Ny42LDQ3N2wtMS41LDQuN2wtNi41LTEuM2wtMC43LDUuNWwtMi4xLDYuMmwtMy4yLDMuMmwtMi4zLDQuOGwtMC41LDIuNmwtMi42LDEuOGwtMS40LDYuN3YwLjdsMC4yLDVsLTAuOCwyIGwtMywwLjFsLTEuOCwzLjZsMy40LDAuNWwyLjksMy4xbDEsMi41bDIuNiwxLjVsMy41LDYuOWwyLjksMS4xdjMuNmwyLDIuMWgzLjlsNy4yLDUuNGgxLjhsMS4zLTAuMWwxLjIsMC43bDMuOCwwLjVsMS42LTIuNyBsNS4xLTIuNmwyLjMsMi4xaDMuOGwxLjUtMmwzLjYtMC4xbDQuOS00LjVsNy40LTAuM2wxNS40LTE5LjFsLTQuOCwwLjFsLTE4LjUtNy42bC0yLjItMi4ybC0yLjEtMy4xbC0yLjItMy41bDEuMS0yLjNsLTEuMy0xLjEgbC0xLjMsMC41bC0zLjEtMC4xbC0wLjItMmwtMC41LTEuN2wxLjgtM2wxLjktMi44bC0yLTIuMWwtMi41LTMuN2wtMi41LTIuMWwtMS42LTIuMmwtNC45LTIuNWwtMy45LTAuMWwtMS40LTEuM2wtMy4yLDEuNSBMMTE4Ny42LDQ3N0wxMTg3LjYsNDc3elwifSxGSzp7ZDpcIk02OTAuMyw5MDIuN2wtMC4xLTAuM2wtMC40LTAuMmwtMC4yLTAuMWwwLjEsMC4ybDAuMSwwLjNsMC4xLDAuMmwwLjIsMC4xTDY5MC4zLDkwMi43TDY5MC4zLDkwMi43eiBNNjk1LjgsOTAxLjQgTDY5NS44LDkwMS40bC0wLjMtMC4xbC0wLjEsMC4ybDAuMiwwLjNsMC40LDAuMUw2OTUuOCw5MDEuNEw2OTUuOCw5MDEuNHogTTY4Mi45LDkwMGwtMC4xLDAuMmwtMC40LDAuMWwwLjIsMC4zbDAuNiwwLjRoMC40IGwwLjEtMC4zbC0wLjEtMC42aC0wLjNMNjgyLjksOTAwTDY4Mi45LDkwMHogTTY4NS43LDg5OGwtMC45LTAuM2wtMC40LTAuM2gtMC4zbDAuNCwwLjRsMC4xLDAuMmwwLjEsMC4ybDAuNiwwLjNsMC42LDAuM2wwLjQsMC4zIGwtMC4xLDAuMWwtMC44LDAuM2gtMC4zbC0wLjIsMC4xbDAuNCwwLjJsMC42LTAuMWwwLjItMC4xaDAuMmwwLjMsMC4xdjAuMmwtMC4xLDAuMmwtMC4yLDAuMmwtMC40LDAuM2wtMC42LDAuNGgtMC44bC0wLjcsMC43IGwwLjksMC41bDAuNywwLjNoMC45di0wLjFsMC4yLTAuMWgwLjNsMC4xLTAuMWwwLjItMC40di0wLjZoMC4ybDAuMywwLjFsMC43LTAuMWwwLjMtMC4xbDAuNi0wLjlsMC40LTAuOGwwLjItMC40bDAuMy0wLjJsMC4xLTAuMiBsMC4xLTAuM2wwLjMtMC4ydi0wLjNsLTAuNC0wLjJsLTAuMy0wLjJsLTAuMywwLjNsLTAuMi0wLjFsLTAuOSwwLjNoLTAuNGwtMC4zLTAuMmwtMC40LTAuMWwtMC40LDAuMWwtMC41LDAuNUw2ODUuNyw4OThMNjg1LjcsODk4IHogTTY4Ni40LDg5Ny42bDAuMS0wLjNsLTAuMS0wLjJsLTAuNS0wLjJoLTAuNWwwLjIsMC41bDAuMiwwLjJINjg2LjR6IE02OTIuMyw4OTYuOWgtMC40bDAuNCwwLjVsLTAuOCwwLjhsMC4yLDAuNmwwLjMsMC40bDAuMSwwLjIgbC0wLjEsMC4xbC0wLjQsMC4xbC0wLjMsMC4xbC0wLjIsMC4zbC0wLjksMC45bDAuMiwwLjJsLTAuMywwLjdsMC4yLDAuM2wwLjgsMC43bDAuOCwwLjR2LTAuN2wwLjQtMC4xbDAuNCwwLjJsMC40LTAuMmwtMC45LTFoMC4zIGwyLjUsMC41bC0wLjEtMC40bC0wLjEtMC4ybC0wLjMtMC40bDEuNS0wLjRsMC41LTAuM2wwLjItMC4zbDAuNi0wLjFsMC44LTAuM2wtMC4xLTAuMWwwLjEtMC4zbC0wLjQtMC4ybC0wLjUtMC4xbDAuMS0wLjNsMC41LTAuMSBsLTAuOC0wLjdsLTAuMy0wLjFsLTEsMC4xbC0wLjMsMC4xdjAuMmwwLjEsMC4zbDAuMywwLjNsMC4xLDAuMmwtMC4yLTAuMWwtMS4xLTAuNGwtMC4yLTAuMWwtMC4yLTAuNGwwLjItMC4xbDAuMywwLjFsMC4xLTAuMyBsLTAuNC0wLjNsLTAuNC0wLjFsLTAuOSwwLjFMNjkyLjMsODk2LjlMNjkyLjMsODk2Ljl6XCJ9LEZPOntkOlwiTTk0NywxODYuOXYtMC4zbC0wLjEtMC4zdi0wLjJoLTAuMWwtMC41LTAuMWwtMC4xLTAuMmgtMC4xdjAuMmwwLjEsMC40bDAuNSwwLjRMOTQ3LDE4Ni45TDk0NywxODYuOUw5NDcsMTg2Ljl6TTk0Ny41LDE4NC44di0wLjFsLTAuMi0wLjJsLTAuNS0wLjJsLTAuMi0wLjFsLTAuMiwwLjF2MC4ybDAuMSwwLjFsMC40LDAuMWwwLjQsMC4zaDAuMUw5NDcuNSwxODQuOEw5NDcuNSwxODQuOHogTTk0NS4xLDE4Mi45bC0wLjItMC4xbC0wLjUsMC4xaC0wLjNsMC4xLDAuM2wwLjYsMC4yaDAuM2gwLjNsMC4yLTAuMWwtMC4xLTAuMkw5NDUuMSwxODIuOUw5NDUuMSwxODIuOXogTTk0Ny42LDE4Mi40bC0wLjgtMC4ybC0wLjYtMC4zbC0xLDAuMWwwLjcsMS4xbDAuOCwwLjdsMC40LDAuMnYtMC4xdi0wLjJsLTAuNC0wLjVsLTAuMS0wLjFWMTgzbDAuMS0wLjFoMC4ybDAuMywwLjJoMC4yTDk0Ny42LDE4Mi40TDk0Ny42LDE4Mi40eiBNOTQ4LjYsMTgyLjJsLTAuMy0wLjJsLTAuNC0wLjR2MC41djAuM3YwLjFoMC4xbDAuMywwLjFMOTQ4LjYsMTgyLjJMOTQ4LjYsMTgyLjJ6XCJ9LEZKOntkOlwiTTE5NzYuNyw2NzQuNGwtMy43LDJsLTEuOSwwLjNsLTMuMSwxLjNsMC4yLDIuNGwzLjktMS4zbDMuOS0xLjZMMTk3Ni43LDY3NC40TDE5NzYuNyw2NzQuNHogTTE5NjUuNyw2ODIuNWwtMS42LDEgbC0yLjMtMC44bC0yLjcsMi4ybC0wLjIsMi44bDIuOSwwLjhsMy42LTAuOWwxLjgtMy4zTDE5NjUuNyw2ODIuNUwxOTY1LjcsNjgyLjV6XCJ9LEZJOntkOlwiTTEwOTMuNCwxNDQuNGwwLjgtMy44bC01LjctMi4xbC01LjgsMS44bC0xLjEsMy45bC0zLjQsMi40bC00LjctMS4zbC01LjMsMC4zbC01LjEtMi45bC0yLjEsMS40bDUuOSwyLjdsNy4yLDMuNyBsMS43LDguNGwxLjksMi4ybDYuNCwyLjZsMC45LDIuM2wtMi42LDEuMmwtOC43LDYuMWwtMy4zLDMuNmwtMS41LDMuM2wyLjksNS4ybC0wLjEsNS43bDQuNywxLjlsMy4xLDMuMWw3LjEtMS4ybDcuNS0yLjFsOC0wLjVsMCwwIGw3LjktNy40bDMuMy0zLjNsMC45LTIuOWwtNy4zLTMuOWwwLjktMy43bC00LjktNC4xbDEuNy00LjhsLTYuNC02LjNsMi44LTQuMWwtNy4yLTMuN0wxMDkzLjQsMTQ0LjRMMTA5My40LDE0NC40elwifSxGUjp7ZDpcIk0xMDEyLjIsMjkwLjlsMi43LDAuOGwtMC41LDIuN2wtMC4xLDAuMWwtMC4zLTAuMmwtMC41LDAuNmwwLDAuM2wtMy42LDIuNmwtMTAtMS42bC03LjQsMmwtMC41LDMuN2wtNiwwLjggbC0xLjMtMC43bDAuNy0wLjNsMC4yLTAuNGwtMC4yLTAuMmwtMC43LTAuMmwtMC4zLTAuMWwtMC40LDAuM2wtMC4xLDAuM2wwLjEsMC4xdjAuMmwtMy43LTEuOGwtMS45LDEuM2wtOS40LTIuOGwtMi0yLjRsMi43LTMuNyBsMS0xMi4zbC01LjEtNi41bC0zLjYtMy4xbC03LjUtMi40bC0wLjQtNC42bDYuNC0xLjNsOC4yLDEuNmwtMS40LTdsNC42LDIuNmwxMS4zLTQuOGwxLjQtNS4xbDQuMy0xLjJsMC43LDIuMmwyLjIsMC4xbDIuNCwyLjQgbDMuNCwyLjlsMi41LTAuNGw0LjQsMi44bDAsMGwxLjEsMC41bDEuNC0wLjFsMi40LDEuNmw3LjEsMS4ybC0yLjMsNC4ybC0wLjUsNC41bC0xLjMsMWwtMi4zLTAuNmwwLjIsMS42bC0zLjUsMy41djIuOGwyLjQtMC45IGwxLjgsMi43bDAsMGwtMC4yLDEuN2wxLjYsMi40bC0xLjcsMS44TDEwMTIuMiwyOTAuOXogTTEwMjUuNiwzMDQuM2wtMS02bC0wLjYsMS42bC0yLjcsMS4xbC0wLjcsNC4zbDMsMy43TDEwMjUuNiwzMDQuM3pcIn0sR0Y6e2Q6XCJNNjgxLjQsNTU2LjJsMS44LTQuN2wzLjUtNS44bC0wLjktMi42bC01LjgtNS40bC00LjEtMS41bC0xLjktMC43bC0zLjEsNS41bDAuNCw0LjRsMi4xLDMuN2wtMSwyLjdsLTAuNiwyLjkgbC0xLjQsMi44bDIuNCwxLjNsMS44LTEuOGwxLjIsMC4zbDAuOCwxLjhsMi43LTAuNUw2ODEuNCw1NTYuMnpcIn0sUEY6e2Q6XCJNMjEzLjIsNzA0LjlsLTAuMS0wLjNsLTAuMi0wLjNsLTAuMSwwLjFsMC4xLDAuMWwwLjIsMC4zdjAuMkwyMTMuMiw3MDQuOXogTTIyMi41LDY5MC4ybC0wLjItMC4ybC0wLjQtMC4yIGwtMC4yLTAuMWwtMC4yLTAuMWwtMC4xLDAuMWwwLjEsMC4xaDAuMWwwLjMsMC4ybDAuMywwLjFMMjIyLjUsNjkwLjJMMjIyLjUsNjkwLjJMMjIyLjUsNjkwLjJMMjIyLjUsNjkwLjJ6IE0xOTgsNjg5LjFsLTAuNi0wLjMgbDAuMSwwLjJsMC40LDAuMmwwLjIsMC4xTDE5OCw2ODkuMUwxOTgsNjg5LjF6IE0yMTguNSw2ODguOWwtMC40LTAuNWgtMC4zTDIxOC41LDY4OC45TDIxOC41LDY4OC45eiBNMTk2LjksNjg3LjlsLTAuNC0wLjQgbC0wLjItMC4zbC0wLjMtMC4xbDAuMSwwLjFsMC40LDAuNGwwLjMsMC40bDAuMiwwLjFMMTk2LjksNjg3Ljl6IE0xOTYuNiw2ODUuOGwtMC4xLTAuMWwwLDB2LTAuM2wwLjItMC4zbDAuNi0wLjR2LTAuMWwwLDAgbC0wLjIsMC4xbC0wLjQsMC4ybC0wLjIsMC4ybC0wLjEsMC4ybC0wLjEsMC4zbDAuMSwwLjJsMC4xLDAuMWgwLjJMMTk2LjYsNjg1LjhMMTk2LjYsNjg1Ljh6IE0xNDkuMiw2ODQuN2wtMC4yLTAuNmwtMC4zLTAuNSBsLTAuOC0wLjFsLTAuNSwwLjJsLTAuMSwwLjJsMC4xLDAuNGwwLjUsMC43bDAuNSwwLjFsMC44LTAuMWwwLjQsMC42bDAuMiwwLjFsMC40LDAuMWwwLjEtMC4zbC0wLjItMC41TDE0OS4yLDY4NC43TDE0OS4yLDY4NC43eiBNMTQ2LjMsNjgzLjhsMC4xLTAuNGwtMC4yLTAuMWgtMC41djAuMmwwLjEsMC4ybDAuMSwwLjFsMC4zLDAuMkwxNDYuMyw2ODMuOEwxNDYuMyw2ODMuOHogTTEzNi42LDY3OS41aDAuMmwtMC40LTAuNmwtMC4zLTAuMnYwLjEgdjAuN2wwLjMsMC4xTDEzNi42LDY3OS41eiBNMTgwLjUsNjc3LjloLTAuMkgxODBoLTAuMWwwLjUsMC4xbDAuNCwwLjJMMTgwLjUsNjc3LjlMMTgwLjUsNjc3Ljl6IE0xNzkuOCw2NzhsLTAuMy0wLjFsLTAuMy0wLjJoLTAuMyBsMC43LDAuM0gxNzkuOEwxNzkuOCw2Nzh6IE0xMzYsNjc4LjFsMC4xLTAuMmwtMC4xLTAuMWwtMC40LTAuMmwwLjEsMC4zdjAuMkgxMzZMMTM2LDY3OC4xTDEzNiw2NzguMXogTTE2OC44LDY3Ni4xbC0wLjMtMC40IGwtMC4yLTAuM2wtMC4yLTAuNGwtMC40LTAuNWwwLjEsMC4zbDAuMSwwLjJsMC4yLDAuMmwwLjIsMC40bDAuMSwwLjJsMC4zLDAuNGgwLjFMMTY4LjgsNjc2LjFMMTY4LjgsNjc2LjF6IE0xODUsNjc0LjZsMC4xLTAuNSBoLTAuMkwxODUsNjc0LjZMMTg1LDY3NC42TDE4NSw2NzQuNnogTTE3MC42LDY3M2wtMC42LTAuNmgtMC4xbDAuMSwwLjJsMC41LDAuNWwwLjEsMC4yVjY3M0wxNzAuNiw2NzN6IE0yMDEuNCw2MzkuMWwwLjEtMC4ydi0wLjIgbC0wLjEtMC4xbC0wLjMtMC4xbDAuMSwwLjdMMjAxLjQsNjM5LjFMMjAxLjQsNjM5LjF6IE0xOTguNyw2MzUuNGwtMC4xLTAuMmgtMC4ybC0wLjEsMC4xdjAuNUwxOTguNyw2MzUuNEwxOTguNyw2MzUuNHogTTE5OC44LDYzMy44bC0wLjgsMC41bDAuMiwwLjRsMC40LDAuMWwwLjItMC4ybDAuOC0wLjFsMC4zLTAuNGwtMC4zLDAuMUwxOTguOCw2MzMuOEwxOTguOCw2MzMuOHogTTE5Mi43LDYzMi4xbDAuMi0wLjVsLTAuMi0wLjEgbC0wLjQsMC4ydjAuMmwwLjMsMC40TDE5Mi43LDYzMi4xTDE5Mi43LDYzMi4xeiBNMTk1LjMsNjI5bDAuMy0wLjF2LTAuMWwtMC4yLTAuMmwtMC4zLTAuMWwtMC4xLDAuMWwtMC4xLDAuMmwwLjEsMC4zTDE5NS4zLDYyOSBMMTk1LjMsNjI5eiBNMTkyLjQsNjI4LjlsMC4xLTAuM3YtMC4ybC0wLjEtMC4ybC0wLjktMC4ybC0wLjEsMC4xdjAuNGwwLjIsMC41aDAuM0wxOTIuNCw2MjguOXpcIn0sR0E6e2Q6XCJNMTA1MC4yLDU1Ny43bC0wLjctMC4zbC0zLjQsMC44bC0zLjQtMC44bC0yLjYsMC40djcuNmgtOC4ybC0xLjksMC4zbC0xLjEsNC44bC0xLjMsNC42bC0xLjMsMmwtMC4yLDIuMWwzLjQsNi42IGwzLjcsNS4zbDUuOCw2LjRsNC4zLTMuNWwtMi4xLTQuMmwxLjktMS42bDMuOC0wLjhsMC41LTIuOGwzLDNsNC45LDAuM2wxLjctM2wwLjgtNC4zbC0wLjYtNC45bC0yLjctMy44bDIuNC03LjRsLTEuNC0xLjJsLTQuMiwwLjUgbC0xLjUtMy4zTDEwNTAuMiw1NTcuN0wxMDUwLjIsNTU3Ljd6XCJ9LEdNOntkOlwiTTg4Mi44LDQ4OC41bDUsMC4xbDEuNC0wLjloMWwyLjEtMS41bDIuNCwxLjRsMi40LDAuMWwyLjQtMS41bC0xLjEtMS44bC0xLjgsMS4xbC0xLjgtMC4xbC0yLjEtMS41bC0xLjgsMC4xIGwtMS4zLDEuNWwtNi4xLDAuMkw4ODIuOCw0ODguNUw4ODIuOCw0ODguNXpcIn0sR0U6e2Q6XCJNMTIwMCwzMDAuMmwtNy41LTIuOWwtNy43LTFsLTQuNS0xLjFsLTAuNSwwLjdsMi4yLDEuOWwzLDAuN2wzLjQsMi4zbDIuMSw0LjJsLTAuMywyLjdsNS40LTAuM2w1LjYsM2w2LjktMWwxLjEtMSBsNC4yLDEuOGwyLjgsMC40bDAuNi0wLjdsLTMuMi0zLjRsMS4xLTAuOWwtMy41LTEuNGwtMi4xLTIuNWwtNS4xLTEuM2wtMi45LDFMMTIwMCwzMDAuMkwxMjAwLDMwMC4yelwifSxERTp7ZDpcIk0xMDQzLjYsMjMyLjNsLTIuNC0xLjlsLTUuNS0yLjRsLTIuNSwxLjdsLTQuNywxLjFsLTAuMS0yLjFsLTQuOS0xLjRsLTAuMi0yLjNsLTMsMC45bC0zLjYtMC44bDAuNCwzLjRsMS4yLDIuMiBsLTMsM2wtMS0xLjNsLTMuOSwwLjNsLTAuOSwxLjNsMSwybC0xLDUuNmwtMS4xLDIuM2gtMi45bDEuMSw2LjRsLTAuNCw0LjJsMSwxLjRsLTAuMiwyLjdsMi40LDEuNmw3LjEsMS4ybC0yLjMsNC4ybC0wLjUsNC41aDQuMiBsMS0xLjRsNS40LDEuOWwxLjUtMC4zbDIuNiwxLjdsMC42LTEuNmw0LjQsMC4zbDMuNC0xLjJsMi40LDAuMmwxLjcsMS4zbDAuNC0xLjFsLTEtNGwxLjctMC44bDEuNS0yLjlsLTIuOS0yLjZsLTIuNi0xLjVsLTAuNy0yLjYgbC0xLTEuOWwzLjQtMS4zbDEuNy0xLjVsMy40LTEuMmwxLjEtMS4ybDEuNCwwLjdsMi4xLTAuNmwtMi4zLTMuOWwwLjEtMi4xbC0xLjQtMy4zbC0yLTIuMmwxLjItMS42TDEwNDMuNiwyMzIuM0wxMDQzLjYsMjMyLjN6XCJ9LEdIOntkOlwiTTk3Ni44LDUwMi4xbC0yLjYtMC41bC0xLjgsMWwtMi40LTAuNWwtOS43LDAuM2wtMC4yLDMuNmwwLjgsNC44bDEuNCw5LjFsLTIuMyw1LjNsLTEuNSw3LjJsMi40LDUuNWwtMC4yLDIuNSBsNSwxLjhsNS0xLjlsMy4yLTIuMWw4LjctMy44bC0xLjItMi4ybC0xLjUtNGwtMC40LTMuMmwxLjItNS43bC0xLjQtMi4zbC0wLjYtNS4xbDAuMS00LjZsLTIuNC0zLjNMOTc2LjgsNTAyLjFMOTc2LjgsNTAyLjF6XCJ9LEdSOntkOlwiTTExMDEuOSwzNDQuOWwtMC44LDIuOGw2LjYsMS4ydjEuMWw3LjYtMC42bDAuNS0xLjlsLTIuOCwwLjh2LTEuMWwtMy45LTAuNWwtNC4xLDAuNEwxMTAxLjksMzQ0LjlMMTEwMS45LDM0NC45eiBNMTExMy40LDMwNy41bC0yLjctMS42bDAuMywzbC00LjYsMC42bC0zLjktMi4xbC0zLjksMS43bC0zLjgtMC4ybC0xLDAuMmwtMC43LDEuMWwtMi44LTAuMWwtMS45LDEuM2wtMy4zLDAuNnYxLjZsLTEuNiwwLjkgbC0wLjEsMi4xbC0yLjEsM2wwLjUsMS45bDIuOSwzLjZsMi4zLDNsMS4zLDQuM2wyLjMsNS4xbDQuNiwyLjlsMy40LTAuMWwtMi40LTUuN2wzLjMtMC43bC0xLjktMy4zbDUsMS43bC0wLjQtMy43bC0yLjctMS44bC0zLjItMyBsMS44LTEuNGwtMi44LTNsLTEuNi0zLjhsMC45LTEuM2wzLDMuMmgyLjlsMi41LTFsLTMuOS0zLjZsNi4xLTEuNmwyLjcsMC42bDMuMiwwLjJsMS4xLTAuN0wxMTEzLjQsMzA3LjVMMTExMy40LDMwNy41elwifSxHTDp7ZDpcIk04ODcuNCw3Ni4zbC0yNi0wLjRsLTExLjgsMC4zbC01LDEuM2wtMTEuNS0wLjFsLTEyLjcsMi4xbC0xLjYsMS43bDYuNywyLjFsLTYuMi0xLjNsLTQuNS0wLjNsLTctMS40bC0xMC42LDIuMSBsLTIuNy0xLjJoLTEwLjRsLTEwLjksMC42bC04LjksMWwtMC4yLDEuOGwtNS4zLDAuNUw3NDQuMiw4OGwtNC42LDEuN2w4LjEsMS41bC0yLjgsMS42TDczMCw5NWwtMTUuNSwyLjJsLTIuMiwxLjdsNi40LDJsMTQuNSwxLjIgbC03LjUsMC4ybC0xMC45LDEuNWwzLjgsMy4xbDMsMS41bDkuNC0wLjNsMTAuMS0wLjJsNy42LDAuM2w4LDIuOWwtMS40LDIuMWwzLjYsMS45bDEuNCw1LjNsMSwzLjZsMS40LDEuOWwtNyw0LjhsMi42LDEuM2w0LjQtMC44IGwyLjYsMS44bDUuMywzLjRsLTcuNS0xLjRoLTMuOGwtMywyLjhsLTEuNSwzLjZsNC4yLDEuOGw0LTAuOGwyLjYtMC44bDUuNS0xLjlsLTIuOCw0LjJsLTIuNiwyLjNsLTcuMSwybC03LDYuM2wyLDJsLTMuNCw0bDMuNyw1LjIgbC0xLjUsNWwwLjcsMy43bDQuOCw3LjFsMC44LDUuNmwzLjEsMy4yaDguOWw1LDQuN2w2LjUtMC4zbDQuMS01LjdsMy41LTQuOGwtMC4zLTQuNGw4LjYtNC42bDMuMy0zLjdsMS40LTMuOWw0LjctMy41bDYuNS0xLjMgbDYuMS0xLjRsMy0wLjJsMTAuMi0zLjlsNy40LTUuN2w0LjgtMi4xbDQuNi0wLjFsMTIuNS0xLjhsMTIuMS00LjNsMTEuOS00LjZsLTUuNS0wLjNsLTEwLjYtMC4ybDUuMy0yLjhsLTAuNS0zLjZsNC4yLDNsMi43LDIuMSBsNy4zLTFsLTAuNi00LjNsLTQuNS0zLjFsLTUtMS4zbDIuNC0xLjRsNy4yLDIuMWwwLjUtMi4zbC00LjEtMy40aDUuNGw1LjYtMC44bDEuNy0xLjhsLTQtMi4xbDguNi0wLjNsLTQtNC4zbDQuMS0wLjVsMC4xLTQuMiBsLTYuMi0yLjVsNi40LTEuNmw1LjgtMC4xbC0zLjYtMy4ybDEuMS01LjFsMy42LTIuOWw0LjktMy4ybC04LTAuMmwxMS4zLTAuN2wyLjItMWwxNC42LTIuOWwtMS42LTEuN2wtMTAtMC44bC0xNi45LDEuNWwtOS4yLDEuNSBsNC41LTIuM2wtMi4zLTEuNGwtNywxLjJsLTkuNy0xLjRsLTEyLjEsMC41bC0xLjQtMC43bDE4LjMtMC40bDEyLjktMC4ybDYuNi0xLjRMODg3LjQsNzYuM0w4ODcuNCw3Ni4zelwifSxHRDp7ZDpcIk02MzIuMSw0OTUuN2wwLjUtMC4ybDAuMi0xLjFsLTAuMy0wLjFsLTAuMywwLjNsLTAuMywwLjV2MC40bC0wLjIsMC4zTDYzMi4xLDQ5NS43TDYzMi4xLDQ5NS43elwifSxHUDp7ZDpcIk02MzYuNCw0NzEuMWwwLjItMC4ydi0wLjNsLTAuMi0wLjNsLTAuMiwwLjFsLTAuMiwwLjN2MC4zbDAuMSwwLjFINjM2LjRMNjM2LjQsNDcxLjF6IE02MzQuNSw0NzAuM2wwLjItMC4ydi0xLjIgbDAuMS0wLjNsLTAuMi0wLjFsLTAuMi0wLjJsLTAuNi0wLjJsLTAuMSwwLjFsLTAuMiwwLjNsMC4xLDEuNWwwLjIsMC41bDAuMiwwLjFMNjM0LjUsNDcwLjNMNjM0LjUsNDcwLjN6IE02MzYuMSw0NjguOWwwLjgtMC4yIGwtMC45LTAuNmwtMC4yLTAuNHYtMC4zbC0wLjQtMC4zbC0wLjIsMC4ybC0wLjEsMC4zbDAuMSwwLjVsLTAuMywwLjRsMC4xLDAuNGwwLjQsMC4xTDYzNi4xLDQ2OC45TDYzNi4xLDQ2OC45elwifSxHVDp7ZDpcIk00ODIuOCw0NTguOWwtNS4xLTAuMWgtNS4ybC0wLjQsMy42aC0yLjZsMS44LDIuMWwxLjksMS41bDAuNSwxLjRsMC44LDAuNGwtMC40LDIuMUg0NjdsLTMuMyw1LjJsMC43LDEuMmwtMC44LDEuNSBsLTAuNCwxLjlsMi43LDIuNmwyLjUsMS4zbDMuNCwwLjFsMi44LDEuMWwwLjItMWwyLjEtMS42bDEuMS0wLjdsLTAuMi0wLjdsMS40LTAuNGwxLjMtMS42bC0wLjMtMS4zbDAuNS0xLjJsMi44LTEuOGwyLjgtMi40IGwtMS41LTAuOGwtMC42LDAuOWwtMS43LTEuMWgtMS42bDEuMi03LjJMNDgyLjgsNDU4LjlMNDgyLjgsNDU4Ljl6XCJ9LEdOOntkOlwiTTkxMi40LDQ5M2wtMC44LDAuNGwtMy0wLjVsLTAuNCwwLjdsLTEuMywwLjFsLTQtMS41bC0yLjctMC4xbC0wLjEsMi4xbC0wLjYsMC43bDAuNCwyLjFsLTAuOCwwLjloLTEuM2wtMS40LDEgbC0xLjctMC4xbC0yLjYsMy4xbDEuNiwxLjFsMC44LDEuNGwwLjcsMi44bDEuMywxLjJsMS41LDAuOWwyLjEsMi41bDIuNCwzLjdsMy0yLjhsMC43LTEuN2wxLTEuNGwxLjUtMC4ybDEuMy0xLjJoNC41bDEuNSwyLjMgbDEuMiwyLjdMOTE3LDUxNWwwLjksMS43djIuM2wxLjUtMC4zbDEuMi0wLjJsMS41LTAuN2wyLjMsMy45bC0wLjQsMi42bDEuMSwxLjNsMS42LDAuMWwxLjEtMi42bDEuNiwwLjJoMC45bDAuMy0yLjhsLTAuNC0xLjIgbDAuNi0wLjlsMi0wLjhsLTEuMy01LjFsLTEuMy0yLjZsMC41LTIuMmwxLjEtMC41bC0xLjctMS44bDAuMy0xLjlsLTAuNy0wLjdsLTEuMiwwLjZsMC4yLTIuMWwxLjItMS42bC0yLjMtMi43bC0wLjYtMS43bC0xLjMtMS40IGwtMS4xLTAuMmwtMS4zLDAuOWwtMS44LDAuOGwtMS42LDEuNGwtMi40LTAuNWwtMS41LTEuNmwtMC45LTAuMmwtMS41LDAuOGgtMC45TDkxMi40LDQ5M0w5MTIuNCw0OTN6XCJ9LEdXOntkOlwiTTkwMC4yLDQ5Mi4xbC0xMC4zLTAuM2wtMS41LDAuN2wtMS44LTAuMmwtMywxLjFsMC4zLDEuM2wxLjcsMS40djAuOWwxLjIsMS44bDIuNCwwLjVsMi45LDIuNmwyLjYtMy4xbDEuNywwLjEgbDEuNC0xaDEuM2wwLjgtMC45bC0wLjQtMi4xbDAuNi0wLjdMOTAwLjIsNDkyLjFMOTAwLjIsNDkyLjF6XCJ9LEdZOntkOlwiTTY1Ni4xLDUzNC4ybC0yLjEtMi4zbC0yLjktMy4xbC0yLjEtMC4xbC0wLjEtMy4zbC0zLjMtNC4xbC0zLjYtMi40bC00LjYsMy44bC0wLjYsMi4zbDEuOSwyLjNsLTEuNSwxLjJsLTMuNCwxLjEgdjIuOWwtMS42LDEuOGwzLjcsNC44bDIuOS0wLjNsMS4zLDEuNWwtMC44LDIuOGwxLjksMC45bDEuMiwzbC0xLjYsMi4ybC0xLDUuNGwxLjQsMy4zbDAuMywyLjlsMy41LDNsMi43LDAuM2wwLjctMS4zbDEuNy0wLjIgbDIuNi0xLjFsMS44LTEuN2wzLjEsMC41bDEuNC0wLjJsLTMuMy01LjZMNjU1LDU1MWwtMS44LTAuMWwtMi40LTQuNmwxLjEtMy4zbC0wLjMtMS41bDMuNS0xLjZMNjU2LjEsNTM0LjJMNjU2LjEsNTM0LjJ6XCJ9LEhUOntkOlwiTTU4MC42LDQ0Ni43bC00LjYtMWwtMy40LTAuMmwtMS40LDEuN2wzLjQsMWwtMC4zLDIuNGwyLjIsMi44bC0yLjEsMS40bC00LjItMC41bC01LTAuOWwtMC43LDIuMWwyLjgsMS45bDIuNy0xLjEgbDMuMywwLjRsMi43LTAuNGwzLjYsMS4xbDAuMi0xLjhsLTEuMi0xLjlsMS41LTEuMWwwLjctMi40TDU4MC42LDQ0Ni43elwifSxITjp7ZDpcIk01MTQuMSw0NzYuOGwtMS4zLTEuOGwtMS45LTFsLTEuNS0xLjRsLTEuNi0xLjJsLTAuOC0wLjFsLTIuNS0wLjlsLTEuMSwwLjVsLTEuNSwwLjJsLTEuMy0wLjRsLTEuNy0wLjRsLTAuOCwwLjcgbC0xLjgsMC43bC0yLjYsMC4ybC0yLjUtMC42bC0wLjksMC40bC0wLjUtMC42bC0xLjYsMC4xbC0xLjMsMS4xbC0wLjYtMC4ybC0yLjgsMi40bC0yLjgsMS44bC0wLjUsMS4ybDAuMywxLjNsLTEuMywxLjZsMS41LDAuNSBsMS4xLDEuM2wxLjYsMWwwLjEsMC45bDIuNS0wLjhsMS4xLDAuNWwwLjcsMC43bC0wLjYsMi41bDEuNywwLjZsMC43LDJsMS44LTAuM2wwLjgtMS41aDAuOGwwLjItMy4xbDEuMy0wLjJoMS4ybDEuNC0xLjdsMS41LDEuMyBsMC42LTAuOGwxLjEtMC43bDIuMS0xLjhsMC4zLTEuM2wwLjUsMC4xbDAuOC0xLjVsMC42LTAuMmwwLjksMC45bDEuMSwwLjNsMS4zLTAuOGgxLjRsMi0wLjhsMC45LTAuOUw1MTQuMSw0NzYuOEw1MTQuMSw0NzYuOHpcIn0sSEs6e2Q6XCJNMTYwNC45LDQzMC45di0wLjJ2LTAuMmwtMC40LTAuMmgtMC4zbDAuMSwwLjJsMC40LDAuNUwxNjA0LjksNDMwLjlMMTYwNC45LDQzMC45eiBNMTYwMy42LDQzMC45bC0wLjEtMC41bDAuMi0wLjMgbC0wLjksMC4zbC0wLjEsMC4zdjAuMWwwLjIsMC4xSDE2MDMuNkwxNjAzLjYsNDMwLjl6IE0xNjA1LjIsNDI5LjdsLTAuMS0wLjNsLTAuMi0wLjFsLTAuMS0wLjNsLTAuMS0wLjJsMCwwbC0wLjMtMC4xbC0wLjItMC4xIGgtMC40bC0wLjEsMC4xaC0wLjJsLTAuMiwwLjJsMCwwdjAuMmwtMC41LDAuNHYwLjJsMC4zLDAuMmwwLjUtMC4xbDAuNiwwLjJsMC44LDAuM3YtMC4ydi0wLjNMMTYwNS4yLDQyOS43TDE2MDUuMiw0MjkuN3pcIn0sSFU6e2Q6XCJNMTA3OS4xLDI2My44bC0xLjYsMC40bC0xLDEuNWwtMi4yLDAuN2wtMC42LTAuNGwtMi4zLDFsLTEuOSwwLjJsLTAuMywxLjJsLTQuMSwwLjhsLTEuOS0wLjdsLTIuNi0xLjZsLTAuMiwyLjYgaC0yLjhsMS4xLDEuM2wtMS4zLDRsMC44LDAuMWwxLjIsMi4xbDEuNiwwLjhsNCwyLjZsNC4yLDEuMmwxLjgtMC45bDAsMGwzLjctMS42bDMuMiwwLjJsMy44LTEuMWwyLjYtNC4zbDEuOS00LjJsMi45LTEuM2wtMC42LTEuNiBsLTIuOS0xLjdsLTEsMC42TDEwNzkuMSwyNjMuOEwxMDc5LjEsMjYzLjh6XCJ9LElTOntkOlwiTTkxNS43LDE1OC42bC02LjktMC40bC03LjMsMi45bC01LjEtMS41bC02LjksM2wtNS45LTMuOGwtNi41LDAuOGwtMy42LDMuN2w4LjcsMS4zbC0wLjEsMS42bC03LjgsMS4xbDguOCwyLjcgbC00LjYsMi41bDExLjcsMS44bDUuNiwwLjhsMy45LTFsMTIuOS0zLjlsNi4xLTQuMmwtNC40LTMuOEw5MTUuNywxNTguNkw5MTUuNywxNTguNnpcIn0sSU46e2Q6XCJNMTQxNC4xLDM4MC4xbC04LjUtNC40bC02LjItNGwtMy4yLTdsNC4xLDAuOWwtMC42LTMuM2wtMy0zLjNsLTAuOC01LjJsLTcuNi03LjVsLTMuNyw1LjRsLTUuNywxbC04LjUtMS42IGwtMS45LDIuOGwzLjIsNS42bDIuOSw0LjNsNSwzLjFsLTMuNywzLjdsMSw0LjVsLTMuOSw2LjNsLTIuMSw2LjVsLTQuNSw2LjdsLTYuNC0wLjVsLTQuOSw2LjZsNCwyLjlsMS4zLDQuOWwzLjUsMy4ybDEuOCw1LjVoLTEyIGwtMy4yLDQuMmw3LjEsNS40bDEuOSwyLjVsLTIuNCwyLjNsOCw3LjdsNCwwLjhsNy42LTMuOGwxLjcsNS45bDAuOCw3LjhsMi41LDguMWwzLjYsMTIuM2w1LjgsOC44bDEuMywzLjlsMiw4bDMuNCw2LjFsMi4yLDMgbDIuNSw2LjRsMy4xLDguOWw1LjUsNmwyLjItMS44bDEuNy00LjRsNS0xLjhsLTEuOC0yLjFsMi4yLTQuOGwyLjktMC4zbC0wLjctMTAuOGwxLjktNi4xbC0wLjctNS4zbC0xLjktOC4ybDEuMi00LjlsMi41LTAuMyBsNC44LTIuM2wyLjYtMS42bC0wLjMtMi45bDUtNC4ybDMuNy00bDUuMy03LjVsNy40LTQuMmwyLjQtMy44bC0wLjktNC44bDYuNi0xLjNsMy43LDAuMWwwLjUtMi40bC0xLjYtNS4ybC0yLjYtNC44bDAuNC0zLjggbC0zLjctMS43bDAuOC0yLjNsMy4xLTIuNGwtNC42LTMuNGwxLjItNC4zbDQuOCwyLjdsMi43LDAuNGwxLjIsNC40bDUuNCwwLjlsNS0wLjFsMy40LDEuMWwtMS42LDUuM2wtMi40LDAuNGwtMS4xLDMuNmwzLjUsMy4zIGwwLjItNGwxLjUtMC4xbDQuNSwxMC4xbDIuNC0xLjVsLTAuOS0yLjdsMC45LTIuMWwtMC45LTYuNmw0LjYsMS40bDEuNS01LjJsLTAuMy0zLjFsMi4xLTUuNGwtMC45LTMuNmw2LjEtNC40bDQuMSwxLjFsLTEuMy0zLjkgbDEuNi0xLjJsLTAuOS0yLjRsLTYuMS0wLjlsMS4yLTIuN2wtMy41LTMuOWwtMy4yLDIuNmwtNC45LTEuNWwtNS4zLDRsLTMuOSw0LjhsLTQuMiwwLjhsMi43LDJsMC40LDMuOWwtNC40LDAuMmwtNC43LTAuNGwtMy4yLDEgbC01LjUtMi41bC0wLjMtMS4ybC0xLjUtNS4xbC0zLDEuNGwwLjEsMi43bDEuNSw0LjFsLTAuMSwyLjVsLTQuNiwwLjFsLTYuOC0xLjVsLTQuMy0wLjZsLTMuOC0zLjJsLTcuNi0wLjlsLTcuNy0zLjVsLTUuOC0zLjEgbC01LjctMi41bDAuOS01LjlMMTQxNC4xLDM4MC4xTDE0MTQuMSwzODAuMXpcIn0sSUQ6e2Q6XCJNMTY1MS45LDYzNy4zbDAuNS0xLjdsLTEuOC0xLjlsLTIuOC0ybC01LjMsMS4zbDcsNC40TDE2NTEuOSw2MzcuM0wxNjUxLjksNjM3LjN6IE0xNjcyLjgsNjM2LjdsNC00LjhsMC4xLTEuOSBsLTAuNS0xLjNsLTUuNywyLjZsLTIuOCwzLjlsLTAuNywyLjFsMC42LDAuOEwxNjcyLjgsNjM2LjdMMTY3Mi44LDYzNi43eiBNMTYzNy4yLDYyMy43bC0xLjYsMi4ybC0zLjEsMC4xbC0yLjIsMy42bDMsMC4xbDMuOS0wLjkgbDYuNi0xLjJsLTEuMi0yLjhsLTMuNSwwLjZMMTYzNy4yLDYyMy43TDE2MzcuMiw2MjMuN3ogTTE2NjUuMyw2MjMuN2wtNS4yLDIuM2wtMy44LDAuNWwtMy40LTEuOWwtNC41LDEuM2wtMC4yLDIuM2w3LjQsMC44IGw4LjYtMS44TDE2NjUuMyw2MjMuN0wxNjY1LjMsNjIzLjd6IE0xNTg1LjgsNjE1LjNsLTAuNy0yLjNsLTIuMy0wLjVsLTQuNC0yLjRsLTYuOC0wLjRsLTQuMSw2LjFsNS4xLDAuNGwwLjgsMi44bDEwLDIuNmwyLjQtMC44IGw0LjEsMC42bDYuMywyLjRsNS4yLDEuMmw1LjgsMC41bDUuMS0wLjJsNS45LDIuNWw2LjYtMi40bC02LjYtMy44bC04LjMtMS4xbC0xLjgtNC4xbC0xMC4zLTMuMWwtMS4zLDIuNkwxNTg1LjgsNjE1LjMgTDE1ODUuOCw2MTUuM3ogTTE3MzIuNCw2MTEuN2wwLjItM2wtMS4yLTEuOWwtMS4zLDIuMmwtMS4yLDIuMmwwLjMsNC44TDE3MzIuNCw2MTEuN3ogTTE2OTEuNCw1OTQuMmwtMS40LTIuMWwtNS43LDAuM2wxLDIuNyBsMy45LDEuMkwxNjkxLjQsNTk0LjJMMTY5MS40LDU5NC4yeiBNMTcwOS41LDU5MS44bC02LjEtMS44bC02LjksMC4zbC0xLjUsMy41bDMuOSwwLjJsMy4yLTAuNGw0LjYsMC41bDQuNywyLjZMMTcwOS41LDU5MS44IEwxNzA5LjUsNTkxLjh6IE0xNzMwLjUsNTc5LjVsLTAuOC0yLjRsLTktMi42bC0yLjksMi4xbC03LjYsMS41bDIuMywzLjJsNSwxLjJsMi4xLDMuN2w4LjMsMC4xbDAuNCwxLjZsLTQtMC4xbC02LjIsMi4zbDQuMiwzLjEgbC0wLjEsMi44bDEuMiwyLjNsMi4xLTAuNWwxLjgtMy4xbDguMiw1LjlsNC42LDAuNWwxMC42LDUuNGwyLjMsNS4zbDEsNi45bC0zLjcsMS44bC0yLjgsNS4ybDcuMS0wLjJsMS42LTEuOGw1LjUsMS4zbDQuNiw1LjIgbDEuNS0yMC44bDEtMjAuN2wtNi0xLjJsLTQuMS0yLjNsLTQuNy0yLjJoLTVsLTYuNiwzLjhsLTQuOSw2LjhsLTUuNy0zLjhMMTczMC41LDU3OS41eiBNMTY4MC41LDU2My4xbC0xLTEuNGwtNS41LDQuNmwtNi41LDAuMyBsLTcuMS0wLjlsLTQuNC0xLjlsLTQuNyw0LjhsLTEuMiwyLjZsLTIuOSw5LjZsLTAuOSw1bC0yLjQsNC4ybDEuNiw0LjNsMi4zLDAuMWwwLjYsNi4xbC0xLjksNS45bDIuMywxLjlsMy42LTFsMC4zLTkuMWwtMC4yLTcuNCBsMy44LTEuOWwtMC43LDYuMmwzLjksMy43bC0wLjgsMi41bDEuMywxLjdsNS42LTIuNGwtMyw1LjJsMi4xLDIuMmwzLjEtMS45bDAuMy00LjFsLTQuNy03LjRsMS4xLTIuMmwtNS4xLTguMWw1LTIuNWwyLjYtMy43IGwyLjQsMC45bDAuNS0yLjlsLTEwLjUsMi4xbC0zLjEsMi45bC01LTUuNmwwLjktNC44bDQuOS0xbDkuMy0wLjNsNS40LDEuM2w0LjMtMS4zTDE2ODAuNSw1NjMuMUwxNjgwLjUsNTYzLjF6IE0xNjk5LjksNTY1IGwtMC42LTIuNmwtMy4zLTAuNmwtMC41LTMuNWwtMS44LDIuM2wtMSw1LjFsMS43LDguMmwyLjIsNGwxLjYtMC44bC0yLjMtMy4zbDAuOS0zLjlsMi45LDAuNkwxNjk5LjksNTY1TDE2OTkuOSw1NjV6IE0xNjM5LDU2MC41IGwwLjktMi45bC00LjMtNmwzLTUuOGwtNS0xaC02LjRsLTEuNyw3LjJsLTIsMi4ybC0yLjcsOC45bC00LjUsMS4zbC01LjQtMS44bC0yLjcsMC42bC0zLjIsMy4ybC0zLjYtMC40bC0zLjYsMS4ybC0zLjktMy41bC0xLTQuMyBsLTMuMyw0LjJsLTAuNiw1LjlsMC44LDUuNmwyLjYsNS40bDIuOCwxLjhsMC43LDguNWw0LjYsMC44bDMuNi0wLjRsMiwzLjFsNi43LTIuM2wyLjgsMmw0LDAuNGwyLDMuOWw2LjUtMi45bDAuOCwyLjNsMi41LTkuNyBsMC4zLTYuNGw1LjUtNC4zbC0wLjItNS44bDEuOC00LjNsNi43LTAuOEwxNjM5LDU2MC41TDE2MzksNTYwLjV6IE0xNTcwLjMsNjA5LjRsMC43LTkuOGwxLjctOGwtMi42LTRsLTQuMS0wLjVsLTEuOS0zLjZsLTAuOS00LjQgbC0yLTAuMmwtMy4yLTIuMmwyLjMtNS4ybC00LjMtMi45bC0zLjMtNS4zbC00LjgtNC40bC01LjctMC4xbC01LjUtNi44bC0zLjItMi43bC00LjUtNC4zbC01LjItNi4ybC04LjgtMS4ybC0zLjYtMC4zbDAuNiwzLjIgbDYuMSw3bDQuNCwzLjZsMy4xLDUuNWw1LjEsNGwyLjIsNC45bDEuNyw1LjVsNC45LDUuM2w0LjEsOC45bDIuNyw0LjhsNC4xLDUuMmwyLjIsMy44bDcsNS4ybDQuNSw1LjNMMTU3MC4zLDYwOS40TDE1NzAuMyw2MDkuNHpcIn0sSVI6e2Q6XCJNMTIxMy41LDMyNC40bC0zLjItMi45bC0xLjItMi40bC0zLjMsMS44bDIuOSw3LjNsLTAuNywybDMuNyw1LjJsMCwwbDQuNyw3LjhsMy43LDEuOWwxLDMuOGwtMi4zLDIuMmwtMC41LDUgbDQuNiw2LjFsNywzLjRsMy41LDQuOWwtMC4yLDQuNmgxLjdsMC41LDMuM2wzLjQsMy40bDEuNy0yLjVsMy43LDIuMWwyLjgtMWw1LjEsOC40bDQuMyw2LjFsNS41LDEuOGw2LjEsNC45bDYuOSwyLjFsNS4xLTMuMWw0LTEuMSBsMi44LDEuMWwzLjIsNy44bDYuMywwLjhsNi4xLDEuNWwxMC41LDEuOWwxLjItNy40bDcuNC0zLjNsLTAuOS0yLjlsLTIuNy0xbC0xLTUuN2wtNS42LTIuN2wtMi44LTMuOWwtMy4yLTMuM2wzLjktNS44bC0xLjEtNCBsLTQuMy0xLjFsLTEuMS00bC0yLjctNS4xbDEuNi0zLjVsLTIuNS0wLjlsMC41LTQuN2wwLjUtOGwtMS42LTUuNWwtMy45LTAuMmwtNy4zLTUuN2wtNC4zLTAuN2wtNi41LTMuM2wtMy44LTAuNmwtMi4xLDEuMiBsLTMuNS0wLjJsLTMsMy43bC00LjQsMS4ybC0wLjIsMS42bC03LjksMS43bC03LjYtMS4xbC00LjMtMy4zbC01LjItMS4zbC0yLjUtNC44bC0xLjMsMC4zbC0zLjgtMy40bDEuMi0zLjFsLTEuOS0xLjlsLTEuOSwwLjUgbC01LjMsNC43bC0xLjgsMC4yTDEyMTMuNSwzMjQuNEwxMjEzLjUsMzI0LjR6XCJ9LElROntkOlwiTTEyMDcuMywzMzQuOWwtNi4yLTAuOWwtMi4xLDFsLTIuMSw0LjFsLTIuNywxLjZsMS4yLDQuN2wtMC45LDcuOGwtMTEsNi43bDMuMSw3LjdsNi43LDEuN2w4LjUsNC41bDE2LjcsMTIuNyBsMTAuMiwwLjVsMy4yLTYuMWwzLjcsMC41bDMuMiwwLjRsLTMuNC0zLjRsLTAuNS0zLjNoLTEuN2wwLjItNC42bC0zLjUtNC45bC03LTMuNGwtNC42LTYuMWwwLjUtNWwyLjMtMi4ybC0xLTMuOGwtMy43LTEuOSBsLTQuNy03LjhsMCwwbC0yLjMsMS4xTDEyMDcuMywzMzQuOUwxMjA3LjMsMzM0Ljl6XCJ9LElFOntkOlwiTTk0Ny4zLDIzMS43bC0zLjUtMS4zbC0yLjksMC4xbDEuMS0zLjJsLTAuOC0zLjJsLTMuNywyLjhsLTYuNyw0LjdsMi4xLDYuMWwtNC4yLDYuNGw2LjcsMC45bDguNy0zLjZsMy45LTUuNCBMOTQ3LjMsMjMxLjdMOTQ3LjMsMjMxLjd6XCJ9LElMOntkOlwiTTExNjcuOCwzNjAuNWwtMS40LDAuMWwtMC40LDEuMWgtMS44bC0wLjEsMC4xbC0wLjYsMS42bC0wLjYsNC44bC0xLjEsMi45bDAuNCwwLjRsLTEuNCwyLjFsMCwwbDMuOSw5LjJsMC43LDEuNyBsMS43LTEwLjJsLTAuNC0yLjRsLTIuNCwwLjhsMC4xLTEuN2wxLjItMC44bC0xLjQtMC43bDAuNy00LjNsMiwwLjlsMC43LTJoLTAuMWwwLjYtMUwxMTY3LjgsMzYwLjVMMTE2Ny44LDM2MC41elwifSxJVDp7ZDpcIk0xMDU3LjgsMzI4LjZsLTEuNiw1LjFsMC45LDJsLTAuOSwzLjNsLTQuMi0yLjRsLTIuNy0wLjdsLTcuNS0zLjNsMC42LTMuNGw2LjIsMC42bDUuMi0wLjdMMTA1Ny44LDMyOC42eiBNMTA3Mi4zLDMxNi4ybC0wLjgsMi4zbC0zLjEtM2wtNC41LTFsLTEuOSw0LjFsMy45LDIuM2wtMC40LDMuM2wtMi4xLDAuNGwtMi41LDUuNmwtMi4xLDAuNWwtMC4xLTJsMC44LTMuNWwxLjEtMS4zbC0yLjMtMy43IGwtMS44LTMuMmwtMi4yLTAuOGwtMS43LTIuN2wtMy40LTEuMmwtMi4zLTIuNWwtMy45LTAuNGwtNC4yLTIuOGwtNC45LTRsLTMuNi0zLjZsLTEuOS02bC0yLjYtMC43bC00LjItMi4xbC0yLjMsMC45bC0yLjgsMi44IGwtMi4xLDAuNWwwLjUtMi43bC0yLjctMC44bC0xLjUtNC44bDEuNy0xLjhsLTEuNi0yLjRsMC4yLTEuN2wyLjIsMS4zbDIuNC0wLjNsMi43LTIuMWwwLjksMWwyLjQtMC4ybDAuOS0yLjVsMy44LDAuOGwyLjEtMS4xIGwwLjMtMi41bDMuMSwwLjlsMC41LTEuMmw0LjgtMS4xbDEuMywyLjJsNy4yLDEuNmwtMC4zLDNsMS40LDIuN2wtNC4xLTAuOWwtMy45LDIuMmwwLjQsM2wtMC41LDEuOGwxLjksMy4xbDQuOSwzLjFsMi45LDUuMWw2LDUgbDQtMC4xbDEuNCwxLjRsLTEuNCwxLjJsNC44LDIuM2wzLjksMS45bDQuNywzLjJMMTA3Mi4zLDMxNi4yeiBNMTA0MC4yLDMwNS4zbC0wLjEtMC42bC0wLjYsMC4xbC0wLjIsMC41SDEwNDAuMnogTTEwNDAuMywyOTIuNCBsLTAuOSwwLjNsMC4yLDAuOWwwLjctMC4xTDEwNDAuMywyOTIuNHogTTEwMjEuNiwzMTEuNmwtMi44LTAuM2wxLjMsMy42bDAuNCw3LjZsMi4xLDEuN2wyLTIuMWwyLjQsMC40bDAuNC04LjRsLTMuMy00LjQgTDEwMjEuNiwzMTEuNnpcIn0sQ0k6e2Q6XCJNOTQ2LjUsNTA2LjJsLTIuMywwLjlsLTEuMywwLjhsLTAuOS0yLjdsLTEuNiwwLjdsLTEtMC4xbC0xLDEuOWwtNC4zLTAuMWwtMS42LTFsLTAuNywwLjZsLTEuMSwwLjVsLTAuNSwyLjIgbDEuMywyLjZsMS4zLDUuMWwtMiwwLjhsLTAuNiwwLjlsMC40LDEuMmwtMC4zLDIuOGgtMC45bC0wLjMsMS44bDAuNiwzLjFsLTEuMiwyLjhsMS42LDEuOGwxLjgsMC40bDIuMywyLjdsMC4yLDIuNWwtMC41LDAuOCBsLTAuNSw1LjJsMS4xLDAuMmw1LjYtMi40bDMuOS0xLjhsNi42LTEuMWwzLjYtMC4xbDMuOSwxLjNsMi42LTAuMWwwLjItMi41bC0yLjQtNS41bDEuNS03LjJsMi4zLTUuM2wtMS40LTkuMWwtMy44LTEuNmwtMi43LDAuMiBsLTEuOSwxLjZsLTIuNS0xLjNsLTEtMi4xTDk0Ni41LDUwNi4yTDk0Ni41LDUwNi4yelwifSxKTTp7ZDpcIk01NTAuNyw0NTguNWwzLjktMC4xbC0wLjgtMS44bC0yLjctMS41bC0zLjctMC42bC0xLjItMC4ybC0yLjQsMC40bC0wLjgsMS41bDIuOSwyLjNsMywxTDU1MC43LDQ1OC41TDU1MC43LDQ1OC41eiBcIn0sSlA6e2Q6XCJNMTY5Mi41LDM1NC45bC00LjUtMS4zbC0xLjEsMi43bC0zLjMtMC44bC0xLjMsMy44bDEuMiwzbDQuMiwxLjhsLTAuMS0zLjdsMi4xLTEuNWwzLjEsMi4xbDEuMy0zLjlMMTY5Mi41LDM1NC45IEwxNjkyLjUsMzU0Ljl6IE0xNzE2LjksMzM1LjZsLTMuNi02LjdsMS4zLTYuNGwtMi44LTUuMmwtOC4xLTguN2wtNC44LDEuMmwwLjIsMy45bDUuMSw3LjFsMSw3LjlsLTEuNywyLjVsLTQuNSw2LjVsLTUtMy4xdjExLjUgbC02LjMtMS4zbC05LjYsMS45bC0xLjksNC40bC0zLjksMy4zbC0xLjEsNGwtNC4zLDJsNCw0LjNsNC4xLDEuOWwwLjksNS43bDMuNSwyLjVsMi41LTIuN2wtMC44LTEwLjhsLTcuMy00LjdsNi4xLTAuMWw1LTNsOC42LTEuNCBsMi40LDQuOGw0LjYsMi40bDQuNC03LjNsOS4xLTAuNGw1LjQtM2wwLjYtNC42bC0yLjUtMy4yTDE3MTYuOSwzMzUuNkwxNzE2LjksMzM1LjZ6IE0xNzA1LjEsMjkxLjRsLTUuMy0yLjFsLTEwLjQtNi40bDEuOSw0LjggbDQuMyw4LjVsLTUuMiwwLjRsMC42LDQuN2w0LjYsNi4xaDUuN2wtMS42LTYuOGwxMC44LDQuMmwwLjQtNi4xbDYuNC0xLjdsLTYtNi45bC0xLjcsMi42TDE3MDUuMSwyOTEuNEwxNzA1LjEsMjkxLjR6XCJ9LEpPOntkOlwiTTExODYuNiwzNjcuNmwtMy4xLTcuN2wtOS42LDYuN2wtNi4zLTIuNWwtMC43LDJsMC40LDMuOWwtMC42LDEuOWwwLjQsMi40bC0xLjcsMTAuMmwwLjMsMC45bDYuMSwxbDIuMS0ybDEuMS0yLjMgbDQtMC44bDAuNy0yLjJsMS43LTFsLTYuMS02LjRsMTAuNC0zLjFMMTE4Ni42LDM2Ny42TDExODYuNiwzNjcuNnpcIn0sS1o6e2Q6XCJNMTMwOC44LDIyMy44bC05LTEuM2wtMy4xLDIuNWwtMTAuOCwyLjJsLTEuNywxLjVsLTE2LjgsMi4xbC0xLjQsMi4xbDUsNC4xbC0zLjksMS42bDEuNSwxLjdsLTMuNiwyLjlsOS40LDQuMiBsLTAuMiwzbC02LjktMC4zbC0wLjgsMS44bC03LjMtMy4ybC03LjYsMC4ybC00LjMsMi41bC02LjYtMi40bC0xMS45LTQuM2wtNy41LDAuMmwtOC4xLDYuNmwwLjcsNC42bC02LTMuNmwtMi4xLDYuOGwxLjcsMS4yIGwtMS43LDQuN2w1LjMsNC4zbDMuNi0wLjJsNC4yLDQuMWwwLjIsMy4ybDIuOCwxbDQuNC0xLjNsNS0yLjdsNC43LDEuNWw0LjktMC4zbDEuOSwzLjlsMC42LDZsLTQuNi0wLjlsLTQsMWwwLjksNC41bC01LTAuNmwwLjYsMiBsMy4yLDEuNmwzLjcsNS41bDYuNCwyLjFsMS41LDIuMWwtMC43LDIuNmwwLjcsMS41bDEuOC0ybDUuNS0xLjNsMy44LDEuN2w0LjksNC45bDIuNS0wLjNsLTYuMi0yMi44bDExLjktMy42bDEuMSwwLjVsOS4xLDQuNSBsNC44LDIuM2w2LjUsNS41bDUuNy0wLjlsOC42LTAuNWw3LjUsNC41bDEuNSw2LjJsMi41LDAuMWwyLjYsNWw2LjYsMC4ybDIuMywzaDEuOWwwLjktNC41bDUuNC00LjNsMi41LTEuMmwwLjMtMi43bDMuMS0wLjggbDkuMSwyLjFsLTAuNS0zLjZsMi41LTEuM2w4LjEsMi42bDEuNi0wLjdsOC42LDAuMmw3LjgsMC42bDMuMywyLjJsMy41LDAuOWwtMS43LTMuNWwyLjktMS42bC04LjctMTAuN2w5LTIuNGwyLTEuNGwtMS0xMS4xbDEwLjcsMiBsMS42LTIuOGwtMi41LTYuMmwzLjgtMC42bDEuOC00LjJsLTQuMy0zLjhsLTYsMC45bC0zLjMtMi42bC0zLjktMS4ybC00LjEtMy42bC0zLjItMS4xbC02LjIsMS42bC04LjMtMy42bC0xLjEsMy4zbC0xOC4xLTE1LjUgbC04LjMtNC43bDAuOC0xLjlsLTkuMSw1LjdsLTQuNCwwLjRsLTEuMi0zLjNsLTctMi4xbC00LjMsMS41TDEzMDguOCwyMjMuOEwxMzA4LjgsMjIzLjh6XCJ9LEtFOntkOlwiTTEyMTEuNyw1NDcuMmgtMy44bC0yLjMtMi4xbC01LjEsMi42bC0xLjYsMi43bC0zLjgtMC41bC0xLjItMC43bC0xLjMsMC4xaC0xLjhsLTcuMi01LjRoLTMuOWwtMi0yLjF2LTMuNiBsLTIuOS0xLjFsLTMuOCw0LjJsLTMuNCwzLjhsMi43LDQuNGwwLjcsMy4ybDIuNiw3LjNsLTIuMSw0LjdsLTIuNyw0LjJsLTEuNiwyLjZ2MC4zbDEuNCwyLjRsLTAuNCw0LjdsMjAuMiwxM2wwLjQsMy43bDgsNi4zIGwyLjItMi4xbDEuMi00LjJsMS44LTIuNmwwLjktNC41bDIuMS0wLjRsMS40LTIuN2w0LTIuNWwtMy4zLTUuM2wtMC4yLTIzLjJMMTIxMS43LDU0Ny4yTDEyMTEuNyw1NDcuMnpcIn0sS1c6e2Q6XCJNMTIzNS42LDM4MS40bC0zLjctMC41bC0zLjIsNi4xbDQuOSwwLjZsMS43LDMuMWwzLjgtMC4ybC0yLjQtNC44bDAuMy0xLjVMMTIzNS42LDM4MS40TDEyMzUuNiwzODEuNHpcIn0sS0c6e2Q6XCJNMTM4Ny4yLDMwMi42bC0zLjUtMC45bC0zLjMtMi4ybC03LjgtMC42bC04LjYtMC4ybC0xLjYsMC43bC04LjEtMi42bC0yLjUsMS4zbDAuNSwzLjZsLTkuMS0yLjFsLTMuMSwwLjhsLTAuMywyLjcgbDEuOCwwLjZsLTMuMSw0LjFsNC42LDIuM2wzLjItMS42bDcuMSwzLjNsLTUuMiw0LjVsLTQuMS0wLjZsLTEuNCwybC01LjktMS4xbDAuNiwzLjdsNS40LTAuNWw3LjEsMmw5LjUtMC45bDEtMS41bC0xLjEtMS41bDQtMyBsMy4yLTEuMmw1LjcsMC45bDAuNi00bDYuNC0wLjhsMS0yLjRsNi44LTMuNEwxMzg3LjIsMzAyLjZMMTM4Ny4yLDMwMi42elwifSxMQTp7ZDpcIk0xNTc0LjgsNDgxLjhsMC4yLTYuNGwtMi00LjVsLTQuOC00LjRsLTQuMy01LjZsLTUuNy03LjVsLTcuMy0zLjhsMS4zLTIuM2wzLjMtMS43bC0zLTUuNWwtNi44LTAuMWwtMy40LTUuNyBsLTQtNS4xbC0yLjcsMWwxLjksNy4ybC0yLjktMC4xbC0wLjctMS41bC00LjEsNC4xbC0wLjgsMi40bDIuNiwxLjlsMC45LDMuOGwzLjgsMC4zbC0wLjQsNi43bDEsNS43bDUuMy0zLjhsMS44LDEuMmwzLjItMC4yIGwwLjgtMi4ybDQuMywwLjRsNC45LDUuMmwxLjMsNi4zbDUuMiw1LjVsMC41LDUuNGwtMS41LDIuOWw0LjksMi40bDItNC4zTDE1NzQuOCw0ODEuOEwxNTc0LjgsNDgxLjh6XCJ9LExWOntkOlwiTTExMDIuMSwyMTAuMWgtMy44bC00LjQtMi4ybC0yLjEtMC43bC0zLjcsMWwtMC4yLDQuNmwtMy42LDAuMWwtNC40LTQuNWwtNCwyLjFsLTEuNywzLjdsMC41LDQuNWw1LTEuOWw3LjksMC40IGw0LjQtMC42bDAuOSwxLjNsMi41LDAuNGw1LDIuOWwyLjYtMWw0LjYtMi4zbC0yLjEtMy42bC0xLTIuOEwxMTAyLjEsMjEwLjFMMTEwMi4xLDIxMC4xelwifSxMQjp7ZDpcIk0xMTY3LjgsMzYwLjVsMC45LTMuNWwyLjYtMi40bC0xLjItMi41bC0yLjQtMC4zbC0wLjEsMC4ybC0yLjEsNC41bC0xLjMsNS4yaDEuOGwwLjQtMS4xTDExNjcuOCwzNjAuNSBMMTE2Ny44LDM2MC41elwifSxMUzp7ZDpcIk0xMTI4LjEsNzY2LjVsMS4xLTJsMy4xLTFsMS4xLTIuMWwxLjktMy4xbC0xLjctMS45bC0yLjMtMmwtMi42LDEuM2wtMy4xLDIuNWwtMy4yLDRsMy43LDQuOUwxMTI4LjEsNzY2LjUgTDExMjguMSw3NjYuNXpcIn0sTFI6e2Q6XCJNOTI5LjQsNTIzLjNsLTEuNi0wLjJsLTEuMSwyLjZsLTEuNi0wLjFsLTEuMS0xLjNsMC40LTIuNmwtMi4zLTMuOWwtMS41LDAuN2wtMS4yLDAuMmwtMi42LDNsLTIuNiwzLjRsLTAuMywxLjkgbC0xLjMsMmwzLjcsNC4xbDQuOCwzLjVsNS4xLDQuOGw1LjcsMy4xbDEuNS0wLjFsMC41LTUuMmwwLjUtMC44bC0wLjItMi41bC0yLjMtMi43bC0xLjgtMC40bC0xLjYtMS44bDEuMi0yLjhsLTAuNi0zLjEgTDkyOS40LDUyMy4zTDkyOS40LDUyMy4zelwifSxMWTp7ZDpcIk0xMTExLjgsMzcxLjRsLTEuNS0yLjFsLTUuNC0wLjhsLTEuOC0xLjFoLTJsLTItMi44bC03LjMtMS4zbC0zLjYsMC44bC0zLjcsM2wtMS41LDMuMWwxLjUsNC44bC0yLjQsM2wtMi41LDEuNiBsLTUuOS0zLjFsLTcuNy0yLjdsLTQuOS0xLjJsLTIuOC01LjdsLTcuMi0yLjhsLTQuNS0xLjFsLTIuMiwwLjZsLTYuNC0yLjJsLTAuMSw0LjlsLTIuNiwxLjhsLTEuNSwybC0zLjcsMi41bDAuNywyLjZsLTAuNCwyLjcgbC0yLjYsMS40bDEuOSw1LjZsMC40LDNsLTAuOSw1LjJsMC41LDIuOWwtMC42LDMuNWwwLjUsNGwtMi4xLDIuNmwzLjQsNC43bDAuMiwyLjdsMiwzLjZsMi42LTEuMmw0LjMsMi45bDIuNSw0bDguOCwyLjhsMy4xLDMuNSBsMy45LTIuNGw1LjQtMy41bDIyLjMsMTIuMmwyMi40LDEyLjJ2LTIuN2g2LjNsLTAuNS0xMi43bC0xLTIzLjRsLTEuMy0yMi43bC0yLTUuMWwxLjItMy45bC0xLjEtMi43TDExMTEuOCwzNzEuNEwxMTExLjgsMzcxLjR6XCJ9LExJOntkOlwiTTEwMjQuNCwyNzMuNnYtMC4ybDAuMS0wLjJsLTAuMS0wLjFsLTAuMS0wLjJsLTAuMS0wLjF2LTAuMmwtMC4xLTAuMXYtMC4ybC0wLjEtMC4xbC0wLjIsMC42djAuNWwwLjEsMC4yaDAuMSBMMTAyNC40LDI3My42TDEwMjQuNCwyNzMuNnpcIn0sTFQ6e2Q6XCJNMTEwMC40LDIyMS4ybC01LTIuOWwtMi41LTAuNGwtMC45LTEuM2wtNC40LDAuNmwtNy45LTAuNGwtNSwxLjlsMS43LDVsNSwxLjFsMi4yLDAuOWwtMC4yLDEuN2wwLjYsMS41bDIuNSwwLjYgbDEuNCwxLjloNC42bDQuOC0yLjJsMC41LTMuNGwzLjUtMkwxMTAwLjQsMjIxLjJMMTEwMC40LDIyMS4yelwifSxMVTp7ZDpcIk0xMDA3LDI1OC42bDAuMi0yLjdsLTEtMS40bC0xLjMsMC4ybC0wLjQsMy41bDEuMSwwLjVMMTAwNywyNTguNnpcIn0sTUs6e2Q6XCJNMTA5NCwzMDQuOGwtMi44LTJsLTIuNCwwLjFsLTEuNywwLjRsLTEuMSwwLjJsLTIuOSwxbC0wLjEsMS4yaC0wLjdsMCwwbC0wLjQsMi4xbDAuOSwyLjZsMi4zLDEuNmwzLjMtMC42bDEuOS0xLjMgbDIuOCwwLjFsMC43LTEuMWwxLTAuMkwxMDk0LDMwNC44TDEwOTQsMzA0Ljh6XCJ9LE1HOntkOlwiTTEyNTUuNyw2NTguNGwtMS4xLTQuMmwtMS40LTIuN2wtMS44LTIuN2wtMiwyLjhsLTAuMywzLjhsLTMuMyw0LjVsLTIuMy0wLjhsMC42LDIuN2wtMS44LDMuMmwtNC44LDMuOWwtMy40LDMuNyBoLTIuNGwtMi4yLDEuMmwtMy4xLDEuM2wtMi44LDAuMmwtMSw0LjFsLTIuMiwzLjVsMC4xLDUuOWwwLjgsNGwxLjEsM2wtMC44LDQuMWwtMi45LDQuOGwtMC4yLDIuMWwtMi42LDEuMWwtMS4zLDQuNmwwLjIsNC42bDEuNiw1IGwtMC4xLDUuN2wxLjIsMy4zbDQuMiwyLjNsMywxLjdsNS0yLjdsNC42LTEuNWwzLjEtNy40bDIuOC04LjlsNC4zLTEybDMuMy04LjhsMi43LTcuNGwwLjgtNS40bDEuNi0xLjVsMC43LTIuN2wtMC44LTQuN2wxLjItMS45IGwxLjYsMy44bDEuMS0xLjlsMC44LTMuMWwtMS4zLTIuOUwxMjU1LjcsNjU4LjRMMTI1NS43LDY1OC40elwifSxNVzp7ZDpcIk0xMTY5LjIsNjYxLjVsMC4xLTIuM2wtMS4yLTEuOWwwLjEtMi44bC0xLjUtNC43bDEuNy0zLjVsLTAuMS03LjdsLTEuOS00LjFsMC4yLTAuN2wwLDBsLTEuMS0xLjdsLTUuNC0xLjJsMi42LDIuOCBsMS4yLDUuNGwtMSwxLjhsLTEuMiw1LjFsMC45LDUuM2wtMS44LDIuMmwtMS45LDUuOWwyLjksMS43bDMsM2wxLjYtMC42bDIuMSwxLjZsMC4zLDIuNmwtMS4zLDIuOWwwLjIsNC41bDMuNCw0bDEuOS00LjVsMi41LTEuMyBsLTAuMS04LjJsLTIuMi00LjZsLTEuOS0yaC0wLjN2MC44bDEuMSwwLjNsMSwzLjRsLTAuMiwwLjhsLTEuOS0yLjVsLTEsMS42TDExNjkuMiw2NjEuNUwxMTY5LjIsNjYxLjV6XCJ9LE1ZOntkOlwiTTE1NTguMSw1NTQuNGwtMC41LTMuOGwtMC42LTIuMWwwLjUtMi45bC0wLjUtNC4zbC0yLjYtNC4zbC0zLjUtMy44bC0xLjMtMC42bC0xLjcsMi42bC0zLjcsMC44bC0wLjYtMy4zbC00LjctMi44IGwtMC45LDEuMWwxLjQsMi43bC0wLjQsNC43bDIuMSwzLjRsMSw1LjNsMy40LDQuM2wwLjgsMy4ybDYuNyw1bDUuNCw0LjhsNC0wLjVsMC4xLTIuMWwtMi4zLTUuNkwxNTU4LjEsNTU0LjR6IE0xNTYwLjksNTYzLjMgbDAuMiwwLjJsLTAuMSwwLjJsLTAuOSwwLjRsLTAuOS0wLjRsMC4zLTAuNmwwLjYtMC4xbDAuNSwwLjJMMTU2MC45LDU2My4zeiBNMTY0NS4yLDU0MC4ybC0zLjgsMC40bDEuMiwzLjFsLTQsMi4xbC01LTFoLTYuNCBsLTEuNyw3LjJsLTIsMi4ybC0yLjcsOC45bC00LjUsMS4zbC01LjQtMS44bC0yLjcsMC42bC0zLjIsMy4ybC0zLjYtMC40bC0zLjYsMS4ybC0zLjktMy41bC0xLTQuM2w0LjEsMi4ybDQuNC0xLjJsMC45LTUuNGwyLjQtMS4yIGw2LjctMS40bDMuOC01bDIuNi00bDIuNywzLjNsMS4xLTIuMmwyLjcsMC4ybDAuMS00LjFsMC4xLTMuMWw0LjEtNC40bDIuNS01aDIuM2wzLjEsMy4ybDAuNCwyLjhsMy44LDEuN2w0LjgsMkwxNjQ1LjIsNTQwLjJ6XCJ9LE1WOntkOlwiTTEzODkuMSw1NTEuNkwxMzg5LjEsNTUxLjZsMC4xLTAuM2wtMC4xLTAuMWgtMC4xbC0wLjEsMC4ydjAuMXYwLjFIMTM4OS4xeiBNMTM4OS40LDU0NS43bDAuMS0wLjJ2LTAuMXYtMC4xdi0wLjEgdi0wLjFsLTAuMSwwLjFsLTAuMSwwLjJ2MC4xbC0wLjEsMC4xdjAuMUgxMzg5LjRMMTM4OS40LDU0NS43elwifSxNTDp7ZDpcIk0xMDAwLjMsNDUwLjNsLTYuMSwwLjZsLTAuMS00bC0yLjYtMS4xbC0zLjQtMS44bC0xLjMtM2wtMTguNi0xMy44bC0xOC40LTEzLjlsLTguNCwwLjFsMi40LDI3LjRsMi40LDI3LjVsMSwwLjggbC0xLjMsNC40bC0yMi4zLDAuMWwtMC45LDEuNGwtMi4xLTAuNGwtMy4yLDEuM2wtMy44LTEuOGwtMS44LDAuMmwtMSwzLjdsLTEuOSwxLjJsMC4yLDMuOWwxLjEsMy43bDIuMSwxLjhsMC40LDIuNGwtMC4zLDJsMC4zLDIuMyBoMC45bDEuNS0wLjhsMC45LDAuMmwxLjUsMS42bDIuNCwwLjVsMS42LTEuNGwxLjgtMC44bDEuMy0wLjlsMS4xLDAuMmwxLjMsMS40bDAuNiwxLjdsMi4zLDIuN2wtMS4yLDEuNmwtMC4yLDIuMWwxLjItMC42bDAuNywwLjcgbC0wLjMsMS45bDEuNywxLjhsMC43LTAuNmwxLjYsMWw0LjMsMC4xbDEtMS45bDEsMC4xbDEuNi0wLjdsMC45LDIuN2wxLjMtMC44bDIuMy0wLjlsLTAuNC0zLjdsMS42LTIuN2wtMC4yLTIuMmw0LjUtNS4ybDAuOC00LjQgbDEuNi0xLjZsMi43LDAuOWwyLjMtMS4zbDAuOC0xLjZsNC4zLTIuOWwxLjEtMmw1LjItMi42bDMtMC45bDEuNCwxLjJoMy42bDMuNi0wLjNsMi0yLjJsNy42LTAuNmw0LjktMWwwLjUtMy45bDMtNC4zTDEwMDAuMyw0NTAuMyBMMTAwMC4zLDQ1MC4zelwifSxNVDp7ZDpcIk0xMDUzLjYsMzQ0bC0wLjItMC4ybC0wLjUtMC41bC0wLjUtMC4xbDAuMSwwLjZsMC40LDAuNGgwLjVMMTA1My42LDM0NEwxMDUzLjYsMzQ0eiBNMTA1Mi4yLDM0Mi44TDEwNTIuMiwzNDIuOCB2LTAuMmwtMC4zLTAuMWwtMC40LDAuMWwwLjEsMC4xbDAuMywwLjJMMTA1Mi4yLDM0Mi44elwifSxNUTp7ZDpcIk02MzgsNDc5LjlsLTAuMi0wLjdsLTAuMS0wLjJsLTAuMi0wLjNsMC4xLTAuM3YtMC4xaC0wLjJsLTAuMy0wLjVsLTAuNi0wLjNoLTAuM2wtMC4yLDAuMnYwLjNsMC4zLDAuOWwwLjIsMC4yIGwwLjUsMC4ybC0wLjQsMC40djAuMWwwLjEsMC4zaDAuOWwwLjIsMC4zbDAuMS0wLjFMNjM4LDQ3OS45TDYzOCw0NzkuOXpcIn0sTVI6e2Q6XCJNOTQ5LjgsNDEzLjNsLTIwLjMtMTUuNWwtMC4yLDkuN2wtMTcuOS0wLjNsLTAuMiwxNi4zTDkwNiw0MjRsLTEuNCwzLjNsMC45LDkuMmwtMjEuNi0wLjFsLTEuMiwyLjJsMi44LDIuN2wxLjQsMyBsLTAuNywzLjJsMC42LDMuMmwwLjUsNi4zbC0wLjgsNS45bC0xLjcsMy4ybDAuNCwzLjRsMi0ybDIuNywwLjVsMi44LTEuNGgzLjFsMi42LDEuOGwzLjcsMS43bDMuMiw0LjdsMy42LDQuNGwxLjktMS4ybDEtMy43IGwxLjgtMC4ybDMuOCwxLjhsMy4yLTEuM2wyLjEsMC40bDAuOS0xLjRsMjIuMy0wLjFsMS4zLTQuNGwtMS0wLjhsLTIuNC0yNy41bC0yLjQtMjcuNEw5NDkuOCw0MTMuM0w5NDkuOCw0MTMuM3pcIn0sTVU6e2Q6XCJNMTI5NC43LDcwMi41bDAuMy0wLjNsMC4yLTAuNGwwLjMtMC4zbDAuMS0wLjdsLTAuMi0wLjhsLTAuNC0wLjdsLTAuNSwwLjFsLTAuMywwLjRsLTAuMiwwLjVsLTAuNSwwLjNsLTAuMSwwLjMgbC0wLjIsMC43bC0wLjEsMC40bC0wLjIsMC4xdjAuMmwwLjMsMC4zbDAuOCwwLjFMMTI5NC43LDcwMi41TDEyOTQuNyw3MDIuNXpcIn0sWVQ6e2Q6XCJNMTIyOC43LDY1NC43di0wLjNsMC4yLTAuNXYtMC4xbDAuMS0wLjVsLTAuMy0wLjNoLTAuMmwtMC4yLTAuM2wtMC4zLDAuM2wwLjMsMC41bC0wLjEsMC4zbC0wLjEsMC40bDAuMSwwLjQgbDAuMiwwLjJMMTIyOC43LDY1NC43TDEyMjguNyw2NTQuN3pcIn0sTVg6e2Q6XCJNNDQ0LjQsNDA3LjhsLTMuNi0xLjRsLTMuOS0ybC0wLjgtM2wtMC4yLTQuNWwtMi40LTMuNmwtMS0zLjdsLTEuNi00LjRsLTMuMS0yLjVsLTQuNCwwLjFsLTQuOCw1bC00LTEuOWwtMi4yLTEuOSBsLTAuNC0zLjVsLTAuOC0zLjNsLTIuNC0yLjhsLTIuMS0ybC0xLjMtMi4yaC05LjNsLTAuOCwyLjZIMzkxaC0xMC43bC0xMC43LTQuNGwtNy4xLTMuMWwxLTEuM2wtNywwLjdsLTYuMywwLjVsMC4yLDUuN2wwLjcsNS4xIGwwLjcsNC4xbDAuOCw0bDIuNiwxLjhsMi45LDQuNWwtMSwyLjlsLTIuNywyLjNsLTIuMS0wLjNsLTAuNiwwLjVsMi4zLDMuN2wyLjksMS41bDEsMS43bDAuOS0wLjlsMy4xLDIuOWwyLjEsMmwwLjEsMy40bC0xLjIsNC43IGwyLjUsMS42bDMuMywzLjFsMi45LDMuNmwwLjcsMy45aDFsMi43LTIuM2wwLjQtMS4ybC0xLjUtMi44bC0xLjYtMi45bC0yLjYtMC4ybDAuNC0zLjRsLTAuOS0zbC0xLTIuOGwtMC41LTUuOWwtMi42LTMuMmwtMC42LTIuMyBsLTEuMi0xLjZ2LTQuMWwtMSwwLjFsLTAuMS0yLjJsLTAuNy0wLjVsLTAuNC0xLjRsLTIuNy00LjRsLTEuMS0yLjZsMS00LjhsMC4xLTNsMS44LTIuNmwyLjQsMS43bDEuOS0wLjJsMy4xLDIuNWwtMC45LDIuNGwwLjQsNC45IGwxLjUsNC43bC0wLjQsMmwxLjcsMy4xbDIuMywzLjRsMi43LDAuNWwwLjMsNC40bDIuNCwzLjFsMi41LDEuNWwtMS44LDRsMC43LDEuNWw0LjEsMi42bDEuOSw0bDQuNSw0LjlsMy44LDYuNGwxLjMsMy4ydjIuNSBsMS40LDIuOWwtMC4zLDIuMmwtMS42LDEuNmwwLjMsMS44bC0xLjksMC43bDAuOCwzLjFsMi4yLDRsNS4zLDMuNmwxLjksMi45bDUuNCwybDMsMC40bDEuMiwxLjdsNC4yLDNsNS45LDNsNCwwLjlsNC44LDIuOWw0LDEuMiBsMy43LDEuN2wyLjktMC43bDQuOC0yLjRsMy4xLTAuNGw0LjQsMS42bDIuNiwyLjFsNS41LDYuOWwwLjQtMS45bDAuOC0xLjVsLTAuNy0xLjJsMy4zLTUuMmg3LjFsMC40LTIuMWwtMC44LTAuNGwtMC41LTEuNCBsLTEuOS0xLjVsLTEuOC0yLjFoMi42bDAuNC0zLjZoNS4ybDUuMSwwLjFsMC4xLTFsMC43LTAuM2wwLjksMC44bDIuNS0zLjloMWwxLjItMC4xbDEuMiwxLjZsMi01bDEuMi0yLjdsLTAuOS0xLjFsMS44LTMuOWwzLjUtMy44IGwwLjYtMy4xbC0xLjItMS4zbC0zLjQsMC41bC00LjgtMC4ybC02LDEuNWwtNCwxLjdsLTEuMiwxLjhsLTEuMiw1LjRsLTEuOCwzLjdsLTMuOSwyLjZsLTMuNiwxLjFsLTQuMywxLjFsLTQuMywwLjZsLTUuMSwxLjggbC0xLjktMi42bC01LjYtMS43bC0xLjgtMy4ybC0wLjctMy42bC0zLTQuN2wtMC40LTVsLTEuMi0zLjFsLTAuNS0zLjRsMS4xLTMuMWwxLjgtOC42bDEuOC00LjVsMy4xLTUuNkw0NDQuNCw0MDcuOEw0NDQuNCw0MDcuOHpcIn0sTUQ6e2Q6XCJNMTExOC41LDI4My4zbDEuMi0wLjdsMC41LTIuMWwxLjEtMmwtMC41LTEuMWwxLTAuNWwwLjYsMC45bDMsMC4ybDEuMi0wLjVsLTEtMC42bDAuMi0xbC0yLTEuNWwtMS4xLTIuNmwtMS45LTEuMSB2LTIuMWwtMi41LTEuNmwtMi0wLjNsLTMuOS0xLjlsLTMuMiwwLjZsLTEuMSwwLjlsMS42LDAuNmwxLjgsMS45bDEuOSwyLjZsMy40LDMuN2wwLjYsMi43bC0wLjIsMi43TDExMTguNSwyODMuM3pcIn0sTUM6e2Q6XCJNMTAxMy41LDI5NS4ybDAtMC4zbDAuNS0wLjZsMC4zLDAuMkwxMDEzLjUsMjk1LjJ6XCJ9LE1OOntkOlwiTTE0NzMuNywyNTIuMWwtMy43LTQuNmwtNi42LTEuNWwtNC44LTAuOGwtNi45LTIuNWwtMS4zLDYuNGw0LDMuNmwtMi40LDQuM2wtNy45LTEuNmwtNS0wLjJsLTQuNy0yLjlsLTUuMS0wLjEgbC01LjMtMS45bC01LjksMi45bC02LjYsNS40bC00LjcsMWwzLjMsNC40bDUuNywzLjNsOC4xLDIuM2w1LjgsNWwxLjMsNy4zbDMsMi43bDYuNCwxbDcuMiwwLjlsNy45LDMuOGwzLjQsMC43bDQuOSw1LjdsNC43LDMuNiBsNS41LTAuMWwxMS4yLDEuM2w2LjQtMC44bDUuNSwwLjlsOS4zLDMuOGw2LjItMC4xbDMuMiwybDQuNC0zLjNsNy4yLTIuMmw3LjUtMC4ybDQuOS0yLjJsMS45LTMuM2wyLjUtMmwtMS45LTIuMWwtMi45LTIuM2wwLjQtNCBsMy4yLDAuNWw1LjksMS4zbDMuMS0zLjNsNi4zLTIuNGwxLjQtNC4xbDIuNC0xLjhsNi44LTAuOGw0LjMsMC43bC0wLjctMi4ybC03LjItNC4zbC01LjEtMmwtMi41LDIuM2wtNS40LTFsLTIuNCwwLjhsLTIuNy0yLjYgbC0wLjMtNi4ybC0wLjYtNC42bC01LjUsMC41bC0zLjktMi4xbC0zLjMtMC43bC00LjUsNC40bC01LjgsMWwtMy42LDEuNmwtNi43LTFoLTQuNWwtNC45LTMuMWwtNi41LTNsLTUuNC0wLjhsLTUuNywwLjhsLTMuOSwxLjEgTDE0NzMuNywyNTIuMUwxNDczLjcsMjUyLjF6XCJ9LE1FOntkOlwiTTEwODAsMjk5LjhsMC40LTAuNmwtMi0xLjJsLTEuOC0wLjdsLTAuOC0wLjhsLTEuNS0xLjFsLTAuOSwwLjZsLTEuNSwxLjRsLTAuNCwzLjRsLTAuNSwxbDAsMGwyLjMsMS4ybDEuNiwyLjEgbDEuMSwwLjRsMCwwbC0wLjUtMS45bDItMy4xbDAuNCwxLjJsMS4zLTAuNUwxMDgwLDI5OS44elwifSxNUzp7ZDpcIk02MzEuOCw0NjUuN2wtMC4xLTAuNWgtMC4xbC0wLjIsMC40djAuM2wwLjMsMC4xTDYzMS44LDQ2NS43elwifSxNQTp7ZDpcIk05NjUuMiwzNDguNGwtMi4zLTAuMWwtNS41LTEuNGwtNSwwLjRsLTMuMS0yLjdoLTMuOWwtMS44LDMuOWwtMy43LDYuN2wtNCwyLjZsLTUuNCwyLjlMOTI3LDM2NWwtMC45LDMuNGwtMi4xLDUuNCBsMS4xLDcuOWwtNC43LDUuM2wtMi43LDEuN2wtNC40LDQuNGwtNS4xLDAuN2wtMi44LDIuNGwtMC4xLDAuMWwtMy42LDYuNWwtMy43LDIuM2wtMi4xLDRsLTAuMiwzLjNsLTEuNiwzLjhsLTEuOSwxbC0zLjEsNGwtMiw0LjUgbDAuMywyLjJsLTEuOSwzLjNsLTIuMiwxLjdsLTAuMywzaDAuMWwxMi40LTAuNWwwLjctMi4zbDIuMy0yLjlsMi04LjhsNy44LTYuOGwyLjgtOC4xbDEuNy0wLjRsMS45LTVsNC42LTAuN2wxLjksMC45aDIuNWwxLjgtMS41IGwzLjQtMC4ybC0wLjEtMy40bDAsMGgwLjhsMC4xLTcuNWw4LjktNC43bDUuNC0xbDQuNC0xLjdsMi4xLTMuMmw2LjMtMi41bDAuMy00LjdsMy4xLTAuNWwyLjUtMi40bDctMWwxLTIuNWwtMS40LTEuNGwtMS44LTYuNyBsLTAuMy0zLjlMOTY1LjIsMzQ4LjRMOTY1LjIsMzQ4LjR6XCJ9LE1aOntkOlwiTTEyMDMsNjQwLjdsLTAuOC0yLjlsMCwwbDAsMGwtNC42LDMuN2wtNi4yLDIuNWwtMy4zLTAuMWwtMi4xLDEuOWwtMy45LDAuMWwtMS40LDAuOGwtNi43LTEuOGwtMi4xLDAuM2wtMS42LDYgbDAuNyw3LjNoMC4zbDEuOSwybDIuMiw0LjZsMC4xLDguMmwtMi41LDEuM2wtMS45LDQuNWwtMy40LTRsLTAuMi00LjVsMS4zLTIuOWwtMC4zLTIuNmwtMi4xLTEuNmwtMS42LDAuNmwtMy0zbC0xNy4xLDUuMmwwLjMsNC41IGwwLjMsMi40bDQuNi0wLjFsMi42LDEuM2wxLjEsMS42bDIuNiwwLjVsMi44LDJsLTAuMyw4LjFsLTEuMyw0LjRsLTAuNSw0LjdsMC44LDEuOWwtMC44LDMuN2wtMC45LDAuNmwtMS42LDQuNmwtNi4yLDcuMmwyLjIsOSBsMS4xLDQuNWwtMS40LDcuMWwwLjQsMi4zbDAuNiwyLjlsMC4zLDIuOGg0LjFsMC43LTMuM2wtMS40LTAuNWwtMC4zLTIuNmwyLjYtMi40bDYuOC0zLjRsNC42LTIuMmwyLjUtMi4zbDAuOS0yLjZsLTEuMi0xLjFsMS4xLTMgbDAuNS02LjJsLTEsMC4zdi0xLjlsLTAuOC0zLjdsLTIuNC00LjhsMC43LTQuNmwyLjMtMS40bDQuMS00LjZsMi4yLTEuMWw2LjctNi44bDYuNC0zLjFsNS4yLTIuNWwzLjctMy45bDIuNC00LjRsMS45LTQuNmwtMC45LTMuMSBsMC4yLTkuOWwtMC40LTUuNkwxMjAzLDY0MC43TDEyMDMsNjQwLjd6XCJ9LE1NOntkOlwiTTE1MzMuOSw0MzUuOGwtMC42LTIuNmwtMy44LDEuOGwtMi41LTEuMmwtNC41LTIuNGwwLjgtNS4ybC0zLjctMS4zbC0yLjMtNS44bC01LjYsMWwtMC43LTcuNWw0LjEtNS4zbC0wLjgtNS4zIGwtMS4zLTQuOWwtMi43LTEuNWwtMi43LTMuN2wtMywwLjRsMC45LDIuNGwtMS42LDEuMmwxLjMsMy45bC00LjEtMS4xbC02LjEsNC40bDAuOSwzLjZsLTIuMSw1LjRsMC4zLDMuMWwtMS41LDUuMmwtNC42LTEuNCBsMC45LDYuNmwtMC45LDIuMWwwLjksMi43bC0yLjQsMS41bDAuNSw0LjZsLTIuMS0xbDEuMSw1LjFsNC42LDUuMmwzLjQsMC45bC0wLjQsMi4ybDUuNCw3LjRsMS45LDUuOWwtMC45LDcuOWwzLjYsMS41bDMuMiwwLjYgbDUuOC00LjZsMy4yLTMuMWwzLjEsNS4ybDIsOC4xbDIuNiw3LjZsMi42LDMuM2wwLjIsNi45bDIuMiwzLjhsLTEuMyw0LjhsMC45LDQuOGwyLjItNi42bDIuNi01LjlsLTIuOC01LjhsLTAuMi0zbC0xLTMuNWwtNC4yLTUuMSBsLTEuNy0zLjJsMS43LTEuMWwxLjQtNS42bC0yLjktNC4ybC00LjEtNC42bC0zLjUtNS42bDIuMi0xLjFsMS41LTYuOWwzLjktMC4zbDIuOC0yLjhsMy0xLjRsMC44LTIuNEwxNTMzLjksNDM1LjhMMTUzMy45LDQzNS44elwifSxOQTp7ZDpcIk0xMTA1LjQsNjgzLjdsLTEwLjMsMi41bC0xMy40LTAuOWwtMy43LTNsLTIyLjUsMC4zbC0wLjksMC40bC0zLjItMi45bC0zLjYtMC4xbC0zLjMsMWwtMi43LDEuMmwwLjIsNC45bDQuNCw2LjIgbDEuMSw0bDIuOCw3LjdsMi43LDUuMmwyLjEsMi42bDAuNiwzLjV2Ny42bDEuNiw5LjhsMS4yLDQuNmwxLDYuMmwxLjksNC43bDMuOSw0LjhsMi43LTMuMmwyLjEsMS44bDAuOCwyLjdsMi40LDAuNWwzLjMsMS4yIGwyLjktMC41bDUtMy4ybDEuMS0yMy42bDAuNi0xOC41bDUuNC0wLjJsMC45LTIyLjdsNC4xLTAuMmw4LjYtMi4ybDIsMi42bDMuNy0yLjVoMS42bDMuMi0xLjVWNjg0bC0yLjEtMS40bC0zLjYtMC40TDExMDUuNCw2ODMuNyBMMTEwNS40LDY4My43elwifSxOUjp7ZDpcIk0xOTE1LDU3NS41di0wLjJoLTAuMWgtMC4xbC0wLjEsMC4ybDAuMSwwLjFsMC4xLDAuMUwxOTE1LDU3NS41TDE5MTUsNTc1LjV6XCJ9LE5QOntkOlwiTTE0NTUuMiwzOTQuOGwtNi41LTAuNmwtNi40LTEuNWwtNS0yLjhsLTQuNS0xLjJsLTIuNS0zLjFsLTMuMi0wLjlsLTYuNC00LjFsLTQuNy0ybC0xLjksMS41bC0yLjgsMi45bC0wLjksNS45IGw1LjcsMi41bDUuOCwzLjFsNy43LDMuNWw3LjYsMC45bDMuOCwzLjJsNC4zLDAuNmw2LjgsMS41bDQuNi0wLjFsMC4xLTIuNWwtMS41LTQuMUwxNDU1LjIsMzk0LjhMMTQ1NS4yLDM5NC44elwifSxOTDp7ZDpcIk0xMDA1LjUsMjQzLjloMi45bDEuMS0yLjNsMS01LjZsLTEtMmwtMy45LTAuMmwtNi41LDIuNmwtMy45LDguOWwtMi41LDEuN2wwLDBsMy42LDAuNWw0LjQtMS4zbDMuMSwyLjdsMi44LDEuNCBMMTAwNS41LDI0My45TDEwMDUuNSwyNDMuOXpcIn0sTkM6e2Q6XCJNMTg5Ny4zLDcxNi4xdi0wLjNsLTAuNC0wLjJsLTAuMiwwLjV2MC4xbDAuMiwwLjFoMC4yTDE4OTcuMyw3MTYuMUwxODk3LjMsNzE2LjF6IE0xOTAxLjksNzA4LjVMMTkwMS45LDcwOC41IGwtMC4xLTAuNGwwLjEtMC4ybC0wLjQsMC4ybC0wLjYsMC4ybDAuMSwwLjhsLTAuMSwwLjRsMC4zLDAuMWwwLjEsMC4zaDAuMmwwLjctMC4ybDAuMy0xLjFoLTAuNEwxOTAxLjksNzA4LjVMMTkwMS45LDcwOC41eiBNMTg5OC45LDcwNi44bDAuMy0wLjVsMC4xLTAuMmwtMC4yLTAuN2wtMC4zLTAuM2wwLjMtMWwtMC4xLTAuMmwtMC40LTAuMmwtMC45LDAuM2wtMC4xLDAuMmwwLjUsMC4xbDAuMiwwLjJsLTAuNSwwLjdsLTAuNSwwLjEgbDAuMSwwLjVsMC4yLDAuNGwwLjcsMC4ybDAuMywwLjRIMTg5OC45eiBNMTg5NSw3MDMuOWwwLjMtMC4zbDAuMy0wLjRsLTAuMS0wLjF2LTAuM2wwLjItMC40bDAuMy0wLjFsLTAuMi0wLjJsLTAuMi0wLjF2MC4zIGwtMC4zLDAuN2wtMC4xLDAuM2wtMC41LDAuNkgxODk1TDE4OTUsNzAzLjl6IE0xODgyLjcsNzAxbC0wLjYtMC43bC0wLjEsMC4ybC0wLjEsMC40djAuM2wwLjMsMC4ybDAuMSwwLjJsLTAuMSwwLjV2MC40bDAuNiwwLjkgbDAuMSwwLjdsMC4zLDAuNmwwLjUsMC41bDAuNCwwLjVsMC44LDEuNGwwLjIsMC41bDAuNCwwLjNsMSwxLjJsMC40LDAuNGwwLjQsMC4ybDAuOSwwLjdsMC42LDAuM2wwLjMsMC41bDAuNiwwLjNsMC44LDAuNGwwLjEsMC4yIHYwLjNsMC4xLDAuM2wwLjUsMC40bDAuNiwwLjNsMC4xLDAuMmwwLjEsMC4ybDAuMy0wLjFsMC4zLDAuMWwwLjksMC43bDAuNC0wLjFoMC4zbDAuNS0wLjJsMC4zLTAuNGwtMC4xLTEuMWwtMC41LTAuNWwtMC43LTAuNCBsLTAuNC0wLjVsLTAuNC0wLjVsLTAuOC0xbC0xLjEtMWwtMC41LTAuMmwtMC4zLTAuNGwtMC4zLTAuMWwtMC4yLTAuM2wtMC41LTAuM2wtMC4zLTAuNmwtMC42LTAuNmwtMC4xLTAuM2wwLjEtMC4zbC0wLjEtMC4zIGwtMC40LTAuM2wtMC4yLTAuNWwtMC4yLTAuM2wtMC40LTAuMmwtMC43LTAuNGwtMS42LTEuOWwtMC43LTAuNmwtMC43LDAuMkwxODgyLjcsNzAxTDE4ODIuNyw3MDF6IE0xODYwLjcsNjk1bDAuMi0wLjRsMC4xLTAuOCBsLTAuMiwwLjRsLTAuMiwxTDE4NjAuNyw2OTV6XCJ9LE5aOntkOlwiTTE4NjguNiw4MzIuOGwwLjktMi42bC01LjgsMi45bC0zLjQsMy40bC0zLjIsMS42bC01LjksNC42bC01LjYsMy4ybC03LDMuMmwtNS41LDIuNGwtNC4zLDEuMWwtMTEuMyw2LjFsLTYuNCw0LjYgbC0xLjEsMi4zbDUuMSwwLjRsMS41LDIuMWw0LjUsMC4xbDQtMS44bDYuMy0yLjhsOC4xLTYuMmw0LjctNC4xbDYuMi0yLjNsNC0wLjFsMC42LTIuOWw0LjYtMi41bDctNC41bDQuMi0yLjlsMi4xLTIuNmwwLjUtMi42IGwtNS42LDIuNUwxODY4LjYsODMyLjhMMTg2OC42LDgzMi44eiBNMTg5Ny40LDgwMi4zbDEuOS01LjdsLTMuMS0xLjdsLTAuOC0zLjZsLTIuMywwLjVsLTAuNCw0LjZsMC44LDUuN2wwLjksMi43bC0wLjksMS4xIGwtMC42LDQuNGwtMi40LDQuMWwtNC4yLDVsLTUuMywyLjJsLTEuNywyLjRsMy43LDIuNWwtMC44LDMuNWwtNi45LDUuMWwxLjQsMC45bC0wLjQsMS42bDUuOS0yLjVsNS45LTQuMmw0LjUtMy40bDEuNi0xLjJsMS41LTIuNyBsMi44LTJsMy44LDAuMmw0LjItMy44bDUuMS01LjdsLTIuMS0wLjhsLTQuNiwyLjVsLTMuMi0wLjVsLTIuOS0yLjFsMi4zLTQuOWwtMS4yLTEuOGwtMi45LDQuNEwxODk3LjQsODAyLjNMMTg5Ny40LDgwMi4zelwifSxOSTp7ZDpcIk01MTQuMSw0NzYuOGwtMS45LTAuMmwtMC45LDAuOWwtMiwwLjhoLTEuNGwtMS4zLDAuOGwtMS4xLTAuM2wtMC45LTAuOWwtMC42LDAuMmwtMC44LDEuNWwtMC41LTAuMWwtMC4zLDEuMyBsLTIuMSwxLjhsLTEuMSwwLjdsLTAuNiwwLjhsLTEuNS0xLjNsLTEuNCwxLjdoLTEuMmwtMS4zLDAuMmwtMC4yLDMuMWgtMC44bC0wLjgsMS41bC0xLjgsMC4zbC0wLjQsMC40bC0wLjktMWwtMC43LDFsMi42LDIuOSBsMi4yLDJsMSwyLjFsMi41LDIuNmwxLjgsMmwwLjktMC44bDMuNSwxLjdsMS40LTAuOGwxLjcsMC41bDAuOCwxLjNsMS43LDAuNGwxLjQtMS4zbC0wLjgtMS4xbC0wLjEtMS43bDEuMi0xLjZsLTAuMi0xLjdsMC43LTIuNyBsMC45LTAuN2wwLjEtMi44bC0wLjItMS43bDAuNC0yLjhsMC45LTIuNWwxLjQtMi4ybC0wLjMtMi4zbDAuNC0xLjRMNTE0LjEsNDc2LjhMNTE0LjEsNDc2Ljh6XCJ9LE5FOntkOlwiTTEwNTEuMyw0MjUuNmwtOC44LTIuOGwtMTguNiwxMi4ybC0xNS44LDEyLjVsLTcuOCwyLjhsMC4xLDE0LjZsLTMsNC4zbC0wLjUsMy45bC00LjksMWwtNy42LDAuNmwtMiwyLjJsLTMuNiwwLjMgbC0wLjUsMy4xbDAuOCwyLjlsMy4xLDQuMWwwLjIsMy4xbDYuNCwxLjRsLTAuMSw0LjRsMS45LTEuOWgybDQuMywzLjdsMC4zLTUuN2wxLjYtMi42bDAuOC0zLjZsMS40LTEuNGw2LTAuOGw1LjYsMi40bDIuMSwyLjQgbDIuOSwwLjFsMi42LTEuNWw2LjgsMy4zbDIuOC0wLjJsMy4zLTIuN2wzLjMsMC4ybDEuNi0wLjlsMywwLjRsNC4zLDEuOGw0LjMtMy41bDEuMywwLjJsMy45LDdsMS0wLjJsMC4yLTJsMS42LTAuNGwwLjUtMi45IGwtMy42LTAuMnYtNC4xbC0yLjQtMi4zbDIuMy04LjRsNi45LTZsMC4yLTguM2wxLjgtMTIuOWwxLjEtMi43bC0yLjMtMi4ybC0wLjItMi4xbC0yLTEuNmwtMS42LTkuOWwtMy45LDIuNEwxMDUxLjMsNDI1LjYgTDEwNTEuMyw0MjUuNnpcIn0sTkc6e2Q6XCJNMTA1NS44LDQ5Mi43bC0xLDAuMmwtMy45LTdsLTEuMy0wLjJsLTQuMywzLjVsLTQuMy0xLjhsLTMtMC40bC0xLjYsMC45bC0zLjMtMC4ybC0zLjMsMi43bC0yLjgsMC4ybC02LjgtMy4zIGwtMi42LDEuNWwtMi45LTAuMWwtMi4xLTIuNGwtNS42LTIuNGwtNiwwLjhsLTEuNCwxLjRsLTAuOCwzLjZsLTEuNiwyLjZsLTAuMyw1LjdsLTAuMiwyLjFsMS4yLDMuOGwtMS4xLDIuNWwwLjYsMS43bC0yLjcsNCBMOTkzLDUxNGwtMSw0bDAuMSw0LjFsLTAuMywxMC4yaDQuOWg0LjNsMy45LDQuMmwxLjksNC42bDMsMy45bDQuNSwwLjJsMi4yLTEuNGwyLjEsMC4zbDUuOC0yLjNsMS40LTQuNWwyLjctNi4xbDEuNi0wLjFsMy4zLTMuNyBsMi4xLTAuMWwzLjIsMi42bDMuOS0yLjJsMC41LTIuNmwxLjItMi42bDAuOC0zLjJsMy0yLjZsMS4xLTQuNWwxLjItMS40bDAuNy0zLjNsMS41LTRsNC42LTVsMC4zLTIuMWwwLjYtMS4xTDEwNTUuOCw0OTIuNyBMMTA1NS44LDQ5Mi43elwifSxLUDp7ZDpcIk0xNjQ0LjcsMzAyLjNMMTY0NC43LDMwMi4zbC01LjUtMy42bDAuMSwzLjVsLTYuMywyLjZsMi43LDMuM2wtNC42LTAuMmwtMy42LTJsLTEsNC40bC0zLjgsMy40bC0yLjEsNGwzLjMsMS43IGwzLjQsMC43bDAuOCwxbDAuNCwzLjVsMS4xLDEuMmwtMC45LDAuN2wtMC4xLDIuOWwxLjksMWwxLjYsMC42bDAuOCwxLjJsMS4zLTAuNXYtMS4zbDMuMSwxLjNsMC4xLTAuNmwyLjQsMC4ybDAuNy0yLjlsMy41LTAuMyBsMi4xLTAuNGwtMC4xLTEuNmwtNC4zLTIuOGwtMi42LTFsMC4yLTAuN2wtMS4yLTIuOGwxLjMtMS43bDIuOS0xbDEtMS45bDAuMy0xLjFsMS45LTEuNGwtMi44LTQuNWwwLjMtMi4xbDAuOS0ybDIuMiwwLjNsMCwwbDAsMCBsMCwwTDE2NDQuNywzMDIuM0wxNjQ0LjcsMzAyLjN6XCJ9LE5POntkOlwiTTEwODguOCwxMzMuMWwtNi45LDEuMWwtNy4zLTAuM2wtNS4xLDQuNGwtNi43LTAuM2wtOC41LDIuM2wtMTAuMSw2LjhsLTYuNCw0bC04LjgsMTAuN2wtNy4xLDcuOGwtOC4xLDUuOCBsLTExLjIsNC44bC0zLjksMy42bDEuOSwxMy40bDEuOSw2LjNsNi40LDNsNi0xLjRsOC41LTYuOGwzLjMsMy42bDEuNy0zLjNsMy40LTRsMC45LTYuOWwtMy4xLTIuOWwtMS03LjZsMi4zLTUuM2w0LjMsMC4xbDEuMy0yLjIgbC0xLjgtMS45bDUuNy03LjlsMy40LTYuMWwyLjItMy45bDQsMC4xbDAuNi0zLjFsNy45LDAuOXYtMy41bDIuNS0wLjNsMi4xLTEuNGw1LjEsMi45bDUuMy0wLjNsNC43LDEuM2wzLjQtMi40bDEuMS0zLjlsNS44LTEuOCBsNS43LDIuMWwtMC44LDMuOGwzLjItMC41bDYuNC0yLjJsMCwwbC01LjQtMy4zbDQuOC0xLjRMMTA4OC44LDEzMy4xTDEwODguOCwxMzMuMXogTTEwNjYuMiw5OS44bC01LjYtMWwtMS45LTEuN2wtNy4yLDAuOWwyLjYsMS41IGwtMi4yLDEuMmw2LjcsMS4xTDEwNjYuMiw5OS44eiBNMTA0MC44LDkxLjVsLTQuOC0xLjZsLTUuMSwwLjJsLTEsMS41aC01bC0yLjItMS41bC05LjMsMS42bDMuMiwzLjVsNy42LDMuOGw1LjcsMS40bC0zLDEuNyBsOC40LDIuOWw0LjQtMC4ybDAuOS0zLjlsMy0wLjlsMS4yLTMuNGw4LjUtMS44QzEwNTMuMyw5NC44LDEwNDAuOCw5MS41LDEwNDAuOCw5MS41eiBNMTA2NSw4OC40bC05LjEtMWwtMy4yLDEuMmwtNS4zLTFsLTEwLjQsMS4yIGw0LjMsMmg1LjFsMC45LDEuM2wxMC42LDAuN2wxMC4xLTAuNWw0LjMtMi40QzEwNzIuMyw4OS45LDEwNjUsODguNCwxMDY1LDg4LjR6XCJ9LE9NOntkOlwiTTEzMDEsNDM3LjhsMi4xLTJsMC44LTEuOGwxLjYtMy44bC0wLjEtMS40bC0yLjEtMC44bC0xLjYtMi4xbC0yLjktMy43bC0zLjMtMS4xbC00LjEtMC45bC0zLjMtMi4zbC0yLjktNC4zaC0yLjggbC0wLjEsNC4ybDEuMSwwLjhsLTIuNCwxLjNsMC4zLDIuNmwtMS40LDIuNmwwLjEsMi42bDIuOSw0LjVsLTIuNiwxMi43bC0xNi4xLDYuNGw1LjIsMTAuNWwyLjEsNC40bDIuNS0wLjNsMy42LTIuMmwzLjEsMC42IGwyLjUtMS44bC0wLjItMi41bDIuMS0xLjZoMy40bDEuMi0xLjNsMC4yLTMuMWwzLjMtMi40aDIuNmwwLjQtMC44bC0xLTQuMmwwLjYtMy4ybDEtMS41bDIuNSwwLjNMMTMwMSw0MzcuOEwxMzAxLDQzNy44eiBNMTI4NC40LDQwNy40bDAuMi0yLjZsLTAuNy0wLjZsLTEuMywyLjJsMS4zLDIuMkwxMjg0LjQsNDA3LjR6XCJ9LFBLOntkOlwiTTEzODguMywzNDYuM2wtOS40LTIuNmwtMi45LTVsLTQuNy0zbC0yLjgsMC43bC0yLjQsMS4ybC01LjgsMC44bC01LjMsMS4zbC0yLjQsMi44bDEuOSwyLjhsMS40LDMuMmwtMiwyLjcgbDAuOCwyLjVsLTAuOSwyLjNsLTUuMS0wLjJsMyw0LjJsLTMsMS42bC0xLjUsMy44bDEuMSwzLjhsLTEuNywxLjhsLTIuMS0wLjZsLTQsMC45bC0wLjIsMS43aC00bC0yLjMsMy42bDAuOCw1LjRsLTYuNiwyLjYgbC0zLjgtMC41bC0wLjksMS40bC0zLjMtMC44bC01LjMsMC45bC05LjYtMy4ybDMuMiwzLjNsMi44LDMuOWw1LjYsMi43bDEsNS43bDIuNywxbDAuOSwyLjlsLTcuNCwzLjNsLTEuMiw3LjRsNy42LTAuOWw4LjktMC4xIGw5LjktMS4ybDQuOSw0LjhsMi4xLDQuNmw0LjIsMS42bDMuMi00LjJoMTJsLTEuOC01LjVsLTMuNS0zLjJsLTEuMy00LjlsLTQtMi45bDQuOS02LjZsNi40LDAuNWw0LjUtNi43bDIuMS02LjVsMy45LTYuM2wtMS00LjUgbDMuNy0zLjdsLTUtMy4xbC0yLjktNC4zbC0zLjItNS42bDEuOS0yLjhsOC41LDEuNmw1LjctMUwxMzg4LjMsMzQ2LjNMMTM4OC4zLDM0Ni4zelwifSxQUzp7ZDpcIk0xMTY2LjksMzY2LjFsLTItMC45bC0wLjcsNC4zbDEuNCwwLjdsLTEuMiwwLjhsLTAuMSwxLjdsMi40LTAuOGwwLjYtMS45TDExNjYuOSwzNjYuMUwxMTY2LjksMzY2LjF6XCJ9LFBBOntkOlwiTTU0My41LDUxN2wtMi0xLjhsLTEuNy0xLjlsLTIuNS0xLjFsLTMuMS0wLjJsMC4zLTAuNmwtMy4xLTAuNGwtMiwxLjlsLTMuNSwxLjNsLTIuNSwxLjZsLTIuNywwLjVsLTEuNS0xLjYgbC0wLjUsMC41bC0yLjMtMC4zbDAuMi0xLjNsLTEuOS0yLjNsLTIuMiwwLjZsLTAuMSwyLjVsMS4xLDFsLTAuOCwwLjdsMC4xLDEuMmwtMC41LDEuM2wtMC40LDEuMmwwLjYsMWwwLjMtMS40aDIuNGwxLjQsMC43IGwyLjMsMC41bDEsMi41bDEuOCwwLjRsMC44LTEuMWwwLjgsMy44bDIuNi0wLjNsMC45LTAuOWwxLjUtMC45bC0yLjUtMy40bDAuNi0xLjNsMS4zLTAuM2wyLjMtMS42bDEuMi0yLjJsMi41LTAuNGwyLjcsMS44bDEsMi4xIGwxLjQsMC40bC0xLjUsMS43bDEsMy41bDEuOCwxLjhsMC45LTMuMWwxLjgsMC41bDEuMS0xLjlsLTEuMS0zLjhMNTQzLjUsNTE3elwifSxQRzp7ZDpcIk0xODUwLjcsNjE1LjZsMC45LTEuOGwtMi40LTIuMmwtMi41LTRsLTEuNi0xLjVsLTAuNS0xLjlsLTAuOCwwLjdsMC45LDQuOGwyLjIsNGwyLjIsMi41TDE4NTAuNyw2MTUuNiBMMTg1MC43LDYxNS42eiBNMTgyOS41LDYwN2wyLjEtMy45bDAuNC0zLjVsLTEuMS0xbC0zLjQsMC4xbDAuNCwzLjdsLTMuMywyLjNsLTEuNywyLjJsLTMuMiwwLjVsLTAuNC0zLjRsLTAuOCwwLjFsLTEsMy4xbC0zLjEsMC41IGwtNS0wLjlsLTAuNiwxLjlsMy4xLDEuOGw0LjUsMS45aDIuOWwzLTEuNWwzLjItMS42bDEtMS44TDE4MjkuNSw2MDdMMTgyOS41LDYwN3ogTTE4MDEuNyw2MTkuMmwtMC45LTQuM2w1LjItMC43bC0xLjEtMy4zbC05LjEtNCBsLTAuNi0zLjdsLTIuOS0zLjJsLTMuNy0zLjNsLTEwLjItMy42bC05LjYtNC40bC0xLDIwLjdsLTEuNSwyMC44bDUuNywwLjJsMy4xLDEuMWw0LjYtMi4ybC0wLjMtNC43bDMuNi0yLjFsNC45LTEuOGw3LDIuOGwyLjQsNS42IGwyLjksMy41bDMuOSw0bDUuNSwxbDQuOCwwLjdsMS4xLDEuNmwzLjgtMC40bDAuOC0xLjhsLTUuNi0yLjdsMS44LTEuMmwtNC4yLTEuMWwwLjUtMi44bC0zLjIsMC4ybC0zLTYuOEwxODAxLjcsNjE5LjIgTDE4MDEuNyw2MTkuMnogTTE4MzYuNCw2MDAuOGwtMC41LTMuM2wtMi0yLjFsLTIuMS0yLjZsLTIuMy0xLjVsLTEuOS0xLjRsLTIuOS0xLjhsLTEuNiwxLjVsMy45LDEuOWwzLjEsMi43bDIuNCwyLjFsMS4yLDIuNCBsMC44LDMuOEwxODM2LjQsNjAwLjhMMTgzNi40LDYwMC44elwifSxQWTp7ZDpcIk02NTUuNyw3MDAuNWwtMC4zLTEuOWwtNS40LTMuM2wtNS4xLTAuMWwtOS41LDEuOWwtMi4xLDUuNmwwLjIsMy40bC0xLjUsNy42bDExLjIsMTAuNGw0LjYsMWw3LjIsNC43bDUuOSwyLjUgbDEuMSwyLjhsLTQuMiw5LjZsNS43LDEuOGw2LjIsMWw0LjItMS4xbDQuMy00LjhsMC4zLTUuN2wwLjctMy42bDAuMy0zLjhsLTAuMy0zLjVsLTIuMS0xLjJsLTIsMS4xbC0yLTAuM2wtMC45LTIuNWwtMS01LjggbC0xLjItMS45bC0zLjktMS43bC0yLjEsMS4ybC02LTEuMmwtMC40LTguNkw2NTUuNyw3MDAuNUw2NTUuNyw3MDAuNXpcIn0sUEU6e2Q6XCJNNTg0LjMsNTk5LjVsLTIuOS0zLjRsLTEuNy0wLjFsMy41LTYuNWwtNC40LTNsLTMuMywwLjZsLTIuMS0xLjFsLTMsMS43bC00LjItMC44bC0zLjQtNi43bC0yLjctMS43bC0xLjgtM2wtMy43LTMgbC0xLjUsMC42bDAuOCw0LjlsLTEuNyw0LjFsLTYsNi43bC02LjcsMi41bC0zLjMsNS41bC0wLjksNC4zbC0zLjEsMi42bC0yLjUtMy4ybC0yLjMtMC43bC0yLjMsMC41bC0wLjItMi4zbDEuNS0xLjVsLTAuNy0yLjcgbC00LjQsNGwtMS42LDQuNWwzLDYuMWwtMS43LDIuOGw0LjEsMi42bDQuNSw0LjFsMiw0LjdsMi40LDIuOWw2LDEyLjdsNi4yLDExLjdsNS40LDguNGwtMC44LDEuOGwyLjgsNS4zbDQuNiwzLjlsMTAuNyw2LjkgbDExLjYsNi40bDAuNywyLjZsNS45LDMuN2wyLjctMS42bDEuMi0zLjNsMi44LTYuOWwtMi44LTUuM2wxLjEtMi4xbC0xLjItMi40bDEuOS0zLjJsLTAuMy01LjRsLTAuMS00LjVsMS4xLTIuMWwtNS41LTEwLjNsLTMsMS4xIGwtMi42LTAuN2wtMC4yLTkuN2wtNC40LDMuOGwtNC45LTAuMmwtMi4zLTMuNGwtMy43LTAuM2wxLTIuOGwtMy4zLTMuOEw1NjIsNjIwbDEuNS0xLjFsLTAuMS0yLjdsMy4zLTEuOWwtMC43LTMuNGwxLjMtMi4ybDAuNC0zIGw2LjItNC4zbDQuNi0xLjJsMC43LTFMNTg0LjMsNTk5LjVMNTg0LjMsNTk5LjV6XCJ9LFBIOntkOlwiTTE2ODQuNiw1MTguNmwtMC42LTIuM2wtMC44LTMuMmwtNC44LTNsMC44LDQuOWwtMy45LDAuMmwtMC43LDIuOGwtNC4yLDEuN2wtMi4yLTIuOGwtMi44LDIuNGwtMy40LDEuN2wtMS45LDUuNCBsMS4xLDEuOWwzLjktMy42bDIuNywwLjNsMS41LTIuN2wzLjgsM2wtMS41LDMuMWwxLjksNC42bDYuOCwzLjdsMS40LTNsLTIuMS00LjdsMi40LTMuMmwyLjUsNi40bDEuNS01LjhsLTAuNi0zLjVMMTY4NC42LDUxOC42IEwxNjg0LjYsNTE4LjZ6IE0xNjcwLjEsNTA2Ljh2LTYuMWwtMy42LDYuMWwwLjUtNC4ybC0zLDAuM2wtMC4zLDRsLTEuMiwxLjhsLTEsMS43bDMuOCw0LjRsMS42LTEuOWwxLjQtNEwxNjcwLjEsNTA2LjggTDE2NzAuMSw1MDYuOHogTTE2NDAsNTEyLjlsMi42LTQuNGwzLjQtMy41bC0xLjUtNS4ybC0yLjQsNi4zbC0yLjksNC40bC0zLjgsNGwtMi40LDQuNEwxNjQwLDUxMi45TDE2NDAsNTEyLjl6IE0xNjU3LjQsNDk2LjUgbDEuMiwzbC0wLjEsMy4zbDAuNSwyLjlsMy4zLTEuOWwyLjQtMi43bC0wLjItMi42aC0zLjZMMTY1Ny40LDQ5Ni41TDE2NTcuNCw0OTYuNXogTTE2NzcuNCw0OTQuOGwtMS44LTIuNGwtNS40LTAuMWw0LDQuOGwwLjMsMi40IGwtMy4zLTAuNWwxLjIsMy45bDEuNywwLjNsMC43LDQuNWwyLjUtMS40bC0xLjctNGwtMC40LTIuMWw0LjUsMS43TDE2NzcuNCw0OTQuOEwxNjc3LjQsNDk0Ljh6IE0xNjU0LjUsNDg5bC0yLjItMi4zbC00LjgtMC4yIGwzLjQsNC44bDIuOCwzLjJMMTY1NC41LDQ4OUwxNjU0LjUsNDg5eiBNMTY0OC4xLDQ1NC40aC0zLjNsLTAuOSw1LjhsMS4xLDkuOWwtMi42LTJsMS4yLDZsMS4yLDIuOGwzLjMsMy43bDAuNC0yLjNsMS44LDEuNCBsLTEuNSwxLjdsMC4xLDIuNmwyLjksMS40bDUtMC45bDQsMy44bDEuMS0yLjRsMi41LDMuNGw0LjgsMy4xbDAuMi0yLjlsLTItMS42bDAuMS0zLjRsLTcuNS0zLjZsLTIuMywwLjhsLTMuMS0wLjdsLTItNS4xbDAuMS01LjEgbDMtMi4xbDAuNi01LjNsLTIuNy00LjZsMC40LTIuNmwtMC43LTEuNmwtMS41LDEuNkwxNjQ4LjEsNDU0LjRMMTY0OC4xLDQ1NC40elwifSxQTjp7ZDpcIk0yNzQuMiw3MjcuNHYtMC4ybC0wLjEtMC4ybC0wLjItMC4xbC0wLjEsMC4xbDAuMSwwLjJsMC4yLDAuMkgyNzQuMkwyNzQuMiw3MjcuNHpcIn0sUEw6e2Q6XCJNMTA2OS40LDIyOC4zbC00LjYtMC4xbC0wLjUtMS40bC00LjgtMS4xbC01LjcsMi4xbC03LjEsMi44bC0zLjEsMS43bDEuNCwzLjFsLTEuMiwxLjZsMiwyLjJsMS40LDMuM2wtMC4xLDIuMSBsMi4zLDMuOWwyLjQsMS45bDMuNywwLjZsLTAuMSwxLjdsMi43LDEuMmwwLjYtMS41bDMuNCwwLjZsMC43LDJsMy42LDAuM2wyLjYsMy4xbDAuMywwLjRsMS45LTAuOWwyLjcsMi4ybDIuOC0xLjNsMi40LDAuNmwzLjQtMC44IGw0LjksMi4zbDEuMSwwLjRsLTEuNi0yLjhsMy44LTUuMWwyLjMtMC43bDAuMy0xLjhsLTMuMS01LjNsLTAuNS0yLjdsLTEuOS0yLjlsMi43LTEuMmwtMC4zLTIuNGwtMS43LTIuM2wtMC42LTIuN2wtMS40LTEuOSBsLTIuNS0wLjZsLTguNywwLjFMMTA2OS40LDIyOC4zTDEwNjkuNCwyMjguM3pcIn0sUFQ6e2Q6XCJNOTM3LjYsMzM1LjlsLTAuNC0yLjFsMi0yLjVsMC44LTEuN2wtMS44LTEuOWwxLjYtNC4zbC0yLTMuOGwyLjItMC41bDAuMy0zbDAuOS0wLjlsMC4yLTQuOWwyLjQtMS43bC0xLjMtMy4xIGwtMy0wLjJsLTAuOSwwLjhoLTNsLTEuMi0zLjFsLTIuMSwwLjlsLTEuOSwxLjZsMC4xLDIuMWwwLjksMi4ybDAuMSwyLjdsLTEuMywzLjhsLTAuNCwyLjVsLTIuMiwyLjNsLTAuNiw0LjJsMS4yLDIuNGwyLjMsMC42IGwwLjQsNGwtMSw1LjFsMi44LTAuN2wyLjcsMC45TDkzNy42LDMzNS45TDkzNy42LDMzNS45elwifSxQUjp7ZDpcIk02MDAuOCw0NTcuM3YtMC4xbDAsMGgwLjF2LTAuMWwwLjEtMC4xbDAsMHYtMC4xaC0wLjFsMCwwaC0wLjNoLTAuMXYwLjF2MC4xbDAuMiwwLjFsMCwwTDYwMC44LDQ1Ny4zTDYwMC44LDQ1Ny4zIEw2MDAuOCw0NTcuM3ogTTYxNC40LDQ1N2wwLjctMC4ydi0wLjFsLTAuNC0wLjFoLTAuNmwtMC41LDAuMmwwLjEsMC4yaDAuMkg2MTQuNHogTTYxMC43LDQ1NC44bC0wLjEtMC4yaC0wLjJsLTMuNS0wLjFsLTEuMy0wLjIgbC0wLjMsMC4xbC0wLjMsMC4xbC0wLjEsMC40bC0wLjIsMC4ybC0wLjMsMC4ybDAuMSwwLjNsMC4xLDAuMmwwLjIsMC40bC0wLjEsMC41bC0wLjIsMWwwLjMsMC4ybDAuNy0wLjFsMC4zLDAuMWwwLjMsMC4xbDAuNC0wLjEgbDAuNC0wLjJsMC45LDAuMWwwLjUtMC4xbDAuNiwwLjNsMC40LTAuMWwwLjIsMC4xaDAuM2gwLjZsMC45LTAuMmwwLjgtMC41bDAuMy0wLjVsMC40LTAuM2wwLjYtMC40di0wLjlsLTAuNy0wLjFsLTAuNi0wLjMgbC0xLjEtMC4xaC0wLjFsMC4xLDAuMmgtMC4xTDYxMC43LDQ1NC44TDYxMC43LDQ1NC44elwifSxRQTp7ZDpcIk0xMjU4LDQxNS41bDAuOC0zLjhsLTAuNS0zLjdsLTEuOS0ybC0xLjQsMC43bC0xLjEsMy4zbDAuOCw0LjdsMS44LDEuMkwxMjU4LDQxNS41TDEyNTgsNDE1LjV6XCJ9LFJFOntkOlwiTTEyODQsNzA3LjlsMC4yLTAuNGwwLjEtMC44bC0wLjQtMC44bC0wLjQtMC43bC0wLjQtMC4ybC0wLjgtMC4xbC0wLjcsMC4zbC0wLjQsMC42bC0wLjIsMC4zbDAuNCwxLjFsMC4yLDAuMyBsMS4xLDAuNmgwLjVMMTI4NCw3MDcuOUwxMjg0LDcwNy45elwifSxSTzp7ZDpcIk0xMTA4LjEsMjY2LjNoLTIuMWwtMSwxLjVsLTMuNiwwLjZsLTEuNiwwLjlsLTIuNC0xLjVoLTMuMmwtMy4yLTAuN2wtMS45LDEuM2wtMi45LDEuM2wtMS45LDQuMmwtMi42LDQuM2wtMy44LDEuMSBsMi45LDIuNWwwLjgsMS45bDMuMiwxLjVsMC43LDIuNWwzLjEsMS44bDEuNC0xLjNsMS40LDAuN2wtMS4xLDEuMWwxLDFsMS44LDIuNmwxLjktMC41bDQsMWw3LjUsMC4zbDIuMy0xLjZsNS44LTEuNGw0LDIuMmwzLDAuNyBsMC40LTcuNGwxLjYsMC41bDIuMy0xLjNsLTAuNC0xLjZsLTIuNC0xLjFsLTIuMiwxbC0yLjQtMS4xbC0xLjMtMi44bDAuMi0yLjdsLTAuNi0yLjdsLTMuNC0zLjdsLTEuOS0yLjZsLTEuOC0xLjlMMTEwOC4xLDI2Ni4zIEwxMTA4LjEsMjY2LjN6XCJ9LFJVOntkOlwiTTEzMzIuMyw5NS4xbC00LjUtNGwtMTMuNi00LjFsLTkuNC0yLjFsLTYuMiwwLjlsLTUuMywyLjlsNS44LDAuOGw2LjYsMy4ybDgsMS43bDExLjUsMS4zIEMxMzI1LjIsOTUuNywxMzMyLjMsOTUuMSwxMzMyLjMsOTUuMXogTTExNTMuNiw4Ny44bDAuOS0wLjZsLTUuNy0wLjlMMTE0Niw4N2wtMS4zLDFsLTEuNS0xLjJsLTUuMiwwLjFsLTYuMiwwLjhsNy43LDAuMWwtMS4xLDEuMyBsNC40LDFsMy42LTAuN2wwLjEtMC43bDIuOS0wLjNDMTE0OS40LDg4LjQsMTE1My42LDg3LjgsMTE1My42LDg3Ljh6IE0xMzU0LjEsOTcuN2wtMS41LTEuOGwtMTIuNS0yLjZsLTMtMC4zbC0yLjIsMC41bDEuMiw2IEMxMzM2LjEsOTkuNSwxMzU0LjEsOTcuNywxMzU0LjEsOTcuN3ogTTEzNjkuMywxMDRsLTkuMi0wLjdsMy40LTEuMmwtOC4yLTEuNWwtNi4xLDEuOWwtMSwybDEuNSwyLjFsLTYuOS0wLjFsLTUuMywyLjZsLTQuMy0xLjEgbC05LjMsMC41bDAuMywxLjNsLTkuMiwwLjdsLTQuOSwyLjRsLTQuMiwwLjJsLTEuMiwzLjNsNS41LDIuNmwtNy43LDAuN2wtOS41LTAuM2wtNS44LDEuMWw0LjgsNS40bDYuOSw0LjNsLTkuNi0zbC03LjksMC4zbC01LjEsMiBsNC41LDMuOGwtNC45LTFsLTIuMS01bC00LjItMi44bC0xLjgsMC4xbDMuNiwzLjdsLTQuNiwzLjVsOC4xLDQuMmwwLjQsNS40bDIuOSwyLjlsNC43LDAuNWwwLjQsMy41bDQuNCwzLjFsLTEuOSwyLjZsMC41LDIuNyBsLTMuNywxLjRsLTAuNSwybC01LjMtMC44bDMuNS03LjhsLTAuNS0zLjZsLTYuNy0zLjNsLTMuOC03LjNsLTMuNy0zLjdsLTMuNi0xLjZsMC44LTQuMmwtMi45LTIuOWwtMTEuMy0xLjRsLTIuMSwxbDAuNSw0LjcgbC00LjMsNC43bDEuMiwxLjdsNC43LDQuMWwwLjEsMi42bDUuMywwLjVsMC44LDEuMWw1LjgsMi45bC0xLDIuOGwtMTguNS02LjFsLTYuNi0xLjdsLTEyLjgtMS42bC0xLjIsMS43bDUuOSwzLjFsLTIuNywzLjYgbC02LjQtMy4ybC01LDIuMmwtNy42LDAuMWwtMi4xLDEuOWwtNS4zLTAuNmwyLjUtMy4zbC0zLjItMC4ybC0xMi4zLDQuNmwtNy42LDIuNmwwLjQsMy41bC02LDEuMmwtNC0xLjlsLTEuMi0zbDUtMC43bC0zLjYtMyBsLTEyLjItMS44bDQuMywzLjRsLTAuOCwzLjJsNC43LDMuM2wtMS4xLDMuOGwtNC42LTEuOWwtNC0wLjNsLTgsNS40bDQuMiw0LjFsLTMuMiwxLjRsLTExLjQtMy41bC0yLjEsMi4xbDMuMywyLjRsMC4yLDIuNyBsLTMuOC0xLjRsLTYtMS43bC0xLjktNS44bC0xLTIuNmwtOC00bDIuOS0wLjdsMjAuMSw0LjJsNi40LTEuNWwzLjctMi45bC0xLjYtMy42bC00LTIuNmwtMTcuNi02LjFsLTExLjYtMS4zbC03LjYtMy4ybC0zLjYsMS44IGwwLDBsLTYuNCwyLjJsLTMuMiwwLjVsMC40LDMuN2w3LjIsMy43bC0yLjgsNC4xbDYuNCw2LjNsLTEuNyw0LjhsNC45LDQuMWwtMC45LDMuN2w3LjMsMy45bC0wLjksMi45bC0zLjMsMy4zbC03LjksNy40bDAsMCBsNS4zLDIuOGwtNC41LDMuMmwwLDBsMC45LDFsLTIuNiwzLjRsMi41LDUuNWwtMS42LDEuOWwyLjQsMS40bDEsMi44bDIuMSwzLjZsNS4yLDEuNWwxLDEuNGwyLjMtMC43bDQuOCwxLjRsMSwyLjlsLTAuNiwxLjYgbDMuNywzLjlsMi4yLDEuMWwtMC4xLDEuMWwzLjQsMS4xbDEuNywxLjZsLTEuNiwxLjNsLTMuOS0wLjJsLTAuOCwwLjZsMS41LDJsMiwzLjlsMCwwbDEuOCwwLjJsMS0xLjRsMS41LDAuM2w0LjgtMC41bDMuOCwzLjQgbC0wLjksMS4zbDAuNywxLjlsNCwwLjJsMi4yLDIuN2wwLjIsMS4ybDYuNiwyLjJsMy41LTFsMy42LDIuOWwyLjktMC4xbDcuNiwybDAuNCwxLjlsLTEuMywzLjJsMS44LDMuNGwtMC4zLDIuMWwtNC43LDAuNWwtMi4yLDEuNyBsMC40LDIuOGw0LjItMWwwLjQsMS4zbC02LjgsMi42bDMuMiwyLjRsLTMuMiw1LjJsLTMuNCwxbDUsMy42bDYuMiwyLjRsNy40LDUuMWwwLjUtMC43bDQuNSwxLjFsNy43LDFsNy41LDIuOWwxLjEsMS4ybDIuOS0xIGw1LjEsMS4zbDIuMSwyLjVsMy41LDEuNGwxLjUsMC4ybDQuMywzLjhsMi40LDAuNGwwLjUtMS41bDIuNi0yLjVsMCwwbC03LjMtNy4zbC0wLjQtNC4xbC01LjktNS45bDMuNS02LjNsNC42LTEuMWwxLjQtMy43bC0yLjgtMSBsLTAuMi0zLjJsLTQuMi00LjFsLTMuNiwwLjJsLTUuMy00LjNsMS43LTQuN2wtMS43LTEuMmwyLjEtNi44bDYsMy42bC0wLjctNC42bDguMS02LjZsNy41LTAuMmwxMS45LDQuM2w2LjYsMi40bDQuMy0yLjVsNy42LTAuMiBsNy4zLDMuMmwwLjgtMS44bDYuOSwwLjNsMC4yLTNsLTkuNC00LjJsMy42LTIuOWwtMS41LTEuN2wzLjktMS42bC01LTQuMWwxLjQtMi4xbDE2LjgtMi4xbDEuNy0xLjVsMTAuOC0yLjJsMy4xLTIuNWw5LDEuM2w0LjMsNi4zIGw0LjMtMS41bDcsMi4xbDEuMiwzLjNsNC40LTAuNGw5LjEtNS43bC0wLjgsMS45bDguMyw0LjdsMTguMSwxNS41bDEuMS0zLjNsOC4zLDMuNmw2LjItMS42bDMuMiwxLjFsNC4xLDMuNmwzLjksMS4ybDMuMywyLjZsNi0wLjkgbDQuMywzLjhsMS43LTAuNWw0LjctMWw2LjYtNS40bDUuOS0yLjlsNS4zLDEuOWw1LjEsMC4xbDQuNywyLjlsNSwwLjJsNy45LDEuNmwyLjQtNC4zbC00LTMuNmwxLjMtNi40bDYuOSwyLjVsNC44LDAuOGw2LjYsMS41IGwzLjcsNC42bDguNCwyLjZsMy45LTEuMWw1LjctMC44bDUuNCwwLjhsNi41LDNsNC45LDMuMWg0LjVsNi43LDFsMy42LTEuNmw1LjgtMWw0LjUtNC40bDMuMywwLjdsMy45LDIuMWw1LjUtMC41bDcuMywyLjNsNC40LTMuOSBsLTEuOS0yLjdsLTAuMS02LjVsMS4yLTJsLTIuNS0zLjNsLTMuNy0xLjVsMS43LTNsNS4xLTEuMWw2LjItMC4ybDguNSwxLjhsNS45LDIuM2w3LjcsNi4xbDMuOCwyLjdsNC40LDMuN2w2LjEsNi4xbDkuOSwxLjkgbDguOSw0LjVsNiw1LjhoNy41bDIuNi0yLjVsNi45LTEuOGwxLjMsNS42bC0wLjQsMi4zbDIuOCw2LjhsMC42LDZsLTYuOC0xLjFsLTIuOSwyLjJsNC43LDUuM2wzLjgsNy4zbC0yLjUsMC4xbDEuOSwzLjFsMCwwIGwxLjQsMS4xbDAsMGwwLDBsMCwwbC0wLjQtMmw0LTQuNWw1LjEsM2wzLjItMC4xbDQuNC0zLjZsMS0zLjdsMi4xLTcuMWwxLjktNy4ybC0xLjMtNC4zbDEtOWwtNS4yLTkuOWwtNS41LTcuM2wtMS4zLTYuMmwtNC43LTUuMSBsLTEyLjctNi43bC01LjYtMC40bC0wLjMsM2wtNS44LTEuM2wtNS43LTMuOGwtOC0wLjdsNC45LTE0LjFsMy41LTExLjVsMTMuMS0xLjhsMTQuOSwxbDIuNS0yLjhsNy45LDAuOGw0LjMsNC4zbDYuNC0wLjZsOC40LTEuNiBsLTcuNy0zLjV2LTkuOGw5LjEtMS45bDEyLjEsNy4xbDMuNi02LjRsLTMuMi00LjdsNC43LTAuNWw2LjUsOC4xbC0yLjQsNC42bC0wLjgsNmwwLjMsNy41bC01LjcsMS4zbDIuOCwyLjdsLTAuMSwzLjZsNi40LDguMyBsMTYsMTMuNGwxMC41LDguOGw1LjcsNC4zbDEuNi01LjdsLTQuNS02LjJsNS43LTEuNWwtNS40LTYuOWw1LTMuMWwtNC43LTIuNmwtMy40LTVsNC4xLTAuMmwtOS04LjZsLTYuNy0xLjRsLTIuOS0yLjRsLTEuMS01LjYgbC0zLjEtMy45bDcsMC44bDEuMy0yLjVsNC43LDIuMmw2LjEtNC42bDExLjQsNGwtMS43LTIuNmwyLTMuNmwxLjUtNGwzLjEtMC43bDYuNS00LjNsOS44LDEuMmwtMC45LTEuNWwtMy44LTIuM2wtNC4xLTEuNmwtOS4xLTQuNiBsLTguMS0zbDYuMSwwLjRsMi0yLjVsMCwwbC0zMi45LTIxLjlsLTkuNC0yLjNsLTE1LjctMi42bC03LjksMC4zbC0xNS4yLTEuNGwxLjgsMi4zbDguNSwzLjRsLTIuNSwxLjhsLTE0LjItNC44bC02LjgsMC42bC05LjItMS4xIGwtNywwLjJsLTMuOSwxLjFsLTcuMi0xLjZsLTUuMS0zLjhsLTYuNS0yLjJsLTkuMi0wLjlsLTE0LjcsMWwtMTYuMS00bC03LjgtM2wtNDAuMS0zLjRsLTIuMSwyLjJsOS4zLDQuOGwtNy41LTAuN2wtMSwxLjVsLTkuNy0xLjYgbC01LDEuNGwtOS4zLTIuNGwzLDUuNWwtOC45LTIuMWwtMTAtNC4xbC0wLjQtMi4ybC02LTMuM2wtOS44LTIuNmgtNi4xbC05LjMtMC45bDQuNywzLjlsLTE3LjItMC44bC0zLjktMi4zbC0xMy4zLTAuOWwtNS4zLDAuOCBsLTAuMSwxLjNsLTUuOC0zLjJsLTIuMywwLjlsLTcuMi0xLjJsLTUuNi0wLjdsMS4xLTEuNWw2LjYtMi44bDIuMy0xLjVsLTIuNC0yLjVsLTUuNS0xLjlsLTExLjUtMi4zbC0xMC44LTAuMWwtMS45LDEuMkwxMzY5LjMsMTA0IEwxMzY5LjMsMTA0eiBNMTIwNy4xLDEzNS42bC05LjktNC4zbC0zLjEtNC4zbDMuMy00LjlsMi44LTVsOC42LTQuN2w5LjgtMi40bDExLjMtMi40bDEuMy0xLjVsLTQuMi0xLjlsLTYuNiwwLjZsLTQuOSwxLjggbC0xMS43LDAuOWwtMTAuMSwzLjFsLTYuOCwyLjdsMi41LDIuMmwtNi42LDQuNGwzLjksMC43bC01LjQsNC4zbDEuNiwyLjhsLTMuNCwxLjFsMS45LDIuOGw3LjksMS40bDIuMiwyLjNsMTMuNCwwLjdMMTIwNy4xLDEzNS42IEwxMjA3LjEsMTM1LjZ6IE0xNTIxLjEsMTEwLjlsLTE3LjktMi42bC0xMC4yLTAuMmwtMy40LDAuOWwzLjQsMy40bDEyLjQsMy4ybDQuNS0xLjJsMTQuMiwwLjIgQzE1MjQuMSwxMTQuNiwxNTIxLjEsMTEwLjksMTUyMS4xLDExMC45eiBNMTU0Ni4zLDExMy4ybC0xMS43LTEuM2wtOC4yLTAuN2wxLjcsMS42bDEwLjMsMmw2LjgsMC40TDE1NDYuMywxMTMuMkwxNTQ2LjMsMTEzLjJ6IE0xNTMzLjgsMTIyLjdsLTIuNS0xLjRsLTguMy0xLjlsLTQuMSwwLjVsLTAuOCwybDEuMSwwLjJsOC44LDAuNkMxNTI4LDEyMi43LDE1MzMuOCwxMjIuNywxNTMzLjgsMTIyLjd6IE0xNjk2LjQsMTM1bC02LTMuNiBsLTEuNCwyLjJsMy41LDEuNkwxNjk2LjQsMTM1eiBNMTA4NCwyMjguOWwtMC42LTEuNWwwLjItMS43bC0yLjItMC45bC01LTEuMWwtNi4zLDJsLTAuNywyLjZsNS45LDAuN0wxMDg0LDIyOC45eiBNMTY3My43LDI1MC43IGwtNy4yLTYuMmwtNS4xLTZsLTYuOC01LjhsLTQuOS00bC0xLjMsMC44bDQuNCwyLjhsLTEuOSwyLjhsNi44LDguM2w3LjgsNmw2LjQsOC4zbDIuNCw0LjZsNS41LDYuOGwzLjgsNmw0LjYsNS4ybC0wLjEtNC44bDYuNSwzLjggbC0zLTQuNGwtOS41LTYuM2wtMy43LTlsOC45LDJMMTY3My43LDI1MC43TDE2NzMuNywyNTAuN3pcIn0sUlc6e2Q6XCJNMTE0Ny42LDU3OS40bC0zLjMsMS45bC0xLjQtMC42bC0xLjYsMS44bC0wLjIsMy44bC0wLjgsMC40bC0wLjYsMy41bDMuNSwwLjVsMS43LTMuNmwzLDAuNGwwLDBsMS42LTAuOGwwLjQtMy43IEwxMTQ3LjYsNTc5LjRMMTE0Ny42LDU3OS40elwifSxLTjp7ZDpcIk02MjkuOSw0NjMuMnYtMC4zbC0wLjItMC4yaC0wLjN2MC41bDAuMiwwLjJMNjI5LjksNDYzLjJ6IE02MjkuNCw0NjIuNWwtMC4xLTAuMmwtMC4xLTAuMWwtMC4yLTAuNGwtMC40LTAuNCBsLTAuMiwwLjFsLTAuMSwwLjJ2MC4xbDAsMGwwLjMsMC4zbDAuNCwwLjFsMC4yLDAuNEw2MjkuNCw0NjIuNUw2MjkuNCw0NjIuNXpcIn0sTEM6e2Q6XCJNNjM3LjQsNDg0LjJsMC4xLTEuMmwtMC4xLTAuNWwtMC4yLDAuMWwtMC4zLDAuNGwtMC40LDAuNmwtMC4xLDAuM3YwLjZsMC42LDAuNEw2MzcuNCw0ODQuMkw2MzcuNCw0ODQuMnpcIn0sVkM6e2Q6XCJNNjM0LjUsNDkxLjRMNjM0LjUsNDkxLjR2LTAuMWgwLjF2LTAuMWwwLDB2LTAuMWgtMC4xdjAuMWwwLDB2MC4xaC0wLjFMNjM0LjUsNDkxLjRMNjM0LjUsNDkxLjRMNjM0LjUsNDkxLjQgTDYzNC41LDQ5MS40eiBNNjM1LjIsNDg5LjVsMC4xLTAuMmwwLjEtMC4xbDAsMGwwLDBsLTAuMS0wLjFsMCwwdjAuMWwtMC4yLDAuMWwwLDB2MC4xbDAsMHYwLjFINjM1aC0wLjFsMCwwaDAuMWwwLDBsMC4xLDAuMWwwLDAgbDAsMGwwLDBMNjM1LjIsNDg5LjVMNjM1LjIsNDg5LjV6IE02MzUuNSw0ODguNGwwLjMtMC4ybDAuMS0wLjZsLTAuMS0wLjRoLTAuMmwtMC4zLDAuMWwtMC4yLDAuM2wtMC4xLDAuNUw2MzUuNSw0ODguNEw2MzUuNSw0ODguNCBMNjM1LjUsNDg4LjR6XCJ9LFNNOntkOlwiTTEwNDAuMywyOTMuNWwtMC43LDAuMWwtMC4yLTAuOWwwLjktMC4zTDEwNDAuMywyOTMuNXpcIn0sU1Q6e2Q6XCJNMTAxNC4xLDU3MS40bDAuNS0wLjh2LTAuNWwtMC4zLTAuNWgtMC40bC0wLjUsMC40bC0wLjMsMC40djAuM2wwLjEsMC43bDAuMSwwLjNsMC4zLDAuMkwxMDE0LjEsNTcxLjQgTDEwMTQuMSw1NzEuNHogTTEwMTguNCw1NjIuMmwwLjItMC40di0wLjJsLTAuMS0wLjFsLTAuMS0wLjFsLTAuMiwwLjFsLTAuMywwLjVsMC4xLDAuMmwwLjIsMC4yTDEwMTguNCw1NjIuMkwxMDE4LjQsNTYyLjJ6XCJ9LFNBOntkOlwiTTEyMjguNywzODdsLTEwLjItMC41bC0xNi43LTEyLjdsLTguNS00LjVsLTYuNy0xLjdsLTAuOSwxbC0xMC40LDMuMWw2LjEsNi40bC0xLjcsMWwtMC43LDIuMmwtNCwwLjhsLTEuMSwyLjMgbC0yLjEsMmwtNi4xLTFsLTAuNSwyLjV2Mi4ybC0wLjYsMy41aDIuN2wzLjIsNC40bDMuNyw1LjFsMi41LDQuN2wxLjcsMS41bDEuNywzLjNsLTAuMiwxLjRsMi4xLDMuN2wzLDEuM2wyLjgsMi41bDMuNiw3djMuOCBsMC45LDQuNGw0LDYuMWwyLjUsMWw0LjEsNC40bDEuOSw1LjJsMy4yLDUuM2wzLDIuM2wwLjYsMi41bDEuOCwxLjlsMC45LDIuOGwyLjMtMi4xbC0wLjctMi43bDEuMi0zLjFsMi40LDEuN2wxLjUtMC42bDYuNC0wLjIgbDEsMC43bDUuNCwwLjZsMi4xLTAuM2wxLjYsMi4xbDIuNS0xbDMuNS02LjdsNS0yLjlsMTUuNy0yLjRsMTYuMS02LjRsMi42LTEyLjdsLTIuOS00LjVsLTEsMS4zbC0xNi44LTMuMmwtMi42LTYuNGwtMC40LTEuNSBsLTEuMi0yLjRsLTEuNSwwLjRsLTEuOC0xLjJsLTEtMS42bC0wLjktMi4xbC0xLjctMS44bC0xLTIuMWwwLjQtMi4xbC0wLjYtMi43bC00LTIuNmwtMS4yLTIuM2wtMi45LTEuNGwtMi43LTUuNWwtMy44LDAuMiBsLTEuNy0zLjFMMTIyOC43LDM4N0wxMjI4LjcsMzg3elwifSxTTjp7ZDpcIk05MDguOSw0NzkuMmwtMy42LTQuNGwtMy4yLTQuN2wtMy43LTEuN2wtMi42LTEuOGgtMy4xbC0yLjgsMS40bC0yLjctMC41bC0yLDJsLTEuMywzLjNsLTIuOCw0LjRsLTIuNSwxLjJsMi43LDIuMyBsMi4yLDVsNi4xLTAuMmwxLjMtMS41bDEuOC0wLjFsMi4xLDEuNWwxLjgsMC4xbDEuOC0xLjFsMS4xLDEuOGwtMi40LDEuNWwtMi40LTAuMWwtMi40LTEuNGwtMi4xLDEuNWgtMWwtMS40LDAuOWwtNS0wLjFsMC44LDQuOSBsMy0xLjFsMS44LDAuMmwxLjUtMC43bDEwLjMsMC4zbDIuNywwLjFsNCwxLjVsMS4zLTAuMWwwLjQtMC43bDMsMC41bDAuOC0wLjRsMC4zLTJsLTAuNC0yLjRsLTIuMS0xLjhsLTEuMS0zLjdMOTA4LjksNDc5LjIgTDkwOC45LDQ3OS4yelwifSxSUzp7ZDpcIk0xMDg0LjgsMjg1LjJsLTMuMi0xLjVsLTAuOC0xLjlsLTIuOS0yLjVsLTMuMi0wLjJsLTMuNywxLjZsMCwwbDEuNSwyLjRsMS43LDEuOGwtMS43LDIuM2wwLDBoMS44bC0xLDIuN2wyLjcsMi4zIGwtMC41LDIuOWwtMS4yLDAuM2wxLjUsMS4xbDAuOCwwLjhsMS44LDAuN2wyLDEuMmwtMC40LDAuNmwxLjItMC41bDAuNS0ybDAuOS0wLjRsMC44LDAuOWwxLDAuNGwwLjgsMWwwLjgsMC4zbDEuMSwxLjFoMC44IGwtMC41LDEuNWwtMC41LDAuN2wwLjIsMC41bDEuNy0wLjRsMi40LTAuMWwwLjctMC45bC0wLjYtMC43bDAuNy0ybDEuNy0xLjlsLTIuOC0yLjZsLTAuNy0yLjNsMS4xLTEuNGwtMS0xbDEuMS0xLjFsLTEuNC0wLjcgbC0xLjQsMS4zbC0zLjEtMS44TDEwODQuOCwyODUuMkwxMDg0LjgsMjg1LjJ6XCJ9LFNDOntkOlwiTTEyODguNSw2MDJsLTAuNS0wLjhsLTAuNCwwLjNsMC4yLDAuM2wwLjMsMC4ybDAuMSwwLjRsMC4zLDAuMlY2MDJMMTI4OC41LDYwMnpcIn0sU0w6e2Q6XCJNOTE5LjQsNTE4LjdsLTEuNSwwLjN2LTIuM0w5MTcsNTE1bDAuMi0xLjhsLTEuMi0yLjdsLTEuNS0yLjNIOTEwbC0xLjMsMS4ybC0xLjUsMC4ybC0xLDEuNGwtMC43LDEuN2wtMywyLjggbDAuNyw0LjdsMC45LDIuM2wyLjksMy41bDQuMSwyLjVsMS41LDAuNWwxLjMtMmwwLjMtMS45bDIuNi0zLjRMOTE5LjQsNTE4LjdMOTE5LjQsNTE4Ljd6XCJ9LFNHOntkOlwiTTE1NjEsNTYzLjdsMC4xLTAuMmwtMC4yLTAuMmwtMC4zLTAuMWwtMC41LTAuMmwtMC42LDAuMWwtMC4zLDAuNmwwLjksMC40TDE1NjEsNTYzLjdMMTU2MSw1NjMuN3pcIn0sU1g6e2Q6XCJNNjI3LjEsNDU3LjJMNjI3LjEsNDU3LjJsMC4yLDAuMmwwLjMsMC4xbDAuMS0wLjF2LTAuMkg2MjcuMXpcIn0sU0s6e2Q6XCJNMTA4Ny40LDI2MC45bC00LjktMi4zbC0zLjQsMC44bC0yLjQtMC42bC0yLjgsMS4zbC0yLjctMi4ybC0xLjksMC45bC0wLjMtMC40aC0xLjVsLTAuNiwxLjFsLTEuMSwwLjNsLTAuMiwxLjQgbC0wLjksMC4zbC0wLjEsMC42bC0xLjYsMC42bC0yLjItMC4xbC0wLjYsMS40bC0wLjMsMC44bDAuNywyLjFsMi42LDEuNmwxLjksMC43bDQuMS0wLjhsMC4zLTEuMmwxLjktMC4ybDIuMy0xbDAuNiwwLjRsMi4yLTAuNyBsMS0xLjVsMS42LTAuNGw1LjUsMS45bDEtMC42bDAuNy0yLjVMMTA4Ny40LDI2MC45TDEwODcuNCwyNjAuOXpcIn0sU0k6e2Q6XCJNMTA1OS40LDI3N2wtMS4yLTIuMWwtMC44LTAuMWwtMC45LDEuMWwtNC4zLDAuMWwtMi40LDEuNGwtNC4yLTAuNGwtMC4zLDNsMS40LDIuN2wtMS4xLDAuNWwzLjUsMC4ybDAuOC0xbDEuOCwxIGwyLDAuMWwtMC4yLTEuN2wxLjctMC42bDAuMy0yLjVMMTA1OS40LDI3N0wxMDU5LjQsMjc3elwifSxTQjp7ZDpcIk0xOTA5LjEsNjQ2LjRsLTAuMi0wLjJsLTAuMS0wLjRoLTAuM2wtMC4zLDAuMWwwLjIsMC42aDAuMkwxOTA5LjEsNjQ2LjRMMTkwOS4xLDY0Ni40eiBNMTg3My41LDY0Ny4ybC0wLjEtMC4yIGwtMC41LTAuNGwtMS45LTEuM2wtMC40LTAuMWwtMC4xLDAuMWwtMC4xLDAuM2wwLjEsMC4ybDAuNSwwLjF2MC4xbDAuMywwLjJsMC43LDAuMmwwLjQsMC4zbDAuMSwwLjVsMC4zLDAuMWwwLjMsMC4xTDE4NzMuNSw2NDcuMiBMMTg3My41LDY0Ny4yeiBNMTkwNS41LDY0MC42TDE5MDUuNSw2NDAuNmwwLjItMC40bC0wLjItMC4xbC0wLjUtMC4xbC0wLjcsMC4xbC0wLjMsMC4ybC0wLjIsMC4zaC0wLjJ2MC4ybDAuMSwwLjRsMC4yLTAuMWwwLjIsMC4xIGwwLjUtMC41aDAuM2gwLjFMMTkwNS41LDY0MC42TDE5MDUuNSw2NDAuNnogTTE4ODEuMSw2MzguM2wtMC4xLTAuMmwtMC4yLTAuMWwtMC45LTAuN2wtMC41LTAuMmgtMC41bC0wLjEsMC41djAuM2gwLjZsMC40LDAuMnYwLjYgbDAuMiwwLjJ2MC41bDEuMiwwLjlsMC43LDAuNGwwLjcsMC4xbDAuNCwwLjJsMC41LTAuMWwwLjUsMC4ybDAuNC0wLjFsLTAuNC0wLjN2LTAuNGwtMC41LTEuM2wtMC4zLTAuM2wtMC41LDAuMWwtMC41LTAuMmgtMC40IEwxODgxLjEsNjM4LjNMMTg4MS4xLDYzOC4zeiBNMTg4MC43LDYzMy40bC0wLjYtMS42bC0wLjItMC4xbDAuMSwwLjZsMC4xLDAuNGwtMC4xLDAuNWwtMC4xLDAuNmwwLjIsMC4ybDAuMi0wLjJsMC40LDAuNXYtMC4yIFY2MzMuNHogTTE4NzAuOSw2MzEuMmwtMC4zLTAuMWwtMC40LDAuM2wtMC4xLDAuM2wtMC4xLDAuN3YwLjRsMC4zLDAuN2wwLjMsMC41bDAuMywwLjNsMC4yLDAuMmwwLjksMC4xbDEuNywwLjFsMC45LDAuNGwwLjksMC4yIGwwLjQtMC4xbDAuNS0wLjJsMC4xLTAuMWwtMC4xLTAuNmwtMC4yLTAuM2wtMC40LTAuMmwtMC4yLTAuNmwtMC41LTAuNGwtMC45LTAuN2gtMS42bC0wLjYsMC4xTDE4NzAuOSw2MzEuMkwxODcwLjksNjMxLjJ6IE0xODczLjUsNjI5LjRsLTAuNSwwLjJ2MC4zbDAuNCwwLjFsMC40LDAuMmwwLjEsMC4zbDAsMGwwLjItMC4xbDAuNCwwLjJsMC4yLTAuM2wtMC40LTAuNWwtMC40LTAuM2gtMC4xTDE4NzMuNSw2MjkuNCBMMTg3My41LDYyOS40eiBNMTg2Ny45LDYzMC4ybDAuMy0wLjJ2LTAuNGgtMC4zbC0wLjEtMC4yaC0wLjJsLTAuMywwLjJsLTAuMiwwLjNsMC4xLDAuMmgwLjRMMTg2Ny45LDYzMC4yTDE4NjcuOSw2MzAuMiBMMTg2Ny45LDYzMC4yeiBNMTg1OS41LDYyNy45bC0wLjEtMC4ybC0wLjMtMC4yaC0wLjJsLTAuNSwwLjFsMC4xLDAuMWwwLjYsMC4zbDAuMywwLjFMMTg1OS41LDYyNy45TDE4NTkuNSw2MjcuOXogTTE4NjIuNiw2MjguMyBsMC4zLTAuMmwtMC4xLTAuMmwtMC4xLTAuNWwtMC40LDAuN2wwLjEsMC4ySDE4NjIuNnogTTE4NjIuMSw2MjcuNHYtMC4yVjYyN2wtMC4yLTAuMWwwLjQtMC4zbC0wLjEtMC4xbC0wLjYtMC4ybC0wLjIsMC4ybC0wLjIsMC4xIGwtMC4xLDAuMWwtMC4xLDAuMWwtMC4xLDAuNWwwLjIsMC40bDAuNCwwLjJMMTg2Mi4xLDYyNy40TDE4NjIuMSw2MjcuNHogTTE4NTguMSw2MjcuNmwtMC4zLTAuNGwwLjEtMC41bDAuMi0wLjFsMC4yLTAuNWwtMC4xLTAuNCBsLTAuMiwwLjFsLTAuNywwLjZsLTAuMSwwLjNsMC42LDAuOEwxODU4LjEsNjI3LjZMMTg1OC4xLDYyNy42TDE4NTguMSw2MjcuNnogTTE4NzEuMSw2MjYuM2wtMC4yLTAuNHYtMC4ybC0wLjMtMC4ybC0wLjIsMC4xIGwtMC4xLDAuM2wwLjEsMC4ybDAuNCwwLjNMMTg3MS4xLDYyNi4zTDE4NzEuMSw2MjYuM3ogTTE4NzcuMSw2MjUuMWgtMC4ybC0wLjEsMC4xaC0wLjJoLTAuM2wtMC4xLDAuMmwwLjYsMS4xbC0wLjMsMC41bDAuNCwyLjIgbDAuNCwxLjJsMC44LDAuOHYwLjJsMC44LDAuNWwwLjYsMS4zbDAuMiwwLjFsMC4xLTAuMnYtMC42bC0wLjUtMS4xbDAuMS0wLjhsLTAuMi0wLjNWNjMwbC0wLjItMC44bC0wLjYtMC43bC0wLjMtMC4xbC0wLjItMC4zIGwwLjItMC42bDAuMi0wLjJsMC4xLTAuM0wxODc3LjEsNjI1LjFMMTg3Ny4xLDYyNS4xeiBNMTg2MC41LDYyNC42bC0wLjYtMC4ybC0wLjItMC4zdi0xbC0wLjYtMC4zbC0wLjMsMC4ybC0wLjYsMC43bC0wLjIsMC40IGwtMC41LDAuM2wtMC4xLDAuM3YwLjRsMC40LDAuMWwwLjMtMC40bDAuOS0wLjFsMC4zLDAuMXYwLjRsMC4xLDAuN2wwLjMsMC4zbDAuNSwwLjJsMC40LDAuNmwwLjEtMC4zaDAuMmwwLjItMC40bC0wLjMtMS4yIEwxODYwLjUsNjI0LjZMMTg2MC41LDYyNC42eiBNMTg1NCw2MjQuMmwwLjEtMC41bC0wLjEtMC45bC0wLjIsMC4xdjAuMmwtMC4xLDAuNEwxODU0LDYyNC4yTDE4NTQsNjI0LjJ6IE0xODU3LjIsNjIzLjhsMC4yLTAuMiB2LTAuNHYtMC41bC0wLjItMC40bC0wLjItMC4ybC0wLjUsMC4xbC0wLjQsMC41djAuNWwwLjQsMC42TDE4NTcuMiw2MjMuOEwxODU3LjIsNjIzLjhMMTg1Ny4yLDYyMy44eiBNMTg1NC42LDYyMi42bDAuMi0wLjMgbDAuNS0wLjdsMC4xLTAuM2wtMC41LTAuMmwtMC40LTAuNWwtMC40LTAuMmwtMC4zLDAuNHYwLjRsMC41LDAuNmwtMC4xLDAuNGwwLjIsMC4xbDAuMSwwLjRMMTg1NC42LDYyMi42TDE4NTQuNiw2MjIuNnogTTE4NzIuMSw2MjYuNWwtMC4xLTAuNWwtMC4zLTAuNGwwLjQtMC41bC0yLjItMS45bC0wLjMtMC4ybC0wLjQtMC4xbC0wLjUtMC40bC0wLjUtMC4xbC0wLjUtMC40bC0wLjItMC4zbC0wLjYtMC40bC0wLjYtMC44IGwtMS41LTAuM2wwLjEsMC4ybDAuNCwwLjRsMC4xLDAuN2wwLjUsMC40bDAuNSwwLjZsMC4yLDAuMWwwLjIsMC4ybDAuNCwwLjVsMC44LDAuNGwwLjgsMC42bDAuMywwLjFsMC4zLDAuM2wxLjUsMC43bDAuNSwwLjcgTDE4NzIuMSw2MjYuNUwxODcyLjEsNjI2LjVMMTg3Mi4xLDYyNi41eiBNMTg1MC4zLDYxNy4zbDAuMi0wLjNsLTAuNy0wLjVsLTAuMiwwLjNsLTAuMiwwLjVsMC40LDAuMkwxODUwLjMsNjE3LjNMMTg1MC4zLDYxNy4zeiBNMTg1OS40LDYxOC44TDE4NTkuNCw2MTguOGwtMC40LTAuMWwtMC40LTAuMmwtMC43LTAuOGwtMC4yLTAuM2wtMC4yLTFsLTAuNC0wLjRsLTEuNC0wLjhsLTAuOC0wLjhsLTAuNy0wLjJsLTAuMiwwLjJ2MC41bDAuMiwwLjMgbDEsMC45bDEuMSwxLjdsMSwxbDAuOCwwLjFoMC40djAuMWwwLjEsMC4ybDAuNSwwLjJsMC41LTAuNEwxODU5LjQsNjE4LjhMMTg1OS40LDYxOC44elwifSxTTzp7ZDpcIk0xMjIzLjQsNTA1LjdsLTIuNi0yLjdsLTEuMi0yLjZsLTEuOC0xLjJsLTIsMy40bC0xLjEsMi4zbDIuMiwzLjVsMi4xLDMuMWwyLjIsMi4ybDE4LjUsNy42bDQuOC0wLjFsLTE1LjQsMTkuMSBsLTcuNCwwLjNsLTQuOSw0LjVsLTMuNiwwLjFsLTEuNSwybC00LjgsNy4ybDAuMiwyMy4ybDMuMyw1LjNsMS4zLTEuNWwxLjMtMy40bDYuMS03LjdsNS4zLTQuOGw4LjMtNi40bDUuNi01LjFsNi40LTguN2w0LjctNy4xIGw0LjYtOS4zbDMuMi04LjJsMi41LTcuMWwxLjMtNi44bDEuMS0yLjNsLTAuMi0zLjRsMC40LTMuN2wtMC4yLTEuN2gtMi4xbC0yLjYsMi4ybC0yLjksMC42bC0yLjUsMC45bC0xLjgsMC4ybDAsMGwtMy4yLDAuMiBsLTEuOSwxLjFsLTIuOCwwLjVsLTQuOCwxLjlsLTYuMSwwLjhsLTUuMiwxLjZMMTIyMy40LDUwNS43TDEyMjMuNCw1MDUuN3pcIn0sWkE6e2Q6XCJNMTE0OC4yLDcxMy43bC0yLjktMC42bC0xLjksMC44bC0yLjYtMS4xbC0yLjItMC4xbC04LDQuN2wtNS4yLDQuN2wtMiw0LjNsLTEuNywyLjRsLTMsMC41bC0xLjIsM2wtMC42LDJsLTMuNiwxLjUgbC00LjQtMC4zbC0yLjUtMS44bC0yLjMtMC44bC0yLjcsMS41bC0xLjUsMy4xbC0yLjcsMS45bC0yLjgsMi44bC00LDAuN2wtMS4xLTIuM2wwLjctMy44bC0zLTYuMWwtMS40LTFsLTEuMSwyMy42bC01LDMuMmwtMi45LDAuNSBsLTMuMy0xLjJsLTIuNC0wLjVsLTAuOC0yLjdsLTIuMS0xLjhsLTIuNywzLjJsMy41LDguMnYwLjFsMi41LDUuM2wzLjIsNmwtMC4yLDQuOGwtMS43LDEuMmwxLjQsNC4ybC0wLjIsMy44bDAuNiwxLjdsMC4zLTAuOSBsMi4xLDIuOWwxLjgsMC4xbDIuMSwyLjNsMi40LTAuMmwzLjUtMi40bDQuNi0xbDUuNi0yLjVsMi4yLDAuM2wzLjMtMC44bDUuNywxLjJsMi43LTEuMmwzLjIsMWwwLjgtMS44bDIuNy0wLjNsNS44LTIuNWw0LjMtMi45IGw0LjEtMy44bDYuNy02LjVsMy40LTQuNmwxLjgtMy4ybDIuNS0zLjNsMS4yLTAuOWwzLjktMy4ybDEuNi0yLjlsMS4xLTUuMmwxLjctNC43aC00LjFsLTEuMywyLjhsLTMuMywwLjdsLTMtMy41bDAuMS0yLjJsMS42LTIuNCBsMC43LTEuOGwxLjYtMC41bDIuNywxLjJsLTAuNC0yLjNsMS40LTcuMWwtMS4xLTQuNUwxMTQ4LjIsNzEzLjdMMTE0OC4yLDcxMy43eiBNMTEyOC4xLDc2Ni41bC0yLDAuNmwtMy43LTQuOWwzLjItNGwzLjEtMi41IGwyLjYtMS4zbDIuMywybDEuNywxLjlsLTEuOSwzLjFsLTEuMSwyLjFsLTMuMSwxTDExMjguMSw3NjYuNUwxMTI4LjEsNzY2LjV6XCJ9LEtSOntkOlwiTTE2MzcuMywzMzEuN2w2LjIsNS41bC0zLjQsMS4xbDUuMiw2LjhsMS4xLDQuOGwyLjEsMy41bDQuNS0wLjVsMy4yLTIuN2w0LjItMS4ybDAuNS0zLjZsLTMuNC03LjVsLTMuMy00LjIgbC04LjItNy42bDAuMSwxLjZsLTIuMSwwLjRsLTMuNSwwLjNsLTAuNywyLjlsLTIuNC0wLjJMMTYzNy4zLDMzMS43TDE2MzcuMywzMzEuN3pcIn0sU1M6e2Q6XCJNMTE2Niw1MDguN2wtMC43LTIuMmwtMi45LTIuNWwtMC44LTQuNmwwLjUtNC43bC0yLjYtMC41bC0wLjMsMS41bC0zLjQsMC4zbDEuNCwxLjhsMC42LDMuOWwtMywzLjVsLTIuNyw0LjUgbC0yLjgsMC43bC00LjgtMy43bC0yLjEsMS4zbC0wLjUsMS45bC0yLjksMS4ybC0wLjIsMS4zaC01LjVsLTAuOC0xLjNsLTQuMS0wLjNsLTIsMS4xbC0xLjUtMC41bC0zLTMuN2wtMS0xLjhsLTQsMC45bC0xLjUsMi45IGwtMS4zLDUuN2wtMS45LDEuMmwtMS43LDAuN2wzLjgsMi41bDMuMSwyLjZsMC4xLDJsMy44LDMuNGwyLjQsMi43bDEuNSwzLjhsNC4yLDIuNWwwLjksMi4xbDMuNSw1LjJsMi41LDAuOGwxLjUtMS4xbDIuNiwwLjQgbDMuMS0xLjNsMS40LDIuN2w1LDQuMmwwLDBsMi4zLTEuN2wzLjUsMS40bDQuNS0xLjVsNCwwLjFsMy40LTNsMy40LTMuOGwzLjgtNC4ybC0zLjUtNi45bC0yLjYtMS41bC0xLTIuNWwtMi45LTMuMWwtMy40LTAuNSBsMS44LTMuNmwzLTAuMWwwLjgtMmwtMC4yLTVsLTAuOC0wLjFMMTE2Niw1MDguN0wxMTY2LDUwOC43elwifSxFUzp7ZDpcIk04ODguMywzOTAuNGwxLTAuMXYwLjNsLTEuMiwxbC0wLjUsMS40bC0wLjQsMC42bC0wLjMsMC4ybC0wLjYsMC4ybC0wLjctMC45bC0wLjQtMWwtMC4yLTAuM2wwLjQtMC4yaDAuNWwxLTAuMSBsMC4zLTAuMUw4ODguMywzOTAuNHogTTg4My4zLDM5Mi43aC0wLjJsLTAuMiwwLjJsLTAuMiwwLjRsMC4zLDAuNWwwLjIsMC4xaDAuMmwwLjUtMC40di0wLjJsLTAuMS0wLjNMODgzLjMsMzkyLjd6IE04ODAuNiwzODkgbC0wLjMtMC40aC0wLjdsLTAuNCwwLjZsMC42LDEuMmwwLjEsMC41aDAuMWwwLjUtMC41bDAuMS0wLjNsLTAuMS0wLjVsMC4yLTAuMkw4ODAuNiwzODl6IE04NzguNywzOTUuNWgtMC42bDAuMSwwLjJsMC4xLDAuMiBsMC43LDAuNGwwLjYtMS4xbC0wLjItMC4yTDg3OC43LDM5NS41eiBNOTAxLjEsMzg5LjNsLTAuMywwLjJsLTAuMSwwLjZsLTAuNywxLjNsLTAuNSwxLjJsLTAuNywwLjZsLTAuNywwLjJsMC4xLDAuMWwwLjcsMC4xIGwwLjgtMC43bDEuNS0wLjVsMC4zLTFsMC4zLTEuMXYtMC43bC0wLjMtMC4zTDkwMS4xLDM4OS4zTDkwMS4xLDM4OS4zeiBNODkzLjEsMzkzLjFMODkzLjEsMzkzLjFMODkzLjEsMzkzLjFoLTAuMmwtMS4zLTAuMSBsLTAuMiwwLjZsLTAuNSwwLjR2MC43bDAuNSwwLjdsMC4zLDAuMWwwLjUsMC4xbDAuNy0wLjRsMC4yLTAuNGwwLjEtMC44bC0wLjEtMC40VjM5My4xeiBNOTk0LjMsMzE4LjdsLTAuMy0wLjFsLTAuNSwwLjJsLTAuNS0wLjIgbDAuMS0wLjNsMC4xLTAuMmwwLjEtMC4xbC0wLjItMC4ydi0wLjFsMC4yLTAuMmwtMC4yLTAuMWwtMS4zLDAuNGwtMC43LDAuNGwtMi4xLDEuNXYwLjNsMC4xLDAuMmgwLjRsMC4yLDAuNGwwLjQtMC40bDAuMy0wLjEgbDAuMywwLjFsMC4zLDAuMmwwLjEsMC42bDAuMSwwLjJsMC42LDAuMWwwLjksMC40bDAuNC0wLjJsMC41LTAuM2wwLjItMC42bDAuMy0wLjVsMC4zLTAuNWwwLjMtMC40bC0wLjEtMC40TDk5NC4zLDMxOC43eiBNOTk4LjYsMzE3LjFsLTAuOS0wLjNsLTEsMC4xbC0wLjEsMC4xdjAuNGwwLjEsMC4xbDAuNiwwLjFsMS42LDAuN2gwLjFsMC4xLTAuNHYtMC4xTDk5OC42LDMxNy4xeiBNOTkyLDMwMS45bC02LDAuOGwtMS4zLTAuNyBsLTAuMiwwLjFoLTAuNGwtMC4xLTAuMnYtMC4ybC0zLjctMS44bC0xLjksMS4zbC05LjQtMi44bC0yLTIuNGwtOC4yLTAuMmwtNC4yLDAuM2wtNS40LTFoLTYuOGwtNi4yLTEuMWwtNy40LDQuNWwyLDIuNmwtMC40LDQuNCBsMS45LTEuNmwyLjEtMC45bDEuMiwzLjFoM2wwLjktMC44bDMsMC4ybDEuMywzLjFsLTIuNCwxLjdsLTAuMiw0LjlsLTAuOSwwLjlsLTAuMywzbC0yLjIsMC41bDIsMy44bC0xLjYsNC4zbDEuOCwxLjlsLTAuOCwxLjcgbC0yLDIuNWwwLjQsMi4xbDQuOCwxbDEuNCwzLjdsMiwyLjJsMi41LDAuNmwyLjEtMi41bDMuMy0yLjNsNSwwLjFoNi43bDMuOC01bDMuOS0xLjNsMS4yLTQuMmwzLTIuOWwtMi0zLjdsMi01LjFsMy4xLTMuNWwwLjUtMi4xIGw2LjYtMS4zbDQuOC00LjJMOTkyLDMwMS45eiBNOTAzLjcsMzg2LjNsLTAuMiwwLjRsLTAuNiwwLjJsLTAuOCwwLjRsLTAuMiwwLjNsLTAuMiwwLjlsMC40LDAuMWwwLjMtMC40bDAuOS0wLjNsMC41LTAuM2wwLjEtMC45IGwwLjItMC4zbC0wLjItMC4zTDkwMy43LDM4Ni4zeiBNOTgzLjcsMzIzLjFsLTAuMiwwLjN2MC4zbC0wLjMsMC4xbC0wLjEsMC40bDAuMSwwLjJsMC44LDAuMWwwLjItMC40aDAuM2wwLjYtMC43di0wLjNsLTAuMy0wLjIgTDk4My43LDMyMy4xeiBNOTg0LjIsMzI1LjFsLTAuMSwwLjJsLTAuMSwwLjJ2MC4yaDAuNWwwLjQsMC4xbDAuMS0wLjF2LTAuMmgtMC41TDk4NC4yLDMyNS4xelwifSxMSzp7ZDpcIk0xNDMyLjIsNTMyLjdsMi4zLTEuOGwwLjYtNi42bC0zLTYuNmwtMi45LTQuNWwtNC4xLTMuNWwtMS45LDEwLjNsMS40LDkuMWwyLjgsNS4xTDE0MzIuMiw1MzIuN0wxNDMyLjIsNTMyLjd6XCJ9LFNEOntkOlwiTTExODAuOCw0NjguNWwwLjQtNC4ybDEuNi0ybDQtMWwyLjYtMy42bC0zLjEtMi40bC0yLjItMS42bC0yLjUtNy42bC0xLjEtNi41bDEuMS0xLjJsLTIuMS02LjJoLTIxLjhoLTIxLjRoLTIyLjEgbDAuNSwxMi43aC02LjN2Mi43bDEuMSwyNS4ybC00LjgtMC40bC0yLjQsNC43bC0xLjQsMy45bDEuMiwxLjVsLTEuOCwxLjlsMC43LDIuN2wtMS40LDIuNmwtMC41LDIuNGwyLTAuNGwxLjIsMi41bDAuMSwzLjdsMi4xLDEuOCB2MS42bDAuNywyLjdsMy4zLDR2Mi42bC0wLjgsMi42bDAuMywybDIsMS44bDAuNSwwLjNsMS43LTAuN2wxLjktMS4ybDEuMy01LjdsMS41LTIuOWw0LTAuOWwxLDEuOGwzLDMuN2wxLjUsMC41bDItMS4xbDQuMSwwLjMgbDAuOCwxLjNoNS41bDAuMi0xLjNsMi45LTEuMmwwLjUtMS45bDIuMS0xLjNsNC44LDMuN2wyLjgtMC43bDIuNy00LjVsMy0zLjVsLTAuNi0zLjlsLTEuNC0xLjhsMy40LTAuM2wwLjMtMS41bDIuNiwwLjVsLTAuNSw0LjcgbDAuOCw0LjZsMi45LDIuNWwwLjcsMi4ydjMuMWwwLjgsMC4xdi0wLjdsMS40LTYuN2wyLjYtMS44bDAuNS0yLjZsMi4zLTQuOGwzLjItMy4ybDIuMS02LjJsMC43LTUuNWwtMC43LTIuNUwxMTgwLjgsNDY4LjUgTDExODAuOCw0NjguNXpcIn0sU1I6e2Q6XCJNNjY4LDUzMy44bC00LjYsMC41bC0wLjYsMS4xbC02LjctMS4ybC0xLDUuN2wtMy41LDEuNmwwLjMsMS41bC0xLjEsMy4zbDIuNCw0LjZsMS44LDAuMWwwLjcsMy41bDMuMyw1LjZsMy4xLDAuNSBsMC41LTEuM2wtMC45LTEuM2wwLjUtMS44bDIuMywwLjZsMi43LTAuN2wzLjIsMS40bDEuNC0yLjdsMC42LTIuOWwxLTIuOGwtMi4xLTMuN2wtMC40LTQuNGwzLjEtNS41TDY2OCw1MzMuOEw2NjgsNTMzLjh6XCJ9LFNaOntkOlwiTTExNTAuNSw3MzYuNmwtMi43LTEuMmwtMS42LDAuNWwtMC43LDEuOGwtMS42LDIuNGwtMC4xLDIuMmwzLDMuNWwzLjMtMC43bDEuMy0yLjhsLTAuMy0yLjhMMTE1MC41LDczNi42IEwxMTUwLjUsNzM2LjZ6XCJ9LFNFOntkOlwiTTEwNzcuNywxNjEuMWwtMS45LTIuMmwtMS43LTguNGwtNy4yLTMuN2wtNS45LTIuN2wtMi41LDAuM3YzLjVsLTcuOS0wLjlsLTAuNiwzLjFsLTQtMC4xbC0yLjIsMy45bC0zLjQsNi4xIGwtNS43LDcuOWwxLjgsMS45bC0xLjMsMi4ybC00LjMtMC4xbC0yLjMsNS4zbDEsNy42bDMuMSwyLjlsLTAuOSw2LjlsLTMuNCw0bC0xLjcsMy4zbDQuMiw4LjRsNC40LDYuN2wyLDUuN2w1LjMtMC4zbDIuMi00LjcgbDUuNywwLjVsMi01LjVsMC42LTEwbDQuNi0xLjNsMy4zLTYuNmwtNC44LTMuM2wtMy42LTRsMi4xLTguMWw3LjctNC45bDYuMS00LjVsLTEuMi0zLjVsMy40LTMuOUwxMDc3LjcsMTYxLjFMMTA3Ny43LDE2MS4xelwifSxDSDp7ZDpcIk0xMDI0LjMsMjcwLjZsLTUuNC0xLjlsLTEsMS40aC00LjJsLTEuMywxbC0yLjMtMC42bDAuMiwxLjZsLTMuNSwzLjV2Mi44bDIuNC0wLjlsMS44LDIuN2wyLjIsMS4zbDIuNC0wLjNsMi43LTIuMSBsMC45LDFsMi40LTAuMmwwLjktMi41bDMuOCwwLjhsMi4xLTEuMWwwLjMtMi41bC0yLjYtMC4ybC0yLjMtMS4xbDAuNy0xLjZMMTAyNC4zLDI3MC42TDEwMjQuMywyNzAuNnpcIn0sU1k6e2Q6XCJNMTE4My41LDM1OS45bDExLTYuN2wwLjktNy44bC0xLjItNC43bDIuNy0xLjZsMi4xLTQuMWwtNS45LDEuMWwtMi44LTAuMmwtNS43LDIuNWgtNC4zbC0zLTEuMmwtNS41LDEuOGwtMS45LTEuMyBsMC4xLDMuNmwtMS4yLDEuNWwtMS4yLDEuNGwtMSwyLjZsMS4xLDVsMi40LDAuM2wxLjIsMi41bC0yLjYsMi40bC0wLjksMy41bDAuMywyLjZsLTAuNiwxaDAuMWw2LjMsMi41TDExODMuNSwzNTkuOUwxMTgzLjUsMzU5Ljl6IFwifSxUVzp7ZDpcIk0xNjQyLjMsNDI3LjJsMS4yLTEwLjJsMC4xLTMuOWwtMi45LTEuOWwtMy4zLDQuOGwtMS45LDYuM2wxLjUsNC43bDQsNS40TDE2NDIuMyw0MjcuMkwxNjQyLjMsNDI3LjJ6XCJ9LFRKOntkOlwiTTEzNDQuMSwzMTUuN2wtMi4xLDAuMmwtMS4zLTEuOGwwLjItMi45bC02LjQsMS41bC0wLjUsNGwtMS41LDMuNWwtNC40LTAuM2wtMC42LDIuOGw0LjIsMS42bDIuNCw0LjdsLTEuMyw2LjYgbDEuOCwwLjhsMy4zLTIuMWwyLjEsMS4zbDAuOS0zbDMuMiwwLjFsMC42LTAuOWwtMC4yLTIuNmwxLjctMi4zbDMuMiwxLjV2MmwxLjYsMC4zbDEsNS40bDIuNiwyLjFsMS41LTEuM2wyLjEtMC43bDIuNS0yLjlsMy44LDAuNSBoNS40bC0xLjgtMy43bC0wLjYtMi41bC0zLjUtMS40bC0xLjYsMC42bC0zLTUuOWwtOS41LDAuOWwtNy4xLTJsLTUuNCwwLjVsLTAuNi0zLjdsNS45LDEuMUwxMzQ0LjEsMzE1LjdMMTM0NC4xLDMxNS43elwifSxUWjp7ZDpcIk0xMTQ5LjYsNTc4LjZsLTIsMC44bDIuMywzLjZsLTAuNCwzLjdsLTEuNiwwLjhsMCwwbDAuMywyLjVsMS4yLDEuNXYybC0xLjQsMS40bC0yLjIsMy4zbC0yLjEsMi4zbC0wLjYsMC4xIGwtMC4zLDIuN2wxLjEsMC45bC0wLjIsMi43bDEsMi42bC0xLjMsMi40bDQuNSw0LjNsMC4zLDMuOWwyLjcsNi41bDAsMGwwLjMsMC4ybDIuMiwxLjFsMy41LDEuMWwzLjIsMS45bDUuNCwxLjJsMS4xLDEuN2wwLDAgbDAuNC0xLjJsMi44LDMuNGwwLjMsNi43bDEuOCwyLjR2MC4xbDIuMS0wLjNsNi43LDEuOGwxLjQtMC44bDMuOS0wLjFsMi4xLTEuOWwzLjMsMC4xbDYuMi0yLjVsNC42LTMuN2wwLDBsLTItMS40bC0yLjItNi4zIGwtMS44LTMuOWwwLjQtMy4xbC0wLjMtMS45bDEuNy0zLjlsLTAuMi0xLjZsLTMuNS0yLjNsLTAuMy0zLjZsMi44LTcuOWwtOC02LjNsLTAuNC0zLjdsLTIwLjItMTNsMCwwbC0yLjgsMi44bC0xLjksMi45bDIuMiwyLjIgbC0zLjIsMS42bC0wLjctMC44bC0zLjIsMC40bC0yLjUsMS40bC0xLjYtMi40bDEuMS00LjVsMC4yLTMuOGwwLDBsMCwwTDExNDkuNiw1NzguNkwxMTQ5LjYsNTc4LjZ6XCJ9LFRIOntkOlwiTTE1NjIuNyw0ODEuNGwxLjUtMi45bC0wLjUtNS40bC01LjItNS41bC0xLjMtNi4zbC00LjktNS4ybC00LjMtMC40bC0wLjgsMi4ybC0zLjIsMC4ybC0xLjgtMS4ybC01LjMsMy44bC0xLTUuNyBsMC40LTYuN2wtMy44LTAuM2wtMC45LTMuOGwtMi42LTEuOWwtMywxLjRsLTIuOCwyLjhsLTMuOSwwLjNsLTEuNSw2LjlsLTIuMiwxLjFsMy41LDUuNmw0LjEsNC42bDIuOSw0LjJsLTEuNCw1LjZsLTEuNywxLjEgbDEuNywzLjJsNC4yLDUuMWwxLDMuNWwwLjIsM2wyLjgsNS44bC0yLjYsNS45bC0yLjIsNi42bC0xLjMsNi4xbC0wLjMsMy45bDEuMiwzLjZsMC43LTMuOGwyLjksMy4xbDMuMiwzLjVsMS4xLDMuMmwyLjQsMi40IGwwLjktMS4xbDQuNywyLjhsMC42LDMuM2wzLjctMC44bDEuNy0yLjZsLTMuMS0zLjNsLTMuNC0wLjhsLTMuMy0zLjZsLTEuNC01LjVsLTIuNi01LjhsLTMuNy0wLjJsLTAuNy00LjZsMS40LTUuNmwyLjItOS4zbC0wLjItNyBsNC45LTAuMWwtMC4zLDVsNC43LTAuMWw1LjMsMi45bC0yLjEtNy43bDMtNS4ybDcuMS0xLjNMMTU2Mi43LDQ4MS40TDE1NjIuNyw0ODEuNHpcIn0sVEw6e2Q6XCJNMTY3Ni44LDYzMS45bDQuOS0xLjhsNi0yLjhsMi4yLTEuN2wtMi0wLjhsLTEuOCwwLjhsLTQsMC4ybC00LjksMS40bC0wLjgsMS41bDAuNSwxLjNMMTY3Ni44LDYzMS45TDE2NzYuOCw2MzEuOXogXCJ9LFRHOntkOlwiTTk4MS43LDUwMi4ybC00LjktMC4xbC0wLjQsMS45bDIuNCwzLjNsLTAuMSw0LjZsMC42LDUuMWwxLjQsMi4zbC0xLjIsNS43bDAuNCwzLjJsMS41LDRsMS4yLDIuMmw0LjYtMS4zbC0xLjQtNC40IGwwLjItMTQuNmwtMS4xLTEuM2wtMC4yLTMuMWwtMi0yLjNsLTEuNy0xLjlMOTgxLjcsNTAyLjJMOTgxLjcsNTAyLjJ6XCJ9LFRPOntkOlwiTTEzLjMsNzA3LjdMMTMuMyw3MDcuN2wtMC4yLDAuM3YwLjJsMC40LDAuNEwxMy4zLDcwNy43eiBNMTEuNyw3MDYuOGgtMC4ySDExLjdsLTAuNC0wLjNoLTAuNGwtMC4yLTAuMXYtMC4yIGwtMC4yLDAuM2wwLjIsMC4zbDAuOSwwLjRsMC4zLDAuMmwwLjItMC42di0wLjJsLTAuMywwLjF2MC4xSDExLjd6IE0xNC4yLDY5MC44bDAuMS0wLjJ2LTAuMmwtMC4zLTAuMWgtMC4xbC0wLjMsMC41bDAuMSwwLjEgbDAuMywwLjJoMC4xTDE0LjIsNjkwLjh6XCJ9LFRUOntkOlwiTTYzNS40LDUwNy43bDAuMS0wLjJ2LTAuNmwwLjItMC40bC0wLjItMC40bC0wLjEtMC42bDAuMS0wLjV2LTAuN2wwLjItMC4zbDAuNS0wLjhoLTAuOWwtMC42LDAuMmwtMS4xLDAuMSBsLTAuNSwwLjJsLTAuNywwLjFMNjMyLDUwNGwwLjEsMC4xbDAuNSwwLjJsMC4yLDAuMmwwLjEsMC4ybDAuMSwwLjRsLTAuMywxLjdsLTAuMSwwLjFMNjMyLDUwN2wtMC4yLDAuM2wtMS40LDAuOGwwLjgtMC4xbDAuOSwwLjEgbDIuNC0wLjFMNjM1LjQsNTA3LjdMNjM1LjQsNTA3Ljd6IE02MzcuMiw1MDFsMS4yLTAuNWwwLjEtMC40aC0wLjJsLTAuOCwwLjNsLTAuNiwwLjV2MC4yTDYzNy4yLDUwMXpcIn0sVE46e2Q6XCJNMTAzOCwzNjEuNGwtMi0xbC0xLjUtM2wtMi44LTAuMWwtMS4xLTMuNWwzLjQtMy4ybDAuNS01LjZsLTEuOS0xLjZsLTAuMS0zbDIuNS0zLjJsLTAuNC0xLjNsLTQuNCwyLjRsMC4xLTMuMyBsLTMuNy0wLjdsLTUuNiwyLjZsLTEsMy4zbDEsNi4ybC0xLjEsNS4zbC0zLjIsMy42bDAuNiw0LjhsNC41LDMuOHYxLjVsMy40LDIuNmwyLjYsMTEuM2wyLjYtMS40bDAuNC0yLjdsLTAuNy0yLjZsMy43LTIuNWwxLjUtMiBsMi42LTEuOEwxMDM4LDM2MS40TDEwMzgsMzYxLjR6XCJ9LFRSOntkOlwiTTExNjYuNiwzMDguOWwtOS43LTQuNGwtOC41LDAuMmwtNS43LDEuN2wtNS42LDRsLTkuOS0wLjhsLTEuNiw0LjhsLTcuOSwwLjJsLTUuMSw2LjFsMy42LDNsLTIsNWw0LjIsMy42bDMuNyw2LjQgbDUuOC0wLjFsNS40LDMuNWwzLjYtMC44bDAuOS0yLjdsNS43LDAuMmw0LjYsMy41bDgtMC43bDMuMS0zLjdsNC42LDEuNWwzLjItMC42bC0xLjcsMi40bDIuMywzbDEuMi0xLjRsMS4yLTEuNWwtMC4xLTMuNmwxLjksMS4zIGw1LjUtMS44bDMsMS4yaDQuM2w1LjctMi41bDIuOCwwLjJsNS45LTEuMWwyLjEtMWw2LjIsMC45bDIuMSwxLjZsMi4zLTEuMWwwLDBsLTMuNy01LjJsMC43LTJsLTIuOS03LjNsMy4zLTEuOGwtMi40LTEuOWwtNC4yLTEuNSB2LTMuMWwtMS4zLTIuMmwtNS42LTNsLTUuNCwwLjNsLTUuNSwzLjJsLTQuNS0wLjZsLTUuOCwxTDExNjYuNiwzMDguOUwxMTY2LjYsMzA4Ljl6IE0xMTE3LDMxMi45bDItMS45bDYuMS0wLjRsMC43LTEuNWwtNC43LTIgbC0wLjktMi40bC00LjUtMC44bC01LDJsMi43LDEuNmwtMS4yLDMuOWwtMS4xLDAuN2wwLjEsMS4zbDEuOSwyLjlMMTExNywzMTIuOUwxMTE3LDMxMi45elwifSxUTTp7ZDpcIk0xMzI1LjYsMzM0LjJsLTAuOC00bC03LjctMi43bC02LjItMy4ybC00LjItM2wtNy00LjRsLTQuMy02LjRsLTItMS4ybC01LjUsMC4zbC0yLjMtMS4zbC0xLjktNC45bC03LjgtMy4zIGwtMy4zLDMuNmwtMy44LDIuMmwxLjYsMy4xbC01LjgsMC4xbC0yLjUsMC4zbC00LjktNC45bC0zLjgtMS43bC01LjUsMS4zbC0xLjgsMmwyLjUsNGwtMC41LTQuNWwzLjctMS42bDIuNCwzLjZsNC42LDMuN2wtNCwyIGwtNS4zLTEuNWwwLjEsNS4ybDMuNSwwLjRsLTAuNCw0LjRsNC41LDIuMWwwLjcsNi44bDEuOCw0LjVsNC40LTEuMmwzLTMuN2wzLjUsMC4ybDIuMS0xLjJsMy44LDAuNmw2LjUsMy4zbDQuMywwLjdsNy4zLDUuNyBsMy45LDAuMmwxLjYsNS41bDUuOSwyLjRsMy45LTAuOGwwLjQtM2w0LTAuOWwyLjUtMmwtMC4xLTUuMmw0LjEtMS4ybDAuMy0yLjNsMi45LDEuN0wxMzI1LjYsMzM0LjJMMTMyNS42LDMzNC4yelwifSxUQzp7ZDpcIk01NzguNyw0MzMuMWwtMC4xLDAuNHYwLjJsMC4yLDAuMWwwLjYtMC4xbDAuMS0wLjFsMC4yLTAuMXYtMC4xbC0wLjQsMC4xTDU3OC43LDQzMy4xeiBNNTgyLjMsNDMzLjdsMC4yLTAuMiBsLTAuMi0wLjJsLTAuNy0wLjJsLTAuMiwwLjF2MC4zaDAuNkw1ODIuMyw0MzMuN0w1ODIuMyw0MzMuN0w1ODIuMyw0MzMuN3ogTTU4MS4yLDQzMy4ybC0wLjEtMC4xbC0wLjEtMC42aC0wLjV2MC4ybDAuMSwwLjJoMC4xIGwwLjEsMC4ybDAuMywwLjJMNTgxLjIsNDMzLjJMNTgxLjIsNDMzLjJ6XCJ9LFVHOntkOlwiTTExNjcuNiw1NDUuMWwtMy40LDNsLTQtMC4xbC00LjUsMS41bC0zLjUtMS40bC0yLjMsMS43bDAsMGwtMC4zLDcuNWwyLjMsMC44bC0xLjgsMi4zbC0yLjIsMS43bC0yLjEsMy4zbC0xLjIsMyBsLTAuMyw1LjFsLTEuMywyLjRsLTAuMSw0LjhsMS40LDAuNmwzLjMtMS45bDItMC44bDYuMiwwLjFsMCwwbC0wLjMtMi41bDIuNi0zLjdsMy41LTAuOWwyLjQtMS41bDIuOSwxLjJsMC4zLDAuNXYtMC4zbDEuNi0yLjYgbDIuNy00LjJsMi4xLTQuN2wtMi42LTcuM2wtMC43LTMuMkwxMTY3LjYsNTQ1LjFMMTE2Ny42LDU0NS4xelwifSxVQTp7ZDpcIk0xMTM4LjUsMjQxbC00LjgsMC41bC0xLjUtMC4zbC0xLDEuNGwtMS44LTAuMmwwLDBsLTQuMSwwLjNsLTEuMiwxLjRsMC4yLDMuMWwtMi0wLjZsLTQuMywwLjNsLTEuNS0xLjVsLTEuNiwxLjEgbC0yLTAuOWwtMy44LTAuMWwtNS42LTEuNWwtNS0wLjVsLTMuNywwLjJsLTIuNCwxLjZsLTIuMiwwLjNsMy4xLDUuM2wtMC4zLDEuOGwtMi4zLDAuN2wtMy44LDUuMWwxLjYsMi44bC0xLjEtMC40bC0xLjEsMS43IGwtMC43LDIuNWwyLjksMS43bDAuNiwxLjZsMS45LTEuM2wzLjIsMC43aDMuMmwyLjQsMS41bDEuNi0wLjlsMy42LTAuNmwxLTEuNWgyLjFsMS4xLTAuOWwzLjItMC42bDMuOSwxLjlsMiwwLjNsMi41LDEuNnYyLjEgbDEuOSwxLjFsMS4xLDIuNmwyLDEuNWwtMC4yLDFsMSwwLjZsLTEuMiwwLjVsLTMtMC4ybC0wLjYtMC45bC0xLDAuNWwwLjUsMS4xbC0xLjEsMmwtMC41LDIuMWwtMS4yLDAuN2wyLjQsMS4xbDIuMi0xbDIuNCwxLjEgbDMuMy00LjZsMS4zLTMuNGw0LjUtMC44bDAuNywyLjRsOCwxLjVsMS43LDEuNGwtNC41LDIuMWwtMC43LDEuMmw1LjgsMS44bC0wLjYsMi45bDMsMS4zbDYuMy0zLjZsNS4zLTEuMWwwLjYtMi4ybC01LjEsMC40IGwtMi43LTEuNWwtMS0zLjlsMy45LTIuM2w0LjYtMC4zbDMtMmwzLjktMC41bC0wLjQtMi44bDIuMi0xLjdsNC43LTAuNWwwLjMtMi4xbC0xLjgtMy40bDEuMy0zLjJsLTAuNC0xLjlsLTcuNi0ybC0yLjksMC4xIGwtMy42LTIuOWwtMy41LDFsLTYuNi0yLjJsLTAuMi0xLjJsLTIuMi0yLjdsLTQtMC4ybC0wLjctMS45bDAuOS0xLjNMMTEzOC41LDI0MUwxMTM4LjUsMjQxelwifSxBRTp7ZDpcIk0xMjgzLjksNDA4LjZsLTEuMy0yLjJsLTMsMy45bC0zLjcsNC4xbC0zLjMsNC4zbC0zLjMtMC4ybC00LjYtMC4ybC00LjIsMWwtMC4zLTEuN2wtMSwwLjNsMC40LDEuNWwyLjYsNi40IGwxNi44LDMuMmwxLTEuM2wtMC4xLTIuNmwxLjQtMi42bC0wLjMtMi42bDIuNC0xLjNsLTEuMS0wLjhsMC4xLTQuMmgyLjhMMTI4My45LDQwOC42TDEyODMuOSw0MDguNnpcIn0sR0I6e2Q6XCJNOTUwLDIyNy41bC00LjktMy43bC0zLjksMC4zbDAuOCwzLjJsLTEuMSwzLjJsMi45LTAuMWwzLjUsMS4zTDk1MCwyMjcuNXogTTk2MywyMDMuMmwtNS41LDAuNWwtMy42LTAuNGwtMy43LDQuOCBsLTEuOSw2LjFsMi4yLDNsMC4xLDUuOGwyLjYtMi44bDEuNCwxLjZsLTEuNywyLjdsMSwxLjZsNS43LDEuMWgwLjFsMy4xLDMuOGwtMC44LDMuNWwwLDBsLTcuMS0wLjZsLTEsNGwyLjYsMy4zbC01LjEsMS45bDEuMywyLjQgbDcuNSwxbDAsMGwtNC4zLDEuM2wtNy4zLDYuNWwyLjUsMS4ybDMuNS0yLjNsNC41LDAuN2wzLjMtMi45bDIuMiwxLjJsOC4zLTEuN2w2LjUsMC4xbDQuMy0zLjNsLTEuOS0zLjFsMi40LTEuOGwwLjUtMy45bC01LjgtMS4yIGwtMS4zLTIuM2wtMi45LTYuOWwtMy4yLTFsLTQuMS03LjFsLTAuNC0wLjZsLTQuOC0wLjRsNC4yLTUuM2wxLjMtNC45aC01bC00LjcsMC44TDk2MywyMDMuMkw5NjMsMjAzLjJ6XCJ9LFVTOntkOlwiTTExNi43LDQ1MC43bDItMC45bDIuNS0xLjRsMC4yLTAuNGwtMC45LTIuMmwtMC43LTAuOGwtMC44LTAuNmwtMS45LTEuMWwtMC40LTAuMWwtMC40LDAuNnYxLjNsLTEuMiwxbC0wLjQsMC43IGwwLjQsMi4zbC0wLjYsMS44bDEuMiwwLjlMMTE2LjcsNDUwLjdMMTE2LjcsNDUwLjd6IE0xMTYuMSw0NDAuOGwwLjYtMC43bC0xLjItMWwtMS44LTAuNkwxMTMsNDM5djAuNGwwLjUsMC41bDAuNiwxLjRMMTE2LjEsNDQwLjggTDExNi4xLDQ0MC44eiBNMTEzLjEsNDM3LjRsLTIuNi0wLjJsLTAuNiwwLjdsMi45LDAuMkwxMTMuMSw0MzcuNHogTTEwOC40LDQzNi41bC0xLjEtMi4xTDEwNyw0MzRsLTEuNywwLjlsMC4xLDAuMmwwLjQsMS41IGwxLjgsMC4ybDAuNCwwLjFMMTA4LjQsNDM2LjVMMTA4LjQsNDM2LjV6IE0xMDAuMSw0MzIuM2wwLjMtMS41bC0xLjMtMC4xbC0xLDAuNmwtMC40LDAuNWwxLjYsMS4xTDEwMC4xLDQzMi4zeiBNNTEyLjIsMjU5LjFoLTEuNiBsLTEuMywyLjRoLTEwLjFoLTE2LjhoLTE2LjdoLTE0LjhoLTE0LjdoLTE0LjVoLTE1aC00LjhoLTE0LjZoLTEzLjlsLTEuNiw1LjFsLTIuNCw1LjFsLTIuMywxLjZsMS4xLTUuOWwtNS44LTIuMWwtMS40LDEuMiBsLTAuNCwyLjlsLTEuOCw1LjRsLTQuMiw4LjNsLTQsNS42bC00LDUuNmwtNS40LDUuOGwtMS4xLDQuN2wtMi44LDUuM2wtMy45LDUuMmwxLDMuNGwtMS45LDUuMmwxLjUsNS40bDEuMywyLjJsLTAuOCwxLjVsMC40LDkgbDIuNSw2LjVsLTAuOCwzLjVsMSwxbDQuNiwwLjdsMS4zLDEuN2wyLjgsMC4zbC0wLjEsMS45bDIuMiwwLjdsMi4xLDMuN2wtMC4zLDMuMmw2LjMtMC41bDctMC43bC0xLDEuM2w3LjEsMy4xbDEwLjcsNC40SDM5MWg0LjMgbDAuOC0yLjZoOS4zbDEuMywyLjJsMi4xLDJsMi40LDIuOGwwLjgsMy4zbDAuNCwzLjVsMi4yLDEuOWw0LDEuOWw0LjgtNWw0LjQtMC4xbDMuMSwyLjVsMS42LDQuNGwxLDMuN2wyLjQsMy42bDAuMiw0LjVsMC44LDMgbDMuOSwybDMuNiwxLjRsMi4xLTAuMmwtMC42LTIuMmwwLjQtMy4xbDEtNC40bDEuOS0yLjhsMy43LTMuMWw2LTIuN2w2LjEtNC43bDQuOS0xLjVsMy41LTAuNGwzLjUsMS40bDQuOS0wLjhsMy4zLDMuNGwzLjgsMC4yIGwyLjQtMS4ybDEuNywwLjlsMS4zLTAuOGwtMC45LTEuM2wwLjctMi41bC0wLjUtMS43bDIuNC0xbDQuMi0wLjRsNC43LDAuN2w2LjItMC44bDMsMS41bDIsM2wwLjksMC4zbDYuMS0yLjlsMS45LDFsMyw1LjNsMC44LDMuNSBsLTIsNC4ybDAuNCwyLjVsMS42LDQuOWwyLDUuNWwxLjgsMS40bDAuNCwyLjhsMi42LDAuOGwxLjctMC44bDItMy45bDAuNy0yLjVsMC45LTQuM2wtMS4yLTcuNGwwLjUtMi43bC0xLjUtNC41bC0wLjctNS40bDAuMS00LjQgbDEuOC00LjVsMy41LTMuOGwzLjctM2w2LjktNC4xbDEuMy0yLjJsMy4zLTIuM2wyLjgtMC40bDQuNC0zLjhsNi0xLjlsNC42LTQuOGwwLjktNi41bDAuMS0yLjJsLTEuNC0wLjRsMS41LTYuMmwtMy0yLjFsMy4yLDF2LTQuMSBsMS45LTIuN2wtMSw1LjNsMiwyLjVsLTIuOSw0LjRsMC40LDAuMmw0LjQtNS4xbDIuNC0yLjVsMC42LTIuNWwtMC45LTEuMWwtMC4xLTMuNWwxLjIsMS42bDEuMSwwLjRsLTAuMSwxLjZsNS4yLTQuOWwyLjUtNC41IGwtMS40LTAuM2wyLjEtMS44bC0wLjQsMC44aDMuM2w3LjgtMS45bC0xLjEtMS4ybC03LjksMS4ybDQuOC0xLjhsMy4xLTAuM2wyLjQtMC4zbDQuMS0xLjFsMi40LDAuMWwzLjgtMWwxLTEuN2wtMS4xLTEuNGwtMC4yLDIuMiBMNjE1LDMwNmwtMC42LTMuM2wxLjEtMy4zbDEuNC0xLjNsMy45LTMuN2w1LjktMS44bDYtMi4xbDYuMy0zbC0wLjItMmwtMi4xLTMuNWwyLjgtOC41bC0xLjUtMS44bC0zLjcsMS4xbC0xLjEtMS43bC01LjUsNC43IGwtMy4yLDQuOWwtMi43LDIuOGwtMi41LDAuOWwtMS43LDAuM2wtMSwxLjZoLTkuM2gtNy43bC0yLjcsMS4ybC02LjcsNC4ybDAuMiwwLjlsLTAuNiwyLjRsLTQuNiwybC0zLjktMC41bC00LTAuMmwtMi42LDAuNyBsLTAuMywxLjhsMCwwbC0wLjEsMC42bC01LjgsMy43bC00LjUsMS44bC0yLjksMC44bC0zLjcsMS43bC00LDAuOWwtMi41LTAuM2wtMi43LTEuM2wyLjctMi40bDAsMGwyLTIuMmwzLjctMy40bDAsMGwwLDBsMC43LTIuNSBsMC41LTMuNWwtMS42LTAuN2wtNC4zLDIuOGwtMC45LTAuMWwwLjMtMS41bDMuOC0yLjVsMS42LTIuOGwwLjctMi44bC0yLjctMi40bC0zLjctMS4zbC0xLjcsMi40bC0xLjQsMC42bC0yLjIsMy4xbDAuNC0yLjEgbC0yLjYsMS41bC0yLjEsMmwtMi42LDMuMWwtMS4zLDIuNmwwLjEsMy44bC0xLjgsNGwtMy4zLDNsLTEuNCwwLjlsLTEuNiwwLjdoLTEuOGwtMC4zLTAuNGwtMC4xLTMuM2wwLjctMS42bDAuNy0xLjVsMC42LTNsMi41LTMuNSBsMi45LTQuM2w0LjYtNC43aC0wLjdsLTUuNCw0bC0wLjQtMC43bDIuOS0yLjNsNC43LTRsMy43LTAuNWw0LjQtMS4zbDMuNywwLjdoMC4xbDQuNy0wLjVsLTEuNS0yLjVsMCwwbC0xLjItMC4ybDAsMGwwLDBsLTEuNC0wLjMgbC0wLjQtMS43bC01LjEsMC41bC01LDEuNGwtMi41LTIuM2wtMi41LTAuOGwzLjEtMy4zbC01LjMsMmwtNC45LDIuMWwtNC42LDEuNWwtMi4xLTIuMWwtNS41LDEuM2wwLjQtMC45bDQuNi0yLjZsNC43LTIuNWw1LjktMi4xIGwwLDBsMCwwbC01LjMtMS42bC00LjQsMC44bC0zLjgtMS45bC00LjYtMWwtMy4yLTAuNGwtMS0xTDUxMi4yLDI1OS4xTDUxMi4yLDI1OS4xeiBNMjcxLjYsMjEyLjJsNi45LTIuOHYtMS44bC0yLjYtMC40bC0zLjQsMC45IGwtNi40LDIuMWwtMi4yLDIuN2wwLjcsMS42TDI3MS42LDIxMi4yeiBNMjMyLjksMTk1LjhsMi4zLTIuM2wtMi45LTAuNWwtNS43LDFsMC44LDEuNmwxLjYsMS4xTDIzMi45LDE5NS44TDIzMi45LDE5NS44eiBNMjM0LjEsMTczLjVsLTMuMSwyLjJsMC40LDAuNWw0LjItMC40bDAuMywxLjFsMS43LDEuMmw0LjktMS4ybDEuMi0wLjZsLTMuMy0wLjhsLTEuNi0xLjVsLTMuNCwwLjZMMjM0LjEsMTczLjVMMjM0LjEsMTczLjV6IE0zNTksMTMzLjNsLTQuNC0xLjFsLTEwLjIsMi44bC0zLjItMC4zbC0xMSwyLjNsLTQuOCwwLjZsLTcuOCwyLjVsLTQuOCwyLjZsLTguNiwyLjVsLTcuNiwwLjFsLTYuMywyLjlsMy4yLDEuN2wwLjcsMi4zbC0wLjgsMi43IGwyLjMsMi4xbC0xLjIsMy41bC05LjIsMC4ybDQuMy0yLjhoLTMuNGwtMTMuMSwyLjdsLTkuMSwyLjNsMSwzLjNsLTEuMiwyLjJsNC41LDEuNGw2LjktMC43bDEuOCwxLjNsMi45LTEuM2w2LjEtMS4yaDIuN2wtNS45LDIuMSBsMS4xLDFsLTIuNSwyLjZsLTUuNSwxLjhsLTIuNS0wLjVsLTcsMi43bC0xLjgtMC45bC00LjEsMC40bC01LjMsM2wtNy42LDMuMWwtNS44LDMuNGwwLjMsMi40bC00LDMuM2wxLjQsMS40bDAuNSwyLjdsNy4yLTEuMSBsMC40LDIuMWwtMy4zLDIuMWwtMy42LDMuNWgyLjhsNy4yLTIuM2wtMS42LDIuOWwzLjYtMi4xbC0wLjQsM2w0LjgtMi4ybDAuNCwxLjFsNy4yLTEuOGwtNi4yLDMuNGwtNS43LDQuNWwtNS43LDIuMWwtMi4zLDEuMiBsLTEwLjMsMy42bC00LjksMi40bC02LjUsMC43bC04LjUsMy4zbC02LjYsMS44bC04LjEsMi44bC0wLjQsMWwxMC0xLjdsNi0ybDYuOS0ybDYuMS0xLjdsMi44LDAuNWw4LjEtMi42bDQuNS0yLjhsMTAuNS0zLjEgbDMuOS0yLjZsNi42LTEuOGw3LjYtMi41bDguOS00LjJsLTAuMi0yLjlsMTEuMS00LjFsNy40LTMuOWw5LjItMy4ybC0wLjQsMS40bC02LjcsMS44bC04LjMsNS43bC0zLjIsMy41bDYuNC0xLjNsNi4xLTEuOWw2LjUtMS4zIGwyLjktMC4zbDMuNS00LjFsNi4zLTEuMmwyLjYsMi41bDYsMi43bDYuNy0wLjVsNS43LDJsMy4yLDEuMWwzLjMsNi4xbDMuNywxLjdsNy4xLDAuMmw0LjEsMC40bC0yLjcsNS41bDEuNiw0LjlsLTMuMyw1LjJsMi41LDEuOSBsMC42LDIuMmwwLDBsNS4xLTIuOWwzLjEtMy43bC00LjYtMy44bDEuNS02LjhsMS4xLTQuMmwtMS43LTIuN2wtMC43LTIuNGwwLjUtM2wtNi40LDEuOWwtNy42LDMuM2wtMC4yLTMuOWwtMC42LTIuNmwtMi43LTEuNiBsLTQuMi0wLjFsMzUuNC0zMi40bDI0LjMtMjAuMmwwLDBsMCwwbC0zLjUtMC43bC00LjEtMS42bC02LjUsMC44bC0yLjItMC43bC03LjEtMC41bC02LjItMS42bC00LjgsMC41bC00LjktMC45bDItMS4ybC02LjMtMC4zIGwtMy4zLDFMMzU5LDEzMy4zTDM1OSwxMzMuM3pcIn0sVkk6e2Q6XCJNNjE3LjksNDU4LjlsLTAuNywwLjJsLTAuMSwwLjRoMS4xbDAuNy0wLjNoLTAuNkw2MTcuOSw0NTguOUw2MTcuOSw0NTguOXogTTYxOC44LDQ1NS40bC0wLjUtMC4xbC0wLjIsMC4ybDAsMCBsMC4zLDAuMUw2MTguOCw0NTUuNHogTTYxNy43LDQ1NS41bC0wLjItMC4ybC0wLjMtMC4xbC0wLjQsMC4xbDAuNSwwLjNMNjE3LjcsNDU1LjVMNjE3LjcsNDU1LjV6XCJ9LFVZOntkOlwiTTY5Mi41LDc4N2wtMi4xLTMuN2wxLjktM2wtMy44LTQuM2wtNC44LTMuNWwtNi4yLTQuMWwtMS45LDAuMmwtNi4yLTQuOWwtMy40LDAuN2wtMC41LDUuMWwtMC4zLDYuNWwxLjEsNi4zIGwtMC45LDEuNGwwLjQsNC4ybDMuOSwzLjVsMy42LTAuMmw1LjQsMi43bDIuNy0wLjZsNC4yLDEuMmw1LjMtMy41TDY5Mi41LDc4N0w2OTIuNSw3ODd6XCJ9LFVaOntkOlwiTTEzMzkuOCwzMDMuMWwtMi41LDEuMmwtNS40LDQuM2wtMC45LDQuNWgtMS45bC0yLjMtM2wtNi42LTAuMmwtMi42LTVsLTIuNS0wLjFsLTEuNS02LjJsLTcuNS00LjVsLTguNiwwLjUgbC01LjcsMC45bC02LjUtNS41bC00LjgtMi4zbC05LjEtNC41bC0xLjEtMC41bC0xMS45LDMuNmw2LjIsMjIuOGw1LjgtMC4xbC0xLjYtMy4xbDMuOC0yLjJsMy4zLTMuNmw3LjgsMy4zbDEuOSw0LjlsMi4zLDEuMyBsNS41LTAuM2wyLDEuMmw0LjMsNi40bDcsNC40bDQuMiwzbDYuMiwzLjJsNy43LDIuN2wwLjgsNGgyLjlsNC4zLDEuNGwxLjMtNi42bC0yLjQtNC43bC00LjItMS42bDAuNi0yLjhsNC40LDAuM2wxLjUtMy41bDAuNS00IGw2LjQtMS41bC0wLjIsMi45bDEuMywxLjhsMi4xLTAuMmw0LjEsMC42bDUuMi00LjVsLTcuMS0zLjNsLTMuMiwxLjZsLTQuNi0yLjNsMy4xLTQuMUwxMzM5LjgsMzAzLjFMMTMzOS44LDMwMy4xelwifSxWVTp7ZDpcIk0xOTA4LjYsNjc2LjlsLTIuNy0zLjZsLTAuNiwxLjdsMS4zLDIuOEwxOTA4LjYsNjc2LjlMMTkwOC42LDY3Ni45eiBNMTkwNi42LDY2Ny4ybC0yLjMtMmwtMC45LDQuOWwwLjUsMS44IGwxLjItMC40bDEuMywwLjhMMTkwNi42LDY2Ny4yTDE5MDYuNiw2NjcuMnpcIn0sVkE6e2Q6XCJNMTAzOS41LDMwNC44bDAuNi0wLjFsMC4xLDAuNmgtMC45TDEwMzkuNSwzMDQuOHpcIn0sVkU6e2Q6XCJNNjQyLDUxOC45bC0yLjItMS41bC0yLjksMC4ybC0wLjctNS4xbC00LjEtMy4ybC00LjQtMC40bC0xLjgtM2w0LjgtMS45bC02LjcsMC4xbC02LjksMC40bC0wLjIsMS42bC0zLjIsMS45IGwtNC4yLTAuN2wtMy4xLTIuOWwtNiwwLjdsLTUtMC4xbC0wLjEtMi4xbC0zLjUtMy41bC0zLjktMC4xbC0xLjctNC41bC0yLjEsMmwwLjYsM2wtNy4xLDIuNnY0LjhsMS42LDIuMmwtMS41LDQuNmwtMi40LDAuNGwtMS45LTUgbDIuNy0zLjdsMC4zLTMuM2wtMS43LTIuOWwzLjMtMC44bDAuMy0xLjVsLTMuNywxLjFsLTEuNiwzLjJsLTIuMiwxLjhsLTEuOCwyLjRsLTAuOSw0LjVsLTEuOCwzLjdsMi45LDAuNWwwLjYsMi45bDEuMSwxLjRsMC40LDIuNSBsLTAuOCwyLjRsMC4yLDEuM2wxLjMsMC42bDEuMywyLjJsNy4yLTAuNmwzLjIsMC44bDMuOCw1LjVsMi4zLTAuN2w0LDAuM2wzLjItMC43bDIsMS4xbC0xLjIsMy40bC0xLjMsMi4xbC0wLjUsNC42bDEsNC4ybDEuNSwxLjkgbDAuMiwxLjVsLTIuOSwzLjFsMiwxLjRsMS40LDIuMmwxLjcsNi40bDMsMy40bDQuNC0wLjVsMS4xLTEuOWw0LjItMS41bDIuMy0xbDAuNy0yLjdsNC4xLTEuOGwtMC4zLTEuNGwtNC44LTAuNWwtMC43LTRsMC4zLTQuMyBsLTIuNC0xLjZsMS0wLjZsNC4yLDAuOGw0LjQsMS42bDEuNy0xLjVsNC0xbDYuNC0yLjRsMi4xLTIuNGwtMC43LTEuOGwtMy43LTQuOGwxLjYtMS44di0yLjlsMy40LTEuMWwxLjUtMS4ybC0xLjktMi4zbDAuNi0yLjMgTDY0Miw1MTguOUw2NDIsNTE4Ljl6XCJ9LFZOOntkOlwiTTE1NzEuNiw0MzVsLTUuOS0xLjZsLTMtMi42bDAuMi0zLjdsLTUuMi0xLjFsLTMtMi40bC00LjEsMy40bC01LjMsMC43aC00LjNsLTIuNywxLjVsNCw1LjFsMy40LDUuN2w2LjgsMC4xbDMsNS41IGwtMy4zLDEuN2wtMS4zLDIuM2w3LjMsMy44bDUuNyw3LjVsNC4zLDUuNmw0LjgsNC40bDIsNC41bC0wLjIsNi40bDEuOCw0LjJsMC4xLDcuN2wtOC45LDQuOWwyLjgsMy44bC01LjgsMC41bC00LjcsMi41bDQuNSwzLjcgbC0xLjMsNC4zbDIuMyw0bDYuNi01LjlsNC4xLTUuM2w2LjEtNC4xbDQuMy00LjJsLTAuNC0xMS4ybC00LTExLjdsLTQuMS01LjFsLTUuNi00bC02LjQtOC4zbC01LjMtNi43bDAuNS00LjRsMy43LTZMMTU3MS42LDQzNXpcIn0sRUg6e2Q6XCJNOTI4LjgsMzk2LjJoMC44djAuNGwtMC4xLDEuMmwtMC4yLDkuN2wtMTcuOS0wLjNsLTAuMiwxNi4zTDkwNiw0MjRsLTEuNCwzLjNsMC45LDkuMmwtMjEuNi0wLjFsLTEuMiwyLjJsMC4zLTIuNyBoMC4xbDEyLjQtMC41bDAuNy0yLjNsMi4zLTIuOWwyLTguOGw3LjgtNi44bDIuOC04LjFsMS43LTAuNGwxLjktNWw0LjYtMC43bDEuOSwwLjloMi41bDEuOC0xLjVsMy40LTAuMkw5MjguOCwzOTYuMnpcIn0sWUU6e2Q6XCJNMTI3MS41LDQ2Ni4ybC0yLjEtNC40bC01LjItMTAuNWwtMTUuNywyLjRsLTUsMi45bC0zLjUsNi43bC0yLjUsMWwtMS42LTIuMWwtMi4xLDAuM2wtNS40LTAuNmwtMS0wLjdsLTYuNCwwLjIgbC0xLjUsMC42bC0yLjQtMS43bC0xLjIsMy4xbDAuNywyLjdsLTIuMywyLjFsMC40LDIuN2wtMC42LDEuM2wwLjcsMi45bC0xLjEsMC4zbDEuNywyLjZsMS4zLDQuN2wxLDEuOXYzLjRsMS42LDMuOGwzLjksMC4zIGwxLjgtMC45bDIuNywwLjJsMC44LTEuN2wxLjUtMC40bDEuMS0xLjdsMS40LTAuNGw0LjctMC4zbDMuNS0xLjJsMy4xLTIuN2wxLjcsMC40bDIuNC0wLjNsNC43LTQuNWw4LjgtM2w1LjMtMi43di0yLjFsMC45LTIuOSBMMTI3MS41LDQ2Ni4yTDEyNzEuNSw0NjYuMnpcIn0sWk06e2Q6XCJNMTE0OS4yLDYyNi43bC0xLjktMC41bDAuNC0xLjNsLTEtMC4zbC03LjUsMS4xbC0xLjYsMC43bC0xLjYsNC4xbDEuMiwyLjhsLTEuMiw3LjVsLTAuOCw2LjRsMS40LDEuMWwzLjksMi41IGwxLjUtMS4ybDAuMyw2LjloLTQuM2wtMi4xLTMuNWwtMi0yLjhsLTQuMy0wLjhsLTEuMi0zLjRsLTMuNCwybC00LjUtMC45bC0xLjgtMi44bC0zLjUtMC42bC0yLjYsMC4xbC0wLjMtMmwtMS45LTAuMWwwLjUsMmwtMC43LDMgbDAuOSwzbC0wLjksMi40bDAuNSwyLjJsLTExLjYtMC4xbC0wLjgsMjAuM2wzLjYsNS4ybDMuNSw0bDQuNi0xLjVsMy42LDAuNGwyLjEsMS40djAuNWwxLDAuNWw2LjIsMC43bDEuNywwLjdsMS45LTAuMWwzLjItNC4xIGw1LjEtNS4zbDItMC41bDAuNy0yLjJsMy4zLTIuNWw0LjItMC45bC0wLjMtNC41bDE3LjEtNS4ybC0yLjktMS43bDEuOS01LjlsMS44LTIuMmwtMC45LTUuM2wxLjItNS4xbDEtMS44bC0xLjItNS40bC0yLjYtMi44IGwtMy4yLTEuOWwtMy41LTEuMWwtMi4yLTEuMWwtMC4zLTAuMmwwLDBsMC41LDEuMWwtMSwwLjRMMTE0OS4yLDYyNi43TDExNDkuMiw2MjYuN3pcIn0sWlc6e2Q6XCJNMTE0OC4yLDcxMy43bDYuMi03LjJsMS42LTQuNmwwLjktMC42bDAuOC0zLjdsLTAuOC0xLjlsMC41LTQuN2wxLjMtNC40bDAuMy04LjFsLTIuOC0ybC0yLjYtMC41bC0xLjEtMS42IGwtMi42LTEuM2wtNC42LDAuMWwtMC4zLTIuNGwtNC4yLDAuOWwtMy4zLDIuNWwtMC43LDIuMmwtMiwwLjVsLTUuMSw1LjNsLTMuMiw0LjFsLTEuOSwwLjFsLTEuNy0wLjdsLTYuMi0wLjdsMS45LDUuMWwxLjEsMS4xIGwxLjYsMy43bDYsN2wyLjMsMC43bC0wLjEsMi4ybDEuNSw0LjFsNC4yLDAuOWwzLjQsMi45bDIuMiwwLjFsMi42LDEuMWwxLjktMC44TDExNDguMiw3MTMuN0wxMTQ4LjIsNzEzLjd6XCJ9LFhLOntkOlwiTTEwODAsMjk5LjhsMS4yLTAuNWwwLjUtMmwwLjktMC40bDAuOCwwLjlsMSwwLjRsMC44LDFsMC44LDAuM2wxLjEsMS4xaDAuOGwtMC41LDEuNWwtMC41LDAuN2wwLjIsMC41bC0xLjEsMC4ybC0yLjksMWwtMC4xLDEuMmgtMC43bC0wLjUtMi4zbC0xLjMtMC42bC0xLjMtMS42TDEwODAsMjk5Ljh6XCJ9LFwiTUEtRUhcIjp7ZDpcIk05NjkuMywzNjMuMWwtMS44LTYuN2wtMC4zLTMuOWwtMi00LjFsLTIuMy0wLjFsLTUuNS0xLjRsLTUsMC40bC0zLjEtMi43aC0zLjlsLTEuOCwzLjlsLTMuNyw2LjdsLTQsMi42IGwtNS40LDIuOUw5MjcsMzY1bC0wLjksMy40bC0yLjEsNS40bDEuMSw3LjlsLTQuNyw1LjNsLTIuNywxLjdsLTQuNCw0LjRsLTUuMSwwLjdsLTIuOCwyLjRsLTAuMSwwLjFsLTMuNiw2LjVsLTMuNywyLjNsLTIuMSw0IGwtMC4yLDMuM2wtMS42LDMuOGwtMS45LDFsLTMuMSw0bC0yLDQuNWwwLjMsMi4ybC0xLjksMy4zbC0yLjIsMS43bC0wLjMsM2wtMC4zLDIuN2wxLjItMi4ybDIxLjYsMC4xbC0wLjktOS4ybDEuNC0zLjNsNS4yLTAuNSBsMC4yLTE2LjNsMTcuOSwwLjNsMC4yLTkuN2wwLjEtMS4ydi0wLjRsMCwwbDAsMGwwLDBsMC4xLTcuNWw4LjktNC43bDUuNC0xbDQuNC0xLjdsMi4xLTMuMmw2LjMtMi41bDAuMy00LjdsMy4xLTAuNWwyLjUtMi40bDctMSBsMS0yLjVMOTY5LjMsMzYzLjF6XCJ9LFwiUlUtV0lUSC1DUklNRUFcIjp7ZDpcIk0xMTQ1LDI4MWwtNC41LDIuMWwtMC43LDEuMmw1LjgsMS44bC0wLjYsMi45bDMsMS4zbDYuMy0zLjZsNS4zLTEuMWwwLjYtMi4ybC01LjEsMC40bC0yLjctMS41TDExNDUsMjgxeiBNMTMzMi4zLDk1LjFsLTQuNS00bC0xMy42LTQuMWwtOS40LTIuMWwtNi4yLDAuOWwtNS4zLDIuOWw1LjgsMC44bDYuNiwzLjJsOCwxLjdsMTEuNSwxLjNDMTMyNS4yLDk1LjcsMTMzMi4zLDk1LjEsMTMzMi4zLDk1LjF6IE0xMTUzLjYsODcuOGwwLjktMC42bC01LjctMC45TDExNDYsODdsLTEuMywxbC0xLjUtMS4ybC01LjIsMC4xbC02LjIsMC44bDcuNywwLjFsLTEuMSwxLjNsNC40LDFsMy42LTAuN2wwLjEtMC43bDIuOS0wLjNDMTE0OS40LDg4LjQsMTE1My42LDg3LjgsMTE1My42LDg3Ljh6IE0xMzU0LjEsOTcuN2wtMS41LTEuOGwtMTIuNS0yLjZsLTMtMC4zbC0yLjIsMC41bDEuMiw2QzEzMzYuMSw5OS41LDEzNTQuMSw5Ny43LDEzNTQuMSw5Ny43eiBNMTM2OS4zLDEwNGwtOS4yLTAuN2wzLjQtMS4ybC04LjItMS41bC02LjEsMS45bC0xLDJsMS41LDIuMWwtNi45LTAuMWwtNS4zLDIuNmwtNC4zLTEuMWwtOS4zLDAuNWwwLjMsMS4zbC05LjIsMC43bC00LjksMi40bC00LjIsMC4ybC0xLjIsMy4zbDUuNSwyLjZsLTcuNywwLjdsLTkuNS0wLjNsLTUuOCwxLjFsNC44LDUuNGw2LjksNC4zbC05LjYtM2wtNy45LDAuM2wtNS4xLDJsNC41LDMuOGwtNC45LTFsLTIuMS01bC00LjItMi44bC0xLjgsMC4xbDMuNiwzLjdsLTQuNiwzLjVsOC4xLDQuMmwwLjQsNS40bDIuOSwyLjlsNC43LDAuNWwwLjQsMy41bDQuNCwzLjFsLTEuOSwyLjZsMC41LDIuN2wtMy43LDEuNGwtMC41LDJsLTUuMy0wLjhsMy41LTcuOGwtMC41LTMuNmwtNi43LTMuM2wtMy44LTcuM2wtMy43LTMuN2wtMy42LTEuNmwwLjgtNC4ybC0yLjktMi45bC0xMS4zLTEuNGwtMi4xLDFsMC41LDQuN2wtNC4zLDQuN2wxLjIsMS43bDQuNyw0LjFsMC4xLDIuNmw1LjMsMC41bDAuOCwxLjFsNS44LDIuOWwtMSwyLjhsLTE4LjUtNi4xbC02LjYtMS43bC0xMi44LTEuNmwtMS4yLDEuN2w1LjksMy4xbC0yLjcsMy42bC02LjQtMy4ybC01LDIuMmwtNy42LDAuMWwtMi4xLDEuOWwtNS4zLTAuNmwyLjUtMy4zbC0zLjItMC4ybC0xMi4zLDQuNmwtNy42LDIuNmwwLjQsMy41bC02LDEuMmwtNC0xLjlsLTEuMi0zbDUtMC43bC0zLjYtM2wtMTIuMi0xLjhsNC4zLDMuNGwtMC44LDMuMmw0LjcsMy4zbC0xLjEsMy44bC00LjYtMS45bC00LTAuM2wtOCw1LjRsNC4yLDQuMWwtMy4yLDEuNGwtMTEuNC0zLjVsLTIuMSwyLjFsMy4zLDIuNGwwLjIsMi43bC0zLjgtMS40bC02LTEuN2wtMS45LTUuOGwtMS0yLjZsLTgtNGwyLjktMC43bDIwLjEsNC4ybDYuNC0xLjVsMy43LTIuOWwtMS42LTMuNmwtNC0yLjZsLTE3LjYtNi4xbC0xMS42LTEuM2wtNy42LTMuMmwtMy42LDEuOGwwLDBsLTYuNCwyLjJsLTMuMiwwLjVsMC40LDMuN2w3LjIsMy43bC0yLjgsNC4xbDYuNCw2LjNsLTEuNyw0LjhsNC45LDQuMWwtMC45LDMuN2w3LjMsMy45bC0wLjksMi45bC0zLjMsMy4zbC03LjksNy40bDAsMGw1LjMsMi44bC00LjUsMy4ybDAsMGwwLjksMWwtMi42LDMuNGwyLjUsNS41bC0xLjYsMS45bDIuNCwxLjRsMSwyLjhsMi4xLDMuNmw1LjIsMS41bDEsMS40bDIuMy0wLjdsNC44LDEuNGwxLDIuOWwtMC42LDEuNmwzLjcsMy45bDIuMiwxLjFsLTAuMSwxLjFsMy40LDEuMWwxLjcsMS42bC0xLjYsMS4zbC0zLjktMC4ybC0wLjgsMC42bDEuNSwybDIsMy45bDAsMGwxLjgsMC4ybDEtMS40bDEuNSwwLjNsNC44LTAuNWwzLjgsMy40bC0wLjksMS4zbDAuNywxLjlsNCwwLjJsMi4yLDIuN2wwLjIsMS4ybDYuNiwyLjJsMy41LTFsMy42LDIuOWwyLjktMC4xbDcuNiwybDAuNCwxLjlsLTEuMywzLjJsMS44LDMuNGwtMC4zLDIuMWwtNC43LDAuNWwtMi4yLDEuN2wwLjQsMi44bDQuMi0xbDAuNCwxLjNsLTYuOCwyLjZsMy4yLDIuNGwtMy4yLDUuMmwtMy40LDFsNSwzLjZsNi4yLDIuNGw3LjQsNS4xbDAuNS0wLjdsNC41LDEuMWw3LjcsMWw3LjUsMi45bDEuMSwxLjJsMi45LTFsNS4xLDEuM2wyLjEsMi41bDMuNSwxLjRsMS41LDAuMmw0LjMsMy44bDIuNCwwLjRsMC41LTEuNWwyLjYtMi41bDAsMGwtNy4zLTcuM2wtMC40LTQuMWwtNS45LTUuOWwzLjUtNi4zbDQuNi0xLjFsMS40LTMuN2wtMi44LTFsLTAuMi0zLjJsLTQuMi00LjFsLTMuNiwwLjJsLTUuMy00LjNsMS43LTQuN2wtMS43LTEuMmwyLjEtNi44bDYsMy42bC0wLjctNC42bDguMS02LjZsNy41LTAuMmwxMS45LDQuM2w2LjYsMi40bDQuMy0yLjVsNy42LTAuMmw3LjMsMy4ybDAuOC0xLjhsNi45LDAuM2wwLjItM2wtOS40LTQuMmwzLjYtMi45bC0xLjUtMS43bDMuOS0xLjZsLTUtNC4xbDEuNC0yLjFsMTYuOC0yLjFsMS43LTEuNWwxMC44LTIuMmwzLjEtMi41bDksMS4zbDQuMyw2LjNsNC4zLTEuNWw3LDIuMWwxLjIsMy4zbDQuNC0wLjRsOS4xLTUuN2wtMC44LDEuOWw4LjMsNC43bDE4LjEsMTUuNWwxLjEtMy4zbDguMywzLjZsNi4yLTEuNmwzLjIsMS4xbDQuMSwzLjZsMy45LDEuMmwzLjMsMi42bDYtMC45bDQuMywzLjhsMS43LTAuNWw0LjctMWw2LjYtNS40bDUuOS0yLjlsNS4zLDEuOWw1LjEsMC4xbDQuNywyLjlsNSwwLjJsNy45LDEuNmwyLjQtNC4zbC00LTMuNmwxLjMtNi40bDYuOSwyLjVsNC44LDAuOGw2LjYsMS41bDMuNyw0LjZsOC40LDIuNmwzLjktMS4xbDUuNy0wLjhsNS40LDAuOGw2LjUsM2w0LjksMy4xaDQuNWw2LjcsMWwzLjYtMS42bDUuOC0xbDQuNS00LjRsMy4zLDAuN2wzLjksMi4xbDUuNS0wLjVsNy4zLDIuM2w0LjQtMy45bC0xLjktMi43bC0wLjEtNi41bDEuMi0ybC0yLjUtMy4zbC0zLjctMS41bDEuNy0zbDUuMS0xLjFsNi4yLTAuMmw4LjUsMS44bDUuOSwyLjNsNy43LDYuMWwzLjgsMi43bDQuNCwzLjdsNi4xLDYuMWw5LjksMS45bDguOSw0LjVsNiw1LjhoNy41bDIuNi0yLjVsNi45LTEuOGwxLjMsNS42bC0wLjQsMi4zbDIuOCw2LjhsMC42LDZsLTYuOC0xLjFsLTIuOSwyLjJsNC43LDUuM2wzLjgsNy4zbC0yLjUsMC4xbDEuOSwzLjFsMCwwbDEuNCwxLjFsMCwwbDAsMGwwLDBsLTAuNC0ybDQtNC41bDUuMSwzbDMuMi0wLjFsNC40LTMuNmwxLTMuN2wyLjEtNy4xbDEuOS03LjJsLTEuMy00LjNsMS05bC01LjItOS45bC01LjUtNy4zbC0xLjMtNi4ybC00LjctNS4xbC0xMi43LTYuN2wtNS42LTAuNGwtMC4zLDNsLTUuOC0xLjNsLTUuNy0zLjhsLTgtMC43bDQuOS0xNC4xbDMuNS0xMS41bDEzLjEtMS44bDE0LjksMWwyLjUtMi44bDcuOSwwLjhsNC4zLDQuM2w2LjQtMC42bDguNC0xLjZsLTcuNy0zLjV2LTkuOGw5LjEtMS45bDEyLjEsNy4xbDMuNi02LjRsLTMuMi00LjdsNC43LTAuNWw2LjUsOC4xbC0yLjQsNC42bC0wLjgsNmwwLjMsNy41bC01LjcsMS4zbDIuOCwyLjdsLTAuMSwzLjZsNi40LDguM2wxNiwxMy40bDEwLjUsOC44bDUuNyw0LjNsMS42LTUuN2wtNC41LTYuMmw1LjctMS41bC01LjQtNi45bDUtMy4xbC00LjctMi42bC0zLjQtNWw0LjEtMC4ybC05LTguNmwtNi43LTEuNGwtMi45LTIuNGwtMS4xLTUuNmwtMy4xLTMuOWw3LDAuOGwxLjMtMi41bDQuNywyLjJsNi4xLTQuNmwxMS40LDRsLTEuNy0yLjZsMi0zLjZsMS41LTRsMy4xLTAuN2w2LjUtNC4zbDkuOCwxLjJsLTAuOS0xLjVsLTMuOC0yLjNsLTQuMS0xLjZsLTkuMS00LjZsLTguMS0zbDYuMSwwLjRsMi0yLjVsMCwwbC0zMi45LTIxLjlsLTkuNC0yLjNsLTE1LjctMi42bC03LjksMC4zbC0xNS4yLTEuNGwxLjgsMi4zbDguNSwzLjRsLTIuNSwxLjhsLTE0LjItNC44bC02LjgsMC42bC05LjItMS4xbC03LDAuMmwtMy45LDEuMWwtNy4yLTEuNmwtNS4xLTMuOGwtNi41LTIuMmwtOS4yLTAuOWwtMTQuNywxbC0xNi4xLTRsLTcuOC0zbC00MC4xLTMuNGwtMi4xLDIuMmw5LjMsNC44bC03LjUtMC43bC0xLDEuNWwtOS43LTEuNmwtNSwxLjRsLTkuMy0yLjRsMyw1LjVsLTguOS0yLjFsLTEwLTQuMWwtMC40LTIuMmwtNi0zLjNsLTkuOC0yLjZoLTYuMWwtOS4zLTAuOWw0LjcsMy45bC0xNy4yLTAuOGwtMy45LTIuM2wtMTMuMy0wLjlsLTUuMywwLjhsLTAuMSwxLjNsLTUuOC0zLjJsLTIuMywwLjlsLTcuMi0xLjJsLTUuNi0wLjdsMS4xLTEuNWw2LjYtMi44bDIuMy0xLjVsLTIuNC0yLjVsLTUuNS0xLjlsLTExLjUtMi4zbC0xMC44LTAuMWwtMS45LDEuMkwxMzY5LjMsMTA0TDEzNjkuMywxMDR6IE0xMjA3LjEsMTM1LjZsLTkuOS00LjNsLTMuMS00LjNsMy4zLTQuOWwyLjgtNWw4LjYtNC43bDkuOC0yLjRsMTEuMy0yLjRsMS4zLTEuNWwtNC4yLTEuOWwtNi42LDAuNmwtNC45LDEuOGwtMTEuNywwLjlsLTEwLjEsMy4xbC02LjgsMi43bDIuNSwyLjJsLTYuNiw0LjRsMy45LDAuN2wtNS40LDQuM2wxLjYsMi44bC0zLjQsMS4xbDEuOSwyLjhsNy45LDEuNGwyLjIsMi4zbDEzLjQsMC43TDEyMDcuMSwxMzUuNkwxMjA3LjEsMTM1LjZ6IE0xNTIxLjEsMTEwLjlsLTE3LjktMi42bC0xMC4yLTAuMmwtMy40LDAuOWwzLjQsMy40bDEyLjQsMy4ybDQuNS0xLjJsMTQuMiwwLjJDMTUyNC4xLDExNC42LDE1MjEuMSwxMTAuOSwxNTIxLjEsMTEwLjl6IE0xNTQ2LjMsMTEzLjJsLTExLjctMS4zbC04LjItMC43bDEuNywxLjZsMTAuMywybDYuOCwwLjRMMTU0Ni4zLDExMy4yTDE1NDYuMywxMTMuMnogTTE1MzMuOCwxMjIuN2wtMi41LTEuNGwtOC4zLTEuOWwtNC4xLDAuNWwtMC44LDJsMS4xLDAuMmw4LjgsMC42QzE1MjgsMTIyLjcsMTUzMy44LDEyMi43LDE1MzMuOCwxMjIuN3ogTTE2OTYuNCwxMzVsLTYtMy42bC0xLjQsMi4ybDMuNSwxLjZMMTY5Ni40LDEzNXogTTEwODQsMjI4LjlsLTAuNi0xLjVsMC4yLTEuN2wtMi4yLTAuOWwtNS0xLjFsLTYuMywybC0wLjcsMi42bDUuOSwwLjdMMTA4NCwyMjguOXogTTE2NzMuNywyNTAuN2wtNy4yLTYuMmwtNS4xLTZsLTYuOC01LjhsLTQuOS00bC0xLjMsMC44bDQuNCwyLjhsLTEuOSwyLjhsNi44LDguM2w3LjgsNmw2LjQsOC4zbDIuNCw0LjZsNS41LDYuOGwzLjgsNmw0LjYsNS4ybC0wLjEtNC44bDYuNSwzLjhsLTMtNC40bC05LjUtNi4zbC0zLjctOWw4LjksMkwxNjczLjcsMjUwLjdMMTY3My43LDI1MC43elwifSxcIlVBLVdJVEhPVVQtQ1JJTUVBXCI6e2Q6XCJNMTEzOC41LDI0MWwtNC44LDAuNWwtMS41LTAuM2wtMSwxLjRsLTEuOC0wLjJsMCwwbC00LjEsMC4zbC0xLjIsMS40bDAuMiwzLjFsLTItMC42bC00LjMsMC4zbC0xLjUtMS41bC0xLjYsMS4xbC0yLTAuOWwtMy44LTAuMWwtNS42LTEuNWwtNS0wLjVsLTMuNywwLjJsLTIuNCwxLjZsLTIuMiwwLjNsMy4xLDUuM2wtMC4zLDEuOGwtMi4zLDAuN2wtMy44LDUuMWwxLjYsMi44bC0xLjEtMC40bC0xLjEsMS43bC0wLjcsMi41bDIuOSwxLjdsMC42LDEuNmwxLjktMS4zbDMuMiwwLjdoMy4ybDIuNCwxLjVsMS42LTAuOWwzLjYtMC42bDEtMS41aDIuMWwxLjEtMC45bDMuMi0wLjZsMy45LDEuOWwyLDAuM2wyLjUsMS42djIuMWwxLjksMS4xbDEuMSwyLjZsMiwxLjVsLTAuMiwxbDEsMC42bC0xLjIsMC41bC0zLTAuMmwtMC42LTAuOWwtMSwwLjVsMC41LDEuMWwtMS4xLDJsLTAuNSwyLjFsLTEuMiwwLjdsMi40LDEuMWwyLjItMWwyLjQsMS4xbDMuMy00LjZsMS4zLTMuNGw0LjUtMC44bDAuNywyLjRsOCwxLjVsMS43LDEuNGw3LjQsMS4zbC0xLTMuOWwzLjktMi4zbDQuNi0wLjNsMy0ybDMuOS0wLjVsLTAuNC0yLjhsMi4yLTEuN2w0LjctMC41bDAuMy0yLjFsLTEuOC0zLjRsMS4zLTMuMmwtMC40LTEuOWwtNy42LTJsLTIuOSwwLjFsLTMuNi0yLjlsLTMuNSwxbC02LjYtMi4ybC0wLjItMS4ybC0yLjItMi43bC00LjctMi4xbDAuOS0xLjNMMTEzOC41LDI0MUwxMTM4LjUsMjQxelwifX0sYS5wcm90b3R5cGUuY3JlYXRlVG9vbHRpcD1mdW5jdGlvbigpe2lmKHRoaXMudG9vbHRpcClyZXR1cm4hMTt0aGlzLnRvb2x0aXA9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcFwiLGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSksdGhpcy50b29sdGlwQ29udGVudD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLWNvbnRlbnQtd3JhcHBlclwiLHRoaXMudG9vbHRpcCksdGhpcy50b29sdGlwUG9pbnRlcj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLXBvaW50ZXJcIix0aGlzLnRvb2x0aXApfSxhLnByb3RvdHlwZS5zZXRUb29sdGlwQ29udGVudD1mdW5jdGlvbihsKXt0aGlzLnRvb2x0aXAmJih0aGlzLnRvb2x0aXBDb250ZW50LmlubmVySFRNTD1cIlwiLHRoaXMudG9vbHRpcENvbnRlbnQuYXBwZW5kKGwpKX0sYS5wcm90b3R5cGUuc2hvd1Rvb2x0aXA9ZnVuY3Rpb24obCl7dGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtYWN0aXZlXCIpLHRoaXMubW92ZVRvb2x0aXAobCl9LGEucHJvdG90eXBlLmhpZGVUb29sdGlwPWZ1bmN0aW9uKCl7dGhpcy50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtYWN0aXZlXCIpfSxhLnByb3RvdHlwZS5tb3ZlVG9vbHRpcD1mdW5jdGlvbihsKXt2YXIgdCxlLG8saSxhPWwucGFnZVh8fChsLnRvdWNoZXMmJmwudG91Y2hlc1swXT9sLnRvdWNoZXNbMF0ucGFnZVg6bnVsbCksTD1sLnBhZ2VZfHwobC50b3VjaGVzJiZsLnRvdWNoZXNbMF0/bC50b3VjaGVzWzBdLnBhZ2VZOm51bGwpO251bGwhPT1hJiZudWxsIT09TCYmKHQ9d2luZG93LmlubmVyV2lkdGgsZT10aGlzLnRvb2x0aXAub2Zmc2V0V2lkdGgsbz10aGlzLnRvb2x0aXAub2Zmc2V0SGVpZ2h0LChpPWEtZS8yKTw9Nj8oYT02K2UvMix0aGlzLnRvb2x0aXBQb2ludGVyLnN0eWxlLm1hcmdpbkxlZnQ9aS02K1wicHhcIik6dC02PD1pK2U/KGE9dC02LWUvMix0aGlzLnRvb2x0aXBQb2ludGVyLnN0eWxlLm1hcmdpbkxlZnQ9LTEqKHQtNi1sLnBhZ2VYLWUvMikrXCJweFwiKTp0aGlzLnRvb2x0aXBQb2ludGVyLnN0eWxlLm1hcmdpbkxlZnQ9XCIwcHhcIixMLTEyLW88PTY/KHRoaXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLXRvb2x0aXAtZmxpcHBlZFwiKSxMKz0zMik6KHRoaXMudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLXRvb2x0aXAtZmxpcHBlZFwiKSxMLT0xMiksdGhpcy50b29sdGlwLnN0eWxlLmxlZnQ9YStcInB4XCIsdGhpcy50b29sdGlwLnN0eWxlLnRvcD1MK1wicHhcIil9LGEucHJvdG90eXBlLmVycm9yPWZ1bmN0aW9uKGwpeyhjb25zb2xlLmVycm9yfHxjb25zb2xlLmxvZykoXCJzdmdNYXAgZXJyb3I6IFwiKyhsfHxcIlVua25vd24gZXJyb3JcIikpfSxhLnByb3RvdHlwZS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGwsdCxlLG8pe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobCk7cmV0dXJuIHQmJih0PXQuc3BsaXQoXCIgXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe2kuY2xhc3NMaXN0LmFkZChsKX0pLG8mJihpLmlubmVySFRNTD1vKSxlJiZlLmFwcGVuZENoaWxkKGkpLGl9LGEucHJvdG90eXBlLm51bWJlcldpdGhDb21tYXM9ZnVuY3Rpb24obCx0KXtyZXR1cm4gbC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csdHx8XCIsXCIpfSxhLnByb3RvdHlwZS5nZXRDb2xvcj1mdW5jdGlvbihsLHQsZSl7bD1sLnNsaWNlKC02KSx0PXQuc2xpY2UoLTYpLGU9cGFyc2VGbG9hdChlKS50b0ZpeGVkKDEpO3ZhciBvPU1hdGguY2VpbChwYXJzZUludChsLnN1YnN0cmluZygwLDIpLDE2KSplK3BhcnNlSW50KHQuc3Vic3RyaW5nKDAsMiksMTYpKigxLWUpKSxpPU1hdGguY2VpbChwYXJzZUludChsLnN1YnN0cmluZygyLDQpLDE2KSplK3BhcnNlSW50KHQuc3Vic3RyaW5nKDIsNCksMTYpKigxLWUpKSxlPU1hdGguY2VpbChwYXJzZUludChsLnN1YnN0cmluZyg0LDYpLDE2KSplK3BhcnNlSW50KHQuc3Vic3RyaW5nKDQsNiksMTYpKigxLWUpKTtyZXR1cm5cIiNcIit0aGlzLmdldEhleChvKSt0aGlzLmdldEhleChpKSt0aGlzLmdldEhleChlKX0sYS5wcm90b3R5cGUuZ2V0SGV4PWZ1bmN0aW9uKGwpe3JldHVybihcIjBcIisobD1sLnRvU3RyaW5nKDE2KSkpLnNsaWNlKC0yKX0sYS5wcm90b3R5cGUuZ2V0Q291bnRyeU5hbWU9ZnVuY3Rpb24obCl7cmV0dXJuKHRoaXMub3B0aW9ucy5jb3VudHJ5TmFtZXMmJnRoaXMub3B0aW9ucy5jb3VudHJ5TmFtZXNbbF0/dGhpcy5vcHRpb25zLmNvdW50cnlOYW1lczp0aGlzLmNvdW50cmllcylbbF19LGF9IWZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJzdmctcGFuLXpvb21cIl0sZnVuY3Rpb24obCl7cmV0dXJuIHQuc3ZnTWFwPWUobCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10LnN2Z01hcD1lKHJlcXVpcmUoXCJzdmctcGFuLXpvb21cIikpOnQuc3ZnTWFwPWUodC5zdmdQYW5ab29tKX0odGhpcyxmdW5jdGlvbihsKXtyZXR1cm4gc3ZnTWFwV3JhcHBlcihsKX0pOyIsImNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBidXR0b24sIGJ1dHRvbkNsb3NlIH0pIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BvcHVwU2VsZWN0b3J9YCk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YnV0dG9ufWApO1xuICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7YnV0dG9uQ2xvc2V9YCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsbEluZm8obmFtZSwgam9iLCBhYm91dCkge1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqb2JcIik7XG4gICAgdGhpcy5qb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHRcIik7XG4gICAgdGhpcy5hYm91dC50ZXh0Q29udGVudCA9IGFib3V0O1xuICB9XG5cbiAgZmlsbFVzZXJJbmZvKG5hbWUsIGpvYiwgYWJvdXQpIHtcbiAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUyXCIpO1xuICAgIHRoaXMubmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvYjJcIik7XG4gICAgdGhpcy5qb2IudGV4dENvbnRlbnQgPSBqb2I7XG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHQyXCIpO1xuICAgIHRoaXMuYWJvdXQudGV4dENvbnRlbnQgPSBhYm91dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xuaW1wb3J0IHN2Z01hcCBmcm9tIFwic3ZnbWFwXCI7XG5pbXBvcnQgXCJzdmdtYXAvZGlzdC9zdmdNYXAubWluLmNzc1wiO1xuXG5jb25zdCBwb3B1cCA9IG5ldyBQb3B1cCh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiI3BvcHVwXCIsXG4gIGJ1dHRvbjogXCIjYnV0dG9uMVwiLFxuICBidXR0b25DbG9zZTogXCIucG9wdXBfX2J1dHRvblwiLFxufSk7XG5cbmNvbnN0IHBvcHVwMiA9IG5ldyBQb3B1cCh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiI3BvcHVwMlwiLFxuICBidXR0b246IFwiI2J1dHRvbjJcIixcbiAgYnV0dG9uQ2xvc2U6IFwiI2J1dHRvbjNcIixcbn0pO1xuXG5wb3B1cC5maWxsSW5mbyhcbiAgXCJBbmkgUGV0cmljaG9yXCIsXG4gIFwiRGF0YSBBbmFseXN0XCIsXG4gIFwiQW5pIFBldHJpY2hvciBpcyBhIEJyb29rbHluLWJhc2VkIGRhdGEgYW5hbHlzdC4gU2hlIGhhcyBhIGJhY2tncm91bmQgaW4gb3BlcmF0aW9ucyAmIGxvZ2lzdGljcyBpbiB0aGUgc3VzdGFpbmFiaWxpdHkgZm9vZCBzZWN0b3IsIHByaW1hcmlseSB3b3JraW5nIHRvIGJyaW5nIGxvY2FsbHkgZmFybWVkIGluZ3JlZGllbnRzIHRvIHVyYmFuIHJlc2lkZW50cy4gU2hlIGJlbGlldmVzIHRoYXQgYmlnIGRhdGEgY2FuIGJlIHVzZWQgdG8gZWZmZWN0IGdvb2QgaW4gdGhlIHdvcmxkLlwiXG4pO1xuXG5wb3B1cDIuZmlsbFVzZXJJbmZvKFxuICBcIkt1cnRuZXkgSm9zZXBoXCIsXG4gIFwiU29mdHdhcmUgRW5naW5lZXJcIixcbiAgXCJLdXJ0bmV5IEpvc2VwaCBpcyBhbiBPcmxhbmRvIGJhc2VkIHNvZnR3YXJlIGVuZ2luZWVyIHdobyBhaW1zIHRvIHByb3ZpZGUgY29tcGFuaWVzIGFuZCBsb2NhbCBidXNpbmVzc2VzIHdpdGggZWZmZWN0aXZlIHNvbHV0aW9ucyB0aG91Z2ggd2ViIGRldmVsb3BtZW50LlwiXG4pO1xuXG5wb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXAyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbm5ldyBzdmdNYXAoe1xuICB0YXJnZXRFbGVtZW50SUQ6IFwic3ZnTWFwXCIsXG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7XG4gICAgICBNVzoge1xuICAgICAgICBuYW1lOiBcIk1XIG91dHB1dCBwZXIgY291bnRyeVwiLFxuICAgICAgICBmb3JtYXQ6IFwiezB9IFVTRFwiLFxuICAgICAgICB0aG91c2FuZFNlcGFyYXRvcjogXCIsXCIsXG4gICAgICAgIHRocmVzaG9sZE1heDogNTAwMDAsXG4gICAgICAgIHRocmVzaG9sZE1pbjogMTAwMCxcbiAgICAgIH0sXG4gICAgICBjaGFuZ2U6IHtcbiAgICAgICAgbmFtZTogXCJDaGFuZ2UgdG8geWVhciBiZWZvcmVcIixcbiAgICAgICAgZm9ybWF0OiBcInswfSAlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXBwbHlEYXRhOiBcIk1XXCIsXG4gICAgdmFsdWVzOiB7XG4gICAgICBBRjogeyBNVzogNTg3LCBjaGFuZ2U6IDQuNzMsIGNvbG9yOiBcImJsdWVcIiB9LFxuICAgICAgQUw6IHsgTVc6IDQ1ODMsIGNoYW5nZTogMTEuMDksIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICAgIERaOiB7IE1XOiA0MjkzLCBjaGFuZ2U6IDEwLjAxLCBjb2xvcjogXCJ5ZWxsb3dcIiB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJTdmdQYW5ab29tIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdmdVdGlscyIsImVuYWJsZSIsImluc3RhbmNlIiwiZGVmcyIsInN2ZyIsInF1ZXJ5U2VsZWN0b3IiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsInN2Z05TIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZUVsIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsInpvb21Hcm91cCIsIndpZHRoIiwiaGVpZ2h0IiwiX2NyZWF0ZVpvb21JbiIsIl9jcmVhdGVab29tUmVzZXQiLCJfY3JlYXRlWm9vbU91dCIsImNvbnRyb2xJY29ucyIsInpvb21JbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRQdWJsaWNJbnN0YW5jZSIsInpvb21JbkJhY2tncm91bmQiLCJ6b29tSW5TaGFwZSIsInJlc2V0UGFuWm9vbUNvbnRyb2wiLCJyZXNldCIsInJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kIiwicmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMSIsInJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIiLCJ6b29tT3V0Iiwiem9vbU91dEJhY2tncm91bmQiLCJ6b29tT3V0U2hhcGUiLCJkaXNhYmxlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiVXRpbHMiLCJTaGFkb3dWaWV3cG9ydCIsInZpZXdwb3J0Iiwib3B0aW9ucyIsImluaXQiLCJwcm90b3R5cGUiLCJvcmlnaW5hbFN0YXRlIiwiem9vbSIsIngiLCJ5IiwiYWN0aXZlU3RhdGUiLCJ1cGRhdGVDVE1DYWNoZWQiLCJwcm94eSIsInVwZGF0ZUNUTSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZVJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlZnJlc2hSYXRlIiwidmlld0JveCIsImNhY2hlVmlld0JveCIsIm5ld0NUTSIsInByb2Nlc3NDVE0iLCJzZXRDVE0iLCJzdmdWaWV3Qm94IiwiZ2V0QXR0cmlidXRlIiwidmlld0JveFZhbHVlcyIsInNwbGl0IiwiZmlsdGVyIiwidiIsIm1hcCIsInBhcnNlRmxvYXQiLCJNYXRoIiwibWluIiwidXBkYXRlQ1RNT25OZXh0RnJhbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzaW1wbGVWaWV3Qm94Q2FjaGUiLCJiQm94IiwiZ2V0QkJveCIsImdldFZpZXdCb3giLCJleHRlbmQiLCJnZXRDVE0iLCJmaXQiLCJjb250YWluIiwibmV3U2NhbGUiLCJtYXgiLCJhIiwiZCIsImUiLCJmIiwiY2VudGVyIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRPcmlnaW5hbFN0YXRlIiwiZ2V0U3RhdGUiLCJnZXRab29tIiwiZ2V0UmVsYXRpdmVab29tIiwiY29tcHV0ZVJlbGF0aXZlWm9vbSIsInNjYWxlIiwiZ2V0UGFuIiwic2FmZUNUTSIsImNyZWF0ZVNWR01hdHJpeCIsImIiLCJjIiwid2lsbFpvb20iLCJpc1pvb21EaWZmZXJlbnQiLCJ3aWxsUGFuIiwiaXNQYW5EaWZmZXJlbnQiLCJiZWZvcmVab29tIiwidXBkYXRlQ2FjaGUiLCJvblpvb20iLCJwcmV2ZW50UGFuIiwiYmVmb3JlUGFuIiwicHJldmVudFBhblgiLCJwcmV2ZW50UGFuWSIsImlzT2JqZWN0IiwiaXNOdW1iZXIiLCJvblBhbiIsInBlbmRpbmdVcGRhdGUiLCJjYWxsIiwid2luZG93IiwiY3RtIiwib25VcGRhdGVkQ1RNIiwiV2hlZWwiLCJDb250cm9sSWNvbnMiLCJvcHRpb25zRGVmYXVsdHMiLCJ2aWV3cG9ydFNlbGVjdG9yIiwicGFuRW5hYmxlZCIsImNvbnRyb2xJY29uc0VuYWJsZWQiLCJ6b29tRW5hYmxlZCIsImRibENsaWNrWm9vbUVuYWJsZWQiLCJtb3VzZVdoZWVsWm9vbUVuYWJsZWQiLCJwcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0Iiwiem9vbVNjYWxlU2Vuc2l0aXZpdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsImN1c3RvbUV2ZW50c0hhbmRsZXIiLCJldmVudHNMaXN0ZW5lckVsZW1lbnQiLCJwYXNzaXZlTGlzdGVuZXJPcHRpb24iLCJwYXNzaXZlIiwidGhhdCIsInNldHVwU3ZnQXR0cmlidXRlcyIsInN0YXRlIiwiYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQiLCJnZXRPckNyZWF0ZVZpZXdwb3J0Iiwib2xkU2NhbGUiLCJvbGRQb2ludCIsIm5ld1BvaW50IiwicG9pbnQiLCJwdWJsaWNJbnN0YW5jZSIsInNldEJlZm9yZVpvb20iLCJzZXRPblpvb20iLCJzZXRCZWZvcmVQYW4iLCJzZXRPblBhbiIsInNldE9uVXBkYXRlZENUTSIsImxhc3RNb3VzZVdoZWVsRXZlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsInNldHVwSGFuZGxlcnMiLCJwcmV2RXZ0IiwiZXZlbnRMaXN0ZW5lcnMiLCJtb3VzZWRvd24iLCJldnQiLCJyZXN1bHQiLCJoYW5kbGVNb3VzZURvd24iLCJ0b3VjaHN0YXJ0IiwibW91c2V1cCIsImhhbmRsZU1vdXNlVXAiLCJ0b3VjaGVuZCIsIm1vdXNlbW92ZSIsImhhbmRsZU1vdXNlTW92ZSIsInRvdWNobW92ZSIsIm1vdXNlbGVhdmUiLCJ0b3VjaGxlYXZlIiwidG91Y2hjYW5jZWwiLCJzdmdFbGVtZW50IiwiaGFsdEV2ZW50TGlzdGVuZXJzIiwibGVuZ3RoIiwiaSIsImhhc093blByb3BlcnR5IiwiZXZlbnQiLCJlbmFibGVNb3VzZVdoZWVsWm9vbSIsIndoZWVsTGlzdGVuZXIiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaXNQYXNzaXZlTGlzdGVuZXIiLCJvbiIsImRpc2FibGVNb3VzZVdoZWVsWm9vbSIsIm9mZiIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJkZWx0YSIsImRlbHRhWSIsInRpbWVEZWx0YSIsImRpdmlkZXIiLCJkZWx0YU1vZGUiLCJ3aGVlbERlbHRhIiwiYWJzIiwibG9nIiwiaW52ZXJzZWRTY3JlZW5DVE0iLCJnZXRTY3JlZW5DVE0iLCJpbnZlcnNlIiwicmVsYXRpdmVNb3VzZVBvaW50IiwiZ2V0RXZlbnRQb2ludCIsIm1hdHJpeFRyYW5zZm9ybSIsInBvdyIsInpvb21BdFBvaW50Iiwiem9vbVNjYWxlIiwiem9vbUFic29sdXRlIiwib2xkQ1RNIiwicmVsYXRpdmVQb2ludCIsIm1vZGlmaWVyIiwidHJhbnNsYXRlIiwibXVsdGlwbHkiLCJhYnNvbHV0ZSIsImdldFN2Z0NlbnRlclBvaW50IiwicHVibGljWm9vbSIsImNvbXB1dGVGcm9tUmVsYXRpdmVab29tIiwicHVibGljWm9vbUF0UG9pbnQiLCJnZXRUeXBlIiwiY3JlYXRlU1ZHUG9pbnQiLCJFcnJvciIsInJlc2V0Wm9vbSIsInJlc2V0UGFuIiwicGFuIiwiaGFuZGxlRGJsQ2xpY2siLCJ0YXJnZXRDbGFzcyIsInRhcmdldCIsImluZGV4T2YiLCJ6b29tRmFjdG9yIiwic2hpZnRLZXkiLCJtb3VzZUFuZFRvdWNoTm9ybWFsaXplIiwiaXNEYmxDbGljayIsImZpcnN0RXZlbnRDVE0iLCJzdGF0ZU9yaWdpbiIsInZpZXdwb3J0Q1RNIiwidXBkYXRlQkJveCIsInBhbkJ5IiwicmVzaXplIiwiZGlzYWJsZUNvbnRyb2xJY29ucyIsImVuYWJsZUNvbnRyb2xJY29ucyIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5zdGFuY2VzU3RvcmUiLCJwaSIsImVuYWJsZVBhbiIsImRpc2FibGVQYW4iLCJpc1BhbkVuYWJsZWQiLCJmbiIsImVuYWJsZVpvb20iLCJkaXNhYmxlWm9vbSIsImlzWm9vbUVuYWJsZWQiLCJpc0NvbnRyb2xJY29uc0VuYWJsZWQiLCJlbmFibGVEYmxDbGlja1pvb20iLCJkaXNhYmxlRGJsQ2xpY2tab29tIiwiaXNEYmxDbGlja1pvb21FbmFibGVkIiwiaXNNb3VzZVdoZWVsWm9vbUVuYWJsZWQiLCJzZXRab29tU2NhbGVTZW5zaXRpdml0eSIsInNldE1pblpvb20iLCJzZXRNYXhab29tIiwiem9vbUJ5Iiwiem9vbUF0UG9pbnRCeSIsImdldFNpemVzIiwicmVhbFpvb20iLCJzdmdQYW5ab29tIiwiZWxlbWVudE9yU2VsZWN0b3IiLCJnZXRTdmciLCJwdXNoIiwiX2Jyb3dzZXIiLCJkb2N1bWVudE1vZGUiLCJ4bWxOUyIsInhtbG5zTlMiLCJ4bGlua05TIiwiZXZOUyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2VsZWN0b3IiLCJpc0VsZW1lbnQiLCJjaGlsZE5vZGVzIiwiQXJyYXkiLCJzbGljZSIsImNoaWxkcmVuIiwiZWwiLCJub2RlTmFtZSIsInZpZXdwb3J0SWQiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJzdmdDaGlsZHJlbiIsImNsYXNzTmFtZXMiLCJqb2luIiwic2V0QXR0cmlidXRlTlMiLCJ0b0xvd2VyQ2FzZSIsImludGVybmV0RXhwbG9yZXJSZWRpc3BsYXlJbnRlcnZhbCIsInJlZnJlc2hEZWZzR2xvYmFsIiwidGhyb3R0bGUiLCJhbGxEZWZzIiwicXVlcnlTZWxlY3RvckFsbCIsImFsbERlZnNDb3VudCIsInRoaXNEZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZWxlbWVudCIsIm1hdHJpeCIsInMiLCJ0cmFuc2Zvcm0iLCJzZXRUaW1lb3V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJwcmVmaXgiLCJfYWRkRXZlbnRMaXN0ZW5lciIsIl9yZW1vdmVFdmVudExpc3RlbmVyIiwic3VwcG9ydCIsImZucyIsInBhc3NpdmVPcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwib25tb3VzZXdoZWVsIiwidW5kZWZpbmVkIiwiY3JlYXRlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9yaWdpbmFsRXZlbnQiLCJzcmNFbGVtZW50IiwidHlwZSIsImRlbHRhWCIsImRlbGF0WiIsIndoZWVsRGVsdGFYIiwiZGV0YWlsIiwiZ2V0Q2FsbGJhY2siLCJyZW1vdmVDYWxsYmFjayIsInNwbGljZSIsIl9hZGRXaGVlbExpc3RlbmVyIiwiZWxlbSIsImV2ZW50TmFtZSIsImNiIiwiX3JlbW92ZVdoZWVsTGlzdGVuZXIiLCJhZGRXaGVlbExpc3RlbmVyIiwicmVtb3ZlV2hlZWxMaXN0ZW5lciIsInNvdXJjZSIsInByb3AiLCJvIiwiSFRNTEVsZW1lbnQiLCJTVkdFbGVtZW50IiwiU1ZHU1ZHRWxlbWVudCIsIm5vZGVUeXBlIiwiT2JqZWN0IiwidG9TdHJpbmciLCJuIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIlN0cmluZyIsInRhZ05hbWUiLCJjb250ZW50RG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRTVkdEb2N1bWVudCIsImNvbnRleHQiLCJhcHBseSIsImFyZ3VtZW50cyIsInRvdWNoZXMiLCJwYWdlWCIsInJlY3QiLCJsZWZ0IiwicGFnZVkiLCJ0b3AiLCJ0aW1lU3RhbXBEaWZmIiwidGltZVN0YW1wIiwidG91Y2hlc0Rpc3RhbmNlIiwic3FydCIsImdldFRpbWUiLCJmdW5jIiwid2FpdCIsImFyZ3MiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsImZsb29yIiwicmVxdWVzdFRpbWVvdXQiLCJzdmdNYXBXcmFwcGVyIiwibCIsImFzc2lnbiIsInRhcmdldEVsZW1lbnRJRCIsImluaXRpYWxab29tIiwiaW5pdGlhbFBhbiIsIm1vdXNlV2hlZWxab29tV2l0aEtleSIsIm1vdXNlV2hlZWxLZXlNZXNzYWdlIiwibW91c2VXaGVlbEtleU1lc3NhZ2VNYWMiLCJjb2xvck1heCIsImNvbG9yTWluIiwiY29sb3JOb0RhdGEiLCJtYW51YWxDb2xvckF0dHJpYnV0ZSIsImZsYWdUeXBlIiwiZmxhZ1VSTCIsImhpZGVGbGFnIiwiaGlkZU1pc3NpbmdEYXRhIiwibm9EYXRhVGV4dCIsInRvdWNoTGluayIsInNob3dab29tUmVzZXQiLCJvbkdldFRvb2x0aXAiLCJ0IiwiY291bnRyaWVzIiwiRUgiLCJDcmltZWEiLCJzaG93Q29udGluZW50U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsImVycm9yIiwiZGF0YSIsImlkIiwid3JhcHBlciIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5lciIsImFkZE1vdXNlV2hlZWxab29tTm90aWNlIiwiYWRkTW91c2VXaGVlbFpvb21XaXRoS2V5RXZlbnRzIiwibWFwQ29udGFpbmVyIiwiY3JlYXRlTWFwIiwiYXBwbHlEYXRhIiwiQUYiLCJBWCIsIkFMIiwiRFoiLCJBUyIsIkFEIiwiQU8iLCJBSSIsIkFRIiwiQUciLCJBUiIsIkFNIiwiQVciLCJBVSIsIkFUIiwiQVoiLCJCUyIsIkJIIiwiQkQiLCJCQiIsIkJZIiwiQkUiLCJCWiIsIkJKIiwiQk0iLCJCVCIsIkJPIiwiQkEiLCJCVyIsIkJSIiwiSU8iLCJWRyIsIkJOIiwiQkciLCJCRiIsIkJJIiwiS0giLCJDTSIsIkNBIiwiQ1YiLCJCUSIsIktZIiwiQ0YiLCJURCIsIkNMIiwiQ04iLCJDWCIsIkNDIiwiQ08iLCJLTSIsIkNHIiwiQ0siLCJDUiIsIkhSIiwiQ1UiLCJDVyIsIkNZIiwiQ1oiLCJDRCIsIkRLIiwiREoiLCJETSIsIkRPIiwiRUMiLCJFRyIsIlNWIiwiR1EiLCJFUiIsIkVFIiwiRVQiLCJGSyIsIkZPIiwiRk0iLCJGSiIsIkZJIiwiRlIiLCJHRiIsIlBGIiwiVEYiLCJHQSIsIkdNIiwiR0UiLCJERSIsIkdIIiwiR0kiLCJHUiIsIkdMIiwiR0QiLCJHUCIsIkdVIiwiR1QiLCJHTiIsIkdXIiwiR1kiLCJIVCIsIkhOIiwiSEsiLCJIVSIsIklTIiwiSU4iLCJJRCIsIklSIiwiSVEiLCJJRSIsIklNIiwiSUwiLCJJVCIsIkNJIiwiSk0iLCJKUCIsIkpFIiwiSk8iLCJLWiIsIktFIiwiS0kiLCJYSyIsIktXIiwiS0ciLCJMQSIsIkxWIiwiTEIiLCJMUyIsIkxSIiwiTFkiLCJMSSIsIkxUIiwiTFUiLCJNTyIsIk1LIiwiTUciLCJNVyIsIk1ZIiwiTVYiLCJNTCIsIk1UIiwiTUgiLCJNUSIsIk1SIiwiTVUiLCJZVCIsIk1YIiwiTUQiLCJNQyIsIk1OIiwiTUUiLCJNUyIsIk1BIiwiTVoiLCJNTSIsIk5BIiwiTlIiLCJOUCIsIk5MIiwiTkMiLCJOWiIsIk5JIiwiTkUiLCJORyIsIk5VIiwiTkYiLCJLUCIsIk1QIiwiTk8iLCJPTSIsIlBLIiwiUFciLCJQUyIsIlBBIiwiUEciLCJQWSIsIlBFIiwiUEgiLCJQTiIsIlBMIiwiUFQiLCJQUiIsIlFBIiwiUkUiLCJSTyIsIlJVIiwiUlciLCJTSCIsIktOIiwiTEMiLCJQTSIsIlZDIiwiV1MiLCJTTSIsIlNUIiwiU0EiLCJTTiIsIlJTIiwiU0MiLCJTTCIsIlNHIiwiU1giLCJTSyIsIlNJIiwiU0IiLCJTTyIsIlpBIiwiR1MiLCJLUiIsIlNTIiwiRVMiLCJMSyIsIlNEIiwiU1IiLCJTSiIsIlNaIiwiU0UiLCJDSCIsIlNZIiwiVFciLCJUSiIsIlRaIiwiVEgiLCJUTCIsIlRHIiwiVEsiLCJUTyIsIlRUIiwiVE4iLCJUUiIsIlRNIiwiVEMiLCJUViIsIlVHIiwiVUEiLCJBRSIsIkdCIiwiVVMiLCJVTSIsIlZJIiwiVVkiLCJVWiIsIlZVIiwiVkEiLCJWRSIsIlZOIiwiV0YiLCJZRSIsIlpNIiwiWlciLCJrZXlzIiwidmFsdWVzIiwiZm9yRWFjaCIsInBhcnNlSW50IiwidGhyZXNob2xkTWF4IiwidGhyZXNob2xkTWluIiwiY29sb3IiLCJnZXRDb2xvciIsImJpbmQiLCJlbW9qaUZsYWdzIiwiY29udGluZW50cyIsIkVBIiwiaXNvIiwibmFtZSIsIkVVIiwiT0MiLCJjcmVhdGVUb29sdGlwIiwibWFwV3JhcHBlciIsIm1hcEltYWdlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ6b29tTWFwIiwiem9vbUNvbnRyb2xJbiIsInpvb21Db250cm9sT3V0IiwiY29udGluZW50U2VsZWN0IiwidmFsdWUiLCJ6b29tQ29udGluZW50IiwibWFwUGF0aHMiLCJ0b29sdGlwTW92ZUV2ZW50IiwibW92ZVRvb2x0aXAiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXRUb29sdGlwQ29udGVudCIsImdldFRvb2x0aXBDb250ZW50Iiwic2hvd1Rvb2x0aXAiLCJsaW5rIiwibGlua1RhcmdldCIsIm9wZW4iLCJoaWRlVG9vbHRpcCIsInJlbW92ZSIsIm1hcFBhblpvb20iLCJzZXRDb250cm9sU3RhdHVzZXMiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIkwiLCJ0b29sdGlwIiwiaW5uZXJIVE1MIiwiZ2V0Q291bnRyeU5hbWUiLCJmbG9hdGluZ051bWJlcnMiLCJ0b0ZpeGVkIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJudW1iZXJXaXRoQ29tbWFzIiwiZm9ybWF0Iiwiem9vbUNvbnRyb2xSZXNldCIsImNvbnRhaW5zIiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsImFwcGVuZCIsInNob3dNb3VzZVdoZWVsWm9vbU5vdGljZSIsIm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuIiwiYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCIsImhpZGVNb3VzZVdoZWVsWm9vbU5vdGljZSIsImJsb2NrTW91c2VXaGVlbFpvb21Ob3RpY2UiLCJtb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlblRpbWVvdXQiLCJib2R5Iiwia2V5IiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRvb2x0aXBDb250ZW50IiwidG9vbHRpcFBvaW50ZXIiLCJpbm5lcldpZHRoIiwibWFyZ2luTGVmdCIsImNvbnNvbGUiLCJjZWlsIiwic3Vic3RyaW5nIiwiZ2V0SGV4IiwiY291bnRyeU5hbWVzIiwiZGVmaW5lIiwiYW1kIiwic3ZnTWFwIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiYnV0dG9uIiwiYnV0dG9uQ2xvc2UiLCJfcG9wdXBFbGVtZW50IiwiX2J1dHRvbkVsZW1lbnQiLCJfYnV0dG9uIiwiY2xvc2UiLCJqb2IiLCJhYm91dCIsInBvcHVwIiwicG9wdXAyIiwiZmlsbEluZm8iLCJmaWxsVXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=