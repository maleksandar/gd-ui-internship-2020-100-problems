export function arrayLeaders(arr){
    let niz = [];
    let leader=arr[arr.length-1];
    let zbir = 0;
    
    if(leader>0){
        niz.push(leader);
    }
    for(let i=arr.length-2; i>=0; i--){
        zbir+=arr[i+1];
        
        if(arr[i]>zbir){
            niz.push(arr[i]);
        }
    }
    return niz.reverse();
}