export const palindrome = (string) => {
  const cleaned = string.toLowerCase().split(/[^a-zA-Z0-9]/g).join('');
  return isPalindrome(cleaned);
};

// Alternative solution using replace()
export const palindrome2 = (str) => {
  const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};

const isPalindrome = (string) => {
  const length = Math.floor(string.length / 2);

  for (let i = 0; i < length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }

  return true;
};
