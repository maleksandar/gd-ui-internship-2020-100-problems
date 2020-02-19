
// 1st 2nd 3rd 4th 5th

export function humanizeFormat(str = '') {
  str = str.toString();

  if (str === '') return '';


  let last = Number.parseInt(str.charAt(str.length - 1));
  switch (last) {
    case 1: return str + 'st';
    case 2: return str + 'nd';
    case 3: return str + 'rd';
    default: return str + 'th';
  }
}

