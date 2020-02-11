export function uniqueInOrder(str){
    return [].filter.call(str, (el ,i) => el != str[i+1]);
}