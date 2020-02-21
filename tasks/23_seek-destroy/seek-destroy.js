export function destroyer(arr, ...args) {
  return arr.filter((val) => {
    for (let i=0; i<arguments.length; i++) {
      if (val === args[i]) return false;
    }
    return true;
  });
}
