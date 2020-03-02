/* eslint-disable prefer-rest-params */
export function addTogether() {
  let isNumberOrUndefined = function(value) {
    return typeof value !== 'number' ? undefined : value;
  };

  if (arguments.length > 1) {
    let arg1 = isNumberOrUndefined(arguments[0]);
    let arg2 = isNumberOrUndefined(arguments[1]);

    if (arg1 === undefined || arg2 === undefined) {
      return undefined;
    } else {
      return arg1 + arg2;
    }
  } else {
    let num = arguments[0];
    if (isNumberOrUndefined(num)) {
      return function(arg2) {
        if (num === undefined || isNumberOrUndefined(arg2) === undefined) {
          return undefined;
        } else {
          return num + arg2;
        }
      };
    }
  }
}


