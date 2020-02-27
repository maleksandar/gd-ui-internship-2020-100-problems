

export function binaryEncode(sentence) {
  if (sentence === undefined) return '';
  let encodedSentence = [];
  for (let i=0; i<sentence.length; i++) {
    encodedSentence.push(encodeChar(sentence[i]));
  }
  return encodedSentence.join(' ');
}

function encodeChar(char) {
  let code = char.charCodeAt(0);
  code = code.toString(2);
  if (code.length < 8) {
    for (let i=0; i<8-code.length + 1; i++) {
      code = '0' + code;
    }
  }
  return code;
}
