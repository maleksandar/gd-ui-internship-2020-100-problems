export function abbreviated(fullName) {
  const splittedFullName = fullName.split(' ');
  const firstName = splittedFullName[0];
  const otherNames = splittedFullName.slice(1);
  const abbreviatedNames = otherNames.map((name) => name.charAt(0) + '.');
  return firstName +
    (abbreviatedNames.length ? ' ' + abbreviatedNames.join(' ') : '');
}
