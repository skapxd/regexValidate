"use strict";

var _ = require(".");

var _regexValidate = require("./regexValidate");

const isValid = (0, _regexValidate.regexValidate)({
  stringToValidate: 'hola@gmail.c',
  regexp: _.MapOfRegexValidate.email
});
console.log({
  isValid
});