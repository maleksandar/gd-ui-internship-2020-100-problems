export function uniqueInOrder(arr){
    if(typeof arr==="string"){
        arr=arr.split('');
    }

    if(arr.length===0) return [];
    
    return arr.reduce((acc, curr) => {
        if(acc.slice(-1)[0] !== curr) acc.push(curr);
        return acc;
    }, [arr[0]]);
}