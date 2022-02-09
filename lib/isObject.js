"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

// @ts-check

/**@param {any} value*/
const isObject = value => {
  if (typeof value !== "object" && value.constructor === Array) return false;
  return true;
};

exports.isObject = isObject;