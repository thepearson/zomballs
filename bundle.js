/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-size: 16px;\n}\n\nbody {\n  background-color: rgb(128, 255, 128);\n}\n\n#game-board {\n  border: 1px solid rgb(0, 0, 0);\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;AACF;;AAEA;EACE,oCAAA;AACF;;AAEA;EACE,8BAAA;EACA,sBAAA;AACF","sourcesContent":["* {\n  font-size: 16px;\n}\n\nbody {\n  background-color: rgb(128, 255, 128);\n}\n\n#game-board {\n  border: 1px solid rgb(0,0,0);\n  background-color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
const Constants = {
    // Game canvas size
    GAME_SIZE: {
        width: 1024,
        height: 768
    },
    // Player physical size
    PLAYER_SIZE: 50,
    // How many health points does the player start with
    PLAYER_DEFAULT_HEALTH: 100,
    // Unused at the moment, flag for using canvas prerender
    // for performance kick.
    GAME_UTILIZE_PRERENDER: false,
    // Should the target be flipper, PoC for mobile where 
    // a thumb/finger would get in the way of a potential target,
    // so flipping the sights to opposite the touch point helps
    GAME_FLIP_SIGHTS: false,
    // After how manu seconds to increase the max enemy entity count
    // by GAME_INCREASE_ZOMBALL_NUMBER
    GAME_INCREASE_ZOMBALL_INTERVAL: 10.0,
    // How many enemy entities to in crease the max number by after 
    // GAME_INCREASE_ZOMBALL_INTERVAL seconds
    GAME_INCREASE_ZOMBALL_NUMBER: 1.0,
    // The longer an enemy lives for they get a weighted score, this
    // is based on milliseconds and can be quite large, the time alive
    // score is reduced by deviding by the the ZOMBALL_SCORE_FACTOR number.
    ZOMBALL_SCORE_FACTOR: 50,
    // How many base points are achieved by killing an enemy
    ZOMBALL_BASE_VALUE: 50,
    // How large is the invisble box around the player where enemies wont spawn,
    ZOMBALL_SPAWN_OFFSET: 400,
    // Starting maxmum count
    ZOMBALL_MAX_COUNT: 50,
    // If an enemy is shot, other enemies within this amount of pixels
    // have a possibility of charging also.
    ZOMBALL_ALERT_RANGE: 100,
    // If an enemy is just walking around, this defines the maximum
    // deviation when it changes it's direction
    ZOMBALL_WALKING_CHANGE_OFFSET: 20,
    // How likely an enemy is to change it's direction of walking
    // larger numbers mean less likely.
    ZOMBALL_CHANGE_DIRECTION_POSSIBILITY: 10,
    // What is the possibility that an enemy that is alerted to the 
    // player will charge. Higher numbers mean less likely.
    ZOMBALL_ALERT_CHARGE_POSSIBILITY: 50,
    // Base speed that an enemy will charge. Higher is faster.
    ZOMBALL_CHARGE_SPEED: 0.08,
    // Normal enemy speed
    ZOMBALL_SPEED_MIN: 0.02,
    // Enemy speed randomiser
    ZOMBALL_SPEED_RANGE: 0.005,
    // Base size of the enemy
    ZOMBALL_SIZE: 20,
    // How long in seconds enemies bodies lie
    // in the game field as entities
    ZOMBALL_DEATH_TIME: 5,
    // if an enemy is within ZOMBALL_ALERT_RANGE of the player,
    // How likely is it that it will charge. Higher is less likely.
    // ie 1 in ZOMBALL_CHARGE_POSSIBILITY
    ZOMBALL_CHARGE_POSSIBILITY: 10,
    // Unused ATM.
    ZOMBALL_EATING_GRASS_POSSIBILITY: 20,
    // What is the possibility of moving once an enemy reaches it's destination
    ZOMBALL_DEST_REACH_MOVE_POSSIBILITY: 2,
    // How many milliseconds between spawning new enemies
    ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY: 1000,
    // Whether or not to enforce ZOMBALL_SPAWN_OFFSET, useful when debugging
    ZOMBALL_SPAWN_RESTRAINED: true,
    // What is the default health each enemy has
    ZOMBALL_DEFAULT_HEALTH: 500,
    // How much healthpoints damage does each enemy do once it 'gets' the player
    ZOMBALL_DAMAGE_VALUE: 5.0,
    // The radius in pixels of the death blood splatter
    ZOMBALL_BLOOD_SPLATTER_SIZE: 20,
    // How many blood 'circles' for the splatter
    ZOMBALL_BLOOD_SPLATTER_CIRCLES: 10,
    // Minimum size of blood circles
    ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN: 1,
    // Maximum size of blood circles
    ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX: 10,
    // Pistol settings
    WEAPON_PISTOL_MAX_AMMO: 0,
    WEAPON_PISTOL_PROJECTILE_SIZE: 5,
    WEAPON_PISTOL_PROJECTILE_DAMAGE: 100,
    WEAPON_PISTOL_PROJECTILE_SPEED: 1,
    // Rifle settings
    WEAPON_RIFLE_MAX_AMMO: 24,
    WEAPON_RIFLE_PROJECTILE_SIZE: 3,
    WEAPON_RIFLE_PROJECTILE_DAMAGE: 500,
    WEAPON_RIFLE_PROJECTILE_SPEED: 2
};


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _obj_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj/player */ "./src/obj/player.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _obj_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obj/world */ "./src/obj/world.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _obj_zomball__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./obj/zomball */ "./src/obj/zomball.ts");





/**
 * The top-level Game class, manages setup, base loop, and events
 */
class Game {
    /**
     * Constructor
     *
     * @param   {HTMLCanvasElement}         canvas   This is the target canvas for our game
     * @param   {CanvasRenderingContext2D}  context  This is the contet for the canvas
     */
    constructor(canvas, context) {
        /**
         * Event for the canvs.onMouseMove event
         */
        this.mouse_move = null;
        /**
         * Event for the canvas.onMouseDown event
         */
        this.mouse_down = null;
        /**
         * Game canvas
         */
        this.canvas = null;
        /**
         * Timestamp when last frame was processed
         * used for calculating the deltaTime and
         * FPS.
         */
        this.oldTimestamp = 0.0;
        /**
         * Holder for FPS, useful when needing to render
         * this within the game environment
         */
        this.fps = 0;
        /**
         * Timer helper for adding enemy entities
         */
        this.last_run_add = 0;
        this.canvas = canvas;
        this.context = context;
        // Set canvas dimensions
        this.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.width;
        this.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.height;
    }
    /**
     * Bootstrap function, used for setting
     * everything up prior to kicking off the renderLoop
     *
     * @return  {void}
     */
    setUp() {
        // Create world
        this.world = new _obj_world__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // Add player to game
        this.world.addPlayer(new _obj_player__WEBPACK_IMPORTED_MODULE_0__["default"](this.world));
        // Add events
        if (this.canvas instanceof HTMLCanvasElement) {
            this.mouse_move = this.canvas.addEventListener("mousemove", (event) => {
                var _a;
                const mouse_pos = new vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector(event.clientX, event.clientY);
                (_a = this.world) === null || _a === void 0 ? void 0 : _a.setTargetPosition(mouse_pos);
            });
            this.mouse_down = this.canvas.addEventListener("mousedown", (event) => {
                var _a, _b;
                const mouse_pos = new vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector(event.clientX, event.clientY);
                (_a = this.world) === null || _a === void 0 ? void 0 : _a.setTargetPosition(mouse_pos);
                (_b = this.world) === null || _b === void 0 ? void 0 : _b.player.firePrimaryWeapon(mouse_pos);
            });
        }
    }
    /**
     * Add's an enemy to the world
     *
     * @return  {void}
     */
    addZomball() {
        var _a;
        const zom = new _obj_zomball__WEBPACK_IMPORTED_MODULE_4__["default"]();
        zom.setSpawn();
        (_a = this.world) === null || _a === void 0 ? void 0 : _a.addEntity(zom);
    }
    /**
     * Processes any periodic timers
     *
     * @param   {DOMHighResTimeStamp}  timestamp  EPOC Milliseconds
     *
     * @return  {void}
     */
    processTimers(timestamp) {
        // Add enemy timer logic
        const add_zom_time = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.ZOMBALL_SPAWN_NEW_ZOMBALL_DELAY;
        if (timestamp - this.last_run_add > add_zom_time) {
            this.addZomball();
            this.last_run_add = timestamp;
        }
    }
    /**
     * Process any game calculations, cascades down to the
     * World object and passes off any entity based calcs to there.
     * Then trigger of all rendering for the world.
     *
     * @param   {DOMHighResTimeStamp}  timestamp  EPOC milliseconds
     *
     * @return  {void}
     */
    process(timestamp) {
        var _a, _b;
        // Short circut, these MUST exist
        if (this.canvas == null || this.context == null)
            return;
        // Process any timers
        this.processTimers(timestamp);
        // Calculate the number of seconds passed since the last frame
        const dt = timestamp - this.oldTimestamp;
        // Update timestamp for next process frame
        this.oldTimestamp = timestamp;
        // Trigger World calcs
        // TODO: async? Performance improvment at a later date.
        (_a = this.world) === null || _a === void 0 ? void 0 : _a.process(dt, timestamp);
        // Render things
        (_b = this.world) === null || _b === void 0 ? void 0 : _b.render(this.canvas, this.context);
    }
}


/***/ }),

/***/ "./src/obj/bullet.ts":
/*!***************************!*\
  !*** ./src/obj/bullet.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bullet)
/* harmony export */ });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile */ "./src/obj/projectile.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/random */ "./src/util/random.ts");




class Bullet extends _projectile__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Constructor, initiates a "bullet"
     */
    constructor() {
        super("bullet");
    }
    /**
     * Process the zomballs movements and actions
     */
    process(gameTime) {
        super.process(gameTime);
        // short circuit if world is null
        if (this.world == null)
            return;
        const zomball = this.world.getCloseEntity(this, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SIZE, 'zomball');
        if (zomball != null && zomball.brain.getActiveStateName() != 'zomball-dead') {
            // Decrease zomball health
            zomball.health -= this.damage_value;
            zomball.speed = zomball.speed - (_util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(1, 6) / 1000);
            // Make zomball charge after being shot.
            if (zomball.health > 0 && zomball.brain.getActiveStateName() != 'zomball-charging') {
                zomball.brain.setState("zomball-charging");
            }
            const blood_spirt = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(zomball.location.x, zomball.location.y);
            this.world.drawShotSplat(blood_spirt);
            // set for removal
            this.remove = true;
            // lets set others in range to alert, but only of they aren't charging
            const in_range = this.world.getEntitiesInRange(zomball, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_ALERT_RANGE, 'zomball');
            for (let entity of in_range) {
                if (entity.brain.getActiveStateName() != "zomball-charging") {
                    entity.brain.setState("zomball-alerted");
                }
            }
        }
        // remove the bullet when it reaches it's destination.
        if (this.world.withinRange(this.location, this.destination, 10)) {
            this.remove = true;
        }
    }
}


/***/ }),

/***/ "./src/obj/entity.ts":
/*!***************************!*\
  !*** ./src/obj/entity.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Entity)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/circle */ "./src/util/circle.ts");
/* harmony import */ var _state_state_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state_machine */ "./src/state/state_machine.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");




/**
 * Core entity class, all objects within the game field are entities.
 */
class Entity {
    /**
     * @param   {string}  name  name or type of entity
     */
    constructor(name) {
        /**
         * Unique numerical ID,
         */
        this.id = 0;
        /**
         * Time the entity was created, milliseconds since EPOC
         */
        this.spawn_time = 0;
        /**
         * Entity size, for the most part this is the diameter of the "ball"
         */
        this.size = 4;
        /**
         * Colour of the entity
         *
         * @return  {Color}  Colour object that the entity will be drawn as.
         */
        this.color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0);
        /**
         * A default speed for the entity
         */
        this.speed = 0;
        /**
         * How much damage the entity does in helth points
         */
        this.damage_value = 0;
        /**
         * How much health the entity has in helth points
         */
        this.health = 0;
        /**
         * A name for the entity, aka type. Can be used to query for eneities of "name"
         */
        this.name = '';
        /**
         * Entity current location
         *
         * @return  {Vec2.Vector}  Vector object
         */
        this.location = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 0);
        /**
         * If set to tru the entity will be disposed of next tick.
         */
        this.remove = false;
        /**
         * Ref to the game wold
         */
        this.world = null;
        this.name = name;
        this.spawn_time = Date.now();
        this.brain = new _state_state_machine__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    /**
     * Sets Color
     *
     * @param   {Color}  color  Color to set on the entity
     *
     * @return  {void}
     */
    setColor(color) {
        this.color = color;
    }
    /**
     * Sets the size of the entity
     *
     * @param   {number}  size  Size in pixels
     *
     * @return  {void}
     */
    setSize(size) {
        this.size = size;
    }
    /**
     * Sets the damage that the entity does
     *
     * @param   {number}  damage  Damage in health points
     *
     * @return  {void}
     */
    setDamage(damage) {
        this.damage_value = damage;
    }
    /**
     * Sets the speed of the entitiy
     *
     * @param   {number}  speed  Speed
     *
     * @return  {void}
     */
    setSpeed(speed) {
        this.speed = speed;
    }
    /**
     * Set's the locaiton of the entity
     *
     * @var {Vec2.Vector}   location Current location
     */
    setLocation(location) {
        this.location = location;
    }
    /**
     * Sets the destination of the entity
     *
     * @var {Vec2.Vector}   destination Entity destination
     */
    setDestination(destination) {
        this.destination = destination;
    }
    /**
     * Render the entity, by default all entities are treated as circles.
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    render(context) {
        (0,_util_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(context, this.location, this.color, this.size);
    }
    /**
     * Do any pre-render calculations
     *
     * @param   {number}  gameTime  deltaTime
     *
     * @return  {void}
     */
    process(gameTime) {
        this.brain.think();
        // If the entity is moving, and hasn't yet reached it's destination
        if (this.speed > 0 && !this.location.equals(this.destination)) {
            const destinationClone = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(this.destination.x, this.destination.y);
            const vec_to_destination = destinationClone.subtract(this.location);
            const distance_to_destination = vec_to_destination.length();
            const heading = vec_to_destination.normalize();
            const distance_traveled = Math.min(distance_to_destination, gameTime * this.speed);
            const travel_vector = heading.mulS(distance_traveled);
            // new location is the current location
            // plus the distance traveled vector
            this.location = this.location.add(travel_vector);
        }
    }
}


/***/ }),

/***/ "./src/obj/pistol.ts":
/*!***************************!*\
  !*** ./src/obj/pistol.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pistol)
/* harmony export */ });
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon */ "./src/obj/weapon.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


/**
 * Player weapon: pistol
 */
class Pistol extends _weapon__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Sets Pistol properties
     */
    constructor() {
        super("bullet");
        this.size = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.WEAPON_PISTOL_PROJECTILE_SIZE;
        this.damage = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.WEAPON_PISTOL_PROJECTILE_DAMAGE;
        this.speed = _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.WEAPON_PISTOL_PROJECTILE_SPEED;
    }
}


/***/ }),

/***/ "./src/obj/player.ts":
/*!***************************!*\
  !*** ./src/obj/player.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/obj/entity.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");
/* harmony import */ var _pistol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pistol */ "./src/obj/pistol.ts");





/**
 * Player entity
 */
class Player extends _entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {World}  world  [world description]
     */
    constructor(world) {
        super("player");
        /**
         * Player primary weapon
         */
        this.weapon_primary = null;
        /**
         * Player secondary weapon
         */
        this.weapon_secondary = null;
        this.world = world;
        // Player location, centre of the world
        this.location = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width / 2, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height / 2);
        // Set some attributes for the player
        this.size = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.PLAYER_SIZE;
        this.health = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.PLAYER_DEFAULT_HEALTH;
        this.color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](128, 128, 255);
        // Set starting weapons
        this.weapon_primary = new _pistol__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }
    /**
     * Funciton for player to tak damage.
     *
     * @param   {number}  value  How much damage (healthpoints) should the player take
     *
     * @return  {void}
     */
    takeDamage(value) {
        this.health -= value;
    }
    /**
     * Fire player primary weapon
     *
     * @var {Vec2.Vector}
     *
     * @return  {void}
     */
    firePrimaryWeapon(target) {
        var _a;
        (_a = this.weapon_primary) === null || _a === void 0 ? void 0 : _a.fire(target, this.world);
    }
    /**
     * Fire player secondary weapon: TODO
     *
     *  @return  {void}
     */
    fireSecondaryWeapon(target) {
    }
    /**
     * Process any player calcs
     */
    process(gameTime) {
        super.process(gameTime);
    }
}


/***/ }),

/***/ "./src/obj/projectile.ts":
/*!*******************************!*\
  !*** ./src/obj/projectile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projectile)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/obj/entity.ts");

/**
 * Base projectile class
 */
class Projectile extends _entity__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {string}  type  Type of projectile
     */
    constructor(type) {
        super(type);
        /**
         * String to define what type of projectile this is.
         */
        this.type = "";
        this.type = type;
    }
}


/***/ }),

/***/ "./src/obj/weapon.ts":
/*!***************************!*\
  !*** ./src/obj/weapon.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_projectileFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/projectileFactory */ "./src/util/projectileFactory.ts");


/**
 * Base weapon class
 */
class Weapon {
    /**
     * @param   {string}  projectileType  name of projectile type
     */
    constructor(projectileType) {
        /**
         * Projectile name
         *
         * @var {string}
         */
        this.projectile = "";
        /**
         * How many ammunition this weapon holds
         *
         * @var {number}
         */
        this.ammunition = 0;
        /**
         * Size of the projectile
         *
         * @var {number}
         */
        this.size = 1;
        /**
         * Damage the projectile does
         *
         * @var {number}
         */
        this.damage = 1;
        /**
         * How fast the projectile moves
         *
         * @var {number}
         */
        this.speed = 1;
        this.projectile = projectileType;
    }
    /**
     * Returns a projectile
     *
     * @return  {Projectile}
     */
    createProjectile() {
        return (0,_util_projectileFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(this.projectile);
    }
    /**
     * Fire this weapon
     *
     * @var {Vec2.Vector} target    Location to fire to
     * @var {World}       world     World object
     *
     * @return {void}
     */
    fire(target, world) {
        const projectile = this.createProjectile();
        projectile.setLocation(new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(world.player.location.x, world.player.location.y));
        projectile.setDestination(target);
        projectile.setSize(this.size);
        projectile.setDamage(this.damage);
        projectile.setSpeed(this.speed);
        world.addEntity(projectile);
    }
}


/***/ }),

/***/ "./src/obj/world.ts":
/*!**************************!*\
  !*** ./src/obj/world.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/obj/player.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/random */ "./src/util/random.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");
/* harmony import */ var _util_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/circle */ "./src/util/circle.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");






/**
 * Main world class, constructs everytrhing about the game world
 */
class World {
    constructor() {
        /**
         * All game entities, these will all get
         * processed and rendered every tick
         *
         * @var  {Map<number, Entity>}
         */
        this.entities = new Map();
        /**
         * Canvas element which is used for pre-rendering,
         * more static things
         *
         * @var {HTMLCanvasElement}
         */
        this.zomball_prerender = null;
        /**
         * Canvas element used for prerendering dead zomballs
         *
         * @var {HTMLCanvasElement}
         */
        this.zomball_dead_prerender = null;
        /**
         * Canvas element used for rebndering the blood
         *
         * @var {HTMLCanvasElement}
         */
        this.background = null;
        /**
         * Player entity, handled slightly different from the
         * other entities in the game.
         *
         * @var {Player}
         */
        this.player = null;
        /**
         * Player score
         *
         * @var {number}
         */
        this.player_score = 0;
        /**
         * Entity incremental number, used to track unique numerical
         * id of all entities loaded into the world
         *
         * @var {number}
         */
        this.entity_id = 0;
        /**
         * Should we draw the targets?
         *
         * @var {boolean}
         */
        this.draw_target = false;
        /**
         * Target current location
         *
         * @var {Vec2.Vector}
         */
        this.target = null;
        /**
         * Helper to calculate FPS and framerates
         *
         * @var {number}
         */
        this.timeToDraw = 0;
        /**
         * Holder for deltatime
         *
         * @var {number}
         */
        this.dt = 0;
        /**
         * Previous frame timestamp
         *
         * @var {DOMHighResTimeStamp}
         */
        this.oldTimestamp = 0.0;
        /**
         * Frames per second holder
         *
         * @var {number}
         */
        this.fps = 0;
        /**
         * Show debug?
         *
         * @var {boolean}
         */
        this.show_debug = true;
        /**
         * If we're drawing the targets, what is the base colour.
         *
         * @var {Color}
         */
        this.target_color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](255, 128, 128);
    }
    /**
     * Returns a game Entity
     *
     * @param   {number}  id  Entiti numerical ID
     *
     * @return  {Entity}
     */
    getEntity(id) {
        const entity = this.entities.get(id);
        if (entity)
            return entity;
        return null;
    }
    /**
     * Adds an entity to the game
     *
     * @param   {Entity}  entity  Entity to add to the gameworld
     *
     * @return  {void}
     */
    addEntity(entity) {
        entity.id = this.entity_id;
        entity.world = this;
        this.entities.set(this.entity_id, entity);
        this.entity_id += 1;
    }
    /**
     * Add's the player to the game
     *
     * @param   {Player}  player  Player to add.
     *
     * @return  {void}
     */
    addPlayer(player) {
        player.id = 999999;
        player.world = this;
        this.player = player;
    }
    /**
     * Unset's the current target
     *
     * @return  {void}
     */
    unsetTarget() {
        this.target = null;
    }
    /**
     * Sets the current target position
     *
     * @var {Vec2.Vector} mouse_pos   Target position
     *
     * @return {void}
     */
    setTargetPosition(mouse_pos) {
        if (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_FLIP_SIGHTS == true) {
            if (this.player && this.player.location instanceof vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector) {
                const vecCopy = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(mouse_pos.x, mouse_pos.y);
                this.target = vecCopy.subtract(this.player.location);
            }
        }
        else {
            this.target = mouse_pos;
        }
    }
    /**
     * Fire's a bullet
     *
     * TODO: Rename this to support multi-weapons
     *
     * @return  {void}
     */
    fireBullet() {
        if (this.player && this.player.location instanceof vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector && this.target instanceof vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector) {
            const dst = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.target.x, this.target.y);
            this.player.firePrimaryWeapon(dst);
        }
    }
    /**
     * Helper function to draw the targets
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    drawTarget(context) {
        var _a, _b, _c, _d, _e;
        if (this.target != null) {
            if (this.player instanceof _player__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                context.beginPath();
                context.lineWidth = 1;
                context.strokeStyle = (_a = this.target_color) === null || _a === void 0 ? void 0 : _a.getHex();
                context.moveTo((_c = (_b = this.player) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.x, (_e = (_d = this.player) === null || _d === void 0 ? void 0 : _d.location) === null || _e === void 0 ? void 0 : _e.y);
                context.lineTo(this.target.x, this.target.y);
                context.stroke();
            }
        }
    }
    /**
     * Return count of entites by type, if no type specified,
     * then retunr count of all.
     *
     * @param   {string}  type  Entity Type|Name [optional]
     *
     * @return  {number}        Number of entities
     */
    countEntities(type) {
        let count = 0;
        if (!type)
            return this.entities.size;
        for (let [key, entity] of this.entities) {
            if (entity.name == type && entity.remove == false) {
                count++;
            }
        }
        return count;
    }
    /**
     * Remove an entity fromt he game
     *
     * @param   {number}  id  Numebrical ID of the entity
     *
     * @return  {void}
     */
    removeEntity(id) {
        this.entities.delete(id);
    }
    /**
     * Draws blood splatter
     *
     * @var {CanvasRenderingContext2D}  context   Canvas drawing context
     * @var {Vec2.Vector}               location  Where to draw the blood
     *
     * @return {void}
     */
    spatter(context, location) {
        let loop = 0;
        const x_min = Math.round(location.x - (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_SIZE / 2));
        const x_max = Math.round(location.x + (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_SIZE / 2));
        const y_max = Math.round(location.y + (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_SIZE / 2));
        const y_min = Math.round(location.y - (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_SIZE / 2));
        //var rand = Math.random();
        while (loop < _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_SIZE) {
            const location = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, (x_max - x_min)) + x_min, _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, (y_max - y_min)) + y_min);
            const size = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX - _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN) + _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN);
            const one = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, 55);
            const two = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, 128);
            const color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](one + 200, two, two, 0.8);
            (0,_util_circle__WEBPACK_IMPORTED_MODULE_4__["default"])(context, location, color, size);
            loop += 1;
        }
    }
    /**
     * Draws gunshot splatter
     *
     * @var {Vec2.Vector}
     * @var {[type]}
     */
    drawShotSplat(bloodVec) {
        if (this.background) {
            const bg_context = this.background.getContext("2d");
            let loop = 0;
            while (loop < 5) {
                const location = bloodVec.add(new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(-10, 10), _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(-10, 10)));
                const size = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MAX - _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN) + _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_BLOOD_SPLATTER_CIRCLE_MIN);
                const one = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, 55);
                const two = _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, 128);
                const color = new _util_color__WEBPACK_IMPORTED_MODULE_3__["default"](one + 200, two, two, 0.8);
                (0,_util_circle__WEBPACK_IMPORTED_MODULE_4__["default"])(bg_context, location, color, size);
                loop += 1;
            }
        }
    }
    /**
     * Draw splatter calling wrapper function
     *
     * @var {Vec2.Vector}   location  WHere splatter will be drawn
     *
     * @return {void}
     */
    drawSpatter(location) {
        if (this.background) {
            const bg_context = this.background.getContext("2d");
            if (bg_context)
                this.spatter(bg_context, location);
        }
    }
    /**
     * Draw the debugging panel
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    drawDebug(context) {
        // Draw number to the screen
        context.fillStyle = '#dddddd55';
        context.fillRect(_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.width - 75, _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.height - 100, 75, 100);
        context.font = '11px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + this.fps, _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.height - 85);
        context.fillText("ENT: " + this.entities.size, _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.width - 70, _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.height - 70);
    }
    /**
     * Draw the HUD gui
     *
     * @param   {CanvasRenderingContext2D}  context  Canvas rendering context
     *
     * @return  {void}
     */
    drawGui(context) {
        var health_bar_length = _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.width - 30;
        var health_bar_width = 30;
        var health_bar_empty_color = "#ff5555bb";
        var health_bar_full_color = "#55FF55bb";
        var line_x = 15; //Math.round( - (this.size / 2));
        var line_y = 30; //Math.round(this.location.y - ((this.size / 2) + (health_bar_width * 2)));
        // if player health is less than default health
        context.beginPath();
        context.lineWidth = health_bar_width;
        context.strokeStyle = health_bar_empty_color;
        context.moveTo(line_x, line_y);
        context.lineTo(line_x + health_bar_length, line_y);
        context.stroke();
        health_bar_length = Math.round((this.player.health / 100) * health_bar_length);
        if (this.player.health > 0) {
            context.beginPath();
            context.lineWidth = health_bar_width;
            context.strokeStyle = health_bar_full_color;
            context.moveTo(line_x, line_y);
            context.lineTo(line_x + health_bar_length, line_y);
            context.stroke();
        }
        context.font = '15px Arial';
        context.fillStyle = 'black';
        context.fillText(`Score: ${this.player_score}`, 20, 35);
    }
    /**
     * Process all the rendering for the world
     *
     * @param   {HTMLCanvasElement}         canvas   Canvas
     * @param   {CanvasRenderingContext2D}  context  Canvas drawing context
     *
     * @return  {void}
     */
    render(canvas, context) {
        var _a;
        // build background
        if (this.background == null) {
            this.background = document.createElement('canvas');
            this.background.width = canvas.width;
            this.background.height = canvas.height;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this.background, 0, 0);
        for (let [key, entity] of this.entities) {
            entity.render(context);
        }
        // draw target if any
        if (this.draw_target)
            this.drawTarget(context);
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.render(context);
        if (this.show_debug)
            this.drawDebug(context);
        this.drawGui(context);
    }
    /**
     * Check if a location vector is our of bounds
     *
     * @var {Vec2.Vector}   location  Location to check
     *
     * @return {boolean}
     */
    outOfRange(location) {
        let x = location.x;
        let y = location.y;
        if (x < (0 - _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_SPAWN_OFFSET) || x > (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.width + _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_SPAWN_OFFSET)) {
            return true;
        }
        if (y < (0 - _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_SPAWN_OFFSET) || y > (_constants__WEBPACK_IMPORTED_MODULE_5__.Constants.GAME_SIZE.height + _constants__WEBPACK_IMPORTED_MODULE_5__.Constants.ZOMBALL_SPAWN_OFFSET)) {
            return true;
        }
        return false;
    }
    /**
     * Garbage clean up, removes any entities that are schedule for removal
     *
     * @return  {void}
     */
    removeEntities() {
        const ids = [];
        for (let [key, entity] of this.entities) {
            if (entity.remove) {
                this.entities.delete(key);
            }
        }
    }
    /**
     * Do all world calculations
     *
     * @param   {number}               gameTime   DeltaTime
     * @param   {DOMHighResTimeStamp}  timestamp  Current time
     *
     * @return  {void}
     */
    process(gameTime, timestamp) {
        var _a;
        // Calculate the number of seconds passed since the last frame
        this.timeToDraw = gameTime / 1000;
        // Calculate fps
        this.fps = Math.round(1 / this.timeToDraw);
        this.removeEntities();
        for (let [key, entity] of this.entities) {
            entity.process(gameTime);
        }
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.process(gameTime);
    }
    /**
     * Determine if vecor1 is witin range of vector2
     *
     * @var {Vec2.Vector} vector1   First location
     * @var {Vec2.Vector} vector2   Second location
     * @var {number}      range     Range in pixels
     *
     * @return {boolean}
     */
    withinRange(vector1, vector2, range) {
        const distance_vector = vector1.distance(vector2);
        if (distance_vector <= range) {
            return true;
        }
        return false;
    }
    /**
     * Get entities within range, get any entities within range of given entity.
     *
     * @param   {Entity}    queryEntity  Source entity
     * @param   {number}    range        Range from source entity
     * @param   {string[]}  type         type filter out specific types of entities
     *
     * @return  {Entity[]}               List of entities
     */
    getEntitiesInRange(queryEntity, range, type) {
        const entities = [];
        for (let [key, entity] of this.entities) {
            if (queryEntity.id != key) {
                if (this.withinRange(queryEntity.location, entity.location, range)) {
                    if (type) {
                        if (entity.name == type) {
                            entities.push(entity);
                        }
                    }
                    else {
                        entities.push(entity);
                    }
                }
            }
        }
        return entities;
    }
    /**
     * Get the closest entity to a given entity within a range
     *
     * @param   {Entity}  queryEntity  Source entity
     * @param   {number}  range        range
     * @param   {string}  type         type filter on type
     *
     * @return  {Entity}               Closest entity of type
     */
    getCloseEntity(queryEntity, range, type) {
        for (let [key, entity] of this.entities) {
            // Exclude the queried entity
            if (queryEntity.id != key) {
                if (this.withinRange(queryEntity.location, entity.location, range)) {
                    if (type) {
                        if (entity.name == type) {
                            return entity;
                        }
                    }
                    else {
                        return entity;
                    }
                }
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/obj/zomball.ts":
/*!****************************!*\
  !*** ./src/obj/zomball.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zomball)
/* harmony export */ });
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/color */ "./src/util/color.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/obj/entity.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/random */ "./src/util/random.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_states_zomball_state_charging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/states/zomball_state_charging */ "./src/state/states/zomball_state_charging.ts");
/* harmony import */ var _state_states_zomball_state_dead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/states/zomball_state_dead */ "./src/state/states/zomball_state_dead.ts");
/* harmony import */ var _state_states_zomball_state_eating_grass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/states/zomball_state_eating_grass */ "./src/state/states/zomball_state_eating_grass.ts");
/* harmony import */ var _state_states_zomball_state_walking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/states/zomball_state_walking */ "./src/state/states/zomball_state_walking.ts");
/* harmony import */ var _state_states_zomball_state_alerted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/states/zomball_state_alerted */ "./src/state/states/zomball_state_alerted.ts");










class Zomball extends _entity__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super("zomball");
        this.color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](0, 128, 0);
        this.spatter = false;
        this.in_sights_color = new _util_color__WEBPACK_IMPORTED_MODULE_0__["default"](255, 128, 0);
        this.size = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SIZE;
        this.health = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DEFAULT_HEALTH;
        this.setSpawn();
        this.damage_value = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DAMAGE_VALUE;
        this.brain.addState(new _state_states_zomball_state_walking__WEBPACK_IMPORTED_MODULE_8__["default"](this));
        this.brain.addState(new _state_states_zomball_state_charging__WEBPACK_IMPORTED_MODULE_5__["default"](this));
        this.brain.addState(new _state_states_zomball_state_eating_grass__WEBPACK_IMPORTED_MODULE_7__["default"](this));
        this.brain.addState(new _state_states_zomball_state_alerted__WEBPACK_IMPORTED_MODULE_9__["default"](this));
        this.brain.addState(new _state_states_zomball_state_dead__WEBPACK_IMPORTED_MODULE_6__["default"](this));
        this.brain.setState("zomball-walking");
        this.speed = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPEED_MIN + _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPEED_RANGE);
    }
    /**
     * Render the zomball
     */
    render(context) {
        super.render(context);
        // Render health bar
        if (this.health > 0) {
            let health_bar_length = 20;
            let health_bar_width = 3;
            let health_bar_empty_color = 'red';
            let health_bar_full_color = 'green';
            let line_x = Math.round(this.location.x - (this.size / 2));
            let line_y = Math.round(this.location.y - ((this.size / 2) + (health_bar_width * 2)));
            const percentage = Math.round((100 / _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DEFAULT_HEALTH) * this.health);
            // if player health is less than default health
            if (this.health < _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DEFAULT_HEALTH) {
                context.beginPath();
                context.lineWidth = health_bar_width;
                context.strokeStyle = health_bar_empty_color;
                context.moveTo(line_x, line_y);
                context.lineTo(line_x + health_bar_length, line_y);
                context.stroke();
                // TODO: Work out this
                const new_health_bar_length = ((health_bar_length / 100) * percentage);
                context.beginPath();
                context.lineWidth = health_bar_width;
                context.strokeStyle = health_bar_full_color;
                context.moveTo(line_x, line_y);
                context.lineTo(line_x + new_health_bar_length, line_y);
                context.stroke();
            }
            else {
                context.beginPath();
                context.lineWidth = health_bar_width;
                context.strokeStyle = health_bar_full_color;
                context.moveTo(line_x, line_y);
                context.lineTo(line_x + health_bar_length, line_y);
                context.stroke();
            }
        }
    }
    /**
     * Process the zomballs movements and actions
     */
    process(gameTime) {
        super.process(gameTime);
        if (!this.world)
            return;
        if (!this.world.player)
            return;
        if (this.world.withinRange(this.location, this.world.player.location, (this.world.player.size / 2) + (this.size / 2))) {
            this.world.player.takeDamage(this.damage_value);
            this.remove = true;
        }
    }
    /**
     * This sets the initial spawn location of a zomball
     */
    setSpawn() {
        let x = 0;
        let y = 0;
        // whether r not to restrain the zomball with
        // zomball_spawn_offset from the center, ie a zomball
        // wont spawn within zomball_spawn_offset pixels in any directioon
        // of the center
        let spawn_direction = 4;
        if (_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_RESTRAINED == true) {
            spawn_direction = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, 3);
        }
        switch (spawn_direction) {
            case 0: // north
                x = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width);
                y = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height / 2)) - _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_OFFSET;
                break;
            case 1: // east
                x = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width / 2)) + (Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width / 2) + _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_OFFSET);
                y = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height);
                break;
            case 2: // south
                x = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width);
                y = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height / 2)) + (Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height / 2) + _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_OFFSET);
                break;
            case 3: // west
                x = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, Math.round(_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width / 2)) - _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_OFFSET;
                // x = rand.nextInt((game_size[0]/2).round())-zomball_spawn_offset;
                y = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height);
                break;
            case 4:
                x = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.width);
                y = _util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.GAME_SIZE.height);
                break;
        }
        this.location = new vector2d__WEBPACK_IMPORTED_MODULE_4__.Vector(x, y);
    }
}


/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ State)
/* harmony export */ });
/**
 * Abstract state class, devines the base "state" for use with
 * state machine.
 */
class State {
    /**
     * @param   {string}  name  State name/key
     */
    constructor(name) {
        /**
         * Name or key for the state, used to refer to the given state
         * from within the other states and state machine
         */
        this.name = '';
        this.name = name;
    }
}


/***/ }),

/***/ "./src/state/state_machine.ts":
/*!************************************!*\
  !*** ./src/state/state_machine.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateMachine)
/* harmony export */ });
/**
 * The state machine is the brain for a given entity.
 */
class StateMachine {
    /**
     * Construct
     */
    constructor() {
        this.states = new Map();
        this.active_state = null;
    }
    /**
     * Add a state to the state machine
     *
     * @param   {State}  state  A valid state
     *
     * @return  {void}
     */
    addState(state) {
        this.states.set(state.name, state);
    }
    /**
     * this processes the actions for the current state
     * it will also check for any conditions on the existing
     * state that could change the state of the entity, thus
     * altering the state of the entity
     *
     * @return  {void}    [return description]
     */
    think() {
        const currentState = this.getActiveState();
        if (currentState) {
            currentState.doActions();
            const newState = currentState.checkConditions();
            if (newState) {
                this.setState(newState);
            }
        }
    }
    /**
     * Returns the active state or null if none active
     *
     * @return  {State}   [return description]
     */
    getActiveState() {
        if (this.active_state == null)
            return null;
        const activeState = this.states.get(this.active_state);
        if (activeState)
            return activeState;
        return null;
    }
    /**
     * Returns the active state or null if none active
     *
     * @return  {State}   [return description]
     */
    getActiveStateName() {
        return this.active_state;
    }
    /**
     * Sets the active state, runs any exit actions for the old active
     *  state (if any) and runs entry actions for the new state.
     *
     * @param   {string}  state_name  State name or key to set as the active state
     *
     * @return  {void}
     */
    setState(state_name) {
        const currentState = this.getActiveState();
        if (currentState)
            currentState.exitActions();
        this.active_state = state_name;
        const newState = this.getActiveState();
        if (newState)
            newState.entryActions();
    }
}


/***/ }),

/***/ "./src/state/states/zomball_state_alerted.ts":
/*!***************************************************!*\
  !*** ./src/state/states/zomball_state_alerted.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZomballStateAlerted)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state/state.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/random */ "./src/util/random.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Zomball has been suprised. Not in a good way! One of it's
 * friends has been shot. It's not yet sure what to do...
 *
 * ... should it charge or keep standing still?
 */
class ZomballStateAlerted extends _state__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {Zomball}  zomball  The Zomball
     */
    constructor(zomball) {
        super("zomball-alerted");
        this.zomball = zomball;
    }
    /**
     * @see {State.entryActions}
     */
    entryActions() {
        var _a, _b, _c, _d;
        // Zomball is shocked, it is not moving.
        this.zomball.speed = 0;
        // Zomball know's that Player shot it's friend, it will come for 
        // Player. Player is zomball destination. Just not moving yet.
        this.zomball.destination = new vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector((_b = (_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.player) === null || _b === void 0 ? void 0 : _b.location.x, (_d = (_c = this.zomball.world) === null || _c === void 0 ? void 0 : _c.player) === null || _d === void 0 ? void 0 : _d.location.y);
    }
    /**
     * @see {State.entryActions}
     */
    checkConditions() {
        // If zomball is shot while standing here, it ded.
        if (this.zomball.health <= 0) {
            return "zomball-dead";
        }
        // Mustering up the courage to charge at the player. Will it happen?
        if (_util_random__WEBPACK_IMPORTED_MODULE_1__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_ALERT_CHARGE_POSSIBILITY) == 0) {
            return "zomball-charging";
        }
        return null;
    }
    /**
     * @see {State.entryActions}
     */
    doActions() {
        // Nothing, Zomball is shocked!
    }
    /**
     * @see {State.entryActions}
     */
    exitActions() {
        // nothing
    }
}


/***/ }),

/***/ "./src/state/states/zomball_state_charging.ts":
/*!****************************************************!*\
  !*** ./src/state/states/zomball_state_charging.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZomballStateCharging)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state/state.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");



class ZomballStateCharging extends _state__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {Zomball}  zomball  The Zomball
     */
    constructor(zomball) {
        super("zomball-charging");
        this.zomball = zomball;
    }
    /**
     * @see {State.entryActions}
     */
    entryActions() {
        var _a, _b;
        // Increase speed, anger give zomball strength!
        this.zomball.speed = _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_CHARGE_SPEED;
        // Set destination as the player, failsafe if zomball 
        // just decided to charge without being alerted
        const playerLocation = (_b = (_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.player) === null || _b === void 0 ? void 0 : _b.location;
        if (playerLocation) {
            this.zomball.destination = new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(playerLocation.x, playerLocation.y);
        }
    }
    /**
     * @see {State.checkConditions}
     */
    checkConditions() {
        // It died
        if (this.zomball.health <= 0) {
            return "zomball-dead";
        }
        return null;
    }
    /**
     * @see {State.doActions}
     */
    doActions() {
        // nothing
    }
    /**
     * @see {State.exitActions}
     */
    exitActions() {
        // nothing
    }
}


/***/ }),

/***/ "./src/state/states/zomball_state_dead.ts":
/*!************************************************!*\
  !*** ./src/state/states/zomball_state_dead.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZomballStateDead)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state/state.ts");
/* harmony import */ var _util_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/color */ "./src/util/color.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");



/**
 * Zomball is dead state, all it's health has depleated.
 * Is it a sad zomball? no. A dead zomball has no feelings.
 */
class ZomballStateDead extends _state__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param   {Zomball}  zomball  The Zomball
     */
    constructor(zomball) {
        super('zomball-dead');
        /**
         * We only persist the dead bodies for a period of time,
         * this variable allows us to keep track of the bodies to
         * dispose of.
         */
        this.entry_time = 0;
        this.zomball = zomball;
        this.dead_color = new _util_color__WEBPACK_IMPORTED_MODULE_1__["default"](128, 64, 0); // Dead Brown
    }
    /**
     * @see {State.entryActions}
     */
    entryActions() {
        var _a;
        // Zomball dead, it has no speed.
        this.zomball.speed = 0;
        // Call it. Time of Death. Now.
        this.entry_time = Date.now();
        // Dead brown
        this.zomball.color = this.dead_color;
        // Player is rewarded for the sensless destruction
        this.zomball.world.player_score += Math.round(((Date.now() - this.zomball.spawn_time) / _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SCORE_FACTOR) + _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_BASE_VALUE);
        // Blood stuff
        if (this.zomball.spatter == false) {
            (_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.drawSpatter(this.zomball.location);
            this.zomball.spatter = true;
        }
    }
    /**
     * @see {State.doActions}
     */
    doActions() {
        // Check if we can dispose of the body yet?
        const now = Date.now();
        if (Math.round((now - this.entry_time) / 1000) > _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DEATH_TIME) {
            this.zomball.remove = true;
        }
    }
    /**
     * @see {State.checkConditions}
     */
    checkConditions() {
        return null;
    }
    /**
     * @see {State.exitAction}
     */
    exitActions() {
        // nothing
    }
}


/***/ }),

/***/ "./src/state/states/zomball_state_eating_grass.ts":
/*!********************************************************!*\
  !*** ./src/state/states/zomball_state_eating_grass.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZomballStateEatingGrass)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state/state.ts");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/random */ "./src/util/random.ts");




/**
 * Currently unused
 */
class ZomballStateEatingGrass extends _state__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(zomball) {
        super('zomballe-eating-grass');
        this.zomball = zomball;
    }
    entryActions() {
        // increase speed
        this.zomball.speed = 0;
        // set destination as the player
        this.zomball.destination = this.zomball.location;
    }
    checkConditions() {
        var _a, _b;
        if (this.zomball.health <= 0) {
            return "zomball-dead";
        }
        // if the zomball decides to move
        if (_util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_DEST_REACH_MOVE_POSSIBILITY) == 0) {
            // it might charge or walk.
            const player = (_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.player;
            if (player && ((_b = this.zomball.world) === null || _b === void 0 ? void 0 : _b.withinRange(new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(this.zomball.location.x, this.zomball.location.y), new vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector(player.location.x, player.location.y), _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_SPAWN_OFFSET))) {
                if (_util_random__WEBPACK_IMPORTED_MODULE_3__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_2__.Constants.ZOMBALL_CHARGE_POSSIBILITY) == 0) {
                    return "zomball-charging";
                }
            }
            return "zomball-walking";
        }
        return null;
    }
    doActions() {
        // nothing
    }
    exitActions() {
        // nothing
    }
}


/***/ }),

/***/ "./src/state/states/zomball_state_walking.ts":
/*!***************************************************!*\
  !*** ./src/state/states/zomball_state_walking.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZomballStateWalking)
/* harmony export */ });
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vector2d */ "./node_modules/vector2d/src/Vec2D.js");
/* harmony import */ var vector2d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vector2d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/random */ "./src/util/random.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state/state.ts");




/**
 * Zomball walking state, just meandering about, bumping into each other,
 * not agro or charging. Just a lovely day on the field minding it's own business.
 */
class ZomballStateWalking extends _state__WEBPACK_IMPORTED_MODULE_3__["default"] {
    /**
     * @param   {Zomball}  zomball  Zomball Entity this state belongs to
     */
    constructor(zomball) {
        super("zomball-walking");
        this.zomball = zomball;
    }
    /**
     * [chooseDestination description]
     *
     * @return  {void}    [return description]
     */
    chooseDestination() {
        // Destination not set, so lets choose one
        // somewhere on the game field.
        if (this.zomball.destination == null) {
            this.zomball.destination = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.width), _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.height));
        }
        else {
            /**
            TODO: Ported directly from Dart, it's currently not behaving correctly.
            
            Requirements: if a zomball is walking it may change it's direction slightly.
      
            */
            // destination is set so lets choose one close
            // to where the current one is. so we dont get crazy jerky
            // movements
            // if zomball has reached their destination then chose a completely
            // new one, but only after
            //   else {
            //     // set some defaults for the new locations
            //     let new_x: number = 0;
            //     let new_y: number = 0;
            //     // first work out x
            //     const x_offset = Random.int(0, Constants.ZOMBALL_WALKING_CHANGE_OFFSET);
            //     if (Random.int(0, 1) == 1) {
            //       // positive
            //       new_x = Math.round(this.zomball.destination.x + x_offset);
            //     } else {
            //       // negative
            //       new_x = Math.round(this.zomball.destination.x + x_offset);
            //     }
            //     // first work out x
            //     const y_offset = Random.int(0, Constants.ZOMBALL_WALKING_CHANGE_OFFSET);
            //     if (Random.int(0, 1) == 1) {
            //       // positive
            //       new_y = Math.round(this.zomball.destination.y + y_offset);
            //     } else {
            //       // negative
            //       new_y = Math.round(this.zomball.destination.y + y_offset);
            //     }
            //     // set the new destination
            //     this.zomball.destination = new Vec2.Vector(new_x, new_y);
            //   }
        }
    }
    /**
     * @see  {State.doActions}
     */
    doActions() {
        var _a, _b, _c;
        // If the Zomball is out of game range AND it's walking further away,
        // Flag it for removal, it's an idiot.
        if (((_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.outOfRange(this.zomball.destination)) &&
            ((_b = this.zomball.world) === null || _b === void 0 ? void 0 : _b.outOfRange(this.zomball.location))) {
            this.zomball.remove = true;
        }
        // If another 'zomball' is 'bumped' into then reverse the current direction
        if (((_c = this.zomball.world) === null || _c === void 0 ? void 0 : _c.getCloseEntity(this.zomball, this.zomball.size, 'zomball')) != null) {
            // Reverse the destination
            this.zomball.destination = this.zomball.destination.reverse();
        }
        // If a zomball has reached it's destination, then lets 
        // randomly, maybe choose another destination.
        if (this.zomball.location.equals(this.zomball.destination)) {
            if (_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.ZOMBALL_DEST_REACH_MOVE_POSSIBILITY) == 0) {
                this.zomball.destination = new vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector(_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.width), _util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.GAME_SIZE.height));
            }
        }
        // only update the direction of the zomball one in every
        // zomball_walking_change_offset ticks, but randomly
        if (_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.ZOMBALL_WALKING_CHANGE_OFFSET) == 0) {
            this.chooseDestination();
        }
    }
    /**
     * @see {State.checkConditions}
     */
    checkConditions() {
        var _a, _b, _c;
        // If the zomball has zero or less health then they ded.
        if (this.zomball.health <= 0) {
            return "zomball-dead";
        }
        // If a zomball is close to the player (within ZOMBALL_ALERT_RANGE), 
        // then trigger a charge possibility.
        if ((_a = this.zomball.world) === null || _a === void 0 ? void 0 : _a.withinRange(this.zomball.location, (_c = (_b = this.zomball.world) === null || _b === void 0 ? void 0 : _b.player) === null || _c === void 0 ? void 0 : _c.location, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.ZOMBALL_ALERT_RANGE)) {
            if (_util_random__WEBPACK_IMPORTED_MODULE_2__["default"].int(0, _constants__WEBPACK_IMPORTED_MODULE_1__.Constants.ZOMBALL_CHARGE_POSSIBILITY) == 0) {
                return "zomball-charging";
            }
        }
        return null;
    }
    /**
     * @see {State.entryActions}
     */
    entryActions() {
        // Good morning, zomball has just awoken, where is it going?
        this.chooseDestination();
    }
    /**
     * @see {State.exitActions}
     */
    exitActions() {
        // nothing
    }
}


/***/ }),

/***/ "./src/util/circle.ts":
/*!****************************!*\
  !*** ./src/util/circle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawCircle)
/* harmony export */ });
/**
 * Draw a circle on the context given
 *
 * @var {CanvasRenderingContext2D}  context   Canvas rendering context to draw with
 * @var {Vec2.Vector}               location  Where to draw the circle
 * @var {Color}                     color     Color to draw with
 * @var {number}                    size      Diameter in pixels
 *
 * @returns {void}
 */
function drawCircle(context, location, color, size) {
    context.beginPath();
    context.arc(location.x, location.y, Math.round(size / 2), 0, 2 * Math.PI, false);
    context.fillStyle = color.getHex();
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = color.getHex();
    context.stroke();
}


/***/ }),

/***/ "./src/util/color.ts":
/*!***************************!*\
  !*** ./src/util/color.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/**
 * Colour helper, useful for converting between colour formats.
 * This is probably not really needed for the TS/JS version but is
 * more of a hangover from the Dart version of the game. Was good
 * learning converting it to javascript/typescript.
 */
class Color {
    /**
     * [constructor description]
     *
     * @param   {number}  r  red [0 - 255]
     * @param   {number}  g  green [0 - 255]
     * @param   {number}  b  blue [0 - 255]
     * @param   {number?}  a  alpha [0.0 - 1.0]
     */
    constructor(r, g, b, a) {
        /**
         * red
         */
        this.r = 0;
        /**
         * green
         */
        this.g = 0;
        /**
         * blue
         */
        this.b = 0;
        /**
         * alpha
         */
        this.a = 0.0;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a ? a : 1.0;
    }
    /**
     * Returns an array of RGB values
     *
     * @return  {Array<number>}
     */
    getRgb() {
        return [this.r, this.g, this.b];
    }
    /**
     * Return array of HSL values
     *
     * From: https://css-tricks.com/converting-color-spaces-in-javascript/
     *
     * @return  {Array<number>}
     */
    getHsl() {
        // Make r, g, and b fractions of 1
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b);
        let cmax = Math.max(r, g, b);
        let delta = cmax - cmin;
        let h = 0;
        let s = 0;
        let l = 0;
        // Calculate hue
        // No difference
        if (delta == 0) {
            h = 0;
            // Red is max
        }
        else if (cmax == r) {
            h = ((g - b) / delta) % 6;
            // Green is max
        }
        else if (cmax == g) {
            h = (b - r) / delta + 2;
            // Blue is max
        }
        else {
            h = (r - g) / delta + 4;
        }
        h = Math.round(h * 60);
        // Make negative hues positive behind 360°
        if (h < 0) {
            h += 360;
        }
        // Calculate lightness
        l = (cmax + cmin) / 2;
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        return [h, s, l];
    }
    /**
     * Return HEX value of colour (inlcuding alpha)
     *
     * From: https://css-tricks.com/converting-color-spaces-in-javascript/
     *
     * @return  {string}
     */
    getHex(withAlpha = true) {
        let r = this.r.toString(16);
        let g = this.g.toString(16);
        let b = this.b.toString(16);
        let a = (this.a * 255).toString(16);
        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;
        if (!withAlpha)
            return "#" + r + g + b;
        return "#" + r + g + b + a;
    }
}


/***/ }),

/***/ "./src/util/projectileFactory.ts":
/*!***************************************!*\
  !*** ./src/util/projectileFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectileFactory)
/* harmony export */ });
/* harmony import */ var _obj_bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../obj/bullet */ "./src/obj/bullet.ts");

/**
 * "factory" method for returning projectile objects JIT.
 * There's nicer more perfomant ways to do this in typescript,
 * but this is fine for this use-case.
 *
 * @param   {string}      type  What type of projectile to return
 *
 * @return  {Projectile}        Concrete Projectile
 */
function projectileFactory(type) {
    switch (type) {
        case 'bullet':
            return new _obj_bullet__WEBPACK_IMPORTED_MODULE_0__["default"]();
            break;
        default:
            return new _obj_bullet__WEBPACK_IMPORTED_MODULE_0__["default"]();
            break;
    }
}


/***/ }),

/***/ "./src/util/random.ts":
/*!****************************!*\
  !*** ./src/util/random.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Random)
/* harmony export */ });
/**
 * RNG helper for integers.
 * Looked into using a lib but this is fine.
 */
class Random {
    /**
     * Return a 'random' int, unsing Math.random()
     *
     * @param   {number}  min  Range minimum (inclusive)
     * @param   {number}  max  Range maximum (inclusive)
     */
    static int(min = 0, max = 10) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


/***/ }),

/***/ "./node_modules/vector2d/src/AbstractVector.js":
/*!*****************************************************!*\
  !*** ./node_modules/vector2d/src/AbstractVector.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * These values are used by the `AbstractVector.round` method to increase
 * performance vs. using  Number.toFixed.
 */
var precision = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
    10000000000
];
/**
 * The class that all other vector representations are derived from.
 *
 * Contains the core implementation for all methods that will be exposed by
 * vector instances.
 *
 * Example of creating a custom implementation:
 *
 * ```ts
 * import { AbstractVector } from "./AbstractVector"
 *
 * export class MyCustomVector extends AbstractVector {
 *  constructor (x: number, y: number) {
 *    super(CustomVectorType)
 *  }
 * }
 * ```
 */
var AbstractVector = /** @class */ (function () {
    function AbstractVector(ctor) {
        this.ctor = ctor;
    }
    /**
     * Set both x and y axis value
     * @param x   New x val
     * @param y   New y val
     */
    AbstractVector.prototype.setAxes = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * Getter for x the axis value
     */
    AbstractVector.prototype.getX = function () {
        return this.x;
    };
    /**
     * Setter for x axis value
     */
    AbstractVector.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    /**
     * Getter for y axis value
     */
    AbstractVector.prototype.getY = function () {
        return this.y;
    };
    /**
     * Setter for y axis.
     */
    AbstractVector.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    /**
     * Return the vector as a formatted string, e.g "(0, 4)"
     */
    AbstractVector.prototype.toString = function (round) {
        if (round === void 0) { round = false; }
        if (round) {
            return "(" + Math.round(this.x) + ", " + Math.round(this.y) + ")";
        }
        return "(" + this.x + ", " + this.y + ")";
    };
    /**
     * Return an Array containing the vector axes, e.g [0, 4]
     */
    AbstractVector.prototype.toArray = function () {
        return [this.x, this.y];
    };
    /**
     * Return an Object containing the vector axes, e.g { x: 0, y: 4 }
     */
    AbstractVector.prototype.toObject = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Add the provided vector to this one
     */
    AbstractVector.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    /**
     * Subtract the provided vector from this one
     */
    AbstractVector.prototype.subtract = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    /**
     * Check if the provided vector equal to this one
     */
    AbstractVector.prototype.equals = function (vec) {
        return vec.x === this.x && vec.y === this.y;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.multiplyByVector = function (vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    };
    /**
     * Multiply this vector by the provided vector
     */
    AbstractVector.prototype.mulV = function (vec) {
        return this.multiplyByVector(vec);
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divideByVector = function (vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    };
    /**
     * Divide this vector by the provided vector
     */
    AbstractVector.prototype.divV = function (v) {
        return this.divideByVector(v);
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.multiplyByScalar = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    /**
     * Multiply this vector by the provided number
     */
    AbstractVector.prototype.mulS = function (n) {
        return this.multiplyByScalar(n);
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divideByScalar = function (n) {
        this.x /= n;
        this.y /= n;
        return this;
    };
    /**
     * Divive this vector by the provided number
     */
    AbstractVector.prototype.divS = function (n) {
        return this.divideByScalar(n);
    };
    /**
     * Normalise this vector
     */
    AbstractVector.prototype.normalise = function () {
        return this.divideByScalar(this.magnitude());
    };
    /**
     * For American spelling. Same as unit/normalise function
     */
    AbstractVector.prototype.normalize = function () {
        return this.normalise();
    };
    /**
     * The same as normalise and normalize
     */
    AbstractVector.prototype.unit = function () {
        return this.normalise();
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.magnitude = function () {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Returns the magnitude (length) of this vector
     */
    AbstractVector.prototype.length = function () {
        return this.magnitude();
    };
    /**
     * Returns the squred length of this vector
     */
    AbstractVector.prototype.lengthSq = function () {
        var x = this.x;
        var y = this.y;
        return x * x + y * y;
    };
    /**
     * Returns the dot product of this vector by another
     */
    AbstractVector.prototype.dot = function (vec) {
        return vec.x * this.x + vec.y * this.y;
    };
    /**
     * Returns the cross product of this vector by another.
     */
    AbstractVector.prototype.cross = function (vec) {
        return this.x * vec.y - this.y * vec.x;
    };
    /**
     * Reverses this vector i.e multiplies it by -1
     */
    AbstractVector.prototype.reverse = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    /**
     * Set the vector axes values to absolute values
     */
    AbstractVector.prototype.abs = function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    };
    /**
     * Zeroes the vector i.e sets all axes to 0
     */
    AbstractVector.prototype.zero = function () {
        this.x = this.y = 0;
        return this;
    };
    /**
     * Returns the distance between this vector and another
     */
    AbstractVector.prototype.distance = function (v) {
        var x = this.x - v.x;
        var y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    };
    /**
     * Rotates the vetor by provided radians
     */
    AbstractVector.prototype.rotate = function (rads) {
        var cos = Math.cos(rads);
        var sin = Math.sin(rads);
        var ox = this.x;
        var oy = this.y;
        this.x = ox * cos - oy * sin;
        this.y = ox * sin + oy * cos;
        return this;
    };
    /**
     * Rounds this vector to n decimal places
     */
    AbstractVector.prototype.round = function (n) {
        if (n === void 0) { n = 2; }
        var p = precision[n];
        // This performs waaay better than toFixed and give Float32 the edge again.
        // http://www.dynamicguru.com/javascript/round-numbers-with-precision/
        this.x = ((0.5 + this.x * p) << 0) / p;
        this.y = ((0.5 + this.y * p) << 0) / p;
        return this;
    };
    /**
     * Returns a copy of this vector
     */
    AbstractVector.prototype.clone = function () {
        return new this.ctor(this.x, this.y);
    };
    return AbstractVector;
}());
exports.AbstractVector = AbstractVector;
//# sourceMappingURL=AbstractVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/ArrayVector.js":
/*!**************************************************!*\
  !*** ./node_modules/vector2d/src/ArrayVector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in an Array
 *
 * ```
 * const v = new Vec2D.ArrayVector(2, 5)
 * ```
 */
var ArrayVector = /** @class */ (function (_super) {
    __extends(ArrayVector, _super);
    function ArrayVector(x, y) {
        var _this = _super.call(this, ArrayVector) || this;
        _this.axes = [x, y];
        _this.ctor = ArrayVector;
        return _this;
    }
    Object.defineProperty(ArrayVector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayVector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayVector;
}(AbstractVector_1.AbstractVector));
exports.ArrayVector = ArrayVector;
//# sourceMappingURL=ArrayVector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Float32Vector.js":
/*!****************************************************!*\
  !*** ./node_modules/vector2d/src/Float32Vector.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes in a Float32Array
 *
 * ```
 * const v = new Vec2D.Float32Vector(2, 5)
 * ```
 */
var Float32Vector = /** @class */ (function (_super) {
    __extends(Float32Vector, _super);
    function Float32Vector(x, y) {
        var _this = _super.call(this, Float32Vector) || this;
        _this.axes = new Float32Array(2);
        _this.axes[0] = x;
        _this.axes[1] = y;
        return _this;
    }
    Object.defineProperty(Float32Vector.prototype, "x", {
        get: function () {
            return this.axes[0];
        },
        set: function (x) {
            this.axes[0] = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Float32Vector.prototype, "y", {
        get: function () {
            return this.axes[1];
        },
        set: function (y) {
            this.axes[1] = y;
        },
        enumerable: true,
        configurable: true
    });
    return Float32Vector;
}(AbstractVector_1.AbstractVector));
exports.Float32Vector = Float32Vector;
//# sourceMappingURL=Float32Vector.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vec2D.js":
/*!********************************************!*\
  !*** ./node_modules/vector2d/src/Vec2D.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js"));
__export(__webpack_require__(/*! ./ArrayVector */ "./node_modules/vector2d/src/ArrayVector.js"));
__export(__webpack_require__(/*! ./Float32Vector */ "./node_modules/vector2d/src/Float32Vector.js"));
__export(__webpack_require__(/*! ./Vector */ "./node_modules/vector2d/src/Vector.js"));
//# sourceMappingURL=Vec2D.js.map

/***/ }),

/***/ "./node_modules/vector2d/src/Vector.js":
/*!*********************************************!*\
  !*** ./node_modules/vector2d/src/Vector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AbstractVector_1 = __webpack_require__(/*! ./AbstractVector */ "./node_modules/vector2d/src/AbstractVector.js");
/**
 * A vector representation that stores the axes as part of the instance itself
 *
 * ```ts
 * const v = new Vec2D.Vector(2, 5)
 * ```
 */
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        var _this = _super.call(this, Vector) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}(AbstractVector_1.AbstractVector));
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.ts");


/**
 * Query selector string
 * for the canvas target
 */
const target = '#game-board';
(() => {
    // This is our target canvas
    const canvas = document.querySelector(target);
    if (canvas instanceof HTMLCanvasElement) {
        // Using the 2D context
        const context = canvas.getContext('2d');
        if (context == null)
            return;
        // Create Game object.
        const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, context);
        // Define gameloop and process.
        const gameLoop = (timestamp) => {
            game.process(timestamp);
            // Keep requesting new frames
            window.requestAnimationFrame(gameLoop);
        };
        // Bootstrap any setup stuff
        game.setUp();
        // Start the renderloop.
        window.requestAnimationFrame(gameLoop);
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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bkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ0Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3pvbWJhbGxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL3pvbWJhbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3pvbWJhbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly96b21iYWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly96b21iYWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly96b21iYWxscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3pvbWJhbGxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvb2JqL2J1bGxldC50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9vYmovZW50aXR5LnRzIiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL29iai9waXN0b2wudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvb2JqL3BsYXllci50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9vYmovcHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9vYmovd2VhcG9uLnRzIiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL29iai93b3JsZC50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9vYmovem9tYmFsbC50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9zdGF0ZS9zdGF0ZS50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9zdGF0ZS9zdGF0ZV9tYWNoaW5lLnRzIiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL3N0YXRlL3N0YXRlcy96b21iYWxsX3N0YXRlX2FsZXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvc3RhdGUvc3RhdGVzL3pvbWJhbGxfc3RhdGVfY2hhcmdpbmcudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvc3RhdGUvc3RhdGVzL3pvbWJhbGxfc3RhdGVfZGVhZC50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy9zdGF0ZS9zdGF0ZXMvem9tYmFsbF9zdGF0ZV9lYXRpbmdfZ3Jhc3MudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvc3RhdGUvc3RhdGVzL3pvbWJhbGxfc3RhdGVfd2Fsa2luZy50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy91dGlsL2NpcmNsZS50cyIsIndlYnBhY2s6Ly96b21iYWxscy8uL3NyYy91dGlsL2NvbG9yLnRzIiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL3V0aWwvcHJvamVjdGlsZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9zcmMvdXRpbC9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL0Fic3RyYWN0VmVjdG9yLmpzIiwid2VicGFjazovL3pvbWJhbGxzLy4vbm9kZV9tb2R1bGVzL3ZlY3RvcjJkL3NyYy9BcnJheVZlY3Rvci5qcyIsIndlYnBhY2s6Ly96b21iYWxscy8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvRmxvYXQzMlZlY3Rvci5qcyIsIndlYnBhY2s6Ly96b21iYWxscy8uL25vZGVfbW9kdWxlcy92ZWN0b3IyZC9zcmMvVmVjMkQuanMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvLi9ub2RlX21vZHVsZXMvdmVjdG9yMmQvc3JjL1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly96b21iYWxscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96b21iYWxscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly96b21iYWxscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vem9tYmFsbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96b21iYWxscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3pvbWJhbGxzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMjU1LCAxMjgpO1xcbn1cXG5cXG4jZ2FtZS1ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMjU1LCAxMjgpO1xcbn1cXG5cXG4jZ2FtZS1ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwwLDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIC8vIEdhbWUgY2FudmFzIHNpemVcbiAgICBHQU1FX1NJWkU6IHtcbiAgICAgICAgd2lkdGg6IDEwMjQsXG4gICAgICAgIGhlaWdodDogNzY4XG4gICAgfSxcbiAgICAvLyBQbGF5ZXIgcGh5c2ljYWwgc2l6ZVxuICAgIFBMQVlFUl9TSVpFOiA1MCxcbiAgICAvLyBIb3cgbWFueSBoZWFsdGggcG9pbnRzIGRvZXMgdGhlIHBsYXllciBzdGFydCB3aXRoXG4gICAgUExBWUVSX0RFRkFVTFRfSEVBTFRIOiAxMDAsXG4gICAgLy8gVW51c2VkIGF0IHRoZSBtb21lbnQsIGZsYWcgZm9yIHVzaW5nIGNhbnZhcyBwcmVyZW5kZXJcbiAgICAvLyBmb3IgcGVyZm9ybWFuY2Uga2ljay5cbiAgICBHQU1FX1VUSUxJWkVfUFJFUkVOREVSOiBmYWxzZSxcbiAgICAvLyBTaG91bGQgdGhlIHRhcmdldCBiZSBmbGlwcGVyLCBQb0MgZm9yIG1vYmlsZSB3aGVyZSBcbiAgICAvLyBhIHRodW1iL2ZpbmdlciB3b3VsZCBnZXQgaW4gdGhlIHdheSBvZiBhIHBvdGVudGlhbCB0YXJnZXQsXG4gICAgLy8gc28gZmxpcHBpbmcgdGhlIHNpZ2h0cyB0byBvcHBvc2l0ZSB0aGUgdG91Y2ggcG9pbnQgaGVscHNcbiAgICBHQU1FX0ZMSVBfU0lHSFRTOiBmYWxzZSxcbiAgICAvLyBBZnRlciBob3cgbWFudSBzZWNvbmRzIHRvIGluY3JlYXNlIHRoZSBtYXggZW5lbXkgZW50aXR5IGNvdW50XG4gICAgLy8gYnkgR0FNRV9JTkNSRUFTRV9aT01CQUxMX05VTUJFUlxuICAgIEdBTUVfSU5DUkVBU0VfWk9NQkFMTF9JTlRFUlZBTDogMTAuMCxcbiAgICAvLyBIb3cgbWFueSBlbmVteSBlbnRpdGllcyB0byBpbiBjcmVhc2UgdGhlIG1heCBudW1iZXIgYnkgYWZ0ZXIgXG4gICAgLy8gR0FNRV9JTkNSRUFTRV9aT01CQUxMX0lOVEVSVkFMIHNlY29uZHNcbiAgICBHQU1FX0lOQ1JFQVNFX1pPTUJBTExfTlVNQkVSOiAxLjAsXG4gICAgLy8gVGhlIGxvbmdlciBhbiBlbmVteSBsaXZlcyBmb3IgdGhleSBnZXQgYSB3ZWlnaHRlZCBzY29yZSwgdGhpc1xuICAgIC8vIGlzIGJhc2VkIG9uIG1pbGxpc2Vjb25kcyBhbmQgY2FuIGJlIHF1aXRlIGxhcmdlLCB0aGUgdGltZSBhbGl2ZVxuICAgIC8vIHNjb3JlIGlzIHJlZHVjZWQgYnkgZGV2aWRpbmcgYnkgdGhlIHRoZSBaT01CQUxMX1NDT1JFX0ZBQ1RPUiBudW1iZXIuXG4gICAgWk9NQkFMTF9TQ09SRV9GQUNUT1I6IDUwLFxuICAgIC8vIEhvdyBtYW55IGJhc2UgcG9pbnRzIGFyZSBhY2hpZXZlZCBieSBraWxsaW5nIGFuIGVuZW15XG4gICAgWk9NQkFMTF9CQVNFX1ZBTFVFOiA1MCxcbiAgICAvLyBIb3cgbGFyZ2UgaXMgdGhlIGludmlzYmxlIGJveCBhcm91bmQgdGhlIHBsYXllciB3aGVyZSBlbmVtaWVzIHdvbnQgc3Bhd24sXG4gICAgWk9NQkFMTF9TUEFXTl9PRkZTRVQ6IDQwMCxcbiAgICAvLyBTdGFydGluZyBtYXhtdW0gY291bnRcbiAgICBaT01CQUxMX01BWF9DT1VOVDogNTAsXG4gICAgLy8gSWYgYW4gZW5lbXkgaXMgc2hvdCwgb3RoZXIgZW5lbWllcyB3aXRoaW4gdGhpcyBhbW91bnQgb2YgcGl4ZWxzXG4gICAgLy8gaGF2ZSBhIHBvc3NpYmlsaXR5IG9mIGNoYXJnaW5nIGFsc28uXG4gICAgWk9NQkFMTF9BTEVSVF9SQU5HRTogMTAwLFxuICAgIC8vIElmIGFuIGVuZW15IGlzIGp1c3Qgd2Fsa2luZyBhcm91bmQsIHRoaXMgZGVmaW5lcyB0aGUgbWF4aW11bVxuICAgIC8vIGRldmlhdGlvbiB3aGVuIGl0IGNoYW5nZXMgaXQncyBkaXJlY3Rpb25cbiAgICBaT01CQUxMX1dBTEtJTkdfQ0hBTkdFX09GRlNFVDogMjAsXG4gICAgLy8gSG93IGxpa2VseSBhbiBlbmVteSBpcyB0byBjaGFuZ2UgaXQncyBkaXJlY3Rpb24gb2Ygd2Fsa2luZ1xuICAgIC8vIGxhcmdlciBudW1iZXJzIG1lYW4gbGVzcyBsaWtlbHkuXG4gICAgWk9NQkFMTF9DSEFOR0VfRElSRUNUSU9OX1BPU1NJQklMSVRZOiAxMCxcbiAgICAvLyBXaGF0IGlzIHRoZSBwb3NzaWJpbGl0eSB0aGF0IGFuIGVuZW15IHRoYXQgaXMgYWxlcnRlZCB0byB0aGUgXG4gICAgLy8gcGxheWVyIHdpbGwgY2hhcmdlLiBIaWdoZXIgbnVtYmVycyBtZWFuIGxlc3MgbGlrZWx5LlxuICAgIFpPTUJBTExfQUxFUlRfQ0hBUkdFX1BPU1NJQklMSVRZOiA1MCxcbiAgICAvLyBCYXNlIHNwZWVkIHRoYXQgYW4gZW5lbXkgd2lsbCBjaGFyZ2UuIEhpZ2hlciBpcyBmYXN0ZXIuXG4gICAgWk9NQkFMTF9DSEFSR0VfU1BFRUQ6IDAuMDgsXG4gICAgLy8gTm9ybWFsIGVuZW15IHNwZWVkXG4gICAgWk9NQkFMTF9TUEVFRF9NSU46IDAuMDIsXG4gICAgLy8gRW5lbXkgc3BlZWQgcmFuZG9taXNlclxuICAgIFpPTUJBTExfU1BFRURfUkFOR0U6IDAuMDA1LFxuICAgIC8vIEJhc2Ugc2l6ZSBvZiB0aGUgZW5lbXlcbiAgICBaT01CQUxMX1NJWkU6IDIwLFxuICAgIC8vIEhvdyBsb25nIGluIHNlY29uZHMgZW5lbWllcyBib2RpZXMgbGllXG4gICAgLy8gaW4gdGhlIGdhbWUgZmllbGQgYXMgZW50aXRpZXNcbiAgICBaT01CQUxMX0RFQVRIX1RJTUU6IDUsXG4gICAgLy8gaWYgYW4gZW5lbXkgaXMgd2l0aGluIFpPTUJBTExfQUxFUlRfUkFOR0Ugb2YgdGhlIHBsYXllcixcbiAgICAvLyBIb3cgbGlrZWx5IGlzIGl0IHRoYXQgaXQgd2lsbCBjaGFyZ2UuIEhpZ2hlciBpcyBsZXNzIGxpa2VseS5cbiAgICAvLyBpZSAxIGluIFpPTUJBTExfQ0hBUkdFX1BPU1NJQklMSVRZXG4gICAgWk9NQkFMTF9DSEFSR0VfUE9TU0lCSUxJVFk6IDEwLFxuICAgIC8vIFVudXNlZCBBVE0uXG4gICAgWk9NQkFMTF9FQVRJTkdfR1JBU1NfUE9TU0lCSUxJVFk6IDIwLFxuICAgIC8vIFdoYXQgaXMgdGhlIHBvc3NpYmlsaXR5IG9mIG1vdmluZyBvbmNlIGFuIGVuZW15IHJlYWNoZXMgaXQncyBkZXN0aW5hdGlvblxuICAgIFpPTUJBTExfREVTVF9SRUFDSF9NT1ZFX1BPU1NJQklMSVRZOiAyLFxuICAgIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNwYXduaW5nIG5ldyBlbmVtaWVzXG4gICAgWk9NQkFMTF9TUEFXTl9ORVdfWk9NQkFMTF9ERUxBWTogMTAwMCxcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBlbmZvcmNlIFpPTUJBTExfU1BBV05fT0ZGU0VULCB1c2VmdWwgd2hlbiBkZWJ1Z2dpbmdcbiAgICBaT01CQUxMX1NQQVdOX1JFU1RSQUlORUQ6IHRydWUsXG4gICAgLy8gV2hhdCBpcyB0aGUgZGVmYXVsdCBoZWFsdGggZWFjaCBlbmVteSBoYXNcbiAgICBaT01CQUxMX0RFRkFVTFRfSEVBTFRIOiA1MDAsXG4gICAgLy8gSG93IG11Y2ggaGVhbHRocG9pbnRzIGRhbWFnZSBkb2VzIGVhY2ggZW5lbXkgZG8gb25jZSBpdCAnZ2V0cycgdGhlIHBsYXllclxuICAgIFpPTUJBTExfREFNQUdFX1ZBTFVFOiA1LjAsXG4gICAgLy8gVGhlIHJhZGl1cyBpbiBwaXhlbHMgb2YgdGhlIGRlYXRoIGJsb29kIHNwbGF0dGVyXG4gICAgWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFOiAyMCxcbiAgICAvLyBIb3cgbWFueSBibG9vZCAnY2lyY2xlcycgZm9yIHRoZSBzcGxhdHRlclxuICAgIFpPTUJBTExfQkxPT0RfU1BMQVRURVJfQ0lSQ0xFUzogMTAsXG4gICAgLy8gTWluaW11bSBzaXplIG9mIGJsb29kIGNpcmNsZXNcbiAgICBaT01CQUxMX0JMT09EX1NQTEFUVEVSX0NJUkNMRV9NSU46IDEsXG4gICAgLy8gTWF4aW11bSBzaXplIG9mIGJsb29kIGNpcmNsZXNcbiAgICBaT01CQUxMX0JMT09EX1NQTEFUVEVSX0NJUkNMRV9NQVg6IDEwLFxuICAgIC8vIFBpc3RvbCBzZXR0aW5nc1xuICAgIFdFQVBPTl9QSVNUT0xfTUFYX0FNTU86IDAsXG4gICAgV0VBUE9OX1BJU1RPTF9QUk9KRUNUSUxFX1NJWkU6IDUsXG4gICAgV0VBUE9OX1BJU1RPTF9QUk9KRUNUSUxFX0RBTUFHRTogMTAwLFxuICAgIFdFQVBPTl9QSVNUT0xfUFJPSkVDVElMRV9TUEVFRDogMSxcbiAgICAvLyBSaWZsZSBzZXR0aW5nc1xuICAgIFdFQVBPTl9SSUZMRV9NQVhfQU1NTzogMjQsXG4gICAgV0VBUE9OX1JJRkxFX1BST0pFQ1RJTEVfU0laRTogMyxcbiAgICBXRUFQT05fUklGTEVfUFJPSkVDVElMRV9EQU1BR0U6IDUwMCxcbiAgICBXRUFQT05fUklGTEVfUFJPSkVDVElMRV9TUEVFRDogMlxufTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vb2JqL3BsYXllclwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgV29ybGQgZnJvbSBcIi4vb2JqL3dvcmxkXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IFpvbWJhbGwgZnJvbSBcIi4vb2JqL3pvbWJhbGxcIjtcbi8qKlxuICogVGhlIHRvcC1sZXZlbCBHYW1lIGNsYXNzLCBtYW5hZ2VzIHNldHVwLCBiYXNlIGxvb3AsIGFuZCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBUaGlzIGlzIHRoZSB0YXJnZXQgY2FudmFzIGZvciBvdXIgZ2FtZVxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBUaGlzIGlzIHRoZSBjb250ZXQgZm9yIHRoZSBjYW52YXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGZvciB0aGUgY2FudnMub25Nb3VzZU1vdmUgZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VfbW92ZSA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBmb3IgdGhlIGNhbnZhcy5vbk1vdXNlRG93biBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZV9kb3duID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdhbWUgY2FudmFzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaW1lc3RhbXAgd2hlbiBsYXN0IGZyYW1lIHdhcyBwcm9jZXNzZWRcbiAgICAgICAgICogdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGRlbHRhVGltZSBhbmRcbiAgICAgICAgICogRlBTLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIEZQUywgdXNlZnVsIHdoZW4gbmVlZGluZyB0byByZW5kZXJcbiAgICAgICAgICogdGhpcyB3aXRoaW4gdGhlIGdhbWUgZW52aXJvbm1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnBzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbWVyIGhlbHBlciBmb3IgYWRkaW5nIGVuZW15IGVudGl0aWVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhc3RfcnVuX2FkZCA9IDA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAvLyBTZXQgY2FudmFzIGRpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBDb25zdGFudHMuR0FNRV9TSVpFLndpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBDb25zdGFudHMuR0FNRV9TSVpFLmhlaWdodDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQm9vdHN0cmFwIGZ1bmN0aW9uLCB1c2VkIGZvciBzZXR0aW5nXG4gICAgICogZXZlcnl0aGluZyB1cCBwcmlvciB0byBraWNraW5nIG9mZiB0aGUgcmVuZGVyTG9vcFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0VXAoKSB7XG4gICAgICAgIC8vIENyZWF0ZSB3b3JsZFxuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG4gICAgICAgIC8vIEFkZCBwbGF5ZXIgdG8gZ2FtZVxuICAgICAgICB0aGlzLndvcmxkLmFkZFBsYXllcihuZXcgUGxheWVyKHRoaXMud29ybGQpKTtcbiAgICAgICAgLy8gQWRkIGV2ZW50c1xuICAgICAgICBpZiAodGhpcy5jYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZV9tb3ZlID0gdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2VfcG9zID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMud29ybGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNlX2Rvd24gPSB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2VfcG9zID0gbmV3IFZlYzIuVmVjdG9yKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMud29ybGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRUYXJnZXRQb3NpdGlvbihtb3VzZV9wb3MpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMud29ybGQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wbGF5ZXIuZmlyZVByaW1hcnlXZWFwb24obW91c2VfcG9zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZCdzIGFuIGVuZW15IHRvIHRoZSB3b3JsZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgYWRkWm9tYmFsbCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB6b20gPSBuZXcgWm9tYmFsbCgpO1xuICAgICAgICB6b20uc2V0U3Bhd24oKTtcbiAgICAgICAgKF9hID0gdGhpcy53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEVudGl0eSh6b20pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW55IHBlcmlvZGljIHRpbWVyc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgTWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzVGltZXJzKHRpbWVzdGFtcCkge1xuICAgICAgICAvLyBBZGQgZW5lbXkgdGltZXIgbG9naWNcbiAgICAgICAgY29uc3QgYWRkX3pvbV90aW1lID0gQ29uc3RhbnRzLlpPTUJBTExfU1BBV05fTkVXX1pPTUJBTExfREVMQVk7XG4gICAgICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RfcnVuX2FkZCA+IGFkZF96b21fdGltZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRab21iYWxsKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RfcnVuX2FkZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSBnYW1lIGNhbGN1bGF0aW9ucywgY2FzY2FkZXMgZG93biB0byB0aGVcbiAgICAgKiBXb3JsZCBvYmplY3QgYW5kIHBhc3NlcyBvZmYgYW55IGVudGl0eSBiYXNlZCBjYWxjcyB0byB0aGVyZS5cbiAgICAgKiBUaGVuIHRyaWdnZXIgb2YgYWxsIHJlbmRlcmluZyBmb3IgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge0RPTUhpZ2hSZXNUaW1lU3RhbXB9ICB0aW1lc3RhbXAgIEVQT0MgbWlsbGlzZWNvbmRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBTaG9ydCBjaXJjdXQsIHRoZXNlIE1VU1QgZXhpc3RcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzID09IG51bGwgfHwgdGhpcy5jb250ZXh0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFByb2Nlc3MgYW55IHRpbWVyc1xuICAgICAgICB0aGlzLnByb2Nlc3NUaW1lcnModGltZXN0YW1wKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY29uc3QgZHQgPSB0aW1lc3RhbXAgLSB0aGlzLm9sZFRpbWVzdGFtcDtcbiAgICAgICAgLy8gVXBkYXRlIHRpbWVzdGFtcCBmb3IgbmV4dCBwcm9jZXNzIGZyYW1lXG4gICAgICAgIHRoaXMub2xkVGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICAvLyBUcmlnZ2VyIFdvcmxkIGNhbGNzXG4gICAgICAgIC8vIFRPRE86IGFzeW5jPyBQZXJmb3JtYW5jZSBpbXByb3ZtZW50IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICAgICAgKF9hID0gdGhpcy53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2Nlc3MoZHQsIHRpbWVzdGFtcCk7XG4gICAgICAgIC8vIFJlbmRlciB0aGluZ3NcbiAgICAgICAgKF9iID0gdGhpcy53b3JsZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbmRlcih0aGlzLmNhbnZhcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdGlsZSBmcm9tICcuL3Byb2plY3RpbGUnO1xuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWN0b3IyZCc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICcuLi91dGlsL3JhbmRvbSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciwgaW5pdGlhdGVzIGEgXCJidWxsZXRcIlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcImJ1bGxldFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0aGUgem9tYmFsbHMgbW92ZW1lbnRzIGFuZCBhY3Rpb25zXG4gICAgICovXG4gICAgcHJvY2VzcyhnYW1lVGltZSkge1xuICAgICAgICBzdXBlci5wcm9jZXNzKGdhbWVUaW1lKTtcbiAgICAgICAgLy8gc2hvcnQgY2lyY3VpdCBpZiB3b3JsZCBpcyBudWxsXG4gICAgICAgIGlmICh0aGlzLndvcmxkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHpvbWJhbGwgPSB0aGlzLndvcmxkLmdldENsb3NlRW50aXR5KHRoaXMsIENvbnN0YW50cy5aT01CQUxMX1NJWkUsICd6b21iYWxsJyk7XG4gICAgICAgIGlmICh6b21iYWxsICE9IG51bGwgJiYgem9tYmFsbC5icmFpbi5nZXRBY3RpdmVTdGF0ZU5hbWUoKSAhPSAnem9tYmFsbC1kZWFkJykge1xuICAgICAgICAgICAgLy8gRGVjcmVhc2Ugem9tYmFsbCBoZWFsdGhcbiAgICAgICAgICAgIHpvbWJhbGwuaGVhbHRoIC09IHRoaXMuZGFtYWdlX3ZhbHVlO1xuICAgICAgICAgICAgem9tYmFsbC5zcGVlZCA9IHpvbWJhbGwuc3BlZWQgLSAoUmFuZG9tLmludCgxLCA2KSAvIDEwMDApO1xuICAgICAgICAgICAgLy8gTWFrZSB6b21iYWxsIGNoYXJnZSBhZnRlciBiZWluZyBzaG90LlxuICAgICAgICAgICAgaWYgKHpvbWJhbGwuaGVhbHRoID4gMCAmJiB6b21iYWxsLmJyYWluLmdldEFjdGl2ZVN0YXRlTmFtZSgpICE9ICd6b21iYWxsLWNoYXJnaW5nJykge1xuICAgICAgICAgICAgICAgIHpvbWJhbGwuYnJhaW4uc2V0U3RhdGUoXCJ6b21iYWxsLWNoYXJnaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmxvb2Rfc3BpcnQgPSBuZXcgVmVjMi5WZWN0b3Ioem9tYmFsbC5sb2NhdGlvbi54LCB6b21iYWxsLmxvY2F0aW9uLnkpO1xuICAgICAgICAgICAgdGhpcy53b3JsZC5kcmF3U2hvdFNwbGF0KGJsb29kX3NwaXJ0KTtcbiAgICAgICAgICAgIC8vIHNldCBmb3IgcmVtb3ZhbFxuICAgICAgICAgICAgdGhpcy5yZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gbGV0cyBzZXQgb3RoZXJzIGluIHJhbmdlIHRvIGFsZXJ0LCBidXQgb25seSBvZiB0aGV5IGFyZW4ndCBjaGFyZ2luZ1xuICAgICAgICAgICAgY29uc3QgaW5fcmFuZ2UgPSB0aGlzLndvcmxkLmdldEVudGl0aWVzSW5SYW5nZSh6b21iYWxsLCBDb25zdGFudHMuWk9NQkFMTF9BTEVSVF9SQU5HRSwgJ3pvbWJhbGwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGVudGl0eSBvZiBpbl9yYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYnJhaW4uZ2V0QWN0aXZlU3RhdGVOYW1lKCkgIT0gXCJ6b21iYWxsLWNoYXJnaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmJyYWluLnNldFN0YXRlKFwiem9tYmFsbC1hbGVydGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgdGhlIGJ1bGxldCB3aGVuIGl0IHJlYWNoZXMgaXQncyBkZXN0aW5hdGlvbi5cbiAgICAgICAgaWYgKHRoaXMud29ybGQud2l0aGluUmFuZ2UodGhpcy5sb2NhdGlvbiwgdGhpcy5kZXN0aW5hdGlvbiwgMTApKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlY3RvcjJkJztcbmltcG9ydCBkcmF3Q2lyY2xlIGZyb20gJy4uL3V0aWwvY2lyY2xlJztcbmltcG9ydCBTdGF0ZU1hY2hpbmUgZnJvbSAnLi4vc3RhdGUvc3RhdGVfbWFjaGluZSc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vdXRpbC9jb2xvcic7XG4vKipcbiAqIENvcmUgZW50aXR5IGNsYXNzLCBhbGwgb2JqZWN0cyB3aXRoaW4gdGhlIGdhbWUgZmllbGQgYXJlIGVudGl0aWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBuYW1lIG9yIHR5cGUgb2YgZW50aXR5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5pcXVlIG51bWVyaWNhbCBJRCxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZSB0aGUgZW50aXR5IHdhcyBjcmVhdGVkLCBtaWxsaXNlY29uZHMgc2luY2UgRVBPQ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGF3bl90aW1lID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVudGl0eSBzaXplLCBmb3IgdGhlIG1vc3QgcGFydCB0aGlzIGlzIHRoZSBkaWFtZXRlciBvZiB0aGUgXCJiYWxsXCJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2l6ZSA9IDQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2xvdXIgb2YgdGhlIGVudGl0eVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICB7Q29sb3J9ICBDb2xvdXIgb2JqZWN0IHRoYXQgdGhlIGVudGl0eSB3aWxsIGJlIGRyYXduIGFzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigwLCAwLCAwKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZGVmYXVsdCBzcGVlZCBmb3IgdGhlIGVudGl0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgbXVjaCBkYW1hZ2UgdGhlIGVudGl0eSBkb2VzIGluIGhlbHRoIHBvaW50c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kYW1hZ2VfdmFsdWUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IG11Y2ggaGVhbHRoIHRoZSBlbnRpdHkgaGFzIGluIGhlbHRoIHBvaW50c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBuYW1lIGZvciB0aGUgZW50aXR5LCBha2EgdHlwZS4gQ2FuIGJlIHVzZWQgdG8gcXVlcnkgZm9yIGVuZWl0aWVzIG9mIFwibmFtZVwiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVudGl0eSBjdXJyZW50IGxvY2F0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIHtWZWMyLlZlY3Rvcn0gIFZlY3RvciBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoMCwgMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1IHRoZSBlbnRpdHkgd2lsbCBiZSBkaXNwb3NlZCBvZiBuZXh0IHRpY2suXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbW92ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVmIHRvIHRoZSBnYW1lIHdvbGRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud29ybGQgPSBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNwYXduX3RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmJyYWluID0gbmV3IFN0YXRlTWFjaGluZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIENvbG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q29sb3J9ICBjb2xvciAgQ29sb3IgdG8gc2V0IG9uIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgZW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgc2l6ZSAgU2l6ZSBpbiBwaXhlbHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFNpemUoc2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkYW1hZ2UgdGhhdCB0aGUgZW50aXR5IGRvZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBkYW1hZ2UgIERhbWFnZSBpbiBoZWFsdGggcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBzZXREYW1hZ2UoZGFtYWdlKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlX3ZhbHVlID0gZGFtYWdlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcGVlZCBvZiB0aGUgZW50aXRpeVxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIHNwZWVkICBTcGVlZFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQncyB0aGUgbG9jYWl0b24gb2YgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9ICAgbG9jYXRpb24gQ3VycmVudCBsb2NhdGlvblxuICAgICAqL1xuICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVzdGluYXRpb24gb2YgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9ICAgZGVzdGluYXRpb24gRW50aXR5IGRlc3RpbmF0aW9uXG4gICAgICovXG4gICAgc2V0RGVzdGluYXRpb24oZGVzdGluYXRpb24pIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGVudGl0eSwgYnkgZGVmYXVsdCBhbGwgZW50aXRpZXMgYXJlIHRyZWF0ZWQgYXMgY2lyY2xlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoY29udGV4dCkge1xuICAgICAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHRoaXMubG9jYXRpb24sIHRoaXMuY29sb3IsIHRoaXMuc2l6ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvIGFueSBwcmUtcmVuZGVyIGNhbGN1bGF0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGdhbWVUaW1lICBkZWx0YVRpbWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3MoZ2FtZVRpbWUpIHtcbiAgICAgICAgdGhpcy5icmFpbi50aGluaygpO1xuICAgICAgICAvLyBJZiB0aGUgZW50aXR5IGlzIG1vdmluZywgYW5kIGhhc24ndCB5ZXQgcmVhY2hlZCBpdCdzIGRlc3RpbmF0aW9uXG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gMCAmJiAhdGhpcy5sb2NhdGlvbi5lcXVhbHModGhpcy5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uQ2xvbmUgPSBuZXcgVmVjMi5WZWN0b3IodGhpcy5kZXN0aW5hdGlvbi54LCB0aGlzLmRlc3RpbmF0aW9uLnkpO1xuICAgICAgICAgICAgY29uc3QgdmVjX3RvX2Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb25DbG9uZS5zdWJ0cmFjdCh0aGlzLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlX3RvX2Rlc3RpbmF0aW9uID0gdmVjX3RvX2Rlc3RpbmF0aW9uLmxlbmd0aCgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IHZlY190b19kZXN0aW5hdGlvbi5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlX3RyYXZlbGVkID0gTWF0aC5taW4oZGlzdGFuY2VfdG9fZGVzdGluYXRpb24sIGdhbWVUaW1lICogdGhpcy5zcGVlZCk7XG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxfdmVjdG9yID0gaGVhZGluZy5tdWxTKGRpc3RhbmNlX3RyYXZlbGVkKTtcbiAgICAgICAgICAgIC8vIG5ldyBsb2NhdGlvbiBpcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICAgICAgICAgLy8gcGx1cyB0aGUgZGlzdGFuY2UgdHJhdmVsZWQgdmVjdG9yXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbi5hZGQodHJhdmVsX3ZlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgV2VhcG9uIGZyb20gXCIuL3dlYXBvblwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuLyoqXG4gKiBQbGF5ZXIgd2VhcG9uOiBwaXN0b2xcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlzdG9sIGV4dGVuZHMgV2VhcG9uIHtcbiAgICAvKipcbiAgICAgKiBTZXRzIFBpc3RvbCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiYnVsbGV0XCIpO1xuICAgICAgICB0aGlzLnNpemUgPSBDb25zdGFudHMuV0VBUE9OX1BJU1RPTF9QUk9KRUNUSUxFX1NJWkU7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gQ29uc3RhbnRzLldFQVBPTl9QSVNUT0xfUFJPSkVDVElMRV9EQU1BR0U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBDb25zdGFudHMuV0VBUE9OX1BJU1RPTF9QUk9KRUNUSUxFX1NQRUVEO1xuICAgIH1cbn1cbiIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlY3RvcjJkJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IFBpc3RvbCBmcm9tIFwiLi9waXN0b2xcIjtcbi8qKlxuICogUGxheWVyIGVudGl0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtXb3JsZH0gIHdvcmxkICBbd29ybGQgZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcbiAgICAgICAgc3VwZXIoXCJwbGF5ZXJcIik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGF5ZXIgcHJpbWFyeSB3ZWFwb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2VhcG9uX3ByaW1hcnkgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogUGxheWVyIHNlY29uZGFyeSB3ZWFwb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2VhcG9uX3NlY29uZGFyeSA9IG51bGw7XG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICAgICAgLy8gUGxheWVyIGxvY2F0aW9uLCBjZW50cmUgb2YgdGhlIHdvcmxkXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCAvIDIsIENvbnN0YW50cy5HQU1FX1NJWkUuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vIFNldCBzb21lIGF0dHJpYnV0ZXMgZm9yIHRoZSBwbGF5ZXJcbiAgICAgICAgdGhpcy5zaXplID0gQ29uc3RhbnRzLlBMQVlFUl9TSVpFO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IENvbnN0YW50cy5QTEFZRVJfREVGQVVMVF9IRUFMVEg7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoMTI4LCAxMjgsIDI1NSk7XG4gICAgICAgIC8vIFNldCBzdGFydGluZyB3ZWFwb25zXG4gICAgICAgIHRoaXMud2VhcG9uX3ByaW1hcnkgPSBuZXcgUGlzdG9sKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZ1bmNpdG9uIGZvciBwbGF5ZXIgdG8gdGFrIGRhbWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICB2YWx1ZSAgSG93IG11Y2ggZGFtYWdlIChoZWFsdGhwb2ludHMpIHNob3VsZCB0aGUgcGxheWVyIHRha2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHRha2VEYW1hZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpcmUgcGxheWVyIHByaW1hcnkgd2VhcG9uXG4gICAgICpcbiAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGZpcmVQcmltYXJ5V2VhcG9uKHRhcmdldCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMud2VhcG9uX3ByaW1hcnkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maXJlKHRhcmdldCwgdGhpcy53b3JsZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpcmUgcGxheWVyIHNlY29uZGFyeSB3ZWFwb246IFRPRE9cbiAgICAgKlxuICAgICAqICBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBmaXJlU2Vjb25kYXJ5V2VhcG9uKHRhcmdldCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFueSBwbGF5ZXIgY2FsY3NcbiAgICAgKi9cbiAgICBwcm9jZXNzKGdhbWVUaW1lKSB7XG4gICAgICAgIHN1cGVyLnByb2Nlc3MoZ2FtZVRpbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknO1xuLyoqXG4gKiBCYXNlIHByb2plY3RpbGUgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdGlsZSBleHRlbmRzIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIHR5cGUgIFR5cGUgb2YgcHJvamVjdGlsZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgc3VwZXIodHlwZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdG8gZGVmaW5lIHdoYXQgdHlwZSBvZiBwcm9qZWN0aWxlIHRoaXMgaXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlwiO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgcHJvamVjdGlsZUZhY3RvcnkgZnJvbSBcIi4uL3V0aWwvcHJvamVjdGlsZUZhY3RvcnlcIjtcbi8qKlxuICogQmFzZSB3ZWFwb24gY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgcHJvamVjdGlsZVR5cGUgIG5hbWUgb2YgcHJvamVjdGlsZSB0eXBlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvamVjdGlsZVR5cGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2plY3RpbGUgbmFtZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb2plY3RpbGUgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IG1hbnkgYW1tdW5pdGlvbiB0aGlzIHdlYXBvbiBob2xkc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFtbXVuaXRpb24gPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2l6ZSBvZiB0aGUgcHJvamVjdGlsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNpemUgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGFtYWdlIHRoZSBwcm9qZWN0aWxlIGRvZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogSG93IGZhc3QgdGhlIHByb2plY3RpbGUgbW92ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgICAgIHRoaXMucHJvamVjdGlsZSA9IHByb2plY3RpbGVUeXBlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvamVjdGlsZVxuICAgICAqXG4gICAgICogQHJldHVybiAge1Byb2plY3RpbGV9XG4gICAgICovXG4gICAgY3JlYXRlUHJvamVjdGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RpbGVGYWN0b3J5KHRoaXMucHJvamVjdGlsZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpcmUgdGhpcyB3ZWFwb25cbiAgICAgKlxuICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfSB0YXJnZXQgICAgTG9jYXRpb24gdG8gZmlyZSB0b1xuICAgICAqIEB2YXIge1dvcmxkfSAgICAgICB3b3JsZCAgICAgV29ybGQgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGZpcmUodGFyZ2V0LCB3b3JsZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0aWxlID0gdGhpcy5jcmVhdGVQcm9qZWN0aWxlKCk7XG4gICAgICAgIHByb2plY3RpbGUuc2V0TG9jYXRpb24obmV3IFZlYzIuVmVjdG9yKHdvcmxkLnBsYXllci5sb2NhdGlvbi54LCB3b3JsZC5wbGF5ZXIubG9jYXRpb24ueSkpO1xuICAgICAgICBwcm9qZWN0aWxlLnNldERlc3RpbmF0aW9uKHRhcmdldCk7XG4gICAgICAgIHByb2plY3RpbGUuc2V0U2l6ZSh0aGlzLnNpemUpO1xuICAgICAgICBwcm9qZWN0aWxlLnNldERhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgIHByb2plY3RpbGUuc2V0U3BlZWQodGhpcy5zcGVlZCk7XG4gICAgICAgIHdvcmxkLmFkZEVudGl0eShwcm9qZWN0aWxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWN0b3IyZCc7XG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi91dGlsL3JhbmRvbVwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuLi91dGlsL2NvbG9yXCI7XG5pbXBvcnQgZHJhd0NpcmNsZSBmcm9tIFwiLi4vdXRpbC9jaXJjbGVcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbi8qKlxuICogTWFpbiB3b3JsZCBjbGFzcywgY29uc3RydWN0cyBldmVyeXRyaGluZyBhYm91dCB0aGUgZ2FtZSB3b3JsZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgZ2FtZSBlbnRpdGllcywgdGhlc2Ugd2lsbCBhbGwgZ2V0XG4gICAgICAgICAqIHByb2Nlc3NlZCBhbmQgcmVuZGVyZWQgZXZlcnkgdGlja1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyICB7TWFwPG51bWJlciwgRW50aXR5Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW52YXMgZWxlbWVudCB3aGljaCBpcyB1c2VkIGZvciBwcmUtcmVuZGVyaW5nLFxuICAgICAgICAgKiBtb3JlIHN0YXRpYyB0aGluZ3NcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7SFRNTENhbnZhc0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpvbWJhbGxfcHJlcmVuZGVyID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbnZhcyBlbGVtZW50IHVzZWQgZm9yIHByZXJlbmRlcmluZyBkZWFkIHpvbWJhbGxzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0hUTUxDYW52YXNFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy56b21iYWxsX2RlYWRfcHJlcmVuZGVyID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbnZhcyBlbGVtZW50IHVzZWQgZm9yIHJlYm5kZXJpbmcgdGhlIGJsb29kXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge0hUTUxDYW52YXNFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYXllciBlbnRpdHksIGhhbmRsZWQgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlXG4gICAgICAgICAqIG90aGVyIGVudGl0aWVzIGluIHRoZSBnYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtQbGF5ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGF5ZXIgc2NvcmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wbGF5ZXJfc2NvcmUgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW50aXR5IGluY3JlbWVudGFsIG51bWJlciwgdXNlZCB0byB0cmFjayB1bmlxdWUgbnVtZXJpY2FsXG4gICAgICAgICAqIGlkIG9mIGFsbCBlbnRpdGllcyBsb2FkZWQgaW50byB0aGUgd29ybGRcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHdlIGRyYXcgdGhlIHRhcmdldHM/XG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYXdfdGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYXJnZXQgY3VycmVudCBsb2NhdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciB0byBjYWxjdWxhdGUgRlBTIGFuZCBmcmFtZXJhdGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB2YXIge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGltZVRvRHJhdyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkZXIgZm9yIGRlbHRhdGltZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmR0ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXZpb3VzIGZyYW1lIHRpbWVzdGFtcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdmFyIHtET01IaWdoUmVzVGltZVN0YW1wfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbGRUaW1lc3RhbXAgPSAwLjA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGcmFtZXMgcGVyIHNlY29uZCBob2xkZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mcHMgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBkZWJ1Zz9cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvd19kZWJ1ZyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSdyZSBkcmF3aW5nIHRoZSB0YXJnZXRzLCB3aGF0IGlzIHRoZSBiYXNlIGNvbG91ci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHZhciB7Q29sb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhcmdldF9jb2xvciA9IG5ldyBDb2xvcigyNTUsIDEyOCwgMTI4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGdhbWUgRW50aXR5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIEVudGl0aSBudW1lcmljYWwgSURcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtFbnRpdHl9XG4gICAgICovXG4gICAgZ2V0RW50aXR5KGlkKSB7XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZW50aXRpZXMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGVudGl0eSlcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGVudGl0eSB0byB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0VudGl0eX0gIGVudGl0eSAgRW50aXR5IHRvIGFkZCB0byB0aGUgZ2FtZXdvcmxkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIGVudGl0eS5pZCA9IHRoaXMuZW50aXR5X2lkO1xuICAgICAgICBlbnRpdHkud29ybGQgPSB0aGlzO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnNldCh0aGlzLmVudGl0eV9pZCwgZW50aXR5KTtcbiAgICAgICAgdGhpcy5lbnRpdHlfaWQgKz0gMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkJ3MgdGhlIHBsYXllciB0byB0aGUgZ2FtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge1BsYXllcn0gIHBsYXllciAgUGxheWVyIHRvIGFkZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZFBsYXllcihwbGF5ZXIpIHtcbiAgICAgICAgcGxheWVyLmlkID0gOTk5OTk5O1xuICAgICAgICBwbGF5ZXIud29ybGQgPSB0aGlzO1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5zZXQncyB0aGUgY3VycmVudCB0YXJnZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHVuc2V0VGFyZ2V0KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdGFyZ2V0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAdmFyIHtWZWMyLlZlY3Rvcn0gbW91c2VfcG9zICAgVGFyZ2V0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFRhcmdldFBvc2l0aW9uKG1vdXNlX3Bvcykge1xuICAgICAgICBpZiAoQ29uc3RhbnRzLkdBTUVfRkxJUF9TSUdIVFMgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyICYmIHRoaXMucGxheWVyLmxvY2F0aW9uIGluc3RhbmNlb2YgVmVjMi5WZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWNDb3B5ID0gbmV3IFZlYzIuVmVjdG9yKG1vdXNlX3Bvcy54LCBtb3VzZV9wb3MueSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB2ZWNDb3B5LnN1YnRyYWN0KHRoaXMucGxheWVyLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbW91c2VfcG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpcmUncyBhIGJ1bGxldFxuICAgICAqXG4gICAgICogVE9ETzogUmVuYW1lIHRoaXMgdG8gc3VwcG9ydCBtdWx0aS13ZWFwb25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBmaXJlQnVsbGV0KCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgJiYgdGhpcy5wbGF5ZXIubG9jYXRpb24gaW5zdGFuY2VvZiBWZWMyLlZlY3RvciAmJiB0aGlzLnRhcmdldCBpbnN0YW5jZW9mIFZlYzIuVmVjdG9yKSB7XG4gICAgICAgICAgICBjb25zdCBkc3QgPSBuZXcgVmVjMi5WZWN0b3IodGhpcy50YXJnZXQueCwgdGhpcy50YXJnZXQueSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5maXJlUHJpbWFyeVdlYXBvbihkc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBkcmF3IHRoZSB0YXJnZXRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1RhcmdldChjb250ZXh0KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gKF9hID0gdGhpcy50YXJnZXRfY29sb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRIZXgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbygoX2MgPSAoX2IgPSB0aGlzLnBsYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxvY2F0aW9uKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MueCwgKF9lID0gKF9kID0gdGhpcy5wbGF5ZXIpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5sb2NhdGlvbikgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKHRoaXMudGFyZ2V0LngsIHRoaXMudGFyZ2V0LnkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGNvdW50IG9mIGVudGl0ZXMgYnkgdHlwZSwgaWYgbm8gdHlwZSBzcGVjaWZpZWQsXG4gICAgICogdGhlbiByZXR1bnIgY291bnQgb2YgYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIHR5cGUgIEVudGl0eSBUeXBlfE5hbWUgW29wdGlvbmFsXVxuICAgICAqXG4gICAgICogQHJldHVybiAge251bWJlcn0gICAgICAgIE51bWJlciBvZiBlbnRpdGllc1xuICAgICAqL1xuICAgIGNvdW50RW50aXRpZXModHlwZSkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBpZiAoIXR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5zaXplO1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHkubmFtZSA9PSB0eXBlICYmIGVudGl0eS5yZW1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGVudGl0eSBmcm9tdCBoZSBnYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgaWQgIE51bWVicmljYWwgSUQgb2YgdGhlIGVudGl0eVxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlRW50aXR5KGlkKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZGVsZXRlKGlkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhd3MgYmxvb2Qgc3BsYXR0ZXJcbiAgICAgKlxuICAgICAqIEB2YXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgICBDYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9ICAgICAgICAgICAgICAgbG9jYXRpb24gIFdoZXJlIHRvIGRyYXcgdGhlIGJsb29kXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNwYXR0ZXIoY29udGV4dCwgbG9jYXRpb24pIHtcbiAgICAgICAgbGV0IGxvb3AgPSAwO1xuICAgICAgICBjb25zdCB4X21pbiA9IE1hdGgucm91bmQobG9jYXRpb24ueCAtIChDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFIC8gMikpO1xuICAgICAgICBjb25zdCB4X21heCA9IE1hdGgucm91bmQobG9jYXRpb24ueCArIChDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFIC8gMikpO1xuICAgICAgICBjb25zdCB5X21heCA9IE1hdGgucm91bmQobG9jYXRpb24ueSArIChDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFIC8gMikpO1xuICAgICAgICBjb25zdCB5X21pbiA9IE1hdGgucm91bmQobG9jYXRpb24ueSAtIChDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFIC8gMikpO1xuICAgICAgICAvL3ZhciByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgd2hpbGUgKGxvb3AgPCBDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihSYW5kb20uaW50KDAsICh4X21heCAtIHhfbWluKSkgKyB4X21pbiwgUmFuZG9tLmludCgwLCAoeV9tYXggLSB5X21pbikpICsgeV9taW4pO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IFJhbmRvbS5pbnQoMCwgKENvbnN0YW50cy5aT01CQUxMX0JMT09EX1NQTEFUVEVSX0NJUkNMRV9NQVggLSBDb25zdGFudHMuWk9NQkFMTF9CTE9PRF9TUExBVFRFUl9DSVJDTEVfTUlOKSArIENvbnN0YW50cy5aT01CQUxMX0JMT09EX1NQTEFUVEVSX0NJUkNMRV9NSU4pO1xuICAgICAgICAgICAgY29uc3Qgb25lID0gUmFuZG9tLmludCgwLCA1NSk7XG4gICAgICAgICAgICBjb25zdCB0d28gPSBSYW5kb20uaW50KDAsIDEyOCk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihvbmUgKyAyMDAsIHR3bywgdHdvLCAwLjgpO1xuICAgICAgICAgICAgZHJhd0NpcmNsZShjb250ZXh0LCBsb2NhdGlvbiwgY29sb3IsIHNpemUpO1xuICAgICAgICAgICAgbG9vcCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIGd1bnNob3Qgc3BsYXR0ZXJcbiAgICAgKlxuICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfVxuICAgICAqIEB2YXIge1t0eXBlXX1cbiAgICAgKi9cbiAgICBkcmF3U2hvdFNwbGF0KGJsb29kVmVjKSB7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJnX2NvbnRleHQgPSB0aGlzLmJhY2tncm91bmQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgbGV0IGxvb3AgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGxvb3AgPCA1KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBibG9vZFZlYy5hZGQobmV3IFZlYzIuVmVjdG9yKFJhbmRvbS5pbnQoLTEwLCAxMCksIFJhbmRvbS5pbnQoLTEwLCAxMCkpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gUmFuZG9tLmludCgwLCAoQ29uc3RhbnRzLlpPTUJBTExfQkxPT0RfU1BMQVRURVJfQ0lSQ0xFX01BWCAtIENvbnN0YW50cy5aT01CQUxMX0JMT09EX1NQTEFUVEVSX0NJUkNMRV9NSU4pICsgQ29uc3RhbnRzLlpPTUJBTExfQkxPT0RfU1BMQVRURVJfQ0lSQ0xFX01JTik7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25lID0gUmFuZG9tLmludCgwLCA1NSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHdvID0gUmFuZG9tLmludCgwLCAxMjgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKG9uZSArIDIwMCwgdHdvLCB0d28sIDAuOCk7XG4gICAgICAgICAgICAgICAgZHJhd0NpcmNsZShiZ19jb250ZXh0LCBsb2NhdGlvbiwgY29sb3IsIHNpemUpO1xuICAgICAgICAgICAgICAgIGxvb3AgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEcmF3IHNwbGF0dGVyIGNhbGxpbmcgd3JhcHBlciBmdW5jdGlvblxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9ICAgbG9jYXRpb24gIFdIZXJlIHNwbGF0dGVyIHdpbGwgYmUgZHJhd25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd1NwYXR0ZXIobG9jYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgY29uc3QgYmdfY29udGV4dCA9IHRoaXMuYmFja2dyb3VuZC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoYmdfY29udGV4dClcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXR0ZXIoYmdfY29udGV4dCwgbG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGRlYnVnZ2luZyBwYW5lbFxuICAgICAqXG4gICAgICogQHBhcmFtICAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgIENhbnZhcyByZW5kZXJpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgZHJhd0RlYnVnKGNvbnRleHQpIHtcbiAgICAgICAgLy8gRHJhdyBudW1iZXIgdG8gdGhlIHNjcmVlblxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZGRkZGRkNTUnO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGggLSA3NSwgQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQgLSAxMDAsIDc1LCAxMDApO1xuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMTFweCBBcmlhbCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkZQUzogXCIgKyB0aGlzLmZwcywgQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCAtIDcwLCBDb25zdGFudHMuR0FNRV9TSVpFLmhlaWdodCAtIDg1KTtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChcIkVOVDogXCIgKyB0aGlzLmVudGl0aWVzLnNpemUsIENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGggLSA3MCwgQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQgLSA3MCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIEhVRCBndWlcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9ICBjb250ZXh0ICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIGRyYXdHdWkoY29udGV4dCkge1xuICAgICAgICB2YXIgaGVhbHRoX2Jhcl9sZW5ndGggPSBDb25zdGFudHMuR0FNRV9TSVpFLndpZHRoIC0gMzA7XG4gICAgICAgIHZhciBoZWFsdGhfYmFyX3dpZHRoID0gMzA7XG4gICAgICAgIHZhciBoZWFsdGhfYmFyX2VtcHR5X2NvbG9yID0gXCIjZmY1NTU1YmJcIjtcbiAgICAgICAgdmFyIGhlYWx0aF9iYXJfZnVsbF9jb2xvciA9IFwiIzU1RkY1NWJiXCI7XG4gICAgICAgIHZhciBsaW5lX3ggPSAxNTsgLy9NYXRoLnJvdW5kKCAtICh0aGlzLnNpemUgLyAyKSk7XG4gICAgICAgIHZhciBsaW5lX3kgPSAzMDsgLy9NYXRoLnJvdW5kKHRoaXMubG9jYXRpb24ueSAtICgodGhpcy5zaXplIC8gMikgKyAoaGVhbHRoX2Jhcl93aWR0aCAqIDIpKSk7XG4gICAgICAgIC8vIGlmIHBsYXllciBoZWFsdGggaXMgbGVzcyB0aGFuIGRlZmF1bHQgaGVhbHRoXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gaGVhbHRoX2Jhcl93aWR0aDtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGhlYWx0aF9iYXJfZW1wdHlfY29sb3I7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKGxpbmVfeCwgbGluZV95KTtcbiAgICAgICAgY29udGV4dC5saW5lVG8obGluZV94ICsgaGVhbHRoX2Jhcl9sZW5ndGgsIGxpbmVfeSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGhlYWx0aF9iYXJfbGVuZ3RoID0gTWF0aC5yb3VuZCgodGhpcy5wbGF5ZXIuaGVhbHRoIC8gMTAwKSAqIGhlYWx0aF9iYXJfbGVuZ3RoKTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmhlYWx0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGhlYWx0aF9iYXJfd2lkdGg7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gaGVhbHRoX2Jhcl9mdWxsX2NvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obGluZV94LCBsaW5lX3kpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZV94ICsgaGVhbHRoX2Jhcl9sZW5ndGgsIGxpbmVfeSk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxNXB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGBTY29yZTogJHt0aGlzLnBsYXllcl9zY29yZX1gLCAyMCwgMzUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgd29ybGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtIVE1MQ2FudmFzRWxlbWVudH0gICAgICAgICBjYW52YXMgICBDYW52YXNcbiAgICAgKiBAcGFyYW0gICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAgY29udGV4dCAgQ2FudmFzIGRyYXdpbmcgY29udGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiAge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGNhbnZhcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGJ1aWxkIGJhY2tncm91bmRcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCk7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgZW50aXR5LnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRhcmdldCBpZiBhbnlcbiAgICAgICAgaWYgKHRoaXMuZHJhd190YXJnZXQpXG4gICAgICAgICAgICB0aGlzLmRyYXdUYXJnZXQoY29udGV4dCk7XG4gICAgICAgIChfYSA9IHRoaXMucGxheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICBpZiAodGhpcy5zaG93X2RlYnVnKVxuICAgICAgICAgICAgdGhpcy5kcmF3RGVidWcoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZHJhd0d1aShjb250ZXh0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBsb2NhdGlvbiB2ZWN0b3IgaXMgb3VyIG9mIGJvdW5kc1xuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9ICAgbG9jYXRpb24gIExvY2F0aW9uIHRvIGNoZWNrXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIG91dE9mUmFuZ2UobG9jYXRpb24pIHtcbiAgICAgICAgbGV0IHggPSBsb2NhdGlvbi54O1xuICAgICAgICBsZXQgeSA9IGxvY2F0aW9uLnk7XG4gICAgICAgIGlmICh4IDwgKDAgLSBDb25zdGFudHMuWk9NQkFMTF9TUEFXTl9PRkZTRVQpIHx8IHggPiAoQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCArIENvbnN0YW50cy5aT01CQUxMX1NQQVdOX09GRlNFVCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgKDAgLSBDb25zdGFudHMuWk9NQkFMTF9TUEFXTl9PRkZTRVQpIHx8IHkgPiAoQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQgKyBDb25zdGFudHMuWk9NQkFMTF9TUEFXTl9PRkZTRVQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdhcmJhZ2UgY2xlYW4gdXAsIHJlbW92ZXMgYW55IGVudGl0aWVzIHRoYXQgYXJlIHNjaGVkdWxlIGZvciByZW1vdmFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdGllcygpIHtcbiAgICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERvIGFsbCB3b3JsZCBjYWxjdWxhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgICAgICAgICAgICAgZ2FtZVRpbWUgICBEZWx0YVRpbWVcbiAgICAgKiBAcGFyYW0gICB7RE9NSGlnaFJlc1RpbWVTdGFtcH0gIHRpbWVzdGFtcCAgQ3VycmVudCB0aW1lXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzKGdhbWVUaW1lLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICB0aGlzLnRpbWVUb0RyYXcgPSBnYW1lVGltZSAvIDEwMDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBmcHNcbiAgICAgICAgdGhpcy5mcHMgPSBNYXRoLnJvdW5kKDEgLyB0aGlzLnRpbWVUb0RyYXcpO1xuICAgICAgICB0aGlzLnJlbW92ZUVudGl0aWVzKCk7XG4gICAgICAgIGZvciAobGV0IFtrZXksIGVudGl0eV0gb2YgdGhpcy5lbnRpdGllcykge1xuICAgICAgICAgICAgZW50aXR5LnByb2Nlc3MoZ2FtZVRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIChfYSA9IHRoaXMucGxheWVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJvY2VzcyhnYW1lVGltZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiB2ZWNvcjEgaXMgd2l0aW4gcmFuZ2Ugb2YgdmVjdG9yMlxuICAgICAqXG4gICAgICogQHZhciB7VmVjMi5WZWN0b3J9IHZlY3RvcjEgICBGaXJzdCBsb2NhdGlvblxuICAgICAqIEB2YXIge1ZlYzIuVmVjdG9yfSB2ZWN0b3IyICAgU2Vjb25kIGxvY2F0aW9uXG4gICAgICogQHZhciB7bnVtYmVyfSAgICAgIHJhbmdlICAgICBSYW5nZSBpbiBwaXhlbHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgd2l0aGluUmFuZ2UodmVjdG9yMSwgdmVjdG9yMiwgcmFuZ2UpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VfdmVjdG9yID0gdmVjdG9yMS5kaXN0YW5jZSh2ZWN0b3IyKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlX3ZlY3RvciA8PSByYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZW50aXRpZXMgd2l0aGluIHJhbmdlLCBnZXQgYW55IGVudGl0aWVzIHdpdGhpbiByYW5nZSBvZiBnaXZlbiBlbnRpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7RW50aXR5fSAgICBxdWVyeUVudGl0eSAgU291cmNlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICAgIHJhbmdlICAgICAgICBSYW5nZSBmcm9tIHNvdXJjZSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nW119ICB0eXBlICAgICAgICAgdHlwZSBmaWx0ZXIgb3V0IHNwZWNpZmljIHR5cGVzIG9mIGVudGl0aWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7RW50aXR5W119ICAgICAgICAgICAgICAgTGlzdCBvZiBlbnRpdGllc1xuICAgICAqL1xuICAgIGdldEVudGl0aWVzSW5SYW5nZShxdWVyeUVudGl0eSwgcmFuZ2UsIHR5cGUpIHtcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgZW50aXR5XSBvZiB0aGlzLmVudGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlFbnRpdHkuaWQgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2l0aGluUmFuZ2UocXVlcnlFbnRpdHkubG9jYXRpb24sIGVudGl0eS5sb2NhdGlvbiwgcmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm5hbWUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2xvc2VzdCBlbnRpdHkgdG8gYSBnaXZlbiBlbnRpdHkgd2l0aGluIGEgcmFuZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtFbnRpdHl9ICBxdWVyeUVudGl0eSAgU291cmNlIGVudGl0eVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICByYW5nZSAgICAgICAgcmFuZ2VcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgdHlwZSAgICAgICAgIHR5cGUgZmlsdGVyIG9uIHR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtFbnRpdHl9ICAgICAgICAgICAgICAgQ2xvc2VzdCBlbnRpdHkgb2YgdHlwZVxuICAgICAqL1xuICAgIGdldENsb3NlRW50aXR5KHF1ZXJ5RW50aXR5LCByYW5nZSwgdHlwZSkge1xuICAgICAgICBmb3IgKGxldCBba2V5LCBlbnRpdHldIG9mIHRoaXMuZW50aXRpZXMpIHtcbiAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdGhlIHF1ZXJpZWQgZW50aXR5XG4gICAgICAgICAgICBpZiAocXVlcnlFbnRpdHkuaWQgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2l0aGluUmFuZ2UocXVlcnlFbnRpdHkubG9jYXRpb24sIGVudGl0eS5sb2NhdGlvbiwgcmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5Lm5hbWUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi4vdXRpbC9jb2xvclwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uL3V0aWwvcmFuZG9tXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuaW1wb3J0IFpvbWJhbGxTdGF0ZUNoYXJnaW5nIGZyb20gXCIuLi9zdGF0ZS9zdGF0ZXMvem9tYmFsbF9zdGF0ZV9jaGFyZ2luZ1wiO1xuaW1wb3J0IFpvbWJhbGxTdGF0ZURlYWQgZnJvbSBcIi4uL3N0YXRlL3N0YXRlcy96b21iYWxsX3N0YXRlX2RlYWRcIjtcbmltcG9ydCBab21iYWxsU3RhdGVFYXRpbmdHcmFzcyBmcm9tIFwiLi4vc3RhdGUvc3RhdGVzL3pvbWJhbGxfc3RhdGVfZWF0aW5nX2dyYXNzXCI7XG5pbXBvcnQgWm9tYmFsbFN0YXRlV2Fsa2luZyBmcm9tIFwiLi4vc3RhdGUvc3RhdGVzL3pvbWJhbGxfc3RhdGVfd2Fsa2luZ1wiO1xuaW1wb3J0IFpvbWJhbGxTdGF0ZUFsZXJ0ZWQgZnJvbSBcIi4uL3N0YXRlL3N0YXRlcy96b21iYWxsX3N0YXRlX2FsZXJ0ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJhbGwgZXh0ZW5kcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcInpvbWJhbGxcIik7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoMCwgMTI4LCAwKTtcbiAgICAgICAgdGhpcy5zcGF0dGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5fc2lnaHRzX2NvbG9yID0gbmV3IENvbG9yKDI1NSwgMTI4LCAwKTtcbiAgICAgICAgdGhpcy5zaXplID0gQ29uc3RhbnRzLlpPTUJBTExfU0laRTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSBDb25zdGFudHMuWk9NQkFMTF9ERUZBVUxUX0hFQUxUSDtcbiAgICAgICAgdGhpcy5zZXRTcGF3bigpO1xuICAgICAgICB0aGlzLmRhbWFnZV92YWx1ZSA9IENvbnN0YW50cy5aT01CQUxMX0RBTUFHRV9WQUxVRTtcbiAgICAgICAgdGhpcy5icmFpbi5hZGRTdGF0ZShuZXcgWm9tYmFsbFN0YXRlV2Fsa2luZyh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnJhaW4uYWRkU3RhdGUobmV3IFpvbWJhbGxTdGF0ZUNoYXJnaW5nKHRoaXMpKTtcbiAgICAgICAgdGhpcy5icmFpbi5hZGRTdGF0ZShuZXcgWm9tYmFsbFN0YXRlRWF0aW5nR3Jhc3ModGhpcykpO1xuICAgICAgICB0aGlzLmJyYWluLmFkZFN0YXRlKG5ldyBab21iYWxsU3RhdGVBbGVydGVkKHRoaXMpKTtcbiAgICAgICAgdGhpcy5icmFpbi5hZGRTdGF0ZShuZXcgWm9tYmFsbFN0YXRlRGVhZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnJhaW4uc2V0U3RhdGUoXCJ6b21iYWxsLXdhbGtpbmdcIik7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBDb25zdGFudHMuWk9NQkFMTF9TUEVFRF9NSU4gKyBSYW5kb20uaW50KDAsIENvbnN0YW50cy5aT01CQUxMX1NQRUVEX1JBTkdFKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSB6b21iYWxsXG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICAvLyBSZW5kZXIgaGVhbHRoIGJhclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaGVhbHRoX2Jhcl9sZW5ndGggPSAyMDtcbiAgICAgICAgICAgIGxldCBoZWFsdGhfYmFyX3dpZHRoID0gMztcbiAgICAgICAgICAgIGxldCBoZWFsdGhfYmFyX2VtcHR5X2NvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBsZXQgaGVhbHRoX2Jhcl9mdWxsX2NvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGxldCBsaW5lX3ggPSBNYXRoLnJvdW5kKHRoaXMubG9jYXRpb24ueCAtICh0aGlzLnNpemUgLyAyKSk7XG4gICAgICAgICAgICBsZXQgbGluZV95ID0gTWF0aC5yb3VuZCh0aGlzLmxvY2F0aW9uLnkgLSAoKHRoaXMuc2l6ZSAvIDIpICsgKGhlYWx0aF9iYXJfd2lkdGggKiAyKSkpO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKDEwMCAvIENvbnN0YW50cy5aT01CQUxMX0RFRkFVTFRfSEVBTFRIKSAqIHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgIC8vIGlmIHBsYXllciBoZWFsdGggaXMgbGVzcyB0aGFuIGRlZmF1bHQgaGVhbHRoXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPCBDb25zdGFudHMuWk9NQkFMTF9ERUZBVUxUX0hFQUxUSCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBoZWFsdGhfYmFyX3dpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBoZWFsdGhfYmFyX2VtcHR5X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKGxpbmVfeCwgbGluZV95KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhsaW5lX3ggKyBoZWFsdGhfYmFyX2xlbmd0aCwgbGluZV95KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IFdvcmsgb3V0IHRoaXNcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfaGVhbHRoX2Jhcl9sZW5ndGggPSAoKGhlYWx0aF9iYXJfbGVuZ3RoIC8gMTAwKSAqIHBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBoZWFsdGhfYmFyX3dpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBoZWFsdGhfYmFyX2Z1bGxfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8obGluZV94LCBsaW5lX3kpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGxpbmVfeCArIG5ld19oZWFsdGhfYmFyX2xlbmd0aCwgbGluZV95KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGhlYWx0aF9iYXJfd2lkdGg7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGhlYWx0aF9iYXJfZnVsbF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhsaW5lX3gsIGxpbmVfeSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8obGluZV94ICsgaGVhbHRoX2Jhcl9sZW5ndGgsIGxpbmVfeSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRoZSB6b21iYWxscyBtb3ZlbWVudHMgYW5kIGFjdGlvbnNcbiAgICAgKi9cbiAgICBwcm9jZXNzKGdhbWVUaW1lKSB7XG4gICAgICAgIHN1cGVyLnByb2Nlc3MoZ2FtZVRpbWUpO1xuICAgICAgICBpZiAoIXRoaXMud29ybGQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy53b3JsZC5wbGF5ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLndvcmxkLndpdGhpblJhbmdlKHRoaXMubG9jYXRpb24sIHRoaXMud29ybGQucGxheWVyLmxvY2F0aW9uLCAodGhpcy53b3JsZC5wbGF5ZXIuc2l6ZSAvIDIpICsgKHRoaXMuc2l6ZSAvIDIpKSkge1xuICAgICAgICAgICAgdGhpcy53b3JsZC5wbGF5ZXIudGFrZURhbWFnZSh0aGlzLmRhbWFnZV92YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBzZXRzIHRoZSBpbml0aWFsIHNwYXduIGxvY2F0aW9uIG9mIGEgem9tYmFsbFxuICAgICAqL1xuICAgIHNldFNwYXduKCkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgLy8gd2hldGhlciByIG5vdCB0byByZXN0cmFpbiB0aGUgem9tYmFsbCB3aXRoXG4gICAgICAgIC8vIHpvbWJhbGxfc3Bhd25fb2Zmc2V0IGZyb20gdGhlIGNlbnRlciwgaWUgYSB6b21iYWxsXG4gICAgICAgIC8vIHdvbnQgc3Bhd24gd2l0aGluIHpvbWJhbGxfc3Bhd25fb2Zmc2V0IHBpeGVscyBpbiBhbnkgZGlyZWN0aW9vblxuICAgICAgICAvLyBvZiB0aGUgY2VudGVyXG4gICAgICAgIGxldCBzcGF3bl9kaXJlY3Rpb24gPSA0O1xuICAgICAgICBpZiAoQ29uc3RhbnRzLlpPTUJBTExfU1BBV05fUkVTVFJBSU5FRCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBzcGF3bl9kaXJlY3Rpb24gPSBSYW5kb20uaW50KDAsIDMpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoc3Bhd25fZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6IC8vIG5vcnRoXG4gICAgICAgICAgICAgICAgeCA9IFJhbmRvbS5pbnQoMCwgQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCk7XG4gICAgICAgICAgICAgICAgeSA9IFJhbmRvbS5pbnQoMCwgTWF0aC5yb3VuZChDb25zdGFudHMuR0FNRV9TSVpFLmhlaWdodCAvIDIpKSAtIENvbnN0YW50cy5aT01CQUxMX1NQQVdOX09GRlNFVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogLy8gZWFzdFxuICAgICAgICAgICAgICAgIHggPSBSYW5kb20uaW50KDAsIE1hdGgucm91bmQoQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCAvIDIpKSArIChNYXRoLnJvdW5kKENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGggLyAyKSArIENvbnN0YW50cy5aT01CQUxMX1NQQVdOX09GRlNFVCk7XG4gICAgICAgICAgICAgICAgeSA9IFJhbmRvbS5pbnQoMCwgQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiAvLyBzb3V0aFxuICAgICAgICAgICAgICAgIHggPSBSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGgpO1xuICAgICAgICAgICAgICAgIHkgPSBSYW5kb20uaW50KDAsIE1hdGgucm91bmQoQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQgLyAyKSkgKyAoTWF0aC5yb3VuZChDb25zdGFudHMuR0FNRV9TSVpFLmhlaWdodCAvIDIpICsgQ29uc3RhbnRzLlpPTUJBTExfU1BBV05fT0ZGU0VUKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogLy8gd2VzdFxuICAgICAgICAgICAgICAgIHggPSBSYW5kb20uaW50KDAsIE1hdGgucm91bmQoQ29uc3RhbnRzLkdBTUVfU0laRS53aWR0aCAvIDIpKSAtIENvbnN0YW50cy5aT01CQUxMX1NQQVdOX09GRlNFVDtcbiAgICAgICAgICAgICAgICAvLyB4ID0gcmFuZC5uZXh0SW50KChnYW1lX3NpemVbMF0vMikucm91bmQoKSktem9tYmFsbF9zcGF3bl9vZmZzZXQ7XG4gICAgICAgICAgICAgICAgeSA9IFJhbmRvbS5pbnQoMCwgQ29uc3RhbnRzLkdBTUVfU0laRS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHggPSBSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGgpO1xuICAgICAgICAgICAgICAgIHkgPSBSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbmV3IFZlYzIuVmVjdG9yKHgsIHkpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQWJzdHJhY3Qgc3RhdGUgY2xhc3MsIGRldmluZXMgdGhlIGJhc2UgXCJzdGF0ZVwiIGZvciB1c2Ugd2l0aFxuICogc3RhdGUgbWFjaGluZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBuYW1lICBTdGF0ZSBuYW1lL2tleVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb3Iga2V5IGZvciB0aGUgc3RhdGUsIHVzZWQgdG8gcmVmZXIgdG8gdGhlIGdpdmVuIHN0YXRlXG4gICAgICAgICAqIGZyb20gd2l0aGluIHRoZSBvdGhlciBzdGF0ZXMgYW5kIHN0YXRlIG1hY2hpbmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhlIHN0YXRlIG1hY2hpbmUgaXMgdGhlIGJyYWluIGZvciBhIGdpdmVuIGVudGl0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVNYWNoaW5lIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlX3N0YXRlID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkIGEgc3RhdGUgdG8gdGhlIHN0YXRlIG1hY2hpbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtTdGF0ZX0gIHN0YXRlICBBIHZhbGlkIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7dm9pZH1cbiAgICAgKi9cbiAgICBhZGRTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlcy5zZXQoc3RhdGUubmFtZSwgc3RhdGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB0aGlzIHByb2Nlc3NlcyB0aGUgYWN0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgKiBpdCB3aWxsIGFsc28gY2hlY2sgZm9yIGFueSBjb25kaXRpb25zIG9uIHRoZSBleGlzdGluZ1xuICAgICAqIHN0YXRlIHRoYXQgY291bGQgY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZW50aXR5LCB0aHVzXG4gICAgICogYWx0ZXJpbmcgdGhlIHN0YXRlIG9mIHRoZSBlbnRpdHlcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHRoaW5rKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLmdldEFjdGl2ZVN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5kb0FjdGlvbnMoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLmNoZWNrQ29uZGl0aW9ucygpO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYWN0aXZlIHN0YXRlIG9yIG51bGwgaWYgbm9uZSBhY3RpdmVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtTdGF0ZX0gICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEFjdGl2ZVN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfc3RhdGUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBhY3RpdmVTdGF0ZSA9IHRoaXMuc3RhdGVzLmdldCh0aGlzLmFjdGl2ZV9zdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmVTdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVTdGF0ZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFjdGl2ZSBzdGF0ZSBvciBudWxsIGlmIG5vbmUgYWN0aXZlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7U3RhdGV9ICAgW3JldHVybiBkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRBY3RpdmVTdGF0ZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZV9zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIHN0YXRlLCBydW5zIGFueSBleGl0IGFjdGlvbnMgZm9yIHRoZSBvbGQgYWN0aXZlXG4gICAgICogIHN0YXRlIChpZiBhbnkpIGFuZCBydW5zIGVudHJ5IGFjdGlvbnMgZm9yIHRoZSBuZXcgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgc3RhdGVfbmFtZSAgU3RhdGUgbmFtZSBvciBrZXkgdG8gc2V0IGFzIHRoZSBhY3RpdmUgc3RhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfVxuICAgICAqL1xuICAgIHNldFN0YXRlKHN0YXRlX25hbWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5nZXRBY3RpdmVTdGF0ZSgpO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlKVxuICAgICAgICAgICAgY3VycmVudFN0YXRlLmV4aXRBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlX3N0YXRlID0gc3RhdGVfbmFtZTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB0aGlzLmdldEFjdGl2ZVN0YXRlKCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSlcbiAgICAgICAgICAgIG5ld1N0YXRlLmVudHJ5QWN0aW9ucygpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBSYW5kb20gZnJvbSBcIi4uLy4uL3V0aWwvcmFuZG9tXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gXCJ2ZWN0b3IyZFwiO1xuLyoqXG4gKiBab21iYWxsIGhhcyBiZWVuIHN1cHJpc2VkLiBOb3QgaW4gYSBnb29kIHdheSEgT25lIG9mIGl0J3NcbiAqIGZyaWVuZHMgaGFzIGJlZW4gc2hvdC4gSXQncyBub3QgeWV0IHN1cmUgd2hhdCB0byBkby4uLlxuICpcbiAqIC4uLiBzaG91bGQgaXQgY2hhcmdlIG9yIGtlZXAgc3RhbmRpbmcgc3RpbGw/XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJhbGxTdGF0ZUFsZXJ0ZWQgZXh0ZW5kcyBTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge1pvbWJhbGx9ICB6b21iYWxsICBUaGUgWm9tYmFsbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHpvbWJhbGwpIHtcbiAgICAgICAgc3VwZXIoXCJ6b21iYWxsLWFsZXJ0ZWRcIik7XG4gICAgICAgIHRoaXMuem9tYmFsbCA9IHpvbWJhbGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge1N0YXRlLmVudHJ5QWN0aW9uc31cbiAgICAgKi9cbiAgICBlbnRyeUFjdGlvbnMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgLy8gWm9tYmFsbCBpcyBzaG9ja2VkLCBpdCBpcyBub3QgbW92aW5nLlxuICAgICAgICB0aGlzLnpvbWJhbGwuc3BlZWQgPSAwO1xuICAgICAgICAvLyBab21iYWxsIGtub3cncyB0aGF0IFBsYXllciBzaG90IGl0J3MgZnJpZW5kLCBpdCB3aWxsIGNvbWUgZm9yIFxuICAgICAgICAvLyBQbGF5ZXIuIFBsYXllciBpcyB6b21iYWxsIGRlc3RpbmF0aW9uLiBKdXN0IG5vdCBtb3ZpbmcgeWV0LlxuICAgICAgICB0aGlzLnpvbWJhbGwuZGVzdGluYXRpb24gPSBuZXcgVmVjMi5WZWN0b3IoKF9iID0gKF9hID0gdGhpcy56b21iYWxsLndvcmxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGxheWVyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubG9jYXRpb24ueCwgKF9kID0gKF9jID0gdGhpcy56b21iYWxsLndvcmxkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGxheWVyKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QubG9jYXRpb24ueSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge1N0YXRlLmVudHJ5QWN0aW9uc31cbiAgICAgKi9cbiAgICBjaGVja0NvbmRpdGlvbnMoKSB7XG4gICAgICAgIC8vIElmIHpvbWJhbGwgaXMgc2hvdCB3aGlsZSBzdGFuZGluZyBoZXJlLCBpdCBkZWQuXG4gICAgICAgIGlmICh0aGlzLnpvbWJhbGwuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInpvbWJhbGwtZGVhZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIE11c3RlcmluZyB1cCB0aGUgY291cmFnZSB0byBjaGFyZ2UgYXQgdGhlIHBsYXllci4gV2lsbCBpdCBoYXBwZW4/XG4gICAgICAgIGlmIChSYW5kb20uaW50KDAsIENvbnN0YW50cy5aT01CQUxMX0FMRVJUX0NIQVJHRV9QT1NTSUJJTElUWSkgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiem9tYmFsbC1jaGFyZ2luZ1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5lbnRyeUFjdGlvbnN9XG4gICAgICovXG4gICAgZG9BY3Rpb25zKCkge1xuICAgICAgICAvLyBOb3RoaW5nLCBab21iYWxsIGlzIHNob2NrZWQhXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge1N0YXRlLmVudHJ5QWN0aW9uc31cbiAgICAgKi9cbiAgICBleGl0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgIH1cbn1cbiIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjdG9yMmQnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmFsbFN0YXRlQ2hhcmdpbmcgZXh0ZW5kcyBTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICAge1pvbWJhbGx9ICB6b21iYWxsICBUaGUgWm9tYmFsbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHpvbWJhbGwpIHtcbiAgICAgICAgc3VwZXIoXCJ6b21iYWxsLWNoYXJnaW5nXCIpO1xuICAgICAgICB0aGlzLnpvbWJhbGwgPSB6b21iYWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5lbnRyeUFjdGlvbnN9XG4gICAgICovXG4gICAgZW50cnlBY3Rpb25zKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBJbmNyZWFzZSBzcGVlZCwgYW5nZXIgZ2l2ZSB6b21iYWxsIHN0cmVuZ3RoIVxuICAgICAgICB0aGlzLnpvbWJhbGwuc3BlZWQgPSBDb25zdGFudHMuWk9NQkFMTF9DSEFSR0VfU1BFRUQ7XG4gICAgICAgIC8vIFNldCBkZXN0aW5hdGlvbiBhcyB0aGUgcGxheWVyLCBmYWlsc2FmZSBpZiB6b21iYWxsIFxuICAgICAgICAvLyBqdXN0IGRlY2lkZWQgdG8gY2hhcmdlIHdpdGhvdXQgYmVpbmcgYWxlcnRlZFxuICAgICAgICBjb25zdCBwbGF5ZXJMb2NhdGlvbiA9IChfYiA9IChfYSA9IHRoaXMuem9tYmFsbC53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBsYXllcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxvY2F0aW9uO1xuICAgICAgICBpZiAocGxheWVyTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuem9tYmFsbC5kZXN0aW5hdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihwbGF5ZXJMb2NhdGlvbi54LCBwbGF5ZXJMb2NhdGlvbi55KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5jaGVja0NvbmRpdGlvbnN9XG4gICAgICovXG4gICAgY2hlY2tDb25kaXRpb25zKCkge1xuICAgICAgICAvLyBJdCBkaWVkXG4gICAgICAgIGlmICh0aGlzLnpvbWJhbGwuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcInpvbWJhbGwtZGVhZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5kb0FjdGlvbnN9XG4gICAgICovXG4gICAgZG9BY3Rpb25zKCkge1xuICAgICAgICAvLyBub3RoaW5nXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge1N0YXRlLmV4aXRBY3Rpb25zfVxuICAgICAqL1xuICAgIGV4aXRBY3Rpb25zKCkge1xuICAgICAgICAvLyBub3RoaW5nXG4gICAgfVxufVxuIiwiaW1wb3J0IFN0YXRlIGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi91dGlsL2NvbG9yJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG4vKipcbiAqIFpvbWJhbGwgaXMgZGVhZCBzdGF0ZSwgYWxsIGl0J3MgaGVhbHRoIGhhcyBkZXBsZWF0ZWQuXG4gKiBJcyBpdCBhIHNhZCB6b21iYWxsPyBuby4gQSBkZWFkIHpvbWJhbGwgaGFzIG5vIGZlZWxpbmdzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iYWxsU3RhdGVEZWFkIGV4dGVuZHMgU3RhdGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAgIHtab21iYWxsfSAgem9tYmFsbCAgVGhlIFpvbWJhbGxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih6b21iYWxsKSB7XG4gICAgICAgIHN1cGVyKCd6b21iYWxsLWRlYWQnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIG9ubHkgcGVyc2lzdCB0aGUgZGVhZCBib2RpZXMgZm9yIGEgcGVyaW9kIG9mIHRpbWUsXG4gICAgICAgICAqIHRoaXMgdmFyaWFibGUgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGJvZGllcyB0b1xuICAgICAgICAgKiBkaXNwb3NlIG9mLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbnRyeV90aW1lID0gMDtcbiAgICAgICAgdGhpcy56b21iYWxsID0gem9tYmFsbDtcbiAgICAgICAgdGhpcy5kZWFkX2NvbG9yID0gbmV3IENvbG9yKDEyOCwgNjQsIDApOyAvLyBEZWFkIEJyb3duXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge1N0YXRlLmVudHJ5QWN0aW9uc31cbiAgICAgKi9cbiAgICBlbnRyeUFjdGlvbnMoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gWm9tYmFsbCBkZWFkLCBpdCBoYXMgbm8gc3BlZWQuXG4gICAgICAgIHRoaXMuem9tYmFsbC5zcGVlZCA9IDA7XG4gICAgICAgIC8vIENhbGwgaXQuIFRpbWUgb2YgRGVhdGguIE5vdy5cbiAgICAgICAgdGhpcy5lbnRyeV90aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gRGVhZCBicm93blxuICAgICAgICB0aGlzLnpvbWJhbGwuY29sb3IgPSB0aGlzLmRlYWRfY29sb3I7XG4gICAgICAgIC8vIFBsYXllciBpcyByZXdhcmRlZCBmb3IgdGhlIHNlbnNsZXNzIGRlc3RydWN0aW9uXG4gICAgICAgIHRoaXMuem9tYmFsbC53b3JsZC5wbGF5ZXJfc2NvcmUgKz0gTWF0aC5yb3VuZCgoKERhdGUubm93KCkgLSB0aGlzLnpvbWJhbGwuc3Bhd25fdGltZSkgLyBDb25zdGFudHMuWk9NQkFMTF9TQ09SRV9GQUNUT1IpICsgQ29uc3RhbnRzLlpPTUJBTExfQkFTRV9WQUxVRSk7XG4gICAgICAgIC8vIEJsb29kIHN0dWZmXG4gICAgICAgIGlmICh0aGlzLnpvbWJhbGwuc3BhdHRlciA9PSBmYWxzZSkge1xuICAgICAgICAgICAgKF9hID0gdGhpcy56b21iYWxsLndvcmxkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZHJhd1NwYXR0ZXIodGhpcy56b21iYWxsLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuem9tYmFsbC5zcGF0dGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5kb0FjdGlvbnN9XG4gICAgICovXG4gICAgZG9BY3Rpb25zKCkge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gZGlzcG9zZSBvZiB0aGUgYm9keSB5ZXQ/XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChNYXRoLnJvdW5kKChub3cgLSB0aGlzLmVudHJ5X3RpbWUpIC8gMTAwMCkgPiBDb25zdGFudHMuWk9NQkFMTF9ERUFUSF9USU1FKSB7XG4gICAgICAgICAgICB0aGlzLnpvbWJhbGwucmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5jaGVja0NvbmRpdGlvbnN9XG4gICAgICovXG4gICAgY2hlY2tDb25kaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHNlZSB7U3RhdGUuZXhpdEFjdGlvbn1cbiAgICAgKi9cbiAgICBleGl0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgIH1cbn1cbiIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSBcInZlY3RvcjJkXCI7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgUmFuZG9tIGZyb20gXCIuLi8uLi91dGlsL3JhbmRvbVwiO1xuLyoqXG4gKiBDdXJyZW50bHkgdW51c2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbWJhbGxTdGF0ZUVhdGluZ0dyYXNzIGV4dGVuZHMgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHpvbWJhbGwpIHtcbiAgICAgICAgc3VwZXIoJ3pvbWJhbGxlLWVhdGluZy1ncmFzcycpO1xuICAgICAgICB0aGlzLnpvbWJhbGwgPSB6b21iYWxsO1xuICAgIH1cbiAgICBlbnRyeUFjdGlvbnMoKSB7XG4gICAgICAgIC8vIGluY3JlYXNlIHNwZWVkXG4gICAgICAgIHRoaXMuem9tYmFsbC5zcGVlZCA9IDA7XG4gICAgICAgIC8vIHNldCBkZXN0aW5hdGlvbiBhcyB0aGUgcGxheWVyXG4gICAgICAgIHRoaXMuem9tYmFsbC5kZXN0aW5hdGlvbiA9IHRoaXMuem9tYmFsbC5sb2NhdGlvbjtcbiAgICB9XG4gICAgY2hlY2tDb25kaXRpb25zKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy56b21iYWxsLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ6b21iYWxsLWRlYWRcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgem9tYmFsbCBkZWNpZGVzIHRvIG1vdmVcbiAgICAgICAgaWYgKFJhbmRvbS5pbnQoMCwgQ29uc3RhbnRzLlpPTUJBTExfREVTVF9SRUFDSF9NT1ZFX1BPU1NJQklMSVRZKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyBpdCBtaWdodCBjaGFyZ2Ugb3Igd2Fsay5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IChfYSA9IHRoaXMuem9tYmFsbC53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBsYXllcjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIgJiYgKChfYiA9IHRoaXMuem9tYmFsbC53b3JsZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLndpdGhpblJhbmdlKG5ldyBWZWMyLlZlY3Rvcih0aGlzLnpvbWJhbGwubG9jYXRpb24ueCwgdGhpcy56b21iYWxsLmxvY2F0aW9uLnkpLCBuZXcgVmVjMi5WZWN0b3IocGxheWVyLmxvY2F0aW9uLngsIHBsYXllci5sb2NhdGlvbi55KSwgQ29uc3RhbnRzLlpPTUJBTExfU1BBV05fT0ZGU0VUKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoUmFuZG9tLmludCgwLCBDb25zdGFudHMuWk9NQkFMTF9DSEFSR0VfUE9TU0lCSUxJVFkpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiem9tYmFsbC1jaGFyZ2luZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcInpvbWJhbGwtd2Fsa2luZ1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkb0FjdGlvbnMoKSB7XG4gICAgICAgIC8vIG5vdGhpbmdcbiAgICB9XG4gICAgZXhpdEFjdGlvbnMoKSB7XG4gICAgICAgIC8vIG5vdGhpbmdcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlY3RvcjJkJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgUmFuZG9tIGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuLi9zdGF0ZSc7XG4vKipcbiAqIFpvbWJhbGwgd2Fsa2luZyBzdGF0ZSwganVzdCBtZWFuZGVyaW5nIGFib3V0LCBidW1waW5nIGludG8gZWFjaCBvdGhlcixcbiAqIG5vdCBhZ3JvIG9yIGNoYXJnaW5nLiBKdXN0IGEgbG92ZWx5IGRheSBvbiB0aGUgZmllbGQgbWluZGluZyBpdCdzIG93biBidXNpbmVzcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmFsbFN0YXRlV2Fsa2luZyBleHRlbmRzIFN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gICB7Wm9tYmFsbH0gIHpvbWJhbGwgIFpvbWJhbGwgRW50aXR5IHRoaXMgc3RhdGUgYmVsb25ncyB0b1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHpvbWJhbGwpIHtcbiAgICAgICAgc3VwZXIoXCJ6b21iYWxsLXdhbGtpbmdcIik7XG4gICAgICAgIHRoaXMuem9tYmFsbCA9IHpvbWJhbGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFtjaG9vc2VEZXN0aW5hdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHt2b2lkfSAgICBbcmV0dXJuIGRlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNob29zZURlc3RpbmF0aW9uKCkge1xuICAgICAgICAvLyBEZXN0aW5hdGlvbiBub3Qgc2V0LCBzbyBsZXRzIGNob29zZSBvbmVcbiAgICAgICAgLy8gc29tZXdoZXJlIG9uIHRoZSBnYW1lIGZpZWxkLlxuICAgICAgICBpZiAodGhpcy56b21iYWxsLmRlc3RpbmF0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuem9tYmFsbC5kZXN0aW5hdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGgpLCBSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUuaGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgIFRPRE86IFBvcnRlZCBkaXJlY3RseSBmcm9tIERhcnQsIGl0J3MgY3VycmVudGx5IG5vdCBiZWhhdmluZyBjb3JyZWN0bHkuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJlcXVpcmVtZW50czogaWYgYSB6b21iYWxsIGlzIHdhbGtpbmcgaXQgbWF5IGNoYW5nZSBpdCdzIGRpcmVjdGlvbiBzbGlnaHRseS5cbiAgICAgIFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIGRlc3RpbmF0aW9uIGlzIHNldCBzbyBsZXRzIGNob29zZSBvbmUgY2xvc2VcbiAgICAgICAgICAgIC8vIHRvIHdoZXJlIHRoZSBjdXJyZW50IG9uZSBpcy4gc28gd2UgZG9udCBnZXQgY3JhenkgamVya3lcbiAgICAgICAgICAgIC8vIG1vdmVtZW50c1xuICAgICAgICAgICAgLy8gaWYgem9tYmFsbCBoYXMgcmVhY2hlZCB0aGVpciBkZXN0aW5hdGlvbiB0aGVuIGNob3NlIGEgY29tcGxldGVseVxuICAgICAgICAgICAgLy8gbmV3IG9uZSwgYnV0IG9ubHkgYWZ0ZXJcbiAgICAgICAgICAgIC8vICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gc2V0IHNvbWUgZGVmYXVsdHMgZm9yIHRoZSBuZXcgbG9jYXRpb25zXG4gICAgICAgICAgICAvLyAgICAgbGV0IG5ld194OiBudW1iZXIgPSAwO1xuICAgICAgICAgICAgLy8gICAgIGxldCBuZXdfeTogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIC8vICAgICAvLyBmaXJzdCB3b3JrIG91dCB4XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgeF9vZmZzZXQgPSBSYW5kb20uaW50KDAsIENvbnN0YW50cy5aT01CQUxMX1dBTEtJTkdfQ0hBTkdFX09GRlNFVCk7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFJhbmRvbS5pbnQoMCwgMSkgPT0gMSkge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gcG9zaXRpdmVcbiAgICAgICAgICAgIC8vICAgICAgIG5ld194ID0gTWF0aC5yb3VuZCh0aGlzLnpvbWJhbGwuZGVzdGluYXRpb24ueCArIHhfb2Zmc2V0KTtcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgLy8gbmVnYXRpdmVcbiAgICAgICAgICAgIC8vICAgICAgIG5ld194ID0gTWF0aC5yb3VuZCh0aGlzLnpvbWJhbGwuZGVzdGluYXRpb24ueCArIHhfb2Zmc2V0KTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgLy8gZmlyc3Qgd29yayBvdXQgeFxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHlfb2Zmc2V0ID0gUmFuZG9tLmludCgwLCBDb25zdGFudHMuWk9NQkFMTF9XQUxLSU5HX0NIQU5HRV9PRkZTRVQpO1xuICAgICAgICAgICAgLy8gICAgIGlmIChSYW5kb20uaW50KDAsIDEpID09IDEpIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIHBvc2l0aXZlXG4gICAgICAgICAgICAvLyAgICAgICBuZXdfeSA9IE1hdGgucm91bmQodGhpcy56b21iYWxsLmRlc3RpbmF0aW9uLnkgKyB5X29mZnNldCk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgIC8vIG5lZ2F0aXZlXG4gICAgICAgICAgICAvLyAgICAgICBuZXdfeSA9IE1hdGgucm91bmQodGhpcy56b21iYWxsLmRlc3RpbmF0aW9uLnkgKyB5X29mZnNldCk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIC8vIHNldCB0aGUgbmV3IGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAvLyAgICAgdGhpcy56b21iYWxsLmRlc3RpbmF0aW9uID0gbmV3IFZlYzIuVmVjdG9yKG5ld194LCBuZXdfeSk7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlICB7U3RhdGUuZG9BY3Rpb25zfVxuICAgICAqL1xuICAgIGRvQWN0aW9ucygpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIC8vIElmIHRoZSBab21iYWxsIGlzIG91dCBvZiBnYW1lIHJhbmdlIEFORCBpdCdzIHdhbGtpbmcgZnVydGhlciBhd2F5LFxuICAgICAgICAvLyBGbGFnIGl0IGZvciByZW1vdmFsLCBpdCdzIGFuIGlkaW90LlxuICAgICAgICBpZiAoKChfYSA9IHRoaXMuem9tYmFsbC53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm91dE9mUmFuZ2UodGhpcy56b21iYWxsLmRlc3RpbmF0aW9uKSkgJiZcbiAgICAgICAgICAgICgoX2IgPSB0aGlzLnpvbWJhbGwud29ybGQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vdXRPZlJhbmdlKHRoaXMuem9tYmFsbC5sb2NhdGlvbikpKSB7XG4gICAgICAgICAgICB0aGlzLnpvbWJhbGwucmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhbm90aGVyICd6b21iYWxsJyBpcyAnYnVtcGVkJyBpbnRvIHRoZW4gcmV2ZXJzZSB0aGUgY3VycmVudCBkaXJlY3Rpb25cbiAgICAgICAgaWYgKCgoX2MgPSB0aGlzLnpvbWJhbGwud29ybGQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRDbG9zZUVudGl0eSh0aGlzLnpvbWJhbGwsIHRoaXMuem9tYmFsbC5zaXplLCAnem9tYmFsbCcpKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBSZXZlcnNlIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgICAgdGhpcy56b21iYWxsLmRlc3RpbmF0aW9uID0gdGhpcy56b21iYWxsLmRlc3RpbmF0aW9uLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhIHpvbWJhbGwgaGFzIHJlYWNoZWQgaXQncyBkZXN0aW5hdGlvbiwgdGhlbiBsZXRzIFxuICAgICAgICAvLyByYW5kb21seSwgbWF5YmUgY2hvb3NlIGFub3RoZXIgZGVzdGluYXRpb24uXG4gICAgICAgIGlmICh0aGlzLnpvbWJhbGwubG9jYXRpb24uZXF1YWxzKHRoaXMuem9tYmFsbC5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgIGlmIChSYW5kb20uaW50KDAsIENvbnN0YW50cy5aT01CQUxMX0RFU1RfUkVBQ0hfTU9WRV9QT1NTSUJJTElUWSkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuem9tYmFsbC5kZXN0aW5hdGlvbiA9IG5ldyBWZWMyLlZlY3RvcihSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUud2lkdGgpLCBSYW5kb20uaW50KDAsIENvbnN0YW50cy5HQU1FX1NJWkUuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb25seSB1cGRhdGUgdGhlIGRpcmVjdGlvbiBvZiB0aGUgem9tYmFsbCBvbmUgaW4gZXZlcnlcbiAgICAgICAgLy8gem9tYmFsbF93YWxraW5nX2NoYW5nZV9vZmZzZXQgdGlja3MsIGJ1dCByYW5kb21seVxuICAgICAgICBpZiAoUmFuZG9tLmludCgwLCBDb25zdGFudHMuWk9NQkFMTF9XQUxLSU5HX0NIQU5HRV9PRkZTRVQpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlRGVzdGluYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5jaGVja0NvbmRpdGlvbnN9XG4gICAgICovXG4gICAgY2hlY2tDb25kaXRpb25zKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgLy8gSWYgdGhlIHpvbWJhbGwgaGFzIHplcm8gb3IgbGVzcyBoZWFsdGggdGhlbiB0aGV5IGRlZC5cbiAgICAgICAgaWYgKHRoaXMuem9tYmFsbC5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiem9tYmFsbC1kZWFkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYSB6b21iYWxsIGlzIGNsb3NlIHRvIHRoZSBwbGF5ZXIgKHdpdGhpbiBaT01CQUxMX0FMRVJUX1JBTkdFKSwgXG4gICAgICAgIC8vIHRoZW4gdHJpZ2dlciBhIGNoYXJnZSBwb3NzaWJpbGl0eS5cbiAgICAgICAgaWYgKChfYSA9IHRoaXMuem9tYmFsbC53b3JsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLndpdGhpblJhbmdlKHRoaXMuem9tYmFsbC5sb2NhdGlvbiwgKF9jID0gKF9iID0gdGhpcy56b21iYWxsLndvcmxkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGxheWVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubG9jYXRpb24sIENvbnN0YW50cy5aT01CQUxMX0FMRVJUX1JBTkdFKSkge1xuICAgICAgICAgICAgaWYgKFJhbmRvbS5pbnQoMCwgQ29uc3RhbnRzLlpPTUJBTExfQ0hBUkdFX1BPU1NJQklMSVRZKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiem9tYmFsbC1jaGFyZ2luZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5lbnRyeUFjdGlvbnN9XG4gICAgICovXG4gICAgZW50cnlBY3Rpb25zKCkge1xuICAgICAgICAvLyBHb29kIG1vcm5pbmcsIHpvbWJhbGwgaGFzIGp1c3QgYXdva2VuLCB3aGVyZSBpcyBpdCBnb2luZz9cbiAgICAgICAgdGhpcy5jaG9vc2VEZXN0aW5hdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAc2VlIHtTdGF0ZS5leGl0QWN0aW9uc31cbiAgICAgKi9cbiAgICBleGl0QWN0aW9ucygpIHtcbiAgICAgICAgLy8gbm90aGluZ1xuICAgIH1cbn1cbiIsIi8qKlxuICogRHJhdyBhIGNpcmNsZSBvbiB0aGUgY29udGV4dCBnaXZlblxuICpcbiAqIEB2YXIge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gIGNvbnRleHQgICBDYW52YXMgcmVuZGVyaW5nIGNvbnRleHQgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtWZWMyLlZlY3Rvcn0gICAgICAgICAgICAgICBsb2NhdGlvbiAgV2hlcmUgdG8gZHJhdyB0aGUgY2lyY2xlXG4gKiBAdmFyIHtDb2xvcn0gICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgQ29sb3IgdG8gZHJhdyB3aXRoXG4gKiBAdmFyIHtudW1iZXJ9ICAgICAgICAgICAgICAgICAgICBzaXplICAgICAgRGlhbWV0ZXIgaW4gcGl4ZWxzXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdDaXJjbGUoY29udGV4dCwgbG9jYXRpb24sIGNvbG9yLCBzaXplKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LmFyYyhsb2NhdGlvbi54LCBsb2NhdGlvbi55LCBNYXRoLnJvdW5kKHNpemUgLyAyKSwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLmdldEhleCgpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3IuZ2V0SGV4KCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbn1cbiIsIi8qKlxuICogQ29sb3VyIGhlbHBlciwgdXNlZnVsIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gY29sb3VyIGZvcm1hdHMuXG4gKiBUaGlzIGlzIHByb2JhYmx5IG5vdCByZWFsbHkgbmVlZGVkIGZvciB0aGUgVFMvSlMgdmVyc2lvbiBidXQgaXNcbiAqIG1vcmUgb2YgYSBoYW5nb3ZlciBmcm9tIHRoZSBEYXJ0IHZlcnNpb24gb2YgdGhlIGdhbWUuIFdhcyBnb29kXG4gKiBsZWFybmluZyBjb252ZXJ0aW5nIGl0IHRvIGphdmFzY3JpcHQvdHlwZXNjcmlwdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICAgIC8qKlxuICAgICAqIFtjb25zdHJ1Y3RvciBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICByICByZWQgWzAgLSAyNTVdXG4gICAgICogQHBhcmFtICAge251bWJlcn0gIGcgIGdyZWVuIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBiICBibHVlIFswIC0gMjU1XVxuICAgICAqIEBwYXJhbSAgIHtudW1iZXI/fSAgYSAgYWxwaGEgWzAuMCAtIDEuMF1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuciA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBncmVlblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJsdWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hID0gMC4wO1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhID8gYSA6IDEuMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBSR0IgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRSZ2IoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYl07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBhcnJheSBvZiBIU0wgdmFsdWVzXG4gICAgICpcbiAgICAgKiBGcm9tOiBodHRwczovL2Nzcy10cmlja3MuY29tL2NvbnZlcnRpbmctY29sb3Itc3BhY2VzLWluLWphdmFzY3JpcHQvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7QXJyYXk8bnVtYmVyPn1cbiAgICAgKi9cbiAgICBnZXRIc2woKSB7XG4gICAgICAgIC8vIE1ha2UgciwgZywgYW5kIGIgZnJhY3Rpb25zIG9mIDFcbiAgICAgICAgY29uc3QgciA9IHRoaXMuciAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMuZyAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHRoaXMuYiAvIDI1NTtcbiAgICAgICAgLy8gRmluZCBncmVhdGVzdCBhbmQgc21hbGxlc3QgY2hhbm5lbCB2YWx1ZXNcbiAgICAgICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgbGV0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICAgICAgbGV0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBsZXQgbCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAgICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgICAgICBpZiAoZGVsdGEgPT0gMCkge1xuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgICAgICAvLyBSZWQgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSByKSB7XG4gICAgICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgICAgICAgICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY21heCA9PSBnKSB7XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgICAgICAgIC8vIEJsdWUgaXMgbWF4XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICAgICAgfVxuICAgICAgICBoID0gTWF0aC5yb3VuZChoICogNjApO1xuICAgICAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgICAgIGlmIChoIDwgMCkge1xuICAgICAgICAgICAgaCArPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgICAgICBsID0gKGNtYXggKyBjbWluKSAvIDI7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgICAgIHMgPSBkZWx0YSA9PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAgICAgLy8gTXVsdGlwbHkgbCBhbmQgcyBieSAxMDBcbiAgICAgICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIEhFWCB2YWx1ZSBvZiBjb2xvdXIgKGlubGN1ZGluZyBhbHBoYSlcbiAgICAgKlxuICAgICAqIEZyb206IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vY29udmVydGluZy1jb2xvci1zcGFjZXMtaW4tamF2YXNjcmlwdC9cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SGV4KHdpdGhBbHBoYSA9IHRydWUpIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICBsZXQgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIGxldCBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgbGV0IGEgPSAodGhpcy5hICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBnID0gXCIwXCIgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgIGIgPSBcIjBcIiArIGI7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PSAxKVxuICAgICAgICAgICAgYSA9IFwiMFwiICsgYTtcbiAgICAgICAgaWYgKCF3aXRoQWxwaGEpXG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyByICsgZyArIGI7XG4gICAgICAgIHJldHVybiBcIiNcIiArIHIgKyBnICsgYiArIGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi4vb2JqL2J1bGxldFwiO1xuLyoqXG4gKiBcImZhY3RvcnlcIiBtZXRob2QgZm9yIHJldHVybmluZyBwcm9qZWN0aWxlIG9iamVjdHMgSklULlxuICogVGhlcmUncyBuaWNlciBtb3JlIHBlcmZvbWFudCB3YXlzIHRvIGRvIHRoaXMgaW4gdHlwZXNjcmlwdCxcbiAqIGJ1dCB0aGlzIGlzIGZpbmUgZm9yIHRoaXMgdXNlLWNhc2UuXG4gKlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICB0eXBlICBXaGF0IHR5cGUgb2YgcHJvamVjdGlsZSB0byByZXR1cm5cbiAqXG4gKiBAcmV0dXJuICB7UHJvamVjdGlsZX0gICAgICAgIENvbmNyZXRlIFByb2plY3RpbGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdGlsZUZhY3RvcnkodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdidWxsZXQnOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWxsZXQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWxsZXQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiIsIi8qKlxuICogUk5HIGhlbHBlciBmb3IgaW50ZWdlcnMuXG4gKiBMb29rZWQgaW50byB1c2luZyBhIGxpYiBidXQgdGhpcyBpcyBmaW5lLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb20ge1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhICdyYW5kb20nIGludCwgdW5zaW5nIE1hdGgucmFuZG9tKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ9ICBtaW4gIFJhbmdlIG1pbmltdW0gKGluY2x1c2l2ZSlcbiAgICAgKiBAcGFyYW0gICB7bnVtYmVyfSAgbWF4ICBSYW5nZSBtYXhpbXVtIChpbmNsdXNpdmUpXG4gICAgICovXG4gICAgc3RhdGljIGludChtaW4gPSAwLCBtYXggPSAxMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGhlc2UgdmFsdWVzIGFyZSB1c2VkIGJ5IHRoZSBgQWJzdHJhY3RWZWN0b3Iucm91bmRgIG1ldGhvZCB0byBpbmNyZWFzZVxuICogcGVyZm9ybWFuY2UgdnMuIHVzaW5nICBOdW1iZXIudG9GaXhlZC5cbiAqL1xudmFyIHByZWNpc2lvbiA9IFtcbiAgICAxLFxuICAgIDEwLFxuICAgIDEwMCxcbiAgICAxMDAwLFxuICAgIDEwMDAwLFxuICAgIDEwMDAwMCxcbiAgICAxMDAwMDAwLFxuICAgIDEwMDAwMDAwLFxuICAgIDEwMDAwMDAwMCxcbiAgICAxMDAwMDAwMDAwLFxuICAgIDEwMDAwMDAwMDAwXG5dO1xuLyoqXG4gKiBUaGUgY2xhc3MgdGhhdCBhbGwgb3RoZXIgdmVjdG9yIHJlcHJlc2VudGF0aW9ucyBhcmUgZGVyaXZlZCBmcm9tLlxuICpcbiAqIENvbnRhaW5zIHRoZSBjb3JlIGltcGxlbWVudGF0aW9uIGZvciBhbGwgbWV0aG9kcyB0aGF0IHdpbGwgYmUgZXhwb3NlZCBieVxuICogdmVjdG9yIGluc3RhbmNlcy5cbiAqXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBBYnN0cmFjdFZlY3RvciB9IGZyb20gXCIuL0Fic3RyYWN0VmVjdG9yXCJcbiAqXG4gKiBleHBvcnQgY2xhc3MgTXlDdXN0b21WZWN0b3IgZXh0ZW5kcyBBYnN0cmFjdFZlY3RvciB7XG4gKiAgY29uc3RydWN0b3IgKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gKiAgICBzdXBlcihDdXN0b21WZWN0b3JUeXBlKVxuICogIH1cbiAqIH1cbiAqIGBgYFxuICovXG52YXIgQWJzdHJhY3RWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RWZWN0b3IoY3Rvcikge1xuICAgICAgICB0aGlzLmN0b3IgPSBjdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgYm90aCB4IGFuZCB5IGF4aXMgdmFsdWVcbiAgICAgKiBAcGFyYW0geCAgIE5ldyB4IHZhbFxuICAgICAqIEBwYXJhbSB5ICAgTmV3IHkgdmFsXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnNldEF4ZXMgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHRlciBmb3IgeCB0aGUgYXhpcyB2YWx1ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGVyIGZvciB4IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0dGVyIGZvciB5IGF4aXMgdmFsdWVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHRlciBmb3IgeSBheGlzLlxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZlY3RvciBhcyBhIGZvcm1hdHRlZCBzdHJpbmcsIGUuZyBcIigwLCA0KVwiXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJvdW5kKSB7XG4gICAgICAgIGlmIChyb3VuZCA9PT0gdm9pZCAwKSB7IHJvdW5kID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBNYXRoLnJvdW5kKHRoaXMueCkgKyBcIiwgXCIgKyBNYXRoLnJvdW5kKHRoaXMueSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBBcnJheSBjb250YWluaW5nIHRoZSB2ZWN0b3IgYXhlcywgZS5nIFswLCA0XVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBPYmplY3QgY29udGFpbmluZyB0aGUgdmVjdG9yIGF4ZXMsIGUuZyB7IHg6IDAsIHk6IDQgfVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBwcm92aWRlZCB2ZWN0b3IgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKz0gdmVjLng7XG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdCB0aGUgcHJvdmlkZWQgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHRoaXMueCAtPSB2ZWMueDtcbiAgICAgICAgdGhpcy55IC09IHZlYy55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBwcm92aWRlZCB2ZWN0b3IgZXF1YWwgdG8gdGhpcyBvbmVcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggPT09IHRoaXMueCAmJiB2ZWMueSA9PT0gdGhpcy55O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggKj0gdmVjLng7XG4gICAgICAgIHRoaXMueSAqPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bFYgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5QnlWZWN0b3IodmVjKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgdmVjdG9yXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5VmVjdG9yID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICB0aGlzLnggLz0gdmVjLng7XG4gICAgICAgIHRoaXMueSAvPSB2ZWMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5kaXZWID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGl2aWRlQnlWZWN0b3Iodik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnlTY2FsYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnggKj0gbjtcbiAgICAgICAgdGhpcy55ICo9IG47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIHByb3ZpZGVkIG51bWJlclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tdWxTID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5U2NhbGFyID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdGhpcy54IC89IG47XG4gICAgICAgIHRoaXMueSAvPSBuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpdml2ZSB0aGlzIHZlY3RvciBieSB0aGUgcHJvdmlkZWQgbnVtYmVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpdlMgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXZpZGVCeVNjYWxhcihuKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZSB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpdmlkZUJ5U2NhbGFyKHRoaXMubWFnbml0dWRlKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9yIEFtZXJpY2FuIHNwZWxsaW5nLiBTYW1lIGFzIHVuaXQvbm9ybWFsaXNlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2FtZSBhcyBub3JtYWxpc2UgYW5kIG5vcm1hbGl6ZVxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS51bml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpc2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3F1cmVkIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5sZW5ndGhTcSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGJ5IGFub3RoZXJcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKHZlYykge1xuICAgICAgICByZXR1cm4gdmVjLnggKiB0aGlzLnggKyB2ZWMueSAqIHRoaXMueTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYnkgYW5vdGhlci5cbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbiAodmVjKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2ZWMueSAtIHRoaXMueSAqIHZlYy54O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhpcyB2ZWN0b3IgaS5lIG11bHRpcGxpZXMgaXQgYnkgLTFcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZlY3RvciBheGVzIHZhbHVlcyB0byBhYnNvbHV0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLmFicyh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmFicyh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgdmVjdG9yIGkuZSBzZXRzIGFsbCBheGVzIHRvIDBcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuemVybyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gICAgICovXG4gICAgQWJzdHJhY3RWZWN0b3IucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLnggLSB2Lng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55IC0gdi55O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmV0b3IgYnkgcHJvdmlkZWQgcmFkaWFuc1xuICAgICAqL1xuICAgIEFic3RyYWN0VmVjdG9yLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkcykge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkcyk7XG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWRzKTtcbiAgICAgICAgdmFyIG94ID0gdGhpcy54O1xuICAgICAgICB2YXIgb3kgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IG94ICogY29zIC0gb3kgKiBzaW47XG4gICAgICAgIHRoaXMueSA9IG94ICogc2luICsgb3kgKiBjb3M7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUm91bmRzIHRoaXMgdmVjdG9yIHRvIG4gZGVjaW1hbCBwbGFjZXNcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAobiA9PT0gdm9pZCAwKSB7IG4gPSAyOyB9XG4gICAgICAgIHZhciBwID0gcHJlY2lzaW9uW25dO1xuICAgICAgICAvLyBUaGlzIHBlcmZvcm1zIHdhYWF5IGJldHRlciB0aGFuIHRvRml4ZWQgYW5kIGdpdmUgRmxvYXQzMiB0aGUgZWRnZSBhZ2Fpbi5cbiAgICAgICAgLy8gaHR0cDovL3d3dy5keW5hbWljZ3VydS5jb20vamF2YXNjcmlwdC9yb3VuZC1udW1iZXJzLXdpdGgtcHJlY2lzaW9uL1xuICAgICAgICB0aGlzLnggPSAoKDAuNSArIHRoaXMueCAqIHApIDw8IDApIC8gcDtcbiAgICAgICAgdGhpcy55ID0gKCgwLjUgKyB0aGlzLnkgKiBwKSA8PCAwKSAvIHA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhpcyB2ZWN0b3JcbiAgICAgKi9cbiAgICBBYnN0cmFjdFZlY3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9O1xuICAgIHJldHVybiBBYnN0cmFjdFZlY3Rvcjtcbn0oKSk7XG5leHBvcnRzLkFic3RyYWN0VmVjdG9yID0gQWJzdHJhY3RWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BYnN0cmFjdFZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYW4gQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuQXJyYXlWZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgQXJyYXlWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFycmF5VmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFycmF5VmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgQXJyYXlWZWN0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmF4ZXMgPSBbeCwgeV07XG4gICAgICAgIF90aGlzLmN0b3IgPSBBcnJheVZlY3RvcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXlWZWN0b3IucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF4ZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHRoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheVZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEFycmF5VmVjdG9yO1xufShBYnN0cmFjdFZlY3Rvcl8xLkFic3RyYWN0VmVjdG9yKSk7XG5leHBvcnRzLkFycmF5VmVjdG9yID0gQXJyYXlWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcnJheVZlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFic3RyYWN0VmVjdG9yXzEgPSByZXF1aXJlKFwiLi9BYnN0cmFjdFZlY3RvclwiKTtcbi8qKlxuICogQSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gdGhhdCBzdG9yZXMgdGhlIGF4ZXMgaW4gYSBGbG9hdDMyQXJyYXlcbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHYgPSBuZXcgVmVjMkQuRmxvYXQzMlZlY3RvcigyLCA1KVxuICogYGBgXG4gKi9cbnZhciBGbG9hdDMyVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdDMyVmVjdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0MzJWZWN0b3IoeCwgeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBGbG9hdDMyVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5heGVzID0gbmV3IEZsb2F0MzJBcnJheSgyKTtcbiAgICAgICAgX3RoaXMuYXhlc1swXSA9IHg7XG4gICAgICAgIF90aGlzLmF4ZXNbMV0gPSB5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdDMyVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5heGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB0aGlzLmF4ZXNbMF0gPSB4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQzMlZlY3Rvci5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXhlc1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgdGhpcy5heGVzWzFdID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZsb2F0MzJWZWN0b3I7XG59KEFic3RyYWN0VmVjdG9yXzEuQWJzdHJhY3RWZWN0b3IpKTtcbmV4cG9ydHMuRmxvYXQzMlZlY3RvciA9IEZsb2F0MzJWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9hdDMyVmVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0FycmF5VmVjdG9yXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0Zsb2F0MzJWZWN0b3JcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vVmVjdG9yXCIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZlYzJELmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQWJzdHJhY3RWZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0Fic3RyYWN0VmVjdG9yXCIpO1xuLyoqXG4gKiBBIHZlY3RvciByZXByZXNlbnRhdGlvbiB0aGF0IHN0b3JlcyB0aGUgYXhlcyBhcyBwYXJ0IG9mIHRoZSBpbnN0YW5jZSBpdHNlbGZcbiAqXG4gKiBgYGB0c1xuICogY29uc3QgdiA9IG5ldyBWZWMyRC5WZWN0b3IoMiwgNSlcbiAqIGBgYFxuICovXG52YXIgVmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWZWN0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmVjdG9yKHgsIHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgVmVjdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5feCA9IHg7XG4gICAgICAgIF90aGlzLl95ID0geTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5feDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZlY3Rvcjtcbn0oQWJzdHJhY3RWZWN0b3JfMS5BYnN0cmFjdFZlY3RvcikpO1xuZXhwb3J0cy5WZWN0b3IgPSBWZWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWN0b3IuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcbi8qKlxuICogUXVlcnkgc2VsZWN0b3Igc3RyaW5nXG4gKiBmb3IgdGhlIGNhbnZhcyB0YXJnZXRcbiAqL1xuY29uc3QgdGFyZ2V0ID0gJyNnYW1lLWJvYXJkJztcbigoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBvdXIgdGFyZ2V0IGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIDJEIGNvbnRleHRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoY29udGV4dCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBDcmVhdGUgR2FtZSBvYmplY3QuXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGNvbnRleHQpO1xuICAgICAgICAvLyBEZWZpbmUgZ2FtZWxvb3AgYW5kIHByb2Nlc3MuXG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5wcm9jZXNzKHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAvLyBLZWVwIHJlcXVlc3RpbmcgbmV3IGZyYW1lc1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEJvb3RzdHJhcCBhbnkgc2V0dXAgc3R1ZmZcbiAgICAgICAgZ2FtZS5zZXRVcCgpO1xuICAgICAgICAvLyBTdGFydCB0aGUgcmVuZGVybG9vcC5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==