export function numberToReversedArray(broj){
    let niz=[];
    broj = broj+'';
    broj= broj.split('').reverse();
    for(let i=0; i<broj.length;i++){
        niz.push(parseInt(broj[i]));
    }
    return niz;
}