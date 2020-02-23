export function getAverage(array) {
    let zbir = 0;

    for (let i = 0; i < array.length; i++) {
        zbir += array[i];
    }

    return Math.round(zbir / array.length);
}