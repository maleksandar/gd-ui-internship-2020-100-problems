export function maxProduct(array) {
    let maxAdjacentNumber = array[0] * array[1];

    for (let i = 1; i < array.length - 1; i++) {
        let result = 1;

        result = array[i] * array[i + 1];

        if (result > maxAdjacentNumber) {
            maxAdjacentNumber = result;
        }
    }

    return maxAdjacentNumber;
}