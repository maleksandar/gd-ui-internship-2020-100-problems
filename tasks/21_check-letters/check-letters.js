export function checkLetters(arr){
    const lower = arr[0].toLowerCase();
    const searchLower = arr[1].toLowerCase()
    for(let i=0; i< searchLower.length; i++){
        if(lower.indexOf(searchLower[i]) === -1)return false;
    }
    return true;
}