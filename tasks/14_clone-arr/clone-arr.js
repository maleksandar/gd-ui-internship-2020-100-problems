export function cloneArr(arr) {
    return arr.slice(0);


    /* 
    let clonnedArray = arr.map((item) => item);
    return clonnedArray; 
    */


    // return Array.from(arr);


    /*
    let clonnedArray = arr.reduce((newArray, item) => {
        newArray.push(item);
        return newArray;
    }, []);
    return clonnedArray;
    */

}