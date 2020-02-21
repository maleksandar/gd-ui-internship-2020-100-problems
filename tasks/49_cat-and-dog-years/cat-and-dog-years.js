export function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1) {
    return [1, 15, 15];
  } else if (humanYears === 2) {
    return [2, 24, 24];
  } else if (humanYears > 3) {
    const catYears = 24 + (humanYears - 2) * 4;
    const dogYears = 24 + (humanYears - 2) * 5;
    return [humanYears, catYears, dogYears];
  }
}
