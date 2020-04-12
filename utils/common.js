function isArray(arr) {
  return arr instanceof Array;
}

function isObject(obj) {
  return typeof obj === 'object'
}

function isString(str) {
  return typeof str === 'string'
}

function isNumber(num) {
  return typeof num === 'number'
}

function isUndefined(und) {
  return typeof und === 'undefined'
}

function isBoolean(boo) {
  return typeof boo === 'boolean'
}

function isFunction(fun) {
  return typeof fun === 'function'
}

function isNullOrEmpty(val) {
  return null === val || "" === val;
}

/** 判断是否包含在数组内 */
function isInArr(params = {}, arr = []) {

  let paramsBin = {}

  if (isString(params)) {
    paramsBin[params] = params;
  } else if (isObject(params)) {
    paramsBin = params;
  }

  if (paramsBin && isArray(arr)) {
    return arr.filter(function (item) {
      let is = [];
      for (const key in paramsBin) {
        if (paramsBin.hasOwnProperty(key)) {
          is.push(item[key] === paramsBin[key]);
        }
      }
      return is.indexOf(false) == -1 ? item : null;
    });
  }

  return null;
}

module.exports = {
  isInArr
}