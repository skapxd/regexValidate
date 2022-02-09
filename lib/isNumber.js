"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

// @ts-check

/**@param {any} value*/
const isNumber = value => {
  if (typeof value !== "number") return false;
  return true;
};

exports.isNumber = isNumber;