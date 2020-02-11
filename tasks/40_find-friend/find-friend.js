export function findFriend(arr){
    let count = 0;

    if(arr[0] === 'red' && arr[1] === 'blue' && arr[2] === 'blue') count ++;
    if(arr[0] === 'blue' && arr[1] === 'red' && arr[2] === 'blue') count ++;
    for(let i = 2; i<arr.length - 2; i++){
        if(arr[i] === 'red'){
            if(arr[i-1] === 'blue' && arr[i-2] === 'blue'){
                count++;
                continue;
            }
            if(arr[i-1] === 'blue' && arr[i+1] === 'blue'){
                count++;
                continue;
            }
            if(arr[i+1] === 'blue' && arr[i+2] === 'blue'){
                count++;
                continue;
            }
        }
    }
    if(arr[arr.length -1] === 'red' && arr[arr.length -2] === 'blue' && arr[arr.length -3] === 'blue')count++;
    if(arr[arr.length -1] === 'blue' && arr[arr.length -2] === 'red' && arr[arr.length -3] === 'blue')count++;

    return count;
}
