

export function findLongestWord(sentence) {

    let array = sentence.split(" ");

    return array.reduce((acc, val) => { return acc > val.length ? acc : val.length; }, 0);

}