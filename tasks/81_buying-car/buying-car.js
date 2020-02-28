// FIXME: ESLint doesn't allow me to format function arguments better
// I tried with bellow implementation and indentation, but it gives me
// an error => ESLint: Parsing error: Unexpected token ')'
//
// export const nbMonths = (
//   startPriceOld,
//   startPriceNew,
//   savingsPerMonth,
//   percentLossByMonth,
// ) => {
export const nbMonths = (
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth) => {
  const LOSS_PERCENTAGE = 0.5;

  let months = 0;
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let savings = 0;

  while (priceOld + savings < priceNew) {
    months++;

    if (months % 2 === 0) {
      percentLossByMonth += LOSS_PERCENTAGE;
    }

    const priceOldLoss = priceOld * (percentLossByMonth / 100);
    const priceNewLoss = priceNew * (percentLossByMonth / 100);

    priceOld -= priceOldLoss;
    priceNew -= priceNewLoss;
    savings += savingsPerMonth;
  }

  const moneyLeft = Math.round(savings + priceOld - priceNew);
  return [months, moneyLeft];
};
