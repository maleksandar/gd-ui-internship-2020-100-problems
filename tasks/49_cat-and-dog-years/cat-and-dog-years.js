
export function humanYearsCatYearsDogYears(humanYearsInput) {
  let [humanYears, catYears, dogYears] = [humanYearsInput, 0, 0];

  switch (humanYears) {
    default: catYears += 4* (humanYears - 2); dogYears+= 5*(humanYears - 2);
    // eslint-disable-next-line no-fallthrough
    case 2: catYears += 9; dogYears+=9;
    // eslint-disable-next-line no-fallthrough
    case 1: catYears+=15; dogYears+=15;
  }


  let ret = [];
  ret.push(humanYears);
  ret.push(catYears);
  ret.push(dogYears);
  return ret;
}
