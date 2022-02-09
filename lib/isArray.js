"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

// @ts-check

/**@param {any} value*/
const isArray = value => {
  if (value.constructor !== Array) return false;
  return true;
};

exports.isArray = isArray;