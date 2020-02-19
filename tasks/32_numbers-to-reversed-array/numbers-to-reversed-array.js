

export function numberToReversedArray(number) {

    let ret = [];
    let arr = number.toString().split("");

    arr.forEach(element => {
        ret.unshift(parseInt(element));
    });

    return ret;

}