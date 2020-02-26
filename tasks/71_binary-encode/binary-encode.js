export const binaryEncode = str => {
  if (str === undefined) {
    return "";
  }

  return str
    .trim()
    .split("")
    .map(item =>
      ("0000000" + item.charCodeAt().toString(2))
        .split("")
        .slice(-8)
        .join("")
    )
    .join(" ");
};
