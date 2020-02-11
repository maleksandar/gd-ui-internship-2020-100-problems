

export function getIndexToInsert(array, number) {

    array = array.sort((first, second) => {if (first > second) return 1; else return -1}); 

    for (let i=0; i<array.length; i++) {
        
        if (number <= array[i]) return i;
       
    }
    return array.length;
}