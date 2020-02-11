export function arrayLeaders(arr){
    let sum = 0;
    const res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            sum += arr[j];
        }
        if(arr[i] > sum){
            res.push(arr[i]);
        }
        sum = 0;
    }
    return res;
}