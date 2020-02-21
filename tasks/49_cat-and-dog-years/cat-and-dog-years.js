export function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  let years = [humanYears, catYears, dogYears];

  while (-- humanYears) {
    if (humanYears === 1) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
    years[1] = catYears;
    years[2] = dogYears;
  }

  return years;
}
