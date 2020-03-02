/* eslint-disable no-unreachable */
/* eslint-disable prefer-rest-params */
export function insert(string) {
  let newStr = '';

  switch (arguments.length) {
    case 1:
      return string;
      break;
    case 2:
      newStr= arguments[1] + string;
      break;
    case 3:
      newStr= string.slice(0, arguments[2])
      + arguments[1] + string.slice(arguments[2]);
      break;
  }

  return newStr;
}
