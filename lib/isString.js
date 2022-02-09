"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

// @ts-check

/**@param {any} value*/
const isString = value => {
  if (typeof value !== "string") return false;
  return true;
};

exports.isString = isString;