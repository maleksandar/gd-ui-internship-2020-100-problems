export const maxTripletSum = numbers => {
  const unique = [...new Set([...numbers])];
  unique.sort((a, b) => b - a);
  return unique[0] + unique[1] + unique[2];
};
