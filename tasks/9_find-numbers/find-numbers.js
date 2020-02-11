export function getNumbers(str){
    return str.match(/\d+/g).map(el => parseInt(el));
}