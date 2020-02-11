export function rowWeights(arr){
    let tim1 = [];
    let tim2 = [];
    let niz = [];
    for(let i=0; i<arr.length; i+=2){
        tim1.push(arr[i]);
        if(!isNaN(arr[i+1])) tim2.push(arr[i+1]);
    }
    niz.push(sum(tim1));
    niz.push(sum(tim2));
    return niz;
}

function sum(arr){
    let zbir=0;
    for(let i=0; i<arr.length; i++){
        zbir+=arr[i];
    }
    return zbir;
}