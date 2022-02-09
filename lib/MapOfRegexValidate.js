"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapOfRegexValidate = void 0;

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MapOfRegexValidate extends RegExp {}

exports.MapOfRegexValidate = MapOfRegexValidate;

_defineProperty(MapOfRegexValidate, "email", /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+/);

_defineProperty(MapOfRegexValidate, "number", /[0-9]+/);