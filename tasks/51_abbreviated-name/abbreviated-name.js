export function abbreviated(fullName) {
  let [firstName, ...otherNames] = fullName.split(' ');
  const abbreviatedNames = otherNames
      .map((name) => ` ${name.charAt(0)}.`)
      .join('');

  return firstName + abbreviatedNames;
}
