export function repeatStringNumTimes(str, numTimes) {
    if (numTimes < 0) {
        return '';
    }
    
    return str.repeat(numTimes);
}