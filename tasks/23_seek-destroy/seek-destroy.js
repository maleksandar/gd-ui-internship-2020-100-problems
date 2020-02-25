

export function destroyer(...args) {
  let array = args[0];


  for (let i = 1; i <= arguments.length - 1; i++) {
    array = array.filter((elem) => !(elem === args[i]));
  }

  return array;
}
