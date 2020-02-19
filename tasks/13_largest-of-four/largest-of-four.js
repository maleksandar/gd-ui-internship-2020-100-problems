

export function largestOfFour(array) {

    let ret = [];

    for (let i = 0; i < array.length; i++) {
        ret.push(array[i].reduce((acc, val) => { return val > acc ? val : acc }, Number.MIN_SAFE_INTEGER));
    }

    return ret;
}