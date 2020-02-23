export function destroyer(array, ...arg){
    let copiedArray = array.filter((value) => {
        return arg.indexOf(value) === -1;
    });

    return copiedArray;
}