

export function addTogether(a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return a + b;
    } else if (b === undefined) {
      return function(newB) {
        if (typeof a === 'number' && typeof newB === 'number') {
          return a + newB;
        }
      };
    }
  }
}
