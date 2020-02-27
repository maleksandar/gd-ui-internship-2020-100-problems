export const addTogether = (...args) => {
  const firstArgument = args[0];
  const secondArgument = args[1];

  if (typeof firstArgument === 'number') {
    if (typeof secondArgument === 'number') {
      return firstArgument + secondArgument;
    }

    if (secondArgument === undefined) {
      return (number) => {
        if (typeof number === 'number') {
          return firstArgument + number;
        }
      };
    }
  }

  return undefined;
};
