export function truncateArray(arr, n){
    if(n>arr.length) return [];
    if(n===0) return arr;
    return arr.splice(n)
}