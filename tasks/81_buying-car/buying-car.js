/**
 * @param {number} startPriceOld
 * @param {number} startPriceNew
 * @param {number} savingsPerMonth
 * @param {number} percentLossByMonth
 * @return {Array<number>}
 * @description "Calculates how many months will it take a man
 * to save up enough money to buy the car he wants,
 * and how much money will he have leftover?"
 */

export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  const LOSS_PERCENTAGE = 0.5;

  let numberOfMonths = 0;
  let savedMoney = 0;
  let newPrice = startPriceNew;
  let oldPrice = startPriceOld;

  while (oldPrice + savedMoney <= newPrice) {
    savedMoney += savingsPerMonth;
    oldPrice -= Math.round(oldPrice * percentLossByMonth / 100);
    newPrice -= Math.round(newPrice * percentLossByMonth / 100);
    numberOfMonths += 1;
    if (numberOfMonths % 2) {
      percentLossByMonth += LOSS_PERCENTAGE;
    }
  }

  return [numberOfMonths, savedMoney + oldPrice - newPrice];
}
