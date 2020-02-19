
export function arrayLeaders(array) {

    let ret = [];

    for (let i = array.length - 1, sum = 0; i >= 0; i--) {
        if (array[i] > sum) ret.unshift(array[i]);
        sum = sum + array[i];
    }

    return ret;

}