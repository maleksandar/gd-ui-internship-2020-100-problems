

export function validBraces(bracesList) {
  let stack = [];

  for (let i=0; i<bracesList.length; i++) {
    if (['{', '(', '['].includes(bracesList[i])) {
      stack.push(bracesList[i]);
    } else {
      const lastOpenBrace = stack.pop();
      switch (lastOpenBrace) {
        case '{': if (bracesList[i] !== '}') return false; break;
        case '[': if (bracesList[i]!== ']') return false; break;
        case '(': if (bracesList[i] !== ')') return false; break;
      }
    }
  }
  return true;
}
