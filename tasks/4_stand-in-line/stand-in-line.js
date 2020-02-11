

export function nextInLine(arr, item) {

    arr.push(item);
    let element = arr.shift();
    return element;

}