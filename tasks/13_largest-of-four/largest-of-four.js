export function largestOfFour(arr1){
    return arr1.map(el => el.reduce(function(max, curr){
        if(max > curr)return max;
        return curr;
    }, 0))    

}

