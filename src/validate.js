// @ts-check

import { MapOfValidate } from "./MapOfValidate";

/**
 * @param {Object} args
 * @param {MapOfValidate | RegExp} args.regExp
 * @param {string} args.stringToValidate
 * @return {boolean}
 */
export const validate = (args) => {
    const { regExp = /[]/, stringToValidate = "" } = args;
    const regexpValid = new RegExp(regExp);
    const valuesOfRegexpValid = regexpValid.exec(stringToValidate);

    // Es necesaria esta validación por como funciona el metodo ".exec" de una expresión regular
    // Ya que si se introduce un valor que no coincida con la RegExp, la funcion ".exec" retornara null
    if (!valuesOfRegexpValid) return false;

    // Se valida si el texto introducido contiene caracteres diferentes a los caracteres numericos
    const isValid = valuesOfRegexpValid[0] === valuesOfRegexpValid.input;
    return isValid;
};