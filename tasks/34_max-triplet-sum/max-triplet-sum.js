export function maxTripletSum(arr){
    arr = arr.filter((a,b) => arr.indexOf(a)===b)
    arr.sort((a,b) => b-a);
    return arr[0]+arr[1]+arr[2];
}