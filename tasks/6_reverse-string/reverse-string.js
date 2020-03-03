export function reverseString(str) {

    let newReversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newReversedString += str[i];
    }

    return newReversedString;
    
}