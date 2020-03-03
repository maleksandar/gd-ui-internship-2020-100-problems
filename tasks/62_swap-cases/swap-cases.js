export function swapCases(str) {
  return str.replace(/[a-zA-Z]/g, (match) => {
    return match === match.toUpperCase()?
     match.toLowerCase() : match.toUpperCase();
  });
}

// export function swapCases(str) {
//   return str.split('').map((char) => {
//     return char === char.toUpperCase()?
//        char.toLowerCase() : char.toUpperCase();
//   }).join('');
// }
