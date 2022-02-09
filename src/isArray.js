// @ts-check
/**@param {any} value*/
export const isArray = (value) => {
    if (value.constructor !== Array) return false;
    return true;
};