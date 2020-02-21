export const humanYearsCatYearsDogYears = (humanYears) => {
  const FIRST_YEAR = 15;
  const SECOND_YEAR = 24;
  const CAT_YEAR = 4;
  const DOG_YEAR = 5;

  if (humanYears === 1) {
    return [humanYears, FIRST_YEAR, FIRST_YEAR];
  } else if (humanYears === 2) {
    return [humanYears, SECOND_YEAR, SECOND_YEAR];
  }

  const CAT_AGE = (humanYears - 2) * CAT_YEAR + SECOND_YEAR;
  const DOG_AGE = (humanYears - 2) * DOG_YEAR + SECOND_YEAR;

  return [humanYears, CAT_AGE, DOG_AGE];
};
