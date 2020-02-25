export function convertToRoman(num) {
  let romanNum = [];

  const thousands = Math.floor(num / 1000);
  let remainder = num % 1000;

  for (let i=0; i<thousands; i++) {
    romanNum.push('M');
  }

  const hundreds = Math.floor( remainder/ 100);
  remainder = remainder % 100;
  romanNum = romanNum.concat(getTheNumber(hundreds, 'C', 'D', 'M'));


  const tens = Math.floor(remainder / 10);
  remainder = remainder % 10;
  romanNum = romanNum.concat(getTheNumber(tens, 'X', 'L', 'C'));
  romanNum = romanNum.concat(getTheNumber(remainder, 'I', 'V', 'X'));


  return romanNum.join('');
}


function getTheNumber(num, letter1, letter2, letter3) {
  let romanNum = [];

  if (num === 9) {
    romanNum.push(letter1);
    romanNum.push(letter3);
  } else {
    if (num >= 5) {
      romanNum.push(letter2);
      num-=5;
    }
    if (num === 4) {
      romanNum.push(letter1);
      romanNum.push(letter2);
    } else {
      for (let i=0; i<num; i++) {
        romanNum.push(letter1);
      }
    }
  }

  return romanNum;
}
