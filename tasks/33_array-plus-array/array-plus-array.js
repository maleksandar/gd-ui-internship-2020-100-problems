export function arrayPlusArray(array1, array2) {
    let niz = [];

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        niz.push((array1[i] || 0) + (array2[i] || 0));
    }
    
    return niz;
}