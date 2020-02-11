export function titleCase(str) {
  return str.split(' ').map((el) => el.charAt(0)
      .toUpperCase() + el.slice(1)
      .toLowerCase()).join(' ');
}
