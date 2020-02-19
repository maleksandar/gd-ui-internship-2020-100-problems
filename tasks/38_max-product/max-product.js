

export function maxProduct(arr) {

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] * arr[i + 1] > max) max = arr[i] * arr[i + 1]
    }

    return max;

}