export function maxTripletSum(arr){

    return arr.reduce((res, curr) => {
        if(res.indexOf(curr) === -1 && res.length === 3){
            for(let i = 0; i< res.length; i++){
                if(res[i] < curr){
                    res[i] = curr;
                    break;
                }
            }
        }
        else if(res.indexOf(curr) === -1 && res.length < 3){
            res.push(curr);
        }
        return res;
    },[]).reduce((sum,curr) => sum += curr);
}