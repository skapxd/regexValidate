// @ts-check
/**@param {any} value*/
export const isNumber = (value) => {
    if (typeof value !== "number") return false;
    if (isNaN(value)) return false
    return true;
};