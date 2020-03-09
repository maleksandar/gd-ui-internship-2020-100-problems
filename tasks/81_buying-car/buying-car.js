export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let months = 0;
  let moneySaved = startPriceOld;

  while (moneySaved < startPriceNew) {
    startPriceNew = reduceCarValue(startPriceNew, percentLossByMonth);
    startPriceOld = reduceCarValue(startPriceOld, percentLossByMonth);
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    months ++;
    moneySaved = getMoneySaved(months, savingsPerMonth, startPriceOld);
  }
  const moneyLeft = Math.round(moneySaved - startPriceNew);
  return [months, moneyLeft];
}

function getMoneySaved(months, savingsPerMonth, startPriceOld) {
  return months * savingsPerMonth + startPriceOld;
}
function reduceCarValue(price, percetage) {
  return price - price / 100 * percetage;
}
