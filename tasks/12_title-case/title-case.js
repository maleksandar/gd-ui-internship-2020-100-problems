export function titleCase(str){
   str.split(' ').map(function(el){
       return el.charAt(0) + el.slice(1).toLowerCase();
   })
}