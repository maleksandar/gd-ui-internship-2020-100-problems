export const nextInLine = (arr,item) => {
  if(arr.length === 0) {
    return item;
  }
  arr.push(item);
  return arr.shift();
}
