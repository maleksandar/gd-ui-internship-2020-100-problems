export const insert = (string, insertable = '', position = 0) => {
  if (insertable === '') {
    return string;
  }

  let result = '';

  for (let i = 0; i < position; i++) {
    result += string[i];
  }

  result += insertable;

  for (let i = position; i < string.length; i++) {
    result += string[i];
  }

  return result;
};

// Alternative solution using substring()
export const insert2 = (string, insertable, position = 0) => {
  if (insertable === undefined) {
    return string;
  }

  const start = string.substring(0, position);
  const end = string.substring(position);
  return start + insertable + end;
};
