export function removeDuplicates(arr){
    return arr.filter((a, b) => arr.indexOf(a) === b)
}