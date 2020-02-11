

export function largestOfFour(array) {

    var ret = [];
    var i;
    for (i = 0; i<array.length; i++) {
        var subArray = array[i];
        ret.push( subArray.reduce( (acc, val) => {return val > acc?val:acc},Number.MIN_SAFE_INTEGER)  );
    }
    return ret;
}