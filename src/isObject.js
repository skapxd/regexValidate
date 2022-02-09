// @ts-check
/**@param {any} value*/
export const isObject = (value) => {
    if (typeof value !== "object" && value.constructor === Array) return false;
    return true;
};