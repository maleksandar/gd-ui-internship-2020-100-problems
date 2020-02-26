export function insert(str, insertable = '', position = 0) {
  if (position > str.length - 1) {
    return str + insertable;
  }
  const beforeInsertion = str.slice(0, position);
  const afterInsertion = str.slice(position);

  return beforeInsertion + insertable + afterInsertion;
}
