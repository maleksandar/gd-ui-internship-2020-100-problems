export const nbMonths = (
  startPriceOld,
  startPriceNew,
  savingsPerMonth,
  percentLossByMonth
) => {
  const LOSS_PERCENT_INCREASE = 0.5;

  let months = 0;
  let moneyLeft = 0;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let savings = 0;

  while (priceOld + savings < priceNew) {
    months++;

    if (months % 2 == 0) {
      percentLossByMonth = percentLossByMonth + LOSS_PERCENT_INCREASE;
    }

    priceOld = priceOld - priceOld * (percentLossByMonth / 100);
    priceNew = priceNew - priceNew * (percentLossByMonth / 100);
    savings = savings + savingsPerMonth;
  }

  moneyLeft = savings + priceOld - priceNew;

  return [months, Math.round(moneyLeft)];
};
