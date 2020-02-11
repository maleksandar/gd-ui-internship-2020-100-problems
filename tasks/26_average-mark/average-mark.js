export function getAverage(arr){
    let rez = 1;
    let zbir = 0;
    for(let i=0; i<arr.length; i++){
        zbir+=arr[i];
    }
    rez = zbir/arr.length;
    return Math.round(rez);
}