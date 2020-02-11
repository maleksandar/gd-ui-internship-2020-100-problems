export function arrayChunks(arr, n){
    const temp = [];
    for(let i=0 ;i< arr.length; i+=n){
      temp.push(arr.slice(i, i+n));
    }
    return temp;
}