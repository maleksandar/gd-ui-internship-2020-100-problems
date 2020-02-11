
export function arrayChunks(array, num) {

    if (num <= 1) return array;

    var ret = [];

    var index = 0;
    var numberOfElements = Math.floor(array.length/num);
    if (array.length % num != 0) numberOfElements++;
    
    var i;
    for (i=0; i<numberOfElements; i++) {
        ret.push(array.slice(index, index+num)) ;
        index+=num;
    }
    return ret;

}