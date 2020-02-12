export function findFriend(arr){
    let numberOfFriends=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==='red'){
            if(arr[i-1]!==null && arr[i-2]!=null && arr[i-1]==='blue' && arr[i-2]==='blue')
                numberOfFriends++;
            else if(arr[i-1]!==null && arr[i+1]!=null && arr[i-1]==='blue' && arr[i+1]==='blue')
                numberOfFriends++;
            else if(arr[i+1]!==null && arr[i+2]!=null && arr[i+1]==='blue' && arr[i+2]==='blue')
                numberOfFriends++;
        }
    }
    return numberOfFriends;
}