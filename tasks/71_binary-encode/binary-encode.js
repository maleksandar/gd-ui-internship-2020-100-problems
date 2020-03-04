/**
 * @param {string} sentence
 * @return {string}
 * @description "Returns an binary string of passed English sentance."
 */

export function binaryEncode(sentence = '') {
  const characters = sentence.split('');
  return characters.map((character) => {
    return character.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}
