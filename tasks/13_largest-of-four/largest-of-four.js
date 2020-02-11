export function largestOfFour(arr){
    return arr.map(arr => arr.reduce((max, curr) => curr>max? curr: max), 0);
}