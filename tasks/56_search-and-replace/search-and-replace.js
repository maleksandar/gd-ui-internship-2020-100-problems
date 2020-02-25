
export function myReplace(str, before, after) {
  let strArray = str.split(' ');

  for (let i=0; i<strArray.length; i++) {
    if ( strArray[i].toLowerCase() === before.toLowerCase() ) {
      if (strArray[i][0] > 'A' && strArray[i][0] < 'Z') {
        strArray[i] = after[0].toUpperCase() + after.slice(1);
      } else {
        strArray[i] = after;
      }
    }
  }

  return strArray.join(' ');
}
