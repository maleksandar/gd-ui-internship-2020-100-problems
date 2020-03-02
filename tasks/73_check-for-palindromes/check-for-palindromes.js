export function palindrome(string) {
  let lowCaseStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseStr = lowCaseStr.split('').reverse().join('');

  return lowCaseStr === reverseStr;
}
