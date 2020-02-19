
export function reverseString(text) {

    let array = text.split("");

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        var t = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = t;
    }

    return array.join("");

}