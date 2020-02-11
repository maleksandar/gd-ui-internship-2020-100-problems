export function getNumbers(str){
    var numbers = str.match(/\d+/g).map(Number);
    return numbers;
}