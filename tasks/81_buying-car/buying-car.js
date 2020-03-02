export function nbMonths(startPriceOld, startPriceNew, savingsPerMonth,
    percentLossByMonth) {
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let lossPercentByMonth = percentLossByMonth;
  let months = 0;
  let totalSavings = 0;

  while ((oldCarPrice + totalSavings) < newCarPrice) {
    months++;

        (months % 2 === 0) ? lossPercentByMonth += (0.5) : lossPercentByMonth;

        oldCarPrice -= oldCarPrice * (lossPercentByMonth / 100);
        newCarPrice -= newCarPrice * (lossPercentByMonth / 100);

        totalSavings += savingsPerMonth;
  }

  let savings = (oldCarPrice + totalSavings) - newCarPrice;

  return [months, Math.round(savings)];
}
