

export function maxTripletSum(array) {
    
    array = array.filter( (val, index) => 
        array.indexOf(val) === index
     );
    array = array.sort();
    let len = array.length;
    

    return array[len-1] + array[len-2] + array[len-3];


}