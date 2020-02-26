export const insert = (str, insertableStr, position) => {
  if (position === undefined) {
    position = 0;
  }
  if (insertableStr == undefined) {
    insertableStr = "";
  }
  return `${str.slice(0, position)}${insertableStr}${str.slice(position)}`;
};
