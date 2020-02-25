

export function stringExpansion(string) {
  if (string === '') return '';
  let repeatFactor = 1;
  let ret = '';
  for (let i=0; i<string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      repeatFactor = Number.parseInt(string[i]);
    } else {
      for (let j=0; j<repeatFactor; j++) {
        ret+=string[i];
      }
    }
  }

  return ret;
}
