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
var _values;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBMUpBLGtDQTJKQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBM0pBLGtDQTRKQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBNUpBLGtDQTZKQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBN0pBLGtDQThKQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBOUpBLGtDQStKQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBL0pBLGtDQWdLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBaEtBLGtDQWlLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBaktBLGtDQWtLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBbEtBLGtDQW1LQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBbktBLGtDQW9LQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBcEtBLGtDQXFLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBcktBLGtDQXNLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBdEtBLGtDQXVLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBdktBLGtDQXdLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBeEtBLGtDQXlLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBektBLGtDQTBLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBMUtBLGtDQTJLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBM0tBLGtDQTRLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBNUtBLGtDQTZLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBN0tBLGtDQThLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBOUtBLGtDQStLQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBL0tBLGtDQWdMQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBaExBLGtDQWlMQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBakxBLGtDQWtMQTtNQUFFbk4sRUFBRSxFQUFFLHNCQUFOO01BQThCd0gsS0FBSyxFQUFFLFNBQXJDO01BQWdEMkYsRUFBRSxFQUFFO0lBQXBELENBbExBO0VBWkY7QUFGRyxDQUFYLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvYnJvd3NlcmlmeS5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvY29udHJvbC1pY29ucy5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYW4tem9vbS9zcmMvc2hhZG93LXZpZXdwb3J0LmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy9zdmctcGFuLXpvb20uanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL3N2Zy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmctcGFuLXpvb20vc3JjL3VuaXdoZWVsLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3ZnLXBhbi16b29tL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdmdtYXAvZGlzdC9zdmdNYXAubWluLmpzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N2Z21hcC9kaXN0L3N2Z01hcC5taW4uY3NzP2E4N2YiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlaWx1cy13ZWJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWlsdXMtd2ViYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVpbHVzLXdlYmFwcC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3ZnUGFuWm9vbSA9IHJlcXVpcmUoXCIuL3N2Zy1wYW4tem9vbS5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdmdQYW5ab29tO1xuIiwidmFyIFN2Z1V0aWxzID0gcmVxdWlyZShcIi4vc3ZnLXV0aWxpdGllc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVuYWJsZTogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICAvLyBTZWxlY3QgKGFuZCBjcmVhdGUgaWYgbmVjZXNzYXJ5KSBkZWZzXG4gICAgdmFyIGRlZnMgPSBpbnN0YW5jZS5zdmcucXVlcnlTZWxlY3RvcihcImRlZnNcIik7XG4gICAgaWYgKCFkZWZzKSB7XG4gICAgICBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcImRlZnNcIik7XG4gICAgICBpbnN0YW5jZS5zdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHN0eWxlIGVsZW1lbnQsIGFuZCBjcmVhdGUgaXQgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIHZhciBzdHlsZUVsID0gZGVmcy5xdWVyeVNlbGVjdG9yKFwic3R5bGUjc3ZnLXBhbi16b29tLWNvbnRyb2xzLXN0eWxlc1wiKTtcbiAgICBpZiAoIXN0eWxlRWwpIHtcbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJzdHlsZVwiKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xzLXN0eWxlc1wiKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID1cbiAgICAgICAgXCIuc3ZnLXBhbi16b29tLWNvbnRyb2wgeyBjdXJzb3I6IHBvaW50ZXI7IGZpbGw6IGJsYWNrOyBmaWxsLW9wYWNpdHk6IDAuMzMzOyB9IC5zdmctcGFuLXpvb20tY29udHJvbDpob3ZlciB7IGZpbGwtb3BhY2l0eTogMC44OyB9IC5zdmctcGFuLXpvb20tY29udHJvbC1iYWNrZ3JvdW5kIHsgZmlsbDogd2hpdGU7IGZpbGwtb3BhY2l0eTogMC41OyB9IC5zdmctcGFuLXpvb20tY29udHJvbC1iYWNrZ3JvdW5kIHsgZmlsbC1vcGFjaXR5OiAwLjg7IH1cIjtcbiAgICAgIGRlZnMuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIC8vIFpvb20gR3JvdXBcbiAgICB2YXIgem9vbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcImdcIik7XG4gICAgem9vbUdyb3VwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xzXCIpO1xuICAgIHpvb21Hcm91cC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJ0cmFuc2xhdGUoXCIgK1xuICAgICAgICAoaW5zdGFuY2Uud2lkdGggLSA3MCkgK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIChpbnN0YW5jZS5oZWlnaHQgLSA3NikgK1xuICAgICAgICBcIikgc2NhbGUoMC43NSlcIlxuICAgICk7XG4gICAgem9vbUdyb3VwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xcIik7XG5cbiAgICAvLyBDb250cm9sIGVsZW1lbnRzXG4gICAgem9vbUdyb3VwLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVpvb21JbihpbnN0YW5jZSkpO1xuICAgIHpvb21Hcm91cC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVab29tUmVzZXQoaW5zdGFuY2UpKTtcbiAgICB6b29tR3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlWm9vbU91dChpbnN0YW5jZSkpO1xuXG4gICAgLy8gRmluYWxseSBhcHBlbmQgY3JlYXRlZCBlbGVtZW50XG4gICAgaW5zdGFuY2Uuc3ZnLmFwcGVuZENoaWxkKHpvb21Hcm91cCk7XG5cbiAgICAvLyBDYWNoZSBjb250cm9sIGluc3RhbmNlXG4gICAgaW5zdGFuY2UuY29udHJvbEljb25zID0gem9vbUdyb3VwO1xuICB9LFxuXG4gIF9jcmVhdGVab29tSW46IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIHpvb21JbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJnXCIpO1xuICAgIHpvb21Jbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN2Zy1wYW4tem9vbS16b29tLWluXCIpO1xuICAgIHpvb21Jbi5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMzAuNSA1KSBzY2FsZSgwLjAxNSlcIik7XG4gICAgem9vbUluLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xcIik7XG4gICAgem9vbUluLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS56b29tSW4oKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgem9vbUluLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnpvb21JbigpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHZhciB6b29tSW5CYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcInJlY3RcIik7IC8vIFRPRE8gY2hhbmdlIHRoZXNlIGJhY2tncm91bmQgc3BhY2UgZmlsbGVycyB0byByb3VuZGVkIHJlY3RhbmdsZXMgc28gdGhleSBsb29rIHByZXR0aWVyXG4gICAgem9vbUluQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKTtcbiAgICB6b29tSW5CYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xuICAgIHpvb21JbkJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNTAwXCIpOyAvLyBsYXJnZXIgdGhhbiBleHBlY3RlZCBiZWNhdXNlIHRoZSB3aG9sZSBncm91cCBpcyB0cmFuc2Zvcm1lZCB0byBzY2FsZSBkb3duXG4gICAgem9vbUluQmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNDAwXCIpO1xuICAgIHpvb21JbkJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbC1iYWNrZ3JvdW5kXCIpO1xuICAgIHpvb21Jbi5hcHBlbmRDaGlsZCh6b29tSW5CYWNrZ3JvdW5kKTtcblxuICAgIHZhciB6b29tSW5TaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJwYXRoXCIpO1xuICAgIHpvb21JblNoYXBlLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTI4MCA1NzZ2MTI4cTAgMjYgLTE5IDQ1dC00NSAxOWgtMzIwdjMyMHEwIDI2IC0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTMyMGgtMzIwcS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMTI4cTAgLTI2IDE5IC00NXQ0NSAtMTloMzIwdi0zMjBxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXYzMjBoMzIwcTI2IDAgNDUgMTl0MTkgNDV6TTE1MzYgMTEyMHYtOTYwIHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXpcIlxuICAgICk7XG4gICAgem9vbUluU2hhcGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdmctcGFuLXpvb20tY29udHJvbC1lbGVtZW50XCIpO1xuICAgIHpvb21Jbi5hcHBlbmRDaGlsZCh6b29tSW5TaGFwZSk7XG5cbiAgICByZXR1cm4gem9vbUluO1xuICB9LFxuXG4gIF9jcmVhdGVab29tUmVzZXQ6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgLy8gcmVzZXRcbiAgICB2YXIgcmVzZXRQYW5ab29tQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTdmdVdGlscy5zdmdOUywgXCJnXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmctcGFuLXpvb20tcmVzZXQtcGFuLXpvb21cIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoNSAzNSkgc2NhbGUoMC40KVwiKTtcbiAgICByZXNldFBhblpvb21Db250cm9sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2xcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCkucmVzZXQoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS5yZXNldCgpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHZhciByZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFN2Z1V0aWxzLnN2Z05TLFxuICAgICAgXCJyZWN0XCJcbiAgICApOyAvLyBUT0RPIGNoYW5nZSB0aGVzZSBiYWNrZ3JvdW5kIHNwYWNlIGZpbGxlcnMgdG8gcm91bmRlZCByZWN0YW5nbGVzIHNvIHRoZXkgbG9vayBwcmV0dGllclxuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInhcIiwgXCIyXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcInlcIiwgXCIyXCIpO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xCYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTgyXCIpOyAvLyBsYXJnZXIgdGhhbiBleHBlY3RlZCBiZWNhdXNlIHRoZSB3aG9sZSBncm91cCBpcyB0cmFuc2Zvcm1lZCB0byBzY2FsZSBkb3duXG4gICAgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNThcIik7XG4gICAgcmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJzdmctcGFuLXpvb20tY29udHJvbC1iYWNrZ3JvdW5kXCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuYXBwZW5kQ2hpbGQocmVzZXRQYW5ab29tQ29udHJvbEJhY2tncm91bmQpO1xuXG4gICAgdmFyIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBTdmdVdGlscy5zdmdOUyxcbiAgICAgIFwicGF0aFwiXG4gICAgKTtcbiAgICByZXNldFBhblpvb21Db250cm9sU2hhcGUxLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMzMuMDUxLDIwLjYzMmMtMC43NDItMC40MDYtMS44NTQtMC42MDktMy4zMzgtMC42MDloLTcuOTY5djkuMjgxaDcuNzY5YzEuNTQzLDAsMi43MDEtMC4xODgsMy40NzMtMC41NjJjMS4zNjUtMC42NTYsMi4wNDgtMS45NTMsMi4wNDgtMy44OTFDMzUuMDMyLDIyLjc1NywzNC4zNzIsMjEuMzUxLDMzLjA1MSwyMC42MzJ6XCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTEuc2V0QXR0cmlidXRlKFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJzdmctcGFuLXpvb20tY29udHJvbC1lbGVtZW50XCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuYXBwZW5kQ2hpbGQocmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMSk7XG5cbiAgICB2YXIgcmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFN2Z1V0aWxzLnN2Z05TLFxuICAgICAgXCJwYXRoXCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xNzAuMjMxLDAuNUgxNS44NDdDNy4xMDIsMC41LDAuNSw1LjcwOCwwLjUsMTEuODR2MzguODYxQzAuNSw1Ni44MzMsNy4xMDIsNjEuNSwxNS44NDcsNjEuNWgxNTQuMzg0YzguNzQ1LDAsMTUuMjY5LTQuNjY3LDE1LjI2OS0xMC43OThWMTEuODRDMTg1LjUsNS43MDgsMTc4Ljk3NiwwLjUsMTcwLjIzMSwwLjV6IE00Mi44MzcsNDguNTY5aC03Ljk2OWMtMC4yMTktMC43NjYtMC4zNzUtMS4zODMtMC40NjktMS44NTJjLTAuMTg4LTAuOTY5LTAuMjg5LTEuOTYxLTAuMzA1LTIuOTc3bC0wLjA0Ny0zLjIxMWMtMC4wMy0yLjIwMy0wLjQxLTMuNjcyLTEuMTQyLTQuNDA2Yy0wLjczMi0wLjczNC0yLjEwMy0xLjEwMi00LjExMy0xLjEwMmgtNy4wNXYxMy41NDdoLTcuMDU1VjE0LjAyMmgxNi41MjRjMi4zNjEsMC4wNDcsNC4xNzgsMC4zNDQsNS40NSwwLjg5MWMxLjI3MiwwLjU0NywyLjM1MSwxLjM1MiwzLjIzNCwyLjQxNGMwLjczMSwwLjg3NSwxLjMxLDEuODQ0LDEuNzM3LDIuOTA2czAuNjQsMi4yNzMsMC42NCwzLjYzM2MwLDEuNjQxLTAuNDE0LDMuMjU0LTEuMjQyLDQuODRzLTIuMTk1LDIuNzA3LTQuMTAyLDMuMzYzYzEuNTk0LDAuNjQxLDIuNzIzLDEuNTUxLDMuMzg3LDIuNzNzMC45OTYsMi45OCwwLjk5Niw1LjQwMnYyLjMyYzAsMS41NzgsMC4wNjMsMi42NDgsMC4xOSwzLjIxMWMwLjE5LDAuODkxLDAuNjM1LDEuNTQ3LDEuMzMzLDEuOTY5VjQ4LjU2OXogTTc1LjU3OSw0OC41NjloLTI2LjE4VjE0LjAyMmgyNS4zMzZ2Ni4xMTdINTYuNDU0djcuMzM2aDE2Ljc4MXY2SDU2LjQ1NHY4Ljg4M2gxOS4xMjVWNDguNTY5eiBNMTA0LjQ5Nyw0Ni4zMzFjLTIuNDQsMi4wODYtNS44ODcsMy4xMjktMTAuMzQsMy4xMjljLTQuNTQ4LDAtOC4xMjUtMS4wMjctMTAuNzMxLTMuMDgycy0zLjkwOS00Ljg3OS0zLjkwOS04LjQ3M2g2Ljg5MWMwLjIyNCwxLjU3OCwwLjY2MiwyLjc1OCwxLjMxNiwzLjUzOWMxLjE5NiwxLjQyMiwzLjI0NiwyLjEzMyw2LjE1LDIuMTMzYzEuNzM5LDAsMy4xNTEtMC4xODgsNC4yMzYtMC41NjJjMi4wNTgtMC43MTksMy4wODctMi4wNTUsMy4wODctNC4wMDhjMC0xLjE0MS0wLjUwNC0yLjAyMy0xLjUxMi0yLjY0OGMtMS4wMDgtMC42MDktMi42MDctMS4xNDgtNC43OTYtMS42MTdsLTMuNzQtMC44MmMtMy42NzYtMC44MTItNi4yMDEtMS42OTUtNy41NzYtMi42NDhjLTIuMzI4LTEuNTk0LTMuNDkyLTQuMDg2LTMuNDkyLTcuNDc3YzAtMy4wOTQsMS4xMzktNS42NjQsMy40MTctNy43MTFzNS42MjMtMy4wNywxMC4wMzYtMy4wN2MzLjY4NSwwLDYuODI5LDAuOTY1LDkuNDMxLDIuODk1YzIuNjAyLDEuOTMsMy45NjYsNC43Myw0LjA5Myw4LjQwMmgtNi45MzhjLTAuMTI4LTIuMDc4LTEuMDU3LTMuNTU1LTIuNzg3LTQuNDNjLTEuMTU0LTAuNTc4LTIuNTg3LTAuODY3LTQuMzAxLTAuODY3Yy0xLjkwNywwLTMuNDI4LDAuMzc1LTQuNTY1LDEuMTI1Yy0xLjEzOCwwLjc1LTEuNzA2LDEuNzk3LTEuNzA2LDMuMTQxYzAsMS4yMzQsMC41NjEsMi4xNTYsMS42ODIsMi43NjZjMC43MjEsMC40MDYsMi4yNSwwLjg4Myw0LjU4OSwxLjQzbDYuMDYzLDEuNDNjMi42NTcsMC42MjUsNC42NDgsMS40NjEsNS45NzUsMi41MDhjMi4wNTksMS42MjUsMy4wODksMy45NzcsMy4wODksNy4wNTVDMTA4LjE1Nyw0MS42MjQsMTA2LjkzNyw0NC4yNDUsMTA0LjQ5Nyw0Ni4zMzF6IE0xMzkuNjEsNDguNTY5aC0yNi4xOFYxNC4wMjJoMjUuMzM2djYuMTE3aC0xOC4yODF2Ny4zMzZoMTYuNzgxdjZoLTE2Ljc4MXY4Ljg4M2gxOS4xMjVWNDguNTY5eiBNMTcwLjMzNywyMC4xNGgtMTAuMzM2djI4LjQzaC03LjI2NlYyMC4xNGgtMTAuMzgzdi02LjExN2gyNy45ODRWMjAuMTR6XCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJzdmctcGFuLXpvb20tY29udHJvbC1lbGVtZW50XCJcbiAgICApO1xuICAgIHJlc2V0UGFuWm9vbUNvbnRyb2wuYXBwZW5kQ2hpbGQocmVzZXRQYW5ab29tQ29udHJvbFNoYXBlMik7XG5cbiAgICByZXR1cm4gcmVzZXRQYW5ab29tQ29udHJvbDtcbiAgfSxcblxuICBfY3JlYXRlWm9vbU91dDogZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgICAvLyB6b29tIG91dFxuICAgIHZhciB6b29tT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcImdcIik7XG4gICAgem9vbU91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN2Zy1wYW4tem9vbS16b29tLW91dFwiKTtcbiAgICB6b29tT3V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMC41IDcwKSBzY2FsZSgwLjAxNSlcIik7XG4gICAgem9vbU91dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sXCIpO1xuICAgIHpvb21PdXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbnN0YW5jZS5nZXRQdWJsaWNJbnN0YW5jZSgpLnpvb21PdXQoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgem9vbU91dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKS56b29tT3V0KCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgdmFyIHpvb21PdXRCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcInJlY3RcIik7IC8vIFRPRE8gY2hhbmdlIHRoZXNlIGJhY2tncm91bmQgc3BhY2UgZmlsbGVycyB0byByb3VuZGVkIHJlY3RhbmdsZXMgc28gdGhleSBsb29rIHByZXR0aWVyXG4gICAgem9vbU91dEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XG4gICAgem9vbU91dEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwieVwiLCBcIjBcIik7XG4gICAgem9vbU91dEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxNTAwXCIpOyAvLyBsYXJnZXIgdGhhbiBleHBlY3RlZCBiZWNhdXNlIHRoZSB3aG9sZSBncm91cCBpcyB0cmFuc2Zvcm1lZCB0byBzY2FsZSBkb3duXG4gICAgem9vbU91dEJhY2tncm91bmQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTQwMFwiKTtcbiAgICB6b29tT3V0QmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN2Zy1wYW4tem9vbS1jb250cm9sLWJhY2tncm91bmRcIik7XG4gICAgem9vbU91dC5hcHBlbmRDaGlsZCh6b29tT3V0QmFja2dyb3VuZCk7XG5cbiAgICB2YXIgem9vbU91dFNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFN2Z1V0aWxzLnN2Z05TLCBcInBhdGhcIik7XG4gICAgem9vbU91dFNoYXBlLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZFwiLFxuICAgICAgXCJNMTI4MCA1NzZ2MTI4cTAgMjYgLTE5IDQ1dC00NSAxOWgtODk2cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMTI4cTAgLTI2IDE5IC00NXQ0NSAtMTloODk2cTI2IDAgNDUgMTl0MTkgNDV6TTE1MzYgMTEyMHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41IHQ4NC41IC0yMDMuNXpcIlxuICAgICk7XG4gICAgem9vbU91dFNoYXBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnLXBhbi16b29tLWNvbnRyb2wtZWxlbWVudFwiKTtcbiAgICB6b29tT3V0LmFwcGVuZENoaWxkKHpvb21PdXRTaGFwZSk7XG5cbiAgICByZXR1cm4gem9vbU91dDtcbiAgfSxcblxuICBkaXNhYmxlOiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS5jb250cm9sSWNvbnMpIHtcbiAgICAgIGluc3RhbmNlLmNvbnRyb2xJY29ucy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGluc3RhbmNlLmNvbnRyb2xJY29ucyk7XG4gICAgICBpbnN0YW5jZS5jb250cm9sSWNvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBTdmdVdGlscyA9IHJlcXVpcmUoXCIuL3N2Zy11dGlsaXRpZXNcIiksXG4gIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpO1xuXG52YXIgU2hhZG93Vmlld3BvcnQgPSBmdW5jdGlvbih2aWV3cG9ydCwgb3B0aW9ucykge1xuICB0aGlzLmluaXQodmlld3BvcnQsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvblxuICpcbiAqIEBwYXJhbSAge1NWR0VsZW1lbnR9IHZpZXdwb3J0XG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbih2aWV3cG9ydCwgb3B0aW9ucykge1xuICAvLyBET00gRWxlbWVudHNcbiAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gIC8vIFN0YXRlIGNhY2hlXG4gIHRoaXMub3JpZ2luYWxTdGF0ZSA9IHsgem9vbTogMSwgeDogMCwgeTogMCB9O1xuICB0aGlzLmFjdGl2ZVN0YXRlID0geyB6b29tOiAxLCB4OiAwLCB5OiAwIH07XG5cbiAgdGhpcy51cGRhdGVDVE1DYWNoZWQgPSBVdGlscy5wcm94eSh0aGlzLnVwZGF0ZUNUTSwgdGhpcyk7XG5cbiAgLy8gQ3JlYXRlIGEgY3VzdG9tIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0YWtpbmcgaW4gYWNjb3VudCByZWZyZXNoUmF0ZVxuICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IFV0aWxzLmNyZWF0ZVJlcXVlc3RBbmltYXRpb25GcmFtZShcbiAgICB0aGlzLm9wdGlvbnMucmVmcmVzaFJhdGVcbiAgKTtcblxuICAvLyBWaWV3Qm94XG4gIHRoaXMudmlld0JveCA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICB0aGlzLmNhY2hlVmlld0JveCgpO1xuXG4gIC8vIFByb2Nlc3MgQ1RNXG4gIHZhciBuZXdDVE0gPSB0aGlzLnByb2Nlc3NDVE0oKTtcblxuICAvLyBVcGRhdGUgdmlld3BvcnQgQ1RNIGFuZCBjYWNoZSB6b29tIGFuZCBwYW5cbiAgdGhpcy5zZXRDVE0obmV3Q1RNKTtcblxuICAvLyBVcGRhdGUgQ1RNIGluIHRoaXMgZnJhbWVcbiAgdGhpcy51cGRhdGVDVE0oKTtcbn07XG5cbi8qKlxuICogQ2FjaGUgaW5pdGlhbCB2aWV3Qm94IHZhbHVlXG4gKiBJZiBubyB2aWV3Qm94IGlzIGRlZmluZWQsIHRoZW4gdXNlIHZpZXdwb3J0IHNpemUvcG9zaXRpb24gaW5zdGVhZCBmb3Igdmlld0JveCB2YWx1ZXNcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmNhY2hlVmlld0JveCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3ZnVmlld0JveCA9IHRoaXMub3B0aW9ucy5zdmcuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcblxuICBpZiAoc3ZnVmlld0JveCkge1xuICAgIHZhciB2aWV3Qm94VmFsdWVzID0gc3ZnVmlld0JveFxuICAgICAgLnNwbGl0KC9bXFxzXFwsXS8pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9KVxuICAgICAgLm1hcChwYXJzZUZsb2F0KTtcblxuICAgIC8vIENhY2hlIHZpZXdib3ggeCBhbmQgeSBvZmZzZXRcbiAgICB0aGlzLnZpZXdCb3gueCA9IHZpZXdCb3hWYWx1ZXNbMF07XG4gICAgdGhpcy52aWV3Qm94LnkgPSB2aWV3Qm94VmFsdWVzWzFdO1xuICAgIHRoaXMudmlld0JveC53aWR0aCA9IHZpZXdCb3hWYWx1ZXNbMl07XG4gICAgdGhpcy52aWV3Qm94LmhlaWdodCA9IHZpZXdCb3hWYWx1ZXNbM107XG5cbiAgICB2YXIgem9vbSA9IE1hdGgubWluKFxuICAgICAgdGhpcy5vcHRpb25zLndpZHRoIC8gdGhpcy52aWV3Qm94LndpZHRoLFxuICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCAvIHRoaXMudmlld0JveC5oZWlnaHRcbiAgICApO1xuXG4gICAgLy8gVXBkYXRlIGFjdGl2ZSBzdGF0ZVxuICAgIHRoaXMuYWN0aXZlU3RhdGUuem9vbSA9IHpvb207XG4gICAgdGhpcy5hY3RpdmVTdGF0ZS54ID0gKHRoaXMub3B0aW9ucy53aWR0aCAtIHRoaXMudmlld0JveC53aWR0aCAqIHpvb20pIC8gMjtcbiAgICB0aGlzLmFjdGl2ZVN0YXRlLnkgPSAodGhpcy5vcHRpb25zLmhlaWdodCAtIHRoaXMudmlld0JveC5oZWlnaHQgKiB6b29tKSAvIDI7XG5cbiAgICAvLyBGb3JjZSB1cGRhdGluZyBDVE1cbiAgICB0aGlzLnVwZGF0ZUNUTU9uTmV4dEZyYW1lKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMuc3ZnLnJlbW92ZUF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zaW1wbGVWaWV3Qm94Q2FjaGUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWNhbGN1bGF0ZSB2aWV3cG9ydCBzaXplcyBhbmQgdXBkYXRlIHZpZXdCb3ggY2FjaGVcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnNpbXBsZVZpZXdCb3hDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYkJveCA9IHRoaXMudmlld3BvcnQuZ2V0QkJveCgpO1xuXG4gIHRoaXMudmlld0JveC54ID0gYkJveC54O1xuICB0aGlzLnZpZXdCb3gueSA9IGJCb3gueTtcbiAgdGhpcy52aWV3Qm94LndpZHRoID0gYkJveC53aWR0aDtcbiAgdGhpcy52aWV3Qm94LmhlaWdodCA9IGJCb3guaGVpZ2h0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdmlld2JveCBvYmplY3QuIFNhZmUgdG8gYWx0ZXJcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZpZXdib3ggb2JqZWN0XG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRWaWV3Qm94ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBVdGlscy5leHRlbmQoe30sIHRoaXMudmlld0JveCk7XG59O1xuXG4vKipcbiAqIEdldCBpbml0aWFsIHpvb20gYW5kIHBhbiB2YWx1ZXMuIFNhdmUgdGhlbSBpbnRvIG9yaWdpbmFsU3RhdGVcbiAqIFBhcnNlcyB2aWV3Qm94IGF0dHJpYnV0ZSB0byBhbHRlciBpbml0aWFsIHNpemVzXG4gKlxuICogQHJldHVybiB7Q1RNfSBDVE0gb2JqZWN0IGJhc2VkIG9uIG9wdGlvbnNcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnByb2Nlc3NDVE0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5ld0NUTSA9IHRoaXMuZ2V0Q1RNKCk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5maXQgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW4pIHtcbiAgICB2YXIgbmV3U2NhbGU7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5maXQpIHtcbiAgICAgIG5ld1NjYWxlID0gTWF0aC5taW4oXG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAvIHRoaXMudmlld0JveC53aWR0aCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCAvIHRoaXMudmlld0JveC5oZWlnaHRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NjYWxlID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAvIHRoaXMudmlld0JveC53aWR0aCxcbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCAvIHRoaXMudmlld0JveC5oZWlnaHRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3Q1RNLmEgPSBuZXdTY2FsZTsgLy94LXNjYWxlXG4gICAgbmV3Q1RNLmQgPSBuZXdTY2FsZTsgLy95LXNjYWxlXG4gICAgbmV3Q1RNLmUgPSAtdGhpcy52aWV3Qm94LnggKiBuZXdTY2FsZTsgLy94LXRyYW5zZm9ybVxuICAgIG5ld0NUTS5mID0gLXRoaXMudmlld0JveC55ICogbmV3U2NhbGU7IC8veS10cmFuc2Zvcm1cbiAgfVxuXG4gIGlmICh0aGlzLm9wdGlvbnMuY2VudGVyKSB7XG4gICAgdmFyIG9mZnNldFggPVxuICAgICAgICAodGhpcy5vcHRpb25zLndpZHRoIC1cbiAgICAgICAgICAodGhpcy52aWV3Qm94LndpZHRoICsgdGhpcy52aWV3Qm94LnggKiAyKSAqIG5ld0NUTS5hKSAqXG4gICAgICAgIDAuNSxcbiAgICAgIG9mZnNldFkgPVxuICAgICAgICAodGhpcy5vcHRpb25zLmhlaWdodCAtXG4gICAgICAgICAgKHRoaXMudmlld0JveC5oZWlnaHQgKyB0aGlzLnZpZXdCb3gueSAqIDIpICogbmV3Q1RNLmEpICpcbiAgICAgICAgMC41O1xuXG4gICAgbmV3Q1RNLmUgPSBvZmZzZXRYO1xuICAgIG5ld0NUTS5mID0gb2Zmc2V0WTtcbiAgfVxuXG4gIC8vIENhY2hlIGluaXRpYWwgdmFsdWVzLiBCYXNlZCBvbiBhY3RpdmVTdGF0ZSBhbmQgZml4K2NlbnRlciBvcGl0b25zXG4gIHRoaXMub3JpZ2luYWxTdGF0ZS56b29tID0gbmV3Q1RNLmE7XG4gIHRoaXMub3JpZ2luYWxTdGF0ZS54ID0gbmV3Q1RNLmU7XG4gIHRoaXMub3JpZ2luYWxTdGF0ZS55ID0gbmV3Q1RNLmY7XG5cbiAgcmV0dXJuIG5ld0NUTTtcbn07XG5cbi8qKlxuICogUmV0dXJuIG9yaWdpbmFsU3RhdGUgb2JqZWN0LiBTYWZlIHRvIGFsdGVyXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0T3JpZ2luYWxTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gVXRpbHMuZXh0ZW5kKHt9LCB0aGlzLm9yaWdpbmFsU3RhdGUpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYWN0dWFsU3RhdGUgb2JqZWN0LiBTYWZlIHRvIGFsdGVyXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7fSwgdGhpcy5hY3RpdmVTdGF0ZSk7XG59O1xuXG4vKipcbiAqIEdldCB6b29tIHNjYWxlXG4gKlxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmdldFpvb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYWN0aXZlU3RhdGUuem9vbTtcbn07XG5cbi8qKlxuICogR2V0IHpvb20gc2NhbGUgZm9yIHB1YmlsYyB1c2FnZVxuICpcbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRSZWxhdGl2ZVpvb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYWN0aXZlU3RhdGUuem9vbSAvIHRoaXMub3JpZ2luYWxTdGF0ZS56b29tO1xufTtcblxuLyoqXG4gKiBDb21wdXRlIHpvb20gc2NhbGUgZm9yIHB1YmlsYyB1c2FnZVxuICpcbiAqIEByZXR1cm4ge0Zsb2F0fSB6b29tIHNjYWxlXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5jb21wdXRlUmVsYXRpdmVab29tID0gZnVuY3Rpb24oc2NhbGUpIHtcbiAgcmV0dXJuIHNjYWxlIC8gdGhpcy5vcmlnaW5hbFN0YXRlLnpvb207XG59O1xuXG4vKipcbiAqIEdldCBwYW5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS5nZXRQYW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHsgeDogdGhpcy5hY3RpdmVTdGF0ZS54LCB5OiB0aGlzLmFjdGl2ZVN0YXRlLnkgfTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGNhY2hlZCB2aWV3cG9ydCBDVE0gdmFsdWUgdGhhdCBjYW4gYmUgc2FmZWx5IG1vZGlmaWVkXG4gKlxuICogQHJldHVybiB7U1ZHTWF0cml4fVxuICovXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuZ2V0Q1RNID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzYWZlQ1RNID0gdGhpcy5vcHRpb25zLnN2Zy5jcmVhdGVTVkdNYXRyaXgoKTtcblxuICAvLyBDb3B5IHZhbHVlcyBtYW51YWxseSBhcyBpbiBGRiB0aGV5IGFyZSBub3QgaXR0ZXJhYmxlXG4gIHNhZmVDVE0uYSA9IHRoaXMuYWN0aXZlU3RhdGUuem9vbTtcbiAgc2FmZUNUTS5iID0gMDtcbiAgc2FmZUNUTS5jID0gMDtcbiAgc2FmZUNUTS5kID0gdGhpcy5hY3RpdmVTdGF0ZS56b29tO1xuICBzYWZlQ1RNLmUgPSB0aGlzLmFjdGl2ZVN0YXRlLng7XG4gIHNhZmVDVE0uZiA9IHRoaXMuYWN0aXZlU3RhdGUueTtcblxuICByZXR1cm4gc2FmZUNUTTtcbn07XG5cbi8qKlxuICogU2V0IGEgbmV3IENUTVxuICpcbiAqIEBwYXJhbSB7U1ZHTWF0cml4fSBuZXdDVE1cbiAqL1xuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnNldENUTSA9IGZ1bmN0aW9uKG5ld0NUTSkge1xuICB2YXIgd2lsbFpvb20gPSB0aGlzLmlzWm9vbURpZmZlcmVudChuZXdDVE0pLFxuICAgIHdpbGxQYW4gPSB0aGlzLmlzUGFuRGlmZmVyZW50KG5ld0NUTSk7XG5cbiAgaWYgKHdpbGxab29tIHx8IHdpbGxQYW4pIHtcbiAgICAvLyBCZWZvcmUgem9vbVxuICAgIGlmICh3aWxsWm9vbSkge1xuICAgICAgLy8gSWYgcmV0dXJucyBmYWxzZSB0aGVuIGNhbmNlbCB6b29taW5nXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMub3B0aW9ucy5iZWZvcmVab29tKFxuICAgICAgICAgIHRoaXMuZ2V0UmVsYXRpdmVab29tKCksXG4gICAgICAgICAgdGhpcy5jb21wdXRlUmVsYXRpdmVab29tKG5ld0NUTS5hKVxuICAgICAgICApID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIG5ld0NUTS5hID0gbmV3Q1RNLmQgPSB0aGlzLmFjdGl2ZVN0YXRlLnpvb207XG4gICAgICAgIHdpbGxab29tID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlKG5ld0NUTSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblpvb20odGhpcy5nZXRSZWxhdGl2ZVpvb20oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmVmb3JlIHBhblxuICAgIGlmICh3aWxsUGFuKSB7XG4gICAgICB2YXIgcHJldmVudFBhbiA9IHRoaXMub3B0aW9ucy5iZWZvcmVQYW4odGhpcy5nZXRQYW4oKSwge1xuICAgICAgICAgIHg6IG5ld0NUTS5lLFxuICAgICAgICAgIHk6IG5ld0NUTS5mXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBJZiBwcmV2ZW50IHBhbiBpcyBhbiBvYmplY3RcbiAgICAgICAgcHJldmVudFBhblggPSBmYWxzZSxcbiAgICAgICAgcHJldmVudFBhblkgPSBmYWxzZTtcblxuICAgICAgLy8gSWYgcHJldmVudCBwYW4gaXMgQm9vbGVhbiBmYWxzZVxuICAgICAgaWYgKHByZXZlbnRQYW4gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIFNldCB4IGFuZCB5IHNhbWUgYXMgYmVmb3JlXG4gICAgICAgIG5ld0NUTS5lID0gdGhpcy5nZXRQYW4oKS54O1xuICAgICAgICBuZXdDVE0uZiA9IHRoaXMuZ2V0UGFuKCkueTtcblxuICAgICAgICBwcmV2ZW50UGFuWCA9IHByZXZlbnRQYW5ZID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNPYmplY3QocHJldmVudFBhbikpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIFggYXhlcyBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKHByZXZlbnRQYW4ueCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IHBhbm5pbmcgb24geCBheGVzXG4gICAgICAgICAgbmV3Q1RNLmUgPSB0aGlzLmdldFBhbigpLng7XG4gICAgICAgICAgcHJldmVudFBhblggPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzTnVtYmVyKHByZXZlbnRQYW4ueCkpIHtcbiAgICAgICAgICAvLyBTZXQgYSBjdXN0b20gcGFuIHZhbHVlXG4gICAgICAgICAgbmV3Q1RNLmUgPSBwcmV2ZW50UGFuLng7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgWSBheGVzIGF0dHJpYnV0ZVxuICAgICAgICBpZiAocHJldmVudFBhbi55ID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIFByZXZlbnQgcGFubmluZyBvbiB4IGF4ZXNcbiAgICAgICAgICBuZXdDVE0uZiA9IHRoaXMuZ2V0UGFuKCkueTtcbiAgICAgICAgICBwcmV2ZW50UGFuWSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNOdW1iZXIocHJldmVudFBhbi55KSkge1xuICAgICAgICAgIC8vIFNldCBhIGN1c3RvbSBwYW4gdmFsdWVcbiAgICAgICAgICBuZXdDVE0uZiA9IHByZXZlbnRQYW4ueTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgd2lsbFBhbiBmbGFnXG4gICAgICAvLyBDaGVjayBpZiBuZXdDVE0gaXMgc3RpbGwgZGlmZmVyZW50XG4gICAgICBpZiAoKHByZXZlbnRQYW5YICYmIHByZXZlbnRQYW5ZKSB8fCAhdGhpcy5pc1BhbkRpZmZlcmVudChuZXdDVE0pKSB7XG4gICAgICAgIHdpbGxQYW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FjaGUobmV3Q1RNKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUGFuKHRoaXMuZ2V0UGFuKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGFnYWluIGlmIHNob3VsZCB6b29tIG9yIHBhblxuICAgIGlmICh3aWxsWm9vbSB8fCB3aWxsUGFuKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNUTU9uTmV4dEZyYW1lKCk7XG4gICAgfVxuICB9XG59O1xuXG5TaGFkb3dWaWV3cG9ydC5wcm90b3R5cGUuaXNab29tRGlmZmVyZW50ID0gZnVuY3Rpb24obmV3Q1RNKSB7XG4gIHJldHVybiB0aGlzLmFjdGl2ZVN0YXRlLnpvb20gIT09IG5ld0NUTS5hO1xufTtcblxuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLmlzUGFuRGlmZmVyZW50ID0gZnVuY3Rpb24obmV3Q1RNKSB7XG4gIHJldHVybiB0aGlzLmFjdGl2ZVN0YXRlLnggIT09IG5ld0NUTS5lIHx8IHRoaXMuYWN0aXZlU3RhdGUueSAhPT0gbmV3Q1RNLmY7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBjYWNoZWQgQ1RNIGFuZCBhY3RpdmUgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge1NWR01hdHJpeH0gbmV3Q1RNXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS51cGRhdGVDYWNoZSA9IGZ1bmN0aW9uKG5ld0NUTSkge1xuICB0aGlzLmFjdGl2ZVN0YXRlLnpvb20gPSBuZXdDVE0uYTtcbiAgdGhpcy5hY3RpdmVTdGF0ZS54ID0gbmV3Q1RNLmU7XG4gIHRoaXMuYWN0aXZlU3RhdGUueSA9IG5ld0NUTS5mO1xufTtcblxuU2hhZG93Vmlld3BvcnQucHJvdG90eXBlLnBlbmRpbmdVcGRhdGUgPSBmYWxzZTtcblxuLyoqXG4gKiBQbGFjZSBhIHJlcXVlc3QgdG8gdXBkYXRlIENUTSBvbiBuZXh0IEZyYW1lXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS51cGRhdGVDVE1Pbk5leHRGcmFtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMucGVuZGluZ1VwZGF0ZSkge1xuICAgIC8vIExvY2tcbiAgICB0aGlzLnBlbmRpbmdVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gVGhyb3R0bGUgbmV4dCB1cGRhdGVcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5jYWxsKHdpbmRvdywgdGhpcy51cGRhdGVDVE1DYWNoZWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB2aWV3cG9ydCBDVE0gd2l0aCBjYWNoZWQgQ1RNXG4gKi9cblNoYWRvd1ZpZXdwb3J0LnByb3RvdHlwZS51cGRhdGVDVE0gPSBmdW5jdGlvbigpIHtcbiAgdmFyIGN0bSA9IHRoaXMuZ2V0Q1RNKCk7XG5cbiAgLy8gVXBkYXRlcyBTVkcgZWxlbWVudFxuICBTdmdVdGlscy5zZXRDVE0odGhpcy52aWV3cG9ydCwgY3RtLCB0aGlzLmRlZnMpO1xuXG4gIC8vIEZyZWUgdGhlIGxvY2tcbiAgdGhpcy5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XG5cbiAgLy8gTm90aWZ5IGFib3V0IHRoZSB1cGRhdGVcbiAgaWYgKHRoaXMub3B0aW9ucy5vblVwZGF0ZWRDVE0pIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGVkQ1RNKGN0bSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmlld3BvcnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBTaGFkb3dWaWV3cG9ydCh2aWV3cG9ydCwgb3B0aW9ucyk7XG59O1xuIiwidmFyIFdoZWVsID0gcmVxdWlyZShcIi4vdW5pd2hlZWxcIiksXG4gIENvbnRyb2xJY29ucyA9IHJlcXVpcmUoXCIuL2NvbnRyb2wtaWNvbnNcIiksXG4gIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpLFxuICBTdmdVdGlscyA9IHJlcXVpcmUoXCIuL3N2Zy11dGlsaXRpZXNcIiksXG4gIFNoYWRvd1ZpZXdwb3J0ID0gcmVxdWlyZShcIi4vc2hhZG93LXZpZXdwb3J0XCIpO1xuXG52YXIgU3ZnUGFuWm9vbSA9IGZ1bmN0aW9uKHN2Zywgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc3ZnLCBvcHRpb25zKTtcbn07XG5cbnZhciBvcHRpb25zRGVmYXVsdHMgPSB7XG4gIHZpZXdwb3J0U2VsZWN0b3I6IFwiLnN2Zy1wYW4tem9vbV92aWV3cG9ydFwiLCAvLyBWaWV3cG9ydCBzZWxlY3Rvci4gQ2FuIGJlIHF1ZXJ5U2VsZWN0b3Igc3RyaW5nIG9yIFNWR0VsZW1lbnRcbiAgcGFuRW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgcGFubmluZyAoZGVmYXVsdCBlbmFibGVkKVxuICBjb250cm9sSWNvbnNFbmFibGVkOiBmYWxzZSwgLy8gaW5zZXJ0IGljb25zIHRvIGdpdmUgdXNlciBhbiBvcHRpb24gaW4gYWRkaXRpb24gdG8gbW91c2UgZXZlbnRzIHRvIGNvbnRyb2wgcGFuL3pvb20gKGRlZmF1bHQgZGlzYWJsZWQpXG4gIHpvb21FbmFibGVkOiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB6b29taW5nIChkZWZhdWx0IGVuYWJsZWQpXG4gIGRibENsaWNrWm9vbUVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHpvb21pbmcgYnkgZG91YmxlIGNsaWNraW5nIChkZWZhdWx0IGVuYWJsZWQpXG4gIG1vdXNlV2hlZWxab29tRW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgem9vbWluZyBieSBtb3VzZSB3aGVlbCAoZGVmYXVsdCBlbmFibGVkKVxuICBwcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0OiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSBwcmV2ZW50RGVmYXVsdCBmb3IgbW91c2UgZXZlbnRzXG4gIHpvb21TY2FsZVNlbnNpdGl2aXR5OiAwLjEsIC8vIFpvb20gc2Vuc2l0aXZpdHlcbiAgbWluWm9vbTogMC41LCAvLyBNaW5pbXVtIFpvb20gbGV2ZWxcbiAgbWF4Wm9vbTogMTAsIC8vIE1heGltdW0gWm9vbSBsZXZlbFxuICBmaXQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHZpZXdwb3J0IGZpdCBpbiBTVkcgKGRlZmF1bHQgdHJ1ZSlcbiAgY29udGFpbjogZmFsc2UsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHZpZXdwb3J0IGNvbnRhaW4gdGhlIHN2ZyAoZGVmYXVsdCBmYWxzZSlcbiAgY2VudGVyOiB0cnVlLCAvLyBlbmFibGUgb3IgZGlzYWJsZSB2aWV3cG9ydCBjZW50ZXJpbmcgaW4gU1ZHIChkZWZhdWx0IHRydWUpXG4gIHJlZnJlc2hSYXRlOiBcImF1dG9cIiwgLy8gTWF4aW11bSBudW1iZXIgb2YgZnJhbWVzIHBlciBzZWNvbmQgKGFsdGVyaW5nIFNWRydzIHZpZXdwb3J0KVxuICBiZWZvcmVab29tOiBudWxsLFxuICBvblpvb206IG51bGwsXG4gIGJlZm9yZVBhbjogbnVsbCxcbiAgb25QYW46IG51bGwsXG4gIGN1c3RvbUV2ZW50c0hhbmRsZXI6IG51bGwsXG4gIGV2ZW50c0xpc3RlbmVyRWxlbWVudDogbnVsbCxcbiAgb25VcGRhdGVkQ1RNOiBudWxsXG59O1xuXG52YXIgcGFzc2l2ZUxpc3RlbmVyT3B0aW9uID0geyBwYXNzaXZlOiB0cnVlIH07XG5cblN2Z1Bhblpvb20ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihzdmcsIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMuc3ZnID0gc3ZnO1xuICB0aGlzLmRlZnMgPSBzdmcucXVlcnlTZWxlY3RvcihcImRlZnNcIik7XG5cbiAgLy8gQWRkIGRlZmF1bHQgYXR0cmlidXRlcyB0byBTVkdcbiAgU3ZnVXRpbHMuc2V0dXBTdmdBdHRyaWJ1dGVzKHRoaXMuc3ZnKTtcblxuICAvLyBTZXQgb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSBVdGlscy5leHRlbmQoVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zRGVmYXVsdHMpLCBvcHRpb25zKTtcblxuICAvLyBTZXQgZGVmYXVsdCBzdGF0ZVxuICB0aGlzLnN0YXRlID0gXCJub25lXCI7XG5cbiAgLy8gR2V0IGRpbWVuc2lvbnNcbiAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQgPSBTdmdVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkKFxuICAgIHN2Z1xuICApO1xuICB0aGlzLndpZHRoID0gYm91bmRpbmdDbGllbnRSZWN0Tm9ybWFsaXplZC53aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkLmhlaWdodDtcblxuICAvLyBJbml0IHNoYWRvdyB2aWV3cG9ydFxuICB0aGlzLnZpZXdwb3J0ID0gU2hhZG93Vmlld3BvcnQoXG4gICAgU3ZnVXRpbHMuZ2V0T3JDcmVhdGVWaWV3cG9ydCh0aGlzLnN2ZywgdGhpcy5vcHRpb25zLnZpZXdwb3J0U2VsZWN0b3IpLFxuICAgIHtcbiAgICAgIHN2ZzogdGhpcy5zdmcsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBmaXQ6IHRoaXMub3B0aW9ucy5maXQsXG4gICAgICBjb250YWluOiB0aGlzLm9wdGlvbnMuY29udGFpbixcbiAgICAgIGNlbnRlcjogdGhpcy5vcHRpb25zLmNlbnRlcixcbiAgICAgIHJlZnJlc2hSYXRlOiB0aGlzLm9wdGlvbnMucmVmcmVzaFJhdGUsXG4gICAgICAvLyBQdXQgY2FsbGJhY2tzIGludG8gZnVuY3Rpb25zIGFzIHRoZXkgY2FuIGNoYW5nZSB0aHJvdWdoIHRpbWVcbiAgICAgIGJlZm9yZVpvb206IGZ1bmN0aW9uKG9sZFNjYWxlLCBuZXdTY2FsZSkge1xuICAgICAgICBpZiAodGhhdC52aWV3cG9ydCAmJiB0aGF0Lm9wdGlvbnMuYmVmb3JlWm9vbSkge1xuICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbnMuYmVmb3JlWm9vbShvbGRTY2FsZSwgbmV3U2NhbGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25ab29tOiBmdW5jdGlvbihzY2FsZSkge1xuICAgICAgICBpZiAodGhhdC52aWV3cG9ydCAmJiB0aGF0Lm9wdGlvbnMub25ab29tKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9ucy5vblpvb20oc2NhbGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmVmb3JlUGFuOiBmdW5jdGlvbihvbGRQb2ludCwgbmV3UG9pbnQpIHtcbiAgICAgICAgaWYgKHRoYXQudmlld3BvcnQgJiYgdGhhdC5vcHRpb25zLmJlZm9yZVBhbikge1xuICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbnMuYmVmb3JlUGFuKG9sZFBvaW50LCBuZXdQb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblBhbjogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgaWYgKHRoYXQudmlld3BvcnQgJiYgdGhhdC5vcHRpb25zLm9uUGFuKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9ucy5vblBhbihwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZWRDVE06IGZ1bmN0aW9uKGN0bSkge1xuICAgICAgICBpZiAodGhhdC52aWV3cG9ydCAmJiB0aGF0Lm9wdGlvbnMub25VcGRhdGVkQ1RNKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9ucy5vblVwZGF0ZWRDVE0oY3RtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICAvLyBXcmFwIGNhbGxiYWNrcyBpbnRvIHB1YmxpYyBBUEkgY29udGV4dFxuICB2YXIgcHVibGljSW5zdGFuY2UgPSB0aGlzLmdldFB1YmxpY0luc3RhbmNlKCk7XG4gIHB1YmxpY0luc3RhbmNlLnNldEJlZm9yZVpvb20odGhpcy5vcHRpb25zLmJlZm9yZVpvb20pO1xuICBwdWJsaWNJbnN0YW5jZS5zZXRPblpvb20odGhpcy5vcHRpb25zLm9uWm9vbSk7XG4gIHB1YmxpY0luc3RhbmNlLnNldEJlZm9yZVBhbih0aGlzLm9wdGlvbnMuYmVmb3JlUGFuKTtcbiAgcHVibGljSW5zdGFuY2Uuc2V0T25QYW4odGhpcy5vcHRpb25zLm9uUGFuKTtcbiAgcHVibGljSW5zdGFuY2Uuc2V0T25VcGRhdGVkQ1RNKHRoaXMub3B0aW9ucy5vblVwZGF0ZWRDVE0pO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCkge1xuICAgIENvbnRyb2xJY29ucy5lbmFibGUodGhpcyk7XG4gIH1cblxuICAvLyBJbml0IGV2ZW50cyBoYW5kbGVyc1xuICB0aGlzLmxhc3RNb3VzZVdoZWVsRXZlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgdGhpcy5zZXR1cEhhbmRsZXJzKCk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnNldHVwSGFuZGxlcnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRoYXQgPSB0aGlzLFxuICAgIHByZXZFdnQgPSBudWxsOyAvLyB1c2UgZm9yIHRvdWNoc3RhcnQgZXZlbnQgdG8gZGV0ZWN0IGRvdWJsZSB0YXBcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge1xuICAgIC8vIE1vdXNlIGRvd24gZ3JvdXBcbiAgICBtb3VzZWRvd246IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoYXQuaGFuZGxlTW91c2VEb3duKGV2dCwgcHJldkV2dCk7XG4gICAgICBwcmV2RXZ0ID0gZXZ0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoYXQuaGFuZGxlTW91c2VEb3duKGV2dCwgcHJldkV2dCk7XG4gICAgICBwcmV2RXZ0ID0gZXZ0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLy8gTW91c2UgdXAgZ3JvdXBcbiAgICBtb3VzZXVwOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlVXAoZXZ0KTtcbiAgICB9LFxuICAgIHRvdWNoZW5kOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlVXAoZXZ0KTtcbiAgICB9LFxuXG4gICAgLy8gTW91c2UgbW92ZSBncm91cFxuICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZU1vdmUoZXZ0KTtcbiAgICB9LFxuICAgIHRvdWNobW92ZTogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICByZXR1cm4gdGhhdC5oYW5kbGVNb3VzZU1vdmUoZXZ0KTtcbiAgICB9LFxuXG4gICAgLy8gTW91c2UgbGVhdmUgZ3JvdXBcbiAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbihldnQpIHtcbiAgICAgIHJldHVybiB0aGF0LmhhbmRsZU1vdXNlVXAoZXZ0KTtcbiAgICB9LFxuICAgIHRvdWNobGVhdmU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VVcChldnQpO1xuICAgIH0sXG4gICAgdG91Y2hjYW5jZWw6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VVcChldnQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBJbml0IGN1c3RvbSBldmVudHMgaGFuZGxlciBpZiBhdmFpbGFibGVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUV2ZW50c0hhbmRsZXIgIT0gbnVsbCkge1xuICAgIHRoaXMub3B0aW9ucy5jdXN0b21FdmVudHNIYW5kbGVyLmluaXQoe1xuICAgICAgc3ZnRWxlbWVudDogdGhpcy5zdmcsXG4gICAgICBldmVudHNMaXN0ZW5lckVsZW1lbnQ6IHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQsXG4gICAgICBpbnN0YW5jZTogdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpXG4gICAgfSk7XG5cbiAgICAvLyBDdXN0b20gZXZlbnQgaGFuZGxlciBtYXkgaGFsdCBidWlsdGluIGxpc3RlbmVyc1xuICAgIHZhciBoYWx0RXZlbnRMaXN0ZW5lcnMgPSB0aGlzLm9wdGlvbnMuY3VzdG9tRXZlbnRzSGFuZGxlclxuICAgICAgLmhhbHRFdmVudExpc3RlbmVycztcbiAgICBpZiAoaGFsdEV2ZW50TGlzdGVuZXJzICYmIGhhbHRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSBoYWx0RXZlbnRMaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoaGFsdEV2ZW50TGlzdGVuZXJzW2ldKSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzW2hhbHRFdmVudExpc3RlbmVyc1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBCaW5kIGV2ZW50TGlzdGVuZXJzXG4gIGZvciAodmFyIGV2ZW50IGluIHRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAvLyBBdHRhY2ggZXZlbnQgdG8gZXZlbnRzTGlzdGVuZXJFbGVtZW50IG9yIFNWRyBpZiBub3QgYXZhaWxhYmxlXG4gICAgKHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQgfHwgdGhpcy5zdmcpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBldmVudCxcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLFxuICAgICAgIXRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0ID8gcGFzc2l2ZUxpc3RlbmVyT3B0aW9uIDogZmFsc2VcbiAgICApO1xuICB9XG5cbiAgLy8gWm9vbSB1c2luZyBtb3VzZSB3aGVlbFxuICBpZiAodGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCkge1xuICAgIHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQgPSBmYWxzZTsgLy8gc2V0IHRvIGZhbHNlIGFzIGVuYWJsZSB3aWxsIHNldCBpdCBiYWNrIHRvIHRydWVcbiAgICB0aGlzLmVuYWJsZU1vdXNlV2hlZWxab29tKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRW5hYmxlIGFiaWxpdHkgdG8gem9vbSB1c2luZyBtb3VzZSB3aGVlbFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5lbmFibGVNb3VzZVdoZWVsWm9vbSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAvLyBNb3VzZSB3aGVlbCBsaXN0ZW5lclxuICAgIHRoaXMud2hlZWxMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgcmV0dXJuIHRoYXQuaGFuZGxlTW91c2VXaGVlbChldnQpO1xuICAgIH07XG5cbiAgICAvLyBCaW5kIHdoZWVsTGlzdGVuZXJcbiAgICB2YXIgaXNQYXNzaXZlTGlzdGVuZXIgPSAhdGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQ7XG4gICAgV2hlZWwub24oXG4gICAgICB0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50IHx8IHRoaXMuc3ZnLFxuICAgICAgdGhpcy53aGVlbExpc3RlbmVyLFxuICAgICAgaXNQYXNzaXZlTGlzdGVuZXJcbiAgICApO1xuXG4gICAgdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogRGlzYWJsZSBhYmlsaXR5IHRvIHpvb20gdXNpbmcgbW91c2Ugd2hlZWxcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZGlzYWJsZU1vdXNlV2hlZWxab29tID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkKSB7XG4gICAgdmFyIGlzUGFzc2l2ZUxpc3RlbmVyID0gIXRoaXMub3B0aW9ucy5wcmV2ZW50TW91c2VFdmVudHNEZWZhdWx0O1xuICAgIFdoZWVsLm9mZihcbiAgICAgIHRoaXMub3B0aW9ucy5ldmVudHNMaXN0ZW5lckVsZW1lbnQgfHwgdGhpcy5zdmcsXG4gICAgICB0aGlzLndoZWVsTGlzdGVuZXIsXG4gICAgICBpc1Bhc3NpdmVMaXN0ZW5lclxuICAgICk7XG4gICAgdGhpcy5vcHRpb25zLm1vdXNlV2hlZWxab29tRW5hYmxlZCA9IGZhbHNlO1xuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZSBtb3VzZSB3aGVlbCBldmVudFxuICpcbiAqIEBwYXJhbSAge0V2ZW50fSBldnRcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaGFuZGxlTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGV2dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy56b29tRW5hYmxlZCB8fCB0aGlzLnN0YXRlICE9PSBcIm5vbmVcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCkge1xuICAgIGlmIChldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBEZWZhdWx0IGRlbHRhIGluIGNhc2UgdGhhdCBkZWx0YVkgaXMgbm90IGF2YWlsYWJsZVxuICB2YXIgZGVsdGEgPSBldnQuZGVsdGFZIHx8IDEsXG4gICAgdGltZURlbHRhID0gRGF0ZS5ub3coKSAtIHRoaXMubGFzdE1vdXNlV2hlZWxFdmVudFRpbWUsXG4gICAgZGl2aWRlciA9IDMgKyBNYXRoLm1heCgwLCAzMCAtIHRpbWVEZWx0YSk7XG5cbiAgLy8gVXBkYXRlIGNhY2hlXG4gIHRoaXMubGFzdE1vdXNlV2hlZWxFdmVudFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIC8vIE1ha2UgZW1waXJpY2FsIGFkanVzdG1lbnRzIGZvciBicm93c2VycyB0aGF0IGdpdmUgZGVsdGFZIGluIHBpeGVscyAoZGVsdGFNb2RlPTApXG4gIGlmIChcImRlbHRhTW9kZVwiIGluIGV2dCAmJiBldnQuZGVsdGFNb2RlID09PSAwICYmIGV2dC53aGVlbERlbHRhKSB7XG4gICAgZGVsdGEgPSBldnQuZGVsdGFZID09PSAwID8gMCA6IE1hdGguYWJzKGV2dC53aGVlbERlbHRhKSAvIGV2dC5kZWx0YVk7XG4gIH1cblxuICBkZWx0YSA9XG4gICAgLTAuMyA8IGRlbHRhICYmIGRlbHRhIDwgMC4zXG4gICAgICA/IGRlbHRhXG4gICAgICA6ICgoZGVsdGEgPiAwID8gMSA6IC0xKSAqIE1hdGgubG9nKE1hdGguYWJzKGRlbHRhKSArIDEwKSkgLyBkaXZpZGVyO1xuXG4gIHZhciBpbnZlcnNlZFNjcmVlbkNUTSA9IHRoaXMuc3ZnLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSxcbiAgICByZWxhdGl2ZU1vdXNlUG9pbnQgPSBTdmdVdGlscy5nZXRFdmVudFBvaW50KGV2dCwgdGhpcy5zdmcpLm1hdHJpeFRyYW5zZm9ybShcbiAgICAgIGludmVyc2VkU2NyZWVuQ1RNXG4gICAgKSxcbiAgICB6b29tID0gTWF0aC5wb3coMSArIHRoaXMub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSwgLTEgKiBkZWx0YSk7IC8vIG11bHRpcGx5aW5nIGJ5IG5lZy4gMSBzbyBhcyB0byBtYWtlIHpvb20gaW4vb3V0IGJlaGF2aW9yIG1hdGNoIEdvb2dsZSBtYXBzIGJlaGF2aW9yXG5cbiAgdGhpcy56b29tQXRQb2ludCh6b29tLCByZWxhdGl2ZU1vdXNlUG9pbnQpO1xufTtcblxuLyoqXG4gKiBab29tIGluIGF0IGEgU1ZHIHBvaW50XG4gKlxuICogQHBhcmFtICB7U1ZHUG9pbnR9IHBvaW50XG4gKiBAcGFyYW0gIHtGbG9hdH0gem9vbVNjYWxlICAgIE51bWJlciByZXByZXNlbnRpbmcgaG93IG11Y2ggdG8gem9vbVxuICogQHBhcmFtICB7Qm9vbGVhbn0gem9vbUFic29sdXRlIERlZmF1bHQgZmFsc2UuIElmIHRydWUsIHpvb21TY2FsZSBpcyB0cmVhdGVkIGFzIGFuIGFic29sdXRlIHZhbHVlLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyd2lzZSwgem9vbVNjYWxlIGlzIHRyZWF0ZWQgYXMgYSBtdWx0aXBsaWVkIChlLmcuIDEuMTAgd291bGQgem9vbSBpbiAxMCUpXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnpvb21BdFBvaW50ID0gZnVuY3Rpb24oem9vbVNjYWxlLCBwb2ludCwgem9vbUFic29sdXRlKSB7XG4gIHZhciBvcmlnaW5hbFN0YXRlID0gdGhpcy52aWV3cG9ydC5nZXRPcmlnaW5hbFN0YXRlKCk7XG5cbiAgaWYgKCF6b29tQWJzb2x1dGUpIHtcbiAgICAvLyBGaXQgem9vbVNjYWxlIGluIHNldCBib3VuZHNcbiAgICBpZiAoXG4gICAgICB0aGlzLmdldFpvb20oKSAqIHpvb21TY2FsZSA8XG4gICAgICB0aGlzLm9wdGlvbnMubWluWm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbVxuICAgICkge1xuICAgICAgem9vbVNjYWxlID0gKHRoaXMub3B0aW9ucy5taW5ab29tICogb3JpZ2luYWxTdGF0ZS56b29tKSAvIHRoaXMuZ2V0Wm9vbSgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmdldFpvb20oKSAqIHpvb21TY2FsZSA+XG4gICAgICB0aGlzLm9wdGlvbnMubWF4Wm9vbSAqIG9yaWdpbmFsU3RhdGUuem9vbVxuICAgICkge1xuICAgICAgem9vbVNjYWxlID0gKHRoaXMub3B0aW9ucy5tYXhab29tICogb3JpZ2luYWxTdGF0ZS56b29tKSAvIHRoaXMuZ2V0Wm9vbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBGaXQgem9vbVNjYWxlIGluIHNldCBib3VuZHNcbiAgICB6b29tU2NhbGUgPSBNYXRoLm1heChcbiAgICAgIHRoaXMub3B0aW9ucy5taW5ab29tICogb3JpZ2luYWxTdGF0ZS56b29tLFxuICAgICAgTWF0aC5taW4odGhpcy5vcHRpb25zLm1heFpvb20gKiBvcmlnaW5hbFN0YXRlLnpvb20sIHpvb21TY2FsZSlcbiAgICApO1xuICAgIC8vIEZpbmQgcmVsYXRpdmUgc2NhbGUgdG8gYWNoaWV2ZSBkZXNpcmVkIHNjYWxlXG4gICAgem9vbVNjYWxlID0gem9vbVNjYWxlIC8gdGhpcy5nZXRab29tKCk7XG4gIH1cblxuICB2YXIgb2xkQ1RNID0gdGhpcy52aWV3cG9ydC5nZXRDVE0oKSxcbiAgICByZWxhdGl2ZVBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG9sZENUTS5pbnZlcnNlKCkpLFxuICAgIG1vZGlmaWVyID0gdGhpcy5zdmdcbiAgICAgIC5jcmVhdGVTVkdNYXRyaXgoKVxuICAgICAgLnRyYW5zbGF0ZShyZWxhdGl2ZVBvaW50LngsIHJlbGF0aXZlUG9pbnQueSlcbiAgICAgIC5zY2FsZSh6b29tU2NhbGUpXG4gICAgICAudHJhbnNsYXRlKC1yZWxhdGl2ZVBvaW50LngsIC1yZWxhdGl2ZVBvaW50LnkpLFxuICAgIG5ld0NUTSA9IG9sZENUTS5tdWx0aXBseShtb2RpZmllcik7XG5cbiAgaWYgKG5ld0NUTS5hICE9PSBvbGRDVE0uYSkge1xuICAgIHRoaXMudmlld3BvcnQuc2V0Q1RNKG5ld0NUTSk7XG4gIH1cbn07XG5cbi8qKlxuICogWm9vbSBhdCBjZW50ZXIgcG9pbnRcbiAqXG4gKiBAcGFyYW0gIHtGbG9hdH0gc2NhbGVcbiAqIEBwYXJhbSAge0Jvb2xlYW59IGFic29sdXRlIE1hcmtzIHpvb20gc2NhbGUgYXMgcmVsYXRpdmUgb3IgYWJzb2x1dGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuem9vbSA9IGZ1bmN0aW9uKHNjYWxlLCBhYnNvbHV0ZSkge1xuICB0aGlzLnpvb21BdFBvaW50KFxuICAgIHNjYWxlLFxuICAgIFN2Z1V0aWxzLmdldFN2Z0NlbnRlclBvaW50KHRoaXMuc3ZnLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksXG4gICAgYWJzb2x1dGVcbiAgKTtcbn07XG5cbi8qKlxuICogWm9vbSB1c2VkIGJ5IHB1YmxpYyBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSBzY2FsZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gYWJzb2x1dGUgTWFya3Mgem9vbSBzY2FsZSBhcyByZWxhdGl2ZSBvciBhYnNvbHV0ZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5wdWJsaWNab29tID0gZnVuY3Rpb24oc2NhbGUsIGFic29sdXRlKSB7XG4gIGlmIChhYnNvbHV0ZSkge1xuICAgIHNjYWxlID0gdGhpcy5jb21wdXRlRnJvbVJlbGF0aXZlWm9vbShzY2FsZSk7XG4gIH1cblxuICB0aGlzLnpvb20oc2NhbGUsIGFic29sdXRlKTtcbn07XG5cbi8qKlxuICogWm9vbSBhdCBwb2ludCB1c2VkIGJ5IHB1YmxpYyBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSBzY2FsZVxuICogQHBhcmFtICB7U1ZHUG9pbnR8T2JqZWN0fSBwb2ludCAgICBBbiBvYmplY3QgdGhhdCBoYXMgeCBhbmQgeSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBhYnNvbHV0ZSBNYXJrcyB6b29tIHNjYWxlIGFzIHJlbGF0aXZlIG9yIGFic29sdXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnB1YmxpY1pvb21BdFBvaW50ID0gZnVuY3Rpb24oc2NhbGUsIHBvaW50LCBhYnNvbHV0ZSkge1xuICBpZiAoYWJzb2x1dGUpIHtcbiAgICAvLyBUcmFuc2Zvcm0gem9vbSBpbnRvIGEgcmVsYXRpdmUgdmFsdWVcbiAgICBzY2FsZSA9IHRoaXMuY29tcHV0ZUZyb21SZWxhdGl2ZVpvb20oc2NhbGUpO1xuICB9XG5cbiAgLy8gSWYgbm90IGEgU1ZHUG9pbnQgYnV0IGhhcyB4IGFuZCB5IHRoZW4gY3JlYXRlIGEgU1ZHUG9pbnRcbiAgaWYgKFV0aWxzLmdldFR5cGUocG9pbnQpICE9PSBcIlNWR1BvaW50XCIpIHtcbiAgICBpZiAoXCJ4XCIgaW4gcG9pbnQgJiYgXCJ5XCIgaW4gcG9pbnQpIHtcbiAgICAgIHBvaW50ID0gU3ZnVXRpbHMuY3JlYXRlU1ZHUG9pbnQodGhpcy5zdmcsIHBvaW50LngsIHBvaW50LnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBwb2ludCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuem9vbUF0UG9pbnQoc2NhbGUsIHBvaW50LCBhYnNvbHV0ZSk7XG59O1xuXG4vKipcbiAqIEdldCB6b29tIHNjYWxlXG4gKlxuICogQHJldHVybiB7RmxvYXR9IHpvb20gc2NhbGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZ2V0Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52aWV3cG9ydC5nZXRab29tKCk7XG59O1xuXG4vKipcbiAqIEdldCB6b29tIHNjYWxlIGZvciBwdWJsaWMgdXNhZ2VcbiAqXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5nZXRSZWxhdGl2ZVpvb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmlld3BvcnQuZ2V0UmVsYXRpdmVab29tKCk7XG59O1xuXG4vKipcbiAqIENvbXB1dGUgYWN0dWFsIHpvb20gZnJvbSBwdWJsaWMgem9vbVxuICpcbiAqIEBwYXJhbSAge0Zsb2F0fSB6b29tXG4gKiBAcmV0dXJuIHtGbG9hdH0gem9vbSBzY2FsZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5jb21wdXRlRnJvbVJlbGF0aXZlWm9vbSA9IGZ1bmN0aW9uKHpvb20pIHtcbiAgcmV0dXJuIHpvb20gKiB0aGlzLnZpZXdwb3J0LmdldE9yaWdpbmFsU3RhdGUoKS56b29tO1xufTtcblxuLyoqXG4gKiBTZXQgem9vbSB0byBpbml0aWFsIHN0YXRlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnJlc2V0Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgb3JpZ2luYWxTdGF0ZSA9IHRoaXMudmlld3BvcnQuZ2V0T3JpZ2luYWxTdGF0ZSgpO1xuXG4gIHRoaXMuem9vbShvcmlnaW5hbFN0YXRlLnpvb20sIHRydWUpO1xufTtcblxuLyoqXG4gKiBTZXQgcGFuIHRvIGluaXRpYWwgc3RhdGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucmVzZXRQYW4gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYW4odGhpcy52aWV3cG9ydC5nZXRPcmlnaW5hbFN0YXRlKCkpO1xufTtcblxuLyoqXG4gKiBTZXQgcGFuIGFuZCB6b29tIHRvIGluaXRpYWwgc3RhdGVcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZXNldFpvb20oKTtcbiAgdGhpcy5yZXNldFBhbigpO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgZG91YmxlIGNsaWNrIGV2ZW50XG4gKiBTZWUgaGFuZGxlTW91c2VEb3duKCkgZm9yIGFsdGVybmF0ZSBkZXRlY3Rpb24gbWV0aG9kXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmhhbmRsZURibENsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCkge1xuICAgIGlmIChldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0YXJnZXQgd2FzIGEgY29udHJvbCBidXR0b25cbiAgaWYgKHRoaXMub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkKSB7XG4gICAgdmFyIHRhcmdldENsYXNzID0gZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuICAgIGlmICh0YXJnZXRDbGFzcy5pbmRleE9mKFwic3ZnLXBhbi16b29tLWNvbnRyb2xcIikgPiAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciB6b29tRmFjdG9yO1xuXG4gIGlmIChldnQuc2hpZnRLZXkpIHtcbiAgICB6b29tRmFjdG9yID0gMSAvICgoMSArIHRoaXMub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSkgKiAyKTsgLy8gem9vbSBvdXQgd2hlbiBzaGlmdCBrZXkgcHJlc3NlZFxuICB9IGVsc2Uge1xuICAgIHpvb21GYWN0b3IgPSAoMSArIHRoaXMub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSkgKiAyO1xuICB9XG5cbiAgdmFyIHBvaW50ID0gU3ZnVXRpbHMuZ2V0RXZlbnRQb2ludChldnQsIHRoaXMuc3ZnKS5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgdGhpcy5zdmcuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpXG4gICk7XG4gIHRoaXMuem9vbUF0UG9pbnQoem9vbUZhY3RvciwgcG9pbnQpO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgY2xpY2sgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24oZXZ0LCBwcmV2RXZ0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCkge1xuICAgIGlmIChldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBVdGlscy5tb3VzZUFuZFRvdWNoTm9ybWFsaXplKGV2dCwgdGhpcy5zdmcpO1xuXG4gIC8vIERvdWJsZSBjbGljayBkZXRlY3Rpb247IG1vcmUgY29uc2lzdGVudCB0aGFuIG9uZGJsY2xpY2tcbiAgaWYgKHRoaXMub3B0aW9ucy5kYmxDbGlja1pvb21FbmFibGVkICYmIFV0aWxzLmlzRGJsQ2xpY2soZXZ0LCBwcmV2RXZ0KSkge1xuICAgIHRoaXMuaGFuZGxlRGJsQ2xpY2soZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYW4gbW9kZVxuICAgIHRoaXMuc3RhdGUgPSBcInBhblwiO1xuICAgIHRoaXMuZmlyc3RFdmVudENUTSA9IHRoaXMudmlld3BvcnQuZ2V0Q1RNKCk7XG4gICAgdGhpcy5zdGF0ZU9yaWdpbiA9IFN2Z1V0aWxzLmdldEV2ZW50UG9pbnQoZXZ0LCB0aGlzLnN2ZykubWF0cml4VHJhbnNmb3JtKFxuICAgICAgdGhpcy5maXJzdEV2ZW50Q1RNLmludmVyc2UoKVxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlIG1vdXNlIG1vdmUgZXZlbnRcbiAqXG4gKiBAcGFyYW0gIHtFdmVudH0gZXZ0XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmhhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQpIHtcbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuc3RhdGUgPT09IFwicGFuXCIgJiYgdGhpcy5vcHRpb25zLnBhbkVuYWJsZWQpIHtcbiAgICAvLyBQYW4gbW9kZVxuICAgIHZhciBwb2ludCA9IFN2Z1V0aWxzLmdldEV2ZW50UG9pbnQoZXZ0LCB0aGlzLnN2ZykubWF0cml4VHJhbnNmb3JtKFxuICAgICAgICB0aGlzLmZpcnN0RXZlbnRDVE0uaW52ZXJzZSgpXG4gICAgICApLFxuICAgICAgdmlld3BvcnRDVE0gPSB0aGlzLmZpcnN0RXZlbnRDVE0udHJhbnNsYXRlKFxuICAgICAgICBwb2ludC54IC0gdGhpcy5zdGF0ZU9yaWdpbi54LFxuICAgICAgICBwb2ludC55IC0gdGhpcy5zdGF0ZU9yaWdpbi55XG4gICAgICApO1xuXG4gICAgdGhpcy52aWV3cG9ydC5zZXRDVE0odmlld3BvcnRDVE0pO1xuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZSBtb3VzZSBidXR0b24gcmVsZWFzZSBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMucHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCkge1xuICAgIGlmIChldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJwYW5cIikge1xuICAgIC8vIFF1aXQgcGFuIG1vZGVcbiAgICB0aGlzLnN0YXRlID0gXCJub25lXCI7XG4gIH1cbn07XG5cbi8qKlxuICogQWRqdXN0IHZpZXdwb3J0IHNpemUgKG9ubHkpIHNvIGl0IHdpbGwgZml0IGluIFNWR1xuICogRG9lcyBub3QgY2VudGVyIGltYWdlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmZpdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmlld0JveCA9IHRoaXMudmlld3BvcnQuZ2V0Vmlld0JveCgpLFxuICAgIG5ld1NjYWxlID0gTWF0aC5taW4oXG4gICAgICB0aGlzLndpZHRoIC8gdmlld0JveC53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0IC8gdmlld0JveC5oZWlnaHRcbiAgICApO1xuXG4gIHRoaXMuem9vbShuZXdTY2FsZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEFkanVzdCB2aWV3cG9ydCBzaXplIChvbmx5KSBzbyBpdCB3aWxsIGNvbnRhaW4gdGhlIFNWR1xuICogRG9lcyBub3QgY2VudGVyIGltYWdlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmNvbnRhaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHZpZXdCb3ggPSB0aGlzLnZpZXdwb3J0LmdldFZpZXdCb3goKSxcbiAgICBuZXdTY2FsZSA9IE1hdGgubWF4KFxuICAgICAgdGhpcy53aWR0aCAvIHZpZXdCb3gud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCAvIHZpZXdCb3guaGVpZ2h0XG4gICAgKTtcblxuICB0aGlzLnpvb20obmV3U2NhbGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBBZGp1c3Qgdmlld3BvcnQgcGFuIChvbmx5KSBzbyBpdCB3aWxsIGJlIGNlbnRlcmVkIGluIFNWR1xuICogRG9lcyBub3Qgem9vbS9maXQvY29udGFpbiBpbWFnZVxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5jZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHZpZXdCb3ggPSB0aGlzLnZpZXdwb3J0LmdldFZpZXdCb3goKSxcbiAgICBvZmZzZXRYID1cbiAgICAgICh0aGlzLndpZHRoIC0gKHZpZXdCb3gud2lkdGggKyB2aWV3Qm94LnggKiAyKSAqIHRoaXMuZ2V0Wm9vbSgpKSAqIDAuNSxcbiAgICBvZmZzZXRZID1cbiAgICAgICh0aGlzLmhlaWdodCAtICh2aWV3Qm94LmhlaWdodCArIHZpZXdCb3gueSAqIDIpICogdGhpcy5nZXRab29tKCkpICogMC41O1xuXG4gIHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKS5wYW4oeyB4OiBvZmZzZXRYLCB5OiBvZmZzZXRZIH0pO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgY29udGVudCBjYWNoZWQgQm9yZGVyQm94XG4gKiBVc2Ugd2hlbiB2aWV3cG9ydCBjb250ZW50cyBjaGFuZ2VcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUudXBkYXRlQkJveCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnZpZXdwb3J0LnNpbXBsZVZpZXdCb3hDYWNoZSgpO1xufTtcblxuLyoqXG4gKiBQYW4gdG8gYSByZW5kZXJlZCBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gcG9pbnQge3g6IDAsIHk6IDB9XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLnBhbiA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHZhciB2aWV3cG9ydENUTSA9IHRoaXMudmlld3BvcnQuZ2V0Q1RNKCk7XG4gIHZpZXdwb3J0Q1RNLmUgPSBwb2ludC54O1xuICB2aWV3cG9ydENUTS5mID0gcG9pbnQueTtcbiAgdGhpcy52aWV3cG9ydC5zZXRDVE0odmlld3BvcnRDVE0pO1xufTtcblxuLyoqXG4gKiBSZWxhdGl2ZWx5IHBhbiB0aGUgZ3JhcGggYnkgYSBzcGVjaWZpZWQgcmVuZGVyZWQgcG9zaXRpb24gdmVjdG9yXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBwb2ludCB7eDogMCwgeTogMH1cbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUucGFuQnkgPSBmdW5jdGlvbihwb2ludCkge1xuICB2YXIgdmlld3BvcnRDVE0gPSB0aGlzLnZpZXdwb3J0LmdldENUTSgpO1xuICB2aWV3cG9ydENUTS5lICs9IHBvaW50Lng7XG4gIHZpZXdwb3J0Q1RNLmYgKz0gcG9pbnQueTtcbiAgdGhpcy52aWV3cG9ydC5zZXRDVE0odmlld3BvcnRDVE0pO1xufTtcblxuLyoqXG4gKiBHZXQgcGFuIHZlY3RvclxuICpcbiAqIEByZXR1cm4ge09iamVjdH0ge3g6IDAsIHk6IDB9XG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmdldFBhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLnZpZXdwb3J0LmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHsgeDogc3RhdGUueCwgeTogc3RhdGUueSB9O1xufTtcblxuLyoqXG4gKiBSZWNhbGN1bGF0ZXMgY2FjaGVkIHN2ZyBkaW1lbnNpb25zIGFuZCBjb250cm9scyBwb3NpdGlvblxuICovXG5TdmdQYW5ab29tLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgLy8gR2V0IGRpbWVuc2lvbnNcbiAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQgPSBTdmdVdGlscy5nZXRCb3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkKFxuICAgIHRoaXMuc3ZnXG4gICk7XG4gIHRoaXMud2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkLndpZHRoO1xuICB0aGlzLmhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQuaGVpZ2h0O1xuXG4gIC8vIFJlY2FsY3VsYXRlIG9yaWdpbmFsIHN0YXRlXG4gIHZhciB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQ7XG4gIHZpZXdwb3J0Lm9wdGlvbnMud2lkdGggPSB0aGlzLndpZHRoO1xuICB2aWV3cG9ydC5vcHRpb25zLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICB2aWV3cG9ydC5wcm9jZXNzQ1RNKCk7XG5cbiAgLy8gUmVwb3NpdGlvbiBjb250cm9sIGljb25zIGJ5IHJlLWVuYWJsaW5nIHRoZW1cbiAgaWYgKHRoaXMub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkKSB7XG4gICAgdGhpcy5nZXRQdWJsaWNJbnN0YW5jZSgpLmRpc2FibGVDb250cm9sSWNvbnMoKTtcbiAgICB0aGlzLmdldFB1YmxpY0luc3RhbmNlKCkuZW5hYmxlQ29udHJvbEljb25zKCk7XG4gIH1cbn07XG5cbi8qKlxuICogVW5iaW5kIG1vdXNlIGV2ZW50cywgZnJlZSBjYWxsYmFja3MgYW5kIGRlc3Ryb3kgcHVibGljIGluc3RhbmNlXG4gKi9cblN2Z1Bhblpvb20ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIC8vIEZyZWUgY2FsbGJhY2tzXG4gIHRoaXMuYmVmb3JlWm9vbSA9IG51bGw7XG4gIHRoaXMub25ab29tID0gbnVsbDtcbiAgdGhpcy5iZWZvcmVQYW4gPSBudWxsO1xuICB0aGlzLm9uUGFuID0gbnVsbDtcbiAgdGhpcy5vblVwZGF0ZWRDVE0gPSBudWxsO1xuXG4gIC8vIERlc3Ryb3kgY3VzdG9tIGV2ZW50IGhhbmRsZXJzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21FdmVudHNIYW5kbGVyICE9IG51bGwpIHtcbiAgICB0aGlzLm9wdGlvbnMuY3VzdG9tRXZlbnRzSGFuZGxlci5kZXN0cm95KHtcbiAgICAgIHN2Z0VsZW1lbnQ6IHRoaXMuc3ZnLFxuICAgICAgZXZlbnRzTGlzdGVuZXJFbGVtZW50OiB0aGlzLm9wdGlvbnMuZXZlbnRzTGlzdGVuZXJFbGVtZW50LFxuICAgICAgaW5zdGFuY2U6IHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVW5iaW5kIGV2ZW50TGlzdGVuZXJzXG4gIGZvciAodmFyIGV2ZW50IGluIHRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAodGhpcy5vcHRpb25zLmV2ZW50c0xpc3RlbmVyRWxlbWVudCB8fCB0aGlzLnN2ZykucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIGV2ZW50LFxuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0sXG4gICAgICAhdGhpcy5vcHRpb25zLnByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQgPyBwYXNzaXZlTGlzdGVuZXJPcHRpb24gOiBmYWxzZVxuICAgICk7XG4gIH1cblxuICAvLyBVbmJpbmQgd2hlZWxMaXN0ZW5lclxuICB0aGlzLmRpc2FibGVNb3VzZVdoZWVsWm9vbSgpO1xuXG4gIC8vIFJlbW92ZSBjb250cm9sIGljb25zXG4gIHRoaXMuZ2V0UHVibGljSW5zdGFuY2UoKS5kaXNhYmxlQ29udHJvbEljb25zKCk7XG5cbiAgLy8gUmVzZXQgem9vbSBhbmQgcGFuXG4gIHRoaXMucmVzZXQoKTtcblxuICAvLyBSZW1vdmUgaW5zdGFuY2UgZnJvbSBpbnN0YW5jZXNTdG9yZVxuICBpbnN0YW5jZXNTdG9yZSA9IGluc3RhbmNlc1N0b3JlLmZpbHRlcihmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZS5zdmcgIT09IHRoYXQuc3ZnO1xuICB9KTtcblxuICAvLyBEZWxldGUgb3B0aW9ucyBhbmQgaXRzIGNvbnRlbnRzXG4gIGRlbGV0ZSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gRGVsZXRlIHZpZXdwb3J0IHRvIG1ha2UgcHVibGljIHNoYWRvdyB2aWV3cG9ydCBmdW5jdGlvbnMgdW5jYWxsYWJsZVxuICBkZWxldGUgdGhpcy52aWV3cG9ydDtcblxuICAvLyBEZXN0cm95IHB1YmxpYyBpbnN0YW5jZSBhbmQgcmV3cml0ZSBnZXRQdWJsaWNJbnN0YW5jZVxuICBkZWxldGUgdGhpcy5wdWJsaWNJbnN0YW5jZTtcbiAgZGVsZXRlIHRoaXMucGk7XG4gIHRoaXMuZ2V0UHVibGljSW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHB1YmxpYyBpbnN0YW5jZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFB1YmxpYyBpbnN0YW5jZSBvYmplY3RcbiAqL1xuU3ZnUGFuWm9vbS5wcm90b3R5cGUuZ2V0UHVibGljSW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIC8vIENyZWF0ZSBjYWNoZVxuICBpZiAoIXRoaXMucHVibGljSW5zdGFuY2UpIHtcbiAgICB0aGlzLnB1YmxpY0luc3RhbmNlID0gdGhpcy5waSA9IHtcbiAgICAgIC8vIFBhblxuICAgICAgZW5hYmxlUGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLnBhbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlUGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLnBhbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgaXNQYW5FbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhhdC5vcHRpb25zLnBhbkVuYWJsZWQ7XG4gICAgICB9LFxuICAgICAgcGFuOiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgICB0aGF0LnBhbihwb2ludCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHBhbkJ5OiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgICB0aGF0LnBhbkJ5KHBvaW50KTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZ2V0UGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQuZ2V0UGFuKCk7XG4gICAgICB9LFxuICAgICAgLy8gUGFuIGV2ZW50XG4gICAgICBzZXRCZWZvcmVQYW46IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5iZWZvcmVQYW4gPVxuICAgICAgICAgIGZuID09PSBudWxsID8gbnVsbCA6IFV0aWxzLnByb3h5KGZuLCB0aGF0LnB1YmxpY0luc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgc2V0T25QYW46IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5vblBhbiA9XG4gICAgICAgICAgZm4gPT09IG51bGwgPyBudWxsIDogVXRpbHMucHJveHkoZm4sIHRoYXQucHVibGljSW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBab29tIGFuZCBDb250cm9sIEljb25zXG4gICAgICBlbmFibGVab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLnpvb21FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZVpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0Lm9wdGlvbnMuem9vbUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgaXNab29tRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoYXQub3B0aW9ucy56b29tRW5hYmxlZDtcbiAgICAgIH0sXG4gICAgICBlbmFibGVDb250cm9sSWNvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoYXQub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkKSB7XG4gICAgICAgICAgdGhhdC5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIENvbnRyb2xJY29ucy5lbmFibGUodGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZUNvbnRyb2xJY29uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGF0Lm9wdGlvbnMuY29udHJvbEljb25zRW5hYmxlZCkge1xuICAgICAgICAgIHRoYXQub3B0aW9ucy5jb250cm9sSWNvbnNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgQ29udHJvbEljb25zLmRpc2FibGUodGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgaXNDb250cm9sSWNvbnNFbmFibGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhhdC5vcHRpb25zLmNvbnRyb2xJY29uc0VuYWJsZWQ7XG4gICAgICB9LFxuICAgICAgLy8gRG91YmxlIGNsaWNrIHpvb21cbiAgICAgIGVuYWJsZURibENsaWNrWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5kYmxDbGlja1pvb21FbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZGlzYWJsZURibENsaWNrWm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5kYmxDbGlja1pvb21FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIGlzRGJsQ2xpY2tab29tRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoYXQub3B0aW9ucy5kYmxDbGlja1pvb21FbmFibGVkO1xuICAgICAgfSxcbiAgICAgIC8vIE1vdXNlIHdoZWVsIHpvb21cbiAgICAgIGVuYWJsZU1vdXNlV2hlZWxab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5lbmFibGVNb3VzZVdoZWVsWm9vbSgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlTW91c2VXaGVlbFpvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmRpc2FibGVNb3VzZVdoZWVsWm9vbSgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBpc01vdXNlV2hlZWxab29tRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoYXQub3B0aW9ucy5tb3VzZVdoZWVsWm9vbUVuYWJsZWQ7XG4gICAgICB9LFxuICAgICAgLy8gWm9vbSBzY2FsZSBhbmQgYm91bmRzXG4gICAgICBzZXRab29tU2NhbGVTZW5zaXRpdml0eTogZnVuY3Rpb24oc2NhbGUpIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLnpvb21TY2FsZVNlbnNpdGl2aXR5ID0gc2NhbGU7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHNldE1pblpvb206IGZ1bmN0aW9uKHpvb20pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLm1pblpvb20gPSB6b29tO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBzZXRNYXhab29tOiBmdW5jdGlvbih6b29tKSB7XG4gICAgICAgIHRoYXQub3B0aW9ucy5tYXhab29tID0gem9vbTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgLy8gWm9vbSBldmVudFxuICAgICAgc2V0QmVmb3JlWm9vbTogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLmJlZm9yZVpvb20gPVxuICAgICAgICAgIGZuID09PSBudWxsID8gbnVsbCA6IFV0aWxzLnByb3h5KGZuLCB0aGF0LnB1YmxpY0luc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgc2V0T25ab29tOiBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGF0Lm9wdGlvbnMub25ab29tID1cbiAgICAgICAgICBmbiA9PT0gbnVsbCA/IG51bGwgOiBVdGlscy5wcm94eShmbiwgdGhhdC5wdWJsaWNJbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIC8vIFpvb21pbmdcbiAgICAgIHpvb206IGZ1bmN0aW9uKHNjYWxlKSB7XG4gICAgICAgIHRoYXQucHVibGljWm9vbShzY2FsZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHpvb21CeTogZnVuY3Rpb24oc2NhbGUpIHtcbiAgICAgICAgdGhhdC5wdWJsaWNab29tKHNjYWxlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHpvb21BdFBvaW50OiBmdW5jdGlvbihzY2FsZSwgcG9pbnQpIHtcbiAgICAgICAgdGhhdC5wdWJsaWNab29tQXRQb2ludChzY2FsZSwgcG9pbnQsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICB6b29tQXRQb2ludEJ5OiBmdW5jdGlvbihzY2FsZSwgcG9pbnQpIHtcbiAgICAgICAgdGhhdC5wdWJsaWNab29tQXRQb2ludChzY2FsZSwgcG9pbnQsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgem9vbUluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy56b29tQnkoMSArIHRoYXQub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHpvb21PdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnpvb21CeSgxIC8gKDEgKyB0aGF0Lm9wdGlvbnMuem9vbVNjYWxlU2Vuc2l0aXZpdHkpKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZ2V0Wm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGF0LmdldFJlbGF0aXZlWm9vbSgpO1xuICAgICAgfSxcbiAgICAgIC8vIENUTSB1cGRhdGVcbiAgICAgIHNldE9uVXBkYXRlZENUTTogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdGhhdC5vcHRpb25zLm9uVXBkYXRlZENUTSA9XG4gICAgICAgICAgZm4gPT09IG51bGwgPyBudWxsIDogVXRpbHMucHJveHkoZm4sIHRoYXQucHVibGljSW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBSZXNldFxuICAgICAgcmVzZXRab29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZXNldFpvb20oKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgcmVzZXRQYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlc2V0UGFuKCk7XG4gICAgICAgIHJldHVybiB0aGF0LnBpO1xuICAgICAgfSxcbiAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZXNldCgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBGaXQsIENvbnRhaW4gYW5kIENlbnRlclxuICAgICAgZml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5maXQoKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgY29udGFpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuY29udGFpbigpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICBjZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LmNlbnRlcigpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH0sXG4gICAgICAvLyBTaXplIGFuZCBSZXNpemVcbiAgICAgIHVwZGF0ZUJCb3g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnVwZGF0ZUJCb3goKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhhdC5yZXNpemUoKTtcbiAgICAgICAgcmV0dXJuIHRoYXQucGk7XG4gICAgICB9LFxuICAgICAgZ2V0U2l6ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiB0aGF0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhhdC5oZWlnaHQsXG4gICAgICAgICAgcmVhbFpvb206IHRoYXQuZ2V0Wm9vbSgpLFxuICAgICAgICAgIHZpZXdCb3g6IHRoYXQudmlld3BvcnQuZ2V0Vmlld0JveCgpXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgLy8gRGVzdHJveVxuICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoYXQuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gdGhhdC5waTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMucHVibGljSW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFN0b3JlcyBwYWlycyBvZiBpbnN0YW5jZXMgb2YgU3ZnUGFuWm9vbSBhbmQgU1ZHXG4gKiBFYWNoIHBhaXIgaXMgcmVwcmVzZW50ZWQgYnkgYW4gb2JqZWN0IHtzdmc6IFNWR1NWR0VsZW1lbnQsIGluc3RhbmNlOiBTdmdQYW5ab29tfVxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIGluc3RhbmNlc1N0b3JlID0gW107XG5cbnZhciBzdmdQYW5ab29tID0gZnVuY3Rpb24oZWxlbWVudE9yU2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgdmFyIHN2ZyA9IFV0aWxzLmdldFN2ZyhlbGVtZW50T3JTZWxlY3Rvcik7XG5cbiAgaWYgKHN2ZyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIExvb2sgZm9yIGV4aXN0ZW50IGluc3RhbmNlXG4gICAgZm9yICh2YXIgaSA9IGluc3RhbmNlc1N0b3JlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoaW5zdGFuY2VzU3RvcmVbaV0uc3ZnID09PSBzdmcpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlc1N0b3JlW2ldLmluc3RhbmNlLmdldFB1YmxpY0luc3RhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgaW5zdGFuY2Ugbm90IGZvdW5kIC0gY3JlYXRlIG9uZVxuICAgIGluc3RhbmNlc1N0b3JlLnB1c2goe1xuICAgICAgc3ZnOiBzdmcsXG4gICAgICBpbnN0YW5jZTogbmV3IFN2Z1Bhblpvb20oc3ZnLCBvcHRpb25zKVxuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIGp1c3QgcHVzaGVkIGluc3RhbmNlXG4gICAgcmV0dXJuIGluc3RhbmNlc1N0b3JlW1xuICAgICAgaW5zdGFuY2VzU3RvcmUubGVuZ3RoIC0gMVxuICAgIF0uaW5zdGFuY2UuZ2V0UHVibGljSW5zdGFuY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdmdQYW5ab29tO1xuIiwidmFyIFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpLFxuICBfYnJvd3NlciA9IFwidW5rbm93blwiO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NDc1ODAvaG93LXRvLWRldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtYW5kLW9wZXJhLWJyb3dzZXJcbmlmICgvKkBjY19vbiFAKi8gZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcbiAgLy8gaW50ZXJuZXQgZXhwbG9yZXJcbiAgX2Jyb3dzZXIgPSBcImllXCI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdmdOUzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4bWxOUzogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnNOUzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiLFxuICB4bGlua05TOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgZXZOUzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHNcIixcblxuICAvKipcbiAgICogR2V0IHN2ZyBkaW1lbnNpb25zOiB3aWR0aCBhbmQgaGVpZ2h0XG4gICAqXG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICB7d2lkdGg6IDAsIGhlaWdodDogMH1cbiAgICovXG4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQ6IGZ1bmN0aW9uKHN2Zykge1xuICAgIGlmIChzdmcuY2xpZW50V2lkdGggJiYgc3ZnLmNsaWVudEhlaWdodCkge1xuICAgICAgcmV0dXJuIHsgd2lkdGg6IHN2Zy5jbGllbnRXaWR0aCwgaGVpZ2h0OiBzdmcuY2xpZW50SGVpZ2h0IH07XG4gICAgfSBlbHNlIGlmICghIXN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkge1xuICAgICAgcmV0dXJuIHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBCb3VuZGluZ0NsaWVudFJlY3QgZm9yIFNWRy5cIik7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIGcgZWxlbWVudCB3aXRoIGNsYXNzIG9mIFwidmlld3BvcnRcIiBvciBjcmVhdGVzIGl0IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICpcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqIEByZXR1cm4ge1NWR0VsZW1lbnR9ICAgICBnIChncm91cCkgZWxlbWVudFxuICAgKi9cbiAgZ2V0T3JDcmVhdGVWaWV3cG9ydDogZnVuY3Rpb24oc3ZnLCBzZWxlY3Rvcikge1xuICAgIHZhciB2aWV3cG9ydCA9IG51bGw7XG5cbiAgICBpZiAoVXRpbHMuaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgdmlld3BvcnQgPSBzZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlld3BvcnQgPSBzdmcucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMganVzdCBvbmUgbWFpbiBncm91cCBpbiBTVkdcbiAgICBpZiAoIXZpZXdwb3J0KSB7XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAuY2FsbChzdmcuY2hpbGROb2RlcyB8fCBzdmcuY2hpbGRyZW4pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwubm9kZU5hbWUgIT09IFwiZGVmc1wiICYmIGVsLm5vZGVOYW1lICE9PSBcIiN0ZXh0XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBOb2RlIG5hbWUgc2hvdWxkIGJlIFNWR0dFbGVtZW50IGFuZCBzaG91bGQgaGF2ZSBubyB0cmFuc2Zvcm0gYXR0cmlidXRlXG4gICAgICAvLyBHcm91cHMgd2l0aCB0cmFuc2Zvcm0gYXJlIG5vdCB1c2VkIGFzIHZpZXdwb3J0IGJlY2F1c2UgaXQgaW52b2x2ZXMgcGFyc2luZyBvZiBhbGwgdHJhbnNmb3JtIHBvc3NpYmlsaXRpZXNcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PT0gXCJnXCIgJiZcbiAgICAgICAgY2hpbGROb2Rlc1swXS5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikgPT09IG51bGxcbiAgICAgICkge1xuICAgICAgICB2aWV3cG9ydCA9IGNoaWxkTm9kZXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gZmF2b3JhYmxlIGdyb3VwIGVsZW1lbnQgZXhpc3RzIHRoZW4gY3JlYXRlIG9uZVxuICAgIGlmICghdmlld3BvcnQpIHtcbiAgICAgIHZhciB2aWV3cG9ydElkID1cbiAgICAgICAgXCJ2aWV3cG9ydC1cIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICB2aWV3cG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z05TLCBcImdcIik7XG4gICAgICB2aWV3cG9ydC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB2aWV3cG9ydElkKTtcblxuICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgKGFsbCB2ZXJzaW9ucz8pIGNhbid0IHVzZSBjaGlsZE5vZGVzLCBidXQgb3RoZXIgYnJvd3NlcnMgcHJlZmVyIChyZXF1aXJlPykgdXNpbmcgY2hpbGROb2Rlc1xuICAgICAgdmFyIHN2Z0NoaWxkcmVuID0gc3ZnLmNoaWxkTm9kZXMgfHwgc3ZnLmNoaWxkcmVuO1xuICAgICAgaWYgKCEhc3ZnQ2hpbGRyZW4gJiYgc3ZnQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gc3ZnQ2hpbGRyZW4ubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgLy8gTW92ZSBldmVyeXRoaW5nIGludG8gdmlld3BvcnQgZXhjZXB0IGRlZnNcbiAgICAgICAgICBpZiAoc3ZnQ2hpbGRyZW5bc3ZnQ2hpbGRyZW4ubGVuZ3RoIC0gaV0ubm9kZU5hbWUgIT09IFwiZGVmc1wiKSB7XG4gICAgICAgICAgICB2aWV3cG9ydC5hcHBlbmRDaGlsZChzdmdDaGlsZHJlbltzdmdDaGlsZHJlbi5sZW5ndGggLSBpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdmcuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGNsYXNzIG5hbWVzXG4gICAgdmFyIGNsYXNzTmFtZXMgPSBbXTtcbiAgICBpZiAodmlld3BvcnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpIHtcbiAgICAgIGNsYXNzTmFtZXMgPSB2aWV3cG9ydC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5zcGxpdChcIiBcIik7XG4gICAgfVxuXG4gICAgLy8gU2V0IGNsYXNzIChpZiBub3Qgc2V0IGFscmVhZHkpXG4gICAgaWYgKCF+Y2xhc3NOYW1lcy5pbmRleE9mKFwic3ZnLXBhbi16b29tX3ZpZXdwb3J0XCIpKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goXCJzdmctcGFuLXpvb21fdmlld3BvcnRcIik7XG4gICAgICB2aWV3cG9ydC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld3BvcnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCBTVkcgYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICovXG4gIHNldHVwU3ZnQXR0cmlidXRlczogZnVuY3Rpb24oc3ZnKSB7XG4gICAgLy8gU2V0dGluZyBkZWZhdWx0IGF0dHJpYnV0ZXNcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgdGhpcy5zdmdOUyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKHRoaXMueG1sbnNOUywgXCJ4bWxuczp4bGlua1wiLCB0aGlzLnhsaW5rTlMpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyh0aGlzLnhtbG5zTlMsIFwieG1sbnM6ZXZcIiwgdGhpcy5ldk5TKTtcblxuICAgIC8vIE5lZWRlZCBmb3IgSW50ZXJuZXQgRXhwbG9yZXIsIG90aGVyd2lzZSB0aGUgdmlld3BvcnQgb3ZlcmZsb3dzXG4gICAgaWYgKHN2Zy5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICB2YXIgc3R5bGUgPSBzdmcuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcbiAgICAgIGlmIChzdHlsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJvdmVyZmxvd1wiKSA9PT0gLTEpIHtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3ZlcmZsb3c6IGhpZGRlbjsgXCIgKyBzdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIb3cgbG9uZyBJbnRlcm5ldCBFeHBsb3JlciB0YWtlcyB0byBmaW5pc2ggdXBkYXRpbmcgaXRzIGRpc3BsYXkgKG1zKS5cbiAgICovXG4gIGludGVybmV0RXhwbG9yZXJSZWRpc3BsYXlJbnRlcnZhbDogMzAwLFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVkaXNwbGF5IGFsbCBTVkcgZWxlbWVudHMgdGhhdCByZWx5IG9uIGFuXG4gICAqIGVsZW1lbnQgZGVmaW5lZCBpbiBhICdkZWZzJyBzZWN0aW9uLiBJdCB3b3JrcyBnbG9iYWxseSwgZm9yIGV2ZXJ5XG4gICAqIGF2YWlsYWJsZSBkZWZzIGVsZW1lbnQgb24gdGhlIHBhZ2UuXG4gICAqIFRoZSB0aHJvdHRsaW5nIGlzIGludGVudGlvbmFsbHkgZ2xvYmFsLlxuICAgKlxuICAgKiBUaGlzIGlzIG9ubHkgbmVlZGVkIGZvciBJRS4gSXQgaXMgYXMgYSBoYWNrIHRvIG1ha2UgbWFya2VycyAoYW5kICd1c2UnIGVsZW1lbnRzPylcbiAgICogdmlzaWJsZSBhZnRlciBwYW4vem9vbSB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBTVkdzIG9uIHRoZSBwYWdlLlxuICAgKiBTZWUgYnVnIHJlcG9ydDogaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy83ODE5NjQvXG4gICAqIGFsc28gc2VlIHN2Zy1wYW4tem9vbSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2FyaXV0dGEvc3ZnLXBhbi16b29tL2lzc3Vlcy82MlxuICAgKi9cbiAgcmVmcmVzaERlZnNHbG9iYWw6IFV0aWxzLnRocm90dGxlKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFsbERlZnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGVmc1wiKTtcbiAgICAgIHZhciBhbGxEZWZzQ291bnQgPSBhbGxEZWZzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRGVmc0NvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIHRoaXNEZWZzID0gYWxsRGVmc1tpXTtcbiAgICAgICAgdGhpc0RlZnMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc0RlZnMsIHRoaXNEZWZzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXMgPyB0aGlzLmludGVybmV0RXhwbG9yZXJSZWRpc3BsYXlJbnRlcnZhbCA6IG51bGxcbiAgKSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gbWF0cml4IG9mIGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTVkdFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U1ZHTWF0cml4fSBtYXRyaXggIENUTVxuICAgKiBAcGFyYW0ge1NWR0VsZW1lbnR9IGRlZnNcbiAgICovXG4gIHNldENUTTogZnVuY3Rpb24oZWxlbWVudCwgbWF0cml4LCBkZWZzKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgcyA9XG4gICAgICAgIFwibWF0cml4KFwiICtcbiAgICAgICAgbWF0cml4LmEgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5iICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBtYXRyaXguYyArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgbWF0cml4LmQgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5lICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBtYXRyaXguZiArXG4gICAgICAgIFwiKVwiO1xuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInRyYW5zZm9ybVwiLCBzKTtcbiAgICBpZiAoXCJ0cmFuc2Zvcm1cIiBpbiBlbGVtZW50LnN0eWxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHM7XG4gICAgfSBlbHNlIGlmIChcIi1tcy10cmFuc2Zvcm1cIiBpbiBlbGVtZW50LnN0eWxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW1wiLW1zLXRyYW5zZm9ybVwiXSA9IHM7XG4gICAgfSBlbHNlIGlmIChcIi13ZWJraXQtdHJhbnNmb3JtXCIgaW4gZWxlbWVudC5zdHlsZSkge1xuICAgICAgZWxlbWVudC5zdHlsZVtcIi13ZWJraXQtdHJhbnNmb3JtXCJdID0gcztcbiAgICB9XG5cbiAgICAvLyBJRSBoYXMgYSBidWcgdGhhdCBtYWtlcyBtYXJrZXJzIGRpc2FwcGVhciBvbiB6b29tICh3aGVuIHRoZSBtYXRyaXggXCJhXCIgYW5kL29yIFwiZFwiIGVsZW1lbnRzIGNoYW5nZSlcbiAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzY1NDU3OC9zdmctbWFya2VyLWRvZXMtbm90LXdvcmstaW4taWU5LTEwXG4gICAgLy8gYW5kIGh0dHA6Ly9zcm5kb2xoYS53b3JkcHJlc3MuY29tLzIwMTMvMTEvMjUvc3ZnLWxpbmUtbWFya2Vycy1tYXktZGlzYXBwZWFyLWluLWludGVybmV0LWV4cGxvcmVyLTExL1xuICAgIGlmIChfYnJvd3NlciA9PT0gXCJpZVwiICYmICEhZGVmcykge1xuICAgICAgLy8gdGhpcyByZWZyZXNoIGlzIGludGVuZGVkIGZvciByZWRpc3BsYXlpbmcgdGhlIFNWRyBkdXJpbmcgem9vbWluZ1xuICAgICAgZGVmcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkZWZzLCBkZWZzKTtcbiAgICAgIC8vIHRoaXMgcmVmcmVzaCBpcyBpbnRlbmRlZCBmb3IgcmVkaXNwbGF5aW5nIHRoZSBvdGhlciBTVkdzIG9uIGEgcGFnZSB3aGVuIHBhbm5pbmcgYSBnaXZlbiBTVkdcbiAgICAgIC8vIGl0IGlzIGFsc28gbmVlZGVkIGZvciB0aGUgZ2l2ZW4gU1ZHIGl0c2VsZiwgb24gem9vbUVuZCwgaWYgdGhlIFNWRyBjb250YWlucyBhbnkgbWFya2VycyB0aGF0XG4gICAgICAvLyBhcmUgbG9jYXRlZCB1bmRlciBhbnkgb3RoZXIgZWxlbWVudChzKS5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LnJlZnJlc2hEZWZzR2xvYmFsKCk7XG4gICAgICB9LCB0aGF0LmludGVybmV0RXhwbG9yZXJSZWRpc3BsYXlJbnRlcnZhbCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBhbiBTVkdQb2ludCBvYmplY3Qgd2l0aCBnaXZlbiBldmVudCBjb29yZGluYXRlc1xuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtICB7U1ZHU1ZHRWxlbWVudH0gc3ZnXG4gICAqIEByZXR1cm4ge1NWR1BvaW50fSAgICAgcG9pbnRcbiAgICovXG4gIGdldEV2ZW50UG9pbnQ6IGZ1bmN0aW9uKGV2dCwgc3ZnKSB7XG4gICAgdmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cbiAgICBVdGlscy5tb3VzZUFuZFRvdWNoTm9ybWFsaXplKGV2dCwgc3ZnKTtcblxuICAgIHBvaW50LnggPSBldnQuY2xpZW50WDtcbiAgICBwb2ludC55ID0gZXZ0LmNsaWVudFk7XG5cbiAgICByZXR1cm4gcG9pbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBTVkcgY2VudGVyIHBvaW50XG4gICAqXG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKiBAcmV0dXJuIHtTVkdQb2ludH1cbiAgICovXG4gIGdldFN2Z0NlbnRlclBvaW50OiBmdW5jdGlvbihzdmcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVTVkdQb2ludChzdmcsIHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFNWR1BvaW50IHdpdGggZ2l2ZW4geCBhbmQgeVxuICAgKlxuICAgKiBAcGFyYW0gIHtTVkdTVkdFbGVtZW50fSBzdmdcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4XG4gICAqIEBwYXJhbSAge051bWJlcn0geVxuICAgKiBAcmV0dXJuIHtTVkdQb2ludH1cbiAgICovXG4gIGNyZWF0ZVNWR1BvaW50OiBmdW5jdGlvbihzdmcsIHgsIHkpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0geDtcbiAgICBwb2ludC55ID0geTtcblxuICAgIHJldHVybiBwb2ludDtcbiAgfVxufTtcbiIsIi8vIHVuaXdoZWVsIDAuMS4yIChjdXN0b21pemVkKVxuLy8gQSB1bmlmaWVkIGNyb3NzIGJyb3dzZXIgbW91c2Ugd2hlZWwgZXZlbnQgaGFuZGxlclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RlZW11YWxhcC91bml3aGVlbFxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpe1xuXG4gIC8vRnVsbCBkZXRhaWxzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9SZWZlcmVuY2UvRXZlbnRzL3doZWVsXG5cbiAgdmFyIHByZWZpeCA9IFwiXCIsIF9hZGRFdmVudExpc3RlbmVyLCBfcmVtb3ZlRXZlbnRMaXN0ZW5lciwgc3VwcG9ydCwgZm5zID0gW107XG4gIHZhciBwYXNzaXZlT3B0aW9uID0ge3Bhc3NpdmU6IHRydWV9O1xuXG4gIC8vIGRldGVjdCBldmVudCBtb2RlbFxuICBpZiAoIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhZGRFdmVudExpc3RlbmVyXCI7XG4gICAgX3JlbW92ZUV2ZW50TGlzdGVuZXIgPSBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjtcbiAgfSBlbHNlIHtcbiAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYXR0YWNoRXZlbnRcIjtcbiAgICBfcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFwiZGV0YWNoRXZlbnRcIjtcbiAgICBwcmVmaXggPSBcIm9uXCI7XG4gIH1cblxuICAvLyBkZXRlY3QgYXZhaWxhYmxlIHdoZWVsIGV2ZW50XG4gIHN1cHBvcnQgPSBcIm9ud2hlZWxcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpID8gXCJ3aGVlbFwiIDogLy8gTW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgXCJ3aGVlbFwiXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCA/IFwibW91c2V3aGVlbFwiIDogLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXG4gICAgICAgICAgICBcIkRPTU1vdXNlU2Nyb2xsXCI7IC8vIGxldCdzIGFzc3VtZSB0aGF0IHJlbWFpbmluZyBicm93c2VycyBhcmUgb2xkZXIgRmlyZWZveFxuXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soZWxlbWVudCxjYWxsYmFjaykge1xuXG4gICAgdmFyIGZuID0gZnVuY3Rpb24ob3JpZ2luYWxFdmVudCkge1xuXG4gICAgICAhb3JpZ2luYWxFdmVudCAmJiAoIG9yaWdpbmFsRXZlbnQgPSB3aW5kb3cuZXZlbnQgKTtcblxuICAgICAgLy8gY3JlYXRlIGEgbm9ybWFsaXplZCBldmVudCBvYmplY3RcbiAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgLy8ga2VlcCBhIHJlZiB0byB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICAgIHRhcmdldDogb3JpZ2luYWxFdmVudC50YXJnZXQgfHwgb3JpZ2luYWxFdmVudC5zcmNFbGVtZW50LFxuICAgICAgICB0eXBlOiBcIndoZWVsXCIsXG4gICAgICAgIGRlbHRhTW9kZTogb3JpZ2luYWxFdmVudC50eXBlID09IFwiTW96TW91c2VQaXhlbFNjcm9sbFwiID8gMCA6IDEsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsYXRaOiAwLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgb3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCA/XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCkgOlxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBjYWxjdWxhdGUgZGVsdGFZIChhbmQgZGVsdGFYKSBhY2NvcmRpbmcgdG8gdGhlIGV2ZW50XG4gICAgICBpZiAoIHN1cHBvcnQgPT0gXCJtb3VzZXdoZWVsXCIgKSB7XG4gICAgICAgIGV2ZW50LmRlbHRhWSA9IC0gMS80MCAqIG9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcbiAgICAgICAgLy8gV2Via2l0IGFsc28gc3VwcG9ydCB3aGVlbERlbHRhWFxuICAgICAgICBvcmlnaW5hbEV2ZW50LndoZWVsRGVsdGFYICYmICggZXZlbnQuZGVsdGFYID0gLSAxLzQwICogb3JpZ2luYWxFdmVudC53aGVlbERlbHRhWCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQuZGVsdGFZID0gb3JpZ2luYWxFdmVudC5kZXRhaWw7XG4gICAgICB9XG5cbiAgICAgIC8vIGl0J3MgdGltZSB0byBmaXJlIHRoZSBjYWxsYmFja1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCBldmVudCApO1xuXG4gICAgfTtcblxuICAgIGZucy5wdXNoKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBmbjogZm4sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmbnNbaV0uZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZm5zW2ldLmZuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2FsbGJhY2soZWxlbWVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm5zW2ldLmVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5zcGxpY2UoaSwxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYWRkV2hlZWxMaXN0ZW5lcihlbGVtLCBldmVudE5hbWUsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lciApIHtcbiAgICB2YXIgY2I7XG5cbiAgICBpZiAoc3VwcG9ydCA9PT0gXCJ3aGVlbFwiKSB7XG4gICAgICBjYiA9IGNhbGxiYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYiA9IGNyZWF0ZUNhbGxiYWNrKGVsZW0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBlbGVtW19hZGRFdmVudExpc3RlbmVyXShwcmVmaXggKyBldmVudE5hbWUsIGNiLCBpc1Bhc3NpdmVMaXN0ZW5lciA/IHBhc3NpdmVPcHRpb24gOiBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlV2hlZWxMaXN0ZW5lcihlbGVtLCBldmVudE5hbWUsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lciApIHtcblxuICAgIHZhciBjYjtcblxuICAgIGlmIChzdXBwb3J0ID09PSBcIndoZWVsXCIpIHtcbiAgICAgIGNiID0gY2FsbGJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNiID0gZ2V0Q2FsbGJhY2soZWxlbSk7XG4gICAgfVxuXG4gICAgZWxlbVtfcmVtb3ZlRXZlbnRMaXN0ZW5lcl0ocHJlZml4ICsgZXZlbnROYW1lLCBjYiwgaXNQYXNzaXZlTGlzdGVuZXIgPyBwYXNzaXZlT3B0aW9uIDogZmFsc2UpO1xuXG4gICAgcmVtb3ZlQ2FsbGJhY2soZWxlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRXaGVlbExpc3RlbmVyKCBlbGVtLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIgKSB7XG4gICAgX2FkZFdoZWVsTGlzdGVuZXIoZWxlbSwgc3VwcG9ydCwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyICk7XG5cbiAgICAvLyBoYW5kbGUgTW96TW91c2VQaXhlbFNjcm9sbCBpbiBvbGRlciBGaXJlZm94XG4gICAgaWYoIHN1cHBvcnQgPT0gXCJET01Nb3VzZVNjcm9sbFwiICkge1xuICAgICAgX2FkZFdoZWVsTGlzdGVuZXIoZWxlbSwgXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsIGNhbGxiYWNrLCBpc1Bhc3NpdmVMaXN0ZW5lciApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVdoZWVsTGlzdGVuZXIoZWxlbSwgY2FsbGJhY2ssIGlzUGFzc2l2ZUxpc3RlbmVyKXtcbiAgICBfcmVtb3ZlV2hlZWxMaXN0ZW5lcihlbGVtLCBzdXBwb3J0LCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgLy8gaGFuZGxlIE1vek1vdXNlUGl4ZWxTY3JvbGwgaW4gb2xkZXIgRmlyZWZveFxuICAgIGlmKCBzdXBwb3J0ID09IFwiRE9NTW91c2VTY3JvbGxcIiApIHtcbiAgICAgIF9yZW1vdmVXaGVlbExpc3RlbmVyKGVsZW0sIFwiTW96TW91c2VQaXhlbFNjcm9sbFwiLCBjYWxsYmFjaywgaXNQYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb246IGFkZFdoZWVsTGlzdGVuZXIsXG4gICAgb2ZmOiByZW1vdmVXaGVlbExpc3RlbmVyXG4gIH07XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgLyoqXG4gICAqIEV4dGVuZHMgYW4gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gdGFyZ2V0IG9iamVjdCB0byBleHRlbmRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBzb3VyY2Ugb2JqZWN0IHRvIHRha2UgcHJvcGVydGllcyBmcm9tXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgIGV4dGVuZGVkIG9iamVjdFxuICAgKi9cbiAgZXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcbiAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgLy8gR28gcmVjdXJzaXZlbHlcbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KHNvdXJjZVtwcm9wXSkpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdGhpcy5leHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gb2JqZWN0IGlzIGEgRE9NIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbyBIVE1MIGVsZW1lbnQgb3IgU3RyaW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgcmV0dXJucyB0cnVlIGlmIG9iamVjdCBpcyBhIERPTSBlbGVtZW50XG4gICAqL1xuICBpc0VsZW1lbnQ6IGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8XG4gICAgICBvIGluc3RhbmNlb2YgU1ZHRWxlbWVudCB8fFxuICAgICAgbyBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQgfHwgLy9ET00yXG4gICAgICAobyAmJlxuICAgICAgICB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICBvICE9PSBudWxsICYmXG4gICAgICAgIG8ubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCIpXG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBhbiBPYmplY3RcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgbyBPYmplY3RcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICByZXR1cm5zIHRydWUgaWYgb2JqZWN0IGlzIGFuIE9iamVjdFxuICAgKi9cbiAgaXNPYmplY3Q6IGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdmFyaWFibGUgaXMgTnVtYmVyXG4gICAqXG4gICAqIEBwYXJhbSAge0ludGVnZXJ8RmxvYXR9ICBuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgcmV0dXJucyB0cnVlIGlmIHZhcmlhYmxlIGlzIE51bWJlclxuICAgKi9cbiAgaXNOdW1iZXI6IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIGFuIFNWRyBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdHxTdHJpbmd9IGVsZW1lbnRPclNlbGVjdG9yIERPTSBFbGVtZW50IG9yIHNlbGVjdG9yIFN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R8TnVsbH0gICAgICAgICAgICAgICAgICAgU1ZHIG9yIG51bGxcbiAgICovXG4gIGdldFN2ZzogZnVuY3Rpb24oZWxlbWVudE9yU2VsZWN0b3IpIHtcbiAgICB2YXIgZWxlbWVudCwgc3ZnO1xuXG4gICAgaWYgKCF0aGlzLmlzRWxlbWVudChlbGVtZW50T3JTZWxlY3RvcikpIHtcbiAgICAgIC8vIElmIHNlbGVjdG9yIHByb3ZpZGVkXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBlbGVtZW50T3JTZWxlY3RvciA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICBlbGVtZW50T3JTZWxlY3RvciBpbnN0YW5jZW9mIFN0cmluZ1xuICAgICAgKSB7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBlbGVtZW50XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRPclNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlByb3ZpZGVkIHNlbGVjdG9yIGRpZCBub3QgZmluZCBhbnkgZWxlbWVudHMuIFNlbGVjdG9yOiBcIiArXG4gICAgICAgICAgICAgIGVsZW1lbnRPclNlbGVjdG9yXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgc2VsZWN0b3IgaXMgbm90IGFuIEhUTUwgb2JqZWN0IG5vciBTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudE9yU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiKSB7XG4gICAgICBzdmcgPSBlbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgc3ZnID0gZWxlbWVudC5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImVtYmVkXCIpIHtcbiAgICAgICAgICBzdmcgPSBlbGVtZW50LmdldFNWR0RvY3VtZW50KCkuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbWdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAnQ2Fubm90IHNjcmlwdCBhbiBTVkcgaW4gYW4gXCJpbWdcIiBlbGVtZW50LiBQbGVhc2UgdXNlIGFuIFwib2JqZWN0XCIgZWxlbWVudCBvciBhbiBpbi1saW5lIFNWRy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZ2V0IFNWRy5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN2ZztcbiAgfSxcblxuICAvKipcbiAgICogQXR0YWNoIGEgZ2l2ZW4gY29udGV4dCB0byBhIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBjb250ZXh0IENvbnRleHRcbiAgICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICBGdW5jdGlvbiB3aXRoIGNlcnRhaW4gY29udGV4dFxuICAgKi9cbiAgcHJveHk6IGZ1bmN0aW9uKGZuLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBvYmplY3QgdHlwZVxuICAgKiBVc2VzIHRvU3RyaW5nIHRoYXQgcmV0dXJucyBbb2JqZWN0IFNWR1BvaW50XVxuICAgKiBBbmQgdGhhbiBwYXJzZXMgb2JqZWN0IHR5cGUgZnJvbSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvIEFueSBvYmplY3RcbiAgICogQHJldHVybiB7U3RyaW5nfSAgIE9iamVjdCB0eXBlXG4gICAqL1xuICBnZXRUeXBlOiBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcbiAgICAgIC5hcHBseShvKVxuICAgICAgLnJlcGxhY2UoL15cXFtvYmplY3RcXHMvLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1xcXSQvLCBcIlwiKTtcbiAgfSxcblxuICAvKipcbiAgICogSWYgaXQgaXMgYSB0b3VjaCBldmVudCB0aGFuIGFkZCBjbGllbnRYIGFuZCBjbGllbnRZIHRvIGV2ZW50IG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSAge1NWR1NWR0VsZW1lbnR9IHN2Z1xuICAgKi9cbiAgbW91c2VBbmRUb3VjaE5vcm1hbGl6ZTogZnVuY3Rpb24oZXZ0LCBzdmcpIHtcbiAgICAvLyBJZiBubyBjbGllbnRYIHRoZW4gZmFsbGJhY2tcbiAgICBpZiAoZXZ0LmNsaWVudFggPT09IHZvaWQgMCB8fCBldnQuY2xpZW50WCA9PT0gbnVsbCkge1xuICAgICAgLy8gRmFsbGJhY2tcbiAgICAgIGV2dC5jbGllbnRYID0gMDtcbiAgICAgIGV2dC5jbGllbnRZID0gMDtcblxuICAgICAgLy8gSWYgaXQgaXMgYSB0b3VjaCBldmVudFxuICAgICAgaWYgKGV2dC50b3VjaGVzICE9PSB2b2lkIDAgJiYgZXZ0LnRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChldnQudG91Y2hlc1swXS5jbGllbnRYICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBldnQuY2xpZW50WCA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgZXZ0LmNsaWVudFkgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB9IGVsc2UgaWYgKGV2dC50b3VjaGVzWzBdLnBhZ2VYICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB2YXIgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGV2dC5jbGllbnRYID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgZXZ0LmNsaWVudFkgPSBldnQudG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0IGlzIGEgY3VzdG9tIGV2ZW50XG4gICAgICB9IGVsc2UgaWYgKGV2dC5vcmlnaW5hbEV2ZW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgaWYgKGV2dC5vcmlnaW5hbEV2ZW50LmNsaWVudFggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGV2dC5jbGllbnRYID0gZXZ0Lm9yaWdpbmFsRXZlbnQuY2xpZW50WDtcbiAgICAgICAgICBldnQuY2xpZW50WSA9IGV2dC5vcmlnaW5hbEV2ZW50LmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGV2ZW50IGlzIGEgZG91YmxlIGNsaWNrL3RhcFxuICAgKiBUT0RPOiBGb3IgdG91Y2ggZ2VzdHVyZXMgdXNlIGEgbGlicmFyeSAoaGFtbWVyLmpzKSB0aGF0IHRha2VzIGluIGFjY291bnQgb3RoZXIgZXZlbnRzXG4gICAqICh0b3VjaG1vdmUgYW5kIHRvdWNoZW5kKS4gSXQgc2hvdWxkIHRha2UgaW4gYWNjb3VudCB0YXAgZHVyYXRpb24gYW5kIHRyYXZlbGVkIGRpc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSAge0V2ZW50fSAgZXZ0XG4gICAqIEBwYXJhbSAge0V2ZW50fSAgcHJldkV2dCBQcmV2aW91cyBFdmVudFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNEYmxDbGljazogZnVuY3Rpb24oZXZ0LCBwcmV2RXZ0KSB7XG4gICAgLy8gRG91YmxlIGNsaWNrIGRldGVjdGVkIGJ5IGJyb3dzZXJcbiAgICBpZiAoZXZ0LmRldGFpbCA9PT0gMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIFRyeSB0byBjb21wYXJlIGV2ZW50c1xuICAgIGVsc2UgaWYgKHByZXZFdnQgIT09IHZvaWQgMCAmJiBwcmV2RXZ0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgdGltZVN0YW1wRGlmZiA9IGV2dC50aW1lU3RhbXAgLSBwcmV2RXZ0LnRpbWVTdGFtcCwgLy8gc2hvdWxkIGJlIGxvd2VyIHRoYW4gMjUwIG1zXG4gICAgICAgIHRvdWNoZXNEaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyhldnQuY2xpZW50WCAtIHByZXZFdnQuY2xpZW50WCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3coZXZ0LmNsaWVudFkgLSBwcmV2RXZ0LmNsaWVudFksIDIpXG4gICAgICAgICk7XG5cbiAgICAgIHJldHVybiB0aW1lU3RhbXBEaWZmIDwgMjUwICYmIHRvdWNoZXNEaXN0YW5jZSA8IDEwO1xuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgZm91bmRcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlclxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBub3c6XG4gICAgRGF0ZS5ub3cgfHxcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9LFxuXG4gIC8vIEZyb20gdW5kZXJzY29yZS5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gIC8vIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICAvLyBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gIC8vIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gIC8vIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICB0aHJvdHRsZTogZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiB0aGF0Lm5vdygpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSB0aGF0Lm5vdygpO1xuICAgICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgfVxuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC10aGlzXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNpbXVsYXRpb25cbiAgICpcbiAgICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gcmVmcmVzaFJhdGVcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBjcmVhdGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uKHJlZnJlc2hSYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gQ29udmVydCByZWZyZXNoUmF0ZSB0byB0aW1lb3V0XG4gICAgaWYgKHJlZnJlc2hSYXRlICE9PSBcImF1dG9cIiAmJiByZWZyZXNoUmF0ZSA8IDYwICYmIHJlZnJlc2hSYXRlID4gMSkge1xuICAgICAgdGltZW91dCA9IE1hdGguZmxvb3IoMTAwMCAvIHJlZnJlc2hSYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmVxdWVzdFRpbWVvdXQoMzMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVxdWVzdFRpbWVvdXQodGltZW91dCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIHRoYXQgd2lsbCBleGVjdXRlIGFmdGVyIGEgZ2l2ZW4gdGltZW91dFxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSB0aW1lb3V0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gcmVxdWVzdFRpbWVvdXQodGltZW91dCkge1xuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZW91dCk7XG4gIH07XG59XG4iLCIvKiEgc3ZnTWFwIHwgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXBoYW5XYWduZXIvc3ZnTWFwIHwgTUlUIExpY2Vuc2UgfCBDb3B5cmlnaHQgU3RlcGhhbiBXYWduZXIgfCBodHRwczovL3N0ZXBoYW53YWduZXIubWUgKi9cbmZ1bmN0aW9uIHN2Z01hcFdyYXBwZXIoaSl7ZnVuY3Rpb24gYShsKXt0aGlzLmluaXQobCl9cmV0dXJuIGEucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24obCl7dGhpcy5vcHRpb25zPU9iamVjdC5hc3NpZ24oe30se3RhcmdldEVsZW1lbnRJRDpcIlwiLG1pblpvb206MSxtYXhab29tOjI1LGluaXRpYWxab29tOjEuMDYsaW5pdGlhbFBhbjp7eDowLHk6MH0sem9vbVNjYWxlU2Vuc2l0aXZpdHk6LjIsbW91c2VXaGVlbFpvb21FbmFibGVkOiEwLG1vdXNlV2hlZWxab29tV2l0aEtleTohMSxtb3VzZVdoZWVsS2V5TWVzc2FnZTpcIlByZXNzIHRoZSBbQUxUXSBrZXkgdG8gem9vbVwiLG1vdXNlV2hlZWxLZXlNZXNzYWdlTWFjOlwiUHJlc3MgdGhlIFtDT01NQU5EXSBrZXkgdG8gem9vbVwiLGNvbG9yTWF4OlwiI0NDMDAzM1wiLGNvbG9yTWluOlwiI0ZGRTVEOVwiLGNvbG9yTm9EYXRhOlwiI0UyRTJFMlwiLG1hbnVhbENvbG9yQXR0cmlidXRlOlwiY29sb3JcIixmbGFnVHlwZTpcImltYWdlXCIsZmxhZ1VSTDpcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9oam5pbHNzb24vY291bnRyeS1mbGFnc0BsYXRlc3Qvc3ZnL3swfS5zdmdcIixoaWRlRmxhZzohMSxoaWRlTWlzc2luZ0RhdGE6ITEsbm9EYXRhVGV4dDpcIk5vIGRhdGEgYXZhaWxhYmxlXCIsdG91Y2hMaW5rOiExLHNob3dab29tUmVzZXQ6ITEsb25HZXRUb29sdGlwOmZ1bmN0aW9uKGwsdCxlKXtyZXR1cm4gbnVsbH0sY291bnRyaWVzOntFSDohMCxDcmltZWE6XCJVQVwifSxzaG93Q29udGluZW50U2VsZWN0b3I6ITF9LGx8fHt9KSx0aGlzLm9wdGlvbnMudGFyZ2V0RWxlbWVudElEJiZkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMudGFyZ2V0RWxlbWVudElEKXx8dGhpcy5lcnJvcihcIlRhcmdldCBlbGVtZW50IG5vdCBmb3VuZFwiKSx0aGlzLm9wdGlvbnMuZGF0YXx8dGhpcy5lcnJvcihcIk5vIGRhdGFcIiksdGhpcy5pZD10aGlzLm9wdGlvbnMudGFyZ2V0RWxlbWVudElELHRoaXMud3JhcHBlcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMudGFyZ2V0RWxlbWVudElEKSx0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcInN2Z01hcC13cmFwcGVyXCIpLHRoaXMuY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1jb250YWluZXJcIiksdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKSx0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkJiZ0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21XaXRoS2V5JiYodGhpcy5hZGRNb3VzZVdoZWVsWm9vbU5vdGljZSgpLHRoaXMuYWRkTW91c2VXaGVlbFpvb21XaXRoS2V5RXZlbnRzKCkpLHRoaXMubWFwQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tYXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1tYXAtY29udGFpbmVyXCIpLHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWFwQ29udGFpbmVyKSx0aGlzLmNyZWF0ZU1hcCgpLHRoaXMuYXBwbHlEYXRhKHRoaXMub3B0aW9ucy5kYXRhKX0sYS5wcm90b3R5cGUuY291bnRyaWVzPXtBRjpcIkFmZ2hhbmlzdGFuXCIsQVg6XCLDhWxhbmQgSXNsYW5kc1wiLEFMOlwiQWxiYW5pYVwiLERaOlwiQWxnZXJpYVwiLEFTOlwiQW1lcmljYW4gU2Ftb2FcIixBRDpcIkFuZG9ycmFcIixBTzpcIkFuZ29sYVwiLEFJOlwiQW5ndWlsbGFcIixBUTpcIkFudGFyY3RpY2FcIixBRzpcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixBUjpcIkFyZ2VudGluYVwiLEFNOlwiQXJtZW5pYVwiLEFXOlwiQXJ1YmFcIixBVTpcIkF1c3RyYWxpYVwiLEFUOlwiQXVzdHJpYVwiLEFaOlwiQXplcmJhaWphblwiLEJTOlwiQmFoYW1hc1wiLEJIOlwiQmFocmFpblwiLEJEOlwiQmFuZ2xhZGVzaFwiLEJCOlwiQmFyYmFkb3NcIixCWTpcIkJlbGFydXNcIixCRTpcIkJlbGdpdW1cIixCWjpcIkJlbGl6ZVwiLEJKOlwiQmVuaW5cIixCTTpcIkJlcm11ZGFcIixCVDpcIkJodXRhblwiLEJPOlwiQm9saXZpYVwiLEJBOlwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLEJXOlwiQm90c3dhbmFcIixCUjpcIkJyYXppbFwiLElPOlwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsVkc6XCJCcml0aXNoIFZpcmdpbiBJc2xhbmRzXCIsQk46XCJCcnVuZWkgRGFydXNzYWxhbVwiLEJHOlwiQnVsZ2FyaWFcIixCRjpcIkJ1cmtpbmEgRmFzb1wiLEJJOlwiQnVydW5kaVwiLEtIOlwiQ2FtYm9kaWFcIixDTTpcIkNhbWVyb29uXCIsQ0E6XCJDYW5hZGFcIixDVjpcIkNhcGUgVmVyZGVcIixCUTpcIkNhcmliYmVhbiBOZXRoZXJsYW5kc1wiLEtZOlwiQ2F5bWFuIElzbGFuZHNcIixDRjpcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLFREOlwiQ2hhZFwiLENMOlwiQ2hpbGVcIixDTjpcIkNoaW5hXCIsQ1g6XCJDaHJpc3RtYXMgSXNsYW5kXCIsQ0M6XCJDb2NvcyBJc2xhbmRzXCIsQ086XCJDb2xvbWJpYVwiLEtNOlwiQ29tb3Jvc1wiLENHOlwiQ29uZ29cIixDSzpcIkNvb2sgSXNsYW5kc1wiLENSOlwiQ29zdGEgUmljYVwiLEhSOlwiQ3JvYXRpYVwiLENVOlwiQ3ViYVwiLENXOlwiQ3VyYcOnYW9cIixDWTpcIkN5cHJ1c1wiLENaOlwiQ3plY2ggUmVwdWJsaWNcIixDRDpcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsREs6XCJEZW5tYXJrXCIsREo6XCJEamlib3V0aVwiLERNOlwiRG9taW5pY2FcIixETzpcIkRvbWluaWNhbiBSZXB1YmxpY1wiLEVDOlwiRWN1YWRvclwiLEVHOlwiRWd5cHRcIixTVjpcIkVsIFNhbHZhZG9yXCIsR1E6XCJFcXVhdG9yaWFsIEd1aW5lYVwiLEVSOlwiRXJpdHJlYVwiLEVFOlwiRXN0b25pYVwiLEVUOlwiRXRoaW9waWFcIixGSzpcIkZhbGtsYW5kIElzbGFuZHNcIixGTzpcIkZhcm9lIElzbGFuZHNcIixGTTpcIkZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYVwiLEZKOlwiRmlqaVwiLEZJOlwiRmlubGFuZFwiLEZSOlwiRnJhbmNlXCIsR0Y6XCJGcmVuY2ggR3VpYW5hXCIsUEY6XCJGcmVuY2ggUG9seW5lc2lhXCIsVEY6XCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIixHQTpcIkdhYm9uXCIsR006XCJHYW1iaWFcIixHRTpcIkdlb3JnaWFcIixERTpcIkdlcm1hbnlcIixHSDpcIkdoYW5hXCIsR0k6XCJHaWJyYWx0YXJcIixHUjpcIkdyZWVjZVwiLEdMOlwiR3JlZW5sYW5kXCIsR0Q6XCJHcmVuYWRhXCIsR1A6XCJHdWFkZWxvdXBlXCIsR1U6XCJHdWFtXCIsR1Q6XCJHdWF0ZW1hbGFcIixHTjpcIkd1aW5lYVwiLEdXOlwiR3VpbmVhLUJpc3NhdVwiLEdZOlwiR3V5YW5hXCIsSFQ6XCJIYWl0aVwiLEhOOlwiSG9uZHVyYXNcIixISzpcIkhvbmcgS29uZ1wiLEhVOlwiSHVuZ2FyeVwiLElTOlwiSWNlbGFuZFwiLElOOlwiSW5kaWFcIixJRDpcIkluZG9uZXNpYVwiLElSOlwiSXJhblwiLElROlwiSXJhcVwiLElFOlwiSXJlbGFuZFwiLElNOlwiSXNsZSBvZiBNYW5cIixJTDpcIklzcmFlbFwiLElUOlwiSXRhbHlcIixDSTpcIkl2b3J5IENvYXN0XCIsSk06XCJKYW1haWNhXCIsSlA6XCJKYXBhblwiLEpFOlwiSmVyc2V5XCIsSk86XCJKb3JkYW5cIixLWjpcIkthemFraHN0YW5cIixLRTpcIktlbnlhXCIsS0k6XCJLaXJpYmF0aVwiLFhLOlwiS29zb3ZvXCIsS1c6XCJLdXdhaXRcIixLRzpcIkt5cmd5enN0YW5cIixMQTpcIkxhb3NcIixMVjpcIkxhdHZpYVwiLExCOlwiTGViYW5vblwiLExTOlwiTGVzb3Rob1wiLExSOlwiTGliZXJpYVwiLExZOlwiTGlieWFcIixMSTpcIkxpZWNodGVuc3RlaW5cIixMVDpcIkxpdGh1YW5pYVwiLExVOlwiTHV4ZW1ib3VyZ1wiLE1POlwiTWFjYXVcIixNSzpcIk1hY2Vkb25pYVwiLE1HOlwiTWFkYWdhc2NhclwiLE1XOlwiTWFsYXdpXCIsTVk6XCJNYWxheXNpYVwiLE1WOlwiTWFsZGl2ZXNcIixNTDpcIk1hbGlcIixNVDpcIk1hbHRhXCIsTUg6XCJNYXJzaGFsbCBJc2xhbmRzXCIsTVE6XCJNYXJ0aW5pcXVlXCIsTVI6XCJNYXVyaXRhbmlhXCIsTVU6XCJNYXVyaXRpdXNcIixZVDpcIk1heW90dGVcIixNWDpcIk1leGljb1wiLE1EOlwiTW9sZG92YVwiLE1DOlwiTW9uYWNvXCIsTU46XCJNb25nb2xpYVwiLE1FOlwiTW9udGVuZWdyb1wiLE1TOlwiTW9udHNlcnJhdFwiLE1BOlwiTW9yb2Njb1wiLE1aOlwiTW96YW1iaXF1ZVwiLE1NOlwiTXlhbm1hclwiLE5BOlwiTmFtaWJpYVwiLE5SOlwiTmF1cnVcIixOUDpcIk5lcGFsXCIsTkw6XCJOZXRoZXJsYW5kc1wiLE5DOlwiTmV3IENhbGVkb25pYVwiLE5aOlwiTmV3IFplYWxhbmRcIixOSTpcIk5pY2FyYWd1YVwiLE5FOlwiTmlnZXJcIixORzpcIk5pZ2VyaWFcIixOVTpcIk5pdWVcIixORjpcIk5vcmZvbGsgSXNsYW5kXCIsS1A6XCJOb3J0aCBLb3JlYVwiLE1QOlwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsTk86XCJOb3J3YXlcIixPTTpcIk9tYW5cIixQSzpcIlBha2lzdGFuXCIsUFc6XCJQYWxhdVwiLFBTOlwiUGFsZXN0aW5lXCIsUEE6XCJQYW5hbWFcIixQRzpcIlBhcHVhIE5ldyBHdWluZWFcIixQWTpcIlBhcmFndWF5XCIsUEU6XCJQZXJ1XCIsUEg6XCJQaGlsaXBwaW5lc1wiLFBOOlwiUGl0Y2Fpcm4gSXNsYW5kc1wiLFBMOlwiUG9sYW5kXCIsUFQ6XCJQb3J0dWdhbFwiLFBSOlwiUHVlcnRvIFJpY29cIixRQTpcIlFhdGFyXCIsUkU6XCJSZXVuaW9uXCIsUk86XCJSb21hbmlhXCIsUlU6XCJSdXNzaWFcIixSVzpcIlJ3YW5kYVwiLFNIOlwiU2FpbnQgSGVsZW5hXCIsS046XCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixMQzpcIlNhaW50IEx1Y2lhXCIsUE06XCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsVkM6XCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFdTOlwiU2Ftb2FcIixTTTpcIlNhbiBNYXJpbm9cIixTVDpcIlPDo28gVG9tw6kgYW5kIFByw61uY2lwZVwiLFNBOlwiU2F1ZGkgQXJhYmlhXCIsU046XCJTZW5lZ2FsXCIsUlM6XCJTZXJiaWFcIixTQzpcIlNleWNoZWxsZXNcIixTTDpcIlNpZXJyYSBMZW9uZVwiLFNHOlwiU2luZ2Fwb3JlXCIsU1g6XCJTaW50IE1hYXJ0ZW5cIixTSzpcIlNsb3Zha2lhXCIsU0k6XCJTbG92ZW5pYVwiLFNCOlwiU29sb21vbiBJc2xhbmRzXCIsU086XCJTb21hbGlhXCIsWkE6XCJTb3V0aCBBZnJpY2FcIixHUzpcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsS1I6XCJTb3V0aCBLb3JlYVwiLFNTOlwiU291dGggU3VkYW5cIixFUzpcIlNwYWluXCIsTEs6XCJTcmkgTGFua2FcIixTRDpcIlN1ZGFuXCIsU1I6XCJTdXJpbmFtZVwiLFNKOlwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLFNaOlwiRXN3YXRpbmlcIixTRTpcIlN3ZWRlblwiLENIOlwiU3dpdHplcmxhbmRcIixTWTpcIlN5cmlhXCIsVFc6XCJUYWl3YW5cIixUSjpcIlRhamlraXN0YW5cIixUWjpcIlRhbnphbmlhXCIsVEg6XCJUaGFpbGFuZFwiLFRMOlwiVGltb3ItTGVzdGVcIixURzpcIlRvZ29cIixUSzpcIlRva2VsYXVcIixUTzpcIlRvbmdhXCIsVFQ6XCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsVE46XCJUdW5pc2lhXCIsVFI6XCJUdXJrZXlcIixUTTpcIlR1cmttZW5pc3RhblwiLFRDOlwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsVFY6XCJUdXZhbHVcIixVRzpcIlVnYW5kYVwiLFVBOlwiVWtyYWluZVwiLEFFOlwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixHQjpcIlVuaXRlZCBLaW5nZG9tXCIsVVM6XCJVbml0ZWQgU3RhdGVzXCIsVU06XCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIixWSTpcIlVuaXRlZCBTdGF0ZXMgVmlyZ2luIElzbGFuZHNcIixVWTpcIlVydWd1YXlcIixVWjpcIlV6YmVraXN0YW5cIixWVTpcIlZhbnVhdHVcIixWQTpcIlZhdGljYW4gQ2l0eVwiLFZFOlwiVmVuZXp1ZWxhXCIsVk46XCJWaWV0bmFtXCIsV0Y6XCJXYWxsaXMgYW5kIEZ1dHVuYVwiLEVIOlwiV2VzdGVybiBTYWhhcmFcIixZRTpcIlllbWVuXCIsWk06XCJaYW1iaWFcIixaVzpcIlppbWJhYndlXCJ9LGEucHJvdG90eXBlLmFwcGx5RGF0YT1mdW5jdGlvbihvKXt2YXIgaT1udWxsLGE9bnVsbDtPYmplY3Qua2V5cyhvLnZhbHVlcykuZm9yRWFjaChmdW5jdGlvbihsKXtsPXBhcnNlSW50KG8udmFsdWVzW2xdW28uYXBwbHlEYXRhXSwxMCk7KGk9bnVsbD09PWk/bDppKTxsJiYoaT1sKSxsPChhPW51bGw9PT1hP2w6YSkmJihhPWwpfSksby5kYXRhW28uYXBwbHlEYXRhXS50aHJlc2hvbGRNYXgmJihpPU1hdGgubWluKGksby5kYXRhW28uYXBwbHlEYXRhXS50aHJlc2hvbGRNYXgpKSxvLmRhdGFbby5hcHBseURhdGFdLnRocmVzaG9sZE1pbiYmKGE9TWF0aC5tYXgoYSxvLmRhdGFbby5hcHBseURhdGFdLnRocmVzaG9sZE1pbikpLE9iamVjdC5rZXlzKHRoaXMuY291bnRyaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe3ZhciB0LGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCtcIi1tYXAtY291bnRyeS1cIitsKTtlJiYoby52YWx1ZXNbbF0/dm9pZCAwPT09by52YWx1ZXNbbF0uY29sb3I/KHQ9TWF0aC5tYXgoYSxwYXJzZUludChvLnZhbHVlc1tsXVtvLmFwcGx5RGF0YV0sMTApKSx0PU1hdGgubWF4KDAsTWF0aC5taW4oMSwodC1hKS8oaS1hKSkpLHQ9dGhpcy5nZXRDb2xvcih0aGlzLm9wdGlvbnMuY29sb3JNYXgsdGhpcy5vcHRpb25zLmNvbG9yTWluLHR8fDA9PT10P3Q6MSksZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsdCkpOmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLG8udmFsdWVzW2xdLmNvbG9yKTplLnNldEF0dHJpYnV0ZShcImZpbGxcIix0aGlzLm9wdGlvbnMuY29sb3JOb0RhdGEpKX0uYmluZCh0aGlzKSl9LGEucHJvdG90eXBlLmVtb2ppRmxhZ3M9e0FGOlwi8J+HpvCfh6tcIixBWDpcIvCfh6bwn4e9XCIsQUw6XCLwn4em8J+HsVwiLERaOlwi8J+HqfCfh79cIixBUzpcIvCfh6bwn4e4XCIsQUQ6XCLwn4em8J+HqVwiLEFPOlwi8J+HpvCfh7RcIixBSTpcIvCfh6bwn4euXCIsQVE6XCLwn4em8J+HtlwiLEFHOlwi8J+HpvCfh6xcIixBUjpcIvCfh6bwn4e3XCIsQU06XCLwn4em8J+HslwiLEFXOlwi8J+HpvCfh7xcIixBVTpcIvCfh6bwn4e6XCIsQVQ6XCLwn4em8J+HuVwiLEFaOlwi8J+HpvCfh79cIixCUzpcIvCfh6fwn4e4XCIsQkg6XCLwn4en8J+HrVwiLEJEOlwi8J+Hp/Cfh6lcIixCQjpcIvCfh6fwn4enXCIsQlk6XCLwn4en8J+HvlwiLEJFOlwi8J+Hp/Cfh6pcIixCWjpcIvCfh6fwn4e/XCIsQko6XCLwn4en8J+Hr1wiLEJNOlwi8J+Hp/Cfh7JcIixCVDpcIvCfh6fwn4e5XCIsQk86XCLwn4en8J+HtFwiLEJBOlwi8J+Hp/Cfh6ZcIixCVzpcIvCfh6fwn4e8XCIsQlI6XCLwn4en8J+Ht1wiLElPOlwi8J+HrvCfh7RcIixWRzpcIvCfh7vwn4esXCIsQk46XCLwn4en8J+Hs1wiLEJHOlwi8J+Hp/Cfh6xcIixCRjpcIvCfh6fwn4erXCIsQkk6XCLwn4en8J+HrlwiLEtIOlwi8J+HsPCfh61cIixDTTpcIvCfh6jwn4eyXCIsQ0E6XCLwn4eo8J+HplwiLENWOlwi8J+HqPCfh7tcIixCUTpcIvCfh6fwn4e2XCIsS1k6XCLwn4ew8J+HvlwiLENGOlwi8J+HqPCfh6tcIixURDpcIvCfh7nwn4epXCIsQ0w6XCLwn4eo8J+HsVwiLENOOlwi8J+HqPCfh7NcIixDWDpcIvCfh6jwn4e9XCIsQ0M6XCLwn4eo8J+HqFwiLENPOlwi8J+HqPCfh7RcIixLTTpcIvCfh7Dwn4eyXCIsQ0c6XCLwn4eo8J+HrFwiLENLOlwi8J+HqPCfh7BcIixDUjpcIvCfh6jwn4e3XCIsSFI6XCLwn4et8J+Ht1wiLENVOlwi8J+HqPCfh7pcIixDVzpcIvCfh6jwn4e8XCIsQ1k6XCLwn4eo8J+HvlwiLENaOlwi8J+HqPCfh79cIixDRDpcIvCfh6jwn4epXCIsREs6XCLwn4ep8J+HsFwiLERKOlwi8J+HqfCfh69cIixETTpcIvCfh6nwn4eyXCIsRE86XCLwn4ep8J+HtFwiLEVDOlwi8J+HqvCfh6hcIixFRzpcIvCfh6rwn4esXCIsU1Y6XCLwn4e48J+Hu1wiLEdROlwi8J+HrPCfh7ZcIixFUjpcIvCfh6rwn4e3XCIsRUU6XCLwn4eq8J+HqlwiLEVUOlwi8J+HqvCfh7lcIixGSzpcIvCfh6vwn4ewXCIsRk86XCLwn4er8J+HtFwiLEZNOlwi8J+Hq/Cfh7JcIixGSjpcIvCfh6vwn4evXCIsRkk6XCLwn4er8J+HrlwiLEZSOlwi8J+Hq/Cfh7dcIixHRjpcIvCfh6zwn4erXCIsUEY6XCLwn4e18J+Hq1wiLFRGOlwi8J+HufCfh6tcIixHQTpcIvCfh6zwn4emXCIsR006XCLwn4es8J+HslwiLEdFOlwi8J+HrPCfh6pcIixERTpcIvCfh6nwn4eqXCIsR0g6XCLwn4es8J+HrVwiLEdJOlwi8J+HrPCfh65cIixHUjpcIvCfh6zwn4e3XCIsR0w6XCLwn4es8J+HsVwiLEdEOlwi8J+HrPCfh6lcIixHUDpcIvCfh6zwn4e1XCIsR1U6XCLwn4es8J+HulwiLEdUOlwi8J+HrPCfh7lcIixHTjpcIvCfh6zwn4ezXCIsR1c6XCLwn4es8J+HvFwiLEdZOlwi8J+HrPCfh75cIixIVDpcIvCfh63wn4e5XCIsSE46XCLwn4et8J+Hs1wiLEhLOlwi8J+HrfCfh7BcIixIVTpcIvCfh63wn4e6XCIsSVM6XCLwn4eu8J+HuFwiLElOOlwi8J+HrvCfh7NcIixJRDpcIvCfh67wn4epXCIsSVI6XCLwn4eu8J+Ht1wiLElROlwi8J+HrvCfh7ZcIixJRTpcIvCfh67wn4eqXCIsSU06XCLwn4eu8J+HslwiLElMOlwi8J+HrvCfh7FcIixJVDpcIvCfh67wn4e5XCIsQ0k6XCLwn4eo8J+HrlwiLEpNOlwi8J+Hr/Cfh7JcIixKUDpcIvCfh6/wn4e1XCIsSkU6XCLwn4ev8J+HqlwiLEpPOlwi8J+Hr/Cfh7RcIixLWjpcIvCfh7Dwn4e/XCIsS0U6XCLwn4ew8J+HqlwiLEtJOlwi8J+HsPCfh65cIixYSzpcIvCfh73wn4ewXCIsS1c6XCLwn4ew8J+HvFwiLEtHOlwi8J+HsPCfh6xcIixMQTpcIvCfh7Hwn4emXCIsTFY6XCLwn4ex8J+Hu1wiLExCOlwi8J+HsfCfh6dcIixMUzpcIvCfh7Hwn4e4XCIsTFI6XCLwn4ex8J+Ht1wiLExZOlwi8J+HsfCfh75cIixMSTpcIvCfh7Hwn4euXCIsTFQ6XCLwn4ex8J+HuVwiLExVOlwi8J+HsfCfh7pcIixNTzpcIvCfh7Lwn4e0XCIsTUs6XCLwn4ey8J+HsFwiLE1HOlwi8J+HsvCfh6xcIixNVzpcIvCfh7Lwn4e8XCIsTVk6XCLwn4ey8J+HvlwiLE1WOlwi8J+HsvCfh7tcIixNTDpcIvCfh7Lwn4exXCIsTVQ6XCLwn4ey8J+HuVwiLE1IOlwi8J+HsvCfh61cIixNUTpcIvCfh7Lwn4e2XCIsTVI6XCLwn4ey8J+Ht1wiLE1VOlwi8J+HsvCfh7pcIixZVDpcIvCfh77wn4e5XCIsTVg6XCLwn4ey8J+HvVwiLE1EOlwi8J+HsvCfh6lcIixNQzpcIvCfh7Lwn4eoXCIsTU46XCLwn4ey8J+Hs1wiLE1FOlwi8J+HsvCfh6pcIixNUzpcIvCfh7Lwn4e4XCIsTUE6XCLwn4ey8J+HplwiLE1aOlwi8J+HsvCfh79cIixNTTpcIvCfh7Lwn4eyXCIsTkE6XCLwn4ez8J+HplwiLE5SOlwi8J+Hs/Cfh7dcIixOUDpcIvCfh7Pwn4e1XCIsTkw6XCLwn4ez8J+HsVwiLE5DOlwi8J+Hs/Cfh6hcIixOWjpcIvCfh7Pwn4e/XCIsTkk6XCLwn4ez8J+HrlwiLE5FOlwi8J+Hs/Cfh6pcIixORzpcIvCfh7Pwn4esXCIsTlU6XCLwn4ez8J+HulwiLE5GOlwi8J+Hs/Cfh6tcIixLUDpcIvCfh7Dwn4e1XCIsTVA6XCLwn4ey8J+HtVwiLE5POlwi8J+Hs/Cfh7RcIixPTTpcIvCfh7Twn4eyXCIsUEs6XCLwn4e18J+HsFwiLFBXOlwi8J+HtfCfh7xcIixQUzpcIvCfh7Xwn4e4XCIsUEE6XCLwn4e18J+HplwiLFBHOlwi8J+HtfCfh6xcIixQWTpcIvCfh7Xwn4e+XCIsUEU6XCLwn4e18J+HqlwiLFBIOlwi8J+HtfCfh61cIixQTjpcIvCfh7Xwn4ezXCIsUEw6XCLwn4e18J+HsVwiLFBUOlwi8J+HtfCfh7lcIixQUjpcIvCfh7Xwn4e3XCIsUUE6XCLwn4e28J+HplwiLFJFOlwi8J+Ht/Cfh6pcIixSTzpcIvCfh7fwn4e0XCIsUlU6XCLwn4e38J+HulwiLFJXOlwi8J+Ht/Cfh7xcIixTSDpcIvCfh7jwn4etXCIsS046XCLwn4ew8J+Hs1wiLExDOlwi8J+HsfCfh6hcIixQTTpcIvCfh7Xwn4eyXCIsVkM6XCLwn4e78J+HqFwiLFdTOlwi8J+HvPCfh7hcIixTTTpcIvCfh7jwn4eyXCIsU1Q6XCLwn4e48J+HuVwiLFNBOlwi8J+HuPCfh6ZcIixTTjpcIvCfh7jwn4ezXCIsUlM6XCLwn4e38J+HuFwiLFNDOlwi8J+HuPCfh6hcIixTTDpcIvCfh7jwn4exXCIsU0c6XCLwn4e48J+HrFwiLFNYOlwi8J+HuPCfh71cIixTSzpcIvCfh7jwn4ewXCIsU0k6XCLwn4e48J+HrlwiLFNCOlwi8J+HuPCfh6dcIixTTzpcIvCfh7jwn4e0XCIsWkE6XCLwn4e/8J+HplwiLEdTOlwi8J+HrPCfh7hcIixLUjpcIvCfh7Dwn4e3XCIsU1M6XCLwn4e48J+HuFwiLEVTOlwi8J+HqvCfh7hcIixMSzpcIvCfh7Hwn4ewXCIsU0Q6XCLwn4e48J+HqVwiLFNSOlwi8J+HuPCfh7dcIixTSjpcIvCfh7jwn4evXCIsU1o6XCLwn4e48J+Hv1wiLFNFOlwi8J+HuPCfh6pcIixDSDpcIvCfh6jwn4etXCIsU1k6XCLwn4e48J+HvlwiLFRXOlwi8J+HufCfh7xcIixUSjpcIvCfh7nwn4evXCIsVFo6XCLwn4e58J+Hv1wiLFRIOlwi8J+HufCfh61cIixUTDpcIvCfh7nwn4exXCIsVEc6XCLwn4e58J+HrFwiLFRLOlwi8J+HufCfh7BcIixUTzpcIvCfh7nwn4e0XCIsVFQ6XCLwn4e58J+HuVwiLFROOlwi8J+HufCfh7NcIixUUjpcIvCfh7nwn4e3XCIsVE06XCLwn4e58J+HslwiLFRDOlwi8J+HufCfh6hcIixUVjpcIvCfh7nwn4e7XCIsVUc6XCLwn4e68J+HrFwiLFVBOlwi8J+HuvCfh6ZcIixBRTpcIvCfh6bwn4eqXCIsR0I6XCLwn4es8J+Hp1wiLFVTOlwi8J+HuvCfh7hcIixVTTpcIvCfh7rwn4eyXCIsVkk6XCLwn4e78J+HrlwiLFVZOlwi8J+HuvCfh75cIixVWjpcIvCfh7rwn4e/XCIsVlU6XCLwn4e78J+HulwiLFZBOlwi8J+Hu/Cfh6ZcIixWRTpcIvCfh7vwn4eqXCIsVk46XCLwn4e78J+Hs1wiLFdGOlwi8J+HvPCfh6tcIixFSDpcIvCfh6rwn4etXCIsWUU6XCLwn4e+8J+HqlwiLFpNOlwi8J+Hv/Cfh7JcIixaVzpcIvCfh7/wn4e8XCJ9LGEucHJvdG90eXBlLmNvbnRpbmVudHM9e0VBOntpc286XCJFQVwiLG5hbWU6XCJXb3JsZFwifSxBRjp7aXNvOlwiQUZcIixuYW1lOlwiQWZyaWNhXCIscGFuOnt4OjQ1NCx5OjI1MH0sem9vbToxLjl9LEFTOntpc286XCJBU1wiLG5hbWU6XCJBc2lhXCIscGFuOnt4OjkwNCx5OjgwfSx6b29tOjEuOH0sRVU6e2lzbzpcIkVVXCIsbmFtZTpcIkV1cm9wZVwiLHBhbjp7eDo0MDQseTo4MH0sem9vbTo1fSxOQTp7aXNvOlwiTkFcIixuYW1lOlwiTm9ydGggQW1lcmljYVwiLHBhbjp7eDoxMDQseTo1NX0sem9vbToyLjZ9LE1BOntpc286XCJNQVwiLG5hbWU6XCJNaWRkbGUgQW1lcmljYVwiLHBhbjp7eDoxMDQseToyMDB9LHpvb206Mi42fSxTQTp7aXNvOlwiU0FcIixuYW1lOlwiU291dGggQW1lcmljYVwiLHBhbjp7eDoxMDQseTozNDB9LHpvb206Mi4yfSxPQzp7aXNvOlwiT0NcIixuYW1lOlwiT2NlYW5pYVwiLHBhbjp7eDo5NTQseTozNTB9LHpvb206MS45fX0sYS5wcm90b3R5cGUuY3JlYXRlTWFwPWZ1bmN0aW9uKCl7dGhpcy5jcmVhdGVUb29sdGlwKCksdGhpcy5tYXBXcmFwcGVyPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLW1hcC13cmFwcGVyXCIsdGhpcy5tYXBDb250YWluZXIpLHRoaXMubWFwSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKSx0aGlzLm1hcEltYWdlLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIixcIjAgMCAyMDAwIDEwMDFcIiksdGhpcy5tYXBJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLW1hcC1pbWFnZVwiKSx0aGlzLm1hcFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5tYXBJbWFnZSk7dmFyIGUsbD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC1tYXAtY29udHJvbHMtd3JhcHBlclwiLHRoaXMubWFwV3JhcHBlciksbz10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC1tYXAtY29udHJvbHMtem9vbVwiLGwpO1tcImluXCIsXCJvdXRcIixcInJlc2V0XCJdLmZvckVhY2goZnVuY3Rpb24obCl7dmFyIHQ7KFwicmVzZXRcIj09PWwmJnRoaXMub3B0aW9ucy5zaG93Wm9vbVJlc2V0fHxcInJlc2V0XCIhPT1sKSYmKHRoaXNbdD1cInpvb21Db250cm9sXCIrbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStsLnNsaWNlKDEpXT10aGlzLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIixcInN2Z01hcC1jb250cm9sLWJ1dHRvbiBzdmdNYXAtem9vbS1idXR0b24gc3ZnTWFwLXpvb20tXCIrbCtcIi1idXR0b25cIixvKSx0aGlzW3RdLnR5cGU9XCJidXR0b25cIix0aGlzW3RdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7dGhpcy56b29tTWFwKGwpfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSkpfS5iaW5kKHRoaXMpKSx0aGlzLnpvb21Db250cm9sSW4uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiWm9vbSBpblwiKSx0aGlzLnpvb21Db250cm9sT3V0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlpvb20gb3V0XCIpLHRoaXMub3B0aW9ucy5zaG93Q29udGluZW50U2VsZWN0b3ImJih0PXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLW1hcC1jb250aW5lbnQtY29udHJvbHMtd3JhcHBlclwiLHRoaXMubWFwV3JhcHBlciksdGhpcy5jb250aW5lbnRTZWxlY3Q9dGhpcy5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsXCJzdmdNYXAtY29udGluZW50LXNlbGVjdFwiLHQpLGU9dGhpcyxPYmplY3Qua2V5cyhhLnByb3RvdHlwZS5jb250aW5lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGwpe2xldCB0PWUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLFwic3ZnTWFwLWNvbnRpbmVudC1vcHRpb24gc3ZnTWFwLWNvbnRpbmVudC1pc28tXCIrYS5wcm90b3R5cGUuY29udGluZW50c1tsXS5pc28sZS5jb250aW5lbnRTZWxlY3QsYS5wcm90b3R5cGUuY29udGluZW50c1tsXS5uYW1lKTt0LnZhbHVlPWx9KSx0aGlzLmNvbnRpbmVudFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24obCl7bC50YXJnZXQudmFsdWUmJnRoaXMuem9vbUNvbnRpbmVudChsLnRhcmdldC52YWx1ZSl9LmJpbmQoZSkse3Bhc3NpdmU6ITB9KSx0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlNlbGVjdCBjb250aW5lbnRcIikpO3ZhciB0PU9iamVjdC5hc3NpZ24oe30sdGhpcy5tYXBQYXRocyk7dGhpcy5vcHRpb25zLmNvdW50cmllcy5FSHx8KHQuTUEuZD10W1wiTUEtRUhcIl0uZCxkZWxldGUgdC5FSCksZGVsZXRlIHRbXCJNQS1FSFwiXSxcIlJVXCI9PT10aGlzLm9wdGlvbnMuY291bnRyaWVzLkNyaW1lYSYmKHQuUlUuZD10W1wiUlUtV0lUSC1DUklNRUFcIl0uZCx0LlVBLmQ9dFtcIlVBLVdJVEhPVVQtQ1JJTUVBXCJdLmQpLGRlbGV0ZSB0W1wiUlUtV0lUSC1DUklNRUFcIl0sZGVsZXRlIHRbXCJVQS1XSVRIT1VULUNSSU1FQVwiXSx0aGlzLnRvb2x0aXBNb3ZlRXZlbnQ9ZnVuY3Rpb24obCl7dGhpcy5tb3ZlVG9vbHRpcChsKX0uYmluZCh0aGlzKSxPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGwpe3ZhciB0PXRoaXMubWFwUGF0aHNbbF07aWYodC5kKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicGF0aFwiKTtpZihpLnNldEF0dHJpYnV0ZShcImRcIix0LmQpLGkuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmlkK1wiLW1hcC1jb3VudHJ5LVwiK2wpLGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLGwpLGkuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1jb3VudHJ5XCIpLHRoaXMubWFwSW1hZ2UuYXBwZW5kQ2hpbGQoaSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKGwpe2kucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpKSxpLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtYWN0aXZlXCIpO3ZhciB0PWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSxlPWkuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5rXCIpO3RoaXMub3B0aW9ucy50b3VjaExpbmsmJmU/d2luZG93LmxvY2F0aW9uLmhyZWY9ZToodGhpcy5zZXRUb29sdGlwQ29udGVudCh0aGlzLmdldFRvb2x0aXBDb250ZW50KHQpKSx0aGlzLnNob3dUb29sdGlwKGwpLHRoaXMubW92ZVRvb2x0aXAobCksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b29sdGlwTW92ZUV2ZW50LHtwYXNzaXZlOiEwfSkpfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKGwpe2kucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpKTt2YXIgdD1pLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7dGhpcy5zZXRUb29sdGlwQ29udGVudCh0aGlzLmdldFRvb2x0aXBDb250ZW50KHQpKSx0aGlzLnNob3dUb29sdGlwKGwpLGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMudG9vbHRpcE1vdmVFdmVudCx7cGFzc2l2ZTohMH0pfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSksdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzJiZ0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbbF0mJnRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tsXS5saW5rKXtpLnNldEF0dHJpYnV0ZShcImRhdGEtbGlua1wiLHRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tsXS5saW5rKSx0aGlzLm9wdGlvbnMuZGF0YS52YWx1ZXNbbF0ubGlua1RhcmdldCYmaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmstdGFyZ2V0XCIsdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2xdLmxpbmtUYXJnZXQpO2xldCBvPSExO2kuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKCl7bz0hMX0pLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixmdW5jdGlvbigpe289ITF9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixmdW5jdGlvbigpe289ITB9KSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixmdW5jdGlvbigpe289ITB9KTtsPWZ1bmN0aW9uKGwpe3ZhciB0LGU7b3x8KHQ9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmtcIiksKGU9aS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmstdGFyZ2V0XCIpKT93aW5kb3cub3Blbih0LGUpOndpbmRvdy5sb2NhdGlvbi5ocmVmPXQpfTtpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGwpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsbCl9aS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7dGhpcy5oaWRlVG9vbHRpcCgpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMudG9vbHRpcE1vdmVFdmVudCx7cGFzc2l2ZTohMH0pfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixmdW5jdGlvbigpe3RoaXMuaGlkZVRvb2x0aXAoKSxpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtYWN0aXZlXCIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG9vbHRpcE1vdmVFdmVudCx7cGFzc2l2ZTohMH0pfS5iaW5kKHRoaXMpLHtwYXNzaXZlOiEwfSl9fS5iaW5kKHRoaXMpKTt2YXIgbj10aGlzO3RoaXMubWFwUGFuWm9vbT1pKHRoaXMubWFwSW1hZ2Use3pvb21FbmFibGVkOiEwLGZpdDohMCxjZW50ZXI6ITAsbWluWm9vbTp0aGlzLm9wdGlvbnMubWluWm9vbSxtYXhab29tOnRoaXMub3B0aW9ucy5tYXhab29tLHpvb21TY2FsZVNlbnNpdGl2aXR5OnRoaXMub3B0aW9ucy56b29tU2NhbGVTZW5zaXRpdml0eSxjb250cm9sSWNvbnNFbmFibGVkOiExLG1vdXNlV2hlZWxab29tRW5hYmxlZDp0aGlzLm9wdGlvbnMubW91c2VXaGVlbFpvb21FbmFibGVkLHByZXZlbnRNb3VzZUV2ZW50c0RlZmF1bHQ6ITAsb25ab29tOmZ1bmN0aW9uKCl7bi5zZXRDb250cm9sU3RhdHVzZXMoKX0sYmVmb3JlUGFuOmZ1bmN0aW9uKGwsdCl7dmFyIGU9Ljg1Km4ubWFwV3JhcHBlci5vZmZzZXRXaWR0aCxvPS44NSpuLm1hcFdyYXBwZXIub2Zmc2V0SGVpZ2h0LGk9dGhpcy5nZXRTaXplcygpLGE9LSgoaS52aWV3Qm94LngraS52aWV3Qm94LndpZHRoKSppLnJlYWxab29tKStlLEw9aS53aWR0aC1lLWkudmlld0JveC54KmkucmVhbFpvb20sZT0tKChpLnZpZXdCb3gueStpLnZpZXdCb3guaGVpZ2h0KSppLnJlYWxab29tKStvLGk9aS5oZWlnaHQtby1pLnZpZXdCb3gueSppLnJlYWxab29tO3JldHVybnt4Ok1hdGgubWF4KGEsTWF0aC5taW4oTCx0LngpKSx5Ok1hdGgubWF4KGUsTWF0aC5taW4oaSx0LnkpKX19fSksMCE9dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueHx8MCE9dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueT90aGlzLm1hcFBhblpvb20uem9vbUF0UG9pbnRCeSh0aGlzLm9wdGlvbnMuaW5pdGlhbFpvb20se3g6dGhpcy5vcHRpb25zLmluaXRpYWxQYW4ueCx5OnRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnl9KTp0aGlzLm1hcFBhblpvb20uem9vbSh0aGlzLm9wdGlvbnMuaW5pdGlhbFpvb20pLHRoaXMuc2V0Q29udHJvbFN0YXR1c2VzKCl9LGEucHJvdG90eXBlLmdldFRvb2x0aXBDb250ZW50PWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5vbkdldFRvb2x0aXApe3ZhciBsPXRoaXMub3B0aW9ucy5vbkdldFRvb2x0aXAodGhpcy50b29sdGlwLGUsdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2VdKTtpZihsKXJldHVybiBsfWw9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1jb250ZW50LWNvbnRhaW5lclwiKTshMT09PXRoaXMub3B0aW9ucy5oaWRlRmxhZyYmKHQ9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1mbGFnLWNvbnRhaW5lciBzdmdNYXAtdG9vbHRpcC1mbGFnLWNvbnRhaW5lci1cIit0aGlzLm9wdGlvbnMuZmxhZ1R5cGUsbCksXCJpbWFnZVwiPT09dGhpcy5vcHRpb25zLmZsYWdUeXBlP3RoaXMuY3JlYXRlRWxlbWVudChcImltZ1wiLFwic3ZnTWFwLXRvb2x0aXAtZmxhZ1wiLHQpLnNldEF0dHJpYnV0ZShcInNyY1wiLHRoaXMub3B0aW9ucy5mbGFnVVJMLnJlcGxhY2UoXCJ7MH1cIixlLnRvTG93ZXJDYXNlKCkpKTpcImVtb2ppXCI9PT10aGlzLm9wdGlvbnMuZmxhZ1R5cGUmJih0LmlubmVySFRNTD10aGlzLmVtb2ppRmxhZ3NbZV0pKSx0aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLXRpdGxlXCIsbCkuaW5uZXJIVE1MPXRoaXMuZ2V0Q291bnRyeU5hbWUoZSk7dmFyIG8sdD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwLWNvbnRlbnRcIixsKTtyZXR1cm4gdGhpcy5vcHRpb25zLmRhdGEudmFsdWVzW2VdPyhvPVwiPHRhYmxlPlwiLE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5kYXRhLmRhdGEpLmZvckVhY2goZnVuY3Rpb24obCl7dmFyIHQ9dGhpcy5vcHRpb25zLmRhdGEuZGF0YVtsXSxsPXRoaXMub3B0aW9ucy5kYXRhLnZhbHVlc1tlXVtsXTsodm9pZCAwIT09bCYmITA9PT10aGlzLm9wdGlvbnMuaGlkZU1pc3NpbmdEYXRhfHwhMT09PXRoaXMub3B0aW9ucy5oaWRlTWlzc2luZ0RhdGEpJiYodC5mbG9hdGluZ051bWJlcnMmJihsPWwudG9GaXhlZCgxKSksdC50aG91c2FuZFNlcGFyYXRvciYmKGw9dGhpcy5udW1iZXJXaXRoQ29tbWFzKGwsdC50aG91c2FuZFNlcGFyYXRvcikpLGw9dC5mb3JtYXQ/dC5mb3JtYXQucmVwbGFjZShcInswfVwiLFwiPHNwYW4+XCIrbCtcIjwvc3Bhbj5cIik6XCI8c3Bhbj5cIitsK1wiPC9zcGFuPlwiLG8rPVwiPHRyPjx0ZD5cIisodC5uYW1lfHxcIlwiKStcIjwvdGQ+PHRkPlwiK2wrXCI8L3RkPjwvdHI+XCIpfS5iaW5kKHRoaXMpKSxvKz1cIjwvdGFibGU+XCIsdC5pbm5lckhUTUw9byk6dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsXCJzdmdNYXAtdG9vbHRpcC1uby1kYXRhXCIsdCkuaW5uZXJIVE1MPXRoaXMub3B0aW9ucy5ub0RhdGFUZXh0LGx9LGEucHJvdG90eXBlLnNldENvbnRyb2xTdGF0dXNlcz1mdW5jdGlvbigpe3RoaXMuem9vbUNvbnRyb2xJbi5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xJbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSx0aGlzLnpvb21Db250cm9sT3V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbE91dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSx0aGlzLm9wdGlvbnMuc2hvd1pvb21SZXNldCYmKHRoaXMuem9vbUNvbnRyb2xSZXNldC5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLWRpc2FibGVkXCIpLHRoaXMuem9vbUNvbnRyb2xSZXNldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSksdGhpcy5tYXBQYW5ab29tLmdldFpvb20oKS50b0ZpeGVkKDMpPD10aGlzLm9wdGlvbnMubWluWm9vbSYmKHRoaXMuem9vbUNvbnRyb2xPdXQuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sT3V0LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIikpLHRoaXMubWFwUGFuWm9vbS5nZXRab29tKCkudG9GaXhlZCgzKT49dGhpcy5vcHRpb25zLm1heFpvb20mJih0aGlzLnpvb21Db250cm9sSW4uY2xhc3NMaXN0LmFkZChcInN2Z01hcC1kaXNhYmxlZFwiKSx0aGlzLnpvb21Db250cm9sSW4uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSksdGhpcy5vcHRpb25zLnNob3dab29tUmVzZXQmJnRoaXMubWFwUGFuWm9vbS5nZXRab29tKCkudG9GaXhlZCgzKT09dGhpcy5vcHRpb25zLmluaXRpYWxab29tJiYodGhpcy56b29tQ29udHJvbFJlc2V0LmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtZGlzYWJsZWRcIiksdGhpcy56b29tQ29udHJvbFJlc2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIikpfSxhLnByb3RvdHlwZS56b29tTWFwPWZ1bmN0aW9uKGwpe2lmKHRoaXNbXCJ6b29tQ29udHJvbFwiK2wuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrbC5zbGljZSgxKV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic3ZnTWFwLWRpc2FibGVkXCIpKXJldHVybiExO1wicmVzZXRcIj09PWw/KHRoaXMubWFwUGFuWm9vbS5yZXNldCgpLDAhPXRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnh8fDAhPXRoaXMub3B0aW9ucy5pbml0aWFsUGFuLnk/dGhpcy5tYXBQYW5ab29tLnpvb21BdFBvaW50QnkodGhpcy5vcHRpb25zLmluaXRpYWxab29tLHt4OnRoaXMub3B0aW9ucy5pbml0aWFsUGFuLngseTp0aGlzLm9wdGlvbnMuaW5pdGlhbFBhbi55fSk6dGhpcy5tYXBQYW5ab29tLnpvb20odGhpcy5vcHRpb25zLmluaXRpYWxab29tKSk6dGhpcy5tYXBQYW5ab29tW1wiaW5cIj09bD9cInpvb21JblwiOlwiem9vbU91dFwiXSgpfSxhLnByb3RvdHlwZS56b29tQ29udGluZW50PWZ1bmN0aW9uKGwpe2w9dGhpcy5jb250aW5lbnRzW2xdO1wiRUFcIj09bC5pc28/dGhpcy5tYXBQYW5ab29tLnJlc2V0KCk6bC5wYW4mJih0aGlzLm1hcFBhblpvb20ucmVzZXQoKSx0aGlzLm1hcFBhblpvb20uem9vbUF0UG9pbnQobC56b29tLGwucGFuKSl9LGEucHJvdG90eXBlLmFkZE1vdXNlV2hlZWxab29tTm90aWNlPWZ1bmN0aW9uKCl7dmFyIGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtYmxvY2stem9vbS1ub3RpY2VcIik7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmlubmVySFRNTD0tMSE9bmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1hY1wiKT90aGlzLm9wdGlvbnMubW91c2VXaGVlbEtleU1lc3NhZ2VNYWM6dGhpcy5vcHRpb25zLm1vdXNlV2hlZWxLZXlNZXNzYWdlLGwuYXBwZW5kKHQpLHRoaXMud3JhcHBlci5hcHBlbmQobCl9LGEucHJvdG90eXBlLnNob3dNb3VzZVdoZWVsWm9vbU5vdGljZT1mdW5jdGlvbihsKXt0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVufHwodGhpcy5hdXRvSGlkZU1vdXNlV2hlZWxOb3RpY2VUaW1lb3V0JiZjbGVhclRpbWVvdXQodGhpcy5hdXRvSGlkZU1vdXNlV2hlZWxOb3RpY2VUaW1lb3V0KSx0aGlzLmF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuaGlkZU1vdXNlV2hlZWxab29tTm90aWNlKCl9LmJpbmQodGhpcyksbHx8MjQwMCksdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtYmxvY2stem9vbS1ub3RpY2UtYWN0aXZlXCIpKX0sYS5wcm90b3R5cGUuaGlkZU1vdXNlV2hlZWxab29tTm90aWNlPWZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtYmxvY2stem9vbS1ub3RpY2UtYWN0aXZlXCIpLHRoaXMuYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0hpZGVNb3VzZVdoZWVsTm90aWNlVGltZW91dCl9LGEucHJvdG90eXBlLmJsb2NrTW91c2VXaGVlbFpvb21Ob3RpY2U9ZnVuY3Rpb24obCl7dGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlbj0hMCx0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMubW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW5UaW1lb3V0KSx0aGlzLm1vdXNlV2hlZWxOb3RpY2VKdXN0SGlkZGVuVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5tb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlbj0hMX0uYmluZCh0aGlzKSxsfHw2MDApfSxhLnByb3RvdHlwZS5hZGRNb3VzZVdoZWVsWm9vbVdpdGhLZXlFdmVudHM9ZnVuY3Rpb24oKXtpZih0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsZnVuY3Rpb24obCl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdmdNYXAtem9vbS1rZXktcHJlc3NlZFwiKT8odGhpcy5oaWRlTW91c2VXaGVlbFpvb21Ob3RpY2UoKSx0aGlzLmJsb2NrTW91c2VXaGVlbFpvb21Ob3RpY2UoKSk6dGhpcy5zaG93TW91c2VXaGVlbFpvb21Ob3RpY2UoKX0uYmluZCh0aGlzKSx7cGFzc2l2ZTohMH0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZnVuY3Rpb24obCl7XCJBbHRcIiE9bC5rZXkmJlwiQ29udHJvbFwiIT1sLmtleSYmXCJNZXRhXCIhPWwua2V5JiZcIlNoaWZ0XCIhPWwua2V5fHwoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLXpvb20ta2V5LXByZXNzZWRcIiksdGhpcy5oaWRlTW91c2VXaGVlbFpvb21Ob3RpY2UoKSx0aGlzLmJsb2NrTW91c2VXaGVlbFpvb21Ob3RpY2UoKSl9LmJpbmQodGhpcykpLHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIixmdW5jdGlvbihsKXsobC5hbHRLZXl8fGwuY3RybEtleXx8bC5tZXRhS2V5fHxsLnNoaWZ0S2V5KSYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwic3ZnTWFwLXpvb20ta2V5LXByZXNzZWRcIil9KSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInN2Z01hcC1rZXktZXZlbnRzLWFkZGVkXCIpKXJldHVybiExO2RvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1rZXktZXZlbnRzLWFkZGVkXCIpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKGwpe1wiQWx0XCIhPWwua2V5JiZcIkNvbnRyb2xcIiE9bC5rZXkmJlwiTWV0YVwiIT1sLmtleSYmXCJTaGlmdFwiIT1sLmtleXx8ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3ZnTWFwLXpvb20ta2V5LXByZXNzZWRcIil9KX0sYS5wcm90b3R5cGUubWFwUGF0aHM9e0FGOntkOlwiTTEzNjkuOSwzMzMuOGgtNS40bC0zLjgtMC41bC0yLjUsMi45bC0yLjEsMC43bC0xLjUsMS4zbC0yLjYtMi4xbC0xLTUuNGwtMS42LTAuM3YtMmwtMy4yLTEuNWwtMS43LDIuM2wwLjIsMi42IGwtMC42LDAuOWwtMy4yLTAuMWwtMC45LDNsLTIuMS0xLjNsLTMuMywyLjFsLTEuOC0wLjhsLTQuMy0xLjRoLTIuOWwtMS42LTAuMmwtMi45LTEuN2wtMC4zLDIuM2wtNC4xLDEuMmwwLjEsNS4ybC0yLjUsMmwtNCwwLjkgbC0wLjQsM2wtMy45LDAuOGwtNS45LTIuNGwtMC41LDhsLTAuNSw0LjdsMi41LDAuOWwtMS42LDMuNWwyLjcsNS4xbDEuMSw0bDQuMywxLjFsMS4xLDRsLTMuOSw1LjhsOS42LDMuMmw1LjMtMC45bDMuMywwLjhsMC45LTEuNCBsMy44LDAuNWw2LjYtMi42bC0wLjgtNS40bDIuMy0zLjZoNGwwLjItMS43bDQtMC45bDIuMSwwLjZsMS43LTEuOGwtMS4xLTMuOGwxLjUtMy44bDMtMS42bC0zLTQuMmw1LjEsMC4ybDAuOS0yLjNsLTAuOC0yLjVsMi0yLjcgbC0xLjQtMy4ybC0xLjktMi44bDIuNC0yLjhsNS4zLTEuM2w1LjgtMC44bDIuNC0xLjJsMi44LTAuN0wxMzY5LjksMzMzLjhMMTM2OS45LDMzMy44elwifSxBTDp7ZDpcIk0xMDc3LjUsMzAwLjVsLTIsMy4xbDAuNSwxLjlsMCwwbDEsMWwtMC41LDEuOWwtMC4xLDQuM2wwLjcsM2wzLDIuMWwwLjIsMS40bDEsMC40bDIuMS0zbDAuMS0yLjFsMS42LTAuOVYzMTIgbC0yLjMtMS42bC0wLjktMi42bDAuNC0yLjFsMCwwbC0wLjUtMi4zbC0xLjMtMC42bC0xLjMtMS42bC0xLjMsMC41TDEwNzcuNSwzMDAuNUwxMDc3LjUsMzAwLjV6XCJ9LERaOntkOlwiTTEwMjEsMzM2LjlsLTMuNiwwLjRsLTIuMi0xLjVoLTUuNmwtNC45LDIuNmwtMi43LTFsLTguNywwLjVsLTguOSwxLjJsLTUsMmwtMy40LDIuNmwtNS43LDEuMmwtNS4xLDMuNWwyLDQuMSBsMC4zLDMuOWwxLjgsNi43bDEuNCwxLjRsLTEsMi41bC03LDFsLTIuNSwyLjRsLTMuMSwwLjVsLTAuMyw0LjdsLTYuMywyLjVsLTIuMSwzLjJMOTQ0LDM4M2wtNS40LDFsLTguOSw0LjdsLTAuMSw3LjV2MC40bC0wLjEsMS4yIGwyMC4zLDE1LjVsMTguNCwxMy45bDE4LjYsMTMuOGwxLjMsM2wzLjQsMS44bDIuNiwxLjFsMC4xLDRsNi4xLTAuNmw3LjgtMi44bDE1LjgtMTIuNWwxOC42LTEyLjJsLTIuNS00bC00LjMtMi45bC0yLjYsMS4ybC0yLTMuNiBsLTAuMi0yLjdsLTMuNC00LjdsMi4xLTIuNmwtMC41LTRsMC42LTMuNWwtMC41LTIuOWwwLjktNS4ybC0wLjQtM2wtMS45LTUuNmwtMi42LTExLjNsLTMuNC0yLjZ2LTEuNWwtNC41LTMuOGwtMC42LTQuOGwzLjItMy42IGwxLjEtNS4zbC0xLTYuMkwxMDIxLDMzNi45TDEwMjEsMzM2Ljl6XCJ9LEFEOntkOlwiTTk4NS40LDMwMS43bDAuMi0wLjRsLTAuMi0wLjJsLTAuNy0wLjJsLTAuMy0wLjFsLTAuNCwwLjNsLTAuMSwwLjNsMC4xLDAuMXYwLjRsMC4xLDAuMmgwLjRMOTg1LjQsMzAxLjcgTDk4NS40LDMwMS43elwifSxBTzp7ZDpcIk0xMDY4LjMsNjA5LjZsLTE2LjYtMC4xbC0xLjksMC43bC0xLjctMC4xbC0yLjMsMC45bC0wLjUsMS4ybDIuOCw0bDEuMSw0LjNsMS42LDYuMWwtMS43LDIuNmwtMC4zLDEuM2wxLjMsMy44IGwxLjUsMy45bDEuNiwyLjJsMC4zLDMuNmwtMC43LDQuOGwtMS44LDIuOGwtMy4zLDQuMmwtMS4zLDIuNmwtMS45LDUuN2wtMC4zLDIuN2wtMiw1LjlsLTAuOSw1LjVsMC41LDRsMi43LTEuMmwzLjMtMWwzLjYsMC4xIGwzLjIsMi45bDAuOS0wLjRsMjIuNS0wLjNsMy43LDNsMTMuNCwwLjlsMTAuMy0yLjVsLTMuNS00bC0zLjYtNS4ybDAuOC0yMC4zbDExLjYsMC4xbC0wLjUtMi4ybDAuOS0yLjRsLTAuOS0zbDAuNy0zbC0wLjUtMiBsLTIuNi0wLjRsLTMuNSwxbC0yLjQtMC4ybC0xLjQsMC42bDAuNS03LjZsLTEuOS0yLjNsLTAuMy00bDAuOS0zLjhsLTEuMi0yLjR2LTRoLTYuOGwwLjUtMi4zaC0yLjlsLTAuMywxLjFsLTMuNCwwLjNsLTEuNSwzLjcgbC0wLjksMS42bC0zLTAuOWwtMS45LDAuOWwtMy43LDAuNWwtMi4xLTMuM2wtMS4zLTIuMWwtMS42LTMuOEwxMDY4LjMsNjA5LjZMMTA2OC4zLDYwOS42eiBNMTA0Ni41LDYwOC4zbDAuMi0yLjdsMC45LTEuN2wyLTEuMyBsLTItMi4ybC0xLjgsMS4xbC0yLjIsMi43bDEuNCw0LjhMMTA0Ni41LDYwOC4zTDEwNDYuNSw2MDguM3pcIn0sQUk6e2Q6XCJNNjI3LjksNDU2LjJsMC4xLTAuMmwtMC4yLTAuMWwtMC44LDAuNXYwLjFMNjI3LjksNDU2LjJ6XCJ9LEFHOntkOlwiTTYzNC4zLDQ2My44bDAuMi0wLjF2LTAuMXYtMC4ybC0wLjEtMC4xbC0wLjEtMC4ybC0wLjQtMC4ybC0wLjUsMC41djAuMmwwLjEsMC4zbDAuNiwwLjFMNjM0LjMsNDYzLjhMNjM0LjMsNDYzLjh6IE02MzQuNSw0NjAuM3YtMC41bC0wLjEtMC4yaC0wLjNsLTAuMS0wLjFoLTAuMWwtMC4xLDAuMWwwLjEsMC42bDAuNSwwLjNMNjM0LjUsNDYwLjNMNjM0LjUsNDYwLjN6XCJ9LEFSOntkOlwiTTY2OS44LDkyMC43bDAuOS0zbC03LjMtMS41bC03LjctMy42bC00LjMtNC42bC0zLTIuOGw1LjksMTMuNWg1bDIuOSwwLjJsMy4zLDIuMUw2NjkuOCw5MjAuN0w2NjkuOCw5MjAuN3ogTTYxOS40LDcxMi42bC03LjQtMS41bC00LDUuN2wwLjksMS42bC0xLjEsNi42bC01LjYsMy4ybDEuNiwxMC42bC0wLjksMmwyLDIuNWwtMy4yLDRsLTIuNiw1LjlsLTAuOSw1LjhsMS43LDYuMmwtMi4xLDYuNSBsNC45LDEwLjlsMS42LDEuMmwxLjMsNS45bC0xLjYsNi4ybDEuNCw1LjRsLTIuOSw0LjNsMS41LDUuOWwzLjMsNi4zbC0yLjUsMi40bDAuMyw1LjdsMC43LDYuNGwzLjMsNy42bC0xLjYsMS4ybDMuNiw3LjFsMy4xLDIuMyBsLTAuOCwyLjZsMi44LDEuM2wxLjMsMi4zbC0xLjgsMS4xbDEuOCwzLjdsMS4xLDguMmwtMC43LDUuM2wxLjgsMy4ybC0wLjEsMy45bC0yLjcsMi43bDMuMSw2LjZsMi42LDIuMmwzLjEtMC40bDEuOCw0LjZsMy41LDMuNiBsMTIsMC44bDQuOCwwLjlsMi4yLDAuNGwtNC43LTMuNmwtNC4xLTYuM2wwLjktMi45bDMuNS0yLjVsMC41LTcuMmw0LjctMy41bC0wLjItNS42bC01LjItMS4zbC02LjQtNC41bC0wLjEtNC43bDIuOS0zLjFsNC43LTAuMSBsMC4yLTMuM2wtMS4yLTYuMWwyLjktMy45bDQuMS0xLjlsLTIuNS0zLjJsLTIuMiwybC00LTEuOWwtMi41LTYuMmwxLjUtMS42bDUuNiwyLjNsNS0wLjlsMi41LTIuMmwtMS44LTMuMWwtMC4xLTQuOGwtMi0zLjggbDUuOCwwLjZsMTAuMi0xLjNsNi45LTMuNGwzLjMtOC4zbC0wLjMtMy4ybC0zLjktMi44bC0wLjEtNC41bC03LjgtNS41bC0wLjMtMy4zbC0wLjQtNC4ybDAuOS0xLjRsLTEuMS02LjNsMC4zLTYuNWwwLjUtNS4xIGw1LjktOC42bDUuMy02LjJsMy4zLTIuNmw0LjItMy41bC0wLjUtNS4xbC0zLjEtMy43bC0yLjYsMS4ybC0wLjMsNS43bC00LjMsNC44bC00LjIsMS4xbC02LjItMWwtNS43LTEuOGw0LjItOS42bC0xLjEtMi44IGwtNS45LTIuNWwtNy4yLTQuN2wtNC42LTFMNjMyLDcxMy43bC0xLTEuM2wtNi4zLTAuM2wtMS42LDUuMUw2MTkuNCw3MTIuNkw2MTkuNCw3MTIuNnpcIn0sQU06e2Q6XCJNMTIxOSwzMjUuMWwtMC45LTQuNGwtMi41LTEuMWwtMi41LTEuN2wxLTJsLTMuMS0yLjJsMC43LTEuNWwtMi4yLTEuMWwtMS40LTEuN2wtNi45LDFsMS4zLDIuMnYzLjFsNC4yLDEuNSBsMi40LDEuOWwxLTAuMmwxLjgsMS43aDIuM2wwLjIsMWwyLjgsMy43TDEyMTksMzI1LjFMMTIxOSwzMjUuMXpcIn0sQVc6e2Q6XCJNNTg2LjYsNDkyLjlsLTAuMS0wLjFsLTAuMy0wLjZsLTAuMy0wLjNsLTAuMSwwLjFsLTAuMSwwLjNsMC4zLDAuM2wwLjMsMC40bDAuMywwLjFMNTg2LjYsNDkyLjlMNTg2LjYsNDkyLjl6XCJ9LEFVOntkOlwiTTE3MjYuNyw4MzJsLTMtMC41bC0xLjksMi45bC0wLjYsNS40bC0yLjEsNGwtMC41LDUuM2wzLDAuMmwwLjgsMC4zbDYuNi00LjNsMC42LDEuN2w0LTQuOWwzLjItMi4ybDQuNS03LjMgbC0yLjgtMC41bC00LjgsMS4ybC0zLjQsMC45TDE3MjYuNyw4MzJMMTcyNi43LDgzMnogTTE3NzYuOCw2NTkuN2wwLjUtMi4zbDAuMS0zLjZsLTEuNi0zLjJsMC4xLTIuN2wtMS4zLTAuOGwwLjEtMy45bC0xLjItMy4yIGwtMi4zLDIuNGwtMC40LDEuOGwtMS41LDMuNWwtMS44LDMuNGwwLjYsMi4xbC0xLjIsMS4zbC0xLjUsNC44bDAuMSwzLjdsLTAuNywxLjhsMC4zLDMuMWwtMi42LDVsLTEuMywzLjVsLTEuNywyLjlsLTEuNywzLjQgbC00LjEsMi4xbC00LjktMi4xbC0wLjUtMmwtMi41LTEuNmgtMS42bC0zLjMtMy44bC0yLjUtMi4ybC0zLjktMmwtMy45LTMuNWwtMC4xLTEuOGwyLjUtMy4xbDIuMS0zLjJsLTAuMy0yLjZsMS45LTAuMmwyLjUtMi41IGwyLTMuNGwtMi4yLTMuMmwtMS41LDEuMmwtMi0wLjVsLTMuNSwxLjhsLTMuMi0ybC0xLjcsMC43bC00LjUtMS42bC0yLjctMi43bC0zLjUtMS41bC0zLjEsMC45bDMuOSwyLjFsLTAuMywzLjJsLTQuOCwxLjJsLTIuOC0wLjcgbC0zLjYsMi4ybC0yLjksMy43bDAuNiwxLjVsLTIuNywxLjdsLTMuNCw1LjFsMC42LDMuNWwtMy40LTAuNmgtMy41bC0yLjUtMy44bC0zLjctMi45bC0yLjgsMC44bC0yLjYsMC45bC0wLjMsMS42bC0yLjQtMC43IGwtMC4zLDEuOGwtMywxLjFsLTEuNywyLjVsLTMuNSwzLjFsLTEuNCw0LjhsLTIuMy0xLjNsLTIuMiwzLjFsMS41LDNsLTIuNiwxLjJsLTEuNC01LjVsLTQuOCw1LjRsLTAuOCwzLjVsLTAuNywyLjVsLTMuOCwzLjMgbC0yLDMuNGwtMy41LDIuOGwtNi4xLDEuOWwtMy4xLTAuMmwtMS41LDAuNmwtMS4xLDEuNGwtMy41LDAuN2wtNC43LDIuNGwtMS40LTAuOGwtMi42LDAuNWwtNC42LDIuM2wtMy4yLDIuN2wtNC44LDIuMWwtMy4xLDQuNCBsMC40LTQuOGwtMy4xLDQuNmwtMC4xLDMuN2wtMS4zLDMuMmwtMS41LDEuNWwtMS4zLDMuN2wwLjksMS45bDAuMSwybDEuNiw1bC0wLjcsMy4zbC0xLTIuNWwtMi4zLTEuOGwwLjQsNS45bC0xLjctMi44bDAuMSwyLjggbDEuOCw1bC0wLjYsNWwxLjcsMi41bC0wLjQsMS45bDAuOSw0LjFsLTEuMywzLjZsLTAuMywzLjZsMC43LDYuNWwtMC43LDMuN2wtMi4yLDQuNGwtMC42LDIuM2wtMS41LDEuNWwtMi45LDAuOGwtMS41LDMuN2wyLjQsMS4yIGw0LDQuMWgzLjZsMy44LDAuM2wzLjMtMi4xbDMuNC0xLjhsMS40LDAuM2w0LjUtMy40bDMuOC0wLjNsNC4xLTAuN2w0LjIsMS4ybDMuNi0wLjZsNC42LTAuMmwzLTIuNmwyLjMtMy4zbDUuMi0xLjVsNi45LTMuMmw1LDAuNCBsNi45LTIuMWw3LjgtMi4zbDkuOC0wLjZsNCwzLjFsMy43LDAuMmw1LjMsMy44bC0xLjYsMS41bDEuOCwyLjRsMS4zLDQuNmwtMS42LDMuNGwyLjksMi42bDQuMy01LjFsNC4zLTIuMWw2LjctNS41bC0xLjYsNC43IGwtMy40LDMuMmwtMi41LDMuN2wtNC40LDMuNWw1LjItMS4ybDQuNy00LjRsLTAuOSw0LjhsLTMuMiwzLjFsNC43LDAuOGwxLjMsMi42bC0wLjQsMy4zbC0xLjUsNC45bDEuNCw0bDQsMS45bDIuOCwwLjRsMi40LDEgbDMuNSwxLjhsNy4yLTQuN2wzLjUtMS4ybC0yLjcsMy40bDIuNiwxLjFsMi43LDIuOGw0LjctMi43bDMuOC0yLjVsNi4zLTIuN2w2LTAuMmw0LjItMi4zbDAuOS0ybDMtNC41bDMuOS00LjhsMy42LTMuMmw0LjQtNS42IGwzLjMtMy4xbDQuNC01bDUuNC0zLjFsNS01LjhsMy4xLTQuNWwxLjQtMy42bDMuOC01LjdsMi4xLTIuOWwyLjUtNS43bC0wLjctNS40bDEuNy0zLjlsMS4xLTMuN3YtNS4xbC0yLjgtNS4xbC0xLjktMi41bC0yLjktMy45IGwwLjctNi43bC0xLjUsMWwtMS42LTIuOGwtMi41LDEuNGwtMC42LTYuOWwtMi4yLTRsMS0xLjVsLTMuMS0yLjhsLTMuMi0zbC01LjMtMy4zbC0wLjktNC4zbDEuMy0zLjNsLTAuNC01LjVsLTEuMy0wLjdsLTAuMi0zLjIgbC0wLjItNS41bDEuMS0yLjhsLTIuMy0yLjVsLTEuNC0yLjdsLTMuOSwyLjRMMTc3Ni44LDY1OS43TDE3NzYuOCw2NTkuN3pcIn0sQVQ6e2Q6XCJNMTA2MC4yLDI2NGwtMi4zLTEuMmwtMi4zLDAuM2wtNC0xLjlsLTEuNywwLjVsLTIuNiwyLjVsLTMuOC0ybC0xLjUsMi45bC0xLjcsMC44bDEsNGwtMC40LDEuMWwtMS43LTEuM2wtMi40LTAuMiBsLTMuNCwxLjJsLTQuNC0wLjNsLTAuNiwxLjZsLTIuNi0xLjdsLTEuNSwwLjNsMC4yLDEuMWwtMC43LDEuNmwyLjMsMS4xbDIuNiwwLjJsMy4xLDAuOWwwLjUtMS4ybDQuOC0xLjFsMS4zLDIuMmw3LjIsMS42bDQuMiwwLjQgbDIuNC0xLjRsNC4zLTAuMWwwLjktMS4xbDEuMy00bC0xLjEtMS4zaDIuOGwwLjItMi42bC0wLjctMi4xTDEwNjAuMiwyNjRMMTA2MC4yLDI2NHpcIn0sQVo6e2Q6XCJNMTIxMC4xLDMxOC45bC0xLDAuMmwxLjIsMi40bDMuMiwyLjlsMy43LDAuOWwtMi44LTMuN2wtMC4yLTFoLTIuM0wxMjEwLjEsMzE4LjlMMTIxMC4xLDMxOC45eiBNMTIyMC41LDMwOS42IGwtNC4zLTMuOGwtMS41LTAuMmwtMS4xLDAuOWwzLjIsMy40bC0wLjYsMC43bC0yLjgtMC40bC00LjItMS44bC0xLjEsMWwxLjQsMS43bDIuMiwxLjFsLTAuNywxLjVsMy4xLDIuMmwtMSwybDIuNSwxLjdsMi41LDEuMSBsMC45LDQuNGw1LjMtNC43bDEuOS0wLjVsMS45LDEuOWwtMS4yLDMuMWwzLjgsMy40bDEuMy0wLjNsLTAuOC0zLjJsMS43LTEuNWwwLjQtMi4ybC0wLjEtNWw0LjItMC41bC0yLTEuN2wtMi41LTAuMmwtMy41LTQuNSBsLTMuNC0zLjJsMCwwbC0yLjYsMi41bC0wLjUsMS41TDEyMjAuNSwzMDkuNkwxMjIwLjUsMzA5LjZ6XCJ9LEJTOntkOlwiTTU3NC40LDQzNy4zbDAuMi0wLjZsLTAuMy0wLjFsLTAuNSwwLjdsLTAuNiwwLjNoLTAuM2wtMC43LTAuM2gtMC41bC0wLjQsMC41bC0wLjYsMC4xbDAuMSwwLjF2MC4ybC0wLjIsMC4zdjAuMiBsMC4xLDAuM2wxLjUtMC4xbDEuMy0wLjJsMC43LTAuOUw1NzQuNCw0MzcuM3ogTTU3NS4yLDQzNS4zbC0wLjQtMC4zbC0wLjQsMC4zbDAuMSwwLjNMNTc1LjIsNDM1LjNMNTc1LjIsNDM1LjN6IE01NzUuMiw0MjkuNSBsLTAuNC0wLjJsLTAuMywwLjVsMC4zLDAuMWwwLjctMC4xbDAuNSwwLjFsMC41LDAuNGwwLjMtMC4ybC0wLjEtMC4xbC0wLjQtMC4zbC0wLjYtMC4xaC0wLjJMNTc1LjIsNDI5LjVMNTc1LjIsNDI5LjV6IE01NjguNiw0MzAuOGwwLjctMC42bDAuNy0wLjNsMC45LTEuMWwtMC4xLTAuOWwwLjItMC40bC0wLjYsMC4xbC0wLjEsMC4zbC0wLjEsMC4zbDAuMywwLjR2MC4ybC0wLjIsMC40bC0wLjMsMC4xbC0wLjEsMC4yIGwtMC4zLDAuMWwtMC40LDAuNWwtMC44LDAuNmwtMC4yLDAuM0w1NjguNiw0MzAuOEw1NjguNiw0MzAuOHogTTU2OS44LDQyNy42bC0wLjYtMC4yTDU2OSw0MjdsLTAuNC0wLjFsLTAuMSwwLjJ2MC4ybDAuMSwwLjQgbDAuMi0wLjFsMC44LDAuNGwwLjQtMC4zTDU2OS44LDQyNy42eiBNNTY1LjcsNDI2LjV2LTAuN2wtMC40LTAuNWwtMC42LTAuNGwtMC4xLTEuMmwtMC4zLTAuN2wtMC4yLTAuNmwtMC40LTAuOHYwLjVsMC4xLDAuMSBsMC4xLDAuNmwwLjQsMC45bDAuMSwwLjRsLTAuMSwwLjRsLTAuNCwwLjFsLTAuMSwwLjJsMC41LDAuM2wwLjgsMC4zbDAuNSwxLjNMNTY1LjcsNDI2LjVMNTY1LjcsNDI2LjV6IE01NjEuNiw0MjNsLTAuNS0wLjMgbC0wLjItMC4zbC0wLjctMC43bC0wLjMtMC4xbC0wLjIsMC40bDAuNCwwLjFsMC45LDAuN2wwLjQsMC4yTDU2MS42LDQyM0w1NjEuNiw0MjN6IE01NjguOSw0MTlsLTAuMS0wLjNoLTAuMWwtMC4zLDAuMWwtMC4zLDAuOSBoMC4zTDU2OC45LDQxOUw1NjguOSw0MTl6IE01NTEuMyw0MTcuOWwtMC4yLTAuM2wtMC4zLDAuMmgtMC41bC0wLjIsMC4xaC0wLjRsLTAuMywwLjJsMC40LDAuOGwwLjMsMC4zbDAuMSwxbDAuMiwwLjFsLTAuMSwwLjcgbDEuMSwwLjFsMC40LTAuOFY0MjB2LTAuMXYtMC4ydi0wLjJ2LTAuOWwtMC4zLTAuNWwtMC40LDAuNmwtMC40LTAuM2wwLjYtMC40TDU1MS4zLDQxNy45TDU1MS4zLDQxNy45eiBNNTY0LjIsNDE4LjJsLTEtMS40di0wLjIgbC0wLjUtMS41bC0wLjMtMC4xbC0wLjEsMC4xbC0wLjEsMC4ybDAuNCwwLjR2MC40bDAuMywwLjJsMC40LDEuMWwwLjQsMC40bC0wLjEsMC4zbC0wLjQsMC4zbC0wLjEsMC4yaDAuMWwwLjYtMC4xaDAuNEw1NjQuMiw0MTguMiBMNTY0LjIsNDE4LjJ6IE01NTMuNyw0MTNsMC41LTAuMmwwLDBsLTAuMy0wLjJoLTAuN2wtMC40LDAuMWwtMC4yLDAuMmwwLjEsMC4xbDAuNCwwLjFMNTUzLjcsNDEzTDU1My43LDQxM3ogTTU1MS4zLDQxNWwtMC41LTAuNiBsLTAuMy0wLjlsLTAuMi0wLjRsMC4xLTAuNWwtMC4zLTAuNGwtMC42LTAuNGwtMC4zLDAuMWwwLjEsMS4xbC0wLjIsMC42bC0wLjgsMS4xbDAuMSwwLjRsMCwwbDAuMSwwLjJsLTAuNSwwLjR2LTAuM2wtMC42LDAuMSBsMC4zLDAuNWwwLjYsMC40bDAuMywwLjFsMC4zLTAuMnYwLjVsMC4zLDAuNGwwLjEsMC40bDAuMy0wLjNsMC42LTAuMmwwLjItMC4ybDAuNy0wLjR2LTAuMmwwLjEtMC42TDU1MS4zLDQxNUw1NTEuMyw0MTV6IE01NTgsNDEwIGwtMC4zLTAuNWwtMC4xLDAuMWwtMC4xLDAuNGwtMC4zLDAuNGwwLjUtMC4xbDAuNCwwLjFsMC42LDAuNWwwLjcsMC4ybDAuMywwLjZsMC42LDAuNnYwLjZsLTAuNCwwLjZsLTAuMSwwLjdsLTAuNiwwLjFsMC4xLDAuMSBsMC4zLDAuM2wwLjEsMC40bDAuMiwwLjJ2LTAuN2wwLjMtMC44bDAuNC0xLjNsLTAuMS0wLjNsLTAuMy0wLjNsLTAuNy0wLjlsLTAuNy0wLjNMNTU4LDQxMEw1NTgsNDEweiBNNTQ5LjIsNDAyLjFsLTAuNS0wLjQgbC0wLjIsMC40djAuMWwtMC4xLDAuM2wtMC41LDAuNGwtMC41LDAuMWwtMC43LTAuNmwtMC4yLTAuMWwwLjgsMS4xbDAuMywwLjFoMC40bDAuOS0wLjNsMS42LTAuNWwxLjctMC4ybDAuMS0wLjJsLTAuMS0wLjMgbC0wLjgsMC4ybC0xLTAuMWwtMC4yLDAuMmgtMC40TDU0OS4yLDQwMi4xeiBNNTU1LjMsNDA3LjNsMC4yLTAuM2wwLjQtMS44bDAuOC0wLjZsMC4xLTEuMmwtMC41LTAuNWwtMC40LTAuMmwtMC4xLTAuMmwwLjEtMC4yIGwtMC4yLTAuMWwtMC4zLTAuMmwtMC40LTAuNmwtMC40LTAuNGwtMC43LTAuMWwtMC42LTAuMWwtMC40LTAuMWwtMC41LDAuM2gwLjhsMS41LDAuM2wwLjcsMS41bDAuNSwwLjRsMC4xLDAuNGwtMC4yLDAuNHYwLjQgbC0wLjMsMC41bC0wLjEsMC44bC0wLjMsMC40bC0wLjcsMC41bDAuNCwwLjJsMC4zLDAuNkw1NTUuMyw0MDcuM0w1NTUuMyw0MDcuM3pcIn0sQkg6e2Q6XCJNMTI1Myw0MDguM2wwLjctM2wtMC41LTAuOWwtMS42LDEuMmwwLjYsMC45bC0wLjIsMC43TDEyNTMsNDA4LjN6XCJ9LEJEOntkOlwiTTE0ODYuNSw0MzEuOWwtNC41LTEwLjFsLTEuNSwwLjFsLTAuMiw0bC0zLjUtMy4zbDEuMS0zLjZsMi40LTAuNGwxLjYtNS4zbC0zLjQtMS4xbC01LDAuMWwtNS40LTAuOWwtMS4yLTQuNCBsLTIuNy0wLjRsLTQuOC0yLjdsLTEuMiw0LjNsNC42LDMuNGwtMy4xLDIuNGwtMC44LDIuM2wzLjcsMS43bC0wLjQsMy44bDIuNiw0LjhsMS42LDUuMmwyLjIsMC42bDEuNywwLjdsMC42LTEuMmwyLjUsMS4zbDEuMy0zLjUgbC0wLjktMi42bDUuMSwwLjJsMi44LDMuN2wxLjUsMy4xbDAuOCwzLjJsMiwzLjNsLTEuMS01LjFsMi4xLDFMMTQ4Ni41LDQzMS45TDE0ODYuNSw0MzEuOXpcIn0sQkI6e2Q6XCJNNjQ0LjksNDg4LjlsMC40LTAuNGwtMC4zLTAuM2wtMC42LTAuOGwtMC4zLDAuMXYxbDAuMSwwLjNsMC41LDAuM0w2NDQuOSw0ODguOUw2NDQuOSw0ODguOXpcIn0sQlk6e2Q6XCJNMTExMi44LDIxOS40bC01LjItMS41bC00LjYsMi4zbC0yLjYsMWwwLjksMi42bC0zLjUsMmwtMC41LDMuNGwtNC44LDIuMmgtNC42bDAuNiwyLjdsMS43LDIuM2wwLjMsMi40bC0yLjcsMS4yIGwxLjksMi45bDAuNSwyLjdsMi4yLTAuM2wyLjQtMS42bDMuNy0wLjJsNSwwLjVsNS42LDEuNWwzLjgsMC4xbDIsMC45bDEuNi0xLjFsMS41LDEuNWw0LjMtMC4zbDIsMC42bC0wLjItMy4xbDEuMi0xLjRsNC4xLTAuM2wwLDAgbC0yLTMuOWwtMS41LTJsMC44LTAuNmwzLjksMC4ybDEuNi0xLjNsLTEuNy0xLjZsLTMuNC0xLjFsMC4xLTEuMWwtMi4yLTEuMWwtMy43LTMuOWwwLjYtMS42bC0xLTIuOWwtNC44LTEuNGwtMi4zLDAuNyBMMTExMi44LDIxOS40TDExMTIuOCwyMTkuNHpcIn0sQkU6e2Q6XCJNMTAwMC43LDI0Ni4ybC00LjQsMS4zbC0zLjYtMC41bDAsMGwtMy44LDEuMmwwLjcsMi4ybDIuMiwwLjFsMi40LDIuNGwzLjQsMi45bDIuNS0wLjRsNC40LDIuOGwwLjQtMy41bDEuMy0wLjIgbDAuNC00LjJsLTIuOC0xLjRMMTAwMC43LDI0Ni4yTDEwMDAuNywyNDYuMnpcIn0sQlo6e2Q6XCJNNDgyLjUsNDcxLjFsMS40LTIuMmwxLTAuMmwxLjMtMS43bDEtMy4ybC0wLjMtMC42bDAuOS0yLjNsLTAuNC0xbDEuMy0yLjdsMC4zLTEuOGgtMS4xbDAuMS0wLjloLTFsLTIuNSwzLjkgbC0wLjktMC44bC0wLjcsMC4zbC0wLjEsMWwtMC43LDVsLTEuMiw3LjJMNDgyLjUsNDcxLjFMNDgyLjUsNDcxLjF6XCJ9LEJKOntkOlwiTTk5Ni45LDQ5OGwtNC4zLTMuN2gtMmwtMS45LDEuOWwtMS4yLDEuOWwtMi43LDAuNmwtMS4yLDIuOGwtMS45LDAuN2wtMC43LDMuM2wxLjcsMS45bDIsMi4zbDAuMiwzLjFsMS4xLDEuMyBsLTAuMiwxNC42bDEuNCw0LjRsNC42LTAuOGwwLjMtMTAuMkw5OTIsNTE4bDEtNGwxLjctMS45bDIuNy00bC0wLjYtMS43bDEuMS0yLjVsLTEuMi0zLjhMOTk2LjksNDk4TDk5Ni45LDQ5OHpcIn0sQk06e2Q6XCJNNjMwLjIsMzY2LjhsMC40LTAuNmgtMC4xbC0wLjUsMC41bC0wLjYsMC4ybDAuMSwwLjFoMC4xTDYzMC4yLDM2Ni44elwifSxCVDp7ZDpcIk0xNDc0LjcsMzk1LjVsLTIuNy0xLjhsLTIuOS0wLjFsLTQuMi0xLjVsLTIuNiwxLjZsLTIuNiw0LjhsMC4zLDEuMmw1LjUsMi41bDMuMi0xbDQuNywwLjRsNC40LTAuMmwtMC40LTMuOSBMMTQ3NC43LDM5NS41TDE0NzQuNywzOTUuNXpcIn0sQk86e2Q6XCJNNjU1LjcsNzAwLjVsMS42LTEuM2wtMC44LTMuNmwxLjMtMi44bDAuNS01bC0xLjYtNGwtMy4yLTEuN2wtMC44LTIuNmwwLjYtMy42bC0xMC43LTAuM2wtMi43LTcuNGwxLjYtMC4xIGwtMC4zLTIuOGwtMS4yLTEuOGwtMC41LTMuN2wtMy4zLTEuOWwtMy41LDAuMWwtMi41LTEuOWwtMy44LTEuMmwtMi40LTIuNGwtNi4zLTFsLTYuNC01LjdsMC4zLTQuM2wtMC45LTIuNWwwLjQtNC43bC03LjMsMS4xIGwtMi44LDIuM2wtNC44LDIuNmwtMS4xLDEuOWwtMi45LDAuMmwtNC4yLTAuNmw1LjUsMTAuM2wtMS4xLDIuMWwwLjEsNC41bDAuMyw1LjRsLTEuOSwzLjJsMS4yLDIuNGwtMS4xLDIuMWwyLjgsNS4zTDU5MSw2ODQgbDMuMSw0LjNsMS4yLDQuNmwzLjIsMi43bC0xLjEsNi4ybDMuNyw3LjFsMy4xLDguOGwzLjgtMC45bDQtNS43bDcuNCwxLjVsMy43LDQuNmwxLjYtNS4xbDYuMywwLjNsMSwxLjNsMS41LTcuNmwtMC4yLTMuNGwyLjEtNS42IGw5LjUtMS45bDUuMSwwLjFsNS40LDMuM0w2NTUuNyw3MDAuNUw2NTUuNyw3MDAuNXpcIn0sQkE6e2Q6XCJNMTA2Mi4yLDI4NC45bC0yLjMsMC4xbC0xLDEuM2wtMS45LTEuNGwtMC45LDIuNWwyLjcsMi45bDEuMywxLjlsMi41LDIuM2wyLDEuNGwyLjIsMi41bDQuNywyLjRsMC40LTMuNGwxLjUtMS40IGwwLjktMC42bDEuMi0wLjNsMC41LTIuOWwtMi43LTIuM2wxLTIuN2gtMS44bDAsMGwtMi40LTEuNGwtMy41LDAuMUwxMDYyLjIsMjg0LjlMMTA2Mi4yLDI4NC45elwifSxCVzp7ZDpcIk0xMTE2LjcsNjg1bC0xLTAuNWwtMy4yLDEuNWgtMS42bC0zLjcsMi41bC0yLTIuNmwtOC42LDIuMmwtNC4xLDAuMmwtMC45LDIyLjdsLTUuNCwwLjJsLTAuNiwxOC41bDEuNCwxbDMsNi4xIGwtMC43LDMuOGwxLjEsMi4zbDQtMC43bDIuOC0yLjhsMi43LTEuOWwxLjUtMy4xbDIuNy0xLjVsMi4zLDAuOGwyLjUsMS44bDQuNCwwLjNsMy42LTEuNWwwLjYtMmwxLjItM2wzLTAuNWwxLjctMi40bDItNC4zbDUuMi00LjcgbDgtNC43bC0zLjQtMi45bC00LjItMC45bC0xLjUtNC4xbDAuMS0yLjJsLTIuMy0wLjdsLTYtN2wtMS42LTMuN2wtMS4xLTEuMUwxMTE2LjcsNjg1TDExMTYuNyw2ODV6XCJ9LEJSOntkOlwiTTY1OSw1NjAuMWwtMS40LDAuMmwtMy4xLTAuNWwtMS44LDEuN2wtMi42LDEuMWwtMS43LDAuMmwtMC43LDEuM2wtMi43LTAuM2wtMy41LTNsLTAuMy0yLjlsLTEuNC0zLjNsMS01LjQgbDEuNi0yLjJsLTEuMi0zbC0xLjktMC45bDAuOC0yLjhsLTEuMy0xLjVsLTIuOSwwLjNsMC43LDEuOGwtMi4xLDIuNGwtNi40LDIuNGwtNCwxbC0xLjcsMS41bC00LjQtMS42bC00LjItMC44bC0xLDAuNmwyLjQsMS42IGwtMC4zLDQuM2wwLjcsNGw0LjgsMC41bDAuMywxLjRsLTQuMSwxLjhsLTAuNywyLjdsLTIuMywxbC00LjIsMS41bC0xLjEsMS45bC00LjQsMC41bC0zLTMuNGwtMS4xLDAuOGwtMS0zLjhsLTEuNi0ybC0xLjksMi4yIGwtMTAuOS0wLjF2My45bDMuMywwLjdsLTAuMiwyLjRsLTEuMS0wLjZsLTMuMiwxdjQuNmwyLjUsMi40bDAuOSwzLjZsLTAuMSwyLjhsLTIuMiwxNy40bC01LjEtMC4zbC0wLjcsMWwtNC42LDEuMmwtNi4yLDQuM2wtMC40LDMgbC0xLjMsMi4ybDAuNywzLjRsLTMuMywxLjlsMC4xLDIuN0w1NjIsNjIwbDIuNiw1LjhsMy4zLDMuOGwtMSwyLjhsMy43LDAuM2wyLjMsMy40bDQuOSwwLjJsNC40LTMuOGwwLjIsOS43bDIuNiwwLjdsMy0xLjFsNC4yLDAuNiBsMi45LTAuMmwxLjEtMS45bDQuOC0yLjZsMi44LTIuM2w3LjMtMS4xbC0wLjQsNC43bDAuOSwyLjVsLTAuMyw0LjNsNi40LDUuN2w2LjMsMWwyLjQsMi40bDMuOCwxLjJsMi41LDEuOWwzLjUtMC4xbDMuMywxLjkgbDAuNSwzLjdsMS4yLDEuOGwwLjMsMi44bC0xLjYsMC4xbDIuNyw3LjRsMTAuNywwLjNsLTAuNiwzLjZsMC44LDIuNmwzLjIsMS43bDEuNiw0bC0wLjUsNWwtMS4zLDIuOGwwLjgsMy42bC0xLjYsMS4zbDEuOSwzLjYgbDAuNCw4LjZsNiwxLjJsMi4xLTEuMmwzLjksMS43bDEuMiwxLjlsMSw1LjhsMC45LDIuNWwyLDAuM2wyLTEuMWwyLjEsMS4ybDAuMywzLjVsLTAuMywzLjhsLTAuNywzLjZsMi42LTEuMmwzLjEsMy43bDAuNSw1LjEgbC00LjIsMy41bC0zLjMsMi42bC01LjMsNi4ybC01LjksOC42bDMuNC0wLjdsNi4yLDQuOWwxLjktMC4ybDYuMiw0LjFsNC44LDMuNWwzLjgsNC4zbC0xLjksM2wyLjEsMy43bDIuOS0zLjdsMS41LTZsMy4yLTNsMy45LTUgbDQuNS0xMS4ybDMuNC0zLjVsMC44LTMuMWwwLjMtNi40bC0xLjMtMy41bDAuMy00LjhsNC4xLTYuM2w2LTUuMWw2LTEuOGwzLjYtMi45bDguNS0yLjRoNS45bDEuMS0zLjhsNC4yLTIuOGwwLjYtNi41bDUuMS04LjMgbDAuNS04LjVsMS42LTIuNmwwLjMtNC4xbDEuMS05LjlsLTEtMTEuOWwxLjQtNC43bDEuNC0wLjFsMy45LTUuNWwzLjMtNy4ybDcuNy04LjhsMi43LTQuMmwyLTEwLjVsLTEtMy45bC0yLTguMWwtMi4xLTJsLTQuOC0wLjIgbC00LjMtMS45bC03LjMtNy4xbC04LjQtNS4zbC04LjQsMC4zbC0xMC45LTMuNGwtNi41LDJsMC44LTMuNWwtMi43LTMuOGwtOS40LTMuOGwtNy4xLTIuM2wtNC4yLDQuMWwtMC4zLTYuM2wtOS45LTFsLTEuNy0yIGw0LjItNS4ybC0wLjEtNC40bC0zLTFsLTMtMTEuMmwtMS4zLTMuNWwtMS45LDAuM2wtMy41LDUuOGwtMS44LDQuN2wtMi4xLDIuNGwtMi43LDAuNWwtMC44LTEuOGwtMS4yLTAuM2wtMS44LDEuOGwtMi40LTEuMyBsLTMuMi0xLjRsLTIuNywwLjdsLTIuMy0wLjZsLTAuNSwxLjhsMC45LDEuM2wtMC41LDEuM0w2NTksNTYwLjFMNjU5LDU2MC4xelwifSxWRzp7ZDpcIk02MTkuMiw0NTUuMWwwLjMtMC4ybC0wLjItMC4xaC0wLjRsLTAuMywwLjJsMC4xLDAuMUg2MTkuMkw2MTkuMiw0NTUuMXogTTYyMC4zLDQ1NC43bDAuNC0wLjRsLTAuNSwwLjFsLTAuMiwwLjIgbDAuMSwwLjFoMC4xTDYyMC4zLDQ1NC43TDYyMC4zLDQ1NC43eiBNNjIxLjEsNDUyLjloLTAuMmgtMC41bDAsMGwwLjEsMC4xaDAuM2wwLjMsMC4xbDAsMEw2MjEuMSw0NTIuOUw2MjEuMSw0NTIuOXpcIn0sQk46e2Q6XCJNMTYxNy44LDU0My40bDIuNywzLjNsMS4xLTIuMmwyLjcsMC4ybDAuMS00LjFsMC4xLTMuMWwtNC42LDMuNUwxNjE3LjgsNTQzLjRMMTYxNy44LDU0My40elwifSxCRzp7ZDpcIk0xMTIxLjYsMjk0LjNsLTMtMC43bC00LTIuMmwtNS44LDEuNGwtMi4zLDEuNmwtNy41LTAuM2wtNC0xbC0xLjksMC41bC0xLjgtMi42bC0xLjEsMS40bDAuNywyLjNsMi44LDIuNmwtMS43LDEuOSBsLTAuNywybDAuNiwwLjdsLTAuNywwLjlsMi44LDJsMC44LDQuMWwzLjgsMC4ybDMuOS0xLjdsMy45LDIuMWw0LjYtMC42bC0wLjMtM2w1LTJsNC41LDAuOGwtMi4xLTMuNWwxLjMtNC40TDExMjEuNiwyOTQuMyBMMTEyMS42LDI5NC4zelwifSxCRjp7ZDpcIk05NzguOCw0NzcuMmgtMy42bC0xLjQtMS4ybC0zLDAuOWwtNS4yLDIuNmwtMS4xLDJsLTQuMywyLjlsLTAuOCwxLjZsLTIuMywxLjNsLTIuNy0wLjlsLTEuNiwxLjZsLTAuOCw0LjQgbC00LjUsNS4ybDAuMiwyLjJsLTEuNiwyLjdsMC40LDMuN2wyLjUsMS40bDEsMi4xbDIuNSwxLjNsMS45LTEuNmwyLjctMC4ybDMuOCwxLjZsLTAuOC00LjhsMC4yLTMuNmw5LjctMC4zbDIuNCwwLjVsMS44LTFsMi42LDAuNSBsNC45LDAuMWwxLjktMC43bDEuMi0yLjhsMi43LTAuNmwxLjItMS45bDAuMS00LjRsLTYuNC0xLjRsLTAuMi0zLjFsLTMuMS00LjFsLTAuOC0yLjlMOTc4LjgsNDc3LjJMOTc4LjgsNDc3LjJ6XCJ9LEJJOntkOlwiTTExNDguMiw1OTBsLTAuMy0yLjVsMCwwbC0zLTAuNGwtMS43LDMuNmwtMy41LTAuNWwxLjQsMi45bDAuMSwxLjFsMiw2LjFsLTAuMSwwLjNsMC42LTAuMWwyLjEtMi4zbDIuMi0zLjMgbDEuNC0xLjR2LTJMMTE0OC4yLDU5MEwxMTQ4LjIsNTkwelwifSxLSDp7ZDpcIk0xNTc0LjgsNDgxLjhsLTUuMi0yLjNsLTIsNC4zbC00LjktMi40bC01LjMtMWwtNy4xLDEuM2wtMyw1LjJsMi4xLDcuN2wzLjQsNi42bDIuNiwzLjNsNC43LDAuOWw0LjctMi41bDUuOC0wLjUgbC0yLjgtMy44bDguOS00LjlsLTAuMS03LjdMMTU3NC44LDQ4MS44TDE1NzQuOCw0ODEuOHpcIn0sQ006e2Q6XCJNMTA2MC4xLDUwMi45bDAuMi00LjNsLTAuNS00LjJsLTIuMi00LjFsLTEuNiwwLjRsLTAuMiwybDIuMywyLjZsLTAuNiwxLjFsLTAuMywyLjFsLTQuNiw1bC0xLjUsNGwtMC43LDMuMyBsLTEuMiwxLjRsLTEuMSw0LjVsLTMsMi42bC0wLjgsMy4ybC0xLjIsMi42bC0wLjUsMi42bC0zLjksMi4ybC0zLjItMi42bC0yLjEsMC4xbC0zLjMsMy43bC0xLjYsMC4xbC0yLjcsNi4xbC0xLjQsNC41djEuOGwxLjQsMC45IGwxLjEsMi44bDIuNiwxLjFsMi4yLDQuMmwtMC44LDVsOS4yLDAuMmwyLjYtMC40bDMuNCwwLjhsMy40LTAuOGwwLjcsMC4zbDcuMSwwLjNsNC41LDEuN2w0LjUsMS41bDAuNC0zLjVsLTAuNi0xLjhsLTAuMy0yLjkgbC0yLjYtMi4xbC0yLjEtMy4ybC0wLjUtMi4zbC0yLjYtMy4zbDAuNC0xLjlsLTAuNi0yLjdsMC40LTVsMS40LTEuMWwyLjctNi41bDAuOS0xLjdsLTEuOC00LjRsLTAuOC0yLjZsLTIuNS0xLjFsLTMuMy0zLjdsMS4yLTMgbDIuNSwwLjZsMS42LTAuNGwzLjEsMC4xTDEwNjAuMSw1MDIuOUwxMDYwLjEsNTAyLjl6XCJ9LENBOntkOlwiTTY1OSwyNzYuN2wtMC43LTNsLTIuNSwxLjlsMC41LDIuMWw1LjYsMi42bDEuOS0wLjRsMy4zLTIuNWwtNC43LDAuMUw2NTksMjc2LjdMNjU5LDI3Ni43eiBNNjczLjQsMjYwLjhsMC4yLTEuMSBsLTQuMS0yLjZsLTUuOS0xLjZsLTEuOSwwLjZsMy41LDIuOWw1LjcsMS45TDY3My40LDI2MC44TDY3My40LDI2MC44eiBNMzY4LjEsMjY0LjVsMC4yLTMuNGwtMy4yLTIuNmwtMC40LTIuOWwtMC4xLTIuMWwtNC4xLTAuNyBsLTIuNC0wLjlsLTQuMS0xLjRsLTEuNCwxLjVsLTAuNiwzLjNsNC4zLDEuMWwtMC40LDEuOGwyLjksMi4ydjIuMmw2LjMsMi44TDM2OC4xLDI2NC41TDM2OC4xLDI2NC41eiBNNzA0LjIsMjUxbDMuOS0zLjhsMS40LTEuNyBsLTIuMS0wLjNsLTQuOSwyLjJsLTQuMiwzLjVsLTguMSw5LjhsLTUuMywzLjdsMS42LDEuN2wtMy44LDIuMmwwLjIsMS45bDkuNiwwLjFsNS40LTAuM2w0LjQsMS41bC00LjQsMi45bDIuOSwwLjJsNy4zLTUuNGwxLjIsMC44IGwtMi41LDUuMWwzLDEuMmwyLjMtMC4ybDMuNS01LjVsLTAuNS0zLjlsMC4zLTMuM2wtMy43LDEuMWwyLjgtNC42bC00LjMtMS45bC0yLjcsMS41bC0zLjktMS43bDIuNC0yLjFsLTIuOS0xLjNsLTMuOCwyTDcwNC4yLDI1MSBMNzA0LjIsMjUxeiBNMzQ3LjQsMjI5LjhsLTEuOSwybC0xLjQsMi42bDAuOSwxLjlsLTAuNiwyLjhsMC43LDIuOGgxLjlsLTAuMi00LjlsNy4xLTYuOWwtNC45LDAuNUwzNDcuNCwyMjkuOEwzNDcuNCwyMjkuOHogTTYyOC4zLDE4Mi44bC0wLjQtMS4ybC0xLjctMC4xbC0yLjgsMS43bC0wLjQsMC40bDAuMSwxLjdsMS43LDAuNUw2MjguMywxODIuOEw2MjguMywxODIuOHogTTYxOC43LDE3OS42bDAuOC0xLjFsLTYtMC4xbC00LjksMi43IHYxLjVsMywwLjJMNjE4LjcsMTc5LjZMNjE4LjcsMTc5LjZ6IE02MTUuNiwxNjNsLTIuNy0wLjVsLTUsNS4ybC0zLjYsNC40bC01LjcsMi44bDYuMy0wLjZsLTAuOCwzLjRsOC4yLTNsNi4yLTNsMC44LDIuNmw1LjksMS4zIGw0LjktMS44bC0xLjktMS44bC0zLjQsMC40bDEuMy0yLjdsLTMuNy0xLjdsLTMuNC0xLjlsLTEuNS0xLjVsLTIuOCwwLjlMNjE1LjYsMTYzTDYxNS42LDE2M3ogTTY2MC4yLDE1NC44bDMuNy0xLjdsMS0wLjdsMS40LTIuMyBsLTIuMy0xLjVsLTQuMiwwLjdsLTMuOCwzLjFsLTAuNywyLjZMNjYwLjIsMTU0LjhMNjYwLjIsMTU0Ljh6IE01ODYuNCwxNDQuMWwtMC44LTJsLTAuMy0xbC0xLjYtMWwtMy0xLjVsLTQuOSwyLjNsLTUsMS43bDMuNSwyLjQgbDMuOC0wLjZsNC4xLDEuNkw1ODYuNCwxNDQuMXogTTYwOC44LDE0MmwtNi42LTFsNS43LTIuNmwtMC40LTZsLTEuOS0yLjNsLTQuNS0wLjhsLTguMSwzLjhsLTUuNSw1LjhsMi45LDIuMWwxLjYsMy4zbC02LjMsNS41IGwtMy4yLTAuMmwtNi4yLDQuNGw0LjItNS4ybC00LjgtMS44bC00LjUsMC45bC0yLjQsMy40bC01LjktMC4xbC03LjIsMC44bC01LjEtMi40bC01LDAuNGwtMS41LTIuOWwtMi4xLTEuM2wtMy44LDAuNWwtNS4yLDAuMyBsLTQuNCwxLjhsMiwyLjNsLTcsMi44bC0xLjQtMy4zbC00LjQsMWwtMTEuOCwwLjZsLTYuNC0xLjJsOC41LTIuNmwtMi44LTIuOGwtNC40LDAuNGwtNC43LTFsLTcuNS0xLjlsLTMuOC0yLjNsLTQuNS0wLjNsLTMuMywxLjYgbC01LjksMC45bDMuOS00LjFsLTkuNCwzLjZsLTEuNC00LjdsLTIuMS0wLjZsLTMuOCwyLjVsLTQuNSwxLjJsLTAuMi0yLjJsLTguMiwxLjRsLTguOCwyLjNsLTUuMi0wLjZsLTcsMS42bC02LjIsMi4zbC0zLjctMC41IGwtMy4zLTIuNmwtNS45LTEuM2wwLDBsLTI0LjMsMjAuMmwtMzUuNCwzMi40bDQuMiwwLjFsMi43LDEuNmwwLjYsMi42bDAuMiwzLjlsNy42LTMuM2w2LjQtMS45bC0wLjUsM2wwLjcsMi40bDEuNywyLjdsLTEuMSw0LjIgbC0xLjUsNi44bDQuNiwzLjhsLTMuMSwzLjdsLTUuMSwyLjlsMCwwbC0yLjUsMy4xbDIuMSw0LjRsLTMuMSw0LjlsNC4xLDIuNmwtMy42LDMuN2wtMS4zLDUuNWw2LjksMi41bDEuNiwyLjdsNS40LDYuMWgwLjdoMTMuOSBoMTQuNmg0LjhoMTVoMTQuNWgxNC43aDE0LjhoMTYuN2gxNi44aDEwLjFsMS4zLTIuNGgxLjZsLTAuOCwzLjRsMSwxbDMuMiwwLjRsNC42LDFsMy44LDEuOWw0LjQtMC44bDUuMywxLjZsMCwwbDMuMi0yLjRsMy4yLTEgbDEuOC0xLjVsMS41LTAuOGw0LDEuMmwzLjMsMC4ybDAuOCwwLjhsMC4xLDMuNWw1LjIsMWwtMS43LDEuN2wxLjIsMS45bC0xLjksMi4zbDEuOCwwLjhsLTEuOSwyLjFsMCwwbDEuMiwwLjJsMS4zLTAuOWwwLjUsMS40IGwzLjQsMC43bDMuOCwwLjFsMy44LDAuNmw0LDEuMmwwLjgsMmwxLjQsNC43bC0yLjQsMmwtMy44LTAuOGwtMS0zLjhsLTAuOSwzLjlsLTMuOCwzLjRsLTAuOCwyLjlsLTEuMSwxLjdsLTQuMSwybDAsMGwtMy43LDMuNCBsLTIsMi4ybDIuNywwLjRsNC41LTJsMi45LTEuN2wxLjYtMC4zbDIuNiwwLjZsMS43LTAuOWwyLjgtMC44bDQuNy0wLjhsMCwwbDAsMGwwLjMtMS44bC0wLjMsMC4xbC0xLjcsMC4zbC0xLjgtMC42bDIuMy0yLjEgbDEuOS0wLjdsMy45LTAuOWw0LjYtMC45bDEuOCwxLjJsMS45LTEuNGwxLjktMC44bDAuOSwwLjRsMC4xLDAuMWw2LjctNC4ybDIuNy0xLjJoNy43aDkuM2wxLTEuNmwxLjctMC4zbDIuNS0wLjlsMi43LTIuOGwzLjItNC45IGw1LjUtNC43bDEuMSwxLjdsMy43LTEuMWwxLjUsMS44bC0yLjgsOC41bDIuMSwzLjVsNS45LTAuOGw4LjEtMC4ybC0xMC40LDUuMWwtMS41LDUuMmwzLjcsMC41bDcuMS00LjVsNS44LTIuNGwxMi4yLTMuN2w3LjUtNC4xIGwtMi42LTIuMmwxLTQuNWwtNy4xLDdsLTguNiwwLjhsLTUuNS0zLjFsLTAuMS00LjZsMC42LTYuOGw2LjEtNC4xbC0zLjMtMy4xbC03LjYsMC42bC0xMi4xLDUuMmwtMTAuOSw4LjJsLTQuNiwxbDcuOC01LjdsMTAuMS04LjMgbDcuMi0yLjdsNS43LTQuNGw1LjItMC41bDcuMywwLjFsMTAsMS4zbDguNi0xbDcuOC01LjFsOC43LTIuMmw0LjItMi4xbDQuMi0yLjNsMi02LjhsLTEuMS0yLjNsLTMuNC0wLjh2LTUuMWwtMi4zLTEuOWwtNi45LTEuNiBsLTIuOC0zLjRsLTQuOC0zLjRsMy40LTMuN2wtMi03LjFsLTIuNi03LjVsLTEtNS4ybC00LjMsMi43bC03LjQsNi41bC04LjEsMy4ybC0xLjYtMy40bC0zLjctMWwyLjItNy4zbDIuNi00LjlsLTcuNy0wLjVsLTAuMS0yLjIgbC0zLjYtMy4zbC0zLTJsLTQuNSwxLjVsLTQuMi0wLjVsLTYuNi0xLjZsLTMuOSwxLjNsLTMuOCw5bC0xLDUuM2wtOC44LDYuMWwzLjEsNC41bDAuNSw1bC0xLjcsNGwtNC43LDQuMUw2MTAsMjI0bC05LDIuOGwxLjcsMy4yIGwtMi4yLDkuNmwtNS42LDYuM2wtNC42LDEuOWwtNC40LTUuOGwtMC4xLTYuOGwxLjctNmwzLjYtNS4ybC00LjgtMC42bC03LjUtMC40bC0zLjYtMi41bC00LjgtMS42bC0xLjctMi45bC0zLjMtMi4ybC03LTIuNiBsLTcuMSwxLjJsMC43LTQuNWwxLjUtNS41bC02LTFsNC45LTYuOGw0LjktNC42bDkuNC02LjVsOC42LTQuNmw1LjYtMC43bDIuOS0zLjdsNS4xLTIuNGw2LjQtMC40bDcuNy0zLjhsMi45LTIuNGw3LjQtNC43bDMuMi0yLjggbDMuMiwxLjdsNi41LTAuOUw2MzcsMTU1bDIuMy0yLjdsLTAuOC0yLjlsNS0yLjlsMS43LTIuN2wtMy41LTIuNmwtNS40LTAuOGwtNS41LTAuNGwtNC42LDUuOWwtNi41LDQuNmwtNy4yLDRsLTEuMy0zLjdsNC4yLTQgbC0yLjItMy41bC04LjcsNC4yTDYwOC44LDE0Mkw2MDguOCwxNDJ6IE01MzMuMywxMjMuMWwtMi44LTFsLTE0LjEsMy4ybC01LjEsMmwtNy44LDMuOWw1LjQsMS40bDYuMi0wLjFsLTExLjUsMi4xdjEuOWw1LjYsMC4xIGw5LTAuNGw2LjUsMS4ybC02LjIsMWwtNS41LTAuM2wtNy4xLDAuOWwtMy4zLDAuNmwwLjYsNC4ybDQuMi0wLjZsNC4xLDEuNWwtMC4zLDIuNWw3LjgtMC41bDExLjItMC44bDkuNC0xLjhsNS0wLjRsNS43LDEuNSBsNi43LDAuOGwzLjEtMS45bC0wLjctMi4xbDctMC40bDIuNi0yLjRsLTUtMi41bC00LjItMi42bDIuNC0zLjZsMi43LTUuMWwtMi4yLTJsLTMtMC45bC00LjIsMC44bC0yLjgsNS4zbC00LjMsMi4xbDIuMi01LjEgbC0xLjctMS43bC03LjMsMi43TDUzOSwxMjRsLTEwLjQsMS41TDUzMy4zLDEyMy4xTDUzMy4zLDEyMy4xeiBNNTcyLjQsMTIxLjZsLTEuNy0xLjFsLTUuNCwwLjJsLTIuMSwwLjdsMi4yLDMuNiBDNTY1LjQsMTI1LDU3Mi40LDEyMS42LDU3Mi40LDEyMS42eiBNNjgwLjEsMTIzLjJsLTQuNC0yLjhsLTguNC0wLjVsLTIuMSwwLjNsLTEuNywxLjhsMiwyLjhsMC45LDAuM2w0LjgtMC43bDQuMSwwLjFsNC4xLDAuMSBMNjgwLjEsMTIzLjJMNjgwLjEsMTIzLjJ6IE02NDAuNywxMjIuOWw1LjctMy4ybC0xMS4yLDEuM2wtNS44LDIuMWwtNy4xLDQuNmwtMy4zLDUuMmw1LjYsMC4xbC02LjEsMi4zbDEuOCwxLjlsNS45LDAuOGw3LjMsMS41IGwxMy44LDEuMmw3LjktMC42bDMuMi0xLjZsMiwxLjhsMy4zLDAuM2wyLDMuM2wtMy41LDEuNGw3LjEsMS44bDQuNiwyLjZsMC41LDEuOUw2NzQsMTU0bC04LjYsNS40bC0zLjIsMi43bDAuMiwybC05LjIsMC43bC04LDAuMSBsLTUuNCw0LjJsMi40LDEuOWwxMy0wLjlsMC45LTEuNmw0LjcsMi43bDQuNywyLjlsLTIuNCwxLjZsMy44LDIuOGw3LjYsMy4zbDEwLjcsMi4zbDAuMy0ybC0yLjgtMy41bC0zLjUtNC45bDguNSw0LjZsNC43LDEuNSBsMy42LTQuMXYtNS42bC0xLTEuNWwtNC40LTIuNWwtMi43LTMuM2wyLjMtMy4ybDUuOC0wLjdsMy44LDUuNGw0LDIuNGwxMC43LTYuNWwzLjMtMy45bC02LjQtMC4zbC0zLjItNS4xbC01LjktMS4ybC03LjctMy41bDktMi41IGwtMC44LTVsLTIuMi0yLjFsLTguMy0yLjFsLTEuOS0zLjNsLTguMiwxLjJsMS4xLTIuM2wtMy42LTIuNWwtNi44LTIuNmwtNS4yLDIuMWwtOSwxLjVsMy4zLTMuNGwtMi4zLTUuM2wtMTEuNiwyLjFsLTcuMSw0LjEgTDY0MC43LDEyMi45TDY0MC43LDEyMi45eiBNNTkwLjcsMTE5LjVsLTcuMSwyLjRsMC45LDMuNGwtNy40LTAuN2wtMS43LDEuN2w1LjgsMy45bDAuOSwybDMuNCwwLjVsOC40LTJsNS4xLTQuN2wtMy44LTIuMmw2LTIuNCBsMC41LTEuNWwtNy41LDAuNkw1OTAuNywxMTkuNUw1OTAuNywxMTkuNXogTTYxMywxMjQuOWw1LjYtMWwxMC00LjVsLTYuMS0xLjJsLTcuOC0wLjJsLTUuMiwxLjRsLTQuMiwyLjFsLTIuNSwyLjZsLTEuOCw0LjUgbDQuMywwLjJMNjEzLDEyNC45eiBNNDk4LjMsMTMyLjFsMi42LTIuM2w5LjEtMy42bDEzLjgtMy42bDYuNC0xLjNsLTEuNi0yLjFsLTEuOS0xLjVsLTkuNC0wLjJsLTQuMS0xLjFsLTE0LDAuOGwtMC4zLDMuMWwtNy42LDMuMyBsLTcuNCwzLjhsLTQuMywyLjJsNS45LDIuN2wtMC42LDIuM0w0OTguMywxMzIuMUw0OTguMywxMzIuMXogTTYyMi40LDExMy44bDAuMy0xLjZsLTEuNC0xLjdsLTYuOSwxLjNMNjEwLDExNGwzLjIsMS4zbDUuMSwwLjQgTDYyMi40LDExMy44TDYyMi40LDExMy44eiBNNjEzLjcsMTA1LjJsLTEuMSwwLjdsLTQuOC0wLjNsLTcuNiwxLjZsLTMuOC0wLjFsLTQuMywzLjhsNi42LTAuNGwtMy40LDIuOWwzLjIsMC44bDYuOC0wLjVsNS44LTMuNyBsMi44LTIuNUw2MTMuNywxMDUuMnogTTU3NC42LDEwNy43bDEuOC0yLjNsLTMuMS0wLjVsLTUuNywxLjdsLTAuNyw0LjdsLTYuMS0wLjRMNTU4LDEwOGwtOC4yLTEuNmwtNS40LDEuNGwtMTEuNiw0LjhsNC4xLDAuOCBsMTcuOC0wLjVsLTEwLjYsMi4ybC0xLjUsMS42bDUuOS0wLjFsMTIuMi0yLjJsMTMuOC0wLjhsNS4xLTIuM2wyLjMtMi40bC0zLjctMC4ybC00LjMsMC44QzU3My45LDEwOS41LDU3NC42LDEwNy43LDU3NC42LDEwNy43eiBNNjI5LjgsMTAzLjRsLTcuMS0wLjNsLTMuOCwybDIuNiwxLjVsNywwLjZsMS40LDIuMWwtMi4yLDIuNGwtMS41LDIuOGw4LjUsMS42bDUuNSwwLjZsOC0wLjFsMTEuNi0wLjhsNC4zLDAuNmw2LjctMWwzLjUtMS40bDEtMiBsLTIuMy0xLjlsLTUuOC0wLjNsLTgsMC40bC03LDEuMWwtNS4xLTAuNGwtNC44LTAuM2wtMS4yLTEuMWwtMy4xLTEuMWwyLjgtMS45bC0xLjQtMS42bC03LjMsMC4xTDYyOS44LDEwMy40TDYyOS44LDEwMy40eiBNNTU0LjgsMTAwLjhsLTYsMC43bC01LjUtMC4xbC0xMi4xLDMuMWwtMTEuNiwzLjdsMCwwbDMuNiwxbDctMC43bDkuOC0yLjFsMy44LTAuM2w1LjItMS42TDU1NC44LDEwMC44eiBNNjM1LjMsMTAxLjRsMS0wLjUgbC0xLjUtMC45bC03LjItMC4xbC0wLjYsMS4zbDYuNCwwLjNMNjM1LjMsMTAxLjRMNjM1LjMsMTAxLjR6IE01NzYuOSwxMDAuNmwzLjItMS40bC00LjEtMC44bC01LjksMC41bC01LjEsMS41bDMuMywxLjUgQzU2OC4zLDEwMS45LDU3Ni45LDEwMC42LDU3Ni45LDEwMC42eiBNNTg0LjcsOTYuNGwtMy4zLTAuOWwtMS42LTAuMmwtNS43LDEuM2wtMSwwLjdoNkw1ODQuNyw5Ni40eiBNNjMxLjEsOTguOWwzLTEuN2wtMi4zLTEuNiBsLTEuNy0wLjNsLTQuNC0wLjFsLTIuMSwxLjhsLTAuNywxLjhsMS42LDEuMUw2MzEuMSw5OC45TDYzMS4xLDk4Ljl6IE02MTcuNCw5Ny43bDAuMS0yLjJsLTcuNC0xLjdsLTYuMS0wLjZsLTIuMSwxLjdsMi44LDEuMSBsLTUuMywxLjRsNy43LDAuMmw0LDEuNWw1LjIsMC41TDYxNy40LDk3Ljd6IE02NzEuMSw5MS42bDAuNi0yLjhMNjY3LDg4bC00LjctMC45bC0xLjYtMi4ybC04LjIsMC4ybDAuMywwLjlsLTMuOSwwLjNsLTQuMSwxLjMgbC00LjksMS45bC0wLjMsMS45bDIsMS41aDYuNWwtNC4zLDEuMmwtMi4xLDEuNmwxLjYsMS45bDYuNywwLjZsNi44LTAuNGwxMC41LTMuNGw2LjQtMS4zTDY3MS4xLDkxLjZ6IE03NDkuNiw3Ny44bC03LTAuMmwtNi45LTAuMyBsLTEwLjIsMC42bC0xLjQtMC40bC0xMC4zLDAuMmwtNi40LDAuNGwtNS4xLDAuNmwtNSwybC0yLjMtMWwtMy45LTAuMmwtNi43LDEuNGwtNy40LDAuNmwtNC4xLDAuMWwtNiwwLjhsLTEuMSwxLjNsMi41LDEuMmwwLjgsMS42IGw0LjQsMS41bDEyLjQtMC4zbDcuMiwwLjVsLTcuMiwxLjVsLTIuMi0wLjRsLTkuMy0wLjJsLTEuMSwyLjJsMywxLjdsLTIuOCwxLjZsLTcuNSwxLjFsLTQuOSwxLjdsNC44LDAuOWwxLjcsM2wtNy41LTJsLTIuNSwwLjMgbC0yLDMuNGwtOCwxLjFsLTIsMi4zbDYuNywwLjNsNC45LDAuNmwxMS43LTAuOGw4LjQsMS40bDEyLjYtM2wxLTEuMWwtNi40LDAuMmwwLjUtMS4xbDYuNS0xLjRsMy42LTEuOWw2LjgtMS4zbDUtMS42bC0wLjgtMi4yIGwzLjMtMC44bC00LjMtMC42bDExLjEtMC40bDMuMi0wLjlsNy45LTAuOGw5LjMtMy41bDYuOC0xLjFsMTAuMy0yLjVoLTcuNGwzLjktMC45bDktMC44bDkuNy0xLjZsMS4xLTEuMWwtNS4yLTFsLTYuNy0wLjQgTDc0OS42LDc3LjhMNzQ5LjYsNzcuOHpcIn0sQ1Y6e2Q6XCJNODQxLjQsNDc3LjZsMC4xLTAuNGwtMC4yLTAuNmwtMC4zLTAuMWwtMC42LDAuNGwtMC4xLDAuM2wwLjEsMC4zbDAuMywwLjNsMC4zLDAuMUw4NDEuNCw0NzcuNkw4NDEuNCw0NzcuNnogTTg0Ny43LDQ3NS45bDAuNC0wLjJWNDc1bC0wLjEtMC4zaC0wLjRsLTAuMiwwLjR2MC4xdjAuNEw4NDcuNyw0NzUuOUw4NDcuNyw0NzUuOUw4NDcuNyw0NzUuOXogTTg0Ni4zLDQ3Ni43bC0wLjUtMC45bC0wLjMtMC4xIGwtMC42LTAuN3YtMC4zbC0wLjMtMC4xdjAuMnYwLjRsLTAuMiwwLjV2MC41bDAuNCwwLjhsMC40LDAuMmwwLjcsMC4xTDg0Ni4zLDQ3Ni43TDg0Ni4zLDQ3Ni43eiBNODQ5LjQsNDY4Ljl2MC41bC0wLjMsMC43bDAuNSwwLjMgbDAuMywwLjFsMC42LTAuNGwwLjItMC41bC0wLjEtMC4zbC0wLjMtMC4zbC0wLjMtMC4xbC0wLjEsMC4xTDg0OS40LDQ2OC45TDg0OS40LDQ2OC45eiBNODQzLDQ2Ni40bC0xLTAuMWwtMC42LTAuMmgtMC4xdjAuMyBsMC40LDAuOGwwLjItMC41bDAuMi0wLjFsMC44LDAuMmwwLjQtMC4xbC0wLjEtMC4xTDg0Myw0NjYuNEw4NDMsNDY2LjR6IE04NDkuNyw0NjYuMmwtMC4xLTAuNVY0NjVoLTAuMmwtMC4zLDAuMmwwLjEsMC43bDAuMSwwLjEgbDAuMiwwLjVMODQ5LjcsNDY2LjJMODQ5LjcsNDY2LjJ6IE04MzguNiw0NjUuMlY0NjVsLTAuMy0wLjVsLTAuMywwLjFsLTAuNCwwLjJsLTAuMSwwLjNsMC40LDAuMmgwLjJMODM4LjYsNDY1LjJMODM4LjYsNDY1LjJ6IE04MzcuMSw0NjQuM2wwLjgtMC42bDAuMi0wLjNsLTAuMi0wLjVsLTAuNS0wLjFsLTEuMiwwLjZsLTAuMSwwLjJsMC4xLDAuM2wwLjEsMC41bDAuMiwwLjFMODM3LjEsNDY0LjNMODM3LjEsNDY0LjN6XCJ9LEtZOntkOlwiTTUyNyw0NDkuMWwtMC4xLTAuM2wtMC4xLDAuMXYwLjZoMC41aDAuMmwwLjMtMC4yaDAuNmwtMC4xLTAuMmwtMC44LTAuMWwtMC4xLDAuMWwtMC4yLDAuMUw1MjcsNDQ5LjFMNTI3LDQ0OS4xeiBNNTM1LDQ0Ni44TDUzNSw0NDYuOGwtMC4xLTAuMWgtMC4xbC0wLjMsMC4xaC0wLjFoLTAuMWwtMC4xLDAuMWwtMC4xLDAuMWgwLjJsMC40LTAuMkg1MzVMNTM1LDQ0Ni44TDUzNSw0NDYuOHogTTUzNS44LDQ0Ni43IGwwLjUtMC4ybDAsMGwtMC4xLTAuMWgtMC4xbC0wLjEsMC4xaC0wLjFsLTAuNSwwLjNoMC4yTDUzNS44LDQ0Ni43TDUzNS44LDQ0Ni43elwifSxDRjp7ZDpcIk0xMTEwLjUsNTE3LjNsLTAuNS0wLjNsLTItMS44bC0wLjMtMmwwLjgtMi42VjUwOGwtMy4zLTRsLTAuNy0yLjdsLTMuNSwxLjFsLTIuOCwyLjVsLTQsN2wtNS4yLDIuOWwtNS40LTAuNCBsLTEuNiwwLjZsMC42LDIuM2wtMi45LDIuMmwtMi4zLDIuNWwtNy4xLDIuNGwtMS40LTEuNGwtMC45LTAuMmwtMSwxLjdsLTQuNywwLjRsLTIuNyw2LjVsLTEuNCwxLjFsLTAuNCw1bDAuNiwyLjdsLTAuNCwxLjkgbDIuNiwzLjNsMC41LDIuM2wyLjEsMy4ybDIuNiwyLjFsMC4zLDIuOWwwLjYsMS44bDIuOS01LjlsMy4zLTMuNGwzLjgsMS4xbDMuNiwwLjRsMC41LTQuNWwyLjItMy4ybDMtMmw0LjYsMi4xbDMuNiwyLjRsNC4xLDAuNiBsNC4yLDEuMmwxLjYtMy44bDAuOC0wLjVsMi42LDAuNmw2LjItMy4xbDIuMiwxLjNsMS44LTAuMmwwLjktMS41bDItMC42bDQuMywwLjdsMy42LDAuMWwxLjgtMC42bC0wLjktMi4xbC00LjItMi41bC0xLjUtMy44IGwtMi40LTIuN2wtMy44LTMuNGwtMC4xLTJsLTMuMS0yLjZMMTExMC41LDUxNy4zTDExMTAuNSw1MTcuM3pcIn0sVEQ6e2Q6XCJNMTEwOC40LDQ0Ny42bC0yMi40LTEyLjJsLTIyLjMtMTIuMmwtNS40LDMuNWwxLjYsOS45bDIsMS42bDAuMiwyLjFsMi4zLDIuMmwtMS4xLDIuN2wtMS44LDEyLjlsLTAuMiw4LjNsLTYuOSw2IGwtMi4zLDguNGwyLjQsMi4zdjQuMWwzLjYsMC4ybC0wLjUsMi45bDIuMiw0LjFsMC41LDQuMmwtMC4yLDQuM2wzLjEsNS44bC0zLjEtMC4xbC0xLjYsMC40bC0yLjUtMC42bC0xLjIsM2wzLjMsMy43bDIuNSwxLjEgbDAuOCwyLjZsMS44LDQuNGwtMC45LDEuN2w0LjctMC40bDEtMS43bDAuOSwwLjJsMS40LDEuNGw3LjEtMi40bDIuMy0yLjVsMi45LTIuMmwtMC42LTIuM2wxLjYtMC42bDUuNCwwLjRsNS4yLTIuOWw0LTdsMi44LTIuNSBsMy41LTEuMXYtMS42bC0yLjEtMS44bC0wLjEtMy43bC0xLjItMi41bC0yLDAuNGwwLjUtMi40bDEuNC0yLjZsLTAuNy0yLjdsMS44LTEuOWwtMS4yLTEuNWwxLjQtMy45bDIuNC00LjdsNC44LDAuNEwxMTA4LjQsNDQ3LjYgTDExMDguNCw0NDcuNnpcIn0sQ0w6e2Q6XCJNNjQ4LjQsOTA1LjJsLTMuNy0wLjdsLTMuMywyLjVsMC4yLDQuMWwtMS4yLDIuOGwtNy4yLTIuMmwtOC42LTRsLTQuNS0xLjNsOS43LDYuOGw2LjMsMy4ybDcuNSwzLjRsNS4zLDAuOSBsNC4zLDEuOGwzLDAuNWwyLjMsMC4xbDMuMi0xLjhsMC41LTIuNGwtMi45LTAuMmgtNUw2NDguNCw5MDUuMkw2NDguNCw5MDUuMnogTTYwMS4xLDcwOC45bC0zLjctNy4xbDEuMS02LjJsLTMuMi0yLjdsLTEuMi00LjYgTDU5MSw2ODRsLTEuMiwzLjNsLTIuNywxLjZsMi4xLDlsMS41LDEwLjRsLTAuMSwxNC4ydjEzLjJsMC45LDEyLjNsLTEuOSw3LjhsMi4xLDcuOGwtMC41LDUuM2wzLjIsOS41bC0wLjEsOS41bC0xLjIsMTAuMiBsLTAuNiwxMC41bC0yLjEsMC4ybDIuNCw3LjNsMy4zLDYuM2wtMS4xLDQuM2wxLjksMTEuNmwxLjUsOC44bDMuNSwwLjlsLTEuMS03LjdsNCwxLjZsMS44LDEyLjdsLTYuNC0yLjFsMiwxMC4ybC0yLjcsNS41bDguMiwxLjggbC0zLjQsNC44bDAuMiw2bDUsMTAuNmw0LjIsNC4xbDAuMiwzLjZsMy4zLDMuOGw3LjUsMy41bDAsMGw3LjQsNC4ybDYuMiwybDItMC4xbC0xLjgtNS43bDMuNC0yLjJsMS43LTEuNWg0LjJsLTQuOC0wLjlsLTEyLTAuOCBsLTMuNS0zLjZsLTEuOC00LjZsLTMuMSwwLjRsLTIuNi0yLjJsLTMuMS02LjZsMi43LTIuN2wwLjEtMy45bC0xLjgtMy4ybDAuNy01LjNsLTEuMS04LjJsLTEuOC0zLjdsMS44LTEuMWwtMS4zLTIuM2wtMi44LTEuMyBsMC44LTIuNmwtMy4xLTIuM2wtMy42LTcuMWwxLjYtMS4ybC0zLjMtNy42bC0wLjctNi40bC0wLjMtNS43bDIuNS0yLjRsLTMuMy02LjNsLTEuNS01LjlsMi45LTQuM2wtMS40LTUuNGwxLjYtNi4ybC0xLjMtNS45IGwtMS42LTEuMmwtNC45LTEwLjlsMi4xLTYuNWwtMS43LTYuMmwwLjktNS44bDIuNi01LjlsMy4yLTRsLTItMi41bDAuOS0ybC0xLjYtMTAuNmw1LjYtMy4ybDEuMS02LjZsLTAuOS0xLjZsLTMuOCwwLjlMNjAxLjEsNzA4LjkgTDYwMS4xLDcwOC45elwifSxDTjp7ZDpcIk0xNTg3LjIsNDUzLjNsMC42LTMuNmwyLTIuOGwtMS42LTIuNWwtMy4yLTAuMWwtNS44LDEuOGwtMi4yLDIuOGwxLDUuNWw0LjksMkwxNTg3LjIsNDUzLjNMMTU4Ny4yLDQ1My4zeiBNMTYwMC40LDI1Ni44bC02LjEtNi4xbC00LjQtMy43bC0zLjgtMi43bC03LjctNi4xbC01LjktMi4zbC04LjUtMS44bC02LjIsMC4ybC01LjEsMS4xbC0xLjcsM2wzLjcsMS41bDIuNSwzLjNsLTEuMiwybDAuMSw2LjUgbDEuOSwyLjdsLTQuNCwzLjlsLTcuMy0yLjNsMC42LDQuNmwwLjMsNi4ybDIuNywyLjZsMi40LTAuOGw1LjQsMWwyLjUtMi4zbDUuMSwybDcuMiw0LjNsMC43LDIuMmwtNC4zLTAuN2wtNi44LDAuOGwtMi40LDEuOCBsLTEuNCw0LjFsLTYuMywyLjRsLTMuMSwzLjNsLTUuOS0xLjNsLTMuMi0wLjVsLTAuNCw0bDIuOSwyLjNsMS45LDIuMWwtMi41LDJsLTEuOSwzLjNsLTQuOSwyLjJsLTcuNSwwLjJsLTcuMiwyLjJsLTQuNCwzLjNsLTMuMi0yIGwtNi4yLDAuMWwtOS4zLTMuOGwtNS41LTAuOWwtNi40LDAuOGwtMTEuMi0xLjNsLTUuNSwwLjFsLTQuNy0zLjZsLTQuOS01LjdsLTMuNC0wLjdsLTcuOS0zLjhsLTcuMi0wLjlsLTYuNC0xbC0zLTIuN2wtMS4zLTcuMyBsLTUuOC01bC04LjEtMi4zbC01LjctMy4zbC0zLjMtNC40bC0xLjcsMC41bC0xLjgsNC4ybC0zLjgsMC42bDIuNSw2LjJsLTEuNiwyLjhsLTEwLjctMmwxLDExLjFsLTIsMS40bC05LDIuNGw4LjcsMTAuN2wtMi45LDEuNiBsMS43LDMuNWwtMC4yLDEuNGwtNi44LDMuNGwtMSwyLjRsLTYuNCwwLjhsLTAuNiw0bC01LjctMC45bC0zLjIsMS4ybC00LDNsMS4xLDEuNWwtMSwxLjVsMyw1LjlsMS42LTAuNmwzLjUsMS40bDAuNiwyLjVsMS44LDMuNyBsMS40LDEuOWw0LjcsM2wyLjksNWw5LjQsMi42bDcuNiw3LjVsMC44LDUuMmwzLDMuM2wwLjYsMy4zbC00LjEtMC45bDMuMiw3bDYuMiw0bDguNSw0LjRsMS45LTEuNWw0LjcsMmw2LjQsNC4xbDMuMiwwLjlsMi41LDMuMSBsNC41LDEuMmw1LDIuOGw2LjQsMS41bDYuNSwwLjZsMy0xLjRsMS41LDUuMWwyLjYtNC44bDIuNi0xLjZsNC4yLDEuNWwyLjksMC4xbDIuNywxLjhsNC4yLTAuOGwzLjktNC44bDUuMy00bDQuOSwxLjVsMy4yLTIuNiBsMy41LDMuOWwtMS4yLDIuN2w2LjEsMC45bDMtMC40bDIuNywzLjdsMi43LDEuNWwxLjMsNC45bDAuOCw1LjNsLTQuMSw1LjNsMC43LDcuNWw1LjYtMWwyLjMsNS44bDMuNywxLjNsLTAuOCw1LjJsNC41LDIuNGwyLjUsMS4yIGwzLjgtMS44bDAuNiwyLjZsMC43LDEuNWwyLjksMC4xbC0xLjktNy4ybDIuNy0xbDIuNy0xLjVoNC4zbDUuMy0wLjdsNC4xLTMuNGwzLDIuNGw1LjIsMS4xbC0wLjIsMy43bDMsMi42bDUuOSwxLjZsMi40LTFsNy43LDIgbC0wLjksMi41bDIuMiw0LjZsMy0wLjRsMC44LTYuN2w1LjYtMC45bDcuMi0zLjJsMi41LTMuMmwyLjMsMi4xbDIuOC0yLjlsNi4xLTAuN2w2LjYtNS4zbDYuMy01LjlsMy4zLTcuNmwyLjMtOC40bDIuMS02LjlsMi44LTAuNSBsLTAuMS01LjFsLTAuOC01LjFsLTMuOC0ybC0yLjUtMy40bDIuOC0xLjdsLTEuNi00LjdsLTUuNC00LjlsLTUuNC01LjhsLTQuNi02LjNsLTcuMS0zLjVsMC45LTQuNmwzLjgtMy4ybDEtMy41bDYuNy0xLjhsLTIuNC0zLjQgbC0zLjQtMC4ybC01LjgtMi41bC0zLjksNC42bC00LjktMS45bC0xLjUtMi45bC00LjctMWwtNC43LTQuNGwxLjItM2w1LTAuM2wxLjItNC4xbDMuNi00LjRsMy40LTIuMmw0LjQsMy4zbC0xLjksNC4ybDIuMywyLjUgbC0xLjQsM2w0LjgtMS44bDIuNC0yLjlsNi4zLTEuOWwyLjEtNGwzLjgtMy40bDEtNC40bDMuNiwybDQuNiwwLjJsLTIuNy0zLjNsNi4zLTIuNmwtMC4xLTMuNWw1LjUsMy42bDAsMGwtMS45LTMuMWwyLjUtMC4xIGwtMy44LTcuM2wtNC43LTUuM2wyLjktMi4ybDYuOCwxLjFsLTAuNi02bC0yLjgtNi44bDAuNC0yLjNsLTEuMy01LjZsLTYuOSwxLjhsLTIuNiwyLjVoLTcuNWwtNi01LjhsLTguOS00LjVMMTYwMC40LDI1Ni44IEwxNjAwLjQsMjU2Ljh6XCJ9LENPOntkOlwiTTU3OC4zLDQ5Ny4ybDEuMi0yLjFsLTEuMy0xLjdsLTItMC40bC0yLjksMy4xbC0yLjMsMS40bC00LjYsMy4ybC00LjMtMC41bC0wLjUsMS4zbC0zLjYsMC4xbC0zLjMsM2wtMS40LDUuNCBsLTAuMSwyLjFsLTIuNCwwLjdsLTQuNCw0LjRsLTIuOS0wLjJsLTAuNywwLjlsMS4xLDMuOGwtMS4xLDEuOWwtMS44LTAuNWwtMC45LDMuMWwyLjIsMy40bDAuNiw1LjRsLTEuMiwxLjZsMS4xLDUuOWwtMS4yLDMuNyBsMiwxLjVsLTIuMiwzLjNsLTIuNSw0bC0yLjgsMC40bC0xLjQsMi4zbDAuMiwzLjJsLTIuMSwwLjVsMC44LDJsNS42LDMuNmwxLTAuMWwxLjQsMi43bDQuNywwLjlsMS42LTFsMi44LDIuMWwyLjQsMS41bDEuNS0wLjYgbDMuNywzbDEuOCwzbDIuNywxLjdsMy40LDYuN2w0LjIsMC44bDMtMS43bDIuMSwxLjFsMy4zLTAuNmw0LjQsM2wtMy41LDYuNWwxLjcsMC4xbDIuOSwzLjRsMi4yLTE3LjRsMC4xLTIuOGwtMC45LTMuNmwtMi41LTIuNCB2LTQuNmwzLjItMWwxLjEsMC42bDAuMi0yLjRsLTMuMy0wLjd2LTMuOWwxMC45LDAuMWwxLjktMi4ybDEuNiwybDEsMy44bDEuMS0wLjhsLTEuNy02LjRsLTEuNC0yLjJsLTItMS40bDIuOS0zLjFsLTAuMi0xLjUgbC0xLjUtMS45bC0xLTQuMmwwLjUtNC42bDEuMy0yLjFsMS4yLTMuNGwtMi0xLjFsLTMuMiwwLjdsLTQtMC4zbC0yLjMsMC43bC0zLjgtNS41bC0zLjItMC44bC03LjIsMC42bC0xLjMtMi4ybC0xLjMtMC42bC0wLjItMS4zIGwwLjgtMi40bC0wLjQtMi41bC0xLjEtMS40bC0wLjYtMi45bC0yLjktMC41bDEuOC0zLjdsMC45LTQuNWwxLjgtMi40bDIuMi0xLjhsMS42LTMuMkw1NzguMyw0OTcuMkw1NzguMyw0OTcuMnpcIn0sS006e2Q6XCJNMTIyMS4xLDY1MC41bC0wLjQtMC40aC0wLjR2MC4ybDAuMSwwLjRsMS4xLDAuMkwxMjIxLjEsNjUwLjVMMTIyMS4xLDY1MC41eiBNMTIyNSw2NDlMMTIyNSw2NDlsLTAuMywwLjFsLTAuMSwwLjIgbC0wLjEsMC4zaC0wLjNoLTAuMmgtMC40bDAuOCwwLjVsMC41LDAuNWwwLjIsMC4ybDAuMS0wLjJsMC4xLTAuN0wxMjI1LDY0OUwxMjI1LDY0OXogTTEyMTkuNCw2NDcuOWwwLjItMC4zbC0wLjItMC43bC0wLjQtMC44IGwwLjEtMS40bC0wLjItMC4yaC0wLjNsLTAuMSwwLjFsLTAuMSwwLjNsLTAuMywybDAuNCwwLjZsMC4zLDAuMUwxMjE5LjQsNjQ3LjlMMTIxOS40LDY0Ny45TDEyMTkuNCw2NDcuOXpcIn0sQ0c6e2Q6XCJNMTA4MC4zLDU0OS45bC0zLjYtMC40bC0zLjgtMS4xbC0zLjMsMy40bC0yLjksNS45bC0wLjQsMy41bC00LjUtMS41bC00LjUtMS43bC03LjEtMC4zbC0wLjQsMi44bDEuNSwzLjNsNC4yLTAuNSBsMS40LDEuMmwtMi40LDcuNGwyLjcsMy44bDAuNiw0LjlsLTAuOCw0LjNsLTEuNywzbC00LjktMC4zbC0zLTNsLTAuNSwyLjhsLTMuOCwwLjhsLTEuOSwxLjZsMi4xLDQuMmwtNC4zLDMuNWw0LjYsNi43bDIuMi0yLjcgbDEuOC0xLjFsMiwyLjJsMS41LDAuNmwxLjktMi40bDMuMSwwLjFsMC40LDEuOGwyLDEuMWwzLjQtNGwzLjMtMy4xbDEuNC0ybC0wLjItNS4zbDIuNS02LjJsMi42LTMuMmwzLjctMy4xbDAuNi0ybDAuMi0yLjRsMC45LTIuMiBsLTAuMy0zLjZsMC43LTUuNmwxLjEtNGwxLjYtMy40TDEwODAuMyw1NDkuOUwxMDgwLjMsNTQ5Ljl6XCJ9LENSOntkOlwiTTUwOS4xLDUwMi42bC0xLjQsMS4zbC0xLjctMC40bC0wLjgtMS4zbC0xLjctMC41bC0xLjQsMC44bC0zLjUtMS43bC0wLjksMC44bC0xLjQsMS4ybDEuNSwwLjlsLTAuOSwybC0wLjEsMiBsMC43LDEuM2wxLjcsMC42bDEuMiwxLjhsMS4yLTEuNmwtMC4zLTEuOGwxLjQsMS4xbDAuMywxLjlsMS45LDAuOGwyLjEsMS4zbDEuNSwxLjVsMC4xLDEuNGwtMC43LDEuMWwxLjEsMS4zbDIuOSwxLjRsMC40LTEuMiBsMC41LTEuM2wtMC4xLTEuMmwwLjgtMC43bC0xLjEtMWwwLjEtMi41bDIuMi0wLjZsLTIuNC0yLjdsLTItMi42TDUwOS4xLDUwMi42TDUwOS4xLDUwMi42elwifSxIUjp7ZDpcIk0xMDY1LDI4MC40bC00LTIuNmwtMS42LTAuOGwtMy45LDEuN2wtMC4zLDIuNWwtMS43LDAuNmwwLjIsMS43bC0yLTAuMWwtMS44LTFsLTAuOCwxbC0zLjUtMC4ybC0wLjIsMC4xdjIuMmwxLjcsMiBsMS4zLTIuNmwzLjMsMWwwLjMsMmwyLjUsMi42bC0xLDAuNWw0LjYsNC41bDQuOCwxLjhsMy4xLDIuMmw1LDIuM2wwLDBsMC41LTFsLTQuNy0yLjRsLTIuMi0yLjVsLTItMS40bC0yLjUtMi4zbC0xLjMtMS45bC0yLjctMi45IGwwLjktMi41bDEuOSwxLjRsMS0xLjNsMi4zLTAuMWw0LjQsMWwzLjUtMC4xbDIuNCwxLjRsMCwwbDEuNy0yLjNsLTEuNy0xLjhsLTEuNS0yLjRsMCwwbC0xLjgsMC45TDEwNjUsMjgwLjRMMTA2NSwyODAuNHpcIn0sQ1U6e2Q6XCJNNTM5LDQyNy4zbC00LjktMi4xbC00LjMtMC4xbC00LjctMC41bC0xLjQsMC43bC00LjIsMC42bC0zLDEuM2wtMi43LDEuNGwtMS41LDIuM2wtMy4xLDJsMi4yLDAuNmwyLjktMC43bDAuOS0xLjYgbDIuMy0wLjFsNC40LTMuM2w1LjQsMC4zbC0yLjMsMS42bDEuOCwxLjNsNywxbDEuNSwxLjNsNC45LDEuN2wzLjItMC4ybDAuOCwzLjZsMS43LDEuOGwzLjUsMC40bDIuMSwxLjdsLTQuMSwzLjVsNy45LTAuNmwzLjgsMC41IGwzLjctMC4zbDMuOC0wLjhsMC44LTEuNWwtMy45LTIuNmwtNC0wLjNsMC42LTEuN2wtMy4xLTEuM2gtMS45bC0zLTIuOGwtNC4yLTRsLTEuOC0xLjVsLTUuMiwwLjhMNTM5LDQyNy4zTDUzOSw0MjcuM3pcIn0sQ1c6e2Q6XCJNNTk1LjksNDk0Ljl2LTAuNmwtMC45LTAuNHYwLjNsMC4xLDAuMmwwLjMsMC4xbDAuMSwwLjJsLTAuMSwwLjZsMC4yLDAuM0w1OTUuOSw0OTQuOUw1OTUuOSw0OTQuOXpcIn0sQ1k6e2Q6XCJNMTE0OS45LDM0OC40bC0wLjMtMC4xbC0wLjUsMC4ybC0wLjQsMC40bC0wLjQsMC4zbC0wLjUtMC4zbDAuMiwwLjlsMC42LDEuMWwwLjIsMC4zbDAuMywwLjJsMS4xLDAuM2gwLjNoMC42IGwwLjIsMC4xbDAuMiwwLjRoMC40di0wLjF2LTAuM2wwLjItMC4ybDAuMy0wLjJoMC4zbDAuNi0wLjFsMC42LTAuMmwwLjUtMC40bDAuOS0xaDAuM2gwLjNoMC42bDAuNi0wLjFsLTAuMi0wLjRsLTAuMS0wLjFsLTAuNC0wLjUgbC0wLjItMC40bDAuMS0wLjZsMi41LTEuOWwwLjUtMC41bC0wLjgsMC4ybC0wLjYsMC40bC0wLjQsMC4ybC0wLjcsMC40bC0yLjMsMC44bC0wLjgsMC4xaC0wLjhsLTEtMC4xbC0wLjktMC4ydjAuN2wtMC4yLDAuNiBsLTAuNiwwLjJMMTE0OS45LDM0OC40TDExNDkuOSwzNDguNHpcIn0sQ1o6e2Q6XCJNMTA0OS40LDI0OC41bC0yLjEsMC42bC0xLjQtMC43bC0xLjEsMS4ybC0zLjQsMS4ybC0xLjcsMS41bC0zLjQsMS4zbDEsMS45bDAuNywyLjZsMi42LDEuNWwyLjksMi42bDMuOCwybDIuNi0yLjUgbDEuNy0wLjVsNCwxLjlsMi4zLTAuM2wyLjMsMS4ybDAuNi0xLjRsMi4yLDAuMWwxLjYtMC42bDAuMS0wLjZsMC45LTAuM2wwLjItMS40bDEuMS0wLjNsMC42LTEuMWgxLjVsLTIuNi0zLjFsLTMuNi0wLjNsLTAuNy0yIGwtMy40LTAuNmwtMC42LDEuNWwtMi43LTEuMmwwLjEtMS43bC0zLjctMC42TDEwNDkuNCwyNDguNUwxMDQ5LjQsMjQ4LjV6XCJ9LENEOntkOlwiTTExMjQuOSw1MzkuNGwtNC4zLTAuN2wtMiwwLjZsLTAuOSwxLjVsLTEuOCwwLjJsLTIuMi0xLjNsLTYuMiwzLjFsLTIuNi0wLjZsLTAuOCwwLjVsLTEuNiwzLjhsLTQuMi0xLjJsLTQuMS0wLjYgbC0zLjYtMi40bC00LjYtMi4xbC0zLDJsLTIuMiwzLjJsLTAuNSw0LjVsLTAuMywzLjhsLTEuNiwzLjRsLTEuMSw0bC0wLjcsNS42bDAuMywzLjZsLTAuOSwyLjJsLTAuMiwyLjRsLTAuNiwybC0zLjcsMy4xbC0yLjYsMy4yIGwtMi41LDYuMmwwLjIsNS4zbC0xLjQsMmwtMy4zLDMuMWwtMy40LDRsLTItMS4xbC0wLjQtMS44bC0zLjEtMC4xbC0xLjksMi40bC0xLjUtMC42bC0yLDEuM2wtMC45LDEuN2wtMC4yLDIuN2wtMS41LDAuN2wwLjgsMiBsMi4zLTAuOWwxLjcsMC4xbDEuOS0wLjdsMTYuNiwwLjFsMS4zLDQuN2wxLjYsMy44bDEuMywyLjFsMi4xLDMuM2wzLjctMC41bDEuOS0wLjlsMywwLjlsMC45LTEuNmwxLjUtMy43bDMuNC0wLjNsMC4zLTEuMWgyLjkgbC0wLjUsMi4zaDYuOHY0bDEuMiwyLjRsLTAuOSwzLjhsMC4zLDRsMS45LDIuM2wtMC41LDcuNmwxLjQtMC42bDIuNCwwLjJsMy41LTFsMi42LDAuNGwxLjksMC4xbDAuMywybDIuNi0wLjFsMy41LDAuNmwxLjgsMi44IGw0LjUsMC45bDMuNC0ybDEuMiwzLjRsNC4zLDAuOGwyLDIuOGwyLjEsMy41aDQuM2wtMC4zLTYuOWwtMS41LDEuMmwtMy45LTIuNWwtMS40LTEuMWwwLjgtNi40bDEuMi03LjVsLTEuMi0yLjhsMS42LTQuMWwxLjYtMC43IGw3LjUtMS4xbDEsMC4zbDAuMi0xLjFsLTEuNS0xLjdsLTAuNy0zLjVsLTMuNC0zLjVsLTEuOC00LjVsMS0yLjdsLTEuNS0zLjZsMS4xLTEwLjJsMC4xLDAuMWwtMC4xLTEuMWwtMS40LTIuOWwwLjYtMy41bDAuOC0wLjQgbDAuMi0zLjhsMS42LTEuOGwwLjEtNC44bDEuMy0yLjRsMC4zLTUuMWwxLjItM2wyLjEtMy4zbDIuMi0xLjdsMS44LTIuM2wtMi4zLTAuOGwwLjMtNy41bDAsMGwtNS00LjJsLTEuNC0yLjdsLTMuMSwxLjNsLTIuNi0wLjQgbC0xLjUsMS4xbC0yLjUtMC44bC0zLjUtNS4ybC0xLjgsMC42TDExMjQuOSw1MzkuNEwxMTI0LjksNTM5LjR6XCJ9LERLOntkOlwiTTEwMzUuOSwyMjEuMmwtMS43LTNsLTYuNywybDAuOSwyLjVsNS4xLDMuNEwxMDM1LjksMjIxLjJMMTAzNS45LDIyMS4yeiBNMTAyNy4zLDIxNi4xbC0yLjYtMC45bC0wLjctMS42bDEuMy0yIGwtMC4xLTNsLTMuNiwxLjZsLTEuNSwxLjdsLTQsMC40bC0xLjIsMS43bC0wLjcsMS42bDAuNCw2LjFsMi4xLDMuNGwzLjYsMC44bDMtMC45bC0xLjUtM2wzLjEtNC4zbDEuNCwwLjdMMTAyNy4zLDIxNi4xIEwxMDI3LjMsMjE2LjF6XCJ9LERKOntkOlwiTTEyMTcuOCw0OTkuMmwtMi41LTEuN2wzLjEtMS41bDAuMS0yLjdsLTEuNC0xLjlsLTEuNiwxLjVsLTIuNC0wLjVsLTEuOSwyLjhsLTEuOCwzbDAuNSwxLjdsMC4yLDJsMy4xLDAuMWwxLjMtMC41IGwxLjMsMS4xTDEyMTcuOCw0OTkuMkwxMjE3LjgsNDk5LjJ6XCJ9LERNOntkOlwiTTYzNS44LDQ3NS4xbDAuMy0wLjdsLTAuMS0xbC0wLjItMC40bC0wLjgtMC4zdjAuMmwtMC4xLDAuNWwwLjMsMC44bDAuMSwxLjFMNjM1LjgsNDc1LjF6XCJ9LERPOntkOlwiTTU3OS42LDQ1Ny40djEuOGwxLjQsMWwyLjYtNC40bDItMC45bDAuNiwxLjZsMi4yLTAuNGwxLjEtMS4ybDEuOCwwLjNsMi42LTAuMmwyLjUsMS4zbDIuMy0yLjZsLTIuNS0yLjNsLTIuNC0wLjIgbDAuMy0xLjlsLTMsMC4xbC0wLjgtMi4ybC0xLjQsMC4xbC0zLjEtMS42bC00LjQtMC4xbC0wLjgsMS4xbDAuMiwzLjVsLTAuNywyLjRsLTEuNSwxLjFsMS4yLDEuOUw1NzkuNiw0NTcuNEw1NzkuNiw0NTcuNHpcIn0sRUM6e2Q6XCJNNTUzLjEsNTczLjFsLTIuNC0xLjVsLTIuOC0yLjFsLTEuNiwxbC00LjctMC45bC0xLjQtMi43bC0xLDAuMWwtNS42LTMuNmwtMy45LDIuNWwtMy4xLDEuNGwwLjQsMi42bC0yLjIsNC4xIGwtMSwzLjlsLTEuOSwxbDEsNS44bC0xLjEsMS44bDMuNCwyLjdsMi4xLTIuOWwxLjMsMi44bC0yLjksNC43bDAuNywyLjdsLTEuNSwxLjVsMC4yLDIuM2wyLjMtMC41bDIuMywwLjdsMi41LDMuMmwzLjEtMi42bDAuOS00LjMgbDMuMy01LjVsNi43LTIuNWw2LTYuN2wxLjctNC4xTDU1My4xLDU3My4xelwifSxFRzp7ZDpcIk0xMTI5LjcsMzc0LjhsLTUuNS0xLjlsLTUuMy0xLjdsLTcuMSwwLjJsLTEuOCwzbDEuMSwyLjdsLTEuMiwzLjlsMiw1LjFsMS4zLDIyLjdsMSwyMy40aDIyLjFoMjEuNGgyMS44bC0xLTEuMyBsLTYuOC01LjdsLTAuNC00LjJsMS0xLjFsLTUuMy03bC0yLTMuNmwtMi4zLTMuNWwtNC44LTkuOWwtMy45LTYuNGwtMi44LTYuN2wwLjUtMC42bDQuNiw5LjFsMi43LDIuOWwyLDJsMS4yLTEuMWwxLjItMy4zbDAuNy00LjggbDEuMy0yLjVsLTAuNy0xLjdsLTMuOS05LjJsMCwwbC0yLjUsMS42bC00LjItMC40bC00LjQtMS41bC0xLjEsMi4xbC0xLjctMy4ybC0zLjktMC44bC00LjcsMC42bC0yLjEsMS44bC0zLjksMkwxMTI5LjcsMzc0LjggTDExMjkuNywzNzQuOHpcIn0sU1Y6e2Q6XCJNNDg3LjIsNDg3bDAuNi0yLjVsLTAuNy0wLjdsLTEuMS0wLjVsLTIuNSwwLjhsLTAuMS0wLjlsLTEuNi0xbC0xLjEtMS4zbC0xLjUtMC41bC0xLjQsMC40bDAuMiwwLjdsLTEuMSwwLjcgbC0yLjEsMS42bC0wLjIsMWwxLjQsMS4zbDMuMSwwLjRsMi4yLDEuM2wxLjksMC42bDMuMywwLjFMNDg3LjIsNDg3TDQ4Ny4yLDQ4N3pcIn0sR1E6e2Q6XCJNIDEwNDAuMSA1NTcuOCBsIC05LjIgLTAuMiBsIC0xLjkgNy4yIGwgMSAwLjkgbCAxLjkgLTAuMyBoIDguMiBWIDU1Ny44IEwgMTA0MC4xIDU1Ny44IHogTSAxMDIzIDU1MSBMIDEwMjMuNiA1NTAuMiBMIDEwMjMuNiA1NDkuOCBMIDEwMjQuNiA1NDguMjUgTCAxMDI0LjQ1IDU0Ny41IEwgMTAyMy4wNCA1NDcuNCBMIDEwMjIuNSA1NDguMiBMIDEwMjIuNTUgNTQ4LjU1IEwgMTAyMi4yNSA1NDkuMzYgTCAxMDIxLjU1IDU0OS41IEwgMTAyMS4yNSA1NTAuMTUgTCAxMDIxLjUgNTUwLjcgTCAxMDIzIDU1MSBNIDEwMDMuOCA1ODAuMiBMIDEwMDMuOSA1ODAuNDQgTCAxMDAzLjgyIDU4MC42MiBMIDEwMDMuNjUgNTgwLjU1IEwgMTAwMy42MyA1ODAuMjMyIEwgMTAwMy44IDU4MC4yXCJ9LEVSOntkOlwiTTExOTguMSw0NzRsLTMuMi0zLjFsLTEuOC01LjlsLTMuNy03LjNsLTIuNiwzLjZsLTQsMWwtMS42LDJsLTAuNCw0LjJsLTEuOSw5LjRsMC43LDIuNWw2LjUsMS4zbDEuNS00LjdsMy41LDIuOSBsMy4yLTEuNWwxLjQsMS4zbDMuOSwwLjFsNC45LDIuNWwxLjYsMi4ybDIuNSwyLjFsMi41LDMuN2wyLDIuMWwyLjQsMC41bDEuNi0xLjVsLTIuOC0xLjlsLTEuOS0yLjJsLTMuMi0zLjdsLTMuMi0zLjZMMTE5OC4xLDQ3NHpcIn0sRUU6e2Q6XCJNMTA5My4yLDE5Ny41bC01LjUsMC45bC01LjQsMS42bDAuOSwzLjRsMy4zLDIuMWwxLjUtMC44bDAuMSwzLjVsMy43LTFsMi4xLDAuN2w0LjQsMi4yaDMuOGwxLjYtMS45bC0yLjUtNS41IGwyLjYtMy40bC0wLjktMWwwLDBsLTQuNiwwLjJMMTA5My4yLDE5Ny41elwifSxFVDp7ZDpcIk0xMTg3LjYsNDc3bC0xLjUsNC43bC02LjUtMS4zbC0wLjcsNS41bC0yLjEsNi4ybC0zLjIsMy4ybC0yLjMsNC44bC0wLjUsMi42bC0yLjYsMS44bC0xLjQsNi43djAuN2wwLjIsNWwtMC44LDIgbC0zLDAuMWwtMS44LDMuNmwzLjQsMC41bDIuOSwzLjFsMSwyLjVsMi42LDEuNWwzLjUsNi45bDIuOSwxLjF2My42bDIsMi4xaDMuOWw3LjIsNS40aDEuOGwxLjMtMC4xbDEuMiwwLjdsMy44LDAuNWwxLjYtMi43IGw1LjEtMi42bDIuMywyLjFoMy44bDEuNS0ybDMuNi0wLjFsNC45LTQuNWw3LjQtMC4zbDE1LjQtMTkuMWwtNC44LDAuMWwtMTguNS03LjZsLTIuMi0yLjJsLTIuMS0zLjFsLTIuMi0zLjVsMS4xLTIuM2wtMS4zLTEuMSBsLTEuMywwLjVsLTMuMS0wLjFsLTAuMi0ybC0wLjUtMS43bDEuOC0zbDEuOS0yLjhsLTItMi4xbC0yLjUtMy43bC0yLjUtMi4xbC0xLjYtMi4ybC00LjktMi41bC0zLjktMC4xbC0xLjQtMS4zbC0zLjIsMS41IEwxMTg3LjYsNDc3TDExODcuNiw0Nzd6XCJ9LEZLOntkOlwiTTY5MC4zLDkwMi43bC0wLjEtMC4zbC0wLjQtMC4ybC0wLjItMC4xbDAuMSwwLjJsMC4xLDAuM2wwLjEsMC4ybDAuMiwwLjFMNjkwLjMsOTAyLjdMNjkwLjMsOTAyLjd6IE02OTUuOCw5MDEuNCBMNjk1LjgsOTAxLjRsLTAuMy0wLjFsLTAuMSwwLjJsMC4yLDAuM2wwLjQsMC4xTDY5NS44LDkwMS40TDY5NS44LDkwMS40eiBNNjgyLjksOTAwbC0wLjEsMC4ybC0wLjQsMC4xbDAuMiwwLjNsMC42LDAuNGgwLjQgbDAuMS0wLjNsLTAuMS0wLjZoLTAuM0w2ODIuOSw5MDBMNjgyLjksOTAweiBNNjg1LjcsODk4bC0wLjktMC4zbC0wLjQtMC4zaC0wLjNsMC40LDAuNGwwLjEsMC4ybDAuMSwwLjJsMC42LDAuM2wwLjYsMC4zbDAuNCwwLjMgbC0wLjEsMC4xbC0wLjgsMC4zaC0wLjNsLTAuMiwwLjFsMC40LDAuMmwwLjYtMC4xbDAuMi0wLjFoMC4ybDAuMywwLjF2MC4ybC0wLjEsMC4ybC0wLjIsMC4ybC0wLjQsMC4zbC0wLjYsMC40aC0wLjhsLTAuNywwLjcgbDAuOSwwLjVsMC43LDAuM2gwLjl2LTAuMWwwLjItMC4xaDAuM2wwLjEtMC4xbDAuMi0wLjR2LTAuNmgwLjJsMC4zLDAuMWwwLjctMC4xbDAuMy0wLjFsMC42LTAuOWwwLjQtMC44bDAuMi0wLjRsMC4zLTAuMmwwLjEtMC4yIGwwLjEtMC4zbDAuMy0wLjJ2LTAuM2wtMC40LTAuMmwtMC4zLTAuMmwtMC4zLDAuM2wtMC4yLTAuMWwtMC45LDAuM2gtMC40bC0wLjMtMC4ybC0wLjQtMC4xbC0wLjQsMC4xbC0wLjUsMC41TDY4NS43LDg5OEw2ODUuNyw4OTggeiBNNjg2LjQsODk3LjZsMC4xLTAuM2wtMC4xLTAuMmwtMC41LTAuMmgtMC41bDAuMiwwLjVsMC4yLDAuMkg2ODYuNHogTTY5Mi4zLDg5Ni45aC0wLjRsMC40LDAuNWwtMC44LDAuOGwwLjIsMC42bDAuMywwLjRsMC4xLDAuMiBsLTAuMSwwLjFsLTAuNCwwLjFsLTAuMywwLjFsLTAuMiwwLjNsLTAuOSwwLjlsMC4yLDAuMmwtMC4zLDAuN2wwLjIsMC4zbDAuOCwwLjdsMC44LDAuNHYtMC43bDAuNC0wLjFsMC40LDAuMmwwLjQtMC4ybC0wLjktMWgwLjMgbDIuNSwwLjVsLTAuMS0wLjRsLTAuMS0wLjJsLTAuMy0wLjRsMS41LTAuNGwwLjUtMC4zbDAuMi0wLjNsMC42LTAuMWwwLjgtMC4zbC0wLjEtMC4xbDAuMS0wLjNsLTAuNC0wLjJsLTAuNS0wLjFsMC4xLTAuM2wwLjUtMC4xIGwtMC44LTAuN2wtMC4zLTAuMWwtMSwwLjFsLTAuMywwLjF2MC4ybDAuMSwwLjNsMC4zLDAuM2wwLjEsMC4ybC0wLjItMC4xbC0xLjEtMC40bC0wLjItMC4xbC0wLjItMC40bDAuMi0wLjFsMC4zLDAuMWwwLjEtMC4zIGwtMC40LTAuM2wtMC40LTAuMWwtMC45LDAuMUw2OTIuMyw4OTYuOUw2OTIuMyw4OTYuOXpcIn0sRk86e2Q6XCJNOTQ3LDE4Ni45di0wLjNsLTAuMS0wLjN2LTAuMmgtMC4xbC0wLjUtMC4xbC0wLjEtMC4yaC0wLjF2MC4ybDAuMSwwLjRsMC41LDAuNEw5NDcsMTg2LjlMOTQ3LDE4Ni45TDk0NywxODYuOXpNOTQ3LjUsMTg0Ljh2LTAuMWwtMC4yLTAuMmwtMC41LTAuMmwtMC4yLTAuMWwtMC4yLDAuMXYwLjJsMC4xLDAuMWwwLjQsMC4xbDAuNCwwLjNoMC4xTDk0Ny41LDE4NC44TDk0Ny41LDE4NC44eiBNOTQ1LjEsMTgyLjlsLTAuMi0wLjFsLTAuNSwwLjFoLTAuM2wwLjEsMC4zbDAuNiwwLjJoMC4zaDAuM2wwLjItMC4xbC0wLjEtMC4yTDk0NS4xLDE4Mi45TDk0NS4xLDE4Mi45eiBNOTQ3LjYsMTgyLjRsLTAuOC0wLjJsLTAuNi0wLjNsLTEsMC4xbDAuNywxLjFsMC44LDAuN2wwLjQsMC4ydi0wLjF2LTAuMmwtMC40LTAuNWwtMC4xLTAuMVYxODNsMC4xLTAuMWgwLjJsMC4zLDAuMmgwLjJMOTQ3LjYsMTgyLjRMOTQ3LjYsMTgyLjR6IE05NDguNiwxODIuMmwtMC4zLTAuMmwtMC40LTAuNHYwLjV2MC4zdjAuMWgwLjFsMC4zLDAuMUw5NDguNiwxODIuMkw5NDguNiwxODIuMnpcIn0sRko6e2Q6XCJNMTk3Ni43LDY3NC40bC0zLjcsMmwtMS45LDAuM2wtMy4xLDEuM2wwLjIsMi40bDMuOS0xLjNsMy45LTEuNkwxOTc2LjcsNjc0LjRMMTk3Ni43LDY3NC40eiBNMTk2NS43LDY4Mi41bC0xLjYsMSBsLTIuMy0wLjhsLTIuNywyLjJsLTAuMiwyLjhsMi45LDAuOGwzLjYtMC45bDEuOC0zLjNMMTk2NS43LDY4Mi41TDE5NjUuNyw2ODIuNXpcIn0sRkk6e2Q6XCJNMTA5My40LDE0NC40bDAuOC0zLjhsLTUuNy0yLjFsLTUuOCwxLjhsLTEuMSwzLjlsLTMuNCwyLjRsLTQuNy0xLjNsLTUuMywwLjNsLTUuMS0yLjlsLTIuMSwxLjRsNS45LDIuN2w3LjIsMy43IGwxLjcsOC40bDEuOSwyLjJsNi40LDIuNmwwLjksMi4zbC0yLjYsMS4ybC04LjcsNi4xbC0zLjMsMy42bC0xLjUsMy4zbDIuOSw1LjJsLTAuMSw1LjdsNC43LDEuOWwzLjEsMy4xbDcuMS0xLjJsNy41LTIuMWw4LTAuNWwwLDAgbDcuOS03LjRsMy4zLTMuM2wwLjktMi45bC03LjMtMy45bDAuOS0zLjdsLTQuOS00LjFsMS43LTQuOGwtNi40LTYuM2wyLjgtNC4xbC03LjItMy43TDEwOTMuNCwxNDQuNEwxMDkzLjQsMTQ0LjR6XCJ9LEZSOntkOlwiTTEwMTIuMiwyOTAuOWwyLjcsMC44bC0wLjUsMi43bC0wLjEsMC4xbC0wLjMtMC4ybC0wLjUsMC42bDAsMC4zbC0zLjYsMi42bC0xMC0xLjZsLTcuNCwybC0wLjUsMy43bC02LDAuOCBsLTEuMy0wLjdsMC43LTAuM2wwLjItMC40bC0wLjItMC4ybC0wLjctMC4ybC0wLjMtMC4xbC0wLjQsMC4zbC0wLjEsMC4zbDAuMSwwLjF2MC4ybC0zLjctMS44bC0xLjksMS4zbC05LjQtMi44bC0yLTIuNGwyLjctMy43IGwxLTEyLjNsLTUuMS02LjVsLTMuNi0zLjFsLTcuNS0yLjRsLTAuNC00LjZsNi40LTEuM2w4LjIsMS42bC0xLjQtN2w0LjYsMi42bDExLjMtNC44bDEuNC01LjFsNC4zLTEuMmwwLjcsMi4ybDIuMiwwLjFsMi40LDIuNCBsMy40LDIuOWwyLjUtMC40bDQuNCwyLjhsMCwwbDEuMSwwLjVsMS40LTAuMWwyLjQsMS42bDcuMSwxLjJsLTIuMyw0LjJsLTAuNSw0LjVsLTEuMywxbC0yLjMtMC42bDAuMiwxLjZsLTMuNSwzLjV2Mi44bDIuNC0wLjkgbDEuOCwyLjdsMCwwbC0wLjIsMS43bDEuNiwyLjRsLTEuNywxLjhMMTAxMi4yLDI5MC45eiBNMTAyNS42LDMwNC4zbC0xLTZsLTAuNiwxLjZsLTIuNywxLjFsLTAuNyw0LjNsMywzLjdMMTAyNS42LDMwNC4zelwifSxHRjp7ZDpcIk02ODEuNCw1NTYuMmwxLjgtNC43bDMuNS01LjhsLTAuOS0yLjZsLTUuOC01LjRsLTQuMS0xLjVsLTEuOS0wLjdsLTMuMSw1LjVsMC40LDQuNGwyLjEsMy43bC0xLDIuN2wtMC42LDIuOSBsLTEuNCwyLjhsMi40LDEuM2wxLjgtMS44bDEuMiwwLjNsMC44LDEuOGwyLjctMC41TDY4MS40LDU1Ni4yelwifSxQRjp7ZDpcIk0yMTMuMiw3MDQuOWwtMC4xLTAuM2wtMC4yLTAuM2wtMC4xLDAuMWwwLjEsMC4xbDAuMiwwLjN2MC4yTDIxMy4yLDcwNC45eiBNMjIyLjUsNjkwLjJsLTAuMi0wLjJsLTAuNC0wLjIgbC0wLjItMC4xbC0wLjItMC4xbC0wLjEsMC4xbDAuMSwwLjFoMC4xbDAuMywwLjJsMC4zLDAuMUwyMjIuNSw2OTAuMkwyMjIuNSw2OTAuMkwyMjIuNSw2OTAuMkwyMjIuNSw2OTAuMnogTTE5OCw2ODkuMWwtMC42LTAuMyBsMC4xLDAuMmwwLjQsMC4ybDAuMiwwLjFMMTk4LDY4OS4xTDE5OCw2ODkuMXogTTIxOC41LDY4OC45bC0wLjQtMC41aC0wLjNMMjE4LjUsNjg4LjlMMjE4LjUsNjg4Ljl6IE0xOTYuOSw2ODcuOWwtMC40LTAuNCBsLTAuMi0wLjNsLTAuMy0wLjFsMC4xLDAuMWwwLjQsMC40bDAuMywwLjRsMC4yLDAuMUwxOTYuOSw2ODcuOXogTTE5Ni42LDY4NS44bC0wLjEtMC4xbDAsMHYtMC4zbDAuMi0wLjNsMC42LTAuNHYtMC4xbDAsMCBsLTAuMiwwLjFsLTAuNCwwLjJsLTAuMiwwLjJsLTAuMSwwLjJsLTAuMSwwLjNsMC4xLDAuMmwwLjEsMC4xaDAuMkwxOTYuNiw2ODUuOEwxOTYuNiw2ODUuOHogTTE0OS4yLDY4NC43bC0wLjItMC42bC0wLjMtMC41IGwtMC44LTAuMWwtMC41LDAuMmwtMC4xLDAuMmwwLjEsMC40bDAuNSwwLjdsMC41LDAuMWwwLjgtMC4xbDAuNCwwLjZsMC4yLDAuMWwwLjQsMC4xbDAuMS0wLjNsLTAuMi0wLjVMMTQ5LjIsNjg0LjdMMTQ5LjIsNjg0Ljd6IE0xNDYuMyw2ODMuOGwwLjEtMC40bC0wLjItMC4xaC0wLjV2MC4ybDAuMSwwLjJsMC4xLDAuMWwwLjMsMC4yTDE0Ni4zLDY4My44TDE0Ni4zLDY4My44eiBNMTM2LjYsNjc5LjVoMC4ybC0wLjQtMC42bC0wLjMtMC4ydjAuMSB2MC43bDAuMywwLjFMMTM2LjYsNjc5LjV6IE0xODAuNSw2NzcuOWgtMC4ySDE4MGgtMC4xbDAuNSwwLjFsMC40LDAuMkwxODAuNSw2NzcuOUwxODAuNSw2NzcuOXogTTE3OS44LDY3OGwtMC4zLTAuMWwtMC4zLTAuMmgtMC4zIGwwLjcsMC4zSDE3OS44TDE3OS44LDY3OHogTTEzNiw2NzguMWwwLjEtMC4ybC0wLjEtMC4xbC0wLjQtMC4ybDAuMSwwLjN2MC4ySDEzNkwxMzYsNjc4LjFMMTM2LDY3OC4xeiBNMTY4LjgsNjc2LjFsLTAuMy0wLjQgbC0wLjItMC4zbC0wLjItMC40bC0wLjQtMC41bDAuMSwwLjNsMC4xLDAuMmwwLjIsMC4ybDAuMiwwLjRsMC4xLDAuMmwwLjMsMC40aDAuMUwxNjguOCw2NzYuMUwxNjguOCw2NzYuMXogTTE4NSw2NzQuNmwwLjEtMC41IGgtMC4yTDE4NSw2NzQuNkwxODUsNjc0LjZMMTg1LDY3NC42eiBNMTcwLjYsNjczbC0wLjYtMC42aC0wLjFsMC4xLDAuMmwwLjUsMC41bDAuMSwwLjJWNjczTDE3MC42LDY3M3ogTTIwMS40LDYzOS4xbDAuMS0wLjJ2LTAuMiBsLTAuMS0wLjFsLTAuMy0wLjFsMC4xLDAuN0wyMDEuNCw2MzkuMUwyMDEuNCw2MzkuMXogTTE5OC43LDYzNS40bC0wLjEtMC4yaC0wLjJsLTAuMSwwLjF2MC41TDE5OC43LDYzNS40TDE5OC43LDYzNS40eiBNMTk4LjgsNjMzLjhsLTAuOCwwLjVsMC4yLDAuNGwwLjQsMC4xbDAuMi0wLjJsMC44LTAuMWwwLjMtMC40bC0wLjMsMC4xTDE5OC44LDYzMy44TDE5OC44LDYzMy44eiBNMTkyLjcsNjMyLjFsMC4yLTAuNWwtMC4yLTAuMSBsLTAuNCwwLjJ2MC4ybDAuMywwLjRMMTkyLjcsNjMyLjFMMTkyLjcsNjMyLjF6IE0xOTUuMyw2MjlsMC4zLTAuMXYtMC4xbC0wLjItMC4ybC0wLjMtMC4xbC0wLjEsMC4xbC0wLjEsMC4ybDAuMSwwLjNMMTk1LjMsNjI5IEwxOTUuMyw2Mjl6IE0xOTIuNCw2MjguOWwwLjEtMC4zdi0wLjJsLTAuMS0wLjJsLTAuOS0wLjJsLTAuMSwwLjF2MC40bDAuMiwwLjVoMC4zTDE5Mi40LDYyOC45elwifSxHQTp7ZDpcIk0xMDUwLjIsNTU3LjdsLTAuNy0wLjNsLTMuNCwwLjhsLTMuNC0wLjhsLTIuNiwwLjR2Ny42aC04LjJsLTEuOSwwLjNsLTEuMSw0LjhsLTEuMyw0LjZsLTEuMywybC0wLjIsMi4xbDMuNCw2LjYgbDMuNyw1LjNsNS44LDYuNGw0LjMtMy41bC0yLjEtNC4ybDEuOS0xLjZsMy44LTAuOGwwLjUtMi44bDMsM2w0LjksMC4zbDEuNy0zbDAuOC00LjNsLTAuNi00LjlsLTIuNy0zLjhsMi40LTcuNGwtMS40LTEuMmwtNC4yLDAuNSBsLTEuNS0zLjNMMTA1MC4yLDU1Ny43TDEwNTAuMiw1NTcuN3pcIn0sR006e2Q6XCJNODgyLjgsNDg4LjVsNSwwLjFsMS40LTAuOWgxbDIuMS0xLjVsMi40LDEuNGwyLjQsMC4xbDIuNC0xLjVsLTEuMS0xLjhsLTEuOCwxLjFsLTEuOC0wLjFsLTIuMS0xLjVsLTEuOCwwLjEgbC0xLjMsMS41bC02LjEsMC4yTDg4Mi44LDQ4OC41TDg4Mi44LDQ4OC41elwifSxHRTp7ZDpcIk0xMjAwLDMwMC4ybC03LjUtMi45bC03LjctMWwtNC41LTEuMWwtMC41LDAuN2wyLjIsMS45bDMsMC43bDMuNCwyLjNsMi4xLDQuMmwtMC4zLDIuN2w1LjQtMC4zbDUuNiwzbDYuOS0xbDEuMS0xIGw0LjIsMS44bDIuOCwwLjRsMC42LTAuN2wtMy4yLTMuNGwxLjEtMC45bC0zLjUtMS40bC0yLjEtMi41bC01LjEtMS4zbC0yLjksMUwxMjAwLDMwMC4yTDEyMDAsMzAwLjJ6XCJ9LERFOntkOlwiTTEwNDMuNiwyMzIuM2wtMi40LTEuOWwtNS41LTIuNGwtMi41LDEuN2wtNC43LDEuMWwtMC4xLTIuMWwtNC45LTEuNGwtMC4yLTIuM2wtMywwLjlsLTMuNi0wLjhsMC40LDMuNGwxLjIsMi4yIGwtMywzbC0xLTEuM2wtMy45LDAuM2wtMC45LDEuM2wxLDJsLTEsNS42bC0xLjEsMi4zaC0yLjlsMS4xLDYuNGwtMC40LDQuMmwxLDEuNGwtMC4yLDIuN2wyLjQsMS42bDcuMSwxLjJsLTIuMyw0LjJsLTAuNSw0LjVoNC4yIGwxLTEuNGw1LjQsMS45bDEuNS0wLjNsMi42LDEuN2wwLjYtMS42bDQuNCwwLjNsMy40LTEuMmwyLjQsMC4ybDEuNywxLjNsMC40LTEuMWwtMS00bDEuNy0wLjhsMS41LTIuOWwtMi45LTIuNmwtMi42LTEuNWwtMC43LTIuNiBsLTEtMS45bDMuNC0xLjNsMS43LTEuNWwzLjQtMS4ybDEuMS0xLjJsMS40LDAuN2wyLjEtMC42bC0yLjMtMy45bDAuMS0yLjFsLTEuNC0zLjNsLTItMi4ybDEuMi0xLjZMMTA0My42LDIzMi4zTDEwNDMuNiwyMzIuM3pcIn0sR0g6e2Q6XCJNOTc2LjgsNTAyLjFsLTIuNi0wLjVsLTEuOCwxbC0yLjQtMC41bC05LjcsMC4zbC0wLjIsMy42bDAuOCw0LjhsMS40LDkuMWwtMi4zLDUuM2wtMS41LDcuMmwyLjQsNS41bC0wLjIsMi41IGw1LDEuOGw1LTEuOWwzLjItMi4xbDguNy0zLjhsLTEuMi0yLjJsLTEuNS00bC0wLjQtMy4ybDEuMi01LjdsLTEuNC0yLjNsLTAuNi01LjFsMC4xLTQuNmwtMi40LTMuM0w5NzYuOCw1MDIuMUw5NzYuOCw1MDIuMXpcIn0sR1I6e2Q6XCJNMTEwMS45LDM0NC45bC0wLjgsMi44bDYuNiwxLjJ2MS4xbDcuNi0wLjZsMC41LTEuOWwtMi44LDAuOHYtMS4xbC0zLjktMC41bC00LjEsMC40TDExMDEuOSwzNDQuOUwxMTAxLjksMzQ0Ljl6IE0xMTEzLjQsMzA3LjVsLTIuNy0xLjZsMC4zLDNsLTQuNiwwLjZsLTMuOS0yLjFsLTMuOSwxLjdsLTMuOC0wLjJsLTEsMC4ybC0wLjcsMS4xbC0yLjgtMC4xbC0xLjksMS4zbC0zLjMsMC42djEuNmwtMS42LDAuOSBsLTAuMSwyLjFsLTIuMSwzbDAuNSwxLjlsMi45LDMuNmwyLjMsM2wxLjMsNC4zbDIuMyw1LjFsNC42LDIuOWwzLjQtMC4xbC0yLjQtNS43bDMuMy0wLjdsLTEuOS0zLjNsNSwxLjdsLTAuNC0zLjdsLTIuNy0xLjhsLTMuMi0zIGwxLjgtMS40bC0yLjgtM2wtMS42LTMuOGwwLjktMS4zbDMsMy4yaDIuOWwyLjUtMWwtMy45LTMuNmw2LjEtMS42bDIuNywwLjZsMy4yLDAuMmwxLjEtMC43TDExMTMuNCwzMDcuNUwxMTEzLjQsMzA3LjV6XCJ9LEdMOntkOlwiTTg4Ny40LDc2LjNsLTI2LTAuNGwtMTEuOCwwLjNsLTUsMS4zbC0xMS41LTAuMWwtMTIuNywyLjFsLTEuNiwxLjdsNi43LDIuMWwtNi4yLTEuM2wtNC41LTAuM2wtNy0xLjRsLTEwLjYsMi4xIGwtMi43LTEuMmgtMTAuNGwtMTAuOSwwLjZsLTguOSwxbC0wLjIsMS44bC01LjMsMC41TDc0NC4yLDg4bC00LjYsMS43bDguMSwxLjVsLTIuOCwxLjZMNzMwLDk1bC0xNS41LDIuMmwtMi4yLDEuN2w2LjQsMmwxNC41LDEuMiBsLTcuNSwwLjJsLTEwLjksMS41bDMuOCwzLjFsMywxLjVsOS40LTAuM2wxMC4xLTAuMmw3LjYsMC4zbDgsMi45bC0xLjQsMi4xbDMuNiwxLjlsMS40LDUuM2wxLDMuNmwxLjQsMS45bC03LDQuOGwyLjYsMS4zbDQuNC0wLjggbDIuNiwxLjhsNS4zLDMuNGwtNy41LTEuNGgtMy44bC0zLDIuOGwtMS41LDMuNmw0LjIsMS44bDQtMC44bDIuNi0wLjhsNS41LTEuOWwtMi44LDQuMmwtMi42LDIuM2wtNy4xLDJsLTcsNi4zbDIsMmwtMy40LDRsMy43LDUuMiBsLTEuNSw1bDAuNywzLjdsNC44LDcuMWwwLjgsNS42bDMuMSwzLjJoOC45bDUsNC43bDYuNS0wLjNsNC4xLTUuN2wzLjUtNC44bC0wLjMtNC40bDguNi00LjZsMy4zLTMuN2wxLjQtMy45bDQuNy0zLjVsNi41LTEuMyBsNi4xLTEuNGwzLTAuMmwxMC4yLTMuOWw3LjQtNS43bDQuOC0yLjFsNC42LTAuMWwxMi41LTEuOGwxMi4xLTQuM2wxMS45LTQuNmwtNS41LTAuM2wtMTAuNi0wLjJsNS4zLTIuOGwtMC41LTMuNmw0LjIsM2wyLjcsMi4xIGw3LjMtMWwtMC42LTQuM2wtNC41LTMuMWwtNS0xLjNsMi40LTEuNGw3LjIsMi4xbDAuNS0yLjNsLTQuMS0zLjRoNS40bDUuNi0wLjhsMS43LTEuOGwtNC0yLjFsOC42LTAuM2wtNC00LjNsNC4xLTAuNWwwLjEtNC4yIGwtNi4yLTIuNWw2LjQtMS42bDUuOC0wLjFsLTMuNi0zLjJsMS4xLTUuMWwzLjYtMi45bDQuOS0zLjJsLTgtMC4ybDExLjMtMC43bDIuMi0xbDE0LjYtMi45bC0xLjYtMS43bC0xMC0wLjhsLTE2LjksMS41bC05LjIsMS41IGw0LjUtMi4zbC0yLjMtMS40bC03LDEuMmwtOS43LTEuNGwtMTIuMSwwLjVsLTEuNC0wLjdsMTguMy0wLjRsMTIuOS0wLjJsNi42LTEuNEw4ODcuNCw3Ni4zTDg4Ny40LDc2LjN6XCJ9LEdEOntkOlwiTTYzMi4xLDQ5NS43bDAuNS0wLjJsMC4yLTEuMWwtMC4zLTAuMWwtMC4zLDAuM2wtMC4zLDAuNXYwLjRsLTAuMiwwLjNMNjMyLjEsNDk1LjdMNjMyLjEsNDk1Ljd6XCJ9LEdQOntkOlwiTTYzNi40LDQ3MS4xbDAuMi0wLjJ2LTAuM2wtMC4yLTAuM2wtMC4yLDAuMWwtMC4yLDAuM3YwLjNsMC4xLDAuMUg2MzYuNEw2MzYuNCw0NzEuMXogTTYzNC41LDQ3MC4zbDAuMi0wLjJ2LTEuMiBsMC4xLTAuM2wtMC4yLTAuMWwtMC4yLTAuMmwtMC42LTAuMmwtMC4xLDAuMWwtMC4yLDAuM2wwLjEsMS41bDAuMiwwLjVsMC4yLDAuMUw2MzQuNSw0NzAuM0w2MzQuNSw0NzAuM3ogTTYzNi4xLDQ2OC45bDAuOC0wLjIgbC0wLjktMC42bC0wLjItMC40di0wLjNsLTAuNC0wLjNsLTAuMiwwLjJsLTAuMSwwLjNsMC4xLDAuNWwtMC4zLDAuNGwwLjEsMC40bDAuNCwwLjFMNjM2LjEsNDY4LjlMNjM2LjEsNDY4Ljl6XCJ9LEdUOntkOlwiTTQ4Mi44LDQ1OC45bC01LjEtMC4xaC01LjJsLTAuNCwzLjZoLTIuNmwxLjgsMi4xbDEuOSwxLjVsMC41LDEuNGwwLjgsMC40bC0wLjQsMi4xSDQ2N2wtMy4zLDUuMmwwLjcsMS4ybC0wLjgsMS41IGwtMC40LDEuOWwyLjcsMi42bDIuNSwxLjNsMy40LDAuMWwyLjgsMS4xbDAuMi0xbDIuMS0xLjZsMS4xLTAuN2wtMC4yLTAuN2wxLjQtMC40bDEuMy0xLjZsLTAuMy0xLjNsMC41LTEuMmwyLjgtMS44bDIuOC0yLjQgbC0xLjUtMC44bC0wLjYsMC45bC0xLjctMS4xaC0xLjZsMS4yLTcuMkw0ODIuOCw0NTguOUw0ODIuOCw0NTguOXpcIn0sR046e2Q6XCJNOTEyLjQsNDkzbC0wLjgsMC40bC0zLTAuNWwtMC40LDAuN2wtMS4zLDAuMWwtNC0xLjVsLTIuNy0wLjFsLTAuMSwyLjFsLTAuNiwwLjdsMC40LDIuMWwtMC44LDAuOWgtMS4zbC0xLjQsMSBsLTEuNy0wLjFsLTIuNiwzLjFsMS42LDEuMWwwLjgsMS40bDAuNywyLjhsMS4zLDEuMmwxLjUsMC45bDIuMSwyLjVsMi40LDMuN2wzLTIuOGwwLjctMS43bDEtMS40bDEuNS0wLjJsMS4zLTEuMmg0LjVsMS41LDIuMyBsMS4yLDIuN0w5MTcsNTE1bDAuOSwxLjd2Mi4zbDEuNS0wLjNsMS4yLTAuMmwxLjUtMC43bDIuMywzLjlsLTAuNCwyLjZsMS4xLDEuM2wxLjYsMC4xbDEuMS0yLjZsMS42LDAuMmgwLjlsMC4zLTIuOGwtMC40LTEuMiBsMC42LTAuOWwyLTAuOGwtMS4zLTUuMWwtMS4zLTIuNmwwLjUtMi4ybDEuMS0wLjVsLTEuNy0xLjhsMC4zLTEuOWwtMC43LTAuN2wtMS4yLDAuNmwwLjItMi4xbDEuMi0xLjZsLTIuMy0yLjdsLTAuNi0xLjdsLTEuMy0xLjQgbC0xLjEtMC4ybC0xLjMsMC45bC0xLjgsMC44bC0xLjYsMS40bC0yLjQtMC41bC0xLjUtMS42bC0wLjktMC4ybC0xLjUsMC44aC0wLjlMOTEyLjQsNDkzTDkxMi40LDQ5M3pcIn0sR1c6e2Q6XCJNOTAwLjIsNDkyLjFsLTEwLjMtMC4zbC0xLjUsMC43bC0xLjgtMC4ybC0zLDEuMWwwLjMsMS4zbDEuNywxLjR2MC45bDEuMiwxLjhsMi40LDAuNWwyLjksMi42bDIuNi0zLjFsMS43LDAuMSBsMS40LTFoMS4zbDAuOC0wLjlsLTAuNC0yLjFsMC42LTAuN0w5MDAuMiw0OTIuMUw5MDAuMiw0OTIuMXpcIn0sR1k6e2Q6XCJNNjU2LjEsNTM0LjJsLTIuMS0yLjNsLTIuOS0zLjFsLTIuMS0wLjFsLTAuMS0zLjNsLTMuMy00LjFsLTMuNi0yLjRsLTQuNiwzLjhsLTAuNiwyLjNsMS45LDIuM2wtMS41LDEuMmwtMy40LDEuMSB2Mi45bC0xLjYsMS44bDMuNyw0LjhsMi45LTAuM2wxLjMsMS41bC0wLjgsMi44bDEuOSwwLjlsMS4yLDNsLTEuNiwyLjJsLTEsNS40bDEuNCwzLjNsMC4zLDIuOWwzLjUsM2wyLjcsMC4zbDAuNy0xLjNsMS43LTAuMiBsMi42LTEuMWwxLjgtMS43bDMuMSwwLjVsMS40LTAuMmwtMy4zLTUuNkw2NTUsNTUxbC0xLjgtMC4xbC0yLjQtNC42bDEuMS0zLjNsLTAuMy0xLjVsMy41LTEuNkw2NTYuMSw1MzQuMkw2NTYuMSw1MzQuMnpcIn0sSFQ6e2Q6XCJNNTgwLjYsNDQ2LjdsLTQuNi0xbC0zLjQtMC4ybC0xLjQsMS43bDMuNCwxbC0wLjMsMi40bDIuMiwyLjhsLTIuMSwxLjRsLTQuMi0wLjVsLTUtMC45bC0wLjcsMi4xbDIuOCwxLjlsMi43LTEuMSBsMy4zLDAuNGwyLjctMC40bDMuNiwxLjFsMC4yLTEuOGwtMS4yLTEuOWwxLjUtMS4xbDAuNy0yLjRMNTgwLjYsNDQ2Ljd6XCJ9LEhOOntkOlwiTTUxNC4xLDQ3Ni44bC0xLjMtMS44bC0xLjktMWwtMS41LTEuNGwtMS42LTEuMmwtMC44LTAuMWwtMi41LTAuOWwtMS4xLDAuNWwtMS41LDAuMmwtMS4zLTAuNGwtMS43LTAuNGwtMC44LDAuNyBsLTEuOCwwLjdsLTIuNiwwLjJsLTIuNS0wLjZsLTAuOSwwLjRsLTAuNS0wLjZsLTEuNiwwLjFsLTEuMywxLjFsLTAuNi0wLjJsLTIuOCwyLjRsLTIuOCwxLjhsLTAuNSwxLjJsMC4zLDEuM2wtMS4zLDEuNmwxLjUsMC41IGwxLjEsMS4zbDEuNiwxbDAuMSwwLjlsMi41LTAuOGwxLjEsMC41bDAuNywwLjdsLTAuNiwyLjVsMS43LDAuNmwwLjcsMmwxLjgtMC4zbDAuOC0xLjVoMC44bDAuMi0zLjFsMS4zLTAuMmgxLjJsMS40LTEuN2wxLjUsMS4zIGwwLjYtMC44bDEuMS0wLjdsMi4xLTEuOGwwLjMtMS4zbDAuNSwwLjFsMC44LTEuNWwwLjYtMC4ybDAuOSwwLjlsMS4xLDAuM2wxLjMtMC44aDEuNGwyLTAuOGwwLjktMC45TDUxNC4xLDQ3Ni44TDUxNC4xLDQ3Ni44elwifSxISzp7ZDpcIk0xNjA0LjksNDMwLjl2LTAuMnYtMC4ybC0wLjQtMC4yaC0wLjNsMC4xLDAuMmwwLjQsMC41TDE2MDQuOSw0MzAuOUwxNjA0LjksNDMwLjl6IE0xNjAzLjYsNDMwLjlsLTAuMS0wLjVsMC4yLTAuMyBsLTAuOSwwLjNsLTAuMSwwLjN2MC4xbDAuMiwwLjFIMTYwMy42TDE2MDMuNiw0MzAuOXogTTE2MDUuMiw0MjkuN2wtMC4xLTAuM2wtMC4yLTAuMWwtMC4xLTAuM2wtMC4xLTAuMmwwLDBsLTAuMy0wLjFsLTAuMi0wLjEgaC0wLjRsLTAuMSwwLjFoLTAuMmwtMC4yLDAuMmwwLDB2MC4ybC0wLjUsMC40djAuMmwwLjMsMC4ybDAuNS0wLjFsMC42LDAuMmwwLjgsMC4zdi0wLjJ2LTAuM0wxNjA1LjIsNDI5LjdMMTYwNS4yLDQyOS43elwifSxIVTp7ZDpcIk0xMDc5LjEsMjYzLjhsLTEuNiwwLjRsLTEsMS41bC0yLjIsMC43bC0wLjYtMC40bC0yLjMsMWwtMS45LDAuMmwtMC4zLDEuMmwtNC4xLDAuOGwtMS45LTAuN2wtMi42LTEuNmwtMC4yLDIuNiBoLTIuOGwxLjEsMS4zbC0xLjMsNGwwLjgsMC4xbDEuMiwyLjFsMS42LDAuOGw0LDIuNmw0LjIsMS4ybDEuOC0wLjlsMCwwbDMuNy0xLjZsMy4yLDAuMmwzLjgtMS4xbDIuNi00LjNsMS45LTQuMmwyLjktMS4zbC0wLjYtMS42IGwtMi45LTEuN2wtMSwwLjZMMTA3OS4xLDI2My44TDEwNzkuMSwyNjMuOHpcIn0sSVM6e2Q6XCJNOTE1LjcsMTU4LjZsLTYuOS0wLjRsLTcuMywyLjlsLTUuMS0xLjVsLTYuOSwzbC01LjktMy44bC02LjUsMC44bC0zLjYsMy43bDguNywxLjNsLTAuMSwxLjZsLTcuOCwxLjFsOC44LDIuNyBsLTQuNiwyLjVsMTEuNywxLjhsNS42LDAuOGwzLjktMWwxMi45LTMuOWw2LjEtNC4ybC00LjQtMy44TDkxNS43LDE1OC42TDkxNS43LDE1OC42elwifSxJTjp7ZDpcIk0xNDE0LjEsMzgwLjFsLTguNS00LjRsLTYuMi00bC0zLjItN2w0LjEsMC45bC0wLjYtMy4zbC0zLTMuM2wtMC44LTUuMmwtNy42LTcuNWwtMy43LDUuNGwtNS43LDFsLTguNS0xLjYgbC0xLjksMi44bDMuMiw1LjZsMi45LDQuM2w1LDMuMWwtMy43LDMuN2wxLDQuNWwtMy45LDYuM2wtMi4xLDYuNWwtNC41LDYuN2wtNi40LTAuNWwtNC45LDYuNmw0LDIuOWwxLjMsNC45bDMuNSwzLjJsMS44LDUuNWgtMTIgbC0zLjIsNC4ybDcuMSw1LjRsMS45LDIuNWwtMi40LDIuM2w4LDcuN2w0LDAuOGw3LjYtMy44bDEuNyw1LjlsMC44LDcuOGwyLjUsOC4xbDMuNiwxMi4zbDUuOCw4LjhsMS4zLDMuOWwyLDhsMy40LDYuMWwyLjIsMyBsMi41LDYuNGwzLjEsOC45bDUuNSw2bDIuMi0xLjhsMS43LTQuNGw1LTEuOGwtMS44LTIuMWwyLjItNC44bDIuOS0wLjNsLTAuNy0xMC44bDEuOS02LjFsLTAuNy01LjNsLTEuOS04LjJsMS4yLTQuOWwyLjUtMC4zIGw0LjgtMi4zbDIuNi0xLjZsLTAuMy0yLjlsNS00LjJsMy43LTRsNS4zLTcuNWw3LjQtNC4ybDIuNC0zLjhsLTAuOS00LjhsNi42LTEuM2wzLjcsMC4xbDAuNS0yLjRsLTEuNi01LjJsLTIuNi00LjhsMC40LTMuOCBsLTMuNy0xLjdsMC44LTIuM2wzLjEtMi40bC00LjYtMy40bDEuMi00LjNsNC44LDIuN2wyLjcsMC40bDEuMiw0LjRsNS40LDAuOWw1LTAuMWwzLjQsMS4xbC0xLjYsNS4zbC0yLjQsMC40bC0xLjEsMy42bDMuNSwzLjMgbDAuMi00bDEuNS0wLjFsNC41LDEwLjFsMi40LTEuNWwtMC45LTIuN2wwLjktMi4xbC0wLjktNi42bDQuNiwxLjRsMS41LTUuMmwtMC4zLTMuMWwyLjEtNS40bC0wLjktMy42bDYuMS00LjRsNC4xLDEuMWwtMS4zLTMuOSBsMS42LTEuMmwtMC45LTIuNGwtNi4xLTAuOWwxLjItMi43bC0zLjUtMy45bC0zLjIsMi42bC00LjktMS41bC01LjMsNGwtMy45LDQuOGwtNC4yLDAuOGwyLjcsMmwwLjQsMy45bC00LjQsMC4ybC00LjctMC40bC0zLjIsMSBsLTUuNS0yLjVsLTAuMy0xLjJsLTEuNS01LjFsLTMsMS40bDAuMSwyLjdsMS41LDQuMWwtMC4xLDIuNWwtNC42LDAuMWwtNi44LTEuNWwtNC4zLTAuNmwtMy44LTMuMmwtNy42LTAuOWwtNy43LTMuNWwtNS44LTMuMSBsLTUuNy0yLjVsMC45LTUuOUwxNDE0LjEsMzgwLjFMMTQxNC4xLDM4MC4xelwifSxJRDp7ZDpcIk0xNjUxLjksNjM3LjNsMC41LTEuN2wtMS44LTEuOWwtMi44LTJsLTUuMywxLjNsNyw0LjRMMTY1MS45LDYzNy4zTDE2NTEuOSw2MzcuM3ogTTE2NzIuOCw2MzYuN2w0LTQuOGwwLjEtMS45IGwtMC41LTEuM2wtNS43LDIuNmwtMi44LDMuOWwtMC43LDIuMWwwLjYsMC44TDE2NzIuOCw2MzYuN0wxNjcyLjgsNjM2Ljd6IE0xNjM3LjIsNjIzLjdsLTEuNiwyLjJsLTMuMSwwLjFsLTIuMiwzLjZsMywwLjFsMy45LTAuOSBsNi42LTEuMmwtMS4yLTIuOGwtMy41LDAuNkwxNjM3LjIsNjIzLjdMMTYzNy4yLDYyMy43eiBNMTY2NS4zLDYyMy43bC01LjIsMi4zbC0zLjgsMC41bC0zLjQtMS45bC00LjUsMS4zbC0wLjIsMi4zbDcuNCwwLjggbDguNi0xLjhMMTY2NS4zLDYyMy43TDE2NjUuMyw2MjMuN3ogTTE1ODUuOCw2MTUuM2wtMC43LTIuM2wtMi4zLTAuNWwtNC40LTIuNGwtNi44LTAuNGwtNC4xLDYuMWw1LjEsMC40bDAuOCwyLjhsMTAsMi42bDIuNC0wLjggbDQuMSwwLjZsNi4zLDIuNGw1LjIsMS4ybDUuOCwwLjVsNS4xLTAuMmw1LjksMi41bDYuNi0yLjRsLTYuNi0zLjhsLTguMy0xLjFsLTEuOC00LjFsLTEwLjMtMy4xbC0xLjMsMi42TDE1ODUuOCw2MTUuMyBMMTU4NS44LDYxNS4zeiBNMTczMi40LDYxMS43bDAuMi0zbC0xLjItMS45bC0xLjMsMi4ybC0xLjIsMi4ybDAuMyw0LjhMMTczMi40LDYxMS43eiBNMTY5MS40LDU5NC4ybC0xLjQtMi4xbC01LjcsMC4zbDEsMi43IGwzLjksMS4yTDE2OTEuNCw1OTQuMkwxNjkxLjQsNTk0LjJ6IE0xNzA5LjUsNTkxLjhsLTYuMS0xLjhsLTYuOSwwLjNsLTEuNSwzLjVsMy45LDAuMmwzLjItMC40bDQuNiwwLjVsNC43LDIuNkwxNzA5LjUsNTkxLjggTDE3MDkuNSw1OTEuOHogTTE3MzAuNSw1NzkuNWwtMC44LTIuNGwtOS0yLjZsLTIuOSwyLjFsLTcuNiwxLjVsMi4zLDMuMmw1LDEuMmwyLjEsMy43bDguMywwLjFsMC40LDEuNmwtNC0wLjFsLTYuMiwyLjNsNC4yLDMuMSBsLTAuMSwyLjhsMS4yLDIuM2wyLjEtMC41bDEuOC0zLjFsOC4yLDUuOWw0LjYsMC41bDEwLjYsNS40bDIuMyw1LjNsMSw2LjlsLTMuNywxLjhsLTIuOCw1LjJsNy4xLTAuMmwxLjYtMS44bDUuNSwxLjNsNC42LDUuMiBsMS41LTIwLjhsMS0yMC43bC02LTEuMmwtNC4xLTIuM2wtNC43LTIuMmgtNWwtNi42LDMuOGwtNC45LDYuOGwtNS43LTMuOEwxNzMwLjUsNTc5LjV6IE0xNjgwLjUsNTYzLjFsLTEtMS40bC01LjUsNC42bC02LjUsMC4zIGwtNy4xLTAuOWwtNC40LTEuOWwtNC43LDQuOGwtMS4yLDIuNmwtMi45LDkuNmwtMC45LDVsLTIuNCw0LjJsMS42LDQuM2wyLjMsMC4xbDAuNiw2LjFsLTEuOSw1LjlsMi4zLDEuOWwzLjYtMWwwLjMtOS4xbC0wLjItNy40IGwzLjgtMS45bC0wLjcsNi4ybDMuOSwzLjdsLTAuOCwyLjVsMS4zLDEuN2w1LjYtMi40bC0zLDUuMmwyLjEsMi4ybDMuMS0xLjlsMC4zLTQuMWwtNC43LTcuNGwxLjEtMi4ybC01LjEtOC4xbDUtMi41bDIuNi0zLjcgbDIuNCwwLjlsMC41LTIuOWwtMTAuNSwyLjFsLTMuMSwyLjlsLTUtNS42bDAuOS00LjhsNC45LTFsOS4zLTAuM2w1LjQsMS4zbDQuMy0xLjNMMTY4MC41LDU2My4xTDE2ODAuNSw1NjMuMXogTTE2OTkuOSw1NjUgbC0wLjYtMi42bC0zLjMtMC42bC0wLjUtMy41bC0xLjgsMi4zbC0xLDUuMWwxLjcsOC4ybDIuMiw0bDEuNi0wLjhsLTIuMy0zLjNsMC45LTMuOWwyLjksMC42TDE2OTkuOSw1NjVMMTY5OS45LDU2NXogTTE2MzksNTYwLjUgbDAuOS0yLjlsLTQuMy02bDMtNS44bC01LTFoLTYuNGwtMS43LDcuMmwtMiwyLjJsLTIuNyw4LjlsLTQuNSwxLjNsLTUuNC0xLjhsLTIuNywwLjZsLTMuMiwzLjJsLTMuNi0wLjRsLTMuNiwxLjJsLTMuOS0zLjVsLTEtNC4zIGwtMy4zLDQuMmwtMC42LDUuOWwwLjgsNS42bDIuNiw1LjRsMi44LDEuOGwwLjcsOC41bDQuNiwwLjhsMy42LTAuNGwyLDMuMWw2LjctMi4zbDIuOCwybDQsMC40bDIsMy45bDYuNS0yLjlsMC44LDIuM2wyLjUtOS43IGwwLjMtNi40bDUuNS00LjNsLTAuMi01LjhsMS44LTQuM2w2LjctMC44TDE2MzksNTYwLjVMMTYzOSw1NjAuNXogTTE1NzAuMyw2MDkuNGwwLjctOS44bDEuNy04bC0yLjYtNGwtNC4xLTAuNWwtMS45LTMuNmwtMC45LTQuNCBsLTItMC4ybC0zLjItMi4ybDIuMy01LjJsLTQuMy0yLjlsLTMuMy01LjNsLTQuOC00LjRsLTUuNy0wLjFsLTUuNS02LjhsLTMuMi0yLjdsLTQuNS00LjNsLTUuMi02LjJsLTguOC0xLjJsLTMuNi0wLjNsMC42LDMuMiBsNi4xLDdsNC40LDMuNmwzLjEsNS41bDUuMSw0bDIuMiw0LjlsMS43LDUuNWw0LjksNS4zbDQuMSw4LjlsMi43LDQuOGw0LjEsNS4ybDIuMiwzLjhsNyw1LjJsNC41LDUuM0wxNTcwLjMsNjA5LjRMMTU3MC4zLDYwOS40elwifSxJUjp7ZDpcIk0xMjEzLjUsMzI0LjRsLTMuMi0yLjlsLTEuMi0yLjRsLTMuMywxLjhsMi45LDcuM2wtMC43LDJsMy43LDUuMmwwLDBsNC43LDcuOGwzLjcsMS45bDEsMy44bC0yLjMsMi4ybC0wLjUsNSBsNC42LDYuMWw3LDMuNGwzLjUsNC45bC0wLjIsNC42aDEuN2wwLjUsMy4zbDMuNCwzLjRsMS43LTIuNWwzLjcsMi4xbDIuOC0xbDUuMSw4LjRsNC4zLDYuMWw1LjUsMS44bDYuMSw0LjlsNi45LDIuMWw1LjEtMy4xbDQtMS4xIGwyLjgsMS4xbDMuMiw3LjhsNi4zLDAuOGw2LjEsMS41bDEwLjUsMS45bDEuMi03LjRsNy40LTMuM2wtMC45LTIuOWwtMi43LTFsLTEtNS43bC01LjYtMi43bC0yLjgtMy45bC0zLjItMy4zbDMuOS01LjhsLTEuMS00IGwtNC4zLTEuMWwtMS4xLTRsLTIuNy01LjFsMS42LTMuNWwtMi41LTAuOWwwLjUtNC43bDAuNS04bC0xLjYtNS41bC0zLjktMC4ybC03LjMtNS43bC00LjMtMC43bC02LjUtMy4zbC0zLjgtMC42bC0yLjEsMS4yIGwtMy41LTAuMmwtMywzLjdsLTQuNCwxLjJsLTAuMiwxLjZsLTcuOSwxLjdsLTcuNi0xLjFsLTQuMy0zLjNsLTUuMi0xLjNsLTIuNS00LjhsLTEuMywwLjNsLTMuOC0zLjRsMS4yLTMuMWwtMS45LTEuOWwtMS45LDAuNSBsLTUuMyw0LjdsLTEuOCwwLjJMMTIxMy41LDMyNC40TDEyMTMuNSwzMjQuNHpcIn0sSVE6e2Q6XCJNMTIwNy4zLDMzNC45bC02LjItMC45bC0yLjEsMWwtMi4xLDQuMWwtMi43LDEuNmwxLjIsNC43bC0wLjksNy44bC0xMSw2LjdsMy4xLDcuN2w2LjcsMS43bDguNSw0LjVsMTYuNywxMi43IGwxMC4yLDAuNWwzLjItNi4xbDMuNywwLjVsMy4yLDAuNGwtMy40LTMuNGwtMC41LTMuM2gtMS43bDAuMi00LjZsLTMuNS00LjlsLTctMy40bC00LjYtNi4xbDAuNS01bDIuMy0yLjJsLTEtMy44bC0zLjctMS45IGwtNC43LTcuOGwwLDBsLTIuMywxLjFMMTIwNy4zLDMzNC45TDEyMDcuMywzMzQuOXpcIn0sSUU6e2Q6XCJNOTQ3LjMsMjMxLjdsLTMuNS0xLjNsLTIuOSwwLjFsMS4xLTMuMmwtMC44LTMuMmwtMy43LDIuOGwtNi43LDQuN2wyLjEsNi4xbC00LjIsNi40bDYuNywwLjlsOC43LTMuNmwzLjktNS40IEw5NDcuMywyMzEuN0w5NDcuMywyMzEuN3pcIn0sSUw6e2Q6XCJNMTE2Ny44LDM2MC41bC0xLjQsMC4xbC0wLjQsMS4xaC0xLjhsLTAuMSwwLjFsLTAuNiwxLjZsLTAuNiw0LjhsLTEuMSwyLjlsMC40LDAuNGwtMS40LDIuMWwwLDBsMy45LDkuMmwwLjcsMS43IGwxLjctMTAuMmwtMC40LTIuNGwtMi40LDAuOGwwLjEtMS43bDEuMi0wLjhsLTEuNC0wLjdsMC43LTQuM2wyLDAuOWwwLjctMmgtMC4xbDAuNi0xTDExNjcuOCwzNjAuNUwxMTY3LjgsMzYwLjV6XCJ9LElUOntkOlwiTTEwNTcuOCwzMjguNmwtMS42LDUuMWwwLjksMmwtMC45LDMuM2wtNC4yLTIuNGwtMi43LTAuN2wtNy41LTMuM2wwLjYtMy40bDYuMiwwLjZsNS4yLTAuN0wxMDU3LjgsMzI4LjZ6IE0xMDcyLjMsMzE2LjJsLTAuOCwyLjNsLTMuMS0zbC00LjUtMWwtMS45LDQuMWwzLjksMi4zbC0wLjQsMy4zbC0yLjEsMC40bC0yLjUsNS42bC0yLjEsMC41bC0wLjEtMmwwLjgtMy41bDEuMS0xLjNsLTIuMy0zLjcgbC0xLjgtMy4ybC0yLjItMC44bC0xLjctMi43bC0zLjQtMS4ybC0yLjMtMi41bC0zLjktMC40bC00LjItMi44bC00LjktNGwtMy42LTMuNmwtMS45LTZsLTIuNi0wLjdsLTQuMi0yLjFsLTIuMywwLjlsLTIuOCwyLjggbC0yLjEsMC41bDAuNS0yLjdsLTIuNy0wLjhsLTEuNS00LjhsMS43LTEuOGwtMS42LTIuNGwwLjItMS43bDIuMiwxLjNsMi40LTAuM2wyLjctMi4xbDAuOSwxbDIuNC0wLjJsMC45LTIuNWwzLjgsMC44bDIuMS0xLjEgbDAuMy0yLjVsMy4xLDAuOWwwLjUtMS4ybDQuOC0xLjFsMS4zLDIuMmw3LjIsMS42bC0wLjMsM2wxLjQsMi43bC00LjEtMC45bC0zLjksMi4ybDAuNCwzbC0wLjUsMS44bDEuOSwzLjFsNC45LDMuMWwyLjksNS4xbDYsNSBsNC0wLjFsMS40LDEuNGwtMS40LDEuMmw0LjgsMi4zbDMuOSwxLjlsNC43LDMuMkwxMDcyLjMsMzE2LjJ6IE0xMDQwLjIsMzA1LjNsLTAuMS0wLjZsLTAuNiwwLjFsLTAuMiwwLjVIMTA0MC4yeiBNMTA0MC4zLDI5Mi40IGwtMC45LDAuM2wwLjIsMC45bDAuNy0wLjFMMTA0MC4zLDI5Mi40eiBNMTAyMS42LDMxMS42bC0yLjgtMC4zbDEuMywzLjZsMC40LDcuNmwyLjEsMS43bDItMi4xbDIuNCwwLjRsMC40LTguNGwtMy4zLTQuNCBMMTAyMS42LDMxMS42elwifSxDSTp7ZDpcIk05NDYuNSw1MDYuMmwtMi4zLDAuOWwtMS4zLDAuOGwtMC45LTIuN2wtMS42LDAuN2wtMS0wLjFsLTEsMS45bC00LjMtMC4xbC0xLjYtMWwtMC43LDAuNmwtMS4xLDAuNWwtMC41LDIuMiBsMS4zLDIuNmwxLjMsNS4xbC0yLDAuOGwtMC42LDAuOWwwLjQsMS4ybC0wLjMsMi44aC0wLjlsLTAuMywxLjhsMC42LDMuMWwtMS4yLDIuOGwxLjYsMS44bDEuOCwwLjRsMi4zLDIuN2wwLjIsMi41bC0wLjUsMC44IGwtMC41LDUuMmwxLjEsMC4ybDUuNi0yLjRsMy45LTEuOGw2LjYtMS4xbDMuNi0wLjFsMy45LDEuM2wyLjYtMC4xbDAuMi0yLjVsLTIuNC01LjVsMS41LTcuMmwyLjMtNS4zbC0xLjQtOS4xbC0zLjgtMS42bC0yLjcsMC4yIGwtMS45LDEuNmwtMi41LTEuM2wtMS0yLjFMOTQ2LjUsNTA2LjJMOTQ2LjUsNTA2LjJ6XCJ9LEpNOntkOlwiTTU1MC43LDQ1OC41bDMuOS0wLjFsLTAuOC0xLjhsLTIuNy0xLjVsLTMuNy0wLjZsLTEuMi0wLjJsLTIuNCwwLjRsLTAuOCwxLjVsMi45LDIuM2wzLDFMNTUwLjcsNDU4LjVMNTUwLjcsNDU4LjV6IFwifSxKUDp7ZDpcIk0xNjkyLjUsMzU0LjlsLTQuNS0xLjNsLTEuMSwyLjdsLTMuMy0wLjhsLTEuMywzLjhsMS4yLDNsNC4yLDEuOGwtMC4xLTMuN2wyLjEtMS41bDMuMSwyLjFsMS4zLTMuOUwxNjkyLjUsMzU0LjkgTDE2OTIuNSwzNTQuOXogTTE3MTYuOSwzMzUuNmwtMy42LTYuN2wxLjMtNi40bC0yLjgtNS4ybC04LjEtOC43bC00LjgsMS4ybDAuMiwzLjlsNS4xLDcuMWwxLDcuOWwtMS43LDIuNWwtNC41LDYuNWwtNS0zLjF2MTEuNSBsLTYuMy0xLjNsLTkuNiwxLjlsLTEuOSw0LjRsLTMuOSwzLjNsLTEuMSw0bC00LjMsMmw0LDQuM2w0LjEsMS45bDAuOSw1LjdsMy41LDIuNWwyLjUtMi43bC0wLjgtMTAuOGwtNy4zLTQuN2w2LjEtMC4xbDUtM2w4LjYtMS40IGwyLjQsNC44bDQuNiwyLjRsNC40LTcuM2w5LjEtMC40bDUuNC0zbDAuNi00LjZsLTIuNS0zLjJMMTcxNi45LDMzNS42TDE3MTYuOSwzMzUuNnogTTE3MDUuMSwyOTEuNGwtNS4zLTIuMWwtMTAuNC02LjRsMS45LDQuOCBsNC4zLDguNWwtNS4yLDAuNGwwLjYsNC43bDQuNiw2LjFoNS43bC0xLjYtNi44bDEwLjgsNC4ybDAuNC02LjFsNi40LTEuN2wtNi02LjlsLTEuNywyLjZMMTcwNS4xLDI5MS40TDE3MDUuMSwyOTEuNHpcIn0sSk86e2Q6XCJNMTE4Ni42LDM2Ny42bC0zLjEtNy43bC05LjYsNi43bC02LjMtMi41bC0wLjcsMmwwLjQsMy45bC0wLjYsMS45bDAuNCwyLjRsLTEuNywxMC4ybDAuMywwLjlsNi4xLDFsMi4xLTJsMS4xLTIuMyBsNC0wLjhsMC43LTIuMmwxLjctMWwtNi4xLTYuNGwxMC40LTMuMUwxMTg2LjYsMzY3LjZMMTE4Ni42LDM2Ny42elwifSxLWjp7ZDpcIk0xMzA4LjgsMjIzLjhsLTktMS4zbC0zLjEsMi41bC0xMC44LDIuMmwtMS43LDEuNWwtMTYuOCwyLjFsLTEuNCwyLjFsNSw0LjFsLTMuOSwxLjZsMS41LDEuN2wtMy42LDIuOWw5LjQsNC4yIGwtMC4yLDNsLTYuOS0wLjNsLTAuOCwxLjhsLTcuMy0zLjJsLTcuNiwwLjJsLTQuMywyLjVsLTYuNi0yLjRsLTExLjktNC4zbC03LjUsMC4ybC04LjEsNi42bDAuNyw0LjZsLTYtMy42bC0yLjEsNi44bDEuNywxLjIgbC0xLjcsNC43bDUuMyw0LjNsMy42LTAuMmw0LjIsNC4xbDAuMiwzLjJsMi44LDFsNC40LTEuM2w1LTIuN2w0LjcsMS41bDQuOS0wLjNsMS45LDMuOWwwLjYsNmwtNC42LTAuOWwtNCwxbDAuOSw0LjVsLTUtMC42bDAuNiwyIGwzLjIsMS42bDMuNyw1LjVsNi40LDIuMWwxLjUsMi4xbC0wLjcsMi42bDAuNywxLjVsMS44LTJsNS41LTEuM2wzLjgsMS43bDQuOSw0LjlsMi41LTAuM2wtNi4yLTIyLjhsMTEuOS0zLjZsMS4xLDAuNWw5LjEsNC41IGw0LjgsMi4zbDYuNSw1LjVsNS43LTAuOWw4LjYtMC41bDcuNSw0LjVsMS41LDYuMmwyLjUsMC4xbDIuNiw1bDYuNiwwLjJsMi4zLDNoMS45bDAuOS00LjVsNS40LTQuM2wyLjUtMS4ybDAuMy0yLjdsMy4xLTAuOCBsOS4xLDIuMWwtMC41LTMuNmwyLjUtMS4zbDguMSwyLjZsMS42LTAuN2w4LjYsMC4ybDcuOCwwLjZsMy4zLDIuMmwzLjUsMC45bC0xLjctMy41bDIuOS0xLjZsLTguNy0xMC43bDktMi40bDItMS40bC0xLTExLjFsMTAuNywyIGwxLjYtMi44bC0yLjUtNi4ybDMuOC0wLjZsMS44LTQuMmwtNC4zLTMuOGwtNiwwLjlsLTMuMy0yLjZsLTMuOS0xLjJsLTQuMS0zLjZsLTMuMi0xLjFsLTYuMiwxLjZsLTguMy0zLjZsLTEuMSwzLjNsLTE4LjEtMTUuNSBsLTguMy00LjdsMC44LTEuOWwtOS4xLDUuN2wtNC40LDAuNGwtMS4yLTMuM2wtNy0yLjFsLTQuMywxLjVMMTMwOC44LDIyMy44TDEzMDguOCwyMjMuOHpcIn0sS0U6e2Q6XCJNMTIxMS43LDU0Ny4yaC0zLjhsLTIuMy0yLjFsLTUuMSwyLjZsLTEuNiwyLjdsLTMuOC0wLjVsLTEuMi0wLjdsLTEuMywwLjFoLTEuOGwtNy4yLTUuNGgtMy45bC0yLTIuMXYtMy42IGwtMi45LTEuMWwtMy44LDQuMmwtMy40LDMuOGwyLjcsNC40bDAuNywzLjJsMi42LDcuM2wtMi4xLDQuN2wtMi43LDQuMmwtMS42LDIuNnYwLjNsMS40LDIuNGwtMC40LDQuN2wyMC4yLDEzbDAuNCwzLjdsOCw2LjMgbDIuMi0yLjFsMS4yLTQuMmwxLjgtMi42bDAuOS00LjVsMi4xLTAuNGwxLjQtMi43bDQtMi41bC0zLjMtNS4zbC0wLjItMjMuMkwxMjExLjcsNTQ3LjJMMTIxMS43LDU0Ny4yelwifSxLVzp7ZDpcIk0xMjM1LjYsMzgxLjRsLTMuNy0wLjVsLTMuMiw2LjFsNC45LDAuNmwxLjcsMy4xbDMuOC0wLjJsLTIuNC00LjhsMC4zLTEuNUwxMjM1LjYsMzgxLjRMMTIzNS42LDM4MS40elwifSxLRzp7ZDpcIk0xMzg3LjIsMzAyLjZsLTMuNS0wLjlsLTMuMy0yLjJsLTcuOC0wLjZsLTguNi0wLjJsLTEuNiwwLjdsLTguMS0yLjZsLTIuNSwxLjNsMC41LDMuNmwtOS4xLTIuMWwtMy4xLDAuOGwtMC4zLDIuNyBsMS44LDAuNmwtMy4xLDQuMWw0LjYsMi4zbDMuMi0xLjZsNy4xLDMuM2wtNS4yLDQuNWwtNC4xLTAuNmwtMS40LDJsLTUuOS0xLjFsMC42LDMuN2w1LjQtMC41bDcuMSwybDkuNS0wLjlsMS0xLjVsLTEuMS0xLjVsNC0zIGwzLjItMS4ybDUuNywwLjlsMC42LTRsNi40LTAuOGwxLTIuNGw2LjgtMy40TDEzODcuMiwzMDIuNkwxMzg3LjIsMzAyLjZ6XCJ9LExBOntkOlwiTTE1NzQuOCw0ODEuOGwwLjItNi40bC0yLTQuNWwtNC44LTQuNGwtNC4zLTUuNmwtNS43LTcuNWwtNy4zLTMuOGwxLjMtMi4zbDMuMy0xLjdsLTMtNS41bC02LjgtMC4xbC0zLjQtNS43IGwtNC01LjFsLTIuNywxbDEuOSw3LjJsLTIuOS0wLjFsLTAuNy0xLjVsLTQuMSw0LjFsLTAuOCwyLjRsMi42LDEuOWwwLjksMy44bDMuOCwwLjNsLTAuNCw2LjdsMSw1LjdsNS4zLTMuOGwxLjgsMS4ybDMuMi0wLjIgbDAuOC0yLjJsNC4zLDAuNGw0LjksNS4ybDEuMyw2LjNsNS4yLDUuNWwwLjUsNS40bC0xLjUsMi45bDQuOSwyLjRsMi00LjNMMTU3NC44LDQ4MS44TDE1NzQuOCw0ODEuOHpcIn0sTFY6e2Q6XCJNMTEwMi4xLDIxMC4xaC0zLjhsLTQuNC0yLjJsLTIuMS0wLjdsLTMuNywxbC0wLjIsNC42bC0zLjYsMC4xbC00LjQtNC41bC00LDIuMWwtMS43LDMuN2wwLjUsNC41bDUtMS45bDcuOSwwLjQgbDQuNC0wLjZsMC45LDEuM2wyLjUsMC40bDUsMi45bDIuNi0xbDQuNi0yLjNsLTIuMS0zLjZsLTEtMi44TDExMDIuMSwyMTAuMUwxMTAyLjEsMjEwLjF6XCJ9LExCOntkOlwiTTExNjcuOCwzNjAuNWwwLjktMy41bDIuNi0yLjRsLTEuMi0yLjVsLTIuNC0wLjNsLTAuMSwwLjJsLTIuMSw0LjVsLTEuMyw1LjJoMS44bDAuNC0xLjFMMTE2Ny44LDM2MC41IEwxMTY3LjgsMzYwLjV6XCJ9LExTOntkOlwiTTExMjguMSw3NjYuNWwxLjEtMmwzLjEtMWwxLjEtMi4xbDEuOS0zLjFsLTEuNy0xLjlsLTIuMy0ybC0yLjYsMS4zbC0zLjEsMi41bC0zLjIsNGwzLjcsNC45TDExMjguMSw3NjYuNSBMMTEyOC4xLDc2Ni41elwifSxMUjp7ZDpcIk05MjkuNCw1MjMuM2wtMS42LTAuMmwtMS4xLDIuNmwtMS42LTAuMWwtMS4xLTEuM2wwLjQtMi42bC0yLjMtMy45bC0xLjUsMC43bC0xLjIsMC4ybC0yLjYsM2wtMi42LDMuNGwtMC4zLDEuOSBsLTEuMywybDMuNyw0LjFsNC44LDMuNWw1LjEsNC44bDUuNywzLjFsMS41LTAuMWwwLjUtNS4ybDAuNS0wLjhsLTAuMi0yLjVsLTIuMy0yLjdsLTEuOC0wLjRsLTEuNi0xLjhsMS4yLTIuOGwtMC42LTMuMSBMOTI5LjQsNTIzLjNMOTI5LjQsNTIzLjN6XCJ9LExZOntkOlwiTTExMTEuOCwzNzEuNGwtMS41LTIuMWwtNS40LTAuOGwtMS44LTEuMWgtMmwtMi0yLjhsLTcuMy0xLjNsLTMuNiwwLjhsLTMuNywzbC0xLjUsMy4xbDEuNSw0LjhsLTIuNCwzbC0yLjUsMS42IGwtNS45LTMuMWwtNy43LTIuN2wtNC45LTEuMmwtMi44LTUuN2wtNy4yLTIuOGwtNC41LTEuMWwtMi4yLDAuNmwtNi40LTIuMmwtMC4xLDQuOWwtMi42LDEuOGwtMS41LDJsLTMuNywyLjVsMC43LDIuNmwtMC40LDIuNyBsLTIuNiwxLjRsMS45LDUuNmwwLjQsM2wtMC45LDUuMmwwLjUsMi45bC0wLjYsMy41bDAuNSw0bC0yLjEsMi42bDMuNCw0LjdsMC4yLDIuN2wyLDMuNmwyLjYtMS4ybDQuMywyLjlsMi41LDRsOC44LDIuOGwzLjEsMy41IGwzLjktMi40bDUuNC0zLjVsMjIuMywxMi4ybDIyLjQsMTIuMnYtMi43aDYuM2wtMC41LTEyLjdsLTEtMjMuNGwtMS4zLTIyLjdsLTItNS4xbDEuMi0zLjlsLTEuMS0yLjdMMTExMS44LDM3MS40TDExMTEuOCwzNzEuNHpcIn0sTEk6e2Q6XCJNMTAyNC40LDI3My42di0wLjJsMC4xLTAuMmwtMC4xLTAuMWwtMC4xLTAuMmwtMC4xLTAuMXYtMC4ybC0wLjEtMC4xdi0wLjJsLTAuMS0wLjFsLTAuMiwwLjZ2MC41bDAuMSwwLjJoMC4xIEwxMDI0LjQsMjczLjZMMTAyNC40LDI3My42elwifSxMVDp7ZDpcIk0xMTAwLjQsMjIxLjJsLTUtMi45bC0yLjUtMC40bC0wLjktMS4zbC00LjQsMC42bC03LjktMC40bC01LDEuOWwxLjcsNWw1LDEuMWwyLjIsMC45bC0wLjIsMS43bDAuNiwxLjVsMi41LDAuNiBsMS40LDEuOWg0LjZsNC44LTIuMmwwLjUtMy40bDMuNS0yTDExMDAuNCwyMjEuMkwxMTAwLjQsMjIxLjJ6XCJ9LExVOntkOlwiTTEwMDcsMjU4LjZsMC4yLTIuN2wtMS0xLjRsLTEuMywwLjJsLTAuNCwzLjVsMS4xLDAuNUwxMDA3LDI1OC42elwifSxNSzp7ZDpcIk0xMDk0LDMwNC44bC0yLjgtMmwtMi40LDAuMWwtMS43LDAuNGwtMS4xLDAuMmwtMi45LDFsLTAuMSwxLjJoLTAuN2wwLDBsLTAuNCwyLjFsMC45LDIuNmwyLjMsMS42bDMuMy0wLjZsMS45LTEuMyBsMi44LDAuMWwwLjctMS4xbDEtMC4yTDEwOTQsMzA0LjhMMTA5NCwzMDQuOHpcIn0sTUc6e2Q6XCJNMTI1NS43LDY1OC40bC0xLjEtNC4ybC0xLjQtMi43bC0xLjgtMi43bC0yLDIuOGwtMC4zLDMuOGwtMy4zLDQuNWwtMi4zLTAuOGwwLjYsMi43bC0xLjgsMy4ybC00LjgsMy45bC0zLjQsMy43IGgtMi40bC0yLjIsMS4ybC0zLjEsMS4zbC0yLjgsMC4ybC0xLDQuMWwtMi4yLDMuNWwwLjEsNS45bDAuOCw0bDEuMSwzbC0wLjgsNC4xbC0yLjksNC44bC0wLjIsMi4xbC0yLjYsMS4xbC0xLjMsNC42bDAuMiw0LjZsMS42LDUgbC0wLjEsNS43bDEuMiwzLjNsNC4yLDIuM2wzLDEuN2w1LTIuN2w0LjYtMS41bDMuMS03LjRsMi44LTguOWw0LjMtMTJsMy4zLTguOGwyLjctNy40bDAuOC01LjRsMS42LTEuNWwwLjctMi43bC0wLjgtNC43bDEuMi0xLjkgbDEuNiwzLjhsMS4xLTEuOWwwLjgtMy4xbC0xLjMtMi45TDEyNTUuNyw2NTguNEwxMjU1LjcsNjU4LjR6XCJ9LE1XOntkOlwiTTExNjkuMiw2NjEuNWwwLjEtMi4zbC0xLjItMS45bDAuMS0yLjhsLTEuNS00LjdsMS43LTMuNWwtMC4xLTcuN2wtMS45LTQuMWwwLjItMC43bDAsMGwtMS4xLTEuN2wtNS40LTEuMmwyLjYsMi44IGwxLjIsNS40bC0xLDEuOGwtMS4yLDUuMWwwLjksNS4zbC0xLjgsMi4ybC0xLjksNS45bDIuOSwxLjdsMywzbDEuNi0wLjZsMi4xLDEuNmwwLjMsMi42bC0xLjMsMi45bDAuMiw0LjVsMy40LDRsMS45LTQuNWwyLjUtMS4zIGwtMC4xLTguMmwtMi4yLTQuNmwtMS45LTJoLTAuM3YwLjhsMS4xLDAuM2wxLDMuNGwtMC4yLDAuOGwtMS45LTIuNWwtMSwxLjZMMTE2OS4yLDY2MS41TDExNjkuMiw2NjEuNXpcIn0sTVk6e2Q6XCJNMTU1OC4xLDU1NC40bC0wLjUtMy44bC0wLjYtMi4xbDAuNS0yLjlsLTAuNS00LjNsLTIuNi00LjNsLTMuNS0zLjhsLTEuMy0wLjZsLTEuNywyLjZsLTMuNywwLjhsLTAuNi0zLjNsLTQuNy0yLjggbC0wLjksMS4xbDEuNCwyLjdsLTAuNCw0LjdsMi4xLDMuNGwxLDUuM2wzLjQsNC4zbDAuOCwzLjJsNi43LDVsNS40LDQuOGw0LTAuNWwwLjEtMi4xbC0yLjMtNS42TDE1NTguMSw1NTQuNHogTTE1NjAuOSw1NjMuMyBsMC4yLDAuMmwtMC4xLDAuMmwtMC45LDAuNGwtMC45LTAuNGwwLjMtMC42bDAuNi0wLjFsMC41LDAuMkwxNTYwLjksNTYzLjN6IE0xNjQ1LjIsNTQwLjJsLTMuOCwwLjRsMS4yLDMuMWwtNCwyLjFsLTUtMWgtNi40IGwtMS43LDcuMmwtMiwyLjJsLTIuNyw4LjlsLTQuNSwxLjNsLTUuNC0xLjhsLTIuNywwLjZsLTMuMiwzLjJsLTMuNi0wLjRsLTMuNiwxLjJsLTMuOS0zLjVsLTEtNC4zbDQuMSwyLjJsNC40LTEuMmwwLjktNS40bDIuNC0xLjIgbDYuNy0xLjRsMy44LTVsMi42LTRsMi43LDMuM2wxLjEtMi4ybDIuNywwLjJsMC4xLTQuMWwwLjEtMy4xbDQuMS00LjRsMi41LTVoMi4zbDMuMSwzLjJsMC40LDIuOGwzLjgsMS43bDQuOCwyTDE2NDUuMiw1NDAuMnpcIn0sTVY6e2Q6XCJNMTM4OS4xLDU1MS42TDEzODkuMSw1NTEuNmwwLjEtMC4zbC0wLjEtMC4xaC0wLjFsLTAuMSwwLjJ2MC4xdjAuMUgxMzg5LjF6IE0xMzg5LjQsNTQ1LjdsMC4xLTAuMnYtMC4xdi0wLjF2LTAuMSB2LTAuMWwtMC4xLDAuMWwtMC4xLDAuMnYwLjFsLTAuMSwwLjF2MC4xSDEzODkuNEwxMzg5LjQsNTQ1Ljd6XCJ9LE1MOntkOlwiTTEwMDAuMyw0NTAuM2wtNi4xLDAuNmwtMC4xLTRsLTIuNi0xLjFsLTMuNC0xLjhsLTEuMy0zbC0xOC42LTEzLjhsLTE4LjQtMTMuOWwtOC40LDAuMWwyLjQsMjcuNGwyLjQsMjcuNWwxLDAuOCBsLTEuMyw0LjRsLTIyLjMsMC4xbC0wLjksMS40bC0yLjEtMC40bC0zLjIsMS4zbC0zLjgtMS44bC0xLjgsMC4ybC0xLDMuN2wtMS45LDEuMmwwLjIsMy45bDEuMSwzLjdsMi4xLDEuOGwwLjQsMi40bC0wLjMsMmwwLjMsMi4zIGgwLjlsMS41LTAuOGwwLjksMC4ybDEuNSwxLjZsMi40LDAuNWwxLjYtMS40bDEuOC0wLjhsMS4zLTAuOWwxLjEsMC4ybDEuMywxLjRsMC42LDEuN2wyLjMsMi43bC0xLjIsMS42bC0wLjIsMi4xbDEuMi0wLjZsMC43LDAuNyBsLTAuMywxLjlsMS43LDEuOGwwLjctMC42bDEuNiwxbDQuMywwLjFsMS0xLjlsMSwwLjFsMS42LTAuN2wwLjksMi43bDEuMy0wLjhsMi4zLTAuOWwtMC40LTMuN2wxLjYtMi43bC0wLjItMi4ybDQuNS01LjJsMC44LTQuNCBsMS42LTEuNmwyLjcsMC45bDIuMy0xLjNsMC44LTEuNmw0LjMtMi45bDEuMS0ybDUuMi0yLjZsMy0wLjlsMS40LDEuMmgzLjZsMy42LTAuM2wyLTIuMmw3LjYtMC42bDQuOS0xbDAuNS0zLjlsMy00LjNMMTAwMC4zLDQ1MC4zIEwxMDAwLjMsNDUwLjN6XCJ9LE1UOntkOlwiTTEwNTMuNiwzNDRsLTAuMi0wLjJsLTAuNS0wLjVsLTAuNS0wLjFsMC4xLDAuNmwwLjQsMC40aDAuNUwxMDUzLjYsMzQ0TDEwNTMuNiwzNDR6IE0xMDUyLjIsMzQyLjhMMTA1Mi4yLDM0Mi44IHYtMC4ybC0wLjMtMC4xbC0wLjQsMC4xbDAuMSwwLjFsMC4zLDAuMkwxMDUyLjIsMzQyLjh6XCJ9LE1ROntkOlwiTTYzOCw0NzkuOWwtMC4yLTAuN2wtMC4xLTAuMmwtMC4yLTAuM2wwLjEtMC4zdi0wLjFoLTAuMmwtMC4zLTAuNWwtMC42LTAuM2gtMC4zbC0wLjIsMC4ydjAuM2wwLjMsMC45bDAuMiwwLjIgbDAuNSwwLjJsLTAuNCwwLjR2MC4xbDAuMSwwLjNoMC45bDAuMiwwLjNsMC4xLTAuMUw2MzgsNDc5LjlMNjM4LDQ3OS45elwifSxNUjp7ZDpcIk05NDkuOCw0MTMuM2wtMjAuMy0xNS41bC0wLjIsOS43bC0xNy45LTAuM2wtMC4yLDE2LjNMOTA2LDQyNGwtMS40LDMuM2wwLjksOS4ybC0yMS42LTAuMWwtMS4yLDIuMmwyLjgsMi43bDEuNCwzIGwtMC43LDMuMmwwLjYsMy4ybDAuNSw2LjNsLTAuOCw1LjlsLTEuNywzLjJsMC40LDMuNGwyLTJsMi43LDAuNWwyLjgtMS40aDMuMWwyLjYsMS44bDMuNywxLjdsMy4yLDQuN2wzLjYsNC40bDEuOS0xLjJsMS0zLjcgbDEuOC0wLjJsMy44LDEuOGwzLjItMS4zbDIuMSwwLjRsMC45LTEuNGwyMi4zLTAuMWwxLjMtNC40bC0xLTAuOGwtMi40LTI3LjVsLTIuNC0yNy40TDk0OS44LDQxMy4zTDk0OS44LDQxMy4zelwifSxNVTp7ZDpcIk0xMjk0LjcsNzAyLjVsMC4zLTAuM2wwLjItMC40bDAuMy0wLjNsMC4xLTAuN2wtMC4yLTAuOGwtMC40LTAuN2wtMC41LDAuMWwtMC4zLDAuNGwtMC4yLDAuNWwtMC41LDAuM2wtMC4xLDAuMyBsLTAuMiwwLjdsLTAuMSwwLjRsLTAuMiwwLjF2MC4ybDAuMywwLjNsMC44LDAuMUwxMjk0LjcsNzAyLjVMMTI5NC43LDcwMi41elwifSxZVDp7ZDpcIk0xMjI4LjcsNjU0Ljd2LTAuM2wwLjItMC41di0wLjFsMC4xLTAuNWwtMC4zLTAuM2gtMC4ybC0wLjItMC4zbC0wLjMsMC4zbDAuMywwLjVsLTAuMSwwLjNsLTAuMSwwLjRsMC4xLDAuNCBsMC4yLDAuMkwxMjI4LjcsNjU0LjdMMTIyOC43LDY1NC43elwifSxNWDp7ZDpcIk00NDQuNCw0MDcuOGwtMy42LTEuNGwtMy45LTJsLTAuOC0zbC0wLjItNC41bC0yLjQtMy42bC0xLTMuN2wtMS42LTQuNGwtMy4xLTIuNWwtNC40LDAuMWwtNC44LDVsLTQtMS45bC0yLjItMS45IGwtMC40LTMuNWwtMC44LTMuM2wtMi40LTIuOGwtMi4xLTJsLTEuMy0yLjJoLTkuM2wtMC44LDIuNkgzOTFoLTEwLjdsLTEwLjctNC40bC03LjEtMy4xbDEtMS4zbC03LDAuN2wtNi4zLDAuNWwwLjIsNS43bDAuNyw1LjEgbDAuNyw0LjFsMC44LDRsMi42LDEuOGwyLjksNC41bC0xLDIuOWwtMi43LDIuM2wtMi4xLTAuM2wtMC42LDAuNWwyLjMsMy43bDIuOSwxLjVsMSwxLjdsMC45LTAuOWwzLjEsMi45bDIuMSwybDAuMSwzLjRsLTEuMiw0LjcgbDIuNSwxLjZsMy4zLDMuMWwyLjksMy42bDAuNywzLjloMWwyLjctMi4zbDAuNC0xLjJsLTEuNS0yLjhsLTEuNi0yLjlsLTIuNi0wLjJsMC40LTMuNGwtMC45LTNsLTEtMi44bC0wLjUtNS45bC0yLjYtMy4ybC0wLjYtMi4zIGwtMS4yLTEuNnYtNC4xbC0xLDAuMWwtMC4xLTIuMmwtMC43LTAuNWwtMC40LTEuNGwtMi43LTQuNGwtMS4xLTIuNmwxLTQuOGwwLjEtM2wxLjgtMi42bDIuNCwxLjdsMS45LTAuMmwzLjEsMi41bC0wLjksMi40bDAuNCw0LjkgbDEuNSw0LjdsLTAuNCwybDEuNywzLjFsMi4zLDMuNGwyLjcsMC41bDAuMyw0LjRsMi40LDMuMWwyLjUsMS41bC0xLjgsNGwwLjcsMS41bDQuMSwyLjZsMS45LDRsNC41LDQuOWwzLjgsNi40bDEuMywzLjJ2Mi41IGwxLjQsMi45bC0wLjMsMi4ybC0xLjYsMS42bDAuMywxLjhsLTEuOSwwLjdsMC44LDMuMWwyLjIsNGw1LjMsMy42bDEuOSwyLjlsNS40LDJsMywwLjRsMS4yLDEuN2w0LjIsM2w1LjksM2w0LDAuOWw0LjgsMi45bDQsMS4yIGwzLjcsMS43bDIuOS0wLjdsNC44LTIuNGwzLjEtMC40bDQuNCwxLjZsMi42LDIuMWw1LjUsNi45bDAuNC0xLjlsMC44LTEuNWwtMC43LTEuMmwzLjMtNS4yaDcuMWwwLjQtMi4xbC0wLjgtMC40bC0wLjUtMS40IGwtMS45LTEuNWwtMS44LTIuMWgyLjZsMC40LTMuNmg1LjJsNS4xLDAuMWwwLjEtMWwwLjctMC4zbDAuOSwwLjhsMi41LTMuOWgxbDEuMi0wLjFsMS4yLDEuNmwyLTVsMS4yLTIuN2wtMC45LTEuMWwxLjgtMy45bDMuNS0zLjggbDAuNi0zLjFsLTEuMi0xLjNsLTMuNCwwLjVsLTQuOC0wLjJsLTYsMS41bC00LDEuN2wtMS4yLDEuOGwtMS4yLDUuNGwtMS44LDMuN2wtMy45LDIuNmwtMy42LDEuMWwtNC4zLDEuMWwtNC4zLDAuNmwtNS4xLDEuOCBsLTEuOS0yLjZsLTUuNi0xLjdsLTEuOC0zLjJsLTAuNy0zLjZsLTMtNC43bC0wLjQtNWwtMS4yLTMuMWwtMC41LTMuNGwxLjEtMy4xbDEuOC04LjZsMS44LTQuNWwzLjEtNS42TDQ0NC40LDQwNy44TDQ0NC40LDQwNy44elwifSxNRDp7ZDpcIk0xMTE4LjUsMjgzLjNsMS4yLTAuN2wwLjUtMi4xbDEuMS0ybC0wLjUtMS4xbDEtMC41bDAuNiwwLjlsMywwLjJsMS4yLTAuNWwtMS0wLjZsMC4yLTFsLTItMS41bC0xLjEtMi42bC0xLjktMS4xIHYtMi4xbC0yLjUtMS42bC0yLTAuM2wtMy45LTEuOWwtMy4yLDAuNmwtMS4xLDAuOWwxLjYsMC42bDEuOCwxLjlsMS45LDIuNmwzLjQsMy43bDAuNiwyLjdsLTAuMiwyLjdMMTExOC41LDI4My4zelwifSxNQzp7ZDpcIk0xMDEzLjUsMjk1LjJsMC0wLjNsMC41LTAuNmwwLjMsMC4yTDEwMTMuNSwyOTUuMnpcIn0sTU46e2Q6XCJNMTQ3My43LDI1Mi4xbC0zLjctNC42bC02LjYtMS41bC00LjgtMC44bC02LjktMi41bC0xLjMsNi40bDQsMy42bC0yLjQsNC4zbC03LjktMS42bC01LTAuMmwtNC43LTIuOWwtNS4xLTAuMSBsLTUuMy0xLjlsLTUuOSwyLjlsLTYuNiw1LjRsLTQuNywxbDMuMyw0LjRsNS43LDMuM2w4LjEsMi4zbDUuOCw1bDEuMyw3LjNsMywyLjdsNi40LDFsNy4yLDAuOWw3LjksMy44bDMuNCwwLjdsNC45LDUuN2w0LjcsMy42IGw1LjUtMC4xbDExLjIsMS4zbDYuNC0wLjhsNS41LDAuOWw5LjMsMy44bDYuMi0wLjFsMy4yLDJsNC40LTMuM2w3LjItMi4ybDcuNS0wLjJsNC45LTIuMmwxLjktMy4zbDIuNS0ybC0xLjktMi4xbC0yLjktMi4zbDAuNC00IGwzLjIsMC41bDUuOSwxLjNsMy4xLTMuM2w2LjMtMi40bDEuNC00LjFsMi40LTEuOGw2LjgtMC44bDQuMywwLjdsLTAuNy0yLjJsLTcuMi00LjNsLTUuMS0ybC0yLjUsMi4zbC01LjQtMWwtMi40LDAuOGwtMi43LTIuNiBsLTAuMy02LjJsLTAuNi00LjZsLTUuNSwwLjVsLTMuOS0yLjFsLTMuMy0wLjdsLTQuNSw0LjRsLTUuOCwxbC0zLjYsMS42bC02LjctMWgtNC41bC00LjktMy4xbC02LjUtM2wtNS40LTAuOGwtNS43LDAuOGwtMy45LDEuMSBMMTQ3My43LDI1Mi4xTDE0NzMuNywyNTIuMXpcIn0sTUU6e2Q6XCJNMTA4MCwyOTkuOGwwLjQtMC42bC0yLTEuMmwtMS44LTAuN2wtMC44LTAuOGwtMS41LTEuMWwtMC45LDAuNmwtMS41LDEuNGwtMC40LDMuNGwtMC41LDFsMCwwbDIuMywxLjJsMS42LDIuMSBsMS4xLDAuNGwwLDBsLTAuNS0xLjlsMi0zLjFsMC40LDEuMmwxLjMtMC41TDEwODAsMjk5Ljh6XCJ9LE1TOntkOlwiTTYzMS44LDQ2NS43bC0wLjEtMC41aC0wLjFsLTAuMiwwLjR2MC4zbDAuMywwLjFMNjMxLjgsNDY1Ljd6XCJ9LE1BOntkOlwiTTk2NS4yLDM0OC40bC0yLjMtMC4xbC01LjUtMS40bC01LDAuNGwtMy4xLTIuN2gtMy45bC0xLjgsMy45bC0zLjcsNi43bC00LDIuNmwtNS40LDIuOUw5MjcsMzY1bC0wLjksMy40bC0yLjEsNS40IGwxLjEsNy45bC00LjcsNS4zbC0yLjcsMS43bC00LjQsNC40bC01LjEsMC43bC0yLjgsMi40bC0wLjEsMC4xbC0zLjYsNi41bC0zLjcsMi4zbC0yLjEsNGwtMC4yLDMuM2wtMS42LDMuOGwtMS45LDFsLTMuMSw0bC0yLDQuNSBsMC4zLDIuMmwtMS45LDMuM2wtMi4yLDEuN2wtMC4zLDNoMC4xbDEyLjQtMC41bDAuNy0yLjNsMi4zLTIuOWwyLTguOGw3LjgtNi44bDIuOC04LjFsMS43LTAuNGwxLjktNWw0LjYtMC43bDEuOSwwLjloMi41bDEuOC0xLjUgbDMuNC0wLjJsLTAuMS0zLjRsMCwwaDAuOGwwLjEtNy41bDguOS00LjdsNS40LTFsNC40LTEuN2wyLjEtMy4ybDYuMy0yLjVsMC4zLTQuN2wzLjEtMC41bDIuNS0yLjRsNy0xbDEtMi41bC0xLjQtMS40bC0xLjgtNi43IGwtMC4zLTMuOUw5NjUuMiwzNDguNEw5NjUuMiwzNDguNHpcIn0sTVo6e2Q6XCJNMTIwMyw2NDAuN2wtMC44LTIuOWwwLDBsMCwwbC00LjYsMy43bC02LjIsMi41bC0zLjMtMC4xbC0yLjEsMS45bC0zLjksMC4xbC0xLjQsMC44bC02LjctMS44bC0yLjEsMC4zbC0xLjYsNiBsMC43LDcuM2gwLjNsMS45LDJsMi4yLDQuNmwwLjEsOC4ybC0yLjUsMS4zbC0xLjksNC41bC0zLjQtNGwtMC4yLTQuNWwxLjMtMi45bC0wLjMtMi42bC0yLjEtMS42bC0xLjYsMC42bC0zLTNsLTE3LjEsNS4ybDAuMyw0LjUgbDAuMywyLjRsNC42LTAuMWwyLjYsMS4zbDEuMSwxLjZsMi42LDAuNWwyLjgsMmwtMC4zLDguMWwtMS4zLDQuNGwtMC41LDQuN2wwLjgsMS45bC0wLjgsMy43bC0wLjksMC42bC0xLjYsNC42bC02LjIsNy4ybDIuMiw5IGwxLjEsNC41bC0xLjQsNy4xbDAuNCwyLjNsMC42LDIuOWwwLjMsMi44aDQuMWwwLjctMy4zbC0xLjQtMC41bC0wLjMtMi42bDIuNi0yLjRsNi44LTMuNGw0LjYtMi4ybDIuNS0yLjNsMC45LTIuNmwtMS4yLTEuMWwxLjEtMyBsMC41LTYuMmwtMSwwLjN2LTEuOWwtMC44LTMuN2wtMi40LTQuOGwwLjctNC42bDIuMy0xLjRsNC4xLTQuNmwyLjItMS4xbDYuNy02LjhsNi40LTMuMWw1LjItMi41bDMuNy0zLjlsMi40LTQuNGwxLjktNC42bC0wLjktMy4xIGwwLjItOS45bC0wLjQtNS42TDEyMDMsNjQwLjdMMTIwMyw2NDAuN3pcIn0sTU06e2Q6XCJNMTUzMy45LDQzNS44bC0wLjYtMi42bC0zLjgsMS44bC0yLjUtMS4ybC00LjUtMi40bDAuOC01LjJsLTMuNy0xLjNsLTIuMy01LjhsLTUuNiwxbC0wLjctNy41bDQuMS01LjNsLTAuOC01LjMgbC0xLjMtNC45bC0yLjctMS41bC0yLjctMy43bC0zLDAuNGwwLjksMi40bC0xLjYsMS4ybDEuMywzLjlsLTQuMS0xLjFsLTYuMSw0LjRsMC45LDMuNmwtMi4xLDUuNGwwLjMsMy4xbC0xLjUsNS4ybC00LjYtMS40IGwwLjksNi42bC0wLjksMi4xbDAuOSwyLjdsLTIuNCwxLjVsMC41LDQuNmwtMi4xLTFsMS4xLDUuMWw0LjYsNS4ybDMuNCwwLjlsLTAuNCwyLjJsNS40LDcuNGwxLjksNS45bC0wLjksNy45bDMuNiwxLjVsMy4yLDAuNiBsNS44LTQuNmwzLjItMy4xbDMuMSw1LjJsMiw4LjFsMi42LDcuNmwyLjYsMy4zbDAuMiw2LjlsMi4yLDMuOGwtMS4zLDQuOGwwLjksNC44bDIuMi02LjZsMi42LTUuOWwtMi44LTUuOGwtMC4yLTNsLTEtMy41bC00LjItNS4xIGwtMS43LTMuMmwxLjctMS4xbDEuNC01LjZsLTIuOS00LjJsLTQuMS00LjZsLTMuNS01LjZsMi4yLTEuMWwxLjUtNi45bDMuOS0wLjNsMi44LTIuOGwzLTEuNGwwLjgtMi40TDE1MzMuOSw0MzUuOEwxNTMzLjksNDM1Ljh6XCJ9LE5BOntkOlwiTTExMDUuNCw2ODMuN2wtMTAuMywyLjVsLTEzLjQtMC45bC0zLjctM2wtMjIuNSwwLjNsLTAuOSwwLjRsLTMuMi0yLjlsLTMuNi0wLjFsLTMuMywxbC0yLjcsMS4ybDAuMiw0LjlsNC40LDYuMiBsMS4xLDRsMi44LDcuN2wyLjcsNS4ybDIuMSwyLjZsMC42LDMuNXY3LjZsMS42LDkuOGwxLjIsNC42bDEsNi4ybDEuOSw0LjdsMy45LDQuOGwyLjctMy4ybDIuMSwxLjhsMC44LDIuN2wyLjQsMC41bDMuMywxLjIgbDIuOS0wLjVsNS0zLjJsMS4xLTIzLjZsMC42LTE4LjVsNS40LTAuMmwwLjktMjIuN2w0LjEtMC4ybDguNi0yLjJsMiwyLjZsMy43LTIuNWgxLjZsMy4yLTEuNVY2ODRsLTIuMS0xLjRsLTMuNi0wLjRMMTEwNS40LDY4My43IEwxMTA1LjQsNjgzLjd6XCJ9LE5SOntkOlwiTTE5MTUsNTc1LjV2LTAuMmgtMC4xaC0wLjFsLTAuMSwwLjJsMC4xLDAuMWwwLjEsMC4xTDE5MTUsNTc1LjVMMTkxNSw1NzUuNXpcIn0sTlA6e2Q6XCJNMTQ1NS4yLDM5NC44bC02LjUtMC42bC02LjQtMS41bC01LTIuOGwtNC41LTEuMmwtMi41LTMuMWwtMy4yLTAuOWwtNi40LTQuMWwtNC43LTJsLTEuOSwxLjVsLTIuOCwyLjlsLTAuOSw1LjkgbDUuNywyLjVsNS44LDMuMWw3LjcsMy41bDcuNiwwLjlsMy44LDMuMmw0LjMsMC42bDYuOCwxLjVsNC42LTAuMWwwLjEtMi41bC0xLjUtNC4xTDE0NTUuMiwzOTQuOEwxNDU1LjIsMzk0Ljh6XCJ9LE5MOntkOlwiTTEwMDUuNSwyNDMuOWgyLjlsMS4xLTIuM2wxLTUuNmwtMS0ybC0zLjktMC4ybC02LjUsMi42bC0zLjksOC45bC0yLjUsMS43bDAsMGwzLjYsMC41bDQuNC0xLjNsMy4xLDIuN2wyLjgsMS40IEwxMDA1LjUsMjQzLjlMMTAwNS41LDI0My45elwifSxOQzp7ZDpcIk0xODk3LjMsNzE2LjF2LTAuM2wtMC40LTAuMmwtMC4yLDAuNXYwLjFsMC4yLDAuMWgwLjJMMTg5Ny4zLDcxNi4xTDE4OTcuMyw3MTYuMXogTTE5MDEuOSw3MDguNUwxOTAxLjksNzA4LjUgbC0wLjEtMC40bDAuMS0wLjJsLTAuNCwwLjJsLTAuNiwwLjJsMC4xLDAuOGwtMC4xLDAuNGwwLjMsMC4xbDAuMSwwLjNoMC4ybDAuNy0wLjJsMC4zLTEuMWgtMC40TDE5MDEuOSw3MDguNUwxOTAxLjksNzA4LjV6IE0xODk4LjksNzA2LjhsMC4zLTAuNWwwLjEtMC4ybC0wLjItMC43bC0wLjMtMC4zbDAuMy0xbC0wLjEtMC4ybC0wLjQtMC4ybC0wLjksMC4zbC0wLjEsMC4ybDAuNSwwLjFsMC4yLDAuMmwtMC41LDAuN2wtMC41LDAuMSBsMC4xLDAuNWwwLjIsMC40bDAuNywwLjJsMC4zLDAuNEgxODk4Ljl6IE0xODk1LDcwMy45bDAuMy0wLjNsMC4zLTAuNGwtMC4xLTAuMXYtMC4zbDAuMi0wLjRsMC4zLTAuMWwtMC4yLTAuMmwtMC4yLTAuMXYwLjMgbC0wLjMsMC43bC0wLjEsMC4zbC0wLjUsMC42SDE4OTVMMTg5NSw3MDMuOXogTTE4ODIuNyw3MDFsLTAuNi0wLjdsLTAuMSwwLjJsLTAuMSwwLjR2MC4zbDAuMywwLjJsMC4xLDAuMmwtMC4xLDAuNXYwLjRsMC42LDAuOSBsMC4xLDAuN2wwLjMsMC42bDAuNSwwLjVsMC40LDAuNWwwLjgsMS40bDAuMiwwLjVsMC40LDAuM2wxLDEuMmwwLjQsMC40bDAuNCwwLjJsMC45LDAuN2wwLjYsMC4zbDAuMywwLjVsMC42LDAuM2wwLjgsMC40bDAuMSwwLjIgdjAuM2wwLjEsMC4zbDAuNSwwLjRsMC42LDAuM2wwLjEsMC4ybDAuMSwwLjJsMC4zLTAuMWwwLjMsMC4xbDAuOSwwLjdsMC40LTAuMWgwLjNsMC41LTAuMmwwLjMtMC40bC0wLjEtMS4xbC0wLjUtMC41bC0wLjctMC40IGwtMC40LTAuNWwtMC40LTAuNWwtMC44LTFsLTEuMS0xbC0wLjUtMC4ybC0wLjMtMC40bC0wLjMtMC4xbC0wLjItMC4zbC0wLjUtMC4zbC0wLjMtMC42bC0wLjYtMC42bC0wLjEtMC4zbDAuMS0wLjNsLTAuMS0wLjMgbC0wLjQtMC4zbC0wLjItMC41bC0wLjItMC4zbC0wLjQtMC4ybC0wLjctMC40bC0xLjYtMS45bC0wLjctMC42bC0wLjcsMC4yTDE4ODIuNyw3MDFMMTg4Mi43LDcwMXogTTE4NjAuNyw2OTVsMC4yLTAuNGwwLjEtMC44IGwtMC4yLDAuNGwtMC4yLDFMMTg2MC43LDY5NXpcIn0sTlo6e2Q6XCJNMTg2OC42LDgzMi44bDAuOS0yLjZsLTUuOCwyLjlsLTMuNCwzLjRsLTMuMiwxLjZsLTUuOSw0LjZsLTUuNiwzLjJsLTcsMy4ybC01LjUsMi40bC00LjMsMS4xbC0xMS4zLDYuMWwtNi40LDQuNiBsLTEuMSwyLjNsNS4xLDAuNGwxLjUsMi4xbDQuNSwwLjFsNC0xLjhsNi4zLTIuOGw4LjEtNi4ybDQuNy00LjFsNi4yLTIuM2w0LTAuMWwwLjYtMi45bDQuNi0yLjVsNy00LjVsNC4yLTIuOWwyLjEtMi42bDAuNS0yLjYgbC01LjYsMi41TDE4NjguNiw4MzIuOEwxODY4LjYsODMyLjh6IE0xODk3LjQsODAyLjNsMS45LTUuN2wtMy4xLTEuN2wtMC44LTMuNmwtMi4zLDAuNWwtMC40LDQuNmwwLjgsNS43bDAuOSwyLjdsLTAuOSwxLjEgbC0wLjYsNC40bC0yLjQsNC4xbC00LjIsNWwtNS4zLDIuMmwtMS43LDIuNGwzLjcsMi41bC0wLjgsMy41bC02LjksNS4xbDEuNCwwLjlsLTAuNCwxLjZsNS45LTIuNWw1LjktNC4ybDQuNS0zLjRsMS42LTEuMmwxLjUtMi43IGwyLjgtMmwzLjgsMC4ybDQuMi0zLjhsNS4xLTUuN2wtMi4xLTAuOGwtNC42LDIuNWwtMy4yLTAuNWwtMi45LTIuMWwyLjMtNC45bC0xLjItMS44bC0yLjksNC40TDE4OTcuNCw4MDIuM0wxODk3LjQsODAyLjN6XCJ9LE5JOntkOlwiTTUxNC4xLDQ3Ni44bC0xLjktMC4ybC0wLjksMC45bC0yLDAuOGgtMS40bC0xLjMsMC44bC0xLjEtMC4zbC0wLjktMC45bC0wLjYsMC4ybC0wLjgsMS41bC0wLjUtMC4xbC0wLjMsMS4zIGwtMi4xLDEuOGwtMS4xLDAuN2wtMC42LDAuOGwtMS41LTEuM2wtMS40LDEuN2gtMS4ybC0xLjMsMC4ybC0wLjIsMy4xaC0wLjhsLTAuOCwxLjVsLTEuOCwwLjNsLTAuNCwwLjRsLTAuOS0xbC0wLjcsMWwyLjYsMi45IGwyLjIsMmwxLDIuMWwyLjUsMi42bDEuOCwybDAuOS0wLjhsMy41LDEuN2wxLjQtMC44bDEuNywwLjVsMC44LDEuM2wxLjcsMC40bDEuNC0xLjNsLTAuOC0xLjFsLTAuMS0xLjdsMS4yLTEuNmwtMC4yLTEuN2wwLjctMi43IGwwLjktMC43bDAuMS0yLjhsLTAuMi0xLjdsMC40LTIuOGwwLjktMi41bDEuNC0yLjJsLTAuMy0yLjNsMC40LTEuNEw1MTQuMSw0NzYuOEw1MTQuMSw0NzYuOHpcIn0sTkU6e2Q6XCJNMTA1MS4zLDQyNS42bC04LjgtMi44bC0xOC42LDEyLjJsLTE1LjgsMTIuNWwtNy44LDIuOGwwLjEsMTQuNmwtMyw0LjNsLTAuNSwzLjlsLTQuOSwxbC03LjYsMC42bC0yLDIuMmwtMy42LDAuMyBsLTAuNSwzLjFsMC44LDIuOWwzLjEsNC4xbDAuMiwzLjFsNi40LDEuNGwtMC4xLDQuNGwxLjktMS45aDJsNC4zLDMuN2wwLjMtNS43bDEuNi0yLjZsMC44LTMuNmwxLjQtMS40bDYtMC44bDUuNiwyLjRsMi4xLDIuNCBsMi45LDAuMWwyLjYtMS41bDYuOCwzLjNsMi44LTAuMmwzLjMtMi43bDMuMywwLjJsMS42LTAuOWwzLDAuNGw0LjMsMS44bDQuMy0zLjVsMS4zLDAuMmwzLjksN2wxLTAuMmwwLjItMmwxLjYtMC40bDAuNS0yLjkgbC0zLjYtMC4ydi00LjFsLTIuNC0yLjNsMi4zLTguNGw2LjktNmwwLjItOC4zbDEuOC0xMi45bDEuMS0yLjdsLTIuMy0yLjJsLTAuMi0yLjFsLTItMS42bC0xLjYtOS45bC0zLjksMi40TDEwNTEuMyw0MjUuNiBMMTA1MS4zLDQyNS42elwifSxORzp7ZDpcIk0xMDU1LjgsNDkyLjdsLTEsMC4ybC0zLjktN2wtMS4zLTAuMmwtNC4zLDMuNWwtNC4zLTEuOGwtMy0wLjRsLTEuNiwwLjlsLTMuMy0wLjJsLTMuMywyLjdsLTIuOCwwLjJsLTYuOC0zLjMgbC0yLjYsMS41bC0yLjktMC4xbC0yLjEtMi40bC01LjYtMi40bC02LDAuOGwtMS40LDEuNGwtMC44LDMuNmwtMS42LDIuNmwtMC4zLDUuN2wtMC4yLDIuMWwxLjIsMy44bC0xLjEsMi41bDAuNiwxLjdsLTIuNyw0IEw5OTMsNTE0bC0xLDRsMC4xLDQuMWwtMC4zLDEwLjJoNC45aDQuM2wzLjksNC4ybDEuOSw0LjZsMywzLjlsNC41LDAuMmwyLjItMS40bDIuMSwwLjNsNS44LTIuM2wxLjQtNC41bDIuNy02LjFsMS42LTAuMWwzLjMtMy43IGwyLjEtMC4xbDMuMiwyLjZsMy45LTIuMmwwLjUtMi42bDEuMi0yLjZsMC44LTMuMmwzLTIuNmwxLjEtNC41bDEuMi0xLjRsMC43LTMuM2wxLjUtNGw0LjYtNWwwLjMtMi4xbDAuNi0xLjFMMTA1NS44LDQ5Mi43IEwxMDU1LjgsNDkyLjd6XCJ9LEtQOntkOlwiTTE2NDQuNywzMDIuM0wxNjQ0LjcsMzAyLjNsLTUuNS0zLjZsMC4xLDMuNWwtNi4zLDIuNmwyLjcsMy4zbC00LjYtMC4ybC0zLjYtMmwtMSw0LjRsLTMuOCwzLjRsLTIuMSw0bDMuMywxLjcgbDMuNCwwLjdsMC44LDFsMC40LDMuNWwxLjEsMS4ybC0wLjksMC43bC0wLjEsMi45bDEuOSwxbDEuNiwwLjZsMC44LDEuMmwxLjMtMC41di0xLjNsMy4xLDEuM2wwLjEtMC42bDIuNCwwLjJsMC43LTIuOWwzLjUtMC4zIGwyLjEtMC40bC0wLjEtMS42bC00LjMtMi44bC0yLjYtMWwwLjItMC43bC0xLjItMi44bDEuMy0xLjdsMi45LTFsMS0xLjlsMC4zLTEuMWwxLjktMS40bC0yLjgtNC41bDAuMy0yLjFsMC45LTJsMi4yLDAuM2wwLDBsMCwwIGwwLDBMMTY0NC43LDMwMi4zTDE2NDQuNywzMDIuM3pcIn0sTk86e2Q6XCJNMTA4OC44LDEzMy4xbC02LjksMS4xbC03LjMtMC4zbC01LjEsNC40bC02LjctMC4zbC04LjUsMi4zbC0xMC4xLDYuOGwtNi40LDRsLTguOCwxMC43bC03LjEsNy44bC04LjEsNS44IGwtMTEuMiw0LjhsLTMuOSwzLjZsMS45LDEzLjRsMS45LDYuM2w2LjQsM2w2LTEuNGw4LjUtNi44bDMuMywzLjZsMS43LTMuM2wzLjQtNGwwLjktNi45bC0zLjEtMi45bC0xLTcuNmwyLjMtNS4zbDQuMywwLjFsMS4zLTIuMiBsLTEuOC0xLjlsNS43LTcuOWwzLjQtNi4xbDIuMi0zLjlsNCwwLjFsMC42LTMuMWw3LjksMC45di0zLjVsMi41LTAuM2wyLjEtMS40bDUuMSwyLjlsNS4zLTAuM2w0LjcsMS4zbDMuNC0yLjRsMS4xLTMuOWw1LjgtMS44IGw1LjcsMi4xbC0wLjgsMy44bDMuMi0wLjVsNi40LTIuMmwwLDBsLTUuNC0zLjNsNC44LTEuNEwxMDg4LjgsMTMzLjFMMTA4OC44LDEzMy4xeiBNMTA2Ni4yLDk5LjhsLTUuNi0xbC0xLjktMS43bC03LjIsMC45bDIuNiwxLjUgbC0yLjIsMS4ybDYuNywxLjFMMTA2Ni4yLDk5Ljh6IE0xMDQwLjgsOTEuNWwtNC44LTEuNmwtNS4xLDAuMmwtMSwxLjVoLTVsLTIuMi0xLjVsLTkuMywxLjZsMy4yLDMuNWw3LjYsMy44bDUuNywxLjRsLTMsMS43IGw4LjQsMi45bDQuNC0wLjJsMC45LTMuOWwzLTAuOWwxLjItMy40bDguNS0xLjhDMTA1My4zLDk0LjgsMTA0MC44LDkxLjUsMTA0MC44LDkxLjV6IE0xMDY1LDg4LjRsLTkuMS0xbC0zLjIsMS4ybC01LjMtMWwtMTAuNCwxLjIgbDQuMywyaDUuMWwwLjksMS4zbDEwLjYsMC43bDEwLjEtMC41bDQuMy0yLjRDMTA3Mi4zLDg5LjksMTA2NSw4OC40LDEwNjUsODguNHpcIn0sT006e2Q6XCJNMTMwMSw0MzcuOGwyLjEtMmwwLjgtMS44bDEuNi0zLjhsLTAuMS0xLjRsLTIuMS0wLjhsLTEuNi0yLjFsLTIuOS0zLjdsLTMuMy0xLjFsLTQuMS0wLjlsLTMuMy0yLjNsLTIuOS00LjNoLTIuOCBsLTAuMSw0LjJsMS4xLDAuOGwtMi40LDEuM2wwLjMsMi42bC0xLjQsMi42bDAuMSwyLjZsMi45LDQuNWwtMi42LDEyLjdsLTE2LjEsNi40bDUuMiwxMC41bDIuMSw0LjRsMi41LTAuM2wzLjYtMi4ybDMuMSwwLjYgbDIuNS0xLjhsLTAuMi0yLjVsMi4xLTEuNmgzLjRsMS4yLTEuM2wwLjItMy4xbDMuMy0yLjRoMi42bDAuNC0wLjhsLTEtNC4ybDAuNi0zLjJsMS0xLjVsMi41LDAuM0wxMzAxLDQzNy44TDEzMDEsNDM3Ljh6IE0xMjg0LjQsNDA3LjRsMC4yLTIuNmwtMC43LTAuNmwtMS4zLDIuMmwxLjMsMi4yTDEyODQuNCw0MDcuNHpcIn0sUEs6e2Q6XCJNMTM4OC4zLDM0Ni4zbC05LjQtMi42bC0yLjktNWwtNC43LTNsLTIuOCwwLjdsLTIuNCwxLjJsLTUuOCwwLjhsLTUuMywxLjNsLTIuNCwyLjhsMS45LDIuOGwxLjQsMy4ybC0yLDIuNyBsMC44LDIuNWwtMC45LDIuM2wtNS4xLTAuMmwzLDQuMmwtMywxLjZsLTEuNSwzLjhsMS4xLDMuOGwtMS43LDEuOGwtMi4xLTAuNmwtNCwwLjlsLTAuMiwxLjdoLTRsLTIuMywzLjZsMC44LDUuNGwtNi42LDIuNiBsLTMuOC0wLjVsLTAuOSwxLjRsLTMuMy0wLjhsLTUuMywwLjlsLTkuNi0zLjJsMy4yLDMuM2wyLjgsMy45bDUuNiwyLjdsMSw1LjdsMi43LDFsMC45LDIuOWwtNy40LDMuM2wtMS4yLDcuNGw3LjYtMC45bDguOS0wLjEgbDkuOS0xLjJsNC45LDQuOGwyLjEsNC42bDQuMiwxLjZsMy4yLTQuMmgxMmwtMS44LTUuNWwtMy41LTMuMmwtMS4zLTQuOWwtNC0yLjlsNC45LTYuNmw2LjQsMC41bDQuNS02LjdsMi4xLTYuNWwzLjktNi4zbC0xLTQuNSBsMy43LTMuN2wtNS0zLjFsLTIuOS00LjNsLTMuMi01LjZsMS45LTIuOGw4LjUsMS42bDUuNy0xTDEzODguMywzNDYuM0wxMzg4LjMsMzQ2LjN6XCJ9LFBTOntkOlwiTTExNjYuOSwzNjYuMWwtMi0wLjlsLTAuNyw0LjNsMS40LDAuN2wtMS4yLDAuOGwtMC4xLDEuN2wyLjQtMC44bDAuNi0xLjlMMTE2Ni45LDM2Ni4xTDExNjYuOSwzNjYuMXpcIn0sUEE6e2Q6XCJNNTQzLjUsNTE3bC0yLTEuOGwtMS43LTEuOWwtMi41LTEuMWwtMy4xLTAuMmwwLjMtMC42bC0zLjEtMC40bC0yLDEuOWwtMy41LDEuM2wtMi41LDEuNmwtMi43LDAuNWwtMS41LTEuNiBsLTAuNSwwLjVsLTIuMy0wLjNsMC4yLTEuM2wtMS45LTIuM2wtMi4yLDAuNmwtMC4xLDIuNWwxLjEsMWwtMC44LDAuN2wwLjEsMS4ybC0wLjUsMS4zbC0wLjQsMS4ybDAuNiwxbDAuMy0xLjRoMi40bDEuNCwwLjcgbDIuMywwLjVsMSwyLjVsMS44LDAuNGwwLjgtMS4xbDAuOCwzLjhsMi42LTAuM2wwLjktMC45bDEuNS0wLjlsLTIuNS0zLjRsMC42LTEuM2wxLjMtMC4zbDIuMy0xLjZsMS4yLTIuMmwyLjUtMC40bDIuNywxLjhsMSwyLjEgbDEuNCwwLjRsLTEuNSwxLjdsMSwzLjVsMS44LDEuOGwwLjktMy4xbDEuOCwwLjVsMS4xLTEuOWwtMS4xLTMuOEw1NDMuNSw1MTd6XCJ9LFBHOntkOlwiTTE4NTAuNyw2MTUuNmwwLjktMS44bC0yLjQtMi4ybC0yLjUtNGwtMS42LTEuNWwtMC41LTEuOWwtMC44LDAuN2wwLjksNC44bDIuMiw0bDIuMiwyLjVMMTg1MC43LDYxNS42IEwxODUwLjcsNjE1LjZ6IE0xODI5LjUsNjA3bDIuMS0zLjlsMC40LTMuNWwtMS4xLTFsLTMuNCwwLjFsMC40LDMuN2wtMy4zLDIuM2wtMS43LDIuMmwtMy4yLDAuNWwtMC40LTMuNGwtMC44LDAuMWwtMSwzLjFsLTMuMSwwLjUgbC01LTAuOWwtMC42LDEuOWwzLjEsMS44bDQuNSwxLjloMi45bDMtMS41bDMuMi0xLjZsMS0xLjhMMTgyOS41LDYwN0wxODI5LjUsNjA3eiBNMTgwMS43LDYxOS4ybC0wLjktNC4zbDUuMi0wLjdsLTEuMS0zLjNsLTkuMS00IGwtMC42LTMuN2wtMi45LTMuMmwtMy43LTMuM2wtMTAuMi0zLjZsLTkuNi00LjRsLTEsMjAuN2wtMS41LDIwLjhsNS43LDAuMmwzLjEsMS4xbDQuNi0yLjJsLTAuMy00LjdsMy42LTIuMWw0LjktMS44bDcsMi44bDIuNCw1LjYgbDIuOSwzLjVsMy45LDRsNS41LDFsNC44LDAuN2wxLjEsMS42bDMuOC0wLjRsMC44LTEuOGwtNS42LTIuN2wxLjgtMS4ybC00LjItMS4xbDAuNS0yLjhsLTMuMiwwLjJsLTMtNi44TDE4MDEuNyw2MTkuMiBMMTgwMS43LDYxOS4yeiBNMTgzNi40LDYwMC44bC0wLjUtMy4zbC0yLTIuMWwtMi4xLTIuNmwtMi4zLTEuNWwtMS45LTEuNGwtMi45LTEuOGwtMS42LDEuNWwzLjksMS45bDMuMSwyLjdsMi40LDIuMWwxLjIsMi40IGwwLjgsMy44TDE4MzYuNCw2MDAuOEwxODM2LjQsNjAwLjh6XCJ9LFBZOntkOlwiTTY1NS43LDcwMC41bC0wLjMtMS45bC01LjQtMy4zbC01LjEtMC4xbC05LjUsMS45bC0yLjEsNS42bDAuMiwzLjRsLTEuNSw3LjZsMTEuMiwxMC40bDQuNiwxbDcuMiw0LjdsNS45LDIuNSBsMS4xLDIuOGwtNC4yLDkuNmw1LjcsMS44bDYuMiwxbDQuMi0xLjFsNC4zLTQuOGwwLjMtNS43bDAuNy0zLjZsMC4zLTMuOGwtMC4zLTMuNWwtMi4xLTEuMmwtMiwxLjFsLTItMC4zbC0wLjktMi41bC0xLTUuOCBsLTEuMi0xLjlsLTMuOS0xLjdsLTIuMSwxLjJsLTYtMS4ybC0wLjQtOC42TDY1NS43LDcwMC41TDY1NS43LDcwMC41elwifSxQRTp7ZDpcIk01ODQuMyw1OTkuNWwtMi45LTMuNGwtMS43LTAuMWwzLjUtNi41bC00LjQtM2wtMy4zLDAuNmwtMi4xLTEuMWwtMywxLjdsLTQuMi0wLjhsLTMuNC02LjdsLTIuNy0xLjdsLTEuOC0zbC0zLjctMyBsLTEuNSwwLjZsMC44LDQuOWwtMS43LDQuMWwtNiw2LjdsLTYuNywyLjVsLTMuMyw1LjVsLTAuOSw0LjNsLTMuMSwyLjZsLTIuNS0zLjJsLTIuMy0wLjdsLTIuMywwLjVsLTAuMi0yLjNsMS41LTEuNWwtMC43LTIuNyBsLTQuNCw0bC0xLjYsNC41bDMsNi4xbC0xLjcsMi44bDQuMSwyLjZsNC41LDQuMWwyLDQuN2wyLjQsMi45bDYsMTIuN2w2LjIsMTEuN2w1LjQsOC40bC0wLjgsMS44bDIuOCw1LjNsNC42LDMuOWwxMC43LDYuOSBsMTEuNiw2LjRsMC43LDIuNmw1LjksMy43bDIuNy0xLjZsMS4yLTMuM2wyLjgtNi45bC0yLjgtNS4zbDEuMS0yLjFsLTEuMi0yLjRsMS45LTMuMmwtMC4zLTUuNGwtMC4xLTQuNWwxLjEtMi4xbC01LjUtMTAuM2wtMywxLjEgbC0yLjYtMC43bC0wLjItOS43bC00LjQsMy44bC00LjktMC4ybC0yLjMtMy40bC0zLjctMC4zbDEtMi44bC0zLjMtMy44TDU2Miw2MjBsMS41LTEuMWwtMC4xLTIuN2wzLjMtMS45bC0wLjctMy40bDEuMy0yLjJsMC40LTMgbDYuMi00LjNsNC42LTEuMmwwLjctMUw1ODQuMyw1OTkuNUw1ODQuMyw1OTkuNXpcIn0sUEg6e2Q6XCJNMTY4NC42LDUxOC42bC0wLjYtMi4zbC0wLjgtMy4ybC00LjgtM2wwLjgsNC45bC0zLjksMC4ybC0wLjcsMi44bC00LjIsMS43bC0yLjItMi44bC0yLjgsMi40bC0zLjQsMS43bC0xLjksNS40IGwxLjEsMS45bDMuOS0zLjZsMi43LDAuM2wxLjUtMi43bDMuOCwzbC0xLjUsMy4xbDEuOSw0LjZsNi44LDMuN2wxLjQtM2wtMi4xLTQuN2wyLjQtMy4ybDIuNSw2LjRsMS41LTUuOGwtMC42LTMuNUwxNjg0LjYsNTE4LjYgTDE2ODQuNiw1MTguNnogTTE2NzAuMSw1MDYuOHYtNi4xbC0zLjYsNi4xbDAuNS00LjJsLTMsMC4zbC0wLjMsNGwtMS4yLDEuOGwtMSwxLjdsMy44LDQuNGwxLjYtMS45bDEuNC00TDE2NzAuMSw1MDYuOCBMMTY3MC4xLDUwNi44eiBNMTY0MCw1MTIuOWwyLjYtNC40bDMuNC0zLjVsLTEuNS01LjJsLTIuNCw2LjNsLTIuOSw0LjRsLTMuOCw0bC0yLjQsNC40TDE2NDAsNTEyLjlMMTY0MCw1MTIuOXogTTE2NTcuNCw0OTYuNSBsMS4yLDNsLTAuMSwzLjNsMC41LDIuOWwzLjMtMS45bDIuNC0yLjdsLTAuMi0yLjZoLTMuNkwxNjU3LjQsNDk2LjVMMTY1Ny40LDQ5Ni41eiBNMTY3Ny40LDQ5NC44bC0xLjgtMi40bC01LjQtMC4xbDQsNC44bDAuMywyLjQgbC0zLjMtMC41bDEuMiwzLjlsMS43LDAuM2wwLjcsNC41bDIuNS0xLjRsLTEuNy00bC0wLjQtMi4xbDQuNSwxLjdMMTY3Ny40LDQ5NC44TDE2NzcuNCw0OTQuOHogTTE2NTQuNSw0ODlsLTIuMi0yLjNsLTQuOC0wLjIgbDMuNCw0LjhsMi44LDMuMkwxNjU0LjUsNDg5TDE2NTQuNSw0ODl6IE0xNjQ4LjEsNDU0LjRoLTMuM2wtMC45LDUuOGwxLjEsOS45bC0yLjYtMmwxLjIsNmwxLjIsMi44bDMuMywzLjdsMC40LTIuM2wxLjgsMS40IGwtMS41LDEuN2wwLjEsMi42bDIuOSwxLjRsNS0wLjlsNCwzLjhsMS4xLTIuNGwyLjUsMy40bDQuOCwzLjFsMC4yLTIuOWwtMi0xLjZsMC4xLTMuNGwtNy41LTMuNmwtMi4zLDAuOGwtMy4xLTAuN2wtMi01LjFsMC4xLTUuMSBsMy0yLjFsMC42LTUuM2wtMi43LTQuNmwwLjQtMi42bC0wLjctMS42bC0xLjUsMS42TDE2NDguMSw0NTQuNEwxNjQ4LjEsNDU0LjR6XCJ9LFBOOntkOlwiTTI3NC4yLDcyNy40di0wLjJsLTAuMS0wLjJsLTAuMi0wLjFsLTAuMSwwLjFsMC4xLDAuMmwwLjIsMC4ySDI3NC4yTDI3NC4yLDcyNy40elwifSxQTDp7ZDpcIk0xMDY5LjQsMjI4LjNsLTQuNi0wLjFsLTAuNS0xLjRsLTQuOC0xLjFsLTUuNywyLjFsLTcuMSwyLjhsLTMuMSwxLjdsMS40LDMuMWwtMS4yLDEuNmwyLDIuMmwxLjQsMy4zbC0wLjEsMi4xIGwyLjMsMy45bDIuNCwxLjlsMy43LDAuNmwtMC4xLDEuN2wyLjcsMS4ybDAuNi0xLjVsMy40LDAuNmwwLjcsMmwzLjYsMC4zbDIuNiwzLjFsMC4zLDAuNGwxLjktMC45bDIuNywyLjJsMi44LTEuM2wyLjQsMC42bDMuNC0wLjggbDQuOSwyLjNsMS4xLDAuNGwtMS42LTIuOGwzLjgtNS4xbDIuMy0wLjdsMC4zLTEuOGwtMy4xLTUuM2wtMC41LTIuN2wtMS45LTIuOWwyLjctMS4ybC0wLjMtMi40bC0xLjctMi4zbC0wLjYtMi43bC0xLjQtMS45IGwtMi41LTAuNmwtOC43LDAuMUwxMDY5LjQsMjI4LjNMMTA2OS40LDIyOC4zelwifSxQVDp7ZDpcIk05MzcuNiwzMzUuOWwtMC40LTIuMWwyLTIuNWwwLjgtMS43bC0xLjgtMS45bDEuNi00LjNsLTItMy44bDIuMi0wLjVsMC4zLTNsMC45LTAuOWwwLjItNC45bDIuNC0xLjdsLTEuMy0zLjEgbC0zLTAuMmwtMC45LDAuOGgtM2wtMS4yLTMuMWwtMi4xLDAuOWwtMS45LDEuNmwwLjEsMi4xbDAuOSwyLjJsMC4xLDIuN2wtMS4zLDMuOGwtMC40LDIuNWwtMi4yLDIuM2wtMC42LDQuMmwxLjIsMi40bDIuMywwLjYgbDAuNCw0bC0xLDUuMWwyLjgtMC43bDIuNywwLjlMOTM3LjYsMzM1LjlMOTM3LjYsMzM1Ljl6XCJ9LFBSOntkOlwiTTYwMC44LDQ1Ny4zdi0wLjFsMCwwaDAuMXYtMC4xbDAuMS0wLjFsMCwwdi0wLjFoLTAuMWwwLDBoLTAuM2gtMC4xdjAuMXYwLjFsMC4yLDAuMWwwLDBMNjAwLjgsNDU3LjNMNjAwLjgsNDU3LjMgTDYwMC44LDQ1Ny4zeiBNNjE0LjQsNDU3bDAuNy0wLjJ2LTAuMWwtMC40LTAuMWgtMC42bC0wLjUsMC4ybDAuMSwwLjJoMC4ySDYxNC40eiBNNjEwLjcsNDU0LjhsLTAuMS0wLjJoLTAuMmwtMy41LTAuMWwtMS4zLTAuMiBsLTAuMywwLjFsLTAuMywwLjFsLTAuMSwwLjRsLTAuMiwwLjJsLTAuMywwLjJsMC4xLDAuM2wwLjEsMC4ybDAuMiwwLjRsLTAuMSwwLjVsLTAuMiwxbDAuMywwLjJsMC43LTAuMWwwLjMsMC4xbDAuMywwLjFsMC40LTAuMSBsMC40LTAuMmwwLjksMC4xbDAuNS0wLjFsMC42LDAuM2wwLjQtMC4xbDAuMiwwLjFoMC4zaDAuNmwwLjktMC4ybDAuOC0wLjVsMC4zLTAuNWwwLjQtMC4zbDAuNi0wLjR2LTAuOWwtMC43LTAuMWwtMC42LTAuMyBsLTEuMS0wLjFoLTAuMWwwLjEsMC4yaC0wLjFMNjEwLjcsNDU0LjhMNjEwLjcsNDU0Ljh6XCJ9LFFBOntkOlwiTTEyNTgsNDE1LjVsMC44LTMuOGwtMC41LTMuN2wtMS45LTJsLTEuNCwwLjdsLTEuMSwzLjNsMC44LDQuN2wxLjgsMS4yTDEyNTgsNDE1LjVMMTI1OCw0MTUuNXpcIn0sUkU6e2Q6XCJNMTI4NCw3MDcuOWwwLjItMC40bDAuMS0wLjhsLTAuNC0wLjhsLTAuNC0wLjdsLTAuNC0wLjJsLTAuOC0wLjFsLTAuNywwLjNsLTAuNCwwLjZsLTAuMiwwLjNsMC40LDEuMWwwLjIsMC4zIGwxLjEsMC42aDAuNUwxMjg0LDcwNy45TDEyODQsNzA3Ljl6XCJ9LFJPOntkOlwiTTExMDguMSwyNjYuM2gtMi4xbC0xLDEuNWwtMy42LDAuNmwtMS42LDAuOWwtMi40LTEuNWgtMy4ybC0zLjItMC43bC0xLjksMS4zbC0yLjksMS4zbC0xLjksNC4ybC0yLjYsNC4zbC0zLjgsMS4xIGwyLjksMi41bDAuOCwxLjlsMy4yLDEuNWwwLjcsMi41bDMuMSwxLjhsMS40LTEuM2wxLjQsMC43bC0xLjEsMS4xbDEsMWwxLjgsMi42bDEuOS0wLjVsNCwxbDcuNSwwLjNsMi4zLTEuNmw1LjgtMS40bDQsMi4ybDMsMC43IGwwLjQtNy40bDEuNiwwLjVsMi4zLTEuM2wtMC40LTEuNmwtMi40LTEuMWwtMi4yLDFsLTIuNC0xLjFsLTEuMy0yLjhsMC4yLTIuN2wtMC42LTIuN2wtMy40LTMuN2wtMS45LTIuNmwtMS44LTEuOUwxMTA4LjEsMjY2LjMgTDExMDguMSwyNjYuM3pcIn0sUlU6e2Q6XCJNMTMzMi4zLDk1LjFsLTQuNS00bC0xMy42LTQuMWwtOS40LTIuMWwtNi4yLDAuOWwtNS4zLDIuOWw1LjgsMC44bDYuNiwzLjJsOCwxLjdsMTEuNSwxLjMgQzEzMjUuMiw5NS43LDEzMzIuMyw5NS4xLDEzMzIuMyw5NS4xeiBNMTE1My42LDg3LjhsMC45LTAuNmwtNS43LTAuOUwxMTQ2LDg3bC0xLjMsMWwtMS41LTEuMmwtNS4yLDAuMWwtNi4yLDAuOGw3LjcsMC4xbC0xLjEsMS4zIGw0LjQsMWwzLjYtMC43bDAuMS0wLjdsMi45LTAuM0MxMTQ5LjQsODguNCwxMTUzLjYsODcuOCwxMTUzLjYsODcuOHogTTEzNTQuMSw5Ny43bC0xLjUtMS44bC0xMi41LTIuNmwtMy0wLjNsLTIuMiwwLjVsMS4yLDYgQzEzMzYuMSw5OS41LDEzNTQuMSw5Ny43LDEzNTQuMSw5Ny43eiBNMTM2OS4zLDEwNGwtOS4yLTAuN2wzLjQtMS4ybC04LjItMS41bC02LjEsMS45bC0xLDJsMS41LDIuMWwtNi45LTAuMWwtNS4zLDIuNmwtNC4zLTEuMSBsLTkuMywwLjVsMC4zLDEuM2wtOS4yLDAuN2wtNC45LDIuNGwtNC4yLDAuMmwtMS4yLDMuM2w1LjUsMi42bC03LjcsMC43bC05LjUtMC4zbC01LjgsMS4xbDQuOCw1LjRsNi45LDQuM2wtOS42LTNsLTcuOSwwLjNsLTUuMSwyIGw0LjUsMy44bC00LjktMWwtMi4xLTVsLTQuMi0yLjhsLTEuOCwwLjFsMy42LDMuN2wtNC42LDMuNWw4LjEsNC4ybDAuNCw1LjRsMi45LDIuOWw0LjcsMC41bDAuNCwzLjVsNC40LDMuMWwtMS45LDIuNmwwLjUsMi43IGwtMy43LDEuNGwtMC41LDJsLTUuMy0wLjhsMy41LTcuOGwtMC41LTMuNmwtNi43LTMuM2wtMy44LTcuM2wtMy43LTMuN2wtMy42LTEuNmwwLjgtNC4ybC0yLjktMi45bC0xMS4zLTEuNGwtMi4xLDFsMC41LDQuNyBsLTQuMyw0LjdsMS4yLDEuN2w0LjcsNC4xbDAuMSwyLjZsNS4zLDAuNWwwLjgsMS4xbDUuOCwyLjlsLTEsMi44bC0xOC41LTYuMWwtNi42LTEuN2wtMTIuOC0xLjZsLTEuMiwxLjdsNS45LDMuMWwtMi43LDMuNiBsLTYuNC0zLjJsLTUsMi4ybC03LjYsMC4xbC0yLjEsMS45bC01LjMtMC42bDIuNS0zLjNsLTMuMi0wLjJsLTEyLjMsNC42bC03LjYsMi42bDAuNCwzLjVsLTYsMS4ybC00LTEuOWwtMS4yLTNsNS0wLjdsLTMuNi0zIGwtMTIuMi0xLjhsNC4zLDMuNGwtMC44LDMuMmw0LjcsMy4zbC0xLjEsMy44bC00LjYtMS45bC00LTAuM2wtOCw1LjRsNC4yLDQuMWwtMy4yLDEuNGwtMTEuNC0zLjVsLTIuMSwyLjFsMy4zLDIuNGwwLjIsMi43IGwtMy44LTEuNGwtNi0xLjdsLTEuOS01LjhsLTEtMi42bC04LTRsMi45LTAuN2wyMC4xLDQuMmw2LjQtMS41bDMuNy0yLjlsLTEuNi0zLjZsLTQtMi42bC0xNy42LTYuMWwtMTEuNi0xLjNsLTcuNi0zLjJsLTMuNiwxLjggbDAsMGwtNi40LDIuMmwtMy4yLDAuNWwwLjQsMy43bDcuMiwzLjdsLTIuOCw0LjFsNi40LDYuM2wtMS43LDQuOGw0LjksNC4xbC0wLjksMy43bDcuMywzLjlsLTAuOSwyLjlsLTMuMywzLjNsLTcuOSw3LjRsMCwwIGw1LjMsMi44bC00LjUsMy4ybDAsMGwwLjksMWwtMi42LDMuNGwyLjUsNS41bC0xLjYsMS45bDIuNCwxLjRsMSwyLjhsMi4xLDMuNmw1LjIsMS41bDEsMS40bDIuMy0wLjdsNC44LDEuNGwxLDIuOWwtMC42LDEuNiBsMy43LDMuOWwyLjIsMS4xbC0wLjEsMS4xbDMuNCwxLjFsMS43LDEuNmwtMS42LDEuM2wtMy45LTAuMmwtMC44LDAuNmwxLjUsMmwyLDMuOWwwLDBsMS44LDAuMmwxLTEuNGwxLjUsMC4zbDQuOC0wLjVsMy44LDMuNCBsLTAuOSwxLjNsMC43LDEuOWw0LDAuMmwyLjIsMi43bDAuMiwxLjJsNi42LDIuMmwzLjUtMWwzLjYsMi45bDIuOS0wLjFsNy42LDJsMC40LDEuOWwtMS4zLDMuMmwxLjgsMy40bC0wLjMsMi4xbC00LjcsMC41bC0yLjIsMS43IGwwLjQsMi44bDQuMi0xbDAuNCwxLjNsLTYuOCwyLjZsMy4yLDIuNGwtMy4yLDUuMmwtMy40LDFsNSwzLjZsNi4yLDIuNGw3LjQsNS4xbDAuNS0wLjdsNC41LDEuMWw3LjcsMWw3LjUsMi45bDEuMSwxLjJsMi45LTEgbDUuMSwxLjNsMi4xLDIuNWwzLjUsMS40bDEuNSwwLjJsNC4zLDMuOGwyLjQsMC40bDAuNS0xLjVsMi42LTIuNWwwLDBsLTcuMy03LjNsLTAuNC00LjFsLTUuOS01LjlsMy41LTYuM2w0LjYtMS4xbDEuNC0zLjdsLTIuOC0xIGwtMC4yLTMuMmwtNC4yLTQuMWwtMy42LDAuMmwtNS4zLTQuM2wxLjctNC43bC0xLjctMS4ybDIuMS02LjhsNiwzLjZsLTAuNy00LjZsOC4xLTYuNmw3LjUtMC4ybDExLjksNC4zbDYuNiwyLjRsNC4zLTIuNWw3LjYtMC4yIGw3LjMsMy4ybDAuOC0xLjhsNi45LDAuM2wwLjItM2wtOS40LTQuMmwzLjYtMi45bC0xLjUtMS43bDMuOS0xLjZsLTUtNC4xbDEuNC0yLjFsMTYuOC0yLjFsMS43LTEuNWwxMC44LTIuMmwzLjEtMi41bDksMS4zbDQuMyw2LjMgbDQuMy0xLjVsNywyLjFsMS4yLDMuM2w0LjQtMC40bDkuMS01LjdsLTAuOCwxLjlsOC4zLDQuN2wxOC4xLDE1LjVsMS4xLTMuM2w4LjMsMy42bDYuMi0xLjZsMy4yLDEuMWw0LjEsMy42bDMuOSwxLjJsMy4zLDIuNmw2LTAuOSBsNC4zLDMuOGwxLjctMC41bDQuNy0xbDYuNi01LjRsNS45LTIuOWw1LjMsMS45bDUuMSwwLjFsNC43LDIuOWw1LDAuMmw3LjksMS42bDIuNC00LjNsLTQtMy42bDEuMy02LjRsNi45LDIuNWw0LjgsMC44bDYuNiwxLjUgbDMuNyw0LjZsOC40LDIuNmwzLjktMS4xbDUuNy0wLjhsNS40LDAuOGw2LjUsM2w0LjksMy4xaDQuNWw2LjcsMWwzLjYtMS42bDUuOC0xbDQuNS00LjRsMy4zLDAuN2wzLjksMi4xbDUuNS0wLjVsNy4zLDIuM2w0LjQtMy45IGwtMS45LTIuN2wtMC4xLTYuNWwxLjItMmwtMi41LTMuM2wtMy43LTEuNWwxLjctM2w1LjEtMS4xbDYuMi0wLjJsOC41LDEuOGw1LjksMi4zbDcuNyw2LjFsMy44LDIuN2w0LjQsMy43bDYuMSw2LjFsOS45LDEuOSBsOC45LDQuNWw2LDUuOGg3LjVsMi42LTIuNWw2LjktMS44bDEuMyw1LjZsLTAuNCwyLjNsMi44LDYuOGwwLjYsNmwtNi44LTEuMWwtMi45LDIuMmw0LjcsNS4zbDMuOCw3LjNsLTIuNSwwLjFsMS45LDMuMWwwLDAgbDEuNCwxLjFsMCwwbDAsMGwwLDBsLTAuNC0ybDQtNC41bDUuMSwzbDMuMi0wLjFsNC40LTMuNmwxLTMuN2wyLjEtNy4xbDEuOS03LjJsLTEuMy00LjNsMS05bC01LjItOS45bC01LjUtNy4zbC0xLjMtNi4ybC00LjctNS4xIGwtMTIuNy02LjdsLTUuNi0wLjRsLTAuMywzbC01LjgtMS4zbC01LjctMy44bC04LTAuN2w0LjktMTQuMWwzLjUtMTEuNWwxMy4xLTEuOGwxNC45LDFsMi41LTIuOGw3LjksMC44bDQuMyw0LjNsNi40LTAuNmw4LjQtMS42IGwtNy43LTMuNXYtOS44bDkuMS0xLjlsMTIuMSw3LjFsMy42LTYuNGwtMy4yLTQuN2w0LjctMC41bDYuNSw4LjFsLTIuNCw0LjZsLTAuOCw2bDAuMyw3LjVsLTUuNywxLjNsMi44LDIuN2wtMC4xLDMuNmw2LjQsOC4zIGwxNiwxMy40bDEwLjUsOC44bDUuNyw0LjNsMS42LTUuN2wtNC41LTYuMmw1LjctMS41bC01LjQtNi45bDUtMy4xbC00LjctMi42bC0zLjQtNWw0LjEtMC4ybC05LTguNmwtNi43LTEuNGwtMi45LTIuNGwtMS4xLTUuNiBsLTMuMS0zLjlsNywwLjhsMS4zLTIuNWw0LjcsMi4ybDYuMS00LjZsMTEuNCw0bC0xLjctMi42bDItMy42bDEuNS00bDMuMS0wLjdsNi41LTQuM2w5LjgsMS4ybC0wLjktMS41bC0zLjgtMi4zbC00LjEtMS42bC05LjEtNC42IGwtOC4xLTNsNi4xLDAuNGwyLTIuNWwwLDBsLTMyLjktMjEuOWwtOS40LTIuM2wtMTUuNy0yLjZsLTcuOSwwLjNsLTE1LjItMS40bDEuOCwyLjNsOC41LDMuNGwtMi41LDEuOGwtMTQuMi00LjhsLTYuOCwwLjZsLTkuMi0xLjEgbC03LDAuMmwtMy45LDEuMWwtNy4yLTEuNmwtNS4xLTMuOGwtNi41LTIuMmwtOS4yLTAuOWwtMTQuNywxbC0xNi4xLTRsLTcuOC0zbC00MC4xLTMuNGwtMi4xLDIuMmw5LjMsNC44bC03LjUtMC43bC0xLDEuNWwtOS43LTEuNiBsLTUsMS40bC05LjMtMi40bDMsNS41bC04LjktMi4xbC0xMC00LjFsLTAuNC0yLjJsLTYtMy4zbC05LjgtMi42aC02LjFsLTkuMy0wLjlsNC43LDMuOWwtMTcuMi0wLjhsLTMuOS0yLjNsLTEzLjMtMC45bC01LjMsMC44IGwtMC4xLDEuM2wtNS44LTMuMmwtMi4zLDAuOWwtNy4yLTEuMmwtNS42LTAuN2wxLjEtMS41bDYuNi0yLjhsMi4zLTEuNWwtMi40LTIuNWwtNS41LTEuOWwtMTEuNS0yLjNsLTEwLjgtMC4xbC0xLjksMS4yTDEzNjkuMywxMDQgTDEzNjkuMywxMDR6IE0xMjA3LjEsMTM1LjZsLTkuOS00LjNsLTMuMS00LjNsMy4zLTQuOWwyLjgtNWw4LjYtNC43bDkuOC0yLjRsMTEuMy0yLjRsMS4zLTEuNWwtNC4yLTEuOWwtNi42LDAuNmwtNC45LDEuOCBsLTExLjcsMC45bC0xMC4xLDMuMWwtNi44LDIuN2wyLjUsMi4ybC02LjYsNC40bDMuOSwwLjdsLTUuNCw0LjNsMS42LDIuOGwtMy40LDEuMWwxLjksMi44bDcuOSwxLjRsMi4yLDIuM2wxMy40LDAuN0wxMjA3LjEsMTM1LjYgTDEyMDcuMSwxMzUuNnogTTE1MjEuMSwxMTAuOWwtMTcuOS0yLjZsLTEwLjItMC4ybC0zLjQsMC45bDMuNCwzLjRsMTIuNCwzLjJsNC41LTEuMmwxNC4yLDAuMiBDMTUyNC4xLDExNC42LDE1MjEuMSwxMTAuOSwxNTIxLjEsMTEwLjl6IE0xNTQ2LjMsMTEzLjJsLTExLjctMS4zbC04LjItMC43bDEuNywxLjZsMTAuMywybDYuOCwwLjRMMTU0Ni4zLDExMy4yTDE1NDYuMywxMTMuMnogTTE1MzMuOCwxMjIuN2wtMi41LTEuNGwtOC4zLTEuOWwtNC4xLDAuNWwtMC44LDJsMS4xLDAuMmw4LjgsMC42QzE1MjgsMTIyLjcsMTUzMy44LDEyMi43LDE1MzMuOCwxMjIuN3ogTTE2OTYuNCwxMzVsLTYtMy42IGwtMS40LDIuMmwzLjUsMS42TDE2OTYuNCwxMzV6IE0xMDg0LDIyOC45bC0wLjYtMS41bDAuMi0xLjdsLTIuMi0wLjlsLTUtMS4xbC02LjMsMmwtMC43LDIuNmw1LjksMC43TDEwODQsMjI4Ljl6IE0xNjczLjcsMjUwLjcgbC03LjItNi4ybC01LjEtNmwtNi44LTUuOGwtNC45LTRsLTEuMywwLjhsNC40LDIuOGwtMS45LDIuOGw2LjgsOC4zbDcuOCw2bDYuNCw4LjNsMi40LDQuNmw1LjUsNi44bDMuOCw2bDQuNiw1LjJsLTAuMS00LjhsNi41LDMuOCBsLTMtNC40bC05LjUtNi4zbC0zLjctOWw4LjksMkwxNjczLjcsMjUwLjdMMTY3My43LDI1MC43elwifSxSVzp7ZDpcIk0xMTQ3LjYsNTc5LjRsLTMuMywxLjlsLTEuNC0wLjZsLTEuNiwxLjhsLTAuMiwzLjhsLTAuOCwwLjRsLTAuNiwzLjVsMy41LDAuNWwxLjctMy42bDMsMC40bDAsMGwxLjYtMC44bDAuNC0zLjcgTDExNDcuNiw1NzkuNEwxMTQ3LjYsNTc5LjR6XCJ9LEtOOntkOlwiTTYyOS45LDQ2My4ydi0wLjNsLTAuMi0wLjJoLTAuM3YwLjVsMC4yLDAuMkw2MjkuOSw0NjMuMnogTTYyOS40LDQ2Mi41bC0wLjEtMC4ybC0wLjEtMC4xbC0wLjItMC40bC0wLjQtMC40IGwtMC4yLDAuMWwtMC4xLDAuMnYwLjFsMCwwbDAuMywwLjNsMC40LDAuMWwwLjIsMC40TDYyOS40LDQ2Mi41TDYyOS40LDQ2Mi41elwifSxMQzp7ZDpcIk02MzcuNCw0ODQuMmwwLjEtMS4ybC0wLjEtMC41bC0wLjIsMC4xbC0wLjMsMC40bC0wLjQsMC42bC0wLjEsMC4zdjAuNmwwLjYsMC40TDYzNy40LDQ4NC4yTDYzNy40LDQ4NC4yelwifSxWQzp7ZDpcIk02MzQuNSw0OTEuNEw2MzQuNSw0OTEuNHYtMC4xaDAuMXYtMC4xbDAsMHYtMC4xaC0wLjF2MC4xbDAsMHYwLjFoLTAuMUw2MzQuNSw0OTEuNEw2MzQuNSw0OTEuNEw2MzQuNSw0OTEuNCBMNjM0LjUsNDkxLjR6IE02MzUuMiw0ODkuNWwwLjEtMC4ybDAuMS0wLjFsMCwwbDAsMGwtMC4xLTAuMWwwLDB2MC4xbC0wLjIsMC4xbDAsMHYwLjFsMCwwdjAuMUg2MzVoLTAuMWwwLDBoMC4xbDAsMGwwLjEsMC4xbDAsMCBsMCwwbDAsMEw2MzUuMiw0ODkuNUw2MzUuMiw0ODkuNXogTTYzNS41LDQ4OC40bDAuMy0wLjJsMC4xLTAuNmwtMC4xLTAuNGgtMC4ybC0wLjMsMC4xbC0wLjIsMC4zbC0wLjEsMC41TDYzNS41LDQ4OC40TDYzNS41LDQ4OC40IEw2MzUuNSw0ODguNHpcIn0sU006e2Q6XCJNMTA0MC4zLDI5My41bC0wLjcsMC4xbC0wLjItMC45bDAuOS0wLjNMMTA0MC4zLDI5My41elwifSxTVDp7ZDpcIk0xMDE0LjEsNTcxLjRsMC41LTAuOHYtMC41bC0wLjMtMC41aC0wLjRsLTAuNSwwLjRsLTAuMywwLjR2MC4zbDAuMSwwLjdsMC4xLDAuM2wwLjMsMC4yTDEwMTQuMSw1NzEuNCBMMTAxNC4xLDU3MS40eiBNMTAxOC40LDU2Mi4ybDAuMi0wLjR2LTAuMmwtMC4xLTAuMWwtMC4xLTAuMWwtMC4yLDAuMWwtMC4zLDAuNWwwLjEsMC4ybDAuMiwwLjJMMTAxOC40LDU2Mi4yTDEwMTguNCw1NjIuMnpcIn0sU0E6e2Q6XCJNMTIyOC43LDM4N2wtMTAuMi0wLjVsLTE2LjctMTIuN2wtOC41LTQuNWwtNi43LTEuN2wtMC45LDFsLTEwLjQsMy4xbDYuMSw2LjRsLTEuNywxbC0wLjcsMi4ybC00LDAuOGwtMS4xLDIuMyBsLTIuMSwybC02LjEtMWwtMC41LDIuNXYyLjJsLTAuNiwzLjVoMi43bDMuMiw0LjRsMy43LDUuMWwyLjUsNC43bDEuNywxLjVsMS43LDMuM2wtMC4yLDEuNGwyLjEsMy43bDMsMS4zbDIuOCwyLjVsMy42LDd2My44IGwwLjksNC40bDQsNi4xbDIuNSwxbDQuMSw0LjRsMS45LDUuMmwzLjIsNS4zbDMsMi4zbDAuNiwyLjVsMS44LDEuOWwwLjksMi44bDIuMy0yLjFsLTAuNy0yLjdsMS4yLTMuMWwyLjQsMS43bDEuNS0wLjZsNi40LTAuMiBsMSwwLjdsNS40LDAuNmwyLjEtMC4zbDEuNiwyLjFsMi41LTFsMy41LTYuN2w1LTIuOWwxNS43LTIuNGwxNi4xLTYuNGwyLjYtMTIuN2wtMi45LTQuNWwtMSwxLjNsLTE2LjgtMy4ybC0yLjYtNi40bC0wLjQtMS41IGwtMS4yLTIuNGwtMS41LDAuNGwtMS44LTEuMmwtMS0xLjZsLTAuOS0yLjFsLTEuNy0xLjhsLTEtMi4xbDAuNC0yLjFsLTAuNi0yLjdsLTQtMi42bC0xLjItMi4zbC0yLjktMS40bC0yLjctNS41bC0zLjgsMC4yIGwtMS43LTMuMUwxMjI4LjcsMzg3TDEyMjguNywzODd6XCJ9LFNOOntkOlwiTTkwOC45LDQ3OS4ybC0zLjYtNC40bC0zLjItNC43bC0zLjctMS43bC0yLjYtMS44aC0zLjFsLTIuOCwxLjRsLTIuNy0wLjVsLTIsMmwtMS4zLDMuM2wtMi44LDQuNGwtMi41LDEuMmwyLjcsMi4zIGwyLjIsNWw2LjEtMC4ybDEuMy0xLjVsMS44LTAuMWwyLjEsMS41bDEuOCwwLjFsMS44LTEuMWwxLjEsMS44bC0yLjQsMS41bC0yLjQtMC4xbC0yLjQtMS40bC0yLjEsMS41aC0xbC0xLjQsMC45bC01LTAuMWwwLjgsNC45IGwzLTEuMWwxLjgsMC4ybDEuNS0wLjdsMTAuMywwLjNsMi43LDAuMWw0LDEuNWwxLjMtMC4xbDAuNC0wLjdsMywwLjVsMC44LTAuNGwwLjMtMmwtMC40LTIuNGwtMi4xLTEuOGwtMS4xLTMuN0w5MDguOSw0NzkuMiBMOTA4LjksNDc5LjJ6XCJ9LFJTOntkOlwiTTEwODQuOCwyODUuMmwtMy4yLTEuNWwtMC44LTEuOWwtMi45LTIuNWwtMy4yLTAuMmwtMy43LDEuNmwwLDBsMS41LDIuNGwxLjcsMS44bC0xLjcsMi4zbDAsMGgxLjhsLTEsMi43bDIuNywyLjMgbC0wLjUsMi45bC0xLjIsMC4zbDEuNSwxLjFsMC44LDAuOGwxLjgsMC43bDIsMS4ybC0wLjQsMC42bDEuMi0wLjVsMC41LTJsMC45LTAuNGwwLjgsMC45bDEsMC40bDAuOCwxbDAuOCwwLjNsMS4xLDEuMWgwLjggbC0wLjUsMS41bC0wLjUsMC43bDAuMiwwLjVsMS43LTAuNGwyLjQtMC4xbDAuNy0wLjlsLTAuNi0wLjdsMC43LTJsMS43LTEuOWwtMi44LTIuNmwtMC43LTIuM2wxLjEtMS40bC0xLTFsMS4xLTEuMWwtMS40LTAuNyBsLTEuNCwxLjNsLTMuMS0xLjhMMTA4NC44LDI4NS4yTDEwODQuOCwyODUuMnpcIn0sU0M6e2Q6XCJNMTI4OC41LDYwMmwtMC41LTAuOGwtMC40LDAuM2wwLjIsMC4zbDAuMywwLjJsMC4xLDAuNGwwLjMsMC4yVjYwMkwxMjg4LjUsNjAyelwifSxTTDp7ZDpcIk05MTkuNCw1MTguN2wtMS41LDAuM3YtMi4zTDkxNyw1MTVsMC4yLTEuOGwtMS4yLTIuN2wtMS41LTIuM0g5MTBsLTEuMywxLjJsLTEuNSwwLjJsLTEsMS40bC0wLjcsMS43bC0zLDIuOCBsMC43LDQuN2wwLjksMi4zbDIuOSwzLjVsNC4xLDIuNWwxLjUsMC41bDEuMy0ybDAuMy0xLjlsMi42LTMuNEw5MTkuNCw1MTguN0w5MTkuNCw1MTguN3pcIn0sU0c6e2Q6XCJNMTU2MSw1NjMuN2wwLjEtMC4ybC0wLjItMC4ybC0wLjMtMC4xbC0wLjUtMC4ybC0wLjYsMC4xbC0wLjMsMC42bDAuOSwwLjRMMTU2MSw1NjMuN0wxNTYxLDU2My43elwifSxTWDp7ZDpcIk02MjcuMSw0NTcuMkw2MjcuMSw0NTcuMmwwLjIsMC4ybDAuMywwLjFsMC4xLTAuMXYtMC4ySDYyNy4xelwifSxTSzp7ZDpcIk0xMDg3LjQsMjYwLjlsLTQuOS0yLjNsLTMuNCwwLjhsLTIuNC0wLjZsLTIuOCwxLjNsLTIuNy0yLjJsLTEuOSwwLjlsLTAuMy0wLjRoLTEuNWwtMC42LDEuMWwtMS4xLDAuM2wtMC4yLDEuNCBsLTAuOSwwLjNsLTAuMSwwLjZsLTEuNiwwLjZsLTIuMi0wLjFsLTAuNiwxLjRsLTAuMywwLjhsMC43LDIuMWwyLjYsMS42bDEuOSwwLjdsNC4xLTAuOGwwLjMtMS4ybDEuOS0wLjJsMi4zLTFsMC42LDAuNGwyLjItMC43IGwxLTEuNWwxLjYtMC40bDUuNSwxLjlsMS0wLjZsMC43LTIuNUwxMDg3LjQsMjYwLjlMMTA4Ny40LDI2MC45elwifSxTSTp7ZDpcIk0xMDU5LjQsMjc3bC0xLjItMi4xbC0wLjgtMC4xbC0wLjksMS4xbC00LjMsMC4xbC0yLjQsMS40bC00LjItMC40bC0wLjMsM2wxLjQsMi43bC0xLjEsMC41bDMuNSwwLjJsMC44LTFsMS44LDEgbDIsMC4xbC0wLjItMS43bDEuNy0wLjZsMC4zLTIuNUwxMDU5LjQsMjc3TDEwNTkuNCwyNzd6XCJ9LFNCOntkOlwiTTE5MDkuMSw2NDYuNGwtMC4yLTAuMmwtMC4xLTAuNGgtMC4zbC0wLjMsMC4xbDAuMiwwLjZoMC4yTDE5MDkuMSw2NDYuNEwxOTA5LjEsNjQ2LjR6IE0xODczLjUsNjQ3LjJsLTAuMS0wLjIgbC0wLjUtMC40bC0xLjktMS4zbC0wLjQtMC4xbC0wLjEsMC4xbC0wLjEsMC4zbDAuMSwwLjJsMC41LDAuMXYwLjFsMC4zLDAuMmwwLjcsMC4ybDAuNCwwLjNsMC4xLDAuNWwwLjMsMC4xbDAuMywwLjFMMTg3My41LDY0Ny4yIEwxODczLjUsNjQ3LjJ6IE0xOTA1LjUsNjQwLjZMMTkwNS41LDY0MC42bDAuMi0wLjRsLTAuMi0wLjFsLTAuNS0wLjFsLTAuNywwLjFsLTAuMywwLjJsLTAuMiwwLjNoLTAuMnYwLjJsMC4xLDAuNGwwLjItMC4xbDAuMiwwLjEgbDAuNS0wLjVoMC4zaDAuMUwxOTA1LjUsNjQwLjZMMTkwNS41LDY0MC42eiBNMTg4MS4xLDYzOC4zbC0wLjEtMC4ybC0wLjItMC4xbC0wLjktMC43bC0wLjUtMC4yaC0wLjVsLTAuMSwwLjV2MC4zaDAuNmwwLjQsMC4ydjAuNiBsMC4yLDAuMnYwLjVsMS4yLDAuOWwwLjcsMC40bDAuNywwLjFsMC40LDAuMmwwLjUtMC4xbDAuNSwwLjJsMC40LTAuMWwtMC40LTAuM3YtMC40bC0wLjUtMS4zbC0wLjMtMC4zbC0wLjUsMC4xbC0wLjUtMC4yaC0wLjQgTDE4ODEuMSw2MzguM0wxODgxLjEsNjM4LjN6IE0xODgwLjcsNjMzLjRsLTAuNi0xLjZsLTAuMi0wLjFsMC4xLDAuNmwwLjEsMC40bC0wLjEsMC41bC0wLjEsMC42bDAuMiwwLjJsMC4yLTAuMmwwLjQsMC41di0wLjIgVjYzMy40eiBNMTg3MC45LDYzMS4ybC0wLjMtMC4xbC0wLjQsMC4zbC0wLjEsMC4zbC0wLjEsMC43djAuNGwwLjMsMC43bDAuMywwLjVsMC4zLDAuM2wwLjIsMC4ybDAuOSwwLjFsMS43LDAuMWwwLjksMC40bDAuOSwwLjIgbDAuNC0wLjFsMC41LTAuMmwwLjEtMC4xbC0wLjEtMC42bC0wLjItMC4zbC0wLjQtMC4ybC0wLjItMC42bC0wLjUtMC40bC0wLjktMC43aC0xLjZsLTAuNiwwLjFMMTg3MC45LDYzMS4yTDE4NzAuOSw2MzEuMnogTTE4NzMuNSw2MjkuNGwtMC41LDAuMnYwLjNsMC40LDAuMWwwLjQsMC4ybDAuMSwwLjNsMCwwbDAuMi0wLjFsMC40LDAuMmwwLjItMC4zbC0wLjQtMC41bC0wLjQtMC4zaC0wLjFMMTg3My41LDYyOS40IEwxODczLjUsNjI5LjR6IE0xODY3LjksNjMwLjJsMC4zLTAuMnYtMC40aC0wLjNsLTAuMS0wLjJoLTAuMmwtMC4zLDAuMmwtMC4yLDAuM2wwLjEsMC4yaDAuNEwxODY3LjksNjMwLjJMMTg2Ny45LDYzMC4yIEwxODY3LjksNjMwLjJ6IE0xODU5LjUsNjI3LjlsLTAuMS0wLjJsLTAuMy0wLjJoLTAuMmwtMC41LDAuMWwwLjEsMC4xbDAuNiwwLjNsMC4zLDAuMUwxODU5LjUsNjI3LjlMMTg1OS41LDYyNy45eiBNMTg2Mi42LDYyOC4zIGwwLjMtMC4ybC0wLjEtMC4ybC0wLjEtMC41bC0wLjQsMC43bDAuMSwwLjJIMTg2Mi42eiBNMTg2Mi4xLDYyNy40di0wLjJWNjI3bC0wLjItMC4xbDAuNC0wLjNsLTAuMS0wLjFsLTAuNi0wLjJsLTAuMiwwLjJsLTAuMiwwLjEgbC0wLjEsMC4xbC0wLjEsMC4xbC0wLjEsMC41bDAuMiwwLjRsMC40LDAuMkwxODYyLjEsNjI3LjRMMTg2Mi4xLDYyNy40eiBNMTg1OC4xLDYyNy42bC0wLjMtMC40bDAuMS0wLjVsMC4yLTAuMWwwLjItMC41bC0wLjEtMC40IGwtMC4yLDAuMWwtMC43LDAuNmwtMC4xLDAuM2wwLjYsMC44TDE4NTguMSw2MjcuNkwxODU4LjEsNjI3LjZMMTg1OC4xLDYyNy42eiBNMTg3MS4xLDYyNi4zbC0wLjItMC40di0wLjJsLTAuMy0wLjJsLTAuMiwwLjEgbC0wLjEsMC4zbDAuMSwwLjJsMC40LDAuM0wxODcxLjEsNjI2LjNMMTg3MS4xLDYyNi4zeiBNMTg3Ny4xLDYyNS4xaC0wLjJsLTAuMSwwLjFoLTAuMmgtMC4zbC0wLjEsMC4ybDAuNiwxLjFsLTAuMywwLjVsMC40LDIuMiBsMC40LDEuMmwwLjgsMC44djAuMmwwLjgsMC41bDAuNiwxLjNsMC4yLDAuMWwwLjEtMC4ydi0wLjZsLTAuNS0xLjFsMC4xLTAuOGwtMC4yLTAuM1Y2MzBsLTAuMi0wLjhsLTAuNi0wLjdsLTAuMy0wLjFsLTAuMi0wLjMgbDAuMi0wLjZsMC4yLTAuMmwwLjEtMC4zTDE4NzcuMSw2MjUuMUwxODc3LjEsNjI1LjF6IE0xODYwLjUsNjI0LjZsLTAuNi0wLjJsLTAuMi0wLjN2LTFsLTAuNi0wLjNsLTAuMywwLjJsLTAuNiwwLjdsLTAuMiwwLjQgbC0wLjUsMC4zbC0wLjEsMC4zdjAuNGwwLjQsMC4xbDAuMy0wLjRsMC45LTAuMWwwLjMsMC4xdjAuNGwwLjEsMC43bDAuMywwLjNsMC41LDAuMmwwLjQsMC42bDAuMS0wLjNoMC4ybDAuMi0wLjRsLTAuMy0xLjIgTDE4NjAuNSw2MjQuNkwxODYwLjUsNjI0LjZ6IE0xODU0LDYyNC4ybDAuMS0wLjVsLTAuMS0wLjlsLTAuMiwwLjF2MC4ybC0wLjEsMC40TDE4NTQsNjI0LjJMMTg1NCw2MjQuMnogTTE4NTcuMiw2MjMuOGwwLjItMC4yIHYtMC40di0wLjVsLTAuMi0wLjRsLTAuMi0wLjJsLTAuNSwwLjFsLTAuNCwwLjV2MC41bDAuNCwwLjZMMTg1Ny4yLDYyMy44TDE4NTcuMiw2MjMuOEwxODU3LjIsNjIzLjh6IE0xODU0LjYsNjIyLjZsMC4yLTAuMyBsMC41LTAuN2wwLjEtMC4zbC0wLjUtMC4ybC0wLjQtMC41bC0wLjQtMC4ybC0wLjMsMC40djAuNGwwLjUsMC42bC0wLjEsMC40bDAuMiwwLjFsMC4xLDAuNEwxODU0LjYsNjIyLjZMMTg1NC42LDYyMi42eiBNMTg3Mi4xLDYyNi41bC0wLjEtMC41bC0wLjMtMC40bDAuNC0wLjVsLTIuMi0xLjlsLTAuMy0wLjJsLTAuNC0wLjFsLTAuNS0wLjRsLTAuNS0wLjFsLTAuNS0wLjRsLTAuMi0wLjNsLTAuNi0wLjRsLTAuNi0wLjggbC0xLjUtMC4zbDAuMSwwLjJsMC40LDAuNGwwLjEsMC43bDAuNSwwLjRsMC41LDAuNmwwLjIsMC4xbDAuMiwwLjJsMC40LDAuNWwwLjgsMC40bDAuOCwwLjZsMC4zLDAuMWwwLjMsMC4zbDEuNSwwLjdsMC41LDAuNyBMMTg3Mi4xLDYyNi41TDE4NzIuMSw2MjYuNUwxODcyLjEsNjI2LjV6IE0xODUwLjMsNjE3LjNsMC4yLTAuM2wtMC43LTAuNWwtMC4yLDAuM2wtMC4yLDAuNWwwLjQsMC4yTDE4NTAuMyw2MTcuM0wxODUwLjMsNjE3LjN6IE0xODU5LjQsNjE4LjhMMTg1OS40LDYxOC44bC0wLjQtMC4xbC0wLjQtMC4ybC0wLjctMC44bC0wLjItMC4zbC0wLjItMWwtMC40LTAuNGwtMS40LTAuOGwtMC44LTAuOGwtMC43LTAuMmwtMC4yLDAuMnYwLjVsMC4yLDAuMyBsMSwwLjlsMS4xLDEuN2wxLDFsMC44LDAuMWgwLjR2MC4xbDAuMSwwLjJsMC41LDAuMmwwLjUtMC40TDE4NTkuNCw2MTguOEwxODU5LjQsNjE4Ljh6XCJ9LFNPOntkOlwiTTEyMjMuNCw1MDUuN2wtMi42LTIuN2wtMS4yLTIuNmwtMS44LTEuMmwtMiwzLjRsLTEuMSwyLjNsMi4yLDMuNWwyLjEsMy4xbDIuMiwyLjJsMTguNSw3LjZsNC44LTAuMWwtMTUuNCwxOS4xIGwtNy40LDAuM2wtNC45LDQuNWwtMy42LDAuMWwtMS41LDJsLTQuOCw3LjJsMC4yLDIzLjJsMy4zLDUuM2wxLjMtMS41bDEuMy0zLjRsNi4xLTcuN2w1LjMtNC44bDguMy02LjRsNS42LTUuMWw2LjQtOC43bDQuNy03LjEgbDQuNi05LjNsMy4yLTguMmwyLjUtNy4xbDEuMy02LjhsMS4xLTIuM2wtMC4yLTMuNGwwLjQtMy43bC0wLjItMS43aC0yLjFsLTIuNiwyLjJsLTIuOSwwLjZsLTIuNSwwLjlsLTEuOCwwLjJsMCwwbC0zLjIsMC4yIGwtMS45LDEuMWwtMi44LDAuNWwtNC44LDEuOWwtNi4xLDAuOGwtNS4yLDEuNkwxMjIzLjQsNTA1LjdMMTIyMy40LDUwNS43elwifSxaQTp7ZDpcIk0xMTQ4LjIsNzEzLjdsLTIuOS0wLjZsLTEuOSwwLjhsLTIuNi0xLjFsLTIuMi0wLjFsLTgsNC43bC01LjIsNC43bC0yLDQuM2wtMS43LDIuNGwtMywwLjVsLTEuMiwzbC0wLjYsMmwtMy42LDEuNSBsLTQuNC0wLjNsLTIuNS0xLjhsLTIuMy0wLjhsLTIuNywxLjVsLTEuNSwzLjFsLTIuNywxLjlsLTIuOCwyLjhsLTQsMC43bC0xLjEtMi4zbDAuNy0zLjhsLTMtNi4xbC0xLjQtMWwtMS4xLDIzLjZsLTUsMy4ybC0yLjksMC41IGwtMy4zLTEuMmwtMi40LTAuNWwtMC44LTIuN2wtMi4xLTEuOGwtMi43LDMuMmwzLjUsOC4ydjAuMWwyLjUsNS4zbDMuMiw2bC0wLjIsNC44bC0xLjcsMS4ybDEuNCw0LjJsLTAuMiwzLjhsMC42LDEuN2wwLjMtMC45IGwyLjEsMi45bDEuOCwwLjFsMi4xLDIuM2wyLjQtMC4ybDMuNS0yLjRsNC42LTFsNS42LTIuNWwyLjIsMC4zbDMuMy0wLjhsNS43LDEuMmwyLjctMS4ybDMuMiwxbDAuOC0xLjhsMi43LTAuM2w1LjgtMi41bDQuMy0yLjkgbDQuMS0zLjhsNi43LTYuNWwzLjQtNC42bDEuOC0zLjJsMi41LTMuM2wxLjItMC45bDMuOS0zLjJsMS42LTIuOWwxLjEtNS4ybDEuNy00LjdoLTQuMWwtMS4zLDIuOGwtMy4zLDAuN2wtMy0zLjVsMC4xLTIuMmwxLjYtMi40IGwwLjctMS44bDEuNi0wLjVsMi43LDEuMmwtMC40LTIuM2wxLjQtNy4xbC0xLjEtNC41TDExNDguMiw3MTMuN0wxMTQ4LjIsNzEzLjd6IE0xMTI4LjEsNzY2LjVsLTIsMC42bC0zLjctNC45bDMuMi00bDMuMS0yLjUgbDIuNi0xLjNsMi4zLDJsMS43LDEuOWwtMS45LDMuMWwtMS4xLDIuMWwtMy4xLDFMMTEyOC4xLDc2Ni41TDExMjguMSw3NjYuNXpcIn0sS1I6e2Q6XCJNMTYzNy4zLDMzMS43bDYuMiw1LjVsLTMuNCwxLjFsNS4yLDYuOGwxLjEsNC44bDIuMSwzLjVsNC41LTAuNWwzLjItMi43bDQuMi0xLjJsMC41LTMuNmwtMy40LTcuNWwtMy4zLTQuMiBsLTguMi03LjZsMC4xLDEuNmwtMi4xLDAuNGwtMy41LDAuM2wtMC43LDIuOWwtMi40LTAuMkwxNjM3LjMsMzMxLjdMMTYzNy4zLDMzMS43elwifSxTUzp7ZDpcIk0xMTY2LDUwOC43bC0wLjctMi4ybC0yLjktMi41bC0wLjgtNC42bDAuNS00LjdsLTIuNi0wLjVsLTAuMywxLjVsLTMuNCwwLjNsMS40LDEuOGwwLjYsMy45bC0zLDMuNWwtMi43LDQuNSBsLTIuOCwwLjdsLTQuOC0zLjdsLTIuMSwxLjNsLTAuNSwxLjlsLTIuOSwxLjJsLTAuMiwxLjNoLTUuNWwtMC44LTEuM2wtNC4xLTAuM2wtMiwxLjFsLTEuNS0wLjVsLTMtMy43bC0xLTEuOGwtNCwwLjlsLTEuNSwyLjkgbC0xLjMsNS43bC0xLjksMS4ybC0xLjcsMC43bDMuOCwyLjVsMy4xLDIuNmwwLjEsMmwzLjgsMy40bDIuNCwyLjdsMS41LDMuOGw0LjIsMi41bDAuOSwyLjFsMy41LDUuMmwyLjUsMC44bDEuNS0xLjFsMi42LDAuNCBsMy4xLTEuM2wxLjQsMi43bDUsNC4ybDAsMGwyLjMtMS43bDMuNSwxLjRsNC41LTEuNWw0LDAuMWwzLjQtM2wzLjQtMy44bDMuOC00LjJsLTMuNS02LjlsLTIuNi0xLjVsLTEtMi41bC0yLjktMy4xbC0zLjQtMC41IGwxLjgtMy42bDMtMC4xbDAuOC0ybC0wLjItNWwtMC44LTAuMUwxMTY2LDUwOC43TDExNjYsNTA4Ljd6XCJ9LEVTOntkOlwiTTg4OC4zLDM5MC40bDEtMC4xdjAuM2wtMS4yLDFsLTAuNSwxLjRsLTAuNCwwLjZsLTAuMywwLjJsLTAuNiwwLjJsLTAuNy0wLjlsLTAuNC0xbC0wLjItMC4zbDAuNC0wLjJoMC41bDEtMC4xIGwwLjMtMC4xTDg4OC4zLDM5MC40eiBNODgzLjMsMzkyLjdoLTAuMmwtMC4yLDAuMmwtMC4yLDAuNGwwLjMsMC41bDAuMiwwLjFoMC4ybDAuNS0wLjR2LTAuMmwtMC4xLTAuM0w4ODMuMywzOTIuN3ogTTg4MC42LDM4OSBsLTAuMy0wLjRoLTAuN2wtMC40LDAuNmwwLjYsMS4ybDAuMSwwLjVoMC4xbDAuNS0wLjVsMC4xLTAuM2wtMC4xLTAuNWwwLjItMC4yTDg4MC42LDM4OXogTTg3OC43LDM5NS41aC0wLjZsMC4xLDAuMmwwLjEsMC4yIGwwLjcsMC40bDAuNi0xLjFsLTAuMi0wLjJMODc4LjcsMzk1LjV6IE05MDEuMSwzODkuM2wtMC4zLDAuMmwtMC4xLDAuNmwtMC43LDEuM2wtMC41LDEuMmwtMC43LDAuNmwtMC43LDAuMmwwLjEsMC4xbDAuNywwLjEgbDAuOC0wLjdsMS41LTAuNWwwLjMtMWwwLjMtMS4xdi0wLjdsLTAuMy0wLjNMOTAxLjEsMzg5LjNMOTAxLjEsMzg5LjN6IE04OTMuMSwzOTMuMUw4OTMuMSwzOTMuMUw4OTMuMSwzOTMuMWgtMC4ybC0xLjMtMC4xIGwtMC4yLDAuNmwtMC41LDAuNHYwLjdsMC41LDAuN2wwLjMsMC4xbDAuNSwwLjFsMC43LTAuNGwwLjItMC40bDAuMS0wLjhsLTAuMS0wLjRWMzkzLjF6IE05OTQuMywzMTguN2wtMC4zLTAuMWwtMC41LDAuMmwtMC41LTAuMiBsMC4xLTAuM2wwLjEtMC4ybDAuMS0wLjFsLTAuMi0wLjJ2LTAuMWwwLjItMC4ybC0wLjItMC4xbC0xLjMsMC40bC0wLjcsMC40bC0yLjEsMS41djAuM2wwLjEsMC4yaDAuNGwwLjIsMC40bDAuNC0wLjRsMC4zLTAuMSBsMC4zLDAuMWwwLjMsMC4ybDAuMSwwLjZsMC4xLDAuMmwwLjYsMC4xbDAuOSwwLjRsMC40LTAuMmwwLjUtMC4zbDAuMi0wLjZsMC4zLTAuNWwwLjMtMC41bDAuMy0wLjRsLTAuMS0wLjRMOTk0LjMsMzE4Ljd6IE05OTguNiwzMTcuMWwtMC45LTAuM2wtMSwwLjFsLTAuMSwwLjF2MC40bDAuMSwwLjFsMC42LDAuMWwxLjYsMC43aDAuMWwwLjEtMC40di0wLjFMOTk4LjYsMzE3LjF6IE05OTIsMzAxLjlsLTYsMC44bC0xLjMtMC43IGwtMC4yLDAuMWgtMC40bC0wLjEtMC4ydi0wLjJsLTMuNy0xLjhsLTEuOSwxLjNsLTkuNC0yLjhsLTItMi40bC04LjItMC4ybC00LjIsMC4zbC01LjQtMWgtNi44bC02LjItMS4xbC03LjQsNC41bDIsMi42bC0wLjQsNC40IGwxLjktMS42bDIuMS0wLjlsMS4yLDMuMWgzbDAuOS0wLjhsMywwLjJsMS4zLDMuMWwtMi40LDEuN2wtMC4yLDQuOWwtMC45LDAuOWwtMC4zLDNsLTIuMiwwLjVsMiwzLjhsLTEuNiw0LjNsMS44LDEuOWwtMC44LDEuNyBsLTIsMi41bDAuNCwyLjFsNC44LDFsMS40LDMuN2wyLDIuMmwyLjUsMC42bDIuMS0yLjVsMy4zLTIuM2w1LDAuMWg2LjdsMy44LTVsMy45LTEuM2wxLjItNC4ybDMtMi45bC0yLTMuN2wyLTUuMWwzLjEtMy41bDAuNS0yLjEgbDYuNi0xLjNsNC44LTQuMkw5OTIsMzAxLjl6IE05MDMuNywzODYuM2wtMC4yLDAuNGwtMC42LDAuMmwtMC44LDAuNGwtMC4yLDAuM2wtMC4yLDAuOWwwLjQsMC4xbDAuMy0wLjRsMC45LTAuM2wwLjUtMC4zbDAuMS0wLjkgbDAuMi0wLjNsLTAuMi0wLjNMOTAzLjcsMzg2LjN6IE05ODMuNywzMjMuMWwtMC4yLDAuM3YwLjNsLTAuMywwLjFsLTAuMSwwLjRsMC4xLDAuMmwwLjgsMC4xbDAuMi0wLjRoMC4zbDAuNi0wLjd2LTAuM2wtMC4zLTAuMiBMOTgzLjcsMzIzLjF6IE05ODQuMiwzMjUuMWwtMC4xLDAuMmwtMC4xLDAuMnYwLjJoMC41bDAuNCwwLjFsMC4xLTAuMXYtMC4yaC0wLjVMOTg0LjIsMzI1LjF6XCJ9LExLOntkOlwiTTE0MzIuMiw1MzIuN2wyLjMtMS44bDAuNi02LjZsLTMtNi42bC0yLjktNC41bC00LjEtMy41bC0xLjksMTAuM2wxLjQsOS4xbDIuOCw1LjFMMTQzMi4yLDUzMi43TDE0MzIuMiw1MzIuN3pcIn0sU0Q6e2Q6XCJNMTE4MC44LDQ2OC41bDAuNC00LjJsMS42LTJsNC0xbDIuNi0zLjZsLTMuMS0yLjRsLTIuMi0xLjZsLTIuNS03LjZsLTEuMS02LjVsMS4xLTEuMmwtMi4xLTYuMmgtMjEuOGgtMjEuNGgtMjIuMSBsMC41LDEyLjdoLTYuM3YyLjdsMS4xLDI1LjJsLTQuOC0wLjRsLTIuNCw0LjdsLTEuNCwzLjlsMS4yLDEuNWwtMS44LDEuOWwwLjcsMi43bC0xLjQsMi42bC0wLjUsMi40bDItMC40bDEuMiwyLjVsMC4xLDMuN2wyLjEsMS44IHYxLjZsMC43LDIuN2wzLjMsNHYyLjZsLTAuOCwyLjZsMC4zLDJsMiwxLjhsMC41LDAuM2wxLjctMC43bDEuOS0xLjJsMS4zLTUuN2wxLjUtMi45bDQtMC45bDEsMS44bDMsMy43bDEuNSwwLjVsMi0xLjFsNC4xLDAuMyBsMC44LDEuM2g1LjVsMC4yLTEuM2wyLjktMS4ybDAuNS0xLjlsMi4xLTEuM2w0LjgsMy43bDIuOC0wLjdsMi43LTQuNWwzLTMuNWwtMC42LTMuOWwtMS40LTEuOGwzLjQtMC4zbDAuMy0xLjVsMi42LDAuNWwtMC41LDQuNyBsMC44LDQuNmwyLjksMi41bDAuNywyLjJ2My4xbDAuOCwwLjF2LTAuN2wxLjQtNi43bDIuNi0xLjhsMC41LTIuNmwyLjMtNC44bDMuMi0zLjJsMi4xLTYuMmwwLjctNS41bC0wLjctMi41TDExODAuOCw0NjguNSBMMTE4MC44LDQ2OC41elwifSxTUjp7ZDpcIk02NjgsNTMzLjhsLTQuNiwwLjVsLTAuNiwxLjFsLTYuNy0xLjJsLTEsNS43bC0zLjUsMS42bDAuMywxLjVsLTEuMSwzLjNsMi40LDQuNmwxLjgsMC4xbDAuNywzLjVsMy4zLDUuNmwzLjEsMC41IGwwLjUtMS4zbC0wLjktMS4zbDAuNS0xLjhsMi4zLDAuNmwyLjctMC43bDMuMiwxLjRsMS40LTIuN2wwLjYtMi45bDEtMi44bC0yLjEtMy43bC0wLjQtNC40bDMuMS01LjVMNjY4LDUzMy44TDY2OCw1MzMuOHpcIn0sU1o6e2Q6XCJNMTE1MC41LDczNi42bC0yLjctMS4ybC0xLjYsMC41bC0wLjcsMS44bC0xLjYsMi40bC0wLjEsMi4ybDMsMy41bDMuMy0wLjdsMS4zLTIuOGwtMC4zLTIuOEwxMTUwLjUsNzM2LjYgTDExNTAuNSw3MzYuNnpcIn0sU0U6e2Q6XCJNMTA3Ny43LDE2MS4xbC0xLjktMi4ybC0xLjctOC40bC03LjItMy43bC01LjktMi43bC0yLjUsMC4zdjMuNWwtNy45LTAuOWwtMC42LDMuMWwtNC0wLjFsLTIuMiwzLjlsLTMuNCw2LjEgbC01LjcsNy45bDEuOCwxLjlsLTEuMywyLjJsLTQuMy0wLjFsLTIuMyw1LjNsMSw3LjZsMy4xLDIuOWwtMC45LDYuOWwtMy40LDRsLTEuNywzLjNsNC4yLDguNGw0LjQsNi43bDIsNS43bDUuMy0wLjNsMi4yLTQuNyBsNS43LDAuNWwyLTUuNWwwLjYtMTBsNC42LTEuM2wzLjMtNi42bC00LjgtMy4zbC0zLjYtNGwyLjEtOC4xbDcuNy00LjlsNi4xLTQuNWwtMS4yLTMuNWwzLjQtMy45TDEwNzcuNywxNjEuMUwxMDc3LjcsMTYxLjF6XCJ9LENIOntkOlwiTTEwMjQuMywyNzAuNmwtNS40LTEuOWwtMSwxLjRoLTQuMmwtMS4zLDFsLTIuMy0wLjZsMC4yLDEuNmwtMy41LDMuNXYyLjhsMi40LTAuOWwxLjgsMi43bDIuMiwxLjNsMi40LTAuM2wyLjctMi4xIGwwLjksMWwyLjQtMC4ybDAuOS0yLjVsMy44LDAuOGwyLjEtMS4xbDAuMy0yLjVsLTIuNi0wLjJsLTIuMy0xLjFsMC43LTEuNkwxMDI0LjMsMjcwLjZMMTAyNC4zLDI3MC42elwifSxTWTp7ZDpcIk0xMTgzLjUsMzU5LjlsMTEtNi43bDAuOS03LjhsLTEuMi00LjdsMi43LTEuNmwyLjEtNC4xbC01LjksMS4xbC0yLjgtMC4ybC01LjcsMi41aC00LjNsLTMtMS4ybC01LjUsMS44bC0xLjktMS4zIGwwLjEsMy42bC0xLjIsMS41bC0xLjIsMS40bC0xLDIuNmwxLjEsNWwyLjQsMC4zbDEuMiwyLjVsLTIuNiwyLjRsLTAuOSwzLjVsMC4zLDIuNmwtMC42LDFoMC4xbDYuMywyLjVMMTE4My41LDM1OS45TDExODMuNSwzNTkuOXogXCJ9LFRXOntkOlwiTTE2NDIuMyw0MjcuMmwxLjItMTAuMmwwLjEtMy45bC0yLjktMS45bC0zLjMsNC44bC0xLjksNi4zbDEuNSw0LjdsNCw1LjRMMTY0Mi4zLDQyNy4yTDE2NDIuMyw0MjcuMnpcIn0sVEo6e2Q6XCJNMTM0NC4xLDMxNS43bC0yLjEsMC4ybC0xLjMtMS44bDAuMi0yLjlsLTYuNCwxLjVsLTAuNSw0bC0xLjUsMy41bC00LjQtMC4zbC0wLjYsMi44bDQuMiwxLjZsMi40LDQuN2wtMS4zLDYuNiBsMS44LDAuOGwzLjMtMi4xbDIuMSwxLjNsMC45LTNsMy4yLDAuMWwwLjYtMC45bC0wLjItMi42bDEuNy0yLjNsMy4yLDEuNXYybDEuNiwwLjNsMSw1LjRsMi42LDIuMWwxLjUtMS4zbDIuMS0wLjdsMi41LTIuOWwzLjgsMC41IGg1LjRsLTEuOC0zLjdsLTAuNi0yLjVsLTMuNS0xLjRsLTEuNiwwLjZsLTMtNS45bC05LjUsMC45bC03LjEtMmwtNS40LDAuNWwtMC42LTMuN2w1LjksMS4xTDEzNDQuMSwzMTUuN0wxMzQ0LjEsMzE1Ljd6XCJ9LFRaOntkOlwiTTExNDkuNiw1NzguNmwtMiwwLjhsMi4zLDMuNmwtMC40LDMuN2wtMS42LDAuOGwwLDBsMC4zLDIuNWwxLjIsMS41djJsLTEuNCwxLjRsLTIuMiwzLjNsLTIuMSwyLjNsLTAuNiwwLjEgbC0wLjMsMi43bDEuMSwwLjlsLTAuMiwyLjdsMSwyLjZsLTEuMywyLjRsNC41LDQuM2wwLjMsMy45bDIuNyw2LjVsMCwwbDAuMywwLjJsMi4yLDEuMWwzLjUsMS4xbDMuMiwxLjlsNS40LDEuMmwxLjEsMS43bDAsMCBsMC40LTEuMmwyLjgsMy40bDAuMyw2LjdsMS44LDIuNHYwLjFsMi4xLTAuM2w2LjcsMS44bDEuNC0wLjhsMy45LTAuMWwyLjEtMS45bDMuMywwLjFsNi4yLTIuNWw0LjYtMy43bDAsMGwtMi0xLjRsLTIuMi02LjMgbC0xLjgtMy45bDAuNC0zLjFsLTAuMy0xLjlsMS43LTMuOWwtMC4yLTEuNmwtMy41LTIuM2wtMC4zLTMuNmwyLjgtNy45bC04LTYuM2wtMC40LTMuN2wtMjAuMi0xM2wwLDBsLTIuOCwyLjhsLTEuOSwyLjlsMi4yLDIuMiBsLTMuMiwxLjZsLTAuNy0wLjhsLTMuMiwwLjRsLTIuNSwxLjRsLTEuNi0yLjRsMS4xLTQuNWwwLjItMy44bDAsMGwwLDBMMTE0OS42LDU3OC42TDExNDkuNiw1NzguNnpcIn0sVEg6e2Q6XCJNMTU2Mi43LDQ4MS40bDEuNS0yLjlsLTAuNS01LjRsLTUuMi01LjVsLTEuMy02LjNsLTQuOS01LjJsLTQuMy0wLjRsLTAuOCwyLjJsLTMuMiwwLjJsLTEuOC0xLjJsLTUuMywzLjhsLTEtNS43IGwwLjQtNi43bC0zLjgtMC4zbC0wLjktMy44bC0yLjYtMS45bC0zLDEuNGwtMi44LDIuOGwtMy45LDAuM2wtMS41LDYuOWwtMi4yLDEuMWwzLjUsNS42bDQuMSw0LjZsMi45LDQuMmwtMS40LDUuNmwtMS43LDEuMSBsMS43LDMuMmw0LjIsNS4xbDEsMy41bDAuMiwzbDIuOCw1LjhsLTIuNiw1LjlsLTIuMiw2LjZsLTEuMyw2LjFsLTAuMywzLjlsMS4yLDMuNmwwLjctMy44bDIuOSwzLjFsMy4yLDMuNWwxLjEsMy4ybDIuNCwyLjQgbDAuOS0xLjFsNC43LDIuOGwwLjYsMy4zbDMuNy0wLjhsMS43LTIuNmwtMy4xLTMuM2wtMy40LTAuOGwtMy4zLTMuNmwtMS40LTUuNWwtMi42LTUuOGwtMy43LTAuMmwtMC43LTQuNmwxLjQtNS42bDIuMi05LjNsLTAuMi03IGw0LjktMC4xbC0wLjMsNWw0LjctMC4xbDUuMywyLjlsLTIuMS03LjdsMy01LjJsNy4xLTEuM0wxNTYyLjcsNDgxLjRMMTU2Mi43LDQ4MS40elwifSxUTDp7ZDpcIk0xNjc2LjgsNjMxLjlsNC45LTEuOGw2LTIuOGwyLjItMS43bC0yLTAuOGwtMS44LDAuOGwtNCwwLjJsLTQuOSwxLjRsLTAuOCwxLjVsMC41LDEuM0wxNjc2LjgsNjMxLjlMMTY3Ni44LDYzMS45eiBcIn0sVEc6e2Q6XCJNOTgxLjcsNTAyLjJsLTQuOS0wLjFsLTAuNCwxLjlsMi40LDMuM2wtMC4xLDQuNmwwLjYsNS4xbDEuNCwyLjNsLTEuMiw1LjdsMC40LDMuMmwxLjUsNGwxLjIsMi4ybDQuNi0xLjNsLTEuNC00LjQgbDAuMi0xNC42bC0xLjEtMS4zbC0wLjItMy4xbC0yLTIuM2wtMS43LTEuOUw5ODEuNyw1MDIuMkw5ODEuNyw1MDIuMnpcIn0sVE86e2Q6XCJNMTMuMyw3MDcuN0wxMy4zLDcwNy43bC0wLjIsMC4zdjAuMmwwLjQsMC40TDEzLjMsNzA3Ljd6IE0xMS43LDcwNi44aC0wLjJIMTEuN2wtMC40LTAuM2gtMC40bC0wLjItMC4xdi0wLjIgbC0wLjIsMC4zbDAuMiwwLjNsMC45LDAuNGwwLjMsMC4ybDAuMi0wLjZ2LTAuMmwtMC4zLDAuMXYwLjFIMTEuN3ogTTE0LjIsNjkwLjhsMC4xLTAuMnYtMC4ybC0wLjMtMC4xaC0wLjFsLTAuMywwLjVsMC4xLDAuMSBsMC4zLDAuMmgwLjFMMTQuMiw2OTAuOHpcIn0sVFQ6e2Q6XCJNNjM1LjQsNTA3LjdsMC4xLTAuMnYtMC42bDAuMi0wLjRsLTAuMi0wLjRsLTAuMS0wLjZsMC4xLTAuNXYtMC43bDAuMi0wLjNsMC41LTAuOGgtMC45bC0wLjYsMC4ybC0xLjEsMC4xIGwtMC41LDAuMmwtMC43LDAuMUw2MzIsNTA0bDAuMSwwLjFsMC41LDAuMmwwLjIsMC4ybDAuMSwwLjJsMC4xLDAuNGwtMC4zLDEuN2wtMC4xLDAuMUw2MzIsNTA3bC0wLjIsMC4zbC0xLjQsMC44bDAuOC0wLjFsMC45LDAuMSBsMi40LTAuMUw2MzUuNCw1MDcuN0w2MzUuNCw1MDcuN3ogTTYzNy4yLDUwMWwxLjItMC41bDAuMS0wLjRoLTAuMmwtMC44LDAuM2wtMC42LDAuNXYwLjJMNjM3LjIsNTAxelwifSxUTjp7ZDpcIk0xMDM4LDM2MS40bC0yLTFsLTEuNS0zbC0yLjgtMC4xbC0xLjEtMy41bDMuNC0zLjJsMC41LTUuNmwtMS45LTEuNmwtMC4xLTNsMi41LTMuMmwtMC40LTEuM2wtNC40LDIuNGwwLjEtMy4zIGwtMy43LTAuN2wtNS42LDIuNmwtMSwzLjNsMSw2LjJsLTEuMSw1LjNsLTMuMiwzLjZsMC42LDQuOGw0LjUsMy44djEuNWwzLjQsMi42bDIuNiwxMS4zbDIuNi0xLjRsMC40LTIuN2wtMC43LTIuNmwzLjctMi41bDEuNS0yIGwyLjYtMS44TDEwMzgsMzYxLjRMMTAzOCwzNjEuNHpcIn0sVFI6e2Q6XCJNMTE2Ni42LDMwOC45bC05LjctNC40bC04LjUsMC4ybC01LjcsMS43bC01LjYsNGwtOS45LTAuOGwtMS42LDQuOGwtNy45LDAuMmwtNS4xLDYuMWwzLjYsM2wtMiw1bDQuMiwzLjZsMy43LDYuNCBsNS44LTAuMWw1LjQsMy41bDMuNi0wLjhsMC45LTIuN2w1LjcsMC4ybDQuNiwzLjVsOC0wLjdsMy4xLTMuN2w0LjYsMS41bDMuMi0wLjZsLTEuNywyLjRsMi4zLDNsMS4yLTEuNGwxLjItMS41bC0wLjEtMy42bDEuOSwxLjMgbDUuNS0xLjhsMywxLjJoNC4zbDUuNy0yLjVsMi44LDAuMmw1LjktMS4xbDIuMS0xbDYuMiwwLjlsMi4xLDEuNmwyLjMtMS4xbDAsMGwtMy43LTUuMmwwLjctMmwtMi45LTcuM2wzLjMtMS44bC0yLjQtMS45bC00LjItMS41IHYtMy4xbC0xLjMtMi4ybC01LjYtM2wtNS40LDAuM2wtNS41LDMuMmwtNC41LTAuNmwtNS44LDFMMTE2Ni42LDMwOC45TDExNjYuNiwzMDguOXogTTExMTcsMzEyLjlsMi0xLjlsNi4xLTAuNGwwLjctMS41bC00LjctMiBsLTAuOS0yLjRsLTQuNS0wLjhsLTUsMmwyLjcsMS42bC0xLjIsMy45bC0xLjEsMC43bDAuMSwxLjNsMS45LDIuOUwxMTE3LDMxMi45TDExMTcsMzEyLjl6XCJ9LFRNOntkOlwiTTEzMjUuNiwzMzQuMmwtMC44LTRsLTcuNy0yLjdsLTYuMi0zLjJsLTQuMi0zbC03LTQuNGwtNC4zLTYuNGwtMi0xLjJsLTUuNSwwLjNsLTIuMy0xLjNsLTEuOS00LjlsLTcuOC0zLjMgbC0zLjMsMy42bC0zLjgsMi4ybDEuNiwzLjFsLTUuOCwwLjFsLTIuNSwwLjNsLTQuOS00LjlsLTMuOC0xLjdsLTUuNSwxLjNsLTEuOCwybDIuNSw0bC0wLjUtNC41bDMuNy0xLjZsMi40LDMuNmw0LjYsMy43bC00LDIgbC01LjMtMS41bDAuMSw1LjJsMy41LDAuNGwtMC40LDQuNGw0LjUsMi4xbDAuNyw2LjhsMS44LDQuNWw0LjQtMS4ybDMtMy43bDMuNSwwLjJsMi4xLTEuMmwzLjgsMC42bDYuNSwzLjNsNC4zLDAuN2w3LjMsNS43IGwzLjksMC4ybDEuNiw1LjVsNS45LDIuNGwzLjktMC44bDAuNC0zbDQtMC45bDIuNS0ybC0wLjEtNS4ybDQuMS0xLjJsMC4zLTIuM2wyLjksMS43TDEzMjUuNiwzMzQuMkwxMzI1LjYsMzM0LjJ6XCJ9LFRDOntkOlwiTTU3OC43LDQzMy4xbC0wLjEsMC40djAuMmwwLjIsMC4xbDAuNi0wLjFsMC4xLTAuMWwwLjItMC4xdi0wLjFsLTAuNCwwLjFMNTc4LjcsNDMzLjF6IE01ODIuMyw0MzMuN2wwLjItMC4yIGwtMC4yLTAuMmwtMC43LTAuMmwtMC4yLDAuMXYwLjNoMC42TDU4Mi4zLDQzMy43TDU4Mi4zLDQzMy43TDU4Mi4zLDQzMy43eiBNNTgxLjIsNDMzLjJsLTAuMS0wLjFsLTAuMS0wLjZoLTAuNXYwLjJsMC4xLDAuMmgwLjEgbDAuMSwwLjJsMC4zLDAuMkw1ODEuMiw0MzMuMkw1ODEuMiw0MzMuMnpcIn0sVUc6e2Q6XCJNMTE2Ny42LDU0NS4xbC0zLjQsM2wtNC0wLjFsLTQuNSwxLjVsLTMuNS0xLjRsLTIuMywxLjdsMCwwbC0wLjMsNy41bDIuMywwLjhsLTEuOCwyLjNsLTIuMiwxLjdsLTIuMSwzLjNsLTEuMiwzIGwtMC4zLDUuMWwtMS4zLDIuNGwtMC4xLDQuOGwxLjQsMC42bDMuMy0xLjlsMi0wLjhsNi4yLDAuMWwwLDBsLTAuMy0yLjVsMi42LTMuN2wzLjUtMC45bDIuNC0xLjVsMi45LDEuMmwwLjMsMC41di0wLjNsMS42LTIuNiBsMi43LTQuMmwyLjEtNC43bC0yLjYtNy4zbC0wLjctMy4yTDExNjcuNiw1NDUuMUwxMTY3LjYsNTQ1LjF6XCJ9LFVBOntkOlwiTTExMzguNSwyNDFsLTQuOCwwLjVsLTEuNS0wLjNsLTEsMS40bC0xLjgtMC4ybDAsMGwtNC4xLDAuM2wtMS4yLDEuNGwwLjIsMy4xbC0yLTAuNmwtNC4zLDAuM2wtMS41LTEuNWwtMS42LDEuMSBsLTItMC45bC0zLjgtMC4xbC01LjYtMS41bC01LTAuNWwtMy43LDAuMmwtMi40LDEuNmwtMi4yLDAuM2wzLjEsNS4zbC0wLjMsMS44bC0yLjMsMC43bC0zLjgsNS4xbDEuNiwyLjhsLTEuMS0wLjRsLTEuMSwxLjcgbC0wLjcsMi41bDIuOSwxLjdsMC42LDEuNmwxLjktMS4zbDMuMiwwLjdoMy4ybDIuNCwxLjVsMS42LTAuOWwzLjYtMC42bDEtMS41aDIuMWwxLjEtMC45bDMuMi0wLjZsMy45LDEuOWwyLDAuM2wyLjUsMS42djIuMSBsMS45LDEuMWwxLjEsMi42bDIsMS41bC0wLjIsMWwxLDAuNmwtMS4yLDAuNWwtMy0wLjJsLTAuNi0wLjlsLTEsMC41bDAuNSwxLjFsLTEuMSwybC0wLjUsMi4xbC0xLjIsMC43bDIuNCwxLjFsMi4yLTFsMi40LDEuMSBsMy4zLTQuNmwxLjMtMy40bDQuNS0wLjhsMC43LDIuNGw4LDEuNWwxLjcsMS40bC00LjUsMi4xbC0wLjcsMS4ybDUuOCwxLjhsLTAuNiwyLjlsMywxLjNsNi4zLTMuNmw1LjMtMS4xbDAuNi0yLjJsLTUuMSwwLjQgbC0yLjctMS41bC0xLTMuOWwzLjktMi4zbDQuNi0wLjNsMy0ybDMuOS0wLjVsLTAuNC0yLjhsMi4yLTEuN2w0LjctMC41bDAuMy0yLjFsLTEuOC0zLjRsMS4zLTMuMmwtMC40LTEuOWwtNy42LTJsLTIuOSwwLjEgbC0zLjYtMi45bC0zLjUsMWwtNi42LTIuMmwtMC4yLTEuMmwtMi4yLTIuN2wtNC0wLjJsLTAuNy0xLjlsMC45LTEuM0wxMTM4LjUsMjQxTDExMzguNSwyNDF6XCJ9LEFFOntkOlwiTTEyODMuOSw0MDguNmwtMS4zLTIuMmwtMywzLjlsLTMuNyw0LjFsLTMuMyw0LjNsLTMuMy0wLjJsLTQuNi0wLjJsLTQuMiwxbC0wLjMtMS43bC0xLDAuM2wwLjQsMS41bDIuNiw2LjQgbDE2LjgsMy4ybDEtMS4zbC0wLjEtMi42bDEuNC0yLjZsLTAuMy0yLjZsMi40LTEuM2wtMS4xLTAuOGwwLjEtNC4yaDIuOEwxMjgzLjksNDA4LjZMMTI4My45LDQwOC42elwifSxHQjp7ZDpcIk05NTAsMjI3LjVsLTQuOS0zLjdsLTMuOSwwLjNsMC44LDMuMmwtMS4xLDMuMmwyLjktMC4xbDMuNSwxLjNMOTUwLDIyNy41eiBNOTYzLDIwMy4ybC01LjUsMC41bC0zLjYtMC40bC0zLjcsNC44IGwtMS45LDYuMWwyLjIsM2wwLjEsNS44bDIuNi0yLjhsMS40LDEuNmwtMS43LDIuN2wxLDEuNmw1LjcsMS4xaDAuMWwzLjEsMy44bC0wLjgsMy41bDAsMGwtNy4xLTAuNmwtMSw0bDIuNiwzLjNsLTUuMSwxLjlsMS4zLDIuNCBsNy41LDFsMCwwbC00LjMsMS4zbC03LjMsNi41bDIuNSwxLjJsMy41LTIuM2w0LjUsMC43bDMuMy0yLjlsMi4yLDEuMmw4LjMtMS43bDYuNSwwLjFsNC4zLTMuM2wtMS45LTMuMWwyLjQtMS44bDAuNS0zLjlsLTUuOC0xLjIgbC0xLjMtMi4zbC0yLjktNi45bC0zLjItMWwtNC4xLTcuMWwtMC40LTAuNmwtNC44LTAuNGw0LjItNS4zbDEuMy00LjloLTVsLTQuNywwLjhMOTYzLDIwMy4yTDk2MywyMDMuMnpcIn0sVVM6e2Q6XCJNMTE2LjcsNDUwLjdsMi0wLjlsMi41LTEuNGwwLjItMC40bC0wLjktMi4ybC0wLjctMC44bC0wLjgtMC42bC0xLjktMS4xbC0wLjQtMC4xbC0wLjQsMC42djEuM2wtMS4yLDFsLTAuNCwwLjcgbDAuNCwyLjNsLTAuNiwxLjhsMS4yLDAuOUwxMTYuNyw0NTAuN0wxMTYuNyw0NTAuN3ogTTExNi4xLDQ0MC44bDAuNi0wLjdsLTEuMi0xbC0xLjgtMC42TDExMyw0Mzl2MC40bDAuNSwwLjVsMC42LDEuNEwxMTYuMSw0NDAuOCBMMTE2LjEsNDQwLjh6IE0xMTMuMSw0MzcuNGwtMi42LTAuMmwtMC42LDAuN2wyLjksMC4yTDExMy4xLDQzNy40eiBNMTA4LjQsNDM2LjVsLTEuMS0yLjFMMTA3LDQzNGwtMS43LDAuOWwwLjEsMC4ybDAuNCwxLjUgbDEuOCwwLjJsMC40LDAuMUwxMDguNCw0MzYuNUwxMDguNCw0MzYuNXogTTEwMC4xLDQzMi4zbDAuMy0xLjVsLTEuMy0wLjFsLTEsMC42bC0wLjQsMC41bDEuNiwxLjFMMTAwLjEsNDMyLjN6IE01MTIuMiwyNTkuMWgtMS42IGwtMS4zLDIuNGgtMTAuMWgtMTYuOGgtMTYuN2gtMTQuOGgtMTQuN2gtMTQuNWgtMTVoLTQuOGgtMTQuNmgtMTMuOWwtMS42LDUuMWwtMi40LDUuMWwtMi4zLDEuNmwxLjEtNS45bC01LjgtMi4xbC0xLjQsMS4yIGwtMC40LDIuOWwtMS44LDUuNGwtNC4yLDguM2wtNCw1LjZsLTQsNS42bC01LjQsNS44bC0xLjEsNC43bC0yLjgsNS4zbC0zLjksNS4ybDEsMy40bC0xLjksNS4ybDEuNSw1LjRsMS4zLDIuMmwtMC44LDEuNWwwLjQsOSBsMi41LDYuNWwtMC44LDMuNWwxLDFsNC42LDAuN2wxLjMsMS43bDIuOCwwLjNsLTAuMSwxLjlsMi4yLDAuN2wyLjEsMy43bC0wLjMsMy4ybDYuMy0wLjVsNy0wLjdsLTEsMS4zbDcuMSwzLjFsMTAuNyw0LjRIMzkxaDQuMyBsMC44LTIuNmg5LjNsMS4zLDIuMmwyLjEsMmwyLjQsMi44bDAuOCwzLjNsMC40LDMuNWwyLjIsMS45bDQsMS45bDQuOC01bDQuNC0wLjFsMy4xLDIuNWwxLjYsNC40bDEsMy43bDIuNCwzLjZsMC4yLDQuNWwwLjgsMyBsMy45LDJsMy42LDEuNGwyLjEtMC4ybC0wLjYtMi4ybDAuNC0zLjFsMS00LjRsMS45LTIuOGwzLjctMy4xbDYtMi43bDYuMS00LjdsNC45LTEuNWwzLjUtMC40bDMuNSwxLjRsNC45LTAuOGwzLjMsMy40bDMuOCwwLjIgbDIuNC0xLjJsMS43LDAuOWwxLjMtMC44bC0wLjktMS4zbDAuNy0yLjVsLTAuNS0xLjdsMi40LTFsNC4yLTAuNGw0LjcsMC43bDYuMi0wLjhsMywxLjVsMiwzbDAuOSwwLjNsNi4xLTIuOWwxLjksMWwzLDUuM2wwLjgsMy41IGwtMiw0LjJsMC40LDIuNWwxLjYsNC45bDIsNS41bDEuOCwxLjRsMC40LDIuOGwyLjYsMC44bDEuNy0wLjhsMi0zLjlsMC43LTIuNWwwLjktNC4zbC0xLjItNy40bDAuNS0yLjdsLTEuNS00LjVsLTAuNy01LjRsMC4xLTQuNCBsMS44LTQuNWwzLjUtMy44bDMuNy0zbDYuOS00LjFsMS4zLTIuMmwzLjMtMi4zbDIuOC0wLjRsNC40LTMuOGw2LTEuOWw0LjYtNC44bDAuOS02LjVsMC4xLTIuMmwtMS40LTAuNGwxLjUtNi4ybC0zLTIuMWwzLjIsMXYtNC4xIGwxLjktMi43bC0xLDUuM2wyLDIuNWwtMi45LDQuNGwwLjQsMC4ybDQuNC01LjFsMi40LTIuNWwwLjYtMi41bC0wLjktMS4xbC0wLjEtMy41bDEuMiwxLjZsMS4xLDAuNGwtMC4xLDEuNmw1LjItNC45bDIuNS00LjUgbC0xLjQtMC4zbDIuMS0xLjhsLTAuNCwwLjhoMy4zbDcuOC0xLjlsLTEuMS0xLjJsLTcuOSwxLjJsNC44LTEuOGwzLjEtMC4zbDIuNC0wLjNsNC4xLTEuMWwyLjQsMC4xbDMuOC0xbDEtMS43bC0xLjEtMS40bC0wLjIsMi4yIEw2MTUsMzA2bC0wLjYtMy4zbDEuMS0zLjNsMS40LTEuM2wzLjktMy43bDUuOS0xLjhsNi0yLjFsNi4zLTNsLTAuMi0ybC0yLjEtMy41bDIuOC04LjVsLTEuNS0xLjhsLTMuNywxLjFsLTEuMS0xLjdsLTUuNSw0LjcgbC0zLjIsNC45bC0yLjcsMi44bC0yLjUsMC45bC0xLjcsMC4zbC0xLDEuNmgtOS4zaC03LjdsLTIuNywxLjJsLTYuNyw0LjJsMC4yLDAuOWwtMC42LDIuNGwtNC42LDJsLTMuOS0wLjVsLTQtMC4ybC0yLjYsMC43IGwtMC4zLDEuOGwwLDBsLTAuMSwwLjZsLTUuOCwzLjdsLTQuNSwxLjhsLTIuOSwwLjhsLTMuNywxLjdsLTQsMC45bC0yLjUtMC4zbC0yLjctMS4zbDIuNy0yLjRsMCwwbDItMi4ybDMuNy0zLjRsMCwwbDAsMGwwLjctMi41IGwwLjUtMy41bC0xLjYtMC43bC00LjMsMi44bC0wLjktMC4xbDAuMy0xLjVsMy44LTIuNWwxLjYtMi44bDAuNy0yLjhsLTIuNy0yLjRsLTMuNy0xLjNsLTEuNywyLjRsLTEuNCwwLjZsLTIuMiwzLjFsMC40LTIuMSBsLTIuNiwxLjVsLTIuMSwybC0yLjYsMy4xbC0xLjMsMi42bDAuMSwzLjhsLTEuOCw0bC0zLjMsM2wtMS40LDAuOWwtMS42LDAuN2gtMS44bC0wLjMtMC40bC0wLjEtMy4zbDAuNy0xLjZsMC43LTEuNWwwLjYtM2wyLjUtMy41IGwyLjktNC4zbDQuNi00LjdoLTAuN2wtNS40LDRsLTAuNC0wLjdsMi45LTIuM2w0LjctNGwzLjctMC41bDQuNC0xLjNsMy43LDAuN2gwLjFsNC43LTAuNWwtMS41LTIuNWwwLDBsLTEuMi0wLjJsMCwwbDAsMGwtMS40LTAuMyBsLTAuNC0xLjdsLTUuMSwwLjVsLTUsMS40bC0yLjUtMi4zbC0yLjUtMC44bDMuMS0zLjNsLTUuMywybC00LjksMi4xbC00LjYsMS41bC0yLjEtMi4xbC01LjUsMS4zbDAuNC0wLjlsNC42LTIuNmw0LjctMi41bDUuOS0yLjEgbDAsMGwwLDBsLTUuMy0xLjZsLTQuNCwwLjhsLTMuOC0xLjlsLTQuNi0xbC0zLjItMC40bC0xLTFMNTEyLjIsMjU5LjFMNTEyLjIsMjU5LjF6IE0yNzEuNiwyMTIuMmw2LjktMi44di0xLjhsLTIuNi0wLjRsLTMuNCwwLjkgbC02LjQsMi4xbC0yLjIsMi43bDAuNywxLjZMMjcxLjYsMjEyLjJ6IE0yMzIuOSwxOTUuOGwyLjMtMi4zbC0yLjktMC41bC01LjcsMWwwLjgsMS42bDEuNiwxLjFMMjMyLjksMTk1LjhMMjMyLjksMTk1Ljh6IE0yMzQuMSwxNzMuNWwtMy4xLDIuMmwwLjQsMC41bDQuMi0wLjRsMC4zLDEuMWwxLjcsMS4ybDQuOS0xLjJsMS4yLTAuNmwtMy4zLTAuOGwtMS42LTEuNWwtMy40LDAuNkwyMzQuMSwxNzMuNUwyMzQuMSwxNzMuNXogTTM1OSwxMzMuM2wtNC40LTEuMWwtMTAuMiwyLjhsLTMuMi0wLjNsLTExLDIuM2wtNC44LDAuNmwtNy44LDIuNWwtNC44LDIuNmwtOC42LDIuNWwtNy42LDAuMWwtNi4zLDIuOWwzLjIsMS43bDAuNywyLjNsLTAuOCwyLjcgbDIuMywyLjFsLTEuMiwzLjVsLTkuMiwwLjJsNC4zLTIuOGgtMy40bC0xMy4xLDIuN2wtOS4xLDIuM2wxLDMuM2wtMS4yLDIuMmw0LjUsMS40bDYuOS0wLjdsMS44LDEuM2wyLjktMS4zbDYuMS0xLjJoMi43bC01LjksMi4xIGwxLjEsMWwtMi41LDIuNmwtNS41LDEuOGwtMi41LTAuNWwtNywyLjdsLTEuOC0wLjlsLTQuMSwwLjRsLTUuMywzbC03LjYsMy4xbC01LjgsMy40bDAuMywyLjRsLTQsMy4zbDEuNCwxLjRsMC41LDIuN2w3LjItMS4xIGwwLjQsMi4xbC0zLjMsMi4xbC0zLjYsMy41aDIuOGw3LjItMi4zbC0xLjYsMi45bDMuNi0yLjFsLTAuNCwzbDQuOC0yLjJsMC40LDEuMWw3LjItMS44bC02LjIsMy40bC01LjcsNC41bC01LjcsMi4xbC0yLjMsMS4yIGwtMTAuMywzLjZsLTQuOSwyLjRsLTYuNSwwLjdsLTguNSwzLjNsLTYuNiwxLjhsLTguMSwyLjhsLTAuNCwxbDEwLTEuN2w2LTJsNi45LTJsNi4xLTEuN2wyLjgsMC41bDguMS0yLjZsNC41LTIuOGwxMC41LTMuMSBsMy45LTIuNmw2LjYtMS44bDcuNi0yLjVsOC45LTQuMmwtMC4yLTIuOWwxMS4xLTQuMWw3LjQtMy45bDkuMi0zLjJsLTAuNCwxLjRsLTYuNywxLjhsLTguMyw1LjdsLTMuMiwzLjVsNi40LTEuM2w2LjEtMS45bDYuNS0xLjMgbDIuOS0wLjNsMy41LTQuMWw2LjMtMS4ybDIuNiwyLjVsNiwyLjdsNi43LTAuNWw1LjcsMmwzLjIsMS4xbDMuMyw2LjFsMy43LDEuN2w3LjEsMC4ybDQuMSwwLjRsLTIuNyw1LjVsMS42LDQuOWwtMy4zLDUuMmwyLjUsMS45IGwwLjYsMi4ybDAsMGw1LjEtMi45bDMuMS0zLjdsLTQuNi0zLjhsMS41LTYuOGwxLjEtNC4ybC0xLjctMi43bC0wLjctMi40bDAuNS0zbC02LjQsMS45bC03LjYsMy4zbC0wLjItMy45bC0wLjYtMi42bC0yLjctMS42IGwtNC4yLTAuMWwzNS40LTMyLjRsMjQuMy0yMC4ybDAsMGwwLDBsLTMuNS0wLjdsLTQuMS0xLjZsLTYuNSwwLjhsLTIuMi0wLjdsLTcuMS0wLjVsLTYuMi0xLjZsLTQuOCwwLjVsLTQuOS0wLjlsMi0xLjJsLTYuMy0wLjMgbC0zLjMsMUwzNTksMTMzLjNMMzU5LDEzMy4zelwifSxWSTp7ZDpcIk02MTcuOSw0NTguOWwtMC43LDAuMmwtMC4xLDAuNGgxLjFsMC43LTAuM2gtMC42TDYxNy45LDQ1OC45TDYxNy45LDQ1OC45eiBNNjE4LjgsNDU1LjRsLTAuNS0wLjFsLTAuMiwwLjJsMCwwIGwwLjMsMC4xTDYxOC44LDQ1NS40eiBNNjE3LjcsNDU1LjVsLTAuMi0wLjJsLTAuMy0wLjFsLTAuNCwwLjFsMC41LDAuM0w2MTcuNyw0NTUuNUw2MTcuNyw0NTUuNXpcIn0sVVk6e2Q6XCJNNjkyLjUsNzg3bC0yLjEtMy43bDEuOS0zbC0zLjgtNC4zbC00LjgtMy41bC02LjItNC4xbC0xLjksMC4ybC02LjItNC45bC0zLjQsMC43bC0wLjUsNS4xbC0wLjMsNi41bDEuMSw2LjMgbC0wLjksMS40bDAuNCw0LjJsMy45LDMuNWwzLjYtMC4ybDUuNCwyLjdsMi43LTAuNmw0LjIsMS4ybDUuMy0zLjVMNjkyLjUsNzg3TDY5Mi41LDc4N3pcIn0sVVo6e2Q6XCJNMTMzOS44LDMwMy4xbC0yLjUsMS4ybC01LjQsNC4zbC0wLjksNC41aC0xLjlsLTIuMy0zbC02LjYtMC4ybC0yLjYtNWwtMi41LTAuMWwtMS41LTYuMmwtNy41LTQuNWwtOC42LDAuNSBsLTUuNywwLjlsLTYuNS01LjVsLTQuOC0yLjNsLTkuMS00LjVsLTEuMS0wLjVsLTExLjksMy42bDYuMiwyMi44bDUuOC0wLjFsLTEuNi0zLjFsMy44LTIuMmwzLjMtMy42bDcuOCwzLjNsMS45LDQuOWwyLjMsMS4zIGw1LjUtMC4zbDIsMS4ybDQuMyw2LjRsNyw0LjRsNC4yLDNsNi4yLDMuMmw3LjcsMi43bDAuOCw0aDIuOWw0LjMsMS40bDEuMy02LjZsLTIuNC00LjdsLTQuMi0xLjZsMC42LTIuOGw0LjQsMC4zbDEuNS0zLjVsMC41LTQgbDYuNC0xLjVsLTAuMiwyLjlsMS4zLDEuOGwyLjEtMC4ybDQuMSwwLjZsNS4yLTQuNWwtNy4xLTMuM2wtMy4yLDEuNmwtNC42LTIuM2wzLjEtNC4xTDEzMzkuOCwzMDMuMUwxMzM5LjgsMzAzLjF6XCJ9LFZVOntkOlwiTTE5MDguNiw2NzYuOWwtMi43LTMuNmwtMC42LDEuN2wxLjMsMi44TDE5MDguNiw2NzYuOUwxOTA4LjYsNjc2Ljl6IE0xOTA2LjYsNjY3LjJsLTIuMy0ybC0wLjksNC45bDAuNSwxLjggbDEuMi0wLjRsMS4zLDAuOEwxOTA2LjYsNjY3LjJMMTkwNi42LDY2Ny4yelwifSxWQTp7ZDpcIk0xMDM5LjUsMzA0LjhsMC42LTAuMWwwLjEsMC42aC0wLjlMMTAzOS41LDMwNC44elwifSxWRTp7ZDpcIk02NDIsNTE4LjlsLTIuMi0xLjVsLTIuOSwwLjJsLTAuNy01LjFsLTQuMS0zLjJsLTQuNC0wLjRsLTEuOC0zbDQuOC0xLjlsLTYuNywwLjFsLTYuOSwwLjRsLTAuMiwxLjZsLTMuMiwxLjkgbC00LjItMC43bC0zLjEtMi45bC02LDAuN2wtNS0wLjFsLTAuMS0yLjFsLTMuNS0zLjVsLTMuOS0wLjFsLTEuNy00LjVsLTIuMSwybDAuNiwzbC03LjEsMi42djQuOGwxLjYsMi4ybC0xLjUsNC42bC0yLjQsMC40bC0xLjktNSBsMi43LTMuN2wwLjMtMy4zbC0xLjctMi45bDMuMy0wLjhsMC4zLTEuNWwtMy43LDEuMWwtMS42LDMuMmwtMi4yLDEuOGwtMS44LDIuNGwtMC45LDQuNWwtMS44LDMuN2wyLjksMC41bDAuNiwyLjlsMS4xLDEuNGwwLjQsMi41IGwtMC44LDIuNGwwLjIsMS4zbDEuMywwLjZsMS4zLDIuMmw3LjItMC42bDMuMiwwLjhsMy44LDUuNWwyLjMtMC43bDQsMC4zbDMuMi0wLjdsMiwxLjFsLTEuMiwzLjRsLTEuMywyLjFsLTAuNSw0LjZsMSw0LjJsMS41LDEuOSBsMC4yLDEuNWwtMi45LDMuMWwyLDEuNGwxLjQsMi4ybDEuNyw2LjRsMywzLjRsNC40LTAuNWwxLjEtMS45bDQuMi0xLjVsMi4zLTFsMC43LTIuN2w0LjEtMS44bC0wLjMtMS40bC00LjgtMC41bC0wLjctNGwwLjMtNC4zIGwtMi40LTEuNmwxLTAuNmw0LjIsMC44bDQuNCwxLjZsMS43LTEuNWw0LTFsNi40LTIuNGwyLjEtMi40bC0wLjctMS44bC0zLjctNC44bDEuNi0xLjh2LTIuOWwzLjQtMS4xbDEuNS0xLjJsLTEuOS0yLjNsMC42LTIuMyBMNjQyLDUxOC45TDY0Miw1MTguOXpcIn0sVk46e2Q6XCJNMTU3MS42LDQzNWwtNS45LTEuNmwtMy0yLjZsMC4yLTMuN2wtNS4yLTEuMWwtMy0yLjRsLTQuMSwzLjRsLTUuMywwLjdoLTQuM2wtMi43LDEuNWw0LDUuMWwzLjQsNS43bDYuOCwwLjFsMyw1LjUgbC0zLjMsMS43bC0xLjMsMi4zbDcuMywzLjhsNS43LDcuNWw0LjMsNS42bDQuOCw0LjRsMiw0LjVsLTAuMiw2LjRsMS44LDQuMmwwLjEsNy43bC04LjksNC45bDIuOCwzLjhsLTUuOCwwLjVsLTQuNywyLjVsNC41LDMuNyBsLTEuMyw0LjNsMi4zLDRsNi42LTUuOWw0LjEtNS4zbDYuMS00LjFsNC4zLTQuMmwtMC40LTExLjJsLTQtMTEuN2wtNC4xLTUuMWwtNS42LTRsLTYuNC04LjNsLTUuMy02LjdsMC41LTQuNGwzLjctNkwxNTcxLjYsNDM1elwifSxFSDp7ZDpcIk05MjguOCwzOTYuMmgwLjh2MC40bC0wLjEsMS4ybC0wLjIsOS43bC0xNy45LTAuM2wtMC4yLDE2LjNMOTA2LDQyNGwtMS40LDMuM2wwLjksOS4ybC0yMS42LTAuMWwtMS4yLDIuMmwwLjMtMi43IGgwLjFsMTIuNC0wLjVsMC43LTIuM2wyLjMtMi45bDItOC44bDcuOC02LjhsMi44LTguMWwxLjctMC40bDEuOS01bDQuNi0wLjdsMS45LDAuOWgyLjVsMS44LTEuNWwzLjQtMC4yTDkyOC44LDM5Ni4yelwifSxZRTp7ZDpcIk0xMjcxLjUsNDY2LjJsLTIuMS00LjRsLTUuMi0xMC41bC0xNS43LDIuNGwtNSwyLjlsLTMuNSw2LjdsLTIuNSwxbC0xLjYtMi4xbC0yLjEsMC4zbC01LjQtMC42bC0xLTAuN2wtNi40LDAuMiBsLTEuNSwwLjZsLTIuNC0xLjdsLTEuMiwzLjFsMC43LDIuN2wtMi4zLDIuMWwwLjQsMi43bC0wLjYsMS4zbDAuNywyLjlsLTEuMSwwLjNsMS43LDIuNmwxLjMsNC43bDEsMS45djMuNGwxLjYsMy44bDMuOSwwLjMgbDEuOC0wLjlsMi43LDAuMmwwLjgtMS43bDEuNS0wLjRsMS4xLTEuN2wxLjQtMC40bDQuNy0wLjNsMy41LTEuMmwzLjEtMi43bDEuNywwLjRsMi40LTAuM2w0LjctNC41bDguOC0zbDUuMy0yLjd2LTIuMWwwLjktMi45IEwxMjcxLjUsNDY2LjJMMTI3MS41LDQ2Ni4yelwifSxaTTp7ZDpcIk0xMTQ5LjIsNjI2LjdsLTEuOS0wLjVsMC40LTEuM2wtMS0wLjNsLTcuNSwxLjFsLTEuNiwwLjdsLTEuNiw0LjFsMS4yLDIuOGwtMS4yLDcuNWwtMC44LDYuNGwxLjQsMS4xbDMuOSwyLjUgbDEuNS0xLjJsMC4zLDYuOWgtNC4zbC0yLjEtMy41bC0yLTIuOGwtNC4zLTAuOGwtMS4yLTMuNGwtMy40LDJsLTQuNS0wLjlsLTEuOC0yLjhsLTMuNS0wLjZsLTIuNiwwLjFsLTAuMy0ybC0xLjktMC4xbDAuNSwybC0wLjcsMyBsMC45LDNsLTAuOSwyLjRsMC41LDIuMmwtMTEuNi0wLjFsLTAuOCwyMC4zbDMuNiw1LjJsMy41LDRsNC42LTEuNWwzLjYsMC40bDIuMSwxLjR2MC41bDEsMC41bDYuMiwwLjdsMS43LDAuN2wxLjktMC4xbDMuMi00LjEgbDUuMS01LjNsMi0wLjVsMC43LTIuMmwzLjMtMi41bDQuMi0wLjlsLTAuMy00LjVsMTcuMS01LjJsLTIuOS0xLjdsMS45LTUuOWwxLjgtMi4ybC0wLjktNS4zbDEuMi01LjFsMS0xLjhsLTEuMi01LjRsLTIuNi0yLjggbC0zLjItMS45bC0zLjUtMS4xbC0yLjItMS4xbC0wLjMtMC4ybDAsMGwwLjUsMS4xbC0xLDAuNEwxMTQ5LjIsNjI2LjdMMTE0OS4yLDYyNi43elwifSxaVzp7ZDpcIk0xMTQ4LjIsNzEzLjdsNi4yLTcuMmwxLjYtNC42bDAuOS0wLjZsMC44LTMuN2wtMC44LTEuOWwwLjUtNC43bDEuMy00LjRsMC4zLTguMWwtMi44LTJsLTIuNi0wLjVsLTEuMS0xLjYgbC0yLjYtMS4zbC00LjYsMC4xbC0wLjMtMi40bC00LjIsMC45bC0zLjMsMi41bC0wLjcsMi4ybC0yLDAuNWwtNS4xLDUuM2wtMy4yLDQuMWwtMS45LDAuMWwtMS43LTAuN2wtNi4yLTAuN2wxLjksNS4xbDEuMSwxLjEgbDEuNiwzLjdsNiw3bDIuMywwLjdsLTAuMSwyLjJsMS41LDQuMWw0LjIsMC45bDMuNCwyLjlsMi4yLDAuMWwyLjYsMS4xbDEuOS0wLjhMMTE0OC4yLDcxMy43TDExNDguMiw3MTMuN3pcIn0sWEs6e2Q6XCJNMTA4MCwyOTkuOGwxLjItMC41bDAuNS0ybDAuOS0wLjRsMC44LDAuOWwxLDAuNGwwLjgsMWwwLjgsMC4zbDEuMSwxLjFoMC44bC0wLjUsMS41bC0wLjUsMC43bDAuMiwwLjVsLTEuMSwwLjJsLTIuOSwxbC0wLjEsMS4yaC0wLjdsLTAuNS0yLjNsLTEuMy0wLjZsLTEuMy0xLjZMMTA4MCwyOTkuOHpcIn0sXCJNQS1FSFwiOntkOlwiTTk2OS4zLDM2My4xbC0xLjgtNi43bC0wLjMtMy45bC0yLTQuMWwtMi4zLTAuMWwtNS41LTEuNGwtNSwwLjRsLTMuMS0yLjdoLTMuOWwtMS44LDMuOWwtMy43LDYuN2wtNCwyLjYgbC01LjQsMi45TDkyNywzNjVsLTAuOSwzLjRsLTIuMSw1LjRsMS4xLDcuOWwtNC43LDUuM2wtMi43LDEuN2wtNC40LDQuNGwtNS4xLDAuN2wtMi44LDIuNGwtMC4xLDAuMWwtMy42LDYuNWwtMy43LDIuM2wtMi4xLDQgbC0wLjIsMy4zbC0xLjYsMy44bC0xLjksMWwtMy4xLDRsLTIsNC41bDAuMywyLjJsLTEuOSwzLjNsLTIuMiwxLjdsLTAuMywzbC0wLjMsMi43bDEuMi0yLjJsMjEuNiwwLjFsLTAuOS05LjJsMS40LTMuM2w1LjItMC41IGwwLjItMTYuM2wxNy45LDAuM2wwLjItOS43bDAuMS0xLjJ2LTAuNGwwLDBsMCwwbDAsMGwwLjEtNy41bDguOS00LjdsNS40LTFsNC40LTEuN2wyLjEtMy4ybDYuMy0yLjVsMC4zLTQuN2wzLjEtMC41bDIuNS0yLjRsNy0xIGwxLTIuNUw5NjkuMywzNjMuMXpcIn0sXCJSVS1XSVRILUNSSU1FQVwiOntkOlwiTTExNDUsMjgxbC00LjUsMi4xbC0wLjcsMS4ybDUuOCwxLjhsLTAuNiwyLjlsMywxLjNsNi4zLTMuNmw1LjMtMS4xbDAuNi0yLjJsLTUuMSwwLjRsLTIuNy0xLjVMMTE0NSwyODF6IE0xMzMyLjMsOTUuMWwtNC41LTRsLTEzLjYtNC4xbC05LjQtMi4xbC02LjIsMC45bC01LjMsMi45bDUuOCwwLjhsNi42LDMuMmw4LDEuN2wxMS41LDEuM0MxMzI1LjIsOTUuNywxMzMyLjMsOTUuMSwxMzMyLjMsOTUuMXogTTExNTMuNiw4Ny44bDAuOS0wLjZsLTUuNy0wLjlMMTE0Niw4N2wtMS4zLDFsLTEuNS0xLjJsLTUuMiwwLjFsLTYuMiwwLjhsNy43LDAuMWwtMS4xLDEuM2w0LjQsMWwzLjYtMC43bDAuMS0wLjdsMi45LTAuM0MxMTQ5LjQsODguNCwxMTUzLjYsODcuOCwxMTUzLjYsODcuOHogTTEzNTQuMSw5Ny43bC0xLjUtMS44bC0xMi41LTIuNmwtMy0wLjNsLTIuMiwwLjVsMS4yLDZDMTMzNi4xLDk5LjUsMTM1NC4xLDk3LjcsMTM1NC4xLDk3Ljd6IE0xMzY5LjMsMTA0bC05LjItMC43bDMuNC0xLjJsLTguMi0xLjVsLTYuMSwxLjlsLTEsMmwxLjUsMi4xbC02LjktMC4xbC01LjMsMi42bC00LjMtMS4xbC05LjMsMC41bDAuMywxLjNsLTkuMiwwLjdsLTQuOSwyLjRsLTQuMiwwLjJsLTEuMiwzLjNsNS41LDIuNmwtNy43LDAuN2wtOS41LTAuM2wtNS44LDEuMWw0LjgsNS40bDYuOSw0LjNsLTkuNi0zbC03LjksMC4zbC01LjEsMmw0LjUsMy44bC00LjktMWwtMi4xLTVsLTQuMi0yLjhsLTEuOCwwLjFsMy42LDMuN2wtNC42LDMuNWw4LjEsNC4ybDAuNCw1LjRsMi45LDIuOWw0LjcsMC41bDAuNCwzLjVsNC40LDMuMWwtMS45LDIuNmwwLjUsMi43bC0zLjcsMS40bC0wLjUsMmwtNS4zLTAuOGwzLjUtNy44bC0wLjUtMy42bC02LjctMy4zbC0zLjgtNy4zbC0zLjctMy43bC0zLjYtMS42bDAuOC00LjJsLTIuOS0yLjlsLTExLjMtMS40bC0yLjEsMWwwLjUsNC43bC00LjMsNC43bDEuMiwxLjdsNC43LDQuMWwwLjEsMi42bDUuMywwLjVsMC44LDEuMWw1LjgsMi45bC0xLDIuOGwtMTguNS02LjFsLTYuNi0xLjdsLTEyLjgtMS42bC0xLjIsMS43bDUuOSwzLjFsLTIuNywzLjZsLTYuNC0zLjJsLTUsMi4ybC03LjYsMC4xbC0yLjEsMS45bC01LjMtMC42bDIuNS0zLjNsLTMuMi0wLjJsLTEyLjMsNC42bC03LjYsMi42bDAuNCwzLjVsLTYsMS4ybC00LTEuOWwtMS4yLTNsNS0wLjdsLTMuNi0zbC0xMi4yLTEuOGw0LjMsMy40bC0wLjgsMy4ybDQuNywzLjNsLTEuMSwzLjhsLTQuNi0xLjlsLTQtMC4zbC04LDUuNGw0LjIsNC4xbC0zLjIsMS40bC0xMS40LTMuNWwtMi4xLDIuMWwzLjMsMi40bDAuMiwyLjdsLTMuOC0xLjRsLTYtMS43bC0xLjktNS44bC0xLTIuNmwtOC00bDIuOS0wLjdsMjAuMSw0LjJsNi40LTEuNWwzLjctMi45bC0xLjYtMy42bC00LTIuNmwtMTcuNi02LjFsLTExLjYtMS4zbC03LjYtMy4ybC0zLjYsMS44bDAsMGwtNi40LDIuMmwtMy4yLDAuNWwwLjQsMy43bDcuMiwzLjdsLTIuOCw0LjFsNi40LDYuM2wtMS43LDQuOGw0LjksNC4xbC0wLjksMy43bDcuMywzLjlsLTAuOSwyLjlsLTMuMywzLjNsLTcuOSw3LjRsMCwwbDUuMywyLjhsLTQuNSwzLjJsMCwwbDAuOSwxbC0yLjYsMy40bDIuNSw1LjVsLTEuNiwxLjlsMi40LDEuNGwxLDIuOGwyLjEsMy42bDUuMiwxLjVsMSwxLjRsMi4zLTAuN2w0LjgsMS40bDEsMi45bC0wLjYsMS42bDMuNywzLjlsMi4yLDEuMWwtMC4xLDEuMWwzLjQsMS4xbDEuNywxLjZsLTEuNiwxLjNsLTMuOS0wLjJsLTAuOCwwLjZsMS41LDJsMiwzLjlsMCwwbDEuOCwwLjJsMS0xLjRsMS41LDAuM2w0LjgtMC41bDMuOCwzLjRsLTAuOSwxLjNsMC43LDEuOWw0LDAuMmwyLjIsMi43bDAuMiwxLjJsNi42LDIuMmwzLjUtMWwzLjYsMi45bDIuOS0wLjFsNy42LDJsMC40LDEuOWwtMS4zLDMuMmwxLjgsMy40bC0wLjMsMi4xbC00LjcsMC41bC0yLjIsMS43bDAuNCwyLjhsNC4yLTFsMC40LDEuM2wtNi44LDIuNmwzLjIsMi40bC0zLjIsNS4ybC0zLjQsMWw1LDMuNmw2LjIsMi40bDcuNCw1LjFsMC41LTAuN2w0LjUsMS4xbDcuNywxbDcuNSwyLjlsMS4xLDEuMmwyLjktMWw1LjEsMS4zbDIuMSwyLjVsMy41LDEuNGwxLjUsMC4ybDQuMywzLjhsMi40LDAuNGwwLjUtMS41bDIuNi0yLjVsMCwwbC03LjMtNy4zbC0wLjQtNC4xbC01LjktNS45bDMuNS02LjNsNC42LTEuMWwxLjQtMy43bC0yLjgtMWwtMC4yLTMuMmwtNC4yLTQuMWwtMy42LDAuMmwtNS4zLTQuM2wxLjctNC43bC0xLjctMS4ybDIuMS02LjhsNiwzLjZsLTAuNy00LjZsOC4xLTYuNmw3LjUtMC4ybDExLjksNC4zbDYuNiwyLjRsNC4zLTIuNWw3LjYtMC4ybDcuMywzLjJsMC44LTEuOGw2LjksMC4zbDAuMi0zbC05LjQtNC4ybDMuNi0yLjlsLTEuNS0xLjdsMy45LTEuNmwtNS00LjFsMS40LTIuMWwxNi44LTIuMWwxLjctMS41bDEwLjgtMi4ybDMuMS0yLjVsOSwxLjNsNC4zLDYuM2w0LjMtMS41bDcsMi4xbDEuMiwzLjNsNC40LTAuNGw5LjEtNS43bC0wLjgsMS45bDguMyw0LjdsMTguMSwxNS41bDEuMS0zLjNsOC4zLDMuNmw2LjItMS42bDMuMiwxLjFsNC4xLDMuNmwzLjksMS4ybDMuMywyLjZsNi0wLjlsNC4zLDMuOGwxLjctMC41bDQuNy0xbDYuNi01LjRsNS45LTIuOWw1LjMsMS45bDUuMSwwLjFsNC43LDIuOWw1LDAuMmw3LjksMS42bDIuNC00LjNsLTQtMy42bDEuMy02LjRsNi45LDIuNWw0LjgsMC44bDYuNiwxLjVsMy43LDQuNmw4LjQsMi42bDMuOS0xLjFsNS43LTAuOGw1LjQsMC44bDYuNSwzbDQuOSwzLjFoNC41bDYuNywxbDMuNi0xLjZsNS44LTFsNC41LTQuNGwzLjMsMC43bDMuOSwyLjFsNS41LTAuNWw3LjMsMi4zbDQuNC0zLjlsLTEuOS0yLjdsLTAuMS02LjVsMS4yLTJsLTIuNS0zLjNsLTMuNy0xLjVsMS43LTNsNS4xLTEuMWw2LjItMC4ybDguNSwxLjhsNS45LDIuM2w3LjcsNi4xbDMuOCwyLjdsNC40LDMuN2w2LjEsNi4xbDkuOSwxLjlsOC45LDQuNWw2LDUuOGg3LjVsMi42LTIuNWw2LjktMS44bDEuMyw1LjZsLTAuNCwyLjNsMi44LDYuOGwwLjYsNmwtNi44LTEuMWwtMi45LDIuMmw0LjcsNS4zbDMuOCw3LjNsLTIuNSwwLjFsMS45LDMuMWwwLDBsMS40LDEuMWwwLDBsMCwwbDAsMGwtMC40LTJsNC00LjVsNS4xLDNsMy4yLTAuMWw0LjQtMy42bDEtMy43bDIuMS03LjFsMS45LTcuMmwtMS4zLTQuM2wxLTlsLTUuMi05LjlsLTUuNS03LjNsLTEuMy02LjJsLTQuNy01LjFsLTEyLjctNi43bC01LjYtMC40bC0wLjMsM2wtNS44LTEuM2wtNS43LTMuOGwtOC0wLjdsNC45LTE0LjFsMy41LTExLjVsMTMuMS0xLjhsMTQuOSwxbDIuNS0yLjhsNy45LDAuOGw0LjMsNC4zbDYuNC0wLjZsOC40LTEuNmwtNy43LTMuNXYtOS44bDkuMS0xLjlsMTIuMSw3LjFsMy42LTYuNGwtMy4yLTQuN2w0LjctMC41bDYuNSw4LjFsLTIuNCw0LjZsLTAuOCw2bDAuMyw3LjVsLTUuNywxLjNsMi44LDIuN2wtMC4xLDMuNmw2LjQsOC4zbDE2LDEzLjRsMTAuNSw4LjhsNS43LDQuM2wxLjYtNS43bC00LjUtNi4ybDUuNy0xLjVsLTUuNC02LjlsNS0zLjFsLTQuNy0yLjZsLTMuNC01bDQuMS0wLjJsLTktOC42bC02LjctMS40bC0yLjktMi40bC0xLjEtNS42bC0zLjEtMy45bDcsMC44bDEuMy0yLjVsNC43LDIuMmw2LjEtNC42bDExLjQsNGwtMS43LTIuNmwyLTMuNmwxLjUtNGwzLjEtMC43bDYuNS00LjNsOS44LDEuMmwtMC45LTEuNWwtMy44LTIuM2wtNC4xLTEuNmwtOS4xLTQuNmwtOC4xLTNsNi4xLDAuNGwyLTIuNWwwLDBsLTMyLjktMjEuOWwtOS40LTIuM2wtMTUuNy0yLjZsLTcuOSwwLjNsLTE1LjItMS40bDEuOCwyLjNsOC41LDMuNGwtMi41LDEuOGwtMTQuMi00LjhsLTYuOCwwLjZsLTkuMi0xLjFsLTcsMC4ybC0zLjksMS4xbC03LjItMS42bC01LjEtMy44bC02LjUtMi4ybC05LjItMC45bC0xNC43LDFsLTE2LjEtNGwtNy44LTNsLTQwLjEtMy40bC0yLjEsMi4ybDkuMyw0LjhsLTcuNS0wLjdsLTEsMS41bC05LjctMS42bC01LDEuNGwtOS4zLTIuNGwzLDUuNWwtOC45LTIuMWwtMTAtNC4xbC0wLjQtMi4ybC02LTMuM2wtOS44LTIuNmgtNi4xbC05LjMtMC45bDQuNywzLjlsLTE3LjItMC44bC0zLjktMi4zbC0xMy4zLTAuOWwtNS4zLDAuOGwtMC4xLDEuM2wtNS44LTMuMmwtMi4zLDAuOWwtNy4yLTEuMmwtNS42LTAuN2wxLjEtMS41bDYuNi0yLjhsMi4zLTEuNWwtMi40LTIuNWwtNS41LTEuOWwtMTEuNS0yLjNsLTEwLjgtMC4xbC0xLjksMS4yTDEzNjkuMywxMDRMMTM2OS4zLDEwNHogTTEyMDcuMSwxMzUuNmwtOS45LTQuM2wtMy4xLTQuM2wzLjMtNC45bDIuOC01bDguNi00LjdsOS44LTIuNGwxMS4zLTIuNGwxLjMtMS41bC00LjItMS45bC02LjYsMC42bC00LjksMS44bC0xMS43LDAuOWwtMTAuMSwzLjFsLTYuOCwyLjdsMi41LDIuMmwtNi42LDQuNGwzLjksMC43bC01LjQsNC4zbDEuNiwyLjhsLTMuNCwxLjFsMS45LDIuOGw3LjksMS40bDIuMiwyLjNsMTMuNCwwLjdMMTIwNy4xLDEzNS42TDEyMDcuMSwxMzUuNnogTTE1MjEuMSwxMTAuOWwtMTcuOS0yLjZsLTEwLjItMC4ybC0zLjQsMC45bDMuNCwzLjRsMTIuNCwzLjJsNC41LTEuMmwxNC4yLDAuMkMxNTI0LjEsMTE0LjYsMTUyMS4xLDExMC45LDE1MjEuMSwxMTAuOXogTTE1NDYuMywxMTMuMmwtMTEuNy0xLjNsLTguMi0wLjdsMS43LDEuNmwxMC4zLDJsNi44LDAuNEwxNTQ2LjMsMTEzLjJMMTU0Ni4zLDExMy4yeiBNMTUzMy44LDEyMi43bC0yLjUtMS40bC04LjMtMS45bC00LjEsMC41bC0wLjgsMmwxLjEsMC4ybDguOCwwLjZDMTUyOCwxMjIuNywxNTMzLjgsMTIyLjcsMTUzMy44LDEyMi43eiBNMTY5Ni40LDEzNWwtNi0zLjZsLTEuNCwyLjJsMy41LDEuNkwxNjk2LjQsMTM1eiBNMTA4NCwyMjguOWwtMC42LTEuNWwwLjItMS43bC0yLjItMC45bC01LTEuMWwtNi4zLDJsLTAuNywyLjZsNS45LDAuN0wxMDg0LDIyOC45eiBNMTY3My43LDI1MC43bC03LjItNi4ybC01LjEtNmwtNi44LTUuOGwtNC45LTRsLTEuMywwLjhsNC40LDIuOGwtMS45LDIuOGw2LjgsOC4zbDcuOCw2bDYuNCw4LjNsMi40LDQuNmw1LjUsNi44bDMuOCw2bDQuNiw1LjJsLTAuMS00LjhsNi41LDMuOGwtMy00LjRsLTkuNS02LjNsLTMuNy05bDguOSwyTDE2NzMuNywyNTAuN0wxNjczLjcsMjUwLjd6XCJ9LFwiVUEtV0lUSE9VVC1DUklNRUFcIjp7ZDpcIk0xMTM4LjUsMjQxbC00LjgsMC41bC0xLjUtMC4zbC0xLDEuNGwtMS44LTAuMmwwLDBsLTQuMSwwLjNsLTEuMiwxLjRsMC4yLDMuMWwtMi0wLjZsLTQuMywwLjNsLTEuNS0xLjVsLTEuNiwxLjFsLTItMC45bC0zLjgtMC4xbC01LjYtMS41bC01LTAuNWwtMy43LDAuMmwtMi40LDEuNmwtMi4yLDAuM2wzLjEsNS4zbC0wLjMsMS44bC0yLjMsMC43bC0zLjgsNS4xbDEuNiwyLjhsLTEuMS0wLjRsLTEuMSwxLjdsLTAuNywyLjVsMi45LDEuN2wwLjYsMS42bDEuOS0xLjNsMy4yLDAuN2gzLjJsMi40LDEuNWwxLjYtMC45bDMuNi0wLjZsMS0xLjVoMi4xbDEuMS0wLjlsMy4yLTAuNmwzLjksMS45bDIsMC4zbDIuNSwxLjZ2Mi4xbDEuOSwxLjFsMS4xLDIuNmwyLDEuNWwtMC4yLDFsMSwwLjZsLTEuMiwwLjVsLTMtMC4ybC0wLjYtMC45bC0xLDAuNWwwLjUsMS4xbC0xLjEsMmwtMC41LDIuMWwtMS4yLDAuN2wyLjQsMS4xbDIuMi0xbDIuNCwxLjFsMy4zLTQuNmwxLjMtMy40bDQuNS0wLjhsMC43LDIuNGw4LDEuNWwxLjcsMS40bDcuNCwxLjNsLTEtMy45bDMuOS0yLjNsNC42LTAuM2wzLTJsMy45LTAuNWwtMC40LTIuOGwyLjItMS43bDQuNy0wLjVsMC4zLTIuMWwtMS44LTMuNGwxLjMtMy4ybC0wLjQtMS45bC03LjYtMmwtMi45LDAuMWwtMy42LTIuOWwtMy41LDFsLTYuNi0yLjJsLTAuMi0xLjJsLTIuMi0yLjdsLTQuNy0yLjFsMC45LTEuM0wxMTM4LjUsMjQxTDExMzguNSwyNDF6XCJ9fSxhLnByb3RvdHlwZS5jcmVhdGVUb29sdGlwPWZ1bmN0aW9uKCl7aWYodGhpcy50b29sdGlwKXJldHVybiExO3RoaXMudG9vbHRpcD10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixcInN2Z01hcC10b29sdGlwXCIsZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdKSx0aGlzLnRvb2x0aXBDb250ZW50PXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtY29udGVudC13cmFwcGVyXCIsdGhpcy50b29sdGlwKSx0aGlzLnRvb2x0aXBQb2ludGVyPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLFwic3ZnTWFwLXRvb2x0aXAtcG9pbnRlclwiLHRoaXMudG9vbHRpcCl9LGEucHJvdG90eXBlLnNldFRvb2x0aXBDb250ZW50PWZ1bmN0aW9uKGwpe3RoaXMudG9vbHRpcCYmKHRoaXMudG9vbHRpcENvbnRlbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy50b29sdGlwQ29udGVudC5hcHBlbmQobCkpfSxhLnByb3RvdHlwZS5zaG93VG9vbHRpcD1mdW5jdGlvbihsKXt0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZChcInN2Z01hcC1hY3RpdmVcIiksdGhpcy5tb3ZlVG9vbHRpcChsKX0sYS5wcm90b3R5cGUuaGlkZVRvb2x0aXA9ZnVuY3Rpb24oKXt0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZShcInN2Z01hcC1hY3RpdmVcIil9LGEucHJvdG90eXBlLm1vdmVUb29sdGlwPWZ1bmN0aW9uKGwpe3ZhciB0LGUsbyxpLGE9bC5wYWdlWHx8KGwudG91Y2hlcyYmbC50b3VjaGVzWzBdP2wudG91Y2hlc1swXS5wYWdlWDpudWxsKSxMPWwucGFnZVl8fChsLnRvdWNoZXMmJmwudG91Y2hlc1swXT9sLnRvdWNoZXNbMF0ucGFnZVk6bnVsbCk7bnVsbCE9PWEmJm51bGwhPT1MJiYodD13aW5kb3cuaW5uZXJXaWR0aCxlPXRoaXMudG9vbHRpcC5vZmZzZXRXaWR0aCxvPXRoaXMudG9vbHRpcC5vZmZzZXRIZWlnaHQsKGk9YS1lLzIpPD02PyhhPTYrZS8yLHRoaXMudG9vbHRpcFBvaW50ZXIuc3R5bGUubWFyZ2luTGVmdD1pLTYrXCJweFwiKTp0LTY8PWkrZT8oYT10LTYtZS8yLHRoaXMudG9vbHRpcFBvaW50ZXIuc3R5bGUubWFyZ2luTGVmdD0tMSoodC02LWwucGFnZVgtZS8yKStcInB4XCIpOnRoaXMudG9vbHRpcFBvaW50ZXIuc3R5bGUubWFyZ2luTGVmdD1cIjBweFwiLEwtMTItbzw9Nj8odGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQoXCJzdmdNYXAtdG9vbHRpcC1mbGlwcGVkXCIpLEwrPTMyKToodGhpcy50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzdmdNYXAtdG9vbHRpcC1mbGlwcGVkXCIpLEwtPTEyKSx0aGlzLnRvb2x0aXAuc3R5bGUubGVmdD1hK1wicHhcIix0aGlzLnRvb2x0aXAuc3R5bGUudG9wPUwrXCJweFwiKX0sYS5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24obCl7KGNvbnNvbGUuZXJyb3J8fGNvbnNvbGUubG9nKShcInN2Z01hcCBlcnJvcjogXCIrKGx8fFwiVW5rbm93biBlcnJvclwiKSl9LGEucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24obCx0LGUsbyl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsKTtyZXR1cm4gdCYmKHQ9dC5zcGxpdChcIiBcIikpLmZvckVhY2goZnVuY3Rpb24obCl7aS5jbGFzc0xpc3QuYWRkKGwpfSksbyYmKGkuaW5uZXJIVE1MPW8pLGUmJmUuYXBwZW5kQ2hpbGQoaSksaX0sYS5wcm90b3R5cGUubnVtYmVyV2l0aENvbW1hcz1mdW5jdGlvbihsLHQpe3JldHVybiBsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyx0fHxcIixcIil9LGEucHJvdG90eXBlLmdldENvbG9yPWZ1bmN0aW9uKGwsdCxlKXtsPWwuc2xpY2UoLTYpLHQ9dC5zbGljZSgtNiksZT1wYXJzZUZsb2F0KGUpLnRvRml4ZWQoMSk7dmFyIG89TWF0aC5jZWlsKHBhcnNlSW50KGwuc3Vic3RyaW5nKDAsMiksMTYpKmUrcGFyc2VJbnQodC5zdWJzdHJpbmcoMCwyKSwxNikqKDEtZSkpLGk9TWF0aC5jZWlsKHBhcnNlSW50KGwuc3Vic3RyaW5nKDIsNCksMTYpKmUrcGFyc2VJbnQodC5zdWJzdHJpbmcoMiw0KSwxNikqKDEtZSkpLGU9TWF0aC5jZWlsKHBhcnNlSW50KGwuc3Vic3RyaW5nKDQsNiksMTYpKmUrcGFyc2VJbnQodC5zdWJzdHJpbmcoNCw2KSwxNikqKDEtZSkpO3JldHVyblwiI1wiK3RoaXMuZ2V0SGV4KG8pK3RoaXMuZ2V0SGV4KGkpK3RoaXMuZ2V0SGV4KGUpfSxhLnByb3RvdHlwZS5nZXRIZXg9ZnVuY3Rpb24obCl7cmV0dXJuKFwiMFwiKyhsPWwudG9TdHJpbmcoMTYpKSkuc2xpY2UoLTIpfSxhLnByb3RvdHlwZS5nZXRDb3VudHJ5TmFtZT1mdW5jdGlvbihsKXtyZXR1cm4odGhpcy5vcHRpb25zLmNvdW50cnlOYW1lcyYmdGhpcy5vcHRpb25zLmNvdW50cnlOYW1lc1tsXT90aGlzLm9wdGlvbnMuY291bnRyeU5hbWVzOnRoaXMuY291bnRyaWVzKVtsXX0sYX0hZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInN2Zy1wYW4tem9vbVwiXSxmdW5jdGlvbihsKXtyZXR1cm4gdC5zdmdNYXA9ZShsKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXQuc3ZnTWFwPWUocmVxdWlyZShcInN2Zy1wYW4tem9vbVwiKSk6dC5zdmdNYXA9ZSh0LnN2Z1Bhblpvb20pfSh0aGlzLGZ1bmN0aW9uKGwpe3JldHVybiBzdmdNYXBXcmFwcGVyKGwpfSk7IiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGJ1dHRvbiwgYnV0dG9uQ2xvc2UgfSkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cG9wdXBTZWxlY3Rvcn1gKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtidXR0b259YCk7XG4gICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtidXR0b25DbG9zZX1gKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuXCIpO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxsSW5mbyhuYW1lLCBqb2IsIGFib3V0KSB7XG4gICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuICAgIHRoaXMubmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pvYlwiKTtcbiAgICB0aGlzLmpvYi50ZXh0Q29udGVudCA9IGpvYjtcbiAgICB0aGlzLmFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGV4dFwiKTtcbiAgICB0aGlzLmFib3V0LnRleHRDb250ZW50ID0gYWJvdXQ7XG4gIH1cblxuICBmaWxsVXNlckluZm8obmFtZSwgam9iLCBhYm91dCkge1xuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZTJcIik7XG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLmpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjam9iMlwiKTtcbiAgICB0aGlzLmpvYi50ZXh0Q29udGVudCA9IGpvYjtcbiAgICB0aGlzLmFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGV4dDJcIik7XG4gICAgdGhpcy5hYm91dC50ZXh0Q29udGVudCA9IGFib3V0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XG5pbXBvcnQgc3ZnTWFwIGZyb20gXCJzdmdtYXBcIjtcbmltcG9ydCBcInN2Z21hcC9kaXN0L3N2Z01hcC5taW4uY3NzXCI7XG5cbmNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKHtcbiAgcG9wdXBTZWxlY3RvcjogXCIjcG9wdXBcIixcbiAgYnV0dG9uOiBcIiNidXR0b24xXCIsXG4gIGJ1dHRvbkNsb3NlOiBcIi5wb3B1cF9fYnV0dG9uXCIsXG59KTtcblxuY29uc3QgcG9wdXAyID0gbmV3IFBvcHVwKHtcbiAgcG9wdXBTZWxlY3RvcjogXCIjcG9wdXAyXCIsXG4gIGJ1dHRvbjogXCIjYnV0dG9uMlwiLFxuICBidXR0b25DbG9zZTogXCIjYnV0dG9uM1wiLFxufSk7XG5cbnBvcHVwLmZpbGxJbmZvKFxuICBcIkFuaSBQZXRyaWNob3JcIixcbiAgXCJEYXRhIEFuYWx5c3RcIixcbiAgXCJBbmkgUGV0cmljaG9yIGlzIGEgQnJvb2tseW4tYmFzZWQgZGF0YSBhbmFseXN0LiBTaGUgaGFzIGEgYmFja2dyb3VuZCBpbiBvcGVyYXRpb25zICYgbG9naXN0aWNzIGluIHRoZSBzdXN0YWluYWJpbGl0eSBmb29kIHNlY3RvciwgcHJpbWFyaWx5IHdvcmtpbmcgdG8gYnJpbmcgbG9jYWxseSBmYXJtZWQgaW5ncmVkaWVudHMgdG8gdXJiYW4gcmVzaWRlbnRzLiBTaGUgYmVsaWV2ZXMgdGhhdCBiaWcgZGF0YSBjYW4gYmUgdXNlZCB0byBlZmZlY3QgZ29vZCBpbiB0aGUgd29ybGQuXCJcbik7XG5cbnBvcHVwMi5maWxsVXNlckluZm8oXG4gIFwiS3VydG5leSBKb3NlcGhcIixcbiAgXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxuICBcIkt1cnRuZXkgSm9zZXBoIGlzIGFuIE9ybGFuZG8gYmFzZWQgc29mdHdhcmUgZW5naW5lZXIgd2hvIGFpbXMgdG8gcHJvdmlkZSBjb21wYW5pZXMgYW5kIGxvY2FsIGJ1c2luZXNzZXMgd2l0aCBlZmZlY3RpdmUgc29sdXRpb25zIHRob3VnaCB3ZWIgZGV2ZWxvcG1lbnQuXCJcbik7XG5cbnBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cDIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxubmV3IHN2Z01hcCh7XG4gIHRhcmdldEVsZW1lbnRJRDogXCJzdmdNYXBcIixcbiAgZGF0YToge1xuICAgIGRhdGE6IHtcbiAgICAgIE1XOiB7XG4gICAgICAgIG5hbWU6IFwiTWVnYVdhdHQgQ2FwYWNpdHk6XCIsXG4gICAgICAgIHRocmVzaG9sZE1heDogNTAwMDAsXG4gICAgICAgIHRocmVzaG9sZE1pbjogMTAwMCxcbiAgICAgIH0sXG4gICAgICBTRjoge1xuICAgICAgICBuYW1lOiBcIlNvbGFyIEZhcm1zOlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGFwcGx5RGF0YTogXCJNV1wiLFxuICAgIHZhbHVlczoge1xuICAgICAgVVM6IHsgTVc6IDE0NzA4NiwgY29sb3I6IFwiI0ZGRkZFMFwiLCBTRjogMTM1OSB9LFxuICAgICAgQ046IHsgTVc6IDEzOTk5NCwgY29sb3I6IFwiI0ZGRkZFMFwiLCBTRjogMjczNSB9LFxuICAgICAgSU46IHsgTVc6IDU5MjcxLCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiA0NjEgfSxcbiAgICAgIEFVOiB7IE1XOiA1NTcwMiwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMjA4IH0sXG4gICAgICBHUjogeyBNVzogNDMwNDYsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDUyNCB9LFxuICAgICAgQlI6IHsgTVc6IDM2MjM4LCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiA2ODMgfSxcbiAgICAgIE1YOiB7IE1XOiAyMDg1OCwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMjM2IH0sXG4gICAgICBFUzogeyBNVzogMjA2MDYsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDIwMyB9LFxuICAgICAgQ086IHsgTVc6IDE5MDU0LCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAxNzggfSxcbiAgICAgIE9NOiB7IE1XOiAxNTQzMCwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMTAgfSxcbiAgICAgIE1BOiB7IE1XOiAxNDEzMiwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMjUgfSxcbiAgICAgIENMOiB7IE1XOiAxMzk2NywgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogODcgfSxcbiAgICAgIFZOOiB7IE1XOiAxNTQzMCwgY29sb3I6IFwiI0ZFRDhCMVwiLCBTRjogMTU1IH0sXG4gICAgICBQSDogeyBNVzogMTE2OTYsIGNvbG9yOiBcIiNGRUQ4QjFcIiwgU0Y6IDEyNyB9LFxuICAgICAgSlA6IHsgTVc6IDEwMDk5LCBjb2xvcjogXCIjRkVEOEIxXCIsIFNGOiAyMjkgfSxcbiAgICAgIEtXOiB7IE1XOiA5NTIwLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA2IH0sXG4gICAgICBHQjogeyBNVzogODMxNCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTk3IH0sXG4gICAgICBNTTogeyBNVzogNjA1MCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNCB9LFxuICAgICAgQUU6IHsgTVc6IDU2MjAsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDE0IH0sXG4gICAgICBTQTogeyBNVzogNDg4NiwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTkgfSxcbiAgICAgIERaOiB7IE1XOiA0NDU1LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAyMiB9LFxuICAgICAgREU6IHsgTVc6IDQ0MzMsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDg4IH0sXG4gICAgICBaQTogeyBNVzogMzc0MiwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNDkgfSxcbiAgICAgIEtSOiB7IE1XOiAzMzg1LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxNyB9LFxuICAgICAgQUY6IHsgTVc6IDMxMzUsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDUgfSxcbiAgICAgIFBUOiB7IE1XOiAyODk1LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAzMiB9LFxuICAgICAgQkQ6IHsgTVc6IDI3OTMsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDQwIH0sXG4gICAgICBJRDogeyBNVzogMjU2NSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogNiB9LFxuICAgICAgQ0E6IHsgTVc6IDI1MjcsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDQ0IH0sXG4gICAgICBGUjogeyBNVzogMjQ4OSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMzIgfSxcbiAgICAgIEVHOiB7IE1XOiAyMjg2LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA0MCB9LFxuICAgICAgTVk6IHsgTVc6IDIxMzgsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDQwIH0sXG4gICAgICBJVDogeyBNVzogMjAxOSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMzggfSxcbiAgICAgIFRSOiB7IE1XOiAxNzc3LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxMyB9LFxuICAgICAgVFc6IHsgTVc6IDE3MTUsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDE0IH0sXG4gICAgICBVQTogeyBNVzogMTcwMywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMzEgfSxcbiAgICAgIFRIOiB7IE1XOiAxNjk5LCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxMSB9LFxuICAgICAgR0g6IHsgTVc6IDE2NjIsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDIwIH0sXG4gICAgICBKTzogeyBNVzogMTY0OCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMjggfSxcbiAgICAgIERLOiB7IE1XOiAxNDcxLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAyMCB9LFxuICAgICAgSVE6IHsgTVc6IDEzMDAsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDIgfSxcbiAgICAgIExLOiB7IE1XOiAxMjcwLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiA2IH0sXG4gICAgICBSTzogeyBNVzogMTI2MywgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMjEgfSxcbiAgICAgIE5aOiB7IE1XOiAxMjExLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAxMSB9LFxuICAgICAgUlU6IHsgTVc6IDExMzQsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDM1IH0sXG4gICAgICBFVDogeyBNVzogMTEwMCwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMyB9LFxuICAgICAgS1o6IHsgTVc6IDEwODcsIGNvbG9yOiBcIiM5MEVFOTBcIiwgU0Y6IDE5IH0sXG4gICAgICBBUjogeyBNVzogMTAwMSwgY29sb3I6IFwiIzkwRUU5MFwiLCBTRjogMTMgfSxcbiAgICAgIE5MOiB7IE1XOiAxMDAwLCBjb2xvcjogXCIjOTBFRTkwXCIsIFNGOiAyMSB9LFxuICAgICAgUEw6IHsgTVc6IDkxOCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogOSB9LFxuICAgICAgUEU6IHsgTVc6IDkwNCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTEgfSxcbiAgICAgIFFBOiB7IE1XOiA4MTUsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIElMOiB7IE1XOiA3ODgsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDkgfSxcbiAgICAgIERPOiB7IE1XOiA3MTQsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEyIH0sXG4gICAgICBUTjogeyBNVzogNzAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxMyB9LFxuICAgICAgQ0Q6IHsgTVc6IDY0MCwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMyB9LFxuICAgICAgQkE6IHsgTVc6IDYzMiwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTIgfSxcbiAgICAgIEhOOiB7IE1XOiA1NzIsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDE1IH0sXG4gICAgICBCRzogeyBNVzogNTQ5LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA5IH0sXG4gICAgICBNSzogeyBNVzogNTMwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAzIH0sXG4gICAgICBLRTogeyBNVzogNTE0LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxMiB9LFxuICAgICAgS0g6IHsgTVc6IDQ4NSwgY29sb3I6IFwiI0NCQzNFM1wiLCBTRjogMTIgfSxcbiAgICAgIFBLOiB7IE1XOiA0NTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIEFMOiB7IE1XOiAzOTAsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIEVDOiB7IE1XOiAzNjIsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDQgfSxcbiAgICAgIFBSOiB7IE1XOiAzNDIsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDUgfSxcbiAgICAgIFNZOiB7IE1XOiAzMzgsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDMgfSxcbiAgICAgIEhVOiB7IE1XOiAzMTQsIGNvbG9yOiBcIiNDQkMzRTNcIiwgU0Y6IDEwIH0sXG4gICAgICBSUzogeyBNVzogMjgwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBTRzogeyBNVzogMjc0LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA0IH0sXG4gICAgICBTVjogeyBNVzogMjY1LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBBWjogeyBNVzogMjUwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAyIH0sXG4gICAgICBCRjogeyBNVzogMjQxLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA4IH0sXG4gICAgICBCRTogeyBNVzogMjMzLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBTTjogeyBNVzogMjEyLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA4IH0sXG4gICAgICBBTTogeyBNVzogMjAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxIH0sXG4gICAgICBHVTogeyBNVzogMTk2LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBVWTogeyBNVzogMTkwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBYSzogeyBNVzogMTgwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAyIH0sXG4gICAgICBOSTogeyBNVzogMTgwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA1IH0sXG4gICAgICBQQTogeyBNVzogMTc3LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAzIH0sXG4gICAgICBCTzogeyBNVzogMTYwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAzIH0sXG4gICAgICBURDogeyBNVzogMTYwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA0IH0sXG4gICAgICBNVzogeyBNVzogMTUxLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiA0IH0sXG4gICAgICBHTTogeyBNVzogMTUwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAyIH0sXG4gICAgICBUVDogeyBNVzogMTUwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAyIH0sXG4gICAgICBFSDogeyBNVzogMTA1LCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAyIH0sXG4gICAgICBCSDogeyBNVzogMTAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxIH0sXG4gICAgICBTWjogeyBNVzogMTAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxIH0sXG4gICAgICBWQTogeyBNVzogMTAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxIH0sXG4gICAgICBNTDogeyBNVzogMTAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAzIH0sXG4gICAgICBVWjogeyBNVzogMTAwLCBjb2xvcjogXCIjQ0JDM0UzXCIsIFNGOiAxIH0sXG4gICAgICBHVDogeyBNVzogOTMsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDIgfSxcbiAgICAgIFpNOiB7IE1XOiA4OCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgQ1o6IHsgTVc6IDg3LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAzIH0sXG4gICAgICBKTTogeyBNVzogNzIsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDIgfSxcbiAgICAgIE1SOiB7IE1XOiA2NSwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgTEE6IHsgTVc6IDY0LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBTSzogeyBNVzogNTgsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFVHOiB7IE1XOiA1NywgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgQlk6IHsgTVc6IDU1LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBHRjogeyBNVzogNTUsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIEJKOiB7IE1XOiA1MCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgVEc6IHsgTVc6IDUwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAyIH0sXG4gICAgICBOQTogeyBNVzogNDYsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFNFOiB7IE1XOiA0NiwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMiB9LFxuICAgICAgTVo6IHsgTVc6IDQwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBDVTogeyBNVzogMzksIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIEtOOiB7IE1XOiAzOCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgTU46IHsgTVc6IDMwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBOQzogeyBNVzogMzAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIENGOiB7IE1XOiAyNSwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgTlA6IHsgTVc6IDI1LCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBaVzogeyBNVzogMjUsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIEFUOiB7IE1XOiAyNCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgSVI6IHsgTVc6IDIwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBNRzogeyBNVzogMjAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIFNTOiB7IE1XOiAyMCwgY29sb3I6IFwiIzUyOEFBRVwiLCBTRjogMSB9LFxuICAgICAgU086IHsgTVc6IDEwLCBjb2xvcjogXCIjNTI4QUFFXCIsIFNGOiAxIH0sXG4gICAgICBTRDogeyBNVzogMTAsIGNvbG9yOiBcIiM1MjhBQUVcIiwgU0Y6IDEgfSxcbiAgICAgIEdMOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE5POiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEhUOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFZFOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFBZOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENSOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdZOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFNSOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEZLOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFBHOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFNCOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEZJOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEVFOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExWOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExUOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIElTOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIElFOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEhSOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFBHOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENIOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFNJOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE1EOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE1FOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdFOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFRKOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFRNOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEtQOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEtHOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFlFOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExZOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEFPOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEJXOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFRaOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEVSOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExTOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE5FOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENHOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdBOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE5HOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENNOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdROiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFBGOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEJaOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEJTOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEJJOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFJXOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENZOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExCOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFBTOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIE1UOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIENJOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIExSOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdOOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEdXOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFNMOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFNUOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIFRMOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICAgIEZPOiB7IE1XOiBcIk5vIG1lZ2F3YXR0IGNhcGFjaXR5XCIsIGNvbG9yOiBcIiNGRkNDQ0JcIiwgU0Y6IDAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiU3ZnUGFuWm9vbSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiU3ZnVXRpbHMiLCJlbmFibGUiLCJpbnN0YW5jZSIsImRlZnMiLCJzdmciLCJxdWVyeVNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJzdmdOUyIsImFwcGVuZENoaWxkIiwic3R5bGVFbCIsInN0eWxlIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJ6b29tR3JvdXAiLCJ3aWR0aCIsImhlaWdodCIsIl9jcmVhdGVab29tSW4iLCJfY3JlYXRlWm9vbVJlc2V0IiwiX2NyZWF0ZVpvb21PdXQiLCJjb250cm9sSWNvbnMiLCJ6b29tSW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0UHVibGljSW5zdGFuY2UiLCJ6b29tSW5CYWNrZ3JvdW5kIiwiem9vbUluU2hhcGUiLCJyZXNldFBhblpvb21Db250cm9sIiwicmVzZXQiLCJyZXNldFBhblpvb21Db250cm9sQmFja2dyb3VuZCIsInJlc2V0UGFuWm9vbUNvbnRyb2xTaGFwZTEiLCJyZXNldFBhblpvb21Db250cm9sU2hhcGUyIiwiem9vbU91dCIsInpvb21PdXRCYWNrZ3JvdW5kIiwiem9vbU91dFNoYXBlIiwiZGlzYWJsZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIlV0aWxzIiwiU2hhZG93Vmlld3BvcnQiLCJ2aWV3cG9ydCIsIm9wdGlvbnMiLCJpbml0IiwicHJvdG90eXBlIiwib3JpZ2luYWxTdGF0ZSIsInpvb20iLCJ4IiwieSIsImFjdGl2ZVN0YXRlIiwidXBkYXRlQ1RNQ2FjaGVkIiwicHJveHkiLCJ1cGRhdGVDVE0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjcmVhdGVSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZWZyZXNoUmF0ZSIsInZpZXdCb3giLCJjYWNoZVZpZXdCb3giLCJuZXdDVE0iLCJwcm9jZXNzQ1RNIiwic2V0Q1RNIiwic3ZnVmlld0JveCIsImdldEF0dHJpYnV0ZSIsInZpZXdCb3hWYWx1ZXMiLCJzcGxpdCIsImZpbHRlciIsInYiLCJtYXAiLCJwYXJzZUZsb2F0IiwiTWF0aCIsIm1pbiIsInVwZGF0ZUNUTU9uTmV4dEZyYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwic2ltcGxlVmlld0JveENhY2hlIiwiYkJveCIsImdldEJCb3giLCJnZXRWaWV3Qm94IiwiZXh0ZW5kIiwiZ2V0Q1RNIiwiZml0IiwiY29udGFpbiIsIm5ld1NjYWxlIiwibWF4IiwiYSIsImQiLCJlIiwiZiIsImNlbnRlciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZ2V0T3JpZ2luYWxTdGF0ZSIsImdldFN0YXRlIiwiZ2V0Wm9vbSIsImdldFJlbGF0aXZlWm9vbSIsImNvbXB1dGVSZWxhdGl2ZVpvb20iLCJzY2FsZSIsImdldFBhbiIsInNhZmVDVE0iLCJjcmVhdGVTVkdNYXRyaXgiLCJiIiwiYyIsIndpbGxab29tIiwiaXNab29tRGlmZmVyZW50Iiwid2lsbFBhbiIsImlzUGFuRGlmZmVyZW50IiwiYmVmb3JlWm9vbSIsInVwZGF0ZUNhY2hlIiwib25ab29tIiwicHJldmVudFBhbiIsImJlZm9yZVBhbiIsInByZXZlbnRQYW5YIiwicHJldmVudFBhblkiLCJpc09iamVjdCIsImlzTnVtYmVyIiwib25QYW4iLCJwZW5kaW5nVXBkYXRlIiwiY2FsbCIsIndpbmRvdyIsImN0bSIsIm9uVXBkYXRlZENUTSIsIldoZWVsIiwiQ29udHJvbEljb25zIiwib3B0aW9uc0RlZmF1bHRzIiwidmlld3BvcnRTZWxlY3RvciIsInBhbkVuYWJsZWQiLCJjb250cm9sSWNvbnNFbmFibGVkIiwiem9vbUVuYWJsZWQiLCJkYmxDbGlja1pvb21FbmFibGVkIiwibW91c2VXaGVlbFpvb21FbmFibGVkIiwicHJldmVudE1vdXNlRXZlbnRzRGVmYXVsdCIsInpvb21TY2FsZVNlbnNpdGl2aXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJjdXN0b21FdmVudHNIYW5kbGVyIiwiZXZlbnRzTGlzdGVuZXJFbGVtZW50IiwicGFzc2l2ZUxpc3RlbmVyT3B0aW9uIiwicGFzc2l2ZSIsInRoYXQiLCJzZXR1cFN2Z0F0dHJpYnV0ZXMiLCJzdGF0ZSIsImJvdW5kaW5nQ2xpZW50UmVjdE5vcm1hbGl6ZWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3ROb3JtYWxpemVkIiwiZ2V0T3JDcmVhdGVWaWV3cG9ydCIsIm9sZFNjYWxlIiwib2xkUG9pbnQiLCJuZXdQb2ludCIsInBvaW50IiwicHVibGljSW5zdGFuY2UiLCJzZXRCZWZvcmVab29tIiwic2V0T25ab29tIiwic2V0QmVmb3JlUGFuIiwic2V0T25QYW4iLCJzZXRPblVwZGF0ZWRDVE0iLCJsYXN0TW91c2VXaGVlbEV2ZW50VGltZSIsIkRhdGUiLCJub3ciLCJzZXR1cEhhbmRsZXJzIiwicHJldkV2dCIsImV2ZW50TGlzdGVuZXJzIiwibW91c2Vkb3duIiwiZXZ0IiwicmVzdWx0IiwiaGFuZGxlTW91c2VEb3duIiwidG91Y2hzdGFydCIsIm1vdXNldXAiLCJoYW5kbGVNb3VzZVVwIiwidG91Y2hlbmQiLCJtb3VzZW1vdmUiLCJoYW5kbGVNb3VzZU1vdmUiLCJ0b3VjaG1vdmUiLCJtb3VzZWxlYXZlIiwidG91Y2hsZWF2ZSIsInRvdWNoY2FuY2VsIiwic3ZnRWxlbWVudCIsImhhbHRFdmVudExpc3RlbmVycyIsImxlbmd0aCIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImV2ZW50IiwiZW5hYmxlTW91c2VXaGVlbFpvb20iLCJ3aGVlbExpc3RlbmVyIiwiaGFuZGxlTW91c2VXaGVlbCIsImlzUGFzc2l2ZUxpc3RlbmVyIiwib24iLCJkaXNhYmxlTW91c2VXaGVlbFpvb20iLCJvZmYiLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiZGVsdGEiLCJkZWx0YVkiLCJ0aW1lRGVsdGEiLCJkaXZpZGVyIiwiZGVsdGFNb2RlIiwid2hlZWxEZWx0YSIsImFicyIsImxvZyIsImludmVyc2VkU2NyZWVuQ1RNIiwiZ2V0U2NyZWVuQ1RNIiwiaW52ZXJzZSIsInJlbGF0aXZlTW91c2VQb2ludCIsImdldEV2ZW50UG9pbnQiLCJtYXRyaXhUcmFuc2Zvcm0iLCJwb3ciLCJ6b29tQXRQb2ludCIsInpvb21TY2FsZSIsInpvb21BYnNvbHV0ZSIsIm9sZENUTSIsInJlbGF0aXZlUG9pbnQiLCJtb2RpZmllciIsInRyYW5zbGF0ZSIsIm11bHRpcGx5IiwiYWJzb2x1dGUiLCJnZXRTdmdDZW50ZXJQb2ludCIsInB1YmxpY1pvb20iLCJjb21wdXRlRnJvbVJlbGF0aXZlWm9vbSIsInB1YmxpY1pvb21BdFBvaW50IiwiZ2V0VHlwZSIsImNyZWF0ZVNWR1BvaW50IiwiRXJyb3IiLCJyZXNldFpvb20iLCJyZXNldFBhbiIsInBhbiIsImhhbmRsZURibENsaWNrIiwidGFyZ2V0Q2xhc3MiLCJ0YXJnZXQiLCJpbmRleE9mIiwiem9vbUZhY3RvciIsInNoaWZ0S2V5IiwibW91c2VBbmRUb3VjaE5vcm1hbGl6ZSIsImlzRGJsQ2xpY2siLCJmaXJzdEV2ZW50Q1RNIiwic3RhdGVPcmlnaW4iLCJ2aWV3cG9ydENUTSIsInVwZGF0ZUJCb3giLCJwYW5CeSIsInJlc2l6ZSIsImRpc2FibGVDb250cm9sSWNvbnMiLCJlbmFibGVDb250cm9sSWNvbnMiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluc3RhbmNlc1N0b3JlIiwicGkiLCJlbmFibGVQYW4iLCJkaXNhYmxlUGFuIiwiaXNQYW5FbmFibGVkIiwiZm4iLCJlbmFibGVab29tIiwiZGlzYWJsZVpvb20iLCJpc1pvb21FbmFibGVkIiwiaXNDb250cm9sSWNvbnNFbmFibGVkIiwiZW5hYmxlRGJsQ2xpY2tab29tIiwiZGlzYWJsZURibENsaWNrWm9vbSIsImlzRGJsQ2xpY2tab29tRW5hYmxlZCIsImlzTW91c2VXaGVlbFpvb21FbmFibGVkIiwic2V0Wm9vbVNjYWxlU2Vuc2l0aXZpdHkiLCJzZXRNaW5ab29tIiwic2V0TWF4Wm9vbSIsInpvb21CeSIsInpvb21BdFBvaW50QnkiLCJnZXRTaXplcyIsInJlYWxab29tIiwic3ZnUGFuWm9vbSIsImVsZW1lbnRPclNlbGVjdG9yIiwiZ2V0U3ZnIiwicHVzaCIsIl9icm93c2VyIiwiZG9jdW1lbnRNb2RlIiwieG1sTlMiLCJ4bWxuc05TIiwieGxpbmtOUyIsImV2TlMiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNlbGVjdG9yIiwiaXNFbGVtZW50IiwiY2hpbGROb2RlcyIsIkFycmF5Iiwic2xpY2UiLCJjaGlsZHJlbiIsImVsIiwibm9kZU5hbWUiLCJ2aWV3cG9ydElkIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwic3ZnQ2hpbGRyZW4iLCJjbGFzc05hbWVzIiwiam9pbiIsInNldEF0dHJpYnV0ZU5TIiwidG9Mb3dlckNhc2UiLCJpbnRlcm5ldEV4cGxvcmVyUmVkaXNwbGF5SW50ZXJ2YWwiLCJyZWZyZXNoRGVmc0dsb2JhbCIsInRocm90dGxlIiwiYWxsRGVmcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbGxEZWZzQ291bnQiLCJ0aGlzRGVmcyIsImluc2VydEJlZm9yZSIsImVsZW1lbnQiLCJtYXRyaXgiLCJzIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImNsaWVudFgiLCJjbGllbnRZIiwicHJlZml4IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfcmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN1cHBvcnQiLCJmbnMiLCJwYXNzaXZlT3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2V3aGVlbCIsInVuZGVmaW5lZCIsImNyZWF0ZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcmlnaW5hbEV2ZW50Iiwic3JjRWxlbWVudCIsInR5cGUiLCJkZWx0YVgiLCJkZWxhdFoiLCJ3aGVlbERlbHRhWCIsImRldGFpbCIsImdldENhbGxiYWNrIiwicmVtb3ZlQ2FsbGJhY2siLCJzcGxpY2UiLCJfYWRkV2hlZWxMaXN0ZW5lciIsImVsZW0iLCJldmVudE5hbWUiLCJjYiIsIl9yZW1vdmVXaGVlbExpc3RlbmVyIiwiYWRkV2hlZWxMaXN0ZW5lciIsInJlbW92ZVdoZWVsTGlzdGVuZXIiLCJzb3VyY2UiLCJwcm9wIiwibyIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsIlNWR1NWR0VsZW1lbnQiLCJub2RlVHlwZSIsIk9iamVjdCIsInRvU3RyaW5nIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJTdHJpbmciLCJ0YWdOYW1lIiwiY29udGVudERvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0U1ZHRG9jdW1lbnQiLCJjb250ZXh0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ0b3VjaGVzIiwicGFnZVgiLCJyZWN0IiwibGVmdCIsInBhZ2VZIiwidG9wIiwidGltZVN0YW1wRGlmZiIsInRpbWVTdGFtcCIsInRvdWNoZXNEaXN0YW5jZSIsInNxcnQiLCJnZXRUaW1lIiwiZnVuYyIsIndhaXQiLCJhcmdzIiwidGltZW91dCIsInByZXZpb3VzIiwibGF0ZXIiLCJsZWFkaW5nIiwicmVtYWluaW5nIiwiY2xlYXJUaW1lb3V0IiwidHJhaWxpbmciLCJmbG9vciIsInJlcXVlc3RUaW1lb3V0Iiwic3ZnTWFwV3JhcHBlciIsImwiLCJhc3NpZ24iLCJ0YXJnZXRFbGVtZW50SUQiLCJpbml0aWFsWm9vbSIsImluaXRpYWxQYW4iLCJtb3VzZVdoZWVsWm9vbVdpdGhLZXkiLCJtb3VzZVdoZWVsS2V5TWVzc2FnZSIsIm1vdXNlV2hlZWxLZXlNZXNzYWdlTWFjIiwiY29sb3JNYXgiLCJjb2xvck1pbiIsImNvbG9yTm9EYXRhIiwibWFudWFsQ29sb3JBdHRyaWJ1dGUiLCJmbGFnVHlwZSIsImZsYWdVUkwiLCJoaWRlRmxhZyIsImhpZGVNaXNzaW5nRGF0YSIsIm5vRGF0YVRleHQiLCJ0b3VjaExpbmsiLCJzaG93Wm9vbVJlc2V0Iiwib25HZXRUb29sdGlwIiwidCIsImNvdW50cmllcyIsIkVIIiwiQ3JpbWVhIiwic2hvd0NvbnRpbmVudFNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJlcnJvciIsImRhdGEiLCJpZCIsIndyYXBwZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWluZXIiLCJhZGRNb3VzZVdoZWVsWm9vbU5vdGljZSIsImFkZE1vdXNlV2hlZWxab29tV2l0aEtleUV2ZW50cyIsIm1hcENvbnRhaW5lciIsImNyZWF0ZU1hcCIsImFwcGx5RGF0YSIsIkFGIiwiQVgiLCJBTCIsIkRaIiwiQVMiLCJBRCIsIkFPIiwiQUkiLCJBUSIsIkFHIiwiQVIiLCJBTSIsIkFXIiwiQVUiLCJBVCIsIkFaIiwiQlMiLCJCSCIsIkJEIiwiQkIiLCJCWSIsIkJFIiwiQloiLCJCSiIsIkJNIiwiQlQiLCJCTyIsIkJBIiwiQlciLCJCUiIsIklPIiwiVkciLCJCTiIsIkJHIiwiQkYiLCJCSSIsIktIIiwiQ00iLCJDQSIsIkNWIiwiQlEiLCJLWSIsIkNGIiwiVEQiLCJDTCIsIkNOIiwiQ1giLCJDQyIsIkNPIiwiS00iLCJDRyIsIkNLIiwiQ1IiLCJIUiIsIkNVIiwiQ1ciLCJDWSIsIkNaIiwiQ0QiLCJESyIsIkRKIiwiRE0iLCJETyIsIkVDIiwiRUciLCJTViIsIkdRIiwiRVIiLCJFRSIsIkVUIiwiRksiLCJGTyIsIkZNIiwiRkoiLCJGSSIsIkZSIiwiR0YiLCJQRiIsIlRGIiwiR0EiLCJHTSIsIkdFIiwiREUiLCJHSCIsIkdJIiwiR1IiLCJHTCIsIkdEIiwiR1AiLCJHVSIsIkdUIiwiR04iLCJHVyIsIkdZIiwiSFQiLCJITiIsIkhLIiwiSFUiLCJJUyIsIklOIiwiSUQiLCJJUiIsIklRIiwiSUUiLCJJTSIsIklMIiwiSVQiLCJDSSIsIkpNIiwiSlAiLCJKRSIsIkpPIiwiS1oiLCJLRSIsIktJIiwiWEsiLCJLVyIsIktHIiwiTEEiLCJMViIsIkxCIiwiTFMiLCJMUiIsIkxZIiwiTEkiLCJMVCIsIkxVIiwiTU8iLCJNSyIsIk1HIiwiTVciLCJNWSIsIk1WIiwiTUwiLCJNVCIsIk1IIiwiTVEiLCJNUiIsIk1VIiwiWVQiLCJNWCIsIk1EIiwiTUMiLCJNTiIsIk1FIiwiTVMiLCJNQSIsIk1aIiwiTU0iLCJOQSIsIk5SIiwiTlAiLCJOTCIsIk5DIiwiTloiLCJOSSIsIk5FIiwiTkciLCJOVSIsIk5GIiwiS1AiLCJNUCIsIk5PIiwiT00iLCJQSyIsIlBXIiwiUFMiLCJQQSIsIlBHIiwiUFkiLCJQRSIsIlBIIiwiUE4iLCJQTCIsIlBUIiwiUFIiLCJRQSIsIlJFIiwiUk8iLCJSVSIsIlJXIiwiU0giLCJLTiIsIkxDIiwiUE0iLCJWQyIsIldTIiwiU00iLCJTVCIsIlNBIiwiU04iLCJSUyIsIlNDIiwiU0wiLCJTRyIsIlNYIiwiU0siLCJTSSIsIlNCIiwiU08iLCJaQSIsIkdTIiwiS1IiLCJTUyIsIkVTIiwiTEsiLCJTRCIsIlNSIiwiU0oiLCJTWiIsIlNFIiwiQ0giLCJTWSIsIlRXIiwiVEoiLCJUWiIsIlRIIiwiVEwiLCJURyIsIlRLIiwiVE8iLCJUVCIsIlROIiwiVFIiLCJUTSIsIlRDIiwiVFYiLCJVRyIsIlVBIiwiQUUiLCJHQiIsIlVTIiwiVU0iLCJWSSIsIlVZIiwiVVoiLCJWVSIsIlZBIiwiVkUiLCJWTiIsIldGIiwiWUUiLCJaTSIsIlpXIiwia2V5cyIsInZhbHVlcyIsImZvckVhY2giLCJwYXJzZUludCIsInRocmVzaG9sZE1heCIsInRocmVzaG9sZE1pbiIsImNvbG9yIiwiZ2V0Q29sb3IiLCJiaW5kIiwiZW1vamlGbGFncyIsImNvbnRpbmVudHMiLCJFQSIsImlzbyIsIm5hbWUiLCJFVSIsIk9DIiwiY3JlYXRlVG9vbHRpcCIsIm1hcFdyYXBwZXIiLCJtYXBJbWFnZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiem9vbU1hcCIsInpvb21Db250cm9sSW4iLCJ6b29tQ29udHJvbE91dCIsImNvbnRpbmVudFNlbGVjdCIsInZhbHVlIiwiem9vbUNvbnRpbmVudCIsIm1hcFBhdGhzIiwidG9vbHRpcE1vdmVFdmVudCIsIm1vdmVUb29sdGlwIiwibG9jYXRpb24iLCJocmVmIiwic2V0VG9vbHRpcENvbnRlbnQiLCJnZXRUb29sdGlwQ29udGVudCIsInNob3dUb29sdGlwIiwibGluayIsImxpbmtUYXJnZXQiLCJvcGVuIiwiaGlkZVRvb2x0aXAiLCJyZW1vdmUiLCJtYXBQYW5ab29tIiwic2V0Q29udHJvbFN0YXR1c2VzIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJMIiwidG9vbHRpcCIsImlubmVySFRNTCIsImdldENvdW50cnlOYW1lIiwiZmxvYXRpbmdOdW1iZXJzIiwidG9GaXhlZCIsInRob3VzYW5kU2VwYXJhdG9yIiwibnVtYmVyV2l0aENvbW1hcyIsImZvcm1hdCIsInpvb21Db250cm9sUmVzZXQiLCJjb250YWlucyIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJhcHBlbmQiLCJzaG93TW91c2VXaGVlbFpvb21Ob3RpY2UiLCJtb3VzZVdoZWVsTm90aWNlSnVzdEhpZGRlbiIsImF1dG9IaWRlTW91c2VXaGVlbE5vdGljZVRpbWVvdXQiLCJoaWRlTW91c2VXaGVlbFpvb21Ob3RpY2UiLCJibG9ja01vdXNlV2hlZWxab29tTm90aWNlIiwibW91c2VXaGVlbE5vdGljZUp1c3RIaWRkZW5UaW1lb3V0IiwiYm9keSIsImtleSIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0b29sdGlwQ29udGVudCIsInRvb2x0aXBQb2ludGVyIiwiaW5uZXJXaWR0aCIsIm1hcmdpbkxlZnQiLCJjb25zb2xlIiwiY2VpbCIsInN1YnN0cmluZyIsImdldEhleCIsImNvdW50cnlOYW1lcyIsImRlZmluZSIsImFtZCIsInN2Z01hcCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImJ1dHRvbiIsImJ1dHRvbkNsb3NlIiwiX3BvcHVwRWxlbWVudCIsIl9idXR0b25FbGVtZW50IiwiX2J1dHRvbiIsImNsb3NlIiwiam9iIiwiYWJvdXQiLCJwb3B1cCIsInBvcHVwMiIsImZpbGxJbmZvIiwiZmlsbFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJTRiJdLCJzb3VyY2VSb290IjoiIn0=