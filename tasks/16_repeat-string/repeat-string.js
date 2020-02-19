

export function repeatStringNumTimes(str, num) {

    if (num <= 0) return "";

    let ret = "";
    for (let i = 0; i < num; i++) {
        ret += str;
    }
    return ret;

}