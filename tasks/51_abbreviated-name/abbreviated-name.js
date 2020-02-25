export function abbreviated(fullName) {
  return fullName.split(' ')
      .map((name, i) => {
        if (i !== 0) {
          return name[0] + '.';
        }
        return name;
      })
      .join(' ');
}
// Answer using regEx, but not allowed by linter
// export function abbreviated(fullName) {
//   return fullName.replace(/(?<=\s[A-Z])[a-z]*/g, '.');
// }
