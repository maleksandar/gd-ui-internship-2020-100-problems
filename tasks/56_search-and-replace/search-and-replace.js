export function myReplace(string, wordToReplace, wordToReplaceWith) {
  let sentence = string;

  if (wordToReplace.charAt(0).match(/[A-Z]/)) {
    return sentence.replace(
        wordToReplace, wordToReplaceWith.charAt(0).toUpperCase()
    + wordToReplaceWith.slice(1));
  }

  return sentence.replace(wordToReplace, wordToReplaceWith);
}
