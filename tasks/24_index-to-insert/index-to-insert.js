export function getIndexToInsert(array, value) {
    //return array.concat(value).sort((a, b) => a - b).indexOf(value);

    array.sort((a, b) => a - b);

    if (value > array[array.length - 1]) {
        return array.length;
    }

    for (let i = 0; i < array.length; i++) {
        if (value <= array[i]) {
            return i;
        }
    }
}