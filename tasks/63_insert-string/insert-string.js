

export function insert(str, insertable, position = 0) {
  if (insertable === undefined) return str;
  return str.slice(0, position) + insertable +
   str.slice(position, str.length);
}
