export const rot13Encoder = (string) => {
  return string.replace(/[A-Za-z]/g, (c) => {
    return String.fromCharCode(encode(c));
  });
};

const encode = (c) => {
  return c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13);
};
