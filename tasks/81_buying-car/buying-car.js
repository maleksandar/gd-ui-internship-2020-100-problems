

export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let moneyNeeded = startPriceNew - startPriceOld;
  let numberOfMonths = 0;
  let factor = percentLossByMonth/100;

  while (moneyNeeded > 0) {
    numberOfMonths++;
    startPriceOld = startPriceOld*(1-factor);
    startPriceNew = startPriceNew*(1-factor);
    if ((numberOfMonths+1) % 2 === 0) factor+= 0.005;
    moneyNeeded = (startPriceNew - startPriceOld) -
    numberOfMonths* savingsPerMonth;
  }

  return [numberOfMonths, Math.floor(Math.abs(moneyNeeded))];
}
