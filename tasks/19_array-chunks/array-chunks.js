export function arrayChunks(array, sizeOfChunk) {

    let niz = [];

    for (let i = 0; i < array.length; i += sizeOfChunk) {
        if (array.length < sizeOfChunk) {
            niz.push(array.slice(i));
        }
        else {
            niz.push(array.slice(i, i + sizeOfChunk));
        }
    }

    return niz;
}