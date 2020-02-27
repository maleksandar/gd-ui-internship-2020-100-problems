

export function abbreviated(names) {
  return names.split(' ').map((name, index) => {
    if (index === 0) return name;
    else return name.charAt(0) + '.';
  } ).join(' ');
}
