export function arrayChunks(arr, size){
    var niz = [];
    
    while (arr.length) {
        niz.push(arr.splice(0, size));
    }
    
    return niz;
}