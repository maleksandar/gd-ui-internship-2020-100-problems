/* eslint-disable camelcase */
export function validate_bet(validator, strOfNums) {
  let strSplit = strOfNums.split(/[,\s]/g);
  let arrayOfNums = [];

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] > validator[1]) {
      return 'None';
    }
    if (strSplit[i] != '' && !isNaN(strSplit[i])) {
      arrayOfNums.push(strSplit[i]);
    }
  }

  arrayOfNums = arrayOfNums.map(Number);

  if (arrayOfNums.length < validator[0]) {
    return 'None';
  }

  return arrayOfNums.sort();
}


