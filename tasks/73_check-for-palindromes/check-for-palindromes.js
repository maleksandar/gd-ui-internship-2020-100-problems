export function palindrome(str) {
  const onlyAplhaNumLowCase = str.replace(/[\W_]/g, '').toLowerCase();
  return isPalindrome(onlyAplhaNumLowCase);
}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
