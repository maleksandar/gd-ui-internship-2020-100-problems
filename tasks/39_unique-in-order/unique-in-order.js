


export function uniqueInOrder(str) {

   if (str.length == 0) return [];

   let ret = [];

   ret.push(str[0]);

   for (let i = 1; i < str.length; i++) {
      if (str[i - 1] !== str[i]) ret.push(str[i]);
   }

   return ret;

}