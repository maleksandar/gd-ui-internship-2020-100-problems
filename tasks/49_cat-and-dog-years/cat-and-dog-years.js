export function humanYearsCatYearsDogYears(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  let copyOfHumanYears = humanYears;

  while (copyOfHumanYears -= 1) {
    if (copyOfHumanYears === 1) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }

  return [humanYears, catYears, dogYears];
}
