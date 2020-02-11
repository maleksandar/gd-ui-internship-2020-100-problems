export function removeDuplicates(arr){
    return arr.filter((el, i) => arr.indexOf(el) === i);
}