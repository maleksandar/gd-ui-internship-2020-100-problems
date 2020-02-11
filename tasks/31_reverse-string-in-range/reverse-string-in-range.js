

export function reverseStringInRange(str, array) {
    let ind1 = array[0];
    let ind2 = array[1];
    let arr = str.split("");

 

    for (let i=ind1, j=0; i<= Math.floor((ind1 + ind2)/2); i++, j++) {
        let t = arr[i];
        arr[i] = arr[ind2-j];
        arr[ind2-j] = t;
    } 

    return arr.join("");

}