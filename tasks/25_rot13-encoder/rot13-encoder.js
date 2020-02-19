

export function rot13Encoder(plaintext) {
  let a = 'A';
  let aCode = a.charCodeAt(0);
  let cipher = '';

  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext.charCodeAt(i) < aCode ||
    plaintext.charCodeAt(i) > aCode + 26) cipher += plaintext.charAt(i); else {
      cipher += String.fromCharCode(aCode +
        (plaintext.charCodeAt(i) - aCode + 13) % 26);
    }
  }

  return cipher;
}
