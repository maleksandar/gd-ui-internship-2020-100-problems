/* eslint-disable no-unreachable */
/* eslint-disable prefer-rest-params */
export function insert(string, replaceString, position) {
  switch (arguments.length) {
    case 1:
      return string;
      break;
    case 2:
      return replaceString + string;
      break;
    case 3:
      return string.slice(0, position)
      + replaceString + string.slice(position);
      break;
    default:
      return '';
  }
}
