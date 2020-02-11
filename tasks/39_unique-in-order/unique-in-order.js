


export function uniqueInOrder(str) {
    let arr;
   if (typeof str ===  "string") {
    arr = str.split("");
   } else
   arr = str;

   let ret = [];
   if (arr.length !== 0) {
   ret.push(arr[0]);

   for (let i=1; i<arr.length; i++) {
    if (arr[i-1] !== arr[i] ) ret.push(arr[i]);
   }
}
   return ret;

}