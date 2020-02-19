
export function arrayChunks(array, num) {

    if (num <= 1) return array;

    let ret = [];
    let numberOfElements = Math.floor(array.length / num);
    
    if (array.length % num != 0) numberOfElements++;

    for (let i = 0, index = 0; i < numberOfElements; i++) {
        ret.push(array.slice(index, index + num));
        index += num;
    }
    return ret;

}