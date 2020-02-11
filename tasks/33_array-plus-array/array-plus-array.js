

export function arrayPlusArray(arr1, arr2) {
    

    if (arr1.length >= arr2.length) {
       

    for (let i = 0; i<arr1.length; i++) {
        if (i < arr2.length) arr1[i] += arr2[i];
    }

    return arr1;
    

    } else {
        for (let i = 0; i<arr2.length; i++) {
            if (i < arr1.length) arr2[i] += arr1[i];
        }
        return arr2;
    }


}