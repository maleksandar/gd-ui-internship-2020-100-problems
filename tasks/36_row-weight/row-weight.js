
export function rowWeights(arr) {

    let ret = [];

    ret.push(0);
    ret.push(0);

    for (let i=0; i<arr.length; i++) {

        if (i % 2 == 0) ret[0]+=arr[i];
        else ret[1]+=arr[i];

    }

    return ret;

}