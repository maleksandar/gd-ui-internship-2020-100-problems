

export function arrayPlusArray(array1, array2) {

    if (array1.length >= array2.length) {
        return addArrays(array1, array2);
    } else {
        return addArrays(array2, array1);
    }


}

function addArrays(array1, array2) {

    let ret = [];

    for (let i = 0; i < array1.length; i++) {

        if (i < array2.length) {
            ret.push(array1[i] + array2[i]);
        } else {
            ret.push(array1[i]);
        }

    }

    return ret;

}