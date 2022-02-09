"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regexValidate = void 0;

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.to-string.js");

var _MapOfRegexValidate = require("./MapOfRegexValidate");

// @ts-check

/**
 * @param {Object} args
 * @param {MapOfRegexValidate | RegExp} args.regexp
 * @param {string} args.stringToValidate
 * @return {boolean}
 */
const regexValidate = args => {
  const {
    regexp = /[]/,
    stringToValidate = ""
  } = args;
  const regexpValid = new RegExp(regexp);
  const valuesOfRegexpValid = regexpValid.exec(stringToValidate); // Es necesaria esta validación por como funciona el metodo ".exec" de una expresión regular
  // Ya que si se introduce un valor que no coincida con la RegExp, la funcion ".exec" retornara null

  if (!valuesOfRegexpValid) return false; // Se valida si el texto introducido contiene caracteres diferentes a los caracteres numericos

  const isValid = valuesOfRegexpValid[0] === valuesOfRegexpValid.input;
  return isValid;
};

exports.regexValidate = regexValidate;