export function findEqualIndex(array) {

    let sumLeft = 0;

    for (let i = 1; i < array.length - 1; i++) {

        sumLeft += array[i - 1];
        let sumRight = 0;

        for (let j = i; j < array.length - 1; j++) {
            sumRight += array[j + 1];
        }

        if (sumLeft === sumRight) {
            return i;
        }
    }

    return -1;
}
