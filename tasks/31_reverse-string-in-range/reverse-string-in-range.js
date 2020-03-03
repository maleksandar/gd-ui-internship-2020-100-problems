export function reverseStringInRange(str, index) {
    return str.substring(0, index[0]) +
        reverseString(str.substring(index[0], index[1] + 1)) +
        str.substring(index[1] + 1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}