

export function squares(number) {
  let amount = 0;

  for (let i=1; i<=number; i++) {
    if (canBeWrittenAsDifferenceOfSquares(i) ) {
      amount++;
    }
  }

  return amount;
}

function canBeWrittenAsDifferenceOfSquares(number) {
  return (!(number % 4 === 2));
}
