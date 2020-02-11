export const humanYearsCatYearsDogYears = humanYears => {
  let dogY,
    catY = 0;
  if (humanYears < 1) {
    return [0, 0, 0];
  } else if (humanYears == 1) {
    return [1, 15, 15];
  } else if (humanYears == 2) {
    return [2, 24, 24];
  } else if (humanYears >= 3) {
    dogY = 15 + 9 + (humanYears - 2) * 5;
    catY = 15 + 9 + (humanYears - 2) * 4;
    return [humanYears, catY, dogY];
  }
};
