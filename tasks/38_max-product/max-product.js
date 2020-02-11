export function maxProduct(arr){
    let max=arr[0]*arr[1];
    for(let i=1; i<arr.length-1; i++){
        let pr=1;
        pr=arr[i]*arr[i+1];
        if(pr>max) max=pr;
    }
    return max;
}