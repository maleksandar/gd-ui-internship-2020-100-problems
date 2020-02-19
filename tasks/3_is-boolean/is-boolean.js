export const isBoolean = (value) => {
  const objectCheck = (
    typeof value === 'object' &&
    value !== null &&
    typeof value.valueOf() === 'boolean'
  );

  return typeof value === 'boolean' || objectCheck;
};
